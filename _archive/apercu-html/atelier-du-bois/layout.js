/* =========================================================================
   L'ESPRIT BOIS — nav + footer partagés.
   Source unique de vérité : modifier ICI met à jour les 7 pages.
   L'onglet actif est déduit de <body data-page="...">.
   ========================================================================= */

const PAGES = [
  { cle: 'carports', titre: 'Carports', url: 'carports.html' },
  { cle: 'pergolas', titre: 'Pergolas', url: 'pergolas.html' },
  { cle: 'extensions', titre: 'Extensions', url: 'extensions.html' },
  { cle: 'constructions-bois', titre: 'Constructions bois', url: 'constructions-bois.html' },
  { cle: 'realisations', titre: 'Réalisations', url: 'realisations.html' },
  { cle: 'a-propos', titre: 'À propos', url: 'a-propos.html' },
];

const CONTACT = {
  tel: '05 57 40 65 80',
  telHref: 'tel:+33557406580',
  email: 'contact@lespritbois.fr',
  adresse: '1 Aux Pradasses, 33500 Les Billaux',
};

const pageCourante = document.body.dataset.page || '';

/* ---------------------------------------------------------------- NAV --- */
const lienInactif =
  'font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap';
const lienActif =
  'font-label-md text-label-md text-primary border-b-2 border-secondary pb-1 whitespace-nowrap';

const onglets = PAGES.map((p) => {
  const actif = p.cle === pageCourante;
  return `<a class="${actif ? lienActif : lienInactif}" href="${p.url}"${
    actif ? ' aria-current="page"' : ''
  }>${p.titre}</a>`;
}).join('\n');

const NAV = `
<nav class="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-surface-variant">
  <div class="flex justify-between items-center px-6 md:px-16 py-6 max-w-container-max mx-auto">
    <a href="index.html" class="flex items-center gap-3 shrink-0" aria-label="L'Esprit Bois — accueil">
      <img src="/logo-mark-nav.svg" alt="" aria-hidden="true" width="74" height="32" decoding="async" class="h-8 w-auto"/>
      <span class="wordmark text-[18px]">
        <span class="text-primary">L'Esprit</span> <span class="text-secondary font-normal">Bois</span>
      </span>
    </a>
    <div class="hidden md:flex gap-4 items-center">
      ${onglets}
    </div>
    <a class="hidden md:inline-flex bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all active:scale-95 shadow-lg whitespace-nowrap shrink-0" href="index.html#quote">
      Demander un devis gratuit
    </a>
    <button class="md:hidden text-primary" aria-label="Menu">
      <span class="material-symbols-outlined">menu</span>
    </button>
  </div>
</nav>`;

/* ------------------------------------------------------------- FOOTER --- */
const lienPied =
  'text-on-surface-variant hover:text-secondary-dark hover:translate-x-1 transition-all duration-200 inline-block';

