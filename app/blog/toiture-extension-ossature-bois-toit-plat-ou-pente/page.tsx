import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/toiture-extension-ossature-bois-toit-plat-ou-pente/toit-plat-membrane-extension-entre-toitures-tuiles.webp';

export const metadata: Metadata = buildMetadata({
  title: "Toit d'extension ossature bois : plat ou en pente ? Gironde",
  description:
    "Toit plat, monopente ou deux pentes : la toiture d'une extension ossature bois se choisit selon la maison, le PLU et l'usage. Notre méthode en Gironde.",
  keywords:
    'toiture extension ossature bois, toit plat extension bois, extension monopente, extension toit deux pentes, toiture-terrasse sur ossature bois, toit extension bois PLU, extension bois Libourne, extension Gironde PLU toiture, extension ossature bois Gironde',
  path: '/blog/toiture-extension-ossature-bois-toit-plat-ou-pente',
  ogImage: COVER,
  ogTitle: 'Extension en ossature bois : toit plat, monopente ou deux pentes ?',
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
        name: "Toiture d'extension ossature bois",
        item: 'https://lesprit-bois.fr/blog/toiture-extension-ossature-bois-toit-plat-ou-pente',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Extension en ossature bois : toit plat, monopente ou deux pentes ?',
    description:
      "Toit plat, monopente ou deux pentes : la forme de la toiture d'une extension en ossature bois se décide avant le budget, par la maison existante, le PLU de la commune et l'usage. Méthode et cas tranchés, à Libourne et en Gironde.",
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
    datePublished: '2026-11-09',
    dateModified: '2026-11-09',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/toiture-extension-ossature-bois-toit-plat-ou-pente',
    },
    about: [
      { '@type': 'Thing', name: 'toiture extension ossature bois' },
      { '@type': 'Thing', name: 'toit plat' },
      { '@type': 'Thing', name: 'extension maison' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Un toit plat est-il moins cher qu'un toit en pente pour une extension bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas par défaut. Un toit plat économise de la charpente et du volume, mais il demande un support soigné, une étanchéité complète avec ses relevés et des évacuations bien placées. Un monopente en bac acier ou en tuiles peut revenir au même ordre de prix. La comparaison n'a de sens que sur votre maison, devis contre devis.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un toit plat sur ossature bois fuit-il plus facilement ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, s'il est traité comme un ouvrage d'étanchéité à part entière. La norme NF DTU 43.4 encadre les toitures à éléments porteurs en bois avec revêtement d'étanchéité. Les fuites viennent presque toujours de l'eau qui stagne, d'un relevé mal fait contre la maison ou d'une évacuation bouchée, pas du bois lui-même.",
        },
      },
      {
        '@type': 'Question',
        name: "Peut-on faire une terrasse sur le toit plat d'une extension en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "C'est possible, mais c'est un autre ouvrage. Le NF DTU 43.4 ne vise que les toitures inaccessibles, hors cheminements techniques ; une toiture accessible aux piétons relève de recommandations professionnelles complémentaires, avec une structure, une protection de l'étanchéité et des garde-corps adaptés. Il faut le décider dès la conception, jamais après.",
        },
      },
      {
        '@type': 'Question',
        name: 'La mairie peut-elle refuser un toit plat sur mon extension ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, certains PLU réglementent la pente et le matériau des couvertures, et n'autorisent parfois le toit plat que pour les annexes ou les extensions. Le Code de l'urbanisme (article L111-16) empêche en revanche de s'opposer à un dispositif favorisant la retenue des eaux pluviales, sauf dans les secteurs protégés listés à l'article L111-17. Le règlement de votre zone se vérifie en mairie avant de dessiner.",
        },
      },
      {
        '@type': 'Question',
        name: "Quelle forme de toit laisse entrer le plus de lumière dans l'extension ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le monopente, parce qu'il offre un plafond rampant et une façade haute que l'on peut vitrer. Le toit plat compense par des puits de lumière ou un lanterneau, à intégrer dans l'étanchéité dès le départ. Le deux pentes ouvert jusqu'au faîtage donne le plus de volume, mais il est rarement possible contre une maison existante.",
        },
      },
    ],
  },
];

