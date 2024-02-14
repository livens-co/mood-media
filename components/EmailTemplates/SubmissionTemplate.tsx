import * as React from "react";

interface SubmissionTemplateProps {
  name: string;
  date: string;
  email: string;
  phone: string;
  tikTok: string;
  instagram: string;
  campaign: string;
  ambassador: string;
  category: string;
  about: string;
}

export const SubmissionTemplate: React.FC<
  Readonly<SubmissionTemplateProps>
> = ({
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
}) => (
  <div>
    <p>
      Pozdrav, zaprimili smo tvoju prijavu te ćemo na nju odgovoriti u što
      kraćem roku!
    </p>
    <p>Ime:{name},</p>
    <p>Datum rođenja: {date},</p>
    <p>Email: {email},</p>
    <p>Mobitel: {phone},</p>
    <p>TikTok: {tikTok},</p>
    <p>Instagram: {instagram},</p>
    <p>Kampanje: {campaign},</p>
    <p>Ambasador: {ambassador},</p>
    <p>Kategorije: {category},</p>
    <p>O tebi: {about}</p>
  </div>
);
