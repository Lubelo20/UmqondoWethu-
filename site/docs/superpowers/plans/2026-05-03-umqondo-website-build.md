# Umqondo Website Build — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert `umqondo-clean.html` (approved single-file mockup) into a production-ready 6-page static website with real assets integrated and EmailJS contact form wired up.

**Architecture:** Six standalone HTML pages sharing one `css/style.css` and one `js/main.js`. Nav and footer HTML are duplicated across all pages (intentional — no build tooling). Assets are organized under `assets/images/`, `assets/video/`, and `assets/docs/`.

**Tech Stack:** Plain HTML5, CSS3 (custom properties), vanilla JavaScript, EmailJS browser SDK (CDN, contact page only), Google Fonts (CDN).

---

## Reference: Shared HTML Blocks

These two blocks are copied verbatim into every page. Define them once here; tasks reference this section.

### Mobile Menu
```html
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-menu__close" id="mobileClose">✕</button>
  <a href="services.html">Services</a>
  <a href="process.html">Process</a>
  <a href="about.html">About</a>
  <a href="team.html">Team</a>
  <a href="contact.html">Contact</a>
</div>
```

### Nav
```html
<nav class="nav" id="mainNav">
  <div class="container">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/images/logo.jpeg" class="nav__logo-img" alt="Umqondo">
        UMQONDO
      </a>
      <ul class="nav__links">
        <li><a href="services.html">Services</a></li>
        <li><a href="process.html">Process</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="contact.html" class="nav__cta">Get a Quote</a></li>
      </ul>
      <div class="nav__phone">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7A16 16 0 0 0 15.3 16l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +27 84 908 6321
      </div>
      <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>
```

### Footer
```html
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div>
        <div class="footer__logo">
          <img src="assets/images/logo.jpeg" class="nav__logo-img" alt="Umqondo">
          UMQONDO
        </div>
        <p class="footer__brand-tagline">South Africa's trusted automotive logistics and dealership support partner. Moving vehicles, powering dealerships — since 2008.</p>
      </div>
      <div>
        <div class="footer__col-h">Services</div>
        <div class="footer__col-links">
          <a href="services.html">Vehicle Storage</a>
          <a href="services.html">Professional Drivers</a>
          <a href="services.html">Washbay Management</a>
          <a href="services.html">Digital Development</a>
          <a href="services.html">Gift Presentation</a>
        </div>
      </div>
      <div>
        <div class="footer__col-h">Company</div>
        <div class="footer__col-links">
          <a href="about.html">About Umqondo</a>
          <a href="team.html">Our Team</a>
          <a href="process.html">How It Works</a>
          <a href="contact.html">Contact</a>
          <a href="contact.html">Careers</a>
        </div>
      </div>
      <div>
        <div class="footer__col-h">Contact</div>
        <div class="footer__col-links">
          <a href="tel:+27849086321">+27 84 908 6321</a>
          <a href="mailto:selby@umqondo.co.za">selby@umqondo.co.za</a>
          <a href="#">Essenwood, Durban</a>
          <a href="#">Mon – Sat: 08:00 – 18:00</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Umqondo Logistics (Pty) Ltd. All rights reserved. Proudly South African.</span>
      <div class="footer__bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">BBBEE Certificate</a>
      </div>
    </div>
  </div>
</footer>
```

### Page Shell (sub-pages — not index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PAGE_TITLE — Umqondo Automotive Logistics</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body data-page="PAGE_KEY">
  <!-- PASTE: Mobile Menu -->
  <!-- PASTE: Nav -->

  <!-- PAGE CONTENT HERE -->

  <!-- PASTE: Footer -->
  <script src="js/main.js"></script>
