# Hacker News — MacLayout Launch

## Posting Tips

- **Best time:** Tuesday through Thursday, ~11am EST (8am PST)
- **Format:** "Show HN" post — link directly to maclayout.com
- **Tone:** Keep it technical. HN readers respect specifics over marketing language.
- **Engage:** Reply to every comment within the first few hours. Be honest about limitations.
- **Don't:** Oversell, use superlatives, or be defensive about pricing.

---

## Post

**Title:** Show HN: MacLayout - Save and restore window layouts on macOS

**URL:** https://maclayout.com

---

## First Comment (post immediately after submitting)

Hey HN,

I built MacLayout because I was tired of spending 5 minutes rearranging windows every time I connected my external monitor. Rectangle and Magnet solve window *snapping* — moving a window to the left half, right third, etc. — but they don't solve window *restoring*: saving your entire workspace arrangement and bringing it back later.

MacLayout lets you save named layouts and restore them with a click, keyboard shortcut, or automatically via triggers.

**Technical details:**

- Written in Swift/SwiftUI. Native macOS app, runs in the menu bar.
- Uses the macOS Accessibility API (`AXUIElement`) for reading and writing window positions, sizes, and properties. This is the same API VoiceOver uses, which is why the app requires Accessibility permissions.
- Spaces/Desktops support was the hardest part. Apple doesn't provide a public API for moving windows between Spaces. I'm using a combination of `CGWindowListCopyWindowInfo`, the Accessibility framework, and some private-ish CoreGraphics calls to make this work. It's not pretty, but it's reliable across macOS 13-15.
- Auto-triggers use `CGDisplayRegisterReconfigurationCallback` for display changes and `NSWorkspace.didLaunchApplicationNotification` for app launches.
- Auto-updates via Sparkle (the standard for non-App Store Mac apps).
- Not sandboxed. The Accessibility API requires `AXIsProcessTrusted()`, which is incompatible with the App Store sandbox. This is a known limitation for any app that manipulates other apps' windows.
- Licensing and payments through Lemon Squeezy. License validation is done locally with a cached check — the app works fully offline after initial activation.

**Why not the App Store?**

The core functionality (reading and setting window positions of other apps) requires Accessibility permissions that Apple doesn't allow in sandboxed apps. Every serious window manager on macOS (Rectangle, Moom, Amethyst, yabai) faces the same constraint.

**Pricing:**

$19.99 one-time purchase. 14-day free trial. No subscription. I chose one-time because this is a utility — it should just work in the background without asking you for money every month. I'll fund ongoing development through major version upgrades down the line if needed.

**What I'd love feedback on:**

- Is the pricing right? I've seen similar tools range from free/open source to $30+.
- Any edge cases with display configurations I should test? I've covered Thunderbolt docks, USB-C hubs, and DisplayLink adapters, but there's always something.
- Would anyone want a CLI interface for scripting layouts?

Source: not open source currently, but I'm considering open-sourcing the Accessibility API window manipulation layer as a standalone Swift package.

Happy to answer any technical questions.
