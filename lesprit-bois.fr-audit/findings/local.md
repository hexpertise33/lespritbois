# SEO local — score /100

**Score global : 49/100**

| Dimension | Poids | Score | Contribution |
|---|---|---|---|
| Signaux GBP (Google Business Profile) | 25% | 35/100 | 8,75 |
| Avis & réputation | 20% | 45/100 | 9,00 |
| SEO local on-page | 20% | 80/100 | 16,00 |
| Cohérence NAP & citations | 15% | 40/100 | 6,00 |
| Schema local | 10% | 60/100 | 6,00 |
| Liens & autorité locale | 10% | 35/100 | 3,50 |
| **Total** | | | **49,25 ≈ 49/100** |

**Type d'établissement détecté :** hybride — adresse physique affichée (footer, JSON-LD, mentions légales) à 1 Aux Pradasses, 33500 Les Billaux, mais fonctionnement réel d'entreprise de service à domicile (« nous intervenons dans tout le Libournais » sur chaque page gamme). C'est un atelier/siège, pas un point de vente à passage.

**Secteur détecté :** artisanat du bâtiment / home services — charpentier-constructeur bois (carports, pergolas, aménagement extérieur, construction bois). Le type de schema utilisé, `GeneralContractor`, est le bon sous-type schema.org pour ce secteur (pas de `LocalBusiness` générique).

---

## Ce qui fonctionne déjà

