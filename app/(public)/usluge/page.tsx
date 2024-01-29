import ServicesCarousel from "@/components/ServicesCarousel";
import "./style.scss";
import Contact from "@/components/Contact";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <div className="header">
        <h1>Top kreatori + vaše želje</h1>
        <h1>+ naša vizija = vrhunska priča!</h1>
        {/* <Image
          src="/assets/contactLines.svg"
          width={300}
          height={300}
          alt="Lines"
        /> */}

        {/* <Image
          src="/assets/contactLines.svg"
          width={300}
          height={300}
          alt="Lines"
        /> */}
      </div>

      {/* TEXT */}
      <div className="text">
        <p>
          Svaki brend ima svoju viziju kad je izgradnja prepoznatljivosti i
          posebnosti u pitanju. Osim što se trudimo provoditi našu viziju u
          obliku vrhunskih proizvoda koje produciramo, isto tako slušamo želje i
          potrebe klijenata s kojima surađujemo te zajedno s njima gradimo
          vrhunske priče koje postaju bliske publici i koje, kad god je to
          moguće, ostavljaju trag. Svaku vašu želju ćemo tako sa svim top
          kreatorima iz naše mreže provesti u stvarnost i ispričat ćemo priču o
          vašem proizvodu na zabavan, drugačiji, ali uvijek iskren i
          vjerodostojan način! Veselimo se svemu što dolazi, a ako se i vi
          pronalazite u ovoj našoj viziji i mislite da bismo se odlično uklopili
          u vašu, javite nam se!
        </p>
      </div>

      {/* CAROUSEL */}

      <ServicesCarousel />

      {/* CONTACT */}

      <Contact />
    </div>
  );
};

export default ServicesPage;
