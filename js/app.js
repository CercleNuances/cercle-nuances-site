/**
 * ═══════════════════════════════════════════════════════
 *  CERCLE NUANCES — Logique de l'application
 *  Navigation, galerie, lightbox, formulaire.
 *  Ne pas modifier sauf si vous voulez changer le comportement.
 * ═══════════════════════════════════════════════════════
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Injection du contenu depuis content.js ──────────
  injectContent();

  // ── Initialisation ───────────────────────────────────
  initNav();
  initGalerie();
  initLightbox();
  initContact();
  initScrollAnimations();

});

/* ══════════════════════════════════════════════════════
   INJECTION DU CONTENU (depuis content.js)
══════════════════════════════════════════════════════ */
function injectContent() {

  // Stats (strip chiffres)
  const strip = document.getElementById('strip');
  if (strip && SITE.stats) {
    strip.innerHTML = SITE.stats.map((s, i) =>
      `<div class="strip-stat">
        <span class="strip-num">${s.chiffre}</span>
        <div class="strip-label">${s.label}</div>
      </div>${i < SITE.stats.length - 1 ? '<div class="strip-sep"></div>' : ''}`
    ).join('');
  }

  // Témoignage
  const temo = document.getElementById('temoignage-texte');
  const temoAuteur = document.getElementById('temoignage-auteur');
  if (temo && SITE.temoignage) temo.textContent = SITE.temoignage.texte;
  if (temoAuteur && SITE.temoignage) temoAuteur.textContent = SITE.temoignage.auteur;

  // Galerie principale
  const galGrid = document.getElementById('galerie-grid');
  if (galGrid && SITE.galerie) {
    galGrid.innerHTML = SITE.galerie.map(src =>
      `<div class="gal-item" data-src="${src}">
        <div class="gal-photo" style="background-image:url('${src}')"></div>
      </div>`
    ).join('');
  }

  // Galerie Mariage
  const galMariage = document.getElementById('galerie-mariage');
  if (galMariage && SITE.galerieMariage) {
    galMariage.innerHTML = SITE.galerieMariage.map(src =>
      `<div class="gal3-item" style="background-image:url('${src}')"></div>`
    ).join('');
  }

  // Galerie Maison Martin
  const galMaison = document.getElementById('galerie-maison');
  if (galMaison && SITE.galerieMaison) {
    galMaison.innerHTML = SITE.galerieMaison.map(src =>
      `<div class="gal3-item" style="background-image:url('${src}')"></div>`
    ).join('');
    galMaison.className = 'galerie-5';
  }

  // Reels Instagram
  const reelsGrid = document.getElementById('reels-grid');
  if (reelsGrid && SITE.reels) {
    reelsGrid.innerHTML = SITE.reels.map(url =>
      `<div class="reel-card">
        <iframe src="${url}" allowtransparency="true" allowfullscreen scrolling="no"></iframe>
      </div>`
    ).join('');
  }

  // Lien Instagram
  document.querySelectorAll('[data-instagram]').forEach(el => {
    if (SITE.liens?.instagram) el.href = SITE.liens.instagram;
    if (SITE.liens?.instagramHandle) el.querySelector?.('.handle-text') && (el.querySelector('.handle-text').textContent = SITE.liens.instagramHandle);
  });

  // Liens Calendly
  document.querySelectorAll('[data-calendly]').forEach(el => {
    if (SITE.liens?.calendly) el.href = SITE.liens.calendly;
  });

  // Liens Matterport
  document.querySelectorAll('[data-matterport]').forEach(el => {
    if (SITE.liens?.matterport) el.href = SITE.liens.matterport;
  });

  // Menus PDF
  const menusGrid = document.getElementById('menus-grid');
  if (menusGrid && SITE.menus) {
    menusGrid.innerHTML = SITE.menus.map(m => {
      const btnHtml = m.fichier
        ? `<a class="menu-btn" href="${m.fichier}" target="_blank">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Télécharger
           </a>`
        : `<button class="menu-btn" onclick="goToContact()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="15" x2="12" y2="3"/><polyline points="5 10 12 3 19 10"/></svg>
            Demander votre soumission
           </button>`;
      return `<div class="menu-card anim-item">
        <div class="menu-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="var(--or)" stroke-width="1.5"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
        </div>
        <span class="menu-type">${m.type}</span>
        <div class="menu-nom">${m.nom}</div>
        <p class="menu-desc">${m.desc}</p>
        ${btnHtml}
      </div>`;
    }).join('');
  }

  // Footer : liens menus
  const footerMenus = document.getElementById('footer-menus-links');
  if (footerMenus && SITE.menus) {
    footerMenus.innerHTML = SITE.menus
      .filter(m => m.fichier)
      .map(m => `<a class="footer-menu-link" href="${m.fichier}" target="_blank">${m.nom}</a>`)
      .join('');
  }

  // Footer : lien Instagram
  const footerInsta = document.getElementById('footer-insta');
  if (footerInsta && SITE.liens) {
    footerInsta.href = SITE.liens.instagram;
    footerInsta.textContent = SITE.liens.instagramHandle;
  }
}

