import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';

const COVER = '/images/terrasse-bois-pool-house-libourne.webp';

export const metadata: Metadata = buildMetadata({
  title: "Plage de piscine en bois : essence, pose et budget | L'Esprit Bois",
  description:
    "Quel bois autour d'une piscine ? Essences, antidérapance pieds nus, raccord aux margelles, sous-face et budget 2026 : le guide d'un artisan à Libourne (Gironde).",
  keywords:
    "plage de piscine en bois, terrasse de piscine en bois, quel bois autour d'une piscine, plage de piscine bois Gironde, terrasse piscine bois Libourne, bois antidérapant piscine, margelle et lame bois, prix plage de piscine bois",
  path: '/blog/plage-piscine-bois-essences-pose',
  ogImage: COVER,
  ogTitle:
    "Plage de piscine en bois : quelle essence, quelle pose et quel budget autour d'un bassin",
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
        name: 'Plage de piscine en bois',
        item: 'https://lesprit-bois.fr/blog/plage-piscine-bois-essences-pose',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline:
      "Plage de piscine en bois : quelle essence, quelle pose et quel budget autour d'un bassin en Gironde ?",
    description:
      "Une plage de piscine n'est pas une terrasse ordinaire : alternance mouillé/sec permanente, plein soleil, pieds nus. Essences et stabilité dimensionnelle, antidérapance, raccord aux margelles et aux pièces techniques, sous-face et fixations inox A4, sécurité du bassin, formalités et budget 2026, par un artisan à Libourne (Gironde).",
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
      logo: {
        '@type': 'ImageObject',
        url: 'https://lesprit-bois.fr/images/source-adefrance/logo2026.png',
        width: 350,
        height: 150,
      },
    },
    datePublished: '2026-08-02',
    dateModified: '2026-08-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://lesprit-bois.fr/blog/plage-piscine-bois-essences-pose',
    },
    about: ['plage de piscine en bois', 'terrasse de piscine', 'essences de bois', 'aménagement extérieur'],
    areaServed: { '@type': 'AdministrativeArea', name: 'Gironde' },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: "Quel bois choisir pour une plage de piscine ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Le critère décisif n'est pas la « résistance au chlore » mais la stabilité dimensionnelle : au bord d'un bassin, une lame passe sans arrêt du mouillé au sec en plein soleil, et c'est ce cycle qui la fait tuiler et fendre. Nous retenons le plus souvent un pin maritime traité classe 4 pour un budget contenu, un douglas ou un mélèze pour un rendu clair et local, un exotique dense (ipé, cumaru, garapa) ou un bois modifié quand la stabilité prime. Dans tous les cas, la lame doit être adaptée à une classe d'emploi 4, car elle reçoit des projections en permanence.",
        },
      },
      {
        '@type': 'Question',
        name: "Le chlore abîme-t-il vraiment le bois autour d'une piscine ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Beaucoup moins qu'on ne le croit. L'eau qui atteint la plage est de l'eau de bassin très diluée, projetée puis évaporée : ce n'est pas elle qui dégrade le bois, ce sont l'alternance humidification/séchage et les ultraviolets. En revanche, dans une piscine au sel, l'eau est franchement corrosive pour les métaux : c'est la visserie et la quincaillerie qu'il faut choisir en inox A4, pas l'essence qu'il faut changer.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une lame lisse ou rainurée au bord d'une piscine ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "La rainure profonde n'est pas la garantie d'antidérapance que l'on imagine : elle retient l'eau, les cheveux, le sable et les feuilles, elle se nettoie mal et elle est désagréable sous un pied nu. Autour d'un bassin, nous privilégions une lame lisse ou légèrement brossée, posée à plat, avec un jeu régulier qui laisse l'eau traverser et un léger dévers qui l'éloigne du bassin. Le vrai gain de sécurité vient de l'évacuation de l'eau et de l'état de surface, pas de la profondeur des cannelures.",
        },
      },
      {
        '@type': 'Question',
        name: "Faut-il une autorisation d'urbanisme pour créer une plage de piscine en bois ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Une plage de plain-pied, qui ne crée ni emprise ni surélévation, est en principe dispensée de formalité — sauf en secteur protégé (abords d'un monument historique, site patrimonial remarquable, site classé), où une déclaration préalable redevient nécessaire. Dès que la plage est surélevée, couverte ou associée à un abri, elle relève de la déclaration préalable, voire du permis de construire selon la surface et le PLU de la commune. La règle locale prime : nous vérifions au service urbanisme de la mairie avant d'engager le chantier.",
        },
      },
      {
        '@type': 'Question',
        name: "La plage doit-elle tenir compte du dispositif de sécurité de la piscine ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Oui, et c'est l'erreur de conception la plus fréquente. Toute piscine enterrée ou semi-enterrée non close, à usage privatif, doit être équipée d'au moins un dispositif de sécurité normalisé — barrière, alarme, couverture ou abri — au titre de la loi n° 2003-9 du 3 janvier 2003, codifiée au Code de la construction et de l'habitation. Une plage, un banc, un coffre ou un bac à plantes qui permettrait à un jeune enfant de franchir la barrière annule l'effet du dispositif : l'implantation du mobilier et des niveaux se dessine en même temps que la plage.",
        },
      },
      {
        '@type': 'Question',
        name: "Quel budget prévoir pour une plage de piscine en bois en Gironde ?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: "En fourchettes indicatives 2026, pose comprise et à confirmer par devis : environ 95 à 140 €/m² en pin maritime traité classe 4, 120 à 170 €/m² en douglas ou mélèze, 200 à 280 €/m² en essence exotique. Le contexte piscine majore ces fourchettes de l'ordre de 10 à 20 %, à cause des découpes autour du bassin, de l'ajustage sur les margelles, de la visserie inox A4 et des trappes démontables au-dessus des pièces techniques.",
        },
      },
    ],
  },
];

