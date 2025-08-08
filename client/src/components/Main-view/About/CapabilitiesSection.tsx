const CapabilitiesSection = () => {
  return (
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
  );
};

export default CapabilitiesSection;
