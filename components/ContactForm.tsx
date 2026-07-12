'use client';

import { useState, type FormEvent } from 'react';
import { reportFormConversion } from '@/lib/gtag';

type Etat = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
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
        body: JSON.stringify(donnees),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "Une erreur est survenue lors de l'envoi.");
      }

      setEtat('success');
      // Conversion Google Ads : le formulaire a bien été envoyé.
      reportFormConversion();
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Une erreur est survenue lors de l'envoi.");
      setEtat('error');
    }
  }

  if (etat === 'success') {
    return (
      <div className="space-y-4 text-center py-12">
        <span className="material-symbols-outlined text-secondary-dark text-5xl">check_circle</span>
        <h3 className="font-headline-sm text-headline-sm text-primary">Merci pour votre demande !</h3>
        <p className="text-on-surface-variant font-body-md text-body-md">
          Nous revenons vers vous sous 48h avec une première estimation.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor="projet">
            Votre projet
          </label>
          <select
            id="projet"
            name="projet"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none"
          >
            <option>Terrasse</option>
            <option>Pergola</option>
            <option>Carport</option>
            <option>Bardage</option>
            <option>Extension ou surélévation</option>
            <option>Construction bois</option>
            <option>Autre</option>
          </select>
        </div>
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor="budget">
            Budget estimé
          </label>
          <select
            id="budget"
            name="budget"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none"
          >
            <option>Je ne sais pas encore</option>
            <option>&lt; 5 000 €</option>
            <option>5 000 € – 15 000 €</option>
            <option>15 000 € – 50 000 €</option>
            <option>+ 50 000 €</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor="nom">
            Nom &amp; Prénom
          </label>
          <input
            id="nom"
            name="nom"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="Jean Dupont"
            type="text"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="font-label-md text-label-md text-primary" htmlFor="tel">
            Téléphone
          </label>
          <input
            id="tel"
            name="tel"
            className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim"
            placeholder="06 00 00 00 00"
            type="tel"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="font-label-md text-label-md text-primary" htmlFor="message">
          Dites-nous en plus
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border-b-2 border-surface-variant focus:border-secondary transition-colors py-3 px-0 bg-transparent outline-none placeholder:text-surface-dim resize-none"
          placeholder="Dimensions, essence de bois souhaitée, commune…"
          rows={4}
          required
        />
      </div>
      <button
        className="w-full bg-primary text-on-primary py-5 rounded-xl font-label-md text-label-md shadow-lg hover:bg-secondary hover:text-primary hover:-translate-y-1 transition-all disabled:opacity-60"
        type="submit"
        disabled={etat === 'loading'}
      >
        {etat === 'loading' ? 'Envoi en cours…' : "Envoyer ma demande d'étude gratuite"}
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
