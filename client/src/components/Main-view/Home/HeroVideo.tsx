import CustomCursor from "@/components/common/Cursor";
import { useCursor } from "@/hooks/useCursor";
import { useRef, useState } from "react";

const HeroVideo = () => {
  const [activeVideo, setActiveVideo] = useState(1);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleVideoClick = () => {
    setTimeout(() => {
      setActiveVideo((prev) => (prev === 1 ? 2 : 1));
    }, 300);
  };

  const { cursorRef, isActive, handleMouseEnter, handleMouseLeave } = useCursor(
    {
      containerRef: videoRef,
      smoothness: 6,
    }
  );

  return (
    <div
      className={`relative w-full h-screen ${isActive ? "cursor-none" : ""}`}
      ref={videoRef}
    >
      <CustomCursor
        cursorRef={cursorRef}
        isActive={isActive}
        text="WATCH REEL"
        backgroundColor="#f4f4f4"
        textColor="#252422"
        backgroundImage="https://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg"
      />
      {activeVideo === 1 && (
        <>
          <video
            preload="metadata"
            loop
            playsInline
            muted
            autoPlay
            src="https://cdn.sanity.io/files/8nn8fua5/production/c6fb986a862cbe643c40cbdd0318ebc495efb187.mp4"
            data-can-play="true"
            onClick={handleVideoClick}
            className="portfolio-item cursor-none inset-0 w-full h-full object-cover absolute"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </>
      )}

      {activeVideo === 2 && (
        <video
          src="https://cdn.sanity.io/files/8nn8fua5/production/4c749533161fc77c899a376ec6cd6da38973772f.mp4"
          preload="metadata"
          loop
          playsInline
          autoPlay
          data-can-play="true"
          onClick={handleVideoClick}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default HeroVideo;
