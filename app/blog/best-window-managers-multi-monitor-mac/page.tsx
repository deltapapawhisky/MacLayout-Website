'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  Download,
  Menu,
  X,
  ArrowLeft,
  Clock,
  Calendar,
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function BestWindowManagersMultiMonitor() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-slate-900 dark:text-white">MacLayout</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <Link href="/#features" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</Link>
              <Link href="/#pricing" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Pricing</Link>
              <Link href="/guide" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">User Guide</Link>
              <Link href="/blog" className="text-primary-600 dark:text-primary-400 font-medium transition-colors">Blog</Link>
              <Link href="/support" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Support</Link>
              <ThemeToggle />
              <Link
                href="/download"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
            </div>

            <div className="md:hidden flex items-center gap-2">
              <ThemeToggle />
              <button
                className="p-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900 rounded-lg"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="md:hidden bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
            <div className="px-4 py-4 space-y-3">
              <Link href="/#features" className="block text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Features</Link>
              <Link href="/#pricing" className="block text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Pricing</Link>
              <Link href="/guide" className="block text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">User Guide</Link>
              <Link href="/blog" className="block text-primary-600 dark:text-primary-400 font-medium">Blog</Link>
              <Link href="/support" className="block text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400">Support</Link>
              <Link
                href="/download"
                className="block bg-primary-600 text-white px-4 py-2 rounded-lg text-center"
              >
                Download Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Article */}
      <article className="pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              March 25, 2026
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              5 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            Best Window Managers for Multi-Monitor Mac Setups in 2026
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              If you work with multiple monitors on a Mac, you know the frustration. macOS handles multi-monitor basics reasonably well, but window management across two, three, or even four displays quickly becomes a headache. Windows end up on the wrong screen, layouts break when you disconnect a monitor, and there is no built-in way to save your carefully arranged workspace.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              In this guide, we cover the best window managers for multi-monitor Mac setups in 2026. Whether you want simple snapping, full layout automation, or a tiling window manager, there is a tool here for you.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Multi-Monitor Problem on macOS
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Before we dive into the tools, let us acknowledge why multi-monitor setups on macOS can be frustrating. When you connect or disconnect a display, macOS moves windows around unpredictably. Apps that were carefully positioned on your external monitor get shoved onto your laptop screen, often overlapping each other. When you reconnect the monitor, those windows do not return to their original positions.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              macOS Spaces add another layer of complexity. Each display has its own set of Spaces, and apps can end up on the wrong Space when displays change. If you use a dock at work and go laptop-only at home, you effectively need two completely different window arrangements, and macOS offers no way to switch between them automatically.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Best Window Managers for Multi-Monitor Macs
            </h2>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              1. MacLayout &mdash; Best for Automated Multi-Monitor Workflows
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> $19.99 (one-time) | <strong className="text-slate-900 dark:text-white">Trial:</strong> 14 days free
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout was built from the ground up for multi-monitor users. Its headline feature is display change triggers: when your monitor configuration changes, MacLayout automatically restores the appropriate layout. Dock your MacBook at the office and your three-monitor development layout appears. Head home and undock, and your single-screen laptop layout activates. This happens without any manual intervention.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout also excels at Spaces support. Saved layouts span across multiple Spaces and monitors, so your entire workspace is restored as a unit. Smart relative positioning means layouts adapt intelligently when window positions need to adjust for different screen sizes. For multi-monitor users who want their workspace to &quot;just work&quot; regardless of their display setup, MacLayout is the clear winner.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              2. Rectangle &mdash; Best Free Option for Basic Snapping
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> Free (Pro: $9.99)
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Rectangle is the go-to free window manager on macOS. It lets you snap windows to halves, quarters, and thirds using keyboard shortcuts, and it works across multiple monitors. You can move windows between monitors with shortcuts like Ctrl+Option+Arrow. However, Rectangle does not save layouts or offer any automation for multi-monitor setups. Each time your displays change, you need to manually reposition windows. Rectangle is best for users who want quick snapping but do not mind rearranging windows when their display setup changes.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              3. Magnet &mdash; Best Mac App Store Option
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> $7.99
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Magnet offers essentially the same snapping functionality as Rectangle but with the convenience of Mac App Store installation and updates. It supports multi-monitor snapping with keyboard shortcuts and drag-to-edge gestures. Like Rectangle, it lacks layout saving and automation. Magnet is a solid choice for users who want a simple, trusted snapping tool from the App Store and do not need advanced multi-monitor features.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              4. Moom &mdash; Best for Manual Layout Saving
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> $15
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Moom offers layout snapshots that can save and restore window positions across multiple monitors. You can create different snapshots for different monitor configurations and trigger them manually from the menu bar. While Moom does not auto-detect display changes, its snapshot system means you can switch between multi-monitor and single-monitor layouts with a couple of clicks. Moom is a good middle ground for users who want layout saving but do not need full automation.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              5. BetterSnapTool &mdash; Best for Custom Snap Areas
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> $3.99
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              BetterSnapTool from the makers of BetterTouchTool lets you define custom snap areas on each monitor. Instead of being limited to halves and quarters, you can create any arrangement you want and assign snap zones to specific screen edges or corners. This is particularly useful for ultra-wide monitors or non-standard display arrangements. However, like Rectangle and Magnet, BetterSnapTool does not save or restore complete layouts.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              6. Amethyst &mdash; Best for Tiling Window Management
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              <strong className="text-slate-900 dark:text-white">Price:</strong> Free (open-source)
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Amethyst brings Linux-style tiling window management to macOS. Windows are automatically tiled in configurable layouts like tall, wide, fullscreen, and column. Amethyst works across multiple monitors and automatically adjusts when windows are opened or closed. However, Amethyst is a fundamentally different paradigm from traditional window management. Windows are always tiled automatically, which may not suit users who want precise manual control over specific window positions. It also does not save or restore named layouts.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Which Should You Choose?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              For multi-monitor users, the choice comes down to how much automation you want:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Just need snapping?</strong> Rectangle (free) or Magnet ($7.99) will handle the basics across multiple monitors.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Want to save layouts and switch manually?</strong> Moom ($15) offers solid layout snapshots that work across monitors.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Want custom snap zones?</strong> BetterSnapTool ($3.99) lets you define exactly where windows snap on each display.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Prefer automatic tiling?</strong> Amethyst (free) brings i3-style tiling to macOS.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Want full automation?</strong> MacLayout ($19.99) automatically restores the right layout when your displays change, eliminating the need to manually rearrange anything.
              </li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              If you frequently switch between different monitor configurations, such as docking at a desk and going laptop-only, MacLayout&apos;s display change triggers will save you the most time. The 14-day free trial means you can test it with your exact setup before buying.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Automate Your Multi-Monitor Workflow
            </h2>
            <p className="text-primary-100 mb-6">
              Try MacLayout free for 14 days and let your workspace arrange itself.
            </p>
            <Link
              href="/download"
              className="inline-flex items-center gap-2 bg-white text-primary-700 px-6 py-3 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Free Trial
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                  <Layout className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-xl text-white">MacLayout</span>
              </div>
              <p className="text-sm max-w-md">
                The smart way to manage window layouts on macOS. Save time, stay organized,
                and focus on what matters.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/download" className="hover:text-white transition-colors">Download</Link></li>
                <li><Link href="/guide" className="hover:text-white transition-colors">User Guide</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/support" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} MacLayout. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span>Requires macOS 13+</span>
              <span className="text-slate-600">|</span>
              <span>Made in Sweden</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
