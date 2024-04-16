'use client'

import MuxPlayer from '@mux/mux-player-react';
import Backdrop from '../Backdrop'
import './style.scss'

interface VideoModalProps {
  modalOpen: boolean;
  handleClose: () => void;
  video: string;
}

const VideoModal: React.FC<VideoModalProps> = ({handleClose, video}) => {
  return (
    <Backdrop 
    onClick={handleClose}
    >
      <div className='video'>
        <MuxPlayer
          // playbackId="1lQG7WAoT4ACNwa2wVY00EuOnnqDX48YKo6KaYJKljpI"
          playbackId={video}
       
        />
        {/* <h1>{video}</h1> */}
      </div>
    </Backdrop>
  )
}

export default VideoModal