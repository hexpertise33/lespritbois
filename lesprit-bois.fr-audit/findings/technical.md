# SEO technique — score 84/100

Audit réalisé le 01/08/2026 sur https://lesprit-bois.fr (Next.js + Cloudflare Workers/OpenNext). Sources : crawl.json (26 requêtes, 24 pages uniques + 1 doublon home + 1 404), fetch direct de robots.txt, sitemap.xml, en-têtes HTTP, et inspection du HTML rendu.

## Ce qui fonctionne déjà

- **HTTPS et redirections de domaine propres** : `http://` → 301 → `https://lesprit-bois.fr/`, et `www.lesprit-bois.fr` (http et https) → 301/301 → `https://lesprit-bois.fr/`. Un seul domaine canonique fait autorité.
- **Trailing slash sur les sous-pages géré par redirection 308** : `/carports/`, `/pergolas/`, `/blog/carport-bois-guide/` etc. redirigent proprement vers la version sans slash (comportement par défaut de Next.js App Router).
- **robots.txt permissif et propre** : `User-agent: *` / `Allow: /` + directive `Sitemap:` présente, aucun blocage accidentel.
- **Sitemap.xml cohérent avec le crawl** : les 24 URLs du sitemap correspondent exactement aux 24 pages indexables trouvées lors du crawl (aucun écart, aucune page orpheline détectée côté sitemap/crawl).
- **`lastmod` renseigné sur les articles de blog**, absent (mais non requis) sur les pages statiques.
- **Balises meta robots cohérentes** : `index, follow, max-image-preview:large, max-snippet:-1` sur toutes les pages indexables, aucun `noindex` parasite.
- **Canonicals auto-référentes correctes sur toutes les pages internes** (sauf la home, voir constat dédié).
- **En-têtes de sécurité solides et homogènes sur tout le site** : HSTS (`max-age=15552000; includeSubDomains`), `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` restrictive (geolocation, microphone, camera, interest-cohort désactivés).
- **Cache-Control ISR bien réglé** : `s-maxage=300, stale-while-revalidate=31535700` sur les pages HTML (régénération Cloudflare/Next toutes les 5 min, contenu jamais périmé pour l'utilisateur), `public, max-age=3600` sur le sitemap.
- **Rendu server-side natif** : `is_spa: false`, HTML complet dès la réponse brute (pas de dépendance au JS pour le contenu), balises `<title>`, meta description, JSON-LD et texte visible tous présents dans le HTML source. Aucun besoin de rendu JS pour l'indexation.
- **JavaScript non bloquant** : tous les scripts Next.js portent `async`, `polyfills` en `noModule` — pas de render-blocking JS dans le `<head>`.
- **Image LCP optimisée** : l'image héro de la home a `fetchPriority="high"`, `width`/`height` explicites, format WebP ; les images sous la ligne de flottaison sont en `loading="lazy"`.
- **0 image sans attribut `alt`** sur les 24 pages crawlées (bon point accessibilité + SEO image).
- **Balisage structuré (JSON-LD) riche et cohérent** : `GeneralContractor` + `WebSite` sur la home (NAP complet, géo-coordonnées, `openingHoursSpecification`, `hasCredential` Qualibat, `areaServed`), `Service` + `FAQPage` + `BreadcrumbList` sur les 4 pages piliers, `BlogPosting` + `FAQPage` + `BreadcrumbList` sur les 15 articles, `CollectionPage` + `BreadcrumbList` sur /realisations.
- **`lang="fr"`** correctement déclaré sur `<html>`, viewport mobile (`width=device-width, initial-scale=1`) présent partout.
- **Pas de pagination ni de paramètres d'URL parasites** détectés (aucun `?page=`, `?utm=` indexé).
- **Site mono-langue** : pas de hreflang requis, aucune configuration erronée à corriger.

## Constats

### Absence de Content-Security-Policy (CSP) — Sévérité : Moyenne
**Preuve** : sur toutes les réponses inspectées (home, `/blog/carport-bois-guide`, sitemap.xml), aucun en-tête `content-security-policy` n'est renvoyé, alors que HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy et Permissions-Policy sont bien présents.
**Correctif** : ajouter une CSP au minimum en mode `report-only` via le middleware Next.js ou une règle Cloudflare Transform Rule (`Content-Security-Policy`), en autorisant explicitly les domaines utilisés (Google Fonts, Google Tag Manager `googletagmanager.com`, `googleapis.com`/`gstatic.com`, Cloudflare). Ce n'est pas un facteur de classement direct mais réduit le risque XSS/clickjacking et améliore le score sécurité d'audits comme Mozilla Observatory.

### Canonical de la page d'accueil incohérent avec l'URL réellement utilisée — Sévérité : Faible
**Preuve** : la home est accessible en `https://lesprit-bois.fr/` (avec slash, c'est l'URL indexée dans le sitemap et utilisée par tous les liens internes `href="/"`), mais la balise canonique renvoyée dans le `<head>` pointe vers `https://lesprit-bois.fr` **sans slash final** (`<link rel="canonical" href="https://lesprit-bois.fr"/>`) — vérifié identique que la page soit requêtée avec ou sans slash. Il n'y a pas de redirection 301/308 qui unifie les deux formes (`curl --max-redirs 0 https://lesprit-bois.fr` renvoie directement `200`, pas de redirection vers la version avec slash), donc les deux variantes de la home coexistent en `200 OK` avec un canonical qui diverge de l'URL sitemap/liens internes.
**Correctif** : soit ajouter une redirection 308 de `https://lesprit-bois.fr` (sans slash) vers `https://lesprit-bois.fr/` (avec slash) pour s'aligner sur le comportement déjà en place sur toutes les autres pages (qui font l'inverse : slash → sans slash), soit — plus simple côté code — corriger la génération du canonical de la home pour qu'il inclue le slash final et matche exactement l'URL du sitemap. Choisir une seule convention et l'appliquer partout (actuellement : sous-pages sans slash + canonical sans slash, mais home avec slash + canonical sans slash — l'incohérence porte uniquement sur la home).

