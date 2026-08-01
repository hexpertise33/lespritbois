# Audit SEO complet — lesprit-bois.fr

**Date** : 1er août 2026
**Périmètre** : 25 URL uniques, crawl exhaustif de la production
**Entreprise** : L'Esprit Bois, charpentier et constructeur bois, 1 Aux Pradasses, 33500 Les Billaux (Gironde)

---

## Score de santé SEO : **75 / 100**

| Catégorie | Poids | Score | |
|---|---|---|---|
| SEO technique | 22 % | **84** | ████████▍ |
| Qualité de contenu | 23 % | **68** | ██████▊ |
| On-page & maillage | 20 % | **72** | ███████▏ |
| Données structurées | 10 % | **74** | ███████▍ |
| Performance (CWV) | 10 % | **80** | ████████ |
| Recherche IA (GEO) | 10 % | **68** | ██████▊ |
| Images | 5 % | **85** | ████████▌ |

### Hors pondération, mais décisif pour cette activité

| **SEO local** | — | **49** | ████▉ |
|---|---|---|---|

Le SEO local pèse peu dans la grille standard, mais pour un artisan dont **toute la clientèle est dans un rayon de 30 km**, c'est le chantier le plus rentable. C'est aussi le plus faible du site.

---

## Les 5 problèmes prioritaires

### 1. Le lien Facebook du site est erroné — et il alimente le graphe d'entité Google

Le site déclare `facebook.com/Eprisbois33` dans le pied de page **et** dans le `sameAs` du schema.org (`lib/data/navigation.ts`, ligne 31). Le nom ressemble à une coquille — il manque le « s » de « Esprit ». La page identifiée lors de nos travaux précédents est `facebook.com/lespritbois33`.

Facebook bloque les vérifications automatisées : **à confirmer d'un simple clic de votre part**. Si la coquille est avérée, c'est le lien externe unique du site qui pointe dans le vide, et le seul signal permettant à Google de relier le site à votre page sociale.

### 2. Aucun lien vers votre fiche Google Business Profile

Pour un artisan local, la fiche GBP est le premier point de contact — elle génère souvent plus d'appels que le site. Le site ne la mentionne nulle part : ni lien, ni carte intégrée, ni bouton d'avis. Les 6 avis Google 5/5 sont recopiés en dur dans le code, sans lien vers la fiche qui les héberge.

### 3. `/realisations` est presque vide — et c'est la 2ᵉ page la plus maillée du site

539 mots pour 22 photos, contre 1 365 à 3 156 mots sur les pages de gamme. Elle reçoit 21 liens internes : le site pousse massivement vers sa page la plus pauvre. Aucune photo n'est accompagnée du contexte du chantier, de la commune précise, de la contrainte résolue ou d'un mot du client.

### 4. Les avis 5/5 ne sont pas balisés

« 5,0 sur 5 d'après 6 avis Google » s'affiche sur l'accueil, mais aucun `AggregateRating` n'est déclaré. Ce sont de vrais avis tiers, donc le balisage est légitime — et il ouvre droit aux étoiles dans les résultats de recherche, qui augmentent nettement le taux de clic.

### 5. Un lien interne mort

`/blog/cloture-brise-vue-bois-guide` renvoie vers `/bardages`, qui répond **404**. Seul lien mort du site sur 25 destinations testées, mais il est dans le corps d'un article, là où le lecteur clique.

---

## Les 5 gains rapides

| Action | Effort | Effet |
|---|---|---|
| Corriger l'URL Facebook + ajouter Instagram au `sameAs` | 5 min | Rétablit le signal d'entité |
| Réparer le lien `/bardages` | 5 min | Supprime la seule 404 interne |
| `publisher.logo` en PNG au lieu de SVG sur les 14 articles | 10 min | Rend les articles éligibles aux résultats enrichis |
| Ajouter `AggregateRating` sur l'accueil | 15 min | Étoiles possibles dans les résultats |
| Déposer un `llms.txt` | 15 min | Cadre la façon dont les IA citent le site |

