/* ============================================
   Las Muñoz - JavaScript Principal
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initScrollToTop();
  initStatsCounter();
  initTestimonialsCarousel();
  initFAQ();
  initActiveNavLink();
  initPricingToggle();
});

/* ============================================
   Navbar
   ============================================ */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  });
}

/* ============================================
   Mobile Menu
   ============================================ */
function initMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const menu = document.querySelector('.mobile-menu');
  const overlay = document.querySelector('.mobile-overlay');
  const closeBtn = document.querySelector('.mobile-menu-close');

  if (!btn || !menu || !overlay) return;

  const openMenu = () => {
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  btn.addEventListener('click', openMenu);
  closeBtn?.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Cerrar al hacer clic en un link
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

/* ============================================
   Scroll Reveal (Intersection Observer)
   ============================================ */
let scrollRevealObserver = null;

function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  if (!scrollRevealObserver) {
    scrollRevealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            scrollRevealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );
  }

  reveals.forEach(el => scrollRevealObserver.observe(el));

  // Observar también elementos .reveal añadidos dinámicamente al DOM
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType !== 1) return;
        if (node.classList && node.classList.contains('reveal')) {
          scrollRevealObserver.observe(node);
        }
        const nested = node.querySelectorAll && node.querySelectorAll('.reveal');
        if (nested && nested.length) {
          nested.forEach((el) => scrollRevealObserver.observe(el));
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });
}

/* ============================================
   Scroll to Top Button
   ============================================ */
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 600) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================
   Stats Counter (Counter Up)
   ============================================ */
function initStatsCounter() {
  const counters = document.querySelectorAll('[data-counter]');
  if (!counters.length) return;

  const animateCounter = (el) => {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 2000;
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = target / steps;
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        el.textContent = Math.ceil(current);
        setTimeout(update, stepTime);
      } else {
        el.textContent = target;
      }
    };
    update();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(counter => observer.observe(counter));
}

/* ============================================
   Testimonios Carousel
   ============================================ */
function initTestimonialsCarousel() {
  const carousel = document.querySelector('.testimonials-carousel');
  if (!carousel) return;

  const track = carousel.querySelector('.testimonials-track');
  const slides = carousel.querySelectorAll('.testimonial-slide');
  const prevBtn = carousel.querySelector('.testimonial-prev');
  const nextBtn = carousel.querySelector('.testimonial-next');
  const dotsContainer = carousel.querySelector('.testimonial-dots');

  if (!slides.length) return;

  let currentIndex = 0;
  let autoPlayInterval;

  // Crear dots
  if (dotsContainer) {
    slides.forEach((_, i) => {
      const dot = document.createElement('button');
      dot.classList.add('testimonial-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  const updateDots = () => {
    if (!dotsContainer) return;
    dotsContainer.querySelectorAll('.testimonial-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  };

  const goToSlide = (index) => {
    currentIndex = index;
    if (track) {
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
    updateDots();
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % slides.length;
    goToSlide(currentIndex);
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    goToSlide(currentIndex);
  };

  prevBtn?.addEventListener('click', prevSlide);
  nextBtn?.addEventListener('click', nextSlide);

  // Auto play
  const startAutoPlay = () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
  };

  const stopAutoPlay = () => {
    clearInterval(autoPlayInterval);
  };

  startAutoPlay();

  carousel.addEventListener('mouseenter', stopAutoPlay);
  carousel.addEventListener('mouseleave', startAutoPlay);
}

/* ============================================
   FAQ Accordion
   ============================================ */
function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      // Cerrar todos
      faqItems.forEach(other => other.classList.remove('active'));
      // Abrir el actual si estaba cerrado
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ============================================
   Active Nav Link
   ============================================ */
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   Pricing Toggle (Mensual/Anual)
   ============================================ */
function initPricingToggle() {
  const toggle = document.querySelector('.pricing-toggle');
  if (!toggle) return;

  toggle.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const period = e.target.dataset.period;
      toggle.querySelectorAll('button').forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      document.querySelectorAll('.pricing-card').forEach(card => {
        const monthly = card.querySelector('.price-monthly');
        const yearly = card.querySelector('.price-yearly');
        if (period === 'yearly') {
          monthly?.classList.add('hidden');
          yearly?.classList.remove('hidden');
        } else {
          monthly?.classList.remove('hidden');
          yearly?.classList.add('hidden');
        }
      });
    }
  });
}

/* ============================================
   Helper: Format Currency CLP
   ============================================ */
function formatCLP(amount) {
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  }).format(amount);
}
window.formatCLP = formatCLP;

/* ============================================
   Helper: Render Stars
   ============================================ */
function renderStars(rating) {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
}
window.renderStars = renderStars;