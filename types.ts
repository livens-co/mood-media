import { PortableTextBlock } from "sanity";

export interface Creator {
  name: string;
  key: number;
  avatar: string;
  mainImage: string;
  slug: string;
  shortBio: string;
  bio: PortableTextBlock[];
  totalFollowers: string;
  followersTT: string;
  linkTT: string;
  followersIG: string;
  linkIG: string;
  followersYT: string;
  linkYT: string;
  followersFB: string;
  linkFB: string;
  images: string[];
  videos: string[];
  articles: Article[];
  academyStamp: boolean;
}

export interface Author {
  name: string;
  avatar: string;
}

export interface Category {
  name: string;
  key: string;
  articles: Article[];
}


export interface Article {
  title: string;
  slug: string;
  date: string;
  thumbnail: string;
  body: PortableTextBlock[];
  authors: Author[];
  categories: Category[];
  creators: Creator[];
}

export interface Movie {
  title: string;
  banner: string;
  link: string;
}