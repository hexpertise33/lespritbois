import type { Metadata } from 'next';
import { ENTREPRISE_REF } from '@/lib/data/navigation';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Garage ou abri de jardin';
const PAGE_LABEL = '/garages-abris-jardin';

export const metadata: Metadata = buildMetadata({
  title: 'Garage bois et abri de jardin sur mesure en Gironde',
  description:
    'Garage bois et abri de jardin sur mesure, posés sur tout support, avec toit plat étanché, bac acier ou tuile. Fabrication et pose en Gironde. Étude gratuite.',
  keywords:
    'garage bois Gironde, abri de jardin sur mesure, garage ossature bois, abri de jardin bois Libourne, garage toit plat, toit plat étanchéité, bac acier, plaque sous tuile',
  path: '/garages-abris-jardin',
  ogImage: '/images/garages-abris/garage-bois-toit-plat-bardage-gris-1.webp',
  ogTitle: 'Garages et abris de jardin sur mesure en Gironde',
  ville: 'Libourne',
});

const FAQ = [
  {
    q: 'Faut-il une autorisation pour construire un garage ou un abri de jardin ?',
    r: "Presque toujours. Au-delà de quelques mètres carrés d'emprise au sol, une déclaration préalable de travaux est demandée, et un permis de construire pour les surfaces plus importantes. Les seuils dépendent du PLU de votre commune. Nous les vérifions avant de dessiner et montons le dossier avec vous.",
    lien: { href: '/blog/autorisation-urbanisme-abri-carport-pergola-2026', texte: 'Les autorisations en détail' },
  },
  {
    q: 'Sur quel support peut-on poser l’ouvrage ?',
    r: "Sur une dalle béton existante ou à créer, sur plots ou sur longrines. Le support se choisit selon le sol, la pente du terrain et l'usage : un garage qui reçoit une voiture ne se pose pas comme un abri à outils.",
    lien: { href: '/blog/fondation-abri-jardin-bois-dalle-plots', texte: 'Dalle ou plots : comment choisir' },
  },
  {
    q: 'Quel toit choisir pour un garage ou un abri ?',
    r: "Le toit plat étanché donne une ligne basse et contemporaine. Le bac acier est léger et rapide à poser. La tuile, sur liteaux ou sur plaque sous tuile, fait famille avec une maison girondine. Le règlement d'urbanisme impose parfois l'une ou l'autre : nous le vérifions avant de proposer.",
  },
  {
    q: 'Pourquoi le sur mesure plutôt qu’un kit ?',
    r: "Un kit impose ses dimensions, ses ouvertures et son épaisseur de bois. Le sur mesure part de votre terrain et de votre usage : la porte à l'endroit utile, la hauteur qui passe sous la limite de propriété, des menuiseries et un bardage assortis à la maison.",
    lien: { href: '/blog/abri-jardin-bois-kit-ou-sur-mesure', texte: 'Kit ou sur mesure : le comparatif' },
  },
  {
    q: 'Le garage peut-il recevoir une voiture ?',
    r: "Oui, à condition de le prévoir dès la conception : une dalle dimensionnée pour le poids du véhicule, une porte assez large et une hauteur suffisante. Nous concevons le garage pour l'usage que vous lui donnez.",
    lien: { href: '/blog/garage-ossature-bois-permis-dalle-budget', texte: 'Garage ossature bois : permis, dalle, budget' },
  },
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Garages et abris de jardin',
        item: 'https://lesprit-bois.fr/garages-abris-jardin',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Conception, fabrication et pose de garages et abris de jardin sur mesure',
    name: 'Garage bois et abri de jardin sur mesure en Gironde',
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
    provider: ENTREPRISE_REF,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Garages, abris et toitures',
      itemListElement: [
        'Garage bois sur mesure',
        'Abri de jardin sur mesure',
        'Toit plat avec étanchéité',
        'Couverture bac acier',
        'Couverture plaque sous tuile',
        'Couverture tuile',
      ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  },
];

/* Photos de chantiers fournies par l'entreprise le 23/10/2026.
   TODO : les communes de ces chantiers restent à obtenir ; n'en inventer aucune. */
type Photo = { src: string; alt: string; w: number; h: number };

const GARAGE: Photo[] = [
  { src: '/images/garages-abris/garage-bois-toit-plat-bardage-gris-2.webp', alt: 'Garage bois à toit plat, bardage gris et porte-fenêtre aluminium, vu de trois quarts', w: 900, h: 1200 },
  { src: '/images/garages-abris/garage-bois-toit-plat-bardage-gris-3.webp', alt: 'Façade d’un garage bois à toit plat, ouverture de porte réservée', w: 900, h: 1200 },
  { src: '/images/garages-abris/garage-bois-membrane-toit-plat-6.webp', alt: 'Membrane d’étanchéité posée sur le toit plat d’un garage bois', w: 900, h: 1200 },
  { src: '/images/garages-abris/garage-bois-charpente-interieure-5.webp', alt: 'Intérieur d’un garage bois, charpente et panneaux de contreventement', w: 900, h: 1200 },
  { src: '/images/garages-abris/garage-bois-porte-fenetre-4.webp', alt: 'Porte-fenêtre aluminium gris anthracite posée dans le bardage d’un garage bois', w: 554, h: 1200 },
];

