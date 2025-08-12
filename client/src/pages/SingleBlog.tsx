import { PortableText } from "@portabletext/react";
import { useSingleBlog } from "@/hooks/useSingleBlog";

const SingleBlog = () => {
  const { data: singlePosts, isLoading, isError, error } = useSingleBlog();
  console.log(singlePosts);

  const formatDate = (dateString: any) => {
    const date = new Date(dateString);
    return (
      date
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
        })
        ////added this to make sure dates are formatted with 10.24 instead of 10/24
        .replace(/\//g, ".")
    );
  };

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
            <>
              <div className="h-screen">
                <div className="flex items-center justify-between py-14">
                  <div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium tracking-tighter max-w-[25ch] break-words uppercase">
                      {singlePosts.title}
                    </h1>
                  </div>
                  <div className="text-right text-6xl md:text-8xl lg:text-9xl">
                    <span className="">●</span>
                  </div>
                </div>

                <div className="uppercase font-bold text-sm mt-6 lg:mt-10">
                  <figure className="bg-[var(--priColor)] h-1 align-baseline"></figure>
                  <div className="flex flex-col lg:flex-row justify-between mt-6">
                    {singlePosts.categories?.map((cat) => (
                      <p key={cat._id}>{cat.title}</p>
                    ))}
                    <p>
                      Date Published ({formatDate(singlePosts.publishedAt)})
                    </p>
                    <p>Read Time 10 Min</p>
                  </div>
                </div>
              </div>
              {/* 
              {singlePosts.mainImage && (
                <img
                  src={singlePosts.mainImage.asset.url}
                  alt={singlePosts.mainImage.alt || "Image"}
                />
              )} */}

              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="lg:flex-1 uppercase">
                  {singlePosts.categories?.map((cat) => (
                    <p key={cat._id} className="font-bold">
                      {cat.title}
                    </p>
                  ))}
                  <h1 className="font-normal tracking-tighter max-w-[25ch] break-words mb-6">
                    {singlePosts.title}
                  </h1>
                  <span className="">
                    ({formatDate(singlePosts.publishedAt)})
                  </span>
                </div>

                <div className="lg:flex-1">
                  <div className="text-lg lg:text-xl leading-normal prose prose-headings:text-[var(--priColor)] text-[var(--priColor)]">
                    <PortableText value={singlePosts.body} />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Post not found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
