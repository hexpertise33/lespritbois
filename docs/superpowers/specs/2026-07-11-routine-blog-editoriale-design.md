# Routine éditoriale blog — L'Esprit Bois

**Date :** 2026-07-11
**Statut :** Conception validée (design approuvé par l'utilisateur)

## Objectif

Mettre en place une routine de production d'articles de blog **deux fois par
semaine (mardi & jeudi)** pour le site L'Esprit Bois (`lesprit-bois.fr`), sur les
thèmes des métiers et matériaux du bois et de l'aménagement extérieur (carport,
terrasse, pergola, poulailler, construction bois, etc.).

Chaque cycle :
1. propose **2 articles** issus d'une veille d'actualité ;
2. attend la **validation** de l'utilisateur ;
3. **publie** l'article retenu directement en ligne (commit + push + deploy
   Cloudflare) ;
4. respecte un **ratio équilibré texte/photos** et une **optimisation SEO ciblée
   Libourne / Gironde**.

## Contraintes et faits établis

- **Gabarit d'article existant** (à réutiliser tel quel) : chaque article est une
  page React complète `app/blog/<slug>/page.tsx` comprenant hero avec image de
  couverture, chapô « answer-first », sections `<h2>`, composants `Figure` /
  `DuoFigure`, tableau comparatif, FAQ `<details>`, section conclusion + CTA.
  Métadonnées via `buildMetadata` (`lib/metadata`), données structurées via
  `JsonLd` (BreadcrumbList + BlogPosting + FAQPage). Navigation via `SiteNav` /
  `SiteFooter`.
- **Index des articles** : `lib/data/blog.ts` — un objet `Article` par article
  (slug, titre, extrait, date, categorie, image).
- **Images** : stockées dans `/public/images`. Ordre de priorité retenu pour la
  routine : **(1) vraies photos de chantier** déjà présentes ou fournies →
  **(2) photos libres de droits** (Unsplash / Pexels, thème bois) → **(3) images
  générées par IA** en dernier recours seulement. La provenance de chaque image
  est tracée.
- **SEO** : ancrage local systématique **Libourne / Gironde** (déjà le patron des
  articles existants), auteur « David Bertrand, L'Esprit Bois », entreprise
  certifiée Qualibat, tél. 05 57 40 65 80.
- **Déploiement** : `opennextjs-cloudflare deploy` (nécessite identifiants
  git + Cloudflare). Non disponible dans un agent cloud autonome → le deploy se
  fait au moment de la validation, dans l'environnement authentifié de
  l'utilisateur.
- Pas d'agents `redacteur` / `picture` préexistants : ils sont créés par cette
  mise en place.

## Architecture — une routine en 2 temps

Le travail **autonome** (veille) est séparé du travail **avec l'utilisateur**
(rédaction + mise en ligne), parce que la validation humaine est obligatoire et
que le push/deploy exige des identifiants absents d'un agent cloud.

### Temps 1 — Veille & propositions (automatique, mardi & jeudi ~8h)

Déclencheur : **routine planifiée (cron)** les mardis et jeudis.

L'agent planifié, via la skill `/veille-blog` :
- effectue une **veille d'actualité bois** par recherche web : matériaux,
  métiers du bois, réglementation (RE2020, urbanisme, PLU), tendances
  d'aménagement extérieur, carport / terrasse / pergola / poulailler /
  construction bois, actualité marché Gironde / Nouvelle-Aquitaine ;
- **recoupe avec les articles déjà publiés** (`lib/data/blog.ts` + dossier
  `docs/blog-pipeline/`) pour éviter les doublons et assurer la variété des
  thèmes ;
- produit **2 propositions détaillées**, chacune avec : titre, angle éditorial,
  mot-clé principal + secondaires, plan des `<h2>`, nombre de photos prévu et
  source pressentie, opportunités de maillage interne ;
- **écrit ces propositions** dans `docs/blog-pipeline/AAAA-MM-JJ.md` ;
- **notifie l'utilisateur** (notification push).

Cet agent ne fait **que de la recherche et de l'écriture d'un fichier de
propositions** : aucun accès aux secrets, aucun push, aucun deploy.

