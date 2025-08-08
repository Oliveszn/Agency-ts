const AgencyStatsSection = () => {
  return (
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
                  We're a world-class team of diverse individuals who are here
                  to do great work as well as be great to work with.
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
                  As part of Dept, we have 28 offices and 1,500+ people across
                  the world dedicated to delivering the best design, strategy,
                  and technology services to our client partners.
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
                  <a href="/about/awards">accomplishments</a>, we’re loyal to
                  our future and not our past.
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
                  As Adweek’s 18th fastest growing agency, we’ve strengthened
                  our company with new leadership, talent, and clients the past
                  two years. <a href="/careers">We’re hiring</a> btw.
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
                  <a href="/services">build brands</a> that matter in culture.
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
                  agency has been recognized by the Webby Awards more than us
                  the past four years.{" "}
                  <a href="/case-studies">Explore our work</a>.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AgencyStatsSection;
