# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the marketing website for **Umqondo Logistics (Pty) Ltd** — a South African automotive logistics and dealership support company. The entire site is a single self-contained file with no build step, package manager, or framework.

## Running the Site

Open `umqondo-clean.html` directly in a browser, or serve it locally:

```bash
python3 -m http.server 8080
# then visit http://localhost:8080/umqondo-clean.html
```

There are no tests, no linting config, and no compilation step.

## File Structure

| File | Purpose |
|---|---|
| `umqondo-clean.html` | Entire website — HTML, CSS, and JS in one file |
| `Logo.jpeg` | Company logo |
| `CEO.jpeg` | Photo of Selby Gumede (Founder & CEO) |
| `team.jpeg` | Team group photo |
| `Home.jpeg`, `image1–4.jpeg` | Hero / section imagery |
| `video1.mp4` | Brand/promo video |
| `Umqondo-latest-1.pdf` | Company profile document |

## Architecture of `umqondo-clean.html`

The file is structured in clearly labelled sections (marked with `/* ═══ */` banners in CSS and `<!-- ══════ -->` comments in HTML):

**CSS (lines 9–750)** — all styles are inline, organised as:
1. **Design tokens** — CSS custom properties in `:root` (colours, fonts, spacing). Edit these to retheme the whole site.
2. **Component styles** — one block per section (nav, hero, clients, services, process, about, stats-band, team, contact, footer, mobile-menu).
3. **Responsive breakpoints** at the bottom: `1024px`, `768px`, `480px`.

**HTML (lines 752–1359)**:
- `#mobileMenu` — full-screen overlay nav
- `<nav class="nav">` — fixed top navigation
- `<section class="hero">` — two-column hero with a decorative dashboard graphic
- `.clients` — auto-scrolling client logo bar (CSS `@keyframes slide`)
- `<section id="services">` — 3-column service card grid
- `.stats-band` — 4-stat highlight bar
- `<section id="process">` — 4-step process + sticky metrics panel
- `<section id="about">` — split layout with company story
- `<section id="team">` — 4-person team grid
- `<section id="contact">` — contact info + quote request form
- `<footer>` — links and legal

**JavaScript (lines 1337–1358)** — three small behaviours:
- Nav shadow on scroll (`scrollY > 60`)
- Mobile menu open/close
- Scroll-reveal via `IntersectionObserver` on `.reveal` elements
- Form submit feedback (turns button green, no actual submission)

## Key Design Tokens

```css
--navy:  #0C1B33   /* Primary brand dark */
--red:   #C8102E   /* Accent / CTA colour */
--serif: 'Cormorant Garamond'
--sans:  'Outfit'
--max:   1240px    /* Max content width */
```

## Business Content Reference

- **Phone:** +27 84 908 6321
- **Email:** selby@umqondo.co.za
- **Address:** 5 Carol Court, Lawrence Road, Essenwood, Durban
- **Hours:** Mon–Sat 08:00–18:00
- **Founded:** 2008 (16+ years of service)
- **CEO:** Selby Gumede

The contact form currently has no backend — `submitForm()` shows a success message only. To wire it up, replace that function with a `fetch()` POST to a form endpoint (e.g. Formspree, Netlify Forms, or a custom API).
