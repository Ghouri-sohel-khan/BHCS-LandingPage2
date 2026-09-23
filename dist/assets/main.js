const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav?.classList.toggle('is-open', open);
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('is-open');
}));

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const consultationForm = document.querySelector('#consultation-request');
consultationForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = document.querySelector('#form-status');
  if (!consultationForm.reportValidity()) return;

  const data = new FormData(consultationForm);
  const message = [
    'Hello BHCS, I would like to request consultation guidance.',
    `Name: ${data.get('name')}`,
    `Country: ${data.get('country')}`,
    `Phone / WhatsApp: ${data.get('phone')}`,
    `Treatment requirement: ${data.get('treatment')}`,
    `Preferred contact method: ${data.get('contactMethod')}`
  ].join('\n');
  const whatsappUrl = `https://wa.me/919989777863?text=${encodeURIComponent(message)}`;
  if (status) status.textContent = 'WhatsApp will open with your draft. Review the details and tap Send there.';
  const opened = window.open(whatsappUrl, '_blank');
  if (opened) opened.opener = null;
  else window.location.assign(whatsappUrl);
});

const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -24px 0px' });
  reveals.forEach((element) => observer.observe(element));
} else {
  reveals.forEach((element) => element.classList.add('is-visible'));
}
