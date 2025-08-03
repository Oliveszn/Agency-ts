import { useAppDispatch } from "@/store/hooks";
import { setNavTheme } from "@/store/navbar-slice";
import type { PageProps } from "@/utils/types";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const Careers = ({ navTheme = "black" }: PageProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavTheme(navTheme));
  }, [navTheme, dispatch]);
  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet>
        <title>Design & Branding Jobs</title>
      </Helmet>
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2">
        <div className="lg:mt-24 text-[var(--priColor)] uppercase flex flex-col items-start">
          <h1 className="mb-20 lg:mb-40">
            <div className="text-5xl lg:text-7xl font-semibold lg:font-bold">
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="">Make</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="">Dope</span>
              </span>
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="">Sh*t.</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="pr-20">●</span>
                <span className="">Get</span>
              </span>
              <br />
              <span className="inline-block pr-[0.15em] -mt-[2em]">
                <span className="">Paid.</span>
              </span>
            </div>
          </h1>

          <div className="text-xs lg:text-sm leading-none mb-20">
            Make great work.
            <br />
            Work with great people.
            <br />
            BASIC/DEPT®, Inc 10 - 24©
          </div>
        </div>

        <div className="">
          <div className="mb-20 lg:mb-32">
            <img
              src="https://cdn.sanity.io/images/8nn8fua5/production/a9848ed1a719d650ff4786ffdfd1345ede200f38-1736x2430.jpg?w=720&amp;fm=webp&amp;q=65"
              alt="cover"
              loading="lazy"
              className="w-full h-auto mx-auto"
            />
          </div>

          <div className=" text-[var(--priColor)]">
            <p className="text-2xl lg:text-3xl font-semibold">
              As part of Dept, we operate offices across the world. We’re always
              looking to connect with individuals who want to make the best work
              of their lives with the world’s greatest brands. If you’re
              interested in working with us or learning more, drop us a note,
              portfolio link, or résumé. We’ll take anything you’ve got.
            </p>
            <span>●</span>
            <br />

            <a
              className="relative inline-flex overflow-hidden items-center pt-1 px-8 pb-0 border-[1.6px] rounded-2xl uppercase hover:text-black z-10
             hover:bg-priColor duration-1000"
              target=""
              rel="noreferrer"
              href="mailto:recruitment@basicagency.com"
            >
              Apply Here
              <figure>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 8.4 8.4"
                  width={15}
                  height={15}
                >
                  <path d="m8.4 0-.1 3.6h-.7l-.2-1.9L.7 8.4 0 7.8 6.8 1l-2-.1V.1z"></path>
                </svg>
              </figure>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
