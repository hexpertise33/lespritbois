import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

export const metadata: Metadata = buildMetadata({
  title: "Carport bois, alu & solaire à Libourne (33) | L'Esprit Bois",
  description:
    "Carport bois (toiture plate, bac acier, tuile), aluminium ou solaire, sur mesure. Conception et pose par L'Esprit Bois à Libourne et en Gironde.",
  keywords: 'carport Libourne, carport Gironde, carport bois, carport aluminium, carport solaire, abri voiture Libourne',
  path: '/carports',
  ogImage: '/images/source-adefrance/Carport-bois-Libourne-1.webp',
  ogTitle: 'Carport bois, aluminium & solaire à Libourne (33)',
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
        name: 'Carports',
        item: 'https://lesprit-bois.fr/carports',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Construction de carport bois, aluminium et solaire',
    name: 'Carport sur mesure à Libourne et en Gironde',
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
        "Créateur d'espaces extérieurs : carports, pergolas, terrasses, bardages et constructions bois. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.",
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
      name: 'Types de carports',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture plate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture bac acier',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport bois toiture tuile',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport aluminium sur mesure',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Carport solaire photovoltaïque',
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
        name: "Faut-il une autorisation d'urbanisme pour un carport ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent oui. Un carport crée de l'emprise au sol : selon la surface, il relève d'une déclaration préalable de travaux ou d'un permis de construire. Les seuils varient d'une commune à l'autre, dépendent du PLU et évoluent dans le temps ; un secteur protégé change encore la donne. Nous les vérifions sur pièces et montons le dossier pour vous.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour un carport en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous travaillons le douglas, le mélèze, le red cedar et le chêne, choisis selon l'exposition de la structure et la fonction de chaque pièce. En Gironde, le climat océanique impose une attention particulière à la ventilation de la structure et au traitement des pieds de poteaux. Nous arrêtons l'essence avec vous, au vu de votre maison.",
        },
      },
      {
        '@type': 'Question',
        name: 'Toiture plate, bac acier ou tuile : laquelle choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'La toiture plate offre une ligne contemporaine et peut être végétalisée. Le bac acier est léger, économique et se pose rapidement, avec un large choix de coloris. La tuile s\'accorde à la couverture de la maison mais demande une charpente plus dimensionnée. Le choix dépend de votre maison, de votre budget et du PLU.',
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce qu'un carport solaire ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est un carport dont la toiture accueille des panneaux photovoltaïques. Chez notre partenaire, l'étanchéité est assurée par la toiture elle-même, et non par les panneaux solaires : vous restez donc libre du nombre de modules installés. Les panneaux photovoltaïques ne sont pas fournis avec la structure ; leur dimensionnement et leur raccordement se font avec votre installateur électricien.",
        },
      },
      {
        '@type': 'Question',
        name: 'Êtes-vous certifiés et assurés ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. L'Esprit Bois est une entreprise certifiée Qualibat, la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre garantie décennale : la structure que nous posons est garantie dix ans à compter de la réception du chantier.",
        },
      },
      {
        '@type': 'Question',
        name: 'Intervenez-vous en dehors de Libourne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Oui. Basés aux Billaux, nous intervenons dans tout le Libournais — Saint-Émilion, Coutras, Fronsac, Vayres, Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne — et plus largement en Gironde, jusqu\'à la métropole bordelaise.',
        },
      },
    ],
  },
];

