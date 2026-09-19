import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/sol-argileux-gironde-etude-de-sol-extension/extension-ossature-bois-accolee-maison-pierre-gironde.webp';

export const metadata: Metadata = buildMetadata({
  title: "Sol argileux en Gironde : l'étude de sol avant de construire",
  description:
    "En zone d'argile moyenne ou forte, l'étude géotechnique est obligatoire avant d'étendre sa maison en Gironde. Ce qui change au 1er juillet 2026.",
  keywords:
    "sol argileux Gironde, étude de sol extension, retrait-gonflement des argiles, étude géotechnique G2, fondations extension ossature bois Libourne, construire sur argile en Gironde, étude de sol obligatoire, zone d'exposition argiles, extension ossature bois Gironde",
  path: '/blog/sol-argileux-gironde-etude-de-sol-extension',
  ogImage: COVER,
  ogTitle: "Sol argileux en Gironde : l'étude de sol avant de construire une extension",
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
        name: 'Sol argileux et étude de sol',
        item: 'https://lesprit-bois.fr/blog/sol-argileux-gironde-etude-de-sol-extension',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Sol argileux en Gironde : l'étude de sol avant de construire une extension",
    description:
      "Retrait-gonflement des argiles, zones d'exposition, étude géotechnique préalable et de conception, cas particulier de l'extension et apport de l'ossature bois : ce qui décide vraiment des fondations d'une extension en Gironde.",
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
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/sol-argileux-gironde-etude-de-sol-extension',
    },
    about: [
      { '@type': 'Thing', name: 'sol argileux' },
      { '@type': 'Thing', name: 'étude géotechnique' },
      { '@type': 'Thing', name: 'extension à ossature bois' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Mon extension en Gironde est-elle concernée par une étude de sol ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Elle l'est si le terrain se situe en zone d'exposition moyenne ou forte au retrait-gonflement des argiles, et si le projet ne remplit pas les deux conditions cumulatives de l'article R132-7 du code de la construction et de l'habitation : une superficie inférieure à 20 m² et une nouvelle construction désolidarisée du bâtiment existant. Une extension accolée à la maison, même petite, reste donc soumise à l'obligation. La première chose à faire est de vérifier l'exposition de votre adresse sur Géorisques.",
        },
      },
      {
        '@type': 'Question',
        name: 'Qui réalise et qui paie l’étude de sol ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'étude est réalisée par un bureau d'études géotechnique, un tiers indépendant dont c'est le métier. Nous ne la réalisons pas : nous construisons avec ses prescriptions. L'étude géotechnique préalable est fournie par le vendeur d'un terrain non bâti constructible à l'acquéreur. L'étude géotechnique de conception, celle qui fixe les prescriptions constructives, est à la charge du maître d'ouvrage, donc du propriétaire qui fait construire son extension.",
        },
      },
      {
        '@type': 'Question',
        name: 'Les 20 m² de l’étude de sol sont-ils ceux de la déclaration préalable ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, et c'est la confusion la plus fréquente. Ce sont deux réglementations distinctes qui utilisent par coïncidence le même nombre : d'un côté le code de la construction et de l'habitation pour la prévention des risques liés aux sols argileux, de l'autre le code de l'urbanisme pour la déclaration préalable ou le permis de construire. Les seuils ne se recouvrent pas et n'ont ni les mêmes conditions ni les mêmes effets : un projet peut très bien échapper à l'un et pas à l'autre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une extension en ossature bois dispense-t-elle de l’étude de sol ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. L'ossature bois est un vrai atout sur un sol argileux parce qu'elle est légère et qu'elle sollicite moins le terrain, ce qui rend souvent les solutions de fondation moins lourdes et moins chères. Mais le retrait-gonflement n'est pas un problème de charge, c'est un mouvement du sol lui-même : la légèreté ne s'y oppose pas. L'obligation réglementaire ne dépend d'ailleurs pas du matériau, mais de la zone d'exposition et du projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'L’étude de sol faite à la construction de ma maison est-elle encore valable ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "L'article R132-6 du code de la construction et de l'habitation prévoit que la durée de validité de l'étude géotechnique préalable est de trente ans si aucun remaniement du sol n'a été effectué. Par ailleurs, l'arrêté du 22 juillet 2020 prévoit qu'une étude de conception initiale ayant déjà prévu le projet d'extension vaut étude de conception pour cette extension, sous réserve que le procédé constructif soit le même. Dans tous les cas, c'est le bureau d'études qui confirme si l'étude existante couvre le nouveau projet.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment savoir si mon terrain est argileux en Gironde ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En vérifiant votre adresse sur le portail Géorisques, qui affiche la zone d'exposition au retrait-gonflement des argiles pour la parcelle. Le classement distingue quatre catégories, forte, moyenne, faible et résiduelle, et seules les zones d'exposition moyenne ou forte déclenchent les obligations. Le zonage suit la géologie et non les limites administratives : le nom de votre commune ne suffit pas à conclure, et depuis le 1er juillet 2026 une carte mise à jour s'applique.",
        },
      },
    ],
  },
];

