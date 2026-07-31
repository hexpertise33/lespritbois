# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

## Routine planifiée — publication quotidienne automatique

Depuis le 26/07/2026, le blog fonctionne en **auto-publication quotidienne, sans
relecture**. Tâche planifiée locale `article-quotidien-lespritbois`
(cron `0 8 * * *` = tous les jours 8h, heure locale) : elle choisit un sujet neuf
dans la sémantique **bois et aluminium** de l'entreprise (élargie le
29/07/2026), rédige, illustre, build, commit, push ET déploie en prod
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

Toute la réserve **bois** a été consommée au 29/07/2026 : dernier sujet
prioritaire (bardage) publié le 28/07 sous `bardage-bois-facade-essences-pose`,
dernière idée (filière bois local) le 29/07 sous
`bois-local-pin-maritime-douglas-gironde`.

La réserve a été **rechargée le 29/07/2026 avec les sujets aluminium** (carport,
pergola bioclimatique, véranda, extension, protections solaires) : voir « Idées
de sujets en réserve » plus bas. C'est là que doivent piocher les prochains
articles.

**Prochain créneau (01/08/2026)** : le comparatif carport alu/bois est publié
(31/07) sous `carport-aluminium-ou-bois-comparatif`. Prochains sujets conseillés
dans la réserve : **véranda aluminium** (seuils et réglementation thermique à
vérifier par recherche web avant citation) ou **véranda ou extension ossature
bois** (angle décision). Dernières publications : 29/07 bois (filière locale),
30/07 alu (pergola bioclimatique), 31/07 mixte (comparatif carports) — un
article franchement bois serait légitime pour rééquilibrer.

**Point réglementaire tranché le 28/07/2026 (à ne pas rouvrir).** L'accroche
« bardage bois × RE2020 » qui figurait ici s'appuyait sur un décret n° 2026-16
supposé encadrer le bardage : c'est un faux rattachement. Vérification faite,
le décret n° 2026-16 du 15 janvier 2026 existe bien (Légifrance,
JORFTEXT000053378848) mais il élargit le périmètre de la **RE2020 à treize
catégories de bâtiments tertiaires et industriels**, pour les permis déposés à
compter du 1er mai 2026. Il **ne concerne pas** le bardage d'une maison
individuelle. L'article publié ne cite donc aucun décret ; il s'appuie sur le
**NF DTU 41.2** et sur les règles de déclaration préalable.

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
| 2026-07-16 | écarté  | Bardage bois en 2026 : essences, tendances et RE2020 (angle RE2020 infondé) | bardage-bois-re2020-tendances |
| 2026-07-29 | publié  | Bois local en Gironde : pin maritime, douglas et châtaignier, que vaut la filière Nouvelle-Aquitaine ? | bois-local-pin-maritime-douglas-gironde |
| 2026-07-28 | publié  | Bardage bois en façade : quelle essence, quelle pose et quel budget en 2026 ? | bardage-bois-facade-essences-pose |
| 2026-07-26 | publié  | Poulailler en bois : réglementation 2026, bien-être et implantation | poulailler-bois-reglementation-implantation |
| 2026-07-21 | publié  | Clôture et brise-vue en bois : essence, hauteur autorisée et budget 2026 | cloture-brise-vue-bois-guide |
| 2026-07-23 | publié  | Abri de jardin en bois : kit ou sur-mesure ? Le comparatif honnête       | abri-jardin-bois-kit-ou-sur-mesure |
| 2026-07-23 | publié  | Extension en ossature bois : prix au m², délais et avantages en 2026     | extension-ossature-bois-prix-m2   |
| 2026-07-30 | publié  | Pergola bioclimatique en aluminium : lames orientables, motorisation et budget en 2026 | pergola-bioclimatique-aluminium-guide |
| 2026-07-31 | publié  | Carport aluminium ou carport bois : le comparatif de décision (budget, entretien, style) | carport-aluminium-ou-bois-comparatif |

## Idées de sujets en réserve

**Élargissement du 29/07/2026 — l'aluminium entre dans la routine.** Le magasin
vend et pose le bois **et** l'aluminium (les pages `/pergolas` et `/carports` le
disent déjà largement). Le blog couvre donc les deux matières. Voir la section
« Thèmes » et « Comparatifs bois / aluminium » de `ligne-editoriale.md`.

Réserve aluminium et mixte (le sujet « pergola bioclimatique aluminium » a été
consommé le 30/07/2026 sous `pergola-bioclimatique-aluminium-guide` : angle
produit, il couvre déjà lames orientables, motorisation/capteurs, thermolaquage
et teinte RAL, stores zip et entretien alu — ne pas le refaire, et éviter un
doublon avec l'idée « entretien pergola / véranda alu » ci-dessous, qu'il faudra
recentrer sur la véranda) :

- ~~**Carport aluminium ou carport bois** : le comparatif de décision~~ →
  consommé le 31/07/2026 sous `carport-aluminium-ou-bois-comparatif` (portées et
  structure, thermolaquage/RAL, entretien sur 15-20 ans, budgets posés 2026,
  évacuation des eaux, verdict par profil). Ne pas refaire de comparatif carport
  bois/alu ; un futur sujet carport devra changer d'angle (usage, dimensionnement,
  motorisation d'accès).
- **Véranda aluminium** : usages, isolation, urbanisme et budget — seuils et
  réglementation thermique à vérifier par recherche web avant citation.
- **Véranda ou extension ossature bois** : que choisir pour agrandir ? (angle
  décision, distinct de `extension-ossature-bois-prix-m2`).
- **Entretien d'une pergola / véranda aluminium** : thermolaquage, joints,
  motorisation — le pendant alu de nos articles d'entretien bois.
- **Choisir la teinte de son aluminium** : nuancier RAL, mat/sablé, teintes qui
  vieillissent bien, accord avec une maison girondine.
- **Brise-soleil orientables et protections solaires** : alu, stores, et le
  couple pergola + occultation, angle saisonnier été.
- **Garde-corps et clôture aluminium vs bois** : durabilité, entretien, coût
  dans le temps (distinct de `cloture-brise-vue-bois-guide`).

Idées bois consommées (déjà publiées) : entretien terrasse, poulailler,
bardage, pool-house, abri de jardin kit vs sur-mesure, extension ossature bois,
filière bois local (douglas / pin maritime).

Quand cette réserve sera à son tour épuisée : veille web (WebSearch) pour un
angle neuf, bois ou alu, en recoupant `lib/data/blog.ts`.
