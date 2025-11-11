# Adze Fitness Studio - Frontend

A modern, responsive fitness studio website built with React, Vite, and Tailwind CSS v4. This project showcases Adze Fitness Studio's programs, trainers, memberships, and community in Madipakkam, Chennai.

## 🚀 Features

- **Modern Stack**: React 19, Vite 7, Tailwind CSS v4
- **Performance Optimized**: Code splitting, lazy loading, image optimization
- **SEO Ready**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data
- **Accessible**: ARIA labels, keyboard navigation, semantic HTML
- **Mobile-First**: Fully responsive design with touch-friendly interactions
- **Animations**: Smooth scroll reveals and transitions using Framer Motion
- **Forms**: Contact form and Book a Trial form with validation
- **Social Integration**: Instagram feed, WhatsApp FAB, social links

## 📋 Prerequisites

- Node.js 18+ and npm
- Modern web browser

## 🛠️ Setup & Installation

### 1. Install Dependencies

```bash
cd frontend
npm install
```

### 2. Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5182`

### 3. Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### 4. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
frontend/
├── public/
│   ├── favicon.svg          # Site favicon
│   ├── robots.txt           # Search engine crawler instructions
│   └── sitemap.xml          # Sitemap for SEO
├── src/
│   ├── components/
│   │   ├── features/        # Feature-specific components
│   │   │   ├── BackToTop.jsx
│   │   │   ├── BookTrialForm.jsx
│   │   │   ├── BookTrialModal.jsx
│   │   │   ├── ContactForm.jsx
│   │   │   ├── ImageLightbox.jsx
│   │   │   ├── InstagramFeed.jsx
│   │   │   ├── PricingCard.jsx
│   │   │   ├── ProgramCard.jsx
│   │   │   ├── RatingStars.jsx
│   │   │   ├── Reveal.jsx
│   │   │   ├── ScrollToTop.jsx
│   │   │   ├── TestimonialCarousel.jsx
│   │   │   ├── TrainerCard.jsx
│   │   │   └── WhatsAppFAB.jsx
│   │   ├── layout/          # Layout components
│   │   │   ├── Footer.jsx
│   │   │   ├── Layout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── SEO.jsx
│   │   └── ui/              # Reusable UI components
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       ├── Container.jsx
│   │       ├── Section.jsx
│   │       └── Spinner.jsx
│   ├── data/                # JSON data files
│   │   ├── about.json
│   │   ├── contact.json
│   │   ├── hero.json
│   │   ├── instagram.json
│   │   ├── memberships.json
│   │   ├── programs.json
│   │   ├── testimonials.json
│   │   ├── trainers.json
│   │   ├── wellness.json
│   │   └── why-adze.json
│   ├── hooks/               # Custom React hooks
│   │   └── useScrollProgress.js
│   ├── pages/               # Page components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Home.jsx
│   │   ├── Membership.jsx
│   │   ├── NotFound.jsx
│   │   ├── Programs.jsx
│   │   ├── Testimonials.jsx
│   │   └── Wellness.jsx
│   ├── utils/               # Utility functions
│   │   ├── constants.js
│   │   └── imageUtils.js
│   ├── App.jsx              # Main app component with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles and Tailwind config
├── index.html
├── package.json
└── vite.config.js
```

## 🎨 Styling

This project uses **Tailwind CSS v4** with a CSS-based configuration. Custom theme values are defined in `src/index.css` using the `@theme` directive.

### Color Palette

- **Charcoal Black** (`#111111`): Primary text, backgrounds
- **Crimson Red** (`#D72638`): CTAs, accents, highlights
- **Pure White** (`#FFFFFF`): Backgrounds, text on dark
- **Light Gray** (`#EFEFEF`): Dividers, subtle backgrounds

### Typography

- **Headings**: Montserrat (Bold, 700)
- **Body**: Poppins (Regular, 400; Medium, 500)

## 📊 Data Structure

All content is managed through JSON files in `src/data/`. This makes it easy to update content without modifying code.

### Key Data Files

- **hero.json**: Homepage hero section content
- **programs.json**: Fitness programs with details, pricing, and CTAs
- **testimonials.json**: Member testimonials and coach stories
- **trainers.json**: Trainer bios and credentials
- **memberships.json**: Membership tiers and pricing
- **wellness.json**: Wellness program details
- **contact.json**: Contact information and studio hours
- **instagram.json**: Instagram feed posts

### Example: Program Structure

```json
{
  "slug": "functional-strength",
  "title": "Functional Strength Training",
  "description": "Build real-world strength...",
  "image": "https://...",
  "features": ["Feature 1", "Feature 2"],
  "ctaHref": "/membership"
}
```

## 🔧 Components Documentation

### Layout Components

#### `SEO.jsx`
Dynamically sets page meta tags, Open Graph tags, Twitter Cards, and JSON-LD structured data.

**Props:**
- `title` (string): Page title (appended to site name)
- `description` (string): Meta description
- `image` (string, optional): Open Graph image URL
- `type` (string, optional): Schema.org type (default: 'website')
- `keywords` (string, optional): Meta keywords

