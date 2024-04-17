"use client";

import MuxPlayer from "@mux/mux-player-react";
import Backdrop from "../Backdrop";
import "./style.scss";

interface VideoModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  video: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ handleClose, video }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="videoContainer" onClick={(e) => e.stopPropagation()}>
        <MuxPlayer playbackId={video} />
        <div>
          <button onClick={handleClose}>close</button>
        </div>
      </div>
    </Backdrop>
  );
};

export default VideoModal;
