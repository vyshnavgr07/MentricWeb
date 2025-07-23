import React from "react";
import TitleCard from "./TitleCard";

const cardData = [
  {
    image:
      "cl.png",
    alt: "Happy Clients",
    count: "50+",
    label: "Happy Clients",
    hoverDescription:
      "We’ve successfully delivered top-notch services to more than 50 clients globally.",
  },
  {
    image:
      "/dd2.png",
    alt: "Deep Domain Expertise",
    count: "4+ Domains",
    label: "Deep Domain Expertise",
    hoverDescription:
      " With proven experience across industries like EdTech, HealthTech, and Enterprise SaaS, we understand the nuances of each domain. This enables us to design and build tailored digital products that align with your industry needs, ensuring faster delivery, better user experience, and business impact.",
  },
  {
    image:
      "/st3.png",
    alt: "Continuous Support & Maintenance",
    count: "24/7",
    label: "ongoing support and maintenace",
    hoverDescription:
      " Our dedicated support team offers proactive monitoring, quick resolution, and 24/7 assistance to ensure your systems remain robust, up-to-date, and fully optimized—anytime you need us.",
  }
];

const Whychooseus = () => {
  return (
    <div>
      <div className="text-center  z-10 relative ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Why{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Choose Us
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business through technology, design, and marketing.
        </p>
      </div>

      <div className="flex flex-wrap gap-15 justify-center  px-4">
        {cardData.map((card, index) => (
          <TitleCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Whychooseus;
