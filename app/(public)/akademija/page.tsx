import Image from "next/image";
import "./style.scss";
import StoryCarousel from "@/components/StoryCarousel";
import ArticleCard from "@/components/ArticleCard";
import AcademyCreators from "@/components/AcademyCreators";
import { Article } from "@/types";
import getArticlesByCategory from "@/sanity/actions/get-articles-by-category";
import banner from "../../../public/assets/GenZBanner.jpeg";

export const revalidate = 1;

const AcademyPage = async () => {
  const articles: Article[] = await getArticlesByCategory("akademija");

  if (!articles) {
    return <div>Trenutno nema članaka</div>;
  }

  return (
    <>
      <Image
        src={banner}
        alt="Gen Z Akademija"
        width={1200}
        height={400}
        className="academyBanner"
      />
      <div className="academyPage">
        <section>
          <div className="text">
            <p>
              U Mood Media, radimo na individualnom te se trudimo naglasiti tu
              jedinstvenost. Imamo mrežu kreatora s internacionalnom publikom,
              protežući se kroz različite niše - od ljepote i sporta do igara i
              gastronomije - uvijek ćemo vas u trenutku &quot;spojiti&quot; s
              video kreatorom koji savršeno odgovara baš vašem brendu,
              proizvodu, kampanji i publici kojoj se želite obratiti.
            </p>
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
          <h1>Moderatori Gen Z Akademije</h1>
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
            width={700}
            height={394}
          />
        </div>
      </div>
    </>
  );
};

export default AcademyPage;