### Temps 2 — Validation & publication (utilisateur présent)

L'utilisateur relit les 2 propositions, en choisit / ajuste une, puis lance la
skill `/rediger-article`, qui :
- **rédige l'article complet** dans le gabarit existant (hero, chapô
  answer-first, sections `<h2>`, `Figure`/`DuoFigure`, tableau comparatif, FAQ,
  conclusion + CTA), avec JSON-LD complet et SEO Libourne / Gironde ;
- **source les images** selon la priorité chantier → libre de droits → IA, en
  visant **~1 visuel toutes les 1 à 2 sections** (le ratio du gabarit actuel,
  ~5-6 images par article), avec `alt` descriptif et légendes ;
- ajoute l'entrée dans `lib/data/blog.ts` ;
- ajoute des **liens de maillage interne** vers les pages services et articles
  liés ;
- **vérifie le build** (`npm run build` ou preview) ;
- **commit + push sur `main` + `opennextjs-cloudflare deploy`** ;
- met à jour `docs/blog-pipeline/` (sujet marqué comme publié).

## Composants à créer

1. **Sous-agents dédiés** (`.claude/agents/`) :
   - `redacteur-bois.md` — rôle rédacteur : style, structure, ton, règles SEO
     locales, gabarit d'article, calqués sur les articles existants.
   - `iconographe-bois.md` — rôle « picture » : priorité de sourcing des images,
     ratio texte/photos, rédaction des `alt` et légendes, traçage de provenance.
2. **Skill de veille** `/veille-blog` — utilisée par l'agent planifié (Temps 1).
3. **Skill de rédaction** `/rediger-article` — publication complète (Temps 2),
   orchestre les 2 sous-agents.
4. **Routine planifiée** (cron) — mardi & jeudi ~8h, lance `/veille-blog`.
5. **Dossier `docs/blog-pipeline/`** — mémoire éditoriale : sujets publiés, à
   venir, calendrier, et fichiers de propositions datés. Inclut un
   `README.md` / `ligne-editoriale.md` documentant les thèmes, le ton, les
   règles SEO et le workflow.

## Flux de données

```
[Cron mardi/jeudi] → agent planifié → /veille-blog
      │  (WebSearch + lecture blog.ts + docs/blog-pipeline/)
      ▼
docs/blog-pipeline/AAAA-MM-JJ.md  +  notification push
      │
      ▼  (utilisateur relit et valide 1 sujet)
/rediger-article
      │  redacteur-bois → texte + structure + SEO
      │  iconographe-bois → images (chantier → stock → IA) + alt/légendes
      ▼
app/blog/<slug>/page.tsx  +  entrée lib/data/blog.ts  +  images /public/images
      │  (npm run build — vérif)
      ▼
git commit + push main  →  opennextjs-cloudflare deploy  →  EN LIGNE
      │
      ▼
docs/blog-pipeline/ mis à jour (sujet publié)
```

## Gestion des erreurs

- **Build échoue** au Temps 2 → ne pas committer ; corriger puis re-vérifier
  avant tout push/deploy.
- **Doublon de sujet** détecté → l'agent de veille écarte le sujet et en propose
  un autre.
- **Aucune vraie photo disponible** → descendre dans l'ordre de priorité (libre
  de droits, puis IA) et le signaler explicitement dans les légendes/provenance.
- **Deploy échoue** (identifiants manquants) → l'article reste commité/poussé ;
  signaler à l'utilisateur pour deploy manuel.

## Hors périmètre (YAGNI)

- Pas de CMS ni d'interface d'admin : les articles restent des pages React
  versionnées en git.
- Pas de génération automatique sans validation humaine.
- Pas de gestion d'identifiants Cloudflare dans le cron (deploy = Temps 2 only).
- Pas de traduction multilingue.

## Critères de réussite

- Une routine déclenchable mardi & jeudi qui produit 2 propositions d'articles
  issues d'une veille réelle.
- Un chemin de validation → publication qui met un article en ligne au bon
  gabarit, correctement maillé et optimisé Libourne/Gironde.
- Un ratio texte/photos comparable aux articles existants.
- Une mémoire éditoriale évitant les doublons dans le temps.
