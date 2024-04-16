// "use client";

import ImageCard from "@/components/ImageCard";
import "./style.scss";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";
import { useEffect, useState } from "react";
import MuxPlayer from "@mux/mux-player-react";
import VideoModal from "@/components/VideoModal";
import Row1 from "@/components/ClientPageRows/Row1";
import { Campaign } from "@/types";
import getCampaigns from "@/sanity/actions/get-campaigns";



const ClientsPage = async () => {
 const campaigns: Campaign[] = await getCampaigns();
 console.log(campaigns)

  return (
    <div className="clientsPage">

      {/* 1st ROW */}
      <Row1 data={campaigns}/>
      {/* <div>
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
            <div key={i} onClick={() => console.log(i)}>
              <ImageCard image={image} />
            </div>
          ))}
        </motion.div>
      </div> */}

      {/* 2nd ROW */}
      {/* <div className="video">
        
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
            <div key={i} 
            // onClick={() => console.log(i)} 
            onClick={() => setOpen(!open)}>
              <ImageCard image={image} />
            </div>
          ))}
        </motion.div>
      </div> */}
      {/* <button onClick={() => setOpen(!open)}>Open video</button> */}
      {/* {open && (
        <VideoModal
        modalOpen={open}
        handleClose={closeVideoModal}
        video={["video", "video"]}
        />
      )} */}
    </div>
  );
};

export default ClientsPage;
