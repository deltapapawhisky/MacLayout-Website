# Reddit Posts — MacLayout Launch

---

## r/macapps (Show & Tell)

**Title:** I built MacLayout — save and restore your window layouts on macOS (with auto-triggers)

**Body:**

Hey r/macapps,

I've been working on a native macOS app called **MacLayout** and wanted to share it with you all.

**The problem I was solving:** Every time I dock my MacBook to my monitor at my desk, I'd spend a solid 5 minutes dragging windows back to where I want them. Slack on the left third of my ultrawide, browser on the right two-thirds, terminal in the corner, Messages on the laptop screen. And then when I undock and go work from the couch, I'd rearrange everything again for the single screen. Rinse and repeat, every single day.

I looked at Rectangle and Magnet, and they're great for snapping windows to positions, but they don't *remember* your entire workspace and bring it back. That's a different problem.

**What MacLayout does:**
- Save named window layouts (e.g., "Desk Setup", "Laptop Only", "Presentation Mode")
- Restore any layout with a single click or keyboard shortcut
- **Auto-triggers**: automatically restore a layout when your display configuration changes (dock/undock), or when a specific app launches
- Full **Spaces/Desktops support** — it remembers which Space each window belongs to
- Per-display awareness — it knows the difference between your ultrawide and your laptop screen

It's a native Swift app — no Electron, no web views. Runs in your menu bar and stays out of your way.

**Pricing:** 14-day free trial, then $19.99 one-time purchase. No subscription. You buy it, you own it.

I'd love to hear your feedback. If you have questions about how it works or feature requests, I'm right here.

[maclayout.com](https://maclayout.com)

---

## r/productivity

**Title:** I was spending 5 minutes rearranging windows every time I docked my laptop, so I built an app to fix it

**Body:**

Quick context: I work from a MacBook Pro, and I switch between my desk (external monitor) and working from the couch or a coffee shop multiple times a day. Every single time I dock or undock, I'd spend 5 minutes dragging windows back to where they belong. Browser here, Slack there, terminal in the corner, notes on the other screen.

I timed it once. Over a week, I was spending close to 30 minutes just *rearranging windows*. Not being productive — just putting things back where they were.

So I built **MacLayout**. You save your window arrangements as named layouts ("Desk Setup", "Laptop Only", whatever you want), and then restore them with one click or a keyboard shortcut. The part that really changed my workflow: **auto-triggers**. MacLayout detects when your display setup changes and automatically restores the right layout. Dock your laptop — boom, desk layout. Undock — laptop layout, no action needed.

It also supports macOS Spaces, so if you spread your work across multiple desktops, it handles that too.

It's $19.99 one-time (14-day free trial). I figured out the pricing by asking myself what 30 minutes a week of my time is worth.

Link: [maclayout.com](https://maclayout.com)

Happy to answer any questions about how it works.

---

## r/MacOS

**Title:** MacLayout — a window layout manager with full Spaces support and auto-triggers

**Body:**

I've been working on a window layout tool for macOS called **MacLayout**, and I wanted to share it here because it solves a few pain points I've seen discussed in this sub.

**How it's different from Rectangle/Magnet:** Those tools snap individual windows to grid positions. MacLayout saves your *entire* window arrangement as a named layout and restores all of it at once. Think of it as "window state snapshots" rather than "window snapping."

**Key differentiators:**
- **Full Spaces support** — it tracks which desktop/Space each window belongs to and restores windows to the correct Space. I know this has been a pain point for a lot of people since Apple doesn't expose great APIs for it.
- **Auto-triggers** — restore a layout automatically when your display configuration changes (dock/undock a monitor) or when a specific app launches.
- **Per-display awareness** — it understands multi-monitor setups and adapts layouts based on which displays are connected.
- **Keyboard shortcuts** — bind any layout to a global hotkey.

Native Swift app, runs in the menu bar. 14-day free trial, $19.99 one-time purchase.

[maclayout.com](https://maclayout.com)

Would love feedback, especially from anyone who's struggled with Spaces and window management.

---

## r/SideProject

**Title:** After 3 months of development, I'm launching MacLayout — a macOS window layout manager

**Body:**

Hey everyone! I just launched **MacLayout**, a macOS app that saves and restores your window arrangements.

**What motivated it:** I switch between a docked setup (MacBook + ultrawide) and laptop-only mode multiple times a day. I was spending actual minutes rearranging windows every single time. Looked at the existing tools and realized they solve a different problem — snapping windows to positions, not remembering and restoring an entire workspace.

**Tech stack:**
- Swift and SwiftUI for the UI
- macOS Accessibility API for window manipulation (reading and setting window positions, sizes, and Spaces)
- Sparkle framework for auto-updates
- Lemon Squeezy for licensing and payments
- Not sandboxed — the Accessibility API requires permissions that aren't compatible with the Mac App Store sandbox, so I'm distributing directly from my website

**Biggest challenges:**
- Spaces support. Apple does not make this easy. The APIs for moving windows between Spaces are essentially undocumented, and I had to get creative with the Accessibility framework and some CGWindow-level work.
- Handling apps that launch slowly — if a layout includes an app that isn't running yet, MacLayout needs to wait for it to become ready before positioning its windows.
- Display detection edge cases. Thunderbolt docks, display daisy-chaining, and inconsistent display IDs between connections were all fun to debug.

**Pricing:** $19.99 one-time. I thought long and hard about subscriptions, but as a user myself, I hate subscribing to utility apps. One-time felt right. There's a 14-day free trial so people can make sure it works for their setup before paying.

[maclayout.com](https://maclayout.com)

Would love to hear your thoughts — both on the product and the go-to-market approach. This is my first commercial macOS app.
