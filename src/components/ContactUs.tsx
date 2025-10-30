import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import React from "react";

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  project: string;
}

interface Position {
  x: number;
  y: number;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  // single-select states
  const [selectedInterest, setSelectedInterest] = useState<string>("");
  const [selectedCombo, setSelectedCombo] = useState<string>("");
  const [selectedBudget, setSelectedBudget] = useState<string>("");
  const [referral, setReferal] = useState<string>("");
  const [freeButtonPosition, setFreeButtonPosition] = useState<Position>({
    x: 0,
    y: 0,
  });
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const freeButtonRef = useRef<HTMLButtonElement | null>(null);

  const interests: string[] = [
    "Landing Page",
    "UI/UX",
    "SEO",
    "Web Development",
    "Mobile Development",
    "Branding",
    "Stationery",
    "Gifting",
  ];

  const combos: string[] = ["Ignite", "Thrive", "Elevate", "Scale", "Dominate"];
  const referralCodes: string[] = ["SSP05"];
  // "Free" option remains non-selectable and will run away on hover
  const budgetOptions: string[] = ["Free", "< ₹10k", "₹10k - ₹25k", "₹30k >"];

  const handleInterestSelect = (interest: string): void => {
    // single-select: click same to unselect
    setSelectedInterest((prev) => (prev === interest ? "" : interest));
  };

