"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Waves from "../../components/Waves.js/Waves/Waves";
import NavMenu from "./NavMenu";
import FBXViewer from "./FBXViewer";

const AboutUs = () => {
  return (
<div className="relative overflow-hidden overflow-x-hidden h-screen bg-gradient-to-br from-black text-white">

       <Waves
        backgroundColor="rgba(255, 255, 255, 0.05)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={10}
        yGap={36}
      />

<header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 md:px-8 py-4 z-20">
  {/* Left: Logo */}
  <div className="flex items-center space-x-3">
    <Image
      src="/log.png"
      alt="Logo"
      width={140}
      height={50}
      className="object-contain"
    />
  </div>

  {/* Right: Hamburger */}
  <NavMenu />
</header>

      {/* Hero Section */}
      <section className="relative flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-24 gap-16 z-10">

        {/* Background gradient shape */}
        <motion.div
          className="absolute left-0 top-0 w-[600px] h-[600px] z-0"
          style={{
            background: "radial-gradient(circle at top left, #6b21a8, transparent 70%)",
            clipPath: "circle(60% at 30% 40%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        />

        {/* Floating blobs */}
        <motion.div
          className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl z-0"
          animate={{ y: [0, 20, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl z-0"
          animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Text block */}
        <motion.div
          className="max-w-xl space-y-6 text-center  md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="h-32 ">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Step into the{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Typewriter
                words={["future", "digital revolution", "next generation"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          </div>
       <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Transform your digital journey with our cutting-edge solutions
            designed to scale and inspire.
          </p>
          <p className="text-gray-400">
            Whether you're a startup or an enterprise, we tailor strategies and
            tools that help you stay ahead of the curve and deliver unmatched
            digital experiences.
          </p>
        </motion.div>

        {/* Static logo block */}
        <motion.div
          className="relative w-full max-w-[500px] h-[500px]  z-10 "
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
        >
          {/* <div className="w-full h-full rounded-full shadow-xl   backdrop-blur-sm flex items-center justify-center"> */}
            <FBXViewer/>
          {/* </div> */}
        </motion.div>


        
      </section>
    </div>
  );
};

export default AboutUs;
