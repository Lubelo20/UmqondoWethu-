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

// Active nav link — matches data-page on <body> to data-page on nav anchors
const page = document.body.dataset.page;
if (page) {
  const activeLink = document.querySelector(`.nav__links a[data-page="${page}"]`);
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
