import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/remplacer-veranda-ancienne-aluminium-renovation/veranda-vitree-adossee-maison-jardin.webp';

export const metadata: Metadata = buildMetadata({
  title: "Remplacer une vieille véranda par de l'aluminium en Gironde",
  description:
    "Remplacer une véranda : ce qui se garde (dalle, muret), ce qui part (structure, étanchéité), dépose, amiante et urbanisme. Guide d'artisan à Libourne.",
  keywords:
    "remplacer une véranda, rénovation véranda aluminium, dépose ancienne véranda, remplacer véranda ancienne, remplacer pergola ancienne, véranda aluminium rénovation, amiante véranda, véranda Libourne, véranda Gironde",
  path: '/blog/remplacer-veranda-ancienne-aluminium-renovation',
  ogImage: COVER,
  ogTitle: 'Remplacer une véranda ancienne par de l’aluminium : ce qu’on garde, ce qui part',
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
        name: 'Remplacer une véranda ancienne',
        item: 'https://lesprit-bois.fr/blog/remplacer-veranda-ancienne-aluminium-renovation',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Remplacer une véranda ancienne par de l'aluminium : ce qu'on garde, ce qui part",
    description:
      "Remplacer une véranda ou une pergola vieillissante par de l'aluminium : les signes de fin de vie, ce qui se garde (dalle, muret d'allège, à faire vérifier) et ce qui part (structure, étanchéité), la dépose et le repérage amiante avant travaux, le raccord à la façade, la reprise sur une dalle existante, l'urbanisme et le budget face à un ouvrage neuf. Le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-09-24',
    dateModified: '2026-09-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/remplacer-veranda-ancienne-aluminium-renovation',
    },
    about: [
      { '@type': 'Thing', name: 'rénovation de véranda' },
      { '@type': 'Thing', name: 'véranda aluminium' },
      { '@type': 'Thing', name: 'pergola aluminium' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Peut-on garder la dalle et le muret de son ancienne véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Souvent, mais jamais sans vérification. La dalle et le muret d'allège sont les éléments qui vieillissent le mieux dans une véranda. Avant de les réutiliser, on contrôle le niveau, la planéité, les fissures, l'état des arases et la capacité des appuis à reprendre la nouvelle structure. Au moindre doute, on reprend ce qui doit l'être plutôt que de poser du neuf sur un support incertain.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il un diagnostic amiante avant de démonter une vieille véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Si la maison a été construite avant 1997, oui : depuis le 19 juillet 2019, le donneur d'ordre, y compris un particulier, doit faire réaliser un repérage amiante avant travaux par un opérateur certifié sur le périmètre des travaux. Les plaques de toiture en fibrociment, certains joints, colles ou conduits peuvent en contenir. On ne casse rien avant identification, et un éventuel désamiantage relève d'entreprises certifiées.",
        },
      },
      {
        '@type': 'Question',
        name: 'Remplacer une véranda à l’identique demande-t-il une déclaration préalable ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une réfection strictement à l'identique, mêmes dimensions et même aspect, n'est en principe pas soumise à déclaration préalable. En revanche, changer de matériau, de teinte, de forme de toiture ou agrandir modifie l'aspect extérieur et fait basculer en déclaration préalable, voire en permis. En secteur protégé, il faut toujours se renseigner en mairie avant de lancer les travaux.",
        },
      },
      {
        '@type': 'Question',
        name: 'Rénover une véranda coûte-t-il moins cher que d’en construire une neuve ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas automatiquement. On économise la dalle et parfois le muret quand ils sont sains, mais on ajoute la dépose, l'évacuation des déchets, un éventuel repérage amiante et la reprise du raccord à la façade. L'écart dépend de ce qu'on peut réellement garder, ce qui ne se sait qu'après une visite sur place.",
        },
      },
      {
        '@type': 'Question',
        name: 'Que récupère-t-on quand on remplace une vieille pergola par une pergola aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Presque jamais la structure, qu'elle soit en bois fatigué ou en aluminium d'entrée de gamme. Ce qui se récupère, ce sont les appuis s'ils sont sains et bien placés, la terrasse ou la dalle en dessous, et parfois l'alimentation électrique. Les anciens ancrages ne tombent généralement pas au bon endroit pour la nouvelle structure : on les vérifie avant de s'en servir.",
        },
      },
    ],
  },
];

