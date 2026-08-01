# GEO & recherche IA — score /100

**Score global : 68 / 100**

| Dimension | Poids | Score | Contribution |
|---|---|---|---|
| Citabilité (passages, réponses directes, chiffres) | 25 % | 78/100 | 19,5 |
| Structure & lisibilité (H2/H3, FAQ, tableaux) | 20 % | 85/100 | 17,0 |
| Contenu multimodal (vidéo, image, audio) | 15 % | 45/100 | 6,75 |
| Signaux d'autorité & marque (E-E-A-T, mentions hors site) | 20 % | 45/100 | 9,0 |
| Accessibilité technique aux crawlers IA | 20 % | 80/100 | 16,0 |

**Score par plateforme (estimation qualitative, basée sur les signaux ci-dessous, pas sur un outil de mesure live)**

| Plateforme | Estimation | Justification courte |
|---|---|---|
| Google AI Overviews | Bon potentiel | FAQPage + Service + BreadcrumbList sur toutes les pages piliers, réponses directes en tête de section, contenu local fort (NAP, geo, Qualibat) |
| ChatGPT / OAI-SearchBot | Bon potentiel | robots.txt ouvert, SSR total, chiffres précis en tête de paragraphe ; pénalisé par l'absence de sources externes citables et de mentions de marque tierces |
| Perplexity | Potentiel moyen | Bonne structure Q/R mais peu de corroboration externe (Perplexity croise fortement avec Reddit/YouTube/avis tiers, quasi absents ici) |
| Bing Copilot | Bon potentiel | Bingbot non bloqué, contenu indexable, mais faible présence sur LinkedIn/annuaires que Copilot valorise |

## Ce qui fonctionne déjà

