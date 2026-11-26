# Plan d'action SEO — lesprit-bois.fr — 22 août 2026

Issu de [AUDIT-2026-08-22.md](AUDIT-2026-08-22.md). Score actuel : **88/100**.
Estimation à l'issue de la phase 3 : **93–95/100**, et un SEO local à 88+.

Les phases sont ordonnées par **rapport effet/effort**, pas par sévérité.

---

## Phase 1 — Reprendre la mesure (30 min, à faire en premier)

Rien ne devrait être optimisé tant qu'on ne voit pas les positions réelles.

### 1.1 Installer les clés API Google sur le poste

```bash
mkdir -p ~/.config/claude-seo && cat > ~/.config/claude-seo/google-api.json <<'EOF'
{ "api_key": "VOTRE_CLE_GOOGLE_CLOUD" }
EOF
```

La clé se crée sur console.cloud.google.com → API & Services → Credentials, en activant
**PageSpeed Insights API** et **Chrome UX Report API** (les deux sont gratuites, sans quota facturé).
Cela débloque immédiatement les CWV de terrain et les scores Lighthouse.

Pour Search Console et GA4, il faut en plus un OAuth :

```bash
python3 ~/.claude/plugins/cache/agricidaniel-claude-seo/claude-seo/2.2.0/scripts/google_auth.py --auth --creds ~/Downloads/client_secret.json
```

**Gain** : au prochain audit, on croise enfin qualité × impressions × clics × position.
On saura quelles pages Google a réellement indexées — et si les 33 articles servent à quelque chose.

### 1.2 Vérifier l'indexation des 45 URL

Une fois GSC branché, `gsc_inspect.py` dira page par page si elle est indexée, découverte-non-indexée
ou exclue. **C'est la seule façon de savoir si la cadence quotidienne produit des pages indexées ou du
contenu que Google ignore.**

---

## Phase 2 — Arrêter la dérive (2 h, semaine du 24 août)

### 2.1 Poser un garde-fou de longueur dans `buildMetadata`

C'est **la** correction structurante : elle empêche le problème de revenir, au lieu de le nettoyer.

Dans [lib/metadata.ts](../lib/metadata.ts), en tête de `buildMetadata` :

```ts
// Bornes SERP : au-delà, Google tronque. En dev on échoue fort, en prod on
// laisse passer pour ne jamais casser une page publiée.
if (process.env.NODE_ENV !== 'production') {
  const t = title.length, d = description.length;
  if (t > 65 || t < 30) throw new Error(`[SEO] title ${t} car. (30–65) sur ${path} : "${title}"`);
  if (d > 160 || d < 110) throw new Error(`[SEO] meta ${d} car. (110–160) sur ${path} : "${description}"`);
}
```

Le `next build` échouera désormais sur toute page hors bornes — la routine éditoriale ne pourra plus
publier un title de 90 caractères sans s'en apercevoir.

### 2.2 Réécrire les 22 balises hors bornes

**16 metas à raccourcir** (259 → 160 max) et **6 titles** (90 → 65 max), listées dans l'audit § H1/H2.
Méthode : couper la dernière proposition, garder le mot-clé principal et la mention géographique dans
les 120 premiers caractères.

Exemple, `/blog/protection-solaire-brise-soleil-orientable` :

| | Actuel | Proposé |
|---|---|---|
| title | Brise-soleil orientable ou store extérieur : protection solaire en Gironde \| L'Esprit Bois **(90)** | Brise-soleil orientable ou store : que choisir ? \| L'Esprit Bois **(60)** |

**13 metas trop courtes** (`/pergolas` 106, `/carports` 108…) : les étoffer jusqu'à 150–158 en ajoutant
un bénéfice concret et la commune. Faible priorité, mais c'est de la surface de SERP gratuite.

### 2.3 Corriger l'article daté du futur

`/blog/claustra-bois-separation-jardin` → ramener `datePublished` et `dateModified` au 22/08 (ou plus
tôt). Puis **ajouter un contrôle dans la routine** : refuser toute date de publication supérieure à
`aujourd'hui`. La même cause reproduira le même effet dès le prochain run.

