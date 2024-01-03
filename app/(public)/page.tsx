import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import Contact from "@/components/Contact";
import ArticleCard from "@/components/ArticleCard";
import getArticles from "@/sanity/actions/get-articles";
import { Article } from "@/types";

const HomePage = async() => {
  const articles: Article[] = await getArticles();

  return (
    <div className="homePage">
      {/* HERO SECTION */}
      <div className="heroSection">
        {/* <div className="content">
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
        </div> */}
      </div>
      {/* ABOUT SECTION */}
      {/* BRANDS INFINITE TAPE */}
      {/* <div className="clients">
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
      </div> */}

      {/* GEN Z AKADEMIJA */}
      <section>
        <div className="image">
          <Image
            src="/test/akademija.jpeg"
            width={600}
            height={600}
            alt="Gen Z Akademija"
            className="academyImage"
          />
        </div>
        <div className="text">
          <h1>Gen Z Akademija</h1>
          <h2 className="academy">Be smart. Be safe. Be cool.</h2>
          <p>
            Prijavi svoju školu za sudjelovanje na akademiji i saznaj kroz
            druženje s Influencerima kako sigurno surfati Internetom i gledati
            sadržaj na svojoj omiljenoj društvenoj mreži.
          </p>
          {/* <h3>Klikni na link i saznaj više.</h3> */}
          <Link href="/akademija">Saznaj više</Link>
        </div>
      </section>

      {/* POVEZUJEMO */}
      <section>
        <div className="text">
          <h1>Povezujemo</h1>
          <h2>Kreator koji najbolje odgovara vašim potrebama</h2>
          <p>
            Stručnim pristupom i modelom poslovanja nastojimo vezu između
            klijenta i Kreatora pretvoriti u vezu klijenta i ambasadora te je
            time činimo osobnijom, prirodnijom i iskrenijom!
          </p>
          <Link href="/usluge">Saznaj više</Link>
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
            #KinoMood
          </h1>
          <h2>Gledanje premijere filma i druženju s influencerima!</h2>
          <Link href="/">SVE VIJESTI IZ SVIJETA FILMA</Link>
        </div>
      </section>

      {/* NOVOSTI */}
      <div className="newsSection">
        <div className="text">
          <h1>Novosti</h1>
          <h2>
            Novosti iz svijeta <br /> naših Kreatora
          </h2>
          <Link href="/novosti">Novosti</Link>
        </div>
        {articles.map(article=>(
          <ArticleCard data={article} key={article.slug} />
        )).slice(0, 3)}
        
      </div>

      {/* KREATORI */}
      <section>
        <div className="text">
          <h1>Kreatori</h1>
          <h2>Kreator koji savršeno odgovara vašoj publici</h2>
          <p>
            Uvijek vas povezujemo s video Kreatorom koji savršeno odgovara vašem
            brendu, proizvodu, kampanji i publici kojoj se želite obratiti.
          </p>
          <Link href="/kreatori">Pogledaj sve</Link>
        </div>
        <div className="creatorCarousel">
          <Image
            src="https://cdn.sanity.io/images/qn8g0u6e/production/7f021c5ae4887467e7f280a65340346d7cbac3a8-1026x1026.png"
            width={500}
            height={500}
            alt="Frame"
            className="frame"
          />
        </div>
      </section>

      {/* KONTAKT */}
      <Contact />
    </div>
  );
};

export default HomePage;
