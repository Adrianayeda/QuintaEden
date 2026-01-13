/* =========================
   SCROLL SUAVE PARA ANCLAS
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.length > 1) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

/* =========================
   ANIMACIÓN AL ENTRAR (INTERSECTION OBSERVER)
========================= */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

// Elementos que se animan al entrar
document.querySelectorAll(
  '.card-hover, .gallery-item, section h2'
).forEach(el => observer.observe(el));

/* =========================
   EFECTO LEVE EN HERO (PARALLAX SIMPLE)
========================= */
const hero = document.querySelector('.hero-gradient');

if (hero) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollY * 0.3}px`;
  });
}

/* =========================
   AÑO AUTOMÁTICO (POR SI LUEGO AGREGAS FOOTER)
========================= */
const yearEl = document.querySelector('[data-year]');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
