import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { CONTACT } from '@/lib/data/navigation';
import LandingPergolaHeader from '@/components/LandingPergolaHeader';
import LandingPergolaFooter from '@/components/LandingPergolaFooter';
import LandingPergolaForm from '@/components/LandingPergolaForm';

export const metadata: Metadata = buildMetadata({
  title: "Devis pergola gratuit à Libourne — L'Esprit Bois",
  description:
    'Recevez votre devis gratuit de pergola sur mesure à Libourne et en Gironde, sous 48h. Bioclimatique, aluminium ou bois massif, posé par une entreprise certifiée Qualibat.',
  path: '/devis-pergola',
  ogImage: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
  ogTitle: 'Pergola sur mesure à Libourne — devis gratuit sous 48h',
  ville: 'Libourne',
  noindex: true,
});

/* Comparatif court : juste de quoi rassurer que l'entreprise couvre le
   besoin du visiteur, peu importe son type de pergola — pas le tableau
   complet de /pergolas. Textes raccourcis depuis GAMME (app/pergolas/page.tsx). */
const GAMME_COURTE = [
  {
    icone: 'wb_sunny',
    titre: 'Pergola bioclimatique',
    texte: "Lames aluminium orientables : réglez l'ombre, la ventilation et la pluie d'un geste.",
  },
  {
    icone: 'roofing',
    titre: 'Pergola aluminium',
    texte: 'Structure thermolaquée sans entretien, couverture polycarbonate, panneau isolant ou vitrage.',
  },
  {
    icone: 'cabin',
    titre: 'Pergola bois massif',
    texte: "Douglas, mélèze ou red cedar : charpente traditionnelle qui s'accorde au bâti ancien.",
  },
] as const;

/* 4 photos de chantiers réels, reprises telles quelles de GALERIE
   (app/pergolas/page.tsx) — mêmes fichiers, déjà optimisés et hébergés. */
const GALERIE_COURTE = [
  {
    src: '/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp',
    alt: "Pergola aluminium anthracite adossée à une maison, vue en enfilade sur la terrasse bois, réalisée par L'Esprit Bois",
    w: 1600,
    h: 900,
  },
  {
    src: '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp',
    alt: 'Vue sous une pergola aluminium avec store ZIP descendu, terrasse bois et mobilier de jardin',
    w: 1100,
    h: 825,
  },
  {
    src: '/images/realisations/pergola-aluminium-toit-polycarbonate-libourne-6.webp',
    alt: "Détail de la couverture polycarbonate d'une pergola aluminium adossée à la façade",
    w: 825,
    h: 1100,
  },
  {
    src: '/images/realisations/salon-sous-pergola-aluminium-libourne-8.webp',
    alt: 'Salon de jardin installé sous une pergola aluminium avec stores, sur terrasse bois',
    w: 825,
    h: 1100,
  },
] as const;

export default function DevisPergolaPage() {
  return (
    <>
      <LandingPergolaHeader />
      <main id="contenu">
        {/* Hero : pas de photo pleine largeur (contrairement à /pergolas) —
            l'accent va au formulaire, pas à l'image, et la page reste plus
            légère à charger sur mobile. */}
        <header className="bg-primary text-on-primary pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4">
                Pergola sur mesure à Libourne — Devis gratuit sous 48h
              </h1>
              <p className="font-body-lg text-body-lg text-white/85 mb-6">
                Bioclimatique, aluminium ou bois massif : conçue, fabriquée et posée par la même
                équipe, certifiée Qualibat et couverte par notre garantie décennale.
              </p>
              <a
                href={CONTACT.telHref}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-6 py-4 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">call</span>
                {CONTACT.telAffiche}
              </a>
            </div>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl order-first md:order-none">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-6">
                Recevez votre devis gratuit
              </h2>
              <LandingPergolaForm instanceId="haut" />
            </div>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">verified</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Certifiés Qualibat
                </p>
                <p className="text-on-surface-variant text-body-md">La qualification reconnue du bâtiment</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">shield</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Garantie décennale
                </p>
                <p className="text-on-surface-variant text-body-md">Vos ouvrages couverts pendant 10 ans</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">location_on</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Libourne &amp; Gironde
                </p>
                <p className="text-on-surface-variant text-body-md">Nous intervenons dans tout le département</p>
              </div>
            </div>
          </div>
        </section>

        {/* Galerie de réalisations */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
              Nos dernières réalisations
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {GALERIE_COURTE.map((img) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={img.w}
                  height={img.h}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-xl aspect-square"
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA répété — milieu de page */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <div className="bg-surface-container-low rounded-2xl p-6 md:p-8 shadow-xl border border-surface-variant">
                <h2 className="font-headline-sm text-headline-sm text-primary mb-6 text-center">
                  Recevez votre devis gratuit
                </h2>
                <LandingPergolaForm instanceId="milieu" />
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif rapide des 3 gammes */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-10 text-center">
              Quelle que soit la pergola que vous imaginez, nous la construisons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {GAMME_COURTE.map((g) => (
                <div key={g.titre} className="bg-surface rounded-2xl p-6 text-center">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">{g.icone}</span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{g.titre}</h3>
                  <p className="text-on-surface-variant font-body-md text-body-md">{g.texte}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-section-padding bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-8 text-center">
                Prêt à profiter de votre terrasse autrement ?
              </h2>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <LandingPergolaForm instanceId="bas" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <LandingPergolaFooter />
    </>
  );
}
