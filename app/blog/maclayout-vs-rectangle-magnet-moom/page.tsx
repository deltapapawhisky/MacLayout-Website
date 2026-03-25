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
  Check,
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function MacLayoutVsCompetitors() {
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
              6 min read
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            MacLayout vs Rectangle vs Magnet vs Moom: Which Mac Window Manager Is Right for You?
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Choosing a window manager for your Mac can feel overwhelming. There are dozens of options, each with different strengths, price points, and philosophies. In this comparison, we break down the four most popular choices: MacLayout, Rectangle, Magnet, and Moom. By the end, you will know exactly which tool fits your workflow.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Contenders at a Glance
            </h2>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Rectangle
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Rectangle is a free, open-source window manager inspired by the discontinued Spectacle app. It focuses exclusively on window snapping: moving and resizing windows using keyboard shortcuts or by dragging windows to screen edges. Rectangle is lightweight, fast, and does one thing well. The Pro version ($9.99) adds features like custom sizes, app-specific settings, and stacking groups, but even the Pro version does not save or restore complete layouts.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Magnet
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Magnet is one of the best-selling productivity apps on the Mac App Store, priced at $7.99. It provides drag-to-snap and keyboard shortcut window positioning similar to Rectangle. Magnet supports a variety of tiling arrangements including halves, thirds, quarters, and sixths. It is polished and reliable, but like Rectangle, it is purely a snapping tool. There is no layout saving, no automation, and no way to restore a complete workspace.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Moom
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Moom from Many Tricks ($15) bridges the gap between simple snapping tools and full workspace managers. It offers window snapping, custom grid-based positioning, and crucially, the ability to save and restore window layout snapshots. Moom can save the positions of all your windows and restore them from the menu bar or via keyboard shortcuts. However, Moom lacks automation triggers, and its Spaces support is limited. It works best for users who want layout saving without the complexity of automation.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              MacLayout
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout ($19.99) is designed for users who want complete workspace automation. Like Moom, it saves and restores named layouts with keyboard shortcuts. But MacLayout goes significantly further with automatic triggers that restore layouts when your display configuration changes or when specific apps launch. It also offers full macOS Spaces support, smart relative positioning that adapts layouts to different screen sizes, and a clean menu bar interface. MacLayout is the most capable option for power users and multi-monitor setups.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Feature Comparison
            </h2>

            {/* Comparison Table */}
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200 dark:border-slate-700">
                    <th className="py-3 px-4 text-left text-slate-600 dark:text-slate-400 font-medium">Feature</th>
                    <th className="py-3 px-4 text-center font-bold text-primary-600 dark:text-primary-400">MacLayout</th>
                    <th className="py-3 px-4 text-center text-slate-600 dark:text-slate-300">Rectangle</th>
                    <th className="py-3 px-4 text-center text-slate-600 dark:text-slate-300">Magnet</th>
                    <th className="py-3 px-4 text-center text-slate-600 dark:text-slate-300">Moom</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Window snapping', maclayout: true, rectangle: true, magnet: true, moom: true },
                    { feature: 'Save named layouts', maclayout: true, rectangle: false, magnet: false, moom: true },
                    { feature: 'Restore layouts', maclayout: true, rectangle: false, magnet: false, moom: true },
                    { feature: 'Display change triggers', maclayout: true, rectangle: false, magnet: false, moom: false },
                    { feature: 'App launch triggers', maclayout: true, rectangle: false, magnet: false, moom: false },
                    { feature: 'Full Spaces support', maclayout: true, rectangle: false, magnet: false, moom: false },
                    { feature: 'Smart positioning', maclayout: true, rectangle: false, magnet: false, moom: 'partial' },
                    { feature: 'Multi-monitor', maclayout: true, rectangle: true, magnet: true, moom: true },
                    { feature: 'Keyboard shortcuts', maclayout: true, rectangle: true, magnet: true, moom: true },
                    { feature: 'Free option', maclayout: 'trial', rectangle: true, magnet: false, moom: false },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-100 dark:border-slate-800">
                      <td className="py-3 px-4 text-slate-700 dark:text-slate-300">{row.feature}</td>
                      {(['maclayout', 'rectangle', 'magnet', 'moom'] as const).map((tool) => (
                        <td key={tool} className="py-3 px-4 text-center">
                          {row[tool] === true ? (
                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                          ) : row[tool] === 'partial' ? (
                            <span className="text-yellow-500">~</span>
                          ) : row[tool] === 'trial' ? (
                            <span className="text-primary-500 text-xs font-medium">14-day trial</span>
                          ) : (
                            <X className="w-5 h-5 text-slate-300 dark:text-slate-600 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr className="bg-slate-50 dark:bg-slate-800/50">
                    <td className="py-3 px-4 font-semibold text-slate-900 dark:text-white">Price</td>
                    <td className="py-3 px-4 text-center font-semibold text-primary-600 dark:text-primary-400">$19.99</td>
                    <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400">Free / $9.99</td>
                    <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400">$7.99</td>
                    <td className="py-3 px-4 text-center text-slate-600 dark:text-slate-400">$15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              When to Choose Each Tool
            </h2>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Choose Rectangle If...
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You want a simple, free window snapping tool and you do not need layout saving. Rectangle is perfect for users who just want keyboard shortcuts to tile windows into halves or quarters. It is lightweight, open-source, and gets out of your way. If you are coming from Windows and miss the snap-to-edge behavior, Rectangle is your best bet.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Choose Magnet If...
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You want the convenience of a Mac App Store purchase and prefer a polished, supported snapping tool. Magnet is nearly identical to Rectangle in functionality, with a small price tag and the trust of being on the App Store. If you want simplicity and do not need layout saving, either Magnet or Rectangle will serve you well.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Choose Moom If...
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You want layout saving without full automation. Moom sits in the sweet spot between snapping tools and full workspace managers. Its snapshot feature lets you save and restore window positions, and its grid-based positioning gives you more control over custom arrangements. Moom is ideal for single-monitor users or those with a stable display setup who just want a quick way to reset their windows.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Choose MacLayout If...
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You want the full package: layout saving, keyboard shortcuts, and automation triggers that make your workspace adapt to your environment. MacLayout is the right choice if you use multiple monitors, frequently dock and undock your laptop, work across multiple Spaces, or want layouts to activate automatically based on your display configuration or the apps you open.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              While MacLayout is the most expensive option at $19.99, the time savings from automated layout restoration pay for themselves within the first week. Instead of spending 5 to 10 minutes every morning arranging windows, you sit down and your workspace is ready.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Verdict
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              If all you need is window snapping, Rectangle (free) or Magnet ($7.99) will get the job done. If you want to save and restore layouts manually, Moom ($15) is a solid choice. But if you want your Mac to automatically arrange your workspace based on your display setup and running apps, MacLayout ($19.99) is the only tool that delivers true workspace automation.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The good news is that MacLayout offers a 14-day free trial, so you can experience the difference before making a purchase. Once you try automated layout restoration, manually dragging windows around will feel like a relic of the past.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              See the Difference for Yourself
            </h2>
            <p className="text-primary-100 mb-6">
              Try MacLayout free for 14 days. No credit card required.
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
