import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { AUTEUR_REF } from '@/lib/data/navigation';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER =
  '/images/blog/plui-libournais-extension-bois/bardage-bois-lames-verticales-pignon-ossature-bois.webp';

const URL_REGLEMENT =
  'https://www.lacali.fr/wp-content/uploads/2026/03/URBANISME_2026-02-005-pj6.0_ReglementEcrit_204M.pdf';
const URL_ZONAGE =
  'https://www.lacali.fr/mon-quotidien/connaitre-les-regles-durbanisme/plui-hd/consultation-du-plui-hd-approuve/';
const URL_MODIFICATION =
  'https://www.lacali.fr/avis-denquetes-publiques-et-modifications-de-plui/procedure-de-modification-de-droit-commun-n1-du-plui-hd/';

export const metadata: Metadata = buildMetadata({
  title: 'PLUi du Libournais : les règles pour votre extension bois',
  description:
    'PLUi de La Cali : bardage à lames verticales, emprise, pleine terre et toit. Ce que les règles changent à votre extension bois, à Libourne et en Gironde.',
  keywords:
    'PLUi Libournais extension, PLUi La Cali règlement, extension bois Libourne, bardage bois vertical PLUi, agrandir sa maison Libournais, emprise au sol PLUi Libourne, extension zone agricole Libournais, extension ossature bois Gironde',
  path: '/blog/plui-libournais-extension-bois',
  ogImage: COVER,
  ogTitle: 'Extension bois dans le Libournais : ce que le nouveau PLUi change à votre projet',
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

/** Source unique : la FAQ visible et le JSON-LD FAQPage lisent ce même tableau. */
const faq = [
  {
    q: 'Quelles communes sont concernées par le PLUi du Libournais ?',
    r: "Les 45 communes de La Cali, dont Libourne, Les Billaux, Coutras, Izon, Vayres et Pomerol. Saint-Émilion n'en fait pas partie. Hors de La Cali, aucune des règles de cet article ne s'applique : c'est le document d'urbanisme de votre commune qui compte.",
  },
  {
    q: 'Peut-on poser un bardage bois horizontal sur une extension dans le Libournais ?',
    r: "En zones UB, UC, UD et UH, la version approuvée le 26 février 2026 autorise le bardage bois sous réserve d'être à lames verticales : une pose horizontale en bois n'y répond pas. En zones A et N, la condition est la même pour les habitations et leurs annexes, avec un bois brut, lazuré ou peint d'un ton mat. Pomerol a ses propres prescriptions en zones UC et A, et la zone UA de Libourne relève de l'AVAP.",
  },
  {
    q: 'De combien peut-on agrandir une maison en zone agricole ou naturelle ?',
    r: "En zones A et N, la version approuvée le 26 février 2026 admet 30 % ou 60 m² de surface de plancher supplémentaire, la règle la plus favorable pouvant s'appliquer, si l'extension reste proportionnée. À partir de 250 m² de surface de plancher existante, le maximum est de 60 m². Une limite d'emprise au sol s'y ajoute, différente en zone A et en zone N.",
  },
  {
    q: 'Le toit plat est-il autorisé pour une extension dans le Libournais ?',
    r: "En zones UB, UC, UD et UH, la version approuvée le 26 février 2026 admet les toitures plates ou terrasses, sauf à Pomerol en zone UC. Sur une maison d'avant 1948, les toitures terrasses n'y sont acceptées que pour des annexes accolées au bâtiment principal ou en cas de réhabilitation de bâtiments existants. En zones A et N, la règle de toiture est différente et se vérifie avec le service urbanisme.",
  },
  {
    q: 'Les règles du PLUi vont-elles encore changer ?',
    r: "Une modification n° 1 est engagée depuis la délibération du 29 juin 2026. Elle portera aussi sur le règlement écrit et graphique. Au 22 novembre 2026, aucune date d'enquête publique ni d'approbation n'est publiée. Datez votre copie du règlement et demandez une confirmation écrite au service urbanisme avant de déposer.",
  },
];

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
        name: 'PLUi du Libournais et extension bois',
        item: 'https://lesprit-bois.fr/blog/plui-libournais-extension-bois',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Extension bois dans le Libournais : ce que le nouveau PLUi change à votre projet',
    description:
      "Le PLUi approuvé le 26 février 2026 s'applique aux 45 communes de La Cali. Bardage bois à lames verticales, emprise au sol, pleine terre, toiture, zones agricoles et annexes : ce qu'il faut lire avant de dessiner une extension en ossature bois à Libourne et dans le Libournais, en Gironde.",
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
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/plui-libournais-extension-bois',
    },
    about: [
      { '@type': 'Thing', name: 'PLUi du Libournais' },
      { '@type': 'Thing', name: 'extension ossature bois' },
      { '@type': 'Thing', name: 'bardage bois vertical' },
    ],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.r },
    })),
  },
];