</body>
</html>
```

Replace `PAGE_TITLE` and `PAGE_KEY` per page:

| Page | PAGE_TITLE | PAGE_KEY |
|---|---|---|
| services.html | Services | services |
| process.html | How It Works | process |
| about.html | About Us | about |
| team.html | Our Team | team |
| contact.html | Contact Us | contact |

---

## File Map

| File | Action | Responsibility |
|---|---|---|
| `assets/images/logo.jpeg` | Move from `Logo.jpeg` | Nav + footer logo |
| `assets/images/home.jpeg` | Move from `Home.jpeg` | Hero video poster (mobile fallback) |
| `assets/images/ceo.jpeg` | Move from `CEO.jpeg` | Selby Gumede team card photo |
| `assets/images/team.jpeg` | Move from `team.jpeg` | About section left panel photo |
| `assets/images/image1.jpeg` | Move from `image1.jpeg` | Reserved (future use) |
| `assets/images/image2.jpeg` | Move from `image2.jpeg` | Reserved (future use) |
| `assets/images/image4.jpeg` | Move from `image4.jpeg` | Reserved (future use) |
| `assets/video/video1.mp4` | Move from `video1.mp4` | Hero autoplay loop |
| `assets/docs/company-profile.pdf` | Move from `Umqondo-latest-1.pdf` | PDF download on about page |
| `css/style.css` | Create | All styles from mockup + new additions |
| `js/main.js` | Create | Nav scroll, scroll-reveal, mobile menu, active nav, EmailJS |
| `index.html` | Create | Hero + clients bar + stats band |
| `services.html` | Create | 6 service cards grid |
| `process.html` | Create | 4-step process + metrics panel |
| `about.html` | Create | Company story + team photo + PDF download |
| `team.html` | Create | 4 team member cards |
| `contact.html` | Create | Contact info + EmailJS quote form |

---

## Task 1: Set Up Directories and Organize Assets

**Files:**
- Create: `assets/images/`, `assets/video/`, `assets/docs/`, `css/`, `js/`
- Move: all source files to their `assets/` destinations

- [ ] **Step 1: Create directory structure**

```bash
mkdir -p assets/images assets/video assets/docs css js
```

Run from the project root (`/Users/ndumisomngomezulu/Downloads/Umqondo`).

- [ ] **Step 2: Copy and rename asset files**

```bash
cp Logo.jpeg          assets/images/logo.jpeg
cp Home.jpeg          assets/images/home.jpeg
cp CEO.jpeg           assets/images/ceo.jpeg
cp team.jpeg          assets/images/team.jpeg
cp image1.jpeg        assets/images/image1.jpeg
cp image2.jpeg        assets/images/image2.jpeg
cp image4.jpeg        assets/images/image4.jpeg
cp video1.mp4         assets/video/video1.mp4
cp "Umqondo-latest-1.pdf" assets/docs/company-profile.pdf
```

- [ ] **Step 3: Verify all assets are in place**

```bash
find assets -type f | sort
```

Expected output:
```
assets/docs/company-profile.pdf
assets/images/ceo.jpeg
assets/images/home.jpeg
assets/images/image1.jpeg
assets/images/image2.jpeg
assets/images/image4.jpeg
assets/images/logo.jpeg
assets/images/team.jpeg
assets/video/video1.mp4
```

---

## Task 2: Create `css/style.css`

**Files:**
- Create: `css/style.css`

- [ ] **Step 1: Extract base styles from the mockup**

Open `umqondo-clean.html`. Copy everything between `<style>` and `</style>` (lines 9–750) and paste it into `css/style.css`.

- [ ] **Step 2: Append new styles at the bottom of `css/style.css`**

Add these rules after the last line in the file:

```css
/* ════════════════════════════════════
   LOGO IMAGE
════════════════════════════════════ */
.nav__logo-img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
}

/* ════════════════════════════════════
   ACTIVE NAV LINK
════════════════════════════════════ */
.nav__links a.active { color: var(--ink); }
.nav__links a.active::after { width: 100%; }

/* ════════════════════════════════════
   HERO VIDEO (replaces dashboard card)
════════════════════════════════════ */
.hero__right::before { display: none; }

.hero__video {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
.hero__video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(12, 27, 51, 0.45);
  z-index: 1;
}
.hero__badge { z-index: 2; }

/* ════════════════════════════════════
   ABOUT — REAL PHOTO
════════════════════════════════════ */
.about__real-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
}
.about__img .about__badge {
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  z-index: 1;
}

/* ════════════════════════════════════
   TEAM — REAL PHOTO
════════════════════════════════════ */
.team-card__real-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

/* ════════════════════════════════════
   SUB-PAGE TOP OFFSET (fixed nav clearance)
════════════════════════════════════ */
.section--page-top {
  padding-top: calc(72px + clamp(5rem, 10vw, 9rem));
}
```

- [ ] **Step 3: Verify**

Open `css/style.css` in a text editor. Confirm the file ends with the `.section--page-top` rule and all new rules are present.

---

## Task 3: Create `js/main.js`

**Files:**
- Create: `js/main.js`

- [ ] **Step 1: Create `js/main.js` with the full content below**

```js
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';

// Nav scroll shadow
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () =>
  nav.classList.toggle('scrolled', scrollY > 60));

// Mobile menu
document.getElementById('hamburger').addEventListener('click', () =>
  document.getElementById('mobileMenu').classList.add('open'));
