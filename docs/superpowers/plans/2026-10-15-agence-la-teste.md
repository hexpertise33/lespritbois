# Agence La Teste-de-Buch, phase 1 : plan d'implémentation

> **Pour les agents :** exécuter tâche par tâche (superpowers:executing-plans). Cases `- [ ]` pour le suivi.

**Objectif :** annoncer l'agence de La Teste-de-Buch (ouverture janvier 2027) et réécrire les pages Bassin au présent : l'entreprise y fait déjà rendez-vous, relevés et chantiers.

**Architecture :** coordonnées de l'agence centralisées dans `lib/data/navigation.ts` (`AGENCE_LA_TESTE`). Nouvelle page statique calquée sur `app/contact/page.tsx`. Deux champs optionnels ajoutés au type `Zone` (`accesTitre`, `accesLien`) pour que `PageZone` affiche l'agence dans sa section accès, sans code spécifique au Bassin dans le composant.

**Stack :** Next.js (App Router) via OpenNext sur Cloudflare Workers, Tailwind. Pas de suite de tests : la vérification se fait par build et contrôle visuel.

## Contraintes globales

- Adresse : `29 allée des Mousserons, 33260 La Teste-de-Buch`. Ouverture : `janvier 2027`.
- Aucun exemple de chantier sur le Bassin inventé : ni commune, ni ouvrage.
- Supprimer toute formulation « pas encore posé », « pas encore de chantier », « secteur que nous voulons développer ».
- Ne pas toucher au JSON-LD `GeneralContractor` (`app/page.tsx`).
- Icônes : uniquement des glyphes déjà présents dans le sous-ensemble (`phone_in_talk`, `mail`, `location_on`, `schedule`, `directions`, `arrow_forward`, `check_circle`, `deck`, `blinds`, `home_work`, `handshake`, `verified`).
- Pas d'iframe de carte (CSP).
- Build depuis un clone hors iCloud (`depot-sous-icloud-builds-bloques`).

---

### Tâche 1 : coordonnées de l'agence

**Fichier :** modifier `lib/data/navigation.ts` (après `GOOGLE`).

**Produit :** `AGENCE_LA_TESTE` = `{ nom, rue, codePostal, ville, adresseComplete, ouverture, slug, itineraire, carte }`. `slug: '/agence-la-teste-de-buch'`.

- [ ] Ajouter la constante. Les liens Maps reprennent le format de `GOOGLE.itineraire` et `GOOGLE.carte`, avec l'adresse encodée.
- [ ] `npx tsc --noEmit` : aucune erreur.

### Tâche 2 : page `/agence-la-teste-de-buch`

**Fichier :** créer `app/agence-la-teste-de-buch/page.tsx`.

**Consomme :** `AGENCE_LA_TESTE`, `CONTACT`, `getZone('bassin-arcachon')` (pour `communes` et `offres`), `ContactForm`, `JsonLd`, `SiteNav`, `SiteFooter`, `buildMetadata`.

Sections, sur le modèle de `app/contact/page.tsx` :
1. **Héros** : fil d'Ariane Accueil / Bassin d'Arcachon / Agence La Teste-de-Buch ; badge « Ouverture janvier 2027 » ; H1 « Notre agence à La Teste-de-Buch » ; chapô au présent ; boutons téléphone et « Demander mon étude gratuite ». Image de couverture : celle du hub Bassin, qui montre un lieu et non un ouvrage.
2. **Dès aujourd'hui / En janvier** : deux cartes. La première : rendez-vous, relevés et chantiers sur le Bassin dès maintenant, devis gratuit, déplacement compris. La seconde : un bureau sur place, des rendez-vous plus simples, un suivi de chantier rapproché ; la fabrication reste aux Billaux.
3. **Adresse** : bloc adresse, bouton itinéraire, mention « Horaires communiqués à l'ouverture. D'ici là, appelez le {tel}. » ; liste des communes du Bassin.
4. **Ouvrages** : cartes vers le hub et les trois pages métier (`zone.offres` du hub).
5. **Formulaire** : `ContactForm pageLabel="/agence-la-teste-de-buch"`.

JSON-LD : seulement un `BreadcrumbList`, pas d'établissement.
Metadata : title « Agence La Teste-de-Buch : pergola, terrasse, bois », mesuré à 60 caractères au plus après décodage des entités ; `ville: 'La Teste-de-Buch'`.

- [ ] Créer la page.
- [ ] `npx tsc --noEmit` : aucune erreur.
- [ ] Commit : `feat: page agence La Teste-de-Buch (ouverture janvier 2027)`.

### Tâche 3 : pages Bassin

**Fichiers :** `lib/data/zones.ts` (type `Zone` et les 4 entrées Bassin), `components/PageZone.tsx` (section accès).