/* ══════════════════════════════════════════════════════
   NAVIGATION
══════════════════════════════════════════════════════ */
const PAGES = ['accueil', 'corpo', 'event', 'mariage', 'martin', 'menus'];

function showPage(id) {
  // Masquer toutes les pages
  PAGES.forEach(p => {
    document.getElementById('page-' + p)?.classList.remove('active');
    document.getElementById('nl-' + p)?.classList.remove('active');
    document.getElementById('mnl-' + p)?.classList.remove('active');
  });

  // Afficher la page demandée
  document.getElementById('page-' + id)?.classList.add('active');
  document.getElementById('nl-' + id)?.classList.add('active');
  document.getElementById('mnl-' + id)?.classList.add('active');

  // Scroll en haut
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Fermer le menu mobile
  closeMobileMenu();

  // Ré-observer les animations (pour les nouvelles pages)
  setTimeout(initScrollAnimations, 100);
}

// Raccourci pour aller au formulaire de contact depuis n'importe où
function goToContact(type) {
  showPage('accueil');
  setTimeout(() => {
    document.getElementById('contact-moderne')?.scrollIntoView({ behavior: 'smooth' });
    if (type) {
      // Sélectionner le bon type dans le formulaire
      const card = document.querySelector(`[data-contact-type="${type}"]`);
      if (card) selectType(card, type);
    }
  }, 320);
}

function initNav() {
  const burger = document.getElementById('nav-burger');
  const mobileMenu = document.getElementById('nav-mobile');

  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // Fermer le menu si on clique en dehors
  document.addEventListener('click', e => {
    if (!burger?.contains(e.target) && !mobileMenu?.contains(e.target)) {
      closeMobileMenu();
    }
  });
}

function closeMobileMenu() {
  document.getElementById('nav-burger')?.classList.remove('open');
  document.getElementById('nav-mobile')?.classList.remove('open');
}

/* ══════════════════════════════════════════════════════
   GALERIE & LIGHTBOX
══════════════════════════════════════════════════════ */
let lbItems = [];
let lbCurrent = 0;

function initGalerie() {
  // Ré-initialiser après injection du contenu
  lbItems = Array.from(document.querySelectorAll('.gal-item'));
  lbItems.forEach((el, i) => {
    el.addEventListener('click', () => openLightbox(i));
  });
}

function initLightbox() {
  document.addEventListener('keydown', e => {
    const lb = document.getElementById('lightbox');
    if (!lb?.classList.contains('open')) return;
    if (e.key === 'Escape')     closeLb();
    if (e.key === 'ArrowRight') lbNav(1);
    if (e.key === 'ArrowLeft')  lbNav(-1);
  });
}

function openLightbox(idx) {
  lbItems = Array.from(document.querySelectorAll('.gal-item'));
  lbCurrent = idx;
  document.getElementById('lb-img').src = lbItems[idx].dataset.src;
  document.getElementById('lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLb() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function closeLightbox(e) {
  if (e.target.id === 'lightbox') closeLb();
}

function lbNav(dir) {
  lbItems = Array.from(document.querySelectorAll('.gal-item'));
  lbCurrent = (lbCurrent + dir + lbItems.length) % lbItems.length;
  document.getElementById('lb-img').src = lbItems[lbCurrent].dataset.src;
}

/* ══════════════════════════════════════════════════════
   FORMULAIRE DE CONTACT — Typeform (iframe)
══════════════════════════════════════════════════════ */
function initContact() {
  const iframe = document.getElementById('typeform-iframe');
  if (!iframe) return;

  // Afficher l'iframe dès qu'il est chargé
  iframe.addEventListener('load', () => {
    iframe.classList.add('loaded');
  });

  // Timeout de sécurité : si l'iframe ne charge pas en 8s, afficher le bouton de secours
  setTimeout(() => {
    if (!iframe.classList.contains('loaded')) {
      const fallback = document.getElementById('tf-fallback');
      if (fallback) fallback.style.display = 'block';
      iframe.style.display = 'none';
    }
  }, 8000);
}

/* ══════════════════════════════════════════════════════
   ANIMATIONS AU SCROLL
══════════════════════════════════════════════════════ */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.anim-item').forEach(el => {
    if (!el.classList.contains('visible')) {
      observer.observe(el);
    }
  });
}

// Rendre showPage et goToContact globaux (utilisés dans les onclick HTML)
window.showPage    = showPage;
window.goToContact = goToContact;
window.closeLb     = closeLb;
window.closeLightbox = closeLightbox;
window.lbNav       = lbNav;
