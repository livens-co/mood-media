"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import Image from "next/image";

const StoryCarousel = () => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image priority src='/assets/academy/Leon_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Magdalena_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/marco_Storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Mia_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Mirsad_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Nika_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Raf_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Sead_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Tibor_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/Vedran_storys.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default StoryCarousel;
