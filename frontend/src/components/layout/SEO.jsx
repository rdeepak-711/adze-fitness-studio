import { useEffect } from 'react'
import { SITE_NAME, SITE_TAGLINE, SITE_URL, DEFAULT_DESCRIPTION, DEFAULT_IMAGE, CONTACT, OPENING_HOURS } from '../../utils/constants'

/**
 * SEO Component
 * 
 * Dynamically sets page meta tags, Open Graph tags, Twitter Cards, and JSON-LD structured data.
 * This component should be included in every page component.
 * 
 * @param {Object} props
 * @param {string} props.title - Page title (will be appended to site name)
 * @param {string} props.description - Meta description for SEO
 * @param {string} [props.image] - Open Graph image URL (optional)
 * @param {string} [props.type] - Schema.org type (default: 'website')
 * @param {string} [props.keywords] - Meta keywords (optional)
 * 
 * @example
 * <SEO
 *   title="About Us"
 *   description="Learn about our fitness studio"
 *   keywords="fitness, gym, training"
 * />
 */
const DEFAULT_TITLE = `${SITE_NAME} | ${SITE_TAGLINE}`

const updateMetaTag = (name, content, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

const removeMetaTag = (name, attribute = 'name') => {
  const element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (element) {
    element.parentNode.removeChild(element)
  }
}

const updateLinkTag = (rel, href) => {
  let element = document.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

const SEO = ({ title, description, image, type = 'website', keywords, author, publishDate }) => {
  const fullTitle = title ? `${title} • ${SITE_NAME}` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const metaImage = image || DEFAULT_IMAGE
  const authorName = author || SITE_NAME
  const publishedTime = publishDate || null

  useEffect(() => {
    // Get current pathname from window.location (works with both client-side routing and direct navigation)
    const pathname = typeof window !== 'undefined' ? window.location.pathname : '/'
    const currentUrl = `${SITE_URL}${pathname}`
    // Update document title
    document.title = fullTitle

    // Basic meta tags
    updateMetaTag('description', metaDescription)
    if (keywords) {
      updateMetaTag('keywords', keywords)
    }
    updateMetaTag('author', authorName)
    updateMetaTag('robots', 'index,follow')
    if (authorName) {
      updateMetaTag('article:author', authorName, 'property')
      updateMetaTag('twitter:creator', authorName)
    } else {
      removeMetaTag('article:author', 'property')
      removeMetaTag('twitter:creator')
    }
    if (publishedTime) {
      updateMetaTag('article:published_time', publishedTime, 'property')
      updateMetaTag('article:modified_time', publishedTime, 'property')
    } else {
      removeMetaTag('article:published_time', 'property')
      removeMetaTag('article:modified_time', 'property')
    }

    // Open Graph tags
    updateMetaTag('og:type', type, 'property')
    updateMetaTag('og:site_name', SITE_NAME, 'property')
    updateMetaTag('og:title', fullTitle, 'property')
    updateMetaTag('og:description', metaDescription, 'property')
    updateMetaTag('og:url', currentUrl, 'property')
    updateMetaTag('og:image', metaImage, 'property')
    updateMetaTag('og:image:width', '1200', 'property')
    updateMetaTag('og:image:height', '630', 'property')

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', metaDescription)
    updateMetaTag('twitter:image', metaImage)

    // Canonical URL
    updateLinkTag('canonical', currentUrl)

    // Structured Data (JSON-LD)
    let structuredData = document.querySelector('script[type="application/ld+json"]')
    if (!structuredData) {
      structuredData = document.createElement('script')
      structuredData.setAttribute('type', 'application/ld+json')
      document.head.appendChild(structuredData)
    }

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': type === 'article' ? 'Article' : type === 'website' ? 'Gym' : 'WebPage',
      name: SITE_NAME,
      description: metaDescription,
      url: currentUrl,
      image: metaImage,
      author: authorName
        ? {
            '@type': 'Person',
            name: authorName
          }
        : undefined,
      datePublished: publishedTime || undefined,
      dateModified: publishedTime || undefined,
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
      sameAs: [
        CONTACT.instagram,
        CONTACT.whatsapp
      ]
    }

    structuredData.textContent = JSON.stringify(jsonLd)
  }, [title, description, image, type, keywords, authorName, publishedTime, fullTitle, metaDescription, metaImage])

  return null
}

export default SEO
