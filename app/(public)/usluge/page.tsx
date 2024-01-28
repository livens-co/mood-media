import ServicesCarousel from "@/components/ServicesCarousel";
import "./style.scss";
import Contact from "@/components/Contact";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <div className="servicesPage">
      <div className="header">
        <h1>Naši kreatori, vaša publika,</h1>
        <h1>vrhunski rezultati</h1>
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
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
          totam, dolor culpa a commodi ipsam voluptatem suscipit possimus
          molestiae praesentium eius fuga sapiente molestias excepturi adipisci
          quia accusamus officiis perferendis cumque quod, ratione distinctio
          eveniet beatae. Sapiente quae, aut laboriosam nulla nemo eos quas nisi
          saepe quo tempore minima. Tempora nam dignissimos perspiciatis sint
          reiciendis nostrum autem minus labore quae libero necessitatibus optio
          laboriosam totam expedita iusto cum voluptate numquam aut molestias
          consectetur error sed, rerum fugiat! Perferendis, molestiae dolore.
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
