# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

## Routine planifiée — publication quotidienne automatique

Depuis le 26/07/2026, le blog fonctionne en **auto-publication quotidienne, sans
relecture**. Tâche planifiée locale `article-quotidien-lespritbois`
(cron `0 8 * * *` = tous les jours 8h, heure locale) : elle choisit un sujet neuf
dans la sémantique bois, rédige, illustre, build, commit, push ET déploie en prod
(`npm run deploy`), vérifie le HTTP 200, puis passe le sujet à `publié` ci-dessous.
Gérable depuis la section « Scheduled » de l'app.

L'ancienne veille bihebdomadaire `veille-blog-lespritbois` (Temps 1 sans
publication) est **désactivée** : l'auto-publication quotidienne la remplace.

## Workflow (mode quotidien)

Un seul temps, entièrement automatique (routine `article-quotidien-lespritbois`) :
choix du sujet (réserve ci-dessous → sinon veille web pour un angle neuf, en
recoupant `lib/data/blog.ts` pour éviter les doublons) → rédaction
(`redacteur-bois`) → images (`iconographe-bois`) → `npm run build` → commit +
push → `npm run deploy` → contrôle HTTP 200 → sujet marqué `publié`.

Garde-fous automatiques (pas de relecture humaine) : build bloquant, vérification
200 après deploy, anti-doublon de slug/angle et de cover, prudence factuelle
(aucun décret/seuil/chiffre inventé — source vérifiée ou formulation prudente).

Publication manuelle ponctuelle toujours possible via `/rediger-article`.
Voir la charte : `docs/blog-pipeline/ligne-editoriale.md`.

## Sujets en réserve prioritaires

Restent en réserve, non rédigés :
- `poulailler-bois-reglementation-implantation` (proposé le 21/07, proposition 1 —
  prêt à rédiger, sources dans `docs/blog-pipeline/2026-07-21.md`).
- `bardage-bois-re2020-tendances` (proposé le 16/07). Son accroche RE2020 s'appuie
  sur un décret n° 2026-16 **non vérifié** : à confirmer sur Légifrance avant toute
  rédaction, ou à retirer de l'angle.

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
| 2026-07-21 | proposé | Poulailler en bois : réglementation 2026, bien-être et implantation | poulailler-bois-reglementation-implantation |
| 2026-07-21 | publié  | Clôture et brise-vue en bois : essence, hauteur autorisée et budget 2026 | cloture-brise-vue-bois-guide |
| 2026-07-23 | publié  | Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête       | abri-jardin-bois-kit-ou-sur-mesure |
| 2026-07-23 | publié  | Extension en ossature bois : prix au m², délais et avantages en 2026     | extension-ossature-bois-prix-m2   |

## Idées de sujets en réserve

- Entretien d'une terrasse bois (saturateur, dégrisage) — saisonnier printemps.
- Poulailler en bois : bien-être animal, essences, implantation.
- Bardage bois : claire-voie, pré-grisé, entretien, RE2020.
- Pool-house bois : usages, réglementation piscine, intégration.
- Abri de jardin sur mesure vs kit.
- Extension ossature bois : délais, prix au m², avantages vs parpaing.
- Bois local (douglas, pin maritime) : filière Nouvelle-Aquitaine.
