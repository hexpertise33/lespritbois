import { Resend } from 'resend';
import { CONTACT } from '@/lib/data/navigation';

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Corps de requête JSON invalide.' }, { status: 400 });
  }

  const { nom, tel, message, projet, budget } = body as Record<string, string | undefined>;

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

  try {
    const { error } = await resend.emails.send({
      // Domaine lesprit-bois.fr vérifié sur Resend (DKIM/SPF/DMARC) : envoi depuis
      // une adresse du domaine, ce qui autorise la livraison vers n'importe quel
      // destinataire (dont lespritbois33@gmail.com défini dans CONTACT.email).
      from: "L'Esprit Bois <contact@lesprit-bois.fr>",
      to: CONTACT.email,
      subject: `Nouvelle demande de devis — ${projet ?? 'Projet non précisé'}`,
      text: [
        `Projet : ${projet ?? '—'}`,
        `Budget estimé : ${budget ?? '—'}`,
        `Nom : ${nom}`,
        `Téléphone : ${tel}`,
        '',
        'Message :',
        message,
      ].join('\n'),
      html: `
        <p><strong>Projet :</strong> ${projet ?? '—'}</p>
        <p><strong>Budget estimé :</strong> ${budget ?? '—'}</p>
        <p><strong>Nom :</strong> ${nom}</p>
        <p><strong>Téléphone :</strong> ${tel}</p>
        <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
      `,
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
