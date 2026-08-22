'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/data/navigation';

const SESSION_KEY = 'lb-devis-pergola-popup-shown';

/**
 * Pop-up de relance, desktop uniquement (voir la classe `hidden md:flex`
 * sur la racine ci-dessous) : sur mobile, LandingPergolaStickyBar affiche
 * déjà en permanence téléphone + bouton devis dès que le héros est
 * dépassé, un pop-up identique y ferait doublon. Se déclenche une seule
 * fois par session au premier passage sous les 70% de défilement de la
 * page, mémorisé en sessionStorage (pas localStorage, qui persisterait
 * entre les visites).
 */
export default function LandingPergolaDesktopPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return;

    function onScroll() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const progression = window.scrollY / scrollable;
      if (progression >= 0.7) {
        setVisible(true);
        sessionStorage.setItem(SESSION_KEY, '1');
        window.removeEventListener('scroll', onScroll);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!visible) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') setVisible(false);
    }

    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="hidden md:flex fixed inset-0 z-50 items-center justify-center bg-black/50 px-6"
      onClick={() => setVisible(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Recevoir un devis ou appeler"
        className="relative bg-surface rounded-2xl shadow-2xl max-w-md w-full p-8 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-2xl leading-none text-on-surface-variant hover:text-primary"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        <h2 className="font-headline-sm text-headline-sm text-primary mb-3">
          Une question avant de vous lancer ?
        </h2>
        <p className="text-on-surface-variant font-body-md text-body-md mb-6">
          Appelez-nous directement, ou recevez votre devis gratuit sous 48h.
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={CONTACT.telHref}
            className="inline-flex items-center justify-center gap-2 bg-surface-container-low border border-surface-variant text-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">call</span>
            {CONTACT.telAffiche}
          </a>
          <a
            href="#devis-bas"
            onClick={() => setVisible(false)}
            className="bg-primary text-on-primary px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all"
          >
            Recevoir mon devis gratuit
          </a>
        </div>
      </div>
    </div>
  );
}
