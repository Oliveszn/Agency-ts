import { organization } from "@/config/aboutconfig";
import { useHoverReveal } from "@/hooks/useHoverReveal";

interface AwardSectionProps {
  onOpenAwards: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const AwardsSection = ({ onOpenAwards }: AwardSectionProps) => {
  const {
    hoveredIndex,
    mousePosition,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  } = useHoverReveal();
  return (
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
            While results are what matter most, we believe awards bring value
            and recognition to organizations as well as individuals.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="leading-10 navigation-wrapper">
          {organization.map((org, index) => (
            <div className="relative navigation-item" key={org.organization}>
              <a
                href="/about/awards"
                onClick={onOpenAwards}
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
                          : "scale(0.8, 0.8)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
