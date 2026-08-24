# Référencement du Bassin d'Arcachon — hub, pages d'offre et arsenal de conversion

Date : 2026-08-24
Décidé avec : David Bertrand

## Le problème

`/pergola-bassin-arcachon` est en ligne depuis le 22/08. Elle est correctement écrite, mais elle
porte seule un secteur de sept communes, sur une seule offre, et elle ne convertit pas : le gabarit
de zone n'a qu'un seul appel à l'action, tout en bas de page, après environ 1 400 mots — un lien
vers `/contact`, sans formulaire, avec le numéro de téléphone en texte non cliquable au milieu d'un
paragraphe.

Deux jours après l'ouverture, aucun contact et aucun chantier sur le Bassin. On part donc sans la
moindre référence locale, et c'est la contrainte qui structure tout ce qui suit.

## Ce que dit la concurrence

Relevé du 24/08/2026 sur « pergola bioclimatique La Teste-de-Buch » et « terrasse bois Bassin
d'Arcachon Gujan-Mestras ».

Les positions sont tenues par des sites d'artisans au gabarit d'annuaire, bâtis sur le même modèle
d'agence : une URL par couple (offre × commune), titre saturé de mots-clés, contenu générique.
Aquit'M, Isalu, Les Menuiseries de Capeyron, Guinard Bois, LS Menuiserie. Deux conséquences :

1. **Aquit'M est à Saint-Jean-d'Illac**, pas sur le Bassin, et se positionne avec des pages
   « proche du Bassin d'Arcachon ». Ne pas être implanté sur place n'est pas éliminatoire dans
   cette SERP.
2. Le seul concurrent local réellement solide est **MCV Construction**, à Gujan-Mestras. C'est lui
   la référence à battre, pas les autres.

La SERP n'est donc pas défendue par la qualité. Elle est défendue par la couverture : les
concurrents ont beaucoup de pages. La réponse est d'avoir moins de pages, mais chacune nettement
meilleure, et de les ouvrir sans se faire classer parmi les doorway pages.

## Architecture retenue

Une page mère, quatre pages d'offre, en deux vagues.

| URL | Cible | Vague |
|---|---|---|
| `/bassin-arcachon` | artisan bois / aménagement extérieur sur le Bassin | 1 |
| `/pergola-bassin-arcachon` *(existe)* | pergola bioclimatique La Teste, Arcachon, Gujan | 1 — renforcée |
| `/terrasse-bois-bassin-arcachon` | terrasse bois Arcachon, Gujan, Cap-Ferret | 1 |
| `/carport-bassin-arcachon` | carport, abri voiture | 2 |
| `/extension-ossature-bois-bassin-arcachon` | extension bois, surélévation | 2 |

Les slugs suivent la convention du site — offre d'abord, zone ensuite, comme
`pergola-carport-entre-deux-mers`. Le hub `/bassin-arcachon` est volontairement court : c'est la
seule zone du site qui aura plusieurs pages, donc la seule qui ait besoin d'une page mère.

**La terrasse ouvre avant le carport** parce que c'est la seule offre où l'entreprise a une preuve
littorale réelle : le chantier de Lacanau (`lib/data/chantiers.ts`, id `lacanau`) — sable qui ne
porte pas, vis de fondation au lieu de plots réglables, pin US, plinthe de rive, trois jours de
pose. Face à MCV Construction et Guinard Bois, c'est un argument technique qu'aucun d'eux n'écrit.

### Mise en œuvre dans les données

Le type `Zone` de `lib/data/zones.ts` reçoit deux champs optionnels :

- `offres?: { slug, titre, resume }[]` — les pages d'offre listées par le hub ;
- `parent?: { slug, nom }` — le lien remontant des pages d'offre vers le hub.

`PageZone` rend ces deux champs quand ils sont présents. Le hub reste une `Zone` comme les autres :
il hérite ainsi du JSON-LD, du fil d'Ariane, et surtout de l'inscription automatique au sitemap
(`app/sitemap.xml/route.ts` itère déjà sur `ZONES`).

## Le contenu, offre par offre

C'est ce point qui décide si le groupe de pages tient ou s'effondre en doorway pages. Chaque page
traite une contrainte physique **différente** ; aucune ne redit ce que dit sa voisine.

- **Hub** — les quatre choses que le Bassin change pour n'importe quel ouvrage extérieur, à un
  niveau synthétique, chaque paragraphe renvoyant à la page qui la traite en profondeur.
