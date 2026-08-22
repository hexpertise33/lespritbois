# Pipeline éditorial — Blog L'Esprit Bois

Mémoire de la routine de publication (2 articles/semaine, **mardi & jeudi**).

---

## 🛑 À LIRE AVANT TOUTE RÉDACTION — le créneau est-il déjà servi ?

**Des articles peuvent avoir été écrits À L'AVANCE, plusieurs jours avant leur
date.** C'est arrivé le 11/08/2026 : David a demandé dans la même soirée les
articles du 12/08 et du 13/08, tous deux rédigés, déployés et vérifiés en 200 ce
soir-là. Le tableau « Sujets » fait foi.

**Test à faire en premier, avant de choisir un sujet :**

1. Y a-t-il, **n'importe où** dans `lib/data/blog.ts` (pas seulement en première
   position), une entrée dont la `date` est **celle du jour** ?
2. Si oui, son URL `https://lesprit-bois.fr/blog/<slug>` répond-elle **200** ?

**Si les deux réponses sont oui : NE RIEN PUBLIER.** Le créneau du jour est déjà
servi. Signale-le dans ton résumé et arrête-toi là. Le quota est d'un article par
jour ; en publier un second créerait deux articles à la même date.

⚠️ **Ne teste pas seulement la première entrée du tableau.** C'était la règle
écrite après le double déclenchement du 10/08, et elle est **insuffisante** : dès
qu'un article est écrit en avance, la première entrée porte une date *future*, le
test échoue, et la tâche publie un article en trop. C'est la date recherchée dans
tout le tableau qui compte, pas la position.

Si aucune entrée ne porte la date du jour, le créneau est libre : déroule la
routine normalement.

---

## 🛑 JAMAIS D'ARTICLE EN AVANCE — un run = un article daté du jour

Règle posée par David le 22/08/2026. Elle prime sur la réserve, sur l'alternance
des matières et sur toute envie de prendre de l'avance.

- **L'article publié porte toujours la date du jour même.** Jamais une date
  future, même si la réserve est pleine, même si le sujet du lendemain semble
  prêt, même si le run tombe tard le soir.
- **Un run = au plus un article.** Ne sers jamais les créneaux suivants
  « pendant qu'on y est ».
- **La veille ne publie rien.** Elle écrit ses propositions dans
  `docs/blog-pipeline/AAAA-MM-JJ.md` et passe les lignes du tableau « Sujets » au
  statut `proposé`. Elle ne crée aucune page `app/blog/<slug>/`, n'ajoute aucune
  entrée dans `lib/data/blog.ts`, ne build pas, ne pousse pas, ne déploie pas.
- **Réserve vide ≠ écrire en avance.** Le run du jour fait sa veille, **puis**
  rédige et publie **le seul article du jour** à partir d'un des angles trouvés.
  Les autres angles restent en réserve pour les jours suivants.

Pourquoi : l'écriture en avance est la cause de toute la confusion des 12–15/08
puis des 19–23/08. Dès qu'une entrée porte une date future, la tête du tableau
ment sur l'état du jour, les runs planifiés ne savent plus s'ils doivent publier,
et le contrôle « créneau déjà servi » a dû être réécrit deux fois. Le seul état
sain est : **une entrée par jour, écrite le jour même**.

Seule exception : une demande explicite de David dans la conversation (« écris
aussi l'article de demain »). Elle ne se déduit jamais du contexte, d'une réserve
confortable ni d'un run qui a du temps devant lui.

---

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

✅ **Panne iCloud RÉSOLUE le 13/08/2026 — le dépôt a déménagé.** Le dossier de
travail est désormais **`~/Projets/lespritbois`**, hors iCloud. `npm run build`
y passe en **17 s**, contre un figeage indéfini auparavant. Le contournement
`/tmp/iso` décrit ci-dessous **n'a plus lieu d'être** ; il est conservé pour
mémoire. ⚠️ Un simple `mv` depuis l'ancien emplacement s'est bloqué (la panne
empêchait sa propre correction) : le déménagement s'est fait par `git clone`
depuis GitHub, en recopiant à la main le non-versionné (`lesprit-bois.fr-audit/`,
`.claude/settings.local.json`) puis `npm install` + `npm approve-scripts` paquet
par paquet. L'ancien dossier `~/Documents/projet/lespritbois` reste sur le disque
en secours, à supprimer par David quand il le jugera bon.

⚠️ **Historique de la panne (04/08/2026), conservé pour comprendre les incidents
passés.** Le dépôt était dans `~/Documents/projet`, **synchronisé par iCloud
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
clos sauf angle radicalement neuf.

**Créneau précédent (07/08/2026)** : le 06/08 a consommé le sujet imposé **teinte
RAL de l'aluminium** sous `choisir-teinte-ral-aluminium` (thèse : la teinte se
joue sur la finition, l'exposition et l'accord aux menuiseries existantes plus
que sur le code lui-même ; le RAL 7016 anthracite est le réflexe majoritaire,
pas toujours le bon). Le build est repassé normalement dans le dépôt réel — le
blocage iCloud décrit plus bas ne s'est pas manifesté, le contournement
`/tmp/iso` n'a pas été nécessaire (continuer à le vérifier au cas par cas).
Après un article bois (05/08) puis un article alu (06/08), le prochain peut
repartir sur le **bois**, ou piocher dans les idées alu encore libres :
brise-soleil orientables et protections solaires (angle saisonnier été,
cohérent début août), entretien d'une pergola / véranda alu, clôture alu vs bois
(limite séparative, occultation, portail assorti), véranda ou extension ossature
bois (angle décision). ⚠️ La réserve alu se vide : après ces quatre idées, il
faudra repasser par une veille web. Le créneau **terrasse reste clos** (cinq
articles).

**Prochain créneau (16/08/2026)** : ⚠️ **les créneaux du 12/08, 13/08, 14/08 ET
15/08 sont tous servis**, les quatre articles ayant été écrits en avance dans la
journée du 12/08. Les runs planifiés du 13, 14 et 15/08 ne doivent **rien
publier** — le test de tête de fichier doit les arrêter.

Le 15/08 a consommé la **proposition A** de la veille du 12/08 sous
`entretien-aluminium-pergola-veranda-revision-automne` (aluminium pur ; thèse :
un ouvrage en alu ne s'entretient pas vraiment, il se surveille — le
thermolaquage ne demande qu'un lavage à l'eau savonneuse, et ce qui lâche ce sont
les évacuations bouchées, les joints fatigués et la motorisation que personne n'a
jamais regardée ; la seule intervention qui compte avant l'hiver est de dégager
les chéneaux avant la chute des feuilles). Sept sections : ce que l'alu demande
vraiment, laver sans décaper, évacuations d'eau, organes mobiles (lames, stores
zip, coulissants), motorisation et capteurs, joints et raccord à la maison,
calendrier de révision. **Solde la dernière idée de la réserve aluminium**,
enfin resserrée sur l'entretien pur : les produits pergola et véranda ne sont pas
refaits, l'article y renvoie.

Prudence factuelle : aucune durée de garantie, aucun label chiffré
(Qualicoat/Qualimarine en mention qualitative), aucune épaisseur de poudre, aucun
DTU, aucune norme, aucune fréquence normative — les rythmes sont donnés comme
**nos habitudes de chantier**, avec un paragraphe qui le dit explicitement. Aucun
produit d'entretien commercial nommé. Limite de métier posée noir sur blanc
(moteur, coffret, câblage → installateur ou électricien qualifié), comme
l'article termites le fait pour le curatif. **Aucun lien externe** : aucune source
de la liste blanche n'étayait le propos, et rien n'a été inventé.

✅ **Le pari « images » de la veille a payé** : les 5 visuels sont de vraies photos
de chantier **déjà présentes au dépôt** (`realisations/pergola-aluminium-*` et
`terrasse-bois-pergola-aluminium-libourne-7`, chantier de Saint-Pey-de-Castets),
sans un seul téléchargement ni aucune recherche web — donc sans le risque qui
avait fait échouer deux lancements d'iconographe le 13/08. Cover inédite :
`realisations/pergola-aluminium-terrasse-bois-libourne-1.webp`, seule photo alu
en paysage 16:9 du lot. Les 4 autres sont en portrait 825 × 1100 : l'article a
donc des figures hautes, format déjà employé ailleurs, sans blocage.