document.getElementById('mobileClose').addEventListener('click', () =>
  document.getElementById('mobileMenu').classList.remove('open'));

// Active nav link — reads data-page attribute on <body>
const page = document.body.dataset.page;
if (page) {
  const activeLink = document.querySelector(`.nav__links a[href="${page}.html"]`);
  if (activeLink) activeLink.classList.add('active');
}

// Scroll reveal
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Contact form — EmailJS
function submitForm(btn) {
  const form = btn.closest('.contact__form');
  const firstName = form.querySelector('input[name="firstName"]').value.trim();
  const lastName  = form.querySelector('input[name="lastName"]').value.trim();
  const email     = form.querySelector('input[name="email"]').value.trim();
  const phone     = form.querySelector('input[name="phone"]').value.trim();
  const service   = form.querySelector('select[name="service"]').value;
  const message   = form.querySelector('textarea[name="message"]').value.trim();

  if (!firstName || !lastName || !email || !phone || !service || !message) {
    btn.textContent = 'Please fill in all fields.';
    btn.style.background = '#EF4444';
    setTimeout(() => {
      btn.innerHTML = 'Send Request <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>';
      btn.style.background = '';
    }, 3000);
    return;
  }

  btn.textContent = 'Sending…';
  btn.style.pointerEvents = 'none';

  emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
    from_name:  `${firstName} ${lastName}`,
    from_email: email,
    phone,
    service,
    message,
  }, EMAILJS_PUBLIC_KEY)
    .then(() => {
      btn.textContent = "✓ Request received — we'll be in touch within 30 minutes.";
      btn.style.background = '#22C55E';
    })
    .catch(() => {
      btn.textContent = 'Something went wrong — please call us directly.';
      btn.style.background = '#EF4444';
      btn.style.pointerEvents = 'auto';
    });
}
```

- [ ] **Step 2: Verify the file exists**

```bash
wc -l js/main.js
```

Expected: 55–65 lines.

---

## Task 4: Build `index.html`

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create `index.html` with the content below**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Umqondo — Automotive Logistics &amp; Dealership Support</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Outfit:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

<!-- MOBILE MENU -->
<div class="mobile-menu" id="mobileMenu">
  <button class="mobile-menu__close" id="mobileClose">✕</button>
  <a href="services.html">Services</a>
  <a href="process.html">Process</a>
  <a href="about.html">About</a>
  <a href="team.html">Team</a>
  <a href="contact.html">Contact</a>
</div>

<!-- NAV -->
<nav class="nav" id="mainNav">
  <div class="container">
    <div class="nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/images/logo.jpeg" class="nav__logo-img" alt="Umqondo">
        UMQONDO
      </a>
      <ul class="nav__links">
        <li><a href="services.html">Services</a></li>
        <li><a href="process.html">Process</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="contact.html">Contact</a></li>
        <li><a href="contact.html" class="nav__cta">Get a Quote</a></li>
      </ul>
      <div class="nav__phone">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.7A16 16 0 0 0 15.3 16l.86-.86a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +27 84 908 6321
      </div>
      <button class="hamburger" id="hamburger">
        <span></span><span></span><span></span>
      </button>
    </div>
  </div>
</nav>

<!-- HERO -->
<section class="hero" id="top">
  <div class="hero__left">
    <div class="hero__eyebrow">Automotive Logistics &amp; Dealership Support</div>
    <h1 class="hero__h1">
      Moving Vehicles.<br>
      <em>Powering Dealerships.</em><br>
      Across South Africa.
    </h1>
    <p class="hero__sub">
      Umqondo delivers end-to-end automotive logistics, professional driver supply, stock yard management, and dealership digital solutions — with 16 years of trusted service nationwide.
    </p>
    <div class="hero__actions">
      <a href="contact.html" class="btn btn--primary">
        Request a Quote
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </a>
      <a href="services.html" class="btn btn--ghost">View Services</a>
    </div>
    <div class="hero__stats">
      <div>
        <div class="hero__stat-num">16+</div>
        <div class="hero__stat-label">Years Experience</div>
      </div>
      <div>
        <div class="hero__stat-num">98%</div>
        <div class="hero__stat-label">Client Satisfaction</div>
      </div>
      <div>
        <div class="hero__stat-num">RSA</div>
        <div class="hero__stat-label">Nationwide</div>
      </div>
    </div>
  </div>

  <div class="hero__right">
    <div class="hero__badge">
      <strong>16+</strong>
      <span>Years of Service</span>
    </div>
    <video class="hero__video" autoplay muted loop playsinline poster="assets/images/home.jpeg">
      <source src="assets/video/video1.mp4" type="video/mp4">
    </video>
    <div class="hero__video-overlay"></div>
  </div>
</section>

<!-- CLIENTS BAR -->
<div class="clients">
  <div class="clients__label">Trusted by South Africa's leading organisations</div>
  <div style="overflow:hidden">
    <div class="clients__track">
      <div class="clients__item">Liberty</div>
      <div class="clients__item">Centrick</div>
      <div class="clients__item">Carrs</div>
      <div class="clients__item">Boss Design</div>
      <div class="clients__item">Mayhew</div>
      <div class="clients__item">Auto Group SA</div>
      <div class="clients__item">DriveZone</div>
      <div class="clients__item">FleetPro</div>
      <div class="clients__item">Liberty</div>
      <div class="clients__item">Centrick</div>
      <div class="clients__item">Carrs</div>
      <div class="clients__item">Boss Design</div>
      <div class="clients__item">Mayhew</div>
      <div class="clients__item">Auto Group SA</div>
      <div class="clients__item">DriveZone</div>
      <div class="clients__item">FleetPro</div>
    </div>
  </div>
</div>

<!-- STATS BAND -->
<div class="stats-band">
  <div class="container">
    <div class="stats-band__grid">
      <div class="stats-band__item reveal">
        <div class="stats-band__num">16<span>+</span></div>
        <div class="stats-band__label">Years of Experience</div>
      </div>
      <div class="stats-band__item reveal delay-1">
        <div class="stats-band__num">98<span>%</span></div>
        <div class="stats-band__label">Customer Satisfaction</div>
      </div>
      <div class="stats-band__item reveal delay-2">
        <div class="stats-band__num">500<span>+</span></div>
        <div class="stats-band__label">Vehicles Moved Monthly</div>
      </div>
      <div class="stats-band__item reveal delay-3">
        <div class="stats-band__num">9</div>
        <div class="stats-band__label">Provinces Covered</div>
      </div>
    </div>
  </div>
</div>

<!-- FOOTER -->
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div>
        <div class="footer__logo">
          <img src="assets/images/logo.jpeg" class="nav__logo-img" alt="Umqondo">
          UMQONDO
        </div>
        <p class="footer__brand-tagline">South Africa's trusted automotive logistics and dealership support partner. Moving vehicles, powering dealerships — since 2008.</p>
      </div>
      <div>
        <div class="footer__col-h">Services</div>
        <div class="footer__col-links">
          <a href="services.html">Vehicle Storage</a>
          <a href="services.html">Professional Drivers</a>
          <a href="services.html">Washbay Management</a>
          <a href="services.html">Digital Development</a>
          <a href="services.html">Gift Presentation</a>
        </div>
      </div>
      <div>
        <div class="footer__col-h">Company</div>
        <div class="footer__col-links">
          <a href="about.html">About Umqondo</a>
          <a href="team.html">Our Team</a>
          <a href="process.html">How It Works</a>
          <a href="contact.html">Contact</a>
          <a href="contact.html">Careers</a>
        </div>
      </div>
      <div>
        <div class="footer__col-h">Contact</div>
        <div class="footer__col-links">
          <a href="tel:+27849086321">+27 84 908 6321</a>
          <a href="mailto:selby@umqondo.co.za">selby@umqondo.co.za</a>
          <a href="#">Essenwood, Durban</a>
          <a href="#">Mon – Sat: 08:00 – 18:00</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© 2026 Umqondo Logistics (Pty) Ltd. All rights reserved. Proudly South African.</span>
      <div class="footer__bottom-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#">BBBEE Certificate</a>
      </div>
    </div>
  </div>
</footer>

<script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Start local server and verify index.html**

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080/index.html` in a browser. Verify:
- Logo image loads in nav (no broken image icon)
- Hero right panel shows the video playing (or home.jpeg if video not supported)
- Navy overlay makes the badge readable
- Stats band shows all 4 figures
- Clients bar scrolls automatically
- Hamburger opens mobile menu; links close the menu by navigating away

