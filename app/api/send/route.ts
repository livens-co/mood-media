import { ContactTemplate } from "@/components/EmailTemplates/ContactTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'Mood Media <noreply@moodmedia.hr>',
      to: 'dominik@mintandlime.eu',
      bcc: 'dominik@mintandlime.eu',
      subject: 'Upit zaprimljen',
      react: ContactTemplate({ firstName: 'John' }),
      text: ''
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

