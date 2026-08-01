# Contenu & E-E-A-T — score 68/100

Audit basé sur le crawl `lesprit-bois.fr-audit/crawl.json` (25 URLs) et le code source du site (`app/*/page.tsx`).

## E-E-A-T — détail par facteur

| Facteur | Poids | Score | Constat synthétique |
|---|---|---|---|
| Expérience | 20% | 12/20 | Belle galerie photo (22 réalisations, alt descriptifs) mais aucun récit de chantier (durée, surface, budget, avant/après, verbatim client rattaché à un projet précis). |
| Expertise | 25% | 18/25 | FAQ schema sur toutes les pages de gamme + articles, contenu technique dense (réglementation, essences, DTU). Signature auteur présente mais aucune preuve de qualification vérifiable. |
| Autorité | 25% | 14/25 | Qualibat + décennale + SMABTP cités, mais un seul lien `sameAs` (Facebook, potentiellement obsolète), pas de mentions presse/partenaires, 6 avis Google seulement. |
| Confiance | 30% | 24/30 | NAP complet et cohérent (schema `GeneralContractor`), mentions légales et politique de confidentialité présentes, SIRET affiché. Manque : page Contact dédiée, avis sans balisage structuré, absence de page « Qui sommes-nous ». |

**Score pondéré E-E-A-T : ≈ 68/100**

## Ce qui fonctionne déjà

