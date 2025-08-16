import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import type { PageProps } from "@/utils/types";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";

const Work = ({ navTheme = "white" }: PageProps) => {
  const dispatch = useAppDispatch();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dotsRef = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
    ).fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    gsap.to(dotsRef.current, {
      opacity: 0.3,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="bg-[var(--tetColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet key={window.location.pathname}>
        <title>Digital Product, Branding & eCommerce Services</title>
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="min-h-[80vh] flex flex-col items-center justify-center text-center">
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl font-bold text-[#252422] mb-6"
          >
            Coming Soon
          </h1>
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-[#252422] opacity-70 mb-4"
          >
            We're crafting something amazing
          </p>
          <span
            ref={dotsRef}
            className="text-4xl text-[#252422] tracking-widest"
          >
            • • •
          </span>
        </div>
      </div>
    </div>
  );
};

export default Work;
