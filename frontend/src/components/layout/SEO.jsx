import { useEffect } from 'react'

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
const SITE_NAME = 'Adze Fitness Studio'
const DEFAULT_TITLE = `${SITE_NAME} | Train Together. Grow Stronger.`
const DEFAULT_DESCRIPTION = 'Premium gym and fitness community in Madipakkam, Chennai. Explore programs, transformations, and book your free trial.'
const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80'
const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://adzefitnessstudio.com'

const updateMetaTag = (name, content, attribute = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, name)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
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

const SEO = ({ title, description, image, type = 'website', keywords }) => {
  const fullTitle = title ? `${title} • ${SITE_NAME}` : DEFAULT_TITLE
  const metaDescription = description || DEFAULT_DESCRIPTION
  const metaImage = image || DEFAULT_IMAGE

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
    updateMetaTag('author', SITE_NAME)
    updateMetaTag('robots', 'index,follow')

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
      '@type': type === 'website' ? 'Gym' : 'WebPage',
      name: SITE_NAME,
      description: metaDescription,
      url: currentUrl,
      image: metaImage,
      address: {
        '@type': 'PostalAddress',
        streetAddress: '11 Kakkan Street',
        addressLocality: 'Madipakkam',
        addressRegion: 'Chennai',
        postalCode: '600091',
        addressCountry: 'IN'
      },
      telephone: '+91-93426-24788',
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '05:30',
          closes: '22:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '06:00',
          closes: '21:00'
        }
      ],
      sameAs: [
        'https://instagram.com/adzefitnesstudio',
        'https://wa.me/919342624788'
      ]
    }

    structuredData.textContent = JSON.stringify(jsonLd)
  }, [title, description, image, type, keywords, fullTitle, metaDescription, metaImage])

  return null
}

export default SEO