- **Pergola** — le vent (c'est l'ancrage qui dimensionne, pas la lame), les embruns (Qualicoat pour
  le laquage, Qualimarine/ADAL pour l'alliage), les sites classés et l'avis de l'ABF.
- **Terrasse** — le sable qui ne porte pas, vis de fondation contre plots réglables, la plinthe de
  rive qui empêche le sable de s'installer sous le platelage, et la règle d'urbanisme propre à la
  terrasse : de plain-pied et non couverte, elle ne crée pas d'emprise au sol et échappe à toute
  formalité — sauf en site classé, où l'article R. 421-11 du code de l'urbanisme fait tomber cette
  dispense.
- **Carport** *(vague 2)* — l'emprise au sol et le seuil déclaration préalable / permis, une
  toiture pleine qui ne se met pas en drapeau comme une lame orientable, les massifs en sol
  sableux.
- **Extension ossature** *(vague 2)* — loi Littoral, risque incendie de forêt, fondations en sol
  sableux, RE2020. Sujet que personne ne traite sur le Bassin.

### Discipline d'écriture

Deux règles, non négociables, héritées de la page pergola :

1. **Chaque page annonce dès le chapô qu'on n'a pas encore posé sur le Bassin.** C'est ce qui
   sépare ce groupe de pages de celui d'Aquit'M, et c'est ce qui rend l'ouverture défendable en
   l'absence de chantier local.
2. **Aucune affirmation réglementaire ou technique n'est écrite sans vérification à la source.**
   Pas de zonage de vent, pas de seuil de PLU, pas de périmètre de PPRIF écrit de mémoire. Si ce
   n'est pas vérifiable, on ne l'écrit pas — c'est déjà la règle appliquée au vent le 22/08.

Sources vérifiées le 24/08/2026 et utilisables :

- Article R. 421-11 du code de l'urbanisme : dans un site classé ou en instance de classement, aux
  abords des monuments historiques et en site patrimonial remarquable, les constructions
  normalement dispensées de toute formalité **ne le sont plus** et relèvent de la déclaration
  préalable.
- Article L. 341-10 du code de l'environnement : un site classé ne peut être modifié dans son état
  ou son aspect qu'avec une autorisation spéciale ; lorsque les travaux relèvent de la déclaration
  préalable, cette autorisation est délivrée par le préfet.
- Seuils de droit commun : emprise au sol ou surface de plancher de 5 à 20 m² en déclaration
  préalable, permis de construire au-delà.
- Une terrasse de plain-pied, non couverte et non surélevée, ne crée pas d'emprise au sol.

Le repère des « 60 cm » qui circule pour distinguer une terrasse de plain-pied d'une terrasse
surélevée **n'est fixé par aucun texte** : il ne sera pas écrit comme un seuil.

## Conversion : l'arsenal de la landing sur les pages de zone

`/devis-pergola` dispose d'une machinerie de conversion complète que les pages de zone n'utilisent
pas. Elle est reprise telle quelle, après généralisation.

### Généralisation des composants

`LandingPergola{Form,StickyBar,DesktopPopup}` deviennent `Devis{Form,StickyBar,DesktopPopup}` et
reçoivent deux props :

- `projet` — libellé du projet transmis à `/api/contact` (« Terrasse — Bassin d'Arcachon ») ;
- `pageLabel` — chemin de la page, utilisé pour l'origine du lead et pour la clé de session du
  pop-up.

Sans cette généralisation, tout lead venu du Bassin arriverait étiqueté
`projet: 'Pergola (landing Ads)'` / `Page : /devis-pergola` : l'attribution serait perdue, et le
pop-up vu sur une page de zone empêcherait celui de la landing publicitaire de s'afficher dans la
même session. `/devis-pergola` continue de fonctionner à l'identique, ses valeurs actuelles étant
passées en props.

Le suivi GA4 et Google Ads existant (`reportFormConversion`, `reportLeadGenerated`,
`PhoneClickTracker`) fonctionne sans modification : le tracker téléphone est un écouteur délégué
global qui capte tout lien `tel:` du site.

### Six points de contact par page de zone

Contre un seul aujourd'hui :

1. **Héros** — bouton « Devis gratuit » et numéro en lien `tel:` cliquable et tracké. Aujourd'hui
   le numéro n'est qu'un fragment de texte : tous les appels mobiles sont perdus.
2. **Après les contraintes techniques** — bandeau court. C'est l'instant où le visiteur vient de
   comprendre qu'il y a des pièges et qu'il ne veut pas les gérer seul.
3. **Après le chantier de référence** — rappel discret.
4. **Bas de page** — le formulaire complet en page, ancre `#devis-bas`, à la place du lien vers
   `/contact`. Un lien vers un autre formulaire, c'est un clic perdu.
5. **Mobile** — barre collante téléphone + devis dès que le héros sort de l'écran.
6. **Desktop** — pop-up à 70 % de défilement, une fois par session.

L'arsenal est posé dans `PageZone`, donc il profite à toutes les pages de zone, pas seulement au
Bassin.

## Signaux locaux

- **Zone de service Google Business Profile étendue aux sept communes du Bassin.** Levier local le
  plus fort du dossier, gratuit, et le seul point hors dépôt : à faire depuis le compte de David.
- **JSON-LD** — `Service` avec `areaServed` par commune est déjà produit par `PageZone`. Rien à
  ajouter.
- **Maillage** — le hub lié depuis `/pergolas`, `/terrasses-bois`, `/carports`,
  `/constructions-bois` et le plan du site ; les pages d'offre liées depuis le hub et remontant
  vers lui.
- **NAP** — inchangé, « 1 Aux Pradasses » reste la référence.

## Garde-fous

- Les cinq pages doivent passer le contrôle de longueur au build : title 30–65 caractères,
  description 110–160 (`lib/metadata.ts`). Compter sur les entités HTML décodées.
- **La vague 2 est conditionnelle.** Carport et ossature n'ouvrent que si la vague 1 est indexée et
  ne prend pas de signal négatif dans Search Console. Si les deux premières pages restent
  « détectées, actuellement non indexées », en ouvrir deux de plus ne ferait qu'aggraver.
- Dès le premier chantier réel sur le Bassin : fiche ajoutée à `lib/data/chantiers.ts`, référencée
  dans la zone, chapô et bloc chantiers réécrits, `chantiersTitre` et `chantiersIntro` supprimés.
  La page passe alors de « voici ce que nous savons » à « voici ce que nous avons fait ».

## Hors périmètre

- Les pages carport et extension ossature (vague 2).
- Toute modification du compte Google Ads.
- Toute page par commune. Sept pages de commune sans chantier local seraient exactement la doorway
  page que la règle du dépôt interdit.
