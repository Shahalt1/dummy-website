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
if (authForm) {
  authForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(authForm);
    const data = Object.fromEntries(formData);
    
    // Show success message (in real app, this would send data to server)
    alert('Thank you for your submission! This is a demo form.\n\nSubmitted data:\n' + 
          'Name: ' + data.fullName + '\n' +
          'Email: ' + data.email + '\n' +
          'Company: ' + data.company + '\n' +
          'Interest: ' + data.interest);
    
    // Reset form
    authForm.reset();
  });
}
