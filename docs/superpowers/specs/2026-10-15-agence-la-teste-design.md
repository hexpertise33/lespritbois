# Agence de La Teste-de-Buch : design

Date : 15/10/2026
Statut : validé à l'oral, en attente de relecture de la spec

## Contexte

L'Esprit Bois ouvre un bureau au **29 allée des Mousserons, 33260 La Teste-de-Buch** en janvier 2027. Le fonctionnement du lieu (accueil du public ou non, horaires) n'est pas encore arrêté.

L'entreprise **travaille déjà sur le Bassin d'Arcachon** : rendez-vous, relevés et chantiers. Elle ne souhaite pas citer d'exemples précis pour l'instant : le discours reste général, sans commune ni ouvrage nommés.

Le site présente aujourd'hui le contraire. Les quatre pages Bassin, générées depuis `lib/data/zones.ts`, affirment 6 fois « nous n'y avons pas encore posé » et 8 fois « comptez un peu plus d'une heure de route depuis les Billaux ». Ces textes sont désormais faux, ou le deviendront en janvier.

## Approche retenue : deux temps

- **Phase 1, maintenant** : on annonce l'agence et on corrige le discours sur le Bassin. Les données structurées ne changent pas.
- **Phase 2, à l'ouverture en janvier** : bascule vers deux établissements.

Publier dès maintenant laisse à Google environ trois mois pour indexer et classer la page agence avant l'ouverture.

## Phase 1 : périmètre

### 1. Coordonnées de l'agence

Ajouter un bloc `AGENCE_LA_TESTE` dans `lib/data/navigation.ts`, à côté de `CONTACT`, pour garder une source unique des coordonnées :

- `rue: '29 allée des Mousserons'`, `codePostal: '33260'`, `ville: 'La Teste-de-Buch'`, `adresseComplete`
- `ouverture: 'janvier 2027'` (libellé affiché)
- `itineraire` et `carte` au format des liens Maps URLs déjà utilisés par `GOOGLE`
- pas de téléphone propre : le numéro est celui de `CONTACT` tant qu'il n'y a pas de décision sur une ligne locale
- pas d'horaires : la page affiche « communiqués à l'ouverture »

### 2. Nouvelle page `/agence-la-teste-de-buch`

Page autonome (`app/agence-la-teste-de-buch/page.tsx`), avec `buildMetadata` et `ville: 'La Teste-de-Buch'`.

Contenu :
- H1 : « Agence L'Esprit Bois à La Teste-de-Buch », avec un badge « Ouverture janvier 2027 ».
- Chapô : nous travaillons déjà sur le Bassin (rendez-vous, relevés, chantiers) ; l'agence nous installe sur place.
- Bloc « Dès aujourd'hui » : rendez-vous et relevés sur le Bassin, devis gratuit, déplacement compris.
- Bloc « Ce que change l'agence » : un interlocuteur sur place, des rendez-vous plus faciles et un suivi de chantier au plus près. La fabrication reste à l'atelier des Billaux, où l'ossature est taillée et assemblée à blanc.
- Adresse, lien d'itinéraire, mention « horaires communiqués à l'ouverture ». Pas d'iframe de carte : la CSP bloque les ressources tierces non déclarées, un lien suffit.
- Communes couvertes : la liste `communes` de la zone `bassin-arcachon`.
- Cartes vers le hub et les trois pages métier du Bassin.
- Formulaire de devis avec `projet: 'Agence La Teste-de-Buch'`.
- Fil d'Ariane : Accueil > Bassin d'Arcachon > Agence La Teste-de-Buch.

On réutilise les composants et le style des pages de zone existantes, sans créer de nouveau design.

### 3. Réécriture des pages Bassin (`lib/data/zones.ts`)

Ces quatre entrées sont concernées : `bassin-arcachon`, `pergola-bassin-arcachon`, `terrasse-bois-bassin-arcachon`, `extension-ossature-bois-bassin-arcachon`.

- **Supprimer** toutes les formulations « pas encore posé », « liste de références que nous n'avons pas », « secteur que nous voulons développer ».
- **Remplacer** par un discours au présent : nous intervenons déjà sur le Bassin (rendez-vous, relevés, chantiers) et nous y ouvrons une agence à La Teste-de-Buch en janvier 2027.
- **Distance** : « un peu plus d'une heure de route depuis les Billaux » devient « d'ici l'ouverture de l'agence, nous venons de l'atelier des Billaux ; le relevé et le devis sont gratuits, déplacement compris ». La logique de préparation en atelier est conservée, puisque la fabrication reste aux Billaux.
- **FAQ** : « Intervenez-vous sur le Bassin ? » devient « Oui, nous y avons déjà des chantiers, et une agence ouvre à La Teste-de-Buch en janvier 2027. » « Le déplacement depuis Libourne est-il facturé ? » devient « Le déplacement est-il facturé ? », avec la mention de l'agence.
- **Terrasse** : le chapô « Nous n'avons pas encore posé de terrasse sur le Bassin. Mais… Lacanau » est réécrit. Lacanau reste cité comme exemple de sol sableux, sans la négation.
- Aucun exemple de chantier sur le Bassin n'est inventé : pas de commune ni d'ouvrage nommés.
- Mettre à jour le commentaire d'en-tête du fichier (ligne 11) s'il mentionne ce cas.
- Ajouter un lien vers `/agence-la-teste-de-buch` sur chacune des quatre pages, par un champ de données ou un encart dans `PageZone` limité aux zones du Bassin. Choix à faire à l'implémentation, en suivant le modèle existant.

### 4. Annonces sur le reste du site

- `components/SiteFooter.tsx` : une ligne « Nouvelle agence : La Teste-de-Buch (janv. 2027) » dans la colonne Contact, avec un lien vers la page. L'adresse du siège ne change pas.
- `app/contact/page.tsx` : un encart sur l'agence, avec son adresse et sa date d'ouverture.
- `app/sitemap.xml/route.ts`, plan du site, `app/llms.txt/route.ts` : ajouter la page.

### 5. Données structurées : aucun changement

Le `GeneralContractor` de `app/page.tsx` garde une seule adresse, aux Billaux. Déclarer un établissement qui n'est pas encore ouvert serait incohérent avec la fiche Google.

### 6. Checklist de bascule

Créer `docs/bascule-agence-la-teste.md`, qui liste chaque modification de la phase 2 avec le fichier concerné.

## Phase 2 : en janvier (hors périmètre, documentée seulement)

- Données structurées : déclarer l'agence comme second établissement (`department` de type `GeneralContractor` avec son adresse et ses coordonnées `geo`, ou entité liée par `parentOrganization`).
- Pied de page : afficher les deux adresses ; supprimer les mentions « janv. 2027 » et « dès janvier » dans tout le site.
- Page agence : retirer le badge d'ouverture et ajouter les vrais horaires.
- Fiche Google Business de l'agence : création et vérification sur place, **par l'entreprise**.
- Décider d'un numéro de téléphone local en 05 56 pour la fiche.
- Déclarer la nouvelle URL dans Search Console.

## Vérification

- Build depuis un clone hors iCloud, avec un vrai `npm install` (voir mémoire « dépôt sous iCloud »).
- Avant déploiement, contrôle visuel des 5 pages (agence + 4 Bassin), de la page contact et du pied de page, sur ordinateur et sur mobile.
- Vérifier par une recherche qu'il ne reste aucune mention « pas encore posé » ni « heure de route » dans le code.
- Mesurer les `title` en décodant les entités HTML avant de compter les caractères.
- Après déploiement Cloudflare : 3 requêtes sur chaque URL modifiée avant de valider.
