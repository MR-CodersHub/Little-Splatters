/**
 * LITTLE SPLATTERS — SHARED COMPONENTS
 * Navbar and Footer injected dynamically
 */

'use strict';

/* ============================================================
   PATH HELPER — supports root index.html + pages/*.html layout
   ============================================================ */
function inPagesDir() {
  return window.location.pathname.replace(/\\/g, '/').includes('/pages/');
}
function siteLink(file) {
  if (!file || file.startsWith('http') || file.startsWith('#') ||
      file.startsWith('mailto:') || file.startsWith('tel:')) return file;
  const hashIndex = file.indexOf('#');
  const path = hashIndex >= 0 ? file.slice(0, hashIndex) : file;
  const hash = hashIndex >= 0 ? file.slice(hashIndex) : '';
  if (!path.endsWith('.html')) return file;
  if (path === 'index.html') return inPagesDir() ? '../index.html' : 'index.html';
  return inPagesDir() ? path + hash : 'pages/' + path + hash;
}

/* ============================================================
   NAVBAR HTML
   ============================================================ */
function getNavbarHTML(activePage = '') {
  const pages = [
    { label: 'Home', href: 'index.html', key: 'home', sub: [
      { label: 'Home — General', href: 'index.html' },
      { label: 'Home — Art Education', href: 'home2.html' },
    ]},
    { label: 'About', href: 'about.html', key: 'about' },
    { label: 'Services', href: 'services.html', key: 'services', sub: [
      { label: 'All Services', href: 'services.html' },
      { label: 'Service Details', href: 'service-details.html' },
    ]},
    { label: 'Blog', href: 'blog.html', key: 'blog', sub: [
      { label: 'Blog', href: 'blog.html' },
      { label: 'Blog Details', href: 'blog-details.html' },
    ]},
    { label: 'Pricing', href: 'pricing.html', key: 'pricing' },
    { label: 'Contact', href: 'contact.html', key: 'contact' },
  ];

  const navItems = pages.map(page => {
    const isActive = activePage === page.key || (page.sub && page.sub.some(s => s.href.replace('.html','') === activePage));
    if (page.sub) {
      const subLinks = page.sub.map(s =>
        `<a href="${siteLink(s.href)}">${s.label}</a>`
      ).join('');
      return `
        <li class="nav-item nav-dropdown">
          <a href="${siteLink(page.href)}" class="nav-link ${isActive ? 'active' : ''}" aria-haspopup="true">
            ${page.label} <span class="nav-dropdown-icon"><i class="fa-solid fa-chevron-down" aria-hidden="true"></i></span>
          </a>
          <div class="nav-dropdown-menu">${subLinks}</div>
        </li>`;
    }
    return `
      <li class="nav-item">
        <a href="${siteLink(page.href)}" class="nav-link ${isActive ? 'active' : ''}">${page.label}</a>
      </li>`;
  }).join('');

  const mobileLinks = [
    { label: '<i class="fa-solid fa-house" aria-hidden="true"></i> Home — General', href: 'index.html', key: 'home' },
    { label: '<i class="fa-solid fa-palette" aria-hidden="true"></i> Home — Art Education', href: 'home2.html', key: 'home2' },
    { label: '<i class="fa-solid fa-heart" aria-hidden="true"></i> About Us', href: 'about.html', key: 'about' },
    { label: '<i class="fa-solid fa-paintbrush" aria-hidden="true"></i> Services', href: 'services.html', key: 'services' },
    { label: '<i class="fa-solid fa-masks-theater" aria-hidden="true"></i> Service Details', href: 'service-details.html', key: 'service-details' },
    { label: '<i class="fa-solid fa-book-open" aria-hidden="true"></i> Blog', href: 'blog.html', key: 'blog' },
    { label: '<i class="fa-solid fa-pen-to-square" aria-hidden="true"></i> Blog Details', href: 'blog-details.html', key: 'blog-details' },
    { label: '<i class="fa-solid fa-phone" aria-hidden="true"></i> Contact Us', href: 'contact.html', key: 'contact' },
    { label: '<i class="fa-solid fa-sack-dollar" aria-hidden="true"></i> Pricing', href: 'pricing.html', key: 'pricing' },
    { label: '<i class="fa-solid fa-lock" aria-hidden="true"></i> Login / Register', href: 'login.html', key: 'login' },
    { label: '<i class="fa-solid fa-wrench" aria-hidden="true"></i> Maintenance', href: 'maintenance.html', key: 'maintenance' },
    { label: '<i class="fa-solid fa-map" aria-hidden="true"></i> Sitemap', href: 'sitemap.html', key: 'sitemap' },
    { label: '<i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 404 Page', href: '404.html', key: '404' },
    { label: '<i class="fa-solid fa-rocket" aria-hidden="true"></i> Coming Soon', href: 'coming-soon.html', key: 'coming-soon' },
  ].map(l => `<a href="${siteLink(l.href)}" class="mobile-nav-link ${activePage === l.key ? 'active' : ''}">${l.label}</a>`).join('');

  return `
<nav class="navbar" id="navbar" role="navigation" aria-label="Main navigation">
  <div class="container navbar-inner">
    <a href="${siteLink('index.html')}" class="navbar-logo" aria-label="Little Splatters Home — Where Every Child Creates">
      <div class="navbar-logo-icon" aria-hidden="true"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
      <div class="navbar-logo-stack">
        <div class="navbar-logo-text">Little <span>Splatters</span></div>
        <small class="navbar-tagline">Where Every Child Creates</small>
      </div>
    </a>

    <ul class="navbar-nav" role="menubar">
      ${navItems}
    </ul>

    <div class="navbar-controls">
      <button class="navbar-btn-icon" data-theme-toggle title="Toggle Dark Mode" aria-label="Toggle dark mode"><i class="fa-solid fa-moon" aria-hidden="true"></i></button>
      <button class="navbar-btn-icon" data-dir-toggle title="Toggle RTL/LTR" aria-label="Toggle text direction" style="font-size:0.75rem;font-weight:700;">RTL</button>
      <a href="${siteLink('login.html')}" class="btn btn-primary btn-sm" style="display:none;" id="nav-login-btn" aria-label="Login or Register">Login</a>
      <button class="navbar-menu-toggle" id="navbar-toggle" aria-expanded="false" aria-controls="mobile-menu" aria-label="Open menu"><i class="fa-solid fa-bars" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobile navigation">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:24px;">
    <a href="${siteLink('index.html')}" class="navbar-logo" aria-label="Little Splatters Home — Where Every Child Creates">
      <div class="navbar-logo-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
      <div class="navbar-logo-stack">
        <div class="navbar-logo-text">Little <span>Splatters</span></div>
        <small class="navbar-tagline">Where Every Child Creates</small>
      </div>
    </a>
    <button class="navbar-btn-icon" id="mobile-menu-close" aria-label="Close menu"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
  </div>
  <nav class="mobile-nav" role="menubar">
    ${mobileLinks}
  </nav>
  <div class="mobile-menu-footer">
    <a href="${siteLink('contact.html')}" class="btn btn-primary w-100" style="justify-content:center;"><i class="fa-solid fa-phone" aria-hidden="true"></i> Book a Trial Class</a>
    <a href="${siteLink('login.html')}" class="btn btn-outline w-100" style="justify-content:center;"><i class="fa-solid fa-lock" aria-hidden="true"></i> Login / Register</a>
    <div style="display:flex;gap:12px;justify-content:center;margin-top:8px;">
      <button class="navbar-btn-icon" data-theme-toggle aria-label="Toggle theme"><i class="fa-solid fa-moon" aria-hidden="true"></i></button>
      <button class="navbar-btn-icon" data-dir-toggle aria-label="Toggle direction" style="font-size:0.75rem;font-weight:700;">RTL</button>
    </div>
  </div>
</div>
`;
}

