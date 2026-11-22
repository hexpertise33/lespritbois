import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Couverture : photo Artbovich, Pexels n° 7587884 (licence Pexels), recadrée 1200 × 646. Pas un chantier maison : jamais géolocalisée.
const COVER = '/images/blog/pergola-baie-vitree-lumiere-hiver/pergola-metallique-facade-baies-vitrees-ombres-soleil.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Pergola devant une baie vitrée : garder la lumière en hiver',
  description:
    "Pergola devant une baie vitrée : bien conçue, avec des lames ouvertes l'hiver, elle n'assombrit pas la pièce. Orientation, hauteur : nos conseils en Gironde.",
  keywords:
    'pergola devant baie vitrée, pergola baie vitrée lumière, pergola bioclimatique en hiver, pergola assombrit la maison, lames orientables lumière, pergola adossée lumière, pergola autoportante, pergola aluminium Libourne, pergola Gironde, pergola bioclimatique Gironde',
  path: '/blog/pergola-baie-vitree-lumiere-hiver',
  ogImage: COVER,
  ogTitle: 'Une pergola devant la baie vitrée : la maison sera-t-elle plus sombre en hiver ?',
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

function Figure({
  src,
  alt,
  caption,
  w,
  h,
}: {
  src: string;
  alt: string;
  caption: string;
  /** Dimensions réelles du fichier, à vérifier, sinon la réservation d'espace est fausse. */
  w: number;
  h: number;
}) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width={w}
        height={h}
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
        name: 'Pergola devant une baie vitrée',
        item: 'https://lesprit-bois.fr/blog/pergola-baie-vitree-lumiere-hiver',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Une pergola devant la baie vitrée : la maison sera-t-elle plus sombre en hiver ?',
    description:
      "Couvrir une terrasse adossée, c'est couvrir la baie de la pièce de vie. La perte de lumière en hiver se règle à la conception : orientation de la baie, type de couverture, avancée et hauteur, lames orientables ouvertes l'hiver, teintes claires. Le point de vue d'un artisan à Libourne, en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/icon-512.png',
        width: 512,
        height: 512,
      },
    },
    datePublished: '2026-11-22',
    dateModified: '2026-11-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pergola-baie-vitree-lumiere-hiver',
    },
    about: [
      { '@type': 'Thing', name: 'pergola bioclimatique' },
      { '@type': 'Thing', name: 'baie vitrée' },
      { '@type': 'Thing', name: 'éclairage naturel' },
    ],
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Une pergola bioclimatique assombrit-elle la maison en hiver ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un peu, toujours, puisqu'elle couvre une partie du ciel vu depuis la baie. Mais bien conçue, la perte reste faible : en hiver le soleil passe bas et entre sous le rebord de la pergola, et des lames orientables ouvertes laissent passer la lumière du ciel. Ce qui assombrit vraiment une pièce, c'est une toiture pleine fixe, trop profonde et trop basse devant une baie sud.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il laisser les lames ouvertes tout l'hiver ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Par temps sec, oui : ouvertes, les lames laissent entrer le soleil bas et la lumière du ciel dans la pièce. Sous la pluie, on les ferme pour que la toiture reste étanche, et selon les modèles, un capteur de pluie les referme automatiquement. Pour la neige, le gel ou une longue absence, suivez les consignes du fabricant de votre pergola.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle couverture de pergola laisse passer le plus de lumière en hiver ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le verre et le polycarbonate laissent passer la lumière en permanence, y compris sous la pluie, mais ils couvrent aussi la terrasse de soleil en été. Les lames orientables ouvertes dégagent le ciel par temps sec et ferment l'ombre en été. La toiture pleine fixe est celle qui retire le plus de lumière : à éviter devant la baie sud d'une pièce profonde.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pergola adossée ou autoportante pour garder la lumière ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une pergola autoportante peut être décalée de la façade, ce qui laisse une bande de ciel libre devant la baie : c'est la solution la plus généreuse en lumière. Une pergola adossée peut aussi bien fonctionner si elle est posée assez haut, sans avancée excessive, avec des lames qui s'ouvrent l'hiver. Le choix dépend de la façade, de la hauteur disponible et de l'usage de la terrasse.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour poser une pergola devant une baie vitrée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le plus souvent, une pergola relève d'une formalité d'urbanisme, qui dépend de la surface couverte et du PLU de la commune. Notre guide sur les autorisations d'urbanisme pour abri, carport et pergola détaille les cas, et nous vérifions la règle de votre commune avant de chiffrer.",
        },
      },
    ],
  },
];

