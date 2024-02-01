import Link from "next/link";
import "./style.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="title">
          <h1>Želite surađivati</h1>
          <h1>s nama?</h1>
        </div>
        <Link href="/kontakt">Let&apos;s talk</Link>
        <div className="borderLeft" />
        <div className="borderTop" />
        <div className="borderRight" />
        <div className="borderBottom" />
      </div>
    </div>
  );
};

export default Contact;
