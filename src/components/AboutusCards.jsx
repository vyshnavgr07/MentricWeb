"use client";

import React from "react";
import { motion } from "framer-motion";
import ThreeDCard from "./ThreeDCard";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.42, 0, 0.58, 1], // smoother cubic-bezier easing
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1],
    },
  },
};

const AboutusCards = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden px-6 md:px-16 py-16 text-white flex flex-col gap-10">
      {/* Section Header */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center px-4 md:px-0 max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 leading-tight">
          About Us
        </h1>
        <p className="mt-6 text-gray-300 text-base md:text-lg leading-relaxed">
          At Mentric Group, our endeavor is to provide holistic training and technology solutions – fundamental and advanced technical skills, soft skills, job-oriented and upskilling training programs – in various sectors. We work with organizations in assessing and improving various management processes using state-of-the-art technology, resulting in efficient utilization of resources.
        </p>
      </motion.div>

      {/* Row 1: Mentric Technologies */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          variants={slideLeft}
        >
          <ThreeDCard
            image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
            alt="Mentric Technologies"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={slideRight}
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
      </motion.div>

      {/* Row 2: Mentric Training & Consulting */}
      <motion.div
        className="w-full flex flex-col md:flex-row items-center justify-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          variants={slideLeft}
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
        >
          <ThreeDCard
            image="/training.jpg"
            alt="Mentric Training & Consulting"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutusCards;
