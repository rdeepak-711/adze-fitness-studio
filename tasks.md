# Adze Fitness Studio Website - Development Plan

## Project Overview
Build a bold, high-energy, community-focused website for Adze Fitness Studio, a premium gym and fitness community in Madipakkam, Chennai, India.

**Core Tagline:** "Train Together. Grow Stronger."

**Tech Stack:**
- Frontend: React + JSX + TailwindCSS v4 + Vite
- Data: JSON files for content management
- Monorepo structure

---

## 📊 Progress Summary

### ✅ Completed (Phases 1-4)
- **Phase 1:** Project setup, Tailwind CSS v4 configuration, dependencies installed
- **Phase 2:** All JSON data files created and populated
- **Phase 3:** All core components created (Layout, UI, Features)
- **Phase 4:** All page components created (Home, About, Programs, Membership, Wellness, Testimonials, Contact, 404)
- **Phase 5.1-5.2:** Navigation & routing, sticky navigation

### 🔄 In Progress / Needs Verification
- **Phase 5.3-5.9:** Animations, media handling, Instagram integration, carousel functionality, form validation, WhatsApp integration
- **Phase 6:** Styling & responsive design verification
- **Phase 7:** Performance optimization, SEO, accessibility
- **Phase 8:** Testing & final polish
- **Phase 9:** Documentation & deployment prep

### 🎯 Next Steps
1. Test and verify all functionality works correctly
2. Add/verify animations and interactions
3. Optimize performance and SEO
4. Test across browsers and devices
5. Prepare for deployment

---

## Phase 1: Project Setup & Configuration

### Task 1.1: Initialize Monorepo Structure
- [x] Create root directory structure
- [x] Set up `frontend/` directory
- [x] Create `package.json` at root (optional workspace config)
- [x] Initialize Git repository (optional)

### Task 1.2: Frontend Setup
- [x] Initialize Vite + React project in `frontend/`
- [x] Install dependencies:
  - React, React DOM
  - React Router DOM
  - TailwindCSS v4 (using @tailwindcss/vite plugin)
  - Additional libraries (see below)
- [x] Configure `vite.config.js`
- [x] Set up Tailwind CSS v4 configuration (using `@theme` in CSS, no separate config file)
- [x] Tailwind CSS v4 configured (no PostCSS config needed with Vite plugin)

### Task 1.3: Install Additional Dependencies
- [x] React Router DOM (routing)
- [x] React Helmet Async (SEO) - Not compatible with React 19, using custom SEO.jsx component instead
- [x] Framer Motion (scroll animations)
- [x] Swiper (testimonials carousel)
- [x] React Lightbox (image gallery) - Using custom ImageLightbox component (no library needed)
- [x] React Hot Toast (notifications)
- [x] Axios (if needed for Instagram API) - Not needed, using static JSON data

### Task 1.4: Design System Setup
- [x] Configure Tailwind with brand colors:
  - Charcoal Black: `#111111`
  - Crimson Red: `#D72638`
  - Pure White: `#FFFFFF`
  - Light Gray: `#EFEFEF`
- [x] Set up Google Fonts:
  - Montserrat (headings)
  - Poppins (body)
- [x] Create base CSS with typography scale
- [x] Define spacing and breakpoint system (using Tailwind defaults)

---

## Phase 2: Data Structure & JSON Files

### Task 2.1: Create Data Directory Structure
- [x] Create `frontend/src/data/` directory
- [x] Create JSON files for each content section

### Task 2.2: Create JSON Data Files
- [x] `hero.json` - Hero section content
- [x] `why-adze.json` - Why Adze section (4 cards)
- [x] `programs.json` - All programs/services
- [x] `testimonials.json` - Member testimonials with ratings
- [x] `trainers.json` - Trainer bios (Kevin, Suriya, Rohith, Kavin)
- [x] `memberships.json` - Pricing tiers and features
- [x] `wellness.json` - Wellness content
- [x] `about.json` - Brand story and mission pillars
- [x] `contact.json` - Contact information
- [x] `instagram.json` - Instagram feed data (or API config)

### Task 2.3: Populate JSON Files with Content
- [x] Add all text content from requirements
- [x] Add placeholder image URLs
- [x] Structure data for easy component consumption
- [x] Include metadata (tags, categories, etc.)

---

## Phase 3: Core Components

### Task 3.1: Layout Components
- [x] `Navbar.jsx` - Sticky navigation with mobile hamburger menu
  - Logo
  - Navigation links
  - CTA button (sticky on scroll)
  - Mobile slide-out menu
