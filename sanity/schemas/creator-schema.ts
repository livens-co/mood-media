import { isUniqueAcrossAllDocuments } from "@/lib/isUniqueAcrossAllDocuments";
import { normalize } from "normalize-diacritics";

const creator = {
  name: "creator",
  title: "Kreatori",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Ime i prezime",
      type: "string",
      required: true,
    },
    {
      name: "key",
      title: "ID",
      type: "number",
      required: true,
    },
    {
      name: "avatar",
      title: "Profilna slika",
      type: "image",
      options: {
        hotspot: true,
      },
      // required: true,
    },
    {
      name: "mainImage",
      title: "Glavna slika",
      type: "image",
      // required: true,
    },
    {
      name: "slug",
      title: "URL nastavak",
      type: "slug",
      options: {
        source: "name",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: async (input: string) => {
          const normalizedInput = await normalize(input);
          return normalizedInput
            .toLowerCase()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_]+/g, "-");
        },
      },
      required: true,
    },
    {
      name: "shortBio",
      title: "Kratki opis",
      type: "string",
      // required: true,
    },
    {
      name: "bio",
      title: "Biografija",
      type: "array",
      of: [{ type: "block" }],
      // required: true,
    },
    {
      name: "totalFollowers",
      title: "Ukupno Followera",
      type: "string",
      // required: true,
    },
    {
      name: "followersTT",
      title: "TikTok Followers",
      type: "string",
    },
    {
      name: "linkTT",
      title: "TikTok Link",
      type: "url",
    },
    {
      name: "followersIG",
      title: "Instagram Followers",
      type: "string",
    },
    {
      name: "linkIG",
      title: "Instagram Link",
      type: "url",
    },
    {
      name: "followersYT",
      title: "YouTube Subscribers",
      type: "string",
    },
    {
      name: "linkYT",
      title: "YouTube Link",
      type: "url",
    },
    {
      name: "followersFB",
      title: "Facebook Followers",
      type: "string",
    },
    {
      name: "linkFB",
      title: "Facebook Link",
      type: "url",
    },
    {
      name: "images",
      title: "Slike",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: 'videos',
      title: 'Video',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      title: 'Škola odgovornog influensanja',
      name: 'academyStamp',
      type: 'boolean',
      initialValue: false,
    }
  ],
};

export default creator;
