"use client";

import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const benefits = [
  "Flexible Work Hours",
  "Remote Friendly",
  "Learning Opportunities",
  "Modern Tech Stack",
  "Collaborative Team",
  "Health & Wellness Perks",
];

const jobs = [
  {
    title: "Frontend Developer (React.js)",
    location: "Remote",
    type: "Full-Time",
  },
  {
    title: "Backend Developer (Node.js)",
    location: "Bangalore",
    type: "Full-Time",
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
  },
];

export default function CareerPage() {
  return (
    <section className="bg-gray-950 min-h-screen text-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero Section */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          variants={fadeUp}
        >
          Build Your Career with Us
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
        >
          Join a team that values innovation, creativity, and growth. Be a part of something meaningful and build impactful products with global reach.
        </motion.p>

        {/* Benefits */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          variants={fadeUp}
        >
          Why Work With Us?
        </motion.h2>
        <motion.ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={container}
        >
          {benefits.map((benefit, i) => (
            <motion.li
              key={i}
              className="bg-slate-900 border border-gray-700 p-6 rounded-xl shadow"
              variants={fadeUp}
            >
              ✅ {benefit}
            </motion.li>
          ))}
        </motion.ul>

        {/* Open Roles */}
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-6"
          variants={fadeUp}
        >
          Open Positions
        </motion.h2>
        <motion.div
          className="space-y-6 mb-16"
          variants={container}
        >
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="bg-slate-900 border border-gray-700 rounded-xl p-6 shadow hover:shadow-lg transition-shadow"
              variants={fadeUp}
            >
              <h3 className="text-xl font-bold mb-2">{job.title}</h3>
              <p className="text-gray-400 text-sm mb-1">📍 {job.location}</p>
              <p className="text-gray-400 text-sm">💼 {job.type}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          variants={fadeUp}
        >
          <a
            href="/apply"
            className="inline-block bg-white text-black font-semibold py-3 px-8 rounded-full hover:bg-gray-200 transition"
          >
            Apply Now
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
