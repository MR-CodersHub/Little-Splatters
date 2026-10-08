/**
 * LITTLE SPLATTERS — GLOBAL JAVASCRIPT
 * Kids Art & Painting Studio
 * ============================================================
 */

'use strict';

/* ============================================================
   UTILITY HELPERS
   ============================================================ */
const $ = (selector, context = document) => context.querySelector(selector);
const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];

const storage = {
  get: (key, fallback = null) => {
    try { const v = localStorage.getItem(key); return v !== null ? JSON.parse(v) : fallback; }
    catch { return fallback; }
  },
  set: (key, value) => {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
  }
};

/* ============================================================
   THEME (DARK / LIGHT MODE)
   ============================================================ */
const ThemeManager = {
  STORAGE_KEY: 'ls_theme',

  init() {
    const saved = storage.get(this.STORAGE_KEY, 'light');
    this.apply(saved);
    $$('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => this.toggle()));
  },

  apply(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    $$('[data-theme-toggle]').forEach(btn => {
      btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    });
    storage.set(this.STORAGE_KEY, theme);
  },

  toggle() {
    const current = document.documentElement.getAttribute('data-theme') || 'light';
    this.apply(current === 'dark' ? 'light' : 'dark');
  },

  getCurrent() {
    return document.documentElement.getAttribute('data-theme') || 'light';
  }
};

/* ============================================================
   DIRECTION (RTL / LTR)
   ============================================================ */
const DirectionManager = {
  STORAGE_KEY: 'ls_dir',

  init() {
    const saved = storage.get(this.STORAGE_KEY, 'ltr');
    this.apply(saved);
    $$('[data-dir-toggle]').forEach(btn => btn.addEventListener('click', () => this.toggle()));
  },

  apply(dir) {
    document.documentElement.setAttribute('dir', dir);
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en');
    $$('[data-dir-toggle]').forEach(btn => {
      btn.title = dir === 'rtl' ? 'Switch to LTR' : 'Switch to RTL';
      btn.innerHTML = dir === 'rtl' ? 'LTR' : 'RTL';
    });
    storage.set(this.STORAGE_KEY, dir);
  },

  toggle() {
    const current = document.documentElement.getAttribute('dir') || 'ltr';
    this.apply(current === 'rtl' ? 'ltr' : 'rtl');
  }
};

/* ============================================================
   NAVBAR
   ============================================================ */
const Navbar = {
  init() {
    const navbar = $('#navbar');
    if (!navbar) return;

    // Scroll effect
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });

    // Mobile menu toggle
    const toggle = $('#navbar-toggle');
    const mobileMenu = $('#mobile-menu');
    const closeBtn = $('#mobile-menu-close');

    if (toggle && mobileMenu) {
      toggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        toggle.setAttribute('aria-expanded', mobileMenu.classList.contains('open'));
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
      });
    }

    if (closeBtn && mobileMenu) {
      closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    }

    // Close mobile menu on link click
    $$('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Active nav link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    $$('.nav-link, .mobile-nav-link').forEach(link => {
      const href = link.getAttribute('href') || '';
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
};

/* ============================================================
   BACK TO TOP
   ============================================================ */
const BackToTop = {
  init() {
    const btn = $('#back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

/* ============================================================
   SCROLL REVEAL ANIMATIONS
   ============================================================ */
const ScrollReveal = {
  init() {
    const elements = $$('[data-reveal]');
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    elements.forEach(el => observer.observe(el));
  }
};

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
const Accordion = {
  init() {
    $$('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const item = header.closest('.accordion-item');
        const body = item.querySelector('.accordion-body');
        const isOpen = item.classList.contains('open');

        // Close all siblings
        const siblings = $$('.accordion-item', item.closest('.accordion'));
        siblings.forEach(sib => {
          if (sib !== item) {
            sib.classList.remove('open');
            const sibBody = sib.querySelector('.accordion-body');
            if (sibBody) sibBody.classList.remove('open');
          }
        });

        item.classList.toggle('open', !isOpen);
        if (body) body.classList.toggle('open', !isOpen);
      });

      // Keyboard support
      header.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          header.click();
        }
      });
    });
  }
};

/* ============================================================
   TABS
   ============================================================ */
const Tabs = {
  init() {
    $$('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const tabsContainer = btn.closest('[data-tabs]');
        if (!tabsContainer) return;

        const target = btn.getAttribute('data-tab');

        $$('.tab-btn', tabsContainer).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        $$('.tab-content', tabsContainer).forEach(content => {
          content.classList.toggle('active', content.getAttribute('data-tab-content') === target);
        });
      });
    });

    // Activate first tab in each tabs group
    $$('[data-tabs]').forEach(container => {
      const firstBtn = $('.tab-btn', container);
      if (firstBtn && !$$('.tab-btn.active', container).length) {
        firstBtn.click();
      }
    });
  }
};

/* ============================================================
   GALLERY FILTER
   ============================================================ */
