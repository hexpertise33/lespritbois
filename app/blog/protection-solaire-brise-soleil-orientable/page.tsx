import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp';

export const metadata: Metadata = buildMetadata({
  title: "Brise-soleil orientable ou store extérieur ? Le guide en Gironde",
  description:
    "Brise-soleil orientable, store screen ou brise-soleil fixe : quelle protection solaire pour vos baies vitrées ? Orientation, tenue au vent, budget 2026.",
  keywords:
    "brise-soleil orientable, BSO aluminium, protection solaire extérieure, store screen extérieur, store extérieur baie vitrée, brise-soleil fixe, lames architecturales aluminium, protection solaire Gironde, brise-soleil Libourne, protection solaire baie vitrée",
  path: '/blog/protection-solaire-brise-soleil-orientable',
  ogImage: COVER,
  ogTitle: 'Brise-soleil orientable ou store extérieur : quelle protection solaire ?',
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
  /** Dimensions réelles du fichier — à vérifier, sinon la réservation d'espace est fausse. */
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
        name: 'Brise-soleil orientable ou store extérieur',
        item: 'https://lesprit-bois.fr/blog/protection-solaire-brise-soleil-orientable',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      'Brise-soleil orientable ou store extérieur : quelle protection solaire pour vos baies vitrées en Gironde ?',
    description:
      "Une protection solaire n'est efficace que si elle arrête le rayonnement dehors, avant le vitrage. Brise-soleil orientable, store screen extérieur ou brise-soleil fixe : comment choisir selon l'orientation de la façade, la tenue au vent et le budget, à Libourne et en Gironde.",
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
    datePublished: '2026-08-10',
    dateModified: '2026-08-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/protection-solaire-brise-soleil-orientable',
    },
    about: [
      { '@type': 'Thing', name: 'brise-soleil orientable' },
      { '@type': 'Thing', name: 'protection solaire extérieure' },
      { '@type': 'Thing', name: 'store screen extérieur' },
      { '@type': 'Thing', name: 'aluminium' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Brise-soleil orientable ou store screen extérieur : lequel choisir ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le brise-soleil orientable s'impose quand vous voulez doser l'ombre sans occulter : ses lames aluminium s'inclinent, vous gardez la lumière et une partie de la vue tout en coupant le rayonnement direct. Le store screen extérieur l'emporte sur les très grandes baies, sur une façade ouest où le soleil arrive rasant en fin de journée, et quand le budget est plus contenu : sa toile microperforée tamise sans plonger la pièce dans le noir, mais elle ne se règle pas en angle. En résumé : au sud, BSO ; sur une grande baie plein ouest, screen à zip.",
        },
      },
      {
        '@type': 'Question',
        name: "Un store intérieur suffit-il à protéger une baie vitrée du soleil ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non, pas pour le confort d'été. Un store intérieur intervient une fois que le rayonnement a traversé le vitrage : l'énergie est déjà dans la pièce et s'y transforme en chaleur. Il reste utile contre l'éblouissement et la décoloration des sols et des meubles, mais l'ADEME rappelle que les protections extérieures sont nettement plus efficaces pour garder un logement au frais. La règle est simple : arrêter le soleil dehors, avant le verre.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une protection solaire extérieure résiste-t-elle au vent ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, à condition de choisir le bon système et de l'équiper. Les fabricants classent leurs stores extérieurs selon leur tenue au vent : un store screen guidé par coulisses à zip encaisse beaucoup plus qu'un modèle tenu par de simples câbles, et un brise-soleil orientable doit se relever au-delà d'un certain seuil de vent. Sur une façade exposée, un capteur de vent relié à la motorisation, qui commande la remontée automatique, n'est pas une option : c'est ce qui protège le tablier. Un brise-soleil fixe, lui, n'a rien à remonter.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser un brise-soleil orientable sur une maison existante ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, dans la grande majorité des cas. En rénovation, le coffre et les coulisses se posent en applique sur la façade, au-dessus et de part et d'autre de la baie ; le coffre reste visible, on l'accorde donc par thermolaquage à la teinte RAL des menuiseries. Les points à vérifier avant de s'engager sont la nature du support et la qualité de la fixation, l'amenée d'une alimentation électrique pour la motorisation, et la largeur de la baie : au-delà d'une certaine dimension, on scinde en deux tabliers.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour poser un brise-soleil ou un store extérieur ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Poser un brise-soleil, un store screen ou des lames architecturales modifie l'aspect extérieur de la maison : selon la commune et la zone, cela peut relever d'une déclaration préalable de travaux, en particulier en secteur protégé ou aux abords d'un monument historique. Les règles de teinte imposées par certains PLU concernent aussi les coffres et les toiles. Nous vérifions le règlement d'urbanisme de votre commune avant d'arrêter la teinte et le dessin de la protection.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quel entretien pour une protection solaire en aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Très peu, mais il n'est pas nul. Un lavage à l'eau tiède savonneuse des profilés thermolaqués une à deux fois par an suffit à préserver la finition, avec un chiffon doux et surtout aucun produit abrasif ni nettoyeur haute pression. Le reste consiste à dégager les coulisses des gravillons, poussières et insectes, à vérifier joints et brosses, et à contrôler une fois par an la manœuvre, les fixations et le bon fonctionnement du capteur de vent. Sur un store screen, la toile est la seule pièce d'usure et se remplace sans changer le coffre.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Brise-soleil orientable (BSO)',
    'Lames aluminium orientables devant la baie',
    'Dose l’ombre sans occulter, garde la lumière et la vue, pilotable',
    'Mécanique et motorisation, coffre à intégrer, doit se relever par grand vent',
  ],
  [
    'Store screen extérieur',
    'Toile microperforée tendue dans des coulisses',
    'Grandes largeurs, vue tamisée conservée, budget plus contenu',
    'Aucun réglage d’angle, toile à remplacer un jour, intimité limitée le soir',
  ],
  [
    'Brise-soleil fixe / casquette',
    'Lames ou auvent aluminium calculés pour l’été',
    'Aucune mécanique, aucun entretien mécanique, insensible au vent',
    'Aucun réglage, dessin à figer en amont, ombre subie les jours gris',
  ],
  [
    'Pergola bioclimatique',
    'Abri à lames orientables au-dessus de la terrasse',
    'Ombre l’espace de vie extérieur et, par ricochet, la baie derrière',
    'Emprise au sol, budget d’un ouvrage, urbanisme à vérifier',
  ],
];

