"use client";

import Navbar from "@/components/Navbar";
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

const clients = [
  {
    src: "./schnider.png",
    name: "Schneider Electrics",
    description: "Global leader in energy management and automation solutions.",
  },
  {
    src: "./wonderla.png",
    name: "Wonderla",
    description: "India’s top amusement park chain known for thrilling experiences.",
  },
  {
    src: "/brand1.png",
    name: "Sterling and Wilson",
    description: "Engineering firm offering EPC solutions in energy and infrastructure.",
  },
  {
    src: "/brand2.png",
    name: "TCFM",
    description: "Trusted facility management services across commercial and industrial spaces.",
  },
  {
    src: "/brand3.png",
    name: "Dusters Total Solutions",
    description: "Integrated facility management services with nationwide reach.",
  },
  {
    src: "/brand4.png",
    name: "Compass",
    description: "Global foodservice and support services leader operating in multiple sectors.",
  },
  {
    src: "/brand5.png",
    name: "Future Group",
    description: "Indian retail pioneer operating prominent retail chains and consumer brands.",
  },
  {
    src: "/brand6.png",
    name: "Handiman",
    description: "Professional facility and maintenance service provider for businesses.",
  },
  {
    src: "/brand7.png",
    name: "JLL",
    description: "Global real estate services firm focused on property and investment management.",
  },
  {
    src: "/brand8.png",
    name: "NSDC",
    description: "Public-private partnership promoting skill development in India.",
  },
  {
    src: "/brand9.png",
    name: "RAMAIAH",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
  {
    src: "/brand11.png",
    name: "TEKTON",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
  {
    src: "/brand12.png",
    name: "SQUIRREL",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
  {
    src: "/brand14.png",
    name: "SAKSHAM",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
  {
    src: "/brand15.jpg",
    name: "Handheldspro",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
  {
    src: "/brand16.png",
    name: "Bluescart",
    description: "Renowned educational and healthcare institution based in Bangalore.",
  },
];

export default function ClientsPage() {
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
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          variants={fadeUp}
        >
          Our Clients
        </motion.h1>
        <motion.p
          className="text-gray-400 text-lg text-center max-w-2xl mx-auto mb-12"
          variants={fadeUp}
        >
          We are proud to work with leading organizations across industries, delivering creative, scalable, and reliable digital solutions.
        </motion.p>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
        >
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="bg-slate-900 border border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
              variants={fadeUp}
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={client.src}
                  alt={client.name}
                  className="h-12 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {client.name}
              </h3>
              <p className="text-gray-400 text-sm text-center">
                {client.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
