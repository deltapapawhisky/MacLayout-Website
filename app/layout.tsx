import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  metadataBase: new URL('https://maclayout.com'),
  title: 'MacLayout - Save & Restore Window Layouts on macOS',
  description: 'Effortlessly save, restore, and automate your window arrangements on macOS. Perfect for multi-monitor setups and productivity workflows.',
  keywords: ['macOS', 'window manager', 'productivity', 'window layout', 'multi-monitor', 'mac app'],
  authors: [{ name: 'MacLayout' }],
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
