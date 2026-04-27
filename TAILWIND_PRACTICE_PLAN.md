# Tailwind CSS Practice Plan — Huroca Website

## Codebase Overview

| File | Description |
|---|---|
| `app/page.js` | Animated landing page — GSAP draw-on logo |
| `app/home/page.js` | Hero, partners strip, quick links grid |
| `app/Navbar.js` | Sticky responsive navbar |
| `components/Footer.js` | 3-column footer — **exists but not wired into layout.js** |
| `components/HeroScene.js` | Spline 3D scene for hero background |
| `components/LogoMark.js` | SVG logo component |
| `app/technology/` | **Missing — needs to be built** |
| `app/why-us/` | **Missing — needs to be built** |
| `app/about/` | **Missing — needs to be built** |
| `app/team/` | **Missing — needs to be built** |
| `app/contact/` | **Missing — needs to be built** |

---

## Suggested Order

```
Module 7 → Module 1 → Module 3 → Module 4 → Module 5 → Module 2 → Module 6 → Module 8
```

---

## Module 1 — Clean Up Existing Code (Foundations)

**Goal:** Replace inline styles and `<style>` blocks with Tailwind utilities. Learn where Tailwind ends and inline styles must stay.

### Tasks

#### 1.1 — Convert `<style>` block in `app/page.js`

The landing page has a `<style>` tag for `.l-enter-link` with a pseudo-element underline animation:

```css
.l-enter-link::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 100%; height: 1px;
  background: #1c1b18;
  transform-origin: left;
  transition: transform 0.4s ease;
}
.l-enter-link:hover::after { transform: scaleX(0); transform-origin: right; }
.l-enter-link:hover { opacity: 0.45; }
```

**Practice:** Rewrite this using Tailwind's `after:` pseudo-element utilities and `hover:` variants directly on the `<Link>` className. Target classes: `after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#1c1b18] after:origin-left after:transition-transform hover:after:scale-x-0 hover:after:origin-right hover:opacity-45`.

#### 1.2 — Inline styles in `app/page.js`

Several elements have `style={{ opacity: 0, y: 8, ... }}`. Identify which are:
- **GSAP-controlled** (must stay as inline styles — GSAP sets them at runtime)
- **Static initial values** that could be Tailwind classes (e.g. `style={{ opacity: 0 }}` could be `className="opacity-0"`)

**Rule:** If GSAP's `gsap.set()` or `.to()` targets that element, leave it as an inline style. Otherwise, move it to Tailwind.

#### 1.3 — Arbitrary value syntax in `app/home/page.js`

The hero section has:
```js
style={{ aspectRatio: "556/501" }}
```

**Practice:** Replace with Tailwind's arbitrary value: `aspect-[556/501]`. Do the same for the wordmark container.

### Concepts Covered
- `after:` pseudo-element utilities
- `hover:` state variant
- `opacity-*` scale
- `aspect-*` and arbitrary values `[value]`
- When inline styles are necessary vs avoidable

---

## Module 2 — Responsive Design

**Goal:** Understand Tailwind's 5 breakpoints and build layouts that work at every screen size.

### Breakpoint Reference

| Prefix | Min-width | Typical target |
|---|---|---|
| *(none)* | 0px | Mobile first |
| `sm:` | 640px | Large phone / small tablet |
| `md:` | 768px | Tablet |
| `lg:` | 1024px | Laptop |
| `xl:` | 1280px | Desktop |
| `2xl:` | 1536px | Wide desktop |

### Tasks

#### 2.1 — Trace the hero typography scale

In `app/home/page.js` the hero heading is:
```
text-6xl sm:text-7xl lg:text-8xl
```

**Practice:** Add a `2xl:text-9xl` variant. Then try replacing it with `sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl` and understand the difference — mobile-first means no prefix = all sizes.

#### 2.2 — Quick links grid

