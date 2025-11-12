import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'
import { SEO_CONFIG } from '../src/utils/seoConfig.js'
import { SITE_NAME, SITE_TAGLINE, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, CONTACT, OPENING_HOURS } from '../src/utils/constants.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DIST_DIR = path.resolve(__dirname, '../dist')
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html')
const HEAD_START = '<!--ssr-head-start-->'
const HEAD_END = '<!--ssr-head-end-->'

const ensureTrailingSlash = (value) => (value.endsWith('/') ? value : `${value}/`)
const canonicalBase = ensureTrailingSlash(SITE_URL)

const escapeAttribute = (value = '') => value.replace(/"/g, '&quot;')

const buildJsonLd = ({ type, description, image, canonical, author, publishDate }) => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': type === 'article' ? 'Article' : type === 'website' ? 'Gym' : 'WebPage',
    name: SITE_NAME,
    description: description || DEFAULT_DESCRIPTION,
    url: canonical,
    image: image || DEFAULT_IMAGE,
    author: author
      ? {
          '@type': 'Person',
          name: author
        }
      : undefined,
    datePublished: publishDate || undefined,
    dateModified: publishDate || undefined,
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.addressParts.street,
      addressLocality: CONTACT.addressParts.locality,
      addressRegion: CONTACT.addressParts.region,
      postalCode: CONTACT.addressParts.postalCode,
      addressCountry: CONTACT.addressParts.country
    },
    telephone: CONTACT.phoneFormatted,
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.weekdays.days,
        opens: OPENING_HOURS.weekdays.opens,
        closes: OPENING_HOURS.weekdays.closes
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: OPENING_HOURS.saturday.day,
        opens: OPENING_HOURS.saturday.opens,
        closes: OPENING_HOURS.saturday.closes
      }
    ],
    sameAs: [CONTACT.instagram, CONTACT.whatsapp]
  }

  return JSON.stringify(jsonLd)
}

const buildHeadMarkup = (routePath, meta = {}) => {
  const {
    title,
    description = DEFAULT_DESCRIPTION,
    keywords,
    image = DEFAULT_IMAGE,
    type = 'website',
    author = SITE_NAME,
    publishDate
  } = meta

  const fullTitle = title ? `${title} • ${SITE_NAME}` : `${SITE_NAME} | ${SITE_TAGLINE}`
  const trimmedPath = routePath === '/' ? '' : routePath.replace(/^\//, '').replace(/\/$/, '')
  let normalizedCanonical = `${canonicalBase}${trimmedPath}`
  if (routePath !== '/' && !normalizedCanonical.endsWith('/')) {
    normalizedCanonical += '/'
  }

  const jsonLd = buildJsonLd({
    type,
    description,
    image,
    canonical: normalizedCanonical,
    author,
    publishDate
  })

  const lines = [
    `<title>${escapeAttribute(fullTitle)}</title>`,
    `<meta name="description" content="${escapeAttribute(description)}" />`,
    `<meta name="author" content="${escapeAttribute(author)}" />`,
    `<meta name="robots" content="index,follow" />`,
    keywords ? `<meta name="keywords" content="${escapeAttribute(keywords)}" />` : null,
    `<meta property="og:type" content="${escapeAttribute(type)}" />`,
    `<meta property="og:site_name" content="${escapeAttribute(SITE_NAME)}" />`,
    `<meta property="og:title" content="${escapeAttribute(fullTitle)}" />`,
    `<meta property="og:description" content="${escapeAttribute(description)}" />`,
    `<meta property="og:url" content="${escapeAttribute(normalizedCanonical)}" />`,
    `<meta property="og:image" content="${escapeAttribute(image)}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="article:author" content="${escapeAttribute(author)}" />`,
    publishDate ? `<meta property="article:published_time" content="${escapeAttribute(publishDate)}" />` : null,
    publishDate ? `<meta property="article:modified_time" content="${escapeAttribute(publishDate)}" />` : null,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttribute(fullTitle)}" />`,
    `<meta name="twitter:description" content="${escapeAttribute(description)}" />`,
    `<meta name="twitter:image" content="${escapeAttribute(image)}" />`,
    `<meta name="twitter:creator" content="${escapeAttribute(author)}" />`,
    `<link rel="canonical" href="${escapeAttribute(normalizedCanonical)}" />`,
    `<script type="application/ld+json">${jsonLd}</script>`
  ].filter(Boolean)

  return `${HEAD_START}\n    ${lines.join('\n    ')}\n    ${HEAD_END}`
}

const writeRouteFile = async (routePath, html) => {
  if (routePath === '/') {
    await fs.writeFile(path.join(DIST_DIR, 'index.html'), html, 'utf-8')
    return
  }

  if (routePath === '/404') {
    await fs.writeFile(path.join(DIST_DIR, '404.html'), html, 'utf-8')
    return
  }

  const routeDir = path.join(DIST_DIR, routePath.replace(/^\//, ''))
  await fs.mkdir(routeDir, { recursive: true })
  await fs.writeFile(path.join(routeDir, 'index.html'), html, 'utf-8')
}

const prerender = async () => {
  try {
    const template = await fs.readFile(TEMPLATE_PATH, 'utf-8')
    const headRegex = /<!--ssr-head-start-->[\s\S]*?<!--ssr-head-end-->/

    for (const [routePath, meta] of Object.entries(SEO_CONFIG)) {
      if (!headRegex.test(template)) {
        throw new Error('The template is missing SSR head markers.')
      }

      const headMarkup = buildHeadMarkup(routePath, meta)
      const html = template.replace(headRegex, headMarkup)
      await writeRouteFile(routePath, html)
    }

    console.log('✅ Prerendered static HTML with page-specific metadata')
  } catch (error) {
    console.error('❌ Failed to prerender pages:', error)
    process.exit(1)
  }
}

prerender()
