import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/source-adefrance/construction-pool-house-aluminium-libourne-2.webp';

export const metadata: Metadata = buildMetadata({
  title: "Teinte RAL aluminium : bien la choisir | L'Esprit Bois",
  description:
    "Quelle teinte RAL pour une pergola, un carport ou un garde-corps en aluminium ? Nuancier, finitions mat ou sablé, teintes qui vieillissent bien.",
  keywords:
    "teinte RAL aluminium, couleur RAL menuiserie aluminium, thermolaquage aluminium, RAL 7016 gris anthracite, nuancier RAL Classic, finition sablée aluminium, pergola aluminium teinte Libourne, aluminium thermolaqué Gironde, choisir couleur aluminium extérieur",
  path: '/blog/choisir-teinte-ral-aluminium',
  ogImage: COVER,
  ogTitle:
    "Choisir la teinte RAL de son aluminium : nuancier, finitions et teintes qui vieillissent bien en Gironde",
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
        <figure key={img.src}>
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
        name: "Choisir la teinte RAL de son aluminium",
        item: 'https://lesprit-bois.fr/blog/choisir-teinte-ral-aluminium',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Choisir la teinte RAL de son aluminium : nuancier, finitions et teintes qui vieillissent bien en Gironde",
    description:
      "Comment arrêter la couleur d'une pergola, d'un carport ou d'un garde-corps en aluminium : lire un code du nuancier RAL Classic, comprendre ce que le thermolaquage change, arbitrer entre finition mat, satinée et sablée, anticiper l'effet d'une teinte foncée en plein sud, accorder l'ouvrage au bâti girondin et raccorder plusieurs ouvrages posés à des dates différentes.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: AUTEUR_REF,
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/images/source-adefrance/logo2026.png',
        width: 350,
        height: 150,
      },
    },
    datePublished: '2026-08-06',
    dateModified: '2026-08-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/choisir-teinte-ral-aluminium',
    },
    about: [
      { '@type': 'Thing', name: 'teinte RAL aluminium' },
      { '@type': 'Thing', name: 'thermolaquage' },
      { '@type': 'Thing', name: 'finition aluminium' },
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'carport aluminium' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quelle teinte RAL choisir pour une pergola ou un carport en aluminium ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Partez de trois critères, dans cet ordre : la finition (mate, satinée ou sablée), qui change davantage l'aspect final que le code lui-même ; l'exposition de l'ouvrage, une teinte foncée en plein sud chauffant plus qu'une teinte claire ; et le raccord avec vos menuiseries existantes plutôt qu'avec la couleur des murs. Les gris moyens et anthracites, les bruns et les teintes désaturées sont ceux qui vieillissent le plus discrètement sous notre climat girondin. Et jugez toujours sur un échantillon de profilé regardé dehors, jamais sur un écran.",
        },
      },
      {
        '@type': 'Question',
        name: "Le RAL 7016 gris anthracite est-il toujours le bon choix ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le RAL 7016 est le gris anthracite devenu le réflexe majoritaire en menuiserie et en aménagement extérieur : il est contemporain, il pardonne la poussière et il s'accorde à presque tout. Ce n'est pas pour autant le bon choix partout. Sur une façade en pierre blonde ou un enduit très clair, il peut créer un contraste dur ; un gris moyen, un brun ou un bronze s'y intègre souvent mieux. Il est aussi, par définition, la teinte la plus répandue : si vous cherchez à vous démarquer, regardez au moins deux autres échantillons avant de le retenir.",
        },
      },
      {
        '@type': 'Question',
        name: "Mat, satiné ou sablé : quelle finition tient le mieux dehors ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le satiné renvoie la lumière et donne de la profondeur à la teinte, mais il marque davantage les traces de doigts et les coulures de pluie. Le mat profond est très demandé pour son rendu contemporain, mais il montre la poussière et rend les micro-rayures plus visibles. Le sablé ou texturé, avec son grain fin, est celui qui pardonne le mieux : il casse la lumière, dissimule les traces et supporte mieux le nettoyage. C'est la finition que nous conseillons le plus souvent sur un carport ou une pergola exposés.",
        },
      },
      {
        '@type': 'Question',
        name: "Qualicoat et Qualimarine : que couvrent ces labels de thermolaquage ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Qualicoat est un label international qui encadre le laquage de l'aluminium : préparation de surface, peinture employée et process d'application. Qualimarine est une certification française délivrée par l'ADAL, qui ajoute un contrôle en amont sur l'alliage lui-même, notamment ses teneurs en cuivre et en fer, et vise les ambiances marines ou agressives. Demandez à votre poseur la certification de son laqueur, et faites écrire sur le devis la garantie annoncée sur le laquage : elle varie selon le laqueur et selon le produit.",
        },
      },
      {
        '@type': 'Question',
        name: "Une teinte foncée chauffe-t-elle davantage au soleil ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Une teinte foncée absorbe une plus grande part du rayonnement solaire et fait monter la température du profilé en été, ce qui est très sensible en Gironde sur une exposition plein sud. Deux conséquences pratiques : le profilé d'une pergola anthracite est chaud au toucher l'après-midi, et sur de grandes pièces sombres une dilatation différentielle peut provoquer un effet bilame, c'est-à-dire une déformation temporaire et réversible. Cela ne condamne pas les teintes foncées, mais impose d'anticiper les jeux et les cales de dilatation à la pose, surtout sur les grandes portées et les lames orientables.",
        },
      },
      {
        '@type': 'Question',
        name: "Une rayure sur un profilé thermolaqué se répare-t-elle ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une rayure superficielle se retouche localement, au stylo ou à l'aérosol de retouche dans la teinte exacte de l'ouvrage : c'est rapide et cela protège le profilé. Soyons honnêtes, la retouche se voit toujours un peu, surtout en finition mate où la reprise capte la lumière différemment du reste. Pour un rendu parfait, il faut déposer la pièce et la faire relaquer en atelier, ce qui suppose de la démonter. Demandez systématiquement un flacon de retouche à la livraison et notez le code RAL et la finition quelque part : vous les chercherez dans dix ans.",
        },
      },
    ],
  },
];

