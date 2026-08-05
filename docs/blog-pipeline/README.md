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
push → `npm run deploy` → contrôle HTTP 200 → ping IndexNow → sujet marqué `publié`.

Ping IndexNow (notifie Bing/Yandex/Naver de la nouvelle URL, clé déposée dans
`public/a0b43b04a9254681af50f9e95240c80b.txt`) :

```
curl -s "https://api.indexnow.org/indexnow?url=https://lesprit-bois.fr/blog/<slug>&key=a0b43b04a9254681af50f9e95240c80b"
```

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

⚠️ **Panne d'environnement identifiée le 04/08/2026 — à connaître avant tout
build.** Le dépôt est dans `~/Documents/projet`, **synchronisé par iCloud
Drive**. Depuis un `CKUnderlyingErrorContainerReset` du 02/08 à 22h06, le démon
`fileproviderd` est bloqué en attente ininterruptible et `brctl status` montre un
backlog en `pending-scan` sous `/Documents/projet` (17 tentatives). Conséquence :
toute **création massive de fichiers** dans le dépôt est paralysée — `next build`
reste indéfiniment sur « Creating an optimized production build », sans jamais
échouer ni rendre la main. L'I/O brut est pourtant sain (8 Go/s) : seul le
parcours/écriture en masse via iCloud est touché. C'est la vraie cause du blocage
du 03/08, longtemps attribué à tort à un « souci d'environnement local » vague.

**Contournement qui fonctionne** : cloner le dépôt hors iCloud (`/tmp` n'est
pas synchronisé), committer/pousser normalement depuis le dépôt réel (les
opérations git restent rapides, seule la création massive de fichiers via
`next build`/`opennextjs-cloudflare` est touchée), puis builder **et déployer**
depuis la copie hors iCloud :

```
git clone --no-hardlinks --local . /tmp/iso
cd /tmp/iso && npm install && npm run build && npm run deploy
```

