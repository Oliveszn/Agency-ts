import type { OfficeLocation } from "@/pages/Contact";
import { useEffect, useState } from "react";

interface ContactTileProp {
  product: OfficeLocation;
}

const ContactsTile = ({ product }: ContactTileProp) => {
  const [currentTime, setCurrentTime] = useState<string>("");
  const cityTimezones: Record<string, string> = {
    "St. Louis": "America/Chicago",
    Argentina: "America/Argentina/Buenos_Aires",
    Amsterdam: "Europe/Amsterdam",
    London: "Europe/London",
    Berlin: "Europe/Berlin",
    "Bay Area": "America/Los_Angeles",
    "San Diego": "America/Los_Angeles",
    "New York": "America/New_York",
  };

  useEffect(() => {
    const updateCurrentTime = () => {
      // Use city-based timezone mapping instead of product.timeZone
      const timeZone = cityTimezones[product.city] || "UTC";

      const formatter = new Intl.DateTimeFormat("en-US", {
        timeZone: timeZone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZoneName: "short",
      });

      const formattedTime = formatter.format(new Date());
      setCurrentTime(formattedTime);
    };

    updateCurrentTime();
    const interval = setInterval(updateCurrentTime, 1000);

    return () => clearInterval(interval);
  }, [product.city]);

  return (
    <div className="uppercase lg:max-w-none max-w-sm">
      <picture>
        <img
          src={product.mainImage?.asset.url}
          className="w-full h-auto object-contain max-w-sm lg:max-w-none"
          alt="locations"
          loading="lazy"
        />
      </picture>
      <div className="grid grid-cols-2 ">
        <h1 className="text-[#252422] text-xl lg:text-2xl font-semibold lg:font-bold">
          {product.city}
        </h1>

        <span className="blinking text-[var(--secColor)] text-base font-normal lg:font-medium text-right">
          {currentTime}
        </span>
      </div>

      <p className="flex mt-6 text-[#252422] font-medium text-sm w-3/4">
        {product.address}
      </p>
    </div>
  );
};

export default ContactsTile;
