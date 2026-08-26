import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import Etoiles from '@/components/Etoiles';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';
import { CHANTIERS } from '@/lib/data/chantiers';
import { avisPour, NOTE_GOOGLE } from '@/lib/data/avis';
import { CONTACT, ENTREPRISE_ID, ENTREPRISE_REF, GOOGLE, SITE } from '@/lib/data/navigation';
import type { Zone } from '@/lib/data/zones';

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

const boutonPlein =
  'inline-flex items-center justify-center bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95';

const boutonTelephone =
  'inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95';

const boutonPleinSombre =
  'inline-flex items-center justify-center bg-primary text-on-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary hover:text-primary transition-all active:scale-95';

const boutonTelephoneClair =
  'inline-flex items-center justify-center gap-2 border border-outline-variant text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-surface-container transition-all active:scale-95';

/** Ce qui rassure avant qu'on ait lu la page. Posé juste sous le héros : un
 *  visiteur qui ne connaît pas l'entreprise cherche d'abord à savoir s'il peut
 *  lui confier un chantier, pas à apprendre la réglementation. */
const GARANTIES = [
  {
    icone: 'verified',
    titre: 'Entreprise qualifiée Qualibat',
    texte: 'La qualification reconnue du bâtiment',
  },
  { icone: 'shield', titre: 'Garantie décennale', texte: 'Vos ouvrages couverts pendant dix ans' },
  {
    icone: 'handshake',
    titre: 'Un seul interlocuteur',
    texte: "De l'étude à la pose, sans sous-traitance",
  },
  { icone: 'schedule', titre: 'Devis sous 48 heures', texte: 'Relevé sur place gratuit' },
];

/** Le déroulé, identique sur toutes les zones : c'est la promesse de méthode
 *  qui lève l'objection de la distance et celle de l'engagement. */
const ETAPES = [
  {
    icone: 'call',
    titre: 'Le premier échange',
    texte:
      "Dix minutes au téléphone pour cadrer le besoin, le budget et le calendrier. Si le projet n'est pas pour nous, nous le disons tout de suite.",
  },
  {
    icone: 'straighten',
    titre: 'Le relevé sur place',
    texte:
      'Gratuit, déplacement compris. Dimensions réelles, nature du sol, accès au chantier, règles qui pèsent sur votre parcelle. Rien ne se décide au téléphone.',
  },
  {
    icone: 'design_services',
    titre: 'La conception',
    texte:
      "Nous dessinons, et vous voyez votre projet avant qu'il existe. Les arbitrages de surface, de coût et de matière se font là, pas sur le chantier.",
  },
  {
    icone: 'description',
    titre: 'Le devis, sous 48 heures',
    texte:
      'Poste par poste, sans ligne fourre-tout. Vous voyez ce que vous payez et ce que vous ne payez pas. Sans engagement.',
  },
  {
    icone: 'approval',
    titre: "Le dossier d'urbanisme",
    texte:
      "Déclaration préalable ou permis de construire, nous montons le dossier et nous le suivons jusqu'à l'obtention, avis de l'Architecte des Bâtiments de France compris.",
  },
  {
    icone: 'precision_manufacturing',
    titre: "La fabrication à l'atelier",
    texte:
      "L'ossature est taillée et assemblée à blanc chez nous, aux Billaux. C'est ce qui réduit le nombre de journées de chantier chez vous.",
  },
  {
    icone: 'construction',
    titre: 'Le montage et les finitions',
    texte:
      'La même équipe lève, couvre, bardage et finitions. Hors d\'eau hors d\'air ou clé en main, vous choisissez où nous nous arrêtons.',
  },
  {
    icone: 'shield',
    titre: 'La livraison, et après',
    texte:
      'Réception avec vous, puis garantie décennale sur dix ans. Un seul interlocuteur du premier croquis à la dernière lame, et après.',
  },
];

/** Ce que nous apportons de plus. La question que se pose un visiteur qui
 *  a trois devis sur la table n'est pas « est-ce faisable » mais « pourquoi
 *  eux ». Ces quatre points sont la réponse, et aucun n'est une promesse
 *  invérifiable : ils décrivent notre organisation. */
