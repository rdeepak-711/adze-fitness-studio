import { Link } from 'react-router-dom'
import Button from '../ui/Button'
import { CONTACT, NAV_LINKS, CTA_TARGET } from '../../utils/constants'

const Footer = () => (
  <footer className="bg-charcoal text-white">
    <div className="mx-auto grid max-w-6xl gap-6 sm:gap-8 px-4 sm:px-5 md:px-6 py-8 sm:py-10 md:py-12 sm:grid-cols-1 md:grid-cols-3">
      <div>
        <h3 className="text-base sm:text-lg font-semibold">Adze Fitness Studio</h3>
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-white/70">
          Train Together. Grow Stronger. Premium fitness community in Madipakkam, Chennai.
        </p>
        <Button as="a" href={CTA_TARGET} variant="light" className="mt-4 sm:mt-6 w-full sm:w-fit px-5 py-2 text-xs uppercase tracking-widest text-charcoal">
          Start Your Trial
        </Button>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-3 sm:mb-4">Explore</h4>
        <nav className="space-y-2.5 sm:space-y-3">
          {NAV_LINKS.filter((link) => link.path !== '/').map((link) => {
            // Icon mapping for each page
            const getIcon = (name) => {
              switch (name.toLowerCase()) {
                case 'about':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  )
                case 'programs':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-3.75v3.75m0 0v1.5m0-1.5h-1.5m1.5 0h1.5" />
                    </svg>
                  )
                case 'membership':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-4.875c-.621 0-1.125.504-1.125 1.125v3.375m6 0h.375a2.25 2.25 0 002.25-2.25V8.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.593m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h11.25c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>
                  )
                case 'wellness':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  )
                case 'testimonials':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                    </svg>
                  )
                case 'contact':
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  )
                default:
                  return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  )
              }
            }

            return (
              <Link
                key={link.path}
                to={link.path}
                className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white hover:translate-x-1 group"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-crimson/20">
                  {getIcon(link.name)}
                </div>
                <span className="font-medium">{link.name}</span>
              </Link>
            )
          })}
        </nav>
      </div>
      <div>
        <h4 className="text-sm font-semibold uppercase tracking-wide text-white/80 mb-3 sm:mb-4">Connect</h4>
        <ul className="space-y-3 sm:space-y-3.5">
          <li>
            <a 
              href={CONTACT.phoneHref} 
              className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white hover:translate-x-1 group"
              aria-label={`Call ${CONTACT.phone}`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-crimson/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.69a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">{CONTACT.phone}</div>
                <div className="text-xs text-white/50">Call us</div>
              </div>
            </a>
          </li>
          <li>
            <a 
              href={CONTACT.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white hover:translate-x-1 group"
              aria-label="Message on WhatsApp"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-green-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">Message on WhatsApp</div>
                <div className="text-xs text-white/50">Quick response</div>
              </div>
            </a>
          </li>
          <li>
            <a 
              href={CONTACT.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 text-sm text-white/70 transition hover:text-white hover:translate-x-1 group"
              aria-label="Follow on Instagram"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-pink-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-4.5-2.25a.75.75 0 00-.75.75v2.25a.75.75 0 001.5 0v-2.25a.75.75 0 00-.75-.75z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">@adzefitnesstudio</div>
                <div className="text-xs text-white/50">Follow us</div>
              </div>
            </a>
          </li>
          <li>
            <a 
              href="https://www.google.com/maps/place/Adze+Fitness+Studio/@12.9648698,80.1972382,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dc2a2d4a7f9:0x40a2852fde0ec6fc!8m2!3d12.9648698!4d80.1998131!16s%2Fg%2F11f2xmyl2w?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 text-sm text-white/70 transition hover:text-white hover:translate-x-1 group"
              aria-label="View location on Google Maps"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition group-hover:bg-blue-500/20 mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <div>
                <div className="font-medium">Visit Us</div>
                <div className="text-xs text-white/50 leading-relaxed">{CONTACT.address}</div>
              </div>
            </a>
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
