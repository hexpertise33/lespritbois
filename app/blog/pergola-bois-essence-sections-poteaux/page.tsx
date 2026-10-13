import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/blog/pergola-bois-essence-sections-poteaux/pergola-bois-teintee-terrasse-arveyres.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Pergola bois en Gironde : essence, sections et pieds de poteaux',
  description:
    "Pergola bois qui dure : pieds de poteaux hors d'eau, sections dimensionnées, bois de bout protégé, puis le choix de l'essence. Le guide pour la Gironde.",
  keywords:
    'pergola bois, pergola en bois, quel bois pour une pergola, section poteau pergola bois, pied de poteau pergola, pergola douglas, pergola mélèze, pergola bois lamellé-collé, pergola bois Gironde, pergola bois Libourne',
  path: '/blog/pergola-bois-essence-sections-poteaux',
  ogImage: COVER,
  ogTitle: "Pergola en bois : l'essence, les sections et les pieds de poteaux qui la font durer",
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
        name: 'Pergola en bois : essence, sections, poteaux',
        item: 'https://lesprit-bois.fr/blog/pergola-bois-essence-sections-poteaux',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Pergola en bois : l'essence, les sections et les pieds de poteaux qui la font durer",
    description:
      "Une pergola en bois qui vieillit mal pèche rarement par son essence : elle pèche par des pieds de poteaux qui gardent l'eau, des sections trop justes pour la portée et du bois de bout exposé. Essences, bois massif, BMR ou lamellé-collé, dimensionnement, pieds de poteaux, protection des têtes et contexte girondin.",
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
    datePublished: '2026-10-13',
    dateModified: '2026-10-13',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/pergola-bois-essence-sections-poteaux',
    },
    about: [
      { '@type': 'Thing', name: 'pergola bois' },
      { '@type': 'Thing', name: 'pied de poteau' },
      { '@type': 'Thing', name: 'douglas' },
      { '@type': 'Thing', name: 'bois lamellé-collé' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Quel bois choisir pour une pergola extérieure ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pour une pergola hors sol, on vise un bois adapté à la classe d'emploi 3 : douglas ou mélèze purgés d'aubier, pin traité autoclave, ou chêne pour un projet haut de gamme. Seules les pièces qui touchent le sol relèvent de la classe 4. Mais l'essence ne fait pas tout : une pergola en douglas mal conçue vieillira plus mal qu'une pergola en pin autoclave aux pieds de poteaux bien dessinés.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on sceller les poteaux d'une pergola en bois dans le béton ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous le déconseillons. Un poteau noyé dans le béton ou posé à même la dalle garde l'eau contre son bois de bout, qui l'aspire comme une paille : c'est la première cause de pourriture que nous rencontrons. Le poteau doit être décollé du sol sur un pied métallique galvanisé, lui-même ancré dans un massif ou une dalle saine, pour que l'eau s'écoule sous le bois au lieu d'y stagner.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les fentes sur les poteaux de ma pergola sont-elles graves ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Les gerces, ces fentes de retrait qui apparaissent en surface quand le bois sèche, sont normales sur du bois massif extérieur et ne sont pas un défaut de structure. Elles s'ouvrent et se referment avec les saisons. Ce qui doit alerter, c'est une fente qui traverse la pièce, une fente qui garde l'eau sur une face horizontale, ou un bois qui devient mou au toucher.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle section de poteau pour une pergola en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Il n'existe pas de section universelle. Elle dépend de l'essence, de la classe de résistance du bois, de la portée, de la charge portée (couverture, neige, toile, plante grimpante) et de l'exposition au vent. Nous dimensionnons les poteaux, les poutres et les chevrons chantier par chantier, plutôt que de recopier un tableau qui ne connaît ni votre terrain ni votre couverture.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il traiter une pergola en douglas ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un douglas purgé d'aubier, utilisé hors contact du sol et bien conçu pour évacuer l'eau, peut rester brut et griser naturellement. Une lasure ou un saturateur sert surtout à conserver la teinte d'origine. En Gironde, la question des termites se pose en plus : elle se règle à la conception et selon les règles locales, pas par un produit appliqué au hasard.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Quel bois choisir pour une pergola extérieure ?',
    r: (
      <>
        Pour une pergola hors sol, on vise un bois adapté à la classe d&apos;emploi 3 : douglas ou mélèze purgés
        d&apos;aubier, pin traité autoclave, ou chêne pour un projet haut de gamme. Seules les pièces qui touchent le sol
        relèvent de la classe 4. Mais l&apos;essence ne fait pas tout : une pergola en douglas mal conçue vieillira plus
        mal qu&apos;une pergola en pin autoclave aux pieds de poteaux bien dessinés.
      </>
    ),
  },
  {
    q: "Peut-on sceller les poteaux d'une pergola en bois dans le béton ?",
    r: (
      <>
        Nous le déconseillons. Un poteau noyé dans le béton ou posé à même la dalle garde l&apos;eau contre son bois de
        bout, qui l&apos;aspire comme une paille : c&apos;est la première cause de pourriture que nous rencontrons. Le
        poteau doit être décollé du sol sur un pied métallique galvanisé, lui-même ancré dans un massif ou une dalle
        saine, pour que l&apos;eau s&apos;écoule sous le bois au lieu d&apos;y stagner.
      </>
    ),
  },
  {
    q: 'Les fentes sur les poteaux de ma pergola sont-elles graves ?',
    r: (
      <>
        Les gerces, ces fentes de retrait qui apparaissent en surface quand le bois sèche, sont normales sur du bois
        massif extérieur et ne sont pas un défaut de structure. Elles s&apos;ouvrent et se referment avec les saisons. Ce
        qui doit alerter, c&apos;est une fente qui traverse la pièce, une fente qui garde l&apos;eau sur une face
        horizontale, ou un bois qui devient mou au toucher.
      </>
    ),
  },
  {
    q: 'Quelle section de poteau pour une pergola en bois ?',
    r: (
      <>
        Il n&apos;existe pas de section universelle. Elle dépend de l&apos;essence, de la classe de résistance du bois,
        de la portée, de la charge portée (couverture, neige, toile, plante grimpante) et de l&apos;exposition au vent.
        Nous dimensionnons les poteaux, les poutres et les chevrons chantier par chantier, plutôt que de recopier un
        tableau qui ne connaît ni votre terrain ni votre couverture.
      </>
    ),
  },
  {
    q: 'Faut-il traiter une pergola en douglas ?',
    r: (
      <>
        Un douglas purgé d&apos;aubier, utilisé hors contact du sol et bien conçu pour évacuer l&apos;eau, peut rester
        brut et griser naturellement. Une lasure ou un saturateur sert surtout à conserver la teinte d&apos;origine. En
        Gironde, la question des termites se pose en plus : elle se règle à la conception et selon les règles locales,
        pas par un produit appliqué au hasard.
      </>
    ),
  },
];

