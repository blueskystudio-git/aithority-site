# Aithority Design System — Master

> Source of truth for all UI decisions across Aithority surfaces.
> Page-specific overrides live in `pages/<page-name>.md`.

---

## Style

**Classification:** Exaggerated Minimalism + Dark OLED

- Oversized 900-weight typography with extreme negative space
- Deep black backgrounds (not pure `#000` — avoids OLED smearing)
- Single vibrant accent color used with restraint
- Hairline borders over solid dividers
- Geometric unicode glyphs for iconography — no illustrated/colorful icons, no emoji
- Performance: excellent (no blur effects, no heavy compositing)
- WCAG AA compliant

**Anti-patterns to avoid:**
- Mixing multiple accent colors
- Glassmorphism, gradients, or heavy blur effects
- Illustrated icons or emoji as structural elements
- Dense layouts — generous whitespace is the style
- Words: revolutionary, cutting-edge, disruptive, synergy, game-changing, unlock, harness, empower

---

## Color Tokens

| Token | Value | Role | Contrast on --black |
|-------|-------|------|---------------------|
| `--black` | `#050506` | Primary background | — |
| `--black-2` | `#0c0c0e` | Elevated surfaces, cards | — |
| `--white` | `#F2F0EB` | Primary text (warm off-white) | ~14:1 |
| `--muted` | `#888885` | Secondary text, labels | ~5.3:1 (AA) |
| `--muted-2` | `#6e6e6b` | Tertiary text, borders, scrollbar, icons | ~4.5:1 (AA) |
| `--accent` | `#C8FF00` | Electric lime — CTAs, italics, eyebrows, emphasis | High |
| `--accent-dim` | `#a8d600` | Accent hover state | — |
| `--accent-glow` | `rgba(200,255,0,0.08)` | Hover surfaces | — |
| `--border` | `rgba(242,240,235,0.1)` | Hairline rules | — |
| `--border-strong` | `rgba(242,240,235,0.18)` | Card hover borders | — |
| `--surface` | `rgba(242,240,235,0.03)` | Card hover fills | — |

**Future tokens (for dashboard phase):**
| Token | Value | Role |
|-------|-------|------|
| `--destructive` | `#EF4444` | Error, delete, destructive actions |
| `--success` | `#22C55E` | Confirmation, positive states |

**Rules:**
- The lime accent `#C8FF00` is the brand — it earns power from restraint
- Never use pure `#FFFFFF` for text — the warm `#F2F0EB` is intentional
- `--muted-2` is safe for body text at all sizes (4.5:1 AA)
- No additional accent colors — ever

---

## Typography

| Role | Font | Weight | Tracking | Line-height |
|------|------|--------|----------|-------------|
| Display H1/H2 | Inter | 900 | -0.035 to -0.04em | 0.90–0.95 |
| Eyebrows / section labels | Inter | 700 | 0.22–0.28em (uppercase) | 1.2 |
| Body | Inter | 300 | normal | 1.75 |
| Labels / UI | Inter | 400–500 | 0.05–0.1em | 1.4 |
| Serif accent (italic only) | Playfair Display | 400 italic | normal | inherit from parent |
| Numbers / codes | System monospace | 400 | normal | 1.4 |

