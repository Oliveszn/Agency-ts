import { Helmet } from "react-helmet-async";
import type { PageProps } from "@/utils/types";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import { useEffect } from "react";
import HeroSection from "@/components/Main-view/Thinking/HeroSection";
import { useThinking } from "@/hooks/useThinking";
import ThinkingTile from "@/components/Main-view/Thinking/ThinkingTile";

const Thinking = ({ navTheme = "black" }: PageProps) => {
  const dispatch = useAppDispatch();
  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);

  const { data: posts, isLoading, isError, error } = useThinking();
  console.log(posts);

  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet>
        <title>Thoughts on Applied Culture</title>
      </Helmet>
      <div className="mx-auto max-w-7xl text-[var(--priColor)]">
        <HeroSection />
        <div>
          {isLoading ? (
            <p>Loading posts...</p>
          ) : isError ? (
            <p>
              Error:
              {error instanceof Error ? error.message : "Something went wrong."}
            </p>
          ) : posts && posts.length > 0 ? (
            <>
              <ThinkingTile posts={posts} />
            </>
          ) : (
            <p>No posts available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Thinking;