const finitions = [
  [
    'Satinée (légèrement brillante)',
    'Renvoie la lumière, densifie la teinte, rendu « menuiserie »',
    'Marque les traces de doigts et les coulures de pluie',
    'Menuiseries, garde-corps peu exposés, ouvrages abrités',
  ],
  [
    'Mate profonde',
    'Rendu contemporain, très demandé, absorbe la lumière',
    'Montre la poussière, les micro-rayures se voient plus',
    'Ouvrages abrités, façades à l’ombre, projets très dessinés',
  ],
  [
    'Sablée / texturée (grain fin)',
    'Casse la lumière, dissimule traces et micro-rayures',
    'Aspect moins « lisse », grain visible de près',
    'Carport, pergola, garde-corps : tout ce qui est plein vent',
  ],
];

const faq = [
  {
    q: "Quelle teinte RAL choisir pour une pergola ou un carport en aluminium ?",
    r: (
      <>
        Partez de trois critères, dans cet ordre : la finition (mate, satinée ou sablée), qui change davantage
        l&apos;aspect final que le code lui-même ; l&apos;exposition de l&apos;ouvrage, une teinte foncée en plein sud
        chauffant plus qu&apos;une teinte claire ; et le raccord avec vos menuiseries existantes plutôt qu&apos;avec la
        couleur des murs. Les gris moyens et anthracites, les bruns et les teintes désaturées sont ceux qui vieillissent
        le plus discrètement sous notre climat girondin. Et jugez toujours sur un échantillon de profilé regardé dehors,
        jamais sur un écran.
      </>
    ),
  },
  {
    q: "Le RAL 7016 gris anthracite est-il toujours le bon choix ?",
    r: (
      <>
        Le RAL 7016 est le gris anthracite devenu le réflexe majoritaire en menuiserie et en aménagement extérieur : il
        est contemporain, il pardonne la poussière et il s&apos;accorde à presque tout. Ce n&apos;est pas pour autant le
        bon choix partout. Sur une façade en pierre blonde ou un enduit très clair, il peut créer un contraste dur ; un
        gris moyen, un brun ou un bronze s&apos;y intègre souvent mieux. Il est aussi, par définition, la teinte la plus
        répandue : si vous cherchez à vous démarquer, regardez au moins deux autres échantillons avant de le retenir.
      </>
    ),
  },
  {
    q: "Mat, satiné ou sablé : quelle finition tient le mieux dehors ?",
    r: (
      <>
        Le satiné renvoie la lumière et donne de la profondeur à la teinte, mais il marque davantage les traces de doigts
        et les coulures de pluie. Le mat profond est très demandé pour son rendu contemporain, mais il montre la
        poussière et rend les micro-rayures plus visibles. Le sablé ou texturé, avec son grain fin, est celui qui pardonne
        le mieux : il casse la lumière, dissimule les traces et supporte mieux le nettoyage. C&apos;est la finition que
        nous conseillons le plus souvent sur un carport ou une pergola exposés.
      </>
    ),
  },
  {
    q: "Qualicoat et Qualimarine : que couvrent ces labels de thermolaquage ?",
    r: (
      <>
        Qualicoat est un label international qui encadre le laquage de l&apos;aluminium : préparation de surface,
        peinture employée et process d&apos;application. Qualimarine est une certification française délivrée par
        l&apos;ADAL, qui ajoute un contrôle en amont sur l&apos;alliage lui-même, notamment ses teneurs en cuivre et en
        fer, et vise les ambiances marines ou agressives. Demandez à votre poseur la certification de son laqueur, et
        faites écrire sur le devis la garantie annoncée sur le laquage : elle varie selon le laqueur et selon le produit.
      </>
    ),
  },
  {
    q: "Une teinte foncée chauffe-t-elle davantage au soleil ?",
    r: (
      <>
        Oui. Une teinte foncée absorbe une plus grande part du rayonnement solaire et fait monter la température du
        profilé en été, ce qui est très sensible en Gironde sur une exposition plein sud. Deux conséquences pratiques :
        le profilé d&apos;une pergola anthracite est chaud au toucher l&apos;après-midi, et sur de grandes pièces sombres
        une dilatation différentielle peut provoquer un effet bilame, c&apos;est-à-dire une déformation temporaire et
        réversible. Cela ne condamne pas les teintes foncées, mais impose d&apos;anticiper les jeux et les cales de
        dilatation à la pose, surtout sur les grandes portées et les lames orientables.
      </>
    ),
  },
  {
    q: "Une rayure sur un profilé thermolaqué se répare-t-elle ?",
    r: (
      <>
        Une rayure superficielle se retouche localement, au stylo ou à l&apos;aérosol de retouche dans la teinte exacte
        de l&apos;ouvrage : c&apos;est rapide et cela protège le profilé. Soyons honnêtes, la retouche se voit toujours
        un peu, surtout en finition mate où la reprise capte la lumière différemment du reste. Pour un rendu parfait, il
        faut déposer la pièce et la faire relaquer en atelier, ce qui suppose de la démonter. Demandez systématiquement
        un flacon de retouche à la livraison et notez le code RAL et la finition quelque part : vous les chercherez dans
        dix ans.
      </>
    ),
  },
];

