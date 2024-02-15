"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "./style.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import { TikTokEmbed, InstagramEmbed, YouTubeEmbed } from "react-social-media-embed";

interface FeaturedCarouselProps {
  data: {
    videos: string[];
  };
}

const FeaturedCarousel: React.FC<FeaturedCarouselProps> = ({ data }) => {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="featuredSwiper"
      >
        {data.videos.map((v: string) => (
          <SwiperSlide key={v} className="featuredSwiperSlide">
            {v.includes("tiktok.com") ? (
              <TikTokEmbed url={v} width={325} />
            ) : v.includes("instagram.com") ? (
              <InstagramEmbed url={v} width={328} />
            ) : v.includes("youtube.com") ? (
              <YouTubeEmbed url={v} width={325} />
            ) : (
              <p>Unsupported link type</p>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default FeaturedCarousel;
