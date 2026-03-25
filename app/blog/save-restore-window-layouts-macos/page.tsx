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

export default function SaveRestoreWindowLayouts() {
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
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 text-sm font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Meta */}
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
            How to Save and Restore Window Layouts on macOS
          </h1>

          {/* Content */}
          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              If you use a Mac for work, you know the routine. You sit down, open your apps, and spend the next five minutes dragging windows into position. Your code editor goes on the left, the browser on the right, Slack in the corner, and your terminal tucked underneath. By the time everything is arranged, you have already lost momentum before the day even starts.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              This problem gets even worse if you use a multi-monitor setup or frequently dock and undock a laptop. Every time your display configuration changes, macOS scatters your windows and you are left rebuilding your workspace from scratch.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Problem: macOS Doesn&apos;t Save Window Layouts
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Despite all the polish Apple puts into macOS, there is no built-in way to save and restore window layouts. Stage Manager, introduced in macOS Ventura, groups windows into sets, but it does not let you save specific positions and sizes for each app across your displays. Mission Control and Spaces help you organize virtual desktops, but they do not remember where individual windows should be placed.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The &quot;Close windows when quitting an app&quot; setting in System Settings can restore windows when you reopen an app, but it only works for apps that support state restoration, and it does not help you arrange windows across multiple apps into a cohesive workspace.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Third-Party Window Managers: What They Do (and Don&apos;t Do)
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Several popular window management tools exist for macOS, but most of them focus on window snapping rather than layout saving. Here is a quick overview:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Rectangle
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Rectangle is a free, open-source window manager that lets you snap windows to halves, quarters, and thirds using keyboard shortcuts or drag-to-edge gestures. It is excellent for quickly positioning a single window, but it has no concept of saving or restoring a complete layout. Each window must be positioned individually, and your arrangements are lost when windows move or displays change.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Magnet
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Magnet, available on the Mac App Store, offers similar snapping functionality to Rectangle. You can drag windows to screen edges or use keyboard shortcuts to tile them. Like Rectangle, Magnet is focused on individual window positioning. It does not save layouts or offer any automation features.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Moom
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Moom from Many Tricks goes further than Rectangle and Magnet by offering layout snapshots. You can save arrangements and trigger them from the menu bar. However, Moom&apos;s automation capabilities are limited. It does not support automatic triggers based on display changes, and its multi-monitor handling can feel clunky when your display configuration changes frequently.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              The Solution: MacLayout
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout was built specifically to solve this problem. Instead of focusing on window snapping (which macOS now handles reasonably well with native tiling in Sequoia), MacLayout focuses on what macOS still cannot do: saving complete workspace layouts and restoring them automatically.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              With MacLayout, you arrange your windows once, save the layout with a custom name like &quot;Home Office&quot; or &quot;Focus Mode,&quot; and restore it anytime with a single click or keyboard shortcut. Your saved layout captures the position, size, and display assignment of every window, so your entire workspace comes back exactly as you left it.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Automation That Works for You
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              What truly sets MacLayout apart is its automation triggers. You can configure layouts to restore automatically when your display configuration changes. Dock your MacBook to your external monitors and MacLayout restores your &quot;Office&quot; layout. Undock and head to a coffee shop, and your &quot;Laptop Only&quot; layout appears. No manual intervention required.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout also supports app launch triggers, so specific layouts activate when you open certain apps. Launch Xcode and your development layout appears with the simulator positioned beside it. Open Figma and your design workspace arranges itself.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Full Spaces Support
            </h3>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Unlike other window managers that only partially support macOS Spaces, MacLayout has full Spaces integration. Your saved layouts can span multiple Spaces, and windows are moved to the correct Space during restoration. This means you can have your communication apps on one Space, your development tools on another, and your reference material on a third, all restored in one action.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Getting Started
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Setting up MacLayout takes less than a minute. Download the app, grant the required Accessibility permission, and arrange your windows the way you like them. Click &quot;Save Layout&quot; in the menu bar, give it a name, and you are done. From that point on, your workspace is always one click or keyboard shortcut away.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout offers a 14-day free trial with full access to all features, so you can see the difference it makes in your daily workflow before committing. After the trial, it is a one-time purchase of $19.99 with no subscription required.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Ready to Stop Rearranging Windows?
            </h2>
            <p className="text-primary-100 mb-6">
              Try MacLayout free for 14 days and see how much time you save.
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
