"use client";

import React from "react";
import { ServiceCard } from "./ServicesCard";

const services = [
  {
    title: "Web Development",
    description:
      "We build responsive, high-performance web apps that scale with your business goals.",
    image:
      "https://images.unsplash.com/photo-1607082349566-187348f70b25?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "App Development",
    description:
      "Create sleek, performant mobile apps for both iOS and Android with a user-first approach.",
    image:
      "https://images.unsplash.com/photo-1550507990-b9c9e0fbc9d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Internet of Things",
    description:
      "Connect your devices and collect insights with secure and scalable IoT platforms.",
    image:
      "https://images.unsplash.com/photo-1603791452906-86b1f7fd5361?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Digital Marketing",
    description:
      "Reach your audience through SEO, PPC, and content strategies that convert.",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80",
  },
];

const Services = () => {
  return (
    <section className="relative px-6 md:px-20 py-24 overflow-hidden bg-black text-white">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 z-10 relative bg-blue-950 rounded-md">
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