const APPORTS = [
  {
    icone: 'design_services',
    titre: 'Nous concevons, nous fabriquons, nous posons',
    texte:
      "Nous ne sommes pas des revendeurs. Le dessin, la taille de l'ossature et la pose sont faits par la même maison, donc personne ne peut renvoyer la responsabilité sur le maillon d'à côté.",
  },
  {
    icone: 'person',
    titre: 'Un seul interlocuteur, du croquis à la réception',
    texte:
      'Vous savez toujours qui appeler, et cette personne connaît votre dossier. Aucune étape n\'est sous-traitée, il n\'y a donc pas de coordination à faire de votre côté.',
  },
  {
    icone: 'approval',
    titre: "Le dossier d'urbanisme, nous nous en chargeons",
    texte:
      "Déclaration préalable, permis de construire, avis de l'Architecte des Bâtiments de France : nous montons le dossier et nous le suivons. C'est ce dont nos clients nous remercient le plus souvent.",
  },
  {
    icone: 'description',
    titre: 'Un devis lisible, poste par poste',
    texte:
      "Vous voyez ce que vous payez et ce que vous ne payez pas, sans ligne fourre-tout. C'est ce qui permet de comparer nos devis à ceux que vous recevrez ailleurs, ligne par ligne.",
  },
];

/**
 * Un picto sur sa pastille. Les glyphes posés à nu se perdaient sur le fond
 * clair des cartes ; la pastille leur donne une assise et rend les tuiles
 * plus vivantes, sans ajouter de couleur au reste de la charte.
 */
function Picto({ nom, taille = 'grand' }: { nom: string; taille?: 'grand' | 'petit' }) {
  const boite = taille === 'grand' ? 'w-14 h-14 rounded-2xl' : 'w-11 h-11 rounded-xl';
  const glyphe = taille === 'grand' ? 'text-[30px]' : 'text-[24px]';
  return (
    <span
      className={`inline-flex items-center justify-center shrink-0 bg-secondary/15 text-secondary-dark ${boite}`}
      aria-hidden="true"
    >
      <span className={`material-symbols-outlined leading-none ${glyphe}`}>{nom}</span>
    </span>
  );
}

/** Le picto d'un guide se déduit de son sujet. La police embarquée ne
 *  contient que 63 glyphes, d'où cette table courte plutôt qu'un choix
 *  libre : une icône hors liste s'afficherait en toutes lettres. */
const PICTOS_GUIDES: [RegExp, string][] = [
  [/prix|budget|devis|comparer/, 'description'],
  [/bardage|facade/, 'house_siding'],
  [/terrasse|plage|lame/, 'deck'],
  [/pergola|store|brise-soleil|solaire/, 'blinds'],
  [/veranda|baie|menuiserie/, 'door_sliding'],
  [/urbanisme|autorisation|permis|declaration/, 'approval'],
  [/toiture|couverture|charpente/, 'roofing'],
  [/carport|abri/, 'home_work'],
  [/bois|essence|douglas|entretien/, 'layers'],
];

function pictoGuide(slug: string) {
  return PICTOS_GUIDES.find(([motif]) => motif.test(slug))?.[1] ?? 'lightbulb';
}

/** Gabarit commun aux pages de zone.
 *
 *  Le gabarit est partagé, le contenu ne l'est pas : chaque zone apporte ses
 *  propres chantiers, son propre contexte technique et sa propre FAQ. C'est la
 *  condition pour que ces pages ne soient pas des doorway pages, un même texte
 *  décliné par commune serait détecté comme tel, et à juste titre. */