- **Profondeur topique réelle sur les pages de gamme** : `/pergolas` (3 156 mots), `/carports` (2 962 mots), `/constructions-bois` (2 204 mots) dépassent largement le plancher de 800 mots pour une page service, avec FAQ structurée (`FAQPage` JSON-LD) sur chacune.
- **Auteur nommé et cohérent sur tout le blog** : les 14 articles portent la même signature « David Bertrand, Expert bâtiment et créateur d'espaces extérieurs », déclarée à la fois en JSON-LD (`BlogPosting.author`) et dans le visuel (nom, date, temps de lecture) — un signal E-E-A-T rare et bien exécuté par rapport à la moyenne des sites artisans.
- **Corpus de blog volumineux et à jour** : 14 articles de 1 880 à 3 744 mots, tous publiés/modifiés en 2026, avec `datePublished`/`dateModified` renseignés — bon signal de fraîcheur.
- **Balisage structuré riche** : `GeneralContractor` avec adresse, géolocalisation, horaires, `hasCredential` (Qualibat), `hasOfferCatalog` ; `BreadcrumbList` sur toutes les pages ; `Service` + `FAQPage` sur les 4 pages de gamme. C'est une base solide pour la citation par les IA (réponses structurées, faits vérifiables extractibles).
- **Preuves de confiance réglementaires réelles** : SIRET affiché en mentions légales (`980 264 584 00015`), assureur décennal nommé (SMABTP), badge Qualibat — au-delà de simples allégations marketing.
- **Avis clients avec prénoms et détails spécifiques** (« David », « Manon », dépôt de permis de construire, modélisation 3D) plutôt que des avis génériques — bon pour la crédibilité perçue, même si le balisage manque (voir plus bas).
- **Zéro image sans attribut alt** sur les pages auditées, alt descriptifs et localisés (« Pergola aluminium adossée à toiture polycarbonate… réalisée par L'Esprit Bois en Gironde ») — bon signal secondaire pour le SEO image et la citation IA.

## Constats

### /realisations est une galerie quasi vide de texte pour une page de preuve sociale — Critique

**Preuve.** `/realisations` ne compte que 539 mots (`crawl.json`) pour 22 photos de chantiers. Lecture du code (`app/realisations/page.tsx`) : chaque projet n'a qu'un titre de 2-4 mots et une localisation générique (« Gironde », « Libourne ») en légende au survol — aucune description de chantier, aucune donnée chiffrée (surface, durée, budget, contraintes), aucun verbatim client rattaché à une réalisation précise, aucun avant/après. Le seul texte substantiel est un chapô de 3 phrases et une section « zone d'intervention » générique.

**Correctif.** Transformer au moins les 6 à 8 projets les plus représentatifs en mini-études de cas (150-250 mots chacune) : contexte du client, contrainte technique, solution retenue, durée du chantier, matériaux, et si possible un verbatim client associé au projet (pas seulement au carrousel d'avis générique de l'accueil). Cela fait aussi remonter la page bien au-dessus du plancher informel de 500-600 mots attendu pour ce type de page et transforme une galerie en preuve d'expérience de premier niveau (E de « Experience » du QRG).

### Absence de page Contact dédiée — Élevée

**Preuve.** Le crawl ne recense aucune URL `/contact` : le seul point de conversion visible est l'ancre `/#quote` sur l'accueil (confirmée dans le CTA de `/realisations` : `href="/#quote"`) et le clic-to-call `tel:+33557406580`. Aucune page ne centralise adresse postale complète, horaires, formulaire, plan d'accès et informations légales de contact hors des mentions légales.

**Correctif.** Créer une page `/contact` autonome et indexable (formulaire, adresse « 1 Aux Pradasses, 33500 Les Billaux », carte, horaires, téléphone, email), avec balisage `ContactPage` + reprise du schema `GeneralContractor`. Une ancre sur la homepage n'est pas citable indépendamment par une IA ni ne capte de requêtes « contact [marque] / [ville] ».

### Absence de page « Qui sommes-nous » / bio auteur détaillée — Élevée

**Preuve.** Le nom « David Bertrand » apparaît uniquement en JSON-LD (`Person`, `jobTitle: "Expert bâtiment et créateur d'espaces extérieurs"`) et en simple ligne de signature sur les articles de blog (nom + date + temps de lecture, sans lien ni texte de présentation — vérifié dans `app/blog/*/page.tsx`, ex. lignes ~283-292 de `carport-bois-guide/page.tsx`). Aucune page `/a-propos`, `/equipe` ou `/qui-sommes-nous` n'existe dans le crawl ni dans l'arborescence `app/`. Le titre « Expert bâtiment » n'est adossé à aucune qualification vérifiable (diplôme, ancienneté, numéro RGE/Qualibat individuel, lien LinkedIn).

**Correctif.** Créer une page « Qui sommes-nous » présentant l'historique de l'entreprise, la certification Qualibat, l'assurance SMABTP (actuellement citée seulement en mentions légales et sur un badge homepage, jamais reliée à une page consultable), le nombre d'années d'expérience, et une vraie bio de David Bertrand avec crédentiales concrètes. Lier cette page depuis chaque byline d'article de blog. C'est le facteur Expertise le plus facilement actionnable du guide qualité de septembre 2025.

### Avis clients affichés sans balisage structuré `Review`/`AggregateRating` — Élevée

**Preuve.** La section « Avis clients : 5,0 sur 5 d'après 6 avis Google » (`app/page.tsx`, lignes 840-885) affiche une note et six témoignages nommés, mais le JSON-LD de la page (`WebSite` + `GeneralContractor`) ne contient ni `AggregateRating` ni `Review` — confirmé par l'inspection du bloc JSON-LD complet de la homepage dans `crawl.json`. La note « 5,0/6 avis » est donc une allégation visuelle non vérifiable par les moteurs/IA, et prive la page de son éligibilité aux rich snippets étoiles.

**Correctif.** Ajouter un objet `AggregateRating` (ratingValue: 5.0, reviewCount: 6) rattaché à l'entité `GeneralContractor`, idéalement avec les `Review` individuels correspondant aux avis affichés (auteur, texte, date si disponible). Attention à ne baliser que des avis authentiques et vérifiables (les avis Google eux-mêmes ne peuvent pas être republiés en `Review` schema sans risque, mieux vaut agréger uniquement la note globale sourcée depuis Google Business Profile).

### /amenagement-exterieur nettement plus courte que les 3 autres pages de gamme — Moyenne

**Preuve.** 1 365 mots contre 3 156 (`/pergolas`), 2 962 (`/carports`) et 2 204 (`/constructions-bois`) — soit 35 à 55 % du volume des pages sœurs, alors que cette page couvre en réalité plusieurs sous-produits hétérogènes (terrasses, pool houses, abris de jardin, cuisines d'été, claustras/bardages, d'après le `hasOfferCatalog` de la homepage). La structure Hn (`app/amenagement-exterieur/page.tsx`) montre des H2 courts par sous-produit (« Terrasses bois », « Pool houses »...) sans le niveau de détail (matériaux, FAQ par sous-produit, cas d'usage) qu'on trouve sur `/pergolas` ou `/carports`.

**Correctif.** Étoffer chaque sous-section (terrasses, pool houses, abris de jardin, cuisines d'été, claustras) avec le même niveau de détail que les autres pages de gamme : essences/matériaux disponibles, méthode de pose, budget indicatif, FAQ dédiée. Envisager, si le volume de contenu par sous-produit devient important, de scinder en pages dédiées (`/terrasses-bois`, `/pool-house`) reliées depuis une page pilier `/amenagement-exterieur` — à arbitrer avec la stratégie de maillage globale plutôt qu'en gonflant artificiellement une page généraliste.

### Chevauchement thématique probable entre articles de blog et pages de gamme — Moyenne

**Preuve.** Plusieurs paires de contenus couvrent la même intention avec un vocabulaire quasi identique : `/blog/pergola-bois-ou-bioclimatique` (1 978 mots) et `/blog/pergola-bioclimatique-aluminium-guide` (3 414 mots) vs. `/pergolas` (3 156 mots) ; `/blog/carport-bois-guide` (2 272 mots) et `/blog/carport-aluminium-ou-bois-comparatif` (3 066 mots) vs. `/carports` (2 962 mots). Les quatre pages de gamme et les 14 articles utilisent tous le même schéma `FAQPage` avec des questions qui se recoupent probablement (autorisation d'urbanisme, essences, budget) sans qu'on puisse, à partir du seul crawl, exclure la duplication de paragraphes entiers.

**Correctif.** Auditer manuellement (ou via un outil de similarité type Copyscape/Siteliner) les paires page-gamme / article-blog les plus proches thématiquement, en particulier pergolas et carports qui ont chacun deux articles dédiés. S'assurer que chaque article de blog traite un angle différent (comparatif, réglementaire, technique) de celui de la page de gamme (commerciale/catalogue), et ajouter des liens internes contextuels clairs entre eux plutôt qu'une répétition de contenu. Vérifier qu'aucune FAQ n'est copiée mot pour mot entre une page de gamme et son article miroir, ce qui diluerait la pertinence perçue par Google pour les deux URLs.

### Lien `sameAs` unique et potentiellement obsolète (autorité externe faible) — Moyenne

**Preuve.** Le JSON-LD `GeneralContractor` de la homepage ne déclare qu'un seul profil externe : `"sameAs": ["https://www.facebook.com/Eprisbois33"]`. Cette URL diffère de celle identifiée en mémoire comme la page Facebook actuelle et renommée de l'entreprise (`facebook.com/lespritbois33`), avec un doublon `/lespritbois` déjà signalé par ailleurs. Aucun autre profil (Instagram, LinkedIn, Houzz, annuaire Qualibat) n'est déclaré, ce qui limite les signaux d'autorité externe croisés.

**Correctif.** Corriger l'URL Facebook dans le JSON-LD pour pointer vers la page actuelle et active, retirer/rediriger le doublon, et ajouter les autres profils actifs de l'entreprise (Instagram cité en mémoire, fiche Google Business Profile, annuaire Qualibat professionnel) dans `sameAs` pour renforcer le graphe d'entité.

### Volume d'avis limité (6 avis) pour un signal d'autorité/confiance — Faible

**Preuve.** La page d'accueil affiche « 5,0 sur 5 d'après 6 avis Google » — un échantillon restreint qui, bien qu'à 5/5, offre un signal de confiance statistiquement faible comparé à des concurrents pouvant afficher plusieurs dizaines d'avis.

**Correctif.** Mettre en place une relance systématique post-chantier (SMS/email avec lien direct vers la fiche Google) pour faire croître le volume d'avis à moyen terme. Ce n'est pas un défaut de contenu à corriger sur la page elle-même, mais un point de vigilance pour la trajectoire d'autorité.

### Pas de signal AI-généré problématique détecté — Faible (positif à noter)

**Preuve.** Le contenu inspecté (byline nommée, FAQ contextualisées à la Gironde, mentions de communes précises — Libourne, Les Billaux, Saint-Émilion, Coutras, Fronsac, Vayres, Izon — et détails techniques spécifiques au DTU/urbanisme) ne présente pas les marqueurs classiques de contenu IA générique de faible qualité (généricité, absence de spécificité, structure strictement répétitive) relevés par le QRG de septembre 2025. La structure des articles reste toutefois assez homogène d'un article à l'autre (mêmes blocs : chapô réponse directe, sections Hn, FAQ, signature auteur) — acceptable tant que le contenu de chaque section reste spécifique, mais à surveiller si le volume de production augmente encore.

**Correctif.** Aucune action corrective urgente. Continuer à ancrer chaque nouvel article dans des détails locaux/techniques vérifiables (comme actuellement) pour éviter la dérive vers un contenu perçu comme générique par les futures mises à jour du core update.

## Résumé des priorités

1. **Critique** — Étoffer `/realisations` avec de vraies études de cas chiffrées et des verbatims rattachés aux projets.
2. **Élevée** — Créer une page `/contact` dédiée et indexable.
3. **Élevée** — Créer une page « Qui sommes-nous » avec bio vérifiable de David Bertrand, liée depuis chaque article de blog.
4. **Élevée** — Ajouter le balisage `AggregateRating`/`Review` pour les avis déjà affichés.
5. **Moyenne** — Étoffer `/amenagement-exterieur` au niveau des autres pages de gamme.
6. **Moyenne** — Auditer et différencier le contenu blog vs. pages de gamme sur pergolas et carports.
7. **Moyenne** — Corriger et enrichir le champ `sameAs` (Facebook actuel + autres profils).
8. **Faible** — Poursuivre la collecte d'avis Google pour dépasser l'échantillon de 6.
