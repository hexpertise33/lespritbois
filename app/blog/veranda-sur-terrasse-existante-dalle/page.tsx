import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Photo Kyan Tijhuis (@kyantijhuis) sur Unsplash, licence Unsplash ; ce n'est pas un chantier, ne pas la géolocaliser.
const COVER = '/images/blog/veranda-sur-terrasse-existante-dalle/veranda-structure-blanche-accolee-maison-vue-jardin.webp';

export const metadata: Metadata = buildMetadata({
  title: "Véranda sur terrasse existante en Gironde : la dalle d'abord",
  description:
    "Véranda sur terrasse existante : portance des rives, niveau du seuil, pente et sol froid. Les 4 examens avant l'aluminium, à Libourne (Gironde).",
  keywords:
    'véranda sur terrasse existante, dalle pour véranda, isolation du sol de véranda, véranda de plain-pied, poser une véranda sur une terrasse carrelée, véranda sur terrasse bois, seuil véranda, véranda aluminium Libourne, véranda Gironde, véranda aluminium Gironde',
  path: '/blog/veranda-sur-terrasse-existante-dalle',
  ogImage: COVER,
  ogTitle: "Poser une véranda sur sa terrasse existante : ce que le sol doit valoir avant l'aluminium",
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
        name: 'Véranda sur terrasse existante',
        item: 'https://lesprit-bois.fr/blog/veranda-sur-terrasse-existante-dalle',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Poser une véranda sur sa terrasse existante : ce que le sol doit valoir avant l'aluminium",
    description:
      "Une véranda aluminium se pose sur une dalle, pas sur une terrasse. La terrasse existante n'est réutilisable que si elle passe quatre examens : portance des rives sous les poteaux et le soubassement, niveau par rapport au seuil de la maison, pente d'écoulement, sol froid non isolé. Sinon on la reprend ou on la démolit. Le guide d'un artisan à Libourne, en Gironde.",
    image: {
      '@type': 'ImageObject',
      url: 'https://lesprit-bois.fr' + COVER,
      width: 1200,
      height: 800,
    },
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
    datePublished: '2026-11-03',
    dateModified: '2026-11-03',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/veranda-sur-terrasse-existante-dalle',
    },
    about: [
      { '@type': 'Thing', name: 'véranda aluminium' },
      { '@type': 'Thing', name: 'dalle de véranda' },
      { '@type': 'Thing', name: 'isolation du sol' },
      { '@type': 'Thing', name: 'seuil de plain-pied' },
      { '@type': 'Thing', name: 'terrasse existante' },
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
        name: 'Peut-on poser une véranda directement sur une terrasse carrelée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parfois, jamais sans l'avoir examinée. Une terrasse carrelée peut servir de dalle à une véranda si ses rives sont fondées pour porter les poteaux et le soubassement, si elle n'a ni fissure active ni affaissement, si sa pente et son niveau sont compatibles avec le seuil de la maison, et si l'on peut isoler le sol sans créer de marche. Le carrelage lui-même n'est pas un support de fixation : c'est ce qu'il y a dessous qui compte.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il casser sa terrasse pour faire une véranda ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas systématiquement. Entre garder la terrasse telle quelle et la démolir, il existe une voie intermédiaire : la reprendre, en créant des appuis sous les rives, en rattrapant le niveau ou en isolant par-dessus. On démolit quand les rives ne portent pas, quand la dalle a bougé ou quand la hauteur disponible sous le seuil de la maison ne permet pas d'isoler. Ce n'est pas un échec : c'est souvent ce poste qui décide du confort de la pièce.",
        },
      },
      {
        '@type': 'Question',
        name: "Comment éviter d'avoir un sol froid dans une véranda posée sur une ancienne terrasse ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En isolant le sol, ce qu'une terrasse extérieure n'a jamais eu besoin d'être. Les solutions courantes sont un isolant posé sur la dalle puis recouvert d'une chape, un plancher technique surélevé qui intègre l'isolation, et l'isolation des rives de la dalle, exposées à l'air extérieur. Chacune rehausse plus ou moins le sol fini : c'est pourquoi le choix se fait en même temps que celui du seuil, sur relevé.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser une véranda sur une terrasse en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas en l'état. Une terrasse bois sur plots ou sur lambourdes est conçue pour laisser passer l'eau et sécher par ventilation, sur des appuis dimensionnés pour la marche et le mobilier, pas pour les poteaux d'une structure vitrée. Une fois fermée, sa sous-face ne sèche plus de la même façon et le sol ne peut pas être isolé. On dépose la terrasse et l'on crée un support adapté, ou l'on choisit un ouvrage ouvert dont les poteaux ont leurs propres appuis.",
        },
      },
      {
        '@type': 'Question',
        name: "Transformer sa terrasse en véranda change-t-il la taxe d'aménagement ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui. Une terrasse découverte ne crée pas de surface taxable, alors qu'une véranda close et couverte en crée : selon economie.gouv.fr, la taxe d'aménagement porte sur les surfaces closes et couvertes de plus de 5 m² dont la hauteur sous plafond atteint au moins 1,80 m. Le montant dépend de la commune et du département ; il se vérifie sur les fiches officielles, en même temps que la déclaration préalable ou le permis.",
        },
      },
    ],
  },
];

