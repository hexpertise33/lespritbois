import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/terrasse-bois-plots-gironde-2.webp';

export const metadata: Metadata = buildMetadata({
  title: "Protéger sa terrasse en bois de la canicule | L'Esprit Bois",
  description:
    "Saturateur, ombre, nettoyage : comment protéger une terrasse en bois des fortes chaleurs et des UV. Le guide d'entretien d'été d'un artisan à Libourne, en Gironde.",
  keywords:
    "protéger terrasse bois canicule, entretien terrasse bois été, saturateur terrasse bois, grisaillement bois UV, terrasse bois chaleur, voile d'ombrage terrasse, entretien terrasse bois Gironde, terrasse bois Libourne",
  path: '/blog/proteger-terrasse-bois-canicule-entretien-ete',
  ogImage: COVER,
  ogTitle: "Protéger sa terrasse en bois de la canicule : le guide d'entretien d'été",
  ville: 'Libourne',
});

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

// `cadrage` sert aux photos natives en portrait : elles sont recadrées sur le
// même bandeau 3:2 que les autres pour ne pas écraser le texte, en gardant le
// sujet dans le champ (haut pour un volume bâti, bas pour une plage de bassin).
function Figure({
  src,
  alt,
  caption,
  cadrage = 'object-center',
}: {
  src: string;
  alt: string;
  caption: string;
  cadrage?: string;
}) {
  return (
    <figure className="-mx-6 md:-mx-16">
      <img
        loading="lazy"
        decoding="async"
        width="1200"
        height="800"
        className={`w-full aspect-[3/2] rounded-2xl object-cover ${cadrage} shadow-sm`}
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
        name: 'Protéger sa terrasse en bois de la canicule',
        item: 'https://lesprit-bois.fr/blog/proteger-terrasse-bois-canicule-entretien-ete',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Protéger sa terrasse en bois de la canicule : le guide d'entretien d'été",
    description:
      "Ce que le soleil fait vraiment au bois, quand appliquer un saturateur (et pourquoi jamais sur une lame brûlante), comment créer de l'ombre entre pergola, store banne et voile, et les gestes de nettoyage à proscrire : le guide d'entretien estival d'une terrasse en bois en Gironde.",
    image: 'https://lesprit-bois.fr' + COVER,
    author: {
      '@type': 'Person',
      name: 'David Bertrand',
      jobTitle: "Expert bâtiment et créateur d'espaces extérieurs",
      worksFor: { '@type': 'Organization', name: "L'Esprit Bois" },
    },
    publisher: {
      '@type': 'Organization',
      name: "L'Esprit Bois",
      logo: { '@type': 'ImageObject', url: 'https://lesprit-bois.fr/logo-mark.svg' },
    },
    datePublished: '2026-07-20',
    dateModified: '2026-07-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/proteger-terrasse-bois-canicule-entretien-ete',
    },
    about: ['terrasse bois', 'entretien du bois', 'saturateur', 'ombrage', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Faut-il traiter sa terrasse en bois en plein été ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Ce n'est pas la meilleure période. Un saturateur s'applique sur un bois propre, sec et froid : sur une lame chauffée par le soleil, le produit sèche en surface avant d'avoir pénétré, ne nourrit pas le bois et laisse des traces et des surépaisseurs. Si vous devez absolument intervenir en été, travaillez tôt le matin ou en fin de journée, sur une partie à l'ombre depuis plusieurs heures, et jamais avant un orage annoncé. Le mieux reste d'attendre le printemps ou le début d'automne.",
        },
      },
      {
        '@type': 'Question',
        name: 'Une terrasse en bois devenue grise est-elle abîmée ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Non. Le grisaillement est un phénomène de surface, purement esthétique, provoqué par les UV : il ne touche que quelques dixièmes de millimètre et n'altère ni la solidité, ni la durabilité des lames. Beaucoup de clients nous appellent pour une terrasse qu'ils croient morte alors qu'elle est parfaitement saine. Les vrais signaux d'alerte sont ailleurs : fissures ouvertes, échardes, lames qui se creusent en gouttière, jeu dans les fixations ou lambourdes molles.",
        },
      },
      {
        '@type': 'Question',
        name: 'À quelle fréquence appliquer un saturateur sur une terrasse en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En ordre de grandeur, tous les 1 à 2 ans, mais c'est l'exposition qui décide, pas le calendrier. Une terrasse plein sud, sans ombre et très piétinée, demandera un passage annuel ; une terrasse orientée nord ou protégée par une pergola tiendra deux ans, parfois davantage. Le bon indicateur est le bois lui-même : quand une goutte d'eau ne perle plus et pénètre immédiatement, la protection est épuisée.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on nettoyer une terrasse en bois au nettoyeur haute pression ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Nous le déconseillons franchement. La haute pression creuse le bois de printemps, plus tendre que le bois d'été, ouvre les fibres en surface et laisse un aspect pelucheux qui retient l'eau et la salissure. Résultat : la terrasse regrise plus vite qu'avant et devient rugueuse sous les pieds nus. De l'eau, une brosse souple et un balayage dans le sens de la fibre suffisent dans la quasi-totalité des cas.",
        },
      },
      {
        '@type': 'Question',
        name: 'Comment éviter qu’une terrasse en bois chauffe trop au soleil ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le seul levier qui traite la cause, c'est l'ombre : pergola, store banne, voile d'ombrage ou simplement un arbre bien placé. Le choix de la lame joue aussi, un bois clair restant nettement moins chaud sous le pied qu'un bois foncé ou qu'un composite. Enfin, une terrasse ventilée sous les lames évacue mieux la chaleur accumulée qu'une terrasse posée à même une dalle étanche.",
        },
      },
      {
        '@type': 'Question',
        name: 'Quelle est la meilleure période pour entretenir sa terrasse en bois ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le printemps, une fois les dernières pluies passées et avant les fortes chaleurs, ou le début d'automne quand les températures redescendent mais que le bois est encore sec. Dans les deux cas, on vise un bois sec depuis plusieurs jours, une journée sans pluie annoncée dans les 48 heures et des lames qui ne sont pas exposées au soleil direct au moment de l'application. L'été convient très bien, en revanche, pour le nettoyage doux et le contrôle des fixations.",
        },
      },
    ],
  },
];