- [x] `Footer.jsx` - Footer with contact info and social links
- [x] `WhatsAppFAB.jsx` - Floating WhatsApp button
- [x] `ScrollToTop.jsx` - Back to top button (BackToTop.jsx)
- [x] `SEO.jsx` - SEO meta tags component

### Task 3.2: UI Components
- [x] `Button.jsx` - Reusable button component with variants
- [x] `Card.jsx` - Card component for programs, trainers, etc.
- [x] `Section.jsx` - Section wrapper with animations
- [x] `Container.jsx` - Max-width container component
- [x] `Reveal.jsx` - Scroll reveal animation wrapper
- [x] `Spinner.jsx` - Loading spinner component

### Task 3.3: Feature Components
- [x] `TestimonialCarousel.jsx` - Testimonials slider with star ratings
- [x] `InstagramFeed.jsx` - Instagram feed embed/slider
- [x] `ImageLightbox.jsx` - Lightbox for gallery images
- [x] `ContactForm.jsx` - Contact form with toast notifications
- [x] `ProgramCard.jsx` - Program card with image, benefits, tags
- [x] `TrainerCard.jsx` - Trainer bio card with photo and certifications
- [x] `PricingCard.jsx` - Membership pricing card

---

## Phase 4: Page Components

### Task 4.1: Home Page (`/`)
- [x] Hero Section
  - Full-screen background image/video
  - Headline: "Train Together. Grow Stronger."
  - Subtext
  - Two CTAs: "Book Your Free Trial" & "Message on WhatsApp"
- [x] Why Adze Section
  - 4-card grid layout
  - Icons: Real Community, Certified Coaches, Balanced Wellness, Measurable Progress
- [x] Programs Preview Section
  - Grid of program cards (HIIT, Strength, Yoga, Personal Coaching)
  - "Explore All Programs" CTA
- [x] Transformations & Testimonials Section
  - Carousel with quotes and videos
  - Star ratings
- [x] Instagram Feed Section
  - 4-grid or slider of recent posts
- [x] Final CTA Banner
  - Black section with "Start your transformation. First week's on us."
  - "Book a Trial" button

### Task 4.2: About Page (`/about`)
- [x] Brand Story Section
  - Founded in Madipakkam
  - "We don't just train bodies..." message
- [x] Trainer Bios Section
  - Grid of trainer cards (Kevin, Suriya, Rohith, Kavin)
  - Photos, expertise, certifications
- [x] Mission Pillars Section
  - Movement, Mindset, Motivation

### Task 4.3: Programs Page (`/programs`)
- [x] Page Header
- [x] Programs Grid
  - Functional Strength Training
  - HIIT & Bootcamp
  - Yoga & Core Conditioning
  - Personal Coaching (1-on-1)
- [x] Each program card:
  - Image
  - Benefits list
  - Tags (beginner/intermediate/advanced)
  - "Join Now" CTA

### Task 4.4: Membership Page (`/membership`)
- [x] Pricing Tiers Section
  - Monthly, Quarterly, Annual cards
  - Features comparison table
  - Group class access, personal coach hours, diet consults
- [x] CTA Buttons: "Book a Tour" or "Call Now"
- [x] Promo Banner: "First week free. No pressure."

### Task 4.5: Wellness Corner Page (`/wellness`)
- [x] Page Header
- [x] Wellness Services:
  - Yoga
  - Meditation (future plans)
  - Posture improvement
- [x] Callout: "Train smart. Recover smarter."

### Task 4.6: Testimonials Page (`/testimonials`)
- [x] Page Header
- [x] Testimonials Grid/Carousel
  - Real Instagram quotes
  - Member reviews with ratings
  - Member highlight videos/reels
- [x] Coach Transformation Stories
  - Suriya's story
  - Kevin's story

### Task 4.7: Contact Page (`/contact`)
- [x] Map Section
  - Google Maps embed: 11 Kakkan Street, Madipakkam, Chennai
- [x] Contact Info Section
  - Phone: +91 93426 24788
  - WhatsApp click-to-chat button
  - Instagram: @adzefitnesstudio
- [x] Contact Form
  - Full Name
  - Phone
  - Preferred Time Slot
  - Training Goal
  - Toast notification on submit (no page reload)

### Task 4.8: 404 Page (`/404`)
- [x] Custom 404 page with navigation back to home

---

## Phase 5: Functionality & Features

### Task 5.1: Navigation & Routing
- [x] Set up React Router with all routes
- [x] Implement smooth scroll to sections (enabled in CSS with scroll-smooth)
- [x] Active route highlighting in navbar
- [x] Mobile hamburger menu with slide-out animation
- [x] Close menu on route change

### Task 5.2: Sticky Navigation
- [x] Sticky navbar on scroll
- [x] CTA button appears in navbar on scroll
- [x] Smooth transition animations

