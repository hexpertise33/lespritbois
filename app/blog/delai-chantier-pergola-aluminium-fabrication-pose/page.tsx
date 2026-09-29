import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Chantier réel : pergola aluminium isolée de Montussan (2 jours de pose), 768 × 512.
const COVER = '/images/source-adefrance/construction-pool-house-aluminium-libourne.webp';

export const metadata: Metadata = buildMetadata({
  title: "Délai d'une pergola aluminium : fabrication, laquage, pose",
  description:
    "La pose d'une pergola aluminium prend deux ou trois jours. Le délai, lui, se joue avant : urbanisme, fabrication, thermolaquage. Guide d'artisan à Libourne.",
  keywords:
    "délai pose pergola aluminium, délai fabrication pergola sur mesure, délai véranda aluminium, déroulé chantier pergola, délai pergola bioclimatique, délai carport aluminium, thermolaquage pergola délai, pergola aluminium Libourne, pergola Gironde",
  path: '/blog/delai-chantier-pergola-aluminium-fabrication-pose',
  ogImage: COVER,
  ogTitle: 'Pergola aluminium : la pose prend deux jours, alors où passent les semaines ?',
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
        name: 'Délai d’une pergola aluminium',
        item: 'https://lesprit-bois.fr/blog/delai-chantier-pergola-aluminium-fabrication-pose',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Pergola aluminium : la pose prend deux jours, alors où passent les semaines ?',
    description:
      "Combien de temps dure un chantier de pergola aluminium, de véranda ou de carport alu, et où passe le délai : les étapes entre la signature et la pose, la déclaration préalable, son affichage et le délai de recours des tiers, l'effet d'une teinte RAL hors stock ou d'une bicoloration sur le thermolaquage, ce qui se prépare pendant l'attente, le déroulé du jour de pose et ce qui décale vraiment un chantier. Le guide d'un artisan à Libourne, en Gironde.",
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
    datePublished: '2026-09-29',
    dateModified: '2026-09-29',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/delai-chantier-pergola-aluminium-fabrication-pose',
    },
    about: [
      { '@type': 'Thing', name: 'pergola aluminium' },
      { '@type': 'Thing', name: 'délai de chantier' },
      { '@type': 'Thing', name: 'déclaration préalable de travaux' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Combien de temps dure la pose d’une pergola aluminium ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Quelques jours. Sur nos chantiers récents en Gironde, une pergola aluminium isolée à Montussan a demandé deux jours de pose, et une pergola adossée à Saint-Pey-de-Castets, avec toiture en panneau sandwich, bande vitrée et deux stores électriques verticaux, trois jours de chantier. La durée dépend surtout de la taille, du raccord à la façade et du nombre d'équipements motorisés.",
        },
      },
      {
        '@type': 'Question',
        name: 'Pourquoi faut-il attendre plusieurs semaines avant la pose ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Parce qu'une pergola aluminium sur mesure n'existe pas encore le jour où vous signez. Il faut d'abord obtenir l'autorisation d'urbanisme quand elle est nécessaire, valider le relevé de cotes définitif, les plans et la teinte, puis laisser le fabricant découper les profilés et les thermolaquer. Cette phase de fabrication dure plusieurs semaines, qui varient selon le fabricant, la saison et la teinte. Le délai exact est écrit sur notre devis.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il attendre la fin du délai de recours avant de lancer la fabrication ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ce n'est pas une obligation, c'est un choix. Une fois la déclaration préalable accordée et affichée sur le terrain, les tiers disposent de deux mois à compter du premier jour d'affichage pour la contester. Beaucoup de maîtres d'ouvrage préfèrent attendre la fin de ce délai avant de lancer la fabrication d'un ouvrage sur mesure, pour ne pas payer des profilés qu'un recours rendrait inutilisables. D'autres acceptent ce risque pour gagner du temps. Nous en parlons avec vous avant de commander.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une teinte RAL spéciale rallonge-t-elle le délai ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Souvent, oui. Les teintes courantes sont thermolaquées en continu chez les fabricants, alors qu'une teinte hors stock, une finition particulière ou une bicoloration demandent de caler un passage spécifique, parfois deux. Le surcroît de délai varie d'un fabricant à l'autre : nous le vérifions au moment du choix de la teinte pour que vous décidiez en connaissance de cause.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on poser une pergola aluminium par mauvais temps ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une petite pluie n'empêche pas de monter une structure, mais deux situations font décaler une journée de pose : le vent, parce qu'on ne manipule pas des lames ou des panneaux de couverture qui prennent le vent en hauteur, et la pluie franche au moment des scellements et des joints d'étanchéité, qui demandent un support sec. Nous préférons décaler d'une journée plutôt que de poser mal.",
        },
      },
    ],
  },
];

