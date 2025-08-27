import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import AboutAwards from "@/components/Main-view/About/AboutAwards";
import AboutAdmin from "@/components/Main-view/About/AboutAdmin";
import ImageGallery from "@/components/Main-view/About/ImageGallery";
import HeroSection from "@/components/Main-view/About/heroSection";
import AgencyStatsSection from "@/components/Main-view/About/AgencyStatsSection";
import CapabilitiesSection from "@/components/Main-view/About/CapabilitiesSection";
import AdminSection from "@/components/Main-view/About/AdminSection";
import { useAdmins } from "@/hooks/useAdmin";
import AwardsSection from "@/components/Main-view/About/AwardsSection";
import type { PageProps } from "@/utils/types";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import { useNavigate } from "react-router-dom";

const About = ({ navTheme = "white", footerTheme = "black" }: PageProps) => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const scrollPosition = useRef(0);

  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme({ navTheme, footerTheme }));
  }, [navTheme, footerTheme, dispatch]);

  const { data: admins, isLoading, isError } = useAdmins();

  ///learnt and used hash based routing here, supposed to be used on ui states that shouldnt cos reloads
  ///as the normal routing i used coaused reloads
  ///tis useeffect controls storing the slug in url for admins
  useEffect(() => {
    if (!admins || admins.length === 0) return;

    const hash = location.hash.slice(1); // Remove the #
    if (hash) {
      const index = admins.findIndex((a) => a.slug.current === hash);
      if (index !== -1) {
        /// Store scroll position only when opening for the first time
        if (!openAbout) {
          scrollPosition.current = window.pageYOffset;
        }
        setCurrentIndex(index);
        setOpenAbout(true);
      }
    } else {
      // When closing, restore scroll position
      if (openAbout) {
        setOpenAbout(false);
        // Use setTimeout to ensure the sheet closes first
        setTimeout(() => {
          window.scrollTo({
            top: scrollPosition.current,
            behavior: "auto", // Use 'auto' to prevent smooth scrolling
          });
        }, 100); // Small delay to ensure sheet animation completes
      }
    }
  }, [location.hash, admins, openAbout]);

  const handleGetAdminDetails = (index: number) => {
    scrollPosition.current = window.pageYOffset;
    navigate(`/about#${admins?.[index].slug.current}`);
  };

  ///this is the function to open the awards table on click
  const handleOpenAwards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpenAwards(true);
  };

  return (
    <div className="bg-[var(--secColor)] px-4 sm:px-6 lg:px-8">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="mx-auto max-w-7xl text-[var(--priColor)]">
        <HeroSection />
        <ImageGallery />
        <AgencyStatsSection />
        <CapabilitiesSection />
        <AwardsSection onOpenAwards={handleOpenAwards} />

        {isLoading ? (
          <div className="text-center text-2xl animate-pulse">
            <p>Loading Admins</p>
          </div>
        ) : isError ? (
          <p>Error fetcing admins</p>
        ) : (
          <AdminSection
            admins={admins}
            handleGetAdminDetails={handleGetAdminDetails}
          />
        )}

        {admins && admins.length > 0 && (
          <AboutAdmin
            admin={admins[currentIndex]}
            open={openAbout}
            setOpen={(val) => {
              if (!val) {
                navigate("/about"); // Remove hash when closing
              }
            }}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            admins={admins}
          />
        )}

        <AboutAwards open={openAwards} setOpen={setOpenAwards} />
      </div>
    </div>
  );
};

export default About;
