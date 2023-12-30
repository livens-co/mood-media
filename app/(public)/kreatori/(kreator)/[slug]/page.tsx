import { Article, Creator } from "@/types";
import "./style.scss";
import getCreator from "@/sanity/actions/get-creator";
import { FaTiktok, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Contact from "@/components/Contact";
import FeaturedCarousel from "@/components/FeaturedCarousel";
import getArticlesByCreator from "@/sanity/actions/get-articles-by-creator";
import ArticleCard from "@/components/ArticleCard";

export const revalidate = 1;

interface CreatorPageProps {
  params: {
    slug: string;
  };
}

const CreatorPage: React.FC<CreatorPageProps> = async ({
  params: { slug },
}) => {
  const creator: Creator | null = await getCreator(slug);
  const articles: Article[] = await getArticlesByCreator(creator.key);

  if (!creator) {
    return <div>Kreator nije pronađen</div>;
  }

  // console.log(creator);

  return (
    <div className="creatorPage">
      <div className="header">
        <div className="text">
          <h1>{creator?.name}</h1>
          <ul className="socials">
            <li>
              <FaTiktok />
              <a href={`${creator?.linkTT}`} target="_blank">
                {creator?.followersTT} followers
              </a>
            </li>
            <li>
              <FaInstagram />
              <a href={`${creator?.linkIG}`} target="_blank">
                {creator?.followersIG} followers
              </a>
            </li>
            <li>
              <FaYoutube />
              {/* <a
                href={`${creator?.linkYT}`}
                target="_blank"
              >
                {creator?.followersYT} subscribers
              </a> */}
            </li>
            <li>
              <FaFacebookF />
              {/* <a href={`${creator?.linkFB}`} target="_blank">
              {creator?.followersFB} followers
              </a> */}
            </li>
          </ul>
        </div>
        <div className="profileImage">
          <Image src={`${creator?.mainImage}`} alt={creator?.name} fill />
        </div>
      </div>
      <div className="biographyContainer">
        <div className="biography">
          <h1>Biografija</h1>
          <PortableText value={creator?.bio} />
        </div>
      </div>
      <div className="featuredContent">
        <h1>Izdvojeno</h1>
        <FeaturedCarousel data={creator} />

        {/* SLIKE */}

        {/* NOVOSTI */}
      </div>
      <div className="featuredContent">
        <h1>Novosti</h1>
        <div className="articles">
          {articles
            .map((article) => <ArticleCard data={article} key={article.slug} />)
            .slice(0, 3)}
        </div>
      </div>

      {/* KONTAKT */}
      <Contact />
    </div>
  );
};

export default CreatorPage;
