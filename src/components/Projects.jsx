import { motion } from "framer-motion";
import bliss from "../assets/bliss.png";
import surescripts from "../assets/surescripts.png";
import TiltCard from "./ui/TiltCard";

export default function Projects() {
  return (
      <div className="h-max w-[90%] mx-auto my-16 bg-[rgb(25,26,26)] flex items-center justify-between px-[7%] py-12 rounded-[3rem] pt-32 relative">
      <motion.h1
        className="text-5xl bebas-neue-regular tracking-wide absolute top-10 left-24"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Case Studies
      </motion.h1>
        <div className="w-[45%]">
          <TiltCard
            object={
              <motion.img
                src={surescripts}
                alt="Lattix.com"
                className="h-[50%] w-[70%] rounded-4xl"
              />
            }
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold tracking-wide my-5">
              SURESCRIPTS
            </h2>
            <p className="text-2xl text-justify w-[80%] my-4">
              The Surescripts Network Alliance® unites the people and
              organizations who share and access health intelligence through
              Surescripts. Together, we collaborate to solve some of the biggest
              challenges in healthcare.
            </p>
          </motion.div>
        </div>
        <motion.div
          className="w-[45%] justify-end"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold tracking-wide my-5">BLISS APP</h2>
          <p className="text-2xl text-justify w-[80%] my-4">
            Bliss is a professional networking app that connects people, ideas,
            and opportunities in one seamless platform. 🌐 It helps users
            showcase skills, share updates, and build meaningful connections,
            all through a user-friendly and engaging interface. 🚀
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
          >
            <TiltCard
              object={
                <motion.img
                  src={bliss}
                  alt="Lattix.com"
                  className="h-[50%] w-[70%] rounded-4xl"
                />
              }
            />
          </motion.div>
        </motion.div>
      </div>
  );
}
