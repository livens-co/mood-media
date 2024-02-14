import * as React from 'react';

interface ContactTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const ContactTemplate: React.FC<Readonly<ContactTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <p>Zaprimili smo Vaš upit te ćemo na njega odgovoriti u što kraćem roku!</p>
    <br />
    <p>Ime: {name}</p>
    <p>Email: {email}</p>
    <p>Poruka: {message}</p>
  </div>
);
