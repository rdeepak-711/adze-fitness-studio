# Deployment Guide - Adze Fitness Studio

This guide covers deploying the Adze Fitness Studio website to various hosting platforms.

## Prerequisites

1. **Build the project:**
   ```bash
   cd frontend
   npm install
   npm run build
   ```

2. **Verify the build:**
   - Check that `frontend/dist/` directory exists
   - Test the production build locally:
     ```bash
     npm run preview
     ```

## Deployment Options

### Option 1: Vercel (Recommended)

Vercel is optimized for React applications and provides automatic deployments.

#### Steps:

1. **Install Vercel CLI (optional):**
   ```bash
   npm i -g vercel
   ```

2. **Deploy via CLI:**
   ```bash
   cd frontend
   vercel
   ```

3. **Or deploy via GitHub:**
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Configure:
     - **Root Directory:** `frontend`
     - **Build Command:** `npm run build`
     - **Output Directory:** `dist`
   - Deploy

4. **Configure redirects:**
   - Create `frontend/vercel.json`:
     ```json
     {
       "rewrites": [
         { "source": "/(.*)", "destination": "/index.html" }
       ]
     }
     ```

#### Environment Variables (if needed):
- Add in Vercel dashboard under Project Settings → Environment Variables

---

### Option 2: Netlify

Netlify provides easy deployment with drag-and-drop or Git integration.

#### Steps:

1. **Via Netlify Dashboard:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `frontend/dist` folder
   - Your site will be live immediately

2. **Via Git:**
   - Push your code to GitHub
   - Go to Netlify dashboard
   - Click "New site from Git"
   - Connect your repository
   - Configure:
     - **Base directory:** `frontend`
     - **Build command:** `npm run build`
     - **Publish directory:** `frontend/dist`

3. **Configure redirects:**
   - Create `frontend/public/_redirects`:
     ```
     /*    /index.html   200
     ```

#### Environment Variables (if needed):
- Add in Netlify dashboard under Site Settings → Environment Variables

---

### Option 3: AWS S3 + CloudFront

For AWS infrastructure deployment.

#### Steps:

1. **Create S3 Bucket:**
   ```bash
   aws s3 mb s3://adze-fitness-studio
   ```

2. **Upload files:**
   ```bash
   aws s3 sync frontend/dist s3://adze-fitness-studio --delete
   ```

3. **Configure bucket for static website:**
   - Go to S3 Console → Your bucket → Properties
   - Enable "Static website hosting"
   - Set index document: `index.html`
   - Set error document: `index.html` (for SPA routing)

4. **Set bucket policy:**
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "PublicReadGetObject",
         "Effect": "Allow",
         "Principal": "*",
         "Action": "s3:GetObject",
         "Resource": "arn:aws:s3:::adze-fitness-studio/*"
       }
     ]
   }
   ```

5. **Create CloudFront Distribution (optional):**
   - For better performance and HTTPS
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Add custom error response:
     - HTTP Error Code: `403`
     - Response Page Path: `/index.html`
     - HTTP Response Code: `200`

---

### Option 4: GitHub Pages

Free hosting via GitHub Pages.

#### Steps:

1. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json:**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     },
     "homepage": "https://yourusername.github.io/adze-fitness-studio"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: `gh-pages` branch
   - Root: `/ (root)`

**Note:** For custom domains, add `CNAME` file in `public/` directory.

---

### Option 5: Traditional Web Hosting (cPanel, etc.)

For shared hosting or VPS.

#### Steps:

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload files:**
   - Upload all files from `frontend/dist/` to your web root (usually `public_html/` or `www/`)

3. **Configure .htaccess (Apache):**
   Create `.htaccess` in the root:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Configure nginx (if using nginx):**
   ```nginx
   server {
     listen 80;
     server_name adzefitnessstudio.com;
     root /var/www/adze-fitness-studio;
     index index.html;

     location / {
       try_files $uri $uri/ /index.html;
     }
   }
   ```

---

## Post-Deployment Checklist

### SEO & Performance

- [ ] Verify `robots.txt` is accessible at `/robots.txt`
- [ ] Verify `sitemap.xml` is accessible at `/sitemap.xml`
- [ ] Update `sitemap.xml` with production URL
- [ ] Test all pages load correctly
- [ ] Verify meta tags are correct (use browser dev tools)
- [ ] Check Google Search Console (submit sitemap)
- [ ] Test page load speed (Google PageSpeed Insights)

### Functionality

- [ ] Test all navigation links
- [ ] Test forms (if backend connected)
- [ ] Test WhatsApp links
- [ ] Test social media links
- [ ] Test image loading
- [ ] Test mobile responsiveness
- [ ] Test on different browsers

### Security

- [ ] Ensure HTTPS is enabled
- [ ] Verify security headers (if applicable)
- [ ] Check for mixed content warnings
- [ ] Verify CORS settings (if API calls)

### Analytics (Optional)

- [ ] Add Google Analytics tracking code
- [ ] Add Facebook Pixel (if needed)
- [ ] Test analytics events

---

## Environment Variables

If you need environment variables, create a `.env.production` file:

```env
VITE_SITE_URL=https://adzefitnessstudio.com
VITE_API_URL=https://api.example.com
```

Access in code:
```javascript
import.meta.env.VITE_SITE_URL
```

**Important:** Only variables prefixed with `VITE_` are exposed to the client.

---

## Custom Domain Setup

### For Vercel/Netlify:

1. Go to project settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Wait for DNS propagation (can take up to 48 hours)

### DNS Records:

- **A Record:** Point to hosting provider's IP
- **CNAME Record:** Point to hosting provider's domain
- **TXT Record:** For verification (if required)

---

## Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: cd frontend && npm install
      - run: cd frontend && npm run build
      - name: Deploy to Netlify
        uses: netlify/actions/cli@master
        with:
          args: deploy --dir=frontend/dist --prod
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## Troubleshooting

### Issue: 404 on refresh

**Solution:** Configure redirects to serve `index.html` for all routes (SPA routing).

### Issue: Images not loading

**Solution:** 
- Check image URLs are absolute or relative to root
- Verify CORS settings for external images
- Check browser console for 404 errors

### Issue: Build fails

**Solution:**
- Check Node.js version (requires 18+)
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors (if using TS)

### Issue: Slow load times

**Solution:**
- Enable compression on server
- Use CDN (CloudFront, Cloudflare)
- Optimize images further
- Check bundle size

---

## Support

For deployment issues, contact:
- **Technical Support:** Check hosting provider documentation
- **Project Issues:** Review `README.md` troubleshooting section

---

**Last Updated:** 2025-01-10

