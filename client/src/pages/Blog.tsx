import { useEffect, useState } from "react";
import client from "../lib/sanityclient";
import { getAllPostsQuery } from "../lib/sanityqueries";
import { Link } from "react-router-dom";

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
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    client
      .fetch(getAllPostsQuery)
      .then((data) => {
        setPosts(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div>
      <h2>blog</h2>
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
    </div>
  );
};

export default Blog;
