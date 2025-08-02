import client from "@/lib/sanityclient";
import { getPostBySlugQuery } from "@/lib/sanityqueries";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PortableText } from "@portabletext/react";

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
  const [singlePosts, setSinglePosts] = useState<SinglePost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    if (!slug) return;
    client
      .fetch(getPostBySlugQuery, { slug })
      .then((data) => {
        setSinglePosts(data);
      })
      .catch(console.error);
    setIsLoading(false);
  }, [slug]);

  if (isLoading) return <p>Loading...</p>;
  if (!singlePosts) return <p>No post found</p>;

  return (
    <div>
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
    </div>
  );
};

export default SingleBlog;
