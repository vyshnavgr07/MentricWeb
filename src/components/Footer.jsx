"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isInBottom, setIsInBottom] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.body.offsetHeight - 100;
      if (scrollPosition >= bottomThreshold && !isInBottom) {
        setIsInBottom(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isInBottom]);

  useEffect(() => {
    if (isInBottom) {
      const timeout = setTimeout(() => {
        setIsExpanded(true);
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [isInBottom]);

  useEffect(() => {
    document.body.style.overflow = showForm ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted! (implement send logic)");
  };

  return (
    <motion.footer
      className="relative bg-gradient-to-br from-black via-zinc-900 to-gray-900 text-white px-6 md:px-20 pt-16 pb-20"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#ffffff0a] to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let’s build something great.
            </h2>
            <p className="text-gray-400 mt-3 text-lg">
              Get started in less than a minute.
            </p>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="group border border-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition-all duration-300"
          >
            Enquiry{" "}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footer Grid */}
        {!showForm && isExpanded && (
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
          >
            {[
              {
                title: "Company",
                items: ["About", "Services", "Industries", "Works"],
              },
              {
                title: "Services",
                items: ["Branding", "Experience Design", "Technology", "Marketing"],
              },
              {
                title: "Other",
                items: ["Partnership", "Awards", "Insights", "Blogs"],
              },
              {
                title: "Connect",
                items: [
                  "General: +91 111 111 111",
                  "Sales: +91 111 2222 333",
                  "Email: info@mentrictech.com",
                  "HR: +91 222 3333 444",
                ],
              },
            ].map((section, i) => (
              <div key={i}>
                <h4 className="font-semibold mb-4 text-white text-base">
                  {section.title}
                </h4>
                <ul className="space-y-2 text-gray-400">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="hover:text-white transition">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Slide-in Form */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            className="fixed inset-y-0 right-0 md:w-1/2 w-full bg-zinc-950/95 backdrop-blur-xl p-6 z-[9999] shadow-2xl overflow-y-auto"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            <button
              onClick={() => setShowForm(false)}
              className="flex items-center text-sm text-gray-400 mb-6 hover:text-white transition"
            >
              <ArrowLeft className="mr-1" size={16} /> Back to footer
            </button>

            <h3 className="text-3xl font-semibold mb-6 tracking-tight">
              Request a Quote
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                  required
                />
              </div>
              <input
                type="text"
                placeholder="Project Type (e.g. Website, App)"
                className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <textarea
                placeholder="Tell us about your project..."
                rows={5}
                className="bg-zinc-800 p-4 rounded-md w-full text-white placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-white"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-all"
              >
                Submit Quote Request
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.footer>
  );
}