Currently: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`

**Practice:** Add a `md:grid-cols-2` step (it already has sm:2 jumping to lg:4 — there's no md step). Then try `md:grid-cols-3` and see how it reflows.

#### 2.3 — Navbar breakpoint audit

The navbar shows desktop links at `md:flex` and hides the hamburger at `md:hidden`. The mobile menu is `md:hidden`.

**Practice:** Change the breakpoint to `lg:` so the mobile menu shows until larger screens. Understand why `md:hidden` is on the toggle button and `hidden md:flex` is on the desktop links — they mirror each other.

#### 2.4 — Footer responsive columns

Currently: `grid-cols-1 md:grid-cols-3`

**Practice:** Add `sm:grid-cols-2 md:grid-cols-3` so on tablet the first two columns show side by side and the contact column drops below before the full 3-col kicks in at `md:`.

### Concepts Covered
- Mobile-first cascade (no prefix = all screens)
- `sm:` `md:` `lg:` `xl:` `2xl:` breakpoints
- Responsive grid columns
- Responsive typography
- Mirroring breakpoints (show/hide pairs)

---

## Module 3 — Color System & Opacity Modifiers

**Goal:** Master Tailwind's color scale, custom color tokens, and the `/opacity` modifier syntax.

### Tasks

#### 3.1 — Map the green scale

The site uses these greens: `green-400`, `green-500`, `green-600`, `green-700`, `green-800`, `green-900`, `green-950`.

**Practice:** Build a color swatch section in `app/home/page.js` (temporary, delete after) — a `flex` row of `div`s each with a different `bg-green-*` class and a label. Observe the scale visually. Understand `950` is darker than `900` (added in Tailwind v3.3).

#### 3.2 — Add custom color tokens

`app/page.js` uses `bg-[#F7F6F1]` and `text-[#1c1b18]` as arbitrary values. Extend `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      cream:  '#F7F6F1',
      ink:    '#1c1b18',
    }
  }
}
```

**Practice:** Replace all `[#F7F6F1]` with `cream` and `[#1c1b18]` with `ink` across the codebase.

#### 3.3 — Opacity modifier syntax

The home page uses:
- `bg-black/40` — black at 40% opacity
- `border-white/30` — white border at 30% opacity
- `hover:border-white/60` — white border at 60% on hover

**Practice:** Apply the `/opacity` modifier to the footer links: change `hover:text-white` to `hover:text-white/80`. Try `bg-green-950/50` on the footer and see the difference. Use it on a card's border: `border-green-700/30`.

#### 3.4 — Understand when to use arbitrary vs scale

| Use scale | Use arbitrary `[]` |
|---|---|
| Brand/system colors in config | One-off values not in the design system |
| Standard spacing (4, 8, 12…) | Specific pixel values (e.g. `h-[3px]`) |
| Standard font sizes | Exact rem/em from a design spec |

### Concepts Covered
- Tailwind color scale (50–950)
- `tailwind.config.js` theme extension
- Arbitrary values `bg-[#hex]`
- Opacity modifier `/` on any color utility
- Named tokens vs arbitrary values

---

## Module 4 — Flexbox & Grid Layouts

**Goal:** Build any layout confidently using Tailwind's flex and grid utilities.

### Flex Reference

```
flex          → display: flex
flex-col      → flex-direction: column
flex-wrap     → flex-wrap: wrap
items-center  → align-items: center
justify-*     → justify-content: *
gap-*         → gap
flex-1        → flex: 1 1 0%  (grow to fill space)
shrink-0      → flex-shrink: 0 (never shrink)
```

### Grid Reference

```
grid                → display: grid
grid-cols-{n}       → grid-template-columns: repeat(n, minmax(0, 1fr))
col-span-{n}        → grid-column: span n
gap-*               → gap
place-items-center  → place-items: center
```

### Tasks

#### 4.1 — Rebuild footer as flex, then back to grid

Take the footer's `grid grid-cols-1 md:grid-cols-3` and rewrite it as `flex flex-col md:flex-row` with `md:gap-12`. Compare the two. Understand when grid wins (equal columns, alignment) vs flex (content-driven sizing, wrapping).

#### 4.2 — Add a Stats section to home page

After the partners strip, add a new section with 3 stats:

```
300+    Cattle/day capacity
98%     Injection accuracy
< 3s    Per animal cycle time
```

Build it as `flex flex-col sm:flex-row justify-center gap-12 text-center`. Each stat should be a `flex flex-col items-center gap-1`.

#### 4.3 — Practice `flex-1` for sticky footer

`components/Footer.js` is not imported in `app/layout.js`. Add it, then make the footer stick to the bottom on short pages:

```jsx
<body className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
</body>
```

**Practice:** Understand why `flex-1` on main works — it tells main to grow and fill all remaining vertical space, pushing the footer down.

#### 4.4 — Card grid with `col-span`

In the quick links grid, make the first card span 2 columns on `lg:` screens: `lg:col-span-2`. Add different content to it (e.g. a hero card with a background image).

### Concepts Covered
- `flex`, `flex-col`, `flex-row`, `flex-wrap`
- `grid`, `grid-cols-*`, `col-span-*`
- `gap-*`, `items-*`, `justify-*`, `place-*`
- `flex-1` for fill layouts
- `shrink-0` to prevent unwanted shrinking
- Sticky footer pattern

---

## Module 5 — Hover, Focus & Group States

**Goal:** Build polished interactive states without writing any custom CSS.

### State Variant Reference

```
hover:          → :hover
focus:          → :focus
focus-visible:  → :focus-visible (keyboard only)
active:         → :active
group-hover:    → parent has .group, child reacts
peer-*:         → sibling-based state
```

### Tasks

#### 5.1 — Understand `group` / `group-hover:`

The quick links card uses:
```
className="group p-6 border ..."
```
And its children use `group-hover:text-green-700`, `group-hover:translate-x-0.5`.

**Practice:** Add a `group-hover:scale-110` to the `<ArrowRight>` icon. Then add a second group nested inside — use named groups: `group/card` and `group-hover/card:` to target specifically.

#### 5.2 — Add `focus-visible:` rings to all interactive elements

Every `<Link>` and `<button>` should be keyboard-accessible. Add to each:
```
focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2
```

**Practice:** Tab through the navbar and quick links with keyboard and verify the ring appears. Understand why `focus-visible:` is preferred over `focus:` (doesn't show ring on mouse click).

#### 5.3 — Footer link hover effects

Currently footer links only have `hover:text-white`. Add a subtle slide:
```
hover:translate-x-1 transition-transform duration-200
```

**Practice:** Also add `hover:text-white/90` instead of `hover:text-white` — understand the `/opacity` variant on hover.

#### 5.4 — Button active states

The "Our Technology" button has `hover:bg-green-500`. Add:
```
active:scale-95 active:bg-green-700 transition-transform
```

**Practice:** Click and hold the button — it should shrink slightly on press, giving tactile feedback.

#### 5.5 — `peer` state (bonus)

In the contact form (Module 6), use `peer` to show an error label when an input is invalid:
```jsx
<input className="peer ..." required />
<p className="hidden peer-invalid:block text-red-500 text-xs">This field is required</p>
```

### Concepts Covered
- `hover:` `focus:` `active:` variants
- `focus-visible:` for accessible keyboard rings
- `group` / `group-hover:` parent→child state
- Named groups `group/name`
- `peer` / `peer-invalid:` sibling state
- `transition-*` `duration-*` `ease-*`

---

## Module 6 — Build Missing Pages from Scratch

**Goal:** Apply all previous modules. Each page is a real deliverable for the website.

Build in this order (simplest → most complex):

---

### 6.1 — `/contact` page

**Layout:** Single centered column, max-w-2xl.

**Sections:**
- Header: `text-4xl font-black` heading + subtext
- Form: name, email, company, message fields + submit button
- Contact info strip: MapPin + Mail icons (reuse from Footer)

**Practice targets:**
- Input styling: `border border-gray-200 rounded-lg px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-green-600`
- Label + input pairs with `flex flex-col gap-1.5`
- Textarea: `resize-none`
- Submit button: full width on mobile `w-full sm:w-auto`
- `peer` invalid state (from Module 5.5)

---

### 6.2 — `/about` page

**Layout:** Two-column on desktop (text left, image right), stacked on mobile.

**Sections:**
- Hero text block with `prose` or manual `max-w-prose`
- Two-column: `grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`
- Timeline of company milestones: vertical list with left border `border-l-2 border-green-600 pl-6 space-y-8`
- Location map embed or placeholder

**Practice targets:**
- `lg:grid-cols-2` two-column layout
- `order-last lg:order-first` to reorder columns on mobile
- Vertical timeline with `border-l` and `relative` / `before:` dot markers
- `prose` utility (requires `@tailwindcss/typography` plugin)

---

### 6.3 — `/why-us` page

**Layout:** Full-width sections alternating light/dark backgrounds.

**Sections:**
- Hero: dark `bg-gray-950` section with centered heading
- 3 feature rows: icon + heading + description, alternating image side
- Comparison table: Huroca vs traditional methods
- CTA block: green background, centered, two buttons

**Practice targets:**
- Alternating layout with `even:flex-row-reverse`
- Icon containers: `w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center`
- Table: `table-auto w-full border-collapse` with `border border-gray-200` cells
- Dark section text: `text-white` `text-gray-300` on `bg-gray-950`

---

### 6.4 — `/team` page

**Layout:** Card grid.

**Sections:**
- Header section
- Team grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`
- Each card: photo, name, role, short bio, LinkedIn icon

**Practice targets:**
- Card hover: `hover:-translate-y-1 hover:shadow-lg transition-all`
- `aspect-square` on photo container with `overflow-hidden rounded-xl`
- `object-cover` on `<Image>` to fill the container
- `truncate` or `line-clamp-2` for bio text overflow
- `shadow-*` utilities

---

### 6.5 — `/technology` page

**Layout:** Long-form multi-section page — the most complex.

**Sections:**
- Dark hero with headline
- "How it works" — numbered steps, horizontal on desktop
- Technical specs — 2-column grid of spec cards
- Computer vision demo — image with overlaid annotation boxes (absolute positioning)
- Partners/integrations strip (reuse from home)
- CTA section

**Practice targets:**
- Absolute positioned overlay boxes: `absolute inset-0` `relative overflow-hidden`
- Step indicators: `w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold`
- Spec cards with `divide-y divide-gray-100` for internal rows
- `sticky` section headers: `sticky top-16 z-10 bg-white/80 backdrop-blur-sm`
- `backdrop-blur-*` glassmorphism effect

---

## Module 7 — Wire Up the Footer

**Goal:** Quick win. Fix the missing footer and learn the sticky footer layout pattern.

### Tasks

#### 7.1 — Import Footer in layout

In `app/layout.js`:
```jsx
import Footer from '@/components/Footer';

<body className={`${inter.className} flex flex-col min-h-screen`}>
  <Navbar />
  <main className="flex-1">{children}</main>
  <Footer />
  <SpeedInsights />
</body>
```

#### 7.2 — Verify on short pages

Navigate to `/thank-you` or `/terms` — the footer should sit at the bottom even if the content is short. Without `flex-1` on main, the footer would float up.

### Concepts Covered
- `min-h-screen` on body
- `flex flex-col` for vertical full-height layout
- `flex-1` to fill remaining space

---

## Module 8 — Extract a Design System

**Goal:** Stop copy-pasting classes. Build reusable components with variant props.

### Tasks

#### 8.1 — `components/ui/Button.js`

The site has at least 4 different button styles scattered across files. Consolidate them:

```jsx
// variants: 'primary' | 'outline' | 'ghost'
export default function Button({ variant = 'primary', size = 'md', children, ...props }) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-full transition-colors';
  const variants = {
    primary: 'bg-green-600 hover:bg-green-500 text-white',
    outline: 'border border-white/30 hover:border-white/60 text-white',
    ghost:   'text-gray-600 hover:text-green-900',
  };
  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-8 py-4 text-base',
  };
  return (
    <button className={`${base} ${variants[variant]} ${sizes[size]}`} {...props}>
      {children}
    </button>
  );
}
```

**Practice:** Replace all button/link buttons in `app/home/page.js` and `app/Navbar.js` with this component.

#### 8.2 — `components/ui/SectionLabel.js`

This pattern repeats on every page:
```
text-xs font-bold text-gray-400 uppercase tracking-widest
```

Extract it:
```jsx
export default function SectionLabel({ children }) {
  return <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{children}</p>;
}
```

#### 8.3 — `components/ui/Card.js`

The quick links card pattern is reusable for team cards, feature cards, spec cards. Extract a base card with slot props.

#### 8.4 — Conditional classes with `clsx`

Install `clsx`:
```bash
npm install clsx
```

Use it in Button:
```js
import clsx from 'clsx';

