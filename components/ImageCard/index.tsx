"use client";

import Image from "next/image";
import "./style.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface ImageCardProps {
  image: string;
  logo: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, logo }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      <motion.div
        className="imageCard relative overflow-hidden bg-slate-400 rounded-md flex justify-center items-center"
        onHoverStart={() => setShowOverlay(true)}
        onHoverEnd={() => setShowOverlay(false)}
      >
        <AnimatePresence>
          {showOverlay && (
            <motion.div
              className="absolute inset-0 z-10 flex justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute bg-black pointer-events-none opacity-20 h-full w-full" />
            </motion.div>
          )}
        </AnimatePresence>
        <div className="imageCardImage">
          <Image src={image} priority alt="Image" height={400} width={400} />
        </div>
        <div className="imageCardLogo">
          <Image
            src={logo}
            priority
            alt="Logo"
            height={50}
            width={100}
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </motion.div>
    </>
  );
};

export default ImageCard;
