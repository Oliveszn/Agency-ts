import type { OfficeLocation } from "@/pages/Contact";
import React, { useEffect, useState } from "react";

interface ContactTileProp {
  product: OfficeLocation;
}

const ContactsTile = ({ product }: ContactTileProp) => {
  const [currentTime, setCurrentTime] = useState();

  //   useEffect(() => {
  //     const updateCurrentTime = () => {
  //       const formatter = new Intl.DateTimeFormat("en-US", {
  //         timeZone: product.timeZone,
  //         hour: "2-digit",
  //         minute: "2-digit",
  //         hour12: true,
  //         timeZoneName: "short", // Get the timezone abbreviation (e.g., PST, CET)
  //       });

  //       const formattedTime = formatter.format(new Date());
  //       setCurrentTime(formattedTime); // Ensure it is a string
  //     };

  //     updateCurrentTime();
  //     const interval = setInterval(updateCurrentTime, 1000); // Update every second

  //     return () => clearInterval(interval); // Cleanup on unmount
  //   }, [product.timeZone]);

  return (
    <div className="uppercase lg:max-w-none max-w-sm">
      <picture>
        <img
          src={product.mainImage?.asset.url}
          className="w-full h-auto object-contain max-w-sm lg:max-w-none"
          alt="locations"
        />
      </picture>
      <div className="grid grid-cols-2 ">
        <h1 className="text-[#252422] text-xl lg:text-2xl font-semibold lg:font-bold">
          {product.city}
        </h1>

        {/* <span className="blinking text-[#848382] text-base font-normal lg:font-medium text-right">
          {currentTime}
        </span> */}
      </div>

      <p className="flex mt-6 text-[#252422] font-medium text-sm w-3/4">
        {product.address}
      </p>
    </div>
  );
};

export default ContactsTile;
