"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Career", href: "career" },
  { label: "Resources", href: "career" },
];

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();
    const preventKeys = (e) => {
      if (
        ["ArrowUp", "ArrowDown", "Space", "PageUp", "PageDown"].includes(e.key)
      ) {
        e.preventDefault();
      }
    };
  
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
  
      window.scrollTo(0, 0);
  
      window.addEventListener("touchmove", preventScroll, { passive: false });
      window.addEventListener("keydown", preventKeys);
      window.addEventListener("wheel", preventScroll, { passive: false }); // 🚫 Mouse wheel
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
  
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
      window.removeEventListener("wheel", preventScroll);
    }
  
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
  
      window.removeEventListener("touchmove", preventScroll);
      window.removeEventListener("keydown", preventKeys);
      window.removeEventListener("wheel", preventScroll);
    };
  }, [isOpen]);
  
  



  const menuVariants = {
    hidden: { clipPath: "circle(0% at 0% 0%)", opacity: 0 },
    visible: {
      clipPath: "circle(150% at 0% 0%)",
      opacity: 1,
      transition: { duration: 0.7, ease: "easeInOut" },
    },
    exit: {
      clipPath: "circle(0% at 0% 0%)",
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 + i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="absolute top-4 right-4 z-[999]">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.button
              key="open"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
              className="text-white"
            >
              <Menu size={32} />
            </motion.button>
          ) : (
            <motion.button
              key="close"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="text-white"
            >
              <X size={32} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="absolute inset-0 h-screen w-screen bg-black text-white z-[998] flex flex-col items-end justify-start pt-24 overflow-y-auto"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={`${link.label}-${i}`}
                href={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={() => setIsOpen(false)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group w-full max-w-5xl px-10 py-8 text-right transition-colors duration-300 relative"
              >
                {/* Animated Text Swap */}
                <div className="relative inline-block w-full text-right overflow-hidden h-[48px]">
                  {/* Normal Text */}
                  <motion.span
                    initial={false}
                    animate={{
                      y: hoveredIndex === i ? "-100%" : "0%",
                      opacity: hoveredIndex === i ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block text-4xl font-light uppercase tracking-wide absolute inset-0"
                  >
                    {link.label}
                  </motion.span>

                  {/* Bold Text */}
                  <motion.span
                    initial={false}
                    animate={{
                      y: hoveredIndex === i ? "0%" : "100%",
                      opacity: hoveredIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="block text-4xl font-bold uppercase tracking-wide absolute inset-0"
                  >
                    {link.label}
                  </motion.span>
                </div>

                {/* Default line with animated hover underline */}
                <div className="w-full h-[1px] bg-white/20 mt-4 relative overflow-hidden">
                  <motion.div
                    initial={false}
                    animate={{
                      scaleX: hoveredIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute top-0 left-0 w-full h-[2px] bg-white origin-right"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
