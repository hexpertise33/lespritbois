import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: "Pergola bioclimatique & bois à Libourne (33) | L'Esprit Bois",
  description:
    'Pergola bioclimatique à lames orientables ou pergola bois massif, adossée ou autoportée. Conception et pose sur mesure à Libourne et en Gironde.',
  keywords:
    'pergola Libourne, pergola Gironde, pergola bioclimatique, pergola bois, pergola aluminium, lames orientables',
  path: '/pergolas',
  ogImage: '/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp',
  ogTitle: 'Pergola bioclimatique & bois à Libourne (33)',
  ville: 'Libourne',
});

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: 'https://lesprit-bois.fr/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Pergolas',
        item: 'https://lesprit-bois.fr/pergolas',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Conception et pose de pergolas bioclimatiques et bois',
    name: 'Pergola sur mesure à Libourne et en Gironde',
    areaServed: [
      {
        '@type': 'City',
        name: 'Libourne',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Gironde',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nouvelle-Aquitaine',
      },
    ],
    provider: {
      '@type': 'GeneralContractor',
      name: "L'Esprit Bois",
      description:
        "Créateur d'espaces extérieurs : pergolas, carports, terrasses, bardages et constructions bois. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.",
      telephone: '+33557406580',
      email: 'lespritbois33@gmail.com',
      hasCredential: {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Qualibat',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1 Aux Pradasses',
        postalCode: '33500',
        addressLocality: 'Les Billaux',
        addressRegion: 'Gironde',
        addressCountry: 'FR',
      },
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Types de pergolas',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola bioclimatique aluminium à lames orientables',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola bois massif',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola adossée à la maison',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola autoportée',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pergola à toile rétractable',
          },
        },
      ],
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Comment fonctionne une pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Sa toiture est composée de lames en aluminium orientables. Lames ouvertes, l'air circule et la chaleur s'échappe. Lames fermées, vous êtes couvert de la pluie et du soleil. C'est cette orientation qui règle l'ombre, la ventilation et la lumière au fil de la journée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique protège-t-elle vraiment de la pluie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Lames fermées, oui. La toiture est conçue pour que l'eau s'écoule sans stagner, et le profil des lames évite les infiltrations aux extrémités. L'eau est ensuite reprise par un système d'évacuation adapté à votre façade. Ce n'est pas pour autant une toiture au sens de la construction : c'est un ouvrage couvert, pas une couverture. Nous vous montrons concrètement ce que cela implique lors du rendez-vous.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pergola bois ou pergola aluminium : laquelle choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le bois massif apporte chaleur et matière, s'accorde aux maisons girondines traditionnelles et demande un entretien régulier. L'aluminium bioclimatique offre le pilotage des lames, de grandes portées et aucun entretien, pour une esthétique contemporaine. Le choix dépend de votre maison, de l'usage souhaité et du budget.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent oui. Une pergola qui crée de l'emprise au sol relève d'une déclaration préalable de travaux, voire d'un permis de construire selon la surface. En secteur protégé — abords d'un monument historique, site classé — une autorisation est requise même pour de petites surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les vérifions sur pièces et montons le dossier.",
        },
      },
      {
        '@type': 'Question',
        name: "Jusqu'à quelle taille peut-on aller ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La pergola est fabriquée sur mesure, aux dimensions de votre terrasse. Au-delà d\'une certaine largeur, un poteau intermédiaire devient nécessaire — ce qui change l\'implantation et parfois l\'usage de l\'espace. Nous relevons votre terrasse, puis nous vous disons ce qui est possible et à quel endroit poser les poteaux.',
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise certifiée Qualibat, la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre garantie décennale. Les structures aluminium de notre partenaire Li-Su des Temps bénéficient par ailleurs d'une garantie fabricant, dont les modalités vous sont précisées avec le devis.",
        },
      },
    ],
  },
];

