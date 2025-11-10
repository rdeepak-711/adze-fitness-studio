import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const portalRoot = typeof document !== 'undefined' ? document.body : null

const ImageLightbox = ({ isOpen, onClose, image }) => {
  useEffect(() => {
    if (!isOpen) return

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!portalRoot || !isOpen || !image) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6">
      <button
        type="button"
        className="absolute right-6 top-6 text-white transition hover:text-crimson"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <img src={image.src} alt={image.alt} className="max-h-[80vh] max-w-4xl rounded-3xl object-contain" />
      {image.caption ? (
        <p className="absolute bottom-10 max-w-2xl text-center text-sm text-white/80">
          {image.caption}
        </p>
      ) : null}
    </div>,
    portalRoot
  )
}

export default ImageLightbox
