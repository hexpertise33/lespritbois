import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/Carport-bois-Libourne-3.webp';

export const metadata: Metadata = buildMetadata({
  title: "Autorisation d'urbanisme abri, carport, pergola en 2026 | L'Esprit Bois",
  description:
    "Déclaration préalable ou permis de construire ? Seuils d'emprise au sol, CERFA 16702, secteurs protégés : le guide 2026 pour abri de jardin, carport et pergola en Gironde.",
  keywords:
    "autorisation urbanisme abri de jardin, déclaration préalable carport, déclaration préalable travaux 2026, CERFA 16702, permis de construire pergola, seuil 20 m2 emprise au sol, urbanisme Libourne, autorisation abri de jardin Gironde",
  path: '/blog/autorisation-urbanisme-abri-carport-pergola-2026',
  ogImage: COVER,
  ogTitle: "Abri de jardin, carport, pergola : quelle autorisation d'urbanisme en 2026 ?",
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
        className="w-full h-auto rounded-2xl object-cover shadow-sm"
        src={src}
        alt={alt}
      />
      <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
        {caption}
      </figcaption>
    </figure>
  );
}

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lesprit-bois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: "Autorisation d'urbanisme 2026",
        item: 'https://lesprit-bois.fr/blog/autorisation-urbanisme-abri-carport-pergola-2026',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Abri de jardin, carport, pergola : quelle autorisation d'urbanisme en 2026 ?",
    description:
      "Emprise au sol, seuils de 5, 20 et 40 m², secteurs protégés et Architecte des Bâtiments de France, nouveau CERFA n°16702, délais d'instruction : le guide complet des formalités d'urbanisme 2026 pour abri de jardin, carport et pergola en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: { '@type': 'ImageObject', url: 'https://lesprit-bois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-11',
    dateModified: '2026-07-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/autorisation-urbanisme-abri-carport-pergola-2026',
    },
    about: ["urbanisme", "déclaration préalable", "permis de construire", "abri de jardin", "carport", "pergola"],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Faut-il une autorisation pour installer un abri de jardin, un carport ou une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Cela dépend de l'emprise au sol créée, c'est-à-dire de la projection verticale de la construction, poteaux compris. En dessous de 5 m², aucune formalité n'est requise. Entre 5 et 20 m², une déclaration préalable de travaux est nécessaire. Au-delà de 20 m², il faut un permis de construire. Ces seuils s'appliquent au cas général ; le PLU de votre commune peut prévoir des règles plus strictes.",
        },
      },
      {
        '@type': 'Question',
        name: "Quels sont les seuils d'emprise au sol en 2026 pour un abri, un carport ou une pergola ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jusqu'à 5 m² d'emprise au sol : aucune formalité. De plus de 5 m² à 20 m² : déclaration préalable (formulaire CERFA n°16702). Au-delà de 20 m² : permis de construire. En zone U d'une commune couverte par un PLU, si l'ouvrage est considéré comme une extension du bâti existant, le seuil de déclaration préalable est relevé à 40 m² ; au-delà, un permis de construire est requis.",
        },
      },
      {
        '@type': 'Question',
        name: "Qu'est-ce que le seuil de 40 m² pour une extension en zone U ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Quand le terrain se trouve en zone U d'une commune dotée d'un PLU et que la mairie considère la construction projetée comme une extension du bâti existant (accolée à la maison, dans son prolongement), le seuil de déclaration préalable passe de 20 à 40 m² d'emprise au sol. Au-delà de 40 m², un permis de construire devient nécessaire. C'est la mairie qui qualifie ou non l'ouvrage d'extension.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation particulière près de Saint-Émilion ou d'un monument historique ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Dans les abords de monuments historiques et les sites classés, comme le périmètre UNESCO de Saint-Émilion, la déclaration préalable est obligatoire dès 5 m² d'emprise au sol et jusqu'à 20 m² ; au-delà, un permis de construire est requis. Le dossier est en plus soumis à l'avis de l'Architecte des Bâtiments de France, ce qui allonge le délai d'instruction à deux mois.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel formulaire utiliser pour une déclaration préalable de travaux en 2026 ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Depuis janvier 2026, le CERFA n°16702 est le seul formulaire valide pour une déclaration préalable de travaux concernant une construction nouvelle comme un abri de jardin, un carport ou une pergola. Il se dépose en quatre exemplaires à la mairie du lieu des travaux, accompagné d'un plan de situation, d'un plan de masse et, selon les cas, d'une représentation de l'aspect extérieur.",
        },
      },
      {
        '@type': 'Question',
        name: "Combien de temps dure l'instruction d'une déclaration préalable et que se passe-t-il en l'absence de réponse ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le délai d'instruction d'une déclaration préalable est d'un mois dans le cas général, porté à deux mois en secteur protégé pour permettre la consultation de l'Architecte des Bâtiments de France. Si la mairie ne répond pas dans ce délai, le silence vaut accord tacite : le projet peut être réalisé, sous réserve d'en conserver la preuve (récépissé de dépôt et calcul du délai).",
        },
      },
    ],
  },
];

