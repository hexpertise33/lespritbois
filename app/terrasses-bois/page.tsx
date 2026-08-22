import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import { CHANTIERS } from '@/lib/data/chantiers';
import { CONTACT, ENTREPRISE_ID, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';

/** Page créée le 22/08/2026 sur les données Search Console.
 *
 *  « terrasse bois libourne » faisait 42 impressions et zéro clic, et le sujet
 *  n'avait pas de page : il était traité dans /amenagement-exterieur, parmi
 *  cinq autres prestations. C'est la requête la plus proche du cœur de métier
 *  qui n'avait pas sa page. */
const COVER = '/images/terrasse-bois-plots-gironde-1.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Terrasse en bois sur mesure à Libourne et en Gironde',
  description:
    "Terrasse bois sur plots ou lambourdes, plage de piscine, sol sableux : conception et pose par nos équipes à Libourne et en Gironde. Deux chantiers racontés.",
  keywords:
    'terrasse bois Libourne, terrasse bois Gironde, plage de piscine bois, terrasse ipé, terrasse sur plots, terrasse pin maritime, terrassier bois Libourne',
  path: '/terrasses-bois',
  ogImage: COVER,
  ogTitle: 'Terrasses bois sur mesure à Libourne et en Gironde',
  ville: 'Libourne',
});

const chantiers = ['moulon', 'lacanau']
  .map((id) => CHANTIERS.find((c) => c.id === id))
  .filter((c): c is NonNullable<typeof c> => Boolean(c));

const FAQ = [
  {
    q: 'Quel bois choisir pour une terrasse en Gironde ?',
    r: "Cela se décide sur l'usage, pas sur le catalogue. Un pin maritime de classe 4, local et abordable, convient à une terrasse de plain-pied qu'on entretient. Un ipé ne grise pas, ne donne pas d'échardes pieds nus et tient au bord d'une eau chlorée, mais il est dense, dur et plus cher. Entre les deux, le douglas et le mélèze couvrent la plupart des cas. Le détail des essences est dans notre guide « quel bois pour une terrasse extérieure ».",
  },
  {
    q: 'Plots ou lambourdes : quelle structure ?',
    r: "Les plots réglables permettent de rattraper une pente et de ventiler sous le platelage sans toucher au sol existant ; c'est la solution la plus fréquente sur dalle ou sur terrain stabilisé. Les lambourdes sur appuis ponctuels s'imposent quand le sol ne porte pas régulièrement. Dans les deux cas, ce qui décide de la durée de vie, c'est la ventilation de la sous-face et la pente d'écoulement, pas l'essence des lames.",
  },
  {
    q: 'Combien de temps dure une terrasse en bois ?',
    r: "Une terrasse bien ventilée par-dessous et nettoyée une fois par an tient quinze à vingt ans en Gironde, essence selon. Ce qui la tue prématurément, c'est presque toujours l'eau qui stagne sous les lames, pas le soleil. Quand elle vieillit, tout n'est pas à refaire : notre guide sur la rénovation explique comment décider entre poncer, changer les lames et tout déposer.",
  },
  {
    q: 'Intervenez-vous au bord d’une piscine ?',
    r: "Oui, c'est un cas fréquent. Le point technique n'est pas le bois mais le raccord à la margelle et la tenue pieds nus : la lame de rive doit affleurer sans créer de ressaut, et l'essence doit rester praticable pieds nus au soleil. Nous avons posé une plage complète en ipé à Moulon, avec l'aménagement du tour de bassin. Nous ne construisons pas la piscine : nous construisons tout autour.",
  },
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Aménagement extérieur',
        item: `${SITE.url}/amenagement-exterieur`,
      },
      { '@type': 'ListItem', position: 3, name: 'Terrasses bois', item: `${SITE.url}/terrasses-bois` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Terrasse en bois sur mesure',
    serviceType: 'Construction de terrasse en bois',
    url: `${SITE.url}/terrasses-bois`,
    provider: ENTREPRISE_REF,
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'City', name: 'Les Billaux' },
      { '@type': 'City', name: 'Moulon' },
      { '@type': 'City', name: 'Lacanau' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
    description:
      "Conception et pose de terrasses en bois sur plots ou lambourdes, plages de piscine et abords de bassin, à Libourne et en Gironde.",
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Terrasses bois',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terrasse bois sur plots réglables',
            description:
              'Rattrapage de pente et ventilation de la sous-face sans reprise du sol existant.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Plage de piscine et abords de bassin',
            description: 'Raccord à la margelle, antidérapance pieds nus, essences imputrescibles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Terrasse sur sol instable ou sableux',
            description: 'Fondations reprises en profondeur jusqu’à un horizon porteur.',
          },
        },
      ],
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

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

