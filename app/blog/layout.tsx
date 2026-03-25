import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Blog - MacLayout',
    template: '%s - MacLayout Blog',
  },
  description: 'Tips, comparisons, and guides for managing window layouts on macOS. Learn how to boost your productivity with MacLayout.',
  keywords: ['macOS', 'window manager', 'productivity', 'window layout', 'mac tips', 'workspace automation'],
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
