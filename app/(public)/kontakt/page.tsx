'use client'

import ContactAnimation from "@/components/ContactAnimation";
import "./style.scss";

import { IoMail, IoPerson } from "react-icons/io5";
import { Resend } from "resend";
import { ContactTemplate } from "@/components/EmailTemplates/ContactTemplate";
import { useState } from "react";


// const resend = new Resend(process.env.RESEND_API_KEY);
const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


const ContactPage =  () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform any form validation here if needed

    try {
      // Send the email using your existing logic
      const data = await resend.emails.send({
        from: 'Mood Media <noreply@moodmedia.hr>',
        to: 'dominik@mintandlime.eu',
        bcc: 'dominik@mintandlime.eu',
        subject: 'Upit zaprimljen',
        react: ContactTemplate({ firstName: name }),
        text: '', // Add an empty string for the 'text' property
      });

      console.log('Email sent successfully:', data);

      // Optionally, you can reset the form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };



  return (
    <div className="contactPage">
      <div className="contactPageContainer">
        <div className="animation">
          <ContactAnimation />
        </div>
        <div className="form">
          <h2>Kontaktirajte nas</h2>
          <form>
            <div className="input">
              <IoPerson /> <input type="text" placeholder="Ime" value={name} onChange={e=> setName(e.target.value)}/>
            </div>
            <div className="input">
              <IoMail /> <input type="email" placeholder="Email" />
            </div>
            <div className="input">
              <textarea rows={4} placeholder="Poruka" />
            </div>
            <button type="submit" onClick={handleFormSubmit}>Pošalji</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;



