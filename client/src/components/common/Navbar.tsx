import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAppSelector } from "@/store/hooks";

gsap.registerPlugin(ScrollTrigger);

const Navbar = () => {
  const navTheme = useAppSelector((state) => state.theme.navTheme);
  ///nav menu links
  let links = [
    { name: "WORK", link: "/work" },
    { name: "ABOUT", link: "/about" },
    { name: "NEWS", link: "/news" },
    { name: "THINKING", link: "/thinking" },
    { name: "CAREERS", link: "/careers" },
    { name: "CONTACT", link: "/contact" },
  ];
  let [openNav, setOpenNav] = useState(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  ////color schemes to alternate nav colors on diff pages
  const colorSchemes = {
    transparent: {
      background: "bg-transparent",
      text: "text-[var(--tetColor)]",
      logoFill: "fill-[var(--tetColor)]",
    },
    white: {
      background: "bg-[var(--tetColor)]",
      text: "text-[var(--secColor)]",
      logoFill: "fill-[var(--secColor)]",
    },
    black: {
      background: "bg-[var(--secColor)]",
      text: "text-[var(--priColor)]",
      logoFill: "fill-[var(--priColor)]",
    },
  };
  const currentScheme = colorSchemes[navTheme];

  ///gsap animation to reveal and hide navbar
  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    ScrollTrigger.create({
      start: "top -80",
      end: 99999,
      onUpdate: (self) => {
        ///so we use self-direction to detect scroll, -1 for up 1 for down
        if (self.direction === -1) {
          // while up show navbar
          gsap.to(navbar, {
            yPercent: 0,
            duration: 0.5,
            ease: "power2.out",
          });
        } else {
          // while down hide navbar
          gsap.to(navbar, {
            yPercent: -100,
            duration: 0.5,
            ease: "power2.out",
          });
        }
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  //to prevent scrolling when menu is openNaved
  useEffect(() => {
    if (openNav) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount (optional)
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [openNav]);

  return (
    <nav
      className={`w-full z-50 shadow-sm px-6 sm:px-8 lg:px-10  ${currentScheme.background} sticky top-0`}
      ref={navbarRef}
    >
      <div className="grid grid-cols-2 xl:grid-cols-[25%_75%] py-6 mx-auto max-w-7xl items-center">
        <div className="cursor-pointer">
          <Link to="/">
            <figure>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 208.3 27.7"
                width="160"
                height="60"
                className={currentScheme.logoFill}
              >
                <path d="M0 24.1h11.7c5.5 0 8.7-2.3 8.7-6.8 0-2.8-1.7-4.5-4.1-5.3 2-.9 3.4-2.6 3.4-5.3 0-3.5-2.2-5.9-7.5-5.9H0zM13.1 7.9c0 1.6-1 2.4-3.2 2.4H6.4V5.5h3.5c2.2 0 3.2.8 3.2 2.4m.7 9c0 1.7-1 2.4-3.3 2.4H6.4v-4.9h4.2c2.2 0 3.2.8 3.2 2.5M38.2 24.1h6.7L36.8.7h-8.4l-8.1 23.4h6.5l1.2-3.8h9.1zM32.5 5.9l2.9 9.5h-5.9zM55.1 24.5c6.3 0 10.3-3 10.3-7.7 0-3.8-2.5-5.8-6.5-6.6l-5.1-1c-2-.4-2.6-1-2.6-2.1S52.4 5 54.5 5c2.4 0 4.1 1 4.2 3.1H65C65 2.5 60.3.3 54.5.3c-5.6 0-9.7 2.8-9.7 7.3 0 3.8 2.5 5.8 6.5 6.6l5.1 1c2 .4 2.6 1 2.6 2.1 0 1.5-1.4 2.3-3.7 2.3-2.6 0-4.5-1.3-4.6-3.8h-6.3c.2 5.5 3.7 8.7 10.7 8.7M67.3 24.1h6.4V.7h-6.4zM82 12.4c0-3.9 2.1-6.8 5.6-6.8 2.9 0 4.7 1.7 5.1 3.7h6.7C98.8 3.2 93.6.2 87.7.2 80 .2 75.4 5 75.4 12.3s4.5 12.1 12.3 12.1c6 0 11.2-2.9 11.8-9.1h-6.7c-.4 2.1-2.1 3.7-5.1 3.7-3.6.2-5.7-2.7-5.7-6.6M113.7 0h-5.2l-10 27.7h5.2zM137.8 12.4c0-6.6-3.6-11.7-12.8-11.7h-9.8v23.4h9.8c9.2 0 12.8-5.1 12.8-11.7m-6.6 0c0 4.6-2.6 6.3-6.2 6.3h-3.3V6.1h3.3c3.6 0 6.2 1.7 6.2 6.3M139.5 24.1H158v-5.3h-12.2v-4h10.7V9.7h-10.7V6.1h11.9V.7h-18.2zM180 8.9c0-5.9-3.8-8.1-9.6-8.1h-10.1v23.4h6.4V17h3.8c5.7 0 9.5-2.2 9.5-8.1m-6.6 0c0 2.3-1.1 3.2-3.7 3.2h-3.1V5.6h3.1c2.6 0 3.7 1 3.7 3.3M181 6.2h7.4v17.9h6.4V6.2h7.4V.7H181zM203.5 23.7c-2.6 0-4.8-2.1-4.8-4.8 0-2.6 2.1-4.8 4.8-4.8s4.8 2.1 4.8 4.8c0 2.6-2.2 4.8-4.8 4.8m0-8.8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4"></path>
                <path d="M204 17.2h-1.4v1.6h1.4c.5 0 .7-.3.7-.8s-.3-.8-.7-.8m-.1-.8c1.2 0 1.8.5 1.8 1.6 0 .6-.3 1.1-.9 1.3l1.2 1.8h-1.2l-1.1-1.6h-1.2v1.6h-1.1v-4.7z"></path>
              </svg>
            </figure>
          </Link>
        </div>

        <div
          onClick={() => setOpenNav(!openNav)}
          className={`text-lg cursor-pointer xl:hidden ml-auto ${currentScheme.text}`}
        >
          <button aria-label="Toggle navigation menu" aria-expanded={openNav}>
            MENU
          </button>
        </div>

        <div className="grid grid-cols-[70%_30%] items-center">
          <ul
            className={`xl:pl-0 pl-9 xl:pb-0 pb-12 z-50 left-0 w-full xl:w-auto xl:z-auto xl:flex xl:justify-between xl:items-center xl:static transition-all duration-500 ease-in xl:bg-transparent fixed ${
              openNav
                ? `top-0 left-0 w-full h-full z-50 ${currentScheme.background} opacity-100`
                : "top-[-490px] opacity-0 md:opacity-100"
            } `}
          >
            {links.map((item) => (
              <li
                key={item.name}
                className={`xl:my-0 my-7 hover:opacity-70 transition-all duration-200 ${
                  currentScheme.text
                } ${openNav ? "text-xl font-bold " : "lg:text-base "}`}
              >
                <NavLink
                  to={item.link}
                  key={item.name}
                  className={({ isActive }) =>
                    `relative inline-block after:block after:content-[''] after:absolute after:h-[2px] after:bg-gray-600 after:transition-all after:duration-300 after:left-0 after:bottom-[-2px] 
                   ${
                     isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
                   }`
                  }
                  onClick={() => setOpenNav(false)} // Close menu on link click
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <li
              className={`hover:underline text-2xl font-bold xl:hidden uppercase text-priColor ${currentScheme.text}`}
            >
              <Link to="/initiatives">initiatives</Link>
            </li>
          </ul>

          <div className="ml-auto cursor-pointer">
            <figure className="hidden xl:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 21 5"
                width="25"
                height="5"
                className={currentScheme.logoFill}
              >
                <circle cx="2.5" cy="2.5" r="2.5"></circle>
                <circle cx="10.5" cy="2.5" r="2.5"></circle>
                <circle cx="18.5" cy="2.5" r="2.5"></circle>
              </svg>
            </figure>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
