/**
 * Filtre anti-spam des formulaires de demande (ajouté le 11/11/2026).
 *
 * Le 11/11/2026, un robot a rempli le formulaire du site jumeau home-expertise.fr
 * avec une fausse adresse (@probox.my.id) pour y placer un lien publicitaire.
 * Le formulaire de lesprit-bois.fr n'avait aucune protection. Bloquer un domaine
 * ne servirait à rien : ces robots en changent à chaque envoi. Deux filtres
 * suffisent pour l'essentiel :
 *
 *  1. un champ piège, invisible pour un humain, que les robots remplissent ;
 *  2. le refus des messages contenant un lien : un vrai client n'en met
 *     pratiquement jamais dans une demande de devis.
 *
 * ⚠️ Un envoi piégé ne doit JAMAIS déclencher la conversion Google Ads : il
 * fausserait les enchères et le coût par lead. D'où la réponse `ignore: true`,
 * que les formulaires lisent avant d'appeler reportFormConversion().
 */

/** Nom du champ piège. Volontairement sans signification pour l'auto-remplissage
 *  des navigateurs (ni « url », ni « website », ni « company »), pour qu'un vrai
 *  visiteur ne le remplisse jamais sans le savoir. */
export const CHAMP_PIEGE = 'champ_controle';

/** Adresse web dans un texte : http(s)://… ou www.… Les adresses e-mail ne sont
 *  pas visées, un client peut légitimement en recopier une. */
const LIEN = /(https?:\/\/|www\.)\S+/i;

export function contientLien(texte: unknown): boolean {
  return typeof texte === 'string' && LIEN.test(texte);
}

export function piegeRempli(valeur: unknown): boolean {
  return typeof valeur === 'string' && valeur.trim() !== '';
}

export const MESSAGE_LIEN_REFUSE =
  'Merci de retirer les liens (adresses web) de votre message : notre filtre anti-spam les refuse. ' +
  'Vous pouvez aussi nous appeler au 05 57 40 65 80.';
