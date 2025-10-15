import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react'; 

// 1. Easy-to-read, Search-Optimized FAQ Data
const simpleFAQData = [
  {
    id: 'A1',
    title: "Can I get changes or revisions?",
    answer: "Yes, we always include a revision phase to make sure the final product meets your exact needs and goals.",
  },
  {
    id: 'A2',
    title: "How long does it take to do branding?",
    answer: "Most branding projects are completed in about **4 to 5 weeks**. The time depends on how big the project is and what exactly you need.",
  },
  {
    id: 'A3',
    title: "What do you need from me to start?",
    answer: "To start, we need details about your business, your project goals, and any examples or ideas you like. Our team will then guide you through the rest of the process.",
  },
  {
    id: 'A4',
    title: "What kinds of companies do you work with?",
    answer: "We design for all types of businesses, but we most often work with companies in **tech (SaaS), healthcare, online stores (e-commerce), and finance**.",
  },
  {
    id: 'A5',
    title: "How long does website design take?",
    answer: "A new website usually takes between **4 and 6 weeks** from the first design idea to the final launch. Complex sites may take a little longer.",
  },
  {
    id: 'A6',
    title: "Why is a good website important for my brand?",
    answer: "Your website is the face of your business. It creates a good first impression, makes your brand look professional and trustworthy, and helps customers easily find the information they need.",
  },
];

// Reusable Accordion Item Component
const AccordionItem = ({ item, openId, setOpenId }) => {
  const isOpen = item.id === openId;

  const toggleAccordion = () => {
    setOpenId(isOpen ? null : item.id);
  };

  return (
    <div className="border border-gray-200 bg-white rounded-xl shadow-md transition duration-300 hover:shadow-lg">
      {/* Accordion Header/Trigger */}
      <motion.header
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={toggleAccordion}
        initial={false}
        aria-controls={`content-${item.id}`}
        aria-expanded={isOpen}
      >
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          {item.title}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Chevron icon */}
          <ChevronDown className="w-5 h-5 text-sky-500" />
        </motion.div>
      </motion.header>

      {/* Accordion Content/Body (with Framer Motion for animation) */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            id={`content-${item.id}`}
            role="region"
            aria-labelledby={`title-${item.id}`}
          >
            <div className="pt-0 pb-5 px-5 text-gray-700 leading-relaxed border-t border-gray-100 mt-2">
              {item.answer}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};


// Main FAQ Component
const FAQSection = () => {
  // State to manage a single open item (only one FAQ item can be open at a time)
  const [openId, setOpenId] = useState(null); 

  return (
    <section className="py-16 sm:py-24 bg-gray-50" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-sky-600 flex items-center justify-center">
            <MessageSquare className="w-4 h-4 mr-2" />
            Common Questions
          </p>
          <h2 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Frequently Asked Questions (FAQ)
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            Quick answers to the most common questions about our design and branding services.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-6">
          {simpleFAQData.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              openId={openId}
              setOpenId={setOpenId}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;