export default function CarportsPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="carports" />
      <main id="contenu">
        {/* Hero de page */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src="/images/source-adefrance/Carport-bois-Libourne-1.webp"
              alt="Carport bois sur mesure réalisé par L'Esprit Bois à Libourne, en Gironde"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Carports</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Structure &amp; Protection
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6">
              Carport sur mesure à Libourne et en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">
              Carport bois, carport aluminium ou carport solaire : nous concevons, fabriquons et posons l'abri qui
              protège votre véhicule et valorise votre maison.
            </p>
          </div>
        </header>

        {/* Bandeau de confiance : certification, assurance, interlocuteur */}
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

        {/* Chapô / intro riche en mots-clés */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Notre approche
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Un abri qui devient un élément d'architecture
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                <strong className="text-primary font-semibold">
                  Un carport bois ou aluminium protège votre véhicule de la pluie, du gel et des UV sans les
                  contraintes de fondation d'un garage — toiture plate, bac acier, tuile ou carport solaire, sur
                  mesure à Libourne et en Gironde.
                </strong>{' '}
                Sans l'enfermement d'un garage, bien dessiné, il ne s'ajoute pas à la maison : il la prolonge.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Installés aux Billaux, à quelques minutes de{' '}
                <strong className="text-primary font-semibold">Libourne</strong>, nous réalisons des carports sur
                mesure dans toute la <strong className="text-primary font-semibold">Gironde</strong> : structure
                bois avec toiture plate, bac acier ou tuile, carport aluminium thermolaqué, et carport solaire
                équipé de panneaux photovoltaïques.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Chaque projet part du terrain : orientation, pente, accès, style de la façade, règles du PLU de votre
                commune. Nous dessinons, nous fabriquons, nous posons —{' '}
                <a
                  href="/#methode"
                  className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                >
                  un seul interlocuteur
                </a>
                , de l'étude à la dernière vis. Entreprise{' '}
                <strong className="text-primary font-semibold">certifiée Qualibat</strong>, nous couvrons chaque
                ouvrage par notre <strong className="text-primary font-semibold">garantie décennale</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Carport bois + 3 toitures */}
        <section className="py-section-padding bg-surface-container-low" id="carport-bois">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Le classique
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                  Carport bois : chaleur naturelle et robustesse
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Le bois reste la matière la plus chaleureuse pour un abri de voiture, et la plus facile à accorder
                  à une maison girondine, en pierre comme en enduit. Nous travaillons le{' '}
                  <strong className="text-primary font-semibold">douglas</strong>, le{' '}
                  <strong className="text-primary font-semibold">mélèze</strong>, le{' '}
                  <strong className="text-primary font-semibold">red cedar</strong> et le{' '}
                  <strong className="text-primary font-semibold">chêne</strong>, choisis selon l'exposition de
                  l'ouvrage.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Structure autoportée ou adossée à la façade, poteaux sur platines inox, ventilation soignée des
                  pieds de poteaux : sous le climat océanique du Libournais, c'est ce qui fait la différence entre un
                  carport qui vieillit bien et un carport qui grise mal.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Pour comparer les essences, les toitures et le budget avant de vous décider, lisez notre guide{' '}
                  <a
                    href="/blog/carport-bois-guide"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Carport en bois : bien le choisir et l'intégrer à sa maison
                  </a>
                  .
                </p>
              </div>
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/source-adefrance/Carport-bois-Libourne-3.webp"
                  alt="Charpente d'un carport bois autoporté posé à Libourne par L'Esprit Bois"
                />
              </div>
            </div>

            {/* Les 3 toitures */}
            <h3 className="font-headline-sm text-headline-sm text-primary mb-8">
              Trois toitures possibles, selon votre maison et votre budget
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">horizontal_rule</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture plate</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  La ligne la plus contemporaine. Étanchéité par membrane, évacuation intégrée dans la structure, et
                  possibilité de <strong className="text-primary font-semibold">toiture végétalisée</strong> pour
                  fondre l'abri dans le jardin.
                </p>
                <p className="text-on-surface-variant text-body-md italic">
                  Idéale sur une maison cubique ou une extension récente.
                </p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">roofing</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture bac acier</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  Légère, économique et rapide à poser. Large choix de coloris RAL pour s'accorder aux menuiseries,
                  et excellente tenue à la pluie. Une sous-face isolée limite le bruit d'averse.
                </p>
                <p className="text-on-surface-variant text-body-md italic">Le meilleur rapport durabilité / budget.</p>
              </article>
              <article className="bg-white rounded-xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500">
                <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4">home</span>
                <h4 className="font-headline-sm text-headline-sm text-primary mb-3">Toiture tuile</h4>
                <p className="text-on-surface-variant text-body-md mb-4">
                  La continuité parfaite avec la couverture de la maison — souvent la seule solution acceptée près
                  d'un site classé. Plus lourde, elle demande une charpente dimensionnée en conséquence.
                </p>
                <p className="text-on-surface-variant text-body-md italic">
                  Recommandée en secteur patrimonial, autour de Saint-Émilion.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Carport aluminium */}
        <section className="py-section-padding bg-surface" id="carport-aluminium">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  src="/images/source-adefrance/Carport-aluminium-Libourne-2.webp"
                  alt="Carport aluminium contemporain sur mesure installé en Gironde"
                />
              </div>
              <div className="order-1 lg:order-2">
                <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                  Le contemporain
                </span>
                <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                  Carport aluminium sur mesure
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                  Quand l'architecture appelle des lignes tendues et des portées franches, l'aluminium s'impose.
                  Thermolaqué dans le coloris de votre choix, il ne demande{' '}
                  <strong className="text-primary font-semibold">aucun entretien</strong> : pas de lasure à
                  reprendre, pas de reprise de teinte.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
                  Nous posons les carports aluminium de notre partenaire français{' '}
                  <a
                    href="https://www.lisudestemps.fr/aluloge-carport-abri-de-terrasse/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    Li-Su des Temps
                  </a>
                  , fabriqués sur mesure aux dimensions exactes de votre stationnement.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Structure aluminium et <strong className="text-primary font-semibold">visserie inox</strong>,
                      pensées pour le bord de mer comme pour l'humidité girondine
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Toiture isolante, résistante aux chocs et au ruissellement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Fabrication sur mesure : une voiture, deux, ou un abri de terrasse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">Large choix de teintes, laquage durable, aucun entretien</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">
                      check_circle
                    </span>
                    <span className="text-body-md">
                      Options : éclairage intégré, puits de lumière, store motorisé, cloison brise-vue
                    </span>
                  </li>
                </ul>
                <p className="text-on-surface-variant text-body-md mt-6 italic">
                  Dimensions, teintes, options et garanties du fabricant sont arrêtées lors du rendez-vous, après
                  relevé de votre terrain, et détaillées dans le devis.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Carport solaire */}
        <section className="py-section-padding bg-primary text-white" id="carport-solaire">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-14">
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
                L'abri qui produit
              </span>
              <h2 className="font-headline-md text-headline-md mt-4 mb-6">
                Carport solaire : abritez votre voiture, produisez votre électricité
              </h2>
              <p className="font-body-lg text-body-lg text-on-primary-container mb-4">
                Une toiture de carport, c'est une surface plane, dégagée et bien exposée : le support idéal pour des{' '}
                <strong className="text-white font-semibold">panneaux photovoltaïques</strong>. Plutôt que de
                percer la couverture de votre maison, vous produisez votre électricité au-dessus de votre véhicule.
              </p>
              <p className="font-body-lg text-body-lg text-on-primary-container">
                Nous posons le carport solaire sur mesure de notre partenaire français{' '}
                <a
                  href="https://www.lisudestemps.fr/carport-solaire-sur-mesure-lisudestemps/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary-fixed underline underline-offset-4 decoration-secondary/60 hover:decoration-secondary transition-colors"
                >
                  Li-Su des Temps
                </a>
                .
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">water_drop</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  L'étanchéité ne dépend pas des panneaux
                </h3>
                <p className="text-on-primary-container text-body-md">
                  Chez notre partenaire, c'est la <strong className="text-white font-semibold">toiture elle-même</strong>{' '}
                  qui assure l'étanchéité — jamais le photovoltaïque. Une fuite ne viendra donc pas de vos panneaux.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">tune</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  Le nombre de panneaux, à la carte
                </h3>
                <p className="text-on-primary-container text-body-md">
                  Conséquence directe : vous choisissez librement combien de panneaux installer. Les modules
                  photovoltaïques ne sont pas fournis avec la structure — vous dimensionnez la production avec votre
                  installateur électricien.
                </p>
              </div>
              <div className="border-t-2 border-secondary pt-6">
                <span className="material-symbols-outlined text-secondary text-4xl mb-4">straighten</span>
                <h3 className="font-headline-sm text-headline-sm text-secondary-fixed mb-3">
                  Une voiture, plusieurs, ou un camping-car
                </h3>
                <p className="text-on-primary-container text-body-md">
                  La structure est dimensionnée sur mesure selon ce que vous abritez, et peut recevoir éclairage
                  intégré, store motorisé ou cloison brise-vue. Nous calons tout cela au rendez-vous, après relevé.
                </p>
              </div>
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
              Carports réalisés à Libourne et en Gironde
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-bois-Libourne-2.webp"
                  alt="Carport bois adossé à la façade, réalisé à Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-aluminium-Libourne-1.webp"
                  alt="Carport aluminium sur mesure à toiture plate, Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="768"
                  height="512"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/carport-accueil.webp"
                  alt="Carport double contemporain en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
                  alt="Carport bois avec toiture bac acier près de Libourne"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-bois-Libourne-6.webp"
                  alt="Structure bois d'un abri voiture en Gironde"
                />
              </div>
              <div className="group relative overflow-hidden rounded-2xl aspect-[4/3]">
                <img
                  width="1200"
                  height="646"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/images/source-adefrance/Carport-aluminium-Libourne-3.webp"
                  alt="Carport aluminium thermolaqué avec éclairage intégré"
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
                href="/pergolas"
                className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
              >
                pergolas
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

        {/* Zone d'intervention : SEO local */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
                Zone d'intervention
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-6">
                Votre carport à Libourne et dans tout le Libournais
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Notre atelier est basé au{' '}
                <strong className="text-primary font-semibold">1 Aux Pradasses, 33500 Les Billaux</strong>, à cinq
                minutes de Libourne. Cette proximité change tout : nous venons relever votre terrain, nous suivons le
                chantier au quotidien, et nous restons joignables après la pose.
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
              Ce qu'on nous demande avant de construire un carport
            </h2>

            <div className="space-y-4">
              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow" open>
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Faut-il une autorisation d'urbanisme pour un carport ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Le plus souvent, oui : un carport crée de l'emprise au sol. Selon la surface, il relève d'une{' '}
                  <strong className="text-primary font-semibold">déclaration préalable de travaux</strong> ou d'un{' '}
                  <strong className="text-primary font-semibold">permis de construire</strong>. Les seuils varient
                  d'une commune à l'autre, dépendent du PLU et évoluent dans le temps ; un secteur protégé change
                  encore la donne. Nous les vérifions sur pièces et montons le dossier pour vous.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Quel bois choisir pour un carport en Gironde ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Douglas, mélèze, red cedar ou chêne, choisis selon l'exposition de la pièce et sa fonction dans la
                  structure. Sous le climat océanique girondin, ce qui compte autant que l'essence, c'est la
                  conception : ventilation de la structure, pieds de poteaux décollés du sol, évacuation d'eau
                  maîtrisée. Nous arrêtons l'essence avec vous, au vu de votre maison. Notre{' '}
                  <a
                    href="/blog/carport-bois-guide"
                    className="text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors"
                  >
                    guide du carport bois
                  </a>{' '}
                  détaille chaque essence et chaque toiture.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Toiture plate, bac acier ou tuile : laquelle choisir ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  La <strong className="text-primary font-semibold">toiture plate</strong> donne une ligne
                  contemporaine et peut être végétalisée. Le{' '}
                  <strong className="text-primary font-semibold">bac acier</strong> est léger, économique et rapide
                  à poser. La <strong className="text-primary font-semibold">tuile</strong> assure la continuité
                  avec la couverture de la maison, souvent exigée en secteur patrimonial, mais impose une charpente
                  plus dimensionnée. Le choix se fait au regard de votre maison, de votre budget et du PLU.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">Qu'est-ce qu'un carport solaire ?</h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Un carport dont la toiture accueille des panneaux photovoltaïques. Point essentiel : chez notre
                  partenaire, l'étanchéité est assurée par la toiture elle-même,{' '}
                  <strong className="text-primary font-semibold">pas par les panneaux solaires</strong>. Vous restez
                  donc libre du nombre de modules installés. Les panneaux photovoltaïques ne sont pas fournis avec la
                  structure : leur dimensionnement et leur raccordement se font avec votre installateur électricien.
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
                  Oui. L'Esprit Bois est une entreprise <strong className="text-primary font-semibold">certifiée Qualibat</strong>,
                  la qualification de référence du bâtiment, et chacun de nos ouvrages est couvert par notre{' '}
                  <strong className="text-primary font-semibold">garantie décennale</strong>. Concrètement : la
                  structure que nous posons est garantie dix ans à compter de la réception du chantier.
                </p>
              </details>

              <details className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow">
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="font-headline-sm text-headline-sm text-primary pr-6">
                    Intervenez-vous en dehors de Libourne ?
                  </h3>
                  <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-on-surface-variant text-body-md mt-4">
                  Oui. Basés aux Billaux, nous couvrons tout le Libournais — Saint-Émilion, Coutras, Fronsac, Vayres,
                  Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne — et plus largement la Gironde,
                  jusqu'à la métropole bordelaise.
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
              Un projet de carport à Libourne ou en Gironde ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Décrivez-nous votre terrain, votre maison et vos usages : nous revenons vers vous sous 48h avec une
              première estimation.
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
