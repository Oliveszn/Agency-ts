const HeroSection = () => {
  return (
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
        intersection of design, data, and technology. Together, we’re focused on
        transforming brands and culture — across the world.
      </p>
    </section>
  );
};

export default HeroSection;
