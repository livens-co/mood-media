import Image from "next/image";
import "./style.scss";

import oNama from "../../../public/assets/oNamaBanner.jpeg";

const AboutUs = () => {
  return (
    <div className="aboutUsPage">
      {/* HERO IMAGE */}
      <div className="heroImage">
        <Image src={oNama} height={329} width={1246} alt="Kreatori" />
      </div>

      {/* TKO SMO MI? */}
      <div className="aboutUs">
        <h1>Tko smo mi?</h1>
        <p>
          Kad bi nas netko pitao kako bismo mi sami opisali Mood Media team, ne
          pada nam na pamet ništa bolje od ozbiljno zabavni i ozbiljni. Ozbiljni
          smo uvijek kad je u pitanju posao, jer svaku kampanju radimo stručno,
          korak po korak, od ideje i koncepta do snimanja i postprodukcije.
          Uvijek slušamo želje i potrebe klijenta, ali i potrebe video kreatora
          koji stvaraju sadržaj unutar našeg tima. A zašto smo ozbiljno zabavni?
          Pa, kad radimo, cilj nam je uvijek svaki zadatak odraditi maksimalno
          opušteno, za maksimalno vrhunske rezultate na kraju.
        </p>
      </div>

      {/* NAŠA IMENA  */}
      <div className="aboutUs">
        <h1>Naša imena</h1>
        <p>
          Naš tim trenutno se sastoji od brojnih vrlo uspješnih i popularnih
          imena u svijetu video kreatora. Mirta Miler (Mimiermakeup), Marco
          Cuccurin, Nika Pavičić (xniks2x), Mirsad Kadić, Rafaela Seba
          (RafTheChild), Pave Elez, Sead Hrustanović, Andrea Pacadi, Magdalena
          Folnožić, Leon Kosanović Picek, Filip Miloš, Mateo Elez, Josip Bačić,
          Vedran Kantar, Tibor Čubrilo i Mia Negovetić sva su ta naša imena!
        </p>
      </div>
      {/* <div className="ourCreators">
        <div className="creatorCarousel">creators</div>
        <div className="text">
          <h1>Naša imena</h1>
          <p>
            Naš tim trenutno se sastoji od brojnih vrlo uspješnih i popularnih
            imena u svijetu video kreatora. Mirta Miler (Mimiermakeup), Marco
            Cuccurin, Nika Pavičić (xniks2x), Mirsad Kadić, Rafaela Seba
            (RafTheChild), Pave Elez, Sead Hrustanović, Andrea Pacadi, Magdalena
            Folnožić, Leon Kosanović Picek, Filip Miloš, Mateo Elez, Josip
            Bačić, Vedran Kantar, Tibor Čubrilo i Mia Negovetić sva su ta naša
            imena!
          </p>
        </div>
      </div> */}

      {/* NAŠI KLIJENTI */}
      <div className="aboutUs">
        <h1>Naši klijenti</h1>
        <p>
          Osim s kreatorima, važni su nam profesionalni i jedinstveni odnosi
          koje gradimo s klijentima. A neke od vrlo uspješnih i ambicioznih
          suradnji, koje traju i kojima se uvijek iznova vraćamo, dosad smo
          ostvarili s brojnim velikim brendovima kao što su A1, Samsung, Red
          Bull, Intersport, kao i mnogobrojne marketinške agencije i poslovni
          partneri iz raznih drugih polja poslovanja.
        </p>
      </div>

      {/* ISKUSTVO, INDIIVTUALNOST, KRETIVNOST */}
      <div className="clients">
        <h1>Iskustvo</h1>
        <p>
          Krenuli smo u ovu avanturu prije pet godina, od doma, iz Bjelovara, sa
          dva video kreatora s malim YouTube kanalom i velikim snovima. Xniks2x
          i Leo Valentić tada su krenuli snimati za mreže na kanalu Live Your
          Dreams (sada su vam oni veliki snovi jasniji, zar ne?).
        </p>
      </div>
      <div className="clients">
        <h1>Individualnost</h1>
        <p>
          Individualan pristup i slušanje njihovih želja te puštanje njihovoj
          autentičnosti i kreativnosti da dođu do izražaja uvijek su nam broj
          jedan prioritet. Jer, zadovoljiti potrebe sve brže rastućeg tržišta
          gurajući kreatore u kutije i okvire nama nikada nije bilo privlačno.
        </p>
      </div>
      <div className="clients">
        <h1>Pouzdanost</h1>
        <p>
          Ovdje vas još očekuju zaista velike i ozbiljne te ozbiljno zabavne
          stvari. I ne želimo sada zvučati hvalisavo ili bilo što slično. Neka
          naši projekti, kampanje i priče naših video kreatora budu naš glas
          dalje.
        </p>
      </div>

    
    </div>
  );
};

export default AboutUs;
