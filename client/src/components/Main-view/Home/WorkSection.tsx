import { useHoverButton } from "@/hooks/useHoverButton";
import { Link } from "react-router-dom";

const WorkSection = () => {
  const { overlayRef, handleMouseEnter, handleMouseLeave } = useHoverButton();

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10">
      <div>
        <figure className="bg-[var(--secColor)] h-1 p-0 m-0 align-baseline border-0 mb-16 md:my-0"></figure>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="">
          <h3 className="text-xl md:text-2xl lg:text-4xl font-normal lg:font-medium">
            BASIC/DEPT® is a global branding and digital design agency building
            products, services, and eCommerce experiences that turn cultural
            values into company value.
          </h3>
          <p className="mt-10">
            <Link
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              to="/work"
              className="relative inline-block overflow-hidden text-sm font-normal md:font-medium lg:font-semibold border-[1.6px] border-[var(--secColor)] text-black z-10 bg-[var(--tetColor)] rounded-full px-6 py-2 whitespace-nowrap uppercase hover:text-white"
            >
              <span className="relative z-20"> See The Work</span>
              <span
                ref={overlayRef}
                className="absolute left-0 top-0 h-full w-full bg-[var(--secColor)] scale-y-0 origin-bottom z-10"
              />
            </Link>
          </p>
        </div>

        <figure className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 307 100"
            className="size-[300px] md:size-[400px] lg:size-[500px]"
          >
            <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path>
          </svg>
        </figure>
      </div>

      <ul className="image-scroller list-none">
        <li className="image-element group">
          <a href="google.com">
            <div className="">
              <div className=" ">
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=1024&amp;fm=webp&amp;q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/931c4de4f3cbbeb30a5b65677a174f2980e44805-720x900.jpg?w=720&amp;fm=webp&amp;q=65"
                    alt=""
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-95 group-hover:translate-y-2"
                  />
                </picture>
              </div>
            </div>
            <div className="pt-6 uppercase w-full ">
              <h5 className="text-xl lg:text-2xl font-semibold lg:font-bold group-hover:underline">
                Patagonia
              </h5>
              <p className="text-xs lg:text-sm w-1/2">
                An eCommerce experience driven by Patagonia’s brand mission
              </p>
            </div>
          </a>
        </li>

        <li className="image-element group">
          <a href="">
            <div className="">
              <div className="">
                <picture>
                  <source
                    srcSet="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=1024&amp;fm=webp&amp;q=65"
                    media="(min-width: 720px)"
                  />
                  <img
                    src="https://cdn.sanity.io/images/8nn8fua5/production/f1931ee572cd014ca5c3b5fe7e6054cfc0583624-720x900.jpg?w=720&amp;fm=webp&amp;q=65"
                    alt=""
                    className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-95 group-hover:translate-y-2"
                  />
                </picture>
              </div>
            </div>
            <div className="pt-6 uppercase w-full ">
              <h5 className="text-xl lg:text-2xl font-semibold lg:font-bold group-hover:underline">
                Wilson
              </h5>
              <p className="text-xs lg:text-sm w-1/2">
                A century-old sports brand finding its place in culture
              </p>
            </div>
          </a>
        </li>

        <li className="image-element group">
          <a href="">
            <div className="">
              <div className="">
                <video
                  preload="metadata"
                  loop
                  playsInline
                  muted
                  autoPlay
                  src="https://cdn.sanity.io/files/8nn8fua5/production/9dc5a490bd877e8685f2089209db192188dd21e7.mp4"
                  data-can-play="true"
                  className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-95 group-hover:translate-y-2"
                ></video>
              </div>
            </div>
            <div className="pt-6 uppercase w-full ">
              <h5 className="text-xl lg:text-2xl font-semibold lg:font-bold group-hover:underline">
                Google Store
              </h5>
              <p className="text-xs lg:text-sm w-1/2">
                An eCommerce experience helping Google bring its hardware to
                people across the globe
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default WorkSection;
