import type { TypedObject } from "@portabletext/types";

////used for navbar
export interface PageProps {
  navTheme?: "transparent" | "white" | "black";
}

///for about page
export interface Admins {
  name: string;
  slug: { current: string };
  role: string;
  images?: {
    asset: { _id: string; url: string };
    alt?: string;
  }[];
  bio: TypedObject[];
}

///for thinking page
interface Category {
  _id: string;
  title: string;
}

export interface Post {
  title: string;
  slug: { current: string };
  body: any;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  categories?: Category[];
  publishedAt: any;
}

export interface SinglePost {
  title: string;
  body: any;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  categories?: Category[];
  publishedAt: any;
}