**Font loading:**
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Playfair+Display:ital@1&display=swap" rel="stylesheet" />
```

**Rules:**
- Every major H1/H2 pairs bold Inter with one `<em>` phrase in Playfair Display italic + accent color
- One italic phrase per headline, no more — the italic is the emphasis
- Playfair Display is single-purpose: never use it outside italic headline phrases
- Display headlines: tight tracking, low line-height, max-width constrained
- Body copy: light weight (300), generous line-height (1.75), muted color

---

## Layout

- **Max content width:** 1200px
- **Section padding:** 8rem vertical, 3rem horizontal (desktop); 5rem / 1.5rem (mobile)
- **Hero padding:** 14rem top, 10rem bottom (desktop); 9rem / 6rem (mobile)
- **Grid background (hero):** 80px x 80px hairline grid with radial mask
- **Radial lime blob:** top-right of hero, bottom of CTA section
- **Hairline borders:** 0.5px rules separate sections; stronger on hover
- **Spacing scale:** 4px base, 8px increments

### Breakpoints
| Breakpoint | Layout changes |
|------------|----------------|
| 1024px | Services: 2-col, Tracks intro: 1-col |
| 768px | Mobile nav, 1-col grids, reduced padding |
| 480px | Stats stack vertically |

---

## Motion & Animation

| Element | Behavior | Timing |
|---------|----------|--------|
| Scroll fade-in | translateY(28px) + opacity 0→1 | 750ms ease-out, 80ms stagger (max 400ms) |
| Service card top border | scaleX(0→1) from left on hover | 350ms cubic-bezier(0.4, 0, 0.2, 1) |
| Button hover | translateY(-1px) | 150ms |
| Color transitions | All hover color changes | 200ms |
| Smooth scroll | Anchor navigation | CSS scroll-behavior: smooth |

**Rules:**
- `prefers-reduced-motion: reduce` disables all animations and transitions
- Only animate `transform` and `opacity` — never `width`, `height`, or `top`/`left`
- Maximum 1–2 animated elements per viewport
- No decorative-only animation

---

## Headline Pattern

Every major headline follows this structure:

```
Bold sans-serif statement. <em>Italic serif phrase.</em>
```

Examples from the site:
- Search. *Built* by machines. Run by experts.
- Every lever. *Pulled together.*
- Two tracks. *One platform.*
- Intake. Build. *Ship. Optimize.*
- Built on the *right tools.*
- Let's build your *growth engine.*

**One italic phrase per headline, no more.**

---

## Iconography

- Geometric unicode glyphs: `◎ ▲ ⬡ ⟳ ◈ ◐ ◉ ◇`
- Monospace-adjacent, mechanical, low-key
- Colored `--muted-2` at rest, `--accent` on hover
- Do not replace with illustrated icons, emoji, or icon libraries

---

## Logo / Wordmark

- "AITHORITY" — uppercase, 900 weight, 0.18em letter-spacing
- The **O** is colored `--accent` (lime) — this is the mark
- Footer variant: same treatment at 0.85rem
- No standalone logo mark exists yet

---

## Component Patterns

### Buttons
| Variant | Style |
|---------|-------|
| Primary | `--accent` bg, `--black` text, 700 weight, uppercase, 0.12em tracking |
| Ghost | `--muted` text, bottom border `--muted-2`, hover → `--white` |

### Cards (Service)
- 0.5px border, no radius, no shadow
- Top border accent line animates in on hover (scaleX)
- Background shifts to `--surface` on hover

### Eyebrow Labels
- Uppercase, 0.22–0.28em tracking, 700 weight, `--accent` color
- Preceded by a 16–24px horizontal accent line

### Pricing Tiers
- Stacked rows with `--surface` background
- Tier name left, price right in `--accent`

---

## Accessibility Checklist

- [x] Primary text contrast >= 4.5:1 (14:1 actual)
- [x] Secondary text `--muted` contrast >= 4.5:1 (5.3:1 actual)
- [x] Tertiary text `--muted-2` contrast >= 4.5:1 (4.5:1 actual)
- [x] `prefers-reduced-motion` respected — all animations disabled
- [x] Semantic HTML landmarks (`nav`, `section`, `footer` with roles)
- [x] ARIA labels on navigation, sections, and icon elements
- [x] Keyboard navigation: Escape closes mobile menu
- [ ] Skip-to-content link (to add)
- [ ] Focus-visible styles (to add)

---

## Landing Page Structure

```
1. Nav (fixed, blurred backdrop)
2. Hero — tagline + sub + CTA + stats
3. Services — 6 cards in 3-col grid
4. Tracks — 2 pricing cards with tier rows
5. Process — 4 steps in horizontal layout
6. Tech Stack — 8 items in 4-col grid
7. CTA — centered headline + email CTA
8. Footer — logo + copyright + nav links
```

**Conversion gaps to address:**
- Add client logos / social proof when case studies ship
- Add per-tier CTA buttons on pricing cards
- Add FAQ section before final CTA
