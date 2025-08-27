import { Link, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useHoverButton } from "@/hooks/useHoverButton";

gsap.registerPlugin(ScrollTrigger);

const AboutUsSection = () => {
  const { overlayRef, handleMouseEnter, handleMouseLeave } = useHoverButton();
  const containerRef = useRef<any>(null);
  const navRef = useRef<any>(null);
  const pinnedRef = useRef(null);
  const matchMediaRef = useRef<any>(null);
  const scrollTriggerRef = useRef<any>(null);
  const location = useLocation();

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (scrollTriggerRef.current) {
  //       scrollTriggerRef.current.kill();
  //     }

  //     if (matchMediaRef.current) {
  //       matchMediaRef.current.kill();
  //     }

  //     const mm = gsap.matchMedia();
  //     matchMediaRef.current = mm;

  //     mm.add("(min-width: 640px)", () => {
  //       scrollTriggerRef.current = ScrollTrigger.create({
  //         trigger: pinnedRef.current,
  //         start: "top 10%",
  //         end: "bottom bottom",
  //         pin: navRef.current,
  //         pinSpacing: false,
  //         invalidateOnRefresh: true,
  //       });
  //     });

  //     ScrollTrigger.refresh();
  //   }, 100);

  //   return () => {
  //     clearTimeout(timer); // Clear timeout on cleanup
  //     if (scrollTriggerRef.current) {
  //       scrollTriggerRef.current.kill();
  //     }
  //     if (matchMediaRef.current) {
  //       matchMediaRef.current.kill();
  //     }
  //   };
  // }, [location.pathname]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": () => {
          ScrollTrigger.create({
            trigger: ".pinned-section",
            start: "top 10%",
            end: "bottom 80%",
            pin: ".pinned-nav",
            pinSpacing: false,
          });
        },

        "(max-width: 1023px)": () => {
          const st = ScrollTrigger.getById("pinnedNav");
          if (st) st.kill(); // only kill this one
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);
  return (
    <section className="mt-16 lg:mt-28 " ref={containerRef}>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 pinned-section"
        ref={pinnedRef}
      >
        <div className="pinned-nav">
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
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  to="/about"
                  className="relative inline-block overflow-hidden text-sm font-normal md:font-medium lg:font-semibold border-[1.6px] border-[var(--priColor)] rounded-full px-6 py-2 text-[var(--priColor)] z-10 bg-[var(--secColor)] whitespace-nowrap hover:text-black"
                >
                  <span className="relative z-20"> About Us</span>

                  <span
                    ref={overlayRef}
                    className="absolute left-0 top-0 h-full w-full bg-[var(--priColor)] scale-y-0 origin-bottom z-10"
                  />
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
