'use client'

import Link from 'next/link'
import { Layout, ArrowLeft } from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Terms of Service</h1>
          <p className="text-slate-600 dark:text-slate-400 mb-8">Last updated: February 2026</p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                By downloading, installing, or using MacLayout ("the Software"), you agree
                to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms,
                do not use the Software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">2. License Grant</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Upon purchase, you are granted a non-exclusive, non-transferable license to use
                MacLayout on a single computer at a time. This license is perpetual for
                the major version purchased.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                "Major version" refers to versions with the same first number (e.g., 1.0, 1.1, 1.99
                are all part of version 1.x). New major versions (e.g., 2.0) may require a separate
                purchase or upgrade.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">3. Free Trial</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We offer a 14-day free trial of MacLayout. During the trial period:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 mb-4 space-y-1">
                <li>You may save up to 3 layouts</li>
                <li>All other features are fully functional</li>
                <li>No payment information is required</li>
              </ul>
              <p className="text-slate-600 dark:text-slate-300">
                After the trial expires, you must purchase a license to continue using the Software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">4. Restrictions</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                You may not:
              </p>
              <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                <li>Redistribute, sell, lease, or sublicense the Software</li>
                <li>Reverse engineer, decompile, or disassemble the Software</li>
                <li>Remove or alter any proprietary notices on the Software</li>
                <li>Use the Software for any unlawful purpose</li>
                <li>Share your license key with others</li>
                <li>Use the Software on more than one computer simultaneously per license</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                MacLayout and all associated intellectual property rights are owned by us.
                These Terms do not grant you any rights to our trademarks, service marks, or logos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">6. Updates</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Your license includes free updates within the same major version. Updates may be
                provided at our discretion and may include bug fixes, improvements, and new features.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                We reserve the right to change features, pricing, and availability of updates at
                any time.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">7. Refund Policy</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We offer a 30-day money-back guarantee. If you are not satisfied with MacLayout
                for any reason, contact us within 30 days of purchase for a full refund.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Refunds are processed through our payment processor and may take 5-10 business days
                to appear on your statement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">8. Disclaimer of Warranties</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                PARTICULAR PURPOSE, AND NONINFRINGEMENT.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                We do not warrant that the Software will meet your requirements, operate without
                interruption, or be error-free.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
                OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, OR
                OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE.
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                Our total liability to you for any claim arising out of or relating to these Terms
                or the Software shall not exceed the amount you paid for the Software.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">10. Privacy</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Your use of the Software is also governed by our{' '}
                <Link href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                  Privacy Policy
                </Link>
                , which is incorporated into these Terms by reference.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">11. Termination</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We may terminate your license if you violate these Terms. Upon termination, you must
                cease all use of the Software and destroy all copies in your possession.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">12. Changes to Terms</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                We reserve the right to modify these Terms at any time. We will notify users of
                significant changes through the app or our website. Your continued use of the
                Software after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">13. Governing Law</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                These Terms shall be governed by and construed in accordance with the laws of Sweden,
                without regard to its conflict of law provisions. Any disputes arising from these Terms
                shall be resolved by the courts of Sweden.
              </p>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you are a consumer residing in the European Union, you also enjoy the protection
                afforded by the mandatory provisions of the law of your country of residence. Nothing in
                these Terms affects your rights as a consumer under applicable EU or national consumer
                protection legislation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">14. Contact</h2>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                If you have any questions about these Terms, please contact us at:
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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/support" className="hover:text-white transition-colors">Support</Link>
            <Link href="/guide" className="hover:text-white transition-colors">User Guide</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
