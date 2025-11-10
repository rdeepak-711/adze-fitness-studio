import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import Button from '../ui/Button'
import useScrollProgress from '../../hooks/useScrollProgress'
import { NAV_LINKS, CTA_TARGET } from '../../utils/constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const isScrolled = useScrollProgress()
  const location = useLocation()

  const handleNavigate = () => setIsOpen(false)

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b transition duration-300',
        isScrolled ? 'border-light-gray/60 bg-white/95 shadow-lg shadow-black/5 backdrop-blur' : 'border-transparent bg-white'
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link to="/" className="text-xl font-heading font-bold tracking-wide text-charcoal">
          Adze Fitness Studio
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={clsx(
                'text-charcoal transition hover:text-crimson',
                location.pathname === link.path ? 'text-crimson' : undefined
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button as="a" href={CTA_TARGET} className={clsx(isScrolled && 'shadow-crimson/40')}>Book a Trial</Button>
        </nav>
        <button
          type="button"
          className="rounded-full border border-charcoal/20 p-2 text-charcoal transition hover:border-crimson/40 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle navigation</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      {isOpen ? (
        <div className="md:hidden">
          <div className="space-y-4 border-t border-light-gray bg-white px-4 py-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block text-lg font-medium text-charcoal"
                onClick={handleNavigate}
              >
                {link.name}
              </Link>
            ))}
            <Button as="a" href={CTA_TARGET} className="w-full" onClick={handleNavigate}>
              Book a Trial
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  )
}

export default Navbar
