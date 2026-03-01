// SPA Hash Router
export class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPage = null;
    this.container = document.getElementById('page-content');
    
    window.addEventListener('hashchange', () => this.navigate());
    window.addEventListener('load', () => this.navigate());
  }

  navigate() {
    const hash = window.location.hash || '#/';
    const path = hash.replace('#', '');
    const route = this.routes[path] || this.routes['/'];

    if (this.currentPage === path) return;
    this.currentPage = path;

    // Fade out
    this.container.style.opacity = '0';
    this.container.style.transform = 'translateY(12px)';

    setTimeout(() => {
      this.container.innerHTML = '';
      const page = route();
      if (typeof page === 'string') {
        this.container.innerHTML = page;
      } else if (page instanceof HTMLElement) {
        this.container.appendChild(page);
      }

      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        link.classList.toggle('active', href === hash || (hash === '' && href === '#/'));
      });

      // Close mobile nav
      document.querySelector('.nav-mobile-overlay')?.classList.remove('open');
      document.querySelector('.nav-hamburger')?.classList.remove('open');

      // Fade in
      requestAnimationFrame(() => {
        this.container.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
        this.container.style.opacity = '1';
        this.container.style.transform = 'translateY(0)';
      });

      // Scroll to top
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Init scroll reveals
      setTimeout(() => initScrollReveal(), 100);
    }, 200);
  }

  go(path) {
    window.location.hash = path;
  }
}

// Scroll Reveal using Intersection Observer
export function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  elements.forEach(el => observer.observe(el));
}
