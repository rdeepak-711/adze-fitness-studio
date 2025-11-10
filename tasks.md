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
- [ ] Implement smooth scroll to sections (needs verification)
- [x] Active route highlighting in navbar
- [x] Mobile hamburger menu with slide-out animation
- [x] Close menu on route change

### Task 5.2: Sticky Navigation
- [x] Sticky navbar on scroll
- [x] CTA button appears in navbar on scroll
- [x] Smooth transition animations

### Task 5.3: Animations
- [ ] Scroll reveal animations for sections
- [ ] Fade-in animations for cards
- [ ] Smooth page transitions
- [ ] Hover effects on interactive elements

### Task 5.4: Media Handling
- [ ] Lazy loading for images
- [ ] Image optimization setup
- [ ] Placeholder images for missing content
- [ ] Video embedding support

### Task 5.5: Instagram Integration
- [ ] Instagram feed embed component
- [ ] Option: Use Instagram Basic Display API
- [ ] Fallback: Static JSON data with Instagram post URLs
- [ ] 4-grid or slider layout

### Task 5.6: Testimonials Carousel
- [ ] Implement carousel/slider
- [ ] Star ratings display
- [ ] Auto-play with pause on hover
- [ ] Navigation arrows and dots
- [ ] Support for video testimonials

### Task 5.7: Image Lightbox
- [ ] Lightbox component for gallery images
- [ ] Keyboard navigation (arrow keys, ESC)
- [ ] Touch/swipe support for mobile

### Task 5.8: Contact Form
- [ ] Form validation
- [ ] Form submission handling
- [ ] Toast notification on success/error
- [ ] No page reload (AJAX submission)
- [ ] Integration with WhatsApp or email service (optional)

### Task 5.9: WhatsApp Integration
- [ ] Floating WhatsApp button (FAB)
- [ ] Click-to-chat functionality
- [ ] Pre-filled message templates
- [ ] WhatsApp links in CTAs

---

## Phase 6: Styling & Responsive Design

### Task 6.1: Mobile-First Design
- [ ] Responsive breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px
- [ ] Mobile navigation menu
- [ ] Touch-friendly button sizes
- [ ] Responsive typography scaling

### Task 6.2: Glassmorphism Effects
- [ ] Glassmorphism CTA boxes
- [ ] Backdrop blur effects
- [ ] Semi-transparent backgrounds

### Task 6.3: Visual Polish
- [ ] Consistent spacing and padding
- [ ] Hover states for all interactive elements
- [ ] Loading states
- [ ] Focus states for accessibility
- [ ] Smooth transitions

### Task 6.4: Hero Section Styling
- [ ] Full-screen hero with overlay
- [ ] Text contrast and readability
- [ ] CTA button styling
- [ ] Video background support (if applicable)

---

## Phase 7: Performance & Optimization

### Task 7.1: Performance Optimization
- [ ] Code splitting for routes
- [ ] Lazy loading components
- [ ] Image optimization
- [ ] Minimize bundle size

### Task 7.2: SEO
- [ ] Meta tags for all pages
- [ ] Open Graph tags
- [ ] Twitter Card tags
- [ ] Structured data (JSON-LD)
- [ ] Sitemap generation
- [ ] robots.txt

### Task 7.3: Accessibility
- [ ] Semantic HTML
- [ ] ARIA labels where needed
- [ ] Keyboard navigation
- [ ] Focus indicators
- [ ] Alt text for images

---

## Phase 8: Testing & Final Polish

### Task 8.1: Cross-Browser Testing
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari
- [ ] Mobile browsers

### Task 8.2: Device Testing
- [ ] Mobile phones (various sizes)
- [ ] Tablets
- [ ] Desktop screens

### Task 8.3: Functionality Testing
- [ ] All navigation links work
- [ ] Forms submit correctly
- [ ] Animations work smoothly
- [ ] Carousels function properly
- [ ] WhatsApp links work
- [ ] Contact form validation

### Task 8.4: Content Review
- [ ] All text content is correct
- [ ] All images load properly
- [ ] Placeholder images are appropriate
- [ ] No broken links

### Task 8.5: Final Polish
- [ ] Remove console logs
- [ ] Optimize images
- [ ] Check for unused code
- [ ] Final styling adjustments
- [ ] Add loading states where needed

---

## Phase 9: Documentation & Deployment Prep

### Task 9.1: Documentation
- [ ] README.md with setup instructions
- [ ] Component documentation (comments)
- [ ] Data structure documentation
- [ ] Deployment guide

### Task 9.2: Build Configuration
- [ ] Production build setup
- [ ] Environment variables (if needed)
- [ ] Build optimization

### Task 9.3: Deployment Files
- [ ] Create `.gitignore`
- [ ] Add deployment configuration files
- [ ] Create environment example file (if needed)

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

