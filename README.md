# WindowLayoutManager Website

Landing page and documentation for WindowLayoutManager - a macOS menu bar app for saving and restoring window layouts.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Static export (compatible with Vercel, Netlify, or any static host)

## Pages

- `/` - Homepage with hero, features, pricing, FAQ
- `/download` - Download page with installation instructions
- `/guide` - User documentation and getting started guide
- `/support` - Contact form and FAQ
- `/privacy` - Privacy policy
- `/terms` - Terms of service

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# The static export will be in the `out` directory
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Netlify

1. Push to GitHub
2. Connect repository in Netlify
3. Build command: `npm run build`
4. Publish directory: `out`

### Static Hosting

After running `npm run build`, upload the contents of the `out` directory to any static host.

## Configuration

### Domain Setup

Update the following in `app/layout.tsx`:
- `openGraph.url` - Your domain
- Meta descriptions if needed

### Paddle Integration

For the purchase flow, you'll need to:
1. Sign up for Paddle at paddle.com
2. Create a product for WindowLayoutManager
3. Add Paddle checkout script to the download page
4. Update the download button to trigger Paddle checkout

### Contact Form

The contact form in `/support` currently shows a success message without actually sending emails. To make it functional:

1. Set up a backend API route or
2. Use a service like Formspree, Netlify Forms, or similar
3. Update the `handleSubmit` function in `app/support/page.tsx`

## Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:
- `primary` - Main brand color (blue by default)
- `accent` - Accent color (orange by default)

### Content

- Update pricing in `app/page.tsx`
- Update version info in `app/download/page.tsx`
- Modify FAQ questions as needed

## License

Copyright WindowLayoutManager. All rights reserved.
