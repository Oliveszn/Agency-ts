import client from "@/lib/sanityclient";
import { getPostBySlugQuery } from "@/lib/sanityqueries";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";
import { useQuery } from "@tanstack/react-query";

interface Category {
  _id: string;
  title: string;
}

interface SinglePost {
  title: string;
  body: any;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  categories?: Category[];
}

const SingleBlog = () => {
  const { slug } = useParams();

  ////using reactt query to fetch officcess from sanity
  const fetchSingleBlogs = async () => {
    if (!slug) throw new Error("No slug provided");
    const data = await client.fetch(getPostBySlugQuery, { slug });
    return data;
  };

  // Use React Query
  const {
    data: singlePosts,
    isLoading,
    isError,
    error,
  } = useQuery<SinglePost>({
    queryKey: ["singleblogs", slug],
    queryFn: fetchSingleBlogs,
    enabled: !!slug, // makes sure the query doesn't run if slug is undefined
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading post...</p>
      ) : isError ? (
        <p>
          Error:{" "}
          {error instanceof Error ? error.message : "Something went wrong."}
        </p>
      ) : singlePosts ? (
        <>
          <h1>{singlePosts.title}</h1>

          {singlePosts.categories?.map((cat) => (
            <p key={cat._id}>Category: {cat.title}</p>
          ))}

          {singlePosts.mainImage && (
            <img
              src={singlePosts.mainImage.asset.url}
              alt={singlePosts.mainImage.alt || "Image"}
            />
          )}

          <div>
            <PortableText value={singlePosts.body} />
          </div>
        </>
      ) : (
        <p>Post not found.</p>
      )}
    </div>
  );
};

export default SingleBlog;
