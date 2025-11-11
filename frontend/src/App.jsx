import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Layout from './components/layout/Layout'
import BookTrialModal from './components/features/BookTrialModal'
import Spinner from './components/ui/Spinner'

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Programs = lazy(() => import('./pages/Programs'))
const Membership = lazy(() => import('./pages/Membership'))
const Wellness = lazy(() => import('./pages/Wellness'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))

const App = () => {
  const [isBookTrialOpen, setIsBookTrialOpen] = useState(false)

  useEffect(() => {
    // Check if hash is #book-trial on mount
    if (window.location.hash === '#book-trial') {
      setIsBookTrialOpen(true)
    }

    // Listen for hash changes
    const handleHashChange = () => {
      setIsBookTrialOpen(window.location.hash === '#book-trial')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleCloseBookTrial = () => {
    setIsBookTrialOpen(false)
    // Remove hash from URL
    if (window.history.replaceState) {
      window.history.replaceState(null, null, ' ')
    }
  }

  return (
    <BrowserRouter>
      <Toaster position="top-right" toastOptions={{ duration: 3500 }} />
      <Layout>
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center"><Spinner /></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
      <BookTrialModal isOpen={isBookTrialOpen} onClose={handleCloseBookTrial} />
    </BrowserRouter>
  )
}

export default App