---

## Task 5: Build `services.html`

**Files:**
- Create: `services.html`

- [ ] **Step 1: Create `services.html`**

Use the Page Shell from the Reference section. `PAGE_TITLE = Services`, `PAGE_KEY = services`. Replace `<!-- PAGE CONTENT HERE -->` with:

```html
<section class="section section--page-top">
  <div class="container">
    <div class="section__header reveal">
      <div class="label">What We Offer</div>
      <h2 class="section__h2">A Complete Automotive<br><em>Service Ecosystem</em></h2>
      <p class="section__sub">Every operational need your dealership or logistics team requires — delivered with precision, professionalism, and a personal touch.</p>
    </div>
    <div class="services__grid reveal delay-1">

      <div class="service-card">
        <div class="service-card__num">01</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><rect x="1" y="3" width="15" height="13" rx="2"/><path d="M16 8h4l3 5v3h-7V8z"/><circle cx="5.5" cy="17.5" r="2.5"/><circle cx="18.5" cy="17.5" r="2.5"/></svg>
        </div>
        <h3 class="service-card__h3">Vehicle Storage &amp; Stock Yard Management</h3>
        <p class="service-card__p">Professionally managed, secure facilities for your vehicle inventory. Full stock control, tracking, and yard management scaled to your dealership.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

      <div class="service-card">
        <div class="service-card__num">02</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="M7 7h4M7 10h6M7 13h3"/></svg>
        </div>
        <h3 class="service-card__h3">Dealership Digital Development</h3>
        <p class="service-card__p">Modern digital platforms, online showrooms, and CRM integrations that transform how dealerships engage customers and manage operations.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

      <div class="service-card">
        <div class="service-card__num">03</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg>
        </div>
        <h3 class="service-card__h3">Supply of Professional Drivers</h3>
        <p class="service-card__p">Vetted, trained, and professionally presented drivers available on demand — for deliveries, test drives, collections, and long-term placements.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

      <div class="service-card">
        <div class="service-card__num">04</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><path d="M12 22c5.5-3.5 8-7 8-11a8 8 0 1 0-16 0c0 4 2.5 7.5 8 11z"/><path d="M9 12l2 2 4-4"/></svg>
        </div>
        <h3 class="service-card__h3">Courtesy Drivers &amp; Washbay Management</h3>
        <p class="service-card__p">Premium courtesy driver services for your clients and comprehensive washbay management — every vehicle immaculate, every time.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

      <div class="service-card">
        <div class="service-card__num">05</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><path d="M20 12V22H4V12"/><path d="M22 7H2v5h20V7z"/><path d="M12 22V7"/><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/></svg>
        </div>
        <h3 class="service-card__h3">Vehicle Flowers &amp; Gift Presentation</h3>
        <p class="service-card__p">Bespoke floral arrangements and ceremonial gift styling that turn a vehicle handover into an unforgettable experience for your clients.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

      <div class="service-card">
        <div class="service-card__num">06</div>
        <div class="service-card__icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C8102E" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>
        </div>
        <h3 class="service-card__h3">General &amp; Ancillary Services</h3>
        <p class="service-card__p">Door-to-door logistics, windscreen chip repairs, vehicle branding, smash-and-grab installations, and fleet maintenance programmes nationwide.</p>
        <div class="service-card__link">Learn more <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify**

Open `http://localhost:8080/services.html`. Verify:
- "Services" nav link has the underline active indicator
- All 6 service cards render in a 3-column grid
- Content is not obscured by the fixed nav (there is visible space above the section header)

