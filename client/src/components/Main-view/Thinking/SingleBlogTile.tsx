import { formatDate } from "@/utils/helperFunctions";
import type { Category } from "@/utils/types";
import { PortableText } from "@portabletext/react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SingleBlogProps {
  singlePosts: any;
}
const SingleBlogTile = ({ singlePosts }: SingleBlogProps) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageScrollTriggerRef = useRef<any>(null);

  useEffect(() => {
    if (!imageRef.current || !containerRef.current) return;

    if (imageScrollTriggerRef.current) {
      imageScrollTriggerRef.current.kill();
    }

    const ctx = gsap.context(() => {
      // const trigger = ScrollTrigger.create({
      imageScrollTriggerRef.current = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "+=100vh",
        pin: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;

          gsap.set(imageRef.current, {
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            top: `${100 - progress * 150}%`,
          });
        },
        onLeave: () => {
          gsap.set(imageRef.current, {
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            top: "-100vh",
            opacity: 0,
            visibility: "hidden",
          });
        },
        onEnterBack: () => {
          // const progress = trigger.progress;
          const progress = imageScrollTriggerRef.current?.progress || 0;
          gsap.set(imageRef.current, {
            position: "fixed",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 1000,
            top: `${100 - progress * 150}%`,
            opacity: 1,
            visibility: "visible",
          });
        },
      });
    }, containerRef);

    // return () => ctx.revert();
    return () => {
      ctx.revert();
      if (imageScrollTriggerRef.current) {
        imageScrollTriggerRef.current.kill();
        imageScrollTriggerRef.current = null;
      }
    };
  }, [singlePosts]);

  return (
    <>
      <div ref={containerRef}>
        <div className="min-h-screen">
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
              {singlePosts.categories?.map((cat: Category) => (
                <p key={cat._id}>{cat.title}</p>
              ))}
              <p>Date Published ({formatDate(singlePosts.publishedAt)})</p>
              <p>Read Time 10 Min</p>
            </div>
          </div>
        </div>

        <div className="">
          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="lg:w-1/2 lg:flex-shrink-0 uppercase">
              {singlePosts.categories?.map((cat: Category) => (
                <p key={cat._id} className="font-bold">
                  {cat.title}
                </p>
              ))}
              <h1 className="font-normal tracking-tighter max-w-[25ch] break-words mb-6">
                {singlePosts.title}
              </h1>
              <span className="">({formatDate(singlePosts.publishedAt)})</span>
            </div>

            <div className="lg:w-1/2 lg:flex-shrink-0 lg:ml-auto">
              <div className="text-lg lg:text-xl leading-normal prose prose-headings:text-[var(--priColor)] text-[var(--priColor)]">
                <PortableText value={singlePosts.body} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {singlePosts.mainImage && (
        <img
          ref={imageRef}
          src={singlePosts.mainImage.asset.url}
          alt={singlePosts.mainImage.alt || "Image"}
          className="w-1/2 h-2/3 object-cover"
        />
      )}
    </>
  );
};

export default SingleBlogTile;