/* ============================================================
   FOOTER HTML
   ============================================================ */
function getFooterHTML() {
  return `
<footer class="footer" role="contentinfo">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <a href="${siteLink('index.html')}" class="navbar-logo" style="margin-bottom:16px;display:inline-flex;" aria-label="Little Splatters Home — Where Every Child Creates">
          <div class="navbar-logo-icon"><i class="fa-solid fa-palette" aria-hidden="true"></i></div>
          <div class="navbar-logo-stack">
            <div class="navbar-logo-text">Little <span>Splatters</span></div>
            <small class="navbar-tagline" style="color:var(--sunshine-yellow);">Where Every Child Creates</small>
          </div>
        </a>
        <span class="footer-tagline">Where Every Child Creates <i class="fa-solid fa-palette" aria-hidden="true"></i></span>
        <p>A premium children's art & painting studio where creativity blooms and young artists discover the joy of expression through color, form, and imagination.</p>
        <div class="footer-social">
          <a href="#" class="footer-social-link" aria-label="Facebook"><i class="fa-brands fa-facebook-f" aria-hidden="true"></i></a>
          <a href="#" class="footer-social-link" aria-label="Instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></a>
          <a href="#" class="footer-social-link" aria-label="YouTube"><i class="fa-brands fa-youtube" aria-hidden="true"></i></a>
          <a href="#" class="footer-social-link" aria-label="Pinterest"><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i></a>
        </div>
      </div>

      <!-- Quick Links -->
      <div class="footer-col">
        <h5>Quick Links</h5>
        <ul class="footer-links">
          <li><a href="${siteLink('index.html')}" class="footer-link"><i class="fa-solid fa-house" aria-hidden="true"></i> Home — General</a></li>
          <li><a href="${siteLink('home2.html')}" class="footer-link"><i class="fa-solid fa-palette" aria-hidden="true"></i> Home — Art Ed.</a></li>
          <li><a href="${siteLink('about.html')}" class="footer-link"><i class="fa-solid fa-heart" aria-hidden="true"></i> About Us</a></li>
          <li><a href="${siteLink('services.html')}" class="footer-link"><i class="fa-solid fa-paintbrush" aria-hidden="true"></i> Services</a></li>
          <li><a href="${siteLink('pricing.html')}" class="footer-link"><i class="fa-solid fa-sack-dollar" aria-hidden="true"></i> Pricing</a></li>
          <li><a href="${siteLink('blog.html')}" class="footer-link"><i class="fa-solid fa-book-open" aria-hidden="true"></i> Blog</a></li>
          <li><a href="${siteLink('contact.html')}" class="footer-link"><i class="fa-solid fa-phone" aria-hidden="true"></i> Contact</a></li>
        </ul>
      </div>

      <!-- Pages -->
      <div class="footer-col">
        <h5>More Pages</h5>
        <ul class="footer-links">
          <li><a href="${siteLink('service-details.html')}" class="footer-link"><i class="fa-solid fa-masks-theater" aria-hidden="true"></i> Service Details</a></li>
          <li><a href="${siteLink('blog-details.html')}" class="footer-link"><i class="fa-solid fa-pen-to-square" aria-hidden="true"></i> Blog Details</a></li>
          <li><a href="${siteLink('login.html')}" class="footer-link"><i class="fa-solid fa-lock" aria-hidden="true"></i> Login / Register</a></li>
          <li><a href="${siteLink('maintenance.html')}" class="footer-link"><i class="fa-solid fa-wrench" aria-hidden="true"></i> Maintenance</a></li>
          <li><a href="${siteLink('sitemap.html')}" class="footer-link"><i class="fa-solid fa-map" aria-hidden="true"></i> Sitemap</a></li>
          <li><a href="${siteLink('404.html')}" class="footer-link"><i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i> 404 Page</a></li>
          <li><a href="${siteLink('coming-soon.html')}" class="footer-link"><i class="fa-solid fa-rocket" aria-hidden="true"></i> Coming Soon</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-col">
        <h5>Get In Touch</h5>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-solid fa-location-dot" aria-hidden="true"></i></div>
          <p>42 Paintbrush Lane,<br>Creative Quarter, AR 10025</p>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-solid fa-phone" aria-hidden="true"></i></div>
          <p>+1 (555) 287-ARTS<br>Mon–Sat 9am–7pm</p>
        </div>
        <div class="footer-contact-item">
          <div class="footer-contact-icon"><i class="fa-solid fa-envelope" aria-hidden="true"></i></div>
          <p>hello@littlesplatters.com</p>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="container footer-bottom-inner">
      <p>© 2026 Little Splatters Kids Art Studio — Where Every Child Creates. All rights reserved.</p>
      <div class="footer-bottom-links">
        <a href="${siteLink('privacy.html')}">Privacy Policy</a>
        <a href="${siteLink('terms.html')}">Terms of Service</a>
        <a href="${siteLink('privacy.html#cookies')}">Cookie Policy</a>
        <a href="${siteLink('sitemap.html')}">Sitemap</a>
      </div>
    </div>
  </div>
</footer>

<!-- Lightbox -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image preview">
  <div class="lightbox-content">
    <img src="" alt="Artwork preview" id="lightbox-img">
    <button class="lightbox-close" id="lightbox-close" aria-label="Close lightbox"><i class="fa-solid fa-xmark" aria-hidden="true"></i></button>
  </div>
</div>

<!-- Back to Top -->
<button class="back-to-top" id="back-to-top" aria-label="Back to top">↑</button>

<!-- Toast Container -->
<div class="toast-container" id="toast-container" role="status" aria-live="polite"></div>
`;
}

/* ============================================================
   INJECT INTO PAGE
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  const navbarEl = document.getElementById('navbar-placeholder');
  const footerEl = document.getElementById('footer-placeholder');

  const activePage = document.body.getAttribute('data-page') || '';

  if (navbarEl) navbarEl.outerHTML = getNavbarHTML(activePage);
  if (footerEl) footerEl.outerHTML = getFooterHTML();

  // Show login button on desktop when not on login page
  setTimeout(() => {
    const loginBtn = document.getElementById('nav-login-btn');
    if (loginBtn && activePage !== 'login') {
      loginBtn.style.display = 'inline-flex';
    }
  }, 100);
});
