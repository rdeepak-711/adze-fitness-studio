// Site Information
export const SITE_NAME = 'Adze Fitness Studio'
export const SITE_TAGLINE = 'Train Together. Grow Stronger.'
export const SITE_URL = typeof window !== 'undefined' ? window.location.origin : 'https://adzefitnessstudio.com'
export const DEFAULT_DESCRIPTION = 'Premium gym and fitness community in Madipakkam, Chennai. Explore programs, transformations, and book your free trial.'
export const DEFAULT_IMAGE = 'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=1200&q=80'

// Contact Information
export const CONTACT = {
  phone: '+91 93426 24788',
  phoneFormatted: '+91-93426-24788',
  phoneHref: 'tel:+919342624788',
  phoneNumber: '919342624788',
  whatsapp: 'https://wa.me/919342624788',
  instagram: 'https://instagram.com/adzefitnesstudio',
  instagramHandle: '@adzefitnesstudio',
  address: '11 Kakkan Street, Madipakkam, Chennai - 600091',
  addressParts: {
    street: '11 Kakkan Street',
    locality: 'Madipakkam',
    region: 'Chennai',
    postalCode: '600091',
    country: 'IN'
  },
  googleMapsUrl: 'https://www.google.com/maps/place/Adze+Fitness+Studio/@12.9648698,80.1972382,17z/data=!3m1!4b1!4m6!3m5!1s0x3a525dc2a2d4a7f9:0x40a2852fde0ec6fc!8m2!3d12.9648698!4d80.1998131!16s%2Fg%2F11f2xmyl2w?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D'
}

// Opening Hours
export const OPENING_HOURS = {
  weekdays: {
    opens: '05:30',
    closes: '22:00',
    days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  },
  saturday: {
    opens: '06:00',
    closes: '21:00',
    day: 'Saturday'
  },
  sunday: {
    note: 'Community events & recovery'
  }
}

// Navigation Links
export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Programs', path: '/programs' },
  { name: 'Membership', path: '/membership' },
  { name: 'Wellness', path: '/wellness' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' }
]

// CTA Configuration
export const CTA_TARGET = '#book-trial'
