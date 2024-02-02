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
          <Image  src='/assets/academy/story/nika-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/josip-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image priority src='/assets/academy/story/andrea-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/marco_story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/monika-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/mirsad-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/rafaela-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/sead-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/tibor-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        <SwiperSlide>
          <Image  src='/assets/academy/story/vedran-story.jpeg' alt="Story" width={320} height={569} />
        </SwiperSlide>
        
      </Swiper>
    </>
  );
};

export default StoryCarousel;
