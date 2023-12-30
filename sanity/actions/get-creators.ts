import { createClient, groq } from "next-sanity";
import { Creator } from "@/types";
import clientConfig from "../config/client-config";

export default function getCreators(): Promise<Creator[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "creator" ] | order(key asc) {
      _id,
      name,
      key,
      'slug': slug.current,
      'avatar': avatar.asset->url,
      shortBio,
      totalFollowers
    }
    `
  );
}
