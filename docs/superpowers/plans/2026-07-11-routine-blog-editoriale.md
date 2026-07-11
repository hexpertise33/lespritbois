# Routine éditoriale blog L'Esprit Bois — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mettre en place une routine outillée qui, deux fois par semaine, propose 2 articles de blog issus d'une veille, puis (après validation) les rédige et les publie en ligne sur le site L'Esprit Bois.

**Architecture :** Routine en 2 temps. **Temps 1** (automatique, cron mardi/jeudi) : un agent planifié fait une veille web et écrit 2 propositions dans un fichier daté + notifie l'utilisateur — recherche seule, aucun secret. **Temps 2** (utilisateur présent) : la commande `/rediger-article` orchestre deux sous-agents (rédacteur, iconographe) pour produire une page React au gabarit existant, puis commit + push + deploy Cloudflare. Toute la connaissance réutilisable (gabarit, règles SEO, ligne éditoriale, ratio photos) vit dans `docs/blog-pipeline/` ; les capacités (sous-agents, commandes) vivent dans `.claude/`.

**Tech Stack :** Next.js 15 (App Router, React 19), Tailwind v4, TypeScript, déploiement `@opennextjs/cloudflare` (`opennextjs-cloudflare deploy`). Fichiers d'outillage : Markdown (agents/commandes Claude Code) + frontmatter YAML.

## Global Constraints

