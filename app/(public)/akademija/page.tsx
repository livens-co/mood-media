import Image from "next/image";
import "./style.scss";
import StoryCarousel from "@/components/StoryCarousel";
import ArticleCard from "@/components/ArticleCard";
import { Article } from "@/types";
import getArticlesByCategory from "@/sanity/actions/get-articles-by-category";
import banner from "../../../public/assets/GenZBanner.jpeg";
import ViewMore from "@/components/ViewMore";

export const revalidate = 1;

const genZAcademy =
  "Što uopće znači riječ 'influencer', kako prepoznati i prijaviti neprimjeren sadržaj online, na koji način influenceri promoviraju razne brendove te kako pomažu stvoriti mišljenje o određenom brendu, ali i koliko pažljivo svojim primjerom utječu na svoje pratitelje? Na sva ova i mnoga druga važna pitanja odgovarat će ne samo video Kreatori, već i stručnjaci iz svijeta digitalnih medija. Cilj nam je ovim projektom 'dotaknuti' se, osim navedenih, i raznih drugih tema iz svijeta digitalnih medija, marketinga, promocije te još mnogo toga, a o svim ćemo vas temama kojim ćemo se baviti u sklopu ovog projekta redovito izvještavati na našem Mood Media webu!";

const a1 =
  "Zajedno s Centrom za sigurniji Internet već duže vrijeme radimo na edukaciji mladih o online sigurnosti. Rezultat naše suradnje je platforma <strong> #BoljiOnline</strong>, koja promovira pametnu upotrebu interneta i mobitela među djecom i mladima. Do sada smo pokrenuli mnoštvo projekata, kao što su <strong>netHELP aplikacija</strong> za prijavu online zlostavljanja, <strong>Abeceda interneta</strong> edukativni materijali, <strong>#GejmajOdgovorno</strong> kampanja o odgovornom igranju videoigara, <strong>Playscape svijet</strong> izgrađen u Minecraftu za učenje o digitalnim vještinama, te mnoge radionice za djecu i roditelje. <br /> <strong>Priključite nam se i vi u stvaranju boljeg online svijeta!</strong>";

const csi = `Možda se pitate što točno Centar za sigurniji internet - <a href="https://csi.hr/" target='_blank'>csi.hr</a> nudi vama, digitalno osviještenoj generaciji? Pa, evo nekoliko stvari koje bi vas mogle zanimati: <br/> <ul>
<li>
  <strong>
    Besplatna i anonimna telefonska linija (0800 606 606): 
  </strong>
  Da, dobro ste pročitali! Imate pristup telefonskoj liniji koja
  je dostupna svakog radnog dana od 08:00 do 16:00 sati. Bez
  obzira na to kakva pitanja ili probleme imate vezane uz
  internet, možete nazvati i dobiti podršku stručnjaka koji su
  tu samo za vas.
</li>
<li>
  <strong>Hotline obrazac: </strong>Ako naiđete na neprimjerene
  ili problematične sadržaje na internetu, imate mogućnost
  anonimne prijave putem Hotline obrasca. Vaša prijava pomaže u
  uklanjanju neprimjerenih sadržaja i očuvanju sigurnog online
  okruženja za sve.
</li>
<li>
  <strong>Centar za podršku i informiranje: </strong>Ovdje je
  ekipa koja se brine o vašoj sigurnosti na internetu. Njihova
  je uloga senzibilizirati i informirati javnost o potencijalnim
  opasnostima koje vrebaju online, ali i pružiti vam alate i
  savjete kako se zaštititi i sigurno surfati virtualnim
  svijetom.
</li>
<li>
  Dakle, dragi naši Z-ovci, imate sve potrebne resurse i podršku
  u Centru za sigurniji internet. Ne oklijevajte iskoristiti ih
  kad god osjetite da vam trebaju. Jer vaša sigurnost na
  internetu je naša zajednička briga, a mi smo ovdje da vam
  pomognemo da ostanete zaštićeni i sigurni dok istražujete
  online svijet.
</li>
</ul>`;

