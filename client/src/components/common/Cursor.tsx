import React from "react";

interface CustomCursorProps {
  cursorRef: React.RefObject<HTMLDivElement | null>;
  isActive: boolean;
  text: string;
  backgroundColor?: string;
  textColor?: string;
  backgroundImage?: string;
  className?: string;
}

const CustomCursor: React.FC<CustomCursorProps> = ({
  cursorRef,
  isActive,
  text,
  backgroundColor = "#fff",
  textColor = "#252422",
  backgroundImage,
  className = "",
}) => {
  const baseStyles: React.CSSProperties = {
    position: "fixed",
    background: backgroundColor,
    width: "8px",
    height: "8px",
    borderRadius: "100%",
    zIndex: 9999,
    transition:
      "0.5s cubic-bezier(0.75, -1.27, 0.3, 2.33) transform, 0.2s cubic-bezier(0.75, -1.27, 0.3, 2.33) opacity",
    userSelect: "none",
    pointerEvents: "none",
    transform: isActive ? "scale(12)" : "scale(0.8)",
    opacity: isActive ? 1 : 0,
  };

  const beforeStyles: React.CSSProperties = {
    content: '""',
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "block",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderRadius: "100%",
    opacity: isActive ? 1 : 0,
  };

  const afterStyles: React.CSSProperties = {
    content: `"${text}"`,
    color: textColor,
    position: "absolute",
    fontSize: "0.1rem",
    opacity: isActive ? 1 : 0,
    pointerEvents: "none",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  };

  return (
    <>
      <div
        ref={cursorRef}
        className={`custom-cursor ${className}`}
        style={baseStyles}
      >
        {/* Before pseudo-element replacement */}
        {backgroundImage && (
          <div className="cursor-before" style={beforeStyles} />
        )}

        {/* After pseudo-element replacement */}
        {isActive && (
          <div className="cursor-text" style={afterStyles}>
            {text}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomCursor;
