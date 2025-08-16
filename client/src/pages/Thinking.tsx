import { Helmet } from "react-helmet-async";
import type { PageProps } from "@/utils/types";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import { useEffect, useState } from "react";
import HeroSection from "@/components/Main-view/Thinking/HeroSection";
import { useThinking } from "@/hooks/useThinking";
import ThinkingTile from "@/components/Main-view/Thinking/ThinkingTile";
import { filterOptions } from "@/config/thinkingconfig";

const Thinking = ({ navTheme = "black", footerTheme = "white" }: PageProps) => {
  const dispatch = useAppDispatch();
  const keyItem = "category";
  ///we retriev the filter in sessionstorage here a
  const [filter, setFilter] = useState<Record<string, string[]>>(() => {
    try {
      const savedFilter = sessionStorage.getItem("filter");
      return savedFilter ? JSON.parse(savedFilter) : {};
    } catch (error) {
      return {};
    }
  });
  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme({ navTheme, footerTheme }));
  }, [navTheme, footerTheme, dispatch]);

  const { data: posts, isLoading, isError, error } = useThinking();

  const handleFilter = (getSectionId: string, getCurrentOption: string) => {
    let cpyFilters = { ...filter };
    const indexOfCurrentSection = Object.keys(cpyFilters).indexOf(getSectionId);

    if (indexOfCurrentSection === -1) {
      cpyFilters = {
        ...cpyFilters,
        [getSectionId]: [getCurrentOption],
      };
    } else if (getCurrentOption === "all") {
      delete cpyFilters[getSectionId];
    } else {
      cpyFilters[getSectionId] = [getCurrentOption];
    }

    setFilter(cpyFilters);
    sessionStorage.setItem("filter", JSON.stringify(cpyFilters));
  };

  // here we filter posts based on teir categories to dosplay
  const filteredPosts =
    posts?.filter((post) => {
      // If no filter is set show all posts
      if (!filter[keyItem] || filter[keyItem].length === 0) {
        return true;
      }

      // Get the selected category
      const selectedCategory = filter[keyItem][0];

      // If "all" is selected, show all posts
      if (selectedCategory === "all") {
        return true;
      }

      // Check if post has categories and matches the selected category
      return post.categories?.some(
        (category) =>
          category.title.toLowerCase() === selectedCategory.toLowerCase()
      );
    }) || [];

  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet>
        <title>Thoughts on Applied Culture</title>
      </Helmet>
      <div className="mx-auto max-w-7xl text-[var(--priColor)]">
        <HeroSection />
        <div className="mb-6 text-priColor flex items-center whitespace-nowrap md:justify-end gap-6 uppercase">
          {filterOptions[keyItem].map((option) => (
            <label
              key={option.id}
              className="flex gap-3 items-center text-base lg:text-lg font-normal md:font-medium lg:font-bold text-nowrap"
            >
              <input
                type="radio"
                name={keyItem}
                value={option.id}
                className="hidden peer"
                checked={
                  option.id === "all"
                    ? !filter[keyItem] // "View All" is auto seelected if no filter exists for the keyItem
                    : filter[keyItem]?.[0] === option.id // Check other options
                }
                onChange={() => handleFilter(keyItem, option.id)}
              />

              <span className="w-4 h-4 rounded-full border border-[var(--priColor)] peer-checked:bg-[var(--priColor)] peer-checked:after:content-[''] peer-checked:after:absolute peer-checked:after:w-2 peer-checked:after:h-2 peer-checked:after:bg-[var(--priColor)] peer-checked:after:rounded-full peer-checked:after:top-1/2 peer-checked:after:left-1/2 peer-checked:after:-translate-x-1/2 peer-checked:after:-translate-y-1/2 relative transition-colors duration-200"></span>
              {option.label}
            </label>
          ))}
        </div>
        <div>
          {isLoading ? (
            <p>Loading posts...</p>
          ) : isError ? (
            <p>
              Error:
              {error instanceof Error ? error.message : "Something went wrong."}
            </p>
          ) : filteredPosts && filteredPosts.length > 0 ? (
            <>
              <ThinkingTile posts={filteredPosts} />
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