const etapes = [
  ['Relevé de cotes définitif', 'Nous, sur place', 'Un rendez-vous à caler ; un support à finir avant de mesurer'],
  ['Validation plans, options et teinte', 'Vous et nous', 'Le temps de décision, une teinte encore hésitante'],
  ['Autorisation d’urbanisme', 'La mairie', 'Instruction, affichage, délai de recours des tiers'],
  ['Commande et fabrication des profilés', 'Le fabricant', 'Carnet de commandes, saison, complexité de l’ouvrage'],
  ['Thermolaquage', 'Le fabricant ou son laqueur', 'Teinte hors stock, finition particulière, bicoloration'],
  ['Livraison et contrôle', 'Le fabricant, puis nous', 'Transport, pièce abîmée à remplacer'],
  ['Pose', 'Nous', 'Météo, accès, support prêt ou non'],
];

const faq = [
  {
    q: 'Combien de temps dure la pose d’une pergola aluminium ?',
    r: (
      <>
        Quelques jours. Sur nos chantiers récents en Gironde, une pergola aluminium isolée à Montussan a demandé deux
        jours de pose, et une pergola adossée à Saint-Pey-de-Castets, avec toiture en panneau sandwich, bande vitrée
        et deux stores électriques verticaux, trois jours de chantier. La durée dépend surtout de la taille, du
        raccord à la façade et du nombre d&apos;équipements motorisés.
      </>
    ),
  },
  {
    q: 'Pourquoi faut-il attendre plusieurs semaines avant la pose ?',
    r: (
      <>
        Parce qu&apos;une pergola aluminium sur mesure n&apos;existe pas encore le jour où vous signez. Il faut
        d&apos;abord obtenir l&apos;autorisation d&apos;urbanisme quand elle est nécessaire, valider le relevé de cotes
        définitif, les plans et la teinte, puis laisser le fabricant découper les profilés et les thermolaquer. Cette
        phase de fabrication dure plusieurs semaines, qui varient selon le fabricant, la saison et la teinte. Le délai
        exact est écrit sur notre devis.
      </>
    ),
  },
  {
    q: 'Faut-il attendre la fin du délai de recours avant de lancer la fabrication ?',
    r: (
      <>
        Ce n&apos;est pas une obligation, c&apos;est un choix. Une fois la déclaration préalable accordée et affichée
        sur le terrain, les tiers disposent de deux mois à compter du premier jour d&apos;affichage pour la contester.
        Beaucoup de maîtres d&apos;ouvrage préfèrent attendre la fin de ce délai avant de lancer la fabrication
        d&apos;un ouvrage sur mesure, pour ne pas payer des profilés qu&apos;un recours rendrait inutilisables.
        D&apos;autres acceptent ce risque pour gagner du temps. Nous en parlons avec vous avant de commander.
      </>
    ),
  },
  {
    q: 'Une teinte RAL spéciale rallonge-t-elle le délai ?',
    r: (
      <>
        Souvent, oui. Les teintes courantes sont thermolaquées en continu chez les fabricants, alors qu&apos;une teinte
        hors stock, une finition particulière ou une bicoloration demandent de caler un passage spécifique, parfois
        deux. Le surcroît de délai varie d&apos;un fabricant à l&apos;autre : nous le vérifions au moment du choix de la
        teinte pour que vous décidiez en connaissance de cause.
      </>
    ),
  },
  {
    q: 'Peut-on poser une pergola aluminium par mauvais temps ?',
    r: (
      <>
        Une petite pluie n&apos;empêche pas de monter une structure, mais deux situations font décaler une journée de
        pose : le vent, parce qu&apos;on ne manipule pas des lames ou des panneaux de couverture qui prennent le vent en
        hauteur, et la pluie franche au moment des scellements et des joints d&apos;étanchéité, qui demandent un support
        sec. Nous préférons décaler d&apos;une journée plutôt que de poser mal.
      </>
    ),
  },
];

