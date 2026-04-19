import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const CONTACT_TO = process.env.CONTACT_TO || 'info@hydoor.jp';
const CONTACT_FROM = process.env.CONTACT_FROM || 'noreply@hydoor.jp';

interface ContactBody {
  name: string;
  company: string;
  email: string;
  message: string;
}

function validate(body: unknown): body is ContactBody {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === 'string' && b.name.trim().length > 0 &&
    typeof b.email === 'string' && b.email.includes('@') &&
    typeof b.message === 'string' && b.message.trim().length > 0 &&
    (typeof b.company === 'string' || b.company === undefined)
  );
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body;

  if (!validate(body)) {
    return res.status(400).json({ error: 'お名前・メールアドレス・お問い合わせ内容は必須です' });
  }

  const { name, company, email, message } = body;

  try {
    await resend.emails.send({
      from: `HYDOOR Contact <${CONTACT_FROM}>`,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `[HYDOOR お問い合わせ] ${name}`,
      html: `
        <h2>お問い合わせがありました</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">お名前</td><td style="padding:8px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">会社名</td><td style="padding:8px;border-bottom:1px solid #eee;">${company || '(未入力)'}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">メールアドレス</td><td style="padding:8px;border-bottom:1px solid #eee;">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">お問い合わせ内容</td><td style="padding:8px;white-space:pre-wrap;">${message}</td></tr>
        </table>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: '送信に失敗しました。しばらく経ってからお試しください。' });
  }
}
