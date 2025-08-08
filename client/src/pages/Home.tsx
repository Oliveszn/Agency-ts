import AboutUsSection from "@/components/Main-view/Home/AboutUsSection";
import AwardsSection from "@/components/Main-view/Home/AwardsSection";
import HeroVideo from "@/components/Main-view/Home/HeroVideo";
import HomeCarousel from "@/components/Main-view/Home/HomeCarousel";
import WorkSection from "@/components/Main-view/Home/WorkSection";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import type { PageProps } from "@/utils/types";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Home = ({ navTheme = "white" }: PageProps) => {
  const dispatch = useAppDispatch();

  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);
  return (
    <div className="bg-[var(--tetColor)] ">
      <Helmet>
        <title>BASIC/DEPT</title>
      </Helmet>
      <HeroVideo />
      <div className="mx-auto max-w-7xl text-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
        <AwardsSection />
        <WorkSection />
      </div>
      <HomeCarousel />
      <div className="mx-auto max-w-7xl text-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
        <AboutUsSection />
      </div>
    </div>
  );
};

export default Home;
