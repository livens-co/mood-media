import { createClient, groq } from "next-sanity";
import { Article, Creator } from "@/types";
import clientConfig from "../config/client-config";

export default async function getArticlesByCreator(
  key: number
): Promise<Article[]> {
  try {
    const response: Creator = await createClient(clientConfig).fetch(
      groq`*[_type == "creator" && key == $key][0] {
      name,
      key,
      'articles': *[_type == "article" && references(^._id)] | order(_createdAt desc) {
        title,
        'slug': slug.current,
        'thumbnail': thumbnail.asset->url,
      
      }
    }`,
      { key }
    );

    const articles: Article[] = response?.articles || [];

    return articles;
    
  } catch (error) {
    console.error("Error fetching articles by creator:", error);
    // Handle the error or throw it if you want to propagate it
    throw error;
  }
}
