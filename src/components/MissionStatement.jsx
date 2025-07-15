"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function MissionStatement() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const sentence = [
    "To become a world-class training and resource management organization,",
    "by empowering all stakeholders to connect, communicate,",
    "and control seamlessly through integrated technology.",
  ];

  const wrapperVariant = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-screen w-full bg-black flex items-center justify-center px-6 text-center relative overflow-hidden"
    >
      {/* 🌟 Outer Yellow Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(120px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 150, 0.5) 0%, rgba(255, 213, 0, 0.35) 40%, transparent 70%)`,
          maskImage: `radial-gradient(180px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 80%)`,
          WebkitMaskImage: `radial-gradient(180px at ${mousePosition.x}px ${mousePosition.y}px, white 0%, transparent 80%)`,
          mixBlendMode: "screen",
          transition: "opacity 0.15s ease-out",
          opacity: isHovered ? 1 : 0,
          filter: "blur(2px)",
        }}
      />

      {/* 💡 Inner White Glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(80px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 255, 0.25) 0%, transparent 70%)`,
          mixBlendMode: "overlay",
          transition: "opacity 0.15s ease-out",
          opacity: isHovered ? 1 : 0,
          filter: "blur(1px)",
        }}
      />

      {/* 💬 Animated Text */}
      <motion.div
        className="relative z-20 text-white text-xl md:text-3xl font-light space-y-3 leading-relaxed md:leading-snug max-w-3xl"
        variants={wrapperVariant}
        initial="hidden"
        animate={controls}
      >
        {sentence.map((lineText, idx) => (
          <motion.p key={idx} variants={line}>
            {lineText}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
}