  const handleComboSelect = (combo: string): void => {
    setSelectedCombo((prev) => (prev === combo ? "" : combo));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBudgetSelect = (budget: string): void => {
    // Free is intentionally non-selectable — hovering/clicking it triggers the runaway animation
    if (budget === "Free") {
      runAwayFree();
      return;
    }
    setSelectedBudget(budget);
  };

  const runAwayFree = (): void => {
    if (!containerRef.current || !freeButtonRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = freeButtonRef.current.getBoundingClientRect();

    // Compute safe random position inside container
    const maxX = Math.max(0, containerRect.width - buttonRect.width);
    const maxY = Math.max(0, containerRect.height - buttonRect.height);

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    setFreeButtonPosition({ x: newX, y: newY });
    setIsRunning(true);

    // show running state for a bit
    setTimeout(() => {
      setIsRunning(false);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log({
      ...formData,
      interest: selectedInterest,
      combo: selectedCombo,
      budget: selectedBudget,
    });
    // implement submission logic (API call etc.) here
  };

  return (
    <section className="py-16 sm:py-20 overflow-x-hidden w-full" id="Contact">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl bebas-neue-regular tracking-wide text-white w-[90%] mx-auto sm:text-left sm:ml-[7%]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Let's make an impact
      </motion.h1>

      <div
        ref={containerRef}
        className="h-max w-[95%] md:w-[90%] mx-auto my-7 bg-[rgb(25,26,26)] px-6 sm:px-8 md:px-[9%] py-12 sm:py-16 rounded-[3rem] relative"
      >
        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Name / Company */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <label className="block text-white text-base font-medium mb-3">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-white text-base font-medium mb-3">
                Company
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                placeholder="Your company"
              />
            </div>
          </motion.div>

          {/* Email / Phone */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <label className="block text-white text-base font-medium mb-3">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-white text-base font-medium mb-3">
                Your Phone
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full bg-transparent border-b border-gray-600 text-white text-lg py-3 px-0 focus:outline-none focus:border-white transition-colors"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
          </motion.div>

          {/* Interests (single-select) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label className="block text-white text-base font-medium mb-4">
              I'm interested in...
            </label>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <motion.button
                  key={interest}
                  type="button"
                  onClick={() => handleInterestSelect(interest)}
                  className={`px-6 py-3 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                    selectedInterest === interest
                      ? "bg-white text-black border-white"
                      : "bg-transparent text-white border-gray-600 hover:border-white"
                  }`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * index }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {interest}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Budget (Free is non-selectable and runs away on hover) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label className="block text-white text-base font-medium mb-4">
              Project Budget (INR)
            </label>
            <div className="flex flex-wrap items-center gap-3 relative min-h-[50px]">
              {budgetOptions.map((budget, index) => {
                if (budget === "Free") {
                  return (
                    <motion.button
                      key={budget}
                      ref={freeButtonRef}
                      type="button"
                      onMouseEnter={runAwayFree}
                      onClick={runAwayFree}
                      className="not-sm:hidden px-8 py-3 rounded-full border bg-transparent text-white border-gray-600 hover:border-white transition-colors"
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x: isRunning ? freeButtonPosition.x : 0,
                        y: isRunning ? freeButtonPosition.y : 0,
                        rotate: isRunning ? [0, -8, 8, -8, 0] : 0,
                      }}
                      transition={{
                        type: "spring",
                        damping: 12,
                        stiffness: 300,
                        rotate: {
                          duration: 0.3,
                          repeat: Infinity,
                          ease: "linear",
                        },
                      }}
                      style={{
                        position: isRunning ? "absolute" : "relative",
                        zIndex: 20,
                        cursor: "not-allowed", // indicates non-selectable
                      }}
                      aria-disabled={true}
                    >
                      {budget} 🏃‍♂️
                    </motion.button>
                  );
                }

                return (
                  <motion.button
                    key={budget}
                    type="button"
                    onClick={() => handleBudgetSelect(budget)}
                    className={`px-6 py-3 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                      selectedBudget === budget
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-gray-600 hover:border-white"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {budget}
                  </motion.button>
                );
              })}
            </div>

            <AnimatePresence>
              {isRunning && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="text-gray-400 text-sm mt-3"
                  transition={{ duration: 0.3 }}
                >
                  Nice try! But we don't work for free 😄
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Branding Combos (single-select) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-full grid grid-cols-1 lg:grid-cols-3 lg:gap-8"
          >
            <div className="lg:col-span-2">
              <a
                className="block text-white text-base md:text-xl font-medium mb-4 underline underline-offset-8 decoration-dotted"
                href="/services#deals"
              >
                Have you checked out our branding combos? &#8599;
              </a>
              <div className="flex flex-wrap gap-3 mb-6 lg:mb-0">
                {combos.map((combo, index) => (
                  <motion.button
                    key={combo}
                    type="button"
                    onClick={() => handleComboSelect(combo)}
                    className={`px-6 py-3 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                      selectedCombo === combo
                        ? "bg-white text-black border-white"
                        : "bg-transparent text-white border-gray-600 hover:border-white"
                    }`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.05 * index }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {combo}
                  </motion.button>
                ))}
              </div>
            </div>

            {selectedCombo && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="lg:col-span-1 lg:col-start-3 mr-24"
              >
                <div className="lg:justify-self-end">
                  <label
                    htmlFor="referral"
                    className="text-white mb-4 text-base md:text-xl font-medium block"
                  >
                    Do you have a referral code?
                  </label>
                  <input
                    id="referral"
                    type="text"
                    placeholder="Enter code"
                    value={referral}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setReferal(e.target.value.toUpperCase())
                    }
                    className="uppercase bg-transparent border border-gray-600 text-white px-4 py-3 rounded-full focus:outline-none focus:border-white transition-all w-40 sm:w-52"
                  />
                  {referral.trim().length >= 4 &&
                    referralCodes.includes(referral.trim()) && (
                      <p className="mt-3 text-white">
                        Referral verified — 5% off unlocked! 😎
                      </p>
                    )}

                  {referral.trim().length >= 5 &&
                    !referralCodes.includes(referral.trim()) && (
                      <p className="mt-3 text-white">
                        That code’s not on the list. Try again? 🧐
                      </p>
                    )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Project Description & Submit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <label className="block text-white text-base font-medium mb-3">
              Tell us about your project
            </label>
            <textarea
              name="project"
              value={formData.project}
              onChange={handleInputChange}
              rows={6}
              className="w-full bg-transparent border border-gray-600 text-white text-lg py-4 px-4 rounded-xl focus:outline-none focus:border-white transition-colors resize-none"
              placeholder="Describe your project in detail..."
            />
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="sm:flex flex-1 justify-end w-full">
              <motion.button
                type="submit"
                className="bg-white text-black my-2 px-12 py-4 not-sm:w-full rounded-full font-medium text-lg hover:bg-gray-200 hover:text-black transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
