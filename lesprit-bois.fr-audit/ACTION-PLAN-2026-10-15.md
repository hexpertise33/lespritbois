# Plan d'action SEO de lesprit-bois.fr, 15 octobre 2026

Les actions sont classées par impact attendu. Pour chacune : qui agit, et ce qui est fait ou reste à faire. Le détail des constats est dans AUDIT-2026-10-15.md.

## Critique

1. **Régler les fiches Google sœurs avant de créer celle de l'agence** (l'entreprise, hors site, avant janvier)
   - Fiche suspendue « home expertise - agence du bassin », 14 square Pierre de Ronsard, La Teste : demander un réexamen, ou la fermer si elle ne sert plus.
   - Faire la liste des 6 fiches (nom, catégorie principale, téléphone, site). Chacune doit avoir une catégorie, un numéro et un site distincts. Pour celles qui n'accueillent pas de public, passer en zone desservie sans adresse affichée.
   - Pour l'agence : préparer les preuves du local (bail, enseigne, photos de façade et d'intérieur, facture d'énergie) et le nom exact de la signalétique, pour la vérification vidéo.

2. ✅ **FAIT le 15/10 (version 7f8cacc3) : correctifs du jour mis en ligne**
   - Image d'en-tête de /realisations : LCP mobile de 3,9 s, à ramener sous 2,5 s.
   - Titre de la page pergola Bassin.

## Haut

3. **Obtenir des liens d'autres sites** (l'entreprise). Messages prêts le 16/10 dans docs/netlinking-demandes.md : 9 cibles et 4 modèles (fournisseur, organisme, mairie, communiqué de presse pour l'agence).
   - C'est ce qui manque à /pergolas (position 57) et /carports (64).
   - Fournisseurs : fiche « installateur » chez le fabricant des pergolas et du bois.
   - Organismes : Qualibat (annuaire des entreprises qualifiées), CAPEB ou FFB Gironde, CCI Libourne.
   - Annuaires métier : Houzz, Habitatpresto.
   - Communes du Bassin : annuaires d'artisans locaux.
   - Presse locale : Sud Ouest, Le Résistant, pour l'ouverture de l'agence en janvier.

4. **Avis Google : un tous les quinze jours** (l'entreprise)
   - Lien et SMS prêts dans docs/collecte-avis.md.
   - Priorité aux clients du Bassin et aux clients ossature.
   - Répondre à chaque avis en citant l'ouvrage et la commune.

5. **Pousser les requêtes proches de la première page** (moi)
   - ✅ FAIT le 15/10 (commit bfd5ce5) : liens « pergola bioclimatique à Libourne » et « terrasse bois à Libourne » depuis l'accueil ; le lien « terrasses » de l'accueil mène maintenant à /terrasses-bois. ✅ FAIT le 16/10 (commit c6526bd) : les articles ossature-bois-chantier-hiver-pluie et poser-pergola-aluminium-terrasse-bois-existante renvoient vers /constructeur-ossature-bois-gironde et /terrasses-bois. Les trois autres articles qui rapportent avaient déjà leurs liens.
   - « maison bois gironde » (14) et « constructeur maison bois gironde » (18) : c'est l'accueil qui se classe. Décision à prendre : faire entrer « constructeur bois » dans le titre de l'accueil, ou créer une page dédiée « maison bois en Gironde » qui s'appuie sur le chantier de Rauzan (150 m²).

6. **Corriger les données structurées de l'accueil** (moi)
   - `geo` : passer de 4 à 6 décimales, avec les coordonnées exactes du repère de la fiche Google (à relever dans la fiche).
   - ✅ FAIT le 15/10 (commit bfd5ce5) : `areaServed` passe à 29 zones (communes des chantiers publiés, Bassin compris). ✅ `geo` FAIT le 16/10 : 44.952534 / -0.239327, relevé sur le repère de la fiche Google, soit environ 180 m d'écart avec l'ancienne valeur. ⚠️ Horaires à trancher par l'entreprise : la fiche Google affiche une coupure de 12 h à 13 h, le site indique 8 h à 17 h en continu.

## Moyen

7. **Alléger les images de l'accueil pour le mobile** (moi). Testé le 15/10 et non retenu : la recompression ne gagne que 10 à 20 % au prix d'une qualité visible (qualité 58). Les variantes de l'image d'en-tête sont inutiles sur les écrans haute densité, et ce n'est pas elle qui détermine l'affichage. À reprendre seulement en redimensionnant les cartes à leur largeur réelle.
   - `pool-house-bois-terrasse-piscine-libourne.webp` (160 Ko).
   - Les images `source-adefrance` (180 à 230 Ko).
   - `Carport-bois-Libourne-1.webp` (111 Ko).
   - Même méthode que pour /realisations : variantes de 640 et 1 200 px servies en `srcset`.

8. ✅ **FAIT le 15/10 (commit bfd5ce5) : lien « Laissez-nous un avis Google » sur /contact**

9. **Publier un chantier par commune du Bassin** (l'entreprise : photos et accord client, puis moi)
   - Arcachon, Gujan, Andernos, Biganos : ce sont les communes où les impressions existent déjà.

10. **Blog : consolider sans geler** (moi)
    - Le blog fait maintenant environ 30 % des clics. On garde la cadence de deux articles par semaine.
    - Fusions non faites le 16/10, volontairement. Les 4 articles à zéro impression (publiés du 01 au 19/08) ne nuisent pas au site, la suppression est irréversible, et deux mois est un délai court pour un domaine jeune. À réévaluer fin novembre, décision de l'entreprise.
    - Rafraîchir les 5 articles qui rapportent : date de mise à jour, liens vers les pages commerciales.

## Bas

11. **Avis auto-déclarés dans le JSON-LD de l'accueil** : Google les ignore pour une entreprise locale. Les garder seulement tant qu'ils restent identiques à ceux de la fiche.
12. **Lien vers l'attestation décennale et numéro Qualibat**, pour que l'affirmation soit vérifiable.
13. **Janvier 2027** : bascule de l'agence. Rappel programmé le 05/01, checklist dans docs/bascule-agence-la-teste.md.

## Calendrier de mesure

- **22/10** : bilan de la campagne Google Ads Bassin (rappel programmé).
- **Fin novembre** : relevé Search Console sur les pages Bassin (effet de l'agence, du chantier du Pyla et du nouveau titre) et sur /realisations.
