"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

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
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      handleNextClick();
    }

    if (diff < -5) {
      handleBackClick();
    }

    setTouchPosition(null);
  };

  const handleBackClick = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? creators.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const isLastSlide = currentIndex === creators.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const displayedCreators = creators.slice(
    Number(currentIndex),
    Number(currentIndex) + 1
  );

  return (
    <>
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
    </>
  );
};

export default CreatorCarousel;
