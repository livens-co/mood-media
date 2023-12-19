import Link from "next/link";
import "./style.scss";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="homePage">
      {/* HERO SECTION */}
      <div className="heroSection">
        <div className="content">
          <h1>Inspiriramo, povezujemo, promoviramo</h1>
          <p>Vaše snove pretvaramo u stvarnost.</p>
          <Link href="/o-nama">Saznaj više</Link>
        </div>
        <div className="images">
          <Image
            src="/test/heroImg.png"
            width={600}
            height={600}
            alt="Kreatori"
          />
        </div>
      </div>
      {/* BRANDS INFINITE TAPE */}
      <div className="clients">
        <h3>Klijenti</h3>
        <div className="clientsTape">
          <div className="animatedTape">
            brand brand brand brand brand brand brand brand brand brand brand
            brand
          </div>
          <div aria-hidden="true" className="animatedTape">
            brand brand brand brand brand brand brand brand brand brand brand
            brand
          </div>
        </div>
      </div>

      {/* POVEZUJEMO */}
      <section>
        <div className="text">
          <h1>Povezujemo</h1>
          <h2>Kreator koji najbolje odgovara vašim potrebama</h2>
          <p>
            Stručnim pristupom i modelom poslovanja nastojimo vezu između
            klijenta i kreatora pretvoriti u vezu klijenta i ambasadora te je
            time činimo osobnijom, prirodnijom i iskrenijom!
          </p>
          <Link href="/usluge">Usluge</Link>
        </div>
        <div className="image">
          <Image
            src="/test/povezujemoImg.webp"
            width={600}
            height={600}
            alt="Kreatori"
          />
        </div>
      </section>

      {/* KINO FILM */}
      <section>
        <div className="image"></div>
        <div className="text">
          <h1>
            Mood Media <br />& Kino Film
          </h1>
          <h2>Gledanje premijere filma i druženju s influencerima!</h2>
          <Link href="/">Prijave</Link>
        </div>
      </section>

      {/* KAMPANJE */}
      <section>
        <div className="text">
          <h1>Kampanje</h1>
          <h2>Pogledajte neke od naših kampanja</h2>
          <p>
            Uvijek vas povezujemo s video kreatorom koji savršeno odgovara vašem
            brendu, proizvodu, kampanji i publici kojoj se želite obratiti.
          </p>
          <Link href="/kampanje">Kampanje</Link>
        </div>
        <div className="image"></div>
      </section>

      {/* NOVOSTI */}
      <div className="newsSection">
        <div className="article">
          <div className="border" />
          <div className="articleImage">
            <Image
              src="/test/article1.png"
              width={600}
              height={600}
              alt="Article image"
            />
          </div>
          <div className="articleTitle">
            Nova KinoMood avantura: &quot;Pušteni s lanca&quot; je jedna od
            najboljih komedija koju smo gledali!
          </div>
        </div>
        <div className="text">
          <h1>Novosti</h1>
          <h2>
            Novosti iz svijeta <br /> naših kreatora
          </h2>
          <Link href="/novosti">Novosti</Link>
        </div>
        <div className="article">
          <div className="border" />
          <div className="articleImage">
            <Image
              src="/test/article1.png"
              width={600}
              height={600}
              alt="Article image"
            />
          </div>
          <div className="articleTitle">
            Nova KinoMood avantura: &quot;Pušteni s lanca&quot; je jedna od
            najboljih komedija koju smo gledali!
          </div>
        </div>
        <div className="article">
          <div className="border" />
          
          <div className="articleImage">
            <Image
              src="/test/article1.png"
              width={600}
              height={600}
              alt="Article image"
            />
          </div>
          <div className="articleTitle">
            Nova KinoMood avantura: &quot;Pušteni s lanca&quot; je jedna od
            najboljih komedija koju smo gledali!
          </div>
        </div>
      </div>

      {/* KREATORI */}
      <section>
        <div className="text">
          <h1>Kreatori</h1>
          <h2>Kreator koji savršeno odgovara vašoj publici</h2>
          <p>
            Uvijek vas povezujemo s video kreatorom koji savršeno odgovara vašem
            brendu, proizvodu, kampanji i publici kojoj se želite obratiti.
          </p>
          <Link href="/kreatori">Pogledaj sve</Link>
        </div>
        <div className="creatorCarousel">
          <Image src='/assets/triangle.svg' width={500} height={500} alt="Frame" className="frame"/>
        </div>
      </section>

      {/* KONTAKT */}
      <div className="contact">
        <div className="contactContainer">
          <h1>Želite surađivati s nama?</h1>
          <Link href="/kontakt">Let&apos;s talk</Link>
          <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          />

          <Image
            priority
            src="/assets/contactLines.svg"
            width={300}
            height={300}
            alt="Lines"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
