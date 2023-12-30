import { createClient, groq } from "next-sanity";
import { Creator } from "@/types";
import clientConfig from "../config/client-config";

export default async function getCreator(slug: string): Promise<Creator> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "creator" && slug.current == $slug][0]{
      _id,
      name,
      key,
      'avatar': avatar.asset->url,
      'mainImage': mainImage.asset->url,
      'slug': slug.current,
      shortBio,
      bio,
      totalFollowers,
      followersTT,
      linkTT,
      followersIG,
      linkIG,
      followersYT,
      linkYT,
      followersFB,
      linkFB,
      'images': images[].asset->url,
      videos
    }
    `,
    { slug }
  );
}


