import "./style.scss";

import { FaTiktok, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import Contact from "@/components/Contact";
import ArticleCard from "@/components/ArticleCard";
import FeaturedCarousel from "@/components/FeaturedCarousel";

const CreatorPage = () => {
  return (
    <div className="creatorPage">
      <div className="header">
        <div className="text">
          <h1>Sead Hrustanović</h1>
          <ul className="socials">
            <li>
              <FaTiktok />
              <a href="https://www.tiktok.com/@seadhr" target="_blank">
                +993K followers
              </a>
            </li>
            <li>
              <FaInstagram />
              <a href="https://www.instagram.com/seadhr" target="_blank">
                +240K followers
              </a>
            </li>
            <li>
              <FaYoutube />
              <a
                href="https://www.youtube.com/c/SeadHrustanovic"
                target="_blank"
              >
                +223K subscribers
              </a>
            </li>
            <li>
              <FaFacebookF />
              <a href="https://www.facebook.com/seadhrstnvc" target="_blank">
                +216K followers
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="biographyContainer">
        <div className="biography">
          <h1>Biografija</h1>
          <p>
            Sead, Senada, Mulekelefeleketa... Ma kako god da ga prepoznajete,
            sigurni smo da ste za njega već odavno čuli! Sead Hrustanović jedan
            je od najurnebesnijih tiktokera na Balkanu trenutno, a sa svojih je
            26 godina uspio ono što ne uspijeva baš bilo kome - na društvenim je
            mrežama okupio gotovo 1,5 milijuna obožavatelja, a njegovi skečevi u
            kojima glumi balkansku mamu, mahaluše, komšije i ostalo veselo
            društvance sada su već toliko iconic da malo tko s prostora
            Hrvatske, BiH, Slovenije, Srbije, Makedonije i Crne Gore nije čuo za
            njih! Sead profesionalno i redovito snima tek od 2021. godine, a u
            tako kratkom roku već je i nagrađen za svoj video content. Ove je
            godine osvojio Balkan TopStar nagradu za najbolju imitaciju na
            TikToku. Sead je inače magistar podatkovnih znanosti, a trenutno se
            školuje i na doktorskom studiju računalnih znanosti.
          </p>
          <p>
            Njegova je priča na mrežama, kaže, krenula stvarno kao najobičniji
            hobi. Nekako je oduvijek maštao o tome da se bavi produkcijom video
            sadržaja, a odlično je sada spojio ljubav prema tom poslu i još
            usput nasmijava ljude na internetu. Iako je sve krenulo iz dosade,
            nakon što je objavio par videa samo za sebe i bez prevelikih
            očekivanja, ljudima se njegov smisao za humor jako svidio pa sada
            nasmijava milijune - svaki dan. Također, ljudi ga online posebno
            cijene zato što u svaki svoj video ulaže zaista sate i sate truda,
            vremena, snimanja, montiranja i kod njega se vidi da ni na jedan
            video ne gleda kao na &quot;manje vrijedan&quot;. A kad su
            aktivacije raznih brendova u pitanju? Pa Sead je TikTok Native
            master i svaku integraciju može učiniti toliko prirodnom i iskrenom
            - jer on upravo to zaista i jest - prirodan i iskren, uvijek!
          </p>
          <p>
            Kao svoje tri najveće snage Sead izdvaja činjenicu da može nasmijati
            sve generacije, od 5 do 95 godina, bez ikakvih vulgarnosti i psovki,
            to što je uporan i to što zaista, ali zaista voli ovo što radi i
            uživa u tome maksimalno! A kad smo ga pitali da nam iz glave kaže
            neki quote kojim se vodi u cijelom ovom procesu, nije mu dugo
            trebalo da nam, kratko i jasno, kaže: Vidiš da možeš, Senada!
          </p>
        </div>
      </div>
      <div className="featuredContent">
        <h1>Izdvojeno</h1>
        <FeaturedCarousel />
      </div>
      <div className="featuredContent">
        <h1>Novosti</h1>
        <div className="articles">
          <ArticleCard />
          <ArticleCard />
        </div>
      </div>

      {/* KONTAKT */}
      <Contact />
    </div>
  );
};

export default CreatorPage;
