import { createClient, groq } from "next-sanity";
import { Article, Category } from "@/types";
import clientConfig from "../config/client-config";

export default async function getArticlesByCategory(
  key: string
): Promise<Article[]> {
  try {
    const response: Category = await createClient(clientConfig).fetch(
      groq`*[_type == "category" && key == $key][0] {
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
    console.error("Error fetching articles by category:", error);
    // Handle the error or throw it if you want to propagate it
    throw error;
  }
}