#### `Navbar.jsx`
Responsive navigation bar with mobile menu. Includes scroll detection for styling changes.

#### `Footer.jsx`
Site footer with navigation links, contact information, and social media links.

### Feature Components

#### `ProgramCard.jsx`
Displays a fitness program with image, title, description, features, and CTA button.

**Props:**
- `program` (object): Program data from `programs.json`

#### `TestimonialCarousel.jsx`
Horizontally scrollable testimonial cards with visual scroll indicators.

**Props:**
- `testimonials` (array): Array of testimonial objects

#### `BookTrialModal.jsx`
Modal component for booking a trial session. Opens when URL hash is `#book-trial`.

#### `ContactForm.jsx`
General contact form with validation for inquiries.

#### `BookTrialForm.jsx`
Dedicated form for booking trial sessions with program selection.

#### `ImageLightbox.jsx`
Full-screen image viewer with keyboard and touch navigation.

**Props:**
- `isOpen` (boolean): Controls visibility
- `image` (string): Image URL
- `onClose` (function): Close handler

### UI Components

#### `Button.jsx`
Flexible button component that can render as a button or anchor tag.

**Props:**
- `as` (string): 'button' or 'a' (default: 'button')
- `variant` (string): 'primary', 'secondary', or 'light'
- `href` (string): Required if `as="a"`
- `className` (string): Additional CSS classes
- `children`: Button content

#### `Card.jsx`
Container component with consistent styling and optional hover effects.

**Props:**
- `className` (string): Additional CSS classes
- `children`: Card content

#### `Container.jsx`
Wrapper component for consistent content width and padding.

#### `Section.jsx`
Section wrapper with consistent vertical spacing.

**Props:**
- `className` (string): Additional CSS classes
- `children`: Section content

## 🚀 Deployment

### Build Configuration

The project is configured for production builds with:

- Code splitting via React lazy loading
- Asset optimization
- Minification
- Tree shaking

### Environment Variables

Currently, no environment variables are required. If needed in the future, create a `.env` file:

```env
VITE_SITE_URL=https://adzefitnessstudio.com
VITE_API_URL=https://api.example.com
```

### Deployment Steps

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `dist/` directory** to your hosting provider:
   - Vercel: Connect GitHub repo, auto-deploys
   - Netlify: Drag and drop `dist/` folder or connect repo
   - AWS S3 + CloudFront: Upload `dist/` to S3 bucket
   - Any static hosting service

3. **Configure redirects** for client-side routing:
   - All routes should redirect to `index.html` (SPA routing)
   - Example Netlify `_redirects` file:
     ```
     /*    /index.html   200
     ```

4. **Verify SEO files:**
   - Ensure `robots.txt` and `sitemap.xml` are accessible
   - Update `sitemap.xml` with your production URL

### Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify forms submit properly
- [ ] Check mobile responsiveness
- [ ] Test WhatsApp and social links
- [ ] Verify SEO meta tags
- [ ] Check Google Analytics (if added)
- [ ] Test image loading and optimization
- [ ] Verify sitemap and robots.txt

## 🧪 Testing

### Manual Testing Checklist

#### Cross-Browser Testing
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

#### Device Testing
- [ ] Mobile phones (320px - 480px)
- [ ] Tablets (768px - 1024px)
- [ ] Desktop screens (1280px+)

#### Functionality Testing
- [ ] All navigation links work
- [ ] Forms submit correctly with validation
- [ ] Animations work smoothly
- [ ] Testimonial carousel scrolls horizontally
- [ ] WhatsApp links open correctly
- [ ] Instagram feed displays properly
- [ ] Image lightbox opens/closes correctly
- [ ] Book Trial modal opens/closes
- [ ] Back to Top button works
- [ ] Scroll to top on route change

#### Content Review
- [ ] All text content is correct
- [ ] All images load properly
- [ ] No broken links
- [ ] Contact information is accurate
- [ ] Social media links are correct

## 🐛 Troubleshooting

### Build Errors

**Error: Cannot find module**
- Run `npm install` to ensure all dependencies are installed

**Error: Tailwind classes not working**
- Ensure `@tailwindcss/vite` plugin is in `vite.config.js`
- Check that `index.css` imports Tailwind directives

### Runtime Errors

**Images not loading**
- Check image URLs in JSON files
- Verify CORS settings if using external images
- Check browser console for 404 errors

**Forms not submitting**
- Check browser console for JavaScript errors
- Verify form validation logic
- Check network tab for failed requests

## 📝 Development Notes

- **Code Splitting**: All page components are lazy-loaded for better performance
- **Image Optimization**: Images use `loading="lazy"` for lazy loading
- **Accessibility**: All interactive elements have proper ARIA labels
- **SEO**: Each page has unique meta tags via the `SEO` component
- **Mobile-First**: All styles are designed mobile-first with responsive breakpoints

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For questions or issues, contact:
- **Phone**: +91 93426 24788
- **WhatsApp**: [Click to chat](https://wa.me/919342624788)
- **Instagram**: [@adzefitnesstudio](https://instagram.com/adzefitnesstudio)

---

**Built with ❤️ for Adze Fitness Studio**