export default function PergolasPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="pergolas" />
      <main id="contenu">
        {/* Hero de page */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="768"
              height="512"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp"
              alt="Pergola bioclimatique en aluminium à lames orientables posée par L'Esprit Bois à Libourne"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Pergolas</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Lumière &amp; Ombre
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Pergola sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Pergola bioclimatique à lames orientables ou pergola bois massif, adossée à la maison ou autoportée :
              créez votre nouvel espace de vie extérieur.
            </p>
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
              <span className="material-symbols-outlined text-secondary-dark text-3xl shrink-0">handshake</span>
              <div>
                <p className="font-label-md text-label-md text-primary uppercase tracking-widest">
                  Un seul interlocuteur
                </p>
                <p className="text-on-surface-variant text-body-md">De l'étude à la pose, sans sous-traitance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Chapô */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                L'ombre choisie, la lumière maîtrisée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Pour profiter de votre terrasse de mars à octobre, la pergola bioclimatique à lames orientables
                  (bois ou aluminium) reste la solution la plus efficace : elle règle l'ombre, la ventilation et la
                  pluie d'un geste, adossée à la maison ou autoportée.
                </strong>{' '}
                Une terrasse sans ombre ne se vit qu'au printemps. Une pergola bien orientée, elle, tempère les
                après-midi de juillet, abrite le repas quand l'averse arrive, et prolonge la maison de plusieurs
                mètres carrés sans en pousser les murs.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de <strong className="text-primary font-semibold">Libourne</strong>,
                nous concevons et posons des pergolas sur mesure dans toute la{' '}
                <strong className="text-primary font-semibold">Gironde</strong> :{' '}
                <strong className="text-primary font-semibold">pergola bioclimatique</strong> en aluminium à lames
                orientables, ou <strong className="text-primary font-semibold">pergola bois massif</strong>, adossée à
                la façade comme entièrement autoportée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Chaque projet part de l'orientation de votre terrasse, du trajet du soleil et des vents dominants.
                Nous dessinons, nous posons —{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>
                , de l'étude à la dernière lame. Entreprise{' '}
                <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons chaque
                ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Pergola bioclimatique */}
        <section className="py-section-padding bg-surface-container-low" id="pergola-bioclimatique">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Le pilotage du soleil
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                  Pergola bioclimatique à lames orientables
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  C'est le principe qui donne son nom à l'ouvrage : la toiture est faite de{' '}
                  <strong className="text-primary font-semibold">lames en aluminium orientables</strong>. Ouvertes,
                  elles laissent l'air chaud s'échapper et la lumière entrer. Fermées, elles couvrent la terrasse et
                  vous abritent de l'averse. Une même terrasse, deux usages, réglés d'un geste.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Nous posons la pergola bioclimatique de notre partenaire français{' '}
                  <a
                    href="https://www.lisudestemps.fr/pergola-bioclimatique/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>
                  , fabriquée à la commande, sur mesure.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Lames aluminium orientables : ombre, ventilation et lumière réglables
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Adossée à la façade ou entièrement autoportée</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Fabrication sur mesure, aux dimensions de votre terrasse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Large choix de teintes, structure sans entretien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Options : éclairage intégré, store motorisé, cloison brise-vue
                    </span>
                  </li>
                </ul>
                <p className="text-on-surface-variant text-body-md mt-6 italic">
                  Dimensions, teintes, options et garanties du fabricant sont arrêtées lors du rendez-vous, après
                  relevé de votre terrasse, et détaillées dans le devis.
                </p>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  width="800"
                  height="533"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/pergola-bioclimatique-lisudestemps.jpg"
                  alt="Pergola bioclimatique aluminium à lames orientables, terrasse bois et spa"
                />
              </div>
            </div>

            {/* Gestion de l'eau */}
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">
              Là où tout se joue : l'évacuation de l'eau
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">water_drop</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Pas d'eau stagnante</h4>
                <p className="text-on-surface-variant text-body-md">
                  La toiture est conçue pour que l'eau s'écoule toujours, dans les deux sens : rien ne s'accumule sur
                  les lames, même après une averse d'orage girondine.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">
                  precision_manufacturing
                </span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Le détail invisible</h4>
                <p className="text-on-surface-variant text-body-md">
                  Le jeu entre les lames et le profil de leurs embouts sont calculés pour éviter les infiltrations
                  aux extrémités. C'est là que se joue la différence entre les gammes.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">plumbing</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Une évacuation adaptée</h4>
                <p className="text-on-surface-variant text-body-md">
                  Plusieurs systèmes existent, dont l'évacuation dissimulée dans les poteaux. Nous retenons celui qui
                  convient à votre façade et à votre réseau d'eaux pluviales.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Pergola bois */}
        <section className="py-section-padding bg-surface" id="pergola-bois">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  width="1100"
                  height="1100"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/pergola-bois-massif-terrasse.jpg"
                  alt="Pergola en bois massif à lames sur une terrasse, avec espace repas extérieur"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  La chaleur de la matière
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">Pergola bois massif</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Aucun matériau ne vieillit avec autant de noblesse qu'une charpente bois bien dessinée. Sur une
                  maison en pierre du Libournais, une pergola en{' '}
                  <strong className="text-primary font-semibold">douglas</strong>,{' '}
                  <strong className="text-primary font-semibold">mélèze</strong> ou{' '}
                  <strong className="text-primary font-semibold">red cedar</strong> ne fait pas rapport : elle
                  appartient au lieu.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Essences choisies selon l'exposition de l'ouvrage</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Adossée à la façade ou autoportée, assemblages traditionnels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Pieds de poteaux protégés, décollés du sol</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Couverture claire-voie, lames fixes, canisse ou toile</span>
                  </li>
                </ul>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Une pergola bois s'installe souvent en même temps qu'une{' '}
                  <strong className="text-primary font-semibold">terrasse</strong> : même platelage, même structure
                  ventilée, un seul chantier.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comparatif */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                Aide au choix
              </span>
              <h2 className="font-headline-md text-headline-md mt-4 mb-6">Pergola bois ou pergola aluminium ?</h2>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Il n'y a pas de bonne réponse dans l'absolu — il y a une bonne réponse pour votre maison, votre
                terrasse et l'usage que vous en ferez.
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 pr-6 font-label-md text-label-md uppercase tracking-widest text-secondary">
                      Critère
                    </th>
                    <th className="py-4 pr-6 font-headline-sm text-headline-sm text-[20px] text-secondary-fixed">
                      Bois massif
                    </th>
                    <th className="py-4 font-headline-sm text-headline-sm text-[20px] text-secondary-fixed">
                      Aluminium bioclimatique
                    </th>
                  </tr>
                </thead>
                <tbody className="text-on-primary-container text-body-md">
                  <tr className="border-b border-white/10">
                    <td className="py-5 pr-6 text-white font-semibold">Esthétique</td>
                    <td className="py-5 pr-6">Chaleur, matière vivante, patine</td>
                    <td className="py-5">Lignes tendues, contemporain</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-5 pr-6 text-white font-semibold">Ombre</td>
                    <td className="py-5 pr-6">Fixe, réglée à la conception</td>
                    <td className="py-5">Pilotable, lames orientables</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-5 pr-6 text-white font-semibold">Pluie</td>
                    <td className="py-5 pr-6">Selon la couverture choisie</td>
                    <td className="py-5">Couvert lames fermées, eau évacuée</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-5 pr-6 text-white font-semibold">Entretien</td>
                    <td className="py-5 pr-6">Lasure à reprendre périodiquement</td>
                    <td className="py-5">Structure laquée, sans entretien</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-5 pr-6 text-white font-semibold">Portée</td>
                    <td className="py-5 pr-6">Selon section des bois</td>
                    <td className="py-5">Grandes portées, moins de poteaux</td>
                  </tr>
                  <tr>
                    <td className="py-5 pr-6 text-white font-semibold">S'accorde à</td>
                    <td className="py-5 pr-6">Maison en pierre, bâti ancien</td>
                    <td className="py-5">Maison contemporaine, extension</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Nos chantiers
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Pergolas réalisées à Libourne et en Gironde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-1.webp"
                  alt="Pergola bioclimatique adossée réalisée à Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-3.webp"
                  alt="Pergola aluminium à lames orientables sur terrasse en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-5.webp"
                  alt="Pergola bioclimatique avec éclairage LED intégré"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-6.webp"
                  alt="Pergola aluminium autoportée près de Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-7.webp"
                  alt="Détail des lames orientables d'une pergola bioclimatique"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
                  alt="Pergola aluminium sur mesure, terrasse en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/pergola-terrasse-bois-libourne-1.webp"
                  alt="Pergola aluminium adossée et terrasse bois posées le long d'une maison girondine"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="900"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/pergola-terrasse-bois-libourne-2.webp"
                  alt="Pergola aluminium à toiture plate prolongeant une terrasse bois, Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1000"
                  height="1333"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/pergola-terrasse-bois-libourne-3.webp"
                  alt="Toiture vitrée d'une pergola aluminium vue depuis la terrasse bois"
                />
              </div>
            </div>
            <p className="mt-10 text-on-surface-variant text-body-md">
              Découvrez aussi{' '}
              <a
                href="/realisations"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                l'ensemble de nos réalisations
              </a>
              , nos{' '}
              <a
                href="/carports"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                carports
              </a>{' '}
              et nos{' '}
              <a
                href="/constructions-bois"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                constructions bois
              </a>
              .
            </p>
          </div>
        </section>

        {/* Zone d'intervention */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Votre pergola à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Nous venons relever votre terrasse, étudier son orientation, et nous restons
                joignables après la pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons dans tout le Libournais et plus largement en Gironde, jusqu'à la métropole
                bordelaise.
              </p>
            </div>
            <div>
              <h3 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-6">
                Communes desservies
              </h3>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-on-surface-variant text-body-md">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Libourne
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Les Billaux
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Saint-Émilion
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Coutras
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Fronsac
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Vayres
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Izon
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Saint-Denis-de-Pile
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Castillon-la-Bataille
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Guîtres
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Branne
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary-dark text-[18px]">location_on</span>
                  Bordeaux
                </li>
              </ul>
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
              Ce qu'on nous demande avant d'installer une pergola
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Comment fonctionne une pergola bioclimatique ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Sa toiture est composée de <strong className="text-primary font-semibold">lames en aluminium orientables</strong>.
                  Lames ouvertes, l'air circule et la chaleur s'échappe. Lames fermées, vous êtes couvert de la pluie
                  et du soleil. C'est cette orientation qui règle l'ombre, la ventilation et la lumière au fil de la
                  journée.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Une pergola bioclimatique protège-t-elle vraiment de la pluie ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Lames fermées, oui. La toiture est conçue pour que l'eau s'écoule sans stagner, et le profil des
                  lames évite les infiltrations aux extrémités. L'eau est ensuite reprise par un système d'évacuation
                  adapté à votre façade. Ce n'est pas pour autant une toiture au sens de la construction : c'est un{' '}
                  <strong className="text-primary font-semibold">ouvrage couvert, pas une couverture</strong>. Nous
                  vous montrons concrètement ce que cela implique lors du rendez-vous.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Pergola bois ou pergola aluminium : laquelle choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le <strong className="text-primary font-semibold">bois massif</strong> apporte chaleur et matière,
                  s'accorde aux maisons girondines traditionnelles et demande un entretien régulier. L'
                  <strong className="text-primary font-semibold">aluminium bioclimatique</strong> offre le pilotage
                  des lames, de grandes portées et aucun entretien, pour une esthétique contemporaine. Le choix
                  dépend de votre maison, de l'usage souhaité et du budget.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il une autorisation d'urbanisme pour une pergola ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent oui. Une pergola qui crée de l'emprise au sol relève d'une{' '}
                  <strong className="text-primary font-semibold">déclaration préalable de travaux</strong>, voire d'un{' '}
                  <strong className="text-primary font-semibold">permis de construire</strong> selon la surface. En
                  secteur protégé — abords d'un monument historique, site classé — une autorisation est requise même
                  pour de petites surfaces. Les seuils dépendent du PLU de votre commune et évoluent : nous les
                  vérifions sur pièces et montons le dossier.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Jusqu'à quelle taille peut-on aller ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La pergola est fabriquée sur mesure, aux dimensions de votre terrasse. Au-delà d'une certaine
                  largeur, un poteau intermédiaire devient nécessaire — ce qui change l'implantation et parfois
                  l'usage de l'espace. Nous relevons votre terrasse, puis nous vous disons ce qui est possible et à
                  quel endroit poser les poteaux.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">Êtes-vous certifiés et assurés ?</h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. L'Esprit Bois est une entreprise <strong className="text-primary font-semibold">certifiée Qualibat</strong>{' '}
                  et chacun de nos ouvrages est couvert par notre{' '}
                  <strong className="text-primary font-semibold">garantie décennale</strong>. Les structures
                  aluminium de notre partenaire{' '}
                  <a
                    href="https://www.lisudestemps.fr/garanties/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>{' '}
                  bénéficient par ailleurs d'une garantie fabricant, dont les modalités vous sont précisées avec le
                  devis.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">Parlons-en</span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un projet de pergola à Libourne ou en Gironde ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Orientation de la terrasse, dimensions, bois ou aluminium : dites-nous ce que vous imaginez. Nous
              revenons vers vous sous 48h avec une première estimation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#quote"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect"
              >
                Demander mon étude gratuite
              </a>
              <a
                href="tel:+33557406580"
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all"
              >
                05 57 40 65 80
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
