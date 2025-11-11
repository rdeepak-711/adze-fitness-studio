import ScrollToTop from '../features/ScrollToTop'
import WhatsAppFAB from '../features/WhatsAppFAB'
import BackToTop from '../features/BackToTop'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-white text-charcoal">
    <ScrollToTop />
    <Navbar />
    <main className="flex-1" role="main" aria-label="Main content">
      {children}
    </main>
    <Footer />
    <WhatsAppFAB />
    <BackToTop />
  </div>
)

export default Layout
