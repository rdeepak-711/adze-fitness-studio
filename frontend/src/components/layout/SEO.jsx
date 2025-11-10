import { useEffect } from 'react'

const DEFAULT_TITLE = 'Adze Fitness Studio | Train Together. Grow Stronger.'
const DEFAULT_DESCRIPTION = 'Premium gym and fitness community in Madipakkam, Chennai. Explore programs, transformations, and book your free trial.'

const SEO = ({ title, description }) => {
  useEffect(() => {
    const previousTitle = document.title
    const previousDescription = document.querySelector('meta[name="description"]')?.getAttribute('content')

    document.title = title ? `${title} • Adze Fitness Studio` : DEFAULT_TITLE

    const meta = document.querySelector('meta[name="description"]') || (() => {
      const tag = document.createElement('meta')
      tag.setAttribute('name', 'description')
      document.head.appendChild(tag)
      return tag
    })()

    meta.setAttribute('content', description || DEFAULT_DESCRIPTION)

    return () => {
      document.title = previousTitle
      if (previousDescription) {
        meta.setAttribute('content', previousDescription)
      }
    }
  }, [title, description])

  return null
}

export default SEO
