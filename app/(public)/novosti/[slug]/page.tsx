import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";

const ArticlePage = () => {
  return (
    <div className="articlePage">
      <div className="header">
        <div className="title">
          Marco na spektakularnom lansiranju dm TikToka: &quot;Iz Praga smo
          dodali svijetu malo boje&quot;
        </div>
        <div className="category">Blog</div>
        <div className="details">
          <div className="avatar"></div>
          <div className="author">
            <h2>Mood Media</h2>
            <h3>13. studenog 2023.</h3>
          </div>
        </div>
        <div className="featuredImage">
          <Image
            priority
            src="/test/article.png"
            width={800}
            height={300}
            alt="Title"
          />
        </div>
      </div>
      <article>
        <p>
          U Pragu se upravo održao internacionalni TikTok event povodom
          lansiranja dm TikToka, a ondje je, s brojnim drugim influencerima iz
          regije i ostalih zemalja Europe, bio i naš Marco Cuccurin. Na ovom je
          posebnom eventu sudjelovalo ukupno 10 europskih država, među kojima
          su: Hrvatska, Srbija, Bosna i Hercegovina, Bugarska, Rumunjska,
          Slovačka, Češka, Slovenija, Mađarska, Austrija.
        </p>
        <p>
          Likovni umjetnici su se spojili s influencerima i stvarali zajedničku
          kreativnu priču. Marco je bio spojen s akademskom slikaricom Dorom
          Šitum, a ideja njihova rada bila je prikazati utjecaj društvenih mreža
          na cjelokupno društvo, ali i ljepotu TikTok platforme gdje se možeš
          kreativno izraziti baš onako kako ti želiš.
        </p>
        <p>
          Dora i Marco pokušali su spojiti art s društvenim mrežama te makeupom
          na licu, ali i slikom u Dorinoj izvedbi prikazati kako se obraniti od
          bullyinga, dodati svijetu malo boje i sa stavom se postaviti prema
          negativnim osobama i situacijama s kojima se mnogi svakodnevno
          susrećemo, a pogotovo oni koji su stalno prisutni i svoj život čine
          vidljivim online.
        </p>
        <p>
          Jako mi se svidjela ideja i tema samog eventa, koji je bio povezan s
          bojama. I mislim da bismo se, ne samo u makeupu ili umjetnosti,
          trebali držati one Dodaj svijetu malo boje... U svakodnevnom životu.
          I iskreno, ja baš uživam u tome da kroz život nosim ružičaste naočale,
          neću nikada dopustit da postanu crne, ispričao nam je Marco te dodao
          još pokoji dojam s putovanja u Prag.
        </p>
      </article>
      <div className="articleFooter">
        <Link href='/novosti' className="articlesBtn">Više članaka</Link>
        <div className="featuredArticles">
          <h1>Možda će vas zanimati</h1>
          <div className="articles">
            <ArticleCard/>
            <ArticleCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
