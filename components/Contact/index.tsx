import Link from "next/link";
import "./style.scss";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="title">
          <h1>Želite surađivati</h1>
          <h1>s nama?</h1>
        </div>
        <Link href="/kontakt">Let&apos;s talk</Link>
        {/* <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          /> */}

        {/* <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          /> */}
      </div>
    </div>
  );
};

export default Contact;
