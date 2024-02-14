import { SubmissionTemplate } from "@/components/EmailTemplates/SubmissionTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      date,
      email,
      phone,
      tikTok,
      instagram,
      campaign,
      ambassador,
      category,
      about,
    } = await req.json();

    let reactElement;

    reactElement = SubmissionTemplate({
      name,
      date,
      email,
      phone,
      tikTok,
      instagram,
      campaign,
      ambassador,
      category,
      about,
    }) as React.ReactElement;

    const data = await resend.emails.send({
      from: "Mood Media <noreply@moodmedia.hr>",
      to: email,
      bcc: "info@moodmedia.hr",
      subject: "Prijava zaprimljena",
      react: reactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