const recapitulatif = [
  [
    'UB',
    'Lames verticales',
    'Bande A : 80 % (100 % à Libourne). Bande B : 30 % (50 % à Libourne, 60 % à Coutras)',
    'Bande A : 20 %. Bande B : 50 %. D’un seul tenant',
    'Admis ; restreint sur une maison d’avant 1948',
  ],
  [
    'UC',
    'Lames verticales (Pomerol déroge)',
    'Bande A : 60 %. Bande B : 30 %. Secteur UCd : 50 % et 20 %. UCbp (Pomerol) : non réglementé',
    '30 % du terrain (secteur UCd : 40 % et 80 %)',
    'Admis, sauf à Pomerol ; restreint sur une maison d’avant 1948',
  ],
  [
    'UD',
    'Lames verticales',
    'UDa : 45 %. UDb : 30 %',
    '40 %, d’un seul tenant',
    'Admis ; restreint sur une maison d’avant 1948',
  ],
  [
    'UH',
    'Lames verticales',
    'UHa : 45 %. UHb : 30 %',
    '60 %, d’un seul tenant',
    'Admis ; restreint sur une maison d’avant 1948',
  ],
  [
    'A',
    'Brut, lazuré ou peint mat, lames verticales (Pomerol à part)',
    '30 % du terrain (10 % en secteur Ap, 50 % à Pomerol)',
    'Non réglementée',
    'Pente de 2 à 7 % pour les « terrasses » : à faire confirmer',
  ],
  [
    'N',
    'Brut, lazuré ou peint mat, lames verticales',
    '300 m² cumulés après extension',
    '50 % du terrain',
    'Pente de 2 à 7 % pour les « terrasses » : à faire confirmer',
  ],
];

