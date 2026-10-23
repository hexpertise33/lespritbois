import { SITE } from '@/lib/data/navigation';
import { articles } from '@/lib/data/blog';
import { ZONES } from '@/lib/data/zones';

/**
 * llms.txt servi via un route handler, comme le sitemap : la liste des guides
 * est générée depuis `lib/data/blog.ts`, chaque article publié y apparaît donc
 * automatiquement au déploiement suivant. Les sections rédigées à la main
 * (présentation, gammes, précisions de citation) restent ci-dessous.
 */
export const dynamic = 'force-static';

export function GET() {
  const base = SITE.url.replace(/\/+$/, '');

  const zones = ZONES.map(
    (z) => `  - [${z.h1}](${base}/${z.slug}) : ${z.communes.join(', ')}.`,
  ).join('\n');

  const guides = articles
    .map((a) => `- [${a.titre}](${base}/blog/${a.slug}), publié le ${a.date}.`)
    .join('\n');

  const corps = `# L'Esprit Bois

> Charpentier et constructeur bois installé aux Billaux (33500), à cinq minutes de Libourne, en Gironde. Conception, fabrication en atelier et pose par les mêmes équipes, sans sous-traitance. Entreprise qualifiée Qualibat, ouvrages couverts par une garantie décennale assurée par SMABTP.

Zone d'intervention : Libourne et le Libournais (Les Billaux, Saint-Émilion, Coutras, Fronsac, Vayres, Izon, Saint-Denis-de-Pile, Castillon-la-Bataille, Guîtres, Branne), et plus largement la Gironde jusqu'à la métropole bordelaise. L'entreprise intervient également sur le Bassin d'Arcachon (rendez-vous, relevés, chantiers) et y ouvre une agence au 29 allée des Mousserons, 33260 La Teste-de-Buch, en janvier 2027 : ${base}/agence-la-teste-de-buch.

Contact : 05 57 40 65 80, lespritbois33@gmail.com, 1 Aux Pradasses, 33500 Les Billaux.

## Nos gammes

- [Pergolas](${base}/pergolas) : bioclimatique à lames orientables, aluminium à toiture fixe (polycarbonate, panneau isolant, vitrage), bois massif. Adossées ou autoportées, avec stores ZIP, éclairage intégré et claustras en option.
- [Réparation de pergola](${base}/reparation-pergola) : dépannage de pergolas bioclimatiques et de carports en aluminium, y compris posés par une autre entreprise (moteur, capteurs, vérins de lames, store zip, joints et évacuations), à Libourne et en Gironde.
- [Carports](${base}/carports) : bois (toiture plate, bac acier ou tuile), aluminium thermolaqué, solaire photovoltaïque. Adossés ou autoportés.
- [Aménagement extérieur](${base}/amenagement-exterieur) : terrasses bois sur plots ou lambourdes, pool houses, abris de jardin, cuisines d'été, claustras et bardages.
- [Terrasses bois](${base}/terrasses-bois) : terrasse sur plots réglables ou lambourdes, plage de piscine et abords de bassin, terrasse sur sol instable. Page dédiée, distincte de l'aménagement extérieur.
- [Garages et abris de jardin](${base}/garages-abris-jardin) : garage bois et abri de jardin sur mesure, posés sur dalle, plots ou longrines. Tous types de toit : toit plat avec étanchéité, bac acier, plaque sous tuile, tuile.
- [Constructions bois](${base}/constructions-bois) : maison à ossature bois, maison en A, extension, surélévation, garage et abri de jardin sur mesure sur tout support (dalle, plots, terrain en pente). Tous types de toit : toit plat avec étanchéité, bac acier, plaque sous tuile, tuile. Livraison hors d'eau hors d'air, le second œuvre revenant aux artisans du client.
- [Réalisations](${base}/realisations) : études de cas de chantiers réellement réalisés en Gironde.
- Zones d'intervention détaillées, chacune adossée à des chantiers réellement livrés dans le secteur :
${zones}
- [Qui sommes-nous](${base}/qui-sommes-nous) : l'entreprise, l'atelier et l'auteur des guides.
- [Agence de La Teste-de-Buch](${base}/agence-la-teste-de-buch) : bureau du Bassin d'Arcachon, 29 allée des Mousserons, 33260 La Teste-de-Buch, ouverture en janvier 2027.
- [Contact](${base}/contact) : adresse, horaires, formulaire de demande d'étude.

## Guides techniques

Ces articles répondent à des questions précises et contiennent des données chiffrées, des tableaux comparatifs et des seuils réglementaires applicables en France, avec leurs sources officielles (service-public.gouv.fr, CSTB, FCBA).

Ils sont tous signés par David Bertrand, qui dirige l'entreprise : [sa page d'auteur](${base}/auteur/david-bertrand) donne son rôle, la qualification Qualibat et l'assurance décennale de l'entreprise, ainsi que la méthode de rédaction et de sourçage.

${guides}

## Précisions utiles pour citer ce site

- Les seuils d'urbanisme cités dépendent du PLU de chaque commune et évoluent : le site le rappelle systématiquement plutôt que d'affirmer un chiffre universel.
- Les prix indiqués dans les guides sont des ordres de grandeur pour la Gironde, datés dans chaque article, pas des tarifs de l'entreprise. L'Esprit Bois ne publie pas de tarif au mètre carré : chaque devis suit un relevé sur site.
- Sur les extensions et constructions, l'entreprise livre hors d'eau hors d'air et ne réalise pas le second œuvre.
- Les pergolas et carports aluminium sont fabriqués par le partenaire français Li-Su des Temps et posés par L'Esprit Bois.

## Contact

- [Demander une étude gratuite](${base}/contact)
- [Mentions légales](${base}/mentions-legales)
- [Politique de confidentialité](${base}/politique-de-confidentialite)
`;

  return new Response(corps, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