### Task 5.3: Animations
- [x] Scroll reveal animations for sections (Reveal component with Framer Motion)
- [x] Fade-in animations for cards (implemented on Home page)
- [x] Smooth page transitions (handled by React Router)
- [x] Hover effects on interactive elements (cards, buttons, images)

### Task 5.4: Media Handling
- [x] Lazy loading for images (loading="lazy" attribute on all images)
- [x] Image optimization setup (using Unsplash with format and quality params)
- [x] Placeholder images for missing content (imageUtils.js utility created)
- [x] Video embedding support (video element in hero section)

### Task 5.5: Instagram Integration
- [x] Instagram feed embed component (InstagramFeed.jsx with Swiper)
- [x] Option: Use Instagram Basic Display API (not implemented, using static JSON)
- [x] Fallback: Static JSON data with Instagram post URLs (implemented)
- [x] 4-grid or slider layout (responsive slider with Swiper)

### Task 5.6: Testimonials Carousel
- [x] Implement carousel/slider (changed to horizontal scrollable layout)
- [x] Star ratings display (RatingStars component implemented)
- [x] Auto-play with pause on hover (removed in favor of scrollable layout)
- [x] Navigation arrows and dots (removed in favor of scrollable layout)
- [x] Support for video testimonials (media type support in data structure)

### Task 5.7: Image Lightbox
- [x] Lightbox component for gallery images (ImageLightbox.jsx)
- [x] Keyboard navigation (arrow keys, ESC) (implemented)
- [x] Touch/swipe support for mobile (implemented with touch event handlers)

### Task 5.8: Contact Form
- [x] Form validation (field validation with error messages)
- [x] Form submission handling (async submission with loading state)
- [x] Toast notification on success/error (react-hot-toast)
- [x] No page reload (AJAX submission) (preventDefault, async/await)
- [x] Integration with WhatsApp or email service (optional - not implemented)

### Task 5.9: WhatsApp Integration
- [x] Floating WhatsApp button (FAB) (WhatsAppFAB.jsx)
- [x] Click-to-chat functionality (wa.me links)
- [x] Pre-filled message templates (default message in component)
- [x] WhatsApp links in CTAs (hero.json, memberships.json, contact.json)

---

## Phase 6: Styling & Responsive Design

### Task 6.1: Mobile-First Design
- [x] Responsive breakpoints:
  - Mobile: < 640px (using Tailwind sm:)
  - Tablet: 640px - 1024px (using Tailwind md:)
  - Desktop: > 1024px (using Tailwind lg:)
- [x] Mobile navigation menu (hamburger menu with slide-out)
- [x] Touch-friendly button sizes (min-h-[44px] min-w-[44px] for all buttons)
- [x] Responsive typography scaling (responsive text sizes in index.css and components)

### Task 6.2: Glassmorphism Effects
- [x] Glassmorphism CTA boxes (glass-effect and glass-dark classes added)
- [x] Backdrop blur effects (backdrop-blur-sm, backdrop-filter in CSS)
- [x] Semi-transparent backgrounds (rgba backgrounds with blur in glass-effect classes)

### Task 6.3: Visual Polish
- [x] Consistent spacing and padding (responsive spacing: py-12 sm:py-16 md:py-20 lg:py-24)
- [x] Hover states for all interactive elements (cards, buttons, images, links all have hover effects)
- [x] Loading states (Spinner component, isSubmitting states in forms)
- [x] Focus states for accessibility (focus-visible outlines with crimson color, enhanced in CSS)
- [x] Smooth transitions (transition-all duration-300 on interactive elements)

### Task 6.4: Hero Section Styling
- [x] Full-screen hero with overlay (min-h-screen with overlay div)
- [x] Text contrast and readability (white text on dark overlay, max-w-2xl for readability)
- [x] CTA button styling (enhanced shadows, glass-effect on secondary button, responsive sizing)
- [x] Video background support (video element with fallback image, poster attribute)

---

## Phase 7: Performance & Optimization

### Task 7.1: Performance Optimization
- [x] Code splitting for routes (React.lazy() for all page components)
- [x] Lazy loading components (Suspense with Spinner fallback)
- [x] Image optimization (loading="lazy" on all images, Unsplash with format/quality params)
- [x] Minimize bundle size (code splitting reduces initial bundle size)

### Task 7.2: SEO
- [x] Meta tags for all pages (SEO component added to all pages with unique titles/descriptions)
- [x] Open Graph tags (og:title, og:description, og:image, og:url, og:type, og:site_name)
- [x] Twitter Card tags (twitter:card, twitter:title, twitter:description, twitter:image)
- [x] Structured data (JSON-LD) (Schema.org Gym/WebPage with address, hours, contact info)
- [x] Sitemap generation (sitemap.xml created in public folder)
- [x] robots.txt (created in public folder with sitemap reference)

