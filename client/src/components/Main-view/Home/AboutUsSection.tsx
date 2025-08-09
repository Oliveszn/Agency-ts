import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const pinnedRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ".pinned-section",
        start: "top 2%",
        end: "bottom bottom",
        pin: ".pinned-nav",
        pinSpacing: false,
      });
    });
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Kill any existing ScrollTriggers on this element
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.trigger === pinnedRef.current) {
        trigger.kill();
      }
    });

    let mm = gsap.matchMedia();

    // we only appply it on larger screens where the layout is side by side
    mm.add("(min-width: 640px)", () => {
      ScrollTrigger.create({
        trigger: pinnedRef.current,
        start: "top 10%",
        end: "bottom bottom",
        pin: navRef.current,
        pinSpacing: false,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Optional: Add any additional logic during scroll
          console.log("Pinned nav progress:", self.progress);
        },
      });
    });

    // Cleanup (this also kills it on small screens)
    return () => {
      mm.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === pinnedRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);
  return (
    <section className="mt-16 lg:mt-28 " ref={pinnedRef}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
        <div className="sm:order-none order-2" ref={navRef}>
          <div className="uppercase">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold lg:leading-[4rem] tracking-wider">
              BASIC/DEPT® helps brands ● connect w/ culture
            </p>
            <br />
            <span className="text-lg lg:text-xl">
              Adweek{" "}
              <strong className="font-semibold md:font-bold lg:font-extrabold">
                Agency Spotlight
              </strong>
              <p className="mt-10 lg:mt-20">
                <Link
                  to="/about"
                  className="text-sm font-normal md:font-medium lg:font-semibold border-[1.6px] border-priColor rounded-full px-6 py-2 whitespace-nowrap"
                >
                  About Us
                </Link>
              </p>
            </span>
          </div>
        </div>
        <div className="sm:order-none order-1">
          <div className="sticky top-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6px"
              height="4px"
              viewBox="0 0 866 1214"
            ></svg>
            <video
              preload="metadata"
              loop
              playsInline
              muted
              autoPlay
              src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4"
              data-can-play="true"
              className="w-full h-auto"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