const comparatif = [
  [
    'Pergola',
    'Structure fixe, en bois ou en aluminium, adossée ou autoportée',
    'Solution pérenne, ombre maîtrisée toute la saison, résiste au vent, valorise la maison',
    'Investissement le plus élevé, formalités d’urbanisme possibles selon la surface',
  ],
  [
    'Store banne',
    'Toile enroulable fixée en façade, déployée à la demande',
    'Léger, rétractable, laisse le soleil revenir hors saison, pose rapide',
    'Se rentre au vent, toile à remplacer avec le temps, portée limitée',
  ],
  [
    'Voile d’ombrage',
    'Toile tendue entre plusieurs points d’ancrage',
    'L’option la plus économique, se démonte l’hiver, très souple d’implantation',
    'Demande des points d’ancrage solides, se détend, ne tient pas les coups de vent',
  ],
  [
    'Arbre existant',
    'Ombre portée naturelle, variable dans la journée',
    'Gratuit, rafraîchit réellement l’air ambiant, protège aussi la façade',
    'Ombre non maîtrisée, feuilles et sève sur les lames, effet nul les premières années',
  ],
];

const faq = [
  {
    q: 'Faut-il traiter sa terrasse en bois en plein été ?',
    r: (
      <>
        Ce n&apos;est pas la meilleure période. Un saturateur s&apos;applique sur un bois propre, sec et froid : sur une
        lame chauffée par le soleil, le produit sèche en surface avant d&apos;avoir pénétré, ne nourrit pas le bois et
        laisse des traces et des surépaisseurs. Si vous devez absolument intervenir en été, travaillez tôt le matin ou en
        fin de journée, sur une partie à l&apos;ombre depuis plusieurs heures, et jamais avant un orage annoncé. Le mieux
        reste d&apos;attendre le printemps ou le début d&apos;automne.
      </>
    ),
  },
  {
    q: 'Une terrasse en bois devenue grise est-elle abîmée ?',
    r: (
      <>
        Non. Le grisaillement est un phénomène de surface, purement esthétique, provoqué par les UV : il ne touche que
        quelques dixièmes de millimètre et n&apos;altère ni la solidité, ni la durabilité des lames. Beaucoup de clients
        nous appellent pour une terrasse qu&apos;ils croient morte alors qu&apos;elle est parfaitement saine. Les vrais
        signaux d&apos;alerte sont ailleurs : fissures ouvertes, échardes, lames qui se creusent en gouttière, jeu dans
        les fixations ou lambourdes molles.
      </>
    ),
  },
  {
    q: 'À quelle fréquence appliquer un saturateur sur une terrasse en bois ?',
    r: (
      <>
        En ordre de grandeur, tous les 1 à 2 ans, mais c&apos;est l&apos;exposition qui décide, pas le calendrier. Une
        terrasse plein sud, sans ombre et très piétinée, demandera un passage annuel ; une terrasse orientée nord ou
        protégée par une pergola tiendra deux ans, parfois davantage. Le bon indicateur est le bois lui-même : quand une
        goutte d&apos;eau ne perle plus et pénètre immédiatement, la protection est épuisée.
      </>
    ),
  },
  {
    q: 'Peut-on nettoyer une terrasse en bois au nettoyeur haute pression ?',
    r: (
      <>
        Nous le déconseillons franchement. La haute pression creuse le bois de printemps, plus tendre que le bois
        d&apos;été, ouvre les fibres en surface et laisse un aspect pelucheux qui retient l&apos;eau et la salissure.
        Résultat : la terrasse regrise plus vite qu&apos;avant et devient rugueuse sous les pieds nus. De l&apos;eau, une
        brosse souple et un balayage dans le sens de la fibre suffisent dans la quasi-totalité des cas.
      </>
    ),
  },
  {
    q: 'Comment éviter qu’une terrasse en bois chauffe trop au soleil ?',
    r: (
      <>
        Le seul levier qui traite la cause, c&apos;est l&apos;ombre : pergola, store banne, voile d&apos;ombrage ou
        simplement un arbre bien placé. Le choix de la lame joue aussi, un bois clair restant nettement moins chaud sous
        le pied qu&apos;un bois foncé ou qu&apos;un composite. Enfin, une terrasse ventilée sous les lames évacue mieux la
        chaleur accumulée qu&apos;une terrasse posée à même une dalle étanche.
      </>
    ),
  },
  {
    q: 'Quelle est la meilleure période pour entretenir sa terrasse en bois ?',
    r: (
      <>
        Le printemps, une fois les dernières pluies passées et avant les fortes chaleurs, ou le début d&apos;automne quand
        les températures redescendent mais que le bois est encore sec. Dans les deux cas, on vise un bois sec depuis
        plusieurs jours, une journée sans pluie annoncée dans les 48 heures et des lames qui ne sont pas exposées au
        soleil direct au moment de l&apos;application. L&apos;été convient très bien, en revanche, pour le nettoyage doux
        et le contrôle des fixations.
      </>
    ),
  },
];