- [ ] Type `Zone` : ajouter `accesTitre?: string` (défaut « Depuis l'atelier des Billaux ») et `accesLien?: { href: string; texte: string }`.
- [ ] `PageZone` : utiliser `zone.accesTitre ?? "Depuis l'atelier des Billaux"` dans le h2 ; si `zone.accesLien` existe, afficher un lien `lienInterne` sous le paragraphe d'accès.
- [ ] Pour les 4 entrées : `accesTitre: 'Sur le Bassin, et bientôt à La Teste-de-Buch'` et `accesLien` vers `AGENCE_LA_TESTE.slug`.
- [ ] Réécrire `acces` (4 entrées) : présence actuelle sur le Bassin ; agence au 29 allée des Mousserons en janvier 2027 ; fabrication aux Billaux, préparation en atelier conservée ; relevé et devis gratuits, déplacement compris.
- [ ] Réécrire les `chapo` : pergola (l. 477), terrasse (l. 669), hub (l. 1117).
- [ ] Réécrire les `chantiersIntro` : pergola (l. 557), terrasse (l. 754), extension (l. 1005), hub (l. 1191). Ces chantiers ne sont pas sur le Bassin : le dire sans nier l'activité. `chantiersTitre` du hub et de la pergola : « Un chantier sur sol sableux, à Lacanau ».
- [ ] Réécrire les FAQ : pergola (l. 582-583), terrasse (l. 791-792), hub (l. 1216-1217 et 1224-1225). Hub, l. 1220 : « pour l'instant » / « quand nous aurons de quoi les écrire » devient une formulation neutre sur les pages ouvertes.
- [ ] Commentaires : en-tête du fichier (l. 8-12), commentaire de couverture du hub (l. 1118-1122), commentaire terrasse (l. 606-611). Les mettre à jour pour que la règle ne contredise plus le contenu.
- [ ] Vérification : `grep -n -i "pas encore posé\|pas encore de\|heure de route\|voulons développer\|n'avons pas encore" lib/data/zones.ts` ne doit rien renvoyer pour les entrées Bassin.
- [ ] `npx tsc --noEmit`, puis commit : `contenu: pages Bassin au présent, annonce de l'agence de La Teste`.

### Tâche 4 : annonces sur le site

**Fichiers :** `components/SiteFooter.tsx`, `app/contact/page.tsx`, `app/plan-du-site/page.tsx`, `app/llms.txt/route.ts`.

- [ ] Footer, colonne Contact, après les horaires : `<li>` avec le lien « Nouvelle agence : La Teste-de-Buch (janv. 2027) » vers `AGENCE_LA_TESTE.slug`.
- [ ] Contact : sous la grille des coordonnées, un bandeau pleine largeur « Nouvelle agence à La Teste-de-Buch » avec l'adresse, « ouverture janvier 2027 », la mention « nous intervenons déjà sur le Bassin » et un lien vers la page.
- [ ] Plan du site : ajouter `{ titre: 'Agence de La Teste-de-Buch', url: '/agence-la-teste-de-buch' }` dans « L'entreprise ».
- [ ] llms.txt, ligne 28 : remplacer la phrase Bassin par « L'entreprise intervient déjà sur le Bassin d'Arcachon (rendez-vous, relevés, chantiers) et y ouvre une agence au 29 allée des Mousserons, 33260 La Teste-de-Buch, en janvier 2027. » ; ajouter un lien vers la page agence.
- [ ] Sitemap : rien à faire, `scripts/gen-lastmod.mjs` déduit les pages de `app/`. À vérifier après le build.
- [ ] Commit : `feat: annonce de l'agence de La Teste dans le footer, le contact, le plan et llms.txt`.

### Tâche 5 : checklist de bascule

- [ ] Créer `docs/bascule-agence-la-teste.md` avec la phase 2 de la spec, un item par fichier : `app/page.tsx` (JSON-LD), `navigation.ts` (horaires, téléphone), footer, contact, page agence (badge), `zones.ts` (« dès janvier » / « en janvier 2027 »), llms.txt, et côté entreprise : fiche Google et Search Console.
- [ ] Commit.

### Tâche 6 : build et vérification

- [ ] Clone hors iCloud (scratchpad), `npm install`, `npm run build`.
- [ ] Prévisualisation locale : la page agence, les 4 pages Bassin, la page contact et le footer, sur ordinateur et en 375 px. Aucune icône ne doit s'afficher en texte brut, aucune erreur dans la console.
- [ ] Contrôler que `/agence-la-teste-de-buch` figure dans `/sitemap.xml`.
- [ ] Le déploiement en production se fait après accord de l'utilisateur.
