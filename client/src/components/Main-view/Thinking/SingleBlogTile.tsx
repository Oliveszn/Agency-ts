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
  const pinnedRef = useRef(null);

  // useEffect(() => {
  //   if (!imageRef.current || !containerRef.current) return;

  //   if (imageScrollTriggerRef.current) {
  //     imageScrollTriggerRef.current.kill();
  //   }

  //   const ctx = gsap.context(() => {
  //     // imageScrollTriggerRef.current = ScrollTrigger.create({
  //     //   trigger: containerRef.current,
  //     //   start: "top top",
  //     //   end: "+=100vh",
  //     //   pin: true,
  //     //   scrub: 0.5,
  //     //   onUpdate: (self) => {
  //     //     const progress = self.progress;

  //     //     gsap.set(imageRef.current, {
  //     //       position: "fixed",
  //     //       left: "50%",
  //     //       transform: "translateX(-50%)",
  //     //       zIndex: 1000,
  //     //       top: `${100 - progress * 150}%`,
  //     //     });
  //     //   },
  //     //   onLeave: () => {
  //     //     gsap.set(imageRef.current, {
  //     //       position: "fixed",
  //     //       left: "50%",
  //     //       transform: "translateX(-50%)",
  //     //       zIndex: 1000,
  //     //       top: "-100vh",
  //     //       opacity: 0,
  //     //       visibility: "hidden",
  //     //     });
  //     //   },
  //     //   onEnterBack: () => {
  //     //     const progress = imageScrollTriggerRef.current?.progress || 0;
  //     //     gsap.set(imageRef.current, {
  //     //       position: "fixed",
  //     //       left: "50%",
  //     //       transform: "translateX(-50%)",
  //     //       zIndex: 1000,
  //     //       top: `${100 - progress * 150}%`,
  //     //       opacity: 1,
  //     //       visibility: "visible",
  //     //     });
  //     //   },
  //     // });

  //     ScrollTrigger.create({
  //       trigger: ".pinned-section",
  //       start: "top 20%",
  //       end: "bottom bottom",
  //       pin: ".pinned-nav",
  //       pinSpacing: false,
  //     });
  //   }, containerRef);

  //   return () => ctx.revert();
  //   // return () => {
  //   //   ctx.revert();
  //   //   if (imageScrollTriggerRef.current) {
  //   //     imageScrollTriggerRef.current.kill();
  //   //     imageScrollTriggerRef.current = null;
  //   //   }
  //   // };
  // }, [singlePosts]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".pinned-section",
        start: "top 50%",
        end: "bottom bottom",
        pin: ".pinned-nav",
        pinSpacing: false,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={containerRef}>
        <div className="min-h-[80vh]">
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

        <section ref={pinnedRef} className="pinned-section py-20 relative">
          <div className="mx-auto px-6 flex flex-col lg:flex-row  gap-4">
            <div className="pinned-nav w-64 lg:w-1/2 lg:flex-shrink-0 uppercase">
              <div className="">
                {singlePosts.categories?.map((cat: Category) => (
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
            </div>

            <div className="flex-1 lg:w-1/2 lg:flex-shrink-0 lg:ml-auto">
              <div className="text-lg lg:text-xl leading-normal prose prose-headings:text-[var(--priColor)] text-[var(--priColor)]">
                <PortableText value={singlePosts.body} />
              </div>
            </div>
          </div>
        </section>

        {/* <section
          ref={pinnedRef}
          className="pinned-section py-20 bg-gradient-to-r from-indigo-100 to-purple-100 relative"
        >
          ///max-w-6xl
          <div className=" mx-auto px-6 flex gap-12"> 
            <div className="pinned-nav w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-4 text-gray-800">
                  Navigation
                </h3>
                <nav className="space-y-3">
                  {[
                    "Introduction",
                    "Basic Setup",
                    "Advanced Usage",
                    "Examples",
                    "Best Practices",
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="block py-2 px-4 rounded-lg hover:bg-purple-100 text-gray-700 hover:text-purple-700 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>
              </div>
            </div>

            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-8 text-gray-800">
                Pinned Navigation Demo
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg leading-relaxed">
                  This navigation sidebar will pin to the top when you scroll
                  down. This pattern is commonly used in documentation sites,
                  long-form articles, and tutorial pages where users need quick
                  access to navigation while reading.
                </p>
                <p className="text-lg leading-relaxed">
                  The pinning effect creates a smooth user experience by keeping
                  important navigation elements visible without taking up
                  permanent screen real estate.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="font-bold text-lg mb-3 text-gray-800">
                    Code Example:
                  </h3>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm overflow-x-auto">
                    {`ScrollTrigger.create({
  trigger: '.pinned-section',
  start: 'top 20%',
  end: 'bottom bottom',
  pin: '.pinned-nav',
  pinSpacing: false
});`}
                  </pre>
                </div>
                {[...Array(10)].map((_, i) => (
                  <p key={i} className="text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section> */}
      </div>

      {/* {singlePosts.mainImage && (
        <img
          ref={imageRef}
          src={singlePosts.mainImage.asset.url}
          alt={singlePosts.mainImage.alt || "Image"}
          className="w-1/2 h-2/3 object-cover"
        />
      )} */}
    </>
  );
};

export default SingleBlogTile;
