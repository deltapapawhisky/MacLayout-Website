'use client'

import Link from 'next/link'
import { Layout, ArrowLeft } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function PrivacyPage() {
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
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Last updated: February 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout is designed with privacy as a core principle. We collect minimal
                data necessary to provide and improve our service, and we never sell or share your
                personal information with third parties for marketing purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data We Collect</h2>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Application Data (Stored Locally)</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout stores all your layout data locally on your Mac. This includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-1">
                <li>Saved window layouts and their configurations</li>
                <li>Keyboard shortcut preferences</li>
                <li>App preferences and settings</li>
                <li>License activation status</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                This data never leaves your device unless you explicitly choose to export or backup it.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">License Verification</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                When you activate a license, we communicate with our payment processor (Paddle) to
                verify your license key. This process may include:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-1">
                <li>The license key you entered</li>
                <li>A machine identifier (hashed, not personally identifiable)</li>
                <li>App version information</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Update Checks</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If automatic update checking is enabled, the app periodically checks our server for
                new versions. This request includes only your current app version and operating system
                version, which helps us ensure compatibility.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Website Analytics</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Our website may use privacy-respecting analytics to understand how visitors use our
                site. We do not use cookies for advertising or tracking purposes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data We DO NOT Collect</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout explicitly does not collect:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                <li>Window contents or screenshots</li>
                <li>Keystrokes or typed text</li>
                <li>Personal files or documents</li>
                <li>Browser history or activity</li>
                <li>Location data</li>
                <li>Usage analytics from within the app</li>
                <li>Any data from other applications on your system</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Accessibility Permission</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout requires Accessibility permission to function. This permission
                is used exclusively to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-1">
                <li>Read window positions and sizes</li>
                <li>Move and resize windows when restoring layouts</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We do not use this permission to monitor your activity, read window contents, or
                access any data within other applications.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Data Security</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Your layout data is stored locally on your Mac using standard macOS security practices.
                License information is stored securely in the macOS Keychain.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                All communication with our servers (license verification, update checks) is encrypted
                using HTTPS/TLS.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Third-Party Services</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We use the following third-party services:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                <li><strong>Paddle:</strong> Payment processing and license management</li>
                <li><strong>Sparkle:</strong> App update delivery (open source)</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300 mt-4">
                These services have their own privacy policies that govern how they handle data.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Your Rights</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                <li>Delete all local app data by removing the app and its support files</li>
                <li>Request information about any data we have associated with your license</li>
                <li>Request deletion of your license data from our systems</li>
                <li>Disable automatic update checking in preferences</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Children's Privacy</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout is not directed at children under 13. We do not knowingly collect
                personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Changes to This Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We may update this privacy policy from time to time. We will notify users of significant
                changes through the app or our website. Your continued use of the app after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Contact Us</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about this privacy policy or our data practices, please
                contact us at:
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                <a href="mailto:support@maclayout.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                  support@maclayout.com
                </a>
              </p>
            </section>
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
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <Link href="/guide" className="hover:text-white transition-colors">User Guide</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
