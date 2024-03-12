import Image from "next/image";
import "./style.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer">
      <footer>
        <div className="logos">
          <Link href="/" className="image">
            <Image
              src="/assets/mmedia.png"
              alt="Mood Media"
              width={250}
              height={150}
            />
          </Link>
          <Link href="/akademija" className="image">
            <Image
              src="/assets/GenZLogo.png"
              alt="Gen Z Akademija"
              width={350}
              height={250}
            />
          </Link>
        </div>
        <div className="links">
          <div className="column">
            <h3>Mood Media</h3>
            <Link href="/">Početna</Link>
            <Link href="/o-nama">O nama</Link>
            <Link href="/usluge">Usluge</Link>
            <Link href="/kreatori">Kreatori</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
          <div className="column">
            <h3>Društvene mreže</h3>
            <Link
              href="https://www.instagram.com/moodmedia.hr/"
              target="_blank"
            >
              Instagram
            </Link>
          </div>
          <div className="column">
            <h3>Pravne stranice</h3>
            <Link href="/uvjeti-koristenja">Uvjeti korištenja</Link>
            <Link href="/kolacici">Kolačići</Link>
          </div>
        </div>
      </footer>
      <div className="copy">
        <p>&copy;2024 Mood Media • Sva prava pridržana</p>
      </div>
    </div>
  );
};

export default Footer;
