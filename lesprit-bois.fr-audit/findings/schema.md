# Données structurées — score 74/100

Périmètre analysé : accueil, 4 pages de gamme (carports, pergolas, aménagement extérieur, constructions bois), /realisations, /blog + 14 articles, pages légales. Sources : `lesprit-bois.fr-audit/crawl.json` (JSON-LD réellement servi) croisé avec le code source (`app/**/page.tsx`, `lib/data/navigation.ts`, `components/JsonLd.tsx`, `components/SiteFooter.tsx`).

## Ce qui fonctionne déjà

- **JSON-LD partout, jamais Microdata/RDFa**, injecté proprement via `components/JsonLd.tsx` (`<script type="application/ld+json">`), `@context` toujours en `https://schema.org` (HTTPS).
- **`GeneralContractor` est le bon choix de type**, pas juste un générique `LocalBusiness`. Schema.org ne propose pas de type « Charpentier » dédié ; `GeneralContractor` (sous-type de `HomeAndConstructionBusiness`) est l'entité la plus proche du métier réel. Rien à changer ici.
- **Aucun type déprécié détecté** : pas de `HowTo`, pas de `SpecialAnnouncement`, pas de `CourseInfo`/`EstimatedSalary`/`LearningVideo`.
- **`BreadcrumbList` valide et cohérent** sur toutes les pages de niveau 2 (position, name, item en URL absolue).
- **`FAQPage` bien structuré** (mainEntity/Question/acceptedAnswer/Answer.text conformes) sur 4 pages de gamme (6 à 12 questions chacune) et sur les 14 articles de blog. Le contenu des questions est visiblement affiché sur la page (pas de contenu caché).
- **`BlogPosting` déjà doté d'un `author` de type `Person`** (« David Bertrand », `jobTitle`, `worksFor`) sur les 14 articles — c'est une des opportunités listées dans la mission, et elle est déjà en place. `publisher`, `datePublished`, `dateModified`, `mainEntityOfPage`, `about`, `areaServed` sont également présents et corrects.
- **`CollectionPage` sur /realisations** avec `mainEntity` en `ItemList` de 12 chantiers, `about` pointant vers l'entité `GeneralContractor`.
- **NAP cohérent dans le code réellement livré** : `lib/data/navigation.ts` centralise nom, adresse, téléphone, email et alimente à la fois le footer, le nav et tous les blocs JSON-LD (le commentaire du fichier le dit explicitement : « Modifier ICI met à jour les 7 pages »). Le fichier `lib/data/site.ts`, qui contient une adresse email différente (`adefrance033@gmail.com`), n'est importé nulle part dans `app/` ou `components/` — c'est du code mort, il n'affecte pas le NAP en production.
- **URLs absolues, dates au format ISO 8601, pas de placeholder ("[Nom]", "Lorem ipsum")** détecté dans les blocs générés.
- Les **6 avis Google 5/5 affichés en clair sur l'accueil** (noms, texte intégral, note, lien vers la recherche Google) sont un vrai contenu visible sur page — condition indispensable pour pouvoir les marquer en `AggregateRating`/`Review` sans risque (voir plus bas).

---

## Constats

### 1. `sameAs` Facebook pointe vers l'ancienne URL de la page (renommée le 14/07/2026) — Sévérité Moyenne

**Preuve** : `lib/data/navigation.ts` ligne 31 :
```ts
export const RESEAUX = {
  facebook: 'https://www.facebook.com/Eprisbois33',
} as const;
```
Cette valeur alimente le `sameAs` du bloc `GeneralContractor` sur *toutes* les pages (confirmé dans `crawl.json`) et le lien du footer (`components/SiteFooter.tsx`, `href={RESEAUX.facebook}`).

Selon la mémoire de compte (16 jours, à re-vérifier si besoin) : la page a été renommée `facebook.com/Eprisbois33` → `facebook.com/lespritbois33` le 2026-07-14. Les deux URLs répondent encore en HTTP 200 aujourd'hui (testé), donc rien n'est cassé pour l'utilisateur — mais l'URL déclarée dans `sameAs` n'est plus l'identifiant canonique de la page, ce qui affaiblit la fiabilité du signal d'entité pour le Knowledge Graph et peut créer un décalage si Facebook finit par ne plus rediriger l'ancien handle.

