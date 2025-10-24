import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageSquare } from "lucide-react";
import HeroDiv from "./HeroDiv";

const imageFAQData = [
  {
    id: "Q1",
    title: "Do you offer revisions?",
    answer:
      "Yes, we always include a revision phase to make sure the final product meets your exact needs and goals.",
  },
  {
    id: "Q2",
    title: "How long does branding take?",
    answer:
      "Most branding projects are completed in about **4 to 5 weeks**. The time depends on how big the project is and what exactly you need.",
  },
  {
    id: "Q3",
    title: "What do you need from me to start the project?",
    answer:
      "To start, we need details about your business, your project goals, and any examples or ideas you like. Our team will then guide you through the rest of the process.",
  },
  {
    id: "Q4",
    title: "What industries do you specialize in?",
    answer:
      "We design for all types of businesses, but we most often work with companies in **tech (SaaS), healthcare, online stores (e-commerce), and finance**.",
  },
  {
    id: "Q5",
    title: "How long does it take to design a website?",
    answer:
      "A new website usually takes between **4 and 6 weeks** from the first design idea to the final launch. Complex sites may take a little longer.",
  },
  {
    id: "Q6",
    title: "How can my website enhance my branding?",
    answer:
      "Your website is the face of your business. It creates a good first impression, makes your brand look professional and trustworthy, and helps customers easily find the information they need.",
  },
  {
    id: "Q7",
    title: "What is user experience (UX) design?",
    answer:
      "UX design is the process of creating products that provide meaningful and relevant experiences to users. This involves the design of the entire process of acquiring and integrating the product, including aspects of branding, design, usability, and function.",
  },
  {
    id: "Q8",
    title: "What is a content management system (CMS)?",
    answer:
      "A CMS is a software application that allows users to create, manage, and modify content on a website without the need for specialized technical knowledge. Popular examples include WordPress, Shopify, and Webflow.",
  },
  {
    id: "Q9",
    title: "How can I optimize my website's speed?",
    answer:
      "Optimization involves techniques like compressing images, minimizing code (HTML, CSS, JavaScript), leveraging browser caching, and using a Content Delivery Network (CDN).",
  },
  {
    id: "Q10",
    title: "Why is website design important?",
    answer:
      "It is crucial for user engagement, SEO, and establishing credibility. A well-designed website makes a strong first impression and guides users toward a desired action.",
  },
];

const AccordionItem = ({ item, openId, setOpenId, index }) => {
  const isOpen = item.id === openId;
  const toggleAccordion = () => setOpenId(isOpen ? null : item.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 * index, duration: 0.5, ease: "easeOut" }}
      className="w-full"
    >
      <motion.header
        id={`title-${item.id}`}
        className="flex justify-between items-center py-5 cursor-pointer select-none border-b border-gray-800 hover:border-gray-700 transition duration-300"
        onClick={toggleAccordion}
        onKeyDown={(e) =>
          (e.key === "Enter" || e.key === " ") && toggleAccordion()
        }
        role="button"
        tabIndex={0}
        aria-controls={`content-${item.id}`}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-light text-gray-100 leading-snug tracking-wide mr-4">
          {item.title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="p-1 rounded-full text-gray-500 hover:text-gray-300"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.header>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={item.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            id={`content-${item.id}`}
            role="region"
            aria-labelledby={`title-${item.id}`}
          >
            <div className="pt-3 pb-6 text-lg text-gray-400 leading-relaxed">
              {item.answer.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1 ? (
                  <strong key={i} className="font-semibold text-gray-200">
                    {part}
                  </strong>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQSection = () => {
  const [openId, setOpenId] = useState(null);
  const half = Math.ceil(imageFAQData.length / 2);
  const col1Data = imageFAQData.slice(0, half);
  const col2Data = imageFAQData.slice(half);

  return (
    <motion.div className=" w-[90%] bg-[rgb(25,26,26)] mx-auto rounded-4xl" >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full mx-auto px-6 sm:px-16 lg:px-20 py-16 "
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-10"
        >
          <p className="text-xl font-semibold text-gray-400 tracking-widest mb-2 uppercase">
            <span className="inline-block h-1 w-1 rounded-full bg-gray-500 mr-2 align-middle"></span>
            FAQ
          </p>
          <h2 className="text-6xl font-extrabold text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Quick answers to the most common questions about our services.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.05 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12"
        >
          <div className="flex flex-col">
            {col1Data.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                openId={openId}
                setOpenId={setOpenId}
                index={index}
              />
            ))}
          </div>

          <div className="flex flex-col">
            {col2Data.map((item, index) => (
              <AccordionItem
                key={item.id}
                item={item}
                openId={openId}
                setOpenId={setOpenId}
                index={index + col1Data.length}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FAQSection;
