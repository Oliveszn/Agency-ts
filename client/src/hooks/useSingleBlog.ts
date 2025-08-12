import client from "@/lib/sanityclient";
import { getPostBySlugQuery } from "@/lib/sanityqueries";
import type { SinglePost } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const useSingleBlog = () => {
  const { slug } = useParams();

  const fetchSingleBlogs = async () => {
    if (!slug) throw new Error("No slug provided");
    const data = await client.fetch(getPostBySlugQuery, { slug });
    return data;
  };

  // Use React Query
  return useQuery<SinglePost>({
    queryKey: ["singleblogs", slug],
    queryFn: fetchSingleBlogs,
    enabled: !!slug, // makes sure the query doesn't run if slug is undefined
    staleTime: 1000 * 60 * 5, ///tis keeps data fresh for 5 mins
    retry: 2,
  });
};
