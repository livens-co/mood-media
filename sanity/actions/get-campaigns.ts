import { createClient, groq } from "next-sanity";
import { Campaign } from "@/types";
import clientConfig from "../config/client-config";

export default function getCampaigns(): Promise<Campaign[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "campaign" ] | order(position asc) {
      _id,
      title,
      position,
      'logo': logo.asset->url,
      'image': image.asset->url,
      playbackId
    }
    `
  );
}
