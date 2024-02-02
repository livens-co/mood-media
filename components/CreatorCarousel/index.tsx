"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";

import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

// import required modules
import { EffectCreative } from "swiper/modules";

interface Creator {
  slug: string;
  name: string;
  avatar: string;
}

interface HouseCarouselProps {
  creators: Creator[];
}

const CreatorCarousel: React.FC<HouseCarouselProps> = ({ creators }) => {
  return (
    <>
      <Swiper
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        modules={[EffectCreative]}
        className="creatorSwiper"
      >
        {creators.map((c) => (
          <SwiperSlide key={c.slug} className="creatorSwiperSlide">
            <Link href={`/kreatori/${c.slug}`} className="creatorCarousel">
              <Image
                src={c.avatar}
                alt={c.name}
                width={400}
                height={400}
                className="carouselImage"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="creatorNavigation">
        <div className="swipeArrow swipeArrowLeft">
          <FaAnglesLeft />
        </div>
        <div className="swipeArrow swipeArrowRight">
          <FaAnglesRight />
        </div>
      </div>
    </>
  );
};

export default CreatorCarousel;
