"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children, onScroll }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 2.5,
      smooth: true,
      smoothTouch: false,
      direction: "vertical",
      gestureDirection: "vertical",
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    // Call onScroll whenever Lenis scrolls
    lenis.on("scroll", (e) => {
      if (onScroll) {
        onScroll(e); // { scroll, limit, velocity, ... }
      }
    });

    return () => {
      lenis.destroy();
    };
  }, [onScroll]);

  return <>{children}</>;
}
