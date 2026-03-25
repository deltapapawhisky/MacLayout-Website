# MacLayout: AI Search Discoverability Strategy

Last updated: March 2026

---

## Why This Matters

58% of users have already replaced traditional search engines with AI tools for product discovery. AI-referred traffic converts 23x higher than organic search. Getting MacLayout mentioned by Claude, ChatGPT, Perplexity, and Google AI Overviews when users ask "best window manager for Mac" is a significant growth lever.

**Key insight**: 85% of AI brand mentions come from *third-party* pages, not your own site. On-site technical SEO is table stakes — the real win is off-site presence.

---

## What We've Implemented (On-Site)

- [x] `/llms.txt` — concise product summary for LLM crawlers (llmstxt.org spec)
- [x] `/llms-full.txt` — complete documentation in a single Markdown file for LLM ingestion
- [x] `sitemap.xml` — dynamic sitemap listing all pages
- [x] `robots.txt` — allows all crawlers including AI bots (GPTBot, ClaudeBot, PerplexityBot)
- [x] JSON-LD structured data:
  - `SoftwareApplication` schema (name, price, features, OS, download URL)
  - `FAQPage` schema on homepage
  - `Article` schema on each blog post
- [x] Enhanced meta tags (robots directive with max-snippet:-1, max-image-preview:large)
- [x] Blog content targeting key comparison/how-to queries

---

## Off-Site Strategy (Where 85% of AI Citations Come From)

### Priority 1: Community Platforms (Reddit = #1 AI citation source)

- **r/macapps** — Post MacLayout announcement, answer "best window manager" threads
- **r/mac** — Help users with multi-monitor questions, mention MacLayout naturally
- **r/productivity** — Share workflow tips involving window management
- **r/macOS** — Technical discussions about Accessibility APIs, macOS window management

**Rules**: Be genuinely helpful first. Answer the question, then mention MacLayout as one option. Don't spam.

### Priority 2: Launch Platforms

- **Product Hunt** — Full launch (copy prepped in `marketing/producthunt.md`)
- **Hacker News** — Show HN post (copy prepped in `marketing/hackernews.md`)
- **Homebrew** — Submit cask (spec prepped in `marketing/homebrew-cask.rb`)
  - Homebrew is particularly valuable: developer-focused LLMs heavily index package managers

### Priority 3: Content Syndication

Publish existing blog content externally (not just on maclayout.com):
- **Medium** — "Best Window Managers for Multi-Monitor Mac Setups"
- **Dev.to** — Technical post about macOS Accessibility APIs and window management
- **LinkedIn** — Article format, targeting productivity-focused professionals

### Priority 4: Earned Media

- **macOS app review sites** — Reach out to 9to5Mac, MacStories, CleanMyMac blog
- **YouTube** — Screen recording demos ("My Mac Workflow with MacLayout")
- **Podcast appearances** — Mac power user shows, productivity podcasts

### Priority 5: Technical Credibility

- **GitHub** — Open-source any helper utilities or examples
- **Stack Overflow** — Answer macOS window management questions, reference docs
- **Apple Developer Forums** — Contribute to Accessibility API discussions

---

## Content Guidelines for AI Citation

1. **Author byline**: Always attribute content to "Daniel White, macOS developer" (E-E-A-T signal)
2. **Cite sources**: Link to Apple docs, productivity research, third-party reviews
3. **Precise metrics**: Use specific numbers ("saves 15 minutes per day", "supports macOS 13+")
4. **Structured comparisons**: LLMs love tables — keep the comparison table factual and updated
5. **H1 > H2 > H3 hierarchy**: Pages with clean heading hierarchy are 2.8x more likely to be cited
6. **Front-load key info**: 55% of AI Overview citations come from the top 30% of a page

---

## Blog Content Roadmap

Existing:
- "How to Save and Restore Window Layouts on macOS"
- "MacLayout vs Rectangle vs Magnet vs Moom"
- "Best Window Managers for Multi-Monitor Mac Setups in 2026"
- "How to Automate Your Mac Workspace with Display Triggers"

Planned:
- "MacLayout vs BetterSnapTool: Snapping vs Full Layout Management"
- "The Developer's Guide to macOS Workspace Automation"
- "How I Use MacLayout with a 3-Monitor Setup (Case Study)"
- "macOS Window Management in 2026: What's Changed"

---

## Measuring Success

- Ask Claude, ChatGPT, Perplexity: "What is MacLayout?" and "Best window manager for Mac"
- Track whether MacLayout appears in AI-generated recommendations
- Monitor organic traffic from AI referrals (check for `chat.openai.com`, `perplexity.ai`, `claude.ai` in referrer logs)
- Use Vercel Analytics to track traffic sources

---

## Future: MCP Server (Strategic Advantage)

As MCP registries mature, consider building a MacLayout MCP server that lets AI agents:
- Check MacLayout feature compatibility with user's macOS version
- Compare MacLayout features with competitors
- Generate keyboard shortcut recommendations

This would make MacLayout a first-class citizen in AI agent ecosystems — very few macOS apps have this yet.