### URL `/bardages` retournant 404 détectée pendant le crawl — Sévérité : Faible
**Preuve** : le crawl automatisé (`crawl.json`) a résolu et suivi un lien vers `https://lesprit-bois.fr/bardages` qui renvoie un `404` confirmé (`curl -i https://lesprit-bois.fr/bardages` → `HTTP/2 404`). Une recherche exhaustive de `href="/bardages"` et de la sous-chaîne `bardages` dans le HTML actuel de la home, `/carports`, `/pergolas`, `/amenagement-exterieur`, `/realisations`, `/plan-du-site` et `/blog` ne trouve **aucun lien actif** vers cette URL : le mot « bardages » n'apparaît qu'en texte simple (jamais dans un `<a href>`), à côté d'un lien vers `/constructions-bois` ou `/amenagement-exterieur`. Il n'y a donc pas de lien interne cassé actif au moment de la rédaction de ce rapport, mais l'URL a bien été atteinte par le crawler (donc linkée depuis quelque part — page en cache, ancien sitemap, backlink externe, ou lien supprimé entre-temps).
**Correctif** : vérifier dans Google Search Console (rapport Couverture / Pages) si `/bardages` est indexée ou reçoit du trafic/des backlinks externes ; si oui, mettre en place soit une page dédiée « Bardages » (le service existe et est mentionné dans le catalogue JSON-LD `hasOfferCatalog` sous « Bardages bois »), soit une redirection 301 vers `/amenagement-exterieur` ou `/constructions-bois` qui couvre déjà ce sujet. Confirmer aussi qu'aucun lien externe (ex. fiche Google Business Profile, réseaux sociaux, ancien devis PDF) ne pointe encore vers cette URL.

### `X-Powered-By: Next.js` exposé — Sévérité : Faible
**Preuve** : l'en-tête `x-powered-by: Next.js` est renvoyé sur toutes les pages HTML (vérifié sur `/`, `/blog/carport-bois-guide`, `/carports`).
**Correctif** : désactiver cet en-tête via `poweredByHeader: false` dans `next.config.js`. Sans impact SEO direct, mais réduit la surface d'information exposée aux scans automatisés (fingerprinting de stack).

