import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import Contact from "@/components/Contact";
import ArticleCard from "@/components/ArticleCard";
import getArticles from "@/sanity/actions/get-articles";
import { Article } from "@/types";
import MoreButton from "@/components/MoreButton";

const HomePage = async () => {
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
            Uvijek se trudimo pratiti, ali i stvarati trendove, pa smo tako
            pokrenuli prvu Gen Z Akademiju na ovim prostorima u suradnji s
            partnerima projekta, A1 Hrvatska te Centrom za sigurniji internet.
            Mood Media kreatori u sklopu ovog on-going projekta posjećivat će
            nekolicinu škola u Hrvatskoj te na zabavan, ali i edukativan način
            educirati generaciju Z na koji način odgovorni influenceri
            &quot;influensaju&quot;. Cilj nam je ovim projektom djeci i mladima
            približiti posao video kreatora, ali i odgovoriti na neka važna
            pitanja iz online svijeta. Što uopće znači riječ
            &quot;influencer&quot;, kako prepoznati i prijaviti neprimjeren
            sadržaj online, na koji način influenceri promoviraju razne brendove
            te kako pomažu stvoriti mišljenje o određenom brendu, ali i koliko
            pažljivo svojim primjerom utječu na svoje pratitelje? Na sva ova i
            mnoga druga važna pitanja odgovarat će ne samo video kreatori, već i
            stručnjaci iz svijeta digitalnih medija. Cilj nam je ovim projektom
            &quot;dotaknuti&quot; se, osim navedenih, i raznih drugih tema iz
            svijeta digitalnih medija, marketinga, promocije te još mnogo toga,
            a o svim ćemo vas temama kojim ćemo se baviti u sklopu ovog projekta
            redovito izvještavati na našem Mood Media webu!
          </p>

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
            src="/assets/povezujemoImg.png"
            width={600}
            height={600}
            alt="Kreatori"
          />
        </div>
      </section>

      {/* KINO FILM */}
      <section className="movieSection">
        <div className="movieBanners">
          <Image
            src="/assets/migration.jpg"
            alt="Migration"
            height={400}
            width={600}
          />
        </div>
        <div className="text">
          <h1>#KinoMood</h1>
          <h2>Gledanje premijere filma i druženju s influencerima!</h2>
          <p>
            Jedna itekako uspješna sezona #KinoMood projekta već je iza nas. U
            suradnji s Kino Filmom pokrenuli smo projekt u kojem nam je cilj bio
            naše pratitelje odvesti u kino, ali ne kako bi samo pogledali
            najnovije naslove, već se usput i podružili s našim kreatorima.
          </p>
          {/* <p>Tako
            smo u protekloj sezoni bili na premijerama nekih od najvećih
            filmskih hitova, kao što su Oppenheimer, Renfield, Brzi i žestoki
            10, Egzorcist... A u svim smo tim naslovima uživali s više od 1600
            naših vjernih pratitelja. Godinu #KinoMooda završili smo, pak, na
            najljepši mogući način, posebnim odlaskom u kino koje nam je svima
            napunilo srca i pokazalo nam koliko je malo potrebno da nekome
            izmamimo osmijeh na lice. Na premijeru posljednjeg ovogodišnjeg
            filmskog hita &quot;Patke selice&quot;, pozvali smo najposebnije
            goste. U kinu smo se tada družili s više od 200 klinaca i klinceza
            iz domova za nezbrinutu djecu, udruga koje brinu o djeci iz obitelji
            slabijeg imovinskog stanja i sigurnih kuća. S istim žarom ovaj
            projekt nastavljamo i u ovoj godini i veselimo se sa svima vama
            pogledati još mnogo nezaboravnih filmskih naslova te vas što više
            upoznati, razvedriti i dopustiti da vi razvedrite i razveselite nas!</p> */}
          <MoreButton />
          <Link href="//https://www.kinofilm.hr/">
            SVE VIJESTI IZ SVIJETA FILMA
          </Link>
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
        {articles
          .map((article) => <ArticleCard data={article} key={article.slug} />)
          .slice(0, 3)}
      </div>

      {/* KREATORI */}
      <section className="creatorsSection">
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
            src="https://cdn.sanity.io/images/qn8g0u6e/production/c618956b8a91131f23af6659a601d97ddb45a016-1200x1200.png"
            width={500}
            height={500}
            alt="Kreatori"
            className="frame"
          />
        </div>
      </section>

      {/* KONTAKT */}
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default HomePage;
