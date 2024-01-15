"use client";

import ContactAnimation from "@/components/ContactAnimation";
import "./style.scss";

import { IoMail, IoPerson } from "react-icons/io5";
import { useState } from "react";
import { sendEmail } from "@/app/api/sendEmail";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await sendEmail({
        name,
        email,
        message,
      });
    } catch (error) {
      console.error("Poruka nije poslana:", error);
    } finally {
      setLoading(false);
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
              <IoPerson />{" "}
              <input
                type="text"
                placeholder="Ime"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input">
              <IoMail />{" "}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input">
              <textarea
                rows={4}
                placeholder="Poruka"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" onClick={handleSubmit} disabled={loading}>
              Pošalji
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