export default function TerrassesBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="amenagement-exterieur" />
      <main id="contenu">
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Terrasse en bois posée sur plots réglables dans un jardin en Gironde, lames en pin traité"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <a
                href="/amenagement-exterieur"
                className="hover:text-secondary-fixed transition-colors"
              >
                Aménagement extérieur
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">Terrasses bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Notre savoir-faire
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Terrasses bois à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Une terrasse se pense par-dessous. Ce qu&apos;on voit, ce sont les lames ; ce qui décide
              de sa durée de vie, c&apos;est la structure et la ventilation.
            </p>
          </div>
        </header>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Ce qui tue une terrasse, c’est l’eau qui reste dessous
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  On nous appelle souvent pour une terrasse grisée, en pensant que le bois est fini. Le
                  grisaillement est esthétique et réversible. Ce qui est irréversible, c&apos;est une
                  sous-face qui ne sèche jamais : lambourdes posées à plat sur une dalle sans cale,
                  pente d&apos;écoulement inexistante, garde au sol insuffisante. Le platelage se
                  refait ; une structure pourrie se dépose.
                </p>
                <p>
                  C&apos;est pour cela que nous commençons par regarder ce qu&apos;il y a en dessous —
                  sur une terrasse neuve comme sur une terrasse à reprendre. Le choix de l&apos;essence
                  vient après, et il compte moins qu&apos;on ne le croit.
                </p>
                <p>
                  Nous travaillons sur plots réglables quand il faut rattraper une pente et ventiler
                  sans toucher au sol existant, et sur lambourdes reprises en appuis ponctuels quand le
                  sol ne porte pas régulièrement. Les essences vont du pin maritime de classe 4, local
                  et abordable, à l&apos;ipé pour les abords de bassin.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/blog/terrasse-bois-structure-plots-lambourdes"
                  className="inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  Le guide de la structure
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="/blog/quel-bois-pour-terrasse-exterieure"
                  className="inline-flex items-center gap-2 border border-primary/25 text-primary px-7 py-4 rounded-xl font-label-md text-label-md hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  Le guide des essences
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              Deux terrasses, deux sols qui ne portaient pas pareil
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-14 max-w-2xl">
              Commune réelle, contrainte réelle. Les fiches complètes sont dans{' '}
              <a href="/realisations" className={lienInterne}>
                nos réalisations
              </a>
              .
            </p>
            <div className="space-y-16">
              {chantiers.map((c) => (
                <article key={c.id} className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-3">
                      {c.categorie} — {c.commune}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary mb-5">{c.titre}</h3>
                    <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
                      {c.paragraphes.slice(0, 3).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                      {c.faits.map((f) => (
                        <div key={f.label}>
                          <dt className="font-label-md text-label-md text-secondary-dark">
                            {f.label}
                          </dt>
                          <dd className="font-body-md text-body-md text-on-surface-variant">
                            {f.valeur}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {FAQ.map((f) => (
                <details
                  key={f.q}
                  className="group border border-outline-variant rounded-xl p-6 bg-surface-container"
                >
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-title-md text-title-md text-on-surface">
                    {f.q}
                    <span
                      className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{f.r}</p>
                </details>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Pour aller plus loin :{' '}
              <a href="/blog/plage-piscine-bois-essences-pose" className={lienInterne}>
                plage de piscine en bois
              </a>
              ,{' '}
              <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                rénover une terrasse existante
              </a>{' '}
              et{' '}
              <a href="/blog/proteger-terrasse-bois-canicule-entretien-ete" className={lienInterne}>
                protéger son bois de la canicule
              </a>
              . La terrasse fait partie de notre offre d&apos;
              <a href="/amenagement-exterieur" className={lienInterne}>
                aménagement extérieur
              </a>
              .
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
              Une terrasse à construire ou à reprendre ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Nous venons voir le sol avant de chiffrer. Le relevé et le devis sont gratuits, à
              Libourne et dans toute la Gironde. {CONTACT.telAffiche}.
            </p>
            <a
              href="/contact"
              className="inline-block bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
            >
              Demander mon étude gratuite
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
