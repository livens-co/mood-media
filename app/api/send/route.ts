import { ContactTemplate } from '@/components/EmailTemplates/ContactTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      message
    } = await req.json()

    let reactElement;

    reactElement = ContactTemplate({
      name,
      email,
      message
    }) as React.ReactElement

    const data = await resend.emails.send({
      from: 'Mood Media <noreply@moodmedia.hr>',
      to: email,
      bcc: 'dario@moodmedia.hr',
      subject: 'Upit zaprimljen',
      react: reactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
