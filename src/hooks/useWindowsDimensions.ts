import { useState, useEffect } from "react";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useWindowDimensions() {
  const hasWindow = typeof window !== "undefined";

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  // eslint-disable-next-line func-names
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (hasWindow) {
      // eslint-disable-next-line no-inner-declarations
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [hasWindow]);

  return windowDimensions;
}
