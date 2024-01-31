"use client";

import Link from "next/link";
import "./style.scss";
import Image from "next/image";

interface Creator {
  slug: string;
  name: string;
  avatar: string;
}

interface HouseCarouselProps {
  creators: Creator[];
}

const CreatorCarousel: React.FC<HouseCarouselProps> = ({ creators }) => {
  console.log(creators);
  return (
    <>
      {creators
        .map((c) => (
          <Link
            href={`/kreatori/${c.slug}`}
            key={c.slug}
            className="creatorCarousel"
          >
            <Image
              src={c.avatar}
              alt={c.name}
              width={288}
              height={288}
              className="carouselImage"
            />
          </Link>
        ))
        .slice(0, 1)}
    </>
  );
};

export default CreatorCarousel;
