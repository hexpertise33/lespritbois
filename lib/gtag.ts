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

// --- Consentement (RGPD / Google Consent Mode v2) ---

export type ConsentChoice = 'granted' | 'denied';

/** Clé de stockage du choix de consentement dans le navigateur. */
export const CONSENT_KEY = 'lb-consent-ads';

/** Renvoie le choix de consentement mémorisé, ou null si l'utilisateur n'a pas encore choisi. */
export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  const v = window.localStorage.getItem(CONSENT_KEY);
  return v === 'granted' || v === 'denied' ? v : null;
}

/**
 * Applique un choix de consentement : met à jour Google Consent Mode et le mémorise.
 * Par défaut la balise démarre en « denied » (voir app/layout.tsx) ; cette fonction
 * accorde ou confirme le refus une fois que l'utilisateur a répondu à la bannière.
 */
export function setConsent(choice: ConsentChoice, persist = true): void {
  if (typeof window === 'undefined') return;
  if (persist) window.localStorage.setItem(CONSENT_KEY, choice);
  window.gtag?.('consent', 'update', {
    ad_storage: choice,
    ad_user_data: choice,
    ad_personalization: choice,
    analytics_storage: choice,
  });
}
