// Mobile nav toggle
const nav = document.querySelector('.nav');
const toggle = document.querySelector('.nav-toggle');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href');
    if (targetId && targetId.length > 1) {
      const el = document.querySelector(targetId);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav?.classList.remove('open');
        toggle?.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear().toString();

// Form handling
const authForm = document.getElementById('authForm');
const successModal = document.getElementById('successModal');
const closeModal = document.getElementById('closeModal');

if (authForm) {
  authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    authForm.reset();
    successModal.style.display = 'flex';
    closeModal.focus();
  });
}

if (closeModal) {
  closeModal.addEventListener('click', () => {
    successModal.style.display = 'none';
  });
}

if (successModal) {
  successModal.addEventListener('click', (e) => {
    if (e.target === successModal) successModal.style.display = 'none';
  });
}
