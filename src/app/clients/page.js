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

const clients = [
  {
    name: "Tata Group",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tata_logo.svg",
    description: "A global enterprise operating in over 100 countries.",
  },
  {
    name: "Tata Consultancy Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tata_logo.svg",
    description: "Global leader in IT services, consulting and business solutions.",
  },
  {
    name: "Tata Motors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Tata_logo.svg",
    description: "Pioneer in automotive manufacturing and innovation.",
  },
  {
    name: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    description: "Empowering every person and organization on the planet.",
  },
  {
    name: "Apple Inc.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    description: "Known for its innovation in design and consumer tech.",
  },
  {
    name: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    description: "Organizing the world's information and making it universally accessible.",
  },
  {
    name: "Facebook",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    description: "Connecting people and building communities.",
  },
  {
    name: "YouTube",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg",
    description: "The world’s largest video-sharing platform.",
  },
  {
    name: "Spotify",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
    description: "Streaming music for everyone, everywhere.",
  },
  {
    name: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg",
    description: "Accelerating the world's transition to sustainable energy.",
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
                  src={client.logo}
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
