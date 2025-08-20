// this hook is to hancle those cursors that change, when you get to a particular section
import { useEffect, useRef, useState } from "react";

interface UseCursorProps {
  containerRef: React.RefObject<HTMLElement | null>;
  smoothness?: number; // How smooth the cursor follows
}

export const useCursor = ({ containerRef, smoothness = 9 }: UseCursorProps) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const mousePositionRef = useRef({ x: 0, y: 0 });

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
    //this function checks what element is under te cursor
    //there was the issue of the cursor dragging outside the video
    const checkCursorPosition = (clientX: number, clientY: number) => {
      const elementAtPoint = document.elementFromPoint(clientX, clientY);

      if (containerRef.current?.contains(elementAtPoint)) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mousePositionRef.current = { x: e.clientX, y: e.clientY };

      // if (containerRef.current?.contains(e.target as Node)) {
      //   setIsActive(true);
      // } else {
      //   setIsActive(false);
      // }
      checkCursorPosition(e.clientX, e.clientY);
    };
    const handleScroll = () => {
      // Check cursor position on scroll using the last known mouse position
      const { x, y } = mousePositionRef.current;
      checkCursorPosition(x, y);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, true);
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll, true);
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
