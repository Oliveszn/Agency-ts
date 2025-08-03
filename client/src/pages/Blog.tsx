import client from "../lib/sanityclient";
import { getAllPostsQuery } from "../lib/sanityqueries";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface Post {
  title: string;
  slug: { current: string };
  body: any;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
}

const Blog = () => {
  ////using reactt query to fetch officcess from sanity
  const fetchBlogs = async () => {
    const data = await client.fetch(getAllPostsQuery);
    return data;
  };

  // Use React Query
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = useQuery<Post[]>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
  return (
    <div>
      <h2>blog</h2>

      <div>
        {isLoading ? (
          <p>Loading posts...</p>
        ) : isError ? (
          <p>
            Error:{" "}
            {error instanceof Error ? error.message : "Something went wrong."}
          </p>
        ) : posts && posts.length > 0 ? (
          <>
            <h2>You are viewing {posts.length} blog posts</h2>
            <div>
              {posts.map((post) => (
                <article key={post.slug.current}>
                  <img src={post.mainImage?.asset.url} alt={post.title} />
                  <h4>{post.title}</h4>
                  <Link to={`/blog/${post.slug.current}`}>Read Article</Link>
                </article>
              ))}
            </div>
          </>
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default Blog;
