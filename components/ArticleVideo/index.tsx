'use client'

import { InstagramEmbed } from "react-social-media-embed"

interface ArticleVideoProps {
  video: string
}

const ArticleVideo: React.FC<ArticleVideoProps> = ({video}) => {
  return (
    <InstagramEmbed url={video} width={328} />
  )
}

export default ArticleVideo