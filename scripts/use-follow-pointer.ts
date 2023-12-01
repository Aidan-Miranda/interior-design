import { useState, RefObject, useEffect } from "react";

export function useFollowPointer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e:any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const updatePosition = () => {
      updateMousePosition;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, []);

  return mousePosition;
}