/**
 * Les avis Google réellement publiés sur la fiche de l'établissement.
 *
 * Source unique : l'accueil les affichait en constante locale, les pages de
 * zone en avaient besoin aussi. Ne rien inventer ici, ne rien reformuler :
 * ce sont des propos de clients, recopiés tels quels, et le balisage
 * `Review` de l'accueil s'appuie dessus.
 *
 * ATTENTION : la note globale (`aggregateRating`) et le balisage `Review`
 * restent déclarés sur l'accueil UNIQUEMENT. Afficher les avis ailleurs est
 * légitime, les rebaliser sur chaque page ne l'est pas.
 */
export type Avis = {
  nom: string;
  texte: string;
  /** Sujets abordés, pour choisir les avis les plus parlants selon la page. */
  sujets: ('ossature' | 'extension' | 'permis' | 'pergola' | 'terrasse' | 'conception')[];
};

export const AVIS: Avis[] = [
  {
    nom: 'clément Baudon',
    texte:
      "Commande faite 2 jours avant les congés. On a pu avoir la totalité de la fourniture pour notre terrasse. Super conseil pour le plan de pose. Énorme avantage : l'expérience du vendeur, pour le rendu esthétique comme la mise en place.",
    sujets: ['terrasse'],
  },
  {
    nom: 'Damien',
    texte:
      "Merci à David et toute son équipe pour leurs conseils. Ils m'ont aidé sur la conception d'une pergola et le résultat est parfait.",
    sujets: ['pergola', 'conception'],
  },
  {
    nom: 'Guillaume Marie-Catherine',
    texte: 'Malgré un timing ultra serré, le permis de construire a été déposé dans les temps !',
    sujets: ['permis'],
  },
  {
    nom: 'thuy tran',
    texte:
      "Merci pour la modélisation 3D des chalets et pour les précieux conseils sur l'architecture, l'optimisation de l'espace et des coûts.",
    sujets: ['ossature', 'conception'],
  },
  {
    nom: 'Georgia Flores',
    texte:
      "Merci infiniment à Manon et ses collègues pour le travail sur mes plans d'agrandissement. Projet mené jusqu'à l'obtention du permis. De bons conseils.",
    sujets: ['extension', 'permis'],
  },
  { nom: 'Bérengère Coste', texte: "Entreprise sérieuse et à l'écoute.", sujets: [] },
];

export const NOTE_GOOGLE = { note: '5,0', nombre: AVIS.length };

/**
 * Les avis les plus parlants pour une page donnée : ceux qui parlent de son
 * sujet d'abord, complétés par les autres pour toujours en rendre trois.
 * Un visiteur qui hésite sur une extension veut lire un client dont le permis
 * a été obtenu, pas un client content de sa terrasse.
 */
export function avisPour(sujets: Avis['sujets']): Avis[] {
  /* Le rang d'un avis est celui du premier sujet demandé qu'il aborde :
     l'ordre de `sujets` est donc un ordre de priorité, du plus proche du
     sujet de la page au plus lointain. Sans ce classement, un avis parlant
     d'agrandissement pouvait être évincé d'une page d'extension par un avis
     sur une pergola, au seul motif qu'il figure plus bas dans le tableau. */
  const rang = (a: Avis) => {
    const rangs = a.sujets.map((s) => sujets.indexOf(s)).filter((i) => i >= 0);
    return rangs.length ? Math.min(...rangs) : Number.POSITIVE_INFINITY;
  };
  const pertinents = AVIS.filter((a) => rang(a) < Number.POSITIVE_INFINITY).sort(
    (a, b) => rang(a) - rang(b)
  );
  const reste = AVIS.filter((a) => !pertinents.includes(a) && a.texte.length > 60);
  return [...pertinents, ...reste].slice(0, 3);
}
