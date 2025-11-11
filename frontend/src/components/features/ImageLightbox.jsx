import { createPortal } from 'react-dom'
import { useEffect, useState } from 'react'

const portalRoot = typeof document !== 'undefined' ? document.body : null

const ImageLightbox = ({ isOpen, onClose, image, images = [], currentIndex = 0, onNavigate }) => {
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)
  const [index, setIndex] = useState(currentIndex)

  const minSwipeDistance = 50

  useEffect(() => {
    setIndex(currentIndex)
  }, [currentIndex])

  useEffect(() => {
    if (!isOpen) return

    const handlePrevious = () => {
      if (images.length === 0) return
      const newIndex = index > 0 ? index - 1 : images.length - 1
      setIndex(newIndex)
      onNavigate?.(newIndex)
    }

    const handleNext = () => {
      if (images.length === 0) return
      const newIndex = index < images.length - 1 ? index + 1 : 0
      setIndex(newIndex)
      onNavigate?.(newIndex)
    }

    const onKey = (event) => {
      if (event.key === 'Escape') {
        onClose?.()
      } else if (images.length > 0) {
        if (event.key === 'ArrowLeft') {
          handlePrevious()
        } else if (event.key === 'ArrowRight') {
          handleNext()
        }
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose, images.length, index, onNavigate])

  const handlePrevious = () => {
    if (images.length === 0) return
    const newIndex = index > 0 ? index - 1 : images.length - 1
    setIndex(newIndex)
    onNavigate?.(newIndex)
  }

  const handleNext = () => {
    if (images.length === 0) return
    const newIndex = index < images.length - 1 ? index + 1 : 0
    setIndex(newIndex)
    onNavigate?.(newIndex)
  }

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && images.length > 0) {
      handleNext()
    } else if (isRightSwipe && images.length > 0) {
      handlePrevious()
    }
  }

  if (!portalRoot || !isOpen || !image) return null

  const displayImage = images.length > 0 ? images[index] : image

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        className="absolute right-6 top-6 text-white transition hover:text-crimson z-10"
        onClick={onClose}
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      {images.length > 1 && (
        <>
          <button
            type="button"
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white transition hover:text-crimson z-10"
            onClick={handlePrevious}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white transition hover:text-crimson z-10"
            onClick={handleNext}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-8 w-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                }`}
                onClick={() => {
                  setIndex(i)
                  onNavigate?.(i)
                }}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
      <img src={displayImage.src} alt={displayImage.alt} className="max-h-[80vh] max-w-4xl rounded-3xl object-contain" />
      {displayImage.caption ? (
        <p className="absolute bottom-16 max-w-2xl text-center text-sm text-white/80">
          {displayImage.caption}
        </p>
      ) : null}
    </div>,
    portalRoot
  )
}

export default ImageLightbox
