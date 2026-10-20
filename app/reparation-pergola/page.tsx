import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';
import { CONTACT, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';

/** Page créée le 20/10/2026 sur les données Search Console (90 j).
 *
 *  « reparation pergola bioclimatique gironde » (62 impressions, 16e) et
 *  « reparation pergola gironde » (22, 16e) atterrissaient sur l'article
 *  garanties-sav-pergola-veranda-aluminium, sans aucun clic : une demande
 *  commerciale, celle de quelqu'un qui a une pergola en panne, sans page pour
 *  y répondre. L'entreprise répare, y compris les pergolas posées par d'autres
 *  (confirmé par l'utilisateur le 20/10/2026, et déjà écrit dans nos guides).
 *
 *  Tout le contenu vient de ces deux guides :
 *  garanties-sav-pergola-veranda-aluminium et
 *  entretien-aluminium-pergola-veranda-revision-automne. Ne rien promettre ici
 *  qui n'y figure pas : ni délai d'intervention, ni tarif de déplacement. */
const COVER = '/images/realisations/pergola-aluminium-store-zip-libourne-2.webp';

/* Étiquettes d'attribution : sans elles, un lead de cette page arriverait
   indistinct de ceux de la landing publicitaire. */
const PROJET = 'Réparation de pergola';
const PAGE_LABEL = '/reparation-pergola';

export const metadata: Metadata = buildMetadata({
  title: 'Réparation de pergola bioclimatique en Gironde',
  description:
    "Moteur, lames bloquées, store zip, fuites : nous réparons les pergolas aluminium, même posées par une autre entreprise, à Libourne et en Gironde.",
  keywords:
    'réparation pergola bioclimatique Gironde, réparation pergola Gironde, dépannage pergola bioclimatique, SAV pergola aluminium, moteur pergola en panne, réparation store zip, réparation pergola Libourne',
  path: '/reparation-pergola',
  ogImage: COVER,
  ogTitle: 'Réparation et dépannage de pergola bioclimatique en Gironde',
  ville: 'Libourne',
});

/* Les organes qui tombent en panne : liste reprise de notre guide sur les
   garanties, observée sur nos interventions en Gironde. Pas un élément de
   structure, c'est tout le propos. */
const PANNES = [
  {
    icone: 'bolt',
    titre: 'Le moteur et sa carte électronique',
    texte:
      "Motoréducteur d'orientation des lames, moteur de store, platine de commande : des pièces mécaniques et électroniques qui vieillissent, comme sur un volet roulant ou un portail.",
  },
  {
    icone: 'tune',
    titre: 'Les capteurs et la commande radio',
    texte:
      "Capteur de vent ou de pluie, télécommande et récepteur : batteries, appairage perdu, boîtier qui prend l'eau, module qui ne répond plus après un orage.",
  },
  {
    icone: 'precision_manufacturing',
    titre: "Les vérins et l'articulation des lames",
    texte:
      "La cinématique d'orientation est le point le plus sollicité de l'ouvrage : elle travaille à chaque manœuvre, toute l'année. Des lames qui se bloquent, c'est souvent elle.",
  },
  {
    icone: 'blinds',
    titre: 'Le store zip et sa toile',
    texte:
      "Coulisses, zip, ressort de rappel, toile détendue ou déchirée : c'est l'équipement le plus exposé, et le plus souvent remplacé.",
  },
  {
    icone: 'water_drop',
    titre: 'Les joints et les évacuations',
    texte:
      "Joints entre lames qui durcissent, gouttière intégrée ou descente dans un poteau qui s'encrasse : une pergola qui fuit, c'est rarement une panne, souvent un défaut d'entretien.",
  },
];

/* Ce qu'un client peut faire seul avant d'appeler, et ce qu'il ne doit pas
   faire : repris du guide d'entretien. */
const AVANT = [
  "Remplacer la pile de la télécommande : c'est la cause la plus fréquente, et la plus vexante, des « pannes » de motorisation.",
  "Si la motorisation fait un bruit inhabituel, chauffe, ne va plus en butée ou fait disjoncter : couper l'alimentation avant tout.",
  "Ne pas ouvrir le coffret, ne pas déposer le moteur, ne toucher ni au câblage ni à la carte électronique : c'est le travail de l'installateur ou d'un électricien qualifié.",
];

const A_ENVOYER = [
  "Une photo d'ensemble de la pergola, et une de l'endroit qui pose problème.",
  "Une photo de l'étiquette du moteur et du coffret de commande : marque et référence.",
  'La marque et la gamme de la pergola si vous les connaissez, et le dossier remis à la réception (notices, références, teinte RAL).',
];

const FAQ = [
  {
    q: 'Réparez-vous une pergola posée par une autre entreprise ?',
    r: "Oui, à condition d'identifier la gamme et de pouvoir approvisionner la pièce. Nous intervenons régulièrement à Libourne et en Gironde sur des pergolas que nous n'avons pas posées : le premier travail consiste à retrouver le fabricant et les références. Beaucoup des dépannages difficiles que nous voyons concernent des ouvrages vendus à distance et posés par une équipe de passage.",
  },
  {
    q: 'Et si la pièce n’existe plus ?',
    r: "Les mécanismes d'une pergola bioclimatique ne sont pas interchangeables d'un fabricant à l'autre : lames, vérins, moteurs et cartes électroniques sont propres à chaque gamme. Quand la gamme n'est plus suivie et qu'aucune pièce compatible n'existe, nous le disons franchement et nous étudions le remplacement du mécanisme complet, plutôt que de multiplier les visites sur une pièce introuvable.",
  },
  {
    q: 'La garantie décennale couvre-t-elle le moteur de ma pergola ?',
    r: "En principe non. Un moteur, un capteur ou un vérin de lames se démontent sans détériorer l'ouvrage : ils relèvent de la garantie de bon fonctionnement, dite biennale, qui court deux ans à compter de la réception. Passé ce délai, la panne de motorisation est à votre charge, sauf garantie commerciale du fabricant. Notre guide sur les garanties détaille qui couvre quoi.",
  },
  {
    q: 'Mon moteur ne répond plus : que faire avant d’appeler ?',
    r: "Changez d'abord la pile de la télécommande. Si la motorisation fait un bruit inhabituel, chauffe ou fait disjoncter, coupez l'alimentation. N'ouvrez ni le coffret ni le moteur. Puis envoyez-nous une photo de l'étiquette du moteur et du coffret : c'est ce qui nous permet d'identifier la pièce.",
  },
  {
    q: 'Réparez-vous aussi les carports en aluminium ?',
    r: "Oui. Nous intervenons sur des pergolas et des carports en aluminium que nous n'avons pas posés, à Libourne et dans le reste de la Gironde, aux mêmes conditions : identifier la gamme, puis approvisionner la pièce.",
  },
];

const jsonld = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE.url}/` },
      { '@type': 'ListItem', position: 2, name: 'Pergolas', item: `${SITE.url}/pergolas` },
      { '@type': 'ListItem', position: 3, name: 'Réparation de pergola', item: `${SITE.url}/reparation-pergola` },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Réparation et dépannage de pergola bioclimatique',
    serviceType: 'Réparation de pergola aluminium',
    url: `${SITE.url}/reparation-pergola`,
    provider: ENTREPRISE_REF,
    areaServed: [
      { '@type': 'City', name: 'Libourne' },
      { '@type': 'AdministrativeArea', name: 'Gironde' },
    ],
    description:
      "Réparation et dépannage de pergolas bioclimatiques et de carports en aluminium, y compris ceux posés par une autre entreprise : motorisation, capteurs, vérins de lames, store zip, joints et évacuations.",
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.r },
    })),
  },
];

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

export default function ReparationPergolaPage() {
  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="pergolas" ancreDevis="#devis-bas" />
      <main id="contenu">
        <header data-devis-hero className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              width="1100"
              height="825"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={COVER}
              alt="Pergola aluminium anthracite avec store zip descendu sur une terrasse bois, réalisée par L'Esprit Bois à Saint-Pey-de-Castets"
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <a href="/pergolas" className="hover:text-secondary-fixed transition-colors">
                Pergolas
              </a>
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">Réparation</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Dépannage &amp; SAV
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              Réparation de pergola bioclimatique en Gironde
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mb-8">
              Moteur qui ne répond plus, lames bloquées, store zip déchiré, pergola qui fuit : nous réparons
              les pergolas que nous avons posées comme celles posées par d&apos;autres, à Libourne et dans toute
              la Gironde.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#devis-bas"
                className="bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95 shimmer-effect text-center"
              >
                Décrire ma panne
              </a>
              <a
                href={CONTACT.telHref}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/20 transition-all text-center"
              >
                {CONTACT.telAffiche}
              </a>
            </div>
          </div>
        </header>

        <section className="py-20 md:py-28 bg-surface" id="pannes">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl mb-12">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Ce qui tombe en panne sur une pergola
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Sur nos interventions en Gironde, les demandes de dépannage portent presque toujours sur les
                mêmes organes. Aucun n&apos;est un élément de structure : la vie d&apos;une pergola
                bioclimatique se joue sur ses parties mobiles.
              </p>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PANNES.map((p) => (
                <li key={p.titre} className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant">
                  <span className="material-symbols-outlined text-secondary-dark text-4xl mb-4" aria-hidden="true">
                    {p.icone}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{p.titre}</h3>
                  <p className="text-on-surface-variant text-body-md">{p.texte}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container" id="autre-entreprise">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Votre pergola a été posée par une autre entreprise ?
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  Nous intervenons régulièrement sur des pergolas que nous n&apos;avons pas posées. Beaucoup
                  des dépannages difficiles que nous voyons concernent des ouvrages vendus à distance et posés
                  par une équipe de passage, dont plus personne ne sait quoi faire.
                </p>
                <p>
                  Le premier travail consiste à retrouver le fabricant, la gamme et les références. Les
                  mécanismes d&apos;une pergola bioclimatique ne sont pas interchangeables d&apos;un fabricant
                  à l&apos;autre : lames, vérins, moteurs et cartes électroniques sont propres à chaque gamme.
                  Ce qui fait la difficulté d&apos;un dépannage, c&apos;est l&apos;identification de la pièce,
                  puis son approvisionnement.
                </p>
                <p>
                  Quand la gamme n&apos;est plus suivie et qu&apos;aucune pièce compatible n&apos;existe, nous
                  le disons franchement. Mieux vaut étudier le remplacement du mécanisme complet que multiplier
                  les visites sur une pièce introuvable. Les mêmes conditions valent pour les{' '}
                  <a href="/carports" className={lienInterne}>
                    carports
                  </a>{' '}
                  en aluminium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface" id="avant-appeler">
          <div className="max-w-container-max mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Avant de nous appeler
              </h2>
              <ul className="space-y-4">
                {AVANT.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Ce qu&apos;il faut nous envoyer
              </h2>
              <ul className="space-y-4">
                {A_ENVOYER.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-body-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-secondary-dark text-[22px] mt-0.5" aria-hidden="true">
                      check_circle
                    </span>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body-md text-body-md text-on-surface-variant mt-8">
                Ce sont ces éléments qui nous permettent d&apos;identifier la gamme et la pièce avant de nous
                déplacer.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface-container" id="garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                Qui paie la réparation ?
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                <p>
                  La garantie décennale protège la structure. Le moteur, les capteurs et les vérins de lames
                  se démontent sans détériorer l&apos;ouvrage : ils relèvent de la garantie de bon
                  fonctionnement, dite biennale, qui court deux ans à compter de la réception. À partir de la
                  troisième année, une panne de motorisation est à votre charge, sauf garantie commerciale du
                  fabricant.
                </p>
                <p>
                  Tout le détail, et ce qu&apos;il faut faire écrire sur un devis pour être tranquille dans
                  huit ans, est dans notre guide{' '}
                  <a href="/blog/garanties-sav-pergola-veranda-aluminium" className={lienInterne}>
                    garanties, pièces détachées et SAV d&apos;une pergola
                  </a>
                  . Et pour éviter une partie des pannes, notre guide{' '}
                  <a href="/blog/entretien-aluminium-pergola-veranda-revision-automne" className={lienInterne}>
                    d&apos;entretien avant l&apos;automne
                  </a>{' '}
                  liste les vérifications qui suffisent.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {FAQ.map((f) => (
                <details key={f.q} className="group border border-outline-variant rounded-xl p-6 bg-surface-container">
                  <summary className="flex items-center justify-between gap-4 cursor-pointer font-title-md text-title-md text-on-surface">
                    {f.q}
                    <span
                      className="material-symbols-outlined text-secondary-dark shrink-0 group-open:rotate-180 transition-transform"
                      aria-hidden="true"
                    >
                      expand_more
                    </span>
                  </summary>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-4">{f.r}</p>
                </details>
              ))}
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mt-12 max-w-3xl">
              Nous posons aussi des{' '}
              <a href="/pergolas" className={lienInterne}>
                pergolas bioclimatiques, aluminium et bois
              </a>{' '}
              sur mesure, et nous laissons à la fin de chaque chantier un dossier complet : références, teinte
              RAL, moteur et commande, notices. C&apos;est ce dossier qui rend une pergola réparable dans huit
              ans.
            </p>
          </div>
        </section>

        <section id="devis-bas" className="py-20 md:py-28 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-4 text-center">Décrivez-nous la panne</h2>
              <p className="font-body-md text-body-md text-on-primary/80 mb-8 text-center">
                Dites-nous ce qui ne fonctionne plus et, si vous les connaissez, la marque et la gamme de la
                pergola. Nous intervenons à Libourne et dans toute la Gironde. Vous pouvez aussi appeler le{' '}
                <a href={CONTACT.telHref} className="underline underline-offset-4">
                  {CONTACT.telAffiche}
                </a>
                .
              </p>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <DevisForm instanceId="bas" projet={PROJET} pageLabel={PAGE_LABEL} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={PAGE_LABEL} />
    </>
  );
}
