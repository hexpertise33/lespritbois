'use client';

import { useEffect, useRef, useState } from 'react';
import { ONGLETS, CONTACT } from '@/lib/data/navigation';

const inactif =
  'font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap';
const actif =
  'font-label-md text-label-md text-primary border-b-2 border-secondary pb-1 whitespace-nowrap';

const inactifMobile =
  'block py-3 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors';
const actifMobile =
  'block py-3 font-label-md text-label-md text-primary border-l-2 border-secondary pl-4 -ml-4';

export default function SiteNav({ page = '' }: { page?: string }) {
  const [menuOuvert, setMenuOuvert] = useState(false);
  const [dense, setDense] = useState(false);
  const boutonRef = useRef<HTMLButtonElement>(null);

  // Échap referme, et rend le focus au bouton.
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOuvert) {
        setMenuOuvert(false);
        boutonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [menuOuvert]);

  // Repasser en desktop avec le menu ouvert laisserait un panneau fantôme.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOuvert(false);
    };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Densification de la barre au scroll.
  useEffect(() => {
    const majuscule = () => setDense(window.scrollY > 50);
    majuscule();
    window.addEventListener('scroll', majuscule, { passive: true });
    return () => window.removeEventListener('scroll', majuscule);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 ${dense ? 'bg-surface/95' : 'bg-surface/80'} backdrop-blur-xl border-b border-surface-variant`}
    >
      <div
        className={`flex justify-between items-center px-6 md:px-16 ${dense ? 'py-4' : 'py-6'} max-w-container-max mx-auto`}
      >
        <a href="/" className="flex items-center gap-3 shrink-0" aria-label="L'Esprit Bois, accueil">
          <img src="/logo-mark-nav.svg" alt="" aria-hidden="true" width="98" height="44" className="h-10 md:h-11 w-auto" />
          <span className="wordmark text-[19px] whitespace-nowrap lg:hidden xl:inline">
            <span className="text-primary">L'Esprit</span> <span className="text-secondary font-normal">Bois</span>
          </span>
        </a>

        <div className="hidden lg:flex gap-3 xl:gap-4 items-center">
          {ONGLETS.map((o) =>
            o.cle === page ? (
              <a key={o.cle} className={actif} href={o.url} aria-current="page" aria-label={o.titreLong}>
                {o.titre}
              </a>
            ) : (
              <a key={o.cle} className={inactif} href={o.url} aria-label={o.titreLong}>
                {o.titre}
              </a>
            )
          )}
        </div>

        <a
          className="hidden lg:inline-flex bg-primary text-on-primary px-5 xl:px-6 py-3 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all active:scale-95 shadow-lg whitespace-nowrap shrink-0"
          href="/#quote"
        >
          Devis gratuit
        </a>

        <button
          ref={boutonRef}
          id="menu-bouton"
          type="button"
          className="lg:hidden text-primary"
          aria-label={menuOuvert ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOuvert}
          aria-controls="menu-mobile"
          onClick={() => setMenuOuvert((v) => !v)}
        >
          <span id="menu-icone" className="material-symbols-outlined">
            {menuOuvert ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Menu déroulant, en dessous de 1024 px */}
      <div id="menu-mobile" className={`lg:hidden ${menuOuvert ? '' : 'hidden'} border-t border-surface-variant bg-surface`}>
        <div className="max-w-container-max mx-auto px-6 md:px-16 py-6">
          <ul className="divide-y divide-surface-variant">
            {ONGLETS.map((o) => (
              <li key={o.cle}>
                <a
                  className={o.cle === page ? actifMobile : inactifMobile}
                  href={o.url}
                  {...(o.cle === page ? { 'aria-current': 'page' as const } : {})}
                >
                  {o.titreLong ?? o.titre}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              className="flex-1 text-center bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all"
              href="/#quote"
            >
              Demander un devis gratuit
            </a>
            <a
              className="flex-1 text-center border border-primary/20 text-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all"
              href={CONTACT.telHref}
            >
              {CONTACT.telAffiche}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