const ABRI: Photo[] = [
  { src: '/images/garages-abris/abri-jardin-sur-mesure-porte-fenetre-1.webp', alt: 'Abri de jardin sur mesure, bardage beige et porte-fenêtre double', w: 900, h: 1200 },
  { src: '/images/garages-abris/abri-jardin-sur-mesure-pignon-3.webp', alt: 'Pignon bardé d’un abri de jardin sur mesure à toit plat', w: 900, h: 1200 },
  { src: '/images/garages-abris/abri-jardin-toit-plat-membrane-5.webp', alt: 'Toit plat d’un abri de jardin couvert d’une membrane d’étanchéité, vu de dessus', w: 900, h: 1200 },
  { src: '/images/garages-abris/abri-jardin-sur-mesure-facade-2.webp', alt: 'Façade vitrée d’un abri de jardin sur mesure, bardage vertical beige', w: 900, h: 1200 },
  { src: '/images/garages-abris/abri-jardin-sur-mesure-finitions-4.webp', alt: 'Abri de jardin terminé, rive de toit et porte-fenêtre blanche', w: 900, h: 1200 },
];

const TOITS = [
  {
    nom: 'Toit plat & étanchéité',
    texte: "Une ligne basse et contemporaine. Membrane d'étanchéité, relevés et évacuations soignés.",
    src: '/images/garages-abris/toit-plat-etancheite-membrane-1.webp',
    alt: 'Toit plat couvert d’une membrane d’étanchéité, accolé à une maison en tuiles',
    w: 1600,
    h: 739,
  },
  {
    nom: 'Bac acier',
    texte: 'Léger, rapide à poser, à l’aise en faible pente. Le choix courant pour un garage ou un carport.',
    src: '/images/garages-abris/couverture-bac-acier-pose-2.webp',
    alt: 'Couverture en bac acier gris anthracite en cours de pose',
    w: 900,
    h: 1200,
  },
  {
    nom: 'Plaque sous tuile',
    texte: 'Une plaque support étanche sous la tuile : un toit traditionnel, doublement protégé.',
    src: '/images/realisations/studio-jardin-ossature-bois-saint-martin-du-bois-3.webp',
    alt: 'Pose de tuiles de terre cuite sur un bâtiment de jardin en ossature bois, à Saint-Martin-du-Bois',
    w: 736,
    h: 982,
  },
  {
    nom: 'Tuile',
    texte: 'La couverture girondine, pour que l’ouvrage fasse famille avec la maison.',
    src: '/images/realisations/carport-bois-trapeze-libourne-1.webp',
    alt: 'Carport bois couvert en tuiles, adossé au pignon en pierre d’une maison, à Libourne',
    w: 1448,
    h: 1086,
  },
];

const lienTexte =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

/* Galerie d'une section : une grande photo à gauche sur deux rangs, quatre
   petites à droite. Sous 768 px, la grande passe en tête et les autres en 2x2. */
