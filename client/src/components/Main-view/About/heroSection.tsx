const HeroSection = () => {
  return (
    <section className="py-4 max-w-full overflow-hidden">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase block lg:flex flex-col leading-tight">
        <div className="lg:flex items-center mb-2">
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

      <div className="mt-8 lg:mt-10">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold lg:w-1/2 lg:ml-auto max-w-full">
          <strong>BASIC/DEPT®</strong> is a global agency that thrives at the
          intersection of design, data, and technology. Together, we're focused
          on transforming brands and culture — across the world.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