const arbitrage = [
  ['Maison de plain-pied, égout bas, extension profonde', 'Toit plat (toiture chaude)', 'Une pente ne tiendrait pas sous l’égout sans écraser le plafond.'],
  ['Maison à étage, appuis de fenêtres hauts', 'Monopente accordé à la maison', 'La hauteur existe : on la donne au volume et à la lumière.'],
  ['Extension dans l’axe d’un pignon ou volume détaché', 'Deux pentes', 'Le faîtage peut s’aligner, les tuiles se raccordent sans contorsion.'],
  ['Envie d’une terrasse sur le toit', 'Toiture accessible, étudiée à part', 'Ce n’est plus la même norme ni la même structure.'],
  ['Abords de monument ou site protégé', 'Ce que l’architecte des Bâtiments de France accepte', 'L’avis conditionne la forme avant toute préférence.'],
];

const faq = [
  {
    q: "Un toit plat est-il moins cher qu'un toit en pente pour une extension bois ?",
    r: (
      <>
        Pas par défaut. Un toit plat économise de la charpente et du volume, mais il demande un support soigné, une
        étanchéité complète avec ses relevés et des évacuations bien placées. Un monopente en bac acier ou en tuiles
        peut revenir au même ordre de prix. La comparaison n&apos;a de sens que sur votre maison, devis contre devis.
      </>
    ),
  },
  {
    q: 'Un toit plat sur ossature bois fuit-il plus facilement ?',
    r: (
      <>
        Non, s&apos;il est traité comme un ouvrage d&apos;étanchéité à part entière. La norme NF DTU 43.4 encadre les
        toitures à éléments porteurs en bois avec revêtement d&apos;étanchéité. Les fuites viennent presque toujours de
        l&apos;eau qui stagne, d&apos;un relevé mal fait contre la maison ou d&apos;une évacuation bouchée, pas du bois
        lui-même.
      </>
    ),
  },
  {
    q: "Peut-on faire une terrasse sur le toit plat d'une extension en bois ?",
    r: (
      <>
        C&apos;est possible, mais c&apos;est un autre ouvrage. Le NF DTU 43.4 ne vise que les toitures inaccessibles,
        hors cheminements techniques ; une toiture accessible aux piétons relève de recommandations professionnelles
        complémentaires, avec une structure, une protection de l&apos;étanchéité et des garde-corps adaptés. Il faut le
        décider dès la conception, jamais après.
      </>
    ),
  },
  {
    q: 'La mairie peut-elle refuser un toit plat sur mon extension ?',
    r: (
      <>
        Oui, certains PLU réglementent la pente et le matériau des couvertures, et n&apos;autorisent parfois le toit
        plat que pour les annexes ou les extensions. Le Code de l&apos;urbanisme (article L111-16) empêche en revanche
        de s&apos;opposer à un dispositif favorisant la retenue des eaux pluviales, sauf dans les secteurs protégés
        listés à l&apos;article L111-17. Le règlement de votre zone se vérifie en mairie avant de dessiner.
      </>
    ),
  },
  {
    q: "Quelle forme de toit laisse entrer le plus de lumière dans l'extension ?",
    r: (
      <>
        Le monopente, parce qu&apos;il offre un plafond rampant et une façade haute que l&apos;on peut vitrer. Le toit
        plat compense par des puits de lumière ou un lanterneau, à intégrer dans l&apos;étanchéité dès le départ. Le
        deux pentes ouvert jusqu&apos;au faîtage donne le plus de volume, mais il est rarement possible contre une
        maison existante.
      </>
    ),
  },
];

