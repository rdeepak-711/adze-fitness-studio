import { useEffect, useState } from 'react'

const BackToTop = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <button
      type="button"
      aria-label="Back to top"
      className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40 rounded-full bg-charcoal p-2.5 sm:p-3 text-white shadow-lg shadow-black/40 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-black/60 min-h-[44px] min-w-[44px] touch-manipulation"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  )
}

export default BackToTop
