# Bascule de l'agence de La Teste-de-Buch : checklist de janvier 2027

L'agence (29 allée des Mousserons, 33260 La Teste-de-Buch) est **annoncée** sur le site depuis le 15/10/2026, mais **pas déclarée** comme établissement. À faire le jour de l'ouverture, dans cet ordre.

Spec d'origine : `docs/superpowers/specs/2026-10-15-agence-la-teste-design.md`.

## Avant de toucher au site : côté entreprise

- [ ] Fixer les horaires d'ouverture du bureau, et décider s'il reçoit du public.
- [ ] Décider du téléphone : ligne locale en 05 56, ou le 05 57 40 65 80. Une fiche Google pour La Teste fonctionne mieux avec un numéro local.
- [ ] Créer la fiche Google Business Profile de l'agence (catégorie identique à celle du siège) et la faire vérifier sur place. **Personne d'autre que l'entreprise ne peut le faire.** Mettre comme site web `https://lesprit-bois.fr/agence-la-teste-de-buch`, et non l'accueil.

## Site

- [ ] `lib/data/navigation.ts`, `AGENCE_LA_TESTE` : ajouter `horaires`, le téléphone s'il est propre, la fiche Google (`kgmid`) et les coordonnées `geo` relevées sur la carte. Remplacer `ouverture` par une date passée, ou le supprimer et corriger ses usages (`grep -rn "ouverture" app components lib`).
- [ ] `app/page.tsx`, JSON-LD `GeneralContractor` : déclarer l'agence comme second établissement (`department` de type `GeneralContractor` avec son `address`, son `geo`, ses `openingHoursSpecification`, `telephone`, `hasMap`), et ajouter La Teste-de-Buch, Arcachon et Gujan-Mestras dans `areaServed` s'ils n'y sont pas.
- [ ] `app/agence-la-teste-de-buch/page.tsx` : retirer le badge « Ouverture … », remplacer « Horaires communiqués à l'ouverture » par les vrais horaires, passer « À l'ouverture » au présent, et ajouter un bouton « Voir notre fiche Google ». Ajouter en JSON-LD l'entité de l'agence (référence par `@id` vers le `department` de l'accueil).
- [ ] `lib/data/zones.ts`, constante `ACCES_PREFIXE` et textes du Bassin : remplacer « nous y ouvrons une agence … en janvier 2027 » par « notre agence de La Teste-de-Buch » (`grep -n "2027" lib/data/zones.ts`).
- [ ] `components/SiteFooter.tsx` : remplacer « Nouvelle agence : … (janv. 2027) » par l'adresse complète de l'agence, sous celle de l'atelier.
- [ ] `app/contact/page.tsx` : passer l'encart de l'agence au présent et y ajouter ses horaires.
- [ ] `app/page.tsx`, bandeau « Nouvelle agence » sous le bandeau de confiance : retirer « ouverture … », passer « s'installe » à « est installée » ou le remplacer par l'adresse et les horaires.
- [ ] `app/llms.txt/route.ts` : retirer « en janvier 2027 ».
- [ ] `app/blog/pergola-aluminium-bord-de-mer-bassin-arcachon/page.tsx` : « Nous ouvrons d'ailleurs une agence … en janvier 2027 » devient « Notre agence de La Teste-de-Buch … ».
- [ ] Contrôle final : `grep -rn "2027\|janv\." app components lib` ne doit plus renvoyer de mention d'ouverture à venir.

## Après déploiement

- [ ] Search Console : demander l'indexation de `/agence-la-teste-de-buch`, de `/bassin-arcachon` et de `/contact`.
- [ ] Valider le JSON-LD de l'accueil dans le test des résultats enrichis.
- [ ] Bing Webmaster : soumettre les mêmes URL.
- [ ] Dès qu'un chantier du Bassin est photographié : le publier dans `lib/data/chantiers.ts` et remplacer, dans les quatre pages Bassin, les « nos chantiers du Bassin ne sont pas encore publiés » par ce chantier.
