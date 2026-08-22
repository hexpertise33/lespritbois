import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import {
  AUTEUR,
  AUTEUR_ID,
  CONTACT,
  ENTREPRISE_ID,
  ENTREPRISE_REF,
  SITE,
} from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';

const COVER = '/images/ossature-bois-isolation-fibre-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: 'David Bertrand, auteur des guides | L’Esprit Bois',
  description:
    "David Bertrand dirige L'Esprit Bois aux Billaux, près de Libourne, et signe les guides techniques de ce site. Qui écrit, sur quoi, et ce qui est vérifiable.",
  keywords:
    "David Bertrand, charpentier Libourne, auteur guides bois, expert bâtiment Gironde, L'Esprit Bois",
  path: '/auteur/david-bertrand',
  ogImage: COVER,
  ogTitle: 'David Bertrand — qui écrit les guides de ce site',
  ville: CONTACT.ville,
});

/** Le nœud `Person` de l'auteur n'est décrit qu'ici. Les 33 articles s'y
 *  réfèrent par `AUTEUR_REF`, de la même manière que toutes les pages renvoient
 *  à l'entité par `ENTREPRISE_REF`. Google consolide alors un seul auteur, avec
 *  une page à laquelle le rattacher, au lieu de 33 homonymes sans adresse. */
