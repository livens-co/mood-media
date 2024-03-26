import { createClient, groq } from "next-sanity";
import { Article } from "@/types";
import clientConfig from "../config/client-config";

export default async function getArticle(slug: string): Promise<Article> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      'slug': slug.current,
      date,
      'thumbnail': thumbnail.asset->url,
      body,
      'authors': authors[]->{
        name,
        'avatar': avatar.asset->url
      },
      'categories': categories[]->{
        name,
        key
      },
      'creators': creators[]->{
        _id,
        name,
        key
      },
    }
    `,
    { slug } 
  );
}