---

## Task 6: Build `process.html`

**Files:**
- Create: `process.html`

- [ ] **Step 1: Create `process.html`**

Use the Page Shell. `PAGE_TITLE = How It Works`, `PAGE_KEY = process`. Replace `<!-- PAGE CONTENT HERE -->` with:

```html
<section class="section section--mist section--page-top">
  <div class="container">
    <div class="process__layout">
      <div>
        <div class="section__header reveal">
          <div class="label">How It Works</div>
          <h2 class="section__h2">Four Steps to<br><em>Seamless Delivery</em></h2>
          <p class="section__sub">Our streamlined process ensures your request is handled with complete transparency from start to sign-off.</p>
        </div>
        <div class="process__steps">
          <div class="process__step reveal delay-1">
            <div class="process__step-num">01</div>
            <div>
              <div class="process__step-h">Submit Your Request</div>
              <p class="process__step-p">Fill in our quote form or call us directly. We respond within 30 minutes during business hours with a confirmed plan and pricing.</p>
            </div>
          </div>
          <div class="process__step reveal delay-2">
            <div class="process__step-num">02</div>
            <div>
              <div class="process__step-h">Driver &amp; Resources Assigned</div>
              <p class="process__step-p">We match your request to the ideal professional driver and allocate all necessary resources. You receive full driver details instantly.</p>
            </div>
          </div>
          <div class="process__step reveal delay-3">
            <div class="process__step-num">03</div>
            <div>
              <div class="process__step-h">Vehicle Pickup &amp; Documentation</div>
              <p class="process__step-p">Our driver arrives on time. All vehicle condition checks are photographed, documented, and shared with you digitally in real time.</p>
            </div>
          </div>
          <div class="process__step reveal delay-4">
            <div class="process__step-num">04</div>
            <div>
              <div class="process__step-h">Safe Delivery &amp; Sign-Off</div>
              <p class="process__step-p">Vehicle delivered in pristine condition. A digital service report, photos, and sign-off confirmation sent directly to you on completion.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="process__visual reveal delay-2">
        <div class="process__visual-label">Service Dashboard · Live</div>
        <div class="process__metrics">
          <div class="process__metric">
            <span class="process__metric-label">Active Movements Today</span>
            <span class="process__metric-val">23</span>
          </div>
          <div class="process__metric">
            <span class="process__metric-label">Avg. Response Time</span>
            <span class="process__metric-val">18 min</span>
          </div>
          <div class="process__metric">
            <span class="process__metric-label">Drivers Available</span>
            <span class="process__metric-val">12</span>
          </div>
          <div class="process__metric">
            <span class="process__metric-label">On-Time Delivery Rate</span>
            <span class="process__metric-val">97.4%</span>
          </div>
          <div class="process__metric">
            <span class="process__metric-label">Open Requests</span>
            <span class="process__metric-val">4</span>
          </div>
        </div>
        <div class="process__divider"></div>
        <div class="process__status">
          <div class="process__status-dot"></div>
          All systems live — Mon–Sat 08:00–18:00
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify**

Open `http://localhost:8080/process.html`. Verify:
- "Process" nav link is underlined
- 4-step list and navy metrics panel render side by side
- Mist background covers the full section

