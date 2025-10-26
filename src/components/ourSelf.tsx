import { motion } from "framer-motion";
import video from "../assets/homeVid.mp4";

function OurSelf() {
  return (
    <div className=" h-max w-[90%] mx-auto my-16 bg-[rgb(25,26,26)] flex-1 sm:flex items-center justify-evenly px-6 py-12 rounded-[3rem] gap-10 overflow-hidden">
        <div>
          <motion.h3
            className="text-xl text-white font-bold md:mb-30 mb-5"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ⁕ Who we are
          </motion.h3>

          <motion.video
            src={video}
            controls
            autoPlay
            loop
            muted
            playsInline
            preload="metadata" // lazy load video metadata
            className="w-full md:w-96 h-auto object-cover rounded-xl shadow-lg not-sm:my-7 mx-auto"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div>
          <motion.h1
            className="text-3xl md:text-4xl text-white sm:mb-20 mb-7"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            We are innovation-first builders
          </motion.h1>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            At Lattix, we transform innovative ideas into flawless digital
            products with a focus on creativity, performance, and user
            experience. Our expertise in web design, UI/UX, and branding helps
            businesses build a strong online presence and connect with their
            audience more effectively.
          </motion.p>

          <motion.button
            className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 hover:text-black transition-colors duration-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            About us
          </motion.button>
          
        </div>
      </div>
  )
}

export default OurSelf