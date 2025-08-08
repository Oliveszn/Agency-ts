import { Link } from "react-router-dom";

const AboutUsSection = () => {
  return (
    <section className="section-trigger mt-16 lg:mt-28">
      <div className="grid grod-cols-1 sm:grid-cols-2 ">
        <div className="sm:order-none order-2">
          <div className="uppercase">
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold lg:font-extrabold lg:leading-[4rem] tracking-wider mt-20">
              BASIC/DEPT® helps brands ● connect w/ culture
            </p>
            <br />
            <span className="text-lg lg:text-xl">
              Adweek{" "}
              <strong className="font-semibold md:font-bold lg:font-extrabold">
                Agency Spotlight
              </strong>
              <p className="mt-10 lg:mt-20">
                <Link
                  to="/about"
                  className="text-sm font-normal md:font-medium lg:font-semibold border-[1.6px] border-priColor rounded-full px-6 py-2 whitespace-nowrap"
                >
                  About Us
                </Link>
              </p>
            </span>
          </div>
        </div>
        <div className="sm:order-none order-1">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="6px"
              height="4px"
              viewBox="0 0 866 1214"
            ></svg>
            <video
              preload="metadata"
              loop
              playsInline
              muted
              autoPlay
              src="https://cdn.sanity.io/files/8nn8fua5/production/e4a840ba8dfeded08ac4d0ba6e930be56fc68e3b.mp4"
              data-can-play="true"
              className="w-full h-auto"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
