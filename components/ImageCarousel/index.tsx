"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";


import Image from "next/image";

interface ImageCarouselProps {
  data: {
    images: string[]
  };
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ data }) => {

  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.images.map((i: string) => (
          <SwiperSlide key={i}>
            <Image
            src={i}
            alt="Instagram images"
            fill
            />
          </SwiperSlide>
        ))}

       
      </Swiper>
    </>
  );
};

export default ImageCarousel;
