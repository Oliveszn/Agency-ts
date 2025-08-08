import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import type { PageProps } from "@/utils/types";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";

const Careers = ({ navTheme = "black" }: PageProps) => {
  const overlayRef = useRef<HTMLSpanElement | null>(null);

  const dispatch = useAppDispatch();
  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);

  //func for handling button hover
  const handleButtonHover = (isHovering: boolean) => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.to(overlay, {
      scaleY: isHovering ? 1 : 0,
      duration: 0.4,
      ease: isHovering ? "power2.out" : "power2.in",
    });
  };

  //for handling image and text reveal
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for coordinated animations
      const tl = gsap.timeline();

      // Text reveals first
      tl.fromTo(
        ".text-reveal-inner",
        {
          y: "100%",
        },
        {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05, // delay between each text element
        }
      )
        // image reveal
        .fromTo(
          ".image-reveal",
          {
            clipPath: "inset(100% 0 0 0)",
          },
          {
            clipPath: "inset(0% 0 0 0)",
            duration: 1,
            ease: "power2.out",
          },
          "-=0.3" // Start 0.3s before text animation finishes
        );
    });

    return () => ctx.revert();
  }, []);
  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet key={window.location.pathname}>
        <title>Design & Branding Jobs</title>
      </Helmet>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:mt-24 text-[var(--priColor)] uppercase flex flex-col items-start">
          <h1 className="mb-20 lg:mb-40">
            <div className="text-5xl lg:text-7xl font-semibold lg:font-bold">
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="text-reveal-inner inline-block">Make</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="text-reveal-inner inline-block">Dope</span>
              </span>
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="text-reveal-inner inline-block">Sh*t.</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="pr-20">●</span>
                <span className="text-reveal-inner inline-block">Get</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="text-reveal-inner inline-block">Paid.</span>
              </span>
            </div>
          </h1>

          <div className="text-xs lg:text-sm leading-none mb-20">
            Make great work.
            <br />
            Work with great people.
            <br />
            BASIC/DEPT®, Inc 10 - 24©
          </div>
        </div>

        <div className="">
          <div className="mb-20 lg:mb-32 image-reveal block overflow-hidden">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/a9848ed1a719d650ff4786ffdfd1345ede200f38-1736x2430.jpg?w=720&amp;fm=webp&amp;q=65"
              alt="cover"
              loading="lazy"
              className="w-full h-auto mx-auto"
            />
          </div>

          <div className=" text-[var(--priColor)]">
            <p className="text-2xl lg:text-3xl font-semibold">
              As part of Dept, we operate offices across the world. We’re always
              looking to connect with individuals who want to make the best work
              of their lives with the world’s greatest brands. If you’re
              interested in working with us or learning more, drop us a note,
              portfolio link, or résumé. We’ll take anything you’ve got.
            </p>
            <span>●</span>
            <br />

            <button
              onMouseEnter={() => handleButtonHover(true)}
              onMouseLeave={() => handleButtonHover(false)}
              className="relative inline-block overflow-hidden py-1 px-8 border-[1.6px] border-[var(--priColor)] rounded-2xl uppercase text-[var(--priColor)] z-10 bg-[var(--secColor)] whitespace-nowrap group hover:text-black"
            >
              <span className="relative z-20">Apply Now</span>

              {/* Overlay Layer */}
              <span
                ref={overlayRef}
                className="absolute left-0 top-0 h-full w-full bg-[var(--priColor)] scale-y-0 origin-bottom z-10"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