const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE.url}/blog` },
      {
        '@type': 'ListItem',
        position: 3,
        name: AUTEUR.nom,
        item: AUTEUR.url,
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: AUTEUR.url,
    name: `${AUTEUR.nom} — auteur des guides`,
    mainEntity: {
      '@type': 'Person',
      '@id': AUTEUR_ID,
      name: AUTEUR.nom,
      url: AUTEUR.url,
      jobTitle: AUTEUR.fonction,
      worksFor: ENTREPRISE_REF,
      affiliation: ENTREPRISE_REF,
      workLocation: {
        '@type': 'Place',
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT.rue,
          postalCode: CONTACT.codePostal,
          addressLocality: CONTACT.ville,
          addressRegion: CONTACT.region,
          addressCountry: 'FR',
        },
      },
      knowsAbout: [
        'Charpente traditionnelle',
        'Construction à ossature bois',
        'Pergolas bioclimatiques',
        'Carports',
        'Terrasses bois',
        'Bardage bois',
        "Autorisations d'urbanisme pour ouvrages extérieurs",
      ],
      knowsLanguage: 'fr',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Guides techniques rédigés par ${AUTEUR.nom}`,
    numberOfItems: articles.length,
    itemListElement: articles.map((a, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${SITE.url}/blog/${a.slug}`,
      name: a.titre,
    })),
  },
];

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

export default function AuteurPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Intérieur d'une ossature bois en cours de chantier, murs isolés en fibre de bois et charpente apparente"
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
              <a href="/blog" className="hover:text-secondary-fixed transition-colors">
                Blog
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">{AUTEUR.nom}</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Qui écrit sur ce site
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              {AUTEUR.nom}
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Il dirige L&apos;Esprit Bois, aux Billaux, à cinq minutes de Libourne, et signe les{' '}
              {articles.length} guides techniques publiés sur ce site.
            </p>
          </div>
        </header>

        {/* Ce qu'il fait */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Un artisan qui écrit, pas un rédacteur qui documente
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  David Bertrand dirige L&apos;Esprit Bois, marque commerciale de la société AD FRANCE.
                  L&apos;entreprise conçoit, fabrique en atelier et pose avec les mêmes équipes, sans
                  sous-traitance : les personnes qui relèvent et dessinent sont celles qui montent.
                </p>
                <p>
                  C&apos;est ce qui donne sa matière à ce blog. Les guides répondent aux questions qui
                  reviennent en rendez-vous — quel bois tient dehors en Gironde, quelle autorisation
                  d&apos;urbanisme pour un abri, ce que coûte réellement une extension à ossature bois,
                  pourquoi une terrasse se pense par-dessous. Ce sont les réponses données de vive voix,
                  mises par écrit.
                </p>
                <p>
                  Quand un sujet dépend du PLU de votre commune ou de la nature de votre sol, les guides
                  le disent, plutôt que d&apos;avancer un chiffre universel qui serait faux chez la moitié
                  des lecteurs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui est vérifiable */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Ce qui est vérifiable, et pas seulement affirmé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">
                Un auteur qui parle de réglementation et de sécurité doit pouvoir être contrôlé. Voici de
                quoi le faire, sans nous croire sur parole.
              </p>
              <dl className="space-y-6">
                {[
                  {
                    t: 'Entreprise',
                    d: 'AD FRANCE, SAS immatriculée au RCS de Libourne sous le numéro 980 264 584. SIRET 980 264 584 00015.',
                  },
                  {
                    t: 'Qualification',
                    d: 'Qualibat — qualification professionnelle du bâtiment, délivrée après examen des références et des moyens de l’entreprise.',
                  },
                  {
                    t: 'Assurance',
                    d: 'SMABTP — responsabilité civile professionnelle et garantie décennale, en cours de validité.',
                  },
                  {
                    t: 'Atelier',
                    d: `${CONTACT.adresseComplete}. L’atelier se visite : voir un ouvrage en cours de fabrication est plus parlant qu’un catalogue.`,
                  },
                ].map((x) => (
                  <div key={x.t} className="border-l-2 border-secondary/40 pl-6">
                    <dt className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-2">
                      {x.t}
                    </dt>
                    <dd className="font-body-md text-body-md text-on-surface-variant">{x.d}</dd>
                  </div>
                ))}
              </dl>
              <p className="font-body-md text-body-md text-on-surface-variant mt-10">
                Le détail figure dans nos{' '}
                <a href="/mentions-legales" className={lienInterne}>
                  mentions légales
                </a>
                , et l&apos;entreprise est présentée sur la page{' '}
                <a href="/qui-sommes-nous" className={lienInterne}>
                  qui sommes-nous
                </a>
                . Les chantiers signés sont racontés un par un dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Méthode */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Comment ces guides sont écrits
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  La règle est de renvoyer chaque seuil réglementaire à sa source officielle —
                  service-public.gouv.fr pour les autorisations d&apos;urbanisme, le FCBA et le CSTB pour
                  les règles de mise en œuvre du bois, Légifrance pour les textes eux-mêmes. Une
                  distance ou une surface taxable qu&apos;on ne peut pas sourcer n&apos;est pas écrite,
                  et un seuil qui dépend du PLU de votre commune est présenté comme tel plutôt que
                  donné pour universel.
                </p>
                <p>
                  Les fourchettes de prix sont celles pratiquées sur nos propres chantiers en Gironde, pas
                  des moyennes nationales. Elles sont datées, parce qu&apos;elles bougent.
                </p>
                <p>
                  Les photos sont, sauf mention contraire dans la légende, des chantiers réellement
                  réalisés par l&apos;entreprise. Quand une image vient d&apos;un fournisseur ou d&apos;une
                  banque d&apos;images, la légende le dit.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Les guides */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              Les {articles.length} guides signés
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
              Du plus récent au plus ancien.
            </p>
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-6">
              {articles.map((a) => (
                <li key={a.slug} className="border-b border-outline-variant pb-4">
                  <a
                    href={`/blog/${a.slug}`}
                    className="font-title-md text-title-md text-on-surface hover:text-secondary-dark transition-colors"
                  >
                    {a.titre}
                  </a>
                  <p className="font-label-md text-label-md text-on-surface-variant mt-2">
                    {a.categorie}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 text-center">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
              Une question que les guides ne règlent pas ?
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              Un projet se juge sur place. L&apos;étude et le devis sont gratuits, sans engagement, à
              Libourne et dans toute la Gironde.
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
