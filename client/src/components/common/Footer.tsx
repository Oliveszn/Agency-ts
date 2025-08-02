const Footer = () => {
  return (
    <footer className="bg-[var(--secColor)] text-[var(--tetColor)] mt-auto px-6 sm:px-8 lg:px-10">
      <div className="w-full mx-auto max-w-7xl grid grid-cols-1 lg:grid-rows-2 gap-4 md:py-10 lg:py-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start">
          <div>
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 307 100"
                width={70}
                height={70}
              >
                <path d="M0 86.8h41.9c19.6 0 31.3-8.3 31.3-24.5 0-10.2-6-16.2-15.1-19.2 7.2-3.4 12.1-9.4 12.1-19.2 0-12.5-7.9-21.5-27.2-21.5H0zm47.2-58.5c0 5.7-3.8 8.7-11.7 8.7H23V19.6h12.5c8.3 0 11.7 3 11.7 8.7m2.6 32.5c0 6-3.8 8.7-12.1 8.7H22.6V51.7h15.1c8.3.4 12.1 3 12.1 9.1M128.3 0h-18.9L73.6 100h18.5zm88.3 44.5c0-23.8-12.8-42.3-46-42.3h-35.5v84.5h35.5c32.8.1 46-18.4 46-42.2m-24.1 0c0 16.6-9.4 22.6-22.3 22.6h-12.1V21.9h12.1c12.8 0 22.3 6 22.3 22.6M224.2 46.4c0 22.6 18.5 41.1 41.1 41.1s41.1-18.5 41.1-41.1-18.5-41.1-41.1-41.1c-22.7 0-41.1 18.5-41.1 41.1m7.9 0c0-18.9 14.7-34 33.2-34s33.2 15.1 33.2 34-15.1 34-33.2 34c-18.5-.4-33.2-15.5-33.2-34M246 66.8h12.8v-14h7.5l7.5 14h14l-9.4-16.6c4.2-1.9 7.5-6.8 7.5-12.1 0-9.4-6-14-16.6-14h-23.8v42.6h.5zm26.8-28.7c0 3.4-2.3 4.9-6.4 4.9h-7.9v-9h7.9c4.5.3 6.4 1.1 6.4 4.1"></path>
              </svg>
            </figure>
          </div>

          <div>
            <p className="text-lg md:text-2xl lg:text-3xl font-medium lg:font-semibold duration-1000 ease-in text-[var(--tetColor)]">
              We collaborate with ambitious brands and people. Let's build.{" "}
              <a href="mailto:biz@basicagency.com" className="underline">
                biz@basicagency.com
              </a>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between items-start">
          <div className="">
            <h6 className="relative before:content-['●'] before:mr-[0.5em] before:text-lg lg:before:text-3xl text-base lg:text-lg font-normal lg:font-medium uppercase mb-4 duration-1000">
              Stay in the know
            </h6>
            <div>
              <form method="post" className="flex items-center">
                <div>
                  <input
                    className="border-b border-gray-400 focus:outline-none bg-tetColor text-lg lg:text-2xl text-seCColor"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                  <button type="submit">
                    <figure>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 17 17"
                        width={30}
                        height={20}
                      >
                        <path d="M.1 7.5h14v2H.1z"></path>
                        <path d="m8.4 0 8.5 8.5-1.4 1.4L7 1.4z"></path>
                        <path d="m7 15.6 8.5-8.5 1.4 1.4L8.4 17z"></path>
                      </svg>
                    </figure>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="block lg:flex justify-between items-start">
            <div className="mb-4 lg:mb-0">
              <h6 className="relative before:content-['●'] before:mr-[0.5em] before:text-lg lg:before:text-3xl uppercase font-medium lg:font-semibold text-base lg:text-lg mb-6 duration-1000">
                Social
              </h6>
              <ul>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://www.instagram.com/basicagency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Instagram
                  </a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://twitter.com/basicagency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://www.linkedin.com/company/basic-agency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://www.facebook.com/basicagency"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0">
              <h6 className="relative before:content-['●'] before:mr-[0.5em] before:text-lg lg:before:text-3xl uppercase font-medium lg:font-semibold text-base lg:text-lg mb-6 duration-1000">
                Initiatives
              </h6>
              <ul>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://experiencecrafted.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Crafted
                  </a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/thinking/category/applied">Applied</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/thinking/category/brandbeats">Brandbeats</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a
                    href="https://moves.basicagency.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Moves
                  </a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/blog/b-good-initiative-youth-outreach-community-impact-creativity-bipoc">
                    B®/Good
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-4 lg:mb-0">
              <h6 className="relative before:content-['●'] before:mr-[0.5em] before:text-lg lg:before:text-3xl uppercase font-medium lg:font-semibold text-base lg:text-lg mb-6 duration-1000">
                Offices
              </h6>
              <ul>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">San Diego – CA</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">New York – NY</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">Bay Area – CA</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">St. Louis – MO</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">Amsterdam – NL</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">London – EN</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">Berlin – GE</a>
                </li>
                <li className="hover:underline font-extralight md:font-light text-sm md:text-base mb-1">
                  <a href="/contact">Argentina – AR</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col text-center lg:flex-row items-center justify-around shadow-md p-2 text-[#5e5e5e] text-sm">
        <span>BASIC/DEPT®, Inc 10 - 24©</span>
        <span className="uppercase">
          Easy to understand, impossible to ignore.™
        </span>
        <span className="uppercase">
          <a href="/terms-of-use">Terms</a>,
          <a href="/privacy-policy">Privacy Policy</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
