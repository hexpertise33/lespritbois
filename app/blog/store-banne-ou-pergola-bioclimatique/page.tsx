import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

// Cover : photo Jan Canty, Pexels n° 33993508 (licence Pexels), recadrée 1200 × 646. Pas un chantier maison : jamais géolocalisée.
const COVER = '/images/blog/store-banne-ou-pergola-bioclimatique/pergola-bioclimatique-lames-orientables-terrasse-couverte.webp';

export const metadata: Metadata = buildMetadata({
  title: 'Store banne ou pergola bioclimatique ? Le choix en Gironde',
  description:
    "Store banne ou pergola bioclimatique ? L'un fait de l'ombre et se replie au vent, l'autre couvre la terrasse sous la pluie. Notre verdict à Libourne.",
  keywords:
    'store banne ou pergola bioclimatique, remplacer store banne par pergola, store banne vent, store banne pluie, pergola bioclimatique, couvrir une terrasse, pergola lames orientables, pergola bioclimatique Gironde, pergola bioclimatique Libourne',
  path: '/blog/store-banne-ou-pergola-bioclimatique',
  ogImage: COVER,
  ogTitle: "Store banne ou pergola bioclimatique : ce qu'on gagne vraiment à passer aux lames",
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
        name: 'Store banne ou pergola bioclimatique',
        item: 'https://lesprit-bois.fr/blog/store-banne-ou-pergola-bioclimatique',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Store banne ou pergola bioclimatique : ce qu'on gagne vraiment à remplacer la toile par des lames",
    description:
      "Le store banne fait de l'ombre et se replie au premier vent ; la pergola bioclimatique aluminium couvre la terrasse sous le soleil et sous la pluie, mais c'est un ouvrage, avec un autre budget, une étude et une formalité d'urbanisme. Vent, pluie, chaleur, façade, entretien : comment trancher à Libourne et en Gironde.",
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
    datePublished: '2026-11-07',
    dateModified: '2026-11-07',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/store-banne-ou-pergola-bioclimatique',
    },
    about: [
      { '@type': 'Thing', name: 'store banne' },
      { '@type': 'Thing', name: 'pergola bioclimatique' },
      { '@type': 'Thing', name: 'protection solaire de terrasse' },
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
        name: 'Peut-on laisser un store banne déployé sous la pluie ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Pas sous une vraie averse. Une toile déperlante laisse passer une petite pluie si sa pente est suffisante, mais dès que l'averse dure, l'eau s'accumule en poche, alourdit la toile et force les bras. Un store banne est une protection solaire : sous la pluie, on le replie. Pour rester dehors quand il pleut, il faut une couverture étanche, comme les lames fermées d'une pergola bioclimatique.",
        },
      },
      {
        '@type': 'Question',
        name: 'Un store banne résiste-t-il au vent ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Jusqu'à un certain point seulement. La norme NF EN 13561 classe la résistance au vent des stores extérieurs de 0 à 3, la classe 3 étant la plus élevée. Cette classe indique jusqu'à quel vent le store peut rester déployé, pas qu'il tient une tempête : au-delà, il doit être replié. Et la classe réellement atteinte dépend aussi de la pose et du mur qui le porte.",
        },
      },
      {
        '@type': 'Question',
        name: 'Peut-on remplacer un store banne par une pergola bioclimatique sur la même terrasse ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, c'est même un cas très fréquent, souvent au moment où la toile est à changer. Mais ce n'est pas un échange poste pour poste : la pergola repose sur des poteaux, elle demande une étude de la façade (fixation adossée ou structure autoportante), des appuis au sol, une évacuation des eaux et une formalité d'urbanisme. Les anciennes consoles du store se déposent et la façade se reprend.",
        },
      },
      {
        '@type': 'Question',
        name: 'Faut-il une autorisation pour un store banne ou une pergola bioclimatique ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Un store banne modifie l'aspect extérieur de la façade : il relève en général d'une déclaration préalable, à confirmer en mairie, et en secteur protégé (périmètre des Architectes des Bâtiments de France) l'instruction est plus longue. Pour une pergola bioclimatique, la formalité dépend de la surface et du PLU de la commune ; notre guide sur l'autorisation d'urbanisme des abris, carports et pergolas détaille les cas.",
        },
      },
      {
        '@type': 'Question',
        name: 'Fait-il plus frais sous une pergola bioclimatique que sous un store banne ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En général oui, et c'est une question de ventilation. Une toile tendue contre la façade chauffe au soleil et garde l'air chaud sous elle. Les lames orientables, entrouvertes, laissent cet air chaud monter et s'échapper tout en gardant l'ombre. La différence se sent surtout en fin d'après-midi sur une terrasse exposée plein ouest.",
        },
      },
    ],
  },
];

