# Ligne éditoriale — Blog L'Esprit Bois

Document de référence pour la production d'articles. Lu par les sous-agents
`redacteur-bois` et `iconographe-bois` et par les commandes `/veille-blog` et
`/rediger-article`.

## Thèmes

L'entreprise travaille **le bois ET l'aluminium** : le magasin vend et pose les
deux. Le blog couvre donc les deux matières, jamais le bois seul.

**Univers bois.** Matériaux (essences, durabilité, classes d'emploi,
traitements), métiers et savoir-faire, filière locale, et les ouvrages phares :
**carport, terrasse, pergola, poulailler, pool-house, construction/extension
bois, bardage, abri de jardin, clôture/brise-vue**.

**Univers aluminium.** **Carport aluminium, pergola bioclimatique à lames
orientables, véranda, extension et verrière aluminium**, ainsi que les
protections solaires (stores, brise-soleil orientables), garde-corps et
clôtures alu. Le vocabulaire technique n'est pas celui du bois : parler
**profilés et alliages, thermolaquage et teinte RAL, rupture de pont
thermique, motorisation et domotique, étanchéité et évacuation des eaux,
garanties** — et non de classes d'emploi ou de traitement autoclave.

**Sujets transverses.** Réglementation (urbanisme/PLU, déclaration préalable,
permis, RE2020), budget, entretien, tendances d'aménagement extérieur.

Angle toujours actionnable et ancré terrain Gironde.

### Comparatifs bois / aluminium

Ce sont nos meilleurs sujets, et notre position est un atout : **nous vendons
et posons les deux**, donc nous n'avons aucun intérêt à pousser une matière.
Un comparatif doit le dire explicitement, puis trancher franchement selon
l'usage (« pour ce cas précis, nous conseillons… »). Ne jamais conclure par un
match nul mou. Règles :

- Ne pas dénigrer une matière : chacune a des cas où elle gagne (chaleur,
  sur-mesure, réparabilité et bilan carbone côté bois ; portées, entretien
  quasi nul, lames orientables et motorisation côté alu).
- Un comparatif ne doit pas cannibaliser un guide mono-matière existant :
  vérifier `lib/data/blog.ts` et choisir un angle de décision distinct.
- Prudence factuelle identique : **aucun coefficient thermique (Uw), aucune
  durée de garantie, aucun numéro de DTU ni seuil réglementaire inventé**.
  Source vérifiée par recherche web, sinon formulation qualitative.
- Véranda et extension chauffées : la réglementation thermique/énergétique et
  les seuils d'urbanisme se vérifient avant d'être cités, jamais de mémoire.

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
- **Ville SEO :** passer `ville: 'Libourne'` à `buildMetadata` (c'est l'ancre de
  référencement, comme le gabarit `carport-bois-guide`). Ne PAS utiliser
  `CONTACT.ville` de `navigation.ts` (= « Les Billaux », commune du siège) pour
  ce champ ; `navigation.ts` ne sert qu'au téléphone et à l'adresse.
- `keywords` : requête principale + variantes + « ... Gironde », « ... Libourne ».
- 1 seul `<h1>` (le titre). Hiérarchie `<h2>`/`<h3>` propre.
- Slug court, en-tête, sans accent, mots-clés (ex. `terrasse-bois-entretien`).
- FAQPage JSON-LD strictement alignée sur la FAQ visible.

## Règles images

- Ratio : ~1 visuel toutes les 1–2 sections, soit ~5–6 images/article, dont 1
  image de couverture (`COVER`) réutilisée en hero + `ogImage`.
- Priorité de source : (1) vraie photo de chantier de `/public/images`
  (voir `public/images/` et `public/images/source-adefrance/`) → (2) photo libre
  de droits (Unsplash/Pexels, licence libre, thème bois ou alu) → (3) image IA en
  dernier recours seulement. Ne jamais laisser un `src` non résolu : si aucune
  photo chantier ni libre de droits ne convient et qu'aucun outil de génération
  d'image n'est disponible, **signaler le manque à l'utilisateur** (il fournira
  une photo ou validera une génération IA) plutôt que de livrer un article avec
  une image manquante.
- **Sujets aluminium :** l'entreprise a de vraies photos de chantier alu, à
  utiliser en priorité avant toute banque d'images —
  `source-adefrance/Carport-aluminium-Libourne-1..4.webp` et
  `source-adefrance/Pergolas-aluminium-Libourne-1..9.webp`.
- Chaque image : `alt` descriptif orienté requête + géographie quand pertinent,
  et une `caption` (légende) qui apporte une info, pas une redite.
- Ne pas illustrer un sujet aluminium avec une photo de bois (ni l'inverse) :
  l'image doit montrer la matière dont parle la section.
- Nouvelles images téléchargées/générées : les déposer dans
  `public/images/blog/<slug>/` et tracer la provenance dans le fichier de
  propositions et le commit.

## Maillage interne

Chaque article lie vers : au moins une page service pertinente (`/carports`,
`/pergolas`, `/amenagement-exterieur`, `/constructions-bois`), `/realisations`,
et au moins un autre article du blog quand le sujet s'y prête.

⚠️ Ce sont les **seules** routes services existantes — il n'y a PAS de
`/terrasses`, `/bardages` ni `/verandas`. Les pages `/pergolas` et `/carports`
traitent déjà largement l'aluminium : ce sont les cibles naturelles des sujets
alu. Pour une véranda, une extension ou une verrière aluminium, pointer vers
`/constructions-bois` ou `/amenagement-exterieur`. Vérifier l'existence d'une
route dans `app/` avant de créer un lien. Classe CSS de
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

## Sources externes à citer (constat d'audit GEO du 01/08/2026)

Chaque article qui avance un seuil réglementaire, une taxe, une norme ou une
classe d'emploi cite sa source **au premier endroit où l'affirmation apparaît**
(lien `className={lienInterne}` + `target="_blank" rel="noopener noreferrer"`).
URL vérifiées, à recopier à l'identique — ne jamais inventer d'autre URL :

- Déclaration préalable : https://www.service-public.gouv.fr/particuliers/vosdroits/F17578
- Permis de construire : https://www.service-public.gouv.fr/particuliers/vosdroits/F1986
- Taxe d'aménagement : https://www.service-public.gouv.fr/particuliers/vosdroits/F23263
- Garantie décennale : https://entreprendre.service-public.gouv.fr/vosdroits/F2034
- RE2020 : https://www.ecologie.gouv.fr/politiques-publiques/reglementation-environnementale-re2020
- NF DTU / avis techniques : https://www.cstb.fr/
- Classes d'emploi du bois, durabilité des essences : https://www.fcba.fr/

2 à 3 liens par article, chacun vers une fiche différente. Si aucune source de
la liste n'étaye l'affirmation : formulation prudente, pas de lien inventé.
Ajouter la nouvelle URL de l'article au ping IndexNow (voir README).
