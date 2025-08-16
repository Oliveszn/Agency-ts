///this hook is for the hover you see on buttons
import { gsap } from "gsap";
import { useRef } from "react";

//func for handling button hover

export const useHoverButton = () => {
  const overlayRef = useRef<HTMLSpanElement | null>(null);

  const handleButtonHover = (isHovering: boolean) => {
    const overlay = overlayRef.current;
    if (!overlay) return;
    gsap.to(overlay, {
      scaleY: isHovering ? 1 : 0,
      duration: 0.4,
      ease: isHovering ? "power2.out" : "power2.in",
    });
  };
  const handleMouseEnter = () => handleButtonHover(true);
  const handleMouseLeave = () => handleButtonHover(false);

  return { overlayRef, handleMouseEnter, handleMouseLeave };
};
