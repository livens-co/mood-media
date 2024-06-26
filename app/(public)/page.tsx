import Link from "next/link";
import "./style.scss";
import Image from "next/image";
import Contact from "@/components/Contact";
import ArticleCard from "@/components/ArticleCard";
import getArticles from "@/sanity/actions/get-articles";
import { Article, Creator, Movie } from "@/types";
import getMovies from "@/sanity/actions/get-movies";
import ViewMore from "@/components/ViewMore";
import getCreators from "@/sanity/actions/get-creators";
import CreatorCarousel from "@/components/CreatorCarousel";
import MoviesCarousel from "@/components/MoviesCarousel";

export const revalidate = 1;

const moreKinoMood =
  "Jedna itekako uspješna sezona #KinoMood projekta već je iza nas. U suradnji s Kino Filmom pokrenuli smo projekt u kojem nam je cilj bio naše pratitelje odvesti u kino, ali ne kako bi samo pogledali najnovije naslove, već se usput i podružili s našim Kreatorima. Tako smo u protekloj sezoni bili na premijerama nekih od najvećih filmskih hitova, kao što su Oppenheimer, Renfield, Brzi i žestoki 10, Egzorcist... A u svim smo tim naslovima uživali s više od 1600 naših vjernih pratitelja. Godinu #KinoMooda završili smo, pak, na najljepši mogući način, posebnim odlaskom u kino koje nam je svima napunilo srca i pokazalo nam koliko je malo potrebno da nekome izmamimo osmijeh na lice. Na premijeru posljednjeg ovogodišnjeg filmskog hita 'Patke selice', pozvali smo najposebnije goste. U kinu smo se tada družili s više od 200 klinaca i klinceza iz domova za nezbrinutu djecu, udruga koje brinu o djeci iz obitelji slabijeg imovinskog stanja i sigurnih kuća. S istim žarom ovaj projekt nastavljamo i u ovoj godini i veselimo se sa svima vama pogledati još mnogo nezaboravnih filmskih naslova te vas što više upoznati, razvedriti i dopustiti da vi razvedrite i razveselite nas!";

const genZAcademy =
  "Što uopće znači riječ 'influencer', kako prepoznati i prijaviti neprimjeren sadržaj online, na koji način influenceri promoviraju razne brendove te kako pomažu stvoriti mišljenje o određenom brendu, ali i koliko pažljivo svojim primjerom utječu na svoje pratitelje? Na sva ova i mnoga druga važna pitanja odgovarat će ne samo video Kreatori, već i stručnjaci iz svijeta digitalnih medija. Cilj nam je ovim projektom 'dotaknuti' se, osim navedenih, i raznih drugih tema iz svijeta digitalnih medija, marketinga, promocije te još mnogo toga, a o svim ćemo vas temama kojim ćemo se baviti u sklopu ovog projekta redovito izvještavati na našem Mood Media webu!";

