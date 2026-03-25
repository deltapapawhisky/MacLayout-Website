'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  Download,
  Menu,
  X,
  ArrowRight,
  Clock,
  Calendar,
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const blogPosts = [
  {
    slug: 'save-restore-window-layouts-macos',
    title: 'How to Save and Restore Window Layouts on macOS',
    excerpt: 'Tired of rearranging your windows every morning? Learn about the best ways to save and restore window layouts on macOS, from built-in options to dedicated tools like MacLayout.',
    date: 'March 25, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'maclayout-vs-rectangle-magnet-moom',
    title: 'MacLayout vs Rectangle vs Magnet vs Moom: Which Mac Window Manager Is Right for You?',
    excerpt: 'A detailed comparison of the most popular macOS window managers. Find out which tool fits your workflow, from simple snapping to full workspace automation.',
    date: 'March 25, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'best-window-managers-multi-monitor-mac',
    title: 'Best Window Managers for Multi-Monitor Mac Setups in 2026',
    excerpt: 'Multi-monitor setups on macOS can be frustrating without the right tools. Here are the best window managers for managing windows across multiple displays.',
    date: 'March 25, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'automate-mac-workspace-display-triggers',
    title: 'How to Automate Your Mac Workspace with Display Triggers',
    excerpt: 'Learn how to automatically restore your window layouts when you dock or undock your MacBook. Set up display change triggers and app launch triggers for a seamless workflow.',
    date: 'March 25, 2026',
    readTime: '5 min read',
  },
]

export default function BlogIndex() {
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

      {/* Header */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Tips, comparisons, and guides for mastering window management on macOS.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 mb-4">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
