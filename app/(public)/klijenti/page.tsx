"use client";

import ImageCard from "@/components/ImageCard";
import "./style.scss";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface RightMovingDivProps {
  images: string[]; // Define the type of the 'images' prop as string array
  xTranslation: any;
  duration: number;
  setMustFinish: React.Dispatch<React.SetStateAction<boolean>>;
  setDuration: React.Dispatch<React.SetStateAction<number>>;
}

const RightMovingDiv: React.FC<RightMovingDivProps> = ({
  images,
  xTranslation,
  duration,
  setMustFinish,
  setDuration,
}) => {
  return (
    <motion.div
      className="absolute left-0 flex gap-4"
      style={{ x: -1 * xTranslation.get() }}
      onHoverStart={() => {
        setMustFinish(true);
        setDuration(75); // Set the duration for slow movement
      }}
      onHoverEnd={() => {
        setMustFinish(true);
        setDuration(25); // Set the duration for fast movement
      }}
    >
      {images.map((image, i) => (
        <ImageCard image={image} key={i} />
      ))}
    </motion.div>
  );
};

const ClientsPage = () => {
  const images = [
    "/assets/academy/story/andrea-story.jpeg",
    "/assets/academy/story/josip-story.jpeg",
    "/assets/academy/story/marco_story.jpeg",
    "/assets/academy/story/mirsad-story.jpeg",
    "/assets/academy/story/monika-story.jpeg",
    "/assets/academy/story/nika-story.jpeg",
    "/assets/academy/story/rafaela-story.jpeg",
    "/assets/academy/story/sead-story.jpeg",
    "/assets/academy/story/tibor-story.jpeg",
    "/assets/academy/story/vedran-story.jpeg",
  ];

  

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);

  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 + 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [xTranslation, width, duration, rerender, mustFinish]);

  return (
    <div className="clientsPage">
      <div >
        <motion.div
          className="absolute left-0 flex gap-4"
          ref={ref}
          style={{ x: xTranslation }}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...images, ...images].map((image, i) => (
            <ImageCard image={image} key={i} />
          ))}
        </motion.div>
      </div>
      <div>
      {/* <RightMovingDiv
          images={images}
          xTranslation={xTranslation}
          duration={duration}
          setMustFinish={setMustFinish}
          setDuration={setDuration}
        /> */}
      </div>
      
     
    </div>
  );
};

export default ClientsPage;
