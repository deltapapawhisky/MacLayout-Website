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

export default function AutomateMacWorkspace() {
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
            How to Automate Your Mac Workspace with Display Triggers
          </h1>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              If you use a MacBook with an external monitor, you live in two worlds. At your desk, you have your full multi-monitor setup with windows carefully arranged across displays. On the go, you are working on a single laptop screen with a completely different window arrangement. Every time you dock or undock, you spend minutes dragging windows back into place.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              What if your Mac could detect when your display setup changes and automatically restore the right window layout? That is exactly what display triggers do, and MacLayout is the only macOS window manager that supports them.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              What Are Display Triggers?
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Display triggers are automation rules that fire when your Mac detects a change in connected displays. When you plug in an external monitor, disconnect one, or dock your laptop at your desk, MacLayout notices the change and automatically restores a layout you have assigned to that display configuration.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              This means you can have a &quot;Desk Setup&quot; layout that activates when you connect your external monitor, and a &quot;Laptop Only&quot; layout that activates when you undock. The transition is automatic and takes just a few seconds.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Setting Up Display Triggers in MacLayout
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Setting up display triggers takes just a few minutes. Here is a step-by-step guide:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Step 1: Create Your Layouts
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Start by creating a layout for each display configuration you use. For most people, this means at least two layouts:
            </p>
            <ul className="space-y-2 mb-6">
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Desk layout:</strong> Connect your external monitor(s) and arrange your windows across all displays the way you want them. Click the MacLayout icon in the menu bar, select &quot;Save Layout,&quot; and name it something like &quot;Office&quot; or &quot;Desk Setup.&quot;
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Laptop layout:</strong> Disconnect your external monitor(s) and arrange your windows on the laptop screen. Save this layout with a name like &quot;Laptop Only&quot; or &quot;On the Go.&quot;
              </li>
            </ul>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You can create as many layouts as you need. Some users create separate layouts for different desk setups, such as one for the office and another for a home desk with a different monitor configuration.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Step 2: Assign Display Triggers
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Open MacLayout&apos;s preferences and navigate to the Triggers tab. You will see a section for Display Change Triggers. Here, you can link each of your saved layouts to a specific display configuration.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout identifies display configurations by the number and type of connected monitors. When you set up a trigger, MacLayout records your current display configuration and associates it with the selected layout. The next time it detects that same configuration, it automatically restores the linked layout.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Step 3: Test It Out
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              With your triggers set up, try disconnecting and reconnecting your external monitor. Within a few seconds of the display change, MacLayout should detect the new configuration and restore the appropriate layout. All your windows will move to their saved positions, resize to their saved dimensions, and even move to the correct Spaces if your layout spans multiple virtual desktops.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Advanced: App Launch Triggers
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Display triggers handle the hardware side of workspace automation, but MacLayout also supports app launch triggers for the software side. App launch triggers restore a specific layout when a particular application launches.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Here are some practical examples of how app launch triggers can streamline your workflow:
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Development Workflow
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Create a &quot;Development&quot; layout with your code editor taking up the left two-thirds of your main display, the terminal at the bottom right, and a browser window on your second monitor. Set Xcode or VS Code as the app launch trigger. Every time you open your editor, your entire development environment arranges itself.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Communication Workflow
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Create a &quot;Comms&quot; layout with Slack on the left, your email client on the right, and your calendar in a smaller window. Set Slack as the trigger. When Slack launches in the morning, your communication workspace appears automatically.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-8 mb-3">
              Design Workflow
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              Create a &quot;Design&quot; layout with Figma or Sketch maximized on your main display and reference images or documentation on your secondary screen. Trigger it when your design tool launches, and your creative workspace is ready instantly.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Combining Display and App Triggers
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              The real power of MacLayout&apos;s automation comes from combining display triggers and app launch triggers. Display triggers handle the macro level, ensuring your workspace matches your physical setup. App launch triggers handle the micro level, arranging windows for specific tasks.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              For example, when you dock your laptop at your desk, the display trigger restores your general &quot;Office&quot; layout. Then, when you open Xcode, the app launch trigger refines the arrangement into your &quot;Development&quot; layout with the IDE and terminal positioned just right.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Tips for Getting the Most Out of Triggers
            </h2>

            <ul className="space-y-3 mb-6">
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Keep layouts focused.</strong> Instead of one massive layout with every app, create several smaller layouts for different tasks. This makes triggers more useful and keeps your workspace clean.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Name layouts descriptively.</strong> Use names like &quot;Office - 2 Monitors&quot; or &quot;Home Desk&quot; instead of generic names. This makes it easier to assign triggers and find layouts in the menu bar.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Add keyboard shortcuts as backup.</strong> Even with automation, it is helpful to assign keyboard shortcuts to your most-used layouts. Sometimes you want to manually switch without waiting for a trigger.
              </li>
              <li className="text-slate-600 dark:text-slate-300">
                <strong className="text-slate-900 dark:text-white">Update layouts as your workflow evolves.</strong> As you discover better window arrangements, save updated layouts to replace old ones. Your triggers will automatically use the updated layout.
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">
              Why No Other Tool Offers This
            </h2>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              You might wonder why popular tools like Rectangle, Magnet, and Moom do not offer display triggers. The answer is that these tools are primarily focused on window snapping, which is the act of positioning individual windows using shortcuts or gestures. Detecting display changes and automatically restoring complete multi-window layouts is a fundamentally different feature that requires a different architecture.
            </p>

            <p className="text-slate-600 dark:text-slate-300 mb-6">
              MacLayout was designed from the start as a layout and automation tool, not a snapping tool. Every feature, from layout saving to smart positioning to display detection, was built to work together as a cohesive system. The result is workspace automation that feels seamless and invisible, exactly how technology should work.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-3">
              Automate Your Workspace Today
            </h2>
            <p className="text-primary-100 mb-6">
              Set up display triggers in minutes. Try MacLayout free for 14 days.
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
