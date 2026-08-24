'use client';

import { useEffect, useState } from 'react';
import { CONTACT } from '@/lib/data/navigation';

/**
 * Barre CTA flottante, mobile uniquement : téléphone + lien vers le
 * formulaire du bas de page. N'apparaît qu'une fois le héros (repéré par
 * l'attribut data-devis-hero) sorti de l'écran, évite un doublon avec le
 * CTA déjà visible en haut de page. Positionnée sous la bannière cookies
 * (z-[200] dans ConsentBanner) : celle-ci reste au-dessus tant qu'elle est
 * affichée, cette barre prend le relais dès qu'elle est fermée, sans code
 * de coordination entre les deux composants.
 *
 * Utilisée par la landing publicitaire comme par les pages de zone : les
 * deux ancres qu'elle vise (data-devis-hero et #devis-bas) sont les mêmes
 * des deux côtés.
 */
export default function DevisStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector('[data-devis-hero]');
    if (!hero) return;

    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting), {
      threshold: 0,
    });
    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <>
      <div aria-hidden className="md:hidden h-20" />
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-primary text-on-primary border-t border-white/10 shadow-xl px-4 py-3 flex items-center gap-3">
        <a
          href={CONTACT.telHref}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 border border-white/30 shrink-0"
          aria-label={`Appeler le ${CONTACT.telAffiche}`}
        >
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">call</span>
        </a>
        <a
          href="#devis-bas"
          className="flex-1 bg-secondary text-primary py-3 rounded-xl font-label-md text-label-md text-center"
        >
          Devis gratuit
        </a>
      </div>
    </>
  );
}