const casExtension = [
  ['Extension accolée à la maison, 15 m²', 'Moins de 20 m²', 'Accolée à l’existant', 'Oui'],
  ['Extension accolée à la maison, 30 m²', 'Plus de 20 m²', 'Accolée à l’existant', 'Oui'],
  ['Construction séparée, 15 m²', 'Moins de 20 m²', 'Désolidarisée', 'Non'],
  ['Construction séparée, 30 m²', 'Plus de 20 m²', 'Désolidarisée', 'Oui'],
];

const faq = [
  {
    q: 'Mon extension en Gironde est-elle concernée par une étude de sol ?',
    r: (
      <>
        Elle l&apos;est si le terrain se situe en zone d&apos;exposition moyenne ou forte au retrait-gonflement des
        argiles, et si le projet ne remplit pas les deux conditions cumulatives de l&apos;article R132-7 du code de la
        construction et de l&apos;habitation : une superficie inférieure à 20 m² et une nouvelle construction
        désolidarisée du bâtiment existant. Une extension accolée à la maison, même petite, reste donc soumise à
        l&apos;obligation. La première chose à faire est de vérifier l&apos;exposition de votre adresse sur Géorisques.
      </>
    ),
  },
  {
    q: 'Qui réalise et qui paie l’étude de sol ?',
    r: (
      <>
        L&apos;étude est réalisée par un bureau d&apos;études géotechnique, un tiers indépendant dont c&apos;est le
        métier. Nous ne la réalisons pas : nous construisons avec ses prescriptions. L&apos;étude géotechnique préalable
        est fournie par le vendeur d&apos;un terrain non bâti constructible à l&apos;acquéreur. L&apos;étude
        géotechnique de conception, celle qui fixe les prescriptions constructives, est à la charge du maître
        d&apos;ouvrage, donc du propriétaire qui fait construire son extension.
      </>
    ),
  },
  {
    q: 'Les 20 m² de l’étude de sol sont-ils ceux de la déclaration préalable ?',
    r: (
      <>
        Non, et c&apos;est la confusion la plus fréquente. Ce sont deux réglementations distinctes qui utilisent par
        coïncidence le même nombre : d&apos;un côté le code de la construction et de l&apos;habitation pour la
        prévention des risques liés aux sols argileux, de l&apos;autre le code de l&apos;urbanisme pour la déclaration
        préalable ou le permis de construire. Les seuils ne se recouvrent pas et n&apos;ont ni les mêmes conditions ni
        les mêmes effets : un projet peut très bien échapper à l&apos;un et pas à l&apos;autre.
      </>
    ),
  },
  {
    q: 'Une extension en ossature bois dispense-t-elle de l’étude de sol ?',
    r: (
      <>
        Non. L&apos;ossature bois est un vrai atout sur un sol argileux parce qu&apos;elle est légère et qu&apos;elle
        sollicite moins le terrain, ce qui rend souvent les solutions de fondation moins lourdes et moins chères. Mais
        le retrait-gonflement n&apos;est pas un problème de charge, c&apos;est un mouvement du sol lui-même : la
        légèreté ne s&apos;y oppose pas. L&apos;obligation réglementaire ne dépend d&apos;ailleurs pas du matériau, mais
        de la zone d&apos;exposition et du projet.
      </>
    ),
  },
  {
    q: 'L’étude de sol faite à la construction de ma maison est-elle encore valable ?',
    r: (
      <>
        L&apos;article R132-6 du code de la construction et de l&apos;habitation prévoit que la durée de validité de
        l&apos;étude géotechnique préalable est de trente ans si aucun remaniement du sol n&apos;a été effectué. Par
        ailleurs, l&apos;arrêté du 22 juillet 2020 prévoit qu&apos;une étude de conception initiale ayant déjà prévu le
        projet d&apos;extension vaut étude de conception pour cette extension, sous réserve que le procédé constructif
        soit le même. Dans tous les cas, c&apos;est le bureau d&apos;études qui confirme si l&apos;étude existante
        couvre le nouveau projet.
      </>
    ),
  },
  {
    q: 'Comment savoir si mon terrain est argileux en Gironde ?',
    r: (
      <>
        En vérifiant votre adresse sur le portail Géorisques, qui affiche la zone d&apos;exposition au
        retrait-gonflement des argiles pour la parcelle. Le classement distingue quatre catégories, forte, moyenne,
        faible et résiduelle, et seules les zones d&apos;exposition moyenne ou forte déclenchent les obligations. Le
        zonage suit la géologie et non les limites administratives : le nom de votre commune ne suffit pas à conclure,
        et depuis le 1er juillet 2026 une carte mise à jour s&apos;applique.
      </>
    ),
  },
];

