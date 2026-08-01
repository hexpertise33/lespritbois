# Plan d'action SEO — lesprit-bois.fr

Priorisé par rapport effet / effort. Les durées sont des estimations de temps de travail effectif.

---

## Phase 1 — À faire tout de suite (moins d'une heure au total)

Cinq corrections d'une ligne à quinze minutes, toutes sans risque.

### 1.1 Corriger l'URL Facebook — 5 min
`lib/data/navigation.ts` ligne 31 : `facebook.com/Eprisbois33` → l'URL réelle de votre page.
**Vérifiez d'abord** en ouvrant les deux liens dans votre navigateur, Facebook bloquant les tests automatisés. Ce champ alimente le pied de page **et** le `sameAs` du schema.org : c'est le seul lien externe déclaré du site.

### 1.2 Ajouter Instagram au `sameAs` — 5 min
Le profil `@lespritbois` existe mais n'est déclaré nulle part. Ajoutez-le dans la même constante `RESEAUX`.

### 1.3 Réparer le lien mort `/bardages` — 5 min
`app/blog/cloture-brise-vue-bois-guide/page.tsx` ligne 506. Rediriger vers `/amenagement-exterieur` (où bardages et claustras sont traités), ou créer la page si elle est prévue.

### 1.4 Passer `publisher.logo` en PNG — 10 min
Les 14 articles déclarent un logo en SVG, format que Google n'accepte pas pour ce champ. Le PNG existe déjà : `logo2026.png` (350 × 150). Sans ce correctif, les articles ne sont pas éligibles aux résultats enrichis.

### 1.5 Baliser les avis en `AggregateRating` — 15 min
Les 6 avis Google 5/5 sont affichés en clair sur l'accueil. Ce sont de vrais avis tiers, le balisage est donc légitime. À rattacher à l'entité `GeneralContractor` de l'accueil **uniquement**. Extrait JSON-LD prêt dans `findings/schema.md`.

### 1.6 Déposer `llms.txt` — 15 min
Fichier complet prêt à copier en fin de `findings/geo.md`.

---

## Phase 2 — Semaine 1 : le local (le plus rentable)

C'est la catégorie la plus faible (49/100) et celle qui rapporte le plus à un artisan.

### 2.1 Relier le site à la fiche Google Business Profile — 1 h
Aucun lien, aucune carte, aucun bouton d'avis actuellement. Ajouter au minimum : un lien vers la fiche depuis le bloc avis de l'accueil, et une carte sur la future page contact.

### 2.2 Créer une page `/contact` — 2 h
Le seul point de conversion est une ancre `/#quote` sur l'accueil. Une ancre ne se positionne pas sur « charpentier Libourne contact », ne se cite pas indépendamment, et n'apparaît pas dans un panneau de connaissance. Page à créer avec adresse, horaires, téléphone, formulaire, carte, et balisage `ContactPage`.

### 2.3 Vérifier la cohérence NAP avec les registres — 30 min
Écart relevé entre l'adresse du site (« 1 Aux Pradasses ») et celle des registres légaux (« Lotissement Les Pradasses »). Google recoupe ces sources. Harmoniser.

### 2.4 Mettre en place la collecte d'avis — 30 min de mise en place
6 avis, c'est peu. Un SMS type après réception de chantier, avec le lien direct vers la fiche, suffit à changer la trajectoire en quelques mois.

---

## Phase 3 — Semaines 2 à 4 : contenu et preuve

### 3.1 Transformer `/realisations` en études de cas — 1 à 2 jours
La page reçoit 21 liens internes et ne fait que 539 mots. Pour 6 à 8 chantiers : contexte, contrainte, solution, matériaux, durée, commune précise, et si possible un mot du client. Chaque commune citée devient un signal local, et la page passe du statut de galerie à celui de preuve.

### 3.2 Créer une page « Qui sommes-nous » — 3 h
David Bertrand est déclaré « Expert bâtiment » en JSON-LD et signe les 14 articles, sans qu'aucune page ne le présente. C'est le facteur E-E-A-T le plus simple à corriger. À lier depuis chaque signature d'article.

### 3.3 Raccourcir 15 titles et 14 meta descriptions — 2 h
15 titles dépassent 65 caractères (jusqu'à 93), 14 descriptions dépassent 160 (jusqu'à 239). Sur les articles, supprimer le suffixe « | L'Esprit Bois » qui coûte 16 caractères sans rien apporter en découverte.

### 3.4 Étoffer `/amenagement-exterieur` — 1 jour
1 365 mots contre 2 204 à 3 156 sur les pages sœurs, alors qu'elle couvre cinq sous-produits.

---

## Phase 4 — Mois 2 : technique et autorité

### 4.1 Remplacer la police d'icônes tierce — 4 h
304 Ko chargés depuis `fonts.gstatic.com` via une feuille de style bloquante, pour une quinzaine d'icônes réellement utilisées. Les remplacer par des SVG inline supprime une requête tierce en tête de cascade.

### 4.2 Ajouter une Content-Security-Policy — 2 h
Seul en-tête de sécurité manquant.

### 4.3 Factoriser l'entité `GeneralContractor` par `@id` — 2 h
Elle est dupliquée intégralement sur 6 pages, avec des jeux de propriétés incohérents. Un `@id` unique référencé partout consolide l'entité aux yeux de Google.

### 4.4 Citer des sources externes dans les articles — au fil de l'eau
Les articles avancent des chiffres et des seuils réglementaires sans jamais citer service-public.fr, le code de l'urbanisme ou les DTU. Les moteurs génératifs privilégient les contenus sourçables.

### 4.5 Nettoyer le code mort — 15 min
`lib/data/site.ts` contient un tableau `realisations` qu'aucune page n'importe, avec une référence au rendu 3D retiré du site. Piège pour plus tard.

---

## Ce que je ne recommande pas

**Ne créez pas de pages par commune** (`/pergola-saint-emilion`, `/carport-coutras`…). Pour un artisan de cette taille, ce sont des pages satellites à contenu quasi dupliqué, mal vues depuis les mises à jour de 2024-2025, et vous n'avez pas le volume de chantiers pour les alimenter honnêtement. L'architecture actuelle par gamme, avec les communes citées dans le corps des pages, est le bon choix.

Seule exception défendable, et en dernière priorité : une page Saint-Émilion **à angle éditorial réel** — les contraintes ABF en secteur classé UNESCO, sujet sur lequel vous avez une expertise vérifiable et qui intéresse une clientèle précise. Pas un doublon de page de gamme avec le nom de la commune substitué.

---

## À rouvrir quand les accès seront disponibles

- **Search Console + Analytics** : sans eux, on optimise à l'aveugle. Aucune position, aucune impression, aucun taux de clic connu.
- **PageSpeed Insights / CrUX** : quota saturé pendant l'audit, aucune donnée de terrain obtenue.
- **Profil de backlinks** : jamais évalué faute d'outil.
- **Fiche Google Business Profile** : probablement le premier levier local, non audité faute d'accès.