function Galerie({ photos }: { photos: Photo[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:h-[560px]">
      {photos.map((p, i) => (
        <figure
          key={p.src}
          className={`m-0 rounded-2xl overflow-hidden bg-surface-variant ${
            i === 0 ? 'col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto' : 'aspect-square md:aspect-auto'
          }`}
        >
          <img
            width={p.w}
            height={p.h}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            src={p.src}
            alt={p.alt}
          />
        </figure>
      ))}
    </div>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 mb-8">
      {items.map((t) => (
        <li key={t} className="flex items-start gap-3 text-body-md text-on-surface-variant">
          <span aria-hidden="true" className="mt-[0.7em] h-0.5 w-3 shrink-0 bg-secondary"></span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function GaragesAbrisJardinPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="garages-abris-jardin" ancreDevis="#devis-bas" />
      <main id="contenu">
        {/* Hero : la photo du garage terminé porte la promesse */}
        <header data-devis-hero className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="739"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/garages-abris/garage-bois-toit-plat-bardage-gris-1.webp"
              alt="Garage bois sur mesure à toit plat, bardage gris et porte-fenêtre aluminium, réalisé par L'Esprit Bois"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Garages et abris de jardin</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Création sur mesure
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Garage bois et abri de jardin sur mesure en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Dessinés à vos cotes, posés sur tout support, sous le toit de votre choix : toit plat étanché, bac
              acier, plaque sous tuile ou tuile. Fabriqués dans notre atelier des Billaux et posés par la même
              équipe.
            </p>

            <ul className="flex flex-wrap gap-3 mb-10">
              {[
                { id: 'garages', titre: 'Garages' },
                { id: 'abris', titre: 'Abris de jardin' },
                { id: 'toitures', titre: 'Tous les toits' },
              ].map((g) => (
                <li key={g.id}>
                  <a
                    href={`#${g.id}`}
                    className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 text-white px-4 py-2.5 rounded-full font-label-md text-label-md hover:bg-white/20 hover:border-secondary/60 transition-all"
                  >
                    <span className="material-symbols-outlined text-secondary-fixed text-[18px]" aria-hidden="true">arrow_downward</span>
                    {g.titre}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#devis-bas"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect text-center"
              >
                Demander mon étude gratuite
              </a>
              <a
                href="tel:+33557406580"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all text-center"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </header>

        {/* Bandeau de confiance */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icone: 'verified', titre: 'Qualifiés Qualibat', texte: 'La qualification reconnue du bâtiment' },
              { icone: 'shield', titre: 'Garantie décennale', texte: 'Vos ouvrages couverts pendant 10 ans' },
              { icone: 'handshake', titre: 'Un seul interlocuteur', texte: "De l'étude à la pose, sans sous-traitance" },
            ].map((b) => (
              <div key={b.titre} className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0" aria-hidden="true">{b.icone}</span>
                <div>
                  <p className="font-label-md text-label-md text-primary uppercase tracking-widest">{b.titre}</p>
                  <p className="text-on-surface-variant text-body-md">{b.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Garages */}
        <section className="py-section-padding bg-surface" id="garages">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-4">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">Garages</span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Un garage fini, pas un kit</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Ossature bois, bardage, menuiseries et toit étanché : nous livrons un garage clos et couvert, aux
                dimensions de votre terrain et de votre usage.
              </p>
              <Points
                items={[
                  'Dimensions libres, ouvertures là où elles servent',
                  'Sur dalle béton, plots ou longrines',
                  'Toit plat, bac acier ou tuile',
                  'Bardage et menuiseries assortis à la maison',
                ]}
              />
              <a
                href="#devis-bas"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
              >
                Chiffrer mon garage
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
            <div className="lg:col-span-8">
              <Galerie photos={GARAGE} />
            </div>
          </div>
        </section>

        {/* Abris de jardin */}
        <section className="py-section-padding bg-surface-container-low" id="abris">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-8 lg:order-1 order-2">
              <Galerie photos={ABRI} />
            </div>
            <div className="lg:col-span-4 lg:order-2 order-1">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Abris de jardin
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                L'abri qui ressemble à une petite maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Rangement, atelier ou bureau de jardin : de vraies menuiseries, un bardage soigné et un toit qui
                reste étanche.
              </p>
              <Points
                items={[
                  'Bardage et teinte au choix',
                  'Porte-fenêtre, fenêtres ou porte pleine',
                  'Isolé ou non, selon l’usage',
                  'Posé sur dalle, plots ou longrines',
                ]}
              />
              <a
                href="#devis-bas"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary/90 transition-all active:scale-95"
              >
                Chiffrer mon abri
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

        {/* Toitures */}
        <section className="py-section-padding bg-surface" id="toitures">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Toit plat ou en pente
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Tous les types de toit</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur un garage, un abri, une extension ou un carport, nous posons toutes les couvertures. Le choix
                dépend de votre projet, de l'aspect de la maison et du règlement d'urbanisme.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {TOITS.map((t) => (
                <article key={t.nom} className="bg-white rounded-2xl overflow-hidden border border-surface-variant">
                  <div className="aspect-square overflow-hidden bg-surface-variant">
                    <img
                      width={t.w}
                      height={t.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      src={t.src}
                      alt={t.alt}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-headline-sm text-headline-sm text-primary mb-2">{t.nom}</h3>
                    <p className="text-on-surface-variant text-body-md">{t.texte}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Ce qu'on nous demande avant un garage ou un abri
            </h2>
            <div className="space-y-4">
              {FAQ.map((f, i) => (
                <details
                  key={f.q}
                  className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                  open={i === 0}
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline-sm text-headline-sm text-primary pr-6">{f.q}</h3>
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-on-surface-variant text-body-md mt-4">
                    {f.r}
                    {f.lien && (
                      <>
                        {' '}
                        <a href={f.lien.href} className={lienTexte}>
                          {f.lien.texte}
                        </a>
                        .
                      </>
                    )}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Devis */}
        <section id="devis-bas" className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Parlons-en</span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">Votre garage ou votre abri, chiffré gratuitement</h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Décrivez-nous votre terrain, l'usage prévu et le toit qui vous plaît : nous revenons vers vous sous
              48h avec une première estimation.
            </p>
            <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl text-left">
              <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
            </div>
            <p className="font-body-md text-body-md text-on-primary-container mt-6">
              Ou appelez directement le{' '}
              <a href="tel:+33557406580" className="underline underline-offset-4">
                05 57 40 65 80
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
