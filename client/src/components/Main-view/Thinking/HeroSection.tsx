const HeroSection = () => {
  return (
    <div className="w-full mb-10">
      <h1 className="grid grid-cols-2 items-center font-semibold mb-10">
        <div className="text-6xl md:text-7xl lg:text-8xl">THINKING</div>
        <div className="text-right text-6xl md:text-8xl lg:text-9xl">
          <span className="">●</span>
        </div>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="mb-8">
          <p className="text-xl uppercase mb-4">
            <strong>Brandbeats®</strong>
          </p>
          <p className="text-lg font-medium">
            Brandbeats® is our agency podcast garnering over 45,000+ listens per
            episode where we discuss industry happenings for 30 minutes as well
            as provide ten tracks of curated music. Our conversations are a
            candid exploration of design topics, branding trends, and
            experiences we're noticing in culture.
          </p>
        </div>

        <div>
          <p className="text-xl uppercase mb-4">
            <strong>Applied®</strong>
          </p>
          <p className="text-lg font-medium">
            Applied® is our panel series and thought-leadership platform where
            we share perspectives and tactics related to strategy, design, and
            technology. The content is raw and driven by honest observations and
            guided questions that use culture to explain why trends exist and
            how they impact business and tech.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
