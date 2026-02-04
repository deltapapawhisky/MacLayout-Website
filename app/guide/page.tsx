'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Layout,
  ArrowLeft,
  ChevronRight,
  Shield,
  Keyboard,
  Monitor,
  Zap,
  AppWindow,
  Settings,
  HelpCircle,
  BookOpen,
  Download
} from 'lucide-react'
import { ThemeToggle } from '@/components/ThemeToggle'

const sections = [
  { id: 'getting-started', title: 'Getting Started', icon: BookOpen },
  { id: 'accessibility', title: 'Accessibility Permission', icon: Shield },
  { id: 'saving-layouts', title: 'Saving Layouts', icon: Layout },
  { id: 'restoring-layouts', title: 'Restoring Layouts', icon: AppWindow },
  { id: 'keyboard-shortcuts', title: 'Keyboard Shortcuts', icon: Keyboard },
  { id: 'multi-monitor', title: 'Multi-Monitor Setup', icon: Monitor },
  { id: 'automation', title: 'Automation Triggers', icon: Zap },
  { id: 'preferences', title: 'Preferences', icon: Settings },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: HelpCircle },
]

export default function GuidePage() {
  const [activeSection, setActiveSection] = useState('getting-started')

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
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4">User Guide</h2>
                <nav className="space-y-1">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={() => setActiveSection(section.id)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300'
                          : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      <section.icon className="w-4 h-4" />
                      <span className="text-sm">{section.title}</span>
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 max-w-3xl">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                {/* Getting Started */}
                <section id="getting-started" className="mb-16">
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Getting Started</h1>
                  <p className="text-slate-600 dark:text-slate-300 text-lg mb-6">
                    Welcome to MacLayout! This guide will help you get the most out of
                    the app and streamline your workflow.
                  </p>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">Quick Start</h3>
                    <ol className="list-decimal list-inside text-primary-800 dark:text-primary-300 space-y-2">
                      <li>Download and install MacLayout</li>
                      <li>Grant Accessibility permission when prompted</li>
                      <li>Arrange your windows how you like them</li>
                      <li>Click the menu bar icon and select "Save Current Layout"</li>
                      <li>Give your layout a name and optional keyboard shortcut</li>
                    </ol>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300">
                    MacLayout lives in your menu bar. Click the icon at any time to
                    access your saved layouts, create new ones, or adjust settings.
                  </p>
                </section>

                {/* Accessibility Permission */}
                <section id="accessibility" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Accessibility Permission</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    MacLayout requires Accessibility permission to move and resize windows.
                    This is the same permission used by all window management apps on macOS.
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mb-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-3">How to grant permission:</h3>
                    <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>Open <strong>System Settings</strong> (Apple menu → System Settings)</li>
                      <li>Navigate to <strong>Privacy & Security → Accessibility</strong></li>
                      <li>Click the lock icon and authenticate if needed</li>
                      <li>Find MacLayout in the list and toggle it <strong>ON</strong></li>
                    </ol>
                  </div>

                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
                    <h3 className="font-semibold text-amber-900 dark:text-amber-200 mb-2">Privacy Note</h3>
                    <p className="text-amber-800 dark:text-amber-300 text-sm">
                      We only use Accessibility access to read window positions and move windows.
                      We never access your personal data, keystrokes, or monitor your activity.
                      The app works entirely offline.
                    </p>
                  </div>
                </section>

                {/* Saving Layouts */}
                <section id="saving-layouts" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Saving Layouts</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    A layout captures the position and size of all your open windows, along with
                    which apps they belong to.
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">To save a layout:</h3>
                  <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li>Arrange your windows exactly how you want them</li>
                    <li>Click the MacLayout icon in the menu bar</li>
                    <li>Click <strong>"Save Current Layout"</strong></li>
                    <li>Enter a descriptive name (e.g., "Home Office", "Focus Mode")</li>
                    <li>Optionally assign a keyboard shortcut</li>
                    <li>Click <strong>"Save"</strong></li>
                  </ol>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">What gets saved:</h3>
                    <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-1">
                      <li>Window positions and sizes</li>
                      <li>Which display each window is on</li>
                      <li>The app that owns each window</li>
                      <li>Which macOS Space the window is on</li>
                      <li>Whether windows are minimized or fullscreen</li>
                    </ul>
                  </div>
                </section>

                {/* Restoring Layouts */}
                <section id="restoring-layouts" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Restoring Layouts</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Restore a saved layout to instantly arrange your windows back to their saved positions.
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Ways to restore:</h3>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li><strong>Menu bar:</strong> Click the icon and select your layout from the list</li>
                    <li><strong>Keyboard shortcut:</strong> Press your assigned hotkey</li>
                    <li><strong>Automatic trigger:</strong> Set up display or app launch triggers</li>
                  </ul>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">Smart Restoration</h3>
                    <p className="text-primary-800 dark:text-primary-300 text-sm">
                      MacLayout intelligently handles cases where apps aren't running or
                      your display configuration has changed. Windows will be positioned proportionally
                      on your current screens.
                    </p>
                  </div>
                </section>

                {/* Keyboard Shortcuts */}
                <section id="keyboard-shortcuts" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Keyboard Shortcuts</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Assign global keyboard shortcuts to your layouts for instant access without using the mouse.
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">To assign a shortcut:</h3>
                  <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li>Click the menu bar icon</li>
                    <li>Hover over your layout and click the <strong>Edit</strong> button</li>
                    <li>Click in the shortcut recording field</li>
                    <li>Press your desired key combination (e.g., ⌘⌥1)</li>
                    <li>Click <strong>Save</strong></li>
                  </ol>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Recommended shortcuts:</h3>
                    <ul className="text-slate-700 dark:text-slate-300 space-y-1">
                      <li><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">⌘⌥1</code> - Primary layout</li>
                      <li><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">⌘⌥2</code> - Secondary layout</li>
                      <li><code className="bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded">⌘⌥F</code> - Focus mode</li>
                    </ul>
                  </div>
                </section>

                {/* Multi-Monitor */}
                <section id="multi-monitor" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Multi-Monitor Setup</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    MacLayout fully supports multi-monitor setups and intelligently adapts
                    to different display configurations.
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Display-aware features:</h3>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2 mb-6">
                    <li>Layouts remember which display each window belongs to</li>
                    <li>Smart positioning adapts windows when displays change</li>
                    <li>Different layouts for different monitor setups</li>
                  </ul>

                  <div className="bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">Tip: Create setup-specific layouts</h3>
                    <p className="text-primary-800 dark:text-primary-300 text-sm">
                      Create separate layouts for "Laptop Only", "Docked", and "External Monitor"
                      setups. Use display triggers to automatically switch between them.
                    </p>
                  </div>
                </section>

                {/* Automation */}
                <section id="automation" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Automation Triggers</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Set up automatic triggers to restore layouts without any manual intervention.
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Display Change Trigger</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Automatically restore a layout when your display configuration changes
                    (e.g., when you dock your laptop or connect an external monitor).
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6 mb-6">
                    <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>Set up your displays as you want them</li>
                      <li>Arrange your windows</li>
                      <li>Save the layout with "Trigger on display change" enabled</li>
                      <li>The layout will auto-restore when this display setup is detected</li>
                    </ol>
                  </div>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">App Launch Trigger</h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    Automatically restore a layout when specific apps launch.
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                    <ol className="list-decimal list-inside text-slate-700 dark:text-slate-300 space-y-2">
                      <li>Create a layout with your desired window arrangement</li>
                      <li>Edit the layout and enable "Trigger on app launch"</li>
                      <li>Select which app(s) should trigger this layout</li>
                      <li>When the app launches, the layout will be restored</li>
                    </ol>
                  </div>
                </section>

                {/* Preferences */}
                <section id="preferences" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Preferences</h2>
                  <p className="text-slate-600 dark:text-slate-300 mb-6">
                    Access preferences by clicking the menu bar icon and selecting "Preferences".
                  </p>

                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">Available settings:</h3>
                  <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-2">
                    <li><strong>Launch at Login:</strong> Start MacLayout when you log in</li>
                    <li><strong>Check for Updates:</strong> Automatically check for new versions</li>
                    <li><strong>License:</strong> Enter your license key to unlock full features</li>
                  </ul>
                </section>

                {/* Troubleshooting */}
                <section id="troubleshooting" className="mb-16">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Troubleshooting</h2>

                  <div className="space-y-6">
                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Windows aren't moving</h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        Make sure Accessibility permission is granted. Go to System Settings →
                        Privacy & Security → Accessibility and ensure MacLayout is enabled.
                        Try toggling it off and on again if needed.
                      </p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Layout doesn't match exactly</h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        Some apps have minimum window sizes or don't respond to external positioning.
                        Additionally, if your display configuration changed, windows will be
                        positioned proportionally to fit the new screens.
                      </p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">Keyboard shortcut not working</h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        The shortcut may conflict with another app. Try using a different key
                        combination. Also ensure MacLayout is running (visible in menu bar).
                      </p>
                    </div>

                    <div className="bg-slate-100 dark:bg-slate-800 rounded-xl p-6">
                      <h3 className="font-semibold text-slate-900 dark:text-white mb-2">App not capturing some windows</h3>
                      <p className="text-slate-700 dark:text-slate-300 text-sm">
                        Some system windows, floating panels, and utility apps may not be captured.
                        MacLayout focuses on main application windows to ensure reliable
                        restoration.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-6">
                    <h3 className="font-semibold text-primary-900 dark:text-primary-200 mb-2">Still having issues?</h3>
                    <p className="text-primary-800 dark:text-primary-300 text-sm mb-4">
                      Contact our support team and we'll help you get things working.
                    </p>
                    <Link
                      href="/support"
                      className="inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
                    >
                      Contact Support
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </section>
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
