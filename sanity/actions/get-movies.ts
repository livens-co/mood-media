import { Movie } from "@/types";
import { createClient, groq } from "next-sanity";
import clientConfig from "../config/client-config";

export default function getMovies(): Promise<Movie[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "movie" ] | order(_createdAt desc) {
      _id,
      title,
      'banner': banner.asset->url,
      link
    }
    `
  );
}