const bilan = [
  [
    'Dalle ou plancher bas',
    'Souvent récupérable',
    'Niveau, planéité, fissures, appuis sous les futurs poteaux',
  ],
  [
    'Muret d’allège',
    'Souvent récupérable',
    'Aplomb, fissures, arase saine, capacité à recevoir les nouveaux profilés',
  ],
  [
    'Raccord à la façade',
    'À refaire presque toujours',
    'État de l’enduit ou du parement, support réellement porteur',
  ],
  [
    'Structure et profilés',
    'Remplacés',
    'Pas de rupture de pont thermique, déformations, pièces introuvables',
  ],
  [
    'Toiture et étanchéité',
    'Remplacées',
    'Panneaux jaunis ou cassants, joints cuits, gouttières sous-dimensionnées',
  ],
  [
    'Motorisation, quincaillerie',
    'Remplacées',
    'Pièces détachées plus fabriquées, fermetures qui forcent',
  ],
];

const faq = [
  {
    q: 'Peut-on garder la dalle et le muret de son ancienne véranda ?',
    r: (
      <>
        Souvent, mais jamais sans vérification. La dalle et le muret d&apos;allège sont les éléments qui vieillissent le
        mieux dans une véranda. Avant de les réutiliser, on contrôle le niveau, la planéité, les fissures, l&apos;état
        des arases et la capacité des appuis à reprendre la nouvelle structure. Au moindre doute, on reprend ce qui doit
        l&apos;être plutôt que de poser du neuf sur un support incertain.
      </>
    ),
  },
  {
    q: 'Faut-il un diagnostic amiante avant de démonter une vieille véranda ?',
    r: (
      <>
        Si la maison a été construite avant 1997, oui : depuis le 19 juillet 2019, le donneur d&apos;ordre, y compris un
        particulier, doit faire réaliser un repérage amiante avant travaux par un opérateur certifié sur le périmètre des
        travaux. Les plaques de toiture en fibrociment, certains joints, colles ou conduits peuvent en contenir. On ne
        casse rien avant identification, et un éventuel désamiantage relève d&apos;entreprises certifiées.
      </>
    ),
  },
  {
    q: 'Remplacer une véranda à l’identique demande-t-il une déclaration préalable ?',
    r: (
      <>
        Une réfection strictement à l&apos;identique, mêmes dimensions et même aspect, n&apos;est en principe pas soumise
        à déclaration préalable. En revanche, changer de matériau, de teinte, de forme de toiture ou agrandir modifie
        l&apos;aspect extérieur et fait basculer en déclaration préalable, voire en permis. En secteur protégé, il faut
        toujours se renseigner en mairie avant de lancer les travaux.
      </>
    ),
  },
  {
    q: 'Rénover une véranda coûte-t-il moins cher que d’en construire une neuve ?',
    r: (
      <>
        Pas automatiquement. On économise la dalle et parfois le muret quand ils sont sains, mais on ajoute la dépose,
        l&apos;évacuation des déchets, un éventuel repérage amiante et la reprise du raccord à la façade. L&apos;écart
        dépend de ce qu&apos;on peut réellement garder, ce qui ne se sait qu&apos;après une visite sur place.
      </>
    ),
  },
  {
    q: 'Que récupère-t-on quand on remplace une vieille pergola par une pergola aluminium ?',
    r: (
      <>
        Presque jamais la structure, qu&apos;elle soit en bois fatigué ou en aluminium d&apos;entrée de gamme. Ce qui se
        récupère, ce sont les appuis s&apos;ils sont sains et bien placés, la terrasse ou la dalle en dessous, et parfois
        l&apos;alimentation électrique. Les anciens ancrages ne tombent généralement pas au bon endroit pour la nouvelle
        structure : on les vérifie avant de s&apos;en servir.
      </>
    ),
  },
];