export default function ArticlePluiLibournaisExtensionBoisPage() {
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
              alt="Pignon d'un bâtiment en ossature bois habillé d'un bardage douglas à lames verticales, sous une toiture à deux pans en tuiles"
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
              <span className="text-secondary-fixed">PLUi du Libournais</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Ossature bois
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Extension bois dans le Libournais : ce que le nouveau PLUi change à votre projet
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
              <span>26 novembre 2026</span>
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
                Dans les 45 communes de La Cali, un seul règlement d&apos;urbanisme, approuvé le 26 février 2026, fixe
                désormais l&apos;allure d&apos;une extension en bois. Dans les zones résidentielles UB, UC, UD et UH
                comme en zones A et N, le bardage bois y est admis à condition d&apos;être à lames verticales, avec une
                exception à Pomerol. La zone de votre terrain décide ensuite de l&apos;emprise, de la pleine terre et
                du toit : on la lit d&apos;abord, on dessine après.
              </strong>{' '}
              Deux précautions avant de commencer. Hors de La Cali, rien de ce qui suit ne s&apos;applique : Saint-Émilion,
              par exemple, n&apos;en fait pas partie. Et ce règlement est déjà en cours de modification. Nous citons donc
              la version approuvée le 26 février 2026, relue le 22 novembre 2026, sans prétendre remplacer le service
              urbanisme.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Êtes-vous concerné ? */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Un seul règlement pour 45 communes : êtes-vous concerné ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le PLUi-HD de La Cali a été approuvé par le conseil communautaire le 26 février 2026. Il couvre 45
                communes et abroge leurs anciens PLU et cartes communales. Le règlement communal gardé dans un tiroir
                n&apos;est donc plus la bonne référence.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Libourne et Les Billaux, où se trouve notre siège, en font partie, tout comme Coutras, Izon, Vayres,
                Arveyres, Génissac, Moulon, Saint-Denis-de-Pile, Saint-Germain-du-Puch, Saint-Martin-du-Bois, Guîtres,
                Saint-Médard-de-Guizières, Pomerol et Lalande-de-Pomerol.{' '}
                <strong className="text-primary font-semibold">Saint-Émilion n&apos;y figure pas</strong>. Ailleurs en
                Gironde, c&apos;est le document d&apos;urbanisme de votre commune qui s&apos;applique, avec ses propres
                chiffres.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Tout est public.{' '}
                <a href={URL_REGLEMENT} className={lienInterne} target="_blank" rel="noopener noreferrer">
                  Le règlement écrit
                </a>{' '}
                est en ligne, ainsi que les{' '}
                <a href={URL_ZONAGE} className={lienInterne} target="_blank" rel="noopener noreferrer">
                  plans de zonage par commune
                </a>. Les règles de cet article viennent du premier, les zones se cherchent dans les seconds.
              </p>
            </section>

            {/* 2. Trouver sa zone */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Trouver sa zone avant tout (UA, UB, UC, UD, UH, A, N)
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Repérez votre parcelle sur le plan, notez la zone, puis le secteur qui la précise (UCd ou UHa, par
                exemple) : il change parfois les chiffres. Voici les principales zones à reconnaître, dans la version
                approuvée le 26 février 2026 :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['UA', 'uniquement à Libourne, dans le centre historique. Les règles de l’AVAP s’y imposent, et c’est vers elle qu’il faut se tourner.'],
                  ['UB', 'un tissu plus compact, majoritairement d’habitat.'],
                  ['UC', 'un secteur résidentiel, souvent pavillonnaire.'],
                  ['UD', 'un secteur résidentiel de très faible compacité.'],
                  ['UH', 'une zone d’urbanisation limitée, où seules l’extension, l’annexe et la piscine sont autorisées.'],
                  ['A et N', 'les zones agricole et naturelle, où l’extension d’une maison existante est plafonnée.'],
                ].map(([titre, texte]) => (
                  <li key={titre} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">check_circle</span>
                    <span className="text-body-md text-on-surface-variant">
                      <strong className="text-primary font-semibold">{titre}</strong> : {texte}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                En zones UB et UC, il faut en plus mesurer. Le règlement raisonne par bandes : la{' '}
                <strong className="text-primary font-semibold">bande A va de 0 à 25 m depuis l&apos;alignement</strong>,
                c&apos;est-à-dire la limite avec la voie, et la bande B commence au-delà. Une extension côté jardin peut
                donc tomber en bande B alors que la maison est en bande A. Le tableau résume les quatre lignes à lire
                ensuite :
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Zone</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Bardage bois</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Emprise au sol maximale</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Pleine terre minimale</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Toit plat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recapitulatif.map((ligne, i) => (
                      <tr key={ligne[0]} className={i % 2 === 0 ? 'bg-white' : 'bg-surface-container-low'}>
                        <td className="px-4 py-3 text-primary font-semibold">{ligne[0]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[1]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[2]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[3]}</td>
                        <td className="px-4 py-3 text-on-surface-variant">{ligne[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-center font-label-md text-label-md text-on-surface-variant">
                Synthèse du règlement écrit, version approuvée le 26 février 2026. Cas général, hors dérogations : votre
                secteur et le texte complet priment.
              </p>
            </section>

            {/* 3. Bardage */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Bardage bois : lames verticales, et ce que cela change au dessin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la ligne la plus concrète pour nous. En zones UB, UC, UD et UH, la version approuvée le 26
                février 2026 écrit :{' '}
                <strong className="text-primary font-semibold">
                  « Le bardage bois est autorisé sous réserve d&apos;être à lames verticales. »
                </strong>{' '}
                Pomerol déroge en zone UC : le bois y est admis parmi les matériaux, avec ses propres nuanciers. En zones
                A et N, pour les habitations et leurs annexes, le bardage bois est admis « soit brut, soit lazuré ou
                peint d&apos;un ton mât, et sous réserve d&apos;être à lames verticales ». Pomerol garde là aussi ses
                propres prescriptions en zone A.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Cette phrase ne vise que le bardage bois. Pour un composite ou un métal, n&apos;en déduisez ni
                autorisation ni interdiction : lisez les règles de façade de votre zone et posez la question.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Sur le chantier, la verticale se prépare tôt :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['L’ossature de fixation', 'des lames verticales se fixent sur des tasseaux horizontaux. Il faut donc croiser deux réseaux de tasseaux pour garder une lame d’air continue, et compter cette épaisseur dans les tableaux de baies.'],
                  ['Le calepinage', 'on cale la largeur des lames sur les baies et les angles, pour éviter une lame refendue au bord d’une fenêtre.'],
                  ['Les hauteurs', 'on cherche des lames d’un seul tenant, ou un raccord horizontal assumé et dessiné, comme une ligne de pignon.'],
                  ['Le pied', 'le bas des lames présente du bois de bout : on l’éloigne du sol et des projections d’eau.'],
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
                Côté budget, voyez notre article sur{' '}
                <a href="/blog/extension-ossature-bois-prix-m2" className={lienInterne}>
                  le prix au m² d&apos;une extension en ossature bois
                </a>. Les photos de ce guide illustrent la pose et les volumes ; elles ne disent rien d&apos;une
                instruction sous ce règlement.
              </p>
            </section>

            <Figure
              src="/images/blog/plui-libournais-extension-bois/extension-bois-lames-verticales-gouttiere-zinc-genissac.webp"
              w={1200}
              h={395}
              alt="Extension bois à Génissac : bardage à lames verticales au-dessus d'une baie vitrée noire, gouttière en zinc et tuiles"
              caption="À Génissac, commune de La Cali : les lames verticales descendent sur l'encadrement de la baie, où le calepinage se voit tout de suite."
            />

            {/* 4. Emprise et pleine terre */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Emprise au sol et pleine terre : la surface qu&apos;il vous reste vraiment
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux limites se croisent : ce que vous pouvez couvrir et ce que vous devez laisser en pleine terre.
                L&apos;emprise au sol est la projection verticale du volume ; les débords de toiture de moins de 30 cm en
                sont exclus. Un grand débord protège bien un bardage, mais il peut donc entrer dans le calcul.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Dans la version approuvée le 26 février 2026, la zone UB admet 80 % en bande A, portés à 100 % à
                Libourne, mais seulement 30 % en bande B (50 % à Libourne, 60 % à Coutras). La zone UC retient 60 % puis
                30 % dans le cas général, et le secteur UCd 50 % puis 20 %. En zones UD et UH, les secteurs UDa et UHa
                sont à 45 %, UDb et UHb à 30 %. En zone UB, la bande B limite aussi la hauteur : 3 m à l&apos;égout ou à
                l&apos;acrotère (6 m à Coutras), avec des exceptions, notamment pour l&apos;extension d&apos;un bâtiment
                déjà plus haut.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La pleine terre surprend davantage. Elle est fixée à 20 % en bande A et 50 % en bande B, d&apos;un seul
                tenant, en zone UB ; à 30 % du terrain en zone UC (40 % et 80 % en secteur UCd) ; à 40 % d&apos;un seul
                tenant en zone UD et à 60 % d&apos;un seul tenant en zone UH.{' '}
                <strong className="text-primary font-semibold">
                  Une piscine, une fosse d&apos;assainissement ou un stationnement minéralisé ne comptent pas
                </strong>, sauf revêtement perméable pour ce dernier. Une allée en matériau drainant, elle, peut compter.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Terrain déjà trop imperméabilisé ? En zone UB bande A, en zone UC (cas général), en zones UD et UH, une
                dérogation est possible si le projet n&apos;aggrave pas l&apos;imperméabilisation. Reste la question des
                fondations, traitée dans{' '}
                <a href="/blog/sol-argileux-gironde-etude-de-sol-extension" className={lienInterne}>
                  notre article sur les sols argileux et l&apos;étude de sol
                </a>.
              </p>
            </section>

            <Figure
              src="/images/blog/extension-ossature-bois-prix-m2/extension-ossature-bois-chantier-gironde.jpg"
              w={1200}
              h={900}
              alt="Ossature d'une extension bois en cours de levage sous le versant en tuiles d'une maison à Génissac"
              caption="Une extension en cours de levage à Génissac : c'est la projection de ce volume au sol, et non la seule surface intérieure, qui compte dans l'emprise."
            />

            {/* 5. Toit */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Toit plat, monopente ou tuiles : admis selon la zone et l&apos;âge de la maison
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En zones UB, UC, UD et UH, la version approuvée le 26 février 2026 demande pour les habitations des
                toitures en tuiles de style régional, puis ajoute :{' '}
                <strong className="text-primary font-semibold">
                  « Toutefois, les toitures plates ou terrasses sont admises »
                </strong>. La réserve est à Pomerol, en zone UC : dans les secteurs UCbp1 et UCbp2, toitures à une pente
                et toitures terrasses sont interdites, et la tuile est canal ou romane canal.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;âge de la maison vient ensuite. Dans ces mêmes zones, si elle date d&apos;avant 1948, les
                extensions suivent les mêmes modalités que la construction existante. Les toitures terrasses n&apos;y
                sont acceptées que pour des annexes accolées au bâtiment principal ou en cas de réhabilitation de
                bâtiments existants. Sur une maison ancienne en pierre, nous partons donc d&apos;une couverture accordée
                à celle de la maison. Un monopente se présente au service urbanisme avant d&apos;être dessiné en détail.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                En zones A et N, le règlement décrit une toiture simple, à deux pans égaux ou répartis jusqu&apos;à 2/3 -
                1/3, ou à deux pans et croupes, hors annexes de moins de 20 m² au sol. La pente va de 2 à 7 % pour les
                « terrasses » ou de 28 à 35 % pour les toitures à pente, en tuile terre cuite claire ou en métal de
                teinte foncée. D&apos;autres solutions restent possibles pour un parti architectural spécifique. Un
                monopente y demande donc une justification, à vérifier avec le service urbanisme.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Cela, c&apos;est ce que le règlement permet. Ce que votre maison permet, avec sa hauteur sous
                l&apos;égout et son raccord, est traité dans{' '}
                <a href="/blog/toiture-extension-ossature-bois-toit-plat-ou-pente" className={lienInterne}>
                  notre guide du toit d&apos;extension, plat ou en pente
                </a>.
              </p>
            </section>

            <Figure
              src="/images/chantiers/extension-ossature-bois-bardage-douglas-maison-pierre-gironde.webp"
              w={1400}
              h={923}
              alt="Extension en bois à lames verticales et toiture en tuiles, accolée à une maison ancienne en pierre"
              caption="Contre une maison ancienne en pierre, une couverture en tuiles qui répond à celle de la maison et un bardage à lames verticales avec couvre-joints."
            />

            {/* 6. A et N */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Maison isolée en zone agricole ou naturelle : l&apos;extension plafonnée
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Entre vignes et prairies, beaucoup de maisons du Libournais sont en zone A ou N. On peut les agrandir,
                dans une limite précise. La version approuvée le 26 février 2026 admet{' '}
                <strong className="text-primary font-semibold">
                  30 % ou 60 m² de surface de plancher supplémentaire
                </strong>, la règle la plus favorable pouvant s&apos;appliquer, à condition que l&apos;extension reste
                proportionnée. À partir de 250 m² de surface de plancher, le maximum est de 60 m².
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Maison de 120 m²', '30 % donnent 36 m² : les 60 m² sont plus favorables.'],
                  ['Maison de 220 m²', '30 % donnent 66 m² : c’est le pourcentage qui l’emporte.'],
                  ['Maison de 250 m² ou plus', 'le plafond est de 60 m².'],
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
                Ce plafond n&apos;est pas un droit acquis : les autres règles s&apos;y ajoutent. En zone A,
                l&apos;emprise ne peut dépasser 30 % du terrain (10 % en secteur Ap, 50 % à Pomerol). En zone N, la
                surface finale cumulée après extension est limitée à 300 m² d&apos;emprise au sol, et la moitié du terrain
                doit rester en pleine terre. Enfin,
                l&apos;extension se fait dans la continuité du bâtiment principal ou en surélévation, une piste que la
                légèreté de l&apos;ossature bois facilite, étude de la structure existante à l&apos;appui.
              </p>
            </section>

            {/* 7. Extension ou annexe */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Extension ou annexe ? Le carport, l&apos;abri et le bureau de jardin n&apos;ont pas les mêmes règles
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Le vocabulaire compte. Pour le lexique de la version approuvée le 26 février 2026, l&apos;extension est
                une augmentation de volume accolée et dans le prolongement, avec un lien fonctionnel.
                L&apos;annexe regroupe garage, abri de jardin, abri voiture ou carport, atelier non professionnel,
                pool-house ou bûcher.{' '}
                <strong className="text-primary font-semibold">
                  Elle ne peut pas comporter de logement ou de pièce habitable
                </strong>, sauf transformation encadrée.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les limites diffèrent aussi. En zones UB, UC, UD et UH, l&apos;annexe est limitée à 40 m² de surface de
                plancher, hors piscines. En zones A et N, la mesure change : 40 m² d&apos;emprise chacune, à 20 m de
                l&apos;habitation au plus, avec des dérogations prévues. Le règlement contient d&apos;autres paragraphes
                avec des distances différentes : faites confirmer celle qui vous concerne par le service urbanisme.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste le bureau de jardin. Est-ce une annexe ou une pièce habitable ? Nous ne tranchons pas à la place de
                l&apos;administration : c&apos;est une question à poser avant de dessiner, en décrivant l&apos;usage réel.
                Pour les ouvrages sans ambiguïté, nos{' '}
                <a href="/garages-abris-jardin" className={lienInterne}>garages et abris de jardin</a> se dessinent sur
                mesure, et{' '}
                <a href="/blog/autorisation-urbanisme-abri-carport-pergola-2026" className={lienInterne}>
                  notre article sur les autorisations d&apos;urbanisme
                </a>{' '}
                détaille la formalité à prévoir selon la surface.
              </p>
            </section>

            <Figure
              src="/images/realisations/studio-jardin-ossature-bois-saint-martin-du-bois-5.webp"
              w={982}
              h={736}
              alt="Bâtiment de jardin en ossature bois à Saint-Martin-du-Bois, pare-pluie et tasseaux verticaux posés avant le bardage"
              caption="Un bâtiment de jardin à Saint-Martin-du-Bois, avant bardage : pare-pluie et premiers tasseaux verticaux. Pour recevoir des lames verticales, un réseau horizontal se croise par-dessus."
            />

            {/* 8. Modification en cours */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Un règlement déjà en cours de modification : comment sécuriser son dossier
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                La version approuvée le 26 février 2026 a déjà son chantier. Le sous-préfet, au titre du contrôle de
                légalité, a demandé une modification le 4 mai 2026. Elle a été engagée par délibération du 29 juin 2026
                et prescrite par l&apos;arrêté 2026-349. Elle portera aussi sur « des adaptations et des clarifications
                du règlement écrit et graphique ». Au 22 novembre 2026, aucune date d&apos;enquête publique ni
                d&apos;approbation n&apos;est publiée, et nous ne préjugeons pas du résultat. Notre conseil tient en
                quatre gestes :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Lire la page de la modification n° 1', 'juste avant de dessiner, puis juste avant de déposer.'],
                  ['Dater sa copie du règlement', 'gardez le PDF et notez le jour où vous l’avez téléchargé, avec la zone et le secteur de votre parcelle.'],
                  ['Demander une confirmation écrite', 'au service urbanisme, zone et croquis à l’appui. Un certificat d’urbanisme peut aussi être demandé ; le service vous dira s’il est utile dans votre cas.'],
                  ['Garder une marge', 'un projet dessiné au dernier mètre carré supporte mal une clarification du texte.'],
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
                La{' '}
                <a href={URL_MODIFICATION} className={lienInterne} target="_blank" rel="noopener noreferrer">
                  page officielle de la modification n° 1
                </a>{' '}
                est tenue par La Cali. Le choix entre{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable
                </a>{' '}
                et{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F1986"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  permis de construire
                </a>{' '}
                se vérifie à part, sur les fiches officielles.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                De notre côté,{' '}
                <a href="/constructeur-ossature-bois-gironde" className={lienInterne}>
                  constructeur ossature bois en Gironde
                </a>, nous relevons la maison, nous lisons votre zone avec vous et nous dessinons à partir d&apos;elle.
                La décision appartient à l&apos;administration : nous ne promettons pas une autorisation. Notre offre
                s&apos;arrête hors d&apos;eau hors d&apos;air, le second œuvre revenant aux artisans de votre choix. Nos{' '}
                <a href="/constructions-bois" className={lienInterne}>constructions bois</a> et{' '}
                <a href="/realisations" className={lienInterne}>nos réalisations</a> donnent une idée des volumes et des
                bardages que nous posons.
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
              PLUi du Libournais et extension bois : vos questions
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
              Lire sa zone d&apos;abord, dessiner ensuite
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Lames verticales, emprise, pleine terre, toit : quatre lignes du règlement suffisent souvent à éviter un
              dessin à refaire. L&apos;Esprit Bois, entreprise qualifiée Qualibat installée aux Billaux, étudie votre
              extension en ossature bois à Libourne et dans toute la Gironde, règlement de votre zone en main, et la
              livre hors d&apos;eau hors d&apos;air.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/devis-extension"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95"
              >
                Demander mon devis d&apos;extension
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
