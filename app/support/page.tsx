'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  ArrowLeft,
  Mail,
  BookOpen,
  MessageCircle,
  Send,
  ExternalLink,
  HelpCircle
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message. Please try again.')
    } finally {
      setSending(false)
    }
  }

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
              Support
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We're here to help. Get in touch or find answers in our resources.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Link
              href="/guide"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">User Guide</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Step-by-step instructions for all features
              </p>
            </Link>

            <a
              href="mailto:support@maclayout.com"
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Email Support</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                support@maclayout.com
              </p>
            </a>

            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm text-center">
              <div className="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-7 h-7 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">FAQ</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Common questions answered below
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h2>

            {submitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-900 dark:text-green-200 mb-2">Message Sent!</h3>
                <p className="text-green-700 dark:text-green-300">
                  Thanks for reaching out. We typically respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  >
                    <option value="">Select a topic</option>
                    <option value="technical">Technical Issue</option>
                    <option value="license">License / Activation</option>
                    <option value="feature">Feature Request</option>
                    <option value="refund">Refund Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                    placeholder="Describe your question or issue..."
                  />
                </div>

                {error && (
                  <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4 text-red-700 dark:text-red-300 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-primary-600 text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Frequently Asked Questions</h2>

            <div className="space-y-4">
              {[
                {
                  q: 'How do I reset my trial period?',
                  a: 'Trial periods cannot be reset. If your trial has expired and you need more time to evaluate, please contact us and we may be able to extend it.',
                },
                {
                  q: 'Can I transfer my license to another Mac?',
                  a: 'Yes! Your license can be used on one Mac at a time. To transfer it, deactivate the license on your current Mac, then activate it on your new one.',
                },
                {
                  q: 'Do you offer refunds?',
                  a: 'Yes, we offer a 30-day money-back guarantee. If you\'re not satisfied with MacLayout for any reason, contact us for a full refund.',
                },
                {
                  q: 'Is my data stored in the cloud?',
                  a: 'No. MacLayout works entirely offline. Your layouts are stored locally on your Mac. We don\'t have access to any of your data.',
                },
                {
                  q: 'How do I get updates?',
                  a: 'MacLayout includes built-in update checking. You\'ll be notified when a new version is available. You can also download the latest version from our website.',
                },
                {
                  q: 'Why do I need to grant Accessibility permission?',
                  a: 'Accessibility permission is required by macOS for any app that needs to control windows. This is the only way to read and set window positions.',
                },
              ].map((faq, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">{faq.a}</p>
                </div>
              ))}
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
            <Link href="/guide" className="hover:text-white transition-colors">User Guide</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
