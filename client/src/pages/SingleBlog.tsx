import { useSingleBlog } from "@/hooks/useSingleBlog";
import SingleBlogTile from "@/components/Main-view/Thinking/SingleBlogTile";
import type { PageProps } from "@/utils/types";
import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";

const SingleBlog = ({ navTheme = "black" }: PageProps) => {
  const dispatch = useAppDispatch();
  const { data: singlePosts, isLoading, isError, error } = useSingleBlog();
  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);

  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <div className="mx-auto max-w-7xl text-[var(--priColor)]">
        <div>
          {isLoading ? (
            <p>Loading post...</p>
          ) : isError ? (
            <p>
              Error:{" "}
              {error instanceof Error ? error.message : "Something went wrong."}
            </p>
          ) : singlePosts ? (
            <SingleBlogTile singlePosts={singlePosts} />
          ) : (
            <p>Post not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
