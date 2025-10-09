import { motion } from "framer-motion"

function Infinitewords({bottomLine}) {
  return (
    <motion.div
          className="flex gap-16 text-[2rem] bebas-neue-regular tracking-widest whitespace-nowrap text-white"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            repeat: Infinity,
            duration: 15,
            ease: "linear",
          }}
        >
          {[...bottomLine, ...bottomLine].map((e, i) => (
            <span key={i}>{e}</span>
          ))}
        </motion.div>
  )
}

export default Infinitewords