---

## Task 7: Build `about.html`

**Files:**
- Create: `about.html`

- [ ] **Step 1: Create `about.html`**

Use the Page Shell. `PAGE_TITLE = About Us`, `PAGE_KEY = about`. Replace `<!-- PAGE CONTENT HERE -->` with:

```html
<section class="section section--page-top">
  <div class="container">
    <div class="about__layout">
      <div class="about__img reveal">
        <img src="assets/images/team.jpeg" alt="Umqondo team" class="about__real-img">
        <div class="about__badge">
          <strong>16+</strong>
          <span>Years of Excellence</span>
        </div>
      </div>
      <div class="reveal delay-2">
        <div class="label">Our Story</div>
        <h2 class="section__h2" style="margin-top:.8rem">
          Built on Trust.<br><em>Driven by Purpose.</em>
        </h2>
        <div class="about__text" style="margin-top:1.8rem">
          <p><strong>Umqondo</strong> — meaning <em>"the plan"</em> in Zulu — was founded with a singular mission: to bring professionalism, reliability, and innovation to automotive logistics in South Africa.</p>
          <p>What began as a specialist vehicle transportation service has grown into a comprehensive dealership support ecosystem. We transport new and used vehicles across every province, supply professional drivers, manage stock yards, and deliver digital transformation for automotive retailers.</p>
          <p>Led by founder and CEO <strong>Selby Gumede</strong>, our team brings decades of combined automotive industry experience — and an uncompromising commitment to service excellence.</p>
        </div>
        <div class="about__values">
          <div class="about__value">Nationwide coverage across all 9 South African provinces</div>
          <div class="about__value">Fully vetted, professionally trained driver network</div>
          <div class="about__value">Real-time digital tracking and reporting</div>
          <div class="about__value">BBBEE compliant — proudly South African</div>
          <div class="about__value">Monday to Saturday operations, 08:00 – 18:00</div>
        </div>
        <div style="display:flex;gap:1rem;flex-wrap:wrap;margin-top:2.5rem">
          <a href="contact.html" class="btn btn--primary">
            Partner With Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="assets/docs/company-profile.pdf" download class="btn btn--ghost">
            Download Company Profile
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify**

Open `http://localhost:8080/about.html`. Verify:
- "About" nav link is underlined
- `team.jpeg` fills the left panel (no broken image)
- Red "16+ Years of Excellence" badge overlays the photo at bottom-right
- "Download Company Profile" button is visible
- Clicking the download button triggers a file download of the PDF

---

## Task 8: Build `team.html`

**Files:**
- Create: `team.html`

- [ ] **Step 1: Create `team.html`**

