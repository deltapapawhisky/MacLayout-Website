# MacLayout-Website

Marketing site for MacLayout at maclayout.com.

## Commands

```bash
npm run dev    # Dev server
npm run build  # Production build (static export)
npm run lint   # ESLint
```

## Stack

- Next.js 16 (App Router), React 18, TypeScript, Tailwind CSS
- Static export (`output: 'export'`, images unoptimized)
- Resend for contact form emails

## Architecture

```
app/
  page.tsx            # Homepage (hero, features, pricing, FAQ)
  download/           # Installation & download instructions
  guide/              # User documentation
  support/            # Contact form & FAQ
  privacy/            # Privacy policy
  terms/              # Terms of service
  api/contact/        # POST — sends email via Resend
components/
  ThemeProvider.tsx    # Dark/light theme context
  ThemeToggle.tsx      # Theme toggle button
public/
  appcast.xml         # Sparkle update feed
```

## Environment Variables

- `RESEND_API_KEY` — Resend email service key
- `CONTACT_EMAIL` — Destination for contact form submissions

## Styling

- Tailwind with `darkMode: 'class'`
- Custom color palette: primary (blue), accent (orange)
- Dark mode is the default

## Notes

- Static export means the contact API route only works when deployed with a server (Vercel)
- SEO metadata configured with `metadataBase: https://maclayout.com`
- Sparkle appcast.xml in `/public` for macOS app auto-updates
