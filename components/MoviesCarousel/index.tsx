"use client";

import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";
import Image from "next/image";
import { Movie } from "@/types";

interface MoviesCarouselProps {
  data: Movie[];
}

const MoviesCarousel: React.FC<MoviesCarouselProps> = ({ data }) => {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{
          clickable: true,
        }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="moviesSwiper"
      >
        {data.map((movie: Movie) => (
          <SwiperSlide key={movie.link} className="moviesSlide">
            <Link href={movie.link} target="_blank">
              <Image
                src={movie.banner}
                alt={movie.title}
                height={400}
                width={600}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default MoviesCarousel;
