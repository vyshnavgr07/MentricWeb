"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

const jobs = [
  {
    title: "Frontend Developer (React.js)",
    location: "Remote",
    type: "Full-Time",
    description:  
      "Build responsive user interfaces with React and collaborate with designers and backend developers.", 
  }, 
  {
    title: "Backend Developer (Node.js)", 
    location: "Bangalore",  
    type: "Full-Time", 
    description:
      "Develop and maintain scalable backend services using Node.js, Express, and MongoDB.",    
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Contract",
    description:
      "Design intuitive user experiences and collaborate closely with product and engineering teams.",
  },
];

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    resume: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = new FormData();
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("resume", formData.resume);
    submissionData.append("message", formData.message);
    submissionData.append("jobTitle", selectedJob.title);

    try {
      // await fetch("/api/apply", {
      //   method: "POST",
      //   body: submissionData,
      // });

      alert("✅ Application submitted successfully!");
      setSelectedJob(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        resume: null,
        message: "",
      });
    } catch (error) {
      alert("❌ Submission failed!");
      console.error(error);
    }
  };

  return (
    <section className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 min-h-screen text-white py-20 px-6">
      <motion.div
        className="max-w-6xl mx-auto"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-14 text-white"
          variants={fadeUp}
        >
          🚀 Build Your Career with Us
        </motion.h1>

        <motion.div className="space-y-6" variants={container}>
          {jobs.map((job, i) => (
            <motion.div
              key={i}
              className="bg-slate-800 border border-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
              variants={fadeUp}
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">
                {job.title}
              </h3>
              <p className="text-gray-400 text-sm mb-1">📍 {job.location}</p>
              <p className="text-gray-400 text-sm mb-4">💼 {job.type}</p>
              <button
                onClick={() => setSelectedJob(job)}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-full hover:from-blue-600 hover:to-purple-600 transition"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
        </motion.div>







        {/* Modal */}
        <AnimatePresence>
          {selectedJob && (
            <motion.div
              className="fixed inset-0 hide-scrollbar bg-black/60 backdrop-blur-sm overflow-hidden flex items-center justify-center z-50"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
            >
              <motion.div className="bg-white bg-opacity-95 hide-scrollbar text-black rounded-3xl p-10 w-full max-w-4xl relative overflow-y-auto max-h-[90vh] shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <h2 className="text-3xl font-extrabold mb-1 text-gray-900">
                    {selectedJob.title}
                  </h2>
                  <p className="text-sm text-gray-600 mb-1">
                    📍 {selectedJob.location}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    💼 {selectedJob.type}
                  </p>
                  <p className="mb-6 text-gray-800">{selectedJob.description}</p>
                </motion.div>

                {/* Application Form */}
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
                  {[
                    { label: "Full Name", type: "text", name: "name" },
                    { label: "Email", type: "email", name: "email" },
                    { label: "Phone number", type: "text", name: "phone" },
                  ].map((field, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium mb-1">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  ))}

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Resume</label>
                    <input
                      type="file"
                      name="resume"
                      onChange={handleChange}
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg bg-white"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-1">Cover Letter / Description</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Write a short message or cover letter..."
                      required
                    ></textarea>
                  </div>

                  <div className="md:col-span-2">
                    <button
                      type="submit"
                      className="w-full mt-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-full hover:from-purple-700 hover:to-blue-700 transition"
                    >
                      Submit Application
                    </button>
                  </div>
                </form>



                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl font-bold"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