### 2.4 Masquer les icônes aux robots et aux lecteurs d'écran

Sur le composant qui rend les Material Symbols, ajouter `aria-hidden="true"` :

```tsx
<span className="material-symbols-outlined" aria-hidden="true">arrow_forward</span>
```

**187 ancres nettoyées d'un seul changement**, sur les 45 pages. Bénéfice double : ancres internes
propres pour Google, et fin du « Voir la gamme arrow forward » annoncé par les lecteurs d'écran.

### 2.5 Supprimer les 6 fichiers dupliqués par iCloud

```bash
git rm "components/LandingPergolaHeader 2.tsx" "components/LandingPergolaStickyBar 2.tsx" \
       "components/LandingPergolaForm 2.tsx" "components/LandingPergolaFooter 2.tsx" \
       "app/devis-pergola/page 2.tsx" "docs/blog-pipeline/README 2.md"
```

*(Vérifier d'abord qu'aucun n'est plus récent que son jumeau — `ls -l` sur chaque paire.)*

### 2.6 Passer `/devis-pergola` en `noindex, follow`

Dans [app/devis-pergola/page.tsx](../app/devis-pergola/page.tsx), le `nofollow` prive `/pergolas` et
`/contact` du signal des liens de la landing. Le `noindex` suffit à la tenir hors de l'index.

**Score attendu après phase 2 : 88 → 92.**

---

## Phase 3 — Les gains qui rapportent vraiment (semaines 35–37)

### 3.1 Créer la page auteur — le levier E-E-A-T le plus rentable

Créer `/auteur/david-bertrand` : parcours, années de métier, certification Qualibat, chantiers
signés, photo, et la liste des 33 articles écrits.

Puis, dans le `BlogPosting` de chaque article, remplacer le `Person` anonyme par une référence :

```json
"author": { "@id": "https://lesprit-bois.fr/auteur/david-bertrand#person" }
```

et déclarer le nœud une fois, sur la page auteur :

```json
{ "@type": "Person", "@id": "https://lesprit-bois.fr/auteur/david-bertrand#person",
  "name": "David Bertrand",
  "jobTitle": "Charpentier, constructeur bois",
  "url": "https://lesprit-bois.fr/auteur/david-bertrand",
  "worksFor": { "@id": "https://lesprit-bois.fr/#entreprise" },
  "sameAs": ["https://www.linkedin.com/in/…"] }
```

**Pourquoi c'est le meilleur rapport effort/effet** : 33 articles gagnent d'un coup un auteur
vérifiable. C'est exactement ce que les *quality raters* de Google cherchent sur du contenu YMYL-adjacent
(réglementation, urbanisme, sécurité), et ce qu'un moteur IA cite en priorité.

### 3.2 Compléter `sameAs` et ajouter `hasMap`

Sur l'entité `#entreprise` de l'accueil :

```json
"sameAs": [
  "https://www.facebook.com/lespritbois33",
  "https://www.instagram.com/lespritbois",
  "https://www.google.com/maps/place/?q=place_id:VOTRE_PLACE_ID",   ← fiche GBP
  "https://www.pagesjaunes.fr/pros/…",
  "https://www.qualibat.com/entreprise/…",
  "https://www.linkedin.com/company/…"
],
"hasMap": "https://www.google.com/maps/place/?q=place_id:VOTRE_PLACE_ID"
```

Chaque URL ajoutée est une corroboration externe de l'entité. C'est le seul High resté ouvert depuis
le 1er août, et il ne coûte que le temps de créer les profils manquants.

### 3.3 Ouvrir 3 pages de zone — la plus grosse opportunité manquée

Bordeaux est cité **6 fois** sur tout le site. C'est 800 000 habitants à 35 minutes, et c'est là qu'est
le volume de recherche. Trois pages à créer, dans cet ordre :

| Page | Requêtes visées | Contenu réel disponible |
|---|---|---|
| `/pergola-bioclimatique-bordeaux` | pergola bioclimatique Bordeaux, pergola alu Bordeaux métropole | 3 chantiers pergola en photos + FAQ urbanisme métropole |
| `/terrasse-bois-saint-emilion` | terrasse bois Saint-Émilion, Libournais | déjà 26 mentions Saint-Émilion à recycler |
| `/constructeur-ossature-bois-gironde` | constructeur maison ossature bois Gironde | chantiers Rauzan, Clérac, Capian déjà racontés |

**Règle absolue** : pas de duplication de gabarit. Chaque page doit porter un **vrai chantier de la
zone**, avec ses photos, ses contraintes de PLU locales et sa durée. Sinon c'est du *doorway page* et
Google le sanctionne. Le matériau existe déjà dans `/realisations` — il s'agit de le redéployer, pas
d'inventer.

En parallèle, enrichir `areaServed` du JSON-LD :

```json
"areaServed": [
  {"@type":"City","name":"Libourne"}, {"@type":"City","name":"Bordeaux"},
  {"@type":"City","name":"Saint-Émilion"}, {"@type":"City","name":"Coutras"},
  {"@type":"City","name":"Castillon-la-Bataille"},
  {"@type":"AdministrativeArea","name":"Gironde"}
]
```

### 3.4 Rééquilibrer la routine éditoriale

**Recommandation : passer de 7 articles/semaine à 2**, et réaffecter le temps libéré aux pages
commerciales et aux pages de zone.

Trois raisons, dans l'ordre d'importance :

1. **Le maillage ne suit pas.** Les articles récents reçoivent 2–3 liens internes contre 19–45 pour les
   pages de gamme. Publier plus vite qu'on ne maille produit des pages quasi orphelines.
2. **Le retour commercial est indirect.** 33 pages informationnelles pour 5 pages qui vendent :
   un visiteur blog est à 2 clics de `/contact` (article → gamme → contact).
3. **Le rythme est un signal.** 3 500 mots/jour pour un artisan seul correspond au profil que Google
   décrit sous *scaled content abuse*. Le contenu est sourcé et honnête — mais la cadence, elle,
   se voit dans le sitemap.

Ajouter à la routine une **étape de maillage rétroactif** : à chaque publication, insérer 2 liens
contextuels depuis des articles anciens vers le nouveau. Coût : 5 minutes. Effet : plus aucun orphelin.

### 3.5 Relancer la collecte d'avis

6 avis depuis le 1er août, aucun nouveau en trois semaines, alors que `docs/collecte-avis.md` existe.
Concrètement : un SMS avec le lien direct « laisser un avis » envoyé à la réception de chaque chantier.
Objectif réaliste : **15 avis d'ici fin octobre**. C'est le facteur n°1 du classement dans le pack local.

**Score attendu après phase 3 : 92 → 95. SEO local : 78 → 88.**

---

## Phase 4 — Confort et finitions (backlog)

- **`srcset` responsive sur les images.** `unoptimized: true` est un choix assumé et défendable
  (LCP à 1,14 s le prouve). Si vous voulez le dernier point : générer 3 largeurs (480/960/1440) au
  build et poser `sizes`, ou activer Cloudflare Image Resizing. Gain estimé : −60 % de data mobile
  sur 2,2 Mo. Aucun effet sur la LCP actuelle, qui est déjà excellente.
- Convertir `pergola-bois-chevrons-enfilade.jpg` (193 Ko) en WebP.
- Recompresser les deux `source-adefrance` > 220 Ko.
- Réduire à 2–3 le nombre de polices préchargées (136 Ko sur l'accueil, plus que les images du 1er écran).
- Passer `about` des `BlogPosting` de chaînes à des entités `Thing`.
- Ajouter un lien contextuel vers `/plan-du-site` (0 aujourd'hui hors pied de page).

---

## Récapitulatif : par où commencer lundi

| # | Action | Effort | Effet |
|---|---|---|---|
| 1 | Clés API Google (§1.1) | 30 min | **Débloque toute la mesure** |
| 2 | Garde-fou longueur dans `buildMetadata` (§2.1) | 15 min | **Empêche la dérive de revenir** |
| 3 | `aria-hidden` sur les icônes (§2.4) | 10 min | 187 ancres nettoyées |
| 4 | Date de l'article du futur (§2.3) | 5 min | Corrige une anomalie visible |
| 5 | Réécrire les 22 balises (§2.2) | 2 h | 22 pages mieux affichées en SERP |
| 6 | Page auteur + `@id` (§3.1) | 3 h | **33 articles gagnent un auteur vérifiable** |
| 7 | `sameAs` + `hasMap` (§3.2) | 1 h | Seul High ouvert depuis le 1er août |
| 8 | 3 pages de zone (§3.3) | 2 j | **La plus grosse opportunité non exploitée** |

Les quatre premières lignes tiennent en **une heure** et valent à elles seules 3 points de score.

---

# État d'exécution — 22 août 2026, fin de journée

**Score : 88 → 94 / 100.** Six commits, trois déploiements, chacun validé sur son
URL de prévisualisation avant promotion à 100 %.

| Catégorie | Matin | Phase 2 | **Phase 3** |
|---|---|---|---|
| SEO technique | 95 | 98 | **98** |
| Qualité de contenu | 82 | 83 | **92** |
| On-page & maillage | 84 | 93 | **95** |
| Données structurées | 92 | 92 | **97** |
| Performance (CWV) | 90 | 90 | **90** |
| Recherche IA (GEO) | 88 | 88 | **95** |
| Images | 88 | 88 | **88** |
| **Total** | **88** | **90,7** | **94,3** |

## Fait

- **Phase 1** — ✗ non faite. Les clés API Google restent à installer ; c'est la
  seule action de la liste qui dépend d'un compte et non du code.
- **Phase 2** — ✓ intégralement. Garde-fou de longueur (vérifié en sabotant
  volontairement une balise : build en code 1), 30 balises réécrites, 428 icônes
  masquées, `noindex, follow`. Les deux constats restants étaient caducs :
  l'article daté du futur avait été dépublié en amont par une autre session, et
  les « 6 fichiers dupliqués » n'existaient que dans l'ancien dossier iCloud —
  erreur de périmètre de l'audit, corrigée dans le rapport.
- **Phase 3** — ✓ sauf la relance des avis (3.5), qui ne dépend pas du code.
  Page auteur avec nœud `Person` unique référencé par les 32 articles, `sameAs`
  + `hasMap` + `areaServed` à 15 entrées, cadence ramenée à deux articles par
  semaine avec maillage rétroactif obligatoire, et trois pages de zone.

## Écarts assumés par rapport au plan

**Les zones ne sont pas celles annoncées.** Le plan proposait Bordeaux,
Saint-Émilion et Gironde. Vérification faite, **aucun des douze chantiers de
`/realisations` n'est à Bordeaux ni à Saint-Émilion** : écrire ces pages aurait
produit les doorway pages contre lesquelles le plan lui-même mettait en garde.
Les zones suivent donc la matière réelle — Entre-deux-Mers (5 chantiers),
ossature bois en Gironde (3), métropole bordelaise (1, et la page le dit).

**PagesJaunes n'entre pas dans le `sameAs`.** La seule fiche à l'adresse de
l'atelier est au nom de « Les A de France », avec un autre téléphone
(06 35 48 43 92) et un autre site (a-defrance.fr). La déclarer identique aurait
créé une incohérence de NAP au lieu de la corroboration recherchée. Il n'existe
aucune fiche PagesJaunes au nom de L'Esprit Bois.

## Reste à faire

| # | Action | Qui |
|---|---|---|
| 1 | Clés API Google (§1.1) — débloque CrUX, GSC et GA4 | David (compte) |
| 2 | Relire les trois pages de zone : contextes de secteur déduits, pas dictés | David |
| 3 | Créer une fiche PagesJaunes au nom de L'Esprit Bois, puis l'ajouter au `sameAs` | David |
| 4 | Relance de la collecte d'avis (6 depuis le 1er août) | David |
| 5 | `srcset` responsive, WebP résiduels, polices préchargées (phase 4) | backlog |