**Correctif** — mettre à jour `lib/data/navigation.ts` :
```ts
export const RESEAUX = {
  facebook: 'https://www.facebook.com/lespritbois33',
  instagram: 'https://www.instagram.com/lespritbois/',
} as const;
```
Le composant `SAME_AS` (`Object.values(RESEAUX)`) répercutera automatiquement le changement dans tous les blocs `GeneralContractor` et dans le footer, sans toucher aux pages une par une.

### 2. `sameAs` incomplet : Instagram absent, aucune fiche Google Business Profile déclarée — Sévérité Moyenne

**Preuve** : `SAME_AS` ne contient qu'une seule URL (Facebook). Or l'entreprise a un compte Instagram actif (`@lespritbois`, ~3,7 K abonnés selon la mémoire du compte) qui n'apparaît nulle part dans le schema, et les avis Google affichés sur la home ne sont reliés à aucune URL `sameAs` de fiche Google Business Profile (seulement un lien de recherche générique `google.com/search?q=...`, qui n'est pas une URL d'entité stable).

**Correctif** : ajouter Instagram (voir extrait ci-dessus) et, dès que l'URL de partage de la fiche Google Business Profile est disponible (format `https://g.page/...` ou `https://maps.app.goo.gl/...`), l'ajouter également à `SAME_AS`. Cela relie explicitement l'entité `GeneralContractor` à la source des avis, ce qui renforce la légitimité de l'`AggregateRating` proposé au point 4.

### 3. `publisher.logo` en SVG sur les 14 `BlogPosting` — non conforme aux specs Google — Sévérité Élevée

**Preuve** (`crawl.json`, exemple `blog/carport-bois-guide`) :
```json
"publisher": {
  "@type": "Organization",
  "name": "L'Esprit Bois",
  "logo": { "@type": "ImageObject", "url": "https://lesprit-bois.fr/logo-mark.svg" }
}
```
Google exige explicitement pour la propriété `logo` (Organization/Article) un format **JPG, PNG ou WEBP** — le SVG n'est pas supporté et fait échouer la validation « Logo » du Rich Results Test. C'est actuellement le seul vrai défaut technique bloquant (les autres constats sont des opportunités ou incohérences mineures).

**Correctif** — remplacer par un PNG existant (`public/images/source-adefrance/logo2026.png`, 350×150 px, au-dessus du minimum Google de 112×112 px sur chaque dimension) :
```json
"publisher": {
  "@type": "Organization",
  "name": "L'Esprit Bois",
  "logo": {
    "@type": "ImageObject",
    "url": "https://lesprit-bois.fr/images/source-adefrance/logo2026.png",
    "width": 350,
    "height": 150
  }
}
```
Idéal à terme : exporter le logo en PNG carré ≥ 512×512 px (le SVG source `logo-mark.svg` existe déjà, un simple export résout le problème définitivement pour cet usage et pour le point 5).

### 4. `AggregateRating` et `Review` absents alors que 6 avis Google 5/5 sont affichés en clair sur l'accueil — Opportunité, Sévérité Moyenne (à fort impact)

**Vérification de légitimité** : les avis affichés dans la section « Ils nous ont fait confiance » (`app/page.tsx`, constante `AVIS`) sont de vrais avis Google, avec prénoms/noms réels, texte intégral non tronqué, note 5 étoiles répétée par avis, et un lien explicite « Voir les avis » vers la recherche Google de l'entreprise. Ce n'est **pas** un cas d'« avis auto-complaisant » interdit par les règles Google (témoignages fabriqués par l'entreprise elle-même) : il s'agit d'avis tiers authentiques republiés à l'identique de leur source. C'est le cas d'usage que les guidelines Google acceptent, à condition que :
- le contenu marqué corresponde exactement à ce qui est visible à l'écran (mêmes 6 avis, même note 5,0/5) ;
- la note ne soit jamais gonflée ni arrondie artificiellement ;
- le balisage ne soit posé **qu'une fois**, sur l'entité `GeneralContractor` de la page d'accueil (pas dupliqué sur les 4 pages de gamme ni sur /realisations, où les avis ne sont pas affichés) ;
- la mise à jour du nombre d'avis/de la note dans le JSON-LD suive toute mise à jour du contenu visible (`AVIS` dans `app/page.tsx`).

