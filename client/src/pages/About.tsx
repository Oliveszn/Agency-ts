import React, { useEffect, useState } from "react";
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
//add this to push small chabnge remove later
const About = ({ navTheme = "white", footerTheme = "black" }: PageProps) => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useAppDispatch();

  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme({ navTheme, footerTheme }));
  }, [navTheme, footerTheme, dispatch]);

  const { data: admins, isLoading, isError } = useAdmins();
  const handleGetAdminDetails = (index: number) => {
    setOpenAbout(true);
    setCurrentIndex(index);
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
            setOpen={setOpenAbout}
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