const essences = [
  [
    'Pin maritime traité classe 4',
    'Résineux local traité pour un usage en contact permanent avec l’humidité',
    'Ticket d’entrée le plus bas, ressource girondine, teinte claire',
    'Moins stable : nœuds, fentes et tuilage plus fréquents s’il sèche vite au soleil',
  ],
  [
    'Douglas / mélèze',
    'Résineux à bonne durabilité naturelle de cœur, aspect chaleureux',
    'Rendu clair, filière européenne, bon compromis prix-tenue',
    'Aubier à purger, échardes possibles la première saison, grisaillement rapide en plein sud',
  ],
  [
    'Exotiques (ipé, cumaru, garapa)',
    'Feuillus tropicaux denses, très durables et très stables',
    'Stabilité dimensionnelle maximale, faible tuilage, longévité',
    'Budget élevé, teintes foncées qui chauffent, exigence forte sur l’origine certifiée',
  ],
  [
    'Bois modifié (type Accoya)',
    'Résineux transformé en profondeur pour le stabiliser durablement',
    'Très faible retrait-gonflement : l’option la plus sûre contre le tuilage',
    'Prix proche du haut de gamme exotique, disponibilité et sections plus limitées',
  ],
  [
    'Composite bois-polymère',
    'Lame co-extrudée à base de farine de bois et de liant polymère',
    'Aucune écharde, entretien minimal, teinte stable dans le temps',
    'Chauffe fortement en teinte foncée, ne se ponce pas, rendu moins vivant que le bois',
  ],
];

