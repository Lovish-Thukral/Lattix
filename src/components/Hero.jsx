import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
// import bg from '../assets/image.png'


function Hero() {
  const bottomLine = [
    "※ Tailored Solutions",
    "※ Intuitive Experience",
    "※ Scalable Technology",
    "※ Transparent Process",
    "※ Proven Results",
  ];

   const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.9 }); 

  return (
    <motion.div
      ref={ref}
      // style={{backgroundImage : `url(${bg})`}}
      className="h-screen w-full bg-[rgb(25,26,26)] flex-1 justify-center items-center px-4 pt-[10vh] bg-cover bg-no-repeat bg-center"
      animate={{ width: isInView ? '100%' : '90%', borderRadius: isInView ? "0rem" : "3rem" }}

      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="scale-90 flex flex-col justify-center items-center text-center my-[20vh]">
        <h1 className="text-[1.7rem] md:text-6xl font-bold text-white leading-tight mb-4 animation-duration-initial animate-typing">
          Your Trusted Creative <br /> Partner for Digital Success
        </h1>
        <p className="text-sm md:text-xl text-white text-center mb-8 max-w-2xl font-serif">
          We deliver impactful branding, web design, and UI/UX solutions to
          elevate your online presence and make your brand stand out.
        </p>

        <button className="group bg-[#22282d] text-white font-bold py-3 px-8 rounded-full m-2  hover:bg-gray-100 hover:text-black active:bg-gray-100 active:text-black transition-all duration-300 flex gap-2 ease-linear ">
          Start a Project <p className="rotate-30 group-hover:rotate-60 group-active:rotate-60 transition-all duration-100"> 🤚 </p>
        </button>
      </div>
      <div className="overflow-hidden w-full mb-7">
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
            <p key={i}>{e}</p>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default Hero;
