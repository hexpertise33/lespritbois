# Collecte d'avis Google — mode d'emploi

Six avis, c'est le point le plus faible du site. L'audit du 01/08/2026 note la
catégorie « local » 49/100, la plus basse des huit, et le nombre d'avis en est
la cause principale. Aucune ligne de code ne rattrape ça : seul un client
sollicité laisse un avis.

Ce document contient ce qu'il faut pour le faire, rien de plus.

---

## 1. Le lien direct

Récupéré le 15/10/2026 dans la fiche (« Demander des avis », compte Google
adefrance033) et branché sur le site (`GOOGLE.avis` dans
[`lib/data/navigation.ts`](../lib/data/navigation.ts)). Il ouvre directement
le formulaire de notation :

**https://g.page/r/CdowfVdKkdTBEBM/review**

Le même écran propose un QR code (clic droit → « Enregistrer l'image sous ») :
utile imprimé au dos d'une carte de visite ou d'un devis.

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

## 3 bis. Priorité Bassin d'Arcachon (avant l'ouverture de janvier 2027)

L'agence de La Teste-de-Buch ouvre en janvier. Pour la carte Google de La
Teste, Arcachon ou Gujan, un avis d'un client **du Bassin** pèse plus lourd que
n'importe quel autre : c'est la preuve locale que les pages du site affirment
sans pouvoir encore la montrer.

À solliciter en premier : tous les clients du Bassin déjà livrés, puis chaque
nouveau chantier du Bassin le jour de la réception.

> Bonjour {prénom}, David de L'Esprit Bois. J'espère que {la pergola / la
> terrasse} vous plaît. Nous ouvrons une agence à La Teste-de-Buch en janvier,
> et l'avis de nos clients du Bassin compte beaucoup pour les voisins qui
> hésitent à nous appeler. Si le chantier vous a convenu, deux minutes suffisent
> : https://g.page/r/CdowfVdKkdTBEBM/review
> Merci à vous !

Le client écrit ce qu'il veut. On ne lui dicte pas le texte et on ne lui
demande pas de citer sa commune : un avis rédigé à la place du client est
contraire aux règles de Google. S'il parle naturellement de l'ouvrage et de
l'endroit, c'est tant mieux.

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
