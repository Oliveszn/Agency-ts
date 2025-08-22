import CustomCursor from "@/components/common/Cursor";
import { carousel } from "@/config/homeConfig";
import { useCursor } from "@/hooks/useCursor";
import { useRef } from "react";

const HomeCarousel = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const {
    cursorRef,
    isActive,
    handleMouseEnter,
    handleMouseLeave,
    isTouchDevice,
  } = useCursor({
    containerRef: carouselRef,
    smoothness: 6,
  });

  return (
    <div ref={carouselRef} className={isActive ? "cursor-none" : ""}>
      {/* Only render CustomCursor on non-touch devices */}
      {!isTouchDevice && (
        <CustomCursor
          cursorRef={cursorRef}
          isActive={isActive}
          text="DRAG"
          backgroundColor="#f9cdcd"
          textColor="#252422"
          backgroundImage="https://mirkozeppieri.emanuelepapale.com/wp-content/uploads/2018/07/project-hover-cursor.jpg"
        />
      )}

      <div
        id="wrapper"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="portfolio-item grid grid-flow-col gap-4 overflow-x-auto overscroll-x-contain px-6 grid auto-cols-[89%] sm:auto-cols-[69%] md:auto-cols-[49%] lg:auto-cols-[29%]">
          {carousel.map((item, index) => {
            const parts = item.subtitle.split("here");
            return (
              <li
                className="relative list-none grid gap-2 p-6 min-w-0"
                key={index}
              >
                <div className="relative">
                  <div className="">
                    <picture>
                      <img
                        src={item.image}
                        alt=""
                        className="w-full h-auto max-w-[8rem] object-contain"
                      />
                    </picture>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 272 92"
                    >
                      <line
                        x1="0"
                        y1="46"
                        x2="50"
                        y2="46"
                        stroke="black"
                        strokeWidth="5"
                      />
                    </svg>
                  </div>
                  <h5 className="pt-10 font-semibold">{item.title}</h5>
                  <p className="w-5/6">
                    {parts[0]}
                    <a href={item.link} className="link underline">
                      here
                    </a>
                  </p>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
