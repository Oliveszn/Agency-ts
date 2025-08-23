// cwe aare creating this hook to detect devices (if mobile, tab or top)
import { useEffect, useState } from "react";

export const useDeviceDetection = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const detectTouchDevice = () => {
      // here we use multiple methods to detect touch devices
      const hasTouchScreen =
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        (navigator as any).msMaxTouchPoints > 0;

      // we check if its mobile or tablet
      const mobileRegex =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isMobileUserAgent = mobileRegex.test(navigator.userAgent);

      // Additional check for tablet-specific patterns
      const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
        navigator.userAgent
      );

      // Combine checks - if it has touch AND is mobile/tablet, consider it a touch device
      const isTouchDevice = hasTouchScreen && (isMobileUserAgent || isTablet);

      setIsTouchDevice(isTouchDevice);
    };

    detectTouchDevice();

    //this is to recheck on resize although the devices cant or shouldnt change
    window.addEventListener("resize", detectTouchDevice);

    return () => {
      window.removeEventListener("resize", detectTouchDevice);
    };
  }, []);

  return { isTouchDevice };
};
