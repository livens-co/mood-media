"use client";

import ReactPlayer from "react-player";
import { InstagramEmbed } from "react-social-media-embed";

interface ArticleVideoProps {
  video: string;
}

const ArticleVideo: React.FC<ArticleVideoProps> = ({ video }) => {
  const renderVideoPlayer = (url: string) => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      return <ReactPlayer url={url} />;
    } else if (url.includes("instagram.com")) {
      return <InstagramEmbed url={url} width={328} />;
    } else {
      return <p>Unsupported video format</p>;
    }
  };
  return <>{renderVideoPlayer(video)}</>;
};

export default ArticleVideo;
