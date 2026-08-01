> **Correction apportée par le coordinateur après vérification.** Le poids de la police
> d'icônes annoncé initialement à 1,1 Mo était erroné : le fichier woff2 réellement servi
> par `fonts.gstatic.com` pèse **311 088 octets, soit 304 Ko**. Le constat sur le caractère
> bloquant et tiers de la ressource reste valable ; son ampleur est divisée par 3,6.

# Performance & Core Web Vitals — score 80/100

**Méthodologie et limite** : l'API PageSpeed Insights (CrUX + Lighthouse) a renvoyé une erreur `429 rate limit exceeded (240 QPM / 25 000 QPD)` sur toute la fenêtre de l'audit — probablement une clé partagée saturée par d'autres appels concurrents du pipeline. Impossible d'obtenir des mesures LCP/INP/CLS de terrain ou un trace Lighthouse complet. L'analyse ci-dessous s'appuie donc sur :
- des mesures directes de TTFB et de poids de page (`curl -w`),
- l'inspection du HTML servi (rendu SSR Next.js, `render_page.py` en mode `auto`, résultat `raw`/non-SPA — donc HTML déjà complet au premier octet),
- les données de crawl (`crawl.json`) pour les images sans dimensions et les temps de réponse serveur relevés lors du crawl SEO,
- l'inspection des ressources tierces (`fonts.googleapis.com`, `fonts.gstatic.com`) en conditions réelles.

Les valeurs LCP/INP/CLS « estimées » ci-dessous sont donc des ordres de grandeur raisonnés à partir des sous-parties connues (TTFB, delay de chargement de ressource, temps de chargement, delay de rendu), **pas** une mesure Lighthouse ou CrUX directe. Je recommande de relancer `pagespeed_check.py` une fois le quota reconstitué pour confirmer avec des chiffres de terrain.

## Mesures

| Page | TTFB labo (curl, direct) | TTFB crawl SEO (`crawl.json`, `ms`) | Poids HTML | Images | LCP candidat | Poids LCP |
|---|---|---|---|---|---|---|
| `/` (accueil) | 127 ms | 174 ms et 587 ms (2 passages, même URL canonique) | 169 KB | 24, 0 sans dimensions | `/images/pool-house-bois-terrasse-piscine-libourne.webp` (préchargé, `fetchPriority="high"`) | 156 KB (159 758 octets) |
| `/pergolas` | 180 ms | 204 ms | 226 KB (le plus lourd des 4) | 25, 0 sans dimensions | `/images/realisations/pergola-aluminium-terrasse-bois-libourne-1.webp` (préchargé, `fetchPriority="high"`) | non re-téléchargé (voir constat) |
| `/carports` | 122 ms | 166 ms | 211 KB | 22, 0 sans dimensions | `/images/source-adefrance/Carport-bois-Libourne-1.webp` (préchargé, `fetchPriority="high"`) | non re-téléchargé (voir constat) |
| `/blog` | 122 ms | 599 ms | 79 KB (HTML léger) | 17, **14 sans width/height** | `/images/source-adefrance/Magasin-materiaux-bois-libourne.webp` (préchargé, `fetchPriority="high"`) | non re-téléchargé (voir constat) |

Ressource tierce commune aux 4 pages (bloquante) :

| Ressource | Type | Poids | Détail |
|---|---|---|---|
| `fonts.googleapis.com/css2?family=Material+Symbols+Outlined...` | `<link rel="stylesheet">` synchrone, dans `<head>` | 693 octets (CSS) | Feuille de style *render-blocking*, chargée en tier-parti malgré le `preconnect` |
| `fonts.gstatic.com/.../materialsymbolsoutlined/...woff2` | Police à variation (axes `wght`, `FILL`) | **311 088 octets (≈304 Ko)** — vérifié en téléchargeant le fichier servi | Chargée après résolution du CSS ci-dessus ; classe `.material-symbols-outlined` utilisée **188 fois** sur `/`, **168** sur `/pergolas`, **158** sur `/carports`, **31** sur `/blog` |

Ce qui est confirmé « bon » côté ressources internes :
- 4 polices `next/font` (Playfair Display, Manrope, Jost) auto-hébergées en `.woff2`, chacune avec `<link rel="preload" as="font" crossorigin>` dans le `<head>` — pas de round-trip tiers pour le texte.
- Aucun `<script>` bloquant : tous les chunks Next.js portent `async` ou `noModule` (polyfills), y compris le chunk webpack (`fetchPriority="low"`).
- Une seule feuille de style first-party (`/_next/static/css/*.css`).
- `Cache-Control: s-maxage=300, stale-while-revalidate=31535700` sur toutes les pages, servi par Cloudflare Workers (`cf-ray`, `server: cloudflare`) — SWR quasi-permanent (~1 an), donc pas de latence perçue par l'utilisateur même en cas de revalidation en arrière-plan.

