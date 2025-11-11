import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import BookTrialForm from './BookTrialForm'
import { CONTACT } from '../../utils/constants'

const portalRoot = typeof document !== 'undefined' ? document.body : null

const BookTrialModal = ({ isOpen, onClose }) => {
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

  if (!portalRoot || !isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
      // Remove hash from URL
      if (window.history.replaceState) {
        window.history.replaceState(null, null, ' ')
      }
    }
  }

  const handleClose = () => {
    onClose()
    // Remove hash from URL
    if (window.history.replaceState) {
      window.history.replaceState(null, null, ' ')
    }
  }

      return createPortal(
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 sm:p-4 backdrop-blur-sm animate-fade-in"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-2xl rounded-2xl sm:rounded-3xl bg-white shadow-2xl animate-scale-in max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              className="absolute right-4 top-4 sm:right-6 sm:top-6 text-charcoal/60 transition hover:text-crimson z-10"
              onClick={handleClose}
              aria-label="Close modal"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 sm:h-6 sm:w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-5 sm:p-6 md:p-8 lg:p-12">
              <div className="mb-6 sm:mb-8 text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading">Book Your Free Trial</h2>
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-charcoal/70">
                  Experience the Adze difference with zero commitment. Fill out the form below and our team will reach out to schedule your trial session.
                </p>
              </div>

          <BookTrialForm onSuccess={handleClose} />

          <div className="mt-8 border-t border-light-gray pt-6">
            <p className="text-center text-sm text-charcoal/60">
              Or reach us directly:{' '}
              <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="font-medium text-crimson hover:underline">
                Message on WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>,
    portalRoot
  )
}

export default BookTrialModal