### Pas de fichier IndexNow (Bing/Yandex/Naver) — Sévérité : Faible
**Preuve** : aucune clé IndexNow trouvée (`/indexnow.txt` → 404), aucune mention `indexnow` dans le HTML des pages ni dans robots.txt.
**Correctif** : générer une clé IndexNow, l'exposer en `https://lesprit-bois.fr/<clé>.txt`, et notifier automatiquement Bing/Yandex à chaque publication ou mise à jour d'article de blog (le site publie déjà régulièrement — 5 articles publiés en juillet 2026 selon le sitemap — donc le gain de fraîcheur d'indexation serait immédiat). Intégrable facilement dans le pipeline de publication déjà en place (commits "Pipeline blog").

### Absence de `llms.txt` — Sévérité : Faible
**Preuve** : `https://lesprit-bois.fr/llms.txt` renvoie `404`.
**Correctif** : facultatif à ce stade (standard émergent, non requis par les moteurs traditionnels). Le rendu 100% SSR et le JSON-LD riche rendent déjà le contenu très accessible aux crawlers IA sans ce fichier. À envisager en complément si l'objectif est l'optimisation pour les moteurs de réponse IA (AI Overviews, ChatGPT Search, Perplexity) — lister les pages piliers et articles de blog avec un résumé court.

### 14 vignettes d'articles sur `/blog` sans attributs `width`/`height` natifs — Sévérité : Faible
**Preuve** : sur `/blog`, les 14 images de la grille d'articles n'ont pas d'attributs `width`/`height` HTML (contrairement aux 0 image concernée sur les 23 autres pages). Cependant chaque `<img>` est englobé dans un conteneur `<div class="h-56 overflow-hidden">` à hauteur fixe (224px), ce qui neutralise en pratique le risque de CLS (Cumulative Layout Shift) malgré l'absence des attributs natifs.
**Correctif** : ajouter `width`/`height` (ou utiliser `next/image` qui les génère automatiquement) par cohérence de code et pour respecter l'audit Lighthouse « Image elements have explicit width and height », même si l'impact CLS réel est déjà maîtrisé par le CSS.

### CWV — points de vigilance non mesurables depuis le HTML seul — Sévérité : Moyenne (à confirmer)
**Preuve** : l'inspection du code source ne permet pas de mesurer LCP/INP/CLS réels (nécessite CrUX ou un test de terrain). Éléments observés qui **limitent le risque** : SSR complet, image LCP en `fetchPriority="high"` avec dimensions explicites, scripts `async`, poids HTML raisonnable (78 à 226 Ko selon les pages). Éléments qui **pourraient dégrader le LCP** : présence de Google Tag Manager (`googletagmanager.com/gtag/js`) chargé sur toutes les pages, qui peut retarder l'hydratation et impacter l'INP si des scripts tiers additionnels (pixels, chat) sont ajoutés dans GTM.
**Correctif** : lancer un test PageSpeed Insights / CrUX réel sur mobile pour confirmer les seuils (LCP <2.5s, INP <200ms, CLS <0.1), en particulier sur les pages avec le plus d'images (`/pergolas` 226 Ko, `/carports` 210 Ko). Auditer le contenu du conteneur GTM pour limiter les scripts tiers non essentiels.

## Score par sous-catégorie (indicatif)

| Catégorie | Statut |
|---|---|
| Crawlabilité (robots.txt, sitemap) | OK |
| Indexabilité (canonicals, doublons) | OK avec 1 réserve mineure (canonical home) |
| Sécurité (HTTPS, headers) | OK sauf CSP absente |
| Structure d'URL / redirections | OK |
| Mobile (viewport) | OK |
| Core Web Vitals (indices source) | Bon signal, à confirmer en terrain |
| Données structurées | Très bon |
| Rendu JavaScript | Excellent (SSR complet) |
| IndexNow | Absent |