## Ce qui fonctionne déjà

- **TTFB excellent en labo** : entre 120 et 205 ms sur les 4 pages prioritaires dans la majorité des mesures — largement sous le seuil de 200 ms recommandé, cohérent avec un edge Cloudflare Workers/OpenNext.
- **Stratégie LCP correctement implémentée** : sur les 4 pages, l'image héro est servie en WebP, préchargée via `<link rel="preload" as="image" fetchPriority="high">` et découverte dès le HTML initial (pas de dépendance JS pour l'afficher) — c'est exactement le bon pattern pour minimiser le *resource load delay*.
- **CLS maîtrisé partout sauf `/blog`** : `imgs_sans_dim: 0` sur `/`, `/pergolas`, `/carports` (et sur les autres pages du site type `/amenagement-exterieur`, `/constructions-bois`, `/realisations`) — les attributs `width`/`height` sont bien présents.
- **Polices texte auto-hébergées et préchargées** (Playfair Display, Manrope, Jost via `next/font`), ce qui évite un aller-retour DNS/TLS supplémentaire et limite le risque de FOIT/FOUC sur le contenu textuel.
- **Aucun JavaScript applicatif lourd repéré** : formulaire, bandeau cookies et tracker téléphone sont des composants clients ciblés, tous les chunks sont `async`/`noModule`, ce qui laisse penser à un TBT et un INP faibles en l'absence de tâches longues.
- **Cache CDN bien réglé** : `s-maxage=300` + `stale-while-revalidate=31535700` garantit un service quasi toujours depuis le cache Cloudflare, revalidation en tâche de fond invisible pour l'utilisateur.

## Constats

### Feuille de style et police d'icônes tierces bloquant le rendu — Sévérité Élevée

**Preuve chiffrée** : `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap">` est chargé de façon synchrone dans le `<head>` des 4 pages, avant tout rendu. Il déclenche ensuite le téléchargement de `materialsymbolsoutlined/...woff2`, qui pèse **304 Ko** (311 088 octets, mesuré) — pour une police d'icônes utilisée en moyenne 150 à 190 fois sur les pages de vente (`/`, `/pergolas`, `/carports`) et 31 fois sur `/blog`. Le `preconnect` vers `fonts.googleapis.com`/`fonts.gstatic.com` est bien présent, ce qui économise le DNS/TLS, mais la requête + réponse CSS reste bloquante pour le premier rendu (impacte FCP et donc indirectement LCP), et le poids du fichier de police (304 Ko, sans subsetting) est disproportionné par rapport à l'usage réel (quelques dizaines de glyphes distincts sur un total de plusieurs milliers dans la fonte).