export default function ArticleSolArgileuxEtudeDeSolPage() {
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
              alt="Extension à ossature bois bardée en douglas accolée à une maison en pierre, en Gironde"
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
              <span className="text-secondary-fixed">Sol argileux et étude de sol</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Sol argileux en Gironde : l&apos;étude de sol avant de construire une extension
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
              <span>19 septembre 2026</span>
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
                En Gironde, ce qui décide d&apos;une extension n&apos;est pas le plan, c&apos;est le sol. Si votre
                terrain est classé en zone d&apos;exposition moyenne ou forte au retrait-gonflement des argiles, une
                étude géotechnique de conception est exigée avant de conclure le contrat, et l&apos;extension n&apos;y
                échappe qu&apos;à deux conditions réunies : moins de 20 m² et désolidarisée de la maison existante.
              </strong>{' '}
              L&apos;argile gonfle quand elle se réhydrate et se rétracte quand elle sèche. Ce mouvement, jamais
              identique d&apos;un point à l&apos;autre de la maison, fissure ce qui n&apos;a pas été fondé pour lui.
              L&apos;ossature bois est légère, ce qui est un vrai atout sur ce type de terrain, mais elle ne dispense
              jamais de l&apos;étude : elle rend seulement les réponses moins lourdes et moins chères. Et depuis le 1er
              juillet 2026, un zonage national mis à jour élargit le périmètre concerné. Voici comment lire votre
              situation.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Ce que l'argile fait à une construction */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que l&apos;argile fait réellement à une construction
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une argile est un sol vivant au sens mécanique du terme : elle absorbe l&apos;eau et augmente de volume,
                elle sèche et se rétracte. L&apos;été, un épisode de sécheresse prolongé fait descendre le niveau du
                sol ; à l&apos;automne et l&apos;hiver, la réhydratation le fait remonter. C&apos;est ce cycle que la
                réglementation appelle le{' '}
                <strong className="text-primary font-semibold">retrait-gonflement des argiles</strong>, et dont
                l&apos;État détaille le{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/retrait-gonflement-argiles-construction"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dispositif de prévention pour la construction
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le problème n&apos;est pas le mouvement en lui-même : c&apos;est qu&apos;il n&apos;est jamais le même
                partout. Une façade plein sud sèche plus vite qu&apos;un mur au nord. Un pied de mur abrité par un
                débord de toiture reçoit moins de pluie que le reste du pourtour. Un arbre proche puise l&apos;eau
                d&apos;un seul côté. Une terrasse ou un dallage empêchent la pluie d&apos;atteindre le sol en dessous
                pendant que le terrain nu, à deux mètres de là, se réhydrate normalement. Le sol ne travaille donc ni
                partout ni en même temps.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce sont ces{' '}
                <strong className="text-primary font-semibold">tassements différentiels</strong> qui abîment le bâti. La
                maçonnerie ne supporte pas d&apos;être portée de façon inégale : elle se rompt là où elle est déjà la
                plus faible, c&apos;est-à-dire aux angles du bâtiment et aux angles des ouvertures, en suivant les
                joints, d&apos;où ces fissures dites en escalier. On voit aussi des portes et des fenêtres qui coincent
                d&apos;une saison à l&apos;autre, et, quand il y a une extension, une ouverture qui se forme
                précisément à la jonction entre le neuf et l&apos;ancien : deux ouvrages fondés différemment ne
                réagissent pas de la même manière au même mouvement.
              </p>
            </section>

            <Figure
              src="/images/blog/sol-argileux-gironde-etude-de-sol-extension/ossature-bois-montants-leves-sur-dalle-gironde.webp"
              w={880}
              h={660}
              alt="Montants d'ossature bois levés sur la dalle béton d'une extension en chantier, en Gironde"
              caption="Lisse basse posée sur la dalle, terre encore ouverte à droite : c'est ce contact avec le sol que l'étude dimensionne, pas la structure au-dessus."
            />

            {/* 2. La Gironde, territoire d'argile */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La Gironde est un territoire d&apos;argile, mais c&apos;est votre adresse qui compte
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La Gironde fait partie des départements les plus concernés par le phénomène. Sur nos chantiers, entre
                Libourne, l&apos;Entre-deux-Mers et les vallées, nous rencontrons très régulièrement des terrains
                argileux, et les maisons du Libournais en portent souvent les traces visibles. Mais nous nous arrêtons
                là dans la généralisation, parce que la suite n&apos;est pas généralisable.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le zonage suit la géologie, pas les limites administratives. Deux parcelles d&apos;une même commune,
                parfois de la même rue, peuvent ne pas être classées pareil. La seule réponse honnête que nous puissions
                donner à quelqu&apos;un qui nous appelle est donc :{' '}
                <strong className="text-primary font-semibold">vérifiez votre adresse</strong>, sur le portail public{' '}
                <a
                  href="https://www.georisques.gouv.fr/"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Géorisques
                </a>
                , qui affiche pour une parcelle donnée son exposition au retrait-gonflement des argiles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce classement n&apos;est pas binaire. L&apos;article R132-3 du code de la construction et de
                l&apos;habitation distingue{' '}
                <strong className="text-primary font-semibold">quatre catégories d&apos;exposition</strong> : forte,
                moyenne, faible et résiduelle. Retenez surtout ceci :{' '}
                <strong className="text-primary font-semibold">
                  seules les zones d&apos;exposition moyenne ou forte déclenchent les obligations
                </strong>
                . Un terrain en exposition faible ou résiduelle n&apos;ouvre pas le dispositif, ce qui ne veut pas dire
                que le sol y est sans intérêt pour le dimensionnement des fondations.
              </p>
            </section>

            {/* 3. Ce que la loi impose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que la loi impose, et ce qui a changé au 1er juillet 2026
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le dispositif vient de l&apos;article 68 de la loi ELAN n° 2018-1021 du 23 novembre 2018, précisé par le
                décret n° 2019-495 du 22 mai 2019 relatif à la prévention des risques de mouvement de terrain
                différentiel consécutif à la sécheresse et à la réhydratation des sols argileux, puis par l&apos;arrêté
                du 22 juillet 2020 qui définit les zones exposées et le contenu des études. L&apos;ensemble est codifié
                aux{' '}
                <a
                  href="https://www.legifrance.gouv.fr/codes/id/LEGISCTA000043818703/2021-07-01"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  articles R132-3 à R132-8 du code de la construction et de l&apos;habitation
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Concrètement, il existe deux études, qui ne servent pas à la même chose et ne sont pas fournies par la
                même personne :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["L’étude géotechnique préalable (R132-4)", "celle que le vendeur d’un terrain non bâti constructible remet à l’acquéreur. Elle caractérise le sol du terrain, indépendamment de tout projet. Les bureaux d’études l’appellent couramment G1. L’article R132-6 précise que « la durée de validité de l’étude géotechnique préalable [...] est de trente ans si aucun remaniement du sol n’a été effectué »."],
                  ["L’étude géotechnique de conception (R132-5)", "celle qui compte pour vous. Dite G2, elle tient compte de l’implantation et des caractéristiques du bâtiment et fixe les prescriptions constructives adaptées au sol et au projet. C’est au maître d’ouvrage de la fournir avant de conclure le contrat de construction."],
                  ["À défaut d’étude de conception (R132-8)", "le constructeur met en œuvre des techniques particulières de construction visant à limiter les déformations de l’ouvrage. Ce n’est pas une échappatoire confortable : on construit alors sans savoir, donc en couvrant large."],
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
                L&apos;actualité, c&apos;est l&apos;
                <strong className="text-primary font-semibold">arrêté du 9 janvier 2026</strong>, qui met à jour la
                carte des zones exposées. Il s&apos;applique aux promesses de vente, ou à défaut aux actes authentiques
                de vente, de terrains non bâtis constructibles, et aux contrats de construction{' '}
                <strong className="text-primary font-semibold">conclus à compter du 1er juillet 2026</strong> : il est
                donc déjà en vigueur. Le zonage s&apos;élargit et beaucoup de communes y entrent. Autrement dit, un
                terrain que vous croyiez hors dispositif parce qu&apos;on vous l&apos;avait dit il y a quelques années
                mérite une nouvelle vérification avant de signer quoi que ce soit.
              </p>
            </section>

            <Figure
              src="/images/chantiers/ossature-bois-pignon-bardage-douglas-acheve-gironde.webp"
              w={1200}
              h={900}
              alt="Pignon d'un ouvrage à ossature bois bardé en douglas, posé dans un terrain planté en Gironde"
              caption="Un ouvrage posé au milieu des haies et des arbres : c'est la parcelle que le zonage classe, jamais le nom de la commune."
            />

            {/* 4. Le cas de l'extension */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le cas de l&apos;extension : les deux conditions qui font tomber l&apos;obligation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ici que la plupart des propriétaires se trompent. L&apos;article R132-7 prévoit que les
                contrats ayant pour objet des extensions ne sont pas soumis aux obligations{' '}
                <strong className="text-primary font-semibold">
                  sous réserve que la superficie du projet soit inférieure à 20 m² et que la nouvelle construction soit
                  désolidarisée du bâtiment existant
                </strong>
                . Les deux conditions sont cumulatives. Il ne suffit pas d&apos;en remplir une.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                La conséquence est nette, et elle surprend : une extension accolée à la maison, même petite, ne
                bénéficie pas de l&apos;exclusion. Et une construction de 25 m² désolidarisée n&apos;en bénéficie pas
                davantage. Voici comment se lisent les cas courants, sur un terrain classé en exposition moyenne ou
                forte :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Projet</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Superficie</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Lien avec la maison</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Obligation R132-7</th>
                    </tr>
                  </thead>
                  <tbody>
                    {casExtension.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant whitespace-nowrap">{ligne[3]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Il existe un second cas de dispense, plus rare mais précieux quand il s&apos;applique :
                l&apos;arrêté du 22 juillet 2020 prévoit, à son article 2, qu&apos;une étude de conception initiale
                ayant déjà prévu le projet d&apos;extension vaut étude de conception pour cette extension,{' '}
                <strong className="text-primary font-semibold">
                  sous réserve que le procédé constructif soit le même
                </strong>
                . Si votre maison a été construite récemment, avec une étude qui envisageait déjà l&apos;agrandissement,
                ressortez le dossier avant d&apos;en commander une nouvelle.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un avertissement pour finir, parce que c&apos;est l&apos;erreur à ne surtout pas commettre :{' '}
                <strong className="text-primary font-semibold">
                  les 20 m² de l&apos;article R132-7 ne sont pas les 20 m² de l&apos;urbanisme
                </strong>
                . Ce sont deux réglementations distinctes, l&apos;une dans le code de la construction et de
                l&apos;habitation, l&apos;autre dans le code de l&apos;urbanisme, qui se trouvent utiliser le même
                nombre avec d&apos;autres conditions et d&apos;autres effets. Pour la déclaration préalable et le permis
                de construire, reportez-vous à notre guide des{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  autorisations d&apos;urbanisme
                </a>{' '}
                : les deux démarches se mènent en parallèle, sans jamais se confondre.
              </p>
            </section>

            {/* 5. L'ossature bois sur sol argileux */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;ossature bois change la donne sur un sol argileux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;une des raisons pour lesquelles nous proposons si souvent l&apos;ossature bois en
                extension sur nos chantiers du Libournais :{' '}
                <strong className="text-primary font-semibold">
                  une paroi à ossature bois isolée pèse beaucoup moins lourd qu&apos;un mur maçonné équivalent
                </strong>
                . Les charges descendues au sol sont donc plus faibles, ce qui laisse au bureau d&apos;études une marge
                de manœuvre bien plus grande pour prescrire des fondations adaptées, avec moins de matière, moins de
                terrassement et moins d&apos;évacuation de terre. Sur un terrain difficile, cette différence se lit
                directement sur le devis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                S&apos;y ajoute la préfabrication : les murs sont assemblés en atelier et levés sur place, ce qui
                raccourcit fortement le temps où le chantier est ouvert, donc où le terrain est remué et exposé aux
                intempéries. C&apos;est un avantage concret quand on travaille entre deux saisons sur un sol qui réagit
                à l&apos;eau.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Maintenant la part honnête :{' '}
                <strong className="text-primary font-semibold">
                  la légèreté ne dispense de rien, et surtout pas de l&apos;étude
                </strong>
                . Le retrait-gonflement n&apos;est pas un problème de charge, c&apos;est un mouvement du sol lui-même :
                ce qui soulève ou affaisse une fondation, ce n&apos;est pas le poids qu&apos;elle porte, c&apos;est le
                terrain en dessous. Une extension légère posée sur des fondations mal adaptées bougera comme une autre,
                et la fissure apparaîtra là où elle apparaît toujours, à la jonction avec la maison existante.
                L&apos;obligation réglementaire, elle, ne regarde d&apos;ailleurs pas le matériau : elle regarde la zone
                et le projet.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est le socle de notre travail de{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur à ossature bois en Gironde
                </a>{' '}
                et de l&apos;ensemble de nos{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>
                . Pour la part budgétaire du projet, poste par poste, notre guide sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension à ossature bois
                </a>{' '}
                détaille ce qui fait varier l&apos;addition, fondations comprises.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-pare-pluie-volume-accole-gironde.jpg"
              w={1100}
              h={825}
              alt="Extension à ossature bois fermée sous pare-pluie, accolée à une maison existante, chantier en Gironde"
              caption="Murs levés puis fermés sous pare-pluie en quelques jours : la terre remuée autour du chantier reste exposée moins longtemps."
            />

            {/* 6. Les réponses techniques */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les réponses techniques possibles, et pourquoi c&apos;est l&apos;étude qui tranche
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                On nous demande souvent, au téléphone, « et vous feriez quoi, vous ? ». La réponse honnête est que nous
                n&apos;en savons rien tant que le sol n&apos;a pas parlé. Voici l&apos;éventail des réponses que
                l&apos;on rencontre, en sachant que{' '}
                <strong className="text-primary font-semibold">c&apos;est l&apos;étude de conception qui choisit</strong>
                , en fonction de la nature des argiles, de leur profondeur, de l&apos;hétérogénéité du terrain et du
                projet lui-même :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["Descendre les fondations", "faire reposer les semelles sous la tranche de sol où l’argile travaille au fil des saisons, pour que le bâti ne suive plus le cycle."],
                  ["Rigidifier l’ensemble", "longrines et chaînages qui font travailler la construction comme un bloc solidaire, capable d’encaisser un appui inégal sans se disloquer."],
                  ["Reporter les charges en profondeur", "puits ou appuis ponctuels qui vont chercher un horizon stable, quand la couche superficielle n’est pas exploitable."],
                  ["Interposer un vide sanitaire", "un espace ventilé entre le sol et le plancher, qui évite de faire reposer directement le plancher habitable sur le terrain."],
                  ["Désolidariser les ouvrages", "prévoir une rupture franche entre l’extension et la maison, pour que deux ouvrages fondés différemment cessent de se contraindre l’un l’autre."],
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
                Aucune de ces solutions n&apos;est « la nôtre ». Nous n&apos;avons pas de fondation par défaut, et nous
                ne réalisons pas l&apos;étude de sol : c&apos;est le métier d&apos;un bureau d&apos;études géotechnique,
                tiers indépendant. Notre rôle commence après, quand les prescriptions sont écrites, et il consiste à les
                appliquer sans les raboter. C&apos;est exactement la posture que nous tenons en{' '}
                <a href="/blog/surelevation-ossature-bois-maison" className={lienInterne}>
                  surélévation de maison, où le bureau d&apos;études tranche avant le premier dessin
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une fois les fondations arrêtées, tout le reste en découle : le niveau du plancher, la mise hors
                d&apos;eau du bas de la structure, le raccord avec l&apos;existant. Nous détaillons ces points de
                jonction dans notre guide sur{' '}
                <a href="/blog/garage-ossature-bois-permis-dalle-budget" className={lienInterne}>
                  la dalle et la lisse basse d&apos;un ouvrage à ossature bois
                </a>{' '}
                : c&apos;est là que se joue la durabilité de ce qui est posé dessus.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-interieur-raccord-mur-existant-gironde.jpg"
              w={1100}
              h={826}
              alt="Intérieur d'une extension à ossature bois en chantier, montants apparents et raccord au mur de pierre existant"
              caption="À gauche le mur de l'existant, à droite l'ossature neuve : c'est cette jonction que les prescriptions de fondation servent à protéger."
            />

            {/* 7. Ce qui aggrave le phénomène + devis */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui aggrave le phénomène autour de la maison, et ce qu&apos;on écrit au devis
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Une étude bien faite peut être mise en défaut par ce qui se passe ensuite autour du bâtiment. Sur un sol
                argileux, quatre habitudes très ordinaires entretiennent la dissymétrie de teneur en eau qui fait
                travailler le sol :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "La végétation proche : arbres et haies puisent l’eau du sol d’un seul côté de la maison. Planter, comme abattre un sujet déjà grand, modifie durablement l’équilibre hydrique du terrain.",
                  "Les eaux de toiture rejetées au pied de l’ouvrage : une descente qui se termine sur la terre gorge le sol à un endroit précis, hiver après hiver.",
                  "Les fuites de réseaux enterrés, qui arrosent en continu une zone que personne ne surveille.",
                  "Les surfaces imperméables collées au bâti : terrasse, dallage, allée. Elles protègent le sol de la pluie d’un côté pendant que l’autre se réhydrate normalement.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le deuxième point mérite une attention particulière quand on ajoute un ouvrage : toute surface couverte
                nouvelle concentre une eau qui, avant, tombait au large. C&apos;est tout le sujet de notre article sur{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  l&apos;évacuation des eaux pluviales d&apos;une pergola ou d&apos;un carport
                </a>
                , et il vaut mot pour mot pour une extension. Notez enfin que le remaniement du sol n&apos;est pas
                anodin sur le plan juridique non plus : la validité de trente ans de l&apos;étude préalable est
                justement conditionnée à l&apos;absence de remaniement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté devis, notre règle est simple :{' '}
                <strong className="text-primary font-semibold">
                  tant que l&apos;étude n&apos;est pas rendue, un chiffrage de fondations reste conditionnel
                </strong>
                , et nous l&apos;écrivons noir sur blanc. Nos devis précisent qui fournit l&apos;étude géotechnique, à
                quelle version des prescriptions la construction se conforme, ce qui relève du terrassement et de
                l&apos;évacuation des terres, et ce qui serait à reprendre si les conclusions imposaient une solution
                plus lourde que l&apos;hypothèse retenue. Un artisan qui vous annonce un prix de fondations ferme avant
                l&apos;étude vous annonce un prix qu&apos;il devra reprendre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est ainsi que nous travaillons à Libourne, dans le Libournais et l&apos;Entre-deux-Mers, et plus
                largement partout en Gironde : le sol d&apos;abord, le plan ensuite. Vous pouvez voir ce que cela donne
                une fois terminé dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
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
              Sol argileux et étude de sol : vos questions
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
              Le sol d&apos;abord, le plan ensuite
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              En Gironde, une extension réussie commence par une vérification d&apos;adresse et, le plus souvent, par
              une étude géotechnique de conception confiée à un bureau d&apos;études indépendant. L&apos;ossature bois
              rend ensuite les réponses plus légères et plus économiques, sans jamais remplacer l&apos;étude. Chez
              L&apos;Esprit Bois, entreprise qualifiée Qualibat basée près de Libourne, nous construisons avec ces
              prescriptions, et nous vous disons franchement ce qui reste conditionnel tant que le sol n&apos;a pas
              parlé.
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