✅ **Provenance des visuels `source-adefrance/Pergolas-aluminium-*` — réaudit fait
le 12/08/2026, point clos.** Les 9 images ont été regardées une par une. Le logo
« LI-SU DES TEMPS » est incrusté sur **`-1`, `-2`, `-6` et `-7`** — l'audit du
01/08 ne signalait que `-1`, et le contrôle en passant de l'iconographe disait
`-1`/`-2`/`-6` : les deux étaient incomplets. Les cinq fichiers sans logo
appartiennent à la même série, font **tous exactement 768 × 512** comme ceux à
logo, et `-5` montre un paysage qui n'est pas girondin (maison blanche, vue sur
collines, transats). **Conclusion : traiter les 9 comme des visuels fournisseur.**
Ils restent utilisables comme illustration de **produit** ; ils ne doivent jamais
figurer dans une galerie ou une légende revendiquant un chantier, « nos
réalisations », Libourne ou la Gironde.

Deux galeries les présentaient comme des réalisations et ont été corrigées
(commit `bbc2bfa`, déployé et vérifié) : `/pergolas`, section « Pergolas
réalisées à Libourne et en Gironde » (`-8` et `-5` remplacés), et
`/devis-pergola`, section « Nos dernières réalisations » (`-8` remplacé) — par de
vraies photos du chantier de Saint-Pey-de-Castets. Aucun article de blog n'était
en faute : toutes les légendes de la série y sont neutres, sans commune ni
mention « nos chantiers ». Détail complet dans la mémoire
`images-source-adefrance-provenance`.

Build passé normalement dans le dépôt réel, sans contournement `/tmp/iso`. Après
deploy : **12 requêtes en 200 d'emblée sur les deux hôtes, aucun 404** — c'est la
première fois depuis le 07/08 que le repeuplement du cache edge ne se manifeste
pas. Version `89708b62` confirmée à 100 %, IndexNow pingué (200).

**Créneau précédent (15/08/2026)** : ⚠️ Les créneaux du 12/08, 13/08 **et 14/08**
sont tous servis, les trois articles ayant été écrits en avance.

📌 **Veille du 12/08/2026 faite pour ce créneau** —
`docs/blog-pipeline/2026-08-12.md`, 2 propositions au statut `proposé` :
**(A, recommandée)** « La révision d'avant-automne des ouvrages en aluminium »
(`entretien-aluminium-pergola-veranda-revision-automne`), qui solde enfin la
dernière idée de la réserve alu, resserrée sur l'**entretien pur** ; saisonnière
(la révision se fait avant la chute des feuilles), et surtout **la seule dont les
5-6 images sont toutes disponibles en interne** — zéro dépendance à Pexels, alors
que les deux derniers articles ont buté là-dessus. **(B)** « Bureau de jardin en
bois » (`bureau-jardin-bois-studio-reglementation-budget`), sujet de rentrée
jamais traité et pourtant dans notre offre (`/constructions-bois` cite « bureau
de jardin ») ; son apport neuf est la **taxe d'aménagement**, absente de tout le
blog — valeurs 2026 vérifiées sur service-public F23263 (892 €/m² hors IDF,
1 011 €/m² IDF depuis le 01/01/2026, exonération ≤ 5 m², et une **pergola non
close n'est pas taxable quelle que soit sa surface**).

⚠️ **Portail aluminium écarté, et c'est délibéré.** La veille web en faisait le
meilleur créneau alu de 2026, mais **le portail n'est pas dans notre offre** :
les pages services listent terrasses, pool houses, plage de piscine, abris de
jardin, cuisines d'été, claustras/bardages, carports, pergolas et constructions
bois. Ne pas le proposer tant que David n'a pas confirmé que nous en posons.

⚠️ **Nouveau faux ami réglementaire — ne pas le rattacher à une maison
individuelle.** Le **décret n° 2026-674 du 27 juillet 2026** modifie
l'article R. 421-19 sur les **lotissements** (voies et équipements communs à
plusieurs lots à bâtir). Il ne concerne pas un abri, un carport ni une annexe sur
parcelle privée. Même piège que le décret n° 2026-16 tranché le 28/07.

