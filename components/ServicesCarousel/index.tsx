"use client";

// import { useRef } from "react";
// import "./style.scss";

// import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
// import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

const ServicesCarousel = () => {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      <SwiperSlide>
        <h2>Povezivanje</h2>
        <p>
          Uvijek ćemo vas u trenutku spojiti s video Kreatorom koji savršeno
          odgovara baš vašem brendu, proizvodu, kampanji i publici kojoj se
          želite obratiti.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Profesionalnost</h2>
        <p>
          Na profesionalan ćemo vam način pomoći da zajedno, u najkraćem mogućem
          roku, odgovorimo na potrebe sve brže rastućeg tržišta.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Statistika</h2>
        <p>
          Dat ćemo vam da uvijek imate uvid u sve potrebne, relevantne i up to
          date informacije, statistike i podatke o našim video Kreatorima prije,
          za vrijeme i nakon kampanje.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Kreativnost</h2>
        <p>
          U dogovorenom ćemo roku izraditi kreativan koncept za promociju vašeg
          proizvoda prema vašim uputama. Pritom ćemo u prvi plan jednako staviti
          vaš brend, proizvod ili uslugu, ali i autentičnost i stil video
          Kreatora koji će taj sadržaj kreativno osmisliti te producirati.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Isticanje</h2>
        <p>
          Dajemo vam mogućnost da svoj logo istaknete na stranici našeg video
          Kreatora s kojim radite. Pritom ćemo vam ponuditi mogućnost da
          individualno istaknete vama važnu kampanju ili proizvod do kojeg
          želite da publika u tom trenutku dođe.
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <h2>Osobni pristup</h2>
        <p>
          Opuštenim, ali uvijek stručnim pristupom i modelom poslovanja
          nastojimo vezu između klijenta i Kreatora pretvoriti u vezu klijenta i
          ambasadora te je time činimo osobnijom, prirodnijom i iskrenijom!
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServicesCarousel;
