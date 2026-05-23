# Umqondo Website — Design Spec

**Date:** 2026-05-03
**Project:** Umqondo Logistics (Pty) Ltd — Production Website
**Source mockup:** `umqondo-clean.html`

---

## Overview

Convert the single-file HTML mockup into a production-ready, multi-page static website for deployment on cPanel hosting. The design from the mockup is approved and carries over unchanged — this build separates concerns (HTML / CSS / JS), integrates real client assets, wires up the contact form, and splits the single page into six individual HTML pages.

---

## File Structure

```
public_html/
├── index.html          — Home: Hero + Stats band + Clients bar
├── services.html       — Services: 6 service cards grid
├── process.html        — How It Works: 4-step process + live metrics panel
├── about.html          — About: Company story + values + PDF download button
├── team.html           — Team: 4 team member cards
├── contact.html        — Contact: Info panel + EmailJS quote form
├── css/
│   └── style.css       — All styles extracted from mockup (no changes to design tokens)
├── js/
│   └── main.js         — Nav scroll behaviour, scroll-reveal, mobile menu, EmailJS form handler
└── assets/
    ├── images/
    │   ├── logo.jpeg
    │   ├── home.jpeg
    │   ├── ceo.jpeg
    │   ├── team.jpeg
    │   ├── image1.jpeg
    │   ├── image2.jpeg
    │   └── image4.jpeg
    ├── video/
    │   └── video1.mp4
    └── docs/
        └── company-profile.pdf
```

**Trade-off acknowledged:** The `<nav>` and `<footer>` HTML blocks are duplicated across all 6 pages. This is intentional for a plain static site — no build tooling required. Nav link updates must be made in all 6 files.

---

## Navigation

All nav links change from anchor scrolling to page links:

| Label | Link |
|---|---|
| Services | `services.html` |
| Process | `process.html` |
| About | `about.html` |
| Team | `team.html` |
| Contact / Get a Quote | `contact.html` |

The active page's nav link gets an `active` class so the current underline indicator stays visible. Each page sets its own active link via a `data-page` attribute on `<body>` and a small script in `main.js`.

---

## Asset Integration

| Asset | Placed In | Notes |
|---|---|---|
| `logo.jpeg` | Nav + Footer | The `.nav__logo-hex` div is replaced with `<img src="assets/images/logo.jpeg" class="nav__logo-img" alt="Umqondo">` at ~32px height, inline with the "UMQONDO" brand text |
| `video1.mp4` | Hero right panel (`index.html`) | Autoplay, muted, loop, no controls |
| `home.jpeg` | Hero video `poster` attribute | Shown on mobile where autoplay is blocked |
| `team.jpeg` | About left panel (`about.html`) | Replaces the year "2008" gradient placeholder |
| `ceo.jpeg` | Team card — Selby Gumede (`team.html`) | Replaces emoji avatar |
| `image1.jpeg` | Available for future use / blog | Not placed yet — reserved |
| `image2.jpeg` | Available for future use | Not placed yet — reserved |
| `image4.jpeg` | Available for future use | Not placed yet — reserved |
| `company-profile.pdf` | About page — "Download Company Profile" button | New addition below the values list |

**Team cards — remaining 3 members:** Phumlani Dlamini, Sanelisiwe Y. Mlaba, and Nontobeko Gumede use styled gradient placeholders (existing `.team-card__img-bg` style). Client supplies individual photos later to swap in.

---

## Hero Section (`index.html`)

- Right panel: `<video>` element, `autoplay muted loop playsinline`, `poster="assets/images/home.jpeg"`
- Semi-transparent navy overlay (`rgba(12,27,51,0.5)`) on the video so the "16+ Years of Service" badge remains readable
- On screens ≤ 1024px the right panel is already hidden by the existing CSS (`display:none`) — no change needed

---

## Contact Form — EmailJS Integration

**Library:** EmailJS browser SDK loaded via CDN in `contact.html` only (not on all pages).

**Config block at top of `main.js`:**
```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';
```

**Template variables** (to configure in EmailJS dashboard):
- `{{from_name}}` — first + last name
- `{{from_email}}` — email address
- `{{phone}}` — phone number
- `{{service}}` — selected service
- `{{message}}` — message textarea

**Form behaviour:**
1. On submit: validate all fields are non-empty
2. Show loading state on button ("Sending…")
3. Call `emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY)`
4. On success: green button, "✓ Request received — we'll be in touch within 30 minutes."
5. On error: red button, "Something went wrong — please call us directly."

The WhatsApp link (`wa.me/27849086321`) stays on the page as a direct contact alternative.

**EmailJS setup steps for client:**
1. Create account at emailjs.com (free tier: 200 emails/month)
2. Add Email Service (connect Gmail/Outlook)
3. Create Email Template using the variables above
4. Copy Service ID, Template ID, Public Key into the config block

---

## Shared Page Structure

Every page follows this skeleton:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page] — Umqondo Automotive Logistics</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:...&family=Outfit:...&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="[pagename]">
  <!-- Mobile menu -->
  <!-- Nav -->
  <!-- Page content -->
  <!-- Footer -->
  <script src="js/main.js"></script>
  <!-- EmailJS CDN on contact.html only -->
</body>
</html>
```

---

## Deployment

1. Zip the entire `public_html/` folder contents
2. Upload via cPanel File Manager → Extract into `public_html/`
3. Fill in EmailJS credentials in `js/main.js`
4. Test the contact form end-to-end before handing to client

---

## Out of Scope

- Backend / server-side code
- CMS or content editing interface
- Blog or dynamic content
- Individual photos for 3 team members (client to supply later)
- SEO meta tags beyond basic title/description (can be added per-page later)
