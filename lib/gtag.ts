// Suivi des conversions Google Ads — compte L'Esprit Bois (client Google Ads « A DE FRANCE »).
// Balise Google (gtag.js) chargée globalement dans app/layout.tsx.

/** Identifiant de la balise Google / compte Google Ads. */
export const GADS_ID = 'AW-18163716378';

/** Action de conversion « Envoi de formulaire de lead » (send_to de l'extrait d'événement). */
export const GADS_FORM_CONVERSION = 'AW-18163716378/S0LwCO3xks8cEJqikdVD';

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

/**
 * Déclenche la conversion Google Ads « formulaire de contact envoyé ».
 * À appeler après un envoi réussi du formulaire (voir components/ContactForm.tsx).
 * No-op côté serveur ou si la balise n'est pas encore chargée.
 */
export function reportFormConversion(): void {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  window.gtag('event', 'conversion', {
    send_to: GADS_FORM_CONVERSION,
    value: 1.0,
    currency: 'EUR',
  });
}