const faq = [
  {
    q: 'Peut-on poser une véranda directement sur une terrasse carrelée ?',
    r: (
      <>
        Parfois, jamais sans l&apos;avoir examinée. Une terrasse carrelée peut servir de dalle à une véranda si ses rives
        sont fondées pour porter les poteaux et le soubassement, si elle n&apos;a ni fissure active ni affaissement, si
        sa pente et son niveau sont compatibles avec le seuil de la maison, et si l&apos;on peut isoler le sol sans créer
        de marche. Le carrelage lui-même n&apos;est pas un support de fixation : c&apos;est ce qu&apos;il y a dessous qui
        compte.
      </>
    ),
  },
  {
    q: 'Faut-il casser sa terrasse pour faire une véranda ?',
    r: (
      <>
        Pas systématiquement. Entre garder la terrasse telle quelle et la démolir, il existe une voie intermédiaire : la
        reprendre, en créant des appuis sous les rives, en rattrapant le niveau ou en isolant par-dessus. On démolit
        quand les rives ne portent pas, quand la dalle a bougé ou quand la hauteur disponible sous le seuil de la maison
        ne permet pas d&apos;isoler. Ce n&apos;est pas un échec : c&apos;est souvent ce poste qui décide du confort de
        la pièce.
      </>
    ),
  },
  {
    q: "Comment éviter d'avoir un sol froid dans une véranda posée sur une ancienne terrasse ?",
    r: (
      <>
        En isolant le sol, ce qu&apos;une terrasse extérieure n&apos;a jamais eu besoin d&apos;être. Les solutions
        courantes sont un isolant posé sur la dalle puis recouvert d&apos;une chape, un plancher technique surélevé qui
        intègre l&apos;isolation, et l&apos;isolation des rives de la dalle, exposées à l&apos;air extérieur. Chacune
        rehausse plus ou moins le sol fini : c&apos;est pourquoi le choix se fait en même temps que celui du seuil, sur
        relevé.
      </>
    ),
  },
  {
    q: 'Peut-on poser une véranda sur une terrasse en bois ?',
    r: (
      <>
        Pas en l&apos;état. Une terrasse bois sur plots ou sur lambourdes est conçue pour laisser passer l&apos;eau et
        sécher par ventilation, sur des appuis dimensionnés pour la marche et le mobilier, pas pour les poteaux
        d&apos;une structure vitrée. Une fois fermée, sa sous-face ne sèche plus de la même façon et le sol ne peut pas
        être isolé. On dépose la terrasse et l&apos;on crée un support adapté, ou l&apos;on choisit un ouvrage ouvert
        dont les poteaux ont leurs propres appuis.
      </>
    ),
  },
  {
    q: "Transformer sa terrasse en véranda change-t-il la taxe d'aménagement ?",
    r: (
      <>
        Oui. Une terrasse découverte ne crée pas de surface taxable, alors qu&apos;une véranda close et couverte en
        crée : selon economie.gouv.fr, la taxe d&apos;aménagement porte sur les surfaces closes et couvertes de plus de
        5 m² dont la hauteur sous plafond atteint au moins 1,80 m. Le montant dépend de la commune et du département ;
        il se vérifie sur les fiches officielles, en même temps que la déclaration préalable ou le permis.
      </>
    ),
  },
];