export default function ArticlePergolaBoisEssenceSectionsPoteauxPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1100"
              height="592"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola en bois massif teinté adossée à une maison, au-dessus d'une terrasse, à Arveyres en Gironde"
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
              <span className="text-secondary-fixed">Pergola en bois : essence, sections, poteaux</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergola bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola en bois : l&apos;essence, les sections et les pieds de poteaux qui la font durer en Gironde
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
              <span>13 octobre 2026</span>
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
                Une pergola en bois qui vieillit mal ne pèche presque jamais par son essence : elle pèche par trois
                détails de conception, des pieds de poteaux qui gardent l&apos;eau, des sections trop justes pour la
                portée, et du bois de bout laissé exposé. Le choix de l&apos;essence vient après.
              </strong>{' '}
              C&apos;est pourtant la première question qu&apos;on nous pose : douglas, mélèze, chêne ou pin autoclave ?
              Elle compte, et nous y répondons plus bas. Mais sur les pergolas abîmées que nous allons voir autour de
              Libourne et dans le reste de la Gironde, le bois en cause est rarement le mauvais : il a simplement été
              placé là où l&apos;eau ne pouvait pas repartir. Voici, dans l&apos;ordre où nous les regardons, les points
              qui font durer une pergola bois.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Ce qui abîme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui abîme vraiment une pergola en bois
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bois extérieur supporte très bien la pluie. Ce qu&apos;il supporte mal, c&apos;est{' '}
                <strong className="text-primary font-semibold">l&apos;eau qui reste</strong>. Un bois mouillé qui
                sèche vite ne craint presque rien ; un bois qui reste humide des semaines finit par offrir aux
                champignons les conditions qu&apos;ils attendent. Sur une pergola, l&apos;eau stagne toujours aux mêmes
                endroits :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['En pied de poteau', "un poteau noyé dans le béton, posé à même la dalle ou enfoncé dans la terre garde l'eau contre sa base en permanence. C'est la cause numéro un des pergolas qui pourrissent par le bas."],
                  ['Sur le bois de bout', "les extrémités coupées d'une pièce (têtes de poteaux, abouts de chevrons et de poutres) absorbent l'eau bien plus vite que les faces, un peu comme une paille. Laissées à plat sous la pluie, elles se dégradent les premières."],
                  ['Dans les assemblages', "une entaille ouverte vers le ciel, un moisage serré sans jour, une platine qui forme cuvette : tout ce qui crée une petite poche où l'eau entre sans pouvoir ressortir."],
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
                À l&apos;inverse, ce qui inquiète souvent nos clients n&apos;est pas grave. Les{' '}
                <strong className="text-primary font-semibold">gerces</strong>, ces fentes de retrait qui
                s&apos;ouvrent en surface d&apos;un poteau massif quand il sèche, sont normales : le cœur et la périphérie
                de la pièce ne sèchent pas au même rythme. Elles s&apos;ouvrent l&apos;été, se referment un peu
                l&apos;hiver, et ne sont pas un défaut de structure. Ce qui doit alerter, c&apos;est une fente
                traversante, une fente sur une face horizontale qui retient l&apos;eau, ou un bois devenu mou sous le
                pouce.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-bois-essence-sections-poteaux/poteau-bois-gerce-retrait-surface.webp"
              w={1200}
              h={800}
              alt="Gerce de retrait verticale sur un poteau en bois massif grisé, bois sain autour de la fente"
              caption="Une gerce suit le fil du bois et se referme en partie l'hiver : tant qu'elle ne traverse pas la pièce et ne retient pas l'eau, elle n'enlève rien à la tenue. Photo Mohamed B. (bangscreative), licence Unsplash."
            />

            {/* Essence */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quel bois pour une pergola : douglas, mélèze, pin autoclave ou chêne ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le bon repère n&apos;est pas l&apos;essence en soi mais la{' '}
                <strong className="text-primary font-semibold">classe d&apos;emploi</strong> visée, qui décrit
                l&apos;exposition du bois à l&apos;humidité (voir les classes d&apos;emploi et la durabilité des
                essences documentées par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">l&apos;institut technologique FCBA</a>).
                Une pergola hors sol, exposée à la pluie mais capable de sécher, relève de la{' '}
                <strong className="text-primary font-semibold">classe 3</strong>. La{' '}
                <strong className="text-primary font-semibold">classe 4</strong> ne concerne que ce qui touche le sol
                ou reste humide en permanence : si vos poteaux sont correctement décollés du sol, la pergola
                n&apos;en a pas besoin.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le douglas', "notre choix le plus fréquent. Résineux local, purgé d'aubier, il convient à une pergola hors sol, se travaille bien et grise joliment. Il est aussi riche en tanins, ce qui compte pour la quincaillerie."],
                  ['Le mélèze', "proche du douglas dans l'usage, avec un grain plus serré et une teinte plus chaude. Même règle : on le veut purgé d'aubier."],
                  ['Le pin traité autoclave', "la solution économique. Le traitement en classe 3 suffit pour la structure aérienne ; la classe 4 se réserve aux pièces en contact avec le sol. Le bois de coupe réalisé sur chantier doit être retraité, sinon on recrée un point faible."],
                  ['Le chêne', "le feuillu noble pour un projet haut de gamme. Durable, dense, très beau, mais lourd, plus cher, et sujet à des fentes marquées en séchant. Ses tanins tachent l'acier non protégé."],
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
                Pour comparer plus finement durabilité, teinte et prix de ces essences, notre guide sur{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  le choix du bois pour une terrasse extérieure
                </a>{' '}
                passe en revue les mêmes bois, et notre article sur{' '}
                <a href="/blog/bois-local-pin-maritime-douglas-gironde" className={lienInterne}>
                  le pin maritime et le douglas de la filière girondine
                </a>{' '}
                explique pourquoi nous privilégions le bois local quand il convient.
              </p>
            </section>

            {/* Massif, BMR, lamellé-collé */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bois massif, BMR ou lamellé-collé : quel produit pour la structure ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À essence égale, la façon dont la pièce est fabriquée change son comportement. Le{' '}
                <strong className="text-primary font-semibold">bois massif</strong> d&apos;une seule pièce reste la
                solution naturelle pour les sections courantes. Plus la section grossit, plus il a tendance à se fendre
                et à se déformer en séchant, parce qu&apos;une grosse pièce sèche lentement et inégalement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le <strong className="text-primary font-semibold">BMR (bois massif reconstitué)</strong> répond
                précisément à ce problème : il est composé de 2 à 5 lamelles collées et s&apos;emploie à la place du
                massif de forte section pour limiter fentes et déformations, comme le décrit{' '}
                <a
                  href="https://franceboisforet.fr/wp-content/uploads/2024/04/Fiches-Produit-7-BMR_8-pages_2018.pdf"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  la fiche produit BMR de France Bois Forêt
                </a>. Pour des poteaux et des poutres de pergola de belle section, c&apos;est souvent notre choix : on
                garde l&apos;aspect du bois massif avec une pièce plus stable.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le <strong className="text-primary font-semibold">lamellé-collé</strong>, fait de nombreuses lamelles,
                prend le relais pour les grandes portées, quand une poutre doit franchir une terrasse sans poteau
                intermédiaire. Il n&apos;est pas pour autant à l&apos;abri des fentes : l&apos;Agence Qualité
                Construction signale, dans{' '}
                <a
                  href="https://qualiteconstruction.com/wp-content/uploads/2024/01/fi-pathologie-batiment-c03-charpentes-lamelle-colle-fissuration-rupture.pdf"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  sa fiche pathologie sur les charpentes en lamellé-collé
                </a>, les fissurations des essences à fort retrait exposées au soleil. Sur une pergola, la poutre est
                justement en plein soleil : l&apos;essence, la protection des faces supérieures et le débord de
                couverture se choisissent en conséquence.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-bois-essence-sections-poteaux/bois-lamelle-colle-bois-de-bout-lamelles.webp"
              w={1200}
              h={900}
              alt="Bois de bout d'une pièce en lamellé-collé : lamelles collées superposées et fentes de séchage"
              caption="Les lignes horizontales sont les plans de collage entre lamelles. Même en lamellé-collé, le bois de bout laissé à l'air se fend en séchant : il se protège comme celui d'une pièce massive. Photo メルビル, CC BY-SA 3.0, via Wikimedia Commons."
            />

            {/* Sections et portées */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sections et portées : pourquoi nous ne donnons pas de tableau
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On trouve en ligne des tableaux qui associent une portée à une section de poteau ou de poutre. Nous
                n&apos;en publions pas, parce qu&apos;un tel tableau ignore presque tout ce qui fait le calcul :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;essence, la classe de résistance du bois, la charge et le vent.
                </strong>{' '}
                Or la charge d&apos;une pergola varie du tout au tout. Une pergola à claire-voie nue ne porte presque
                rien ; la même avec une couverture fixe doit reprendre son poids et la neige éventuelle ; une toile
                tendue ou une plante grimpante adulte ajoutent du poids et de la prise au vent. L&apos;exposition du
                terrain, abrité entre deux maisons ou ouvert sur une plaine, change encore la donne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une section trop juste ne casse pas du jour au lendemain. Elle se trahit par des signes qu&apos;on
                apprend vite à reconnaître :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La flèche', "une poutre ou des chevrons qui s'affaissent visiblement en leur milieu, et qui continuent à descendre au fil des années."],
                  ['Le vrillage', "une pièce qui tourne sur elle-même en séchant et entraîne les assemblages, signe fréquent d'un bois trop élancé pour sa longueur."],
                  ['Le jeu dans les assemblages', "une structure qui bouge à la main ou sous le vent, des vis qui travaillent, des liaisons qui s'ouvrent."],
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
                Notre méthode est donc simple :{' '}
                <strong className="text-primary font-semibold">
                  nous dimensionnons chaque pergola pour son chantier,
                </strong>{' '}
                à partir de la portée réelle, de la couverture prévue (ou envisagée plus tard), de l&apos;usage et de
                l&apos;exposition. Si vous pensez ajouter une toile ou une couverture dans quelques années, dites-le dès
                le départ : c&apos;est à ce moment-là que la section se décide, pas après.
              </p>
            </section>

            {/* Pied de poteau */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le pied de poteau, point faible numéro un
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                S&apos;il ne fallait retenir qu&apos;une règle, ce serait celle-ci :{' '}
                <strong className="text-primary font-semibold">
                  un poteau de pergola ne se noie jamais dans le béton et ne se pose jamais à même la dalle.
                </strong>{' '}
                Dans les deux cas, le bois de bout du poteau reste au contact d&apos;une surface qui garde l&apos;eau.
                Il l&apos;aspire, ne sèche jamais, et pourrit de l&apos;intérieur pendant que l&apos;extérieur paraît
                sain. Le jour où l&apos;on s&apos;en aperçoit, le poteau est à changer.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La bonne pratique consiste à{' '}
                <strong className="text-primary font-semibold">
                  décoller le poteau du sol sur un pied métallique galvanisé,
                </strong>{' '}
                de façon que le bois de bout ne touche rien et que l&apos;eau de ruissellement s&apos;écoule en
                dessous au lieu de stagner. Le pied choisi ne doit pas lui-même former une cuvette sous le poteau, et
                l&apos;air doit pouvoir circuler autour de la base. Le bois de bout du poteau reçoit en plus un produit
                de protection adapté à l&apos;essence avant la pose.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le pied métallique ne vaut que ce que vaut son support. Nous l&apos;ancrons dans un{' '}
                <strong className="text-primary font-semibold">massif béton</strong> coulé pour l&apos;ouvrage ou dans
                une <strong className="text-primary font-semibold">dalle saine</strong> dont nous avons vérifié
                l&apos;état. Des pavés sur sable, un carrelage sur un support douteux ou une dalle fissurée ne sont pas
                des ancrages : on reprend le support, ou on va chercher le bon sol en dessous.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-bois-essence-sections-poteaux/pergola-bois-poteaux-pieds-metalliques-plots-beton.webp"
              w={900}
              h={660}
              alt="Poteaux de pergola en bois massif grisé surélevés sur des pieds métalliques ancrés dans des plots béton"
              caption="Sur cette pergola d'exposition, à notre dépôt, chaque poteau repose sur une platine montée sur tige, elle-même ancrée dans un plot béton : le bois de bout reste à quelques centimètres au-dessus du sol, au sec et à l'air."
            />

            {/* Protéger le haut */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Protéger le haut : têtes de poteaux, chevrons et quincaillerie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une fois le pied réglé, l&apos;eau attaque par le haut. Toutes les extrémités tournées vers le ciel
                sont du bois de bout exposé, et elles se traitent par le dessin plus que par le produit :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les têtes de poteaux', "coiffées d'un chapeau ou coupées en biseau pour que l'eau ne s'y pose pas."],
                  ['Les abouts de chevrons et de poutres', "coupés en biseau ou en pente, et laissés en débord plutôt que pris dans un assemblage fermé."],
                  ['Les débords', "une couverture ou une poutre qui déborde protège les pièces du dessous de la pluie directe et d'une partie du soleil."],
                  ['Les assemblages', "dessinés pour que l'eau ressorte : pas d'entaille ouverte vers le haut, un jour entre les pièces moisées, des faces supérieures qui ne forment pas de replat."],
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
                Reste la <strong className="text-primary font-semibold">quincaillerie</strong>. Vis, boulons,
                équerres et sabots doivent être en inox ou en acier galvanisé. Ce n&apos;est pas qu&apos;une question de
                rouille : le chêne et le douglas sont riches en tanins, qui réagissent avec l&apos;acier non protégé et
                laissent des coulures noires sur le bois. Une pergola bien conçue avec des vis bon marché se retrouve
                tachée dès le premier hiver.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-bois-essence-sections-poteaux/pergola-bois-tete-poteau-equerre-acier-arveyres.webp"
              w={540}
              h={500}
              alt="Têtes de poteaux d'une pergola en bois coiffées d'équerres en acier boulonnées, à Arveyres en Gironde"
              caption="Sur cette pergola posée à Arveyres, une pièce d'acier coiffe chaque tête de poteau : le bois de bout tourné vers le ciel ne reçoit plus la pluie, et l'assemblage reste boulonné et démontable."
            />

            {/* Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Une pergola bois en Gironde : soleil, humidité et termites
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne et dans toute la Gironde, une pergola en bois encaisse deux saisons très
                différentes. L&apos;<strong className="text-primary font-semibold">été</strong> est chaud et
                ensoleillé : les faces exposées sèchent vite, les gerces s&apos;ouvrent et les grosses sections
                travaillent. L&apos;<strong className="text-primary font-semibold">hiver</strong> est doux mais humide :
                c&apos;est là que les défauts de conception se paient, quand le bois ne sèche plus entre deux averses.
                Une pergola bien dessinée traverse ces deux saisons sans dommage ; une pergola qui piège l&apos;eau
                accumule les hivers.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La Gironde est aussi concernée par les{' '}
                <strong className="text-primary font-semibold">termites</strong>. Un poteau décollé du sol, un bois
                adapté et une base visible et dégagée sont déjà une bonne partie de la prévention. Nous détaillons les
                précautions propres à notre département dans{' '}
                <a href="/blog/termites-gironde-ouvrage-bois-prevention" className={lienInterne}>
                  notre article sur les termites et les ouvrages bois en Gironde
                </a>. Pour l&apos;entretien courant (nettoyage, saturateur, contrôle des pieds et des fixations), notre
                guide pour{' '}
                <a href="/blog/traiter-bois-exterieur-avant-hiver" className={lienInterne}>
                  traiter le bois extérieur avant l&apos;hiver
                </a>{' '}
                donne le bon calendrier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté urbanisme, une pergola peut relever d&apos;une formalité selon sa surface, sa couverture et le
                PLU de votre commune. Les règles changent d&apos;une commune à l&apos;autre : notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>{' '}
                fait le point, et nous vérifions la situation avant chaque projet.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, en toute transparence : nous posons aussi des pergolas aluminium et bioclimatiques. Si vous
                hésitez encore sur la matière, notre comparatif{' '}
                <a href="/blog/pergola-bois-ou-bioclimatique" className={lienInterne}>
                  pergola bois ou bioclimatique
                </a>{' '}
                vous aide à trancher selon votre usage. Si c&apos;est le bois, retrouvez notre approche des{' '}
                <a href="/pergolas" className={lienInterne}>pergolas sur mesure</a>, l&apos;ensemble de nos ouvrages d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>, et{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            <Figure
              src="/images/blog/pergola-bois-essence-sections-poteaux/pergola-bois-allee-plantes-jardin.webp"
              w={1200}
              h={859}
              alt="Longue pergola en bois brut grisé au-dessus d'une allée de jardin, chevrons croisés et suspensions fleuries"
              caption="Laissé brut, le bois grise en quelques saisons sans perdre sa tenue. Suspensions, plantes grimpantes ou toile ajoutent du poids et de la prise au vent : elles se prévoient dès le dimensionnement. Photo Gene Samit, licence Pexels."
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
              Pergola en bois : vos questions
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
              Une pergola bois qui dure se dessine avant de se choisir
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Des pieds de poteaux hors d&apos;eau, des sections calculées pour votre portée et votre couverture, du bois
              de bout protégé en haut comme en bas : c&apos;est ce qui fait durer une pergola en bois, bien plus que le nom
              de l&apos;essence. C&apos;est ce que nous dessinons et posons chez L&apos;Esprit Bois, entreprise qualifiée
              Qualibat, à Libourne et dans toute la Gironde, du choix du bois jusqu&apos;à l&apos;ancrage du dernier
              poteau.
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