const faq = [
  {
    q: 'Brise-soleil orientable ou store screen extérieur : lequel choisir ?',
    r: (
      <>
        Le brise-soleil orientable s&apos;impose quand vous voulez doser l&apos;ombre sans occulter : ses lames
        aluminium s&apos;inclinent, vous gardez la lumière et une partie de la vue tout en coupant le rayonnement
        direct. Le store screen extérieur l&apos;emporte sur les très grandes baies, sur une façade ouest où le soleil
        arrive rasant en fin de journée, et quand le budget est plus contenu : sa toile microperforée tamise sans
        plonger la pièce dans le noir, mais elle ne se règle pas en angle. En résumé : au sud, BSO ; sur une grande
        baie plein ouest, screen à zip.
      </>
    ),
  },
  {
    q: 'Un store intérieur suffit-il à protéger une baie vitrée du soleil ?',
    r: (
      <>
        Non, pas pour le confort d&apos;été. Un store intérieur intervient une fois que le rayonnement a traversé le
        vitrage : l&apos;énergie est déjà dans la pièce et s&apos;y transforme en chaleur. Il reste utile contre
        l&apos;éblouissement et la décoloration des sols et des meubles, mais l&apos;ADEME rappelle que les protections
        extérieures sont nettement plus efficaces pour garder un logement au frais. La règle est simple : arrêter le
        soleil dehors, avant le verre.
      </>
    ),
  },
  {
    q: 'Une protection solaire extérieure résiste-t-elle au vent ?',
    r: (
      <>
        Oui, à condition de choisir le bon système et de l&apos;équiper. Les fabricants classent leurs stores
        extérieurs selon leur tenue au vent : un store screen guidé par coulisses à zip encaisse beaucoup plus
        qu&apos;un modèle tenu par de simples câbles, et un brise-soleil orientable doit se relever au-delà d&apos;un
        certain seuil de vent. Sur une façade exposée, un capteur de vent relié à la motorisation, qui commande la
        remontée automatique, n&apos;est pas une option : c&apos;est ce qui protège le tablier. Un brise-soleil fixe,
        lui, n&apos;a rien à remonter.
      </>
    ),
  },
  {
    q: 'Peut-on poser un brise-soleil orientable sur une maison existante ?',
    r: (
      <>
        Oui, dans la grande majorité des cas. En rénovation, le coffre et les coulisses se posent en applique sur la
        façade, au-dessus et de part et d&apos;autre de la baie ; le coffre reste visible, on l&apos;accorde donc par
        thermolaquage à la teinte RAL des menuiseries. Les points à vérifier avant de s&apos;engager sont la nature du
        support et la qualité de la fixation, l&apos;amenée d&apos;une alimentation électrique pour la motorisation, et
        la largeur de la baie : au-delà d&apos;une certaine dimension, on scinde en deux tabliers.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation d'urbanisme pour poser un brise-soleil ou un store extérieur ?",
    r: (
      <>
        Poser un brise-soleil, un store screen ou des lames architecturales modifie l&apos;aspect extérieur de la
        maison : selon la commune et la zone, cela peut relever d&apos;une déclaration préalable de travaux, en
        particulier en secteur protégé ou aux abords d&apos;un monument historique. Les règles de teinte imposées par
        certains PLU concernent aussi les coffres et les toiles. Nous vérifions le règlement d&apos;urbanisme de votre
        commune avant d&apos;arrêter la teinte et le dessin de la protection.
      </>
    ),
  },
  {
    q: 'Quel entretien pour une protection solaire en aluminium ?',
    r: (
      <>
        Très peu, mais il n&apos;est pas nul. Un lavage à l&apos;eau tiède savonneuse des profilés thermolaqués une à
        deux fois par an suffit à préserver la finition, avec un chiffon doux et surtout aucun produit abrasif ni
        nettoyeur haute pression. Le reste consiste à dégager les coulisses des gravillons, poussières et insectes, à
        vérifier joints et brosses, et à contrôler une fois par an la manœuvre, les fixations et le bon fonctionnement
        du capteur de vent. Sur un store screen, la toile est la seule pièce d&apos;usure et se remplace sans changer
        le coffre.
      </>
    ),
  },
];

export default function ArticleProtectionSolairePage() {
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
              height="825"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Store screen extérieur à zip déployé en protection solaire sous une pergola aluminium, chantier L'Esprit Bois en Gironde"
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
              <span className="text-secondary-fixed">Protection solaire</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Protections solaires aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Brise-soleil orientable ou store extérieur : quelle protection solaire pour vos baies vitrées en Gironde ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">person</span>
                <a
                  href="/auteur/david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>10 août 2026</span>
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
                Une protection solaire n&apos;est efficace que si elle arrête le rayonnement dehors, avant le vitrage :
                un store intérieur ne fait que gérer une chaleur déjà entrée. Ensuite, tout se joue sur
                l&apos;orientation de la façade — au sud, le soleil d&apos;été passe haut et un brise-soleil orientable
                ou une casquette fixe suffisent à couper le direct ; à l&apos;ouest et au sud-ouest, il arrive rasant en
                fin de journée et seule une toile verticale, un store screen à zip ou un tablier descendu tient
                vraiment.
              </strong>{' '}
              Sur nos chantiers en Gironde, c&apos;est cette lecture de façade qui décide, pas le catalogue. Voici
              comment trancher entre brise-soleil orientable, store screen extérieur et brise-soleil fixe, avec ce que
              chacun coûte et ce que chacun demande dans le temps.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1 — Pourquoi l'extérieur change tout */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi une protection extérieure change tout (et pas un store intérieur)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le verre laisse passer le rayonnement solaire presque sans le freiner. Ce qui traverse votre baie
                coulissante n&apos;est pas encore de la chaleur : c&apos;est de la lumière et de l&apos;infrarouge, qui
                se transforment en chaleur dès qu&apos;ils touchent un carrelage, une cloison, un canapé. Et une fois
                cette énergie à l&apos;intérieur, elle y reste : la dalle et les murs la stockent, puis la restituent
                dans la soirée, bien après le coucher du soleil.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est tout le problème du store intérieur.{' '}
                <strong className="text-primary font-semibold">Il travaille trop tard.</strong> Il reste utile contre
                l&apos;éblouissement et la décoloration des sols et des meubles, mais il intervient après le vitrage.
                L&apos;ADEME est claire sur ce point dans ses conseils pour{' '}
                <a
                  href="https://agirpourlatransition.ademe.fr/particuliers/proteger-sante/periode-canicule/canicule-comment-garder-logement-frais"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  garder son logement au frais en période de canicule
                </a>{' '}
                : les protections extérieures sont plus efficaces que les stores intérieurs, il faut les fermer{' '}
                <em>avant</em> que le soleil ne frappe la façade, et privilégier des teintes claires, qui réfléchissent
                davantage le rayonnement.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ce n&apos;est pas un détail de confort. Sur les constructions neuves, la RE2020 a fait du{' '}
                <a
                  href="https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  confort d&apos;été
                </a>{' '}
                un objectif à part entière — une garantie de confort en cas de forte chaleur. C&apos;est pour cela
                qu&apos;on voit aujourd&apos;hui, sur les maisons neuves très vitrées, des brise-soleil orientables
                prévus dès le dépôt du permis, et non ajoutés trois étés plus tard dans l&apos;urgence.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-2.webp"
              w={768}
              h={512}
              alt="Protection solaire extérieure à toile microperforée descendue devant un vitrage, vue depuis l'intérieur"
              caption="Vu de l'intérieur : la toile est dehors, devant le verre. C'est là que le rayonnement doit être arrêté — un store posé côté pièce arrive après la bataille."
            />

            {/* 2 — Lire sa façade */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lire sa façade avant de choisir : sud, ouest, est, nord
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est l&apos;étape que presque personne ne fait, et c&apos;est pourtant elle qui désigne le bon
                dispositif. Le soleil ne frappe pas de la même manière selon la façade, et une protection parfaite au
                sud peut être quasi inutile à l&apos;ouest.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Plein sud', 'en été, le soleil passe haut au-dessus de la maison. Un dispositif horizontal — casquette, débord de toiture, lames fixes, tablier partiellement descendu — suffit à couper le direct aux heures les plus chaudes. Et en hiver, le soleil bas passe dessous et vient chauffer gratuitement la pièce : c’est exactement ce qu’on cherche.'],
                  ['Ouest et sud-ouest', 'le vrai problème sous nos latitudes. En juillet-août, de la fin d’après-midi jusqu’au coucher, le rayonnement arrive presque à l’horizontale, dans l’axe de la baie. Aucun débord de toit ne l’arrête. Il faut une surface verticale devant le vitrage : store screen, tablier de brise-soleil descendu lames fermées, ou lames verticales orientées.'],
                  ['Est', 'soleil du matin, sur une maison encore fraîche de la nuit : moins pénalisant thermiquement, mais souvent gênant pour l’éblouissement dans une cuisine ou un bureau. Une protection légère, réglable, suffit.'],
                  ['Nord', 'rarement nécessaire. On n’y installe une protection que pour un besoin d’intimité ou de lumière diffuse, pas pour la chaleur.'],
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
                À <strong className="text-primary font-semibold">Libourne et dans la vallée de la Dordogne</strong>, nous
                intervenons sur deux parcs très différents. Les maisons anciennes en pierre, aux murs épais et aux
                ouvertures modestes, encaissent bien : elles ont de l&apos;inertie, et le sujet se limite souvent à une
                extension ou à une baie percée récemment. Les constructions des vingt dernières années, dans les
                lotissements de la couronne libournaise, sont l&apos;inverse : très vitrées, orientées séjour au
                sud-ouest pour la vue sur le jardin, avec une isolation performante qui garde la chaleur… une fois
                qu&apos;elle est entrée. Ce sont elles qui justifient une protection solaire extérieure, et presque
                toujours sur la façade ouest en premier.
              </p>
            </section>

            {/* 3 — BSO */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le brise-soleil orientable (BSO) : régler l&apos;ombre sans occulter
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le brise-soleil orientable est un tablier de{' '}
                <strong className="text-primary font-semibold">lames aluminium orientables</strong> qui descend devant
                la baie, guidé par deux coulisses latérales et remonté dans un coffre posé en linteau. Sa force tient en
                un mot : le réglage. Lames à plat, vous occultez presque totalement ; lames inclinées, vous coupez le
                rayonnement direct tout en laissant entrer une lumière naturelle abondante et en gardant une vue vers le
                jardin. Vous ne choisissez plus entre le noir et la fournaise.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Techniquement, tout se joue sur trois pièces : la lame (son profil, sa rigidité, sa finition), les
                coulisses (qui tiennent le tablier au vent) et la motorisation, radio ou filaire, qui commande à la fois
                la descente et l&apos;orientation. Deux modes de pose coexistent : en neuf ou en rénovation lourde, le
                coffre s&apos;intègre dans l&apos;épaisseur de l&apos;isolation et disparaît complètement ; en
                rénovation simple, il se pose en applique et reste visible. Dans ce second cas, la teinte n&apos;est pas
                anecdotique — un coffre thermolaqué dans le{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  RAL de vos menuiseries
                </a>{' '}
                se fait oublier, un coffre dans un ton approximatif saute aux yeux depuis la rue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ses limites, nous les disons aussi : c&apos;est un ouvrage mécanisé, donc plus cher qu&apos;une toile,
                il demande une alimentation électrique, et il doit se relever au-delà d&apos;un certain seuil de vent —
                d&apos;où le capteur dont nous parlons plus bas. Sur une baie très large, on scinde en deux tabliers
                plutôt que d&apos;étirer un tablier unique au-delà du raisonnable.
              </p>
            </section>

            <DuoFigure
              a={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-9.webp',
                w: 768,
                h: 512,
                alt: "Lames aluminium orientables inclinées filtrant le soleil, principe du brise-soleil orientable",
                caption: "Le principe du BSO : l’inclinaison des lames dose l’ombre au degré près, sans jamais occulter.",
              }}
              b={{
                src: '/images/source-adefrance/Pergolas-aluminium-Libourne-7.webp',
                w: 768,
                h: 512,
                alt: 'Store screen extérieur à toile microperforée descendu devant une grande baie vitrée coulissante',
                caption: 'La toile screen couvre toute la largeur d’un seul tenant : c’est ce qui la rend imbattable sur les très grandes baies.',
              }}
            />

            {/* 4 — Store screen */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le store screen extérieur : la toile microperforée pour les grandes baies
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le store screen, c&apos;est une{' '}
                <strong className="text-primary font-semibold">toile technique microperforée</strong> tendue devant le
                vitrage, guidée par des coulisses — les meilleures versions étant les modèles à zip, où la toile est
                maintenue par une glissière continue sur toute sa hauteur. Le tissage laisse passer une part de lumière :
                de l&apos;intérieur, on continue de voir dehors, en tamisé, comme derrière des lunettes de soleil.
                L&apos;ouverture de la toile — sa densité de perforation — décide de cet équilibre entre vue conservée
                et rayonnement arrêté ; c&apos;est le choix que nous faisons avec vous, échantillon en main.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il l&apos;emporte dans trois cas très concrets :{' '}
                <strong className="text-primary font-semibold">les grandes surfaces vitrées</strong>, où il couvre de
                grandes largeurs avec un coffre discret ;{' '}
                <strong className="text-primary font-semibold">la façade ouest</strong>, où le soleil rasant exige une
                surface verticale continue et où l&apos;orientation de lames n&apos;apporte rien ; et{' '}
                <strong className="text-primary font-semibold">les budgets plus contenus</strong>, puisqu&apos;il coûte
                sensiblement moins qu&apos;un brise-soleil orientable à baie équivalente.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ses limites sont franches. Pas de réglage d&apos;angle : on module par la hauteur de descente, c&apos;est
                tout. La toile est un consommable — pas fragile, mais elle vieillit et finit par se remplacer, sans
                toucher au coffre ni aux coulisses. Et le soir, dès que l&apos;éclairage intérieur est allumé, une toile
                claire ne protège plus vraiment des regards : ce n&apos;est pas un occultant, ce n&apos;est pas un
                volet.
              </p>
            </section>

            {/* 5 — Brise-soleil fixe */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Brise-soleil fixe, casquette et lames architecturales : zéro mécanique
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La troisième famille ne bouge pas, et c&apos;est précisément son intérêt. Une casquette aluminium au-dessus
                d&apos;une baie, un ensemble de lames horizontales en avancée, un claustra de lames verticales devant une
                façade ouest :{' '}
                <strong className="text-primary font-semibold">
                  rien à motoriser, rien à remonter avant un coup de vent, rien à réparer
                </strong>
                . On dessine l&apos;ombre une fois pour toutes, avec la profondeur d&apos;avancée et l&apos;écartement
                des lames comme seuls réglages — figés à la conception.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le principe de dimensionnement est simple à énoncer : l&apos;ouvrage est calculé pour intercepter le
                soleil haut de l&apos;été, tout en laissant passer sous lui le soleil bas de l&apos;hiver, qui reste un
                apport gratuit. C&apos;est ce que faisaient les larges débords de toiture des maisons anciennes, en
                version contemporaine et en profilés aluminium thermolaqués, choisis dans la même teinte RAL que les
                menuiseries ou en contraste assumé.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Les contraintes, elles, sont réelles. Aucun réglage : un après-midi couvert de fin août, vous gardez
                l&apos;ombre que vous n&apos;avez pas demandée. Le dessin doit être arrêté en amont, idéalement lors
                d&apos;une construction, d&apos;une extension ou d&apos;une reprise de façade. Et la fixation mérite
                autant d&apos;attention que le dessin : platines, reprise sur un élément porteur, traitement du passage
                à travers une isolation extérieure — un brise-soleil fixe pèse et prend le vent, il ne se cheville pas
                dans un doublage.
              </p>
            </section>

            <Figure
              src="/images/blog/protection-solaire-brise-soleil-orientable/brise-soleil-fixe-lames-aluminium-facade.webp"
              w={1200}
              h={800}
              alt="Brise-soleil fixe en lames aluminium horizontales devant les vitrages d'une façade contemporaine"
              caption="Sur un brise-soleil fixe, tout se décide au dessin : la profondeur d'avancée et l'écartement des lames sont les deux seuls réglages, et ils sont figés."
            />

            {/* 6 — Vent, automatismes, entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Vent, automatismes et entretien : ce qui fait durer une protection solaire en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une protection solaire extérieure vit dehors, exposée. Ce qui la tue prématurément n&apos;est presque
                jamais le soleil :{' '}
                <strong className="text-primary font-semibold">c&apos;est le vent, et l&apos;oubli de la remonter.</strong>{' '}
                Les fabricants classent leurs stores extérieurs selon leur tenue au vent, et l&apos;écart entre systèmes
                est considérable : une toile guidée par coulisses à zip encaisse bien davantage qu&apos;un modèle tenu
                par de simples câbles, et un tablier de lames doit impérativement se relever au-delà d&apos;un certain
                seuil. Cette classe se lit sur la fiche du produit ; nous la vérifions au regard de l&apos;exposition
                réelle de votre façade, pas d&apos;une moyenne départementale.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                D&apos;où la règle que nous appliquons systématiquement :{' '}
                <strong className="text-primary font-semibold">
                  sur une façade exposée, un store motorisé se pose avec un capteur de vent
                </strong>{' '}
                relié à l&apos;automatisme, qui déclenche la remontée sans vous. C&apos;est ce qui sauve le tablier
                l&apos;après-midi où une rafale traverse la vallée pendant que vous êtes au travail.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Au-delà de la sécurité, l&apos;automatisme est ce qui rend la protection réellement efficace. Une sonde
                d&apos;ensoleillement, une programmation horaire ou un scénario domotique ferment la protection{' '}
                <em>avant</em> que la façade ne chauffe, y compris maison vide — exactement le geste que recommande
                l&apos;ADEME, et exactement celui qu&apos;on oublie de faire à la main. Un capteur de température
                intérieure, un pilotage depuis le téléphone, une remontée automatique au coucher du soleil : ce sont des
                options peu coûteuses au moment de la pose, très chères à rajouter après.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Côté entretien, l&apos;aluminium thermolaqué est peu exigeant, mais pas autonome :
              </p>
              <ul className="space-y-3">
                {[
                  'Laver les profilés thermolaqués une à deux fois par an à l’eau tiède savonneuse, chiffon doux — jamais de produit abrasif, de solvant ni de nettoyeur haute pression sur une finition ou une toile.',
                  'Dégager les coulisses : gravillons, poussières agricoles, nids d’insectes. Une coulisse encrassée fatigue le moteur bien avant d’immobiliser le tablier.',
                  'Vérifier une fois par an les joints, les brosses de coulisse, les fixations et la manœuvre complète, capteur de vent compris.',
                  'Sur un store screen, contrôler l’état de la toile et son enroulement : c’est la seule pièce d’usure, remplaçable sans changer le coffre.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <Figure
              src="/images/source-adefrance/construction-pool-house-aluminium-libourne-3.webp"
              w={1200}
              h={800}
              alt="Coffre et coulisses en aluminium thermolaqué anthracite d'un store extérieur motorisé, sous des lames orientables"
              caption="Coffre et coulisses thermolaqués dans la teinte de la structure : c'est aussi la coulisse qui tient la toile au vent, d'où l'intérêt d'un guidage à zip."
            />

            {/* 7 — Budget et arbitrage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 et arbitrage : protection solaire, pergola bioclimatique ou véranda ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici les ordres de grandeur que nous constatons{' '}
                <strong className="text-primary font-semibold">sur nos propres chantiers en 2026</strong>, pose comprise,
                pour une baie de séjour courante — ce ne sont pas des tarifs de marché, et ils bougent beaucoup avec la
                largeur, la hauteur, le type de pose et le niveau d&apos;automatisme :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  ['Store screen extérieur motorisé', 'de l’ordre de 900 à 1 800 € par baie ; le modèle à zip, plus résistant au vent, se situe dans le haut de la fourchette.'],
                  ['Brise-soleil orientable motorisé', 'de l’ordre de 1 300 à 2 600 € par baie en pose en applique ; l’intégration du coffre dans l’isolation, en neuf ou en rénovation lourde, ajoute au poste maçonnerie plus qu’au poste store.'],
                  ['Brise-soleil fixe ou casquette aluminium sur mesure', 'très variable selon le dessin et la portée : l’étude et la fixation pèsent souvent plus lourd que les profilés eux-mêmes.'],
                  ['Automatismes', 'capteur de vent, sonde d’ensoleillement, pilotage centralisé : un supplément modeste à la pose, sans commune mesure avec le coût d’un ajout après coup.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Solution</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
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
                Reste l&apos;arbitrage le plus utile, et nous préférons le poser franchement :{' '}
                <strong className="text-primary font-semibold">
                  si c&apos;est la terrasse qu&apos;il faut ombrer, et non la baie, aucune de ces solutions n&apos;est la
                  bonne.
                </strong>{' '}
                Un brise-soleil protège un vitrage ; il ne rend pas votre terrasse vivable à 16 h. Dans ce cas, la
                réponse est une{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola bioclimatique
                </a>{' '}
                — qui, en ombrant l&apos;espace extérieur devant la baie, protège d&apos;ailleurs souvent le vitrage par
                la même occasion. Nous détaillons ce produit, ses lames orientables de toiture et ses stores latéraux
                dans notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique en aluminium
                </a>
                . Et si le besoin est de gagner une vraie pièce lumineuse plutôt que de l&apos;ombre, c&apos;est vers la{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  véranda aluminium
                </a>{' '}
                qu&apos;il faut regarder — avec, là aussi, la question du confort d&apos;été à traiter dès la
                conception.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dernier point avant de commander : une protection extérieure modifie l&apos;aspect de la façade. Selon
                votre commune et votre zone, notamment en secteur protégé ou aux abords d&apos;un monument, cela peut
                relever d&apos;une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>
                , et certains PLU imposent des teintes. Nous vérifions le règlement avant d&apos;arrêter le RAL et le
                dessin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Une précision qui compte, à Libourne comme ailleurs en Gironde :{' '}
                <strong className="text-primary font-semibold">nous vendons et posons le bois et l&apos;aluminium</strong>
                . Nous n&apos;avons donc aucun intérêt à vous pousser vers une matière plutôt qu&apos;une autre — sur les
                protections solaires, l&apos;aluminium s&apos;impose simplement par la finesse des profilés, la
                motorisation et l&apos;absence d&apos;entretien de surface, et nous le disons sans détour. Vous pouvez
                voir nos ouvrages alu et bois dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , et l&apos;ensemble de nos prestations sur la page{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
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
              Protection solaire extérieure : vos questions
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
              La bonne protection solaire est celle que dicte votre façade
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Arrêter le soleil dehors, avant le vitrage, puis choisir le dispositif selon l&apos;orientation : brise-soleil
              orientable au sud pour doser la lumière, store screen à zip sur les grandes baies d&apos;ouest, brise-soleil
              fixe quand on ne veut aucune mécanique. C&apos;est le diagnostic que nous menons chez L&apos;Esprit Bois,
              entreprise certifiée Qualibat à Libourne et dans toute la Gironde — protections solaires, pergolas
              bioclimatiques et vérandas aluminium, formalités d&apos;urbanisme comprises.
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
