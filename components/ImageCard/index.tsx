"use client";

import Image from "next/image";
import "./style.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lottie from "lottie-react";
import blob from "../../app/(public)/lottie/blob.json";
import BlobSVG from '../../public/assets/blob.svg'

interface ImageCardProps {
  image: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ image }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
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
            <div className="absolute bg-black pointer-events-none opacity-50 h-full w-full" />
          </motion.div>
        )}
      </AnimatePresence>
      <Image
        src={image}
        alt="Image"
        height={400}
        width={400}
        style={{ objectFit: "cover" }}
      />
      {/* <BlobSVG/> */}
      {/* <Lottie animationData={blob} loop={true} /> */}
    </motion.div>
  );
};

export default ImageCard;
