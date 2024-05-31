import { createClient, groq } from "next-sanity";
import { Article } from "@/types";
import clientConfig from "../config/client-config";

export default function getArticles(): Promise<Article[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "article" ] | order(_updatedAt desc) {
      _id,
      title,
      'slug': slug.current,
      'thumbnail': thumbnail.asset->url,
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
    `
  );
}