export default function ArticleRemplacerVerandaPage() {
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
              height="800"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Véranda vitrée à profilés métalliques adossée à une maison, ouverte sur le jardin"
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
              <span className="text-secondary-fixed">Remplacer une véranda ancienne</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Vérandas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Remplacer une véranda ancienne par de l&apos;aluminium en Gironde : ce qu&apos;on garde, ce qui part
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
              <span>24 septembre 2026</span>
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
                Remplacer une véranda, ce n&apos;est pas reconstruire à zéro : la valeur d&apos;une rénovation se joue
                sur ce qu&apos;on garde. La dalle et le muret d&apos;allège survivent souvent, à condition de les faire
                vérifier ; la structure, la toiture et l&apos;étanchéité, presque jamais. Tout le projet consiste à
                trier honnêtement les deux, puis à refaire proprement le raccord à la façade.
              </strong>{' '}
              Entre les deux, il y a une étape qu&apos;on sous-estime toujours : la dépose, avec la question de
              l&apos;amiante sur les maisons anciennes. Voici comment nous abordons ces chantiers autour de Libourne,
              de la première visite au choix entre réfection à l&apos;identique et vraie transformation, et ce que
              change le cas, très proche, de la vieille pergola à remplacer.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Signes de fin de vie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les signes qu&apos;une véranda arrive en fin de vie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda ne s&apos;effondre pas : elle se dégrade par petites touches, et c&apos;est justement
                pour cela qu&apos;on repousse la décision d&apos;année en année. Ce n&apos;est pas un défaut isolé
                qui doit alerter, c&apos;est l&apos;accumulation. Voici ce que nous regardons en premier quand on nous
                appelle pour une véranda des années 1980 ou 1990.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La condensation qui ruisselle', 'buée sur les vitrages et sur les montants, gouttes qui tombent de la toiture l’hiver : c’est souvent le signe de profilés sans rupture de pont thermique, qui conduisent le froid de l’extérieur jusqu’à l’intérieur.'],
                  ['Les fuites au raccord façade', 'une trace sur le mur de la maison, un enduit qui cloque, un plafond taché au droit de la jonction : c’est le point faible numéro un, nous y revenons plus bas.'],
                  ['Des joints cuits', 'durcis, rétractés, fendus, ils ne font plus leur travail d’étanchéité entre vitrages et profilés, et laissent passer l’air autant que l’eau.'],
                  ['Une toiture polycarbonate jaunie ou cassante', 'les panneaux se teintent, s’opacifient, deviennent fragiles au toucher, et les alvéoles se chargent de mousse ou de salissures qu’on ne peut plus nettoyer.'],
                  ['Des pièces introuvables', 'une motorisation de volet de toit en panne, une poignée cassée, un galet de coulissant usé : quand le fabricant a disparu, chaque petite réparation devient du bricolage.'],
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
                Un seul de ces signes se répare souvent. Trois ou quatre à la fois, sur une structure dont on ne trouve
                plus les pièces, c&apos;est une véranda qui coûte chaque année un peu plus pour un confort qui baisse.
                C&apos;est à ce moment-là que la question du remplacement devient rationnelle, et pas seulement
                esthétique.
              </p>
            </section>

            <Figure
              src="/images/blog/remplacer-veranda-ancienne-aluminium-renovation/ancienne-toiture-vitree-joints-degrades.webp"
              w={1200}
              h={800}
              alt="Ancienne toiture vitrée vue en contre-plongée, joints qui s'effritent et profilés écaillés"
              caption="Joints qui s'effritent, peinture des profilés qui s'écaille, vitrage encrassé : à ce stade, on ne répare plus une toiture, on la remplace."
            />

            {/* 2. Ce qui se garde et ce qui part */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui se garde et ce qui part
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le cœur du sujet, et le pendant exact de ce que nous expliquons pour{' '}
                <a href="/blog/renover-terrasse-bois-existante" className={lienInterne}>
                  la rénovation d&apos;une terrasse en bois existante
                </a>{' '}
                : on ne rénove pas « une véranda », on rénove des éléments qui n&apos;ont pas vieilli au même rythme.{' '}
                <strong className="text-primary font-semibold">
                  Ce qui est en maçonnerie résiste souvent ; ce qui est en profilés, en joints et en panneaux, rarement.
                </strong>
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Élément</th>
                      <th className="px-4 py-3 font-label-md text-label-md">En général</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;on vérifie</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bilan.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Pourquoi la structure part-elle presque toujours ? Parce que les profilés aluminium d&apos;il y a trente
                ans n&apos;ont souvent pas de rupture de pont thermique, que leurs sections ne correspondent pas aux
                vitrages actuels et que leur quincaillerie n&apos;est plus fabriquée. Garder la structure et changer
                les vitrages, c&apos;est enfermer du neuf dans un cadre qui continuera à condenser et à fuir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un mot honnête sur la dalle et le muret : « souvent récupérable » ne veut pas dire « récupérable ».
                Nous ne le promettons jamais avant d&apos;avoir vu, mesuré et, quand c&apos;est possible, sondé.
                C&apos;est précisément ce diagnostic qui fait la différence entre un devis de rénovation sérieux et un
                devis qui découvre ses surprises en cours de chantier.
              </p>
            </section>

            {/* 3. La dépose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La dépose, un sujet à part entière (et l&apos;amiante)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Démonter une véranda, ce n&apos;est pas dévisser et charger une remorque. Il faut déposer les vitrages
                sans les briser, désolidariser la structure de la façade sans arracher l&apos;enduit, protéger la dalle
                qu&apos;on veut garder, trier et évacuer les déchets, et souvent maintenir la maison hors d&apos;eau le
                temps que la nouvelle structure arrive. C&apos;est un poste de devis à part entière, qui doit y figurer
                en clair.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Et sur les maisons anciennes, il y a une question préalable.{' '}
                <strong className="text-primary font-semibold">
                  Depuis le 19 juillet 2019, pour un immeuble bâti construit avant 1997, le donneur d&apos;ordre, y
                  compris un particulier propriétaire de sa maison, doit faire réaliser un repérage amiante avant
                  travaux
                </strong>{' '}
                par un opérateur certifié, sur le périmètre des travaux (
                <a
                  href="https://www.legifrance.gouv.fr/loda/id/JORFTEXT000038777498"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  arrêté du 16 juillet 2019
                </a>
                , pris en application de l&apos;article R4412-97 du code du travail, repérage selon la norme NF X
                46-020). Le manquement peut être sanctionné jusqu&apos;à 9 000 €.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Concrètement, sur une véranda ou un appentis ancien, les plaques de toiture en fibrociment sont le
                suspect le plus fréquent, mais certains joints, colles ou conduits peuvent aussi contenir de
                l&apos;amiante. La règle est simple : on ne gratte pas, on ne casse pas, on ne perce pas pour « voir ».
                On fait identifier avant de déposer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Soyons clairs sur notre rôle : <strong className="text-primary font-semibold">nous ne sommes pas
                désamianteurs</strong>. Si le repérage révèle des matériaux amiantés, leur retrait relève
                d&apos;entreprises certifiées pour cela, et notre intervention commence une fois la zone traitée.
                Mieux vaut le savoir au moment du devis qu&apos;en découvrant une plaque suspecte le premier matin du
                chantier.
              </p>
            </section>

            <Figure
              src="/images/blog/remplacer-veranda-ancienne-aluminium-renovation/ancienne-structure-vitree-sur-muret.webp"
              w={1200}
              h={800}
              alt="Ancienne structure vitrée à profilés rouillés posée sur un muret maçonné, vitrages fendus"
              caption="Sur ce vieil ouvrage vitré, le muret maçonné tient encore, alors que les profilés rouillés et les vitrages fendus sont à déposer."
            />

            {/* 4. Raccord à la façade */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le raccord à la façade, point faible numéro un
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur les vérandas que nous déposons, la majorité des fuites viennent du même endroit : la jonction entre
                la toiture de la véranda et le mur de la maison. C&apos;est là que deux ouvrages qui bougent
                différemment se rencontrent, et là que les anciennes poses se contentaient souvent d&apos;un cordon de
                mastic en guise d&apos;étanchéité. Le mastic vieillit, se décolle, et l&apos;eau suit le mur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand on remplace, on ne recolle pas le nouveau profilé contre l&apos;ancienne trace.{' '}
                <strong className="text-primary font-semibold">
                  On reprend le raccord comme un ouvrage neuf
                </strong>{' '}
                : état du support (enduit, pierre, parement), fixation dans un élément réellement porteur, profil de
                raccord avec une vraie bavette ou un solin adapté à la façade, et gestion de l&apos;eau qui ruisselle
                sur le mur au-dessus. Sur une façade en pierre irrégulière, ce détail demande plus de temps que tout le
                reste de la toiture.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                L&apos;autre moitié du sujet, c&apos;est l&apos;eau qui tombe sur la toiture neuve. Une véranda
                récente collecte souvent plus d&apos;eau qu&apos;on ne l&apos;imagine, et les anciennes descentes ne
                sont pas toujours au bon endroit ni du bon diamètre. Nous l&apos;avons détaillé dans notre article sur{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  l&apos;évacuation des eaux pluviales d&apos;une pergola ou d&apos;un carport
                </a>
                , dont la logique vaut pour une véranda. Côté couverture, les choix possibles (vitrage, panneaux,
                toiture opaque) sont comparés dans notre guide sur{' '}
                <a href="/blog/couverture-pergola-carport-toiture-materiaux" className={lienInterne}>
                  les matériaux de toiture
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/remplacer-veranda-ancienne-aluminium-renovation/pergola-aluminium-raccord-toiture-tuiles-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Toiture d'une pergola aluminium raccordée au bas d'un toit en tuiles, vue d'en haut, à Saint-Pey-de-Castets"
              caption="Vue depuis le toit de la maison : la couverture de la pergola aluminium vient buter sous le rang de tuiles, en rive anthracite. Chantier L'Esprit Bois à Saint-Pey-de-Castets."
            />

            {/* 5. Dalle existante */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Reposer sur une dalle qu&apos;on n&apos;a pas coulée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Garder la dalle, c&apos;est accepter de construire sur un support dont on ne connaît ni la composition
                exacte ni l&apos;histoire. Ce n&apos;est pas un problème en soi, à condition de le traiter comme un
                support à qualifier et non comme un acquis. Avant de poser la moindre platine, nous vérifions quatre
                choses.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le niveau', 'une dalle de véranda ancienne a parfois été coulée avec une pente, volontaire ou non. Les profilés neufs, eux, demandent un appui de niveau.'],
                  ['La planéité', 'des bosses ou des creux sous les dormants, et l’étanchéité en pied de menuiserie devient un combat.'],
                  ['Les fissures', 'une fissure fine de retrait n’a pas la même signification qu’une fissure qui s’ouvre ou qui décale deux parties de dalle.'],
                  ['Les appuis', 'une structure aluminium neuve concentre sa charge sur ses poteaux, pas forcément là où l’ancienne s’appuyait. On regarde ce qu’il y a sous ces points précis.'],
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
                Si le doute persiste, on reprend : ragréage, reprise d&apos;un bord, création d&apos;un appui localisé
                sous un poteau. C&apos;est la même logique que celle que nous appliquons pour{' '}
                <a href="/blog/poser-pergola-aluminium-terrasse-bois-existante" className={lienInterne}>
                  poser une pergola aluminium sur une terrasse existante
                </a>{' '}
                : la charge doit descendre jusqu&apos;à quelque chose qui ne bouge pas, et on ne le suppose jamais, on
                le vérifie.
              </p>
            </section>

            {/* 6. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Urbanisme : réfection à l&apos;identique ou changement d&apos;aspect
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est une question que l&apos;on se pose rarement pour une rénovation, à tort. Les travaux qui
                modifient l&apos;aspect extérieur d&apos;une construction existante relèvent de la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                (article R*421-17 du code de l&apos;urbanisme).{' '}
                <strong className="text-primary font-semibold">
                  Une réfection strictement à l&apos;identique, mêmes dimensions et même aspect, n&apos;y est en
                  principe pas soumise.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le problème, c&apos;est qu&apos;un remplacement est rarement à l&apos;identique. Passer d&apos;une
                toiture polycarbonate à une toiture opaque ou vitrée, changer la teinte des profilés pour un
                thermolaquage RAL assorti aux menuiseries de la maison, modifier la pente ou gagner quelques
                dizaines de centimètres : chacun de ces choix change l&apos;aspect et fait basculer en déclaration
                préalable, voire en permis si l&apos;agrandissement le justifie. En secteur protégé ou aux abords
                d&apos;un monument historique, il faut toujours se renseigner en mairie avant de commander quoi que ce
                soit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne rejouons pas ici les seuils de surface qui distinguent déclaration et permis : ils sont
                détaillés dans notre guide{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  véranda aluminium : isolation, urbanisme et budget
                </a>
                . Retenez simplement que « je remplace ce qui existe » n&apos;exonère pas automatiquement de démarche.
              </p>
            </section>

            <Figure
              src="/images/blog/remplacer-veranda-ancienne-aluminium-renovation/pergola-aluminium-profiles-anthracite-toiture-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Sous-face d'une pergola aluminium anthracite adossée à une façade, panneaux de toiture opaques et translucides, à Saint-Pey-de-Castets"
              caption="Teinte des profilés, alternance de panneaux opaques et translucides : ce sont ces choix qui changent l'aspect extérieur de l'ouvrage."
            />

            {/* 7. Budget */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le budget face à un ouvrage neuf, à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On imagine volontiers qu&apos;une rénovation coûte forcément moins cher qu&apos;une véranda neuve,
                puisqu&apos;on « garde une partie ». C&apos;est parfois vrai, pas toujours. Ce qu&apos;on économise
                est bien réel : une dalle et un muret sains évitent le terrassement, le coffrage et le temps de séchage.
                Mais une rénovation ajoute des postes qu&apos;une construction neuve n&apos;a pas.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Ce qui fait baisser la note', 'une dalle et un muret réutilisables sans reprise, une réfection proche de l’existant (pas de démarche lourde), un accès facile au chantier.'],
                  ['Ce qui la fait monter', 'la dépose et l’évacuation, un repérage amiante puis un éventuel retrait par une entreprise certifiée, un raccord façade à reprendre sur un support difficile, une dalle à ragréer ou à renforcer.'],
                  ['Ce qui la fait varier dans les deux sens', 'le niveau d’équipement choisi : type de toiture, vitrages, motorisation des ouvrants ou des protections solaires, teinte RAL hors standard.'],
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
                Pour des ordres de grandeur, notre{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  guide budget de la véranda aluminium
                </a>{' '}
                donne les repères utiles ; ici, nous préférons ne pas inventer de chiffre, parce que l&apos;écart entre
                deux rénovations tient presque entièrement à ce qu&apos;on trouve sur place. Sur nos chantiers autour
                de Libourne, entre maisons en pierre du Libournais et pavillons des années 1980, le raccord façade et
                l&apos;état de la dalle sont les deux inconnues qui font bouger un devis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un dernier point souvent oublié dans la comparaison : ce que vous achetez après la pose. Pièces
                détachées, suivi de la motorisation, interlocuteur joignable. C&apos;est précisément ce qui manquait à
                l&apos;ancienne véranda, et c&apos;est ce que nous abordons dans notre article sur{' '}
                <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                  les garanties et le SAV d&apos;une pergola ou d&apos;une véranda aluminium
                </a>
                .
              </p>
            </section>

            {/* 8. Vieille pergola */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le cas de la vieille pergola remplacée par une pergola aluminium
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La question se pose dans les mêmes termes, en plus simple. Une pergola en bois dont les pieds de poteau
                ont pourri, ou une pergola aluminium d&apos;entrée de gamme aux lames qui ne s&apos;orientent plus et
                dont la motorisation a rendu l&apos;âme : dans les deux cas, on nous demande ce qui peut resservir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La structure, presque jamais.</strong> Un bois attaqué
                au pied ne se « répare » pas sous une toiture neuve, et des profilés de faible section ne se
                transforment pas en pergola bioclimatique. Ce qui se récupère, c&apos;est ce qui est en dessous :
                la terrasse ou la dalle, les appuis s&apos;ils sont sains, parfois l&apos;alimentation électrique déjà
                tirée. Attention toutefois aux anciens ancrages : une pergola aluminium neuve n&apos;a pas forcément
                ses poteaux au même endroit, ni la même descente de charge, et un vieux plot ne sert que s&apos;il
                tombe au bon endroit et qu&apos;il est dimensionné pour.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Parce que nous posons le bois et l&apos;aluminium, nous n&apos;avons aucune raison de vous pousser vers
                l&apos;un ou l&apos;autre : si votre pergola bois est simplement à reprendre en pied, on le dit.
                Quand le remplacement s&apos;impose, découvrez notre approche des{' '}
                <a href="/pergolas" className={lienInterne}>pergolas sur mesure</a>, et, pour une véranda ou une
                extension, nos réalisations en{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a> et en{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a>. Vous pouvez aussi voir
                plusieurs chantiers finis dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            <Figure
              src="/images/blog/remplacer-veranda-ancienne-aluminium-renovation/pergola-aluminium-terrasse-existante-saint-pey-de-castets.webp"
              w={1200}
              h={900}
              alt="Pergola aluminium anthracite posée sur une terrasse bois existante contre une maison, à Saint-Pey-de-Castets"
              caption="Ici, la terrasse était déjà là, construite par les propriétaires : la pergola aluminium est venue s'y poser. Chantier à Saint-Pey-de-Castets."
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
              Remplacer une véranda : vos questions
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
              Une rénovation vaut ce qu&apos;on garde
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Remplacer une véranda ancienne par de l&apos;aluminium, c&apos;est trier : garder la dalle et le muret
              quand ils le méritent, remplacer sans regret la structure et l&apos;étanchéité, et refaire le raccord à la
              façade comme un ouvrage neuf. Nous venons faire ce tri chez vous, repérage amiante et démarches
              d&apos;urbanisme compris dans la réflexion, à Libourne et dans toute la Gironde. L&apos;Esprit Bois,
              entreprise qualifiée Qualibat, pose le bois comme l&apos;aluminium.
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
