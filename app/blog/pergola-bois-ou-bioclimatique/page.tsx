import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/pergola-bioclimatique-lisudestemps.jpg';

export const metadata: Metadata = buildMetadata({
  title: "Pergola bois ou bioclimatique : comment choisir ? | L'Esprit Bois",
  description:
    "Pergola bois sur mesure ou bioclimatique alu à lames orientables ? Comparatif, cas d'usage, budget et entretien pour bien choisir en Gironde.",
  keywords:
    "pergola bois ou bioclimatique, pergola bioclimatique ou bois, quelle pergola choisir, pergola aluminium lames orientables, pergola bois sur mesure, prix pergola bioclimatique, pergola terrasse Gironde, pergola Libourne",
  path: '/blog/pergola-bois-ou-bioclimatique',
  ogImage: COVER,
  ogTitle: 'Pergola bois ou pergola bioclimatique : comment choisir ?',
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

function DuoFigure({
  a,
  b,
}: {
  a: { src: string; alt: string; caption: string };
  b: { src: string; alt: string; caption: string };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src}>
          <img
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            className="w-full h-64 md:h-72 rounded-2xl object-cover shadow-sm"
            src={img.src}
            alt={img.alt}
          />
          <figcaption className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
            {img.caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lespritbois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lespritbois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Pergola bois ou bioclimatique',
        item: 'https://lespritbois.fr/blog/pergola-bois-ou-bioclimatique',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pergola bois ou pergola bioclimatique : comment choisir ?',
    description:
      "Pergola en bois sur mesure ou pergola bioclimatique aluminium à lames orientables ? Comparatif honnête, cas d'usage, budget 2025-2026 et entretien pour choisir en Gironde.",
    image: 'https://lespritbois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: { '@type': 'ImageObject', url: 'https://lespritbois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-09',
    dateModified: '2026-07-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lespritbois.fr/blog/pergola-bois-ou-bioclimatique',
    },
    about: ['pergola bois', 'pergola bioclimatique', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quelle est la différence entre une pergola en bois et une pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une pergola en bois est une structure fixe, chaleureuse et sur mesure, couverte d'une toiture (lames fixes, toile, panneaux) qui s'intègre à l'architecture. Une pergola bioclimatique est une structure en aluminium dont les lames de toit sont orientables et souvent motorisées, ce qui permet de moduler l'ombre, la ventilation et la fermeture au fil de la journée.",
        },
      },
      {
        '@type': 'Question',
        name: 'La pergola bioclimatique est-elle plus chère que la pergola en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En fourchettes de marché 2025-2026, une pergola bioclimatique motorisée démarre plus haut qu'une pergola bois de dimensions équivalentes, car la mécanique des lames et la motorisation pèsent lourd. Une pergola bois sur mesure peut toutefois rejoindre ce budget selon l'essence et les finitions. Seul un devis établi sur place engage un prix.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique peut-elle être en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le terme « bioclimatique » désigne le principe des lames orientables, presque toujours réalisé en aluminium pour la précision de la mécanique. On peut cependant marier les deux univers : une ossature ou un habillage bois avec une couverture technique, pour la chaleur du bois et le confort du réglable.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel entretien pour une pergola en bois ou bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une pergola en bois se nettoie et se protège périodiquement : un saturateur ou une lasure tous les deux ans environ selon l'essence et l'exposition. Une pergola bioclimatique aluminium demande surtout un nettoyage régulier et un contrôle occasionnel de la motorisation et des joints ; l'aluminium ne pourrit pas mais la mécanique reste à surveiller.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour installer une pergola ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Selon la surface couverte, l'adossement à la maison et le PLU de votre commune, une déclaration préalable de travaux ou un permis de construire peut être requis. Les seuils et les règles varient d'une commune à l'autre : nous les vérifions avant d'engager le projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle pergola choisir pour une terrasse en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Tout dépend de l'usage et du style. Pour prolonger une maison en pierre ou une terrasse en bois avec chaleur et intégration, la pergola bois s'impose. Pour un confort piloté au bouton, une ombre modulable et une esthétique contemporaine, la bioclimatique prend l'avantage. Nous décidons devant votre terrain, en fonction de l'exposition et de l'architecture.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Matériau', 'Bois massif (douglas, mélèze, chêne…)', 'Aluminium thermolaqué'],
  ['Toiture', 'Lames fixes, toile ou panneaux', 'Lames orientables, souvent motorisées'],
  ['Ambiance', 'Chaleureuse, naturelle, patine', 'Contemporaine, épurée, technique'],
  ['Confort', 'Ombre constante, protège du soleil', 'Ombre, ventilation et pluie modulables'],
  ['Sur mesure', 'Total : formes, sections, intégration', 'Modulaire, dimensions standardisées'],
  ['Entretien', 'Saturateur / lasure périodique', 'Nettoyage + contrôle motorisation'],
  ['Budget posé', 'Fourchette large selon essence', 'Plus élevé (mécanique + moteur)'],
];

const faq = [
  {
    q: 'Quelle est la différence entre une pergola en bois et une pergola bioclimatique ?',
    r: (
      <>
        Une pergola en bois est une structure fixe, chaleureuse et sur mesure, couverte d&apos;une toiture (lames
        fixes, toile ou panneaux) qui s&apos;intègre à l&apos;architecture de la maison. Une pergola bioclimatique est
        une structure en aluminium dont les lames de toit sont orientables et souvent motorisées : on module ainsi
        l&apos;ombre, la ventilation et la fermeture au fil de la journée.
      </>
    ),
  },
  {
    q: 'La pergola bioclimatique est-elle plus chère que la pergola en bois ?',
    r: (
      <>
        En fourchettes de marché 2025-2026, une pergola bioclimatique motorisée démarre plus haut qu&apos;une pergola
        bois de dimensions équivalentes, car la mécanique des lames et la motorisation pèsent lourd. Une pergola bois
        sur mesure peut toutefois rejoindre ce budget selon l&apos;essence et les finitions. Seul un devis établi sur
        place engage un prix.
      </>
    ),
  },
  {
    q: 'Une pergola bioclimatique peut-elle être en bois ?',
    r: (
      <>
        Le terme « bioclimatique » désigne le principe des lames orientables, presque toujours réalisé en aluminium
        pour la précision de la mécanique. On peut cependant marier les deux univers : une ossature ou un habillage
        bois avec une couverture technique, pour conjuguer la chaleur du bois et le confort du réglable.
      </>
    ),
  },
  {
    q: 'Quel entretien pour une pergola en bois ou bioclimatique ?',
    r: (
      <>
        Une pergola en bois se nettoie et se protège périodiquement : un saturateur ou une lasure tous les deux ans
        environ, selon l&apos;essence et l&apos;exposition. Une pergola bioclimatique aluminium demande surtout un
        nettoyage régulier et un contrôle occasionnel de la motorisation et des joints ; l&apos;aluminium ne pourrit
        pas, mais la mécanique reste à surveiller.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour installer une pergola ?',
    r: (
      <>
        Selon la surface couverte, l&apos;adossement à la maison et le PLU de votre commune, une déclaration préalable
        de travaux ou un permis de construire peut être requis. Les seuils et les règles varient d&apos;une commune à
        l&apos;autre : nous les vérifions pour vous avant d&apos;engager le projet.
      </>
    ),
  },
  {
    q: 'Quelle pergola choisir pour une terrasse en Gironde ?',
    r: (
      <>
        Tout dépend de l&apos;usage et du style. Pour prolonger une maison en pierre ou une terrasse en bois avec
        chaleur et intégration, la pergola bois s&apos;impose. Pour un confort piloté au bouton, une ombre modulable et
        une esthétique contemporaine, la bioclimatique prend l&apos;avantage. Nous décidons devant votre terrain, en
        fonction de l&apos;exposition et de l&apos;architecture.
      </>
    ),
  },
];

export default function ArticlePergolaBoisBioclimatiquePage() {
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
              alt="Pergola bioclimatique à lames orientables au-dessus d'une terrasse, en Gironde"
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
              <span className="text-secondary-fixed">Pergola bois ou bioclimatique ?</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola bois ou pergola bioclimatique : comment choisir ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>9 juillet 2026</span>
              <span className="text-secondary">·</span>
              <span>8 min de lecture</span>
            </div>
          </div>
        </header>

        {/* Chapô answer-first */}
        <section className="py-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16">
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              <strong className="text-primary font-semibold">
                Choisissez la pergola bois si vous cherchez la chaleur, l&apos;intégration à une maison ou une terrasse
                en bois et un ouvrage entièrement sur mesure ; choisissez la pergola bioclimatique en aluminium si vous
                voulez piloter l&apos;ombre, la ventilation et la pluie au bouton grâce à des lames orientables
                motorisées.
              </strong>{' '}
              C&apos;est le résumé honnête. Mais sur nos chantiers en Gironde, le vrai choix se joue rarement sur la
              seule esthétique : il dépend de l&apos;usage réel de la terrasse, de son exposition et de la façon dont
              l&apos;ouvrage se raccorde à l&apos;existant. Voici comment décider en connaissance de cause.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Différence de fond */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pergola bois, pergola bioclimatique : quelle différence de fond ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les deux ouvrages remplissent la même mission — créer un espace ombragé prolongeant la maison — mais avec
                deux philosophies opposées. La <strong className="text-primary font-semibold">pergola en bois</strong>{' '}
                est une structure massive et fixe : des poteaux et une charpente en{' '}
                <strong className="text-primary font-semibold">douglas, mélèze ou chêne</strong>, coiffés d&apos;une
                toiture (lames fixes, toile tendue, panneaux ou végétalisation). Elle se dessine sur mesure et
                s&apos;intègre à l&apos;architecture existante.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">pergola bioclimatique</strong> est une structure en{' '}
                <strong className="text-primary font-semibold">aluminium thermolaqué</strong> dont la toiture est
                composée de <strong className="text-primary font-semibold">lames orientables</strong>, le plus souvent
                motorisées. On ferme les lames en cas de pluie, on les ouvre pour ventiler, on les incline pour doser
                l&apos;ombre au fil de la journée. C&apos;est un objet technique, piloté à la télécommande ou au
                smartphone.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Autrement dit : le bois joue la carte de la{' '}
                <strong className="text-primary font-semibold">chaleur et de l&apos;intégration</strong>,
                l&apos;aluminium bioclimatique celle du{' '}
                <strong className="text-primary font-semibold">confort modulable</strong>. Le reste de ce guide sert à
                trancher entre ces deux logiques selon <em>votre</em> usage.
              </p>
            </section>

            {/* Duo bois vs bioclimatique */}
            <DuoFigure
              a={{
                src: '/images/source-adefrance/Pergolas-bois-Libourne.webp',
                alt: 'Pergola en bois adossée à une maison en Gironde',
                caption: 'Pergola bois : chaleur du matériau et intégration à la maison.',
              }}
              b={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-1.webp',
                alt: 'Pergola bioclimatique en aluminium à lames orientables',
                caption: 'Pergola bioclimatique alu : lames orientables et lignes contemporaines.',
              }}
            />

            {/* Tableau comparatif */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le comparatif honnête, point par point
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Voici les deux solutions mises côte à côte sur les critères qui reviennent le plus souvent lors de nos
                rendez-vous. Aucune n&apos;est « meilleure » dans l&apos;absolu : elles répondent à des priorités
                différentes.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Critère</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pergola bois</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pergola bioclimatique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Chez L&apos;Esprit Bois, notre cœur de métier, c&apos;est la{' '}
                <strong className="text-primary font-semibold">pergola bois sur mesure</strong> : nous la concevons,
                l&apos;approvisionnons et la posons pour qu&apos;elle dure sous le climat girondin. Nous vous dirons
                toujours honnêtement quand une bioclimatique servirait mieux votre usage — c&apos;est ce qui construit
                la confiance.
              </p>
            </section>

            {/* Image d'illustration */}
            <Figure
              src="/images/pergola-bois-massif-terrasse.jpg"
              alt="Pergola en bois massif prolongeant une terrasse en Gironde"
              caption="Une pergola en bois massif prolonge naturellement une terrasse et se patine avec le temps."
            />

            {/* Cas d'usage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Dans quels cas la pergola bois est-elle le bon choix ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pergola bois s&apos;impose dès que la{' '}
                <strong className="text-primary font-semibold">chaleur du matériau et l&apos;intégration</strong>{' '}
                priment. Sur nos chantiers, elle est le choix évident dans plusieurs situations :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une maison en pierre ou traditionnelle', 'le bois dialogue avec la façade là où l’aluminium détonne.'],
                  ['Une terrasse déjà en bois', 'même essence, même patine : l’ensemble se lit comme un seul ouvrage.'],
                  ['Un projet sur mesure', 'formes libres, sections généreuses, poutres apparentes, jardinières intégrées.'],
                  ['Un budget maîtrisé sur une grande surface', 'le bois couvre de grandes portées sans la mécanique d’une motorisation.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le bois vieillit en se patinant : il grise, se nourrit d&apos;un saturateur, et raconte le temps qui
                passe. C&apos;est un ouvrage vivant, que l&apos;on aime justement pour son caractère. Découvrez notre
                approche des <a href="/pergolas" className={lienInterne}>pergolas bois sur mesure</a>.
              </p>
            </section>

            {/* Cas d'usage bioclimatique */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand la pergola bioclimatique prend-elle l&apos;avantage ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La bioclimatique gagne dès que le mot d&apos;ordre est{' '}
                <strong className="text-primary font-semibold">confort piloté</strong>. Ses lames orientables règlent en
                quelques secondes l&apos;ombre, la lumière et la ventilation, et se ferment pour protéger de l&apos;averse
                — un vrai atout sous notre climat océanique où la pluie s&apos;invite sans prévenir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Elle brille aussi sur une{' '}
                <strong className="text-primary font-semibold">architecture contemporaine</strong>, où ses lignes
                épurées et son aluminium mat s&apos;accordent aux baies vitrées et aux enduits lisses. On y ajoute
                volontiers stores latéraux, éclairage LED et capteurs de pluie pour un espace utilisable presque toute
                l&apos;année.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En contrepartie, c&apos;est un{' '}
                <strong className="text-primary font-semibold">ouvrage mécanisé</strong> : le budget démarre plus haut,
                et la motorisation demande un contrôle périodique. L&apos;aluminium ne pourrit pas, mais un moteur et des
                joints restent des pièces d&apos;usure à surveiller.
              </p>
            </section>

            {/* Image bioclimatique */}
            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp"
              alt="Pergola bioclimatique en aluminium avec lames orientables au-dessus d'une terrasse"
              caption="Lames orientables et motorisées : la bioclimatique règle l'ombre et la ventilation au bouton."
            />

            {/* Intégration terrasse */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Comment intégrer la pergola à la terrasse et à la maison ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola réussie ne se pose pas « à côté » de la terrasse :{' '}
                <strong className="text-primary font-semibold">elle en prolonge la logique.</strong> Avant de choisir le
                matériau, nous regardons quatre points sur place, qui décident souvent du résultat plus que le style :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'L’orientation et la course du soleil, pour placer l’ombre là où on vit vraiment la terrasse.',
                  'Le raccord à la façade et aux fenêtres, pour un adossement propre qui ne bloque pas la lumière intérieure.',
                  'Le sol et les fondations, car une pergola se tient dans le temps grâce à ses ancrages et à un support sain.',
                  'La cohérence des matériaux avec la terrasse et le jardin existants, pour un ensemble qui se lit d’un seul tenant.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est aussi le moment de vérifier les formalités. Selon la surface couverte, l&apos;adossement à la
                maison et le PLU de votre commune, une déclaration préalable de travaux ou un permis de construire peut
                être requis :{' '}
                <strong className="text-primary font-semibold">nous le vérifions pour vous avant d&apos;engager le projet.</strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Rien n&apos;interdit non plus de{' '}
                <strong className="text-primary font-semibold">marier les deux univers</strong> : une ossature ou un
                habillage bois avec une couverture technique, pour la chaleur du bois et le confort du réglable. Voyez
                comment nous menons ces raccords dans nos{' '}
                <a href="/realisations" className={lienInterne}>réalisations en Gironde</a> et notre approche globale de
                l&apos;<a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>.
              </p>
            </section>

            {/* Image intégration */}
            <Figure
              src="/images/pergola-terrasse-bois-libourne-2.webp"
              alt="Pergola bois intégrée à une terrasse en bois, réalisation en Gironde"
              caption="Même bois pour la terrasse et la pergola : l'ensemble se lit comme un seul ouvrage."
            />

            {/* Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel budget prévoir pour une pergola bois ou bioclimatique ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur le marché 2025-2026, une{' '}
                <strong className="text-primary font-semibold">pergola bioclimatique motorisée</strong> démarre
                généralement plus haut qu&apos;une pergola bois de dimensions équivalentes : la mécanique des lames, la
                motorisation et l&apos;électronique représentent une part importante du prix. Une{' '}
                <strong className="text-primary font-semibold">pergola bois sur mesure</strong> couvre une fourchette
                plus large, du modèle simple à l&apos;ouvrage de charpente ambitieux, et peut rejoindre le budget
                d&apos;une bioclimatique selon l&apos;essence et les finitions.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Au-delà du matériau, trois postes font vraiment bouger la note :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La dimension et la portée', 'plus la surface couverte est grande, plus la structure et les fondations pèsent.'],
                  ['Le niveau d’équipement', 'motorisation, stores latéraux, éclairage, capteurs : chaque option a un coût.'],
                  ['Les fondations et le raccord', 'ancrages, adossement à la maison, préparation du support et évacuation des eaux.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ces repères sont des ordres de grandeur de marché : le juste prix de <em>votre</em> pergola dépend de sa
                taille, de son équipement et de son implantation. Nous établissons un devis détaillé après avoir relevé
                les contraintes sur place —{' '}
                <strong className="text-primary font-semibold">c&apos;est la seule manière de chiffrer honnêtement.</strong>
              </p>
            </section>

            {/* Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel entretien pour l&apos;une et pour l&apos;autre ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">pergola bois</strong> demande un entretien régulier
                mais simple : un nettoyage et l&apos;application d&apos;un saturateur ou d&apos;une lasure tous les deux
                ans environ, selon l&apos;essence et l&apos;exposition. Si vous laissez le bois griser, cet entretien de
                teinte devient facultatif : la patine argentée est esthétique et n&apos;altère pas la solidité.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La <strong className="text-primary font-semibold">pergola bioclimatique</strong> ne pourrit pas et ne
                demande pas de traitement du matériau : un nettoyage régulier de l&apos;aluminium et des lames suffit.
                L&apos;attention porte plutôt sur la <strong className="text-primary font-semibold">motorisation</strong>{' '}
                et les joints d&apos;étanchéité, à contrôler périodiquement pour garder des lames qui s&apos;ouvrent et
                se ferment sans accroc.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En résumé : le bois se nourrit, l&apos;aluminium se surveille. Deux entretiens de nature différente, mais
                aucun des deux n&apos;est contraignant si l&apos;ouvrage a été bien conçu et bien posé au départ — ce qui
                nous ramène toujours à la qualité de la pose, comme pour une{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>terrasse en bois</a>.
              </p>
            </section>
          </div>
        </article>

        {/* FAQ */}
        <section className="py-section-padding bg-surface-container-low">
          <div className="max-w-4xl mx-auto px-6 md:px-16">
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary-dark">
              Questions fréquentes
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-4 mb-12">
              Pergola bois ou bioclimatique ?
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
              Le bon ouvrage pour votre terrasse
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Il n&apos;y a pas de « meilleure pergola » universelle : il y a celle qui correspond à votre maison, à
              votre usage et à votre budget. Le bois pour la chaleur et l&apos;intégration, la bioclimatique pour le
              confort modulable — et parfois un mariage des deux. C&apos;est le diagnostic que nous menons chez
              L&apos;Esprit Bois, entreprise certifiée Qualibat, à Libourne et dans toute la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/pergolas"
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
