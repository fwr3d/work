# Huroca Website — Site Audit

## What Huroca is

**Huroca Technologies Inc.** is an AgTech startup based in Lethbridge, Alberta. They build autonomous robotics for cattle feedlots, with two products in development:

1. **Automated Injection System** — a 6-DOF robotic arm that uses AI/computer vision to autonomously vaccinate cattle at the squeeze chute, validated in NVIDIA Isaac Sim before real-world deployment.
2. **Automated Inventory System** — computer vision that audits pharmaceutical shelf stock against digital records, flags discrepancies, and reduces theft.

They sell on a RaaS (Robotics as a Service) model — no upfront CapEx. Partners include the University of Lethbridge, Alberta Cattle Feeders Association, and a neuroengineering hub.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router, Turbopack) |
| UI | React 19 + Tailwind CSS v4 |
| Animation | GSAP 3 (logo draw animation), Spline (3D hero) |
| Icons | Lucide React |
| Forms | Formspree |
| Analytics | Vercel Speed Insights |
| Font | Inter (Google Fonts) |
| Hosting | Vercel (implied by domain `hurocatech.com`) |

Notable: Tailwind v4 (new `@import "tailwindcss"` syntax, no `tailwind.config.js` yet), full performance guard for Spline (skips on mobile, low-CPU, slow network, `prefers-reduced-motion`).

---

## What exists

### Pages

| Route | Status |
|---|---|
| `/` | Animated splash with GSAP logo draw, "Enter" link |
| `/home` | Hero (Spline 3D bg), partners strip, quick-link grid |
| `/privacy` | Full privacy policy |
| `/terms` | Full terms of service |
| `/thank-you` | Post-contact success screen |

### Components

| Component | Status |
|---|---|
| `Navbar.js` | Working — hidden on `/`, shows on all other routes |
| `Footer.js` | Built but never imported into layout |
| `HeroScene.js` | Working Spline loader with perf guard |
| `TechnologySection.js` | Full interactive slideshow — built but orphaned, imported nowhere |
| `ContactForm.js` | Formspree form — built but orphaned, imported nowhere |
| `LogoMark.js` | Working SVG logo component |

---

## SEO gaps

The root `layout.js` has solid metadata foundations (OG tags, Twitter card, robots directives, canonical base URL), but several gaps remain:

| Gap | Detail |
|---|---|
| OG image likely missing | `layout.js` references `/Huroca-Icon.png` for both OG and Twitter card, but only `/Huroca-Icon.svg` and `/Huroca.svg` are tracked in the repo. A PNG at the correct social dimensions (1200×630) needs to be created and placed in `/public/`. |
| No per-page metadata | Every route beyond `/` shares the root title template but has no page-specific `description`. Next.js App Router allows `export const metadata` in each `page.js` — Technology, Team, About, Why Us, and Contact all need their own descriptions. |
| No `sitemap.xml` | Next.js 13+ can auto-generate one via `app/sitemap.js`. Without it, search engines discover pages by crawl only. |
| No `robots.txt` | There's no `app/robots.js` or `public/robots.txt`. Bots get default behavior. |
| No JSON-LD structured data | An `Organization` schema on the homepage (name, url, logo, sameAs for LinkedIn) would improve knowledge graph eligibility — useful for a company that won't appear in Wikipedia. |
| Twitter card handle missing | `layout.js` twitter metadata has no `site` or `creator` handle. If Huroca has a Twitter/X account, add it; if not, leave a comment as a placeholder. |

---

## Accessibility

| Issue | Location | Fix |
|---|---|---|
| "Enter" link has no context for screen readers | `app/page.js:146` | `<Link href="/home" aria-label="Enter the Huroca website">Enter</Link>` |
| Mobile menu button has no `aria-label` or `aria-expanded` | `app/Navbar.js:67` | Add `aria-label="Toggle navigation"` and `aria-expanded={isOpen}` |
| Navbar logo link has no label | `app/Navbar.js:29` | Add `aria-label="Huroca home"` to the logo `<Link>` |
| Both SVG layers on splash are `aria-hidden` | `app/page.js:89–120` | Correct — they're decorative. No change needed. |
| `prefers-reduced-motion` respected on splash | `app/page.js:19` | Correct — GSAP animation skips cleanly. No change needed. |
| Color contrast: `text-gray-400` labels on white | `app/home/page.js:58` | Gray-400 on white is ~2.7:1 — fails WCAG AA (minimum 4.5:1). Use `text-gray-500` or darker. |
| No skip-navigation link | `app/layout.js` | Add `<a href="#main-content" className="sr-only focus:not-sr-only">Skip to content</a>` at the top of the layout body. |

---

## Performance

| Item | Status |
|---|---|
| Spline scene is gated | Already guarded: skips on mobile (`max-width: 768px`), `prefers-reduced-motion`, `saveData`, slow connection. Good. |
| Partner images use `next/image` with `fill` | Good — lazy loading and sizing handled. `sizes="224px"` should be `sizes="(max-width: 640px) 100vw, 224px"` for better srcset selection on mobile. |
| GSAP only loaded on the splash page | Fine — it's not in layout, so other pages don't pay the ~70 KB cost. |
| No bundle analysis tooling wired up | Add `@next/bundle-analyzer` to dev dependencies to track bundle growth as pages are added. |
| Spline runtime (~1 MB) loaded unconditionally on desktop | Even with the perf guard, the Spline viewer JS downloads on desktop regardless of CPU. Consider deferring the `import()` until after the LCP image paints. |
| No `<link rel="preconnect">` for Spline CDN | If the Spline scene loads from `prod.spline.design`, adding a `preconnect` hint in layout shaves connection time on desktop. |

