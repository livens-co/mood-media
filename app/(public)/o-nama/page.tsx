import Image from "next/image";
import "./style.scss";

import oNama from "../../../public/assets/oNamaBanner.jpeg";

const AboutUs = () => {
  return (
    <div className="aboutUsPage">
      {/* HERO IMAGE */}
      <div className="heroImage">
        <div className="overlay" />
        <Image src={oNama} height={329} width={1246} alt="Kreatori" />
      </div>

      {/* TKO SMO MI? */}
      <div className="aboutUs">
        <h1>Tko smo mi?</h1>
        <p>
          Mood Media team relativno je mlada mreža video kreatora, poznatih lica
          koja već godinama gledaju i s kojima na društvenim mrežama odrastaju
          generacije novih klinaca. Kad bi nas netko pitao kako bismo mi sami
          sebe opisali, ne pada nam na pamet ništa bolje od ozbiljno zabavni,
          ali i ozbiljni. Ozbiljni smo uvijek kad je u pitanju posao, jer svaku
          kampanju radimo stručno, temeljito, od ideje i koncepta do snimanja i
          postprodukcije. Uvijek slušamo želje i potrebe klijenta, ali i potrebe
          video kreatora koji stvaraju sadržaj unutar našeg tima. A zašto smo
          ozbiljno zabavni? Pa, kad radimo, cilj nam je uvijek svaki zadatak
          odraditi maksimalno opušteno, za maksimalno vrhunske rezultate na
          kraju!
        </p>
      </div>

      {/* NAŠA IMENA  */}
      <div className="aboutUs">
        <h1>Video kreatori</h1>
        <p>
          Naš tim trenutno se sastoji od brojnih vrlo uspješnih i popularnih
          imena u svijetu video kreatora. Mirta Miler (Mimiermakeup), Marco
          Cuccurin, Nika Pavičić (xniks2x), Mirsad Kadić, Rafaela Seba
          (RafTheChild), Pave Elez, Sead Hrustanović, Andrea Pacadi, Magdalena
          Folnožić, Leon Kosanović Picek, Filip Miloš, Mateo Elez, Josip Bačić,
          Vedran Kantar (Vjeverić), Tibor Čubrilo i Mia Negovetić čine naš vrlo
          uspješan team! A brojke i rezultati koje ostvarujemo ponekad govore
          sami za sebe.
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
        <h1>Kampanje</h1>
        <p>
          U protekloj smo godini i sezoni realizirali više od 600 kampanja i
          skupili više od 96 milijuna pregleda na svim našim platformama i
          platformama naših video kreatora. S mnogo novih lica u našem teamu, s
          mnogo ključnih projekata iza nas i važnih nagrada koje smo osvojili
          &apos;zaključili&apos; smo 2023. godinu, a u 2024. ušli s još
          snažnijim idejama, još motiviraniji i još kreativniji nego dosad.
          <br />
          Osim mreže naših kreatora, važni su nam i klijenti bez kojih sve ove
          gore spomenute kampanje također ne bi bile moguće! Profesionalni
          odnosi i individualni pristup koje gradimo s klijentima uvijek su nam
          u fokusu te se trudimo na svaki upit odgovoriti maksimalno
          profesionalno i maksimalno kreativno. Neke od vrlo uspješnih i
          ambicioznih suradnji, koje traju i kojima se uvijek iznova vraćamo,
          dosad smo ostvarili s brojnim velikim brendovima kao što su A1,
          Samsung, Red Bull, Intersport, dm, Kino Film, Mass Shoes, Opel,
          Stilus, Mozaik knjiga, Kaufland, Wiener osiguranje, kao i mnogobrojne
          marketinške agencije i poslovni partneri iz raznih drugih polja
          poslovanja.
        </p>
      </div>

      {/* ISKUSTVO, INDIIVTUALNOST, KRETIVNOST */}
      <div className="clients">
        <h1>Iskustvo</h1>
        <p>
          Krenuli smo u ovu ozbiljno zabavnu avanturu prije pet godina, s dva
          video kreatora i velikim snovima kojima smo željeli promijeniti i
          poboljšati tržište društvenih mreža u regiji te ostaviti trag
          zanimljivim, edukativnim i progresivnim projektima. Danas naša mreža
          broji ukupno 17 uspješnih video kreatora s više od 4,5 milijuna
          pratitelja na društvenim mrežama, s kojima zajedno stvaramo priču još
          veću i još glasniju od ideje s kojom smo u sve ovo krenuli.
        </p>
      </div>
      <div className="clients">
        <h1>Individualnost</h1>
        <p>
          Individualan pristup i slušanje želja naših video kreatora te puštanje
          njihovoj autentičnosti i kreativnosti da dođu do izražaja uvijek su
          nam prioritet. Kako bismo zadovoljili potrebe sve brže rastućeg
          tržišta i sve različitije želje publike na društvenim mrežama, svakim
          našim projektom, suradnjom, videom, fotografijom ili akcijom trudimo
          se pomicati granice i stvarati trendove koji pozitivno utječu na
          društvo. No, uvijek pritom potičući individualnost naših kreatora, bez
          zatvaranja u kutije i okvire te bez predrasuda i negative.
        </p>
      </div>
      <div className="clients">
        <h1>Pouzdanost</h1>
        <p>
          Cijeli Mood Media team, od video kreatora do produkcijske ekipe, svaki
          zadatak uvijek odrađuje maksimalno profesionalno, kako bi zadovoljni
          bili i mi sami, ali i klijenti s kojima surađujemo na raznim
          projektima te u kampanjama. Vodimo se time da svaki naš video i sami
          želimo s guštom pogledati, svaki naš tekst i sami s užitkom pročitati
          i u svaki se naš projekt i sami uključiti. Krenuvši od sebe i ideja
          koje smo dugo stvarali, kuhali i kreirali, krenuli smo mijenjati lice
          regionalne video scene, a maksimalnu profesionalnost i pouzdanost u
          poslovnim suradnjama garantiramo i dalje!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
