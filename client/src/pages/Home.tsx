import AboutUsSection from "@/components/Main-view/Home/AboutUsSection";
import AwardsSection from "@/components/Main-view/Home/AwardsSection";
import HeroVideo from "@/components/Main-view/Home/HeroVideo";
import HomeCarousel from "@/components/Main-view/Home/HomeCarousel";
import WorkSection from "@/components/Main-view/Home/WorkSection";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import type { PageProps } from "@/utils/types";
import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = ({ navTheme = "white", footerTheme = "black" }: PageProps) => {
  const dispatch = useAppDispatch();
  const aboutRef = useRef(null);
  const containerRef = useRef(null);

  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme({ navTheme, footerTheme }));
  }, [navTheme, footerTheme, dispatch]);

  useEffect(() => {
    const scrollTrigger = ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        gsap.to(containerRef.current, {
          backgroundColor: "var(--secColor)",
          color: "var(--priColor)",
          duration: 0.5,
          ease: "power2.out",
        });
        dispatch(setNavTheme({ navTheme: "black", footerTheme: "white" }));
      },
      onEnterBack: () => {
        gsap.to(containerRef.current, {
          backgroundColor: "var(--secColor)",
          color: "var(--priColor)",
          duration: 0.5,
          ease: "power2.out",
        });
        dispatch(setNavTheme({ navTheme: "black", footerTheme: "white" }));
      },
      onLeave: () => {
        gsap.to(containerRef.current, {
          backgroundColor: "var(--tetColor)",
          color: "var(--secColor)",
          duration: 0.5,
          ease: "power2.out",
        });
        dispatch(setNavTheme({ navTheme, footerTheme }));
      },
      onLeaveBack: () => {
        gsap.to(containerRef.current, {
          backgroundColor: "var(--tetColor)",
          color: "var(--secColor)",
          duration: 0.5,
          ease: "power2.out",
        });
        dispatch(setNavTheme({ navTheme, footerTheme }));
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [dispatch, navTheme]);
  return (
    <div
      ref={containerRef}
      className="bg-[var(--tetColor)] text-[var(--secColor)]"
    >
      <Helmet>
        <title>BASIC/DEPT</title>
      </Helmet>
      <HeroVideo />
      <div className="mx-auto max-w-7xl">
        <AwardsSection />
        <WorkSection />
      </div>
      <HomeCarousel />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10 py-10">
        <div ref={aboutRef}>
          <AboutUsSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
