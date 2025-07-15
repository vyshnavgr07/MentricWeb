"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MissionStatement() {
  const containerRef = useRef(null);

  const sentence = [
    "To", "become", "a", "world-class", "training", "and", "resource",
    "management", "organization,", "by", "empowering", "all", "stakeholders",
    "to", "connect,", "communicate,", "and", "control", "seamlessly", "through", "integrated", "technology."
  ];

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} className="h-[400vh] bg-black text-white px-6">
      {/* Sticky Sentence Area */}
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div className="text-4xl md:text-5xl font-light italic text-center max-w-6xl leading-snug flex flex-wrap justify-center gap-3">
          {sentence.map((word, index) => {
            const total = sentence.length;
            const animationZone = 0.9; // Animate all words in 90% scroll
            const slice = animationZone / total;
            const start = index * slice;
            const end = start + slice;

            const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
            const scale = useTransform(scrollYProgress, [start, end], [0.9, 1]);
            const brightness = useTransform(scrollYProgress, [start, end], [0.5, 1]);

            return (
              <motion.span
                key={index}
                style={{
                  opacity,
                  scale,
                  filter: `brightness(${brightness.get()})`,
                }}
                className="inline-block transition duration-300"
              >
                {word}&nbsp;
              </motion.span>
            );
          })}
        </div>
      </div>

    </section>
  );
}
