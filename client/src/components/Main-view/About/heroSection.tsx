import { useEffect } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Text reveals first
      tl.fromTo(
        ".text-reveal-inner",
        {
          y: "100%",
        },
        {
          y: "0%",
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05, // delay between each text element
        }
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="py-4 max-w-full overflow-hidden">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase block lg:flex flex-col leading-tight">
        <div className="lg:flex items-center mb-2">
          <span className="">
            <span className="text-reveal-item overflow-hidden inline-block">
              <span className="text-reveal-inner inline-block">We</span>
            </span>
            &nbsp;
            <span className="text-reveal-item overflow-hidden inline-block">
              <span className="text-reveal-inner inline-block">turn</span>
            </span>
            &nbsp;
            <br className="hidden lg:block" />
            <span className="text-reveal-item overflow-hidden inline-block">
              <span className="text-reveal-inner inline-block">cultural</span>
            </span>
            &nbsp;
            <br className="hidden lg:block" />
            <span className="text-reveal-item overflow-hidden inline-block">
              <span className="text-reveal-inner inline-block">value</span>
            </span>
          </span>
          <span className="flex mt-0 lg:mt-40">
            <span className="ml-auto text-right" data-dot="true">
              ●
              <span className="text-reveal-item overflow-hidden inline-block">
                <span className="text-reveal-inner inline-block">into</span>
              </span>
              &nbsp;
              <br className="hidden lg:block" />
              <span className="text-reveal-item overflow-hidden inline-block">
                <span className="text-reveal-inner inline-block">company</span>
              </span>
              &nbsp;
              <br className="hidden lg:block" />
              <span className="text-reveal-item overflow-hidden inline-block">
                <span className="text-reveal-inner inline-block">value</span>
              </span>
            </span>
          </span>
        </div>
      </h1>

      <div className="mt-8 lg:mt-10 text-reveal-item overflow-hidden">
        <p className="text-xl md:text-2xl lg:text-3xl font-bold lg:w-1/2 lg:ml-auto max-w-full text-reveal-inner ">
          <strong>BASIC/DEPT®</strong> is a global agency that thrives at the
          intersection of design, data, and technology. Together, we're focused
          on transforming brands and culture — across the world.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
