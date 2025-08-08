import client from "@/lib/sanityclient";
import { getAllPostsQuery } from "@/lib/sanityqueries";
import type { Post } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";

////for fetching data in thinking page
export const useThinking = () => {
  const fetchBlogs = async () => {
    const data = await client.fetch(getAllPostsQuery);
    return data;
  };

  return useQuery<Post[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
    staleTime: 1000 * 60 * 5, ///tis keeps data fresh for 5 mins
    retry: 2,
  });
};