const comparatif = [
  ['Nature', 'Équipement de façade, mobile', 'Ouvrage fixe sur poteaux'],
  ['Soleil', 'Fait de l’ombre, toile déployée', 'Ombre réglable, lames orientables'],
  ['Pluie', 'Se replie sous l’averse', 'Lames fermées, eau évacuée par chéneaux et poteaux'],
  ['Vent', 'Se replie au-delà de sa classe', 'Reste en place, structure ancrée'],
  ['Engagement', 'Façade saine, pose rapide', 'Étude, appuis, formalité d’urbanisme'],
  ['Budget', 'Un équipement', 'Un ouvrage : un tout autre budget'],
];

const decision = [
  ['Ombre l’après-midi, terrasse abritée', 'Store banne', 'Le besoin est solaire et ponctuel : la toile suffit si la façade la porte.'],
  ['Terrasse plein ouest, ventée', 'Pergola bioclimatique', 'Le store serait replié justement quand le vent d’ouest se lève.'],
  ['Repas dehors même s’il pleut', 'Pergola bioclimatique', 'Seule une couverture étanche tient sous une averse d’orage.'],
  ['Soleil rasant du soir, vis-à-vis', 'Pergola + store vertical zippé', 'Les lames gèrent le zénith, la toile latérale le soleil bas.'],
  ['Toile à changer, usage léger', 'Nouvelle toile', 'Si le store vous suffisait, le re-toiler reste le choix raisonnable.'],
  ['Façade fragile ou isolée par l’extérieur', 'Pergola autoportante', 'Aucun effort au mur : les poteaux portent tout.'],
];

const faq = [
  {
    q: 'Peut-on laisser un store banne déployé sous la pluie ?',
    r: (
      <>
        Pas sous une vraie averse. Une toile déperlante laisse passer une petite pluie si sa pente est suffisante, mais
        dès que l&apos;averse dure, l&apos;eau s&apos;accumule en poche, alourdit la toile et force les bras. Un store
        banne est une protection solaire : sous la pluie, on le replie. Pour rester dehors quand il pleut, il faut une
        couverture étanche, comme les lames fermées d&apos;une pergola bioclimatique.
      </>
    ),
  },
  {
    q: 'Un store banne résiste-t-il au vent ?',
    r: (
      <>
        Jusqu&apos;à un certain point seulement. La norme NF EN 13561 classe la résistance au vent des stores
        extérieurs de 0 à 3, la classe 3 étant la plus élevée. Cette classe indique jusqu&apos;à quel vent le store
        peut rester déployé, pas qu&apos;il tient une tempête : au-delà, il doit être replié. Et la classe réellement
        atteinte dépend aussi de la pose et du mur qui le porte.
      </>
    ),
  },
  {
    q: 'Peut-on remplacer un store banne par une pergola bioclimatique sur la même terrasse ?',
    r: (
      <>
        Oui, c&apos;est même un cas très fréquent, souvent au moment où la toile est à changer. Mais ce n&apos;est pas
        un échange poste pour poste : la pergola repose sur des poteaux, elle demande une étude de la façade (fixation
        adossée ou structure autoportante), des appuis au sol, une évacuation des eaux et une formalité
        d&apos;urbanisme. Les anciennes consoles du store se déposent et la façade se reprend.
      </>
    ),
  },
  {
    q: 'Faut-il une autorisation pour un store banne ou une pergola bioclimatique ?',
    r: (
      <>
        Un store banne modifie l&apos;aspect extérieur de la façade : il relève en général d&apos;une déclaration
        préalable, à confirmer en mairie, et en secteur protégé (périmètre des Architectes des Bâtiments de France)
        l&apos;instruction est plus longue. Pour une pergola bioclimatique, la formalité dépend de la surface et du PLU
        de la commune ; notre guide sur l&apos;autorisation d&apos;urbanisme des abris, carports et pergolas détaille
        les cas.
      </>
    ),
  },
  {
    q: 'Fait-il plus frais sous une pergola bioclimatique que sous un store banne ?',
    r: (
      <>
        En général oui, et c&apos;est une question de ventilation. Une toile tendue contre la façade chauffe au soleil
        et garde l&apos;air chaud sous elle. Les lames orientables, entrouvertes, laissent cet air chaud monter et
        s&apos;échapper tout en gardant l&apos;ombre. La différence se sent surtout en fin d&apos;après-midi sur une
        terrasse exposée plein ouest.
      </>
    ),
  },
];

