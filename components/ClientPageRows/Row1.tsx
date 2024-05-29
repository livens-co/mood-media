"use client";

import React, { useState } from "react";
import ImageCard from "@/components/ImageCard";
import "./style.scss";
import useMeasure from "react-use-measure";
import VideoModal from "@/components/VideoModal";
import { Campaign } from "@/types";

interface RowProps {
  data: Campaign[];
}

const Row1: React.FC<RowProps> = ({ data }) => {
  const [open, setOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(null);
  // const [ref] = useMeasure();

  const handleImageCardClick = (campaign: Campaign) => {
    setSelectedCampaign(campaign);
    setOpen(true);
  };

  const closeVideoModal = () => {
    setOpen(false);
  };

  return (
    <div className="clientRow">
      <div className="row row1">
        {[...data, ...data, ...data].map((c) => (
          <div key={c._id} className="imageContainer" onClick={() => handleImageCardClick(c)}>
            <ImageCard image={c.image} />
          </div>
        ))}
      </div>

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

export default Row1;