const FOOTER = `
<footer class="w-full pt-section-padding pb-gutter bg-surface-container-highest">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter px-6 md:px-16 max-w-container-max mx-auto">
    <div class="md:col-span-1">
      <img src="/logo-mark-clair.svg" alt="" aria-hidden="true" width="111" height="64" loading="lazy" decoding="async" class="h-16 w-auto mb-5 -ml-2"/>
      <div class="wordmark text-[22px] mb-3">
        <span class="text-primary">L'Esprit</span> <span class="text-secondary font-normal">Bois</span>
      </div>
      <div class="flex items-center gap-3 filet-cuivre mb-6 max-w-[260px]">
        <span class="wordmark text-[10px] tracking-[0.2em] text-on-surface-variant">Créateur d'espaces extérieurs</span>
      </div>
      <p class="text-on-surface-variant font-body-md text-body-md leading-relaxed">
        Conception, fabrication et pose de structures bois et aluminium sur mesure, à Libourne et dans toute la Gironde.
      </p>
    </div>
    <div class="md:col-span-1">
      <h4 class="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">Savoir-faire</h4>
      <ul class="space-y-4">
        <li><a class="${lienPied}" href="carports.html">Carports</a></li>
        <li><a class="${lienPied}" href="pergolas.html">Pergolas</a></li>
        <li><a class="${lienPied}" href="extensions.html">Extensions</a></li>
        <li><a class="${lienPied}" href="constructions-bois.html">Constructions bois</a></li>
      </ul>
    </div>
    <div class="md:col-span-1">
      <h4 class="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">L'entreprise</h4>
      <ul class="space-y-4">
        <li><a class="${lienPied}" href="index.html">Accueil</a></li>
        <li><a class="${lienPied}" href="realisations.html">Réalisations</a></li>
        <li><a class="${lienPied}" href="a-propos.html">À propos</a></li>
        <li><a class="${lienPied}" href="index.html#quote">Demander un devis</a></li>
      </ul>
    </div>
    <div class="md:col-span-1">
      <h4 class="font-label-md text-label-md text-primary mb-6 uppercase tracking-widest">Contact</h4>
      <ul class="space-y-4 text-on-surface-variant">
        <li><a class="hover:text-secondary-dark transition-colors" href="${CONTACT.telHref}">${CONTACT.tel}</a></li>
        <li><a class="hover:text-secondary-dark transition-colors" href="mailto:${CONTACT.email}">${CONTACT.email}</a></li>
        <li>${CONTACT.adresse}</li>
        <li>Lun – Ven · 8h – 17h</li>
      </ul>
      <div class="mt-8 flex gap-4">
        <a class="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-secondary hover:border-secondary hover:text-primary transition-all" href="#" aria-label="Facebook"><span class="material-symbols-outlined text-sm">public</span></a>
        <a class="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-secondary hover:border-secondary hover:text-primary transition-all" href="#" aria-label="Instagram"><span class="material-symbols-outlined text-sm">photo_camera</span></a>
      </div>
    </div>
  </div>

  <div class="max-w-container-max mx-auto px-6 md:px-16 mt-20 pt-8 border-t border-surface-variant">
    <p class="wordmark text-[11px] tracking-[0.22em] text-secondary-dark text-center leading-relaxed">
      Terrasses <span class="text-surface-dim mx-1">|</span> Pergolas <span class="text-surface-dim mx-1">|</span> Constructions bois <span class="text-surface-dim mx-1">|</span> Carports <span class="text-surface-dim mx-1">|</span> Bardages
    </p>
  </div>

  <div class="max-w-container-max mx-auto px-6 md:px-16 mt-10 pt-8 border-t border-surface-variant flex flex-col md:flex-row justify-between items-center gap-4">
    <p class="text-on-surface-variant font-body-md text-body-md text-sm">© 2026 L'Esprit Bois — Créateur d'espaces extérieurs en Gironde.</p>
    <div class="flex gap-6 text-sm">
      <a class="text-on-surface-variant hover:text-secondary-dark transition-colors" href="#">Mentions légales</a>
      <a class="text-on-surface-variant hover:text-secondary-dark transition-colors" href="#">Politique de confidentialité</a>
    </div>
  </div>
</footer>`;

/* ------------------------------------------------------------ INJECTION -- */
const cibleNav = document.getElementById('site-nav');
const cibleFooter = document.getElementById('site-footer');
if (cibleNav) cibleNav.outerHTML = NAV;
if (cibleFooter) cibleFooter.outerHTML = FOOTER;

/* Densification de la barre au scroll */
const barre = document.querySelector('nav');
if (barre) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      barre.classList.add('py-4', 'bg-surface/95');
      barre.classList.remove('py-6', 'bg-surface/80');
    } else {
      barre.classList.add('py-6', 'bg-surface/80');
      barre.classList.remove('py-4', 'bg-surface/95');
    }
  });
}