export default function ArticleTeinteRalAluminiumPage() {
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
              alt="Pool-house couvert par une structure en aluminium thermolaqué gris anthracite, teinte RAL foncée posée contre un parement de pierre claire, en Gironde"
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
              <span className="text-secondary-fixed">Teinte RAL aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Choisir la teinte RAL de son aluminium : nuancier, finitions et teintes qui vieillissent bien en Gironde
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
              <span>6 août 2026</span>
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
                Une teinte d&apos;aluminium ne se choisit pas vraiment sur un nuancier : elle se choisit sur trois
                critères. La finition d&apos;abord (mate, satinée ou sablée), qui change plus l&apos;aspect final que
                le code RAL lui-même. L&apos;exposition ensuite : une teinte foncée plein sud chauffe et dilate. Le
                raccord au bâti enfin, c&apos;est-à-dire l&apos;accord avec vos menuiseries déjà posées bien plus
                qu&apos;avec la couleur de vos murs.
              </strong>{' '}
              Le gris anthracite RAL 7016 est devenu le réflexe majoritaire sur nos chantiers autour de Libourne, et il
              rend d&apos;excellents services. Mais ce n&apos;est pas toujours le bon choix, et c&apos;est une décision
              qu&apos;on ne prend qu&apos;une fois : contrairement à un ouvrage en bois qu&apos;on peut repeindre,
              changer la teinte d&apos;un profilé thermolaqué suppose de le déposer. Autant y passer une heure de plus
              au moment du devis.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Lire un code RAL */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lire un code RAL sans se tromper
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le nuancier de référence dans la menuiserie et la construction est le{' '}
                <strong className="text-primary font-semibold">RAL Classic</strong>, qui rassemble 213 teintes standard
                identifiées par un code à quatre chiffres. Ce code n&apos;est pas arbitraire :{' '}
                <strong className="text-primary font-semibold">le premier chiffre désigne la famille de couleur</strong>,
                les trois suivants la teinte précise à l&apos;intérieur de cette famille.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['1xxx', 'les jaunes et les beiges, la famille des teintes sable, très utilisée pour s’accorder aux enduits clairs.'],
                  ['5xxx', 'les bleus, de l’azur au bleu nuit.'],
                  ['6xxx', 'les verts, du vert pâle au vert sapin, souvent imposés en secteur protégé.'],
                  ['7xxx', 'les gris, la famille la plus demandée en extérieur, dont le fameux RAL 7016, gris anthracite.'],
                  ['9xxx', 'les blancs et les noirs, du blanc pur au noir profond.'],
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
                Savoir cela suffit à décoder n&apos;importe quel devis. Mais voici le piège dans lequel tombent la
                plupart de nos clients :{' '}
                <strong className="text-primary font-semibold">
                  un même code RAL rendu en finition mate ou en finition sablée ne donne pas le même objet.
                </strong>{' '}
                Deux pergolas en RAL 7016 peuvent paraître franchement différentes selon la poudre employée. Un code de
                teinte, seul, ne décrit donc pas un aspect. Sur un devis, exigez toujours{' '}
                <strong className="text-primary font-semibold">le code RAL et la finition</strong>, écrits noir sur
                blanc.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Dernier réflexe, et il n&apos;est pas négociable : ne jugez jamais une teinte sur un écran ni sur une
                impression de catalogue. Un écran ne restitue ni la vraie couleur ni, surtout, la façon dont la surface
                accroche la lumière. Demandez un{' '}
                <strong className="text-primary font-semibold">échantillon de profilé réel</strong>, sortez-le dehors,
                regardez-le au soleil du matin, à l&apos;ombre de midi et au crépuscule, posé contre votre façade et
                contre vos menuiseries existantes. Une teinte qui vous plaît en boutique et vous déçoit chez vous, c&apos;est
                presque toujours une teinte qu&apos;on n&apos;a pas regardée dehors.
              </p>
            </section>

            <Figure
              src="/images/blog/choisir-teinte-ral-aluminium/echantillons-profiles-aluminium-thermolaque-teinte-ral.webp"
              w={1200}
              h={800}
              alt="Échantillons de profilés en aluminium thermolaqué comparés dehors avant d'arrêter une teinte RAL"
              caption="Un échantillon de profilé montre les deux faces et la coupe : c'est là qu'on lit la teinte réelle, la finition, et qu'on voit si l'intérieur peut recevoir une autre couleur."
            />

            {/* 2. Le thermolaquage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sous la couleur, le thermolaquage : ce qui décide vraiment de la tenue
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La couleur d&apos;un profilé aluminium n&apos;est pas une peinture appliquée au pinceau. C&apos;est un{' '}
                <strong className="text-primary font-semibold">thermolaquage</strong> : une poudre polyester est
                projetée sur le profilé puis cuite au four, où elle polymérise et forme un revêtement solidaire du métal.
                Avant cela, le profilé passe par une préparation, dégraissage puis traitement de surface, dont
                dépend l&apos;accrochage de la poudre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Retenez ceci, parce que c&apos;est contre-intuitif :{' '}
                <strong className="text-primary font-semibold">
                  ce n&apos;est pas la teinte qui décide de la tenue dans le temps, c&apos;est la préparation et
                  l&apos;accrochage.
                </strong>{' '}
                Un anthracite mal préparé vieillira moins bien qu&apos;un rouge vif correctement laqué. La question à
                poser à votre poseur n&apos;est donc pas « est-ce que cette couleur tient ? » mais « qui laque, et selon
                quel référentiel ? ».
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Deux repères existent, et ils ne couvrent pas la même chose :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Qualicoat', 'label international qui encadre le laquage lui-même : la préparation de surface, la peinture employée et le process d’application chez le laqueur.'],
                  ['Qualimarine', 'certification française délivrée par l’ADAL, qui vient en complément et ajoute un contrôle en amont sur l’alliage, notamment ses teneurs en cuivre et en fer. Elle vise les ambiances marines et les atmosphères agressives.'],
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
                En Gironde, la question se pose surtout pour les projets proches de l&apos;estuaire ou du littoral, où
                l&apos;air chargé de sel est bien plus agressif pour un revêtement que la pluie de l&apos;arrière-pays,{' '}
                <a
                  href="https://www.qualimarine.fr/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  la certification Qualimarine
                </a>{' '}
                détaille ce qu&apos;elle couvre. Autour de Libourne, en zone de vignes et de rivière, la contrainte est
                moindre, mais nous demandons quand même la certification du laqueur : cela ne coûte rien de vérifier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un mot sur les garanties, parce qu&apos;on lit tout et n&apos;importe quoi à ce sujet :{' '}
                <strong className="text-primary font-semibold">
                  la garantie annoncée sur un laquage varie selon le laqueur, selon le produit et selon
                  l&apos;environnement d&apos;exposition
                </strong>
                . Nous ne vous donnerons pas de durée dans un article de blog. Demandez-la à votre fournisseur et,
                surtout, faites-la écrire sur le devis avec ses conditions, une garantie orale ne vaut rien le jour où
                une teinte ternit.
              </p>
            </section>

            {/* 3. Finitions */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Mat, satiné, sablé, texturé : la finition change tout
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le paragraphe le plus utile de cet article. Sur un ouvrage extérieur,{' '}
                <strong className="text-primary font-semibold">
                  la finition pèse plus lourd dans le rendu quotidien que le code RAL
                </strong>,
                parce qu&apos;elle décide de la façon dont la surface se salit, se raye et renvoie la lumière.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Finition</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;elle apporte</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qu&apos;elle montre</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre usage privilégié</th>
                    </tr>
                  </thead>
                  <tbody>
                    {finitions.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Notre recommandation, dite franchement :{' '}
                <strong className="text-primary font-semibold">
                  sur un carport ou une pergola en plein vent, nous conseillons le sablé ou le texturé dans la très
                  grande majorité des cas.
                </strong>{' '}
                Le grain fin casse la lumière, dissimule les micro-rayures inévitables d&apos;un ouvrage qu&apos;on
                frôle, et fait disparaître les traces de nettoyage. Le mat profond est magnifique le jour de la pose,
                mais il est impitoyable : sur un poteau de carport que l&apos;on touche en descendant de voiture, chaque
                trace se voit.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le satiné garde tout son sens sur des ouvrages plus abrités ou plus « menuiserie » : un garde-corps sous
                casquette, une verrière intérieure, des profilés qu&apos;on veut voir densifiés par la lumière. Et si
                vous hésitez, demandez le même code RAL en deux finitions sur deux échantillons : la différence saute
                aux yeux en dix secondes, dehors.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/blog/choisir-teinte-ral-aluminium/profile-aluminium-thermolaque-anthracite-face-laquee.webp',
                alt: "Profilé en aluminium thermolaqué gris anthracite tenu en main, face laquée et coupe du profilé visibles",
                caption:
                  'Une face laquée lisse capte un reflet doux et densifie la teinte : très beau le jour de la pose, impitoyable avec les traces de doigts.',
                w: 1200,
                h: 900,
              }}
              b={{
                src: '/images/blog/choisir-teinte-ral-aluminium/panneau-aluminium-thermolaque-brun-bronze-mat.webp',
                alt: "Panneaux en aluminium thermolaqué brun bronze mat sous la toiture anthracite d'un carport aluminium",
                caption:
                  'Une surface mate n’a presque aucun reflet : la teinte reste égale d’un bout à l’autre du panneau, mais la poussière s’y voit plus vite.',
                w: 590,
                h: 646,
              }}
            />

            {/* 4. Teintes qui vieillissent bien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelles teintes vieillissent bien sous le soleil et la poussière de Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux ennemis visuels, et ce ne sont pas ceux qu&apos;on croit. Le premier est le{' '}
                <strong className="text-primary font-semibold">rayonnement solaire d&apos;été</strong>, qui sollicite
                tous les revêtements colorés. Le second, très sous-estimé, est la{' '}
                <strong className="text-primary font-semibold">poussière</strong> : pollen au printemps, poussière de
                chemin et de vigne l&apos;été, projections de terre après un orage. Dans le Libournais, une pergola
                bordant une parcelle de vigne prend une pellicule fine bien plus vite qu&apos;en centre-ville.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                D&apos;où trois familles de comportement, constatées sur nos chantiers :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les gris moyens, les anthracites, les bruns et les teintes désaturées', 'ce sont les meilleurs élèves. Ils pardonnent la poussière, ne datent pas et supportent le passage des saisons sans que l’œil accroche.'],
                  ['Les teintes très vives et saturées (rouges francs, bleus vifs)', 'ce sont elles qui accusent le plus le temps visuellement, et ce sont aussi celles qui se démodent le plus vite. Une teinte que vous adorez aujourd’hui, vous la regarderez encore dans vingt ans.'],
                  ['Le blanc pur', 'il reste lumineux et léger, il s’accorde à beaucoup de bâtis, mais il rend visible la moindre salissure. En bord de route blanche ou de chemin de vigne, il demande un lavage plus fréquent, ce qui n’est pas grave si vous l’assumez.'],
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
                Le bon réflexe consiste à regarder l&apos;environnement immédiat de l&apos;ouvrage plutôt que le
                catalogue : un gravier clair qui renvoie la lumière, des arbres qui laissent tomber des résidus, une
                haie, une allée en terre. Une teinte moyenne, ni très claire ni très sombre, est presque toujours celle
                qui demandera le moins d&apos;attention, c&apos;est d&apos;ailleurs une des raisons du succès des gris.
              </p>
            </section>

            {/* 5. Teinte foncée plein sud */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Teinte foncée et plein sud : la question de la chaleur, en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il faut le dire clairement, parce que peu de vendeurs le font :{' '}
                <strong className="text-primary font-semibold">
                  une teinte foncée absorbe davantage le rayonnement solaire qu&apos;une teinte claire, et fait monter la
                  température du profilé en été.
                </strong>{' '}
                Sous nos étés girondins, sur une façade plein sud sans masque, ce n&apos;est pas un détail théorique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Trois conséquences concrètes, que nous anticipons à la conception :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le profilé est chaud au toucher', 'sur une pergola anthracite exposée plein sud, un poteau ou une traverse est franchement chaud en milieu d’après-midi. Cela se vit très bien, mais il vaut mieux le savoir avant qu’après, surtout avec de jeunes enfants qui s’appuient sur un montant.'],
                  ['La dilatation devient un sujet', 'l’aluminium travaille avec la température. Sur de grandes pièces sombres, l’écart entre la face exposée et la face à l’ombre peut produire un effet bilame : une déformation temporaire et réversible, qui disparaît quand la pièce refroidit. Ce n’est pas un défaut de fabrication, c’est de la physique.'],
                  ['Les jeux de pose ne s’improvisent pas', 'grandes portées, longues traverses, lames orientables plein sud : les jeux et les cales de dilatation doivent être prévus dès la commande. C’est le genre de point qui distingue une pose soignée d’un montage rapide.'],
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
                Faut-il renoncer à l&apos;anthracite plein sud ? Non, nous en posons beaucoup, et ils se comportent
                très bien. Mais sur un ouvrage de grande dimension exposé plein sud, une teinte un peu moins sombre est
                un choix technique confortable autant qu&apos;esthétique. Ce raisonnement rejoint celui que nous
                détaillons dans notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>{' '}
                : sur ce type d&apos;ouvrage, orientation et dimensions commandent une partie des choix.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-4.webp"
              w={768}
              h={512}
              alt="Pergola bioclimatique en aluminium de teinte gris anthracite en plein soleil d'été, ombres portées marquées au sol"
              caption="Poteaux et traverses d'une teinte sombre montent en température l'après-midi : c'est aussi pour cela qu'on prévoit les jeux de dilatation à la commande, pas à la pose."
            />

            {/* 6. Accorder au bâti girondin */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Accorder la teinte au bâti girondin : nos règles autour de Libourne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Autour de Libourne, nous rencontrons trois contextes qui reviennent sans cesse : la{' '}
                <strong className="text-primary font-semibold">pierre blonde</strong> des maisons de bourg et des
                girondines, l&apos;<strong className="text-primary font-semibold">enduit clair</strong> des
                constructions plus récentes, et la{' '}
                <strong className="text-primary font-semibold">tuile canal en terre cuite</strong>, présente à peu près
                partout. Voici les règles simples que nous appliquons.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Rappeler la teinte des menuiseries, pas celle des murs', 'c’est notre première règle. Une pergola ou un carport dialogue visuellement avec les fenêtres, les volets, la porte de garage et les descentes d’eau, pas avec la façade. Reprendre la teinte des menuiseries fait entrer l’ouvrage dans la famille du bâti ; se caler sur les murs le fait ressembler à un décor rapporté.'],
                  ['Se méfier du contraste maximal', 'un noir absolu sur une façade en pierre claire donne un contraste très dur, qui peut fonctionner sur une architecture très contemporaine mais écrase souvent un bâti ancien. Un gris moyen, un brun ou un bronze s’y pose beaucoup plus naturellement.'],
                  ['Regarder la tuile autant que le mur', 'la terre cuite tire vers l’orangé et le brun. Une teinte bronze, brune ou sable entre en résonance avec elle ; un blanc pur ou un bleu franc s’en détache franchement.'],
                  ['Décider dehors, en fin de journée', 'la lumière rasante du soir est la plus révélatrice : c’est là qu’on voit si une teinte se fond ou se dispute avec la façade.'],
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
                Un point de vigilance à ne pas négliger :{' '}
                <strong className="text-primary font-semibold">
                  le PLU de votre commune, ou le règlement d&apos;un secteur protégé, peut imposer une palette de teintes
                </strong>{' '}
                pour les éléments visibles depuis la voie publique. C&apos;est fréquent dans les centres anciens et aux
                abords des monuments, nombreux dans le Libournais et le Saint-Émilionnais. Nous vérifions ce point en
                mairie avant de commander : une teinte refusée après fabrication, c&apos;est un ouvrage à refaire, pas
                un ouvrage à repeindre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous verrez comment ces accords se traduisent concrètement dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>,
                et notre approche des{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas
                </a>{' '}
                comme des{' '}
                <a href="/carports" className={lienInterne}>
                  carports sur mesure
                </a>{' '}
                part toujours du bâti existant, jamais du catalogue.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp"
              w={768}
              h={512}
              alt="Pergola en aluminium thermolaqué bicolore, ossature gris anthracite et lames claires, adossée à une façade à enduit clair coiffée de tuile canal"
              caption="Ossature sombre calée sur les menuiseries, lames claires côté terrasse : deux teintes sur le même ouvrage, à décider avant la fabrication."
            />

            {/* 7. Bicoloration, raccords, réparabilité */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bicoloration, raccord entre ouvrages et profilé rayé
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois questions pratiques reviennent systématiquement une fois la teinte principale arrêtée.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La bicoloration</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il est possible de laquer un ouvrage en{' '}
                <strong className="text-primary font-semibold">deux teintes différentes, une à l&apos;extérieur et une
                à l&apos;intérieur</strong>. C&apos;est très pertinent sur une véranda, une verrière ou une extension
                vitrée : une teinte sombre côté jardin, qui affine visuellement les profilés et s&apos;accorde à la
                façade, et une teinte claire côté séjour, qui allège la pièce et renvoie la lumière. Il faut le prévoir
                dès la commande, cela allonge un peu le délai de fabrication et représente, d&apos;après ce que nous
                constatons sur nos chantiers, un surcoût de l&apos;ordre de quelques pour cent sur le prix de
                l&apos;ouvrage, variable selon le fabricant. Même logique pour une teinte hors nuancier standard :
                c&apos;est faisable, cela se paie et cela se commande à l&apos;avance.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">
                Raccorder des ouvrages posés à des dates différentes
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le piège le plus fréquent : une pergola posée cette année, un carport l&apos;an prochain, un
                garde-corps trois ans plus tard. La règle est simple à énoncer et exigeante à tenir :{' '}
                <strong className="text-primary font-semibold">
                  même code RAL, même finition, et idéalement le même laqueur.
                </strong>{' '}
                Car un même RAL laqué par deux fournisseurs différents peut légèrement différer, la nuance est
                imperceptible sur deux ouvrages éloignés, et parfaitement visible sur deux pièces côte à côte. Quand
                nous savons qu&apos;un chantier se fera en plusieurs temps, nous cherchons à faire fabriquer les pièces
                dans un même lot, quitte à les stocker. Et dans tous les cas, nous notons le code, la finition et le
                laqueur dans le dossier du client : c&apos;est l&apos;information qui manquera dans cinq ans. C&apos;est
                le même souci de cohérence qui guide un{' '}
                <a href="/blog/carport-aluminium-ou-bois-comparatif" className={lienInterne}>
                  choix entre carport aluminium et carport bois
                </a>{' '}
                ou le dessin d&apos;un{' '}
                <a href="/blog/garde-corps-terrasse-aluminium-ou-bois" className={lienInterne}>
                  garde-corps de terrasse
                </a>{' '}
                : un jardin se lit comme un ensemble.
              </p>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-3">La rayure, et sa réparation</h3>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un thermolaquage se raye, moins qu&apos;on ne le craint, mais cela arrive : un vélo posé contre un
                poteau, un outil qui glisse, un déménagement.{' '}
                <strong className="text-primary font-semibold">
                  Une rayure superficielle se retouche localement
                </strong>,
                au stylo ou à l&apos;aérosol de retouche dans la teinte exacte : c&apos;est l&apos;affaire de quelques
                minutes et cela protège le profilé. Soyons honnêtes cependant : la retouche se voit toujours un peu, et
                d&apos;autant plus en finition mate, où la reprise ne renvoie pas la lumière comme le reste de la
                surface. Pour un rendu vraiment invisible, il faut déposer la pièce et la faire relaquer en atelier,
                donc démonter. Notre conseil : réclamez un flacon de retouche à la livraison, et rangez avec lui le code
                RAL et la finition.
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
              Teinte RAL et aluminium : vos questions
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
              Une teinte que vous aimerez encore dans vingt ans
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Un code RAL ne dit pas grand-chose seul : c&apos;est la finition, l&apos;exposition et l&apos;accord avec
              vos menuiseries qui font une teinte réussie. Nous apportons les échantillons de profilés chez vous, nous
              les regardons dehors contre votre façade, et nous vérifions au passage ce que permet le PLU de votre
              commune. C&apos;est la démarche que nous menons chez L&apos;Esprit Bois, entreprise qualifiée Qualibat, à
              Libourne et dans toute la Gironde, sur nos pergolas, carports et garde-corps en aluminium.
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
