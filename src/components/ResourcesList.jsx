"use client";

import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";

const cards = [
  {
    title: "Case Studies",
    description: "Crafting modern and responsive websites tailored to your brand.Crafting modern and responsive websites tailored to your brand.Crafting modern and responsive websites tailored to your brand.Designing intuitive products that users love to interact with.",
    image: "./caseStudy.webp",
    hueA: 50,
    hueB: 45,
    link: "/caseStudies",
  },
  {
    title: "Blogs",
    description: "Designing intuitive products that users love to interact with.Designing intuitive products that users love to interact with.Designing intuitive products that users love to interact with.Designing intuitive products that users love to interact with.",
    image: "./blog.jpg",
    hueA: 50,
    hueB: 45,
    link: "/blogs",
  }
];

const cardVariants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 50,
    opacity: 1,
    rotate: -8,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const hue = (h) => `hsl(${h}, 100%, 50%)`;

const container = {
  margin: "100px auto",
  maxWidth: 600,
  paddingBottom: 100,
  width: "100%",
};

const cardContainer = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  paddingTop: 0,
  marginBottom: 60,
};

const cardStyle = {
  width: 350,
  height: 500,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: 20,
  background: "#ffffff",
  boxShadow:
    "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
  transformOrigin: "10% 60%",
  position: "relative",
  overflow: "hidden",
  zIndex: 1,
};

const splash = {
  width: "100%",
  height: 80,
  marginTop: -20,
  zIndex: 0,
  borderBottomLeftRadius: 20,
  borderBottomRightRadius: 20,
  clipPath:
    "polygon(0% 0%, 10% 20%, 20% 30%, 30% 35%, 40% 38%, 50% 40%, 60% 38%, 70% 35%, 80% 30%, 90% 20%, 100% 0%, 100% 100%, 0% 100%)",
  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
};

const imageStyle = {
  width: "100%",
  height: "40%",
  objectFit: "cover",
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
};

const contentStyle = {
  padding: "20px",
  width: "100%",
  textAlign: "left",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
};

const titleStyle = {
  color: "#000",
  fontSize: "1.3rem",
  fontWeight: "bold",
  marginBottom: "10px",
};

const descStyle = {
  fontSize: "0.95rem",
  color: "#333",
  marginBottom: "20px",
};

const buttonStyle = {
  padding: "10px 15px",
  border: "none",
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
  alignSelf: "flex-start",
};

export default function ScrollImageCards() {
  const router = useRouter();

  return (
    <div style={container}>
      <div className="text-center z-10 relative ">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Our{" "}
          <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Resources
          </span>
        </h1>
        <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">
          Empowering your business through technology, design, and marketing.
          
        </p>
      </div>

      {cards.map(({ image, title, description, hueA, hueB, link }, i) => (
        <motion.div
          key={i}
          style={cardContainer}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ amount: 0.8 }}
        >
          <motion.div style={cardStyle} variants={cardVariants}>
            <img src={image} alt={title} style={imageStyle} />
            <div style={contentStyle}>
              <div>
                <div style={titleStyle}>{title}</div>
                <div style={descStyle}>{description}</div>
              </div>
              <button
                style={buttonStyle}
                onClick={() => router.push(link)}
              >
                Learn More
              </button>
            </div>
          </motion.div>
          <div
            style={{
              ...splash,
              background: `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
