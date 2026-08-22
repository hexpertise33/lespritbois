'use client';

import { useState, type FormEvent } from 'react';
import { reportFormConversion, reportLeadGenerated } from '@/lib/gtag';

type Etat = 'idle' | 'loading' | 'success' | 'error';
type InstanceId = 'haut' | 'milieu' | 'bas';

const PARAMETRES_SUIVIS = ['utm_source', 'utm_medium', 'utm_campaign', 'gclid'] as const;

/**
 * Construit la mention d'origine ajoutée à l'e-mail de lead : la position du
 * CTA sur la page, plus les paramètres UTM/gclid présents dans l'URL
 * courante (lus au moment du submit, sans jamais rediriger la page — donc
 * sans jamais perdre le gclid que Google Ads a besoin de retrouver).
 */
function construireOrigine(instanceId: InstanceId): string {
  const base = `Page : /devis-pergola (formulaire ${instanceId})`;
  if (typeof window === 'undefined') return base;
  const params = new URLSearchParams(window.location.search);
  const trouves = PARAMETRES_SUIVIS.map((cle) => {
    const valeur = params.get(cle);
    return valeur ? `${cle}=${valeur}` : null;
  }).filter((v): v is string => v !== null);
  return trouves.length > 0 ? `${base} — ${trouves.join(', ')}` : base;
}

export default function LandingPergolaForm({ instanceId }: { instanceId: InstanceId }) {
  const [etat, setEtat] = useState<Etat>('idle');
  const [erreur, setErreur] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEtat('loading');
    setErreur(null);

    try {
      const donnees = Object.fromEntries(new FormData(e.currentTarget));
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...donnees,
          projet: 'Pergola (landing Ads)',
          source: construireOrigine(instanceId),
        }),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Une erreur est survenue lors de l'envoi.");
      }

      setEtat('success');
      // Deux signaux distincts : la conversion Google Ads (comme /contact)
      // et l'événement GA4 generate_lead, dédié à cette landing page.
      reportFormConversion();
      reportLeadGenerated();
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi.");
      setEtat('error');
    }
  }

  if (etat === 'success') {
    return (
      <div className="space-y-4 text-center py-12">
        <span className="material-symbols-outlined text-secondary-dark text-5xl" aria-hidden="true">check_circle</span>
        <h3 className="font-headline-sm text-headline-sm text-primary">Merci pour votre demande !</h3>
        <p className="text-on-surface-variant font-body-md text-body-md">
          Nous revenons vers vous sous 48h avec une première estimation.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor={`nom-${instanceId}`}>
            Nom &amp; Prénom
          </label>
          <input
            id={`nom-${instanceId}`}
            name="nom"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="Jean Dupont"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor={`tel-${instanceId}`}>
            Téléphone
          </label>
          <input
            id={`tel-${instanceId}`}
            name="tel"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="06 00 00 00 00"
            type="tel"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-primary" htmlFor={`budget-${instanceId}`}>
          Budget estimé
        </label>
        <select
          id={`budget-${instanceId}`}
          name="budget"
          className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none"
        >
          <option>Je ne sais pas encore</option>
          <option>&lt; 5 000 €</option>
          <option>5 000 € à 15 000 €</option>
          <option>15 000 € à 50 000 €</option>
          <option>+ 50 000 €</option>
        </select>
      </div>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-primary" htmlFor={`message-${instanceId}`}>
          Dites-nous en plus
        </label>
        <textarea
          id={`message-${instanceId}`}
          name="message"
          className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim resize-none"
          placeholder="Dimensions, essence de bois souhaitée, commune…"
          rows={3}
          required
        />
      </div>
      <button
        className="w-full bg-primary text-on-primary py-5 rounded-xl font-label-md text-label-md shadow-lg hover:bg-secondary hover:text-primary hover:-translate-y-1 transition-all disabled:opacity-60"
        type="submit"
        disabled={etat === 'loading'}
      >
        {etat === 'loading' ? 'Envoi en cours…' : 'Recevoir mon devis gratuit'}
      </button>
      {etat === 'error' && erreur && (
        <p className="text-center text-sm text-red-600" role="alert">
          {erreur}
        </p>
      )}
      <p className="text-center text-xs text-on-surface-variant">
        Vos données sont sécurisées et ne seront jamais partagées. Conformité RGPD assurée.
      </p>
    </form>
  );
}