className={clsx(base, variants[variant], sizes[size], props.className)}
```

**Practice:** Understand why `clsx` is better than template literals — it handles falsy values, arrays, and objects cleanly.

### Concepts Covered
- Component extraction
- Variant prop pattern
- Conditional classes
- `clsx` library
- Design token consistency across the codebase

---

## Quick Reference Cheatsheet

### Spacing Scale (most used)
```
1 = 4px    2 = 8px    3 = 12px   4 = 16px
5 = 20px   6 = 24px   8 = 32px   10 = 40px
12 = 48px  16 = 64px  20 = 80px  24 = 96px
```

### Typography
```
text-xs    = 12px     text-sm   = 14px
text-base  = 16px     text-lg   = 18px
text-xl    = 20px     text-2xl  = 24px
text-4xl   = 36px     text-6xl  = 60px
text-8xl   = 96px     text-9xl  = 128px

font-light = 300      font-normal = 400
font-medium = 500     font-semibold = 600
font-bold   = 700     font-black    = 900

tracking-tight    tracking-normal    tracking-wide
tracking-wider    tracking-widest
```

### Colors (green scale used in this project)
```
green-50   green-100  green-200  green-300  green-400
green-500  green-600  green-700  green-800  green-900
green-950
```

### Transitions
```
transition-colors    → only color properties
transition-transform → only transform
transition-all       → everything (use sparingly)
duration-150  duration-200  duration-300  duration-500
ease-in  ease-out  ease-in-out
```

### Z-index
```
z-0  z-10  z-20  z-30  z-40  z-50
```
*(Navbar uses `z-50`, hero overlay uses `z-[1]` and `z-[2]`, hero content uses `z-10`)*
