"use client";
import { motion } from "framer-motion";
import MissionStatement from "@/components/MissionStatement";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import AboutusCards from "@/components/AboutusCards";
import ProductsPage from "@/components/ProductsPage";
import Whychooseus from "@/components/Whychooseus";
import ResourcesPage from "@/components/ResourcesList";
import OurClients from "@/components/OurClients";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import {Testimonials} from "@/components/Testimonials";


// Animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" },
  }),
};

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen w-full scroll-smooth bg-gradient-to-b from-black via-gray-900 to-black   text-white font-sans">


        {/* Sections with IDs */}
        <motion.div id="home" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <AboutUs />
        </motion.div>
        <Navbar />
        <motion.div id="aboutus-cards" variants={fadeInUp} viewport={{ once: true, amount: 0.2 }}>
          <AboutusCards />
        </motion.div>

        <motion.div id="mission" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <MissionStatement />
        </motion.div>

        <motion.div id="why-choose-us" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Whychooseus />
        </motion.div>

        <motion.div id="products" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <ProductsPage />
        </motion.div>

        <motion.div id="services" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Services />
        </motion.div>

        <motion.div id="resources" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <ResourcesPage />
        </motion.div>

        <motion.div id="clients" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <OurClients />
        </motion.div>
        <motion.div id="clients" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Testimonials/>
        </motion.div>
        <motion.div id="footer" variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
          <Footer />
        </motion.div>
      </div>
    </SmoothScroll>
  );
}
