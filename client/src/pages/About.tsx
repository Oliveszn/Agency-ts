import React, { useState } from "react";
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

const About = () => {
  const [openAbout, setOpenAbout] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="mx-auto max-w-6xl text-[var(--priColor)]">
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
