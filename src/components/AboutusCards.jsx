"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ThreeDCard from "./ThreeDCard";
import Navbar from "./Navbar";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const slideLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const slideRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};


const AboutusCards = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const titleRef = useRef(null);

  const isInView1 = useInView(ref1, { once: true, margin: "0px 0px -100px 0px" });
  const isInView2 = useInView(ref2, { once: true, margin: "0px 0px -100px 0px" });
  const isTitleInView = useInView(titleRef, { once: true, margin: "0px 0px -100px 0px" });

  return (
    <>
      <div className="w-full px-6 md:px-16 py-16  h-full   text-white flex flex-col gap-10">
        {/* Section Header */}
        <motion.div
  ref={titleRef}
  variants={fadeInUp}
  animate={isTitleInView ? "visible" : "hidden"}
  className="text-center px-4 md:px-0 max-w-4xl mx-auto"
>
  <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-tight">
    About Us
  </h1>

  <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
    At Mentric Group, our endeavor is to provide holistic training and technology solutions – fundamental and advanced technical skills, soft skills, job-oriented and upskilling training programs – in various sectors. We work with organizations in assessing and improving various management processes using state-of-the-art technology, resulting in efficient utilization of resources.
  </p>
</motion.div>


        {/* Row 1: Mentric Technologies (Image left, content right) */}
        <div
          ref={ref1}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-10"
        >
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={slideLeft}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <ThreeDCard
              image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
              alt="Mentric Technologies"
            />
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={slideRight}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <h2 className="text-4xl font-bold text-purple-400">Mentric Technologies</h2>
            <p className="text-gray-300 text-lg">
              We are a digital-first technology company building scalable solutions for startups, SMEs, and enterprises. From custom software development to advanced cloud integrations, Mentric Technologies is your partner in innovation.
            </p>
            <p className="text-gray-400">
              Our mission is to simplify complex challenges using technology and provide end-to-end digital transformation services that truly make a difference.
            </p>
            <p className="text-gray-500 text-sm">
              Founded in 2020 • Trusted by 50+ clients • Driven by technology & vision
            </p>
          </motion.div>
        </div>

        {/* Row 2: Mentric Training & Consulting (unchanged) */}
        <div
          ref={ref2}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-10"
        >
          <motion.div
            className="w-full md:w-1/2 space-y-6"
            variants={slideLeft}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <h2 className="text-4xl font-bold text-purple-400">Mentric Training & Consulting</h2>
            <p className="text-gray-300 text-lg">
              Our consulting division is committed to empowering the next generation of developers, analysts, and technologists through intensive, hands-on training programs.
            </p>
            <p className="text-gray-400">
              We offer mentorship, bootcamps, and real-world project experience to bridge the gap between academic learning and industry requirements.
            </p>
            <p className="text-gray-500 text-sm">
              1000+ Students Trained • Corporate Workshops • Internship-integrated Learning Paths
            </p>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            variants={slideRight}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <ThreeDCard
              image="/training.jpg"
              alt="Mentric Training & Consulting"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default AboutusCards;
