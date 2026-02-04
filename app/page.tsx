'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  Monitor,
  Keyboard,
  Zap,
  Download,
  Check,
  Menu,
  X,
  ArrowRight,
  Star,
  Shield,
  Clock,
  Sparkles,
  AppWindow,
  Settings
} from 'lucide-react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <Layout className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-slate-900">MacLayout</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-slate-600 hover:text-primary-600 transition-colors">Features</Link>
              <Link href="#pricing" className="text-slate-600 hover:text-primary-600 transition-colors">Pricing</Link>
              <Link href="/guide" className="text-slate-600 hover:text-primary-600 transition-colors">User Guide</Link>
              <Link href="/support" className="text-slate-600 hover:text-primary-600 transition-colors">Support</Link>
              <Link
                href="/download"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200">
            <div className="px-4 py-4 space-y-3">
              <Link href="#features" className="block text-slate-600 hover:text-primary-600">Features</Link>
              <Link href="#pricing" className="block text-slate-600 hover:text-primary-600">Pricing</Link>
              <Link href="/guide" className="block text-slate-600 hover:text-primary-600">User Guide</Link>
              <Link href="/support" className="block text-slate-600 hover:text-primary-600">Support</Link>
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

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Now with macOS Spaces Support
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
              Save & Restore Your
              <span className="gradient-text block">Window Layouts</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Stop wasting time rearranging windows every day. MacLayout saves your perfect
              setup and restores it with a single click or keyboard shortcut.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                href="/download"
                className="bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-700 transition-all hover:shadow-lg hover:shadow-primary-500/25 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download Free Trial
              </Link>
              <Link
                href="#features"
                className="text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-slate-100 transition-colors flex items-center gap-2"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                14-day free trial
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                macOS 13+
              </div>
              <div className="flex items-center gap-1">
                <Check className="w-4 h-4 text-green-500" />
                One-time purchase
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="mt-16 relative">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-4 max-w-5xl mx-auto">
              {/* Menu bar mockup */}
              <div className="bg-slate-700 rounded-lg p-3 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-4 text-slate-300 text-sm">
                  <span>File</span>
                  <span>Edit</span>
                  <span>View</span>
                  <div className="flex items-center gap-1 bg-slate-600 px-2 py-1 rounded">
                    <Layout className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* App window mockup */}
              <div className="grid grid-cols-3 gap-4 h-64">
                <div className="bg-slate-600 rounded-lg p-3 col-span-2">
                  <div className="text-slate-400 text-xs mb-2">Your Layouts</div>
                  <div className="space-y-2">
                    <div className="bg-slate-500 rounded p-2 flex items-center justify-between">
                      <span className="text-white text-sm">Home Office</span>
                      <span className="text-slate-300 text-xs">Cmd+1</span>
                    </div>
                    <div className="bg-slate-500 rounded p-2 flex items-center justify-between">
                      <span className="text-white text-sm">Focus Mode</span>
                      <span className="text-slate-300 text-xs">Cmd+2</span>
                    </div>
                    <div className="bg-slate-500 rounded p-2 flex items-center justify-between">
                      <span className="text-white text-sm">Development</span>
                      <span className="text-slate-300 text-xs">Cmd+3</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-600 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-2">Quick Actions</div>
                  <div className="space-y-2">
                    <div className="bg-primary-600 rounded p-2 text-white text-sm text-center">
                      Save Layout
                    </div>
                    <div className="bg-slate-500 rounded p-2 text-white text-sm text-center">
                      Restore
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -left-8 top-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Layout Saved</div>
                  <div className="text-sm text-slate-500">Home Office</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-xl p-4 hidden lg:block animate-float" style={{ animationDelay: '2s' }}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Monitor Connected</div>
                  <div className="text-sm text-slate-500">Auto-restoring layout...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything You Need for Perfect Window Management
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              More than just window snapping. Save complete layouts, automate triggers, and work smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6">
                <Layout className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Save Named Layouts</h3>
              <p className="text-slate-600">
                Create and save unlimited layouts with custom names. Switch between "Home Office",
                "Focus Mode", or "Presentation" with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-accent-100 rounded-xl flex items-center justify-center mb-6">
                <Keyboard className="w-7 h-7 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Keyboard Shortcuts</h3>
              <p className="text-slate-600">
                Assign global hotkeys to your favorite layouts. Restore your entire workspace
                without touching the mouse.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Monitor className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Monitor Support</h3>
              <p className="text-slate-600">
                Works perfectly with multiple displays. Layouts adapt intelligently when
                monitors connect or disconnect.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Auto-Trigger on Display Change</h3>
              <p className="text-slate-600">
                Automatically restore layouts when you connect or disconnect monitors.
                Dock your laptop and watch windows arrange themselves.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-6">
                <AppWindow className="w-7 h-7 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">App Launch Triggers</h3>
              <p className="text-slate-600">
                Trigger layouts when specific apps launch. Open Slack and watch your
                communication setup appear automatically.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Settings className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Menu Bar App</h3>
              <p className="text-slate-600">
                Lives quietly in your menu bar. Access layouts instantly without cluttering
                your Dock or interrupting your flow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Get started in seconds. No complex setup required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Arrange Your Windows</h3>
              <p className="text-slate-600">
                Set up your windows exactly how you like them. Position apps across your displays
                for your ideal workflow.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Save as Layout</h3>
              <p className="text-slate-600">
                Click the menu bar icon and save your arrangement with a custom name.
                Optionally assign a keyboard shortcut.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Restore Anytime</h3>
              <p className="text-slate-600">
                Restore your layout with one click or keyboard shortcut. Set up automation
                triggers for hands-free workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Simple, Fair Pricing
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              One-time purchase. No subscriptions. Lifetime updates for this version.
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">MacLayout</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-extrabold">$14.99</span>
                  <span className="text-primary-200">one-time</span>
                </div>
              </div>

              {/* Features */}
              <div className="p-8">
                <ul className="space-y-4">
                  {[
                    'Unlimited saved layouts',
                    'Global keyboard shortcuts',
                    'Multi-monitor support',
                    'Display change triggers',
                    'App launch triggers',
                    'macOS Spaces support',
                    'Smart positioning',
                    '1 year of updates included',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/download"
                  className="block w-full bg-primary-600 text-white text-center py-4 rounded-xl font-semibold text-lg mt-8 hover:bg-primary-700 transition-colors"
                >
                  Start 14-Day Free Trial
                </Link>

                <p className="text-center text-sm text-slate-500 mt-4">
                  No credit card required for trial
                </p>
              </div>
            </div>

            {/* Trial info */}
            <div className="mt-8 bg-primary-50 rounded-xl p-6 text-center">
              <h4 className="font-semibold text-primary-900 mb-2">Free Trial Includes</h4>
              <p className="text-primary-700 text-sm">
                Full access to all features for 14 days. Up to 3 saved layouts during trial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Why do I need to grant Accessibility permission?',
                a: 'MacLayout uses macOS Accessibility APIs to read and control window positions. This is the same permission required by all window management apps. We never access your personal data or track your activity.',
              },
              {
                q: 'Will my layouts work with different monitor setups?',
                a: 'Yes! MacLayout includes smart positioning that adapts your layouts when your display configuration changes. Windows scale proportionally to fit your current screens.',
              },
              {
                q: 'Is there a subscription?',
                a: 'No. MacLayout is a one-time purchase. You get 1 year of updates included, and future major versions will be available at a discounted upgrade price.',
              },
              {
                q: 'Why isn\'t this on the Mac App Store?',
                a: 'Mac App Store apps must be sandboxed, which prevents access to the Accessibility APIs needed for window management. We distribute directly to provide full functionality.',
              },
              {
                q: 'What macOS versions are supported?',
                a: 'MacLayout requires macOS 13 (Ventura) or later. We support both Intel and Apple Silicon Macs.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary-600 to-primary-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Streamline Your Workflow?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of Mac users who save hours every week with MacLayout.
          </p>
          <Link
            href="/download"
            className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-primary-50 transition-colors"
          >
            <Download className="w-5 h-5" />
            Download Free Trial
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
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

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/download" className="hover:text-white transition-colors">Download</Link></li>
                <li><Link href="/guide" className="hover:text-white transition-colors">User Guide</Link></li>
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
              <span>Made with care for Mac users</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