---

## Ce qui fonctionne déjà — et qu'il ne faut pas casser

Le site part d'une base saine. Ces points sont au-dessus de ce qu'on trouve habituellement chez un artisan :

- **Consolidation de domaine impeccable** : http→https, www→non-www, slash final, toutes en 301/308.
- **Sitemap parfaitement aligné** sur les 24 pages indexables. Aucune page orpheline, aucun manque.
- **Rendu serveur intégral** : l'indexation ne dépend pas du JavaScript.
- **En-têtes de sécurité complets** sauf CSP : HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy.
- **Aucune image sans `alt`** sur ~250 images, avec des textes descriptifs et localisés.
- **Un seul `h1` par page**, sur les 25 pages.
- **Aucun crawler IA bloqué** — GPTBot, ClaudeBot, PerplexityBot, Google-Extended testés en direct, tous en 200.
- **Auteur nommé et cohérent** sur les 14 articles, en JSON-LD et en signature visible. Rare dans ce secteur.
- **Corpus éditorial solide** : 14 articles de 1 880 à 3 744 mots, tous datés 2026.
- **Preuves de confiance réelles** : SIRET affiché, assureur décennal nommé (SMABTP), certification Qualibat.
- **Stratégie LCP déjà exemplaire** : image de héro préchargée, `fetchPriority="high"`, dimensions explicites, WebP.

---

## Détail par catégorie

Chaque rapport de spécialiste, avec preuves et correctifs, est dans `findings/` :

| Fichier | Contenu |
|---|---|
| `technical.md` | Crawl, indexation, redirections, en-têtes, sitemap |
| `content.md` | E-E-A-T, profondeur, contenu mince, cannibalisation |
| `onpage.md` | Titles, meta descriptions, maillage, liens morts |
| `schema.md` | JSON-LD, validation, extraits prêts à coller |
| `local.md` | NAP, GBP, citations, avis, verdict sur les pages communales |
| `performance.md` | TTFB, ressources bloquantes, CWV |
| `geo.md` | Crawlers IA, citabilité, `llms.txt` prêt à déposer |

---

## Deux corrections que j'ai apportées aux rapports des spécialistes

Par souci d'exactitude, deux chiffres ont été vérifiés et rectifiés :

**La police d'icônes ne pèse pas 1,1 Mo mais 304 Ko.** Le fichier woff2 réellement servi par `fonts.gstatic.com` fait 311 088 octets, mesuré en le téléchargeant. Le constat reste valable — c'est une ressource tierce bloquante pour le rendu — mais son ampleur est divisée par 3,6.

**Le risque CLS sur `/blog` ne se matérialise pas.** Les 14 vignettes sans `width`/`height` sont enfermées dans un conteneur à hauteur fixe (`div.h-56`), qui réserve l'espace avant le chargement. Ajouter les dimensions reste une bonne pratique, mais ce n'est pas l'urgence qu'une détection automatique laisserait croire.

---

## Limites de cet audit

- **Aucune donnée de terrain.** L'API PageSpeed Insights a renvoyé 429 (quota saturé) pendant toute la fenêtre d'audit. Les mesures de performance sont des relevés directs en laboratoire, pas des percentiles CrUX. À reprendre quand le quota sera reconstitué.
- **Aucune donnée Search Console ni Analytics** : pas d'identifiants configurés. Impossible de connaître les positions réelles, les impressions, le taux de clic ou les pages qui convertissent.
- **Aucune donnée de backlinks** : pas d'accès Moz, Ahrefs ou DataForSEO. Le profil de liens entrants n'a pas été évalué.
- **Facebook et Pages Jaunes bloquent les requêtes automatisées** : les constats les concernant sont à confirmer manuellement.
- **La fiche Google Business Profile n'a pas pu être auditée** faute d'accès API — or c'est probablement le levier local le plus important.
