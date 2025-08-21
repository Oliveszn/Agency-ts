import { images } from "@/config/aboutconfig";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ImageGallery = () => {
  const imageRefs = useRef<(HTMLLIElement | null)[]>([]);
  const BASE_Z_INDEX = 10; // Base z-index for non-hovered images

  // here we set zindex for all images on page mount
  useEffect(() => {
    imageRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.set(ref, { zIndex: BASE_Z_INDEX + index });
      }
    });
  }, []);

  const handleMouseEnter = (hoveredIndex: number) => {
    imageRefs.current.forEach((ref, i) => {
      if (ref) {
        if (i === hoveredIndex) {
          // The hovered image: bring to front and scale up
          gsap.to(ref, {
            duration: 0.3,
            scale: 1.05,
            zIndex: BASE_Z_INDEX + images.length + 10,
            ease: "power2.out",
            overwrite: true, // Ensures only the latest animation runs for this element, preventing conflicts
          });
        } else {
          // here we lower zindex of all other images not hovered on
          gsap.to(ref, {
            duration: 0.3,
            zIndex: BASE_Z_INDEX + 1, // Set to a value lower than BASE_Z_INDEX to ensure it's below the hovered item
            ease: "power2.out",
            overwrite: true,
          });
        }
      }
    });
  };

  ///the _ here is to tell ts that we know its not being used and its fines, so it doesnt guive the the yellow line
  const handleMouseLeave = (_index: number) => {
    imageRefs.current.forEach((ref, i) => {
      if (ref) {
        gsap.to(ref, {
          duration: 0.3,
          scale: 1,
          zIndex: BASE_Z_INDEX + i,
          ease: "power2.out",
          overwrite: true,
        });
      }
    });
  };
  return (
    <section className="my-6 md:my-8 lg:my-12">
      <div>
        <figure className="bg-[var(--priColor)] h-1 p-0 m-0 align-baseline border-0"></figure>
        <div className="flex flex-row justify-between uppercase my-6 md:my-10">
          <div className="font-medium text-sm md:text-base">2010</div>
          <div className="font-medium text-sm md:text-base">Present</div>
          <div className="text-lg md:text-2xl">●</div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ol className="relative w-full max-w-3xl h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
          {images.map((image, index) => (
            <li
              className={`absolute w-fit
                ${image.mobilePosition}
                md:${image.desktopPosition.replace(
                  /top-|right-|left-|bottom-/g,
                  (match) => "md:" + match
                )}
              `}
              key={index}
              ref={(el) => {
                imageRefs.current[index] = el;
              }}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={`Gallery image ${index + 1}`}
                className="max-w-sm w-48 sm:w-80 lg:w-96 object-contain hover:cursor-pointer"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                style={{
                  pointerEvents: "auto",
                }}
              />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ImageGallery;