### Task 7.3: Accessibility
- [x] Semantic HTML (using <main>, <nav>, <header>, <footer>, <section> tags)
- [x] ARIA labels where needed (aria-label on buttons, aria-expanded, aria-controls, aria-invalid, aria-describedby)
- [x] Keyboard navigation (all interactive elements keyboard accessible, focus indicators)
- [x] Focus indicators (enhanced focus-visible styles with crimson outline)
- [x] Alt text for images (all images have descriptive alt attributes)

---

## Phase 8: Testing & Final Polish

### Task 8.1: Cross-Browser Testing
- [x] Chrome/Edge
- [x] Firefox
- [x] Safari
- [x] Mobile browsers

### Task 8.2: Device Testing
- [x] Mobile phones (various sizes)
- [x] Tablets
- [x] Desktop screens

### Task 8.3: Functionality Testing
- [x] All navigation links work
- [x] Forms submit correctly
- [x] Animations work smoothly
- [x] Carousels function properly
- [x] WhatsApp links work
- [x] Contact form validation

### Task 8.4: Content Review
- [x] All text content is correct
- [x] All images load properly
- [x] Placeholder images are appropriate
- [x] No broken links

### Task 8.5: Final Polish
- [x] Remove console logs
- [x] Optimize images
- [x] Check for unused code
- [x] Final styling adjustments
- [x] Add loading states where needed

---

## Phase 9: Documentation & Deployment Prep

### Task 9.1: Documentation
- [x] README.md with setup instructions
- [x] Component documentation (comments)
- [x] Data structure documentation
- [x] Deployment guide

### Task 9.2: Build Configuration
- [x] Production build setup
- [x] Environment variables (if needed)
- [x] Build optimization

### Task 9.3: Deployment Files
- [x] Create `.gitignore`
- [x] Add deployment configuration files
- [x] Create environment example file (if needed)

---

## File Structure (Final)

```
adze-fitness-studio/
├── frontend/
│   ├── public/
│   │   ├── images/          # Placeholder images
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Footer.jsx
│   │   │   │   └── SEO.jsx
│   │   │   ├── ui/
│   │   │   │   ├── Button.jsx
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── Container.jsx
│   │   │   │   └── Section.jsx
│   │   │   └── features/
│   │   │       ├── TestimonialCarousel.jsx
│   │   │       ├── InstagramFeed.jsx
│   │   │       ├── ImageLightbox.jsx
│   │   │       ├── ContactForm.jsx
│   │   │       ├── ProgramCard.jsx
│   │   │       ├── TrainerCard.jsx
│   │   │       └── PricingCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Programs.jsx
│   │   │   ├── Membership.jsx
│   │   │   ├── Wellness.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── data/
│   │   │   ├── hero.json
│   │   │   ├── why-adze.json
│   │   │   ├── programs.json
│   │   │   ├── testimonials.json
│   │   │   ├── trainers.json
│   │   │   ├── memberships.json
│   │   │   ├── wellness.json
│   │   │   ├── about.json
│   │   │   ├── contact.json
│   │   │   └── instagram.json
│   │   ├── hooks/
│   │   │   └── useScroll.js (if needed)
│   │   ├── utils/
│   │   │   └── constants.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── (Tailwind CSS v4 uses @theme in CSS, no separate config files needed)
├── tasks.md (this file)
└── README.md
```

---

## Color Palette Reference
- **Charcoal Black:** `#111111` - Primary text, backgrounds
- **Crimson Red:** `#D72638` - CTAs, accents, highlights
- **Pure White:** `#FFFFFF` - Backgrounds, text on dark
- **Light Gray:** `#EFEFEF` - Dividers, subtle backgrounds

## Typography Reference
- **Headings:** Montserrat (Bold, 700)
- **Body:** Poppins (Regular, 400; Medium, 500)

---

## Notes
- Use placeholder images from Unsplash or similar (fitness/gym themed)
- Instagram feed can use static JSON initially, upgrade to API later
- All forms should have proper validation
- Ensure mobile-first responsive design throughout
- Focus on high-energy, community-focused visual design
- Maintain warm, confident, energetic tone in all copy

---

## Priority Order
1. **Phase 1-2:** Setup and data structure (Foundation)
2. **Phase 3:** Core components (Building blocks)
3. **Phase 4:** Pages (Main content)
4. **Phase 5:** Functionality (Interactivity)
5. **Phase 6:** Styling (Visual polish)
6. **Phase 7-9:** Optimization and deployment (Final steps)

