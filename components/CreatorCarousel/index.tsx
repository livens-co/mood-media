"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";

import {
  FaArrowLeft,
  FaArrowRight,
  FaAnglesLeft,
  FaAnglesRight,
} from "react-icons/fa6";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";

// import required modules
import { EffectCards, EffectCreative } from "swiper/modules";

interface Creator {
  slug: string;
  name: string;
  avatar: string;
}

interface HouseCarouselProps {
  creators: Creator[];
}

const CreatorCarousel: React.FC<HouseCarouselProps> = ({ creators }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [touchPosition, setTouchPosition] = useState<number | null>(null);

  // const handleTouchStart = (e: React.TouchEvent) => {
  //   const touchDown = e.touches[0].clientX;
  //   setTouchPosition(touchDown);
  // };

  // const handleTouchMove = (e: React.TouchEvent) => {
  //   const touchDown = touchPosition;

  //   if (touchDown === null) {
  //     return;
  //   }

  //   const currentTouch = e.touches[0].clientX;
  //   const diff = touchDown - currentTouch;

  //   if (diff > 5) {
  //     handleNextClick();
  //   }

  //   if (diff < -5) {
  //     handleBackClick();
  //   }

  //   setTouchPosition(null);
  // };

  // const handleBackClick = () => {
  //   const isFirstSlide = currentIndex === 0;
  //   const newIndex = isFirstSlide ? creators.length - 1 : currentIndex - 1;
  //   setCurrentIndex(newIndex);
  // };

  // const handleNextClick = () => {
  //   const isLastSlide = currentIndex === creators.length - 1;
  //   const newIndex = isLastSlide ? 0 : currentIndex + 1;
  //   setCurrentIndex(newIndex);
  // };

  return (
    <>
      {/* <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}  slidesPerView={1} spaceBetween={20}> */}
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
        className="mySwiper"
      >
        {creators.map((c) => (
          <SwiperSlide key={c.slug} className="custom-slide">
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
      {/* {displayedCreators.map((c) => (
        <Link
          href={`/kreatori/${c.slug}`}
          key={c.slug}
          className="creatorCarousel"
          // onTouchStart={handleTouchStart}
          // onTouchMove={handleTouchMove}
         
        >
          <Image
            src={c.avatar}
            alt={c.name}
            width={288}
            height={288}
            className="carouselImage"
          />
        </Link>
      ))} */}
      {/* <div className="creatorNavigation">
        <div className="navButton" onClick={handleBackClick}>
          <FaArrowLeft />
        </div>
        <div className="navButton" onClick={handleNextClick}>
          <FaArrowRight />
        </div> */}
      {/* </div> */}
    </>
  );
};

export default CreatorCarousel;

{
  /* <>
      {displayedCreators.map((c) => (
        <Link
          href={`/kreatori/${c.slug}`}
          key={c.slug}
          className="creatorCarousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <Image
            src={c.avatar}
            alt={c.name}
            width={288}
            height={288}
            className="carouselImage"
          />
        </Link>
      ))}
      <div className="creatorNavigation">
        <div className="navButton" onClick={handleBackClick}>
          <FaArrowLeft />
        </div>
        <div className="navButton" onClick={handleNextClick}>
          <FaArrowRight />
        </div>
      </div>
    </> */
}