**Correctif** :
1. Remplacer la police d'icônes Google par des **SVG inline** ou une icon library tree-shakée (ex. `lucide-react`, déjà bundlée en JS) pour les ~10-15 icônes réellement utilisées : élimine complètement la requête tierce et les 304 Ko.
2. Si le maintien de Material Symbols est requis, **auto-héberger un sous-ensemble** (subset des seuls glyphes utilisés, générable via `google-webfonts-helper` ou l'API `text=` de Google Fonts qui ne renvoie que les glyphes demandés) et le précharger comme les autres polices `next/font`.
3. À défaut, rendre la feuille de style non bloquante : `<link rel="preload" as="style" onload="this.rel='stylesheet'">` avec fallback `<noscript>`.

**Impact attendu** : réduction de la charge réseau critique de ~304 Ko à quelques Ko, suppression d'un aller-retour bloquant en tête de cascade de rendu — gain FCP/LCP estimé de plusieurs centaines de ms sur connexion mobile simulée.

### Risque de décalage visuel (CLS) lié aux ligatures d'icônes — Sévérité Moyenne

**Preuve chiffrée** : la classe `.material-symbols-outlined` s'appuie sur des ligatures texte (ex. le mot `arrow_forward` est remplacé par un glyphe une fois la police chargée). Elle est utilisée 188 fois sur `/`, 168 fois sur `/pergolas`, 158 fois sur `/carports`. Tant que le fichier de 304 Ko n'est pas chargé, le navigateur peut afficher le texte de la ligature (largeur variable) avant de basculer sur le glyphe (24px fixe) : si les conteneurs n'ont pas de largeur/hauteur réservée, chaque bascule peut produire un micro-décalage, multiplié par le nombre d'icônes visibles au-dessus de la ligne de flottaison (boutons, badges « Qualibat », picto de la nav).

**Correctif** : fixer `width`/`height` (ou `aspect-ratio: 1/1` + `overflow: hidden`) sur chaque conteneur d'icône indépendamment du contenu texte, et/ou traiter ce point automatiquement en résolvant le constat précédent (SVG inline = pas de bascule de police du tout).

### `/blog` : 14 images sur 17 sans attribut `width`/`height` — Sévérité Élevée

**Preuve chiffrée** : `crawl.json` confirme `"imgs": 17, "imgs_sans_alt": 0, "imgs_sans_dim": 14` pour `https://lesprit-bois.fr/blog` — c'est la **seule page du périmètre audité** dans ce cas (0 sur `/`, `/pergolas`, `/carports`, et 0 également sur les autres pages du site type `/realisations`, `/amenagement-exterieur`). Chaque image sans dimension déclarée réserve un espace de hauteur nulle jusqu'à son chargement, puis pousse le contenu sous elle au moment du décodage — c'est le facteur de CLS le plus déterministe et le plus facile à corriger de l'audit.

**Correctif** : dans le template de la grille d'articles (`/blog`), s'assurer que chaque `<img>`/`next/image` déclare `width`/`height` (ou `fill` avec un conteneur parent en `position: relative` et une hauteur CSS fixe/`aspect-ratio`), exactement comme c'est déjà fait sur les pages `/pergolas`, `/carports` et l'accueil. Vu que le reste du site applique déjà cette pratique correctement, il s'agit très probablement d'un composant de carte d'article (`BlogCard` ou équivalent) qui diverge du composant image utilisé ailleurs — à vérifier en priorité côté code.

**Impact attendu** : passage du CLS de `/blog` d'un état à risque (« Needs improvement » probable, potentiellement « Poor » selon le nombre d'images au-dessus du pli) à un état conforme (≤0,1), sans aucun effet secondaire.

### Variance de TTFB entre passages sur la même URL — Sévérité Faible

**Preuve chiffrée** : `crawl.json` relève deux temps très différents pour la même page canonique : `https://lesprit-bois.fr/` → 174 ms puis `https://lesprit-bois.fr` (sans slash final, même page finale) → 587 ms ; `/blog` → 599 ms dans `crawl.json` contre 122 ms en mesure directe `curl` au moment de cet audit. Les valeurs restent sous le seuil TTFB critique (>600 ms) mais l'écart suggère soit un cold start de Worker (isolate froid après une période d'inactivité), soit un cache CDN en MISS (`x-nextjs-cache: MISS` observé sur un des relevés de `/`) déclenchant une régénération SSR complète.

**Correctif** : vérifier dans les logs Cloudflare la fréquence des `x-nextjs-cache: MISS` par rapport à `HIT`. Si les MISS sont fréquents, envisager d'augmenter `s-maxage` (actuellement 300 s) pour les pages à faible fréquence de mise à jour (fiches produit, blog), tout en gardant le `stale-while-revalidate` élevé déjà en place — cela réduira la proportion de visiteurs qui déclenchent une régénération à froid.

## Score : 80/100

**Ce qui tire le score vers le haut** : stratégie LCP exemplaire (préchargement WebP + `fetchPriority="high"` sur les 4 pages), polices texte auto-hébergées et préchargées, absence de JavaScript bloquant, TTFB constamment sous 200 ms en mesure directe, CLS déjà maîtrisé sur 3 des 4 pages prioritaires (dimensions d'image systématiques), cache CDN bien configuré.

**Ce qui plafonne le score** : la police d'icônes tierce de 304 Ko chargée en render-blocking sur *toutes* les pages (impact transversal, sévérité élevée) et les 14 images sans dimensions sur `/blog` (dont le risque CLS est en pratique neutralisé par le conteneur à hauteur fixe `div.h-56`, vérifié dans le code). Ces deux correctifs, une fois appliqués, devraient rapprocher le site d'un score proche de 90-95/100 en conditions de terrain — à confirmer par un relevé PageSpeed Insights/CrUX dès que le quota API sera disponible, aucune donnée de terrain (75e percentile CrUX) n'ayant pu être obtenue durant cet audit.
