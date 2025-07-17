"use client";

import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Ascend",
    tagline: "Empowering Teachers",
    description:
      "Explore how our products redefine user experiences across digital platforms.",
    image: "/asend.png",
    link: "/products/details",
  },
  {
    id: 2,
    name: "Explenet",
    tagline: "Simplifying Education",
    description:
      "A smart platform for engaging students and enhancing remote learning experiences.",
    image: "/explenet.png",
    link: "/products/explanet",
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1); 

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    // if (v < 0.1) {
    //   setActiveIndex(-1); 
    // } else 
    if (v >= 0.1 && v < 0.35) {
      setActiveIndex(0); 
    } else if (v >= 0.35) {
      setActiveIndex(1); 
    }
  });
  



  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35], [0, 1, 1, 0]);
const scale = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35], [0.8, 1, 1, 0.8]);
const x = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.35], [-200, 0, 0, -200]);


  const secondOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const secondScale = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);
  const secondX = useTransform(scrollYProgress, [0.4, 0.5], [-200, 0]);

  return (
    <div className="bg-black text-white relative ">
      {/* Header */}
      <div className="text-center py-24 bg-black">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Products
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business through technology, design, and marketing.
        </p>
      </div>

      {/* Scrollable container */}
      <div ref={scrollRef} className="relative h-[400vh] mt-[-80px] ">
        {/* Sticky container */}
        <div className="sticky top-0 min-h-screen flex items-center justify-center">
          {/* First Product */}
          {activeIndex === 0 && (
            <motion.div
              style={{ opacity, scale, x, position: "absolute" }}
              className="flex flex-col items-center justify-center text-center p-6 max-h-[90vh] overflow-y-auto"
            >
              <ProductCard product={products[0]} router={router} />
            </motion.div>
          )}

          {/* Second Product */}
          {activeIndex === 1 && (
            <motion.div
              style={{ opacity: secondOpacity, scale: secondScale, x: secondX, position: "absolute" }}
              className="flex flex-col items-center justify-center text-center p-6 max-h-[90vh] overflow-y-auto"
            >
              <ProductCard2 product={products[1]} router={router} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}



function ProductCard({ product, router }) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 ">
      {/* Product Image */}
      <div className="absolute hidden lg:block top-1   bottom-[calc(50%-20px)] right-[calc(25%-100px)] w-[200px] h-[200px] rounded-full overflow-hidden  shadow-lg">
        <Image
          src={product.image}
          width={320}
          height={320}
          alt={`${product.name} Logo`}
          className="object-cover w-full h-full"
        />
      </div>

   
<motion.h1
  className="text-5xl md:text-8xl font-light mb-6 tracking-tight flex justify-center z-10"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
    hidden: {},
  }}
>
  {product.name.split("").map((letter, index) => (
    <motion.span
      key={index}
      className="inline-block text-shadow-lg text-gray-50 
 "
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {letter}
    </motion.span>
  ))}
</motion.h1>


   
      <motion.p
        className="text-lg md:text-2xl text-white mb-8 max-w-2xl leading-relaxed z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <span className="font-semibold">{product.tagline}</span>
        <br />
        {product.description}
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() => router.push(product.link)}
        className="px-8 py-3 text-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold shadow-md transition duration-300 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        Learn more →
      </motion.button>
    </div>
  );
}



function ProductCard2({ product, router }) {
  return (
    <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 ">
      {/* Product Image */}
      <div className="absolute  bottom-79 right-[calc(13%-100px)]  w-[350px] h-[220px] shadow-lg hidden lg:block ">
  <Image
    src={product.image}
    width={420}
    height={420}
    alt={`${product.name} Logo`}
    className="object-contain w-full  h-full"
  />
</div>


   
<motion.h1
  className="text-5xl md:text-8xl font-light mb-6 tracking-tight flex justify-center z-10"
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
    hidden: {},
  }}
>
  {product.name.split("").map((letter, index) => (
    <motion.span
      key={index}
      className="inline-block text-shadow-lg text-gray-50 
 "
      variants={{
        hidden: { opacity: 0, scale: 0.5, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {letter}
    </motion.span>
  ))}
</motion.h1>


   
      <motion.p
        className="text-lg md:text-2xl text-white mb-8 max-w-2xl leading-relaxed z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <span className="font-semibold">{product.tagline}</span>
        <br />
        {product.description}
      </motion.p>

      {/* CTA Button */}
      <motion.button
        onClick={() => router.push(product.link)}
        className="px-8 py-3 text-lg text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full font-semibold shadow-md transition duration-300 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      >
        Learn more →
      </motion.button>
    </div>
  );
}