export default function PageZone({ zone }: { zone: Zone }) {
  const chantiers = zone.chantiers
    .map((id) => CHANTIERS.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const url = `${SITE.url}/${zone.slug}`;
  const pageLabel = `/${zone.slug}`;

  /* Fil d'Ariane : les pages d'offre d'un secteur passent par leur page mère et
     s'y annoncent par leur ouvrage, « Bassin d'Arcachon / Terrasses bois »,
     les zones sans mère restent directement sous l'accueil sous leur nom. */
  const dernierNiveau = zone.ouvrage ?? zone.nom;

  /* Les trois avis les plus proches du sujet de la page. Sans `avisSujets`,
     ce sont simplement les trois plus étoffés. */
  const avis = avisPour(zone.avisSujets ?? []);
  const filAriane = [
    { nom: 'Accueil', item: `${SITE.url}/` },
    ...(zone.parent ? [{ nom: zone.parent.nom, item: `${SITE.url}/${zone.parent.slug}` }] : []),
    { nom: dernierNiveau, item: url },
  ];

  const jsonld = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: filAriane.map((e, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: e.nom,
        item: e.item,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: zone.h1,
      url,
      provider: ENTREPRISE_REF,
      areaServed: zone.communes.map((c) => ({ '@type': 'City', name: c })),
      description: zone.description,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: zone.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.r },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      // Le nom de la liste énumère les communes réellement livrées, jamais la
      // zone de la page : sur le Bassin d'Arcachon nous n'avons pas encore de
      // chantier, et les exemples montrés sont à l'intérieur des terres. Nommer
      // la liste d'après la zone y affirmerait le contraire dans les données
      // structurées, alors que le texte visible dit l'inverse.
      name: `Chantiers réalisés : ${[...new Set(chantiers.map((c) => c.commune))].join(', ')}`,
      numberOfItems: chantiers.length,
      itemListElement: chantiers.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: `${c.categorie}, ${c.commune} : ${c.titre}`,
          about: { '@type': 'Place', name: c.commune },
          provider: { '@id': ENTREPRISE_ID },
        },
      })),
    },
  ];

  /* * Contexte technique du secteur * */
  /* Pourquoi nous plutôt qu'un autre. Placée juste après les garanties,
     avant toute considération technique : c'est la question que se pose un
     visiteur qui a plusieurs devis en main. */
  const sectionApports = (
    <section className="py-20 md:py-28 bg-surface" aria-labelledby="titre-apports">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center mb-12">
          <div className="max-w-2xl">
            <h2
              id="titre-apports"
              className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4"
            >
              Pourquoi confier votre projet à L&apos;Esprit Bois
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Vingt ans de bois, une seule équipe, et rien de sous-traité. Voici ce que ça change
              concrètement pour vous.
            </p>
          </div>
          {zone.visuelApports && (
            <img
              width={zone.visuelApports.w}
              height={zone.visuelApports.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-xl"
              src={zone.visuelApports.src}
              alt={zone.visuelApports.alt}
            />
          )}
        </div>
        <ul className="grid sm:grid-cols-2 gap-6">
          {APPORTS.map((a) => (
            <li
              key={a.titre}
              className="bg-white rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500"
            >
              <Picto nom={a.icone} />
              <h3 className="font-title-md text-title-md text-on-surface mt-4 mb-3">{a.titre}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{a.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );

  /* Ce que comprend l'ouvrage. Placée juste après « pourquoi nous » : le
     visiteur vient d'apprendre à qui il a affaire, il veut maintenant savoir
     ce qu'il achète et où s'arrête la prestation. */
  const sectionComposition = zone.composition ? (
    <section className="py-20 md:py-28 bg-surface-container" aria-labelledby="titre-composition">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="max-w-3xl mb-12">
          <h2
            id="titre-composition"
            className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4"
          >
            {zone.composition.titre}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            {zone.composition.chapo}
          </p>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zone.composition.elements.map((e) => (
            <li
              key={e.titre}
              className="bg-surface rounded-2xl p-8 border border-surface-variant"
            >
              <Picto nom={e.icone} />
              <h3 className="font-title-md text-title-md text-on-surface mt-4 mb-3">{e.titre}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{e.texte}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  ) : null;

  const sectionContexte = (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        {/* Les blocs tiennent une mesure un peu plus large que la prose :
            le texte y est déjà retrait par la gouttière de l'icône, et une
            colonne de prose sur une page pleine largeur laisse un vide à
            droite qui donne l'impression d'une page inachevée. */}
        <div
          className={
            zone.contexteTuiles ? '' : zone.contexteBlocs ? 'max-w-4xl' : 'max-w-3xl'
          }
        >
          <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8 max-w-3xl">
            {zone.contexte.titre}
          </h2>
          {/* Une page mère s'oriente, elle ne se lit pas : ses contraintes
              passent en tuiles, la prose reste aux pages d'offre. */}
          {zone.contexteTuiles ? (
            <>
              <ul className="grid sm:grid-cols-2 gap-6">
                {zone.contexteTuiles.map((t) => (
                  <li
                    key={t.titre}
                    className="bg-white rounded-2xl p-8 border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500"
                  >
                    <Picto nom={t.icone} />
                    <h3 className="font-title-md text-title-md text-on-surface mt-4 mb-3">
                      {t.titre}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {t.texte}
                    </p>
                  </li>
                ))}
              </ul>
              {zone.contexteChute && (
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-12 max-w-3xl">
                  {zone.contexteChute}
                </p>
              )}
            </>
          ) : zone.contexteBlocs ? (
            <>
            {/* Même texte que la prose, mais découpé et titré, et surtout
                suivi à chaque fois de ce que nous en faisons. Sans cette
                dernière ligne la page énonce des difficultés sans dire
                qu'elle sait les traiter, ce qui inquiète au lieu de
                rassurer. */}
            <ul className="space-y-6">
              {zone.contexteBlocs.map((b, i) => (
                <li
                  key={b.titre}
                  className="bg-white rounded-2xl border border-surface-variant shadow-sm hover:shadow-xl transition-shadow duration-500 overflow-hidden"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex items-start gap-5">
                      <Picto nom={b.icone} />
                      <div>
                        <h3 className="font-title-md text-title-md text-on-surface mb-3">
                          {b.titre}
                        </h3>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                          {zone.contexte.paragraphes[i]}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="bg-surface-container border-t border-surface-variant px-8 md:px-10 py-5 font-body-md text-body-md text-on-surface flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-secondary-dark text-[22px] leading-none shrink-0"
                      aria-hidden="true"
                    >
                      check_circle
                    </span>
                    <span>
                      <strong className="font-semibold">Ce que nous faisons : </strong>
                      {b.reponse}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
            {zone.contexte.paragraphes.length > zone.contexteBlocs.length && (
              /* Les pages du Bassin terminent leur contexte par une phrase
                 de synthèse : ce n'est pas une contrainte, elle n'a donc pas
                 de bloc, mais elle ne doit pas disparaître pour autant. */
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6 mt-10 max-w-3xl">
                {zone.contexte.paragraphes.slice(zone.contexteBlocs.length).map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
            )}
            </>
          ) : (
            <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
              {zone.contexte.paragraphes.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
    
        {/* Schéma technique, à la suite immédiate du texte qu'il illustre.
            Volontairement pleine largeur : c'est une figure à lire, pas une
            vignette d'accompagnement. */}
        {zone.schema && (
          <figure className="mt-16">
            <img
              width={zone.schema.w}
              height={zone.schema.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl border border-outline-variant bg-surface"
              src={zone.schema.src}
              alt={zone.schema.alt}
            />
            <figcaption className="font-body-md text-body-md text-on-surface-variant mt-4 max-w-3xl">
              {zone.schema.legende}
            </figcaption>
          </figure>
        )}
      </div>
    </section>
  );

  /* * Relance après les contraintes techniques : c'est l'endroit de la page
     où le visiteur vient de comprendre qu'il y a des pièges, et le moment
     où il est le plus disposé à les faire traiter par quelqu'un d'autre. * */
  const sectionRelance = (
    <section className="py-14 md:py-16 bg-primary text-on-primary">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          <div className="max-w-2xl">
            <h2 className="font-headline-sm text-headline-sm mb-3">
              Vous vous reconnaissez dans un de ces points ?
            </h2>
            <p className="font-body-md text-body-md text-on-primary/80">
              C&apos;est le relevé qui tranche, pas le téléphone : dimensionnement, autorisations,
              accès au chantier. Il est gratuit et sans engagement.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 lg:ml-auto shrink-0">
            <a href="#devis-bas" className={boutonPlein}>
              Décrire mon projet
            </a>
            <a href={CONTACT.telHref} className={boutonTelephone}>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                call
              </span>
              {CONTACT.telAffiche}
            </a>
          </div>
        </div>
      </div>
    </section>
  );

  /* * Le déroulé. Placé après les preuves : le visiteur est convaincu du
     savoir-faire, il veut maintenant savoir à quoi il s'engage. * */
  const sectionDeroule = (
    <section className="py-20 md:py-28 bg-surface-container" aria-labelledby="titre-deroule">
      <div className="max-w-container-max mx-auto px-6 md:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center mb-12">
          <div className="max-w-2xl">
            <h2
              id="titre-deroule"
              className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4"
            >
              Comment ça se passe, du premier appel à la remise des clés
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Huit étapes, aucune sous-traitance, et rien à payer avant le devis.
            </p>
          </div>
          {zone.visuelDeroule && (
            <img
              width={zone.visuelDeroule.w}
              height={zone.visuelDeroule.h}
              loading="lazy"
              decoding="async"
              className="w-full h-auto rounded-2xl shadow-xl"
              src={zone.visuelDeroule.src}
              alt={zone.visuelDeroule.alt}
            />
          )}
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ETAPES.map((e, i) => (
            <li
              key={e.titre}
              className="relative bg-surface rounded-2xl p-8 border border-surface-variant"
            >
              <span
                className="absolute top-6 right-7 font-display-md text-[40px] leading-none text-primary/10"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <Picto nom={e.icone} />
              <h3 className="font-title-md text-title-md text-on-surface mt-4 mb-3">
                {e.titre}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{e.texte}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="#devis-bas" className={boutonPleinSombre}>
            Lancer mon étude gratuite
          </a>
          <a href={CONTACT.telHref} className={boutonTelephoneClair}>
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              call
            </span>
            {CONTACT.telAffiche}
          </a>
        </div>
      </div>
    </section>
  );

  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="realisations" ancreDevis="#devis-bas" />
      <main id="contenu">
        <header
          data-devis-hero
          className="relative pt-40 pb-20 md:pt-48 md:pb-24 overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img
              width={zone.coverW}
              height={zone.coverH}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
              src={zone.cover}
              alt={zone.coverAlt}
            />
            <div className="absolute inset-0 hero-interne"></div>
          </div>
          <div className="relative z-10 max-w-container-max mx-auto px-6 md:px-16">
            <p className="font-label-md text-label-md text-white/60 mb-6">
              <a href="/" className="hover:text-secondary-fixed transition-colors">
                Accueil
              </a>
              {zone.parent && (
                <>
                  <span className="mx-2 text-secondary" aria-hidden="true">
                    /
                  </span>
                  <a
                    href={`/${zone.parent.slug}`}
                    className="hover:text-secondary-fixed transition-colors"
                  >
                    {zone.parent.nom}
                  </a>
                </>
              )}
              <span className="mx-2 text-secondary" aria-hidden="true">
                /
              </span>
              <span className="text-secondary-fixed">{dernierNiveau}</span>
            </p>
            <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
              Zone d&apos;intervention
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mt-4 mb-6 max-w-4xl">
              {zone.h1}
            </h1>
            <p className="font-body-lg text-body-lg text-white/85 max-w-2xl">{zone.chapo}</p>
            {/* La promesse en une ligne, détachée du chapô. Un visiteur qui ne
                lit que trois mots doit repartir avec celui-là. */}
            {zone.bulle && (
              <p className="mt-7 inline-flex items-center gap-3 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm pl-4 pr-6 py-3 text-white">
                <span
                  className="material-symbols-outlined text-secondary-fixed text-[24px] leading-none"
                  aria-hidden="true"
                >
                  design_services
                </span>
                <span className="font-label-md text-label-md normal-case tracking-normal">
                  {zone.bulle}
                </span>
              </p>
            )}
            {/* Premier point de contact. Le numéro est un lien tel:, capté par
                PhoneClickTracker, qui écoute tous les liens tel: du site. */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <a href="#devis-bas" className={boutonPlein}>
                Demander mon étude gratuite
              </a>
              <a href={CONTACT.telHref} className={boutonTelephone}>
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  call
                </span>
                {CONTACT.telAffiche}
              </a>
            </div>
            <p className="font-body-md text-body-md text-white/70 mt-5">
              Relevé et devis gratuits, déplacement compris.
            </p>
          </div>
        </header>

        {/* Réassurance immédiate. Avant de lire quoi que ce soit sur la
            technique, le visiteur doit savoir à qui il a affaire. */}
        <section className="bg-surface border-b border-surface-variant" aria-label="Nos garanties">
          <div className="max-w-container-max mx-auto px-6 md:px-16 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {GARANTIES.map((g) => (
              <div key={g.titre} className="flex items-center gap-4">
                <Picto nom={g.icone} taille="petit" />
                <div>
                  <p className="font-label-md text-label-md text-primary">{g.titre}</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">{g.texte}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* L'ordre change selon le rôle de la page.

            Sur une page d'offre, on donne envie avant d'avertir : ce que nous
            apportons, puis le déroulé du projet du premier appel à la
            livraison, puis les preuves. Les contraintes du secteur viennent
            plus bas, quand la confiance est faite.

            Sur la page mère, qui sert à s'orienter et non à se décider, le
            contexte du secteur reste en tête. */}
        {zone.parent ? (
          <>
            {sectionApports}
            {sectionComposition}
            {sectionDeroule}
          </>
        ) : (
          sectionContexte
        )}

        {/* Sur la page mère, les pages d'offre sont la charge utile : elles
            viennent juste après le contexte, avant toute relance. */}
        {!zone.parent && zone.offres && zone.offres.length > 0 && (
          <section className="py-20 md:py-28 bg-surface-container">
            <div className="max-w-container-max mx-auto px-6 md:px-16">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
                {zone.parent ? 'Nos autres ouvrages' : 'Nos ouvrages'} {zone.article} {zone.nom}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
                Chaque page traite la contrainte propre à son ouvrage, elles ne se répètent pas.
              </p>
              <ul className="grid md:grid-cols-2 gap-8">
                {zone.offres.map((o) => (
                  <li key={o.slug} className={o.src ? '' : 'border-t-2 border-secondary/40 pt-5'}>
                    <a href={`/${o.slug}`} className="group block">
                      {/* Sans vignette, la carte n'avait aucun repère visuel :
                          le picto de l'ouvrage prend cette place. */}
                      {!o.src && (
                        <span className="block mb-4">
                          <Picto nom={o.icone ?? 'home_work'} taille="petit" />
                        </span>
                      )}
                      {o.src && (
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/2] mb-5">
                          <img
                            width={o.w}
                            height={o.h}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            src={o.src}
                            alt={o.alt ?? ''}
                          />
                        </div>
                      )}
                      <span className="block font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary-dark transition-colors">
                        {o.titre}
                      </span>
                      <span className="block font-body-md text-body-md text-on-surface-variant mt-3">
                        {o.resume}
                      </span>
                      <span className="inline-block font-label-md text-label-md text-secondary-dark mt-4 underline underline-offset-4 decoration-secondary/40 group-hover:decoration-secondary transition-colors">
                        Voir la page
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}


        {!zone.parent && sectionRelance}

        {/* Les chantiers réels du secteur */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              {/* Le titre ne chiffre plus les chantiers. Annoncer « nos 3
                  chantiers » plafonne ce que le visiteur imagine de
                  l'entreprise, alors que la page n'en montre qu'une sélection
                  documentée. */}
              {zone.chantiersTitre ??
                (chantiers.length === 1
                  ? 'Notre chantier dans le secteur'
                  : 'Nos chantiers dans le secteur')}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-14 max-w-2xl">
              {zone.chantiersIntro ?? (
                <>
                  Commune réelle, contrainte réelle, durée réelle. Ce sont les mêmes fiches que dans{' '}
                  <a href="/realisations" className={lienInterne}>
                    nos réalisations
                  </a>,
                  sans réécriture à l&apos;avantage de la page.
                </>
              )}
            </p>
            <div className="space-y-16">
              {chantiers.map((c) => (
                <article key={c.id} className="grid lg:grid-cols-2 gap-10 items-start">
                  <div className="rounded-2xl overflow-hidden shadow-xl">
                    <img
                      width={c.w}
                      height={c.h}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                      src={c.src}
                      alt={c.alt}
                    />
                  </div>
                  <div>
                    <p className="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary-dark mb-3">
                      {c.categorie}, {c.commune}
                    </p>
                    <h3 className="font-headline-md text-headline-md text-primary mb-5">{c.titre}</h3>
                    <div className="font-body-md text-body-md text-on-surface-variant space-y-4">
                      {c.paragraphes.slice(0, 2).map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                    <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3">
                      {c.faits.map((f) => (
                        <div key={f.label}>
                          <dt className="font-label-md text-label-md text-secondary-dark">
                            {f.label}
                          </dt>
                          <dd className="font-body-md text-body-md text-on-surface-variant">
                            {f.valeur}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>
            {/* Galerie, dans la section des chantiers et non à part : ces photos
                sont de la preuve, au même titre que la fiche au-dessus. Chaque
                légende nomme sa commune, c'est ce qui autorise à montrer un
                chantier d'ailleurs sur la page d'un secteur où l'on n'a pas
                encore posé. */}
            {zone.galerie && zone.galerie.length > 0 && (
              <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {zone.galerie.map((photo) => (
                  <li key={photo.src}>
                    <figure>
                      <div className="rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
                        <img
                          width={photo.w}
                          height={photo.h}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          src={photo.src}
                          alt={photo.alt}
                        />
                      </div>
                      <figcaption className="font-body-md text-body-md text-on-surface-variant mt-3">
                        {photo.legende}
                      </figcaption>
                    </figure>
                  </li>
                ))}
              </ul>
            )}

            {/* Rappel discret : le visiteur vient de lire une preuve, pas un
                argumentaire. Une phrase suffit, un bandeau ferait redite avec
                celui du dessus. */}
            <p className="font-body-md text-body-md text-on-surface-variant mt-14">
              Vous voulez le même niveau de détail sur votre projet ?{' '}
              <a href="#devis-bas" className={lienInterne}>
                Décrivez-le nous
              </a>{' '}
              ou appelez le{' '}
              <a href={CONTACT.telHref} className={lienInterne}>
                {CONTACT.telAffiche}
              </a>
              .
            </p>
          </div>
        </section>

        {/* Avis clients. Les chantiers montrent ce que nous savons faire, les
            avis disent comment ça s'est passé : les deux preuves se tiennent,
            elles se suivent donc.

            Aucun balisage Review ni aggregateRating ici : la note globale reste
            déclarée sur l'accueil uniquement, voir lib/data/avis.ts. */}
        <section className="py-20 md:py-28 bg-surface" aria-labelledby="titre-avis">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div className="max-w-2xl">
                <h2
                  id="titre-avis"
                  className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4"
                >
                  Ce qu&apos;en disent nos clients
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {NOTE_GOOGLE.note} sur 5 sur Google, sur {NOTE_GOOGLE.nombre} avis. Nous les
                  reproduisons tels quels.
                </p>
              </div>
              <a
                href={GOOGLE.fiche}
                target="_blank"
                rel="noopener noreferrer"
                className={`${lienInterne} font-label-md text-label-md shrink-0`}
              >
                Lire les avis sur Google
              </a>
            </div>
            <ul className="grid md:grid-cols-3 gap-6">
              {avis.map((a) => (
                <li
                  key={a.nom}
                  className="bg-surface-container-low rounded-2xl p-8 border border-surface-variant flex flex-col"
                >
                  <Etoiles className="text-secondary-dark mb-4" />
                  <blockquote className="font-body-md text-body-md text-on-surface-variant grow">
                    {a.texte}
                  </blockquote>
                  <p className="font-label-md text-label-md text-primary mt-6">{a.nom}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>


        {/* Sur une page d'offre, les contraintes du secteur arrivent ici, une
            fois les preuves passées : elles restent sur la page, elles ne
            l'ouvrent plus.

            Sur la page mère, qui a ouvert sur son contexte, ce sont au
            contraire la méthode et le déroulé qui viennent après les preuves.
            Toutes les pages de zone les portent donc, seule leur place
            change. */}
        {zone.parent ? (
          <>
            {sectionContexte}
            {sectionRelance}
          </>
        ) : (
          <>
            {sectionApports}
            {sectionComposition}
            {sectionDeroule}
          </>
        )}

        {/* Accès et méthode */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-6">
                Depuis l&apos;atelier des Billaux
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">{zone.acces}</p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Communes citées sur cette page : {zone.communes.join(', ')}. Nos gammes complètes sont
                détaillées sur{' '}
                <a href="/pergolas" className={lienInterne}>
                  pergolas
                </a>
                ,{' '}
                <a href="/carports" className={lienInterne}>
                  carports
                </a>
                ,{' '}
                <a href="/amenagement-exterieur" className={lienInterne}>
                  aménagement extérieur
                </a>{' '}
                et{' '}
                <a href="/constructions-bois" className={lienInterne}>
                  constructions bois
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Guides rattachés au secteur */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              À lire avant de se lancer dans le secteur
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
              Trois guides signés par{' '}
              <a href="/auteur/david-bertrand" className={lienInterne}>
                David Bertrand
              </a>,
              qui répondent aux questions posées le plus souvent ici.
            </p>
            <ul className="grid md:grid-cols-3 gap-8">
              {zone.guides.map((g) => (
                <li key={g.slug} className="border-t-2 border-secondary/40 pt-6">
                  <Picto nom={pictoGuide(g.slug)} taille="petit" />
                  <a
                    href={`/blog/${g.slug}`}
                    className="block font-title-md text-title-md text-on-surface hover:text-secondary-dark transition-colors mt-4"
                  >
                    {g.titre}
                  </a>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                    {g.pourquoi}
                  </p>
                </li>
              ))}
            </ul>
            <p className="font-body-md text-body-md text-on-surface-variant mt-10">
              L&apos;ensemble des guides est sur{' '}
              <a href="/blog" className={lienInterne}>
                notre blog
              </a>
              .
            </p>
          </div>
        </section>

        {/* Sur une page d'offre, les ouvrages voisins passent après l'accès et
            les guides : placés plus haut, ils détourneraient le visiteur de la
            relance au moment précis où il vient d'être convaincu. */}
        {zone.parent && zone.offres && zone.offres.length > 0 && (
          <section className="py-20 md:py-28 bg-surface-container">
            <div className="max-w-container-max mx-auto px-6 md:px-16">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
                {zone.parent ? 'Nos autres ouvrages' : 'Nos ouvrages'} {zone.article} {zone.nom}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
                Chaque page traite la contrainte propre à son ouvrage, elles ne se répètent pas.
              </p>
              <ul className="grid md:grid-cols-2 gap-8">
                {zone.offres.map((o) => (
                  <li key={o.slug} className={o.src ? '' : 'border-t-2 border-secondary/40 pt-5'}>
                    <a href={`/${o.slug}`} className="group block">
                      {/* Sans vignette, la carte n'avait aucun repère visuel :
                          le picto de l'ouvrage prend cette place. */}
                      {!o.src && (
                        <span className="block mb-4">
                          <Picto nom={o.icone ?? 'home_work'} taille="petit" />
                        </span>
                      )}
                      {o.src && (
                        <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/2] mb-5">
                          <img
                            width={o.w}
                            height={o.h}
                            loading="lazy"
                            decoding="async"
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            src={o.src}
                            alt={o.alt ?? ''}
                          />
                        </div>
                      )}
                      <span className="block font-headline-sm text-headline-sm text-on-surface group-hover:text-secondary-dark transition-colors">
                        {o.titre}
                      </span>
                      <span className="block font-body-md text-body-md text-on-surface-variant mt-3">
                        {o.resume}
                      </span>
                      <span className="inline-block font-label-md text-label-md text-secondary-dark mt-4 underline underline-offset-4 decoration-secondary/40 group-hover:decoration-secondary transition-colors">
                        Voir la page
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-12">
              Questions fréquentes
            </h2>
            <div className="max-w-3xl space-y-4">
              {zone.faq.map((f) => (
                <details
                  key={f.q}
                  className="group border border-outline-variant rounded-xl p-6 bg-surface"
                >
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
          </div>
        </section>

        {/* Formulaire en page. Il remplace l'ancien lien vers /contact : envoyer
            le visiteur vers un autre formulaire coûtait un clic à l'endroit de
            la page où il est le plus décidé. L'ancre #devis-bas est celle que
            visent la barre mobile et le pop-up. */}
        <section id="devis-bas" className="py-20 md:py-28 bg-primary text-on-primary">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-headline-md text-headline-md mb-4 text-center">
                Un projet {zone.article} {zone.nom} ?
              </h2>
              <p className="font-body-md text-body-md text-on-primary/80 mb-8 text-center">
                Le relevé et le devis sont gratuits, sans engagement. Vous pouvez aussi appeler
                directement le{' '}
                <a href={CONTACT.telHref} className="underline underline-offset-4">
                  {CONTACT.telAffiche}
                </a>
                .
              </p>
              <div className="bg-surface rounded-2xl p-6 md:p-8 shadow-xl">
                <DevisForm instanceId="bas" projet={zone.projet} pageLabel={pageLabel} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <DevisStickyBar />
      <DevisDesktopPopup pageLabel={pageLabel} />
    </>
  );
}
