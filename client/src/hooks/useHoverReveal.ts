///this hook if for the awards part in about page, the part that show image on text hover
import { useState } from "react";

export const useHoverReveal = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleMouseMove = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    index: number
  ) => {
    if (hoveredIndex === index) {
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  return {
    hoveredIndex,
    mousePosition,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseMove,
  };
};
