import { Resend } from 'resend';
import { CONTACT } from '@/lib/data/navigation';

/** Resend rejette l'envoi entier si l'en-tête Reply-To est malformé. On ne le
 *  pose donc qu'après ce contrôle : mieux vaut un lead sans adresse de réponse
 *  qu'un lead perdu. */
const EMAIL_PLAUSIBLE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Corps de requête JSON invalide.' }, { status: 400 });
  }

  const { nom, tel, email, commune, message, projet, budget, source } = body as Record<
    string,
    string | undefined
  >;

  if (!nom?.trim() || !tel?.trim() || !message?.trim()) {
    return Response.json(
      { error: 'Les champs nom, téléphone et message sont obligatoires.' },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json(
      { error: "Configuration serveur incomplète : RESEND_API_KEY n'est pas défini." },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const libelleProjet = projet ?? 'Projet non précisé';
  const objet = commune?.trim()
    ? `Nouvelle demande de devis : ${libelleProjet}, ${commune.trim()}`
    : `Nouvelle demande de devis : ${libelleProjet}`;
  const repondreA = email?.trim();

  try {
    const { error } = await resend.emails.send({
      // Domaine lesprit-bois.fr vérifié sur Resend (DKIM/SPF/DMARC) : envoi depuis
      // une adresse du domaine, ce qui autorise la livraison vers n'importe quel
      // destinataire (dont lespritbois33@gmail.com défini dans CONTACT.email).
      from: "L'Esprit Bois <contact@lesprit-bois.fr>",
      to: CONTACT.email,
      ...(repondreA && EMAIL_PLAUSIBLE.test(repondreA) ? { replyTo: repondreA } : {}),
      subject: objet,
      text: [
        `Projet : ${projet ?? 'Non précisé'}`,
        `Budget estimé : ${budget ?? 'Non précisé'}`,
        `Commune : ${commune?.trim() || 'Non précisée'}`,
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        `E-mail : ${repondreA || 'Non précisé'}`,
        '',
        'Message :',
        message,
        ...(source ? ['', `Origine : ${source}`] : []),
      ].join('\n'),
      html: [
        '',
        `        <p><strong>Projet :</strong> ${projet ?? 'Non précisé'}</p>`,
        `        <p><strong>Budget estimé :</strong> ${budget ?? 'Non précisé'}</p>`,
        `        <p><strong>Commune :</strong> ${commune?.trim() || 'Non précisée'}</p>`,
        `        <p><strong>Nom :</strong> ${nom}</p>`,
        `        <p><strong>Téléphone :</strong> ${tel}</p>`,
        `        <p><strong>E-mail :</strong> ${repondreA || 'Non précisé'}</p>`,
        `        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>`,
        ...(source ? [`        <p><strong>Origine :</strong> ${source}</p>`] : []),
        '      ',
      ].join('\n'),
    });

    if (error) {
      return Response.json({ error: error.message ?? "Échec de l'envoi de l'e-mail." }, { status: 500 });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return Response.json(
      { error: err instanceof Error ? err.message : "Échec de l'envoi de l'e-mail." },
      { status: 500 }
    );
  }
}
