// Smooth scroll for anchor links
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelectorAll('a.nav-link').forEach(l => l.classList.remove('active'));
    e.target.classList.add('active');
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Fade in animation on scroll
const fadeEls = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 }
);
fadeEls.forEach(el => observer.observe(el));