export default function ArticleToitureExtensionOssatureBoisPage() {
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
              alt="Toit plat en membrane d'étanchéité, avec ses relevés, accolé entre les toitures en tuiles d'une maison à Saint-André-de-Cubzac"
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
              <span className="text-secondary-fixed">Toiture d&apos;extension</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Extension en ossature bois : toit plat, monopente ou deux pentes ?
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
              <span>9 novembre 2026</span>
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
                La forme du toit d&apos;une extension en ossature bois ne se choisit pas sur catalogue : elle se lit sur
                la maison existante. Si la hauteur manque sous l&apos;égout ou sous les fenêtres d&apos;étage, c&apos;est
                le toit plat ; si elle existe, le monopente est le meilleur compromis ; le deux pentes se justifie quand
                l&apos;extension prolonge un pignon ou se tient à part. Le PLU de votre commune peut ensuite trancher à
                votre place.
              </strong>{' '}
              Deux idées reçues faussent souvent la discussion : le toit plat ne serait « pas cher » et il serait
              « fragile ». Ni l&apos;un ni l&apos;autre n&apos;est vrai par défaut. Un toit plat sur ossature bois est un
              ouvrage d&apos;étanchéité, avec ses règles ; bien conçu, il tient, mal conçu, il fuit, exactement comme une
              couverture en tuiles mal raccordée. Voici comment nous décidons, sur nos chantiers à Libourne et en
              Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce que la forme décide */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que la forme du toit décide avant le budget
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On demande souvent le prix avant la forme. C&apos;est l&apos;inverse qui fonctionne, parce que la forme
                du toit dépend d&apos;abord d&apos;une contrainte que personne ne choisit :{' '}
                <strong className="text-primary font-semibold">
                  la hauteur disponible contre la maison existante
                </strong>
                . Une extension accolée vient se loger sous quelque chose : l&apos;égout du toit sur une maison de
                plain-pied, les appuis des fenêtres d&apos;étage sur une maison à étage. Le point haut de la nouvelle
                toiture doit rester en dessous, avec la place du raccord.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                À partir de là, tout s&apos;enchaîne. Plus l&apos;extension est profonde, plus une pente consomme de la
                hauteur entre le mur de la maison et la façade opposée, et plus le plafond descend côté jardin. Cinq
                questions décident donc de la forme, bien avant le devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La hauteur sous l’égout ou sous les fenêtres', 'elle fixe le point haut possible de la nouvelle toiture.'],
                  ['Le raccord', 'contre un mur, sous une gouttière ou dans un pan de tuiles : chaque cas appelle un détail différent.'],
                  ['La lumière', 'une façade haute se vitre, un toit plat s’éclaire par le dessus.'],
                  ['Le volume intérieur', 'plafond droit, rampant ou cathédrale ne donnent pas la même pièce.'],
                  ['Le PLU', 'certaines communes imposent pente, matériau ou couleur de couverture.'],
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
                Le budget vient après, et il varie moins avec la forme qu&apos;on ne le croit. Pour les ordres de
                grandeur, notre article sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension en ossature bois
                </a>{' '}
                détaille ce qui fait vraiment varier la note.
              </p>
            </section>

            <Figure
              src="/images/blog/raccord-extension-ossature-bois-maison-existante/extension-ossature-bois-toit-plat-accolee-maison-gironde.jpg"
              w={1600}
              h={1200}
              alt="Extension en ossature bois à toit plat dont l'acrotère passe sous l'égout en tuiles de la maison existante, en Gironde"
              caption="Ici, le haut de l'extension s'arrête juste sous le débord de toit de la maison : c'est cette ligne qui a fixé le point haut de la nouvelle toiture."
            />

            {/* 2. Toit plat */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le toit plat : un ouvrage d&apos;étanchéité sur support bois
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un toit plat sur ossature bois n&apos;est pas une charpente « sans pente » : c&apos;est un support en
                bois ou en panneaux dérivés du bois, recouvert d&apos;un revêtement d&apos;étanchéité. Ce type
                d&apos;ouvrage a sa norme, le NF DTU 43.4 (« Toitures en éléments porteurs en bois et panneaux dérivés
                du bois avec revêtements d&apos;étanchéité »), dont la{' '}
                <a
                  href="https://www.ffbatiment.fr/actualites-batiment/actualite/toitures-terrasses-bois"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fédération française du bâtiment présente le contenu
                </a>
                . Elle distingue deux familles qu&apos;il faut savoir nommer devant un devis :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['La toiture « chaude »', 'l’isolant est posé au-dessus du support bois, sous l’étanchéité. Le support reste du côté chaud et la continuité de l’isolation se traite d’un seul tenant.'],
                  ['La toiture « froide » ventilée', 'la sous-face du support donne sur un espace ventilé, l’isolant étant placé en dessous. Elle suppose une lame d’air réellement ventilée, avec des entrées et des sorties d’air, ce qu’une extension coincée contre la maison ne facilite pas toujours.'],
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
                Sur une extension, nous retenons le plus souvent la toiture chaude, justement parce que la ventilation
                d&apos;une toiture froide est difficile à garantir sur un petit volume adossé. La façon dont on isole le
                reste de l&apos;ossature est traitée dans notre guide sur{' '}
                <a href="/blog/isolation-ossature-bois-entre-montants" className={lienInterne}>
                  l&apos;isolation entre montants
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La règle qui ne se discute pas :{' '}
                <strong className="text-primary font-semibold">l&apos;eau ne doit jamais stagner</strong>. Un toit dit
                plat a toujours une pente de conception, même faible, qui conduit l&apos;eau vers ses évacuations. Le
                support est réglé pour cela, et les évacuations sont dimensionnées et placées avant la pose, pas
                ajoutées à la fin. Pour la suite du parcours de l&apos;eau, de la descente au regard, voyez{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  notre article sur l&apos;évacuation des eaux pluviales
                </a>
                . Le relevé d&apos;étanchéité contre le mur de la maison, lui, est détaillé dans{' '}
                <a href="/blog/raccord-extension-ossature-bois-maison-existante" className={lienInterne}>
                  notre guide du raccord entre extension et maison existante
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier point, souvent mal compris : le NF DTU 43.4 ne vise que les{' '}
                <strong className="text-primary font-semibold">toitures inaccessibles</strong>, hors cheminements
                techniques. Une toiture sur laquelle on marche, la fameuse terrasse sur l&apos;extension, relève de
                recommandations professionnelles complémentaires. C&apos;est un autre ouvrage, avec une autre structure,
                une protection de l&apos;étanchéité et des garde-corps : il se décide au dessin, jamais une fois le toit
                posé.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-toit-plat-bardage-gris-gironde.jpg"
              w={1100}
              h={825}
              alt="Extension en ossature bois à toit plat vue du jardin, bardage horizontal gris, couvertine et descente d'eau pluviale, en Gironde"
              caption="Vu du jardin, un toit plat ne se lit qu'à sa couvertine ; en haut de la descente, la boîte à eau recueille ce que la toiture conduit vers elle."
            />

            {/* 3. Monopente */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le monopente : le compromis le plus fréquent contre une maison girondine
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le monopente est un toit à un seul versant, haut contre la maison, bas côté jardin. C&apos;est la forme
                que nous posons le plus souvent, parce qu&apos;elle répond bien au bâti courant en Gironde : maisons
                couvertes en tuiles, façades enduites ou en pierre, souvent avec un étage ou des combles qui laissent de
                la hauteur sous les fenêtres.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ses atouts sont concrets.{' '}
                <strong className="text-primary font-semibold">
                  L&apos;eau part naturellement loin de la maison
                </strong>
                , vers une gouttière posée côté jardin, et non vers le mur existant. Le plafond peut suivre le rampant et
                donner du volume. Et la couverture se choisit pour dialoguer avec la maison : tuiles accordées, bac acier
                discret, ou membrane si la pente est faible.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sa limite est géométrique. Sur une maison de plain-pied dont l&apos;égout est bas, ou pour une extension
                très profonde, la pente nécessaire au matériau choisi fait descendre la façade côté jardin plus bas
                qu&apos;on ne le voudrait. Quand le plafond côté jardin devient écrasant, nous ne forçons pas : soit on
                change de couverture pour une pente plus faible, soit on passe au toit plat.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/aggrandissement-accueil.webp"
              w={768}
              h={512}
              alt="Extension en ossature bois à toit monopente en tuiles adossée au mur en pierre d'une maison, bardage bois vertical, en Gironde"
              caption="Le versant part du mur en pierre et descend vers le jardin, où la gouttière reprend l'eau loin de la maison."
            />

            {/* 4. Deux pentes */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Deux pentes ou prolongement de la toiture existante : quand ça vaut la peine
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le toit à deux pentes, avec son faîtage, est la forme la plus « maison ». Contre un long pan de façade,
                il est rarement adapté : il faut raccorder une noue à la toiture existante, ce qui multiplie les points
                d&apos;étanchéité, ou monter haut pour loger le faîtage. En revanche, il prend tout son sens dans deux
                situations.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Dans l’axe d’un pignon', 'l’extension prolonge la maison dans sa longueur ; le faîtage s’aligne ou se décale légèrement, les tuiles se raccordent sans contorsion et le volume paraît d’origine.'],
                  ['Pour un volume à part', 'une extension reliée par un passage, ou un bâtiment annexe, retrouve sa propre toiture et la liberté de sa hauteur.'],
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
                Reste le cas du prolongement d&apos;un pan existant : on continue la toiture de la maison vers le bas pour
                couvrir l&apos;extension. Visuellement, c&apos;est la solution la plus discrète. Mais prolonger un pan,
                c&apos;est perdre de la hauteur à mesure qu&apos;on avance : cela ne convient qu&apos;à une extension peu
                profonde, et la reprise de la couverture existante sur la jonction fait partie du chantier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dans tous ces cas, le choix des tuiles compte autant que la forme. Des tuiles neuves de même modèle mais
                de teinte différente se voient pendant des années : nous cherchons l&apos;accord de modèle et de teinte
                avec l&apos;existant, quitte à remanier quelques rangs de la maison pour fondre la jonction.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg"
              w={1200}
              h={900}
              alt="Ossature bois d'extension levée sous le versant en tuiles d'une maison, tuiles déposées en attente sur le toit, chantier à Génissac"
              caption="À Génissac, l'ossature se lève sous le versant de la maison ; les tuiles déposées attendent sur le toit d'être reposées pour fondre la jonction."
            />

            {/* 5. PLU */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que le PLU de votre commune peut imposer (et ce qu&apos;il ne peut pas refuser)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une extension passe par une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable
                </a>{' '}
                ou un{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>{' '}
                selon sa surface et sa zone, et c&apos;est là que la toiture est examinée. Certains PLU réglementent la
                pente des toits, le matériau ou la couleur de la couverture ; certains n&apos;admettent le toit plat que
                pour les annexes ou les extensions, d&apos;autres le refusent dans une zone et l&apos;acceptent dans la
                voisine.{' '}
                <strong className="text-primary font-semibold">
                  D&apos;une commune girondine à l&apos;autre, la règle change
                </strong>
                , et ce qui vaut pour une parcelle de Libourne ne dit rien de celle d&apos;à côté : le règlement de votre
                zone se lit en mairie avant de dessiner. Le détail des formalités est dans notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le PLU n&apos;a pas pour autant tous les pouvoirs. L&apos;article L111-16 du Code de l&apos;urbanisme
                prévoit que, malgré les règles d&apos;aspect extérieur, le permis ou la déclaration préalable ne peut
                s&apos;opposer à l&apos;installation de{' '}
                <strong className="text-primary font-semibold">
                  dispositifs favorisant la retenue des eaux pluviales
                </strong>
                , ni à certains matériaux renouvelables ou équipements de production d&apos;énergie renouvelable (voir{' '}
                <a
                  href="https://www.rapport-congresdesnotaires.fr/2024-rapport-du-120e-congres/impossibilite-pour-le-permis-de-construire-de-sopposer-lutilisation-de-dispositifs-favorisant-la-retenue-des-eaux-pluviales"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  l&apos;analyse du 120e Congrès des notaires
                </a>
                ). Une toiture végétalisée peut constituer un tel dispositif, selon sa conception. L&apos;autorisation
                peut toutefois comporter des prescriptions d&apos;intégration architecturale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce garde-fou a ses exceptions, prévues à l&apos;article L111-17 : abords des monuments historiques, site
                patrimonial remarquable, site inscrit ou classé, et périmètres délibérés par la commune après avis de
                l&apos;architecte des Bâtiments de France. Si votre maison s&apos;y trouve, c&apos;est l&apos;avis de
                l&apos;ABF qui guide la forme du toit, et nous partons de lui.
              </p>
            </section>

            {/* 6. Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Entretien : ce que chaque toit demande dans le temps
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Aucun toit n&apos;est sans entretien, mais aucun ne demande un effort démesuré si l&apos;on connaît ses
                points faibles. Ce ne sont pas les mêmes d&apos;une forme à l&apos;autre :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Toit plat', 'une visite au moins une fois par an et après les gros coups de vent : retirer feuilles et dépôts, dégager les évacuations et les trop-pleins, regarder les relevés contre la maison. Une évacuation bouchée est la première cause d’eau qui stagne.'],
                  ['Toit plat végétalisé', 'en plus, l’entretien de la végétation et la surveillance des bandes stériles autour des évacuations, selon le système retenu.'],
                  ['Monopente', 'nettoyer la gouttière côté jardin, surtout à l’automne sous les arbres, et contrôler le raccord haut contre le mur de la maison.'],
                  ['Deux pentes en tuiles', 'surveiller les tuiles déplacées après une tempête, les mousses sur les versants à l’ombre et la jonction avec la toiture existante.'],
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
                Une remarque de terrain : un toit plat qu&apos;on ne peut pas voir est un toit qu&apos;on oublie. Nous
                prévoyons toujours la façon d&apos;y accéder pour l&apos;entretien, et nous montrons au client où
                regarder. C&apos;est aussi l&apos;un des critères qui comptent quand on hésite entre{' '}
                <a href="/blog/veranda-ou-extension-ossature-bois" className={lienInterne}>
                  véranda et extension en ossature bois
                </a>
                : le toit d&apos;une pièce de vie se surveille, quel qu&apos;il soit.
              </p>
            </section>

            <Figure
              src="/images/blog/toiture-extension-ossature-bois-toit-plat-ou-pente/toit-plat-extension-feuilles-couvertine-evacuation-angle.webp"
              w={900}
              h={900}
              alt="Toit plat bordé d'une couvertine aluminium, feuilles sur la membrane et orifice d'évacuation dans l'angle, au-dessus d'une toiture en tuiles"
              caption="Feuilles et débris se posent vite sur une membrane ; l'orifice ménagé dans l'angle, sous la couvertine, est le premier point à garder dégagé."
            />

            {/* 7. Notre façon de trancher */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Notre façon de trancher, à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Nous ne laissons pas un client choisir une forme de toit sur photo. Nous venons voir la maison, nous
                relevons la hauteur sous l&apos;égout et sous les fenêtres, nous lisons le règlement de la zone, puis
                nous tranchons. Voici nos réponses dans les situations les plus courantes :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Situation</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre conseil</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {arbitrage.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Notre position est franche : quand la hauteur manque,{' '}
                <strong className="text-primary font-semibold">
                  un toit plat bien étanché vaut mieux qu&apos;un monopente écrasé
                </strong>
                , et quand elle existe, le monopente gagne presque toujours en lumière et en volume. Le deux pentes
                reste réservé aux extensions qui le permettent vraiment. Et si vous rêvez d&apos;une terrasse sur le
                toit, nous le disons dès la première visite : c&apos;est un autre ouvrage, que nous étudions comme tel.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est cette méthode que nous appliquons comme{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur ossature bois en Gironde
                </a>
                , de Libourne au reste du département. Vous pouvez voir les toitures que nous avons posées dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a>, découvrir l&apos;ensemble de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a>, ou nous décrire votre
                maison via la{' '}
                <a href="/contact" className={lienInterne}>page contact</a> : une photo de la façade où viendra
                l&apos;extension suffit pour un premier avis.
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
              Toiture d&apos;extension en ossature bois : vos questions
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
              Un toit qui part de votre maison, pas d&apos;un catalogue
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Toit plat, monopente ou deux pentes : la bonne forme est celle que votre maison, votre PLU et votre usage
              rendent évidente, puis que l&apos;on construit dans les règles, étanchéité comprise. C&apos;est le
              diagnostic que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à Libourne et dans
              toute la Gironde, de la lecture du règlement d&apos;urbanisme jusqu&apos;à la dernière tuile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/constructions-bois"
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
