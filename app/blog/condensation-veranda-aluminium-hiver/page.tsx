import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/condensation-veranda-aluminium-hiver/buee-vitrages-profiles-metalliques-piece-vitree-hiver.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Condensation dans la véranda en hiver : causes et remèdes',
  description:
    "Condensation dans la véranda en hiver : lire où l'eau apparaît pour savoir si c'est la ventilation ou la structure. Guide d'un artisan à Libourne, Gironde.",
  keywords:
    'condensation véranda, buée véranda hiver, véranda aluminium humidité, rupture de pont thermique véranda, ventiler une véranda, condensation véranda polycarbonate, condensation ou infiltration véranda, véranda Libourne, véranda aluminium Gironde, condensation véranda Gironde',
  path: '/blog/condensation-veranda-aluminium-hiver',
  ogImage: COVER,
  ogTitle: "Condensation dans une véranda en hiver : d'où vient la buée, et quand c'est la structure qui parle",
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

function DuoFigure({
  a,
  b,
}: {
  /** `w` et `h` : dimensions réelles du fichier, à vérifier avant de les écrire. */
  a: { src: string; alt: string; caption: string; w: number; h: number };
  b: { src: string; alt: string; caption: string; w: number; h: number };
}) {
  return (
    <div className="-mx-6 md:-mx-16 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
      {[a, b].map((img) => (
        <figure key={img.src + img.alt}>
          <img
            loading="lazy"
            decoding="async"
            width={img.w}
            height={img.h}
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
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://lesprit-bois.fr/' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://lesprit-bois.fr/blog' },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Condensation dans une véranda en hiver',
        item: 'https://lesprit-bois.fr/blog/condensation-veranda-aluminium-hiver',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Condensation dans une véranda en hiver : d'où vient la buée, et quand c'est la structure qui parle",
    description:
      "La buée dans une véranda n'est pas d'abord un défaut : c'est l'air humide de la maison qui touche la paroi la plus froide. L'endroit où l'eau apparaît dit si la cause est l'usage et la ventilation, qui se corrigent sans travaux, ou la structure (profilés sans rupture de pont thermique, simple vitrage, vieille toiture polycarbonate), qui ne se corrige pas à la marge. Le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-10-24',
    dateModified: '2026-10-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/condensation-veranda-aluminium-hiver',
    },
    about: [
      { '@type': 'Thing', name: 'véranda aluminium' },
      { '@type': 'Thing', name: 'condensation' },
      { '@type': 'Thing', name: 'point de rosée' },
      { '@type': 'Thing', name: 'rupture de pont thermique' },
      { '@type': 'Thing', name: 'ventilation' },
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
        name: "Est-ce normal d'avoir de la buée dans une véranda en hiver ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un peu de buée par un matin froid, qui disparaît dans la matinée, est normale : la véranda est la pièce la plus vitrée de la maison, donc celle dont les parois sont les plus froides, et c'est là que l'humidité de l'air se dépose en premier. Ce qui ne l'est pas, c'est de l'eau qui ruisselle chaque jour, qui forme des flaques au pied des vitrages ou qui laisse des traces noires sur les joints : là, il faut chercher la cause.",
        },
      },
      {
        '@type': 'Question',
        name: "De la buée sur la face extérieure du vitrage le matin, est-ce un défaut ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, c'est même plutôt bon signe. Un vitrage isolant laisse passer peu de chaleur : sa face extérieure reste aussi froide que l'air du dehors, et par une nuit claire et humide, la rosée s'y dépose comme sur une voiture garée dehors. Elle s'évapore dès que le soleil ou le vent s'en charge. C'est la buée côté intérieur, ou entre les deux verres, qui mérite qu'on s'y arrête.",
        },
      },
      {
        '@type': 'Question',
        name: "Un déshumidificateur suffit-il à régler la condensation d'une véranda ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il soulage, il ne règle rien sur le fond. Un déshumidificateur retire de l'eau de l'air, ce qui limite la buée tant qu'il tourne, mais il consomme de l'électricité et ne change ni l'usage de la pièce ni la température des parois. Utilisez-le avec un hygromètre, pour vérifier qu'il sert vraiment, et en complément d'une aération correcte, jamais à sa place. S'il tourne tout l'hiver sans venir à bout de la buée, c'est la structure qu'il faut regarder.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on ajouter une rupture de pont thermique sur une véranda existante ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. La rupture de pont thermique est une barrière isolante intégrée au cœur du profilé aluminium dès sa fabrication : elle ne se rajoute pas après coup. Sur une véranda aux profilés sans rupture, on peut améliorer ce qui s'améliore (joints, vitrages quand les feuillures le permettent, toiture), mais les profilés resteront froids. Quand la condensation sur les montants est la gêne principale, la vraie réponse est le remplacement de la véranda, à étudier au cas par cas.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment savoir si l'eau dans ma véranda vient de la condensation ou d'une fuite ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Regardez quand elle apparaît. De la condensation se forme par temps sec et froid, surtout la nuit et au petit matin, sur toutes les parois froides, et disparaît quand la pièce se réchauffe. Une infiltration suit la pluie et le vent, revient toujours au même endroit, souvent au raccord avec la façade, à un angle de toiture ou au bas d'un vitrage, et peut couler même par temps doux. Un séchage complet, puis une observation après la prochaine pluie, tranchent dans la plupart des cas.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: "Est-ce normal d'avoir de la buée dans une véranda en hiver ?",
    r: (
      <>
        Un peu de buée par un matin froid, qui disparaît dans la matinée, est normale : la véranda est la pièce la plus
        vitrée de la maison, donc celle dont les parois sont les plus froides, et c&apos;est là que l&apos;humidité de
        l&apos;air se dépose en premier. Ce qui ne l&apos;est pas, c&apos;est de l&apos;eau qui ruisselle chaque jour,
        qui forme des flaques au pied des vitrages ou qui laisse des traces noires sur les joints : là, il faut chercher la
        cause.
      </>
    ),
  },
  {
    q: 'De la buée sur la face extérieure du vitrage le matin, est-ce un défaut ?',
    r: (
      <>
        Non, c&apos;est même plutôt bon signe. Un vitrage isolant laisse passer peu de chaleur : sa face extérieure reste
        aussi froide que l&apos;air du dehors, et par une nuit claire et humide, la rosée s&apos;y dépose comme sur une
        voiture garée dehors. Elle s&apos;évapore dès que le soleil ou le vent s&apos;en charge. C&apos;est la buée côté
        intérieur, ou entre les deux verres, qui mérite qu&apos;on s&apos;y arrête.
      </>
    ),
  },
  {
    q: "Un déshumidificateur suffit-il à régler la condensation d'une véranda ?",
    r: (
      <>
        Il soulage, il ne règle rien sur le fond. Un déshumidificateur retire de l&apos;eau de l&apos;air, ce qui limite
        la buée tant qu&apos;il tourne, mais il consomme de l&apos;électricité et ne change ni l&apos;usage de la pièce ni
        la température des parois. Utilisez-le avec un hygromètre, pour vérifier qu&apos;il sert vraiment, et en
        complément d&apos;une aération correcte, jamais à sa place. S&apos;il tourne tout l&apos;hiver sans venir à bout
        de la buée, c&apos;est la structure qu&apos;il faut regarder.
      </>
    ),
  },
  {
    q: 'Peut-on ajouter une rupture de pont thermique sur une véranda existante ?',
    r: (
      <>
        Non. La rupture de pont thermique est une barrière isolante intégrée au cœur du profilé aluminium dès sa
        fabrication : elle ne se rajoute pas après coup. Sur une véranda aux profilés sans rupture, on peut améliorer ce
        qui s&apos;améliore (joints, vitrages quand les feuillures le permettent, toiture), mais les profilés resteront
        froids. Quand la condensation sur les montants est la gêne principale, la vraie réponse est le remplacement de la
        véranda, à étudier au cas par cas.
      </>
    ),
  },
  {
    q: "Comment savoir si l'eau dans ma véranda vient de la condensation ou d'une fuite ?",
    r: (
      <>
        Regardez quand elle apparaît. De la condensation se forme par temps sec et froid, surtout la nuit et au petit
        matin, sur toutes les parois froides, et disparaît quand la pièce se réchauffe. Une infiltration suit la pluie et
        le vent, revient toujours au même endroit, souvent au raccord avec la façade, à un angle de toiture ou au bas
        d&apos;un vitrage, et peut couler même par temps doux. Un séchage complet, puis une observation après la
        prochaine pluie, tranchent dans la plupart des cas.
      </>
    ),
  },
];

export default function ArticleCondensationVerandaAluminiumHiverPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1600"
              height="1067"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Condensation sur les vitrages d'une pièce vitrée à profilés métalliques en hiver : buée et coulures côté intérieur"
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
              <span className="text-secondary-fixed">Condensation dans une véranda en hiver</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Vérandas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Condensation dans une véranda en hiver : d&apos;où vient la buée, et quand c&apos;est la structure qui
              parle
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
              <span>24 octobre 2026</span>
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
                La buée dans une véranda n&apos;est pas d&apos;abord un défaut : c&apos;est l&apos;air humide de la
                maison qui vient toucher la paroi la plus froide du logement. Pour savoir quoi faire, on regarde où
                l&apos;eau apparaît. Si elle vient de l&apos;usage et d&apos;une ventilation insuffisante, elle se
                corrige sans travaux. Si elle vient de la structure (profilés sans rupture de pont thermique, simple
                vitrage, vieille toiture en polycarbonate), elle ne se corrigera pas à la marge.
              </strong>{' '}
              Nous vendons et posons des vérandas et des pergolas aluminium autour de Libourne, et nous intervenons
              chaque hiver sur des vérandas qui « pleurent ». Voici comment nous lisons une véranda humide avant de
              proposer quoi que ce soit, et ce que vous pouvez vérifier vous-même dès ce soir.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Pourquoi une véranda condense */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi une véranda condense plus que le reste de la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;air contient toujours de la vapeur d&apos;eau, invisible. Plus il est chaud, plus il peut en
                porter. Quand cet air rencontre une surface plus froide que lui, il se refroidit à son contact, et à
                partir d&apos;une certaine température, le{' '}
                <strong className="text-primary font-semibold">point de rosée</strong>, il ne peut plus garder toute sa
                vapeur : l&apos;excédent se dépose en gouttelettes. C&apos;est exactement ce qui se passe sur un verre
                d&apos;eau fraîche en été, ou sur le miroir de la salle de bains après une douche.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda cumule tout ce qui favorise ce phénomène :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Une surface vitrée énorme', "parois verticales et souvent toiture : la véranda est la pièce qui offre le plus de surface froide à l'air intérieur."],
                  ['La paroi la plus froide du logement', "même un bon vitrage isolant reste plus froid qu'un mur isolé. L'humidité de toute la maison finit par se déposer là où il fait le plus froid, et c'est souvent ici."],
                  ['Une toiture exposée au ciel', "par nuit claire, la toiture d'une véranda rayonne sa chaleur vers le ciel et se refroidit plus vite que les parois verticales : c'est souvent elle qui goutte la première."],
                  ['Un chauffage souvent intermittent', "on chauffe la véranda quand on y vit, puis on la laisse refroidir : les parois, elles, restent froides bien plus longtemps que l'air."],
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
                Retenez l&apos;équation, elle sert tout au long de cet article :{' '}
                <strong className="text-primary font-semibold">
                  condensation = air humide + paroi froide
                </strong>
                . On peut agir sur l&apos;un, sur l&apos;autre ou sur les deux. Agir sur l&apos;air coûte peu ; agir sur
                la paroi, c&apos;est toucher à la véranda elle-même.
              </p>
            </section>

            <Figure
              src="/images/blog/condensation-veranda-aluminium-hiver/gouttelettes-condensation-vitrage-profile-metallique.webp"
              w={1200}
              h={800}
              alt="Gouttelettes de condensation qui ruissellent sur un vitrage côté intérieur, sous une traverse de profilé métallique"
              caption="Au-dessus de la traverse, un voile de fines gouttelettes ; en dessous, elles ont grossi et ruissellent. C'est cette eau qui finit en flaque au pied du vitrage."
            />

            {/* 2. Lire où l'eau apparaît */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lire où l&apos;eau apparaît : ce que chaque endroit vous dit
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Avant de chercher un coupable, observez votre véranda un matin froid, avant d&apos;ouvrir et de
                chauffer. L&apos;emplacement de l&apos;eau est le meilleur diagnostic gratuit qui existe.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Au centre des vitrages, côté intérieur', "si toute la surface du verre se couvre de buée, l'air est très humide, ou le vitrage est simple et donc presque aussi froid que l'extérieur. Sur un double vitrage récent, c'est avant tout un signal d'usage et de ventilation."],
                  ['Sur le pourtour des vitrages', "une bande de buée de quelques centimètres le long du cadre est fréquente : c'est la zone où l'intercalaire qui sépare les deux verres et le profilé conduisent un peu plus le froid. Une bande fine qui sèche dans la matinée n'a rien d'alarmant."],
                  ['Sur les profilés eux-mêmes', "si ce sont les montants et traverses en aluminium qui ruissellent, plus que les verres, les profilés sont probablement sans rupture de pont thermique. C'est un signal structurel."],
                  ['En toiture', "des gouttes qui tombent du plafond par temps sec et froid viennent souvent d'une toiture froide : vieux polycarbonate, simple vitrage, profilés de chevron non isolés."],
                  ['Dans les angles bas', "l'air refroidi descend le long des vitrages et l'eau ruisselle vers le bas : une petite flaque au pied d'un vitrage est souvent de la condensation accumulée. Mais c'est aussi l'endroit où une infiltration se manifeste, d'où le test de la section plus bas."],
                  ['Entre les deux verres', "de la buée enfermée dans le double vitrage, impossible à essuyer, signifie que le joint du vitrage a cédé. Ce n'est ni l'usage ni la ventilation : c'est ce vitrage qu'il faut remplacer."],
                  ['Sur la face extérieure', "de la rosée dehors le matin est normale, et même le signe d'un vitrage qui isole bien. Rien à faire."],
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
                Notez ce que vous voyez pendant quelques matins, avec la météo de la veille. Une photo par jour suffit.
                C&apos;est exactement ce que nous vous demanderons si vous nous appelez, et cela fait gagner un temps
                précieux au diagnostic.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/condensation-veranda-aluminium-hiver/buee-toute-surface-vitrage-air-humide.webp',
                w: 1200,
                h: 800,
                alt: "Buée couvrant toute la surface d'un vitrage côté intérieur, signe d'un air trop humide",
                caption: "Buée sur toute la vitre, côté pièce : on regarde d'abord l'usage et la ventilation.",
              }}
              b={{
                src: '/images/blog/condensation-veranda-aluminium-hiver/buee-entre-deux-verres-double-vitrage-defaillant.webp',
                w: 1200,
                h: 900,
                alt: "Buée et coulures enfermées entre les deux verres d'un double vitrage, joint de vitrage défaillant",
                caption: "Buée entre les deux verres, impossible à essuyer : le vitrage a perdu son étanchéité et se remplace. Photo Michiel1972, CC BY-SA 3.0.",
              }}
            />

            {/* 3. L'humidité vient de la maison */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;humidité vient de la maison, pas de la véranda
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda ne fabrique pas d&apos;eau. Elle recueille celle que produisent ses occupants et le reste du
                logement. Sur nos visites d&apos;hiver, les mêmes sources reviennent presque toujours :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le linge qui sèche', "la véranda est lumineuse, on y installe l'étendoir : tout le linge humide s'évapore dans la pièce la plus froide, et se redépose sur les vitres dans la nuit. C'est la première cause que nous rencontrons."],
                  ['Les plantes', "une véranda très végétalisée, arrosée généreusement, rejette en permanence de la vapeur d'eau, surtout avec des soucoupes pleines et de la terre toujours mouillée."],
                  ['La cuisine ouverte', "quand la véranda prolonge une cuisine, la vapeur des cuissons y passe directement. Une hotte qui recycle l'air au lieu de l'évacuer ne la retire pas."],
                  ['Le chauffage par intermittence', "l'air chauffé le soir se charge d'humidité, puis la pièce refroidit dans la nuit : au petit matin, les parois sont au plus froid et toute cette vapeur se dépose."],
                  ['La porte ouverte sur le séjour', "laissée ouverte sur une véranda peu chauffée, elle fait de la véranda le point froid de toute la maison : l'air tiède et humide du séjour vient y déposer son eau."],
                  ["Un chauffage d'appoint au pétrole ou au gaz", "un poêle mobile sans évacuation rejette de la vapeur d'eau dans la pièce en même temps que de la chaleur. Il aggrave la buée qu'il est censé combattre."],
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
                Pour sortir des impressions, un{' '}
                <strong className="text-primary font-semibold">hygromètre à quelques euros</strong>, posé dans la
                véranda puis dans le séjour, dit si l&apos;air est durablement humide ou si la buée ne survient
                qu&apos;après une lessive ou un repas. Observez surtout les tendances : un taux qui reste haut jour après
                jour, dans les deux pièces, désigne la maison entière ; un taux qui ne grimpe que dans la véranda désigne
                ce qui s&apos;y passe.
              </p>
            </section>

            {/* 4. Ventiler */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ventiler une véranda : ce qui marche, et ce qui ne fait que soulager
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sortir l&apos;air humide et faire entrer de l&apos;air sec, même froid, reste le moyen le plus efficace
                et le moins coûteux. L&apos;air d&apos;hiver, une fois réchauffé, porte beaucoup moins d&apos;eau que
                l&apos;air intérieur : le renouveler assèche la pièce.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Les gestes, d&apos;abord</h3>
              <ul className="space-y-3 mb-5">
                {[
                  ['Aérer court et franchement', "ouvrir grand quelques minutes, plutôt que laisser un ouvrant entrebâillé toute la journée : l'air se renouvelle sans que les parois aient le temps de se refroidir."],
                  ['Chauffer régulièrement', "une température modérée et stable, plutôt que des coups de chaud suivis de nuits froides, garde les parois plus tièdes et limite les dépôts du matin."],
                  ['Déplacer le séchage du linge', "dans une pièce ventilée, ou dehors dès que le temps le permet. C'est souvent le geste qui change le plus de choses."],
                  ['Fermer la porte sur la maison', "quand la véranda n'est pas chauffée, pour qu'elle ne serve pas de piège à l'humidité du séjour."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Les équipements</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une véranda récente bien conçue prévoit des{' '}
                <strong className="text-primary font-semibold">entrées d&apos;air</strong> intégrées aux menuiseries et
                des ouvrants, en partie haute quand c&apos;est possible, pour évacuer l&apos;air chaud et humide qui
                monte. Vérifiez que les vôtres ne sont ni obstruées ni bouchées par la poussière. Selon la configuration
                de la maison, raccorder la véranda à la{' '}
                <strong className="text-primary font-semibold">VMC</strong> existante peut aussi être envisagé, mais cela
                se fait étudier : une VMC est dimensionnée pour un logement donné, et on ne lui ajoute pas une pièce
                sans vérifier qu&apos;elle suit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste le <strong className="text-primary font-semibold">déshumidificateur</strong>. Il retire réellement
                de l&apos;eau de l&apos;air et rend service les semaines les plus humides. Mais soyons clairs : c&apos;est
                un palliatif. Il consomme de l&apos;électricité, ne change rien à la température des parois et ne fait
                qu&apos;absorber ce que l&apos;usage produit. Utilisez-le avec un hygromètre pour juger de son effet. Et
                s&apos;il tourne tout l&apos;hiver sans venir à bout de la buée, ne lui en demandez pas plus :
                c&apos;est la section suivante qui vous concerne.
              </p>
            </section>

            <Figure
              src="/images/blog/condensation-veranda-aluminium-hiver/ouvrant-partie-haute-ventilation-condensation.webp"
              w={1200}
              h={800}
              alt="Ouvrant à projection ouvert en partie haute, vu de l'intérieur, pour ventiler une pièce vitrée et limiter la condensation"
              caption="Un ouvrant en partie haute évacue l'air chaud et humide qui monte : sur une véranda, c'est souvent le premier levier contre la buée."
            />

            {/* 5. Quand c'est la structure */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quand c&apos;est la structure : ce qui se corrige, ce qui ne se corrige pas
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Vous avez aéré, déplacé le linge, chauffé plus régulièrement, et les montants ruissellent toujours.
                Dans ce cas, l&apos;autre terme de l&apos;équation est en cause : la paroi est trop froide. Quatre
                situations reviennent.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Des profilés sans rupture de pont thermique
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;aluminium conduit très bien la chaleur. Un profilé d&apos;un seul tenant, sans barrière isolante
                entre sa face extérieure et sa face intérieure, transmet le froid du dehors jusque dans la pièce : ses
                faces intérieures deviennent les surfaces les plus froides de la véranda, et ruissellent avant les verres.
                Les vérandas récentes utilisent des profilés à{' '}
                <strong className="text-primary font-semibold">rupture de pont thermique</strong>, où une barrière
                isolante coupe le profilé en deux. Cette barrière est intégrée à la fabrication :{' '}
                <strong className="text-primary font-semibold">elle ne se rajoute pas sur une véranda existante</strong>.
                Ni un joint, ni une peinture, ni un nouveau thermolaquage n&apos;y changent rien.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Le simple vitrage</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un verre simple est presque aussi froid que l&apos;extérieur : il condense dès que l&apos;air est un peu
                chargé. Selon les profilés, il est parfois possible de remplacer les verres par des vitrages isolants, à
                condition que les feuillures (le logement du verre dans le profilé) acceptent l&apos;épaisseur et que la
                structure porte le poids supplémentaire. C&apos;est à vérifier sur place, pas à supposer.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                La vieille toiture en polycarbonate
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les plaques alvéolaires anciennes isolent peu, et avec les années l&apos;humidité s&apos;installe parfois
                dans les alvéoles, où elle devient impossible à sécher et où se développent des traces sombres. Remplacer
                la couverture par des panneaux isolants ou un vitrage adapté est souvent possible, si la structure peut
                les recevoir. Les matériaux de couverture et leurs limites sont comparés dans notre article sur{' '}
                <a href="/blog/couverture-pergola-carport-toiture-materiaux" className={lienInterne}>
                  les couvertures de pergola et de carport, du polycarbonate au panneau isolant
                </a>
                .
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">Les joints fatigués</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Des joints de vitrage durcis ou décollés laissent passer de l&apos;air froid, qui refroidit localement
                les profilés, et parfois de l&apos;eau. C&apos;est la bonne nouvelle de cette liste : des joints se
                remplacent. Leur contrôle, avec celui des drainages des profilés, fait partie de la{' '}
                <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                  révision d&apos;automne d&apos;une véranda ou d&apos;une pergola aluminium
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre position est simple : on corrige ce qui se corrige, et on vous dit franchement quand ça ne suffira
                pas. Une véranda aux profilés sans rupture, en simple vitrage et sous polycarbonate fatigué ne deviendra
                pas sèche à force de rustines. Nous détaillons comment décider entre réparer et remplacer dans notre guide
                pour{' '}
                <a href="/blog/remplacer-veranda-ancienne-aluminium-renovation" className={lienInterne}>
                  remplacer une ancienne véranda par une véranda aluminium
                </a>
                , et ce qu&apos;implique un projet neuf (isolation, urbanisme, budget) dans notre article sur{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  la véranda aluminium, de l&apos;isolation au budget
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/condensation-veranda-aluminium-hiver/profile-aluminium-rupture-pont-thermique-coupe.webp"
              w={1200}
              h={800}
              alt="Coupe d'un profilé de menuiserie aluminium à rupture de pont thermique, barrettes isolantes sombres entre les deux demi-profilés"
              caption="Sur la tranche, les barrettes isolantes sombres séparent la face extérieure de la face intérieure du profilé : c'est sur une coupe ou un échantillon qu'on les voit, pas sur une menuiserie posée."
            />

            {/* 6. Condensation ou infiltration */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Condensation ou infiltration ? Le test simple
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                De l&apos;eau au pied d&apos;un vitrage peut venir de l&apos;air intérieur ou de la pluie. Les deux se
                ressemblent, mais ne se traitent pas du tout de la même façon. La question qui tranche est simple :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;eau apparaît-elle par temps sec et froid, ou après la pluie ?
                </strong>
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Elle apparaît par temps sec et froid', "surtout la nuit et au petit matin, sur plusieurs parois à la fois, et disparaît quand la pièce se réchauffe : c'est de la condensation."],
                  ['Elle suit la pluie', "surtout avec du vent, toujours au même endroit, parfois même par temps doux : c'est une infiltration. Les points habituels sont le raccord entre la toiture de la véranda et la façade, les angles de toiture, les chéneaux et les pieds de vitrage."],
                  ['Elle laisse des traces', "une coulure qui part toujours du même point haut, un joint taché, un enduit qui cloque sur la façade intérieure : ces marques orientent vers une infiltration."],
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
                Le protocole tient en deux temps. D&apos;abord, séchez entièrement la zone, essuyez, aérez, et posez une
                feuille d&apos;essuie-tout au pied du vitrage suspect. Ensuite, observez-la après une nuit froide et
                sèche, puis après la prochaine pluie. Si la feuille ne se mouille qu&apos;après la pluie, le problème est
                une étanchéité à reprendre, pas une ventilation à améliorer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une infiltration au niveau des chéneaux ou des drainages bouchés se règle souvent par un entretien, comme
                l&apos;explique notre article sur{' '}
                <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                  l&apos;entretien d&apos;une véranda aluminium avant l&apos;hiver
                </a>
                . Un raccord de façade défaillant, lui, demande l&apos;intervention d&apos;un poseur. Le même
                raisonnement vaut d&apos;ailleurs pour une pergola bioclimatique que l&apos;on referme pour l&apos;hiver :
                l&apos;espace clos devient une petite véranda, avec la même physique, comme nous l&apos;expliquons dans
                notre article pour{' '}
                <a href="/blog/fermer-pergola-bioclimatique-hiver-rideau-verre" className={lienInterne}>
                  fermer une pergola bioclimatique en hiver avec un rideau de verre
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/condensation-veranda-aluminium-hiver/pergola-aluminium-raccord-tuiles-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Couverture mouillée d'une pergola aluminium raccordée sous un rang de tuiles canal, à Saint-Pey-de-Castets en Gironde"
              caption="Chantier L'Esprit Bois à Saint-Pey-de-Castets : la couverture de cette pergola aluminium se glisse sous le rang de tuiles. Sur une véranda, c'est ce même raccord avec la maison qu'on inspecte en premier quand l'eau n'apparaît qu'après la pluie."
            />

            {/* 7. Gironde / Libourne */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                En Gironde, autour de Libourne : un hiver doux, mais humide
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On pourrait croire que nos hivers girondins, plutôt doux, épargnent les vérandas. C&apos;est en partie
                l&apos;inverse. Le froid sec du continent fait peu de buée ; ce qui en fait beaucoup, c&apos;est{' '}
                <strong className="text-primary font-semibold">un air humide qui rencontre une paroi juste un peu froide</strong>
                , et c&apos;est précisément notre climat d&apos;hiver : des pluies régulières, des matinées grises, et
                de l&apos;air qui sèche mal.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, la confluence de la Dordogne et de l&apos;Isle ajoute ses brouillards matinaux, et
                les maisons des vallées, des palus et des bords de rivière les connaissent bien. Les nuits claires entre
                deux passages pluvieux refroidissent fortement les toitures de véranda, et c&apos;est souvent au petit
                matin qui suit que l&apos;on nous appelle. Sur ces terrains, aérer avec de l&apos;air déjà humide demande
                un peu plus de méthode : on choisit les moments les plus secs de la journée, et on ne compte pas sur
                l&apos;aération seule si la pièce sert aussi de buanderie.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est aussi pour cela que, sur nos vérandas neuves en Gironde, nous ne transigeons pas sur les
                profilés à rupture de pont thermique, les vitrages isolants en paroi comme en toiture, et des ouvrants
                prévus pour ventiler. Découvrez notre approche des vérandas et extensions dans notre page{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur en Gironde</a>, voyez
                nos chantiers dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations autour de Libourne</a>, ou{' '}
                <a href="/contact" className={lienInterne}>décrivez-nous votre véranda</a>, photos de la buée à
                l&apos;appui.
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
              Condensation dans une véranda : vos questions
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
              On lit la buée avant de vendre quoi que ce soit
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une véranda qui condense n&apos;est pas forcément une véranda à changer. Souvent, aérer franchement,
              chauffer plus régulièrement et sortir le linge suffisent. Quand ce sont les profilés, le vitrage ou la
              toiture qui sont en cause, mieux vaut le savoir que d&apos;empiler les palliatifs. C&apos;est ce diagnostic
              que nous faisons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans toute la
              Gironde, avant de vous proposer une réparation, une rénovation ou une véranda aluminium neuve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/amenagement-exterieur"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Faire examiner ma véranda
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
