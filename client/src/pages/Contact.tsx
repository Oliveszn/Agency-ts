import ContactsTile from "@/components/Main-view/Contacts-tile";
import client from "@/lib/sanityclient";
import { getAllOffices } from "@/lib/sanityqueries";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { gsap } from "gsap";
import type { PageProps } from "@/utils/types";
import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import { useQuery } from "@tanstack/react-query";
import { useHoverButton } from "@/hooks/useHoverButton";

export interface OfficeLocation {
  city: string;
  mainImage?: {
    asset: { _id: string; url: string };
    alt?: string;
  };
  address: string;
}

const Contact = ({ navTheme = "white", footerTheme = "black" }: PageProps) => {
  const dispatch = useAppDispatch();
  const { overlayRef, handleMouseEnter, handleMouseLeave } = useHoverButton();

  //to dispatch our set color for the nav
  useEffect(() => {
    dispatch(setNavTheme({ navTheme, footerTheme }));
  }, [navTheme, footerTheme, dispatch]);

  ////using reactt query to fetch officcess from sanity
  const fetchOffices = async () => {
    const data = await client.fetch(getAllOffices);
    return data;
  };

  // Use React Query
  const {
    data: locations,
    isLoading,
    isError,
    error,
  } = useQuery<OfficeLocation[]>({
    queryKey: ["offices"],
    queryFn: fetchOffices,
  });

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
          stagger: 0.2, // delay between each text element
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
    <div className="bg-[var(--tetColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet key={window.location.pathname}>
        <title>Contact Us</title>
      </Helmet>
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-0 lg:mb-40 ">
          <div className="image-section">
            <picture className="image-reveal block overflow-hidden">
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/cb0aa290219a3dc370e4b6a6c4f4b3effee44767-1736x2430.jpg?w=1280&amp;fm=webp&amp;q=65"
                media="(min-width: 1280px)"
              />
              <source
                srcSet="https://cdn.sanity.io/images/8nn8fua5/production/cb0aa290219a3dc370e4b6a6c4f4b3effee44767-1736x2430.jpg?w=1024&amp;fm=webp&amp;q=65"
                media="(min-width: 720px)"
              />
              <img
                src="https://cdn.sanity.io/images/8nn8fua5/production/cb0aa290219a3dc370e4b6a6c4f4b3effee44767-1736x2430.jpg?w=720&amp;fm=webp&amp;q=65"
                alt=""
              />
            </picture>
          </div>
          <div className="py-28">
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold uppercase text-[#252422] mb-16">
              <span className="text-reveal-item inline-block overflow-hidden">
                <span className="text-reveal-inner inline-block">B/D®</span>
              </span>

              <br className="hidden md:block" />

              <span className="text-reveal-item inline-block overflow-hidden">
                <span className="text-reveal-inner inline-block">Contact</span>
              </span>
            </h1>

            <div className="text-[#848382] uppercase text-xs font-normal mb-16">
              <div className="text-reveal-item overflow-hidden">
                <div className="text-reveal-inner">Easy to understand.</div>
              </div>
              <div className="text-reveal-item overflow-hidden">
                <div className="text-reveal-inner">Impossible to ignore.™</div>
              </div>
              <div className="text-reveal-item overflow-hidden">
                <div className="text-reveal-inner">
                  BASIC/DEPT®, Inc 10 - 24©
                </div>
              </div>
            </div>

            <ul className="grid grid-cols-1 lg:grid-cols-[10%_45%_45%] grid-rows-2">
              <li className="row-span-2">
                <span className="text-7xl">●</span>
              </li>

              <li className="lg:col-start-2 mb-6 lg:mb-0">
                <h5 className="text-xl lg:text-2xl uppercase text-[#252422] font-medium md:font-semibold lg:font-bold mb-6">
                  New Business
                </h5>
                <p>
                  <a
                    href="mailto:biz@basicagency.com"
                    className="underline hover:no-underline text-[#848382] font-normal lg:font-medium "
                  >
                    biz@basicagency.com
                  </a>
                </p>
              </li>

              <li className="lg:col-start-3 mb-6 lg:mb-0">
                <h5 className="text-xl lg:text-2xl uppercase text-[#252422] font-medium md:font-semibold lg:font-bold mb-6">
                  General
                </h5>
                <p>
                  <a
                    href="mailto:hi@basicagency.com"
                    className="underline hover:no-underline text-[#848382] font-normal lg:font-medium "
                  >
                    hi@basicagency.com
                  </a>
                </p>
              </li>

              <li className="lg:col-start-2 row-span-2 mb-6 lg:mb-0">
                <h5 className="text-xl lg:text-2xl uppercase text-[#252422] font-medium md:font-semibold lg:font-bold mb-6">
                  Press
                </h5>
                <p>
                  <a
                    href="mailto:press@basicagency.com"
                    className="underline hover:no-underline text-[#848382] font-normal lg:font-medium "
                  >
                    press@basicagency.com
                  </a>
                </p>
              </li>

              <li className="lg:col-start-3 mb-6 lg:mb-0">
                <h5 className="text-xl lg:text-2xl uppercase text-[#252422] font-medium md:font-semibold lg:font-bold mb-6">
                  Join Us
                </h5>
                <div>
                  <p>
                    <a
                      href="mailto:recruitment@basicagency.com"
                      className="underline hover:no-underline text-[#848382] font-normal lg:font-medium "
                    >
                      recruitment@basicagency.com
                    </a>
                    <br />
                    (Various Openings)
                  </p>
                </div>
              </li>
            </ul>
            <button
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative inline-block overflow-hidden py-1 px-8 border-[1.6px] border-[var(--secColor)] rounded-2xl uppercase text-black z-10 bg-[var(--tetColor)] whitespace-nowrap group hover:text-white"
            >
              <span className="relative z-20">Apply Now</span>

              {/* Overlay Layer */}
              <span
                ref={overlayRef}
                className="absolute left-0 top-0 h-full w-full bg-[var(--secColor)] scale-y-0 origin-bottom z-10"
              />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[35%_65%]">
          <div>
            <h1 className="uppercase text-[#252422] text-2xl md:text:3xl lg:text-4xl font-semibold lg:font-bold">
              Offices
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative w-full">
            {/* Vertical Line */}
            <div className="absolute inset-0 w-[2px] bg-black mx-aut0 left-1/2 hidden lg:block"></div>

            {isLoading ? (
              [...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="w-full h-60 bg-gray-200 rounded-lg animate-pulse"
                />
              ))
            ) : isError ? (
              <p>
                Error:
                {error instanceof Error
                  ? error.message
                  : "Unknown error occurred"}
              </p>
            ) : locations && locations.length > 0 ? (
              locations.map((productItem) => (
                <ContactsTile product={productItem} key={productItem.city} />
              ))
            ) : (
              <p>No office locations available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