ℹ️ **Réserve après cette veille** : A ayant été publiée le 15/08, il reste **B**
(bureau de jardin en bois, sujet de **rentrée** — à écrire début septembre, son
apport neuf étant la **taxe d'aménagement**, absente de tout le blog) et l'idée
**cuisine d'été** repérée au passage — explicitement dans l'offre
(`/amenagement-exterieur`), jamais traitée, mais à programmer vers
**février-mars** (saison mal placée en août). Après B, la réserve retombe à cette
seule idée hors saison : **reprogrammer une veille d'ici deux à trois semaines**.

**État avant la veille** : la réserve était **vide**, les quatre propositions du
10/08 étant toutes publiées.

Le 14/08 a consommé la **proposition D**, dernière de la réserve, sous
`abri-buches-bois-stockage-sechage` (bois ; thèse : un abri à bûches ne protège
pas le bois de l'eau, il le fait sécher — c'est la ventilation qui fait passer
la bûche sous le seuil d'humidité utile, pas la couverture, et un abri fermé sur
ses quatre côtés fait pourrir le bois). Sept sections : ce que l'abri doit faire,
le seuil d'humidité, les cinq règles de conception (toit débordant, côtés
ajourés, pile surélevée, orientation au vent, profondeur limitée),
dimensionnement sur deux campagnes de séchage, adossé/autoportant/intégré au
carport, implantation loin du mur de la maison (pont vers l'article termites),
kit ou sur-mesure et budget. **Rédigé et publié le 12/08 au soir**, à la demande
de David (« écris quand même l'article du 14/08 maintenant »), après que le run
planifié du 12/08 se soit arrêté sans rien publier.

Prudence factuelle : les **seuls** chiffres extérieurs sont les trois données
ADEME vérifiées en veille (humidité < 23 %, séchage 18 mois minimum après la
coupe, stockage aéré sans contact avec le sol), citées avec leur lien. **Aucune**
conversion stère / m³ apparent / consommation annuelle, aucun prix du bois de
chauffage, aucun rendement de poêle, aucune durée de vie chiffrée de l'abri
(traitée par trois choix de conception), aucun seuil d'urbanisme re-détaillé
(renvoi à l'article dédié). Le budget est une fourchette volontairement large
« constatée sur nos propres chantiers en 2026 ». Deux liens externes seulement :
ADEME et FCBA (qualitatif, sur la durabilité des essences).

Images : le dépôt n'a **aucune** photo d'abri à bûches (confirmé) — cover et deux
figures en libre de droits (Pexels 2890, 97259, 13922054, licence Pexels,
**sans aucune géolocalisation**), plus deux vraies photos de chantier girondines
sur des principes transposables (carport bois en appentis pour la structure
adossée, plancher sur plots pour la surélévation), légendées comme telles sans
laisser croire qu'il s'agit d'abris à bûches. L'iconographe n'a pas trouvé de
détail « poteau sur sabot » exploitable en interne et a préféré la photo de plots
réglables plutôt qu'une image de banque faussement présentée comme un chantier —
même arbitrage que le 13/08.

Build passé normalement dans le dépôt réel, sans recourir au contournement
`/tmp/iso`. Après deploy : **un seul 404 isolé** sur le domaine au premier essai
puis 9 requêtes consécutives en 200 sur les deux hôtes, version `ee3e8e96`
confirmée à 100 %, IndexNow pingué (200). Comportement de cache edge habituel.

➡️ **Les runs planifiés du 13/08 et du 14/08 ne doivent rien publier** : leurs
créneaux sont servis, le test de tête de fichier doit les arrêter.

**Créneau précédent (14/08/2026)** : ⚠️ **les créneaux du 12/08 ET du 13/08 sont
déjà servis** — voir le bloc en tête de fichier. Dans la soirée du 11/08, David a
demandé successivement l'article termites « pour demain » puis l'article clôture
alu « pour le 13 » : les deux ont été rédigés, illustrés, buildés, déployés et
vérifiés en 200 le 11/08 au soir. **Les runs planifiés du 12/08 et du 13/08 ne
doivent donc rien publier.** Le prochain article à produire est celui du
**14/08**.

Le 13/08 a consommé la **proposition B** sous
`cloture-aluminium-lames-occultantes-guide` (aluminium pur ; thèse : une clôture
alu se choisit sur son taux d'occultation et sa prise au vent, pas sur son profil
— c'est ce couple qui décide de la hauteur tenable, du nombre de poteaux et du
scellement). Angle resserré comme exigé : la réglementation renvoie à
`cloture-brise-vue-bois-guide` sans re-chiffrer, le comparatif matière à
`garde-corps-terrasse-aluminium-ou-bois` sans le refaire, le nuancier à
`choisir-teinte-ral-aluminium`. Aucune classe de vent, aucun DTU, aucun Eurocode,
aucune hauteur réglementaire, aucune profondeur de scellement normative ; un seul
lien externe (service-public F17578).

⚠️ **Constat images à retenir : Pexels n'a pas de clôture aluminium exploitable.**
Le dépôt n'en a aucune non plus (confirmé). Deux lancements successifs de
l'iconographe sont morts sur erreur API après avoir tourné en rond sur la
recherche d'images, sans rien écrire — le sourcing a fini par être fait à la
main. Ce qui existe d'utilisable sur Pexels : des lames métalliques à contre-jour
(photo 29674354), un barreaudage noir en enfilade (33903903), une clôture
métallique occultante entre piliers (12191313). En revanche **rien d'honnête sur
le pied de poteau/scellement ni sur la clôture en pente** : ces motifs ne
renvoient que des clôtures rurales en bois ou du barbelé, hors sujet sur un
article alu. Le visuel « pente » a donc été **supprimé** plutôt que forcé —
l'article tient à cinq images, dans la fourchette de la charte. À refaire pareil
la prochaine fois : mieux vaut une image de moins qu'une image fausse.

⚠️ Un `git push` a échoué en cours de route (« remote end hung up »), **alors que
le deploy, lui, était déjà parti** : la prod avait l'article mais pas le remote.
Le push a été relancé et rattrapé. À surveiller : chaîner push et deploy avec
`|` puis `&&` masque l'échec du push (le code de retour est celui de `tail`).
Vérifier `git rev-parse HEAD` contre `origin/main` après publication.

**Réserve après ce créneau** : ⚠️ **D a été consommée le 14/08** (voir plus
haut). Les quatre propositions de `docs/blog-pipeline/2026-08-10.md` sont donc
toutes publiées. Il ne subsiste que l'idée « **entretien pergola / véranda alu** »
(à resserrer sur l'entretien pur, les deux produits étant déjà couverts) — une
seule idée pour un seul créneau. **Veille web obligatoire dès le prochain
article.**

**Créneau précédent (13/08/2026)** : ⚠️ **le créneau du 12/08 était déjà servi.**
David a demandé le 11/08 en fin de journée d'écrire « l'article termites pour
demain » : la **proposition C** a donc été rédigée, illustrée, buildée, poussée et
déployée le 11/08 au soir, **datée du 12/08**, sous
`termites-gironde-ouvrage-bois-prevention` (bois ; thèse : les termites ne
s'attaquent pas au bois parce qu'il est en bois, mais parce qu'il est humide, au
contact du sol et jamais ventilé — trois défauts de pose qu'on voit plus souvent
que des essences mal choisies). Point de vue du **constructeur, pas de
l'applicateur** : la limite de métier est dite explicitement dans l'article (pas
de curatif, renvoi à un professionnel certifié et à un diagnostiqueur accrédité
Cofrac). Sept sections : ce qui attire vraiment les termites, contact bois-sol,
ventilation de sous-face, réservoirs de cellulose au jardin, essences/classes
d'emploi/traitements, obligations légales, règles de pose en Gironde.

➡️ **Conséquence pour le run planifié du 12/08 à 8h : il ne doit rien publier.**
Une entrée de `lib/data/blog.ts` porte déjà la date du 12/08 et l'URL
répond 200 — c'est exactement le cas prévu par la règle du double déclenchement
consignée pour le 10/08. Le run doit le constater et s'arrêter. Le prochain
article à produire est donc celui du **13/08**.

✅ **Constaté le 12/08/2026 à 8h33 : le run planifié s'est bien arrêté sans rien
publier.** Le test de tête de fichier a fonctionné tel que corrigé le 11/08 : la
recherche porte sur **toute** la table (l'entrée du 12/08 est en 2ᵉ position,
derrière celle du 13/08, écrite en avance), et
`https://lesprit-bois.fr/blog/termites-gironde-ouvrage-bois-prevention` a
répondu 200 sur trois salves. Le prochain créneau à produire reste le **14/08**
(sujet pressenti : **D**, abri à bûches), le 13/08 étant lui aussi déjà servi.

✅ **Point réglementaire levé (celui que la veille avait laissé ouvert).** La date
de l'arrêté préfectoral girondin est désormais **vérifiée à la source**, sur le
site des services de l'État en Gironde : arrêté du **12 février 2001** instituant
une zone de surveillance et de lutte contre les termites, et **département
déclaré « totalement termité »** — toute la Gironde, pas seulement certaines
communes. C'est l'ancrage local le plus fort dont dispose le blog, réutilisable.
Il n'existe **pas** d'arrêté préfectoral mérules en Gironde. Autres faits
vérifiés et utilisés : information obligatoire de la mairie dès détection, état
relatif à la présence de termites valable **6 mois** et réalisé par une personne
certifiée par un organisme accrédité **Cofrac**, bois de démolition contaminés
incinérés sur place ou traités avant transport. Références citées en numérotation
actuelle — **L. 126-4 à L. 126-6, L. 126-24 et L. 126-25, R. 126-2 à R. 126-4,
R. 131-1 à R. 131-3** — jamais en L. 133-x. Aucun taux d'infestation, coût de
traitement, durée de garantie, DTU ni nom de produit dans l'article.

Le dépôt réel était **de nouveau bloqué par iCloud** ce 11/08 au soir (deuxième
fois dans la même journée, `.next` sans aucune écriture, log vide) : contournement
`/tmp/iso` appliqué d'emblée pour le build et le deploy. Après deploy, un **seul
404 isolé** sur `*.workers.dev` au premier essai puis 5 salves toutes en 200 sur
les deux hôtes, version `f8953da8` confirmée à 100 %, IndexNow pingué.

**Réserve après ce créneau** : il reste **D** (abri à bûches, saisonnier —
créneau ouvert jusqu'à début octobre, le plus sûr à écrire, trois chiffres ADEME
vérifiés) et **B** (clôture aluminium, repli alu), détaillées dans
`docs/blog-pipeline/2026-08-10.md`, plus l'idée « entretien pergola/véranda alu ».
Après un article bois le 12/08, le **13/08 devrait repartir sur l'aluminium** →
B. Puis D avant fin septembre. Ensuite, **veille web obligatoire**.

**Créneau précédent (12/08/2026)** : le 11/08 a consommé la **proposition A** de la
veille du 10/08 sous `aluminium-ecologique-recyclage-bas-carbone` (aluminium pur ;
thèse : l'aluminium neuf coûte cher en énergie, le recyclé beaucoup moins, et la
filière française bascule en 2026 — mais cela n'en fait pas l'égal du bois sur le
carbone : on choisit une matière là où elle dure le plus longtemps sans être
remplacée, pas pour son étiquette). Sept sections : réponse en une minute,
primaire vs recyclé, filière française 2026, comparaison bois/alu sur quatre
critères, notre position d'artisan qui pose les deux, questions à poser à son
installateur, arbitrage par ouvrage en Gironde.

⚠️ **Le « 95 % d'énergie économisée par le recyclage » est un faux ami — point
tranché, ne pas rouvrir.** La veille du 10/08 l'avait laissé « non vérifié ». La
vérification du 11/08 le tranche : le chiffre figure bien sur une page ADEME
(`infos.ademe.fr`, mars 2026) mais la phrase « leur recyclage permet de diminuer
de 95 % l'énergie requise par rapport à une production primaire » porte sur les
**superalliages** (base nickel, cobalt, titane), **pas sur l'aluminium**. Ne
jamais l'attribuer à l'alu. L'article s'en tient à une formulation qualitative
(« une fraction de l'énergie nécessaire à l'électrolyse de la bauxite »), sans
pourcentage ni lien.

Tous les chiffres de filière sont attribués nommément au **SNFA**, sur deux
sources vérifiées (`bati.zepros.fr` du 04/02/2026 et `batiactu.com` du
30/01/2026) : 96 % des menuiseries en fin de vie collectées, 200 000 t/an de
capacité visée dès 2026, 100 % des menuiseries déposées d'ici 2030, Coralium
(40 000 t à horizon 2027) et Aluminium Group Solution (80 000 t/an),
éco-modulation AGEC à partir de 40 % de recyclé, Alu+C− à partir de 30 % pour les
fenêtres, mention RSE des labels `fenêtrealu`/`façadealu` annoncée pour juin 2026.
Aucun kg CO₂/kg, aucun Uw, aucun DTU, aucun seuil RE2020 chiffré (RE2020 citée
qualitativement).

⚠️ **Le blocage iCloud s'est manifesté ce 11/08, pour la première fois depuis le
04/08.** `npm run build` dans le dépôt réel est resté 10 minutes sur « Creating an
optimized production build » sans écrire une seule fois dans `.next`, avec un
backlog `brctl` confirmé sous `/Documents/projet`. Le contournement documenté plus
bas a fonctionné intégralement : clone `/tmp/iso`, **vrai `npm install`** (plus
`npm approve-scripts esbuild fsevents sharp workerd`, nécessaire et à faire paquet
par paquet — `--allow-scripts-pending` est interactif et ne passe pas en tâche
planifiée), build, puis `npm run deploy` depuis le clone. Les fichiers non encore
committés doivent être **copiés à la main dans le clone** (`git clone` ne prend
que le committé). Continuer à tester le dépôt réel d'abord : le blocage est
intermittent.

Après le deploy, un **seul 404 isolé** sur l'URL `*.workers.dev` au premier essai,
puis 7 salves consécutives toutes en 200 sur les deux hôtes, version `67a533e0`
confirmée à 100 %. Comportement normal de repeuplement du cache edge.

**Réserve après ce créneau** : il reste les propositions **C** (termites en
Gironde, la meilleure), **D** (abri à bûches, saisonnier — créneau ouvert
jusqu'à début octobre) et **B** (clôture aluminium, repli alu), toutes détaillées
dans `docs/blog-pipeline/2026-08-10.md`, plus l'idée « entretien pergola/véranda
alu ». Ordre suggéré : **C → D avant fin septembre → B**. Après quoi, veille web
obligatoire.

**Créneau précédent (11/08/2026)** : le 10/08 a consommé l'idée alu **brise-soleil
orientables et protections solaires** sous
`protection-solaire-brise-soleil-orientable` (aluminium pur ; thèse : une
protection n'est efficace que posée **dehors, avant le vitrage**, un store
intérieur ne gérant qu'une chaleur déjà entrée — et c'est l'**orientation de la
façade** qui décide, pas le catalogue : lame horizontale ou casquette au sud où
le soleil d'été est haut, toile verticale ou volet à l'ouest où il arrive
rasant en fin de journée). Sept sections : protection extérieure vs intérieure,
lecture de la façade, brise-soleil orientable, store screen à zip, brise-soleil
fixe et casquette, vent/automatismes/entretien, budget et arbitrage avec la
pergola bioclimatique.

⚠️ **Le créneau du 09/08 n'a pas produit d'article** (dernier commit du 08/08,
aucune trace d'exécution) : l'article du 10/08 est le suivant dans l'ordre, pas
un rattrapage du 09.

Prudence factuelle : **aucun** facteur solaire (Sw/Fc), seuil degrés-heures (DH)
ni classe de vent NF EN 13561 cité. Vérification faite, la page officielle
RE2020 d'ecologie.gouv.fr **ne détaille pas l'indicateur DH** (elle parle
seulement d'« une garantie de confort en cas de forte chaleur ») : les seuils
350/1250 DH ne circulent que sur des sources secondaires — ne pas les citer.
Trois sources vérifiées seulement : ADEME canicule
(`agirpourlatransition.ademe.fr/particuliers/proteger-sante/periode-canicule/canicule-comment-garder-logement-frais`),
RE2020 (qualitatif) et déclaration préalable. Les deux seuls chiffres de
l'article sont des fourchettes de prix explicitement données comme « constatées
sur nos propres chantiers en 2026 ».

Le build est repassé normalement dans le dépôt réel, sans recourir au
contournement `/tmp/iso` (continuer à le vérifier au cas par cas). ⚠️ Encore des
**404 alternés** sur la première salve de `curl`, en alternance entre le domaine
et l'URL `*.workers.dev`, puis 8 requêtes consécutives toutes en 200 et
`npx wrangler deployments status` confirmant la version `6e672860` à 100 % :
repeuplement du cache edge, comme les 07/08 et 08/08. C'est désormais le
comportement normal après chaque deploy — ne pas redéployer au premier 404.

⚠️ **Double déclenchement de la tâche planifiée le 10/08/2026 — aucun second
article publié.** La tâche `article-quotidien-lespritbois` (cron `0 8 * * *`)
s'est déclenchée une seconde fois à **19h54**, alors que l'article du jour
(`protection-solaire-brise-soleil-orientable`) était déjà
publié, déployé et vérifié en 200 à 19h01, et que la veille venait d'être
committée à 19h50. Vraisemblablement un rattrapage d'occurrence manquée après
réveil de la machine (le créneau de 8h n'a pas tourné à l'heure ce jour-là).
**Décision prise : ne rien publier.** Le quota est d'un article par jour, celui
du 10/08 existe et répond 200 ; publier la proposition A le soir même aurait
créé deux articles datés du 10/08, laissé le 11/08 vide et consommé la réserve
d'un cran pour rien. La proposition A reste donc **le sujet du créneau du
11/08**. Règle pour les prochaines exécutions : voir le bloc « **Le créneau
est-il déjà servi ?** » en tête de ce fichier. ⚠️ La règle écrite ici le 10/08
(« vérifier la date de la **première** entrée de `lib/data/blog.ts` ») a été
**corrigée le 11/08** : elle ne tient pas dès qu'un article est écrit à l'avance,
puisque la première entrée porte alors une date future. C'est la présence d'une
entrée **à la date du jour, n'importe où dans le tableau**, avec une URL en 200,
qui doit arrêter la tâche.

📌 **Veille alu du 10/08/2026 faite pour ce créneau** —
`docs/blog-pipeline/2026-08-10.md`, 2 propositions au statut `proposé` :
**(A, recommandée) « L'aluminium est-il écologique ? »**
(`aluminium-ecologique-recyclage-bas-carbone`), angle d'actualité appuyé sur
l'annonce SNFA du 04/02/2026 d'une filière française de recyclage des
menuiseries alu — chiffres vérifiés par WebFetch mais **à attribuer nommément au
SNFA**, et le « 95 % d'énergie économisée » **non vérifié**, à confirmer ou à
formuler qualitativement ; **(B, repli)** « Clôture en aluminium »
(`cloture-aluminium-lames-occultantes-guide`), la dernière idée de réserve,
recentrée sur occultation / prise au vent / raccord au portail pour ne pas
refaire `cloture-brise-vue-bois-guide` ni le comparatif matière du garde-corps.

📌 **Veille bois du 10/08/2026, même fichier** — la réserve bois était vide,
elle est rechargée avec deux angles neufs, tous deux appuyés sur des sources
institutionnelles **vérifiées par WebFetch** :
**(C, la meilleure des quatre) « Termites en Gironde »**
(`termites-gironde-ouvrage-bois-prevention`) — point de vue du constructeur, pas
de l'applicateur : contact bois-sol, ventilation de sous-face et réservoirs
(bûches, souches) plutôt que l'essence ; obligations légales confirmées sur
ecologie.gouv.fr avec les articles **L. 126-4 à L. 126-6, L. 126-24/25 et
R. 126-2 à R. 126-4** du CCH (numérotation actuelle — ne pas citer les anciens
L. 133-x). ⚠️ **La date de l'arrêté préfectoral girondin n'est pas vérifiée**
(les dates qui circulent viennent de sites commerciaux) : la vérifier sur
`gironde.gouv.fr` ou rester qualitatif, en renvoyant à la cartographie Cerema.
**(D, saisonnier)** « Abri à bûches »
(`abri-buches-bois-stockage-sechage`) — créneau « commande du bois pour l'hiver »
ouvert jusqu'à début octobre ; trois chiffres ADEME vérifiés (humidité < 23 %,
séchage 18 mois minimum, stockage aéré sans contact avec le sol) et rien d'autre
à sourcer : c'est le sujet le plus sûr à écrire des quatre.

Ordre suggéré : **A (11/08) → C → D avant fin septembre → B** en bouche-trou alu.

⚠️ **La réserve alu est presque vide** : il ne reste que **deux** idées —
entretien d'une pergola / véranda alu (à resserrer sur l'entretien pur, les deux
produits étant déjà couverts) et clôture alu vs bois, désormais formalisée en
proposition B. Créneaux **terrasse et carport clos**. Une fois les quatre
propositions du 10/08 consommées, la réserve retombe à la seule idée
« entretien pergola/véranda alu » : **reprogrammer une veille dans deux à trois
semaines**.

**Créneau précédent (09/08/2026)** : le 08/08 a consommé le sujet imposé
**carport, angle dimensionnement** sous `dimensions-carport-taille-hauteur`
(transverse bois + alu ; thèse : la cote qui rate un carport n'est pas la
longueur mais la hauteur libre sous traverse et le dégagement des portières —
mesurer son véhicule réel, accessoires montés et rétroviseurs dépliés, avant de
choisir un kit). Sept sections : cotes réelles vs kits standards, hauteur libre,
largeur et portières, trois programmes de trame (1 voiture / 2 voitures /
voiture + rangement), portée et position des poteaux, implantation et manœuvre
depuis la rue, pente et débord de toit. L'angle de repli « carport et voiture
électrique » (borne de recharge, cheminement, toiture photovoltaïque) **n'a pas
été utilisé et reste disponible**.

Chiffres extérieurs volontairement limités à deux sources vérifiées : la
**NF P 91-100** (place de 2,50 × 5 m, allée 5 m, champ d'application = parcs
accessibles au public, VL < 3,5 t et < 1,90 m — présentée explicitement comme
**non applicable** à un carport privé) et les cotes constructeur de deux SUV
compacts 2026 (Peugeot 3008, Renault Austral), dont la **largeur rétroviseurs
dépliés de 2,08 à 2,11 m**, qui est le vrai argument de l'article. Toutes les
autres cotes sont données comme ordres de grandeur constatés sur nos chantiers,
jamais comme une norme. Urbanisme non re-détaillé : renvoi à l'article dédié.

Le build est repassé normalement dans le dépôt réel, sans recourir au
contournement `/tmp/iso` (continuer à le vérifier au cas par cas). ⚠️ Des **404
alternés** sont apparus sur la première salve de `curl`, en alternance entre le
domaine et l'URL `*.workers.dev` ; 16 requêtes consécutives ensuite ont toutes
répondu 200 sur les deux hôtes, et `npx wrangler deployments status` confirmait
déjà la bonne version (`1cf980a5`) à 100 %. C'est encore le repeuplement du
cache edge, pas un worker cassé — même conclusion que le 07/08.

⚠️ Le créneau **carport est désormais saturé à quatre articles** : guide bois,
comparatif bois/alu, urbanisme, dimensionnement. Sauf angle radicalement neuf
(la voiture électrique reste le seul identifié), le considérer comme clos, comme
la terrasse.

Après un alu (06/08), un mixte à dominante bois (07/08) et un transverse (08/08),
le prochain devrait repartir sur l'**aluminium pur**. Les **trois dernières**
idées alu de la réserve sont encore libres : brise-soleil orientables et
protections solaires (angle saisonnier été, toujours pertinent mi-août),
entretien d'une pergola / véranda alu (à resserrer sur l'entretien pur), clôture
alu vs bois (limite séparative, occultation, portail assorti). Après elles,
**veille web obligatoire**. Créneaux **terrasse et carport clos**.

**Créneau du 08/08/2026 — SUJET ALORS IMPOSÉ PAR DAVID le 07/08 : le
carport** (désormais publié, voir ci-dessus). Consigne directe, elle primait sur
la réserve et sur l'alternance des matières.

⚠️ Le carport est notre créneau le plus saturé : **trois** articles le couvrent
déjà — `carport-bois-guide` (guide produit bois : adossé/autoportant, essences,
toiture, entretien), `carport-aluminium-ou-bois-comparatif` (comparatif matière,
budgets, entretien sur 15-20 ans — **interdiction formelle de le refaire**) et
`autorisation-urbanisme-abri-carport-pergola-2026` (seuils d'urbanisme, emprise
au sol, CERFA). Il faut donc un angle **franchement neuf**, comme le prévoit
déjà la réserve : « usage, dimensionnement, motorisation d'accès ».

**Angle retenu : le dimensionnement.** Titre de travail « Quelle taille pour un
carport ? Dimensions, hauteur et implantation pour bien garer sa voiture », slug
proposé `dimensions-carport-taille-hauteur`. Thèse : la cote qui rate un carport
n'est presque jamais la longueur, c'est la **hauteur libre sous traverse** et la
**place de manœuvre pour ouvrir les portières** — un carport aux bonnes cotes sur
le papier devient inutilisable dès qu'on y met un SUV, un coffre de toit ou un
utilitaire. Sujet **transverse bois + alu** (les deux guides mono-matière
existent déjà, celui-ci les chapeaute et y renvoie en maillage interne). Plan
possible : les cotes réelles d'un véhicule d'aujourd'hui vs les kits standards ;
hauteur libre (SUV, coffre de toit, galerie, van aménagé) ; largeur et
dégagement des portières ; carport une voiture / deux voitures / voiture +
rangement ; portée et poteaux — là où l'alu permet de supprimer le poteau
central et où le bois impose une trame ; implantation, sens d'accès et manœuvre
depuis la rue ; pente, évacuation des eaux et débord de toit.

⚠️ Prudence factuelle : **ne citer aucune dimension normative, aucun DTU ni
aucune règle de PLU chiffrée sans source vérifiée par WebSearch.** Les cotes de
véhicules et les emprises de manœuvre doivent être données comme **ordres de
grandeur constatés sur nos chantiers**, jamais comme une norme. Pour l'urbanisme,
renvoyer à l'article existant plutôt que de re-détailler les seuils.

**Angle de repli** si le dimensionnement se révèle trop proche de
`carport-bois-guide` à la lecture : le **carport et la voiture électrique**
(borne de recharge sous carport, cheminement électrique, toiture photovoltaïque)
— angle 2026 réellement neuf, mais qui exige des sources vérifiées sur la partie
électrique ; à défaut, formulation qualitative et renvoi à un électricien
qualifié.

**Images** : covers carport déjà prises, à ne plus réutiliser en cover —
`Carport-aluminium-Libourne-4`, `Carport-bois-Libourne-1`,
`Carport-bois-Libourne-3` et, depuis le 08/08, **`Carport-bois-Libourne-6`**.
Restent libres en cover : `Carport-bois-Libourne-2`, `-5`,
`Carport-aluminium-Libourne-1`, `-2`, `-3`, `carport-accueil.webp` et
`carport-bois-libourne.webp`.

⚠️ Constat de l'iconographe (08/08/2026), à retenir : `Carport-aluminium-Libourne-1`
à `-4` et `carport-accueil.webp` **ne sont pas des chantiers de l'entreprise**
mais des visuels du fournisseur LI-SU DES TEMPS, malgré leur nom de fichier —
donc pas de « nos chantiers », « Libourne » ni « Gironde » dans leur `alt`/
`caption`. Les photos **bois** sont, elles, de vrais chantiers, mais leurs
communes réelles ne sont pas Libourne (Arveyres, Capian,
Lugon-et-l'Île-du-Carnay, Saint-Denis-de-Pile). Voir aussi
`carport-accueil.webp` = même scène recadrée que `Carport-aluminium-Libourne-4`,
et seul fichier du lot en 768 × 512 (les autres font 1200 × 646).

Les trois idées alu libres (brise-soleil et protections solaires, entretien
pergola/véranda alu, clôture alu vs bois) sont **décalées d'un cran**, pas
annulées.

**Créneau initialement prévu pour le 08/08/2026** (remplacé par la consigne
ci-dessus) : le 07/08 a consommé l'idée **véranda ou
extension ossature bois** sous `veranda-ou-extension-ossature-bois` (comparatif
mixte de décision — voir le détail dans la réserve plus bas). Le build est
repassé normalement dans le dépôt réel, sans recourir au contournement
`/tmp/iso` (continuer à le vérifier au cas par cas). ⚠️ Une **404 isolée** est
apparue à la deuxième des trois salves de `curl` juste après le deploy, puis
8 essais consécutifs sur le domaine **et** sur l'URL `*.workers.dev` ont tous
répondu 200 : c'est bien le repeuplement du cache edge décrit plus bas, pas un
worker cassé. Confirmation utile : re-tester en série plutôt que de redéployer
au premier 404.
Après un article bois (05/08), un alu (06/08) et un mixte à dominante bois
(07/08), le prochain devrait repartir sur l'**aluminium pur**. Idées alu encore
libres : brise-soleil orientables et protections solaires (angle saisonnier
été, toujours pertinent mi-août), entretien d'une pergola / véranda alu
(à resserrer sur l'entretien pur), clôture alu vs bois (limite séparative,
occultation, portail assorti). ⚠️ Ce sont les **trois dernières** idées de la
réserve : après elles, veille web obligatoire. Le créneau **terrasse reste
clos** (cinq articles).

**Créneau précédent (06/08/2026)** — sujet alors imposé par David le 05/08 :
la teinte RAL de l'aluminium, désormais publiée. Cadrage qui avait été retenu :
nuancier RAL et lecture d'un code, thermolaquage (poudre polyester, qualité de
préparation et d'accrochage), finitions **mat / satiné / sablé / texturé**,
teintes qui vieillissent bien face au soleil girondin et à la poussière, teintes
foncées et dilatation/chaleur en plein sud, accord avec un bâti girondin (pierre
blonde, tuile canal, menuiseries existantes), bicoloration intérieur/extérieur,
raccord de teinte entre pergola, carport, garde-corps et menuiseries, retouches
et réparabilité d'un profilé rayé. Vocabulaire alu strict (profilés, alliages,
thermolaquage, RAL) — pas de classes d'emploi ni d'autoclave.
⚠️ Prudence : **ne citer aucune durée de garantie de thermolaquage, aucun label
(type Qualicoat/Qualimarine) ni aucune épaisseur de poudre sans source vérifiée
par WebSearch** ; à défaut, formulation qualitative. Photos maison à privilégier :
`source-adefrance/Pergolas-aluminium-Libourne-1..9.webp` et
`Carport-aluminium-Libourne-1..4.webp` (cover inédite obligatoire — les n° 3 et 4
sont déjà des covers). Attention à ne pas refaire
`pergola-bioclimatique-aluminium-guide`, qui aborde déjà brièvement thermolaquage
et RAL : rester sur le **choix de la teinte**, pas sur le produit.

Idées alu restées libres après ce créneau : brise-soleil orientables et
protections solaires, entretien pergola/véranda alu, clôture alu vs bois (limite
séparative, occultation, portail assorti), véranda ou extension ossature bois
(angle décision).

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

🛑 **RÉSERVE VIDE au 23/08/2026 — veille obligatoire avant le prochain article.**
Les créneaux du **19, 20, 21, 22 et 23/08** sont tous servis, les quatre derniers
écrits en avance le 19/08. Les runs planifiés du 20 au 23 ne doivent **rien
publier** : le test de tête de fichier doit les arrêter. Le prochain article à
produire est celui du **24/08**, sans aucun sujet en réserve.

**Créneau du 23/08/2026 — servi d'avance le 19/08.** La **proposition D** a été
publiée sous `claustra-bois-separation-jardin` (bois ; thèse : un claustra n'est
pas une clôture courte — posé à l'intérieur de la parcelle, il ne borne aucune
limite et échappe aux contraintes de la clôture séparative ; et **on ne masque pas
une vue, on masque un axe de regard**, donc l'ouvrage juste est presque toujours
plus court et plus bas qu'on ne l'imagine). Couvre enfin la ligne « Claustras &
bardages » de `/amenagement-exterieur`, explicitement dans l'offre et restée sans
article.

Frontière avec `cloture-brise-vue-bois-guide` posée dès la section 1 : aucun seuil
de hauteur re-chiffré, renvoi à l'article dédié et à la mairie. ⚠️ **Jamais
« sans formalité »** — la formulation retenue rappelle qu'un passage en mairie
reste le bon réflexe dès qu'on prend de la hauteur ou en secteur protégé. Le
**« 30 % d'ajour » est cité pour être démenti** : ce n'est pas une norme,
l'occultation tient à une géométrie (épaisseur des lames, distance, angle de
regard), pas à un ratio. Aucun DTU, aucune classe de vent, aucune profondeur de
scellement.

⚠️ **Piège d'iconographie inédit, à retenir : une image peut contredire la thèse
sans rien dire de faux.** Le dossier `blog/cloture-brise-vue-bois-guide/` contient
cinq visuels bois parfaitement réutilisables sur le papier — mais quatre se
lisent comme des **clôtures de limite** (mitoyenneté visible, linéaire continu,
alignement de rue), or l'article démontre justement qu'un claustra n'en est pas
une. L'iconographe les a **ouverts un par un** et écartés, ne retenant que la
claire-voie dressée devant un mur, sans limite visible, qui fait la cover.
Généralisable : quand un article repose sur une distinction, vérifier que
**chaque image la respecte**, pas seulement qu'elle montre la bonne matière.

Après deploy : **16 requêtes en 200 d'emblée**, aucun 404 — deuxième fois
seulement depuis le 07/08. Version `fa5e839b` à 100 %, IndexNow pingué.

**Créneau du 22/08/2026 — servi d'avance le 19/08.** La **proposition C** a été
publiée sous `traiter-bois-exterieur-avant-hiver` (bois ; thèse : il reste
quelques semaines pour traiter ses bois, après quoi le produit reste en surface
et part au premier hiver — et **on ne traite pas pour la couleur, on traite pour
l'eau**). Sept sections, dont un **tableau par ouvrage** en section 4 qui porte
tout l'angle.

✅ **Comment il échappe au créneau terrasse clos** — méthode réutilisable : il ne
s'adresse pas au propriétaire de terrasse mais au **propriétaire d'ouvrages
bois**, et le dit dès le chapô (« ce guide ne parle pas que de terrasse »).
Terrasse, bardage, clôture, carport et abri n'ont ni la même cause de
dégradation, ni le même geste, ni le même rythme. Différence explicite posée avec
`proteger-terrasse-bois-canicule-entretien-ete` : l'un protège du soleil en pleine
saison, celui-ci prépare à l'eau et au froid.

⚠️ **Prudence : aucune température, aucun délai, aucun taux d'humidité.** Les
plages qui circulent (« 10 à 25 °C », « 15 à 25 °C », « pas de pluie sous 48 h »)
viennent **uniquement de fabricants et de revendeurs**, et **se contredisent entre
elles** — preuve qu'aucune n'est normative. La fenêtre est décrite comme un
**régime météo**, jamais comme une date. Aucune marque, aucun rendement au m²,
aucune durée de tenue, aucune classe d'emploi chiffrée ; le nettoyeur haute
pression est condamné sans citer de pression. Un seul lien externe (FCBA,
qualitatif).

Images : cinq visuels, **zéro téléchargement** — carport de
Lugon-et-l'Île-du-Carnay en cover, bardage douglas « en Gironde » sans commune,
pieds de poteaux de Capian, plus deux photos de banque déjà au dépôt et
référencées en place depuis les dossiers d'autres articles, sans duplication ni
géolocalisation. Après deploy : 404 alternés sur les deux premières salves, puis
10 requêtes consécutives en 200. Version `15e6fbd8` à 100 %, IndexNow pingué.

➡️ **Il reste la proposition D** : « Claustra en bois »
(`claustra-bois-separation-jardin`), qui couvre enfin la ligne « Claustras &
bardages » de `/amenagement-exterieur`. C'est le sujet du **23/08**. Après elle,
réserve vide et **veille obligatoire**.

📌 **Seconde veille du 19/08/2026, pour le créneau du 22/08** — même fichier
`docs/blog-pipeline/2026-08-19.md`, section « Seconde veille ». 2 propositions au
statut `proposé`. **(C, recommandée)** « Traiter ses bois avant l'hiver »
(`traiter-bois-exterieur-avant-hiver`) — la fenêtre de traitement se ferme
réellement dans quelques semaines, et les 5 images existent toutes en interne.
Son angle contourne proprement le créneau terrasse clos : il balaie **tous les
ouvrages bois** (terrasse, bardage, clôture, carport, abri), pas la seule
terrasse — à dire explicitement dans le chapô. **(D)** « Claustra en bois »
(`claustra-bois-separation-jardin`), qui couvre enfin une ligne explicite de
l'offre (`/amenagement-exterieur` liste « Claustras & bardages ») restée sans
article.

⚠️ **Constat de fond : la veine aluminium est épuisée.** Neuf articles la
couvrent — produit, comparatifs, teinte, protection solaire, entretien, clôture,
recyclage, fermeture. **Aucun angle alu neuf n'est identifiable** sans apport
extérieur : un produit que l'entreprise se mettrait à poser, ou des photos de
chantier sur un motif non couvert. Les deux propositions ci-dessus sont donc
toutes deux **bois**, ce qui déroge à l'alternance : c'est assumé, mieux vaut
cela qu'un dixième article alu redondant.

🚨 **Troisième occurrence du même piège réglementaire en trois semaines.** La
veille fait remonter une **réglementation incendie propre à la construction
bois** (publication progressive annoncée d'ici fin 2026) et un projet de **cadre
unifié** pour la construction bois. **Ne les rattacher à aucun de nos sujets** :
ces textes visent des bâtiments, pour l'essentiel collectifs et tertiaires, pas
une terrasse ni un carport de particulier. Même faux rattachement que le décret
n° 2026-16 (RE2020 tertiaire, 28/07) et le décret n° 2026-674 (lotissements,
19/08). La tentation est manifestement récurrente ; la règle ne bouge pas.

⚠️ **Second sujet écarté, à trancher par David : terrasse bois ou composite.**
C'est le comparatif le plus demandé du créneau et il manque au blog, mais le mot
« composite » **n'apparaît dans aucune page service** — seulement au détour de
trois articles. Même situation que le portail aluminium écarté le 12/08 : ne pas
écrire sur un matériau que l'entreprise ne pose pas. À rouvrir si David confirme.

🛑 **RÉSERVE VIDE au 21/08/2026 — veille obligatoire avant le prochain article.**
Les créneaux du 19, 20 **et 21/08** sont tous servis, les deux derniers écrits en
avance le 19/08. Les runs planifiés du 20 et du 21 ne doivent **rien publier** :
le test de tête de fichier doit les arrêter. Le prochain article à produire est
celui du **22/08**, et il n'y a plus aucun sujet en réserve — seulement l'idée
**cuisine d'été**, dans l'offre mais hors saison (à programmer février-mars).

**Créneau du 21/08/2026 — servi d'avance le 19/08.** La **proposition A** a été
publiée sous `fermer-pergola-bioclimatique-hiver-rideau-verre` (aluminium pur ;
thèse assumée : fermer une pergola prolonge la saison mais **ne fabrique pas une
véranda** — sans isolation, on gagne un abri hors vent et hors pluie, pas une
pièce chauffée, et si la pièce doit vivre en février il faut le dire au client
plutôt que lui vendre une fermeture qui décevra). Sept sections, différenciation
explicite avec `protection-solaire-brise-soleil-orientable` : même quincaillerie,
cahier des charges opposé — l'un arrête le soleil l'été, l'autre ferme contre le
vent et la pluie.

✅ **Apport neuf, absent de toutes les pages commerciales du créneau** : fermer
rend l'ouvrage potentiellement **clos et couvert**, le critère qui déclenche la
**taxe d'aménagement** — une pergola non close y échappe quelle que soit sa
surface (service-public F23263). Aucun seuil re-chiffré : renvoi aux articles
urbanisme et bureau de jardin, et conseil de passage en mairie.

Prudence : **aucune épaisseur de verre** (les « 10 ou 12 mm de verre trempé » qui
circulent viennent de sites commerciaux, pas d'une source normative), aucun
Uw/Ug, aucune classe de vent, aucun DTU, aucune garantie, aucune puissance de
chauffage d'appoint. Condensation traitée qualitativement.

⚠️ **Le visuel « rideau de verre » a été supprimé faute d'image honnête** — et
c'est gênant, puisque c'est le motif du titre. L'iconographe a cherché sur Pexels
(*glass curtain terrace*, *enclosed patio*, *frameless glass doors*, *glazed
balcony*, *glass pergola*, *sliding glass wall*) et sur Openverse : rien
d'exploitable, uniquement des vérandas américaines à ossature bois, des
intérieurs ou des façades d'immeubles. Illustrer un sujet alu par une structure
bois aurait menti sur la matière — même arbitrage que le 13/08. **Le dépôt gagne
à recevoir une photo de chantier de pergola alu avec vitrage coulissant** : c'est
le seul motif de l'article qu'il ne couvre pas. Une figure de compensation a été
ajoutée après la section 1, l'article tient donc à 6 visuels.

Après deploy : un **404 sur la première salve** (les deux hôtes simultanément)
puis 10 requêtes consécutives en 200. Version `0997fc7e` à 100 %, IndexNow
pingué.

**Créneau du 20/08/2026 — servi d'avance le 19/08.** David a choisi la
**proposition B** plutôt que la A recommandée : publiée sous
`carport-voiture-electrique-borne-recharge` (transverse bois + alu ; thèse : le
carport est le meilleur endroit pour recharger, à condition d'y penser avant de
couler les plots — ce qui coûte cher après coup n'est jamais la borne, c'est la
tranchée à rouvrir). Point de vue du **constructeur** : fourreaux et réservations
posés pendant le chantier, limite de métier dite explicitement, l'électricité
renvoyée à un électricien qualifié. Apport transverse : sur beaucoup de carports
aluminium, l'évacuation des eaux descend **dans les poteaux** — percer un
profilé, c'est percer une descente d'eau. Le **créneau carport est maintenant
clos à cinq articles**, plus aucun angle vierge identifié.

✅ **Le fait qui justifiait le sujet, vérifié et publié correctement** : le crédit
d'impôt pour une borne de recharge est **supprimé pour les dépenses payées à
partir du 1ᵉʳ janvier 2026** (service-public F35578, cité littéralement). Les
75 % plafonnés à 500 € par système pilotable sont rattachés au passé. **Aucun
taux de TVA n'est cité** : la page BOFiP du taux réduit en rénovation énergétique
(BOI-TVA-LIQ-30-20-95) ne traite pas des bornes, et l'article dit explicitement
pourquoi il s'abstient — formulation à reprendre quand une source manque.
**Aucune obligation IRVE affirmée** : la fiche officielle ne l'exige pas.
Photovoltaïque traité en **structure** seulement, sans kWc ni rendement.

➡️ **Il reste la proposition A**, non consommée : « Fermer sa pergola
bioclimatique pour l'hiver » (`fermer-pergola-bioclimatique-hiver-rideau-verre`),
aluminium pur, saisonnière et à jouer **avant l'automne** — c'est le sujet du
21/08. Après elle, la réserve retombe à la seule idée « cuisine d'été »
(février-mars) : **veille à reprogrammer**.

📌 **Veille du 19/08/2026 faite pour le créneau du 20/08** —
`docs/blog-pipeline/2026-08-19.md`, 2 propositions au statut `proposé`, écrites
après que le bureau de jardin ait consommé la dernière de la réserve.
**(A, recommandée)** « Fermer sa pergola bioclimatique pour l'hiver »
(`fermer-pergola-bioclimatique-hiver-rideau-verre`) — aluminium pur, saisonnier
(la fermeture se pose avant l'automne), 4 à 5 images sur 6 disponibles en
interne. Thèse tranchée : fermer une pergola prolonge la saison mais **ne
fabrique pas une véranda**. Apport neuf : fermer rend l'ouvrage potentiellement
**clos et couvert**, donc taxable — le critère que l'article du 19/08 vient
d'établir et de sourcer. **(B)** « Carport et voiture électrique »
(`carport-voiture-electrique-borne-recharge`), dernier angle vierge du créneau
carport, réservé depuis le 08/08.

🚨 **Fait vérifié à ne pas rater sur B — et c'est un piège actif.** Le **crédit
d'impôt pour l'installation d'une borne de recharge est SUPPRIMÉ pour les
dépenses payées à partir du 1ᵉʳ janvier 2026** (citation littérale de
service-public **F35578**). Il valait 75 %, plafonné à 500 € par système
pilotable, sur des dépenses facturées et payées avant le 31/12/2025. **Tout le
web l'annonce encore comme en vigueur** : ne jamais recopier ce montant depuis
une page commerciale. Même famille d'erreur que le « 95 % d'énergie économisée »
de l'aluminium, tranché le 11/08. ⚠️ Ne pas affirmer non plus l'**obligation
IRVE** : la page service-public consultée ne l'exige pas explicitement, elle
parle de l'entreprise qui fournit l'équipement ou de son sous-traitant.

### ⚠️ Trou de publication du 16 au 18/08/2026 — la tâche s'est arrêtée en silence

Constaté le 19/08 : **aucun article les 16, 17 et 18/08**. Le dernier publié
était celui du 15/08 (écrit en avance le 13). La tâche `article-quotidien-lespritbois`
était pourtant **active**, et le planificateur enregistrait bien un déclenchement
chaque matin.

Ce qui a été établi : dernière exécution ayant laissé une trace le **15/08 à
12h50**, dans l'**ancien** dossier `~/Documents/projet/lespritbois` — ce jour-là
elle a d'ailleurs correctement refusé de publier, le créneau étant déjà servi.
Depuis, **aucune session n'a jamais tourné dans `~/Projets/lespritbois`** : le
dossier de transcriptions de ce chemin n'a pas bougé depuis sa création le 14/08.
Les déclenchements des 16 au 19 n'ont produit aucune session exploitable.

Cause probable : la tâche a été créée quand le dépôt vivait sous `~/Documents`,
et le planificateur ne permet pas de changer le dossier de démarrage enregistré —
seulement les instructions. Une **étape 0** a donc été ajoutée en tête du SKILL.md,
qui force `cd /Users/bertranddavid/Projets/lespritbois` et interdit explicitement
l'ancien chemin. À surveiller : si le 20/08 ne sort pas non plus, le problème est
ailleurs que dans le prompt.

**Décision prise sur le rattrapage : ne pas antidater.** Les 16-18 restent vides.
Trois articles publiés le même jour avec des dates passées se voient plus qu'un
trou de trois jours, et cela aurait vidé la réserve d'un coup. Le 19/08 a été
publié normalement.

⚠️ **Le vrai défaut : rien n'alerte quand la routine ne produit rien.** Quatre
jours ont passé sans que personne le voie. Activer `notifyOnCompletion` sur la
tâche **depuis une session normale** (impossible depuis une exécution planifiée,
qui ne peut pas s'abonner à ses propres notifications) : l'absence de notification
devient alors le signal.

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
| 2026-08-06 | publié  | Choisir la teinte RAL de son aluminium : nuancier, finitions et teintes qui vieillissent bien en Gironde | choisir-teinte-ral-aluminium |
| 2026-08-07 | publié  | Véranda ou extension en ossature bois : que choisir pour agrandir sa maison en Gironde ? | veranda-ou-extension-ossature-bois |
| 2026-08-08 | publié  | Quelle taille pour un carport ? Dimensions, hauteur et implantation pour bien garer sa voiture | dimensions-carport-taille-hauteur |
| 2026-08-10 | publié  | Brise-soleil orientable ou store extérieur : quelle protection solaire pour vos baies vitrées en Gironde ? | protection-solaire-brise-soleil-orientable |
| 2026-08-11 | publié  | L'aluminium est-il écologique ? Recyclage, bas carbone et ce que ça change face au bois en 2026 | aluminium-ecologique-recyclage-bas-carbone |
| 2026-08-13 | publié  | Clôture en aluminium : lames occultantes, limite séparative et raccord au portail | cloture-aluminium-lames-occultantes-guide |
| 2026-08-12 | publié  | Termites en Gironde : comment concevoir un ouvrage en bois qui ne leur offre pas le couvert | termites-gironde-ouvrage-bois-prevention |
| 2026-08-14 | publié  | Abri à bûches en bois : bien stocker son bois de chauffage avant l'hiver (et le faire sécher pour de bon) | abri-buches-bois-stockage-sechage |
| 2026-08-15 | publié  | Entretenir sa pergola, sa véranda et ses menuiseries en aluminium : la révision d'avant-automne | entretien-aluminium-pergola-veranda-revision-automne |
| 2026-08-19 | publié  | Bureau de jardin en bois : autorisation, isolation et budget d'une vraie pièce en plus dans le jardin | bureau-jardin-bois-studio-reglementation-budget |
| 2026-08-21 | publié  | Fermer sa pergola bioclimatique pour l'hiver : rideaux de verre, stores et ce que ça change vraiment | fermer-pergola-bioclimatique-hiver-rideau-verre |
| 2026-08-22 | publié  | Traiter ses bois avant l'hiver : la dernière fenêtre de l'année, et ce qu'on traite vraiment | traiter-bois-exterieur-avant-hiver |
| 2026-08-23 | publié  | Claustra en bois : cacher un vis-à-vis, un local technique ou un coin de terrasse sans construire une clôture | claustra-bois-separation-jardin |
| 2026-08-20 | publié  | Carport et voiture électrique : borne de recharge, cheminement électrique et toiture photovoltaïque | carport-voiture-electrique-borne-recharge |

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
  bois/alu. L'angle de rechange **dimensionnement** a lui aussi été consommé le
  08/08/2026 sous `dimensions-carport-taille-hauteur` (hauteur libre sous
  traverse, dégagement des portières, trames selon le programme, portée et
  position des poteaux, implantation et manœuvre, pente et débord). Le créneau
  carport est **clos à quatre articles** ; les seuls angles encore vierges
  identifiés sont la **voiture électrique sous carport** (borne de recharge,
  cheminement électrique, toiture photovoltaïque — exige des sources vérifiées
  côté électrique) et la **motorisation d'accès**.
- ~~**Véranda aluminium** : usages, isolation, urbanisme et budget~~ → consommé
  le 01/08/2026 sous `veranda-aluminium-isolation-urbanisme-budget` (rupture de
  pont thermique et vitrages, toiture et surchauffe d'été, étanchéité et
  raccord à la maison, statut chauffée/espace tampon, seuils d'urbanisme,
  budget posé 2026). Aucun coefficient Uw ni seuil thermique cité : la
  distinction chauffée-communicante / espace tampon est traitée
  qualitativement, avec renvoi mairie + bureau d'études.
- ~~**Véranda ou extension ossature bois** : que choisir pour agrandir ?~~ →
  consommé le 07/08/2026 sous `veranda-ou-extension-ossature-bois` (thèse : la
  question n'est pas le matériau mais l'usage de la pièce — surface vitrée
  voulue et heures d'occupation quotidienne ; véranda alu pour la lumière et le
  jardin d'hiver, ossature bois dès que la pièce doit vivre à l'identique en
  février et en août ; solution mixte extension bois + grande baie alu présentée
  comme vrai troisième choix). Seuils d'urbanisme vérifiés (DP jusqu'à 40 m² en
  zone U dotée d'un PLU, 20 m² sinon, permis au-delà, architecte obligatoire
  au-delà de 150 m² de surface de plancher totale — sources service-public
  F36777 et F17578). RE2020 traitée qualitativement, sans seuil chiffré ni
  décret : c'est le **statut** (espace tampon non chauffé vs extension chauffée
  communicante) qui décide, pas la matière. Ne pas refaire de sujet
  « agrandir : véranda ou extension ».
- **Entretien d'une pergola / véranda aluminium** : thermolaquage, joints,
  motorisation — le pendant alu de nos articles d'entretien bois. ⚠️ Angle à
  resserrer sur l'entretien pur : le produit véranda et le produit pergola
  bioclimatique sont désormais tous deux couverts.
- ~~**Choisir la teinte de son aluminium** : nuancier RAL, mat/sablé, teintes qui
  vieillissent bien, accord avec une maison girondine~~ → consommé le 06/08/2026
  sous `choisir-teinte-ral-aluminium` (lecture d'un code RAL Classic, ce
  qu'encadrent le thermolaquage et les labels Qualicoat/Qualimarine, finitions
  mat/satiné/sablé, teintes qui pardonnent la poussière girondine, teinte foncée
  plein sud et effet bilame, accord au bâti — pierre blonde et tuile canal —,
  bicoloration, raccord entre ouvrages posés à des dates différentes, retouche
  d'un profilé rayé). Aucune épaisseur de poudre, durée de garantie ni
  température citée : seuls les chiffres du nuancier RAL Classic, vérifiés par
  WebSearch. Ne pas refaire de sujet « couleur de l'alu ».
- ~~**Brise-soleil orientables et protections solaires** : alu, stores, et le
  couple pergola + occultation, angle saisonnier été.~~ → consommé le 10/08/2026
  sous `protection-solaire-brise-soleil-orientable` (protection extérieure vs
  store intérieur, choix par orientation de façade, brise-soleil orientable,
  store screen à zip, brise-soleil fixe et casquette, tenue au vent et
  automatismes, entretien des profilés thermolaqués, budgets 2026 « nos
  chantiers », arbitrage avec la pergola bioclimatique). Aucun facteur solaire,
  seuil DH ni classe de vent cité. Ne pas refaire de sujet « protéger ses baies
  du soleil ».
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
