import JsonLd from '@/components/JsonLd';
import SiteNav from '@/components/SiteNav';
import SiteFooter from '@/components/SiteFooter';
import DevisForm from '@/components/DevisForm';
import DevisStickyBar from '@/components/DevisStickyBar';
import DevisDesktopPopup from '@/components/DevisDesktopPopup';
import { CHANTIERS } from '@/lib/data/chantiers';
import { CONTACT, ENTREPRISE_ID, ENTREPRISE_REF, SITE } from '@/lib/data/navigation';
import type { Zone } from '@/lib/data/zones';

const lienInterne =
  'text-secondary-dark underline underline-offset-4 decoration-secondary/40 hover:decoration-secondary transition-colors';

const boutonPlein =
  'inline-flex items-center justify-center bg-secondary text-primary px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-secondary-fixed transition-all active:scale-95';

const boutonTelephone =
  'inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-5 rounded-xl font-label-md text-label-md hover:bg-white/10 transition-all active:scale-95';

/** Gabarit commun aux pages de zone.
 *
 *  Le gabarit est partagé, le contenu ne l'est pas : chaque zone apporte ses
 *  propres chantiers, son propre contexte technique et sa propre FAQ. C'est la
 *  condition pour que ces pages ne soient pas des doorway pages — un même texte
 *  décliné par commune serait détecté comme tel, et à juste titre. */
export default function PageZone({ zone }: { zone: Zone }) {
  const chantiers = zone.chantiers
    .map((id) => CHANTIERS.find((c) => c.id === id))
    .filter((c): c is NonNullable<typeof c> => Boolean(c));

  const url = `${SITE.url}/${zone.slug}`;
  const pageLabel = `/${zone.slug}`;

  /* Fil d'Ariane : les pages d'offre d'un secteur passent par leur page mère et
     s'y annoncent par leur ouvrage — « Bassin d'Arcachon / Terrasses bois » —,
     les zones sans mère restent directement sous l'accueil sous leur nom. */
  const dernierNiveau = zone.ouvrage ?? zone.nom;
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
      name: `Chantiers réalisés — ${zone.nom}`,
      numberOfItems: chantiers.length,
      itemListElement: chantiers.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        item: {
          '@type': 'CreativeWork',
          name: `${c.categorie} — ${c.commune} : ${c.titre}`,
          about: { '@type': 'Place', name: c.commune },
          provider: { '@id': ENTREPRISE_ID },
        },
      })),
    },
  ];

  return (
    <>
      <JsonLd data={jsonld} />
      <SiteNav page="realisations" />
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
            {/* Premier point de contact. Le numéro est un lien tel: — capté par
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

        {/* Contexte technique du secteur */}
        <section className="py-20 md:py-28 bg-surface">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <div className="max-w-3xl">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-8">
                {zone.contexte.titre}
              </h2>
              <div className="font-body-lg text-body-lg text-on-surface-variant space-y-6">
                {zone.contexte.paragraphes.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
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

        {/* Sur la page mère, les pages d'offre sont la charge utile : elles
            viennent juste après le contexte, avant toute relance. */}
        {!zone.parent && zone.offres && zone.offres.length > 0 && (
          <section className="py-20 md:py-28 bg-surface-container">
            <div className="max-w-container-max mx-auto px-6 md:px-16">
              <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
                {zone.parent ? 'Nos autres ouvrages' : 'Nos ouvrages'} {zone.article} {zone.nom}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
                Chaque page traite la contrainte propre à son ouvrage — elles ne se répètent pas.
              </p>
              <ul className="grid md:grid-cols-2 gap-8">
                {zone.offres.map((o) => (
                  <li key={o.slug} className="border-t-2 border-secondary/40 pt-5">
                    <a
                      href={`/${o.slug}`}
                      className="font-title-md text-title-md text-on-surface hover:text-secondary-dark transition-colors"
                    >
                      {o.titre}
                    </a>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                      {o.resume}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Relance après les contraintes techniques : c'est l'endroit de la page
            où le visiteur vient de comprendre qu'il y a des pièges, et le moment
            où il est le plus disposé à les faire traiter par quelqu'un d'autre. */}
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

        {/* Les chantiers réels du secteur */}
        <section className="py-20 md:py-28 bg-surface-container">
          <div className="max-w-container-max mx-auto px-6 md:px-16">
            <h2 className="font-display-md text-display-md-mobile md:text-display-md text-on-surface mb-4">
              {zone.chantiersTitre ??
                (chantiers.length === 1
                  ? 'Notre chantier dans le secteur'
                  : `Nos ${chantiers.length} chantiers dans le secteur`)}
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-14 max-w-2xl">
              {zone.chantiersIntro ?? (
                <>
                  Commune réelle, contrainte réelle, durée réelle. Ce sont les mêmes fiches que dans{' '}
                  <a href="/realisations" className={lienInterne}>
                    nos réalisations
                  </a>
                  , sans réécriture à l&apos;avantage de la page.
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
                      {c.categorie} — {c.commune}
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
                légende nomme sa commune — c'est ce qui autorise à montrer un
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
              </a>
              , qui répondent aux questions posées le plus souvent ici.
            </p>
            <ul className="grid md:grid-cols-3 gap-8">
              {zone.guides.map((g) => (
                <li key={g.slug} className="border-t-2 border-secondary/40 pt-5">
                  <a
                    href={`/blog/${g.slug}`}
                    className="font-title-md text-title-md text-on-surface hover:text-secondary-dark transition-colors"
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
                Chaque page traite la contrainte propre à son ouvrage — elles ne se répètent pas.
              </p>
              <ul className="grid md:grid-cols-2 gap-8">
                {zone.offres.map((o) => (
                  <li key={o.slug} className="border-t-2 border-secondary/40 pt-5">
                    <a
                      href={`/${o.slug}`}
                      className="font-title-md text-title-md text-on-surface hover:text-secondary-dark transition-colors"
                    >
                      {o.titre}
                    </a>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                      {o.resume}
                    </p>
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
