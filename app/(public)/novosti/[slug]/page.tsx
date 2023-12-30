import Image from "next/image";
import "./style.scss";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import getArticle from "@/sanity/actions/get-article";
import { Article } from "@/types";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/RichTextComponent/RichTextComponents";
import getArticles from "@/sanity/actions/get-articles";

export const revalidate = 1;

interface ArticlePageProps {
  params: { 
    slug: string;
  };
}

const ArticlePage: React.FC<ArticlePageProps> = async ({
  params: { slug },
}) => {
  const articles: Article[] = await getArticles();
  const article: Article | null = await getArticle(slug);

  if (!article) {
    return <div>Članak nije pronađen</div>
  }

  

  return (
    <div className="articlePage">
      <div className="header">
        <div className="title">{article?.title}</div>
        <div className="category">{article?.categories?.[0]?.name}</div>
        <div className="details">
          <div className="avatar"></div>
          <div className="author">
            <h2>{article?.authors?.[0]?.name}</h2>
            <h3>{article?.date}</h3>
          </div>
        </div>
        <div className="featuredImage">
          <Image
            priority
            src={article?.thumbnail}
            width={800}
            height={300}
            alt={article?.title}
          />
        </div>
      </div>
      <article>
        <PortableText value={article?.body} components={RichTextComponents} />
      </article>
      <div className="articleFooter">
        <Link href="/novosti" className="articlesBtn">
          Više članaka
        </Link>
        <div className="featuredArticles">
          <h1>Možda će vas zanimati</h1>
          <div className="articles">
            {articles
              .map((article) => (
                <ArticleCard data={article} key={article.slug} />
              ))
              .slice(0, 2)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
