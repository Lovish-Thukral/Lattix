import { motion } from "framer-motion";
import React, { useState } from "react";
import type { Variants, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Bundle {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  benefits: string[];
}

interface FlipCardProps {
  item: Bundle;
  index: number;
}

const FlipCard: React.FC<FlipCardProps> = ({ item, index }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const cardVariant: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        type: "spring",
        stiffness: 100,
      } as Transition,
    }),
  };

  return (
    <motion.div
      key={index}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariant}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped((p) => !p)}
      className="w-[95%] sm:w-72 h-[450px] my-5 relative cursor-pointer perspective"
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front */}
        <div className="absolute w-full h-full bg-[rgb(25,26,26)] text-white p-6 rounded-xl border border-gray-800 shadow-lg flex flex-col justify-between backface-hidden">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="mb-4 opacity-80">{item.subtitle}</p>
            <ul className="text-sm space-y-1 text-gray-300">
              {item.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-lg font-bold">₹{item.price}</p>
            <ArrowRight className="w-5 h-5 opacity-80" />
          </div>
        </div>

        {/* Back */}
        <div className="absolute w-full h-full bg-white text-[rgb(25,26,26)] p-6 rounded-xl border border-[rgb(25,26,26)] shadow-md rotate-y-180 backface-hidden flex flex-col justify-between">
          <div>
            <h4 className="text-lg font-semibold mb-3">Why Choose This Pack</h4>
            <ul className="text-sm space-y-2">
              {item.benefits.map((b, i) => (
                <li key={i}>• {b}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const BrandBundles: React.FC = () => {
  const bundles: Bundle[] = [
    {
      title: "Ignite",
      subtitle: "Your Professional 1-Page Launchpad",
      price: "3,000",
      features: [
        "Single-Page 'Web Presence' Site",
        "Shareable Digital Business Card",
        "Professional Digital Letterhead",
        "Standard Email & Chat Support",
      ],
      benefits: [
        "Go live and look professional in days, not weeks.",
        "Establish instant credibility with a modern web presence.",
        "The perfect, affordable start for new entrepreneurs.",
      ],
    },
    {
      title: "Thrive",
      subtitle: "Capture and Convert Local Customers",
      price: "7,000",
      features: [
        "3-Page Conversion-Focused Website",
        "Google Business Profile Setup & Optimization",
        "Click-to-Chat WhatsApp Integration",
        "100 Premium Physical Business Cards (Delivered)",
      ],
      benefits: [
        "Get found by local customers on Google Maps.",
        "Turn web visitors into paying customers.",
        "Build trust with a polished, multi-page site.",
        "Connect seamlessly on web and WhatsApp.",
      ],
    },
    {
      title: "Elevate",
      subtitle: "Build a Memorable Brand Identity",
      price: "12,000",
      features: [
        "5-Page Professional Website (e.g., +Blog)",
        "30-Day Social Media Content Plan",
        "3 Custom Social Media Post Templates",
        "Full Print Identity Kit (Letterheads & Cards)",
      ],
      benefits: [
        "Create a cohesive brand that customers remember.",
        "Understand your visitors with website analytics.",
        "Look professional across all digital and print media.",
        "Ideal for growing businesses & service providers.",
      ],
    },
    {
      title: "Scale",
      subtitle: "The Complete Engine for Serious Growth",
      price: "20,000",
      features: [
        "7+ Page Custom-Built Website",
        "Full Print Identity Kit (Letterheads & Cards)",
        "Advanced On-Page SEO & Keyword Strategy",
        "Basic WhatsApp Automation (e.g., Welcome, FAQ)",
        "Advanced Analytics & Reporting Setup",
      ],
      benefits: [
        "Attract qualified leads with strategic SEO.",
        "Engage customers 24/7 with WhatsApp automation.",
        "Earn customer trust with unified, expert branding.",
        "Make smarter decisions with data-driven insights.",
      ],
    },
    {
      title: "Dominate",
      subtitle: "Your All-in-One Digital Powerhouse",
      price: "30,000",
      features: [
        "Fully Custom-Coded Web Application",
        "Advanced WhatsApp Automation & Integration",
        "Total Branding Suite (Digital, Print & Brand Guide)",
        "Comprehensive SEO & Content Strategy",
        "3 Months of Priority Support & Maintenance",
      ],
      benefits: [
        "Own your market niche with dominant search visibility.",
        "Automate customer engagement at scale.",
        "A complete, ROI-focused marketing and brand setup.",
        "Built for established brands aiming for market leadership.",
      ],
    },
  ];

  return (
    <div className="py-16 text-white">
      <section className="w-[90%] mx-auto md:px-10 px-2 my-7 text-white grid sm:grid-cols-8 gap-6 items-center">
        <motion.h3
          className="text-xl font-bold col-span-8 sm:col-span-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ⁕ Your Brand Deserves Better
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-4xl font-semibold col-span-8 sm:col-span-5 md:px-8 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Transform Ideas into Impact with Our Power Packs
        </motion.h1>
      </section>
      <div className="gap-10 sm:flex justify-items-center w-[90%] mx-auto flex-wrap">
        {bundles.map((item, i) => (
          <FlipCard key={i} item={item} index={i} />
        ))}
      </div>
    </div>
  );
};

export default BrandBundles;