Use the Page Shell. `PAGE_TITLE = Our Team`, `PAGE_KEY = team`. Replace `<!-- PAGE CONTENT HERE -->` with:

```html
<section class="section section--mist section--page-top">
  <div class="container">
    <div class="section__header section__header--center reveal">
      <div class="label" style="justify-content:center">Our People</div>
      <h2 class="section__h2">The Team Behind<br><em>The Umqondo Standard</em></h2>
      <p class="section__sub" style="margin:0 auto">A leadership team with deep roots in logistics, technology, and automotive retail across South Africa.</p>
    </div>
    <div class="team__grid">

      <div class="team-card reveal delay-1">
        <div class="team-card__img">
          <img src="assets/images/ceo.jpeg" alt="Selby Gumede" class="team-card__real-img">
          <div class="team-card__overlay"></div>
        </div>
        <div class="team-card__name">Selby Gumede</div>
        <div class="team-card__role">Founder &amp; CEO</div>
      </div>

      <div class="team-card reveal delay-2">
        <div class="team-card__img">
          <div class="team-card__img-bg"></div>
          <div class="team-card__avatar">👨🏿‍💼</div>
          <div class="team-card__overlay"></div>
        </div>
        <div class="team-card__name">Phumlani Dlamini</div>
        <div class="team-card__role">Operations Manager</div>
      </div>

      <div class="team-card reveal delay-3">
        <div class="team-card__img">
          <div class="team-card__img-bg"></div>
          <div class="team-card__avatar">👩🏿‍💼</div>
          <div class="team-card__overlay"></div>
        </div>
        <div class="team-card__name">Sanelisiwe Y. Mlaba</div>
        <div class="team-card__role">Managing Director</div>
      </div>

      <div class="team-card reveal delay-4">
        <div class="team-card__img">
          <div class="team-card__img-bg"></div>
          <div class="team-card__avatar">👩🏿‍💻</div>
          <div class="team-card__overlay"></div>
        </div>
        <div class="team-card__name">Nontobeko Gumede</div>
        <div class="team-card__role">Accounts Executive</div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Verify**

Open `http://localhost:8080/team.html`. Verify:
- "Team" nav link is underlined
- Selby Gumede's card shows `ceo.jpeg` (not an emoji)
- Other 3 cards show gradient backgrounds with emoji avatars
- All 4 cards are in a 4-column grid on desktop

---

## Task 9: Build `contact.html`

**Files:**
- Create: `contact.html`

Note: This page loads the EmailJS CDN script. The form uses `name` attributes on inputs so `submitForm()` can read values by field name.

- [ ] **Step 1: Create `contact.html`**

Use the Page Shell. `PAGE_TITLE = Contact Us`, `PAGE_KEY = contact`. Add the EmailJS CDN before `<script src="js/main.js"></script>`. Replace `<!-- PAGE CONTENT HERE -->` with:

```html
<section class="section section--page-top">
  <div class="container">
    <div class="contact__layout">
      <div class="contact__info reveal">
        <div class="label">Get In Touch</div>
        <h2 class="section__h2" style="margin-top:.8rem">
          Let's Move<br><em>Your Business Forward</em>
        </h2>
        <p class="section__sub" style="margin-top:1rem">Ready to elevate your automotive operations? Fill in the form or reach us directly via WhatsApp for an immediate response.</p>

        <div class="contact__info-items">
          <div class="contact__info-item">
            <div class="contact__info-icon">📞</div>
            <div>
              <div class="contact__info-label">Phone</div>
              <div class="contact__info-val"><a href="tel:+27849086321">+27 84 908 6321</a></div>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon">✉️</div>
            <div>
              <div class="contact__info-label">Email</div>
              <div class="contact__info-val"><a href="mailto:selby@umqondo.co.za">selby@umqondo.co.za</a></div>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon">📍</div>
            <div>
              <div class="contact__info-label">Office</div>
              <div class="contact__info-val">5 Carol Court, Lawrence Road<br>Essenwood, Durban</div>
            </div>
          </div>
          <div class="contact__info-item">
            <div class="contact__info-icon">🕐</div>
            <div>
              <div class="contact__info-label">Hours</div>
              <div class="contact__info-val">Mon – Sat: 08:00 – 18:00</div>
            </div>
          </div>
        </div>

        <a href="https://wa.me/27849086321?text=Hi+Umqondo!+I'd+like+to+request+a+quote." class="wa-link" target="_blank" rel="noopener">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          Chat on WhatsApp
        </a>
      </div>

      <div class="contact__form reveal delay-2">
        <h3>Request a Quote</h3>
        <div class="form__row">
          <div class="form__group">
            <label class="form__label">First Name</label>
            <input type="text" name="firstName" class="form__input" placeholder="Sipho">
          </div>
          <div class="form__group">
            <label class="form__label">Last Name</label>
            <input type="text" name="lastName" class="form__input" placeholder="Dlamini">
          </div>
        </div>
        <div class="form__row">
          <div class="form__group">
            <label class="form__label">Email</label>
            <input type="email" name="email" class="form__input" placeholder="you@company.co.za">
          </div>
          <div class="form__group">
            <label class="form__label">Phone</label>
            <input type="tel" name="phone" class="form__input" placeholder="+27 82 000 0000">
          </div>
        </div>
        <div class="form__group">
          <label class="form__label">Service Required</label>
          <select name="service" class="form__select">
            <option value="">Select a service...</option>
            <option>Vehicle Storage &amp; Stock Yard Management</option>
            <option>Dealership Digital Development</option>
            <option>Supply of Professional Drivers</option>
            <option>Courtesy Drivers &amp; Washbay Management</option>
            <option>Vehicle Flowers &amp; Gift Presentation</option>
            <option>General Services</option>
            <option>Multiple Services</option>
          </select>
        </div>
        <div class="form__group">
          <label class="form__label">Message</label>
          <textarea name="message" class="form__textarea" placeholder="Tell us about your requirements, fleet size, timeframes, or any specific needs..."></textarea>
        </div>
        <button class="form__submit" onclick="submitForm(this)">
          Send Request
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
        </button>
      </div>
    </div>
  </div>
</section>
```

