# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

## Routine planifiée

Tâche planifiée locale `veille-blog-lespritbois` (cron `0 8 * * 2,4` = mardi &
jeudi 8h, heure locale). Elle exécute le Temps 1 (`/veille-blog`) automatiquement
et livre 2 propositions par notification + fichier `docs/blog-pipeline/AAAA-MM-JJ.md`.
Gérable depuis la section « Scheduled » de l'app. Ne publie jamais (pas de
push/deploy).

## Workflow

1. **Temps 1 — veille (auto, mardi/jeudi ~8h).** L'agent planifié lance
   `/veille-blog` : veille web, recoupe avec les sujets déjà listés ci-dessous
   et avec `lib/data/blog.ts`, écrit 2 propositions dans
   `docs/blog-pipeline/AAAA-MM-JJ.md`, notifie l'utilisateur.
2. **Temps 2 — publication (avec l'utilisateur).** L'utilisateur choisit/ajuste
   une proposition, lance `/rediger-article`, qui rédige, source les images,
   build, puis commit + push + deploy Cloudflare, et marque le sujet `publié`
   ci-dessous.

Voir la charte : `docs/blog-pipeline/ligne-editoriale.md`.

## ⏭️ Prochain créneau : mardi 21/07/2026

Le sujet « canicule » qui était réservé pour ce créneau a finalement été **publié
le 20/07**, en avance. Le créneau du 21/07 est donc **libre** : la veille
automatique reprend son fonctionnement normal (2 propositions neuves).

Reste en réserve, non rédigé : `bardage-bois-re2020-tendances` (proposé le 16/07).
Son accroche RE2020 s'appuie sur un décret n° 2026-16 **non vérifié** : à confirmer
sur Légifrance avant toute rédaction, ou à retirer de l'angle.

## Sujets

Statuts : `idée` · `proposé` · `publié` · `écarté`.

| Date       | Statut  | Titre                                                    | Slug                              |
|------------|---------|----------------------------------------------------------|-----------------------------------|
| 2026-07-09 | publié  | Pergola bois ou pergola bioclimatique : comment choisir ?| pergola-bois-ou-bioclimatique     |
| 2026-07-09 | publié  | Carport en bois : bien le choisir et l'intégrer          | carport-bois-guide                |
| 2026-07-09 | publié  | Quel bois choisir pour une terrasse extérieure ?         | quel-bois-pour-terrasse-exterieure|
| 2026-07-11 | publié  | Abri, carport, pergola : quelle autorisation en 2026 ?   | autorisation-urbanisme-abri-carport-pergola-2026 |
| 2026-07-20 | publié  | Protéger sa terrasse en bois de la canicule (été)        | proteger-terrasse-bois-canicule-entretien-ete |
| 2026-07-16 | publié  | Pool-house en bois : réglementation, usages et budget 2026 | pool-house-bois-guide           |
| 2026-07-16 | proposé | Bardage bois en 2026 : essences, tendances et RE2020     | bardage-bois-re2020-tendances     |

## Idées de sujets en réserve

- Entretien d'une terrasse bois (saturateur, dégrisage) — saisonnier printemps.
- Poulailler en bois : bien-être animal, essences, implantation.
- Bardage bois : claire-voie, pré-grisé, entretien, RE2020.
- Pool-house bois : usages, réglementation piscine, intégration.
- Abri de jardin sur mesure vs kit.
- Extension ossature bois : délais, prix au m², avantages vs parpaing.
- Bois local (douglas, pin maritime) : filière Nouvelle-Aquitaine.