- **NAP interne 100 % cohérent sur le site lui-même.** Nom, adresse (1 Aux Pradasses, 33500 Les Billaux), téléphone (+33 5 57 40 65 80) et e-mail (lespritbois33@gmail.com) sont identiques mot pour mot dans le footer, le JSON-LD de la page d'accueil et des 4 pages gammes, et les mentions légales — signe d'une source unique de vérité bien gérée (`lib/data/navigation.ts`).
- **Schema `GeneralContractor` correctement typé**, avec adresse structurée complète, `telephone`, `email`, `openingHoursSpecification`, `hasCredential` (Qualibat) et `geo`. Chaque page gamme ajoute en plus un schema `Service` avec `areaServed` et un `BreadcrumbList`.
- **SEO local on-page déjà solide** : « Libourne » et « Gironde » figurent dans le title, le H1 et la meta description de chaque page gamme (carports, pergolas, aménagement extérieur, constructions bois), avec une section dédiée « Votre [gamme] à Libourne et dans tout le Libournais » citant nominativement Saint-Émilion, Coutras, Fronsac, Vayres, Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne.
- **Contenu local à réelle valeur ajoutée**, pas du remplissage géo : les FAQ schema traitent des sujets hyper-locaux vérifiables (seuils PLU, secteur protégé UNESCO de Saint-Émilion et avis de l'Architecte des Bâtiments de France, CERFA 16702), et l'article de blog sur le bois local évoque la filière Nouvelle-Aquitaine et le massif des Landes de Gascogne.
- **Citations officielles de premier plan présentes** : la fiche societe.com et pappers.fr (SIREN 980 264 584, SAS créée le 3/11/2023) référencent bien « L'Esprit Bois » à Les Billaux — une source d'autorité forte (registre INSEE) que Google et les moteurs IA utilisent pour vérifier l'identité de l'entreprise.
- **Preuve sociale visible** : bloc avis « 5,0/5 sur 6 avis Google » affiché en évidence sur la page d'accueil, avec logo Google et étoiles.
- **E-A-T local renforcé par le blog** : les articles sont signés « David Bertrand, expert bâtiment et créateur d'espaces extérieurs », ce qui aide à l'association personne physique / entreprise locale dans le Knowledge Graph.

---

## Constats

### Le lien Facebook (footer + schema `sameAs`) pointe vers une URL erronée — Critique

**Preuve.** `lib/data/navigation.ts` ligne 31 : `facebook: 'https://www.facebook.com/Eprisbois33'` (« Eprisbois33 », sans le « L » ni le « t » de L'Esprit — coquille). Cette valeur alimente à la fois le bouton Facebook du footer (`components/SiteFooter.tsx`) et le tableau `SAME_AS` injecté dans le JSON-LD `GeneralContractor` de la page d'accueil (`sameAs: SAME_AS`). Vérification en direct : `facebook.com/Eprisbois33` renvoie une page Facebook générique sans identité de marque reconnaissable, alors que la vraie page confirmée par ailleurs, `facebook.com/lespritbois33`, s'intitule bien « L'Esprit Bois | Les Billaux ».
**Correctif.** Corriger `RESEAUX.facebook` en `https://www.facebook.com/lespritbois33` dans `lib/data/navigation.ts`. C'est un fichier unique qui propage la correction au footer et au `sameAs` schema.org de toutes les pages. C'est la correction la plus rentable de tout l'audit : elle répare en un commit le lien social affiché aux visiteurs ET le signal d'entité utilisé par Google pour relier le site à la fiche Google Business Profile.

### Aucun lien ni widget vers la fiche Google Business Profile réelle — Élevée

**Preuve.** Aucune occurrence de `google.com/maps`, `goo.gl`, `g.page`, ni d'`<iframe>` Maps dans tout le code (`app/`, `components/`, `lib/`). Le lien « Voir les avis » sur la page d'accueil pointe vers une recherche Google générique (`https://www.google.com/search?q=L%27Esprit+Bois+Les+Billaux`) et non vers l'URL directe de la fiche GBP (place ID / `g.page/...`). Il n'y a pas non plus d'itinéraire « Y aller » ni de carte Maps intégrée sur le site.
**Correctif.** Ajouter un lien direct vers la fiche GBP (via son Place ID, récupérable dans le compte GBP ou par recherche « place id finder ») en remplacement du lien de recherche générique, et intégrer une carte Google Maps (iframe) sur la page d'accueil ou une page contact. Cela renforce à la fois l'expérience utilisateur (itinéraire) et le signal d'association site ↔ fiche GBP.

### Aucune donnée `AggregateRating` dans le schema malgré l'affichage « 5,0/5, 6 avis » — Moyenne

**Preuve.** La section avis de `app/page.tsx` (lignes 840-889) affiche visuellement la note et le nombre d'avis, mais aucun des blocs JSON-LD relevés dans `crawl.json` ne contient de propriété `aggregateRating` ni `review`.
**Correctif.** Ajouter `aggregateRating: { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "6" }` au schema `GeneralContractor`. Avec seulement 6 avis, le rich snippet étoilé n'est pas garanti dans les SERP (Google applique des seuils de volume), mais la donnée reste utile pour l'entité et les moteurs IA. Ne pas fabriquer de faux avis individuels : uniquement l'agrégat déjà affiché publiquement.

### Coordonnées `geo` limitées à 4 décimales — Moyenne

**Preuve.** `geo: { latitude: 44.9517, longitude: -0.2372 }` dans tout le JSON-LD (page d'accueil et 4 pages gammes) — 4 décimales, soit une précision d'environ 11 m, alors que la recommandation (Google Developers, reprise dans les références internes) est de 5 décimales minimum (~1,1 m).
**Correctif.** Relever les coordonnées précises du site (via l'outil GBP ou Google Maps, clic droit sur le point exact du bâtiment) et les reporter avec 5-6 décimales dans `ENTREPRISE_JSONLD` / les blocs `geo` de chaque page.

### Aucun compte Instagram déclaré alors qu'un profil existe (@lespritbois) — Faible

**Preuve.** `RESEAUX` dans `lib/data/navigation.ts` ne contient qu'une clé `facebook` ; aucune trace d'Instagram dans le footer ni dans `SAME_AS`. Le fichier `lib/data/site.ts` (visiblement un ancien jeu de données non importé ailleurs dans le code — aucun `import` de ce fichier trouvé hors de lui-même) contient un placeholder `instagram: '#'` jamais branché.
**Correctif.** Ajouter `instagram: 'https://www.instagram.com/lespritbois'` à `RESEAUX` pour qu'il apparaisse dans le footer et dans `SAME_AS`. Signal simple, gratuit, et cohérent avec l'un des facteurs IA-visibility (citations/profils sociaux liés).

### Écart d'adresse entre le site et le registre légal (societe.com / pappers.fr) — Moyenne

**Preuve.** Le site déclare partout « 1 Aux Pradasses, 33500 Les Billaux ». La fiche societe.com de la SAS L'ESPRIT BOIS (SIREN 980 264 584) indique comme siège social « 1 Lotissement Les Pradasses, 33500 Les Billaux ». Le nom de lieu-dit diffère dans sa formulation (« Aux Pradasses » vs « Lotissement Les Pradasses ») entre une source à forte autorité (registre INSEE relayé) et le site officiel.
**Correctif.** Aligner la forme exacte de l'adresse utilisée sur le site sur celle du Kbis/INSEE (ou, si « Aux Pradasses » est la forme postale correcte reconnue par La Poste, s'assurer que la fiche GBP et les futures citations utilisent strictement la même graphie partout). Les moteurs de correspondance d'entité sont sensibles à ces variantes ; une forme unique et documentée doit devenir la référence à copier-coller pour toute nouvelle citation.

### Risque de doublon d'entité avec le site sœur a-defrance.fr — Moyenne

**Preuve.** a-defrance.fr affiche la même adresse (1 Aux Pradasses, 33500 Les Billaux) et le même numéro (05 57 40 65 80) que lesprit-bois.fr, mais avec des réseaux sociaux différents (Facebook « lesAdefrance », Instagram « lesadefrance33 ») et un e-mail différent (adefrance033@gmail.com côté A de France vs lespritbois33@gmail.com côté L'Esprit Bois). Deux sites, même NAP téléphone/adresse, marques et identités sociales distinctes.
**Correctif.** Documenter clairement, dans la fiche GBP elle-même (et idéalement dans les mentions légales des deux sites), qu'il s'agit d'une seule entreprise opérant sous deux marques commerciales à la même adresse, ou distinguer les deux GBP par un nom de fiche et une catégorie clairement différenciés si les deux doivent coexister. Sans clarification, Google peut interpréter la coexistence de deux fiches à la même adresse comme un doublon et en suspendre une, ou fragmenter l'autorité locale entre les deux entités au lieu de la concentrer.

### Risque de confusion de marque avec un homonyme (espritbois.fr) — Faible

**Preuve.** Une recherche sur « L'Esprit Bois Les Billaux » fait remonter, à côté du bon site, un domaine proche sans trait d'union — « espritbois.fr » — décrit comme un charpentier avec un numéro de téléphone totalement différent (05 56 28 35 06), sans lien avec l'entreprise de Les Billaux.
**Correctif.** Aucune action corrective directe possible (nom déjà déposé par un tiers), mais à surveiller : vérifier lors de toute inscription à un annuaire que la fiche créée référence bien le bon domaine (lesprit-bois.fr) et la bonne adresse, pour éviter qu'un opérateur d'annuaire ne fusionne par erreur les deux entités.

### Aucune preuve de présence sur les annuaires généralistes français (Pages Jaunes, etc.) — Moyenne (à confirmer)

**Preuve.** Recherches web ciblées sur le nom et l'adresse de l'entreprise : aucune mention trouvée sur Pages Jaunes, Yelp France, Kompass ou 118000 dans les résultats accessibles. L'accès direct à PagesJaunes a été bloqué (403) lors de cet audit — voir Limites ci-dessous, ce point doit être vérifié manuellement dans le tableau de bord GBP ou en se connectant directement à ces annuaires.
**Correctif.** Créer ou revendiquer manuellement une fiche Pages Jaunes (annuaire de référence en France, équivalent local du Tier 1 Yelp/BBB), avec un NAP strictement identique à celui retenu comme référence (cf. constat sur l'adresse). Prioriser aussi les annuaires métier BTP pertinents pour un artisan Qualibat.

### Aucune page dédiée par commune — voir verdict séparé ci-dessous

---

## Verdict sur les pages locales par commune

**Recommandation : ne pas créer de pages dédiées par commune (type `/pergola-saint-emilion`, `/carport-coutras`, etc.) de façon systématique.** Trois raisons tranchées :

1. **La proximité géographique, pas le contenu, décide du pack local.** Pour une entreprise à adresse fixe (siège unique à Les Billaux), le classement sur « pergola Saint-Émilion » dépend à ~55 % de la distance physique entre l'établissement vérifié et le lieu de recherche (facteur hors contrôle éditorial). Une page de contenu ne rapproche pas physiquement l'atelier de Coutras ou de Castillon-la-Bataille : elle ne peut pas compenser ce facteur dominant.
2. **Le risque de pages de porte (doorway pages) est réel et concret ici.** L'Esprit Bois est un petit artisan sans book de réalisations ni tarification différenciée par commune. Multiplier 4 gammes × 11 communes déclarées donnerait potentiellement 44 pages quasi identiques, ne différant que par le nom de ville substitué dans le H1 et le title — exactement le schéma que Google qualifie de pages de porte et sanctionne, et qui cannibaliserait le maillage et l'autorité déjà construits sur les 4 pages gammes actuelles (2 000 à 3 400 mots chacune, FAQ riches, bien positionnées).
3. **L'architecture actuelle est déjà celle recommandée pour ce profil d'entreprise en 2026.** Les pages de service dédiées (carports, pergolas, aménagement extérieur, constructions bois) sont citées comme le facteur n°1 du SEO local organique et le facteur n°2 de visibilité IA — c'est précisément le choix déjà fait par L'Esprit Bois (page de gamme + FAQ + mention nominative des communes desservies + galerie de réalisations), et il ne faut pas le diluer par des pages de zone redondantes.

**Exception ciblée à envisager, mais en dernière priorité :** une seule page dédiée à Saint-Émilion pourrait se justifier — pas comme doublon de gamme, mais comme page à angle réellement unique : secteur classé UNESCO, avis obligatoire de l'Architecte des Bâtiments de France, seuils d'urbanisme renforcés (contenu déjà esquissé dans l'article de blog sur l'autorisation d'urbanisme 2026). Ce contenu ne peut pas être dupliqué à l'identique sur les 10 autres communes : il a une justification éditoriale propre. Même dans ce cas, cette page ne devrait être lancée qu'après avoir traité les corrections GBP/NAP/schema ci-dessus, dont le retour sur effort est nettement supérieur pour une entreprise de cette taille.

**Ce qu'il faut faire à la place des pages communes :** enrichir la section « Réalisations » avec la commune précise de chaque chantier déjà répertorié dans le schema `CollectionPage` (Libourne, Les Billaux, Gironde — plusieurs entrées sont encore génériques « Gironde » alors qu'un lieu plus précis renforcerait la preuve locale sans créer de nouvelles pages), et prioriser les avis clients localisés (mentionner la commune du client dans les témoignages), qui constituent un signal local à bien meilleur rapport effort/impact qu'une page de porte.

---

## Actions prioritaires (top 10)

1. **Critique** — Corriger l'URL Facebook dans `lib/data/navigation.ts` (`Eprisbois33` → `lespritbois33`).
2. **Élevée** — Ajouter un lien direct vers la fiche Google Business Profile (Place ID) et une carte Maps intégrée, en remplacement du lien de recherche générique.
3. **Élevée** — Vérifier dans le tableau de bord GBP que la catégorie principale est bien alignée avec le cœur de métier (constructeur bois / charpentier), la catégorie primaire étant le facteur de classement local n°1 selon Whitespark 2026 — non vérifiable depuis le site, à faire manuellement.
4. **Moyenne** — Ajouter `aggregateRating` au schema `GeneralContractor`.
5. **Moyenne** — Passer les coordonnées `geo` à 5-6 décimales.
6. **Moyenne** — Harmoniser la forme exacte de l'adresse entre le site et le registre légal (societe.com/pappers.fr/Kbis), puis l'utiliser comme référence figée pour toute future citation.
7. **Moyenne** — Clarifier la relation L'Esprit Bois / A de France dans les mentions légales et sur la fiche GBP pour éviter un doublon d'entité à la même adresse.
8. **Moyenne** — Créer/revendiquer une fiche Pages Jaunes avec le NAP de référence ; vérifier l'absence d'autres annuaires orphelins ou obsolètes.
9. **Faible** — Ajouter le lien Instagram (@lespritbois) à `RESEAUX` et au footer.
10. **Faible** — Enrichir la localisation précise (commune) de chaque réalisation dans le schema `CollectionPage` de `/realisations`, au lieu du générique « Gironde ».

---

## Limites de cet audit

- **Aucune donnée GBP en direct** (catégorie principale déclarée, nombre et fraîcheur réelle des avis, posts, photos, Q&R) n'a pu être vérifiée : l'audit s'appuie uniquement sur ce que le site web expose et sur des recherches web ponctuelles. Aucun outil DataForSEO n'était disponible dans cette session.
- **Accès direct à PagesJaunes.fr bloqué (HTTP 403)** lors de cet audit : la présence ou l'absence réelle sur cet annuaire n'a pas pu être confirmée avec certitude, seulement déduite de l'absence de résultats dans les recherches web indirectes.
- **Position réelle dans le pack local** (« carport Libourne », « pergola Libourne », etc.) non mesurée en direct — nécessiterait un outil de suivi SERP local.
- **Vélocité des avis (règle des 18 jours)** non vérifiable sans accès à la timeline réelle des avis Google — seul le total affiché sur le site (6 avis, 5,0/5) a pu être analysé.
- **Le facteur de proximité géographique** (55,2 % de la variance de classement selon l'étude Search Atlas), déterminant pour le pack local, reste hors du contrôle du site et n'est pas quantifiable ici.