And the bottom of `contact.html` (before `</body>`) should be:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
<script src="js/main.js"></script>
```

- [ ] **Step 2: Verify form validation (no EmailJS credentials needed)**

Open `http://localhost:8080/contact.html`. Verify:
- "Contact" nav link is underlined
- Click "Send Request" with empty fields → button turns red, shows "Please fill in all fields." for 3 seconds then resets
- Fill all fields and click → button shows "Sending…" then turns red with "Something went wrong — please call us directly." (expected — no real EmailJS credentials yet)
- WhatsApp button links to the correct `wa.me` URL

---

## Task 10: Final Cross-Page Verification

- [ ] **Step 1: Check all nav links from every page**

With `python3 -m http.server 8080` running, open each page and click every nav link:

| From | Click | Expected destination |
|---|---|---|
| index.html | Services | services.html |
| index.html | Process | process.html |
| index.html | About | about.html |
| index.html | Team | team.html |
| index.html | Contact / Get a Quote | contact.html |
| services.html | Logo (UMQONDO) | index.html |
| about.html | Logo (UMQONDO) | index.html |
| contact.html | Logo (UMQONDO) | index.html |

- [ ] **Step 2: Check footer links from every page**

On each page, click footer links and verify they navigate correctly (About → about.html, Our Team → team.html, etc.).

- [ ] **Step 3: Check active nav underline on each page**

| Page | Expected underlined link |
|---|---|
| services.html | Services |
| process.html | Process |
| about.html | About |
| team.html | Team |
| contact.html | Contact |
| index.html | None (home has no nav link) |

- [ ] **Step 4: Check all real images load**

Open each page and confirm no broken image icons:
- `index.html` — logo in nav, logo in footer
- `about.html` — `team.jpeg` left panel, logo in nav/footer
- `team.html` — `ceo.jpeg` for Selby, logo in nav/footer

- [ ] **Step 5: Confirm video plays on index.html**

Open `index.html` on desktop. The right panel should show a video playing. On mobile (or with video disabled), `home.jpeg` should display as the poster image.

- [ ] **Step 6: Verify PDF download on about.html**

Click "Download Company Profile" on about.html. Browser should either download `company-profile.pdf` or open it in a new tab — not show a 404 error.

- [ ] **Step 7: Verify scroll-reveal animations**

On any page, scroll down slowly. Section content should fade up into view as it enters the viewport.

---

## Deployment Checklist (cPanel)

After all tasks pass:

- [ ] Fill in EmailJS credentials in `js/main.js` (3 constants at top of file)
- [ ] Send a real test email via the contact form on `contact.html`
- [ ] Zip the `public_html/` folder (or just its contents)
- [ ] Log into cPanel → File Manager → navigate to `public_html/`
- [ ] Upload zip → Extract Here → confirm files land at the root level (not inside a subfolder)
- [ ] Open `https://yourdomain.co.za` and repeat Task 10 verification steps on the live site
