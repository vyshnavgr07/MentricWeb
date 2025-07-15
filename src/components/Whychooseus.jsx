import React from "react";
import TitleCard from "./TitleCard";

const cardData = [
  {
    image:
      "https://media.istockphoto.com/id/1332358775/photo/young-couple-shaking-hands-deal-contract-real-estate-investment-business-agreement-agent.jpg?s=612x612&w=0&k=20&c=tADtuQ9F_eKe_hMH0k5Ldg7N4p5BojisWf2n-jXar_I=",
    alt: "Happy Clients",
    count: "30+",
    label: "Happy Clients",
    hoverDescription:
      "We’ve successfully delivered top-notch services to more than 30 clients globally.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    alt: "Projects Completed",
    count: "50+",
    label: "Projects",
    hoverDescription:
      "Over 50 diverse projects completed with excellent client satisfaction.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    alt: "Team Members",
    count: "10+",
    label: "Team Members",
    hoverDescription:
      "A passionate team of professionals driving quality and innovation.",
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
