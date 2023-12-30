"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import { TikTokEmbed } from "react-social-media-embed";

interface FeaturedCarouselProps {
  data: {
    videos: string[]
  };
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ data }) => {
  // console.log(data.videos);
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {data.videos.map((v: string) => (
          <SwiperSlide key={v}>
            <div className="overlay" />
            <TikTokEmbed url={v} width={300} />
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="overlay" />
          <TikTokEmbed
            url="https://www.tiktok.com/@seadhr/video/7093161330844208390?_r=1&_t=8WHNrHvnTC2&is_from_webapp=v1&item_id=7093161330844208390"
            width={300}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div className="overlay" />
          <TikTokEmbed
            url="https://www.tiktok.com/@seadhr/video/7108375045646388485?_r=1&_t=8WHNpfqVDID&is_from_webapp=v1&item_id=7108375045646388485"
            width={300}
          />
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default FeaturedCarousel;
