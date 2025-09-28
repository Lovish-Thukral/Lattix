"use client";

import { motion } from "framer-motion";

const Team = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden" id="team">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Team</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Passionate creators dedicated to bringing your digital vision to life.
        </p>
      </motion.div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 rounded-3xl p-8 text-center"
        >
          <div className="mb-6 mx-auto w-32 h-32 rounded-full bg-gray-300" />
          <h3 className="text-2xl font-bold mb-2">John Doe</h3>
          <p className="text-gray-500 mb-6">Graphic Designer</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Branding
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Illustration
            </span>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 rounded-3xl p-8 text-center"
        >
          <div className="mb-6 mx-auto w-32 h-32 rounded-full bg-gray-300" />
          <h3 className="text-2xl font-bold mb-2">Jane Smith</h3>
          <p className="text-gray-500 mb-6">Developer</p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              React
            </span>
            <span className="px-3 py-1 bg-gray-200 text-sm rounded-full">
              Next.js
            </span>
          </div>
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="bg-gray-100 rounded-3xl p-12">
          <blockquote className="text-2xl md:text-3xl font-light mb-8 italic">
            "At Solitude, we believe in the power of creativity to inspire."
          </blockquote>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-black text-white rounded-full font-semibold">
              Our Story
            </button>
            <button className="px-8 py-3 border-2 border-gray-400 rounded-full font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
