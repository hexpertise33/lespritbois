# Ligne éditoriale — Blog L'Esprit Bois

Document de référence pour la production d'articles. Lu par les sous-agents
`redacteur-bois` et `iconographe-bois` et par les commandes `/veille-blog` et
`/rediger-article`.

## Thèmes

Veille et articles autour de : matériaux du bois (essences, durabilité, classes
d'emploi, traitements), métiers et savoir-faire du bois, réglementation
(urbanisme/PLU, déclaration préalable, permis, RE2020), tendances d'aménagement
extérieur, et les ouvrages phares de l'entreprise : **carport, terrasse,
pergola, poulailler, pool-house, construction/extension bois, bardage,
abri de jardin**. Angle toujours actionnable et ancré terrain Gironde.

## Ton & format

- Ton : expert-artisan, concret, honnête (donne des fourchettes de prix, dit
  quand « ça dépend »), à la première personne du pluriel (« nous », « nos
  chantiers »), auteur David Bertrand / L'Esprit Bois.
- Format : guide long, ~1500–2200 mots (~8 min de lecture).
- Ouverture « answer-first » : le chapô répond directement à la question du
  titre en gras dès les premières lignes, puis nuance.

## Gabarit d'article

Le gabarit canonique est `app/blog/carport-bois-guide/page.tsx`. Tout nouvel
article calque sa structure, dans l'ordre :
1. imports (`buildMetadata`, `JsonLd`, `SiteNav`, `SiteFooter`) + constante `COVER`.
2. `export const metadata = buildMetadata({...})` avec `title`, `description`,
   `keywords`, `path: '/blog/<slug>'`, `ogImage: COVER`, `ogTitle`, `ville`.
3. composants locaux `Figure` et (si besoin) `DuoFigure` (copier tels quels).
4. tableau `jsonld` = 3 objets : `BreadcrumbList`, `BlogPosting` (author David
   Bertrand, publisher L'Esprit Bois, `areaServed` Gironde), `FAQPage` (mêmes
   questions/réponses que la FAQ affichée).
5. JSX : `<JsonLd data={jsonld} />`, `<SiteNav page="blog" />`, `<main>` avec
   hero (fil d'ariane + catégorie + h1 + méta auteur/date/durée), chapô,
   `<article>` de sections `<h2>` entrecoupées de `Figure`, FAQ `<details>`,
   section conclusion `bg-primary` + double CTA (devis + téléphone).

## Règles SEO

- Ancrage local **Libourne / Gironde** dans le title, la description, le h1
  (quand naturel), au moins une section, la conclusion et le `areaServed`.
- `keywords` : requête principale + variantes + « ... Gironde », « ... Libourne ».
- 1 seul `<h1>` (le titre). Hiérarchie `<h2>`/`<h3>` propre.
- Slug court, en-tête, sans accent, mots-clés (ex. `terrasse-bois-entretien`).
- FAQPage JSON-LD strictement alignée sur la FAQ visible.

## Règles images

- Ratio : ~1 visuel toutes les 1–2 sections, soit ~5–6 images/article, dont 1
  image de couverture (`COVER`) réutilisée en hero + `ogImage`.
- Priorité de source : (1) vraie photo de chantier de `/public/images`
  (voir `public/images/` et `public/images/source-adefrance/`) → (2) photo libre
  de droits (Unsplash/Pexels, licence libre, thème bois) → (3) image IA en
  dernier recours seulement.
- Chaque image : `alt` descriptif orienté requête + géographie quand pertinent,
  et une `caption` (légende) qui apporte une info, pas une redite.
- Nouvelles images téléchargées/générées : les déposer dans
  `public/images/blog/<slug>/` et tracer la provenance dans le fichier de
  propositions et le commit.

## Maillage interne

Chaque article lie vers : au moins une page service pertinente (`/carports`,
`/pergolas`, `/amenagement-exterieur`, `/constructions-bois`), `/realisations`,
et au moins un autre article du blog quand le sujet s'y prête. Classe CSS de
lien interne : `text-secondary-dark underline underline-offset-4
decoration-secondary/40 hover:decoration-secondary transition-colors`.

## Checklist avant publication

- [ ] Structure conforme au gabarit (hero, chapô, sections, FAQ, CTA).
- [ ] 3 blocs JSON-LD présents et cohérents (Breadcrumb, BlogPosting, FAQPage).
- [ ] title/description/keywords + h1 ancrés Libourne/Gironde.
- [ ] Ratio images respecté, tous `alt`/`caption` remplis, provenance tracée.
- [ ] Maillage interne présent (service + réalisations + article lié).
- [ ] Entrée ajoutée en tête de `lib/data/blog.ts`.
- [ ] Apostrophes JSX échappées ; `npm run build` passe.
