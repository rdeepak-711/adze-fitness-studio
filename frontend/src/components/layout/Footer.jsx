import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { CONTACT, NAV_LINKS, CTA_TARGET } from '../../utils/constants'

const Footer = () => (
  <footer className="bg-charcoal text-white">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
      <div>
        <h3 className="text-lg font-semibold">Adze Fitness Studio</h3>
        <p className="mt-3 text-sm text-white/70">
          Train Together. Grow Stronger. Premium fitness community in Madipakkam, Chennai.
        </p>
        <Button as="a" href={CTA_TARGET} variant="light" className="mt-6 w-fit px-5 py-2 text-xs uppercase tracking-widest text-charcoal">
          Start Your Trial
        </Button>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Explore</h4>
        <nav className="mt-3 grid grid-cols-1 gap-2 text-sm text-white/70">
          {NAV_LINKS.filter((link) => link.path !== '/').map((link) => (
            <Link key={link.path} to={link.path} className="transition hover:text-white">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80">Connect</h4>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          <li>
            <a href={CONTACT.phoneHref} className="transition hover:text-white">
              📞 {CONTACT.phone}
            </a>
          </li>
          <li>
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              💬 Message on WhatsApp
            </a>
          </li>
          <li>
            <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
              📷 Instagram @adzefitnesstudio
            </a>
          </li>
          <li>
            <span>📍 {CONTACT.address}</span>
          </li>
        </ul>
      </div>
    </div>
    <div className="border-t border-white/10 bg-charcoal/90 py-4 text-center text-xs text-white/60">
      © {new Date().getFullYear()} Adze Fitness Studio. All rights reserved.
    </div>
  </footer>
)

export default Footer
