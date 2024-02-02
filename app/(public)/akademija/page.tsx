import Image from "next/image";
import "./style.scss";
import StoryCarousel from "@/components/StoryCarousel";
import ArticleCard from "@/components/ArticleCard";
import AcademyCreators from "@/components/AcademyCreators";
import { Article } from "@/types";
import getArticlesByCategory from "@/sanity/actions/get-articles-by-category";
import banner from "../../../public/assets/GenZBanner.jpeg";
import ViewMore from "@/components/ViewMore";

export const revalidate = 1;

const genZAcademy =
  "Što uopće znači riječ 'influencer', kako prepoznati i prijaviti neprimjeren sadržaj online, na koji način influenceri promoviraju razne brendove te kako pomažu stvoriti mišljenje o određenom brendu, ali i koliko pažljivo svojim primjerom utječu na svoje pratitelje? Na sva ova i mnoga druga važna pitanja odgovarat će ne samo video kreatori, već i stručnjaci iz svijeta digitalnih medija. Cilj nam je ovim projektom 'dotaknuti' se, osim navedenih, i raznih drugih tema iz svijeta digitalnih medija, marketinga, promocije te još mnogo toga, a o svim ćemo vas temama kojim ćemo se baviti u sklopu ovog projekta redovito izvještavati na našem Mood Media webu!";

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
              Mood Media kreatori u sklopu ovog on-going projekta posjećivat će
              nekolicinu škola u Hrvatskoj te na zabavan, ali i edukativan način
              educirati generaciju Z na koji način odgovorni influenceri
              &apos;influensaju&apos;. Cilj nam je ovim projektom djeci i
              mladima približiti posao video kreatora, ali i odgovoriti na neka
              važna pitanja iz online svijeta.
            </p>
            <br />
            <ViewMore content={genZAcademy} />
          </div>
          <div className="carousel">
            <StoryCarousel />
          </div>
        </section>

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
          <AcademyCreators />
        </div>

        {/* SPONZORI */}
        <div className="sponsors">
          <div className="sponsorRow">
            <h3>Powered by</h3>
            <a href="https://www.a1.hr/" className="logo">
              <Image
                src="/assets/academy/a1Logo.png"
                alt="A1"
                width={200}
                height={200}
                className="powered"
              />
            </a>
          </div>
          <div className="sponsorRow">
            <h3>Supported by</h3>
            <a href="https://csi.hr/" className="logo">
              <Image
                src="/assets/academy/csiLogo.png"
                alt="Centar za sigurniji internet"
                width={150}
                height={150}
                className="supported"
              />
            </a>
          </div>
        </div>

        {/* END */}

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