const seuils = [
  ['Jusqu’à 5 m²', 'Aucune formalité', 'Aucun', 'Vérifier tout de même le règlement de lotissement ou un secteur protégé'],
  ['De 5 à 20 m²', 'Déclaration préalable (CERFA 16702)', '1 mois', '2 mois si secteur protégé (avis ABF)'],
  ['Au-delà de 20 m²', 'Permis de construire', '2 à 3 mois', 'Toujours nécessaire, quelle que soit la zone'],
  ['Extension en zone U (PLU), jusqu’à 40 m²', 'Déclaration préalable', '1 mois', 'La mairie doit qualifier l’ouvrage d’extension'],
  ['Secteur protégé / abords ABF', 'DP dès 5 m², permis au-delà de 20 m²', '2 mois', 'Avis de l’Architecte des Bâtiments de France'],
];

const faq = [
  {
    q: "Faut-il une autorisation pour installer un abri de jardin, un carport ou une pergola ?",
    r: (
      <>
        Cela dépend de l&apos;emprise au sol créée, c&apos;est-à-dire de la projection verticale de la construction,
        poteaux compris. En dessous de 5 m², aucune formalité n&apos;est requise. Entre 5 et 20 m², une déclaration
        préalable de travaux est nécessaire. Au-delà de 20 m², il faut un permis de construire. Ces seuils
        s&apos;appliquent au cas général ; le PLU de votre commune peut prévoir des règles plus strictes.
      </>
    ),
  },
  {
    q: "Quels sont les seuils d'emprise au sol en 2026 pour un abri, un carport ou une pergola ?",
    r: (
      <>
        Jusqu&apos;à 5 m² d&apos;emprise au sol : aucune formalité. De plus de 5 m² à 20 m² : déclaration préalable
        (formulaire CERFA n°16702). Au-delà de 20 m² : permis de construire. En zone U d&apos;une commune couverte par
        un PLU, si l&apos;ouvrage est considéré comme une extension du bâti existant, le seuil de déclaration
        préalable est relevé à 40 m² ; au-delà, un permis de construire est requis.
      </>
    ),
  },
  {
    q: "Qu'est-ce que le seuil de 40 m² pour une extension en zone U ?",
    r: (
      <>
        Quand le terrain se trouve en zone U d&apos;une commune dotée d&apos;un PLU et que la mairie considère la
        construction projetée comme une extension du bâti existant (accolée à la maison, dans son prolongement), le
        seuil de déclaration préalable passe de 20 à 40 m² d&apos;emprise au sol. Au-delà de 40 m², un permis de
        construire devient nécessaire. C&apos;est la mairie qui qualifie ou non l&apos;ouvrage d&apos;extension.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation particulière près de Saint-Émilion ou d'un monument historique ?",
    r: (
      <>
        Oui. Dans les abords de monuments historiques et les sites classés, comme le périmètre UNESCO de
        Saint-Émilion, la déclaration préalable est obligatoire dès 5 m² d&apos;emprise au sol et jusqu&apos;à 20 m² ;
        au-delà, un permis de construire est requis. Le dossier est en plus soumis à l&apos;avis de l&apos;Architecte
        des Bâtiments de France, ce qui allonge le délai d&apos;instruction à deux mois.
      </>
    ),
  },
  {
    q: 'Quel formulaire utiliser pour une déclaration préalable de travaux en 2026 ?',
    r: (
      <>
        Depuis janvier 2026, le CERFA n°16702 est le seul formulaire valide pour une déclaration préalable de travaux
        concernant une construction nouvelle comme un abri de jardin, un carport ou une pergola. Il se dépose en
        quatre exemplaires à la mairie du lieu des travaux, accompagné d&apos;un plan de situation, d&apos;un plan de
        masse et, selon les cas, d&apos;une représentation de l&apos;aspect extérieur.
      </>
    ),
  },
  {
    q: "Combien de temps dure l'instruction d'une déclaration préalable et que se passe-t-il en l'absence de réponse ?",
    r: (
      <>
        Le délai d&apos;instruction d&apos;une déclaration préalable est d&apos;un mois dans le cas général, porté à
        deux mois en secteur protégé pour permettre la consultation de l&apos;Architecte des Bâtiments de France. Si
        la mairie ne répond pas dans ce délai, le silence vaut accord tacite : le projet peut être réalisé, sous
        réserve d&apos;en conserver la preuve (récépissé de dépôt et calcul du délai).
      </>
    ),
  },
];

export default function ArticleAutorisationUrbanisme2026Page() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1200"
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Carport en bois construit en Gironde, projet d'aménagement extérieur soumis à autorisation d'urbanisme"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary">/</span>
              <a href="/blog" className="hover:text-secondary-fixed transition-colors">
                Blog
              </a>
              <span className="mx-2 text-secondary">/</span>
              <span className="text-secondary-fixed">Autorisation d&apos;urbanisme 2026</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Urbanisme
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Abri de jardin, carport, pergola : quelle autorisation d&apos;urbanisme en 2026 ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>11 juillet 2026</span>
              <span className="text-secondary">·</span>
              <span>9 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                En 2026, c&apos;est l&apos;emprise au sol de votre abri de jardin, carport ou pergola qui déclenche la
                formalité : aucune démarche jusqu&apos;à 5 m², une déclaration préalable (nouveau formulaire CERFA
                n°16702) entre 5 et 20 m², et un permis de construire au-delà, avec un seuil relevé à 40 m² si la
                mairie considère l&apos;ouvrage comme une extension de votre maison en zone U.
              </strong>{' '}
              Autour de Libourne et jusqu&apos;à Saint-Émilion, ces règles se combinent avec le PLU de chaque
              commune et, dans les secteurs protégés, avec l&apos;avis de l&apos;Architecte des Bâtiments de France.
              Voici comment s&apos;y retrouver avant de lancer votre projet.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Le principe de l'emprise au sol */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Faut-il une autorisation ? Le principe de l&apos;emprise au sol
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant de parler de seuils, il faut comprendre ce qui déclenche la formalité :{' '}
                <strong className="text-primary font-semibold">l&apos;emprise au sol</strong>. C&apos;est la
                projection verticale de la construction sur le terrain, poteaux compris. Un carport ouvert sur quatre
                poteaux crée de l&apos;emprise au sol au même titre qu&apos;un abri fermé, même s&apos;il n&apos;a pas
                de murs : c&apos;est la surface couverte par le toit, vue du ciel, qui compte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est un point que beaucoup de particuliers ignorent en achetant un abri de jardin en kit :{' '}
                <strong className="text-primary font-semibold">
                  même une construction démontable nécessite une autorisation dès lors qu&apos;elle reste installée
                  plus de trois mois consécutifs
                </strong>
                . Un carport ou un abri « provisoire » posé pour l&apos;été et laissé toute l&apos;année relève donc
                bien de l&apos;urbanisme, exactement comme une construction en dur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce principe vaut pour l&apos;abri de jardin, le carport et la pergola dès lors qu&apos;elle est
                couverte. Une pergola ouverte, sans toiture pleine, peut échapper à la règle selon son type de
                couverture : c&apos;est un point que nous vérifions au cas par cas, projet par projet.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Carport-bois-Libourne-5.webp"
              alt="Carport en bois double vu en légère plongée à Libourne, illustrant l'emprise au sol créée par la toiture et les poteaux"
              caption="L'emprise au sol se mesure en projection verticale : toiture et poteaux compris, même pour un abri ouvert."
            />

            {/* 2. Les seuils 2026 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les seuils 2026 : moins de 5 m², de 5 à 20 m², au-delà de 20 m²
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Pour une construction nouvelle (cas général, hors zone U et hors secteur protégé), trois paliers
                s&apos;appliquent selon l&apos;emprise au sol créée :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  ['Jusqu’à 5 m²', 'aucune formalité d’urbanisme n’est requise, même si nous recommandons de vérifier le règlement de votre lotissement.'],
                  ['De plus de 5 m² à 20 m²', 'une déclaration préalable de travaux est obligatoire, à déposer avec le nouveau formulaire CERFA n°16702.'],
                  ['Au-delà de 20 m²', 'un permis de construire devient nécessaire, avec un dossier plus complet (plan de coupe, notice descriptive, insertion paysagère).'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Ces seuils grimpent en zone U si votre projet est qualifié d&apos;extension, et se durcissent en
                secteur protégé. Voici le tableau récapitulatif que nous utilisons sur nos chantiers pour orienter
                chaque projet :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Emprise au sol créée</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Formalité</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Délai</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Cas particulier</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seuils.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold align-top min-w-[9rem]">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant align-top">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant align-top whitespace-nowrap">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant align-top">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Ces seuils s&apos;appliquent quel que soit l&apos;ouvrage (abri de jardin, carport ou pergola
                couverte) dès lors que c&apos;est une <strong className="text-primary font-semibold">construction
                nouvelle</strong>, distincte de la maison. La situation change dès que le projet se rattache au bâti
                existant : c&apos;est l&apos;objet du seuil suivant.
              </p>
            </section>

            {/* 3. Le cas de l'extension */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le cas de l&apos;extension : le seuil relevé à 40 m² en zone U
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si votre terrain se trouve en{' '}
                <strong className="text-primary font-semibold">zone U d&apos;une commune couverte par un PLU</strong>{' '}
                (le cas de la plupart des communes urbaines et périurbaines autour de Libourne) et que la mairie
                considère votre projet comme une{' '}
                <strong className="text-primary font-semibold">extension du bâti existant</strong> (un carport
                adossé, une pergola accolée à la maison, un abri dans le prolongement direct de l&apos;habitation),
                le seuil de déclaration préalable est relevé : il passe de 20 à{' '}
                <strong className="text-primary font-semibold">40 m² d&apos;emprise au sol</strong>. Au-delà, un
                permis de construire reste nécessaire.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce relèvement de seuil ne fonctionne que dans un sens précis : c&apos;est la mairie qui qualifie ou
                non l&apos;ouvrage d&apos;extension, en fonction de son implantation, de sa continuité avec le bâti et
                du règlement de la zone. Un carport autoportant posé au fond du jardin, sans lien avec la maison, ne
                sera généralement pas considéré comme une extension, même s&apos;il est en zone U.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dans les faits, ce seuil de 40 m² change tout pour un projet de carport double ou de pergola de bonne
                taille adossée à la maison : ce qui aurait basculé en permis de construire au-delà de 20 m² reste en
                déclaration préalable, avec un délai d&apos;instruction bien plus court.
              </p>
            </section>

            <Figure
              src="/images/pergola-bois-massif-terrasse.webp"
              alt="Pergola en bois massif adossée à une maison, extension du bâti existant en zone U d'une commune girondine"
              caption="Adossée à la maison, une pergola ou un carport peut être qualifié d'extension : le seuil de déclaration préalable passe alors à 40 m²."
            />

            {/* 4. Secteurs protégés et ABF */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Secteurs protégés et ABF : la règle plus stricte autour de Libourne et Saint-Émilion
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans les <strong className="text-primary font-semibold">abords de monuments historiques</strong> et
                les <strong className="text-primary font-semibold">sites classés</strong>, la règle se durcit
                nettement : la déclaration préalable devient obligatoire{' '}
                <strong className="text-primary font-semibold">dès 5 m² d&apos;emprise au sol</strong>, jusqu&apos;à
                20 m², et un permis de construire est requis au-delà. Ces secteurs concernent très concrètement notre
                territoire : le périmètre UNESCO de{' '}
                <strong className="text-primary font-semibold">Saint-Émilion</strong> et les abords de nombreux
                monuments protégés autour de Libourne et dans le Libournais imposent cette règle plus stricte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans ces zones, le dossier est systématiquement transmis pour{' '}
                <strong className="text-primary font-semibold">
                  avis de l&apos;Architecte des Bâtiments de France (ABF)
                </strong>
                , qui vérifie l&apos;insertion du projet dans le paysage patrimonial : matériaux, teintes, volumes,
                visibilité depuis un monument. Cette consultation allonge mécaniquement le délai d&apos;instruction à
                deux mois, contre un mois en zone classique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur ces chantiers, nous adaptons en amont les essences, les teintes et les volumes pour maximiser les
                chances d&apos;un avis favorable dès le premier dépôt : un aller-retour avec l&apos;ABF peut coûter
                plusieurs mois à un projet mal préparé.
              </p>
            </section>

            <Figure
              src="/images/blog/autorisation-urbanisme-abri-carport-pergola-2026/saint-emilion-secteur-protege.webp"
              alt="Vue patrimoniale de Saint-Émilion, secteur protégé du Libournais soumis à l'avis de l'Architecte des Bâtiments de France"
              caption="Dans les abords de Saint-Émilion et de nombreux monuments du Libournais, la déclaration préalable est obligatoire dès 5 m² d'emprise au sol."
            />

            {/* 5. CERFA 16702 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le nouveau formulaire CERFA n°16702 et la procédure de dépôt
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Depuis janvier 2026,{' '}
                <strong className="text-primary font-semibold">
                  le CERFA n°16702 est le seul formulaire valide pour une déclaration préalable de travaux
                </strong>{' '}
                concernant une construction nouvelle comme un abri de jardin, un carport ou une pergola couverte. Il
                remplace les anciennes versions du formulaire et centralise les informations relatives au terrain, à
                la construction projetée et à son insertion dans l&apos;environnement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le dossier se dépose à la{' '}
                <strong className="text-primary font-semibold">mairie du lieu des travaux</strong>, en général en
                quatre exemplaires (davantage en secteur protégé), accompagné de pièces obligatoires : plan de
                situation du terrain, plan de masse coté, et selon les cas une représentation de l&apos;aspect
                extérieur de la construction (photos, insertion, coupe). Une mairie peut délivrer un récépissé avec
                numéro d&apos;enregistrement, à conserver précieusement : il fait foi pour calculer le délai
                d&apos;instruction et, le cas échéant, prouver l&apos;accord tacite.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un dossier mal renseigné ou incomplet est source de retard : la mairie peut demander des pièces
                complémentaires, ce qui suspend le délai d&apos;instruction. C&apos;est pourquoi nous montons
                nous-mêmes ce dossier pour nos clients, avec les bons documents dès le premier dépôt.
              </p>
            </section>

            <Figure
              src="/images/blog/autorisation-urbanisme-abri-carport-pergola-2026/plan-declaration-prealable-cerfa.webp"
              alt="Plan de masse et élévations d'une construction, pièces jointes à un dossier de déclaration préalable CERFA n°16702"
              caption="Le CERFA n°16702, plan de situation et plan de masse : les pièces clés d'un dossier de déclaration préalable en 2026."
            />

            {/* 6. Délais et accord tacite */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Délais d&apos;instruction et principe de l&apos;accord tacite
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le délai d&apos;instruction d&apos;une déclaration préalable est d&apos;{' '}
                <strong className="text-primary font-semibold">un mois</strong> dans le cas général, porté à{' '}
                <strong className="text-primary font-semibold">deux mois</strong> en secteur protégé pour permettre la
                consultation de l&apos;Architecte des Bâtiments de France. Un permis de construire, plus complexe,
                s&apos;instruit généralement en deux à trois mois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le principe à retenir :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;absence de réponse de la mairie dans le délai imparti vaut accord tacite
                </strong>
                . Passé ce délai, si aucune opposition n&apos;a été notifiée, le projet peut être réalisé. Dans les
                faits, nous conseillons toujours de demander un certificat de non-opposition à la mairie : ce document
                écrit sécurise le projet, notamment en vue d&apos;une future vente du bien.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier rappel utile : un abri, un carport ou une pergola en kit, même conçu comme démontable,
                bascule dans le champ de l&apos;autorisation dès qu&apos;il reste installé plus de trois mois
                consécutifs. « Provisoire » ne veut pas dire « sans formalité » aux yeux de l&apos;urbanisme.
              </p>
            </section>

            {/* 7. Comment nous gérons ces formalités */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment nous gérons ces formalités pour vous en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Toutes ces règles ont un point commun : elles{' '}
                <strong className="text-primary font-semibold">
                  varient selon le PLU de chaque commune
                </strong>
                , sa zone, son règlement de lotissement et sa proximité éventuelle avec un monument ou un site
                classé. Autour de Libourne, entre communes rurales, zones urbaines et abords du site UNESCO de
                Saint-Émilion, deux terrains voisins peuvent relever de régimes différents.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est pourquoi nous <strong className="text-primary font-semibold">vérifions au cas par cas</strong>{' '}
                la situation de votre terrain avant d&apos;engager un projet de{' '}
                <a href="/carports" className={lienInterne}>carport</a>,{' '}
                <a href="/pergolas" className={lienInterne}>pergola</a>,{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a> ou{' '}
                <a href="/constructions-bois" className={lienInterne}>construction bois</a> : consultation du PLU,
                calcul précis de l&apos;emprise au sol, montage du dossier CERFA n°16702 ou du permis de construire,
                dépôt en mairie et suivi jusqu&apos;à l&apos;accord. C&apos;est intégré à notre accompagnement, pas
                une prestation à part.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et pour un projet de
                carport en particulier, notre guide{' '}
                <a href="/blog/carport-bois-guide" className={lienInterne}>
                  carport en bois : bien le choisir et l&apos;intégrer à sa maison
                </a>{' '}
                détaille aussi les questions de budget et d&apos;essence.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/IMG-20240521-WA0011.webp"
              alt="Chantier d'extension bois de L'Esprit Bois en Gironde, projet réalisé après validation du dossier d'urbanisme"
              caption="Nous vérifions le PLU et montons le dossier d'urbanisme pour chaque projet, à Libourne et dans toute la Gironde."
            />
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Autorisation d&apos;urbanisme 2026 : vos questions
            </h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <details
                  key={item.q}
                  className="group bg-white rounded-xl border border-surface-variant p-6 open:shadow-lg transition-shadow"
                  {...(i === 0 ? { open: true } : {})}
                >
                  <summary className="flex justify-between items-center cursor-pointer list-none">
                    <h3 className="font-headline-sm text-headline-sm text-primary pr-6">{item.q}</h3>
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
                      expand_more
                    </span>
                  </summary>
                  <p className="text-on-surface-variant text-body-md mt-4">{item.r}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Conclusion + CTA */}
        <section className="py-section-padding bg-primary text-white">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Le mot de la fin
            </span>
            <h2 className="font-headline-md text-headline-md mt-4 mb-6">
              Un projet serein commence par un dossier en règle
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Emprise au sol, seuils de 20 ou 40 m², secteur protégé, nouveau CERFA n°16702 : la réglementation 2026
              n&apos;a rien d&apos;évident à démêler seul. Chez L&apos;Esprit Bois, entreprise certifiée Qualibat à
              Libourne, nous vérifions le PLU de votre commune et montons votre dossier d&apos;urbanisme avant même de
              chiffrer votre abri, carport ou pergola, dans toute la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
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