---

## What's broken or missing

### Hard blockers — broken links visitors will hit

- `/technology`, `/why-us`, `/about`, `/team`, `/contact` — **all five pages are missing**. The Navbar links to all four of the first, the hero has two CTAs pointing to `/technology` and `/contact`, and the quick-link grid on `/home` links to all four nav pages. Every main call-to-action on the homepage leads to a 404.
- `Footer.js` is never imported — no footer exists on any page.
- `TechnologySection.js` is the most complete component on the site and it is unused.
- `ContactForm.js` is complete with Formspree wiring and it is unused.

### Visual and consistency issues

- `thank-you` page uses `bg-blue-900` on the return button — everything else is green.
- `globals.css` references `--font-geist-sans` and `--font-geist-mono` CSS variables that are never defined (layout uses Inter, not Geist).
- No `@tailwindcss/typography` plugin installed but Privacy/Terms pages use `prose` classes — those pages likely render without any prose styling.

---

## What needs to happen to ship

The bare minimum: build the five missing pages, wire the footer into layout, and drop the two orphaned components into their pages. Everything else is already well-made.

Suggested build order:

```
/contact → /team → /technology → /about → /why-us
```

- `/contact` — easiest, `ContactForm.js` already exists
- `/team` — portraits already in `/public/potraits/`
- `/technology` — `TechnologySection.js` already built, just needs a wrapper page
- `/about` and `/why-us` — need content and layout from scratch

---

## What would make it actually good

### 1. Stats bar (homepage)
The numbers are already in `TAILWIND_PRACTICE_PLAN.md`: `300+ cattle/day`, `98% injection accuracy`, `<3s per animal cycle time`. These are elite numbers. A three-stat strip between the partners logos and the quick-links grid would be the highest-ROI addition on the whole site. Feedlot operators are skeptical by nature — hard numbers on the homepage earn a second look faster than any copy.

### 2. Team page with real portraits
Seven portraits are already in `/public/potraits/` (Shapiro, Brendon, Chandra, Cristo, Emilio, Hardeep, Naveen). For a pre-commercial robotics company selling to conservative agricultural businesses, faces matter more than almost anything. A photo of a real team signals "we exist, we're accountable, we're local." The card grid layout is already specced in `TAILWIND_PRACTICE_PLAN.md`.

### 3. Technology page — TechnologySection already built, just needs a wrapper
`TechnologySection.js` is sophisticated: auto-playing image carousel, before/after comparison slider for inventory, feature tiles, project navigation. It just needs a `/technology/page.js` to live in. This is the product demo — the most important credibility page for a technical buyer.

### 4. Pilot program signup / waitlist
The contact form is generic. A dedicated "Apply for our pilot program" CTA — either a separate section or an extra field asking for feedlot size/head count — converts high-intent visitors far better than a blank message box. This is a B2B sale with a long cycle; capturing a qualified lead is the whole job of the website.

### 5. "How it Works" section
The tech is genuinely novel. A 3-step visual — *animal enters chute → AI identifies injection site → robotic arm delivers dose* — makes the product legible in 10 seconds. Right now you need to read two paragraphs to understand what Huroca actually does. A visual pipeline shortcut earns trust before the visitor commits to reading.

### 6. Why Us page — comparison table
Feedlot buyers will ask "why not just hire more workers?" The `TAILWIND_PRACTICE_PLAN.md` already specced a comparison table (Huroca vs traditional methods). This is the page that handles the objection before the sales call happens. Include: injection consistency, time per head, staff requirements, traceability, and cost-per-dose comparison.

### 7. Video or GIF of the robot
The simulation screenshots (NVIDIA Isaac Sim) are technically impressive but cold. Even a 15-second GIF of the arm moving — looped on the technology page — communicates motion, scale, and real engineering in a way static screenshots cannot. If real feedlot footage exists, it belongs above the fold.

### 8. FAQ section
"Will this work with my existing squeeze chute?" "Do I need to retrain staff?" "What happens if the robot fails mid-chute?" These questions stall B2B deals. A short FAQ that answers them pre-emptively means fewer sales calls needed and more confident inbound leads.

### 9. Case study / early validation proof
A one-paragraph summary of the NVIDIA Isaac Sim validation results — number of simulated cycles, accuracy rate, variance — with a screenshot of the simulation environment, would make the Technology page credible to a technical buyer who'd otherwise dismiss a pre-commercial product. Even a simulation result framed as "validated in 10,000 simulated injection cycles at 98% accuracy" is real proof of engineering rigor.

### 10. RaaS pricing anchor
The site never mentions cost at all. For a skeptical feedlot operator, "no upfront CapEx" sounds like a vague promise. Adding a single line — even a range like "$X per head per month" or "cost-per-dose competitive with manual labour" — removes the biggest unstated objection before a sales call. If exact pricing can't be published, a "request a quote" CTA with a clear form beats a generic contact box.

### 11. News / press section (lightweight)
A University of Lethbridge partnership and an ACFA relationship are legitimacy signals that most visitors will never notice because they live only in the partners logo strip. A short "News" section — three items, reverse-chron, each with a date and one sentence — lets you surface those partnerships as narrative. Future grant announcements, pilot results, or press coverage slot in here automatically.

### 12. Vercel OG image generation
Next.js + Vercel supports dynamic Open Graph images via `app/opengraph-image.tsx` (using `next/og`). For each missing page, a generated OG image with the page title and the Huroca logo would make LinkedIn and Slack previews look professional without maintaining a library of static PNG files. The green-on-dark palette from the hero translates cleanly to a 1200×630 card.