const couvertures = [
  ['Toiture pleine fixe', 'Ne laisse rien passer', 'Ombre franche, pas de réglage', 'Le choix à éviter devant une baie sud de pièce profonde'],
  ['Polycarbonate', 'Laisse passer une lumière diffuse', 'Lumière constante, même sous la pluie', 'Chauffe la terrasse en été, se salit'],
  ['Verre', 'Laisse passer la lumière et la vue du ciel', 'Le plus lumineux, même sous la pluie', 'Il faut une protection solaire pour l’été'],
  ['Lames orientables', 'Ouvertes : le ciel ; fermées : rien', 'Ombre l’été, lumière l’hiver par temps sec', 'Fermées sous la pluie, donc plus sombres ce jour-là'],
];

const faq = [
  {
    q: 'Une pergola bioclimatique assombrit-elle la maison en hiver ?',
    r: (
      <>
        Un peu, toujours, puisqu&apos;elle couvre une partie du ciel vu depuis la baie. Mais bien conçue, la perte
        reste faible : en hiver le soleil passe bas et entre sous le rebord de la pergola, et des lames orientables
        ouvertes laissent passer la lumière du ciel. Ce qui assombrit vraiment une pièce, c&apos;est une toiture pleine
        fixe, trop profonde et trop basse devant une baie sud.
      </>
    ),
  },
  {
    q: "Faut-il laisser les lames ouvertes tout l'hiver ?",
    r: (
      <>
        Par temps sec, oui : ouvertes, les lames laissent entrer le soleil bas et la lumière du ciel dans la pièce.
        Sous la pluie, on les ferme pour que la toiture reste étanche, et selon les modèles, un capteur de pluie les
        referme automatiquement. Pour la neige, le gel ou une longue absence, suivez les consignes du fabricant de
        votre pergola.
      </>
    ),
  },
  {
    q: 'Quelle couverture de pergola laisse passer le plus de lumière en hiver ?',
    r: (
      <>
        Le verre et le polycarbonate laissent passer la lumière en permanence, y compris sous la pluie, mais ils
        couvrent aussi la terrasse de soleil en été. Les lames orientables ouvertes dégagent le ciel par temps sec et
        ferment l&apos;ombre en été. La toiture pleine fixe est celle qui retire le plus de lumière : à éviter devant
        la baie sud d&apos;une pièce profonde.
      </>
    ),
  },
  {
    q: 'Pergola adossée ou autoportante pour garder la lumière ?',
    r: (
      <>
        Une pergola autoportante peut être décalée de la façade, ce qui laisse une bande de ciel libre devant la
        baie : c&apos;est la solution la plus généreuse en lumière. Une pergola adossée peut aussi bien fonctionner si
        elle est posée assez haut, sans avancée excessive, avec des lames qui s&apos;ouvrent l&apos;hiver. Le choix
        dépend de la façade, de la hauteur disponible et de l&apos;usage de la terrasse.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour poser une pergola devant une baie vitrée ?',
    r: (
      <>
        Le plus souvent, une pergola relève d&apos;une formalité d&apos;urbanisme, qui dépend de la surface couverte
        et du PLU de la commune. Notre guide sur les autorisations d&apos;urbanisme pour abri, carport et pergola
        détaille les cas, et nous vérifions la règle de votre commune avant de chiffrer.
      </>
    ),
  },
];

export default function ArticlePergolaBaieVitreeLumiereHiverPage() {
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
              height="646"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola à portiques métalliques sombres le long d'une façade à baies vitrées, le soleil projette les ombres des poteaux sur le mur et la terrasse"
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
              <span className="text-secondary-fixed">Pergola devant une baie vitrée</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Une pergola devant la baie vitrée : la maison sera-t-elle plus sombre en hiver ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/auteur/david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>,
                L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>22 novembre 2026</span>
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
                Oui, une pergola devant une baie vitrée peut assombrir la pièce en hiver, et la crainte est légitime :
                couvrir une terrasse adossée, c&apos;est couvrir la baie de la pièce de vie. Mais cela se règle à la
                conception, pas en renonçant. Sur une baie sud qui éclaire une pièce profonde, une toiture pleine fixe
                est le mauvais choix ; des lames orientables ouvertes l&apos;hiver, ou une couverture vitrée, sont
                faites pour ça. Sur une baie nord, la question se pose à peine.
              </strong>{' '}
              Entre les deux, tout se joue sur cinq leviers : l&apos;orientation de la baie, le type de couverture,
              la géométrie de la pergola (avancée, hauteur, recul), l&apos;usage des lames en hiver et la couleur des
              profilés. Voici comment nous les regardons, avant de dessiner quoi que ce soit, sur nos chantiers en
              Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* La pièce derrière */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Avant le modèle de pergola, regarder la pièce derrière la baie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On parle souvent de la pergola comme d&apos;un objet posé sur la terrasse. Pour la lumière, il faut
                raisonner depuis l&apos;intérieur :{' '}
                <strong className="text-primary font-semibold">
                  c&apos;est la pièce derrière la baie qui risque de perdre du jour, pas la terrasse.
                </strong>{' '}
                Trois questions décident presque tout, et elles se posent avant de choisir un modèle.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’orientation de la baie', 'une baie plein sud reçoit tout le soleil d’hiver, une baie nord n’en reçoit pas. Ce n’est pas la même pergola qui convient.'],
                  ['La profondeur de la pièce', 'dans un séjour traversant ou peu profond, la lumière arrive de partout. Dans une pièce profonde, le fond n’est éclairé que par le ciel vu à travers le haut de la baie, et c’est justement ce morceau de ciel qu’une toiture masque.'],
                  ['Les autres sources de lumière', 'si la baie est la seule ouverture de la pièce, chaque mètre de toiture compte. S’il y a une autre fenêtre, un puits de lumière ou une seconde baie, la marge est bien plus large.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Il y a aussi l&apos;usage. Un séjour où l&apos;on vit toute la journée en hiver n&apos;a pas les mêmes
                exigences qu&apos;une salle à manger occupée le soir, ou qu&apos;une cuisine où l&apos;on travaille sous
                un éclairage artificiel de toute façon. Nous posons la question franchement, parce qu&apos;elle change
                la réponse.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-baie-vitree-lumiere-hiver/sejour-baies-coulissantes-terrasse-couverte.webp"
              w={1200}
              h={800}
              alt="Séjour vu de l'intérieur avec deux baies coulissantes, celle de droite donnant sur une terrasse couverte"
              caption="Vu du séjour, la toiture de la terrasse couverte occupe le haut de la baie de droite : c'est cette bande de ciel qui éclaire le fond de la pièce. Photo hi room, Pexels."
            />

            {/* Soleil d'hiver */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le soleil d&apos;hiver passe bas : ce que ça change selon l&apos;orientation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le point que l&apos;on oublie le plus souvent, et il joue en faveur de la pergola. La hauteur
                du soleil à midi solaire se calcule simplement : 90° moins la latitude, plus ou moins
                l&apos;inclinaison de la Terre (23,44°). Pour Libourne, autour de 44,9° de latitude nord, ce calcul
                donne{' '}
                <strong className="text-primary font-semibold">
                  environ 22° au-dessus de l&apos;horizon au solstice d&apos;hiver, contre environ 69° au solstice
                  d&apos;été.
                </strong>{' '}
                Le soleil de décembre est donc plus de trois fois moins haut que celui de juin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Conséquence concrète : en été, le soleil tombe presque à la verticale et la toiture de la pergola fait
                exactement ce qu&apos;on lui demande, de l&apos;ombre sur la terrasse et sur la baie. En hiver, ses
                rayons arrivent rasants et{' '}
                <strong className="text-primary font-semibold">passent en grande partie sous le rebord de la
                pergola</strong> pour entrer dans la pièce. Une pergola bien dimensionnée se comporte un peu comme une
                casquette de façade : elle protège l&apos;été et laisse passer l&apos;hiver.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Baie au sud', 'c’est là que l’enjeu est le plus fort, dans les deux sens. Le soleil bas d’hiver entre profondément dans la pièce, et c’est aussi la façade qui a le plus besoin d’ombre l’été. La pergola y est très utile, à condition de ne pas couper ce soleil d’hiver.'],
                  ['Baie à l’est ou à l’ouest', 'en hiver, le soleil se lève au sud-est et se couche au sud-ouest : il frappe ces baies de biais, bas et peu de temps. Ce sont les poteaux, les côtés fermés et les stores latéraux qui risquent de le couper, plus que la toiture.'],
                  ['Baie au nord', 'elle ne reçoit pas de soleil direct en hiver. Sa lumière vient du ciel, qu’une toiture réduit un peu. Si la pièce n’est pas déjà sombre, la question se pose peu.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un bémol honnête : le soleil direct n&apos;est pas toute la lumière. Par temps gris, et l&apos;hiver
                girondin en compte beaucoup, la pièce n&apos;est éclairée que par le ciel. Et une toiture, quelle
                qu&apos;elle soit, masque une partie de ce ciel. C&apos;est là que le type de couverture fait la
                différence.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-baie-vitree-lumiere-hiver/pergola-aluminium-bandes-translucides-porte-fenetre-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Sous-face d'une pergola aluminium adossée devant une porte-fenêtre, panneaux pleins et bandes translucides en toiture, à Saint-Pey-de-Castets"
              caption="Sur ce chantier à Saint-Pey-de-Castets, des bandes translucides alternent avec les panneaux pleins au-dessus de la porte-fenêtre : par temps gris, une partie du ciel reste dégagée devant la baie."
            />

            {/* Couvertures */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Toiture pleine, polycarbonate, verre, lames orientables : ce que chaque couverture laisse passer
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le rebord de la pergola règle le soleil direct. La couverture, elle, décide de la lumière du ciel, celle
                qui éclaire le fond de la pièce par temps gris. Sans refaire le comparatif des matériaux, voici ce que
                chacune change pour une baie, en hiver :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Couverture</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Lumière en hiver</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atout</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limite</th>
                    </tr>
                  </thead>
                  <tbody>
                    {couvertures.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Notre position est nette.{' '}
                <strong className="text-primary font-semibold">
                  Devant la baie sud d&apos;une pièce profonde, une toiture pleine fixe est le mauvais choix.
                </strong>{' '}
                Elle fait une belle ombre en juillet, mais elle retire au séjour sa lumière de ciel toute l&apos;année,
                et on ne peut rien régler. Les lames orientables et le vitrage sont faits pour ce cas : les premières
                s&apos;ouvrent quand on veut la lumière, le second la laisse passer en permanence mais demande une
                protection solaire pour l&apos;été.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La toiture pleine garde tout son sens ailleurs : devant une baie nord, sur une terrasse qui
                n&apos;est pas devant une pièce de vie, ou quand on cherche avant tout l&apos;abri. Le détail des
                matériaux, de leur poids, de leur bruit sous la pluie et de leur entretien est dans{' '}
                <a href="/blog/couverture-pergola-carport-toiture-materiaux" className={lienInterne}>
                  notre article sur les couvertures de pergola et de carport
                </a>
                .
              </p>
            </section>

            {/* Lames en hiver */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les lames orientables en hiver : ouvertes quand il fait sec
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;intérêt des lames orientables devant une baie tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;été on les ferme ou on les entrouvre pour l&apos;ombre, l&apos;hiver on les ouvre pour la
                  lumière.
                </strong>{' '}
                Par une journée sèche de janvier, lames ouvertes, la pergola n&apos;est plus qu&apos;une structure de
                profilés aluminium : le ciel redevient visible depuis la pièce, et le soleil bas passe à la fois sous le
                rebord et entre les lames.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pluie impose sa loi. Pour que la toiture reste étanche et que l&apos;eau parte dans les chéneaux, les
                lames doivent être fermées quand il pleut. Selon les modèles, un capteur de pluie les referme
                automatiquement dès les premières gouttes, ce qui évite de mouiller la terrasse en votre absence. Le
                revers est simple à comprendre : un jour de pluie, la pergola est fermée, donc la pièce est un peu plus
                sombre ce jour-là. C&apos;est le prix de l&apos;abri, et c&apos;est pour cela qu&apos;on rouvre dès que
                le temps se lève, à la télécommande ou par la domotique selon la motorisation choisie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux points à vérifier à la conception. Le sens de pose des lames, parallèles ou perpendiculaires à la
                façade, ne laisse pas passer le soleil bas de la même façon : nous le choisissons en fonction de
                l&apos;orientation de la baie. Et pour la neige, le gel ou une longue absence, ce sont les consignes du
                fabricant de la pergola qui font foi, pas une règle générale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le fonctionnement complet des lames, de la motorisation aux options, est expliqué dans{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  notre guide de la pergola bioclimatique aluminium
                </a>
                . Et si vous pensez fermer les côtés pour profiter de la terrasse en hiver, gardez en tête que ces
                fermetures jouent aussi sur la lumière de la pièce : nous comparons les options dans{' '}
                <a href="/blog/fermer-pergola-bioclimatique-hiver-rideau-verre" className={lienInterne}>
                  notre article sur la fermeture d&apos;une pergola bioclimatique en hiver
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-baie-vitree-lumiere-hiver/pergola-bioclimatique-lames-ouvertes-baie-coulissante.webp"
              w={1200}
              h={800}
              alt="Pergola bioclimatique à lames orientables ouvertes devant une baie coulissante, ciel visible entre les lames"
              caption="Lames ouvertes, le ciel reste visible à travers la toiture jusqu'à la baie coulissante, à gauche : c'est la position à garder par temps sec en hiver. Photo Belgacem-eljia, CC BY-SA 4.0, Wikimedia Commons (recadrée)."
            />

            {/* Géométrie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Avancée, hauteur, recul : la géométrie qui garde la lumière
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À couverture égale, deux pergolas peuvent donner deux pièces très différentes. Tout se joue sur la
                forme de l&apos;ouvrage, et la règle tient en une image :{' '}
                <strong className="text-primary font-semibold">
                  plus la pergola est haute et moins elle avance, plus le soleil bas d&apos;hiver passe dessous.
                </strong>{' '}
                Une pergola profonde et basse, au contraire, projette l&apos;ombre de son rebord loin sur la baie.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Monter la pergola', 'quand la façade le permet, fixer la poutre de tête plus haut au-dessus du linteau de la baie dégage le haut du vitrage, celui qui éclaire le fond de la pièce.'],
                  ['Limiter l’avancée', 'une terrasse couverte n’a pas toujours besoin de couvrir toute la profondeur. On dimensionne pour la table et les chaises, pas pour la dalle entière.'],
                  ['Décaler la pergola', 'une pergola autoportante, posée sur ses propres poteaux à distance de la façade, laisse entre elle et la maison une bande de ciel libre devant la baie. C’est la solution la plus généreuse en lumière.'],
                  ['Laisser une bande non couverte', 'même adossée, on peut garder une travée ouverte ou vitrée côté façade, pour que la baie ne soit jamais sous la partie la plus opaque.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous ne donnons pas de cote type, parce qu&apos;il n&apos;y en a pas : la bonne hauteur dépend de la
                façade (hauteur sous égout, position des fenêtres d&apos;étage, volets roulants), et la bonne avancée
                de l&apos;orientation et de l&apos;usage. Ce qui compte, c&apos;est de tracer la course du soleil
                d&apos;hiver sur la coupe de la pergola avant de la fabriquer. La façade impose aussi ses limites :
                nous expliquons ce qu&apos;elle doit pouvoir porter dans{' '}
                <a href="/blog/fixer-pergola-aluminium-facade" className={lienInterne}>
                  notre article sur la fixation d&apos;une pergola aluminium en façade
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Côté urbanisme, une pergola devant une baie se traite comme les autres : la formalité dépend de la
                surface et du PLU de votre commune, et nous détaillons les cas dans{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  notre guide des autorisations d&apos;urbanisme pour abri, carport et pergola
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-baie-vitree-lumiere-hiver/pergola-aluminium-adossee-fixee-sous-egout-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Pergola aluminium adossée fixée juste sous la gouttière, bien au-dessus de la porte-fenêtre, à Saint-Pey-de-Castets"
              caption="À Saint-Pey-de-Castets, la poutre côté façade est fixée juste sous la gouttière, bien au-dessus du haut de la porte-fenêtre : plus le rebord est haut, plus le soleil bas d'hiver passe dessous."
            />

            {/* Couleur */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La couleur compte : profilés, lames et sol de terrasse
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le levier le moins coûteux et le plus sous-estimé. Une pièce n&apos;est pas seulement éclairée
                par le soleil direct et le ciel, mais aussi par la lumière renvoyée par tout ce qui l&apos;entoure.{' '}
                <strong className="text-primary font-semibold">
                  Des lames et des profilés clairs renvoient de la lumière vers la baie ; des teintes sombres en
                  absorbent.
                </strong>{' '}
                Sous une pergola anthracite, lames entrouvertes, la sous-face paraît sombre depuis le séjour. En blanc
                ou en gris clair, elle devient presque un réflecteur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le sol joue le même rôle. Une terrasse claire devant la baie renvoie la lumière vers le plafond de la
                pièce, ce qui aide justement le fond du séjour. Une dalle ou un platelage sombre fait l&apos;inverse.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne vous imposerons pas du blanc : l&apos;anthracite s&apos;accorde souvent mieux à des menuiseries sombres. Mais devant une baie qui éclaire une pièce profonde, nous
                vous montrerons l&apos;écart avant de choisir. Les teintes possibles, le thermolaquage et la façon de
                lire un nuancier sont détaillés dans{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  notre guide pour choisir une teinte RAL sur de l&apos;aluminium
                </a>
                .
              </p>
            </section>

            {/* Libourne / Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on regarde chez vous avant de dessiner, à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, beaucoup de maisons ont leur pièce de vie ouverte sur le jardin par une grande baie,
                et c&apos;est devant elle que l&apos;on veut la terrasse couverte. Nos hivers sont doux mais souvent
                gris, ce qui rend la lumière du ciel précieuse. Avant de proposer un modèle, nous faisons trois choses.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Venir à l’heure qui compte', 'si c’est possible, nous passons au moment où vous utilisez la pièce, pour voir où le soleil entre aujourd’hui et jusqu’où il va.'],
                  ['Relever l’orientation', 'boussole en main, avec la hauteur sous égout, la position du linteau de la baie et les obstacles proches (arbres, voisins, débord de toit).'],
                  ['Parler de la pièce', 'quel usage l’hiver, à quelle heure, est-ce la seule source de lumière. C’est ce qui tranche entre lames, vitrage, recul ou pergola autoportante.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Si votre souci principal est l&apos;ombre en été et que la terrasse n&apos;a pas besoin d&apos;être
                couverte, une autre réponse existe : un{' '}
                <a href="/blog/protection-solaire-brise-soleil-orientable" className={lienInterne}>
                  brise-soleil orientable
                </a>{' '}
                protège la baie sans toiture. Et si vous hésitez avec un store, nous comparons les deux dans{' '}
                <a href="/blog/store-banne-ou-pergola-bioclimatique" className={lienInterne}>
                  store banne ou pergola bioclimatique
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir des pergolas aluminium et bois posées autour de Libourne dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir{' '}
                <a href="/pergolas" className={lienInterne}>
                  notre gamme de pergolas bioclimatiques aluminium et de pergolas bois sur mesure
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-8.webp"
              w={768}
              h={512}
              alt="Pergola aluminium blanche à lames orientables adossée à une façade claire, au-dessus d'une terrasse dallée claire"
              caption="Profilés blancs, façade et dallage clairs : sous la pergola, la lumière est renvoyée vers la fenêtre au lieu d'être absorbée. Visuel fournisseur LI-SU DES TEMPS."
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
              Pergola devant une baie vitrée : vos questions
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
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform" aria-hidden="true">
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
              De l&apos;ombre l&apos;été, de la lumière l&apos;hiver
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola devant une baie vitrée n&apos;a pas à assombrir votre maison. Elle le fait quand on la choisit
              sur catalogue ; elle ne le fait pas quand on part de la pièce, de l&apos;orientation et du soleil
              d&apos;hiver. Nous venons regarder votre baie, votre façade et votre usage, à Libourne et dans toute la
              Gironde, et nous vous disons franchement quelle couverture et quelle géométrie garderont votre séjour
              lumineux.
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
