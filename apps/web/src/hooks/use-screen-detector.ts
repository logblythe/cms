import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [windowSize, setWindowSize] = useState<{
    width?: number;
    height?: number;
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Don't forget to remove event listener on cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isTablet = (windowSize.width ?? 0) < 1024;
  const isMobile = (windowSize.width ?? 0) < 768;
  const isDesktop = (windowSize.width ?? 0) > 1024;

  return { isMobile, isTablet, isDesktop };
};