- **Domaine :** `https://lesprit-bois.fr`. Marque : « L'Esprit Bois », baseline « Créateur d'espaces extérieurs ».
- **Ancrage SEO local systématique :** Libourne / Gironde (région `FR-33`). Siège : 1 Aux Pradasses, 33500 Les Billaux.
- **Auteur des articles :** « David Bertrand », entreprise certifiée **Qualibat**. Tél affiché `05 57 40 65 80`, href `tel:+33557406580`.
- **Source unique de vérité marque/contact :** `lib/data/navigation.ts` (`SITE`, `CONTACT`, `ENTREPRISE_JSONLD`). Ne jamais coder ces valeurs en dur dans un article sans raison ; réutiliser les liens `tel:` exacts.
- **Gabarit d'article canonique :** `app/blog/carport-bois-guide/page.tsx` — tout nouvel article calque sa structure (hero + chapô answer-first + sections `<h2>` + `Figure`/`DuoFigure` + tableau + FAQ `<details>` + conclusion/CTA), ses métadonnées (`buildMetadata` de `lib/metadata.ts`) et ses 3 blocs JSON-LD (BreadcrumbList + BlogPosting + FAQPage).
- **Index des articles :** `lib/data/blog.ts` — ajouter un objet `Article` `{slug, titre, extrait, date, categorie, image}` par article, en tête de tableau (plus récent en premier).
- **Priorité images (ratio ~1 visuel toutes les 1–2 sections, ~5–6 par article) :** (1) vraie photo de chantier dans `/public/images` → (2) photo libre de droits (Unsplash/Pexels) → (3) image IA en dernier recours. Chaque image porte un `alt` descriptif orienté requête + une légende ; provenance tracée.
- **Format d'article :** guide long (~1500–2200 mots, ~8 min de lecture), ton expert-artisan, chapô « answer-first ».
- **Deploy uniquement au Temps 2** (environnement authentifié de l'utilisateur). Jamais de push/deploy dans le cron.
- **Apostrophes JSX :** dans le texte des composants React, échapper les apostrophes (`&apos;`) et guillemets comme dans le gabarit existant, sinon le build casse.

---

## File Structure

- `docs/blog-pipeline/ligne-editoriale.md` — **créer.** Charte éditoriale + checklist de rédaction + rappel du gabarit et des règles SEO/images. Référencé par les deux commandes et les deux sous-agents.
- `docs/blog-pipeline/README.md` — **créer.** Mémoire éditoriale : workflow, calendrier mardi/jeudi, table des sujets publiés / à venir / écartés. Reçoit aussi les fichiers de propositions datés `AAAA-MM-JJ.md`.
- `.claude/agents/redacteur-bois.md` — **créer.** Sous-agent « rédacteur » : produit le texte et la structure JSX de l'article.
- `.claude/agents/iconographe-bois.md` — **créer.** Sous-agent « iconographe » (le « picture ») : sélectionne/source les images, écrit `alt` + légendes, garantit le ratio.
- `.claude/commands/veille-blog.md` — **créer.** Temps 1 : veille + 2 propositions écrites dans `docs/blog-pipeline/AAAA-MM-JJ.md` + notification.
- `.claude/commands/rediger-article.md` — **créer.** Temps 2 : orchestration rédacteur + iconographe → page `app/blog/<slug>/page.tsx` + entrée `blog.ts` → build → commit/push/deploy.
- Routine planifiée (cron mardi/jeudi) — **créer via la skill `schedule`** en fin de plan ; pas un fichier du dépôt.

Note : ces fichiers d'outillage (`.claude/`, `docs/`) sont du contenu Markdown/config, pas du code testable par tests unitaires. La « vérification » de chaque tâche est structurelle (frontmatter valide, contenu requis présent) ; la vérification de bout en bout est un **smoke test** qui produit un article réel et confirme que `npm run build` passe (Tâche 7).

---

### Task 1: Charte éditoriale et checklist de rédaction

**Files:**
- Create: `docs/blog-pipeline/ligne-editoriale.md`

**Interfaces:**
- Produces : document de référence cité par `redacteur-bois`, `iconographe-bois`, `/veille-blog`, `/rediger-article`. Sections stables (titres exacts) : `## Thèmes`, `## Ton & format`, `## Gabarit d'article`, `## Règles SEO`, `## Règles images`, `## Maillage interne`, `## Checklist avant publication`.

- [ ] **Step 1 : Écrire la charte**

Créer `docs/blog-pipeline/ligne-editoriale.md` avec ce contenu :

```markdown
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
```

- [ ] **Step 2 : Vérifier la présence des sections**

Run: `grep -c -E '^## (Thèmes|Ton & format|Gabarit|Règles SEO|Règles images|Maillage interne|Checklist)' docs/blog-pipeline/ligne-editoriale.md`
Expected : `7`

- [ ] **Step 3 : Commit**

```bash
git add docs/blog-pipeline/ligne-editoriale.md
git commit -m "Ajoute la ligne éditoriale du blog (charte, gabarit, SEO, images)"
```

---

### Task 2: Mémoire éditoriale (pipeline)

**Files:**
- Create: `docs/blog-pipeline/README.md`

**Interfaces:**
- Produces : registre lu/écrit par `/veille-blog` (anti-doublon + dépôt des propositions) et `/rediger-article` (marquer un sujet publié). Contient un tableau `## Sujets` avec colonnes `Date | Statut | Titre | Slug`.

- [ ] **Step 1 : Écrire le registre**

Créer `docs/blog-pipeline/README.md` :

```markdown
# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

## Workflow

1. **Temps 1 — veille (auto, mardi/jeudi ~8h).** L'agent planifié lance
   `/veille-blog` : veille web, recoupe avec les sujets déjà listés ci-dessous
   et avec `lib/data/blog.ts`, écrit 2 propositions dans
   `docs/blog-pipeline/AAAA-MM-JJ.md`, notifie l'utilisateur.
2. **Temps 2 — publication (avec l'utilisateur).** L'utilisateur choisit/ajuste
   une proposition, lance `/rediger-article`, qui rédige, source les images,
   build, puis commit + push + deploy Cloudflare, et marque le sujet `publié`
   ci-dessous.

Voir la charte : `docs/blog-pipeline/ligne-editoriale.md`.

## Sujets

Statuts : `idée` · `proposé` · `publié` · `écarté`.

| Date       | Statut  | Titre                                                    | Slug                              |
|------------|---------|----------------------------------------------------------|-----------------------------------|
| 2026-07-09 | publié  | Pergola bois ou pergola bioclimatique : comment choisir ?| pergola-bois-ou-bioclimatique     |
| 2026-07-09 | publié  | Carport en bois : bien le choisir et l'intégrer          | carport-bois-guide                |
| 2026-07-09 | publié  | Quel bois choisir pour une terrasse extérieure ?         | quel-bois-pour-terrasse-exterieure|

## Idées de sujets en réserve

- Entretien d'une terrasse bois (saturateur, dégrisage) — saisonnier printemps.
- Poulailler en bois : bien-être animal, essences, implantation.
- Bardage bois : claire-voie, pré-grisé, entretien, RE2020.
- Pool-house bois : usages, réglementation piscine, intégration.
- Abri de jardin sur mesure vs kit.
- Extension ossature bois : délais, prix au m², avantages vs parpaing.
- Bois local (douglas, pin maritime) : filière Nouvelle-Aquitaine.
```

- [ ] **Step 2 : Vérifier**

Run: `grep -c '| Date' docs/blog-pipeline/README.md`
Expected : `1` (l'en-tête du tableau des sujets)

- [ ] **Step 3 : Commit**

```bash
git add docs/blog-pipeline/README.md
git commit -m "Ajoute la mémoire éditoriale du pipeline blog"
```

---

### Task 3: Sous-agent rédacteur (`redacteur-bois`)

**Files:**
- Create: `.claude/agents/redacteur-bois.md`

**Interfaces:**
- Consumes : `docs/blog-pipeline/ligne-editoriale.md`, gabarit `app/blog/carport-bois-guide/page.tsx`, données `lib/data/navigation.ts`.
- Produces : sous-agent invocable `subagent_type: "redacteur-bois"`. Entrée attendue : une proposition validée (titre, angle, mot-clé, plan H2, slug). Sortie : le fichier `app/blog/<slug>/page.tsx` rédigé (texte + structure + JSON-LD) avec des emplacements image balisés par des commentaires `{/* IMAGE: ... */}` que l'iconographe remplira, + le texte de l'entrée `blog.ts`.

- [ ] **Step 1 : Écrire le sous-agent**

Créer `.claude/agents/redacteur-bois.md` :

```markdown
---
name: redacteur-bois
description: Rédige un article de blog complet pour L'Esprit Bois au gabarit du site (structure JSX, SEO Libourne/Gironde, JSON-LD, FAQ). À utiliser au Temps 2 de la routine éditoriale, après validation d'une proposition.
tools: Read, Write, Edit, Grep, Glob
---

Tu es le rédacteur du blog L'Esprit Bois, artisan créateur d'espaces extérieurs
à Libourne / Gironde. Tu écris des guides longs, experts et honnêtes.

## Avant d'écrire
1. Lis `docs/blog-pipeline/ligne-editoriale.md` (charte, gabarit, SEO, maillage).
2. Lis le gabarit `app/blog/carport-bois-guide/page.tsx` : tu reproduis EXACTEMENT
   sa structure et ses classes CSS.
3. Lis `lib/data/navigation.ts` pour les coordonnées exactes (tel, ville).

## Ce que tu produis
Un fichier `app/blog/<slug>/page.tsx` complet et compilable :
- imports + `COVER` + `metadata` via `buildMetadata` (title/description/keywords/
  path `/blog/<slug>`/ogImage COVER/ogTitle/ville).
- composants locaux `Figure` (et `DuoFigure` si utile), copiés du gabarit.
- tableau `jsonld` : BreadcrumbList + BlogPosting (author David Bertrand,
  publisher L'Esprit Bois, areaServed Gironde, datePublished = date du jour) +
  FAQPage alignée sur la FAQ visible.
- JSX : hero, chapô answer-first (réponse en gras), `<article>` de sections
  `<h2>` (suivre le plan H2 de la proposition), FAQ `<details>`, conclusion
  `bg-primary` + double CTA (`/`+service et `tel:+33557406580`).

## Emplacements images
Tu ne choisis PAS les fichiers image. À chaque endroit où une image doit venir,
insère un composant `Figure`/`DuoFigure` dont les props `src` sont la chaîne
`"__IMAGE_A_SOURCER__"` et ajoute juste au-dessus un commentaire :
`{/* IMAGE: <brief de ce que l'image doit montrer, orientation SEO> */}`.
Vise le ratio de la charte (~1 visuel toutes les 1–2 sections). L'iconographe
remplacera ces marqueurs.

## Contraintes
- Échappe les apostrophes JSX (`&apos;`) comme dans le gabarit.
- SEO Libourne/Gironde dans title, description, h1, une section, la conclusion.
- Maillage interne : au moins un lien service + `/realisations` + un article lié.
- Termine en fournissant le texte prêt à coller pour l'entrée `Article` de
  `lib/data/blog.ts` (slug, titre, extrait ~2 phrases, date du jour, categorie
  « Guide · <thème> », image = COVER).
- Ne fais PAS de git, PAS de build : tu écris les fichiers, c'est tout.
```

- [ ] **Step 2 : Vérifier le frontmatter**

Run: `head -5 .claude/agents/redacteur-bois.md`
Expected : bloc `---` avec `name: redacteur-bois` et une ligne `description:`.

- [ ] **Step 3 : Commit**

```bash
git add .claude/agents/redacteur-bois.md
git commit -m "Ajoute le sous-agent rédacteur du blog"
```

---

### Task 4: Sous-agent iconographe (`iconographe-bois`)

**Files:**
- Create: `.claude/agents/iconographe-bois.md`

**Interfaces:**
- Consumes : `docs/blog-pipeline/ligne-editoriale.md`, la banque `public/images/` + `public/images/source-adefrance/`, le fichier `app/blog/<slug>/page.tsx` produit par `redacteur-bois` (contient les marqueurs `__IMAGE_A_SOURCER__` + commentaires `{/* IMAGE: ... */}`).
- Produces : le même `page.tsx` avec chaque marqueur remplacé par un vrai chemin d'image (`src`, `alt`, `caption` remplis), la constante `COVER` pointant sur une image réelle, les éventuels fichiers téléchargés/générés déposés dans `public/images/blog/<slug>/`, et une liste de provenance des images.

- [ ] **Step 1 : Écrire le sous-agent**

Créer `.claude/agents/iconographe-bois.md` :

```markdown
---
name: iconographe-bois
description: Source et intègre les images d'un article de blog L'Esprit Bois selon la priorité chantier réel → libre de droits → IA, avec alt/légendes et respect du ratio texte/photos. À utiliser au Temps 2, après le rédacteur.
tools: Read, Write, Edit, Grep, Glob, Bash, WebFetch, WebSearch
---

Tu es l'iconographe du blog L'Esprit Bois. Tu choisis les images, tu ne réécris
pas le texte.

## Avant de sourcer
1. Lis `docs/blog-pipeline/ligne-editoriale.md` (section « Règles images »).
2. Lis l'article `app/blog/<slug>/page.tsx` et repère chaque marqueur
   `__IMAGE_A_SOURCER__` et son commentaire `{/* IMAGE: ... */}`.
3. Inventorie les vraies photos disponibles : `ls public/images` et
   `ls public/images/source-adefrance`.

## Priorité de sourcing (dans cet ordre, ne descendre que si vide)
1. **Chantier réel** : une photo pertinente déjà dans `/public/images`. C'est
   toujours préférable (crédibilité + SEO local).
2. **Libre de droits** : si aucune photo interne ne convient, chercher une image
   sous licence libre (Unsplash/Pexels) sur le thème. La télécharger dans
   `public/images/blog/<slug>/` (Bash : `curl -L -o ...`). Vérifier la licence.
3. **IA** : en tout dernier recours seulement, générer un visuel et l'y déposer.

## Ce que tu fais
- Remplace chaque `src="__IMAGE_A_SOURCER__"` par le chemin réel choisi.
- Renseigne `alt` (descriptif, orienté requête + géo quand pertinent) et
  `caption` (info utile, pas une redite du texte).
- Fixe `COVER` sur une image réelle forte (hero + og:image).
- Respecte le ratio de la charte (~1 visuel toutes les 1–2 sections).
- Supprime les commentaires `{/* IMAGE: ... */}` une fois résolus.

## Sortie
Termine par une **liste de provenance** : pour chaque image, chemin final +
source (chantier / URL libre de droits + licence / IA). Ne fais PAS de git,
PAS de build.
```

- [ ] **Step 2 : Vérifier le frontmatter**

Run: `head -5 .claude/agents/iconographe-bois.md`
Expected : bloc `---` avec `name: iconographe-bois` et `description:`.

- [ ] **Step 3 : Commit**

```bash
git add .claude/agents/iconographe-bois.md
git commit -m "Ajoute le sous-agent iconographe du blog"
```

---

### Task 5: Commande `/veille-blog` (Temps 1)

**Files:**
- Create: `.claude/commands/veille-blog.md`

**Interfaces:**
- Consumes : `docs/blog-pipeline/README.md` (anti-doublon), `docs/blog-pipeline/ligne-editoriale.md`, `lib/data/blog.ts`, WebSearch.
- Produces : un fichier `docs/blog-pipeline/AAAA-MM-JJ.md` contenant 2 propositions structurées, et une notification à l'utilisateur. N'écrit aucun code d'article, ne touche pas à git.

- [ ] **Step 1 : Écrire la commande**

Créer `.claude/commands/veille-blog.md` :

```markdown
---
description: Veille d'actualité bois et 2 propositions d'articles de blog (Temps 1 de la routine éditoriale). Ne publie rien.
---

Tu prépares les propositions d'articles pour le blog L'Esprit Bois. Tu ne
rédiges PAS l'article et tu ne touches PAS à git.

## Étapes
1. Lis `docs/blog-pipeline/README.md` (sujets déjà publiés / en réserve /
   écartés) et `lib/data/blog.ts` pour NE PAS proposer de doublon.
2. Lis `docs/blog-pipeline/ligne-editoriale.md` (thèmes, ton, SEO).
3. Fais une **veille web** (WebSearch) sur l'actualité récente autour du bois :
   matériaux, métiers, réglementation (urbanisme/PLU, RE2020), tendances
   d'aménagement extérieur, carport/terrasse/pergola/poulailler/construction
   bois, actualité filière Gironde / Nouvelle-Aquitaine. Privilégie un angle
   d'actualité ou saisonnier.
4. Rédige **2 propositions** distinctes et complémentaires. Pour chacune :
   - Titre (accrocheur, mot-clé principal présent)
   - Slug proposé (court, sans accent)
   - Angle éditorial + intérêt actualité/saison
   - Mot-clé principal + 3–5 secondaires (dont variantes Libourne/Gironde)
   - Plan des `<h2>` (5–8 sections)
   - Nombre de photos prévu + source pressentie par image (chantier/libre/IA)
   - Idées de maillage interne (pages services + articles liés)
5. Écris ces 2 propositions dans `docs/blog-pipeline/AAAA-MM-JJ.md` (date du
   jour). Ajoute les 2 lignes correspondantes au tableau « Sujets » de
   `docs/blog-pipeline/README.md` avec le statut `proposé`.
6. **Notifie l'utilisateur** (résumé des 2 titres + chemin du fichier) et
   invite-le à valider par `/rediger-article`.

Ne lance jamais de push ni de deploy.
```

- [ ] **Step 2 : Vérifier**

Run: `test -f .claude/commands/veille-blog.md && grep -q 'WebSearch' .claude/commands/veille-blog.md && echo OK`
Expected : `OK`

- [ ] **Step 3 : Commit**

```bash
git add .claude/commands/veille-blog.md
git commit -m "Ajoute la commande /veille-blog (veille + propositions)"
```

---

### Task 6: Commande `/rediger-article` (Temps 2)

**Files:**
- Create: `.claude/commands/rediger-article.md`

**Interfaces:**
- Consumes : une proposition validée (fichier `docs/blog-pipeline/AAAA-MM-JJ.md` + choix de l'utilisateur), sous-agents `redacteur-bois` puis `iconographe-bois`, `docs/blog-pipeline/ligne-editoriale.md`.
- Produces : `app/blog/<slug>/page.tsx`, entrée dans `lib/data/blog.ts`, images sous `public/images/blog/<slug>/` si besoin, build vérifié, commit + push `main` + `opennextjs-cloudflare deploy`, mise à jour du statut `publié` dans `docs/blog-pipeline/README.md`.

- [ ] **Step 1 : Écrire la commande**

Créer `.claude/commands/rediger-article.md` :

```markdown
---
description: Rédige, illustre et publie en ligne un article de blog validé (Temps 2 de la routine). Va jusqu'au commit + push + deploy Cloudflare.
---

Tu publies un article de blog L'Esprit Bois à partir d'une proposition validée.
La proposition à traiter est indiquée par l'utilisateur (`$ARGUMENTS`) ou, à
défaut, demande-lui laquelle des propositions du dernier
`docs/blog-pipeline/AAAA-MM-JJ.md` il retient. Confirme le slug avant d'écrire.

## Déroulé
1. **Rédaction.** Lance le sous-agent `redacteur-bois` avec la proposition
   validée (titre, angle, mot-clé, plan H2, slug). Il écrit
   `app/blog/<slug>/page.tsx` avec des marqueurs `__IMAGE_A_SOURCER__` et fournit
   le texte de l'entrée `blog.ts`.
2. **Images.** Lance le sous-agent `iconographe-bois` sur le même fichier : il
   remplace les marqueurs par de vraies images (priorité chantier → libre de
   droits → IA), remplit `alt`/`caption`, fixe `COVER`, et rend la liste de
   provenance.
3. **Index.** Ajoute l'entrée `Article` en tête du tableau de `lib/data/blog.ts`
   (slug, titre, extrait, date du jour, categorie, image = COVER).
4. **Vérification build.** Lance `npm run build`. S'il échoue, corrige (souvent
   apostrophes JSX non échappées, `src` non résolu, import manquant) et relance.
   NE COMMITTE RIEN tant que le build ne passe pas.
5. **Contrôle qualité.** Repasse la « Checklist avant publication » de
   `docs/blog-pipeline/ligne-editoriale.md`. Vérifie qu'il ne reste aucun
   `__IMAGE_A_SOURCER__` ni commentaire `{/* IMAGE: ... */}`.
6. **Publication.** `git add` (article + blog.ts + images + docs), commit avec un
   message décrivant l'article, `git push origin main`.
7. **Deploy.** Lance `npx opennextjs-cloudflare deploy` (ou `npm run deploy`). Si
   les identifiants manquent, signale-le : l'article reste poussé, à déployer
   manuellement.
8. **Mémoire.** Passe le sujet à `publié` dans le tableau de
   `docs/blog-pipeline/README.md` et committe cette mise à jour.

## Garde-fous
- Ne publie qu'UN article par exécution, sauf demande explicite.
- Ne push/deploy jamais si le build échoue.
- Signale à l'utilisateur l'URL finale (`https://lesprit-bois.fr/blog/<slug>`).
```

- [ ] **Step 2 : Vérifier**

Run: `test -f .claude/commands/rediger-article.md && grep -q 'redacteur-bois' .claude/commands/rediger-article.md && grep -q 'iconographe-bois' .claude/commands/rediger-article.md && grep -q 'deploy' .claude/commands/rediger-article.md && echo OK`
Expected : `OK`

- [ ] **Step 3 : Commit**

```bash
git add .claude/commands/rediger-article.md
git commit -m "Ajoute la commande /rediger-article (rédaction + images + deploy)"
```

---

### Task 7: Routine planifiée + smoke test de bout en bout

**Files:**
- Aucun fichier de dépôt (la routine cron est créée via la skill `schedule`). Smoke test = production temporaire d'un article puis vérif build, sans le committer.

**Interfaces:**
- Consumes : commande `/veille-blog`, sous-agents, `npm run build`.
- Produces : une routine planifiée mardi & jeudi qui lance `/veille-blog` ; une preuve que la chaîne de rédaction produit un article compilable.

- [ ] **Step 1 : Smoke test — produire un article jetable**

Sur un sujet fixe de test (« Entretien d'une terrasse en bois en Gironde »,
slug `test-entretien-terrasse-bois`), enchaîne `redacteur-bois` puis
`iconographe-bois` puis l'ajout à `blog.ts`, comme le ferait `/rediger-article`,
MAIS sans committer.

- [ ] **Step 2 : Vérifier le build**

Run: `npm run build`
Expected : build Next.js réussi, avec la route `/blog/test-entretien-terrasse-bois` générée, sans erreur TypeScript/JSX, et aucun `__IMAGE_A_SOURCER__` restant.

- [ ] **Step 3 : Nettoyer le smoke test**

```bash
rm -rf app/blog/test-entretien-terrasse-bois public/images/blog/test-entretien-terrasse-bois
git checkout -- lib/data/blog.ts
```
Puis re-vérifier : `git status` ne montre aucun résidu de l'article de test.

- [ ] **Step 4 : Créer la routine planifiée**

Créer, via la skill `schedule` (agent cloud programmé), une routine récurrente :
- Fréquence : **mardi et jeudi ~8h (Europe/Paris)**.
- Action : lancer la commande `/veille-blog` dans ce dépôt.
- Portée : veille + écriture des propositions + notification uniquement (aucun
  push/deploy — c'est déjà le contrat de `/veille-blog`).

Vérifier ensuite que la routine est bien enregistrée (la lister via la skill
`schedule` / les outils de tâches planifiées) et noter son identifiant dans
`docs/blog-pipeline/README.md`.

- [ ] **Step 5 : Commit final**

```bash
git add docs/blog-pipeline/README.md
git commit -m "Enregistre la routine planifiée de veille blog (mardi/jeudi)"
```

---

## Self-Review

**Spec coverage** — chaque exigence de la spec est couverte :
- Veille d'actualité bois → Task 5 (`/veille-blog`, WebSearch) + Task 7 (cron).
- 2 propositions validées avant publication → Task 5 (écrit 2 propositions) ; validation humaine = déclenchement de Task 6.
- Publication directe en ligne (commit+push+deploy) → Task 6.
- Ratio texte/photos → Task 1 (charte) + Task 4 (iconographe) + Task 7 (build vérifie l'absence de marqueurs).
- SEO Libourne/Gironde → Global Constraints + Task 1 + Task 3.
- Sous-agents « rédacteur » et « picture » → Task 3 + Task 4.
- Anti-doublon / mémoire éditoriale → Task 2 + Task 5.
- Cron mardi/jeudi, deploy hors cron → Task 7 + garde-fous Task 5/6.

**Placeholder scan** — pas de TODO/TBD ; les contenus de fichiers sont fournis intégralement ; le gabarit long n'est pas recopié mais pointé sur `app/blog/carport-bois-guide/page.tsx` (référence concrète en dépôt, DRY).

**Type/nom consistency** — noms stables partout : sous-agents `redacteur-bois` / `iconographe-bois`, marqueur `__IMAGE_A_SOURCER__`, commentaire `{/* IMAGE: ... */}`, commandes `/veille-blog` / `/rediger-article`, dossier `docs/blog-pipeline/`, fichiers de propositions `AAAA-MM-JJ.md`.
