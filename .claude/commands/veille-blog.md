---
description: Veille d'actualité bois et 2 propositions d'articles de blog (Temps 1 de la routine éditoriale). Ne publie rien.
---

Tu prépares les propositions d'articles pour le blog L'Esprit Bois. Tu ne
rédiges PAS l'article et tu ne touches PAS à git.

## Étapes
1. Lis `docs/blog-pipeline/README.md` (sujets déjà publiés / en réserve /
   écartés) et `lib/data/blog.ts` pour NE PAS proposer de doublon.
2. Lis `docs/blog-pipeline/ligne-editoriale.md` (thèmes, ton, SEO).
3. Fais une **veille web** (WebSearch) sur l'actualité récente autour du bois :
   matériaux, métiers, réglementation (urbanisme/PLU, RE2020), tendances
   d'aménagement extérieur, carport/terrasse/pergola/poulailler/construction
   bois, actualité filière Gironde / Nouvelle-Aquitaine. Privilégie un angle
   d'actualité ou saisonnier.
4. Rédige **2 propositions** distinctes et complémentaires. Pour chacune :
   - Titre (accrocheur, mot-clé principal présent)
   - Slug proposé (court, sans accent)
   - Angle éditorial + intérêt actualité/saison
   - Mot-clé principal + 3–5 secondaires (dont variantes Libourne/Gironde)
   - Plan des `<h2>` (5–8 sections)
   - Nombre de photos prévu + source pressentie par image (chantier/libre/IA)
   - Idées de maillage interne (pages services + articles liés)
5. Écris ces 2 propositions dans `docs/blog-pipeline/AAAA-MM-JJ.md` (date du
   jour). Ajoute les 2 lignes correspondantes au tableau « Sujets » de
   `docs/blog-pipeline/README.md` avec le statut `proposé`.
6. **Notifie l'utilisateur** (résumé des 2 titres + chemin du fichier) et
   invite-le à valider par `/rediger-article`.

Ne lance jamais de push ni de deploy.
