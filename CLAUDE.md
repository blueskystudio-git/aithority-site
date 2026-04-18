# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Aithority is the client-facing brand of Blue Sky Studio — an AI-powered growth agency. This repo contains the marketing site for **getaithority.co** (canonical domain).

## Repository Structure

- `index.html` — Single-page static marketing site (all CSS inline in `<style>`, all JS inline in `<script>`)
- `BRAND.md` — Master brand document: voice, visual identity, positioning, pricing, color tokens, typography rules. **This is the source of truth for all brand decisions.**

There is no build system, no bundler, no package manager. The site is a single self-contained HTML file.

## Key Context

### Domain Migration In Progress
The site currently references `aithority.com` in OG tags and `mailto:` links. The canonical domain is `getaithority.co`. All `aithority.com` references need to be updated to `getaithority.co` before traffic arrives. The `aithority.agency` domain 301-redirects to `getaithority.co`.

### Design System (from BRAND.md)
- **Color tokens** are defined as CSS custom properties in `:root`. The lime accent `#C8FF00` (`--accent`) is the brand color — use sparingly.
- **Typography**: Inter (display/body, weights 300-900) + Playfair Display (italic only, used exclusively for emphasized phrases in headlines).
- **Headline pattern**: Every major H1/H2 pairs bold sans-serif with one `<em>` phrase in Playfair Display italic + accent color. One italic phrase per headline, no more.
- **Iconography**: Geometric unicode glyphs (◎ ▲ ⬡ ⟳ ◈ ◐ ◉ ◇) — do not replace with illustrated or colorful icons.
- **Scroll animations**: `.fade-in` class with IntersectionObserver, staggered 80ms per sibling (max 400ms).

### Voice Rules
- Short, declarative sentences. Confident, not arrogant.
- Evidence over adjectives. Numbers beat claims.
- Avoid: revolutionary, cutting-edge, disruptive, synergy, game-changing, unlock, harness, empower.

### Tech Stack (the agency's tooling, not this repo's)
Next.js, Vercel, Supabase, Claude API, n8n, Sanity CMS, Google Ads API, GBP API.
