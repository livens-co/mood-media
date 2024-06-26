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
  video: string;
  authors: Author[];
  categories: Category[];
  creators: Creator[];
}

export interface Movie {
  title: string;
  banner: string;
  link: string;
}

export interface Campaign {
  _id: string;
  title: string;
  position: number;
  image: string;
  logo: string;
  video: string;
  playbackId: string;
}

export interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  ans: number;
  image: string;
}

export interface Result {
row1: string;
row2: string;
row3: string;
res: number;
bgColor: string;
color: string;
}