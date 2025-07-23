"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { caseStudies } from "@/data/caseStudy";
import Navbar from "@/components/Navbar";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function CaseStudy() {
  return (
    <section className="bg-gray-950 min-h-screen text-white py-20 px-6">
 
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Header */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          variants={fadeUp}
        >
       CaseStudy
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-16"
          variants={fadeUp}
        >
          Dive into our insights, tutorials, and thoughts on technology, design,
          and development.
        </motion.p>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
        >
          {caseStudies.map((blog, i) => (
            <Link key={i} href={`/caseStudies/${blog.slug}`}>
              <motion.div
                className="group bg-slate-900 border border-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:border-pink-500 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                variants={fadeUp}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-pink-500 transition-colors duration-300">
                    {blog.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{blog.summary}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
