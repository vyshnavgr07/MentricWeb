"use client";

import React from "react";
import { ServiceCard } from "./ServicesCard";

const services = [
  {
    title: "Web Development",
    description:
      "Turning ideas into stunning, high-performing websites that work as hard as you do.",
    image:
      "/wd2.jpg",
  },
  {
    title: "App Development",
    description:
      "Your brand in every pocket—powerful, sleek apps designed for real-world impact.",
    image:
      "/md2.jpg",
  },
  {
    title: "Internet of Things",
    description:
      "We connect the unconnected—bridging the physical and digital worlds through smart innovation.",
    image:
      "/iot1.jpg",
  },
  {
    title: "Digital Marketing",
    description:
      "Not just clicks—real conversations, loyal customers, and results that speak for themselves.",
    image:
      "/dm2.jpg",
  },
];

const Services = () => {
  return (
    <section className="relative px-1 md:px-20 py-24 overflow-hidden bg-black text-white ">
      {/* Background Blobs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-600 rounded-full opacity-20 blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 rounded-full opacity-10 blur-3xl z-0" />

      {/* Section Title */}
      <div className="text-center mb-12 z-10 relative">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business through technology, design, and marketing.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 px-2 sm:grid-cols-2 z-10 relative bg-blue-950 rounded-md">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