export default function ArticleDelaiChantierPergolaAluminiumPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="768"
              height="512"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola aluminium anthracite isolée couvrant un espace bar, posée en deux jours à Montussan en Gironde"
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
              <span className="text-secondary-fixed">Délai d&apos;une pergola aluminium</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Pergola aluminium en Gironde : la pose prend deux jours, alors où passent les semaines ?
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
              <span>29 septembre 2026</span>
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
                La pose d&apos;une pergola aluminium se compte en jours, le délai du projet se compte en semaines. Sur
                nos chantiers, une pergola isolée se pose en deux jours, une pergola adossée et équipée de stores en
                trois. Ce qui fait attendre n&apos;est presque jamais le chantier : c&apos;est l&apos;autorisation
                d&apos;urbanisme d&apos;abord, puis la fabrication sur mesure des profilés et leur thermolaquage.
              </strong>{' '}
              Autrement dit, quand un client nous demande « quand est-ce que vous posez ? », la vraie réponse commence
              par « quand est-ce que la mairie répond ? ». Voici, étape par étape, où passe le temps entre la
              signature et la dernière vis, ce qui peut se préparer pendant l&apos;attente et ce qui décale vraiment un
              chantier. La même logique vaut pour une véranda ou un carport aluminium, avec quelques nuances que nous
              signalons au passage.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Les étapes */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les étapes entre la signature et la pose
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola aluminium sur mesure n&apos;est pas un produit qu&apos;on sort d&apos;un entrepôt : le jour
                où vous signez, elle n&apos;existe pas encore. Les profilés sont découpés, usinés et laqués pour votre
                terrasse, à vos cotes et dans votre teinte.{' '}
                <strong className="text-primary font-semibold">
                  Chaque étape attend la précédente, et c&apos;est cet enchaînement qui fait le délai
                </strong>
                , bien plus que la durée de chacune.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Étape</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Entre les mains de</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Ce qui la fait durer</th>
                    </tr>
                  </thead>
                  <tbody>
                    {etapes.map((ligne, i) => (
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
                Deux points méritent d&apos;être soulignés. D&apos;abord, le{' '}
                <strong className="text-primary font-semibold">relevé de cotes définitif</strong> n&apos;est pas la
                prise de mesures du premier rendez-vous : c&apos;est un relevé précis, fait une fois le projet arrêté,
                qui sert de base à la fabrication. Si la terrasse ou la dalle doit être reprise, on mesure sur le
                support fini, pas sur celui qui va disparaître.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Ensuite, la <strong className="text-primary font-semibold">commande part une seule fois</strong>,
                quand tout est figé : dimensions, options (lames orientables, stores, éclairage, capteurs), teinte et
                autorisation. Une option ajoutée après coup, un store de plus, un changement de couleur, et la commande
                repart. Sur une véranda aluminium, la liste est plus longue encore (menuiseries, vitrages, toiture),
                donc la phase de validation aussi. Si vous en êtes au stade de la comparaison, notre{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  guide de la pergola bioclimatique aluminium
                </a>{' '}
                aide à arrêter les options avant de signer.
              </p>
            </section>

            <Figure
              src="/images/blog/delai-chantier-pergola-aluminium-fabrication-pose/thermolaquage-poudre-profiles-metalliques-cabine.webp"
              w={1200}
              h={800}
              alt="Thermolaquage en cabine : un opérateur projette la peinture en poudre sur des profilés métalliques suspendus"
              caption="Le thermolaquage se fait en atelier, par lots : poudre projetée puis cuisson au four. Une teinte hors série attend son lot, et c'est là que les semaines passent."
            />

            {/* 2. Urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                L&apos;autorisation d&apos;urbanisme d&apos;abord : l&apos;étape qui pèse le plus
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une pergola couverte, une véranda ou un carport aluminium crée le plus souvent de l&apos;emprise au sol,
                et relève alors d&apos;une autorisation d&apos;urbanisme. Nous ne rejouons pas ici les seuils de
                surface qui distinguent l&apos;absence de formalité, la déclaration préalable et le permis : ils sont
                détaillés dans notre article sur{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  les autorisations d&apos;urbanisme pour un abri, un carport ou une pergola
                </a>
                . Ce qui nous intéresse ici, c&apos;est le calendrier.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans le cas le plus courant, la{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>
                ,{' '}
                <strong className="text-primary font-semibold">
                  le délai d&apos;instruction est d&apos;un mois, porté à deux mois en secteur protégé, notamment aux
                  abords d&apos;un monument historique
                </strong>
                . Ce délai court à partir d&apos;un dossier complet : si la mairie réclame une pièce manquante, il
                repart à la réception de cette pièce. Une véranda ou une extension plus importante peut relever du{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>
                , dont l&apos;instruction est plus longue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                L&apos;accord obtenu, deux temps s&apos;ajoutent encore :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’affichage sur le terrain', 'le panneau doit être installé de façon visible depuis la voie publique, et y rester pendant toute la durée des travaux, et au moins deux mois.'],
                  ['Le délai de recours des tiers', 'un voisin ou un tiers intéressé peut contester l’autorisation pendant deux mois à compter du premier jour d’affichage sur le terrain. D’où l’intérêt d’afficher tout de suite et de garder une preuve de la date (photos datées, voire constat).'],
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
                C&apos;est là que se prend une décision qui pèse lourd dans le planning.{' '}
                <strong className="text-primary font-semibold">
                  Beaucoup de maîtres d&apos;ouvrage préfèrent attendre la fin de ce délai de recours avant de lancer la
                  fabrication
                </strong>
                , parce qu&apos;un ouvrage sur mesure ne se revend pas : des profilés coupés à vos cotes et laqués dans
                votre teinte ne serviraient à personne si l&apos;autorisation tombait. Ce n&apos;est pas une
                obligation légale, c&apos;est un arbitrage entre sécurité et rapidité. Avec des voisins informés et
                d&apos;accord, certains choisissent de commander plus tôt ; dans un voisinage tendu, attendre est plus
                prudent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous posons la question franchement au moment du devis, et nous calons la date de commande sur votre
                réponse. C&apos;est aussi pour cela que nous conseillons de{' '}
                <strong className="text-primary font-semibold">déposer le dossier tôt</strong>, idéalement dès que le
                projet est arrêté : un mois de gagné en mairie, c&apos;est un mois de gagné sur la date de pose.
              </p>
            </section>

            {/* 3. Teinte */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi une teinte hors stock ou une bicoloration rallonge le délai
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le thermolaquage consiste à déposer une poudre colorée sur les profilés puis à la cuire au four pour
                qu&apos;elle forme un film dur et régulier. Les teintes les plus demandées, l&apos;anthracite en tête,
                passent en continu chez les fabricants : ils les laquent tous les jours, pour tous leurs clients.{' '}
                <strong className="text-primary font-semibold">
                  Une teinte hors stock, elle, attend qu&apos;on lui cale un passage
                </strong>
                , ou qu&apos;une série de commandes de la même couleur justifie de changer la poudre de la ligne.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La bicoloration, par exemple une structure anthracite avec des lames blanches ou une couleur différente
                côté maison, ajoute une contrainte : deux teintes à gérer, parfois deux passages, et des pièces qui
                doivent se retrouver au bon endroit à l&apos;assemblage. Une finition particulière (texturée, sablée,
                aspect métallisé) peut aussi sortir du circuit standard. Rien de dramatique, mais{' '}
                <strong className="text-primary font-semibold">
                  le surcroît de délai varie d&apos;un fabricant et d&apos;une période à l&apos;autre
                </strong>
                , et nous le vérifions avant que vous arrêtiez votre choix.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Notre conseil : choisissez la teinte pour la maison, pas pour le délai, mais choisissez-la en sachant ce
                qu&apos;elle implique. Et décidez-la tôt, car une hésitation sur la couleur retarde la commande de tout
                le reste. Pour vous aider à trancher entre nuances, finitions et accords avec les menuiseries, notre
                article sur{' '}
                <a href="/blog/choisir-teinte-ral-aluminium" className={lienInterne}>
                  le choix d&apos;une teinte RAL pour l&apos;aluminium
                </a>{' '}
                passe en revue les critères qui comptent.
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/construction-pool-house-aluminium-libourne-3.webp"
              w={1200}
              h={800}
              alt="Pergola aluminium bicolore, structure anthracite et lames orientables blanches, au-dessus d'une cuisine d'été"
              caption="Structure anthracite, lames blanches : deux teintes, donc deux passages en laquage à coordonner. Un choix d'aspect qui se décide tôt, parce qu'il compte dans le délai."
            />

            {/* 4. Préparer pendant l'attente */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui se prépare pendant l&apos;attente
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les semaines de fabrication ne sont pas des semaines perdues. C&apos;est le moment de préparer tout ce
                qui doit être prêt le premier matin de pose, et qu&apos;on regrette amèrement de découvrir ce
                matin-là.{' '}
                <strong className="text-primary font-semibold">
                  Un chantier de deux jours ne tient en deux jours que si le support et les réseaux sont prêts.
                </strong>
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le support', 'massifs béton sous les futurs poteaux, dalle à créer ou à reprendre, reprise d’appuis sous une terrasse existante. Un béton coulé doit avoir durci avant de recevoir des platines chargées : c’est typiquement ce qu’on fait pendant la fabrication, pas la veille de la pose.'],
                  ['Les fourreaux électriques', 'lames orientables motorisées, stores, éclairage intégré : il faut une alimentation qui arrive au pied d’un poteau. Une gaine passée en tranchée ou sous la terrasse avant la pose évite un câble apparent le long de la façade. Le raccordement au tableau se prévoit avec votre électricien ou dans notre devis, selon les cas.'],
                  ['L’évacuation des eaux', 'une pergola ou un carport collecte l’eau de toute sa surface et la rend souvent par un poteau. Où va-t-elle ensuite : regard, réseau existant, puits perdu ? La tranchée se prépare avant, pas après.'],
                  ['L’accès', 'des profilés longs arrivent sur le chantier : il faut un passage jusqu’à la terrasse, un portail qui s’ouvre en grand, un coin pour stocker, un véhicule déplacé, des pots et du mobilier rangés.'],
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
                Le support est souvent le point le plus délicat. À Saint-Pey-de-Castets, la pergola aluminium adossée
                est venue se poser au-dessus d&apos;une terrasse bois construite par les propriétaires : ses poteaux
                traversent le platelage pour descendre sur leurs propres appuis, sans jamais charger les lambourdes. Ce
                genre de reprise se prépare à l&apos;avance ; nous détaillons la méthode dans notre article sur{' '}
                <a href="/blog/poser-pergola-aluminium-terrasse-bois-existante" className={lienInterne}>
                  la pose d&apos;une pergola aluminium sur une terrasse bois existante
                </a>
                .
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour l&apos;eau, la question « où part-elle ? » se règle aussi pendant l&apos;attente, tranchée comprise.
                Toutes les options sont comparées dans notre guide sur{' '}
                <a href="/blog/evacuation-eaux-pluviales-pergola-carport" className={lienInterne}>
                  l&apos;évacuation des eaux pluviales d&apos;une pergola ou d&apos;un carport
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/delai-chantier-pergola-aluminium-fabrication-pose/massif-beton-coule-fondation-poteau.webp"
              w={1200}
              h={800}
              alt="Massif de fondation en béton coulé en fouille, préparation du support avant la pose de poteaux"
              caption="Un massif coulé doit sécher avant de recevoir une platine : c'est pour cela qu'il se prépare pendant la fabrication, avec la gaine électrique et l'évacuation, pas la veille de la pose."
            />

            {/* 5. Le jour de la pose */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le jour de la pose, dans l&apos;ordre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Quand tout est prêt, la pose va vite. À Montussan, la pergola aluminium isolée qui abrite une cuisine
                d&apos;été a demandé deux jours de pose. À Saint-Pey-de-Castets, la pergola adossée, avec sa toiture en
                panneau sandwich, sa bande vitrée côté maison et ses deux stores électriques verticaux, a demandé trois
                jours de chantier. Voici l&apos;ordre dans lequel les choses se font.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Implantation', 'on reporte au sol la position exacte des poteaux et on contrôle les niveaux et l’équerrage par rapport à la façade.'],
                  ['Poteaux et platines', 'fixation des platines sur les massifs ou la dalle, montage des poteaux, mise d’aplomb.'],
                  ['Traverses et structure', 'assemblage des poutres et traverses, fixation côté façade pour un modèle adossé, contrôle d’équerre avant de couvrir.'],
                  ['Couverture ou lames', 'pose des lames orientables, des panneaux ou des vitrages : c’est l’étape la plus sensible au vent.'],
                  ['Raccord façade et étanchéité', 'profil de raccord, bavette ou solin, joints : c’est le détail qui décide si la jonction avec la maison restera sèche dans dix ans.'],
                  ['Motorisation et réglages', 'raccordement des moteurs de lames et de stores, programmation de la télécommande et des éventuels capteurs, réglage des fins de course.'],
                  ['Nettoyage', 'retrait des films de protection, évacuation des emballages et des chutes, terrasse rendue propre.'],
                  ['Explications', 'on vous montre le fonctionnement, les gestes d’entretien et ce qu’il ne faut pas faire (manœuvrer les lames par grand vent ou sous le gel, par exemple).'],
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
                Un carport aluminium autoportant suit à peu près le même déroulé qu&apos;une pergola isolée. Une véranda,
                en revanche, ajoute les menuiseries, les vitrages et une étanchéité plus exigeante sur tout le pourtour :
                le chantier dure plus longtemps, et nous en donnons la durée au cas par cas. Pour voir le résultat de
                plusieurs de ces poses, parcourez{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>.
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-4.webp"
              w={1000}
              h={1333}
              alt="Pose d'une pergola aluminium adossée en cours en Gironde, poteaux anthracite montés et poseur sur la toiture"
              caption="Poteaux d'aplomb, traverses en place, un poseur sur la toiture et l'escabeau encore sur la terrasse : la couverture ne vient qu'une fois l'équerrage contrôlé."
            />

            {/* 6. Ce qui décale */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qui décale vraiment un chantier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les retards ont rarement des causes mystérieuses. Ce sont presque toujours les mêmes, et la plupart se
                préviennent. Voici ceux que nous voyons, du plus coûteux au plus anodin.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Un relevé faux', 'une cote erronée, c’est un profilé à refabriquer et à relaquer, donc une partie du délai de fabrication qui recommence pour une seule pièce. C’est pour cela que le relevé définitif se fait sur place, par nous, sur le support fini.'],
                  ['Une autorisation en retard', 'dossier incomplet, pièce réclamée par la mairie, instruction allongée en secteur protégé : tant que l’autorisation n’est pas là, rien ne se commande dans de bonnes conditions.'],
                  ['Un support pas prêt', 'massif non coulé, béton trop frais, dalle hors niveau, terrasse encore en chantier : on ne fixe pas une structure sur un support qu’on ne peut pas charger.'],
                  ['La météo', 'le vent interdit de monter des lames ou des panneaux en hauteur ; la pluie franche empêche les scellements et les joints d’étanchéité, qui demandent un support sec. On décale d’une journée plutôt que de poser mal.'],
                  ['Un accès difficile', 'passage trop étroit pour des profilés longs, jardin en pente, voisin à solliciter : ce qui n’a pas été anticipé se règle le jour même, et coûte des heures.'],
                  ['Une pièce abîmée à la livraison', 'une rayure profonde sur un profilé laqué ou un choc sur une lame se voit au déballage. Nous contrôlons à réception et ne posons pas une pièce marquée : elle est remplacée, ce qui peut décaler la fin du chantier.'],
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
                Remarquez que la pose elle-même n&apos;apparaît presque pas dans cette liste.{' '}
                <strong className="text-primary font-semibold">
                  Un chantier bien préparé tient sa durée ; un chantier mal préparé la double
                </strong>
                , et ce n&apos;est jamais sur le montage de la structure que le temps se perd.
              </p>
            </section>

            {/* 7. Engagements + Libourne Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce que nous écrivons au devis, et ce que change la Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un délai honnête ne tient pas en une phrase du type « pose sous quelques semaines ». Il se décompose,
                et chaque morceau a un responsable. Voici ce que nous mettons par écrit dans notre devis et dans le
                planning qui l&apos;accompagne :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le délai de fabrication', 'celui que le fabricant annonce pour votre ouvrage et votre teinte au moment de la commande. Il varie selon le fabricant, la saison et la couleur : c’est pour cela que nous l’écrivons projet par projet plutôt que d’afficher un chiffre général.'],
                  ['Ce qui déclenche la commande', 'plans et teinte validés, autorisation obtenue et, si vous le choisissez, délai de recours écoulé. Le compte à rebours de fabrication part de là, pas de la signature.'],
                  ['La durée de pose estimée', 'en jours, avec ce qui est inclus : support, raccordements, nettoyage.'],
                  ['Qui prépare quoi', 'massifs, fourreaux, évacuation, accès : ce qui est dans notre lot et ce qui reste à votre charge ou à celle d’un autre intervenant.'],
                  ['Comment on vous prévient', 'si la livraison glisse ou si la météo impose de décaler, vous êtes appelé avant, pas le matin même.'],
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
                Autour de Libourne, une question revient plus qu&apos;ailleurs : suis-je en secteur protégé ? Le
                Libournais compte de nombreux périmètres patrimoniaux, à commencer par Saint-Émilion et sa juridiction,
                inscrite au patrimoine mondial de l&apos;Unesco, sans oublier les centres anciens et les abords des
                monuments historiques.{' '}
                <strong className="text-primary font-semibold">
                  En secteur protégé, l&apos;instruction s&apos;allonge et le dossier passe par l&apos;avis de
                  l&apos;architecte des Bâtiments de France
                </strong>
                , qui peut demander des ajustements, souvent sur la teinte, la forme de la toiture ou
                l&apos;implantation. Le périmètre exact dépend de votre adresse, pas de votre commune : il se vérifie
                sur le document d&apos;urbanisme ou auprès de la mairie, avant de figer la teinte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous intervenons à Libourne et dans toute la Gironde, sur des{' '}
                <a href="/pergolas" className={lienInterne}>pergolas aluminium et bois</a>, des{' '}
                <a href="/carports" className={lienInterne}>carports</a> et, pour les vérandas et extensions, dans le
                cadre de nos projets d&apos;
                <a href="/amenagement-exterieur" className={lienInterne}>aménagement extérieur</a>. Et parce qu&apos;un
                délai tenu ne s&apos;arrête pas à la pose, notre article sur{' '}
                <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                  les garanties et le SAV d&apos;une pergola ou d&apos;une véranda aluminium
                </a>{' '}
                explique ce qui se passe après.
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
              Délai d&apos;une pergola aluminium : vos questions
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
              Le délai se gagne avant la pose
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Une pergola aluminium se pose en quelques jours ; les semaines se jouent en amont, en mairie, en
              fabrication et au thermolaquage. Déposer l&apos;autorisation tôt, arrêter la teinte et les options sans
              revenir dessus, préparer le support pendant l&apos;attente : c&apos;est ce qui rapproche vraiment la date
              de pose. Chez L&apos;Esprit Bois, entreprise qualifiée Qualibat qui pose le bois comme l&apos;aluminium,
              nous écrivons ce calendrier noir sur blanc, à Libourne et dans toute la Gironde.
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
