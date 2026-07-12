'use client';

import { useEffect, useState } from 'react';
import { getStoredConsent, setConsent } from '@/lib/gtag';

/**
 * Bannière de consentement RGPD (Google Consent Mode v2).
 * La balise Google démarre en « denied » (voir app/layout.tsx). Cette bannière
 * permet à l'utilisateur d'accepter ou de refuser les cookies de mesure/publicité.
 * Le choix est mémorisé ; il n'est plus redemandé aux visites suivantes.
 */
export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored === 'granted') {
      // Ré-applique le consentement pour les visiteurs qui avaient accepté.
      setConsent('granted', false);
    } else if (stored === null) {
      setVisible(true);
    }
  }, []);

  if (!visible) return null;

  function choisir(choix: 'granted' | 'denied') {
    setConsent(choix);
    setVisible(false);
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Consentement aux cookies"
      className="fixed inset-x-0 bottom-0 z-[200] p-4 sm:p-6"
    >
      <div className="mx-auto max-w-3xl rounded-2xl bg-primary text-on-primary shadow-2xl p-5 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body-md text-body-md text-on-primary/90">
          Nous utilisons des cookies de mesure d&apos;audience et publicitaires pour améliorer
          votre expérience et mesurer nos campagnes. Vous pouvez accepter ou refuser.{' '}
          <a href="/politique-de-confidentialite" className="underline hover:no-underline">
            En savoir plus
          </a>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choisir('denied')}
            className="rounded-xl border border-on-primary/40 px-5 py-3 font-label-md text-label-md hover:bg-on-primary/10 transition-colors"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => choisir('granted')}
            className="rounded-xl bg-secondary text-primary px-5 py-3 font-label-md text-label-md hover:-translate-y-0.5 transition-transform"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