export default function ArticleTerrasseBoisCaniculePage() {
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
              height="900"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Terrasse en bois sur plots en plein soleil le long d'une maison à bardage noir, réalisation en Gironde"
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
              <span className="text-secondary-fixed">Terrasse bois et canicule</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Entretien terrasse
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Protéger sa terrasse en bois de la canicule : le guide d&apos;entretien d&apos;été
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                David Bertrand, L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>20 juillet 2026</span>
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
                Protéger une terrasse en bois de l&apos;été tient à trois leviers : de l&apos;ombre, un saturateur appliqué
                au bon moment, et un nettoyage doux. Et une règle qui ne souffre aucune exception : on n&apos;applique
                jamais un saturateur en pleine canicule ni sur un bois brûlant. Le produit sèche en surface avant
                d&apos;avoir pénétré, et le résultat est pire que si l&apos;on n&apos;avait rien fait.
              </strong>{' '}
              Cela dit, sur nos chantiers en Gironde, ce qui abîme réellement une terrasse, ce n&apos;est pas tant la
              chaleur en elle-même que l&apos;alternance : UV toute la journée, sécheresse qui fait retirer le bois, puis
              orages qui le regonflent en quelques heures. Ajoutez à cela un entretien mené au mauvais moment de la
              journée, et une terrasse saine se dégrade en deux saisons. Voici comment traverser l&apos;été proprement.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi l&apos;été est la saison la plus agressive pour une terrasse en bois
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                On imagine volontiers que l&apos;hiver, avec sa pluie et son gel, est la saison difficile. C&apos;est
                l&apos;inverse. L&apos;hiver, le bois est humide, stable, et il travaille peu.{' '}
                <strong className="text-primary font-semibold">
                  L&apos;été cumule au contraire trois agressions qui se contredisent
                </strong>{' '}
                : un rayonnement ultraviolet permanent qui attaque la lignine en surface, une sécheresse prolongée qui
                fait perdre au bois son humidité et donc du volume, puis des orages violents qui le regonflent d&apos;un
                coup. Le bois se rétracte, se dilate, se rétracte à nouveau, parfois dans la même semaine.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est ce mouvement, bien plus que la température, qui ouvre les fissures, fait remonter les vis et
                fatigue les fixations. Une lame de terrasse n&apos;est pas un matériau inerte : elle respire, et
                l&apos;été lui demande de respirer très vite, dans les deux sens.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                En Gironde, un facteur d&apos;exposition s&apos;ajoute. Nos terrasses sont majoritairement orientées plein
                sud ou plein ouest, parce qu&apos;on les dessine pour la vie de fin de journée, celle où l&apos;on dîne
                dehors. C&apos;est un excellent choix d&apos;usage, mais cela signifie que les lames reçoivent le soleil
                le plus bas et le plus rasant, celui qui frappe la surface presque de plein fouet en fin
                d&apos;après-midi, au moment où elles ont déjà emmagasiné la chaleur de la journée. Une terrasse ouest en
                plein été travaille plus qu&apos;une terrasse nord ne travaillera en cinq ans.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Grisaillement, fissures, échauffement : ce que le soleil fait vraiment au bois
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par la question qu&apos;on nous pose le plus souvent, et par la réponse qui rassure :{' '}
                <strong className="text-primary font-semibold">
                  le grisaillement est un phénomène de surface, purement esthétique, qui n&apos;altère en rien la
                  solidité ni la durabilité de votre terrasse.
                </strong>{' '}
                Les UV dégradent la lignine, ce ciment naturel qui donne au bois sa teinte, sur quelques dixièmes de
                millimètre seulement. En dessous, la lame est intacte. Une terrasse grise n&apos;est pas une terrasse
                malade : c&apos;est une terrasse qui a pris sa patine. Certains de nos clients la préfèrent ainsi et ne
                saturent jamais, en toute connaissance de cause.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Les vrais signaux d&apos;alerte, ceux qui méritent qu&apos;on se baisse pour regarder, sont d&apos;une
                autre nature :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Les fissures ouvertes', 'de fines fentes de retrait sont normales et se referment ; une fissure large, profonde, qui traverse la lame et retient l’eau, relève du remplacement.'],
                  ['Les échardes et le fibrage', 'une surface qui se hérisse et pique les pieds nus signale un bois desséché en surface, souvent aggravé par un nettoyage trop agressif.'],
                  ['Les lames qui tuilent', 'quand une lame se creuse en gouttière ou se bombe, elle retient l’eau au lieu de l’évacuer. C’est presque toujours un problème de pose ou de ventilation, pas de soleil.'],
                  ['Le jeu dans les fixations', 'vis qui remontent, lame qui bouge sous le pied, lambourde qui sonne creux : c’est là que se joue la sécurité, et c’est en fin d’été qu’on le voit le mieux.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste l&apos;échauffement, le sujet le plus concret pour qui vit pieds nus.{' '}
                <strong className="text-primary font-semibold">
                  Un bois foncé absorbe davantage le rayonnement qu&apos;un bois clair et devient sensiblement plus chaud
                </strong>{' '}
                ; c&apos;est encore plus net sur les lames composites sombres. La géométrie compte aussi : une lame étroite
                et une surface très rainurée offrent plus de matière exposée. Concrètement, une terrasse plein sud en bois
                foncé peut devenir difficilement praticable pieds nus en milieu d&apos;après-midi, quand la même surface en
                bois clair, ventilée par en dessous, reste supportable. Ce n&apos;est pas un défaut du bois, c&apos;est un
                paramètre de conception, et il se décide avant la pose.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-3.webp"
              alt="Gros plan sur les lames d'une terrasse en bois au ras du sol, jusqu'à une baie vitrée, avec une marche"
              caption="Le fil du bois se lit au ras de la lame : c'est dans ce sens, et jamais en travers, qu'on brosse une terrasse."
              cadrage="object-center"
            />

            {/* 3 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le saturateur : quand l&apos;appliquer, et pourquoi surtout pas en pleine canicule
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le cœur du sujet, et l&apos;erreur la plus répandue. Un saturateur n&apos;est pas une peinture
                ni un vernis : il ne forme pas de film en surface, il pénètre dans la fibre pour la nourrir et ralentir
                l&apos;action des UV. Toute son efficacité repose donc sur sa capacité à entrer dans le bois. Et pour
                qu&apos;il entre, il faut trois conditions réunies :{' '}
                <strong className="text-primary font-semibold">un bois propre, un bois sec, et un bois froid.</strong>
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La troisième condition est celle qu&apos;on oublie. Sur une lame chauffée par le soleil, le solvant
                s&apos;évapore presque instantanément : le produit sèche en surface avant d&apos;avoir eu le temps de
                descendre dans la fibre. Vous obtenez alors le pire des deux mondes, un bois qui n&apos;a pas été nourri
                et une pellicule irrégulière en surface, avec des traces de reprise, des surépaisseurs brillantes et des
                zones mates. Il faudra poncer pour rattraper. C&apos;est une demi-journée de travail perdue et un produit
                gâché.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Le protocole que nous appliquons, et que nous recommandons :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Choisir la saison plutôt que la semaine', 'le printemps après les dernières pluies, ou le début d’automne quand les températures redescendent. Hors des pics de chaleur, tout devient plus simple.'],
                  ['Si c’est l’été, viser le créneau', 'tôt le matin avant que le soleil ne porte, ou en fin de journée sur une zone à l’ombre depuis plusieurs heures. Jamais en plein soleil, jamais sur une lame trop chaude pour y poser la main à plat.'],
                  ['Vérifier que le bois est sec à cœur', 'plusieurs jours sans pluie. Un bois encore humide en profondeur repousse le saturateur, exactement comme un bois brûlant.'],
                  ['Regarder le ciel des 48 heures suivantes', 'un orage sur un saturateur non sec lessive le produit et laisse des coulures. En été, les orages arrivent vite et fort.'],
                  ['Nettoyer et laisser sécher avant', 'on ne sature jamais par-dessus un bois encrassé : le produit fixerait la salissure dans la fibre.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Quant à la fréquence, comptez{' '}
                <strong className="text-primary font-semibold">tous les 1 à 2 ans</strong> en ordre de grandeur. Nous
                insistons sur « ordre de grandeur » : ce n&apos;est pas une règle, c&apos;est une moyenne. Une terrasse
                plein sud, sans ombre, où l&apos;on vit tous les jours, réclame un passage annuel ; une terrasse abritée
                et peu piétinée tiendra deux ans sans difficulté. Le meilleur test reste celui de la goutte d&apos;eau :
                si elle perle, la protection tient ; si elle est absorbée aussitôt, il est temps.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Créer de l&apos;ombre : pergola, store, voile d&apos;ombrage, orientation
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Disons-le clairement :{' '}
                <strong className="text-primary font-semibold">
                  l&apos;ombre est le seul levier qui traite la cause plutôt que la conséquence.
                </strong>{' '}
                Le saturateur et le nettoyage réparent ou ralentissent ; l&apos;ombre, elle, empêche l&apos;agression
                d&apos;avoir lieu. Une terrasse couverte grise moins vite, fissure moins, chauffe moins et se sature moins
                souvent. Le calcul est vite fait sur dix ans.
              </p>
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
                Notre hiérarchie, en toute honnêteté. La{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergola
                </a>{' '}
                est la solution pérenne : c&apos;est la seule qui protège la terrasse toute la saison sans qu&apos;on ait
                à y penser, et la seule qui tienne le vent. Si vous hésitez entre une structure bois et une bioclimatique
                à lames orientables, nous avons détaillé le match dans notre article{' '}
                <a href="/blog/pergola-bois-ou-bioclimatique" className={lienInterne}>
                  pergola bois ou bioclimatique
                </a>
                . Le store banne est plus léger, rétractable et beaucoup moins engageant, mais il se rentre au vent :
                utile, il ne protège pas la terrasse quand elle en aurait le plus besoin, lors des coups de vent
                d&apos;orage. La voile d&apos;ombrage reste l&apos;option économique et démontable, à condition
                d&apos;avoir des points d&apos;ancrage réellement solides.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Et n&apos;oubliez pas le levier gratuit : l&apos;orientation et l&apos;existant. Un arbre déjà en place,
                une haie, un pignon de maison peuvent porter une ombre précieuse entre 15 h et 19 h. Lorsque nous
                dessinons une terrasse, nous regardons d&apos;abord cette ombre-là avant de proposer quoi que ce soit à
                construire. C&apos;est souvent elle qui décide de l&apos;implantation.
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-1.webp"
              alt="Pergola aluminium anthracite adossée couvrant une terrasse en bois, avec un olivier à droite, près de Libourne"
              caption="Une couverture fixe et le végétal existant se complètent : l'un tient le vent, l'autre rafraîchit réellement l'air."
              cadrage="object-center"
            />

            {/* 5 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Les bons gestes d&apos;entretien estival (et ceux qui abîment)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;entretien d&apos;une terrasse en bois est simple, et c&apos;est précisément pour cela qu&apos;on
                l&apos;abîme : on en fait trop. Le bon geste de base tient en une phrase :{' '}
                <strong className="text-primary font-semibold">
                  de l&apos;eau, une brosse souple, et un brossage dans le sens de la fibre.
                </strong>{' '}
                Rien d&apos;autre n&apos;est nécessaire dans l&apos;immense majorité des cas. En travers de la fibre, la
                brosse raye et fait peluche ; dans le sens du fil, elle nettoie sans ouvrir le bois.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">Ce qui est à proscrire :</p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le nettoyeur haute pression', 'notre bête noire. Il creuse le bois tendre entre les cernes, ouvre les fibres et laisse une surface rugueuse qui retient l’humidité. Une terrasse passée au karcher regrise plus vite qu’avant et devient inconfortable pieds nus. Le gain visuel dure trois semaines, le dégât reste.'],
                  ['L’eau de Javel', 'elle blanchit sur le moment, attaque la fibre en profondeur, brûle les végétaux alentour et complique l’accroche du saturateur ensuite.'],
                  ['Les décapants agressifs', 'réservés aux cas lourds et à manier avec parcimonie. Sur une terrasse simplement grisée, ils font plus de mal que de bien.'],
                  ['Arroser une terrasse brûlante en plein soleil', 'le choc thermique n’aide pas le bois, l’eau s’évapore avant d’agir et laisse des auréoles calcaires. Si vous rincez, faites-le en fin de journée.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux gestes utiles complètent le tableau. Le premier :{' '}
                <strong className="text-primary font-semibold">dégager les feuilles et les débris coincés entre les
                lames</strong>. C&apos;est ce qui bouche l&apos;écoulement, retient l&apos;humidité au contact du bois et
                nourrit les mousses à l&apos;automne. Une spatule fine ou un jet d&apos;eau dirigé dans l&apos;interstice
                suffisent, et cinq minutes par mois évitent bien des ennuis.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Le second : <strong className="text-primary font-semibold">un contrôle des fixations en fin d&apos;été</strong>.
                Le bois vient de travailler au maximum ; c&apos;est le moment où les vis qui ont bougé se repèrent le plus
                facilement. On marche lentement sur toute la surface, on écoute, on reprend les têtes remontées, on
                vérifie les lambourdes en périphérie. Un quart d&apos;heure en septembre évite une lame à changer au
                printemps.
              </p>
            </section>

            <Figure
              src="/images/terrasse-bois-plots-gironde-4.webp"
              alt="Terrasse en bois protégée par un store banne rayé déployé sous un ciel bleu, en Gironde"
              caption="Le store banne couvre à la demande, mais il se rentre au vent : il ne remplace pas une structure fixe lors des orages d'été."
              cadrage="object-center"
            />

            {/* 6 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelle essence supporte le mieux la chaleur
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Trois principes suffisent ici. Les{' '}
                <strong className="text-primary font-semibold">essences denses et naturellement durables</strong>{' '}
                encaissent mieux l&apos;alternance sécheresse et humidité : elles bougent moins et fissurent moins. Un{' '}
                <strong className="text-primary font-semibold">bois clair chauffe nettement moins qu&apos;un bois
                foncé</strong>, ce qui change tout pour une terrasse où l&apos;on marche pieds nus. Et surtout, la pose
                pèse autant que l&apos;essence : une ventilation franche sous les lames, un espacement respecté entre
                elles et une hauteur suffisante par rapport au sol évacuent la chaleur et l&apos;humidité, quand une pose
                trop serrée sur dalle étanche transforme n&apos;importe quelle belle essence en radiateur.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne referons pas le comparatif ici : douglas, mélèze, red cedar, chêne, exotiques, avec leurs classes
                d&apos;emploi et leurs prix au mètre carré, sont traités essence par essence dans notre guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>
                . C&apos;est la lecture à faire si votre projet n&apos;est pas encore posé.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Ce qu&apos;on a appris sur nos terrasses en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Entre Libourne, Les Billaux, Saint-Émilion et la rive droite, les mêmes situations reviennent chaque été.
                Trois surtout.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Des terrasses grises qu&apos;on croit mortes et qui sont
                parfaitement saines.</strong> C&apos;est le cas le plus fréquent, et souvent la meilleure nouvelle que
                nous ayons à annoncer. Le client envisage de tout déposer ; nous grattons discrètement une lame du bout du
                couteau, le bois est blond dessous, ferme, sans trace d&apos;attaque. Un nettoyage doux et un saturateur
                appliqué au bon moment lui rendent dix ans.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Des terrasses saturées au mauvais moment.</strong> Un
                samedi de plein été, en plein après-midi, avec la meilleure intention du monde. Le résultat se voit tout
                de suite : des zones brillantes, des reprises marquées, un aspect collant qui capte la poussière. Il faut
                alors poncer avant de recommencer. Le produit n&apos;était pas en cause, le créneau l&apos;était.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Des lames posées sans jeu suffisant qui tuilent au premier
                été.</strong> Celle-là ne se rattrape pas avec un produit. Quand le bois n&apos;a pas la place de gonfler,
                il se contraint, se creuse en gouttière et retient l&apos;eau. C&apos;est un défaut de conception, pas
                d&apos;entretien.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                C&apos;est la leçon que nous retenons :{' '}
                <strong className="text-primary font-semibold">
                  la conception décide de la tenue à la chaleur autant que l&apos;entretien.
                </strong>{' '}
                Ventilation sous les lames, jeu correct entre elles, pose sur plots qui laisse l&apos;air circuler,
                orientation pensée pour l&apos;ombre de fin de journée : ce qui se joue avant la première vis conditionne
                les quinze années suivantes. C&apos;est toute notre approche de l&apos;{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>
                , et vous en verrez le résultat dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/pergola-terrasse-bois-libourne-3.webp"
              alt="Vue en contre-plongée sous une pergola à panneaux translucides au-dessus d'une terrasse en bois, Gironde"
              caption="Filtrer le rayonnement plutôt que le subir : la couverture reste le meilleur investissement d'entretien à long terme."
              cadrage="object-center"
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
              Terrasse en bois et fortes chaleurs : vos questions
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
                    <span className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform">
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
              Une terrasse qui traverse les étés
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Retenez l&apos;essentiel : le gris n&apos;est pas une maladie, le saturateur ne s&apos;applique jamais sur un
              bois brûlant, la haute pression fait plus de mal que de bien, et l&apos;ombre reste le seul remède qui
              s&apos;attaque à la cause. Le reste se décide à la conception : ventilation, jeu entre les lames,
              orientation. C&apos;est ce que nous faisons chez L&apos;Esprit Bois, entreprise certifiée Qualibat, à
              Libourne et dans toute la Gironde, du diagnostic d&apos;une terrasse existante à la pose d&apos;une
              couverture qui la protégera durablement.
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
