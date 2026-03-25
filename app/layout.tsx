import type { Metadata } from 'next'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://maclayout.com'),
  title: 'MacLayout - Save & Restore Window Layouts on macOS',
  description: 'Effortlessly save, restore, and automate your window arrangements on macOS. Perfect for multi-monitor setups and productivity workflows.',
  keywords: ['macOS', 'window manager', 'productivity', 'window layout', 'multi-monitor', 'mac app', 'window layout manager', 'save window positions', 'restore windows mac'],
  authors: [{ name: 'Daniel White' }],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'MacLayout - Save & Restore Window Layouts on macOS',
    description: 'Effortlessly save, restore, and automate your window arrangements on macOS.',
    url: 'https://maclayout.com',
    siteName: 'MacLayout',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MacLayout - Window Layout Manager for macOS',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacLayout - Save & Restore Window Layouts on macOS',
    description: 'Effortlessly save, restore, and automate your window arrangements on macOS.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'SoftwareApplication',
                name: 'MacLayout',
                description: 'Save, restore, and automate window layouts on macOS. Perfect for multi-monitor setups and productivity workflows.',
                url: 'https://maclayout.com',
                downloadUrl: 'https://maclayout.com/download',
                operatingSystem: 'macOS 13.0+',
                applicationCategory: 'UtilitiesApplication',
                softwareVersion: '1.3',
                offers: {
                  '@type': 'Offer',
                  price: '19.99',
                  priceCurrency: 'USD',
                },
                featureList: [
                  'Save unlimited named window layouts',
                  'Restore layouts with one click or keyboard shortcut',
                  'Multi-monitor support with smart positioning',
                  'Auto-trigger layouts on display change',
                  'Auto-trigger layouts on app launch',
                  'macOS Spaces support',
                  'Global keyboard shortcuts',
                  'Menu bar app',
                ],
                screenshot: 'https://maclayout.com/og-image.png',
                author: {
                  '@type': 'Person',
                  name: 'Daniel White',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'MacLayout',
                url: 'https://maclayout.com',
              },
            ]),
          }}
        />
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
