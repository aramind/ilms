import { useEffect, useState } from "react";

const useIsLandsCape = () => {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLandscape(window.innerWidth > window.innerHeight);
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isLandscape;
};

export default useIsLandsCape;
