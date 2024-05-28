"use client";

import ImageCard from "@/components/ImageCard";
import "./style.scss";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import VideoModal from "@/components/VideoModal";
import { Campaign } from "@/types";

interface RowProps {
  data: Campaign[];
}

const Row2: React.FC<RowProps> = ({ data }) => {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 70;

  const [duration, setDuration] = useState(FAST_DURATION);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null
  );

  let [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);

  const closeVideoModal = () => {
    setOpen(false);
  };

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

  const handleImageCardClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setOpen(true);
  };

  return (
    <div className="clientRow">
      <motion.div
        className="row"
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
        {[...data, ...data, ...data].map((c) => (
          <div key={c._id} onClick={() => handleImageCardClick(c)}>
            <ImageCard image={c.image} />
          </div>
        ))}
      </motion.div>

      {open && selectedCampaign && (
        <VideoModal
          modalOpen={open}
          handleClose={closeVideoModal}
          video={selectedCampaign.playbackId}
        />
      )}
    </div>
  );
};

export default Row2;
