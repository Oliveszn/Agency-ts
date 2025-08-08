// this hook is to hancle those cursors that change, when you get to a particular section
import { useEffect, useRef, useState } from "react";

interface UseCursorProps {
  containerRef: React.RefObject<HTMLElement | null>;
  smoothness?: number; // How smooth the cursor follows (default: 9)
}

export const useCursor = ({ containerRef, smoothness = 9 }: UseCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let posX = 0,
      posY = 0,
      mouseX = 0,
      mouseY = 0;
    let animationFrameId: number;

    const animate = () => {
      posX += (mouseX - posX) / smoothness;
      posY += (mouseY - posY) / smoothness;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${posX}px`;
        cursorRef.current.style.top = `${posY}px`;
      }
      animationFrameId = requestAnimationFrame(animate);
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (containerRef.current?.contains(e.target as Node)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [containerRef, smoothness]);

  const handleMouseEnter = () => setIsActive(true);
  const handleMouseLeave = () => setIsActive(false);

  return {
    cursorRef,
    isActive,
    handleMouseEnter,
    handleMouseLeave,
  };
};
