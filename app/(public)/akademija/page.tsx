import Image from "next/image";
import "./style.scss";
import StoryCarousel from "@/components/StoryCarousel";
import ArticleCard from "@/components/ArticleCard";

const AcademyPage = () => {
  return (
    <>
      <Image
        src="/assets/akademijaBanner.png"
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
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </div>

        {/* KREATORI */}

        {/* SPONZORI */}

        {/* END */}
      </div>
    </>
  );
};

export default AcademyPage;
