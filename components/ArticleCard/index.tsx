import Image from "next/image";
import "./style.scss";

const ArticleCard = () => {
  return (
    <div className="article">
      <div className="border" />
      <div className="articleImage">
        <Image
          src="/test/article1.png"
          width={600}
          height={600}
          alt="Article image"
        />
      </div>
      <div className="articleTitle">
        Nova KinoMood avantura: &quot;Pušteni s lanca&quot; je jedna od
        najboljih komedija koju smo gledali!
      </div>
    </div>
  );
};

export default ArticleCard;
