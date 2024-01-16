import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import { Article } from "@/types";

interface ArticleCardProps {
  data: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ data }) => {
  return (
    <Link href={`/blog/${data.slug}`} className="article">
      <div className="border" />
      <div className="articleImage">
        <Image priority src={data.thumbnail} width={600} height={600} alt={data.title} />
      </div>
      <div className="articleTitle">{data.title}</div>
    </Link>
  );
};

export default ArticleCard;