- **Aucun crawler IA n'est bloqué.** `robots.txt` = `User-agent: * / Allow: /` sans règle spécifique. Test en direct avec les user-agents `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`, `CCBot`, `anthropic-ai`, `cohere-ai` : tous renvoient **200** sur une page de blog. Rien à corriger ici.
- **Rendu 100 % SSR (Next.js prerender).** `raw_content` (avant JS) contient déjà tout le texte : `is_spa: false`, `x-nextjs-prerender: 1`. Les crawlers IA qui ne rendent pas le JavaScript (c'est le cas de la plupart) voient exactement le même contenu qu'un navigateur.
- **FAQPage structurée sur les 14 articles de blog + les 4 pages de gamme** (`carports`, `pergolas`, `amenagement-exterieur`, `constructions-bois`), avec `BreadcrumbList` et `Service`/`BlogPosting` en complément. C'est le format le plus directement exploitable par Google AI Overviews et Bing Copilot.
- **Titres H2/H3 déjà rédigés en questions** (« Faut-il une autorisation d'urbanisme pour un carport ? », « Quel budget prévoir pour une pergola bois ou bioclimatique ? »...) sur la quasi-totalité des articles — c'est exactement le format que les moteurs génératifs recherchent pour extraire une réponse.
- **Réponse directe en ouverture de section** : sur les 5 pages testées avec extraction trafilatura (boilerplate retiré), chaque paragraphe d'ouverture de section tient en 40 à 90 mots et donne la réponse chiffrée avant le développement (ex. « une extension en ossature bois sur mesure... se situe le plus souvent entre 1 700 et 2 500 €/m² en 2026 »). C'est le patron exact recommandé pour la citation IA.
- **Tableaux comparatifs HTML réels**, correctement extraits en Markdown par trafilatura (carport bois vs alu vs solaire, ossature bois vs parpaing, essences de bois avec prix). Les tableaux sont un des formats les mieux repris tels quels par les IA génératives.
- **Chiffres précis et daté 2026** dans presque tous les articles (fourchettes de prix au m², seuils d'urbanisme en m², superficies régionales de forêt en hectares), avec `datePublished`/`dateModified` sur chaque `BlogPosting` et `<lastmod>` dans le sitemap pour les 14 articles.
- **`BlogPosting` avec auteur nommé** (`David Bertrand`, `jobTitle: "Expert bâtiment et créateur d'espaces extérieurs"`) et `publisher` — un signal E-E-A-T de base présent sur tout le blog, ce que beaucoup de sites de PME omettent.
- **Images systématiquement pourvues d'un attribut `alt`** (0 image sans `alt` sur les 26 pages crawlées) — utile pour la recherche d'images IA et les moteurs multimodaux.
- **Entité locale bien formée** : `GeneralContractor` avec adresse postale complète, `geo` (lat/long), téléphone, `areaServed` (Libourne, Gironde, Nouvelle-Aquitaine), `hasCredential` Qualibat, `openingHoursSpecification`. C'est une bonne base pour les requêtes IA locales (« artisan charpentier près de Libourne »).

## Constats

### 1. `llms.txt` absent — Sévérité : Élevée

**Preuve :** `curl -o /dev/null -w "%{http_code}" https://lesprit-bois.fr/llms.txt` → `404`. `https://lesprit-bois.fr/llms-full.txt` → `404` également.

**Correctif :** déposer le fichier `/llms.txt` à la racine (contenu prêt à l'emploi fourni en fin de rapport). Il n'a pas d'effet garanti sur le classement, mais il donne aux agents IA (ChatGPT, Claude, Perplexity) une carte directe des pages à forte valeur informationnelle sans qu'ils aient à parcourir tout le site, et réduit le risque qu'ils ne retiennent que la page d'accueil.

### 2. Aucune source externe citée pour les chiffres et normes avancés — Sévérité : Élevée

**Preuve :** sur les 26 pages crawlées, `liens_ext` vaut systématiquement 2 (Google Fonts + un lien Facebook/GTM), jamais plus. Vérification manuelle sur `blog/extension-ossature-bois-prix-m2` : les seuls liens `http(s)` externes du HTML sont `fonts.googleapis.com`, `fonts.gstatic.com`, `www.facebook.com/Eprisbois33`, `rescuepro.fr` (crédit du prestataire technique) et `googletagmanager.com`. Aucun lien vers une source vérifiable pour des affirmations chiffrées comme « la Nouvelle-Aquitaine, première région forestière de France » (page bois local), « environ 818 000 hectares de pin maritime », la norme **NF EN 335** (classes d'emploi du bois), ou la **RE2020** citée sur plusieurs articles.

**Correctif :** ajouter un lien de sortie vers la source primaire à chaque statistique ou norme citée (ex. IGN/FIBOIS Nouvelle-Aquitaine pour les hectares de forêt, `legifrance.gouv.fr` ou `service-public.fr` pour les seuils d'urbanisme et le CERFA 16702, le texte de la norme NF EN 335 ou une fiche CSTB/FCBA pour les classes d'emploi). Les IA génératives pondèrent plus favorablement — et citent plus volontiers en corroboration — un contenu qui s'auto-source, car cela réduit leur propre risque d'hallucination lors de la reprise.

### 3. Quasi-absence de signaux de marque hors du site — Sévérité : Élevée

**Preuve :** recherche « "L'Esprit Bois" Libourne charpentier » : le seul résultat retourné est le domaine lui-même — aucune trace Wikipedia, YouTube, Reddit ou LinkedIn indexée. Les mémoires de compte confirment une présence sociale réduite à Facebook (`facebook.com/lespritbois33`, 988 abonnés, portée organique faible ~215 vues/post) et Instagram (`@lespritbois`, ~3,7 k abonnés) — **aucune chaîne YouTube, aucune page LinkedIn entreprise**.

**Correctif :** la mention YouTube est le signal le plus corrélé à la citation par les IA génératives (~0,737, très au-dessus des backlinks classiques à ~0,266). Prioriser : (1) une chaîne YouTube avec des vidéos courtes de chantier réutilisant les guides existants (ex. « Comment poser un carport bois adossé », « Pergola bioclimatique : la motorisation expliquée ») et embed sur les pages correspondantes ; (2) une page LinkedIn entreprise, cohérente avec le statut Qualibat ; (3) inscription dans des annuaires professionnels du bâtiment (Qualibat, Batiactu, PagesJaunes Pro, Google Business Profile déjà actif via les avis) pour générer des mentions tierces citables.

### 4. Lien Facebook obsolète dans le schema.org et le footer — Sévérité : Moyenne

**Preuve :** le JSON-LD `GeneralContractor` de la page d'accueil contient `"sameAs":["https://www.facebook.com/Eprisbois33"]`, et ce même lien apparaît dans le HTML du footer sur toutes les pages. Or la page a été renommée le 2026-07-14 en `facebook.com/lespritbois33` (mémoire de compte). Le lien renvoie encore un `200` aujourd'hui grâce à la redirection interne de Facebook, mais cette redirection n'est pas garantie dans le temps, et l'entité canonique déclarée aux moteurs (schema.org) n'est pas alignée avec l'identité sociale actuelle.

**Correctif :** mettre à jour `sameAs` et tous les liens footer vers `https://www.facebook.com/lespritbois33`, et ajouter l'Instagram (`https://www.instagram.com/lespritbois`) au tableau `sameAs`, actuellement limité à une seule entrée. Un `sameAs` complet et à jour renforce la désambiguïsation de l'entité par les moteurs de connaissance (Google Knowledge Graph, index d'entités utilisé par les IA génératives).

### 5. Avis clients affichés mais non structurés en `AggregateRating` — Sévérité : Moyenne

**Preuve :** le H2 de la page d'accueil affiche « Avis clients : 5,0 sur 5 d'après 6 avis Google », mais l'inspection du JSON-LD de la page (`WebSite`, `GeneralContractor`) ne contient aucun bloc `aggregateRating` ni `review`. C'est une donnée déjà collectée et affichée visuellement, mais non structurée.

**Correctif :** ajouter un objet `aggregateRating` (`ratingValue: 5.0`, `reviewCount: 6`, `bestRating: 5`) dans l'entité `GeneralContractor`, idéalement complété par 2-3 `Review` réels (auteur, texte, note). C'est un signal de confiance directement exploité par Google AI Overviews et les résultats locaux, et par les moteurs IA qui pondèrent la preuve sociale dans leurs réponses locales.

### 6. Aucune page auteur / à propos avec crédentials vérifiables — Sévérité : Moyenne

**Preuve :** le plan du site (`/plan-du-site`) et le sitemap XML listent 25 URL — aucune page `/a-propos`, `/qui-sommes-nous` ou page auteur dédiée. L'auteur « David Bertrand » apparaît dans le JSON-LD `BlogPosting` de chaque article (`jobTitle: "Expert bâtiment et créateur d'espaces extérieurs"`) mais sans `sameAs`, `url` ni `image` associés à cette entité `Person`.

**Correctif :** créer une page `/a-propos` (ou `/qui-sommes-nous`) présentant l'expérience, le numéro Qualibat, les années d'activité et un lien vers un profil professionnel (LinkedIn). Référencer cette page via `Person.url` et `Person.sameAs` dans le JSON-LD de chaque `BlogPosting`. C'est un des trois piliers classiques de l'E-E-A-T (Experience, Expertise, Authoritativeness) qui manque actuellement d'ancrage propre.

### 7. Pas de date de fraîcheur sur les pages piliers de gamme — Sévérité : Moyenne

**Preuve :** le sitemap XML fournit un `<lastmod>` pour les 14 articles de blog, mais aucun pour `/`, `/carports`, `/pergolas`, `/constructions-bois`, `/amenagement-exterieur`, `/realisations` ni `/blog`. Ces pages portent pourtant un schema `Service` + `FAQPage`, sans balise de date associée.

**Correctif :** ajouter un `<lastmod>` réaliste dans le sitemap pour ces pages, et envisager un `WebPage.dateModified` dans le JSON-LD. La fraîcheur perçue est un facteur de sélection pour les AI Overviews et Perplexity, qui favorisent les contenus dont la date de mise à jour est vérifiable — en particulier sur des sujets à forte composante réglementaire (urbanisme, RE2020) qui évoluent chaque année.

### 8. Contenu multimodal limité — Sévérité : Moyenne

**Preuve :** sur les pages inspectées, 6 à 25 images par page, toutes avec `alt`, mais aucun élément vidéo, aucun schéma technique téléchargeable (PDF), aucune infographie repérée dans le HTML crawlé. Aucun `VideoObject` en JSON-LD sur le site.

**Correctif :** produire un contenu vidéo court par guide pilier (budget carport, pose de bardage, entretien terrasse canicule), hébergé sur YouTube et embarqué sur la page correspondante avec balisage `VideoObject`. Bénéfice double : couvre à la fois le point 3 (mentions YouTube) et cette faiblesse multimodale — c'est le changement à plus fort effet de levier du rapport.

### 9. RSL 1.0 (licensing IA) non déployé — Sévérité : Faible

**Preuve :** `https://lesprit-bois.fr/rsl.xml` et `https://lesprit-bois.fr/.well-known/rsl.xml` renvoient `404`.

**Correctif :** norme encore émergente (peu d'adoption par les crawlers IA à ce jour) ; à surveiller plutôt qu'à traiter en urgence. Pas de correctif prioritaire tant que les principaux crawlers (GPTBot, ClaudeBot, PerplexityBot) ne l'exploitent pas en pratique.

### 10. Sections longues par rapport à la fenêtre de citation optimale — Sévérité : Faible

**Preuve :** mesure section par section (H2 à H2, texte extrait par trafilatura) sur `blog/extension-ossature-bois-prix-m2` : les sections complètes pèsent 206 à 307 mots, au-delà de la fenêtre optimale de 134-167 mots pour une citation IA. Le paragraphe d'ouverture de chaque section reste toutefois déjà dans la bonne fourchette (40-90 mots), ce qui limite l'impact réel de ce constat.

**Correctif :** optionnel — ajouter un encadré « En bref » de 2-3 phrases (~130-160 mots) juste sous certains H2 les plus stratégiques (prix, urbanisme), en plus du développement existant, pour offrir un second passage auto-suffisant et bien calibré aux moteurs génératifs.

## llms.txt proposé

À déposer tel quel à la racine : `https://lesprit-bois.fr/llms.txt`

```markdown
# L'Esprit Bois

> Artisan charpentier et constructeur bois basé aux Billaux, près de Libourne (Gironde, Nouvelle-Aquitaine, France). Conception, fabrication et pose sur mesure de terrasses, pergolas, carports, bardages, extensions et constructions bois, sans sous-traitance. Entreprise certifiée Qualibat, ouvrages couverts par une garantie décennale.

L'Esprit Bois intervient à Libourne et dans tout le Libournais (Saint-Émilion, Coutras, Fronsac, Vayres, Izon...) ainsi que plus largement en Gironde, jusqu'à la métropole bordelaise. Adresse : 1 Aux Pradasses, 33500 Les Billaux. Contact : lespritbois33@gmail.com, +33 5 57 40 65 80.

## Pages de gamme (savoir-faire)

- [Carports](https://lesprit-bois.fr/carports): Carports bois, aluminium et solaire sur mesure à Libourne et en Gironde — comparatif, budget, urbanisme, FAQ.
- [Pergolas](https://lesprit-bois.fr/pergolas): Pergolas bioclimatiques à lames orientables, aluminium à toiture fixe et bois massif — comparatif, budget, entretien, FAQ.
- [Aménagement extérieur](https://lesprit-bois.fr/amenagement-exterieur): Terrasses bois, pool houses, abris et cuisines d'été sur mesure en Gironde.
- [Constructions bois](https://lesprit-bois.fr/constructions-bois): Extensions et constructions en ossature bois, livrées hors d'eau hors d'air à Libourne et en Gironde.
- [Réalisations](https://lesprit-bois.fr/realisations): Chantiers réalisés en Gironde : carports, pergolas, extensions, pool houses, bardages.

## Guides pratiques (blog, chiffrés et datés 2026)

- [Extension ossature bois : prix au m²](https://lesprit-bois.fr/blog/extension-ossature-bois-prix-m2): Prix au m² (1 700 à 2 500 €/m² en 2026), délais de chantier, seuils d'urbanisme, RE2020, bois local.
- [Carport aluminium ou bois : comparatif](https://lesprit-bois.fr/blog/carport-aluminium-ou-bois-comparatif): Comparatif budget, entretien, portées et style entre carport aluminium et carport bois, avec verdict par profil.
- [Autorisation d'urbanisme abri/carport/pergola 2026](https://lesprit-bois.fr/blog/autorisation-urbanisme-abri-carport-pergola-2026): Seuils d'emprise au sol, CERFA n°16702, secteurs protégés et abords ABF autour de Libourne et Saint-Émilion.
- [Quel bois pour une terrasse extérieure](https://lesprit-bois.fr/blog/quel-bois-pour-terrasse-exterieure): Comparatif d'essences (douglas, mélèze, red cedar, chêne, bois exotiques), classe d'emploi NF EN 335, prix au m² posé.
- [Pergola bioclimatique aluminium : le guide](https://lesprit-bois.fr/blog/pergola-bioclimatique-aluminium-guide): Fonctionnement des lames orientables, motorisation, teintes RAL, urbanisme et budget 2026.
- [Bardage bois façade](https://lesprit-bois.fr/blog/bardage-bois-facade-essences-pose): Essences, pose (claire-voie, recouvrement), classe d'emploi 3, budget 2026 du bardage bois.
- [Bois local en Gironde](https://lesprit-bois.fr/blog/bois-local-pin-maritime-douglas-gironde): Pin maritime, douglas et châtaignier de Nouvelle-Aquitaine : origine, durabilité, comment vérifier la provenance.
- [Pool-house bois](https://lesprit-bois.fr/blog/pool-house-bois-guide): Réglementation, implantation autour d'un bassin, usages et budget 2026 d'un pool-house en bois.
- [Abri de jardin bois : kit ou sur-mesure](https://lesprit-bois.fr/blog/abri-jardin-bois-kit-ou-sur-mesure): Comparatif budget, essences et réglementation entre abri en kit et abri sur mesure.
- [Poulailler bois : réglementation](https://lesprit-bois.fr/blog/poulailler-bois-reglementation-implantation): Seuils d'autorisation, déclaration des volailles en mairie, dimensionnement et implantation.
- [Clôture et brise-vue bois](https://lesprit-bois.fr/blog/cloture-brise-vue-bois-guide): Hauteurs autorisées, déclaration préalable, essences et budget au mètre linéaire.
- [Protéger sa terrasse bois de la canicule](https://lesprit-bois.fr/blog/proteger-terrasse-bois-canicule-entretien-ete): Saturateur, ombrage et entretien estival d'une terrasse en bois.
- [Pergola bois ou bioclimatique](https://lesprit-bois.fr/blog/pergola-bois-ou-bioclimatique): Comparatif d'usage, budget et entretien entre pergola bois et pergola bioclimatique.
- [Carport bois : le guide](https://lesprit-bois.fr/blog/carport-bois-guide): Adossé ou autoportant, essences, toitures, budget et autorisation pour un carport en bois.

## Optionnel

- [Blog](https://lesprit-bois.fr/blog): Index de tous les articles.
- [Mentions légales](https://lesprit-bois.fr/mentions-legales): Éditeur, hébergeur, assurances.
- [Politique de confidentialité](https://lesprit-bois.fr/politique-de-confidentialite): Données collectées et droits RGPD.
```