Google n'affichera très probablement pas d'étoiles en résultat de recherche pour ce type d'entité (les rich results « review snippet » sont restrictifs hors verticales spécifiques), mais le balisage reste utile pour la compréhension de l'entité par le Knowledge Graph et par les moteurs IA/LLM — sans risque de pénalité s'il respecte les points ci-dessus.

**JSON-LD prêt à coller** (à fusionner dans le bloc `GeneralContractor` de `app/page.tsx`, en reprenant le texte exact de la constante `AVIS`) :
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://lesprit-bois.fr/#organisation",
  "name": "L'Esprit Bois",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "bestRating": "5",
    "worstRating": "1",
    "reviewCount": "6"
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Clément Baudon" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Commande faite 2 jours avant les congés. On a pu avoir la totalité de la fourniture pour notre terrasse. Super conseil pour le plan de pose. Énorme avantage : l'expérience du vendeur, pour le rendu esthétique comme la mise en place."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Damien" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Merci à David et toute son équipe pour leurs conseils. Ils m'ont aidé sur la conception d'une pergola et le résultat est parfait."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Guillaume Marie-Catherine" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Malgré un timing ultra serré, le permis de construire a été déposé dans les temps !"
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Thuy Tran" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Merci pour la modélisation 3D des chalets et pour les précieux conseils sur l'architecture, l'optimisation de l'espace et des coûts."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Georgia Flores" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Merci infiniment à Manon et ses collègues pour le travail sur mes plans d'agrandissement. Projet mené jusqu'à l'obtention du permis. De bons conseils."
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Bérengère Coste" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Entreprise sérieuse et à l'écoute."
    }
  ]
}
```
Ne pas reproduire ce bloc `aggregateRating`/`review` sur les pages de gamme ou /realisations : uniquement là où les avis sont réellement affichés (l'accueil), pour rester strictement conforme aux consignes Google sur l'emplacement du balisage d'avis.

### 5. Entité `GeneralContractor` dupliquée sans `@id` sur 6 pages — Sévérité Moyenne

**Preuve** : le bloc `GeneralContractor` complet (nom, description, téléphone, email, `hasCredential`, adresse) est ré-écrit intégralement et différemment à chaque fois dans `provider` (carports, pergolas, amenagement-exterieur, constructions-bois) et dans `about` (realisations) — `grep` confirme 6 occurrences du type `GeneralContractor` dans `app/*/page.tsx`. Aucune de ces copies ne porte `sameAs`, `geo`, `image`, `openingHoursSpecification` ni `priceRange`, contrairement à la version complète de l'accueil. Sans `@id` commun, Google n'a aucune garantie qu'il s'agit du même nœud d'entité d'une page à l'autre — cela dilue le signal au lieu de le renforcer, et complique toute future correction (comme le point 1 : il faudrait modifier `sameAs` à 6 endroits si chaque page dupliquait la liste complète).

**Correctif** : donner un `@id` stable à l'entité canonique sur l'accueil et la référencer par pointeur sur les autres pages plutôt que de la dupliquer.
```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://lesprit-bois.fr/#organisation",
  "name": "L'Esprit Bois",
  "...": "… (bloc complet, uniquement sur l'accueil)"
}
```
Sur les pages de gamme, remplacer le `provider` (ou `about`) étoffé par une simple référence :
```json
{
  "@type": "Service",
  "serviceType": "Conception, fabrication et pose de carports sur mesure",
  "name": "Carport sur mesure à Libourne et en Gironde",
  "provider": { "@id": "https://lesprit-bois.fr/#organisation" }
}
```
Effet : une seule source de vérité pour le NAP et les identifiants (sameAs, geo, logo…), cohérente automatiquement sur tout le site.

### 6. Pas de propriété `logo` distincte sur l'entité `GeneralContractor` de l'accueil — Sévérité Faible/Moyenne

**Preuve** : le bloc `GeneralContractor` de `app/page.tsx` porte une propriété `image` (photo d'ambiance pool house) mais aucune propriété `logo`. Or `GeneralContractor` hérite d'`Organization`, et c'est la propriété `logo` (pas `image`) que Google utilise pour l'éligibilité au « Logo » dans les résultats de recherche / panneau de connaissances.

**Correctif** : ajouter, en plus de `image`, une propriété `logo` pointant vers un PNG carré non-SVG (voir point 3) :
```json
"logo": "https://lesprit-bois.fr/images/source-adefrance/logo2026.png"
```

### 7. `FAQPage` — plus de rich result Google, mais légitime pour l'IA (à conserver) — Sévérité Info

**Preuve** : 4 pages de gamme + 14 articles de blog portent un bloc `FAQPage` valide (contenu visible, structure conforme). Depuis le 7 mai 2026, Google a retiré les rich results FAQ pour tous les sites (l'exception santé/gouvernement d'août 2023 est désormais généralisée) : ce balisage n'apportera plus d'étoiles ni d'accordéon en SERP. Il reste néanmoins utile pour la citation par les moteurs IA/LLM et la compréhension sémantique de la page — **ne pas le retirer**. Aucune action requise, information à connaître pour ne pas être surpris par l'absence de rich snippet FAQ dans Search Console.

### 8. Un `headline` de `BlogPosting` dépasse la longueur recommandée de 110 caractères — Sévérité Faible

**Preuve** : `/blog/bois-local-pin-maritime-douglas-gironde` →
```
"headline": "Bois local en Gironde : pin maritime, douglas et châtaignier, que vaut vraiment la filière Nouvelle-Aquitaine ?"
```
111 caractères. Google tronque/déconseille les `headline` > 110 caractères pour l'éligibilité Article.

**Correctif** — raccourcir légèrement, par exemple :
```json
"headline": "Bois local en Gironde : pin maritime, douglas, châtaignier — la filière Nouvelle-Aquitaine"
```

### 9. `CollectionPage` /realisations : `ItemList` sans `url` ni `image` par élément — Opportunité, Sévérité Faible

**Preuve** : les 12 `ListItem` du `mainEntity` de /realisations ne portent que `position` et `name`, aucun `url` (ancre vers la fiche chantier) ni `image`. C'est valide, mais cela prive Google Images / les IA génératives d'un lien direct entre chaque photo de chantier et sa légende structurée.

**Correctif** (exemple pour un item) :
```json
{
  "@type": "ListItem",
  "position": 1,
  "name": "Carport aluminium contemporain, Gironde",
  "url": "https://lesprit-bois.fr/realisations#carport-aluminium-contemporain",
  "image": "https://lesprit-bois.fr/images/source-adefrance/carport-accueil.webp"
}
```

---

## Récapitulatif des sévérités

| # | Constat | Sévérité |
|---|---|---|
| 1 | `sameAs` Facebook obsolète (ancien handle) | Moyenne |
| 2 | `sameAs` incomplet (Instagram, GBP absents) | Moyenne |
| 3 | `publisher.logo` en SVG (non conforme Google) | Élevée |
| 4 | `AggregateRating`/`Review` non exploités (6 avis Google réels) | Moyenne (opportunité forte) |
| 5 | Entité `GeneralContractor` dupliquée sans `@id` | Moyenne |
| 6 | Pas de `logo` distinct sur l'entité principale | Faible/Moyenne |
| 7 | `FAQPage` sans rich result depuis mai 2026 | Info (à conserver) |
| 8 | 1 `headline` blog > 110 caractères | Faible |
| 9 | `ItemList` /realisations sans `url`/`image` | Faible |

## Score : 74/100

La base est saine et déjà au-dessus de la moyenne du secteur : bon choix de type (`GeneralContractor`), JSON-LD propre et bien réparti, `BreadcrumbList`/`Service`/`FAQPage` valides, `BlogPosting` avec `author` Person déjà en place (point souvent oublié), aucun type déprécié. Les points qui retiennent le score sont : un défaut technique net (logo SVG non conforme), une opportunité forte non exploitée (avis Google réels non balisés en `AggregateRating`/`Review`), et une dette d'architecture (entité dupliquée sans `@id`, `sameAs` non synchronisé avec le vrai profil Facebook). Ce sont des corrections ciblées, pas une refonte : en traitant les points 1 à 6, le score peut raisonnablement dépasser 90/100.
