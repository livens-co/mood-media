"use client";

import MuxPlayer from "@mux/mux-player-react";
import Backdrop from "../Backdrop";
import "./style.scss";
import { IoClose } from "react-icons/io5";


interface VideoModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  video: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ handleClose, video }) => {
  return (
    <Backdrop onClick={handleClose}>
      <div className="videoContainer" onClick={(e) => e.stopPropagation()}>
        <MuxPlayer playbackId={video} className="videoPlayer"/>
        
          <button onClick={handleClose} className="closeButton">
            <IoClose/>
          </button>
        
      </div>
    </Backdrop>
  );
};

export default VideoModal;