const AcademyPage = async () => {
  const articles: Article[] = await getArticlesByCategory("akademija");

  if (!articles) {
    return <div>Trenutno nema članaka</div>;
  }

  return (
    <>
      <div className="academyBanner">
        <div className="overlay" />
        <Image
          src={banner}
          alt="Gen Z Akademija"
          width={1200}
          height={400}
          // className="academyBanner"
        />
      </div>
      <div className="academyPage">
        <section>
          <div className="text">
            <div className="title">
              <h1>O Projektu</h1>
            </div>
            <p>
              Uvijek se trudimo pratiti, ali i stvarati trendove, pa smo tako
              pokrenuli prvu Gen Z Akademiju na ovim prostorima u suradnji s
              partnerima projekta, A1 Hrvatska te Centrom za sigurniji internet.
              Mood Media Kreatori u sklopu ovog on-going projekta posjećivat će
              nekolicinu škola u Hrvatskoj te na zabavan, ali i edukativan način
              educirati generaciju Z na koji način odgovorni influenceri
              &apos;influensaju&apos;. Cilj nam je ovim projektom djeci i
              mladima približiti posao video Kreatora, ali i odgovoriti na neka
              važna pitanja iz online svijeta.
              <div className="borderLeft" />
              <div className="borderTop" />
              <div className="borderRight" />
              <div className="borderBottom" />
              <br />
              <br />
              <ViewMore content={genZAcademy} modalType="white" />
            </p>
          </div>
          <div className="carousel">
            <StoryCarousel />
          </div>
        </section>

        {/* SPONZORI */}
        <div className="sponsors">
          <div className="sponsorColumn">
            <h3>Powered by</h3>
            <a
              href="https://www.a1.hr/boljionline"
              className="logo"
              target="_blank"
            >
              <Image
                src="/assets/academy/a1Logo.png"
                alt="A1"
                width={200}
                height={200}
                className="powered"
              />
            </a>
            <div className="text">
              <p>
                Kao jedna od vodećih tehnoloških kompanija u Hrvatskoj,
                edukacija o online svijetu je naša misija. Želimo da djeca i
                odrasli uživaju u internetu na siguran i odgovoran način, te da
                pritom steknu sve potrebne digitalne vještine.
              </p>
              <br />
              <ViewMore content={a1} modalType="white" />
              <div className="borderLeft" />
              <div className="borderTop" />
              <div className="borderRight" />
              <div className="borderBottom" />
            </div>
          </div>
          <div className="sponsorColumn">
            <h3>Supported by</h3>
            <a href="https://csi.hr/" className="logo" target="_blank">
              <Image
                src="/assets/academy/csiLogo.png"
                alt="Centar za sigurniji internet"
                width={150}
                height={150}
                className="supported"
              />
            </a>
            <div className="text">
              <p>
                Znate li da imate svoj kutak na internetu gdje se možete
                osjećati sigurno i zaštićeno? To je Centar za sigurniji
                internet, osnovan 2015. godine od strane Centra za nestalu i
                zlostavljanu djecu. Danas djeluje uz podršku dugogodišnjeg
                partnera A1 Hrvatska.
              </p>
              <br />
              <ViewMore content={csi} modalType="white" />
              <div className="borderLeft" />
              <div className="borderTop" />
              <div className="borderRight" />
              <div className="borderBottom" />
            </div>
          </div>
        </div>

        {/* NOVOSTI */}
        <div className="news">
          <h1>Novosti</h1>
          <div className="articles">
            {articles
              .map((article) => (
                <ArticleCard data={article} key={article.slug} />
              ))
              .slice(0, 3)}
          </div>
        </div>

        {/* KREATORI */}
        <div className="creatorTestemonials">
          <div className="title">
            <h1>Moderatori</h1>
            <h1>Gen Z Akademije</h1>
          </div>
          <div className="academyCreators">
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/marco-mod.jpeg"
                  alt="Marko Cuccurin"
                  width={240}
                  height={360}
                />
              </div>
              <h2>Marko Cuccurin</h2>
            </div>
            <div className="creatorCard">
              <div className="image">
                <Image
                  src="/assets/academy/nika-mod.jpeg"
                  alt="Nika Pavičić"
                  width={240}
                  height={360}
                />
              </div>
              <h2>Nika Pavičić</h2>
            </div>
          </div>
        </div>

        <div className="banner">
          <Image
            src="/assets/academy/academyBanner.jpeg"
            alt="Gen Z Akademija"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default AcademyPage;
