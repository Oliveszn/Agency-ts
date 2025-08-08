import type { TypedObject } from "@portabletext/types";

////used for navbar
export interface PageProps {
  navTheme?: "transparent" | "white" | "black";
}

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
