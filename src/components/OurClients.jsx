"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const logos = [
  {
    src: "./schnider.png",
    name: "Schneider Electrics",
  },
  {
    src: "./wonderla.png",
    name: "Wonderla",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    name: "Apple Inc.",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    name: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    name: "Facebook",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    name: "YouTube",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    name: "Spotify",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    name: "Tesla",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    name: "Amazon",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function ClientsPage() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Esteemed Clients
            </span>
          </h1>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
            Empowering your business through technology, design, and marketing.
          </p>
        </div>

        {/* Divider */}
        <div className="h-1 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-600 w-1/2 mx-auto mb-16 rounded-full blur-sm opacity-70"></div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {logos.map((logo, index) => (
            <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="group relative p-[2px] rounded-2xl bg-gradient-to-br from-yellow-600/50 to-indigo-500/10 hover:from-black/10  shadow-lg  transition duration-300"
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900 rounded-2xl p-4 h-full flex flex-col items-center justify-center transition-all duration-300">
              <img
                src={logo.src}
                alt={logo.name}
                className="w-full h-14 object-contain mb-4 transform transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-sm font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                {logo.name}
              </p>
            </div>
          </motion.div>
          
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Link
            href="/clients"
            className="inline-flex items-center gap-2 text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300"
          >
            View More
            <motion.span
              initial={{ x: 0 }}
              whileHover={{ x: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
