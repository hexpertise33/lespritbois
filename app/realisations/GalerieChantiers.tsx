'use client';

import { useState } from 'react';

export type Vignette = {
  src: string;
  w: number;
  h: number;
  alt: string;
  /** Doit correspondre à l'`id` d'un filtre ci-dessous. */
  cat: string;
  categorie: string;
  titre: string;
  lieu: string;
};

const FILTRES = [
  { id: 'tous', label: 'Tous' },
  { id: 'carports', label: 'Carports' },
  { id: 'pergolas', label: 'Pergolas' },
  { id: 'terrasses', label: 'Terrasses' },
  { id: 'extensions', label: 'Extensions' },
  { id: 'constructions', label: 'Constructions bois' },
];

export default function GalerieChantiers({ vignettes }: { vignettes: Vignette[] }) {
  const [actif, setActif] = useState('tous');
  const visibles = actif === 'tous' ? vignettes : vignettes.filter((v) => v.cat === actif);

  return (
    <>
      <div className="flex flex-wrap gap-3 mb-12" role="group" aria-label="Filtrer par métier">
        {FILTRES.map((f) => {
          const on = f.id === actif;
          return (
            <button
              key={f.id}
              type="button"
              aria-pressed={on}
              onClick={() => setActif(f.id)}
              className={`px-5 py-2.5 rounded-full font-label-md text-label-md border transition-all ${
                on
                  ? 'border-primary bg-primary text-on-primary'
                  : 'border-surface-variant text-on-surface-variant hover:border-secondary hover:text-secondary-dark'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visibles.length} réalisation{visibles.length > 1 ? 's' : ''} affichée
        {visibles.length > 1 ? 's' : ''}
      </p>

      {/* Colonnes plutôt qu'une grille : chaque photo garde son format natif,
          panoramique comme portrait, sans recadrage. */}
      <div className="columns-1 md:columns-2 xl:columns-3 gap-6">
        {visibles.map((v) => (
          <figure
            key={v.src}
            className="group relative overflow-hidden rounded-2xl mb-6 break-inside-avoid"
          >
            <img
              width={v.w}
              height={v.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
              src={v.src}
              alt={v.alt}
            />
            <figcaption className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-fixed">
                  {v.categorie}
                </span>
                <p className="text-white font-headline-sm text-headline-sm text-[18px] mt-2">{v.titre}</p>
                <p className="text-white/70 text-sm">{v.lieu}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </>
  );
}
