import { motion, useInView } from "framer-motion";
import React, { useRef } from "react";

interface HeroDivProps {
  children: React.ReactNode;
}

const HeroDiv: React.FC<HeroDivProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { amount: 0.8 });

  return (
    <div>
      <motion.div
        ref={ref}
        className="h-screen w-full bg-[rgb(25,26,26)] flex-1 justify-center items-center px-4 pt-[10vh] pb-5 bg-cover bg-no-repeat bg-center mx-auto"
        animate={{
          width: isInView ? "100%" : "90%",
          borderRadius: isInView ? "0rem" : "3rem",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default HeroDiv;
