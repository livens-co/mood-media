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
    <p>Welcome, {name}, {email}, {message}.</p>
  </div>
);