export default function ArticleVerandaSurTerrasseExistanteDallePage() {
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
              alt="Véranda vitrée à structure blanche accolée à une maison à toit de tuiles, vue depuis le jardin"
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
              <span className="text-secondary-fixed">Véranda sur terrasse existante</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Vérandas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Poser une véranda sur sa terrasse existante : ce que le sol doit valoir avant l&apos;aluminium
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
              <span>3 novembre 2026</span>
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
                Une véranda aluminium ne se pose pas sur une terrasse : elle se pose sur une dalle. Votre terrasse
                existante peut jouer ce rôle à condition de passer quatre examens : des rives capables de porter les
                poteaux et le soubassement, un niveau cohérent avec le seuil de la maison, une pente qui ne devienne pas
                un défaut une fois à l&apos;intérieur, et un sol qui ne refroidisse pas la pièce. Si elle échoue, on la
                reprend ou on la démolit.
              </strong>{' '}
              Ce n&apos;est pas un échec de chantier, c&apos;est souvent le poste qui décide du confort. Nous vendons et
              posons des vérandas aluminium autour de Libourne, et la première question que nous posons sur place ne
              concerne ni les profilés ni la teinte RAL : elle concerne ce qu&apos;il y a sous vos pieds. Voici comment
              nous l&apos;examinons, et ce que vous pouvez déjà observer vous-même.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Terrasse ou dalle */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Terrasse ou dalle : ce que la véranda demande vraiment au sol
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse a été pensée pour la marche, le mobilier de jardin et la pluie. Les charges y sont faibles et
                réparties, l&apos;eau doit partir vers le jardin, et un léger mouvement du sol passe inaperçu : au pire, un
                joint de carrelage se fend. Une véranda demande tout autre chose. Le poids de la structure, des vitrages et
                de la toiture ne se répartit pas sur toute la surface :{' '}
                <strong className="text-primary font-semibold">
                  il descend par les poteaux et le long du soubassement, donc sur les rives
                </strong>
                . Or les rives sont souvent la partie la moins soignée d&apos;une terrasse : un bord coulé contre un
                coffrage, parfois sur du remblai, sans fondation dessous.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La seconde exigence est la stabilité. Une véranda aluminium est un ouvrage précis : les vantaux
                coulissants roulent sur des rails, les vitrages sont tenus dans des feuillures, les profilés sont
                assemblés d&apos;équerre et l&apos;étanchéité tient par des joints continus. Un support qui
                s&apos;affaisse, même un peu, se lit tout de suite : un coulissant qui frotte, un ouvrant qui ne ferme plus
                droit, un joint qui travaille, puis une infiltration. Ce qu&apos;une terrasse tolère sans broncher, une
                véranda le montre.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Passer de la terrasse à la véranda change aussi le statut de la surface. Une terrasse découverte ne crée
                pas de surface taxable ; une véranda close et couverte, si. Selon{' '}
                <a
                  href="https://www.economie.gouv.fr/particuliers/taxe-amenagement"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  economie.gouv.fr
                </a>
                , la taxe d&apos;aménagement porte sur les surfaces closes et couvertes de plus de 5 m² dont la hauteur
                sous plafond atteint au moins 1,80 m ; la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F23263"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiche officielle de la taxe d&apos;aménagement
                </a>{' '}
                détaille son calcul. Nous ne redétaillons pas ici les formalités : elles sont traitées dans notre guide{' '}
                <a href="/blog/veranda-aluminium-isolation-urbanisme-budget" className={lienInterne}>
                  véranda aluminium, de l&apos;isolation à l&apos;urbanisme et au budget
                </a>{' '}
                et dans notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-sur-terrasse-existante-dalle/rive-terrasse-dallee-contact-jardin.webp"
              w={1200}
              h={900}
              alt="Terrasse dallée surélevée accolée à une maison, rive en briques au contact de la terre du jardin, là où reposeraient les poteaux d'une véranda"
              caption="Ici, la rive est un bord maçonné qui affleure la terre du jardin : savoir ce qu'il y a dessous, fondation ou simple remblai, c'est le premier examen avant une véranda. Photo Brett Jordan, Unsplash."
            />

            {/* 2. Les quatre examens */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Une terrasse carrelée existante : les quatre examens
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur nos visites, une terrasse carrelée accolée à la maison est le cas le plus fréquent. Elle n&apos;est ni
                bonne ni mauvaise par principe : elle se juge sur quatre points, dans cet ordre.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["La portance des rives", "y a-t-il une fondation sous le bord de la terrasse, là où viendront les poteaux et le soubassement ? Cela ne se voit pas en surface : il faut sonder au pied de la rive, côté jardin, pour savoir sur quoi elle repose."],
                  ["Les fissures et l'affaissement", "une fissure fine et ancienne, stable, n'a pas le même sens qu'une fissure qui s'ouvre, qui décale deux parties de dalle ou qui suit le bord. Un carreau qui sonne creux, un joint qui s'effrite toujours au même endroit, une flaque qui stagne là où elle ne stagnait pas : autant d'indices d'un support qui a bougé."],
                  ["La pente", "une terrasse est coulée en pente pour évacuer la pluie vers le jardin. C'était une qualité dehors ; dedans, c'est un sol qui penche sous les meubles, et un appui qui n'est pas de niveau pour les profilés."],
                  ["Le niveau", "où se situe la terrasse par rapport au seuil de la porte-fenêtre de la maison et par rapport au jardin ? C'est ce rapport qui dira si l'on peut isoler le sol sans créer de marche ni ramener l'eau vers la maison."],
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
                Un mot sur le carrelage :{' '}
                <strong className="text-primary font-semibold">il ne porte rien</strong>. Les fixations de la véranda
                traversent le revêtement pour aller chercher le support, et un carrelage extérieur décollé par endroits
                n&apos;offre pas une assise sur laquelle on peut compter. Ce que l&apos;on évalue, c&apos;est la dalle
                dessous, et ce qu&apos;il y a sous la dalle.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si vous remplacez une ancienne véranda plutôt que d&apos;en créer une, la question se pose autrement : la
                dalle a déjà porté un ouvrage, avec ses qualités et ses défauts. Nous l&apos;avons traitée dans notre guide
                pour{' '}
                <a href="/blog/remplacer-veranda-ancienne-aluminium-renovation" className={lienInterne}>
                  remplacer une ancienne véranda par une véranda aluminium
                </a>
                .
              </p>
            </section>

            {/* 3. Niveau et seuil */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le niveau et le seuil : rester de plain-pied sans ramener l&apos;eau vers la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Presque tous nos clients veulent une véranda de plain-pied avec le séjour : pas de marche entre la maison
                et la pièce neuve, un seul sol qui se prolonge. C&apos;est légitime, et c&apos;est souvent là que la
                terrasse existante se révèle trop haute, trop basse ou trop pentue. Trois contraintes doivent tenir
                ensemble :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["Le plain-pied avec la maison", "le sol fini de la véranda, isolant et revêtement compris, doit arriver au niveau du sol intérieur existant. Toute couche ajoutée sur la terrasse rehausse ce sol fini."],
                  ["La garde par rapport à l'extérieur", "le sol de la véranda doit rester au-dessus du terrain et de la terrasse extérieure qui l'entourent, pour que la pluie, le ruissellement et les flaques restent dehors. Une véranda dont le sol est au niveau du jardin récupère l'eau au pied de ses vitrages."],
                  ["Un seuil qui rejette l'eau dehors", "côté jardin, le seuil des coulissants doit évacuer l'eau vers l'extérieur et reposer sur un appui sain et de niveau. C'est un point d'étanchéité à part entière, pas un détail de finition."],
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
                La pente de la terrasse complique l&apos;équation. Les profilés demandent un appui de niveau : on rattrape
                donc la pente, dans une chape, dans un ragréage ou au calage du soubassement. Si la terrasse descend vers
                le jardin, c&apos;est faisable, au prix d&apos;une épaisseur variable. Si elle penche vers la maison, ce
                qui arrive plus souvent qu&apos;on ne le croit, c&apos;est un signal d&apos;alerte : l&apos;eau a déjà
                pris l&apos;habitude de venir contre la façade, et il faut regarder l&apos;état du mur avant de le couvrir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Enfin, l&apos;eau ne disparaît pas avec la véranda : elle change de chemin. La pluie qui tombait sur la
                terrasse est désormais recueillie par la toiture, conduite dans un chéneau puis dans les descentes.{' '}
                <strong className="text-primary font-semibold">
                  Où ces descentes se rejettent-elles ?
                </strong>{' '}
                Une descente qui finit au pied de la nouvelle dalle remet l&apos;eau exactement là où l&apos;on ne la
                veut pas. Cela se décide au relevé, avec le reste des niveaux.
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-sur-terrasse-existante-dalle/interieur-veranda-sol-carrele-pied-vitrages.webp"
              w={1200}
              h={675}
              alt="Intérieur d'une véranda à toiture vitrée : sol carrelé, bande sombre au pied des vitrages et baie coulissante ouvrant sur le jardin"
              caption="Au pied des vitrages, une bande continue sépare le carrelage des profilés et reçoit le rail du coulissant : c'est à ce niveau que se jouent le plain-pied avec la maison et la garde par rapport au dehors. Photo Kaudia Estate, Unsplash."
            />

            {/* 4. Le sol froid */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le sol froid : pourquoi une dalle extérieure gâche une véranda chauffée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse n&apos;a jamais été isolée, et elle n&apos;avait aucune raison de l&apos;être. Une fois
                couverte et fermée, elle devient pourtant le plancher d&apos;une pièce que l&apos;on veut chauffer. Sa
                dalle, posée sur la terre et bordée par l&apos;air extérieur, reste froide : elle refroidit les pieds,
                pompe une partie du chauffage et ajoute une grande surface froide à des parois vitrées qui le sont déjà
                davantage qu&apos;un mur.{' '}
                <strong className="text-primary font-semibold">
                  On peut choisir les meilleurs profilés à rupture de pont thermique et les meilleurs vitrages : si le sol
                  reste celui d&apos;une terrasse, la pièce restera inconfortable l&apos;hiver.
                </strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un sol froid favorise aussi la condensation dans les angles bas, là où l&apos;air refroidi descend le long
                des vitrages. Nous expliquons ce mécanisme dans notre article sur{' '}
                <a href="/blog/condensation-veranda-aluminium-hiver" className={lienInterne}>
                  la condensation dans une véranda en hiver
                </a>
                . Trois familles de réponses existent :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["Un isolant sur la dalle, puis une chape", "la dalle existante sert de support, on y pose un isolant adapté aux sols, recouvert d'une chape qui reçoit le revêtement. C'est la solution la plus courante quand la hauteur disponible sous le seuil le permet."],
                  ["Un plancher technique surélevé", "une structure réglable posée sur la dalle, qui intègre l'isolation et rattrape la pente sans chape lourde. Elle aide quand la terrasse est irrégulière, à condition, là encore, d'avoir la hauteur."],
                  ["L'isolation périphérique des rives", "les bords de la dalle, exposés à l'air du dehors, conduisent le froid sous toute la pièce. Les isoler par l'extérieur traite une fuite de chaleur que l'on oublie souvent, et complète les deux solutions précédentes."],
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
                Nous ne donnons volontairement aucune épaisseur ici : elle dépend de l&apos;isolant, du revêtement, de
                l&apos;usage de la pièce et surtout de la hauteur disponible entre la terrasse et le seuil de la maison.
                C&apos;est là que les examens se rejoignent. Une terrasse qui arrive juste sous le seuil ne laisse aucune
                place pour isoler : on accepte une marche, ou l&apos;on démolit pour redescendre et reconstruire un sol
                isolé au bon niveau. Le plus souvent, c&apos;est la seconde option qui donne une véranda que l&apos;on
                habite vraiment en hiver.
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-sur-terrasse-existante-dalle/coupe-sol-isolant-chape-revetement.webp"
              w={1200}
              h={488}
              alt="Coupe d'un sol isolé en rénovation : couche d'isolant, film, chape épaisse puis revêtement, au-dessus de la dalle support"
              caption="Isolant, film, chape puis revêtement : chaque couche ajoute de l'épaisseur, et c'est tout cet ensemble qu'il faut loger sous le seuil de la maison. Photo Patrick Oberdörfer, Wikimedia Commons, CC BY-SA 4.0."
            />

            {/* 5. Terrasse bois */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Terrasse bois sur plots ou sur lambourdes : pourquoi on ne pose pas une véranda dessus en l&apos;état
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Nous posons aussi des terrasses en bois, et nous en connaissons les qualités. Mais une terrasse bois est
                conçue à l&apos;opposé de ce qu&apos;une véranda demande. Elle est faite pour laisser passer l&apos;eau
                entre les lames et pour sécher par la ventilation de sa sous-face ; ses lames ont du jeu et bougent au fil
                des saisons ; ses plots ou ses lambourdes reposent sur un sol stabilisé, pas sur des fondations, et sont
                dimensionnés pour la marche et le mobilier. Tout ce qui fait la durée de vie d&apos;une terrasse bois,
                nous le détaillons dans notre article sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse bois, plots et lambourdes
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Fermer cette terrasse sous une véranda, c&apos;est lui retirer ce qui la fait vivre :{' '}
                <strong className="text-primary font-semibold">
                  la sous-face ne sèche plus de la même façon, le sol ne peut pas être isolé, et les poteaux
                  tomberaient sur des appuis qui n&apos;ont pas été prévus pour eux
                </strong>
                . On dépose donc la terrasse, et l&apos;on crée un support adapté à une pièce close.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Si c&apos;est le plancher bois que vous aimez, deux pistes existent. Soit vous n&apos;avez pas besoin
                d&apos;une pièce close : une pergola aluminium couvre la terrasse en gardant ses poteaux sur leurs propres
                appuis, comme nous l&apos;expliquons pour{' '}
                <a href="/blog/poser-pergola-aluminium-terrasse-bois-existante" className={lienInterne}>
                  poser une pergola aluminium sur une terrasse bois existante
                </a>
                . Soit vous voulez une vraie pièce chaude au sol : nous construisons aussi en ossature bois, et notre
                comparatif{' '}
                <a href="/blog/veranda-ou-extension-ossature-bois" className={lienInterne}>
                  véranda ou extension en ossature bois
                </a>{' '}
                aide à choisir selon l&apos;usage.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-2.webp"
              w={1200}
              h={900}
              alt="Terrasse en bois posée sur le sable devant une baie vitrée, appuis métalliques visibles sous la rive, chantier de L'Esprit Bois à Lacanau en Gironde"
              caption="Une de nos terrasses à Lacanau : sous la plinthe de rive, des appuis ponctuels et un vide d'air. Parfait pour la marche et le séchage du bois, pas pour porter les poteaux d'une pièce close."
            />

            {/* 6. Sol argileux et dalle neuve */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sol argileux et dalle neuve en Gironde : ce que la terrasse vous apprend déjà
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La Gironde compte beaucoup de terrains argileux, qui gonflent quand ils se réhydratent et se rétractent
                quand ils sèchent. Une terrasse posée depuis des années sur ce type de sol est un témoin précieux : si
                elle s&apos;est fissurée le long de la maison, si elle s&apos;est inclinée ou décollée du mur, c&apos;est
                que le terrain a travaillé dessous. Ce n&apos;est pas une raison de renoncer à la véranda, c&apos;est une
                raison de ne pas poser une structure vitrée sur un support qui a déjà montré qu&apos;il bougeait.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand il faut une dalle neuve, la question du sol se pose avant celle du béton. Une véranda adossée à la
                maison est une extension accolée, et le dispositif réglementaire de prévention regarde deux choses :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;exposition de votre parcelle au retrait-gonflement des argiles, et la nature du projet
                </strong>
                . C&apos;est ce couple qui dit si une étude géotechnique s&apos;impose, et ce sont alors ses prescriptions
                qui fixent les fondations des rives. Nous détaillons ce cadre, sans le simplifier, dans notre article sur{' '}
                <a href="/blog/sol-argileux-gironde-etude-de-sol-extension" className={lienInterne}>
                  le sol argileux en Gironde et l&apos;étude de sol avant une extension
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Deux points valent dans tous les cas. La dalle de la véranda ne vient pas prendre appui sur la maison : on
                prévoit un joint entre les deux, pour que deux ouvrages fondés différemment ne se contraignent pas. Et
                l&apos;eau de la nouvelle toiture se conduit loin du pied de la dalle, car un sol argileux gorgé
                d&apos;eau à un endroit précis, hiver après hiver, est exactement ce qui le fait travailler.
              </p>
            </section>

            <Figure
              src="/images/blog/veranda-sur-terrasse-existante-dalle/coffrage-ferraillage-fondation-filante.webp"
              w={1200}
              h={904}
              alt="Ouvrier réglant le coffrage d'une fondation filante, armatures en acier en place avant le coulage du béton"
              caption="Coffrage et ferraillage d'une fondation filante : c'est ce type d'appui continu qui manque sous la rive de bien des terrasses, et qu'une dalle neuve de véranda prévoit dès le départ. Photo Rodolfo Gaion, Pexels."
            />

            {/* 7. Devis et méthode Libourne */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Garder, reprendre ou démolir : comment nous procédons à Libourne et en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les vérandas que nous posons sont fabriquées par SOKO, fabricant français installé en Vendée. Nous ne les
                fabriquons pas : notre métier, c&apos;est le relevé, l&apos;étude, la pose et le suivi. Et le relevé
                commence au sol, avant le moindre profilé. Sur nos visites autour de Libourne, dans le Libournais,
                l&apos;Entre-deux-Mers et plus largement en Gironde, la démarche est toujours la même :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ["Le relevé des niveaux", "sol intérieur de la maison, seuil de la porte-fenêtre, terrasse en plusieurs points, jardin autour : c'est ce relevé qui dit s'il reste de la hauteur pour isoler et de la garde par rapport à l'extérieur."],
                  ["Le sondage des rives", "on regarde, au pied de la terrasse, sur quoi reposent les bords qui porteront les poteaux et le soubassement. C'est le seul moyen de savoir s'il existe une fondation, ou seulement un bord coulé sur du remblai."],
                  ["La lecture des désordres", "fissures, carreaux creux, affaissements, traces d'eau contre la façade : chaque indice est noté et interprété, pas seulement constaté."],
                  ["La décision", "garder la terrasse telle quelle, la reprendre (appuis sous les rives, rattrapage du niveau, isolation par-dessus) ou la démolir pour une dalle neuve. Nous la motivons par écrit, avec ce que chaque option permet et ne permet pas."],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Côté devis, qu&apos;il vienne de nous ou d&apos;un autre, voici ce qui doit y figurer noir sur blanc :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  "L'hypothèse retenue sur la terrasse : conservée, reprise ou démolie, et sur quels constats.",
                  "Qui réalise la dalle ou sa reprise, et ce qui reste conditionnel tant qu'une éventuelle étude de sol n'est pas rendue.",
                  "La manière dont le sol est isolé, et le niveau de sol fini visé par rapport au seuil de la maison.",
                  "Le traitement du seuil côté jardin et le rejet des eaux de toiture.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Un devis de véranda qui ne dit rien du sol n&apos;est pas moins cher : il reporte simplement la question
                au jour de la pose. Découvrez nos modèles sur notre page{' '}
                <a href="/verandas" className={lienInterne}>vérandas aluminium en Gironde</a>, voyez nos chantiers bois et
                aluminium dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations autour de Libourne</a>, ou{' '}
                <a href="/contact" className={lienInterne}>décrivez-nous votre terrasse</a>, photos de la rive et du seuil
                à l&apos;appui.
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
              Véranda sur terrasse existante : vos questions
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
              Le sol d&apos;abord, l&apos;aluminium ensuite
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une terrasse existante n&apos;est ni un cadeau ni un obstacle : c&apos;est un support à examiner. Si ses
              rives portent, si elle n&apos;a pas bougé, si sa pente et son niveau laissent la place d&apos;isoler sous le
              seuil, elle fera une bonne dalle de véranda. Sinon, la reprendre ou la démolir est souvent la meilleure
              dépense du projet. C&apos;est ce diagnostic que nous menons chez L&apos;Esprit Bois, entreprise qualifiée
              Qualibat, à Libourne et dans toute la Gironde, avant de vous proposer une véranda aluminium.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/verandas"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Faire examiner ma terrasse
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
