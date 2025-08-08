import type { Post } from "@/utils/types";
import { Link } from "react-router-dom";

interface ThinkingProps {
  posts: Post[];
}

const ThinkingTile = ({ posts }: ThinkingProps) => {
  return (
    <>
      {posts.map((post) => (
        <div className="group" key={post.slug.current}>
          <Link
            to={`/blog/${post.slug.current}`}
            className="group-hover:underline cursor-pointer"
            style={{ textDecorationColor: "#f9cdcd" }}
          >
            <hr className="border-t-1 border-[var(--priColor)] mb-6" />
            <div className="grid grid-cols-1 sm:grid-cols-[30%_70%] w-full gap-4 mb-10 overflow-hidden relative">
              <picture className="relative overflow-hidden block">
                <img
                  src={post.mainImage?.asset.url}
                  alt={post.title}
                  className="w-full h-auto max-w-sm object-contain transition-transform duration-700 ease-out group-hover:scale-95 group-hover:translate-y-2"
                />
              </picture>
              <div className="uppercase grid grid-rows-1 lg:grid-rows-[80%_20%] gap-10 lg:gap-4">
                <div className="w-full lg:w-2/3 ">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-none duration-1000 font-medium">
                    {post.title}
                  </h1>
                </div>
                <div>
                  <h2 className="text-sm lg:text-base font-semibold">
                    {post.categories?.map((cat) => cat.title).join(", ")}
                  </h2>
                </div>
              </div>
              <figure className="absolute lg:top-0 bottom-0 right-0" id="arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 17"
                  width={25}
                  height={30}
                  className="fill-[var(--priColor)]"
                >
                  <path d="M.1 7.5h14v2H.1z"></path>
                  <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
                  <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
                </svg>
              </figure>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ThinkingTile;