export default function ArticleStoreBanneOuPergolaBioclimatiquePage() {
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
              alt="Pergola bioclimatique aluminium à lames orientables entrouvertes couvrant une terrasse meublée, lumière filtrée en bandes"
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
              <span className="text-secondary-fixed">Store banne ou pergola bioclimatique</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Pergolas aluminium
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Store banne ou pergola bioclimatique : ce qu&apos;on gagne vraiment à remplacer la toile par des lames
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
              <span>7 novembre 2026</span>
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
                Un store banne et une pergola bioclimatique ne font pas le même métier. Le store banne fait de
                l&apos;ombre, se replie au premier coup de vent et ne vous abrite pas d&apos;une averse. La pergola
                bioclimatique couvre la terrasse sous le soleil comme sous la pluie et reste en place quand le vent
                forcit, mais c&apos;est un ouvrage, avec un tout autre budget. Si vous voulez seulement de
                l&apos;ombre l&apos;après-midi sur une terrasse abritée, gardez un store. Si vous voulez vivre dehors
                même quand il pleut ou que le vent d&apos;ouest se lève, passez aux lames.
              </strong>{' '}
              La question se pose presque toujours au même moment : la toile est délavée, déchirée ou verdie, il faut la
              changer, et l&apos;on se demande s&apos;il ne vaut pas mieux couvrir la terrasse pour de bon. Voici ce que
              chaque solution fait vraiment, ce qu&apos;elle engage, et comment nous tranchons sur nos chantiers en
              Gironde.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* Deux métiers */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Deux métiers différents : faire de l&apos;ombre ou couvrir une terrasse
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le store banne est une <strong className="text-primary font-semibold">protection solaire
                mobile</strong>. Une toile, des bras articulés, un coffre fixé en façade, souvent un moteur. On le
                déploie quand le soleil tape, on le replie le reste du temps. Il ne touche pas le sol et ne demande
                aucun appui sur la terrasse.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pergola bioclimatique est un <strong className="text-primary font-semibold">ouvrage fixe</strong>.
                Des poteaux et des poutres en profilés aluminium thermolaqués, une toiture de lames orientables
                motorisées, des chéneaux intégrés qui récupèrent l&apos;eau. Elle reste en place toute l&apos;année.
                On règle l&apos;inclinaison des lames, pas sa présence.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Les comparer sur le seul critère de l&apos;ombre, c&apos;est passer à côté de la question. Voici ce qui
                les sépare vraiment :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Critère</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Store banne</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pergola bioclimatique</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparatif.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-primary font-semibold whitespace-nowrap">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Nous concevons et posons des pergolas bioclimatiques aluminium, des pergolas bois et des stores
                verticaux zippés. Nous n&apos;avons donc aucun intérêt à vous vendre des lames si une toile suffit à
                votre usage : le bon choix est celui que vous utiliserez vraiment.
              </p>
            </section>

            <Figure
              src="/images/blog/store-banne-ou-pergola-bioclimatique/store-banne-deploye-terrasse-toile-bras.webp"
              w={1200}
              h={1080}
              alt="Store banne à toile rayée déployé au-dessus d'une terrasse avec table dressée, barre de charge et bras visibles"
              caption="Toile, barre de charge et bras accrochés au mur : rien ne touche le sol, tout l'effort du vent remonte dans la façade. Photo Clay Banks, Unsplash."
            />

            {/* Vent */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le vent, la vraie limite du store banne
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une toile déployée en porte-à-faux, tenue par deux bras, prend le vent comme une voile. Toute la force
                remonte dans les consoles et dans le mur. C&apos;est pour cela que la norme des stores extérieurs, la{' '}
                <strong className="text-primary font-semibold">NF EN 13561</strong> (« Stores extérieurs : exigences
                de performance, y compris la sécurité », version d&apos;août 2015), classe leur résistance au vent de{' '}
                <strong className="text-primary font-semibold">0 à 3</strong>, la classe 3 étant la plus élevée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Il faut bien lire ce que dit cette classe.{' '}
                <strong className="text-primary font-semibold">
                  Elle indique jusqu&apos;à quel vent le store peut rester déployé, pas qu&apos;il résiste à une
                  tempête.
                </strong>{' '}
                Au-delà, il doit être replié. Et la classe réellement obtenue dépend de la pose : une notice de
                fabricant le précise d&apos;ailleurs, la classe déclarée par l&apos;entreprise de montage peut différer
                de celle annoncée pour le produit. Un bon store mal chevillé dans un mur creux ne vaut pas sa fiche
                technique.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans la vraie vie, cela donne un store qu&apos;on rentre souvent. Un capteur de vent le replie tout
                seul, ce qui protège le matériel, mais vous laisse au soleil au moment précis où vous vous étiez
                installé. Et un capteur ne fonctionne que si le moteur est alimenté et le capteur entretenu.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                La pergola bioclimatique n&apos;a rien à replier. Sa structure est dimensionnée et ancrée pour rester en
                place : poteaux sur massifs, profilé de tête fixé en façade ou structure autoportante. Elle a ses propres
                consignes par gros temps, sur la position des lames notamment, que nous détaillons dans{' '}
                <a href="/blog/pergola-aluminium-tempete-vent" className={lienInterne}>
                  notre guide sur la pergola aluminium face aux tempêtes
                </a>
                . Mais au quotidien, un après-midi venté ne vous chasse pas de la terrasse.
              </p>
            </section>

            {/* Pluie */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La pluie : ce qu&apos;une toile ne fait pas, et ce que font des lames étanches
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est le malentendu le plus fréquent.{' '}
                <strong className="text-primary font-semibold">Un store banne n&apos;est pas un abri de pluie.</strong>{' '}
                Une toile déperlante laisse filer une petite averse si la pente est suffisante. Dès que la pluie dure,
                l&apos;eau s&apos;accumule en poche au milieu de la toile, l&apos;alourdit, la déforme et force les bras.
                Sous un orage, on le replie, et la terrasse redevient découverte.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pergola bioclimatique fait l&apos;inverse. Lames fermées, la toiture devient{' '}
                <strong className="text-primary font-semibold">étanche</strong> : les lames s&apos;emboîtent avec des
                joints, l&apos;eau est recueillie dans des chéneaux intégrés aux profilés, puis descend par
                l&apos;intérieur des poteaux jusqu&apos;au sol ou au réseau. Avec un capteur de pluie, les lames se
                ferment seules dès les premières gouttes, même quand vous êtes absent.
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le point à vérifier', 'où va l’eau en pied de poteau : regard, drain, raccord au pluvial. Une pergola étanche qui rejette son eau sur la terrasse déplace le problème.'],
                  ['Le second point', 'l’étanchéité contre la façade quand la pergola est adossée. C’est la jonction la plus sensible, à traiter avec un profilé et un joint adaptés au mur.'],
                  ['Le piège', 'les feuilles. Des chéneaux encombrés débordent : sous des arbres, prévoyez un nettoyage régulier.'],
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
                Tout le fonctionnement des lames orientables, de la motorisation aux options, est détaillé dans{' '}
                <a href="/blog/pergola-bioclimatique-aluminium-guide" className={lienInterne}>
                  notre guide complet de la pergola bioclimatique aluminium
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-2.webp"
              w={768}
              h={512}
              alt="Pergola bioclimatique aluminium vue de dessous, lames orientables fermées et stores verticaux baissés autour d'une terrasse"
              caption="Lames fermées, la toiture devient continue : l'eau file vers les chéneaux cachés dans la poutre périphérique, puis descend par les poteaux. Visuel fabricant LI-SU DES TEMPS."
            />

            {/* Vivre dessous */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Lumière, chaleur, bruit : vivre dessous
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La chaleur.</strong> Une toile tendue au soleil chauffe,
                et l&apos;air chaud reste piégé entre elle et la façade. Sous un store banne, on a de l&apos;ombre, mais
                souvent une ombre lourde. Les lames orientables, elles, s&apos;entrouvrent : elles coupent le rayonnement
                direct et laissent l&apos;air chaud monter et s&apos;échapper entre elles. C&apos;est tout
                l&apos;intérêt du mot « bioclimatique ».
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La lumière.</strong> Le store est tout ou rien : déployé,
                il assombrit aussi la pièce derrière la baie. Les lames se règlent à l&apos;angle près pour suivre le
                soleil, et s&apos;ouvrent en grand en hiver pour laisser entrer la lumière dans la maison. Attention
                quand même : une pergola fixe devant une baie reste une toiture, même ouverte. Si la pièce manque déjà
                de jour, on en parle avant.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Le bruit.</strong> C&apos;est le revers honnête des lames
                étanches : sous une averse, la pluie sur l&apos;aluminium s&apos;entend. Certains aiment, d&apos;autres
                non. Nous comparons ce point matériau par matériau dans{' '}
                <a href="/blog/couverture-pergola-carport-toiture-materiaux" className={lienInterne}>
                  notre article sur les couvertures de pergola et de carport
                </a>
                . Sous un store banne, la question ne se pose pas : il est replié.
              </p>
            </section>

            <Figure
              src="/images/blog/store-banne-ou-pergola-bioclimatique/lames-orientables-pergola-bioclimatique-contre-plongee.webp"
              w={1200}
              h={800}
              alt="Contre-plongée sous une pergola bioclimatique aluminium : lames orientables entrouvertes à gauche, fermées à droite"
              caption="À gauche, les lames entrouvertes gardent l'ombre et laissent l'air chaud s'échapper ; à droite, fermées, elles font toiture. Photo AgostiniJulien, CC BY-SA 4.0, Wikimedia Commons (recadrée)."
            />

            {/* Façade, poteaux, urbanisme */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Façade, poteaux, urbanisme : ce que chaque solution engage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un store banne ne demande qu&apos;une chose, mais elle est non négociable :{' '}
                <strong className="text-primary font-semibold">un mur capable de le porter</strong>, à la bonne hauteur,
                avec assez de place sous le linteau ou la toiture pour le coffre. Pierre pleine, parpaing, brique creuse
                ou isolation par l&apos;extérieur ne se chevillent pas de la même façon. Sur un isolant, il faut des
                fixations traversantes adaptées, sinon le store arrache l&apos;enduit au premier vent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pergola bioclimatique engage davantage. Elle demande une étude : des poteaux posés sur des massifs ou
                une dalle capable de les recevoir, et soit un profilé de tête fixé en façade, soit une structure
                autoportante quand le mur ne peut pas porter. Nous expliquons comment nous décidons dans{' '}
                <a href="/blog/fixer-pergola-aluminium-facade" className={lienInterne}>
                  ce que votre façade doit pouvoir porter pour une pergola aluminium adossée
                </a>
                . Quand on remplace un store, ses anciennes consoles se déposent et la façade se reprend.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté urbanisme, aucun des deux n&apos;est libre. Un store banne modifie l&apos;aspect extérieur de la
                façade, et l&apos;article R*421-17 du code de l&apos;urbanisme soumet ces travaux à{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable
                </a>
                .{' '}
                <strong className="text-primary font-semibold">
                  Il relève donc en général d&apos;une déclaration préalable, à confirmer en mairie.
                </strong>{' '}
                En secteur protégé (périmètre des Architectes des Bâtiments de France), l&apos;instruction est plus
                longue.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Pour la pergola, la formalité dépend de la surface couverte et du PLU de la commune. Plutôt que de vous
                donner des seuils hors contexte, nous les détaillons cas par cas dans{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  notre guide des autorisations d&apos;urbanisme pour abri, carport et pergola
                </a>, et nous vérifions la règle de votre commune avant de chiffrer.
              </p>
            </section>

            {/* Entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Entretien et durée de vie
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Un store banne s&apos;use par sa toile. Elle s&apos;encrasse, verdit à l&apos;ombre des arbres, se
                délave au soleil et finit par se déchirer ou se détendre. Elle se change, c&apos;est prévu. Viennent
                ensuite les bras et leurs ressorts, le coffre, le moteur et le capteur de vent. Rien de dramatique, mais
                un store vit au rythme de ses re-toilages.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
                Une pergola bioclimatique n&apos;a pas de toile à changer. Son entretien est celui d&apos;une mécanique
                fixe :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  'Laver les lames et les profilés à l’eau savonneuse, sans abrasif ni nettoyeur haute pression trop proche : c’est ce qui préserve le thermolaquage et sa teinte RAL.',
                  'Dégager les feuilles des chéneaux et vérifier l’évacuation en pied de poteau, surtout à l’automne.',
                  'Contrôler les joints des lames et la jonction avec la façade, là où une infiltration se déclare en premier.',
                  'Faire vérifier le moteur, les capteurs pluie et vent et la télécommande, qui sont les pièces d’usure de l’ensemble.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur la durée, l&apos;aluminium thermolaqué vieillit bien plus lentement qu&apos;une toile. C&apos;est
                ce qui justifie en partie l&apos;écart de budget : on n&apos;achète pas un équipement, on construit un
                ouvrage. Pour savoir ce que recouvre un devis de pergola, et où se cachent les écarts entre deux offres,
                lisez{' '}
                <a href="/blog/comparer-devis-pergola-postes-prix" className={lienInterne}>
                  notre méthode pour comparer deux devis de pergola poste par poste
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/blog/fixer-pergola-aluminium-facade/pergola-aluminium-jonction-toit-tuiles-saint-pey-de-castets.webp"
              w={1200}
              h={800}
              alt="Jonction entre la toiture d'une pergola aluminium thermolaquée et le rang de tuiles de la maison, après la pluie, à Saint-Pey-de-Castets"
              caption="Sur notre chantier de Saint-Pey-de-Castets (pergola aluminium à toiture en panneaux) : la jonction avec la maison, les profilés et les rives, c'est là que l'entretien se joue."
            />

            {/* Libourne / Gironde */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                À Libourne et en Gironde : quand on tranche pour l&apos;un ou l&apos;autre
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Notre climat pèse dans le choix. Autour de Libourne, beaucoup de maisons de la couronne libournaise ont
                leur terrasse côté jardin, souvent plein ouest. C&apos;est la plus agréable le soir, et la plus exposée :
                le vent dominant vient de l&apos;ouest, et l&apos;été apporte des après-midi chauds suivis d&apos;averses
                d&apos;orage soudaines. Sur ce type de terrasse, un store banne passe une bonne partie de la saison
                replié, justement quand on voudrait s&apos;en servir.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                Voici comment nous tranchons selon l&apos;usage :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Votre situation</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Notre conseil</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pourquoi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {decision.map((ligne, i) => (
                      <tr
                        key={ligne[0]}
                        className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}
                      >
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[0]}</td>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6 mb-5">
                Notre verdict est simple.{' '}
                <strong className="text-primary font-semibold">
                  Store banne si vous cherchez seulement de l&apos;ombre l&apos;après-midi, sur une terrasse abritée du
                  vent, avec une façade qui s&apos;y prête. Pergola bioclimatique dès que vous voulez une terrasse
                  utilisable sous la pluie, exposée au vent d&apos;ouest, ou plus de quelques semaines par an.
                </strong>{' '}
                Entre les deux, le soleil rasant du soir se traite mieux par un store vertical zippé, dont la toile
                coulisse dans des rails latéraux, posé sur le côté exposé de la pergola. Pour l&apos;ombre en façade
                sans terrasse couverte, le{' '}
                <a href="/blog/protection-solaire-brise-soleil-orientable" className={lienInterne}>
                  brise-soleil orientable
                </a>{' '}
                est une autre piste.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir nos pergolas aluminium et bois posées autour de Libourne dans{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations en Gironde</a>, et découvrir{' '}
                <a href="/pergolas" className={lienInterne}>
                  notre gamme de pergolas bioclimatiques aluminium et de pergolas bois sur mesure
                </a>
                .
              </p>
            </section>

            <Figure
              src="/images/source-adefrance/Pergolas-aluminium-Libourne-7.webp"
              w={768}
              h={512}
              alt="Pergola bioclimatique aluminium blanche adossée à une maison, store vertical zippé baissé sur le côté de la terrasse"
              caption="Les lames gèrent le soleil de midi, le store zippé baissé sur le côté exposé arrête le soleil rasant du soir. Visuel fabricant LI-SU DES TEMPS."
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
              Store banne ou pergola bioclimatique : vos questions
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
              De l&apos;ombre, ou une terrasse couverte ?
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Avant de racheter une toile, posez-vous une seule question : voulez-vous de l&apos;ombre, ou une pièce
              dehors qui tient sous la pluie et au vent ? Si c&apos;est la seconde, une pergola bioclimatique aluminium
              changera votre usage de la terrasse. Nous venons voir votre façade, votre exposition et vos contraintes
              d&apos;urbanisme, à Libourne et dans toute la Gironde, et nous vous disons franchement si un store suffit.
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
