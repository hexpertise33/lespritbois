'use client';

import { useEffect } from 'react';
import { reportPhoneConversion } from '@/lib/gtag';

/**
 * Suivi global des clics sur le numéro de téléphone.
 * Un seul écouteur délégué sur le document capte tout clic (souris, tactile,
 * clavier) sur un lien `tel:` où qu'il soit dans le site, sans avoir à modifier
 * chaque page. Déclenche la conversion Google Ads « clic téléphone (site web) ».
 * Ne rend rien à l'écran.
 */
export default function PhoneClickTracker() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const cible = event.target;
      if (!(cible instanceof Element)) return;
      if (cible.closest('a[href^="tel:"]')) {
        reportPhoneConversion();
      }
    }
    // `capture` pour capter le clic même si un handler intermédiaire l'arrête.
    document.addEventListener('click', onClick, { capture: true });
    return () => document.removeEventListener('click', onClick, { capture: true });
  }, []);

  return null;
}
