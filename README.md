# L'Esprit Bois — site vitrine

Site immersif de **L'Esprit Bois — créateur d'espaces extérieurs** (terrasses,
pergolas, constructions bois, carports, bardages). Refonte du site
`a-defrance.fr` avec la nouvelle identité.

Construit avec [Astro](https://astro.build) · déploiement prévu sur **Cloudflare Pages**.

## Démarrer

```bash
npm install        # dépendances
npm run dev        # serveur local  → http://localhost:4321
npm run build      # build de production → dist/
npm run preview    # prévisualiser le build
```

## Direction artistique

| | |
|---|---|
| Fond | Noir fusain `#0B0B0C` |
| Accent | Cuivre `#C67C3D` → `#E4A566` |
| Texte | Ivoire `#F3EEE4` |
| Le vivant | Vert olivier `#93B23F` |
| Titres | Fraunces (serif) · Labels : Archivo · Corps : Hanken Grotesk |

Signature : **la trame** — les lames verticales du logo, réutilisées en
révélation du hero, transitions et cadres de galerie.

## Modifier le contenu

Tout le contenu éditable est centralisé dans **[`src/data/site.ts`](src/data/site.ts)** :
coordonnées, métiers (textes + points), réalisations, démarche, chiffres.

## Remplacer les images par de vraies photos

Les visuels de `public/images/` sont des **placeholders de marque** (SVG générés).
Pour mettre vos vraies photos :

1. Déposez vos images dans `public/images/` (idéalement en `.webp` ou `.jpg`, ~1600×1000).
2. Dans `src/data/site.ts`, changez les chemins `image:` (ex. `/images/ma-terrasse.webp`).
3. Le hero utilise `public/images/hero.svg` → remplacez-le dans `src/components/Hero.astro`.

Pour régénérer les placeholders : `node scripts/gen-placeholders.mjs`.

## À finaliser avant mise en ligne

- [ ] Remplacer les placeholders par de vraies photos de chantiers
- [ ] Déposer le vrai fichier logo (`public/logo.svg` ou `.png`) et l'utiliser dans la nav
- [ ] Vérifier / mettre à jour les coordonnées et l'email de contact
- [ ] Compléter les mentions légales (SIRET, forme juridique, assurance décennale…)
- [ ] Brancher le formulaire de contact sur un vrai service (voir ci-dessous)

## Déploiement — Cloudflare Pages

Le site est **statique** : le dossier `dist/` peut être hébergé partout.

**Option A — via le tableau de bord Cloudflare :**
1. `npm run build`
2. Cloudflare Pages → *Create project* → *Direct upload* → glisser `dist/`.

**Option B — via Git (recommandé, déploiement automatique) :**
1. Pousser ce dépôt sur GitHub.
2. Cloudflare Pages → *Connect to Git* → sélectionner le repo.
3. Build command : `npm run build` · Output directory : `dist`.

**Formulaire de contact** (site statique → pas de serveur par défaut) :
ajouter une [Pages Function](https://developers.cloudflare.com/pages/functions/)
`functions/contact.ts` qui envoie l'email via Cloudflare Email Routing, ou
utiliser un service tiers. En attendant, le formulaire ouvre le logiciel de
messagerie du visiteur (`mailto:`).

## Domaine

1. Acheter le domaine (ex. `lespritbois.fr`) — idéalement via **Cloudflare Registrar**.
2. Cloudflare Pages → *Custom domains* → ajouter le domaine (DNS auto-configuré).
3. Mettre à jour `site:` dans [`astro.config.mjs`](astro.config.mjs) et l'URL du
   `Sitemap` dans [`public/robots.txt`](public/robots.txt).

## Structure

```
public/images/      visuels (placeholders SVG à remplacer)
scripts/            générateur de placeholders
src/
  data/site.ts      ← contenu éditable
  styles/           tokens + base globale
  layouts/Base.astro
  components/        Nav, Hero, Metiers, Realisations, Demarche, Atelier…
  pages/            index, contact, mentions-legales, savoir-faire/[slug]
```
