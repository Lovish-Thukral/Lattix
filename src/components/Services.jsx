import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import webDevImg from "../assets/services.avif";
import brandingImg from "../assets/branding.gif";
import uxuiImg from "../assets/uxui.avif";
import stationaryImg from "../assets/stationary.gif";
import seoImg from "../assets/seo.gif";
import giftsImg from "../assets/gifts.gif";
import landing from "../assets/landing.avif";
import appdev from "../assets/appdev.gif"

function Container({ service, index }) {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null); // Add ref for the container
  const x = useMotionValue(100);
  const y = useMotionValue(100);
  const rotateX = useTransform(y, [0, 200], [-10, 10]);
  const rotateY = useTransform(x, [0, 200], [10, -10]);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      // Get container's position relative to viewport
      const rect = containerRef.current.getBoundingClientRect();

      // Calculate mouse position relative to container
      const relativeX = e.clientX - rect.left;
      const relativeY = e.clientY - rect.top;

      x.set(relativeX);
      y.set(relativeY);
    }
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ y: -20 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1.5 }}
      className={`${
        service.Highlight ? "md:col-span-3" : "md:col-span-2"
      } relative bg-[rgb(30,32,36)] rounded-3xl items-center justify-center text-center shadow-lg overflow-visible p-6 w-full`}
    >
      <motion.div
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        whileHover={{ scale: 1.08 }}
        transition={{ type: "spring", stiffness: 300 }}
        onMouseMove={handleMouseMove}
        className="flex-1 justify-between"
      >
        <div
          className={`w-[100%] h-16 mb-4 rounded-xl flex items-center justify-center text-white font-bold text-xl`}
        >
          {index}
        </div>

        <h3 className="text-white text-xl font-bold ">{service.title}</h3>
        {service.desc && <p className="text-gray-400 mt-2">{service.desc}</p>}
      </motion.div>

      {active && (
        <motion.img
          src={service.img}
          alt={service.title}
          className="md:w-80 md:h-70 w-32 h-52 object-cover rounded-2xl absolute pointer-events-none z-50"
          style={{
            left: x,
            top: y,
            rotateX: rotateX,
            rotateY: rotateY,
            transform: "translate(-50%, -50%)", // Center the image on cursor
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
    </motion.div>
  );
}

function Services() {
  const Services = [
    {
      title: "Professional Landing Page Design",
      desc: "Custom landing pages optimized for conversions and user engagement.",
      img: landing,
      color: "from-pink-300 to-purple-400",
      Highlight: false,
      alt: "Custom landing page design services",
    },
    {
      title: "UX/UI Design Services",
      desc: "Intuitive UX/UI design for seamless user experiences across platforms.",
      img: uxuiImg,
      Highlight: false,
      alt: "Professional UX/UI design solutions",
    },
    {
      title: "SEO Optimization Services",
      desc: "Expert SEO strategies to boost search rankings and organic traffic.",
      img: seoImg,
      Highlight: false,
      alt: "SEO optimization and digital marketing",
    },
    {
      title: "Custom Web Development",
      desc: "Custom websites and applications built for performance and scalability.",
      img: webDevImg,
      Highlight: true,
      alt: "Full-stack web development services",
    },
    {
      title: "Complete Branding Solutions",
      desc: "Complete brand development including logos, identity, and strategy.",
      img: brandingImg,
      Highlight: true,
      alt: "Professional branding and identity design",
    },
    {
      title: "Stationary Printing Services",
      desc: "High-quality stationary printing for business cards, letterheads, and more.",
      img: stationaryImg,
      Highlight: false,
      alt: "Custom stationary printing solutions",
    },
    {
      title: "Mobile App Development",
      desc: "Custom mobile app development for iOS and Android platforms.",
      img: appdev,
      Highlight: false,
      alt: "Professional app development services",
    },
    {
      title: "Personalized Gifting Items",
      desc: "Unique customized gifts for personal and corporate needs.",
      img: giftsImg,
      Highlight: false,
      alt: "Customized gift ideas and printing",
    },
  ];

  return (
    <section className="h-max w-[90%] mx-auto mt-16 mb-7 bg-[rgb(25,26,26)] px-[7%] py-12 rounded-[3rem] relative z-10">
      {/* Heading */}
      <motion.h1
        className="text-5xl bebas-neue-regular tracking-wide absolute top-10 sm:left-24 text-white"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Our Services
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mt-24">
        {Services.map((service, i) => (
          <Container service={service} index={i + 1} />
        ))}
      </div>

      
    </section>
  );
}

export default Services;
