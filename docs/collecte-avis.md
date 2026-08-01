# Collecte d'avis Google — mode d'emploi

Six avis, c'est le point le plus faible du site. L'audit du 01/08/2026 note la
catégorie « local » 49/100, la plus basse des huit, et le nombre d'avis en est
la cause principale. Aucune ligne de code ne rattrape ça : seul un client
sollicité laisse un avis.

Ce document contient ce qu'il faut pour le faire, rien de plus.

---

## 1. Récupérer le lien direct (5 minutes, une seule fois)

Le site pointe aujourd'hui vers la fiche Google, où le client doit encore
trouver le bouton « Rédiger un avis ». Deux clics au lieu d'un, et chaque clic
perdu coûte des avis.

Le lien court officiel ouvre directement le formulaire de notation :

1. Ouvrir le tableau de bord **Google Business Profile** (google.com/business,
   avec le compte qui gère la fiche).
2. **Demander des avis** → **Partager le formulaire d'avis**.
3. Copier le lien, de la forme `https://g.page/r/XXXXXXXXXXXX/review`.

Puis remplacer la valeur de `avis` dans
[`lib/data/navigation.ts`](../lib/data/navigation.ts) — le bouton « Laisser un
avis » de l'accueil s'y réfère, ainsi que les messages ci-dessous.

Ce lien ne peut pas être reconstruit depuis l'identifiant public de la fiche :
il faut passer par le tableau de bord.

---

## 2. Le message à envoyer

À envoyer par SMS le jour de la réception du chantier, ou le lendemain. Pas une
semaine après : le souvenir du chantier est ce qui fait la différence entre un
avis écrit et un avis oublié.

> Bonjour {prénom}, David de L'Esprit Bois. J'espère que {la terrasse / le
> carport / la pergola} vous plaît. Si le chantier vous a convenu, un avis
> Google nous aiderait beaucoup — c'est ce que regardent les gens avant de nous
> appeler. Ça prend deux minutes : {lien}
> Merci à vous, et bonne continuation.

Variante par e-mail, si vous avez l'adresse plutôt que le portable :

> Objet : Votre {ouvrage} — un petit mot ?
>
> Bonjour {prénom},
>
> Le chantier est terminé depuis {quelques jours}, j'espère que tout tient ses
> promesses. Si vous avez été satisfait du déroulement, un avis Google nous
> rendrait vraiment service : c'est la première chose que consultent les
> particuliers qui nous contactent, et nous n'en avons encore que quelques-uns.
>
> Le lien direct : {lien}
>
> Et si quelque chose ne va pas, dites-le-moi d'abord — je préfère le savoir et
> le corriger.
>
> Bien à vous,
> David Bertrand — L'Esprit Bois — 05 57 40 65 80

La dernière phrase compte autant que le reste : elle vous laisse une chance de
régler un problème avant qu'il ne devienne un avis à deux étoiles.

---

## 3. Qui solliciter en premier

Les douze chantiers documentés sur `/realisations`, du plus récent au plus
ancien. Chacun est un client identifié, avec un ouvrage terminé.

| Commune | Ouvrage |
|---|---|
| Saint-Pey-de-Castets | Pergola aluminium isolée, stores électriques |
| Lacanau | Terrasse pin US sur vis de fondation |
| Moulon | Plage de piscine en ipé |
| Montussan | Pergola aluminium, espace bar |
| Capian | Carport bois trois voitures |
| Arveyres | Carport bois sur plots existants |
| Lugon-et-l'Île-du-Carnay | Carport bois adossé de 13 m |
| Lagorce | Carport bois deux pentes |
| Saint-Denis-de-Pile | Carport bois en limite de propriété |
| Clérac | Extension ossature bois |
| Génissac | Extension clé en main |
| Rauzan | Maison ossature bois de 150 m² |

Douze demandes envoyées, même avec un taux de réponse de 40 %, feraient passer
la fiche de 6 à une dizaine d'avis. C'est le seul chantier de cette liste que
je ne peux pas faire à votre place : je n'ai pas les coordonnées de vos
clients, et écrire en votre nom à des tiers n'est pas quelque chose que je fais
sans votre validation message par message.

---

## 4. Ensuite, en faire une habitude

Le volume compte, mais la **régularité** compte autant : une fiche qui reçoit
un avis par mois pèse plus, aux yeux de Google, qu'une fiche qui en a reçu
quinze d'un coup puis plus rien.

Le plus simple est d'ajouter la demande à la fin de chaque chantier, au même
titre que la facture. Un SMS, deux minutes.

**Ne jamais** proposer de contrepartie (remise, cadeau, tirage au sort) : c'est
interdit par les règles de Google, et une fiche sanctionnée perd tous ses avis
d'un coup.

---

## 5. Répondre aux avis

Répondre à chaque avis, y compris les mauvais, est un signal pris en compte par
Google et lu par les prospects. Une réponse courte suffit — remercier, nommer
l'ouvrage et la commune :

> Merci {prénom} ! Content que la terrasse de {commune} vous plaise. À bientôt.

Sur un avis négatif : accuser réception, proposer de reprendre contact hors
ligne, ne jamais argumenter publiquement.