const GalleryFilter = {
  init() {
    $$('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const container = btn.closest('[data-gallery-filter]');
        if (!container) return;

        const filter = btn.getAttribute('data-filter');

        $$('.filter-btn', container).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const items = $$('[data-category]', container);
        items.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-category') === filter) {
            item.style.display = '';
            item.style.animation = 'fadeInUp 0.4s ease';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }
};

/* ============================================================
   LIGHTBOX
   ============================================================ */
const Lightbox = {
  init() {
    const lightbox = $('#lightbox');
    if (!lightbox) return;

    const img = $('#lightbox-img');
    const close = $('#lightbox-close');

    $$('[data-lightbox]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const src = trigger.getAttribute('data-lightbox') || trigger.querySelector('img')?.src;
        if (src && img) img.src = src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    };

    if (close) close.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }
};

/* ============================================================
   TOAST NOTIFICATIONS
   ============================================================ */
const Toast = {
  container: null,

  init() {
    this.container = $('#toast-container');
    if (!this.container) {
      this.container = document.createElement('div');
      this.container.id = 'toast-container';
      this.container.className = 'toast-container';
      document.body.appendChild(this.container);
    }
  },

  show(type = 'info', title = '', message = '', duration = 4000) {
    const icons = { success: '✓', error: '✕', info: 'ℹ' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <div class="toast-icon">${icons[type] || icons.info}</div>
      <div class="toast-body">
        <span class="toast-title">${title}</span>
        ${message ? `<span class="toast-msg">${message}</span>` : ''}
      </div>
    `;

    this.container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, duration);
  },

  success(title, msg) { this.show('success', title, msg); },
  error(title, msg)   { this.show('error', title, msg); },
  info(title, msg)    { this.show('info', title, msg); }
};

/* ============================================================
   FORM VALIDATION
   ============================================================ */
const FormValidator = {
  rules: {
    required: (val) => val.trim() !== '' || 'This field is required',
    email: (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) || 'Please enter a valid email address',
    phone: (val) => val === '' || /^[\+\d\s\-\(\)]{7,20}$/.test(val) || 'Please enter a valid phone number',
    minLength: (min) => (val) => val.length >= min || `Must be at least ${min} characters`,
  },

  validateField(field) {
    const validators = (field.dataset.validate || '').split(',').filter(Boolean);
    const value = field.value;
    const errorEl = document.getElementById(field.id + '-error');

    for (const rule of validators) {
      const ruleKey = rule.trim();
      const validatorFn = this.rules[ruleKey];
      if (!validatorFn) continue;
      const result = validatorFn(value);
      if (result !== true) {
        field.classList.add('error');
        if (errorEl) { errorEl.textContent = result; errorEl.classList.add('show'); }
        return false;
      }
    }

    field.classList.remove('error');
    if (errorEl) { errorEl.textContent = ''; errorEl.classList.remove('show'); }
    return true;
  },

  initForm(formEl, onSuccess) {
    if (!formEl) return;

    const fields = $$('[data-validate]', formEl);

    fields.forEach(field => {
      field.addEventListener('blur', () => this.validateField(field));
      field.addEventListener('input', () => {
        if (field.classList.contains('error')) this.validateField(field);
      });
    });

    formEl.addEventListener('submit', (e) => {
      e.preventDefault();
      const allValid = fields.every(f => this.validateField(f));
      if (allValid && onSuccess) onSuccess(formEl);
    });
  }
};

/* ============================================================
   TRIAL BOOKING FORM
   ============================================================ */
const TrialForm = {
  init() {
    const form = $('#trial-form');
    if (!form) return;

    FormValidator.initForm(form, (f) => {
      const btn = f.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Sending...';
      btn.disabled = true;

      setTimeout(() => {
        f.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        Toast.success('Booking Request Sent! 🎨', 'We\'ll contact you within 24 hours to confirm your trial class.');
        const successMsg = $('#booking-success');
        if (successMsg) {
          successMsg.style.display = 'block';
          setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
        }
      }, 1500);
    });
  }
};

/* ============================================================
   CONTACT FORM
   ============================================================ */
const ContactForm = {
  init() {
    const form = $('#contact-form');
    if (!form) return;

    FormValidator.initForm(form, (f) => {
      const btn = f.querySelector('[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '⏳ Sending...';
      btn.disabled = true;

      setTimeout(() => {
        f.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        Toast.success('Message Sent! 🎉', 'We\'ll get back to you within 24 hours.');
      }, 1500);
    });
  }
};

/* ============================================================
   AUTH FORMS
   ============================================================ */
const AuthForms = {
  init() {
    const loginForm = $('#login-form');
    const registerForm = $('#register-form');

    if (loginForm) {
      FormValidator.initForm(loginForm, () => {
        Toast.success('Welcome Back! 🎨', 'You\'ve been logged in successfully.');
        setTimeout(() => {
          const inPages = window.location.pathname.replace(/\\/g, '/').includes('/pages/');
          window.location.href = inPages ? '../index.html' : 'index.html';
        }, 1500);
      });
    }

    if (registerForm) {
      FormValidator.initForm(registerForm, () => {
        Toast.success('Account Created! 🌟', 'Welcome to Little Splatters! Check your email to verify.');
        setTimeout(() => { registerForm.reset(); }, 2000);
      });
    }
  }
};

/* ============================================================
   NEWSLETTER FORM
   ============================================================ */
const Newsletter = {
  init() {
    $$('.newsletter-form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = form.querySelector('input[type="email"]');
        if (!emailInput || !emailInput.value.trim()) {
          Toast.error('Oops!', 'Please enter a valid email address.');
          return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
          Toast.error('Invalid Email', 'Please enter a valid email address.');
          return;
        }
        emailInput.value = '';
        Toast.success('Subscribed! 🎉', 'You\'ll receive our latest art tips and class updates.');
      });
    });
  }
};

/* ============================================================
   STAT COUNTER ANIMATION
   ============================================================ */
const StatCounter = {
  init() {
    const counters = $$('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(el => observer.observe(el));
  },

  animate(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 2000;
    const start = performance.now();

    const update = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(eased * target).toLocaleString() + (el.getAttribute('data-suffix') || '');
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }
};

/* ============================================================
   PAGE TRANSITION
   ============================================================ */
const PageTransition = {
  overlay: null,

  init() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'page-transition';
    document.body.appendChild(this.overlay);

    // Reveal page
    this.overlay.classList.add('leaving');
    setTimeout(() => this.overlay.classList.remove('leaving'), 500);

    // Intercept internal links
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') ||
          href.startsWith('tel:') || href.startsWith('http') ||
          link.getAttribute('target') === '_blank') return;

      e.preventDefault();
      this.overlay.classList.add('entering');

      setTimeout(() => {
        window.location.href = href;
      }, 400);
    });
  }
};

/* ============================================================
   SMOOTH SCROLL FOR ANCHOR LINKS
   ============================================================ */
const SmoothScroll = {
  init() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const targetId = link.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      const navbarHeight = parseInt(getComputedStyle(document.documentElement)
        .getPropertyValue('--navbar-height')) || 80;
      const top = target.getBoundingClientRect().top + window.scrollY - navbarHeight - 20;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  }
};

/* ============================================================
   COMING SOON NEWSLETTER
   ============================================================ */
const ComingSoonForm = {
  init() {
    const form = $('#coming-soon-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.value = '';
        Toast.success('You\'re on the list! 🎨', 'We\'ll notify you when we launch.');
      } else {
        Toast.error('Invalid email', 'Please enter a valid email address.');
      }
    });
  }
};

/* ============================================================
   COUNTDOWN TIMER (coming-soon page)
   ============================================================ */
const Countdown = {
  LAUNCH_DATE: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now

  init() {
    const el = document.getElementById('countdown');
    if (!el) return;

    // Allow a custom launch date via data attribute
    const customDate = el.dataset.launchDate;
    if (customDate) this.LAUNCH_DATE = new Date(customDate);

    this.tick();
    setInterval(() => this.tick(), 1000);
  },

  tick() {
    const now = Date.now();
    let diff = Math.max(0, Math.floor((this.LAUNCH_DATE - now) / 1000));

    const d = Math.floor(diff / 86400); diff %= 86400;
    const h = Math.floor(diff / 3600);  diff %= 3600;
    const m = Math.floor(diff / 60);    diff %= 60;
    const s = diff;

    const pad = n => String(n).padStart(2, '0');

    const days = document.getElementById('countdown-days');
    const hours = document.getElementById('countdown-hours');
    const mins = document.getElementById('countdown-mins');
    const secs = document.getElementById('countdown-secs');

    if (days) days.textContent = pad(d);
    if (hours) hours.textContent = pad(h);
    if (mins) mins.textContent = pad(m);
    if (secs) secs.textContent = pad(s);
  }
};

/* ============================================================
   FLOATING BADGES ANIMATION
   ============================================================ */
const FloatingBadges = {
  init() {
    $$('.float-badge').forEach((badge, i) => {
      badge.style.animationDelay = `${i * 0.8}s`;
    });
  }
};

/* ============================================================
   INITIALIZE ALL
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  ThemeManager.init();
  DirectionManager.init();
  Navbar.init();
  BackToTop.init();
  ScrollReveal.init();
  Accordion.init();
  Tabs.init();
  GalleryFilter.init();
  Lightbox.init();
  Toast.init();
  TrialForm.init();
  ContactForm.init();
  AuthForms.init();
  Newsletter.init();
  StatCounter.init();
  Countdown.init();
  PageTransition.init();
  SmoothScroll.init();
  ComingSoonForm.init();
  FloatingBadges.init();

  // Log init
  console.log('%c🎨 Little Splatters — Kids Art Studio', 'color: #F07C72; font-size: 16px; font-weight: bold;');
});
