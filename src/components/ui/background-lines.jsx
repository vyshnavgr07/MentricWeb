"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = ({ children, className }) => {
  return (
    <div
      className={cn(
        "h-[20rem] md:h-screen w-full bg-black dark:bg-black relative overflow-hidden",
        className
      )}
    >
      <SVG />
      {children}
    </div>
  );
};

const directions = [
  { dx: 100, dy: 0 },   // right
  { dx: -100, dy: 0 },  // left
  { dx: 0, dy: -100 },  // up
  { dx: 0, dy: 100 },   // down
  { dx: 70, dy: 70 },   // down-right
  { dx: -70, dy: 70 },  // down-left
  { dx: 70, dy: -70 },  // up-right
  { dx: -70, dy: -70 }, // up-left
];

const colors = [
  "#46A5CA", "#8C2F2F", "#4FAE4D", "#D6590C", "#811010", "#247AFB",
  "#A534A0", "#A8A438", "#46A29C", "#670F6D", "#D7C200", "#59BBEB"
];

const SVG = () => {
  const centerX = 720;
  const centerY = 450;
  const numRibbons = 25;

  const ribbonPaths = React.useMemo(() => {
    return Array.from({ length: numRibbons }).map((_, i) => {
      const direction = directions[i % directions.length];
      const dx = direction.dx;
      const dy = direction.dy;

      const cx1 = centerX + dx * 0.3 + Math.random() * 20 - 10;
      const cy1 = centerY + dy * 0.3 + Math.random() * 20 - 10;
      const cx2 = centerX + dx * 0.6 + Math.random() * 20 - 10;
      const cy2 = centerY + dy * 0.6 + Math.random() * 20 - 10;
      const endX = centerX + dx + Math.random() * 10 - 5;
      const endY = centerY + dy + Math.random() * 10 - 5;

      return {
        path: `M${centerX},${centerY} C${cx1},${cy1} ${cx2},${cy2} ${endX},${endY}`,
        color: colors[i % colors.length],
        delay: Math.random() * 4,
      };
    });
  }, []); // Runs only once

  return (
    <motion.svg
      viewBox="0 0 1440 900"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
    >
      {ribbonPaths.map((ribbon, i) => (
        <motion.path
          key={i}
          d={ribbon.path}
          stroke={ribbon.color}
          strokeWidth={1.2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 0.8, 0.8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ribbon.delay,
          }}
        />
      ))}
    </motion.svg>
  );
};
