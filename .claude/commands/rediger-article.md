---
description: Rédige, illustre et publie en ligne un article de blog validé (Temps 2 de la routine). Va jusqu'au commit + push + deploy Cloudflare.
---

Tu publies un article de blog L'Esprit Bois à partir d'une proposition validée.
La proposition à traiter est indiquée par l'utilisateur (`$ARGUMENTS`) ou, à
défaut, demande-lui laquelle des propositions du dernier
`docs/blog-pipeline/AAAA-MM-JJ.md` il retient. Confirme le slug avant d'écrire.

## Déroulé
1. **Rédaction.** Lance le sous-agent `redacteur-bois` avec la proposition
   validée (titre, angle, mot-clé, plan H2, slug). Il écrit
   `app/blog/<slug>/page.tsx` avec des marqueurs `__IMAGE_A_SOURCER__` et fournit
   le texte de l'entrée `blog.ts`.
2. **Images.** Lance le sous-agent `iconographe-bois` sur le même fichier : il
   remplace les marqueurs par de vraies images (priorité chantier → libre de
   droits → IA), remplit `alt`/`caption`, fixe `COVER`, et rend la liste de
   provenance.
3. **Index.** Ajoute l'entrée `Article` en tête du tableau de `lib/data/blog.ts`
   (slug, titre, extrait, date du jour, categorie, image = COVER).
4. **Vérification build.** Lance `npm run build`. S'il échoue, corrige (souvent
   apostrophes JSX non échappées, `src` non résolu, import manquant) et relance.
   NE COMMITTE RIEN tant que le build ne passe pas.
5. **Contrôle qualité.** Repasse la « Checklist avant publication » de
   `docs/blog-pipeline/ligne-editoriale.md`. Vérifie qu'il ne reste aucun
   `__IMAGE_A_SOURCER__` ni commentaire `{/* IMAGE: ... */}`.
6. **Publication.** `git add` des fichiers de l'article (page `page.tsx`,
   `lib/data/blog.ts`, images ajoutées sous `public/images/blog/<slug>/`),
   commit avec un message décrivant l'article, `git push origin main`. (La mise
   à jour de `docs/blog-pipeline/README.md` fait l'objet du commit de l'étape 8.)
7. **Deploy.** Lance `npx opennextjs-cloudflare deploy` (ou `npm run deploy`). Si
   les identifiants manquent, signale-le : l'article reste poussé, à déployer
   manuellement.
8. **Mémoire.** Passe le sujet à `publié` dans le tableau de
   `docs/blog-pipeline/README.md` et committe cette mise à jour.

## Garde-fous
- Ne publie qu'UN article par exécution, sauf demande explicite.
- Ne push/deploy jamais si le build échoue.
- Signale à l'utilisateur l'URL finale (`https://lesprit-bois.fr/blog/<slug>`).
