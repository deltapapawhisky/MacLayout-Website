import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

export const metadata: Metadata = {
  title: 'MacLayout - Save & Restore Window Layouts on macOS',
  description: 'Effortlessly save, restore, and automate your window arrangements on macOS. Perfect for multi-monitor setups and productivity workflows.',
  keywords: ['macOS', 'window manager', 'productivity', 'window layout', 'multi-monitor', 'mac app'],
  authors: [{ name: 'MacLayout' }],
  openGraph: {
    title: 'MacLayout - Save & Restore Window Layouts on macOS',
    description: 'Effortlessly save, restore, and automate your window arrangements on macOS.',
    url: 'https://maclayout.com',
    siteName: 'MacLayout',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MacLayout - Save & Restore Window Layouts on macOS',
    description: 'Effortlessly save, restore, and automate your window arrangements on macOS.',
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