const HomePage = async () => {
  const articles: Article[] = await getArticles();
  const movies: Movie[] = await getMovies();
  const creators: Creator[] = await getCreators();

  return (
    <div className="homePage">
      {/* HERO SECTION */}
      <div className="heroSection">
        <video
          controls={false}
          preload="auto"
          autoPlay
          loop={true}
          muted
          playsInline
        >
          <source
            src="/assets/moodMediaVideoMobile.mp4"
            type="video/mp4"
            media="(max-width: 499px)"
          />
          <source
            src="/assets/moodMediaVideo.mp4"
            type="video/mp4"
            media="(min-width: 500px)"
          />
          <Image
            src="/assets/moodMediaFallback.jpeg"
            alt="MoodMedia Fallback"
            fill
          />
          Your browser does not support the video tag.
        </video>
      </div>

      

      {/* POVEZUJEMO */}
      <section>
        <div className="text">
          <h1>
            <div className="dot" />
            Povezujemo
          </h1>
          <div className="title">
            <h2>Kreator koji najbolje</h2>
            <h2>odgovara vašim potrebama</h2>
          </div>
          <p>
            Stručnim pristupom i modelom poslovanja nastojimo vezu između
            klijenta i Kreatora pretvoriti u vezu klijenta i ambasadora te je
            time činimo osobnijom, prirodnijom i iskrenijom!
          </p>
          <Link href="/usluge">Saznaj više</Link>
        </div>
        <div className="image">
          <Image
            src="/assets/povezujemoImg.jpeg"
            width={600}
            height={600}
            alt="Kreatori"
          />
        </div>
      </section>

      {/* GEN Z AKADEMIJA */}
      <section>
        <div className="image">
          <Image
            src="/assets/academy/academyBanner.jpeg"
            width={600}
            height={600}
            alt="Gen Z Akademija"
            className="academyImage"
          />
        </div>
        <div className="text">
          <div className="title">
            <h2>Gen Z Akademija</h2>

            <h2>Be smart. Be safe. Be cool.</h2>
          </div>

          <p>
            Uvijek se trudimo pratiti, ali i stvarati trendove, pa smo tako
            pokrenuli prvu Gen Z Akademiju na ovim prostorima u suradnji s
            partnerima projekta, A1 Hrvatska te Centrom za sigurniji internet.
            Mood Media Kreatori u sklopu ovog on-going projekta posjećivat će
            nekolicinu škola u Hrvatskoj te na zabavan, ali i edukativan način
            educirati generaciju Z na koji način odgovorni influenceri
            &apos;influensaju&apos;. Cilj nam je ovim projektom djeci i mladima
            približiti posao video Kreatora, ali i odgovoriti na neka važna
            pitanja iz online svijeta.
          </p>
          <ViewMore content={genZAcademy} modalType="default" />
          <Link href="/akademija">Saznaj više</Link>
        </div>
      </section>

      {/* KINO FILM */}
      <section className="movieSection">
        <div className="movieBanners">
            <MoviesCarousel data={movies} />
        </div>
        <div className="text">
          <h1>#KinoMood</h1>
          <div className="title">
            <h2>Svi najbolji naslovi na jednom</h2>
            <h2>mjestu uz druženje s Kreatorima</h2>
          </div>
          <p>
            Jedna itekako uspješna sezona #KinoMood projekta već je iza nas. U
            suradnji s Kino Filmom pokrenuli smo projekt u kojem nam je cilj bio
            naše pratitelje odvesti u kino, ali ne kako bi samo pogledali
            najnovije naslove, već se usput i podružili s našim Kreatorima.
          </p>
          <ViewMore content={moreKinoMood} modalType="default" />
          <Link href="https://www.kinofilm.hr/" target="_blank">
            SVE VIJESTI IZ SVIJETA FILMA
          </Link>
        </div>
      </section>

      {/* NOVOSTI */}
      <div className="newsSection">
        <div className="text">
          <h1>
            <div className="dot" />
            Blog
          </h1>
          <div className="title">
            <h2>Novosti iz </h2>
            <h2>svijeta Kreatora</h2>
          </div>
          <Link href="/blog">Blog</Link>
        </div>
        {articles
          .map((article) => <ArticleCard data={article} key={article.slug} />)
          .slice(0, 3)}
      </div>

      {/* KREATORI */}
      <section className="creatorsSection">
        <div className="text">
          <h1>
            <div className="dot" />
            Kreatori
          </h1>
          <div className="title">
            <h2>Kreator koji savršeno</h2>
            <h2>odgovara vašoj publici</h2>
          </div>
          <p>
            Uvijek vas povezujemo s video Kreatorom koji savršeno odgovara vašem
            brendu, proizvodu, kampanji i publici kojoj se želite obratiti.
          </p>
          <Link href="/kreatori">Pogledaj sve</Link>
        </div>
        <div className="creatorCarouselContainer">
          <CreatorCarousel creators={creators} />
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
