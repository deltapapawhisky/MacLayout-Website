'use client'

import Link from 'next/link'
import {
  Layout,
  Download,
  Check,
  Shield,
  Clock,
  Monitor,
  Apple,
  FileText,
  ArrowLeft,
  ExternalLink
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function DownloadPage() {
  const currentVersion = '1.2'
  const releaseDate = 'March 2026'
  const fileSize = '1.5 MB'
  const downloadUrl = '/MacLayout.dmg'
  const releasesUrl = 'https://github.com/deltapapawhisky/WindowLayoutManager/releases'
  const purchaseUrl = 'https://maclayout.lemonsqueezy.com/checkout/buy/fb6c40c7-9868-458d-94a4-4fe3dfbb10b6'

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900 dark:text-white">MacLayout</span>
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Download MacLayout
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Start your 14-day free trial. No credit card required.
            </p>
          </div>

          {/* Download Card */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* App Icon */}
              <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl flex items-center justify-center shadow-lg">
                <Layout className="w-16 h-16 text-white" />
              </div>

              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  MacLayout for macOS
                </h2>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-slate-600 dark:text-slate-400 mb-6">
                  <span className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    Version {currentVersion}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {releaseDate}
                  </span>
                  <span className="flex items-center gap-1">
                    <Download className="w-4 h-4" />
                    {fileSize}
                  </span>
                </div>

                <a
                  href={downloadUrl}
                  className="inline-flex items-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg"
                >
                  <Download className="w-5 h-5" />
                  Download for macOS
                </a>
                <a
                  href={purchaseUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all ml-4"
                >
                  Buy License — $19.99
                </a>
              </div>
            </div>

            {/* System Requirements */}
            <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">System Requirements</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Apple className="w-4 h-4" />
                  macOS 13.0 (Ventura) or later
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Monitor className="w-4 h-4" />
                  Intel or Apple Silicon
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <Shield className="w-4 h-4" />
                  Accessibility permission required
                </div>
                <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                  <FileText className="w-4 h-4" />
                  ~25 MB disk space
                </div>
              </div>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 mb-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Installation Guide</h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Download the DMG</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Click the download button above to get the latest version of MacLayout.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Open the DMG</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Double-click the downloaded file to mount the disk image.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Drag to Applications</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    Drag MacLayout.app to your Applications folder.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">Grant Accessibility Permission</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    On first launch, you'll be prompted to grant Accessibility permission in System Settings.
                    This is required for window management functionality.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white mb-1">You're Ready!</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    MacLayout will appear in your menu bar. Click it to start saving layouts.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Gatekeeper Notice */}
          <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 mb-12">
            <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">First-time Open on macOS</h3>
            <p className="text-amber-800 dark:text-amber-300 text-sm mb-4">
              Since MacLayout is distributed outside the Mac App Store, macOS may show a warning
              when you first open it. This is normal for all directly-distributed apps.
            </p>
            <div className="text-sm text-amber-800 dark:text-amber-300">
              <p className="mb-2"><strong>To open the app:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>Right-click (or Control-click) on MacLayout.app</li>
                <li>Select "Open" from the context menu</li>
                <li>Click "Open" in the dialog that appears</li>
              </ol>
              <p className="mt-2">You only need to do this once. The app is signed and notarized by Apple.</p>
            </div>
          </div>

          {/* Changelog */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Release Notes</h3>
              <a
                href={releasesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 text-sm flex items-center gap-1"
              >
                Full Changelog
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold px-2 py-1 rounded">
                    Latest
                  </span>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Version 1.0</h4>
                  <span className="text-sm text-slate-500 dark:text-slate-400">{releaseDate}</span>
                </div>
                <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 ml-4">
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Initial release
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Save and restore window layouts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Global keyboard shortcuts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Multi-monitor support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    Display change triggers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    App launch triggers
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-500" />
                    macOS Spaces support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} MacLayout. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
