import ArticleCard from "@/components/ArticleCard";
import "./style.scss";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const NewsPage = () => {
  return (
    <div className="newsPage">
      <div className="newsGrid">
        <div className="title">
          <h1>Novosti</h1>
          <h2>Zanimljivosti iz svijeta naših kreatora</h2>
        </div>
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
        <ArticleCard />
      </div>

      <div className="pagination">
        <button>
          <FaArrowLeftLong />
        </button>
        <div className="page">1</div>
        <div className="page">2</div>
        <div className="page">3</div>
        <div className="page">4</div>
        <button>
          <FaArrowRightLong />
        </button>
      </div>
    </div>
  );
};

export default NewsPage;
