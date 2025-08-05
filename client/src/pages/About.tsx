import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import AboutAwards from "@/components/Main-view/About/AboutAwards";
import { getAdminBySlug, getAllAdmins } from "@/lib/sanityqueries";
import client from "@/lib/sanityclient";
import { useQuery } from "@tanstack/react-query";
import AboutTile from "@/components/Main-view/About/Abouttile";
import AboutAdmin from "@/components/Main-view/About/AboutAdmin";
import type { TypedObject } from "@portabletext/types";

export interface Admins {
  name: string;
  slug: { current: string };
  role: string;
  images?: {
    asset: { _id: string; url: string };
    alt?: string;
  }[];
  bio: TypedObject[];
}

const About = () => {
  const organization = [
    {
      organization: "Webby Awards",
      number: "/145",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/634c32e4760016503c6645007cbd8dd167ed8918-720x961.jpg?w=720&fm=webp&q=65",
    },
    {
      organization: "Adweek",
      number: "/01",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/f931e215fe5ffa0a0192bb2ae2ca6252ac148032-720x961.jpg?w=1024&fm=webp&q=65",
    },
    {
      organization: "Awwwards",
      number: "/28",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/5aee005b3dcbd47214986150c2af0cfe827f9900-720x960.jpg?w=720&fm=webp&q=65",
    },
    {
      organization: "D&AD",
      number: "/01",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/c9b5f20bfe950adba7939bfe2a63890a3c56d2c6-720x961.jpg?w=720&fm=webp&q=65",
    },
    {
      organization: "one show",
      number: "/05",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/7f49cb797e6c168f4328992fc3e1f0252a297b04-720x900.jpg?w=720&fm=webp&q=65",
    },
    {
      organization: "the fwa",
      number: "/09",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/6cd7201fefa821edbb8ebf47e6d100e8e921e2d8-720x961.jpg?w=720&fm=webp&q=65",
    },
    {
      organization: "Comm Awards",
      number: "/04",
      image:
        "https://cdn.sanity.io/images/8nn8fua5/production/b2bfc8aeb62ee863c983db40cae6c6ed78dfbc64-720x961.jpg?w=720&fm=webp&q=65",
    },
  ];
  const [openAbout, setOpenAbout] = useState(false);
  const [openAwards, setOpenAwards] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  ///images on second section
  const [hovered, setHovered] = useState(null);

  ////using reactt query to fetch officcess from sanity
  const fetchAdmins = async () => {
    const data = await client.fetch(getAllAdmins);
    return data;
  };

  // Use React Query
  const {
    data: admins,
    isLoading,
    isError,
    error,
  } = useQuery<Admins[]>({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
  });

  const handleGetAdminDetails = (index: number) => {
    setOpenAbout(true);
    setCurrentIndex(index);
    console.log("Clicked", index);
  };

  ///this is the function to open the awards table on click
  const handleOpenAwards = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpenAwards(true);
  };

  ///the 3 funcs below display the images when the texts are hovered on
  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index); // Set the hovered link index
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null); // Reset the hovered link index
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    if (hoveredIndex === index) {
      // Update the mouse position only if the link is hovered
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const images = [
    {
      src: "https://cdn.sanity.io/images/8nn8fua5/production/efe6bb29a36ac6c1c3910e05109a8fcdff26f110-720x900.jpg?w=720&amp;fm=webp&amp;q=65",
      position: "top-0 right-40",
    },
    {
      src: "https://cdn.sanity.io/images/8nn8fua5/production/f249af15eb93ccb7f8a796bfd04002670ee49870-720x900.jpg?w=720&amp;fm=webp&amp;q=65",
      position: "top-20 right-10",
    },
    {
      src: "https://cdn.sanity.io/images/8nn8fua5/production/8629b3f04cae6cff3fa18289b6eee4fd40c4f4e8-720x903.jpg?w=720&amp;fm=webp&amp;q=65",
      position: "top-10 left-18",
    },
    {
      src: "https://cdn.sanity.io/images/8nn8fua5/production/ead0a1be85db6e308cff0308de4a03f1d39a02a9-720x903.jpg?w=720&amp;fm=webp&amp;q=65",
      position: "top-36 left-24",
    },
  ];

  const BASE_Z_INDEX = 10;

  return (
    <div className="bg-[var(--secColor)] px-6 sm:px-8 lg:px-10 py-10">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <div className="mx-auto max-w-6xl text-[var(--priColor)]">
        <section>
          <h1 className="text-5xl font-bold uppercase block lg:flex flex-col">
            <div className="block lg:flex items-center mb-2">
              <span className="">
                <span>We</span>&nbsp; <span>turn</span>&nbsp;{" "}
                <br className="hidden lg:block" />
                <span>cultural</span>&nbsp; <br className="hidden lg:block" />
                <span>value</span>
              </span>
              <span className="flex mt-0 lg:mt-40">
                <span className="ml-auto text-right" data-dot="true">
                  ●<span>into</span>&nbsp; <br className="hidden lg:block" />
                  <span>company</span>&nbsp;
                  <br className="hidden lg:block" />
                  <span>value</span>
                </span>
              </span>
            </div>
          </h1>

          <p className="text-2xl font-bold lg:w-1/2 ml-auto mt-10">
            <strong>BASIC/DEPT®</strong> is a global agency that thrives at the
            intersection of design, data, and technology. Together, we’re
            focused on transforming brands and culture — across the world.
          </p>
        </section>

        <section className="relative my-6 md:my-8 lg:my-12">
          <div>
            <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
            <div className="flex flex-row justify-between uppercase my-10">
              <div className="font-medium">2010</div>
              <div className="font-medium">Present</div>
              <div className="text-2xl">●</div>
            </div>
          </div>

          <div className=" h-screen relative">
            <ol className="relative">
              {images.map((image, index) => (
                <li
                  className={`absolute ${image.position} w-full transition-transform duration-300`}
                  key={index}
                  style={{
                    zIndex: hovered === index ? 50 : BASE_Z_INDEX + index,
                  }}
                >
                  <div className="relative h-full w-full">
                    <img
                      src={image.src}
                      alt=""
                      // onMouseEnter={() => setHovered(index)}
                      onMouseLeave={() => setHovered(null)}
                      className="w-full h-auto max-w-sm object-contain mx-auto transition-all duration-300 hover:cursor-pointer border-2 border-red-500"
                    />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="my-6 md:my-8 lg:my-12">
          <div>
            <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
            <div className="flex flex-row justify-between uppercase my-10">
              <div className="font-medium">Sec.</div>
              <div className="font-medium">/A</div>
              <div className="text-2xl">●</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] ">
            <div className="mb-12 lg:mb-0">
              <h2 className="uppercase text-4xl font-bold">
                Agency
                <br className="hidden lg:block" /> Snapshot
              </h2>
            </div>

            <div>
              <ul className="grid grid-cols-1 lg:grid-cols-2">
                <li>
                  <div className="">
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      People
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      120+
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      We're a world-class team of diverse individuals who are
                      here to do great work as well as be great to work with.
                    </p>
                  </div>
                </li>

                <li>
                  <div>
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      Global Reach
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      28
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      As part of Dept, we have 28 offices and 1,500+ people
                      across the world dedicated to delivering the best design,
                      strategy, and technology services to our client partners.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      Years
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      10
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      While we’re proud of our history and our{" "}
                      <a href="/about/awards">accomplishments</a>, we’re loyal
                      to our future and not our past.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      Growth
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      168%
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      As Adweek’s 18th fastest growing agency, we’ve
                      strengthened our company with new leadership, talent, and
                      clients the past two years.{" "}
                      <a href="/careers">We’re hiring</a> btw.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      Services
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      05
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      Strategy. Brand Experience. Digital Experience. Content.
                      Technology. We’re uniquely built to{" "}
                      <a href="/services">build brands</a> that matter in
                      culture.
                    </p>
                  </div>
                </li>
                <li>
                  <div>
                    <h6 className="uppercase text-xl md:text-2xl lg:text-3xl font-semibold lg:font-bold mb-6">
                      Ranking
                    </h6>
                    <span className="text-5xl md:text-7xl lg:text-8xl font-semibold lg:font-bold mb-8">
                      01
                    </span>
                    <p className="w-3/4 text-base lg:text-lg mb-6">
                      Within the mobile and website related categories, no other
                      agency has been recognized by the Webby Awards more than
                      us the past four years.{" "}
                      <a href="/case-studies">Explore our work</a>.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-6 md:my-8 lg:my-12">
          <div>
            <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
            <div className="flex flex-row justify-between uppercase my-10">
              <div className="font-medium">Sec.</div>
              <div className="font-medium">/B</div>
              <div className="text-2xl">●</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%]">
            <div className="col">
              <h2 className="text-3xl lg:text-4xl uppercase font-semibold lg:font-bold mb-12 lg:mb-0">
                Capabilities
              </h2>
            </div>

            <div>
              <ul className="grid grid-cols-[40%_40%] gap-20 lg:gap-40 leading-7">
                <li>
                  <div>
                    <h2 className="text-lg lg:text-xl font-semibold lg:font-bold uppercase mb-4">
                      CX, Commerce, &amp; Product Design
                    </h2>
                    <div className="text-base lg:text-lg font-medium lg:font-semibold">
                      <p>Market Analysis &amp; Business Case Development</p>
                      <p>Customer Research, Segmentation &amp; Insights</p>
                      <p>Journey Mapping &amp; Testing</p>
                      <p>Innovation Sprints &amp; Prototyping</p>
                      <p>Experience Strategy &amp; Design</p>
                      <p>Content Strategy &amp; IA</p>
                      <p>Design Systems &amp; Guidelines</p>
                      <p>Website &amp; App Design</p>
                      <p>UI Design</p>
                      <p>Interaction Design</p>
                      <p>Full-Stack Development &amp; CMS Implementation</p>
                      <p>Technical Consultation and Architecture</p>
                    </div>
                  </div>
                </li>

                <li>
                  <div>
                    <h2 className="text-lg lg:text-xl font-semibold lg:font-bold uppercase mb-4">
                      Digital-First Branding
                    </h2>
                    <div className="text-base lg:text-lg font-medium lg:font-semibold">
                      <p>Brand Ecosystem &amp; Roadmap</p>
                      <p>Business Intelligence</p>
                      <p>Brand Positioning &amp; Architecture</p>
                      <p>Brand Messaging</p>
                      <p>Visual Identity</p>
                      <p>Brand Guidelines &amp; Playbooks</p>
                      <p>Visual Design</p>
                      <p>Graphic Design</p>
                      <p>Art Direction</p>
                      <p>
                        Asset Production (Video, 3D, Photography, Motion Design)
                      </p>
                      <p>Brand Naming</p>
                      <p>Go-To-Market Strategy</p>
                      <p>Campaign Development</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="my-6 md:my-8 lg:my-12">
          <div>
            <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
            <div className="flex flex-row justify-between uppercase my-6 lg:my-10">
              <div className="font-medium">Sec.</div>
              <div className="font-medium">/C</div>
              <div className="text-2xl">●</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] my-14 lg:my-28">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold uppercase mb-6 md:mb-8 lg:mb-10">
              <h2>Awards</h2>
            </div>
            <div className="w-full lg:w-1/2 text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold">
              <p>
                While results are what matter most, we believe awards bring
                value and recognition to organizations as well as individuals.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="leading-10 navigation-wrapper">
              {organization.map((org, index) => (
                <div
                  className="relative navigation-item"
                  key={org.organization}
                >
                  <a
                    href="/about/awards"
                    onClick={handleOpenAwards}
                    className="navigation-link"
                    style={{
                      zIndex: hoveredIndex === index ? 3 : 1, // Bring hovered link to the top
                    }}
                  >
                    <span
                      className="text-4xl md:text-6xl lg:text-7xl tracking-widest uppercase font-bold text-[#333]  relatve inline-block"
                      onMouseEnter={() => handleMouseEnter(index)} // Handle mouse enter
                      onMouseLeave={handleMouseLeave} // Handle mouse leave
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      data-text={org.organization}
                    >
                      {org.organization}
                    </span>
                    <sup className="">{org.number}</sup>
                  </a>
                  <div
                    className="hover-reveal"
                    style={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      top: mousePosition.y,
                      left: mousePosition.x,
                      zIndex: 2,
                    }}
                  >
                    <div className="hover-reveal-inner">
                      <div
                        className="hover-reveal-image"
                        style={{
                          backgroundImage: `url(${org.image})`,
                          transform:
                            hoveredIndex === index
                              ? "scale(1, 1)"
                              : "scale(0.8, 0.8)", // Scale image
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div>
            <figure className="bg-priColor h-1 p-0 m-0 align-baseline border-0"></figure>
            <div className="flex flex-row justify-between uppercase my-10">
              <div className="font-medium">Sec.</div>
              <div className="font-medium">/D</div>
              <div className="text-2xl">●</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] my-20">
            <div className="text-2xl md:text-3xl lg:text-4xl font-semibold lg:font-bold uppercase mb-10">
              <h2>
                Team &amp; <br className="hidden lg:block" /> Leadership
              </h2>
            </div>
            <div className="w-full lg:w-1/2 text-xl md:text-2xl lg:text-3xl font-medium lg:font-semibold">
              <p>
                We’re 120+ individuals from across the world driven by bold
                ideas and diverse perspectives. Craft, service, and efficiency
                drive us forward and we see our agency as a place for our shared
                values to collide.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {admins && admins.length > 0
              ? admins.map((admin, index) => (
                  <AboutTile
                    admin={admin}
                    key={admin.name}
                    handleGetAdminDetails={() => handleGetAdminDetails(index)}
                  />
                ))
              : null}
          </ul>
        </section>

        {admins && admins.length > 0 && (
          <AboutAdmin
            admin={admins[currentIndex]}
            open={openAbout}
            setOpen={setOpenAbout}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            admins={admins}
            setSelectedSlug={setSelectedSlug}
          />
        )}

        <AboutAwards open={openAwards} setOpen={setOpenAwards} />
      </div>
    </div>
  );
};

export default About;
