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
      Welcome.
      {name}, {date}, {email}, {phone}, {tikTok}, {instagram}, {campaign},{" "}
      {ambassador}, {category}, {about}.
    </p>
  </div>
);