⚠️ **Incident du 04/08/2026 — NE PAS symlinker `node_modules`.** La première
version de ce contournement liait `node_modules` du dépôt réel
(`ln -sfn "$PWD/node_modules" /tmp/iso/node_modules`) au lieu d'un vrai
`npm install`. Le build passait, mais le Worker déployé plantait en 500 sur
**tout le site** (accueil et articles existants inclus) avec l'erreur `Dynamic
require of "/.next/server/middleware-manifest.json" is not supported` :
Next.js résout sa racine de projet via `node_modules`, et un symlink pointant
hors de `/tmp/iso` casse cette résolution dans le bundle Worker. Correction
appliquée en urgence : `rm` le symlink, `npm install` (+ `npm approve-scripts`
pour esbuild/sharp/workerd, bloqués par défaut) puis rebuild/redeploy réels
depuis `/tmp/iso` — site rétabli en quelques minutes. **Toujours faire un vrai
`npm install` dans le clone**, jamais de symlink vers le `node_modules` du
dépôt réel.

Correctif durable à faire côté machine (nécessite David) : relancer la
synchronisation iCloud, ou sortir `projet/` de `~/Documents` pour l'isoler
d'iCloud. Tant que ce n'est pas fait, le contournement ci-dessus reste requis.

⚠️ **Sessions concurrentes — le point le plus dangereux.** Le 04/08, une
exécution restée vivante depuis le 03/08 relançait des
`rm -rf .next && npm run build` en parallèle : deux builds qui se détruisent
mutuellement le `.next`. Vérifier `pgrep -f "next build"` avant de conclure, et
ne pas tuer les processus d'une autre session en boucle — c'est sans effet, elle
respawn. Surtout : **cette autre session déploie aussi en production**. Elle a
mis en ligne la version `8b1d1ec1` (04/08 06:36 UTC) par-dessus un rollback, et
le site répondait 500. Avant de conclure quoi que ce soit sur l'état de la prod,
vérifier quelle version est réellement déployée :
`npx wrangler deployments status`.

⚠️ **Distinguer un 500 transitoire d'un site réellement cassé.** Après *tout*
changement de version, les premières requêtes sur les routes ISR (`/`,
`/sitemap.xml`, `/rss.xml`, les articles) renvoient des 500 le temps que le cache
se repeuple, puis passent à 200 en ~30 s. Ne pas conclure sur une seule salve de
`curl` : **re-tester 3 fois espacées**. Le vrai symptôme du worker cassé
(symlink `node_modules`, ci-dessus) est différent — un 500 **stable**, sur
toutes les routes, y compris l'URL `*.workers.dev` directe.

✅ **Valider une version sans exposer le trafic.** Plutôt que `npm run deploy`
qui promeut directement, préférer en environnement dégradé :

```
cd /tmp/iso && npx opennextjs-cloudflare build && npx opennextjs-cloudflare upload
# tester la « Version Preview URL » renvoyée, puis seulement :
npx wrangler versions deploy <version-id>@100% --yes
```

C'est ce qui a permis, le 04/08, de confirmer la version saine avant de la
mettre en ligne, et de sortir de l'alternance rollback / redeploy à l'aveugle.

**Prochain créneau (06/08/2026)** : le 05/08 a consommé la piste **rénovation
d'une terrasse existante** sous `renover-terrasse-bois-existante` (bois ; thèse :
le grisaillement est esthétique et réversible, c'est l'état de la sous-face qui
décide entre poncer, remplacer les lames et tout déposer — diagnostic en trois
gestes, dégrisage/ponçage/saturateur dans l'ordre, remplacement lame par lame,
quatre scénarios de budget 15 → 150 €/m² posé). Le build est repassé normalement
dans le dépôt réel ce jour-là : le blocage iCloud décrit plus bas ne s'est pas
manifesté, le contournement `/tmp/iso` n'a pas été nécessaire (le vérifier au cas
par cas plutôt que de l'appliquer d'office). ⚠️ Le créneau **terrasse est
désormais saturé à cinq articles** : des pistes terrasse identifiées, seule la
**terrasse surélevée avec garde-corps** reste, et elle est déjà partiellement
traitée par l'article garde-corps du 04/08 — considérer le sujet terrasse comme
clos sauf angle radicalement neuf. Le 05/08 étant un article bois, le prochain
doit **repartir sur l'aluminium**. Idées alu encore libres : teinte RAL,
brise-soleil orientables et protections solaires, entretien pergola/véranda alu,
clôture alu vs bois (limite séparative, occultation, portail assorti), véranda ou
extension ossature bois (angle décision).

**Créneau précédent (05/08/2026)** : le 04/08 a consommé la moitié « garde-corps »
de l'idée « garde-corps et clôture aluminium vs bois », publiée sous
`garde-corps-terrasse-aluminium-ou-bois` (alu dominant, comparatif de décision :
norme NF P01-012 révisée le 22/11/2024, remplissages verre/barreaudage/câbles,
entretien et coût sur quinze ans, budget au mètre linéaire, ancrage — article
rédigé le 03/08 mais publié le 04/08, un souci d'environnement local ayant
bloqué le build la veille, cf. note plus bas). La **clôture aluminium vs bois**
(limite séparative, occultation, portail assorti) reste libre et distincte.
Après deux articles à dominante alu et bois alternés, le prochain peut repartir
sur le **bois** (terrasse surélevée avec garde-corps désormais partiellement
traitée — préférer la rénovation d'une terrasse existante) ou sur les idées alu
encore libres : teinte RAL, brise-soleil orientables et protections solaires,
entretien pergola/véranda alu, véranda ou extension ossature bois (angle
décision).

**Créneau précédent (03-04/08/2026)** : le 02/08 a consommé la piste « terrasse
autour d'une piscine » sous `plage-piscine-bois-essences-pose` (bois, angle
trouvé hors réserve : contraintes propres au bord d'un bassin — alternance
mouillé/sec et UV plutôt que le chlore, antidérapance pieds nus et lame
brossée vs rainurée, raccord aux margelles, trappes de visite au-dessus des
pièces techniques, inox A4 en piscine au sel, sécurité du bassin, budget
2026). Deux articles bois d'affilée (01/08 et 02/08) : le prochain devrait
**revenir à l'aluminium**. Idées alu encore libres : teinte RAL, brise-soleil
orientables et protections solaires, garde-corps alu vs bois, entretien
pergola/véranda alu, véranda ou extension ossature bois (angle décision).
Dernières publications : 29/07 bois (filière locale), 30/07 alu (pergola
bioclimatique), 31/07 mixte (comparatif carports), 01/08 bois (structure
terrasse) **et** 01/08 alu (véranda — deux articles ce jour-là, l'article
terrasse ayant été publié par le créneau précédent), 02/08 bois (plage de
piscine).

⚠️ Attention doublon terrasse : **cinq** articles terrasse coexistent désormais —
`renover-terrasse-bois-existante` (05/08 : diagnostic sous-face, dégrisage et
ponçage, remplacement des lames, budget de la réfection) et
`plage-piscine-bois-essences-pose` (bord de bassin : humidité cyclique,
antidérapance, margelles, trappes, inox A4) s'ajoutent aux trois ci-dessous. Des
trois pistes terrasse encore libres, il ne reste que la terrasse surélevée avec
garde-corps — elle-même partiellement traitée par l'article garde-corps du 04/08.
Les trois autres :
`quel-bois-pour-terrasse-exterieure` (essences, classes d'emploi, budget),
`proteger-terrasse-bois-canicule-entretien-ete` (entretien de surface) et
`terrasse-bois-structure-plots-lambourdes` (sous-face : supports, lambourdes,
ventilation, drainage, fixations). Le créneau terrasse est saturé : tout
nouveau sujet terrasse devra trouver un angle vraiment distinct
(terrasse autour d'une piscine, terrasse surélevée avec garde-corps,
rénovation d'une terrasse existante).

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
| 2026-08-01 | publié  | Structure d'une terrasse en bois : plots, lambourdes et ventilation | terrasse-bois-structure-plots-lambourdes |
| 2026-08-01 | publié  | Véranda en aluminium : isolation, urbanisme et budget en Gironde | veranda-aluminium-isolation-urbanisme-budget |
| 2026-08-02 | publié  | Plage de piscine en bois : essence, pose et budget autour d'un bassin | plage-piscine-bois-essences-pose |
| 2026-08-04 | publié  | Garde-corps de terrasse : aluminium ou bois ? Sécurité, entretien et budget en Gironde | garde-corps-terrasse-aluminium-ou-bois |
| 2026-08-05 | publié  | Rénover une terrasse en bois : poncer, changer les lames ou tout refaire ? | renover-terrasse-bois-existante |

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
- ~~**Véranda aluminium** : usages, isolation, urbanisme et budget~~ → consommé
  le 01/08/2026 sous `veranda-aluminium-isolation-urbanisme-budget` (rupture de
  pont thermique et vitrages, toiture et surchauffe d'été, étanchéité et
  raccord à la maison, statut chauffée/espace tampon, seuils d'urbanisme,
  budget posé 2026). Aucun coefficient Uw ni seuil thermique cité : la
  distinction chauffée-communicante / espace tampon est traitée
  qualitativement, avec renvoi mairie + bureau d'études.
- **Véranda ou extension ossature bois** : que choisir pour agrandir ? (angle
  décision, distinct de `extension-ossature-bois-prix-m2` et de l'article
  véranda alu ci-dessus, qui aborde déjà brièvement l'arbitrage).
- **Entretien d'une pergola / véranda aluminium** : thermolaquage, joints,
  motorisation — le pendant alu de nos articles d'entretien bois. ⚠️ Angle à
  resserrer sur l'entretien pur : le produit véranda et le produit pergola
  bioclimatique sont désormais tous deux couverts.
- **Choisir la teinte de son aluminium** : nuancier RAL, mat/sablé, teintes qui
  vieillissent bien, accord avec une maison girondine.
- **Brise-soleil orientables et protections solaires** : alu, stores, et le
  couple pergola + occultation, angle saisonnier été.
- **Clôture aluminium vs bois** : durabilité, entretien, coût dans le temps
  (distinct de `cloture-brise-vue-bois-guide`). ⚠️ Le volet **garde-corps** de
  cette idée a été consommé le 03/08/2026 sous
  `garde-corps-terrasse-aluminium-ou-bois` (sécurité d'un plancher surélevé,
  norme NF P01-012 révisée, remplissages, entretien sur quinze ans, ancrage) :
  un futur sujet clôture doit rester sur la limite séparative, l'occultation et
  le portail assorti, sans refaire le comparatif matière déjà tranché.

Idées bois consommées (déjà publiées) : entretien terrasse, poulailler,
bardage, pool-house, abri de jardin kit vs sur-mesure, extension ossature bois,
filière bois local (douglas / pin maritime), structure de terrasse (plots,
lambourdes, ventilation — angle trouvé hors réserve le 01/08/2026, la réserve
bois étant vide), plage de piscine en bois (angle hors réserve du 02/08/2026),
rénovation d'une terrasse existante (05/08/2026 — dernière piste terrasse de la
liste, hormis la terrasse surélevée).

ℹ️ Constat de l'iconographe (02/08/2026) : `/images/terrasse-bois-piscine-exemple-opt.webp`
n'est pas une photo de chantier maison mais la photo Pexels n° 19135424. Elle
est aujourd'hui utilisée comme s'il s'agissait d'une réalisation sur
`/amenagement-exterieur` et `/blog/pool-house-bois-guide` — à faire vérifier
par David avant de la présenter comme une preuve de chantier.

Quand cette réserve sera à son tour épuisée : veille web (WebSearch) pour un
angle neuf, bois ou alu, en recoupant `lib/data/blog.ts`.