const faq = [
  {
    q: 'Quel bois choisir pour une plage de piscine ?',
    r: (
      <>
        Le critère décisif n&apos;est pas la « résistance au chlore » mais la stabilité dimensionnelle : au bord
        d&apos;un bassin, une lame passe sans arrêt du mouillé au sec en plein soleil, et c&apos;est ce cycle qui la
        fait tuiler et fendre. Nous retenons le plus souvent un pin maritime traité classe 4 pour un budget contenu, un
        douglas ou un mélèze pour un rendu clair et local, un exotique dense (ipé, cumaru, garapa) ou un bois modifié
        quand la stabilité prime. Dans tous les cas, la lame doit être adaptée à une classe d&apos;emploi 4, car elle
        reçoit des projections en permanence.
      </>
    ),
  },
  {
    q: "Le chlore abîme-t-il vraiment le bois autour d'une piscine ?",
    r: (
      <>
        Beaucoup moins qu&apos;on ne le croit. L&apos;eau qui atteint la plage est de l&apos;eau de bassin très diluée,
        projetée puis évaporée : ce n&apos;est pas elle qui dégrade le bois, ce sont l&apos;alternance
        humidification/séchage et les ultraviolets. En revanche, dans une piscine au sel, l&apos;eau est franchement
        corrosive pour les métaux : c&apos;est la visserie et la quincaillerie qu&apos;il faut choisir en inox A4, pas
        l&apos;essence qu&apos;il faut changer.
      </>
    ),
  },
  {
    q: "Faut-il une lame lisse ou rainurée au bord d'une piscine ?",
    r: (
      <>
        La rainure profonde n&apos;est pas la garantie d&apos;antidérapance que l&apos;on imagine : elle retient
        l&apos;eau, les cheveux, le sable et les feuilles, elle se nettoie mal et elle est désagréable sous un pied nu.
        Autour d&apos;un bassin, nous privilégions une lame lisse ou légèrement brossée, posée à plat, avec un jeu
        régulier qui laisse l&apos;eau traverser et un léger dévers qui l&apos;éloigne du bassin. Le vrai gain de
        sécurité vient de l&apos;évacuation de l&apos;eau et de l&apos;état de surface, pas de la profondeur des
        cannelures.
      </>
    ),
  },
  {
    q: "Faut-il une autorisation d'urbanisme pour créer une plage de piscine en bois ?",
    r: (
      <>
        Une plage de plain-pied, qui ne crée ni emprise ni surélévation, est en principe dispensée de formalité — sauf
        en secteur protégé (abords d&apos;un monument historique, site patrimonial remarquable, site classé), où une
        déclaration préalable redevient nécessaire. Dès que la plage est surélevée, couverte ou associée à un abri, elle
        relève de la déclaration préalable, voire du permis de construire selon la surface et le PLU de la commune. La
        règle locale prime : nous vérifions au service urbanisme de la mairie avant d&apos;engager le chantier.
      </>
    ),
  },
  {
    q: 'La plage doit-elle tenir compte du dispositif de sécurité de la piscine ?',
    r: (
      <>
        Oui, et c&apos;est l&apos;erreur de conception la plus fréquente. Toute piscine enterrée ou semi-enterrée non
        close, à usage privatif, doit être équipée d&apos;au moins un dispositif de sécurité normalisé — barrière,
        alarme, couverture ou abri — au titre de la loi n° 2003-9 du 3 janvier 2003, codifiée au Code de la construction
        et de l&apos;habitation. Une plage, un banc, un coffre ou un bac à plantes qui permettrait à un jeune enfant de
        franchir la barrière annule l&apos;effet du dispositif : l&apos;implantation du mobilier et des niveaux se
        dessine en même temps que la plage.
      </>
    ),
  },
  {
    q: 'Quel budget prévoir pour une plage de piscine en bois en Gironde ?',
    r: (
      <>
        En fourchettes indicatives 2026, pose comprise et à confirmer par devis : environ 95 à 140 €/m² en pin maritime
        traité classe 4, 120 à 170 €/m² en douglas ou mélèze, 200 à 280 €/m² en essence exotique. Le contexte piscine
        majore ces fourchettes de l&apos;ordre de 10 à 20 %, à cause des découpes autour du bassin, de l&apos;ajustage
        sur les margelles, de la visserie inox A4 et des trappes démontables au-dessus des pièces techniques.
      </>
    ),
  },
];

export default function ArticlePlagePiscineBoisPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="blog" />
      <main id="contenu">
        {/* Hero */}
        <header className="relative pt-40 pb-24 md:pt-48 md:pb-28 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="736"
              height="981"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Plage de piscine en bois longeant un bassin, lames claires posées à plat au ras de l'eau, chantier en Gironde"
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
              <span className="text-secondary-fixed">Plage de piscine en bois</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Guide · Plage de piscine
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Plage de piscine en bois : quelle essence, quelle pose et quel budget autour d&apos;un bassin en Gironde ?
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/70 font-label-md text-label-md">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[20px]">person</span>
                <a
                  href="/qui-sommes-nous#david-bertrand"
                  className="underline underline-offset-4 decoration-white/30 hover:decoration-secondary hover:text-white transition-colors"
                >
                  David Bertrand
                </a>
                , L&apos;Esprit Bois
              </span>
              <span className="text-secondary">·</span>
              <span>2 août 2026</span>
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
                Le vrai critère d&apos;une plage de piscine en bois n&apos;est pas de trouver l&apos;essence « qui
                résiste au chlore » : c&apos;est le trio stabilité dimensionnelle, antidérapance pieds nus et
                ventilation de la sous-face. L&apos;eau de bassin, très diluée quand elle atteint les lames, agresse le
                bois bien moins que l&apos;alternance permanente mouillé/sec et que les ultraviolets d&apos;un plein
                sud.
              </strong>{' '}
              C&apos;est la nuance que nous passons le plus de temps à expliquer devant un bassin, en août, autour de
              Libourne : le client cherche un bois « spécial piscine » alors que le sujet est ailleurs — dans le
              comportement de la lame quand elle sèche en deux heures après trois plongeons, dans la manière dont
              l&apos;eau quitte la plage, et dans ce qui se passe sous les lames. Voici comment nous choisissons
              l&apos;essence, la pose et le raccord au bassin en conséquence.
            </p>
          </div>
        </section>

        {/* Corps */}
        <article className="pb-section-padding bg-surface">
          <div className="max-w-3xl mx-auto px-6 md:px-16 space-y-14">
            {/* 1. Pas une terrasse comme les autres */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Pourquoi une plage de piscine n&apos;est pas une terrasse comme les autres
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Une terrasse de salon prend la pluie quelques dizaines de fois par an, sèche lentement, et supporte des
                chaussures. Une plage de piscine, elle, vit un régime complètement différent d&apos;avril à septembre :{' '}
                <strong className="text-primary font-semibold">
                  elle est mouillée plusieurs fois par jour et sèche à chaque fois en quelques heures, en plein soleil.
                </strong>{' '}
                Ce n&apos;est pas l&apos;eau qui fatigue le bois, c&apos;est ce battement. Le bois gonfle en surface,
                se rétracte en séchant, et les fibres qui travaillent dans deux sens opposés finissent par tuiler,
                fendiller ou faire remonter des échardes.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                S&apos;ajoutent quatre contraintes propres au bord d&apos;un bassin, qu&apos;on ne rencontre nulle part
                ailleurs dans un jardin :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Le plein soleil sans ombre', 'une piscine se dégage volontairement des arbres. La plage reçoit donc les UV de face toute la journée : elle grise plus vite et chauffe davantage qu’une terrasse abritée.'],
                  ['Les pieds nus mouillés', 'le seul ouvrage extérieur qu’on parcourt sans chaussures, en courant, avec les pieds humides. L’état de surface et la température de la lame ne sont plus un détail de confort, c’est un sujet de sécurité.'],
                  ['Les projections permanentes', 'éclaboussures, ruissellement des baigneurs qui sortent, débordement lors des jeux : la zone des deux premiers mètres reste humide presque en continu en pleine saison.'],
                  ['Les charges ponctuelles', 'bains de soleil qu’on traîne, chaises à pieds fins, échelle, plongeoir, robot posé au sol : la plage subit des charges concentrées, souvent toujours aux mêmes endroits.'],
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
                Un mot sur le chlore, puisque c&apos;est la question qui revient toujours. L&apos;eau qui atteint la
                plage est de l&apos;eau de bassin déjà très diluée, projetée en gouttes puis évaporée : elle ne
                « brûle » pas le bois. Le sel des piscines au sel, en revanche, est un vrai sujet —{' '}
                <strong className="text-primary font-semibold">mais pour les métaux, pas pour le bois</strong>. Il
                attaque la visserie, les équerres et la quincaillerie ordinaire. C&apos;est la fixation qu&apos;il faut
                monter en gamme, pas l&apos;essence qu&apos;il faut changer.
              </p>
            </section>

            {/* 2. Essences */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Quelles essences tiennent vraiment au bord d&apos;un bassin
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deux exigences se cumulent. D&apos;abord la{' '}
                <strong className="text-primary font-semibold">classe d&apos;emploi 4</strong> : une lame qui reçoit
                des projections en permanence n&apos;est plus dans la même situation qu&apos;une terrasse ordinaire, et
                doit être naturellement durable ou traitée pour cet usage — les classes d&apos;emploi et la durabilité
                des essences sont documentées par{' '}
                <a href="https://www.fcba.fr/" className={lienInterne} target="_blank" rel="noopener noreferrer">
                  l&apos;institut technologique FCBA
                </a>
                . Ensuite la{' '}
                <strong className="text-primary font-semibold">stabilité dimensionnelle</strong>, c&apos;est-à-dire la
                capacité de la lame à peu bouger entre l&apos;état humide et l&apos;état sec. C&apos;est elle qui
                décide du tuilage, des fentes et des échardes, donc du confort réel dans trois ans.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-surface-variant shadow-sm">
                <table className="w-full border-collapse text-body-md">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="px-4 py-3 font-label-md text-label-md">Matériau</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Principe</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Atouts au bord du bassin</th>
                      <th className="px-4 py-3 font-label-md text-label-md">Limites</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essences.map((ligne, i) => (
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
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-6">
                Notre position, sans détour : le{' '}
                <strong className="text-primary font-semibold">pin maritime traité classe 4</strong> est un choix
                honnête pour un budget contenu, à condition d&apos;accepter qu&apos;il bouge plus que les autres et de
                soigner la sélection des lames. Le{' '}
                <strong className="text-primary font-semibold">douglas et le mélèze</strong> offrent le meilleur
                compromis pour la plupart des projets girondins. Les{' '}
                <strong className="text-primary font-semibold">exotiques</strong> et les{' '}
                <strong className="text-primary font-semibold">bois modifiés</strong> restent, techniquement, ce qui
                tuile le moins — mais on les paie, et les teintes foncées chauffent.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-5">
                Nous posons aussi du <strong className="text-primary font-semibold">composite</strong>, et nous le
                disons honnêtement : autour d&apos;une piscine, c&apos;est un candidat sérieux, parce qu&apos;il ne
                fait pas d&apos;échardes et ne demande presque pas d&apos;entretien. Ses vrais défauts sont ailleurs :
                une lame composite foncée devient brûlante en août sous notre latitude, et un rayage ou une brûlure ne
                se rattrape pas au ponçage, contrairement au bois. Pour comparer les essences plus finement, avec leurs
                durabilités et leurs fourchettes de prix, notre guide{' '}
                <a href="/blog/quel-bois-pour-terrasse-exterieure" className={lienInterne}>
                  quel bois choisir pour une terrasse extérieure
                </a>{' '}
                complète ce tableau.
              </p>
            </section>

            <Figure
              src="/images/blog/plage-piscine-bois-essences-pose/plage-piscine-bois-lames-mouillees-pieds-nus.jpg"
              w={1200}
              h={800}
              alt="Pieds nus sur les lames de bois mouillées d'une plage de piscine, traces humides et lames sèches côte à côte"
              caption="La teinte foncée trahit l'humidité : trois heures plus tard, la même lame est sèche. C'est ce battement quotidien, et non le chlore, qui fait tuiler un platelage de bassin."
            />

            {/* 3. Antidérapance */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Antidérapance et confort pieds nus : lisse, rainuré ou brossé ?
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici la contre-idée la plus utile de cet article :{' '}
                <strong className="text-primary font-semibold">
                  la lame rainurée profondément n&apos;est pas la garantie d&apos;antidérapance qu&apos;on imagine.
                </strong>{' '}
                Une rainure large et creuse retient l&apos;eau au lieu de l&apos;évacuer, piège les cheveux, le sable
                remonté du bassin et les feuilles, se nettoie difficilement, et finit par verdir dans les zones qui
                sèchent mal. Sous un pied nu mouillé, elle est en plus franchement inconfortable. Nous la déconseillons
                autour d&apos;un bassin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Ce qui fonctionne réellement, c&apos;est une{' '}
                <strong className="text-primary font-semibold">lame lisse ou légèrement brossée</strong>, associée à
                une évacuation d&apos;eau irréprochable. Une surface brossée conserve un relief fin qui accroche le
                pied sans creuser de gorges ; une lame lisse bien réglée, avec un jeu régulier et une pente qui écarte
                l&apos;eau du bassin, ne garde pas de film d&apos;eau en surface. L&apos;adhérence vient de là : de
                l&apos;eau qui part vite et d&apos;une surface propre, pas de la profondeur des cannelures.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Deuxième sujet, très concret en Gironde :{' '}
                <strong className="text-primary font-semibold">l&apos;échauffement</strong>. Les teintes foncées et les
                exotiques denses emmagasinent la chaleur, et une plage plein sud en août peut devenir impraticable pieds
                nus aux heures chaudes. C&apos;est un argument sérieux en faveur des teintes claires — douglas, mélèze,
                pin, garapa — dans la bande la plus fréquentée, quitte à réserver un bois foncé aux abords ombragés ou
                aux zones de circulation secondaires.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Reste la question des échardes. Elle se règle à trois moments : au choix de la lame (une essence stable
                en fait moins), à la pose (bon sens de fil, chants adoucis, aucune vis affleurante mal noyée) et à
                l&apos;entretien (un ponçage léger la première ou la deuxième saison suffit généralement à régler le
                sujet pour de bon sur un résineux).
              </p>
            </section>

            <Figure
              src="/images/blog/plage-piscine-bois-essences-pose/lame-terrasse-bois-brossee-jeu-entre-lames.jpg"
              w={1100}
              h={825}
              alt="Gros plan de lames de terrasse en bois à surface brossée, jeu régulier entre lames et vis noyées"
              caption="Le relief fin du brossage accroche le pied nu sans creuser de gorge. Regardez le jeu entre lames : c'est là que le sable remonté du bassin se dépose, et il doit rester facile à balayer."
            />

            {/* 4. Raccord au bassin */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Le raccord au bassin : margelles, dilatation et trappes de visite
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                C&apos;est la partie qui distingue un poseur de terrasse d&apos;un artisan habitué aux piscines. Sur
                deux mètres de large, tout se joue dans les finitions.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La margelle et le jeu périphérique.</strong> Le bois
                travaille, le bassin ne bouge pas : on ne vient donc jamais serrer une lame contre une margelle. Il faut
                un jeu de dilatation continu sur tout le pourtour, calculé selon l&apos;essence et le taux
                d&apos;humidité des lames à la livraison. Sans lui, la plage pousse sur le bassin l&apos;été et se
                déchausse l&apos;hiver. Deux écoles cohabitent : la lame qui arrive au ras de la margelle en la laissant
                lire, ou la lame qui remplace la margelle et forme un chant net au-dessus du bassin — la seconde est
                plus belle et beaucoup plus exigeante en découpe.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les découpes et les pièces techniques.</strong> Skimmers,
                projecteurs, prise balai, buses de refoulement, coffre de volet immergé : autant de points où la lame
                doit être ajustée au millimètre, sans jamais bloquer l&apos;accès. La règle que nous nous imposons est
                simple :{' '}
                <strong className="text-primary font-semibold">
                  tout ce qui devra être ouvert un jour doit être démontable sans dévisser la moitié de la plage.
                </strong>{' '}
                Concrètement, cela veut dire des trappes de visite intégrées au calepinage au-dessus des pièces
                techniques et du local, avec un cadre indépendant, un jeu propre et des vis accessibles — pas une trappe
                bricolée après coup en sciant trois lames.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Les abouts et les rives.</strong> Le bout de lame est le
                point le plus vulnérable d&apos;un platelage : c&apos;est par là que l&apos;eau entre. En bord de
                bassin, on soigne le traitement des abouts, on adoucit les arêtes qui seront frottées par les pieds et
                les serviettes, et on finit les rives par une pièce démontable plutôt que par un habillage collé. Le
                calepinage, enfin, se dessine avant de couper : on décide où tombent les coupes, dans quel sens filent
                les lames et comment la plage tourne autour d&apos;un bassin rectangulaire ou d&apos;un angle arrondi.
              </p>
            </section>

            <Figure
              src="/images/blog/plage-piscine-bois-essences-pose/margelle-piscine-raccord-terrasse-skimmer.jpg"
              w={1200}
              h={802}
              alt="Raccord d'une plage de piscine à la margelle en pierre claire, skimmer intégré et lames arrêtées à jeu constant"
              caption="Angle de bassin : la margelle reçoit le skimmer et les projecteurs, les lames s'arrêtent à jeu constant devant elle. Ce sont ces quelques centimètres qui absorbent le travail du bois — et qui prennent le plus de temps à poser."
            />

            {/* 5. Sous-face */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                La sous-face : ce que l&apos;eau de la piscine change sous les lames
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Les fondamentaux d&apos;une structure de terrasse — plots réglables, lambourdes dimensionnées et bien
                appuyées, ventilation croisée, sol drainant — ne changent pas ici, et nous les détaillons dans notre
                article sur{' '}
                <a href="/blog/terrasse-bois-structure-plots-lambourdes" className={lienInterne}>
                  la structure d&apos;une terrasse en bois
                </a>
                . Inutile de les refaire : ils restent la base. Trois points, en revanche, sont spécifiques au contexte
                piscine.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">La pente s&apos;éloigne du bassin.</strong> Sur une
                terrasse classique, on écarte l&apos;eau de la façade. Ici, on l&apos;écarte aussi du bassin : la
                dernière chose que l&apos;on souhaite, c&apos;est que l&apos;eau de lavage de la plage, la poussière et
                les feuilles ruissellent vers le bord et finissent dans le filtre. Le dévers se donne à la structure,
                pas à l&apos;œil au moment de poser les lames, et l&apos;exutoire se prévoit avant, vers un point bas du
                jardin.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                <strong className="text-primary font-semibold">Les fixations passent en inox A4.</strong> C&apos;est
                non négociable sur une piscine au sel, et fortement conseillé partout ailleurs en bord de bassin. Une
                visserie ordinaire, même inox d&apos;entrée de gamme, se pique, coule et laisse des traînées noires
                irrattrapables sur une lame claire — sans parler de la tenue mécanique à long terme. Le surcoût se
                compte en dizaines d&apos;euros, la reprise en centaines.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                <strong className="text-primary font-semibold">Les lambourdes reçoivent bien plus d&apos;eau.</strong>{' '}
                Sur une plage, l&apos;eau traverse le platelage plusieurs fois par jour, pas quelques fois par mois. La
                protection du chant supérieur des lambourdes (bande bitumineuse ou équivalent) et le vide ventilé
                dessous ne sont plus un raffinement : ce sont eux qui empêchent la structure de rester saturée toute la
                saison. Même logique pour la garde au sol : sol drainant, géotextile, jamais de terre remontée au
                contact du bois.
              </p>
            </section>

            {/* 6. Sécurité et formalités */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Sécurité du bassin et formalités : ce qu&apos;il faut vérifier avant de dessiner la plage
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Commençons par le point non négociable. Toute piscine enterrée ou semi-enterrée non close, à usage
                privatif, doit être équipée d&apos;
                <strong className="text-primary font-semibold">
                  au moins un dispositif de sécurité normalisé — barrière, alarme, couverture ou abri
                </strong>{' '}
                — au titre de la{' '}
                <a
                  href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000776783"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  loi n° 2003-9 du 3 janvier 2003
                </a>
                , codifiée au Code de la construction et de l&apos;habitation.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                L&apos;erreur de conception que nous voyons le plus souvent n&apos;est pas l&apos;absence de dispositif,
                c&apos;est son{' '}
                <strong className="text-primary font-semibold">annulation involontaire par l&apos;aménagement</strong> :
                une plage surélevée qui arrive à mi-hauteur de la barrière, un banc en bois adossé à celle-ci, un coffre
                de rangement, un bac à plantes ou un empilement de bains de soleil qui offrent un marchepied à un jeune
                enfant. Une barrière franchissable ne protège plus personne. C&apos;est pourquoi nous dessinons
                l&apos;implantation du mobilier, les niveaux et le tracé de la plage en même temps que le dispositif de
                sécurité, jamais après.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté urbanisme, la logique est simple à retenir. Une{' '}
                <strong className="text-primary font-semibold">plage de plain-pied</strong>, qui ne crée ni emprise ni
                surélévation, est en principe dispensée de formalité — sauf en secteur protégé (abords d&apos;un
                monument historique, site patrimonial remarquable, site classé), où une{' '}
                <a
                  href="https://www.service-public.gouv.fr/particuliers/vosdroits/F17578"
                  className={lienInterne}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  déclaration préalable de travaux
                </a>{' '}
                redevient nécessaire. Dès que la plage est{' '}
                <strong className="text-primary font-semibold">surélevée ou couverte</strong>, ou associée à un abri,
                elle bascule dans le champ de la déclaration préalable, voire du permis de construire selon la surface
                créée et le PLU.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Nous ne donnons volontairement pas de seuils chiffrés ici : ils dépendent du règlement de votre commune,
                et autour de Libourne, entre les secteurs viticoles, les abords protégés de Saint-Émilion et les
                lotissements dotés de leur propre règlement, les réponses diffèrent d&apos;une parcelle à l&apos;autre.
                La bonne démarche reste la même :{' '}
                <strong className="text-primary font-semibold">on consulte le PLU et le service urbanisme de la
                mairie</strong>, et nous le faisons pour vous en amont du chantier. Si votre projet inclut un abri, un{' '}
                <a href="/blog/pool-house-bois-guide" className={lienInterne}>
                  pool house en bois
                </a>{' '}
                ou une couverture, la question se pose systématiquement.
              </p>
            </section>

            {/* 7. Budget et entretien */}
            <section>
              <h2 className="font-headline-md text-headline-md text-primary mb-5">
                Budget 2026 et entretien annuel d&apos;une plage de piscine en Gironde
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Voici nos ordres de grandeur, en fourchettes indicatives 2026, pose comprise, à confirmer par un devis
                établi sur place :
              </p>
              <ul className="space-y-3 mb-5">
                {[
                  ['Pin maritime traité classe 4', 'environ 95 à 140 €/m² posé — l’entrée de gamme sérieuse, en ressource locale.'],
                  ['Douglas ou mélèze', 'environ 120 à 170 €/m² posé — le compromis le plus fréquent sur nos chantiers girondins.'],
                  ['Essence exotique', 'environ 200 à 280 €/m² posé — pour une stabilité et une longévité maximales.'],
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
                À ces fourchettes, il faut ajouter la{' '}
                <strong className="text-primary font-semibold">majoration propre au contexte piscine, de
                l&apos;ordre de 10 à 20 %</strong>. Elle n&apos;a rien d&apos;arbitraire : elle paie les découpes autour
                du bassin et des pièces techniques, l&apos;ajustage sur margelles, la visserie inox A4 et les trappes de
                visite démontables. Une plage n&apos;a pratiquement que des rives et des points singuliers, là où une
                terrasse rectangulaire n&apos;a que des lames à dérouler : le temps passé n&apos;est pas le même au
                mètre carré.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-5">
                Côté entretien, le rythme girondin est simple. Un{' '}
                <strong className="text-primary font-semibold">nettoyage doux au printemps</strong> (brosse souple dans
                le sens des fibres, eau claire, jamais de nettoyeur haute pression qui décape les fibres tendres et
                ouvre le bois), un{' '}
                <strong className="text-primary font-semibold">saturateur tous les deux à trois ans</strong> si vous
                tenez à la teinte d&apos;origine — sachant qu&apos;en plein sud, le grisaillement va plus vite
                qu&apos;ailleurs et qu&apos;il n&apos;altère en rien la solidité —, un{' '}
                <strong className="text-primary font-semibold">passage de vis en début de saison</strong> pour resserrer
                ce qui a bougé, et un{' '}
                <strong className="text-primary font-semibold">dégagement des feuilles à l&apos;automne</strong>, en
                particulier dans le jeu entre lames et sous la plage. Le tout tient en deux demi-journées par an.
              </p>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Vous pouvez voir comment cela se traduit sur le terrain dans{' '}
                <a href="/realisations" className={lienInterne}>
                  nos réalisations en Gironde
                </a>
                , et découvrir notre approche des terrasses et plages de bassin sur mesure sur notre page{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>{' '}
                — de l&apos;étude des niveaux au dernier ajustage sur margelle.
              </p>
            </section>

            <Figure
              src="/images/pool-house-bois-terrasse-piscine-libourne.webp"
              w={1200}
              h={800}
              alt="Plage de piscine en bois terminée devant un pool house en bois, assises au bord du bassin, réalisation en Gironde"
              caption="Plage et pool house dessinés ensemble : les lames filent parallèlement au bassin, le seuil du pool house est rattrapé par une marche pleine largeur et l'eau part côté jardin."
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
              Plage de piscine en bois : vos questions
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
              Une plage de bassin se dessine avant de se poser
            </h2>
            <p className="text-on-primary-container font-body-lg text-body-lg mb-10">
              Choisir « le bois qui résiste au chlore » ne règle rien. Ce qui fait une plage de piscine agréable dans
              dix ans, c&apos;est une essence stable, une surface confortable pieds nus, une eau qui s&apos;éloigne du
              bassin et une sous-face qui respire — plus des détails que personne ne remarque : jeu de dilatation,
              visserie inox A4, trappes démontables. Chez L&apos;Esprit Bois, entreprise certifiée Qualibat à Libourne
              et dans toute la Gironde, nous relevons les niveaux, le dispositif de sécurité du bassin et les
              contraintes d&apos;urbanisme avant de parler de lames.
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
