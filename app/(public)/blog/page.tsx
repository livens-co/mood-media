import ArticleCard from "@/components/ArticleCard";
import "./style.scss";

import { Article } from "@/types";
import getArticles from "@/sanity/actions/get-articles";
import PaginationControls from "@/components/PaginationControls";

export const revalidate = 1;

const NewsPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const articles: Article[] = await getArticles();

  const page = searchParams["page"] ?? "1";
  const per_page = searchParams["per_page"] ?? "14";

  const start = (Number(page) - 1) * Number(per_page);
  const end = start + Number(per_page);

  const entries = articles.slice(start, end);

  // console.log(articles.length)

  return (
    <div className="newsPage">
      <div className="newsGrid">
        <div className="title">
          {/* <h1>Novosti</h1> */}
          <h2>Zanimljivosti iz svijeta Kreatora</h2>
        </div>
        {entries.map((article) => (
          <ArticleCard data={article} key={article.slug} />
        ))}
      </div>

      <div className="pagination">
        <PaginationControls
          hasNextPage={end < articles.length}
          hasPrevPage={start > 0}
          artcileNum={articles.length}
        />
      </div>
    </div>
  );
};

export default NewsPage;
