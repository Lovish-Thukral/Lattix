import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    project: "",
  });

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedBudget, setSelectedBudget] = useState("");
  const [freeButtonPosition, setFreeButtonPosition] = useState({ x: 0, y: 0 });
  const [isRunning, setIsRunning] = useState(false);
  const containerRef = useRef(null);
  const freeButtonRef = useRef(null);

  const interests = [
    "Landing Page",
    "UI/UX",
    "SEO",
    "Web Development",
    "Mobile Developments",
    "Branding",
    "Stationary",
    "Gifting",
  ];

  // "Free" option is back, along with the INR budget ranges
  const budgetOptions = ["Free", "< ₹10k    ", "₹10k - ₹25k", "₹30k >"];

  const handleInterestToggle = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBudgetSelect = (budget) => {
    // If "Free" is clicked, trigger the runaway animation instead of selecting it
    if (budget === "Free") {
      runAwayFree();
      return;
    }
    setSelectedBudget(budget);
  };

  const runAwayFree = () => {
    if (!containerRef.current || !freeButtonRef.current) return;

    setIsRunning(true);
    const containerRect = containerRef.current.getBoundingClientRect();
    const buttonRect = freeButtonRef.current.getBoundingClientRect();

    const newX = Math.random() * (containerRect.width - buttonRect.width);
    const newY = Math.random() * (containerRect.height - buttonRect.height);

    setFreeButtonPosition({ x: newX, y: newY });

    // Reset the state after the animation and message have been shown
    setTimeout(() => {
      setIsRunning(false);
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      ...formData,
      interests: selectedInterests,
      budget: selectedBudget,
    });
    // Add submission logic here
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
          {/* Form fields (Name, Company, Email, Phone) */}
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

          {/* Interests Section */}
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
                  onClick={() => handleInterestToggle(interest)}
                  className={`px-6 py-3 rounded-full border text-sm sm:text-base transition-all duration-300 ${
                    selectedInterests.includes(interest)
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

          {/* Budget Section */}
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
                // Conditional rendering for the "Free" button
                if (budget === "Free") {
                  return (
                    <motion.button
                      key={budget}
                      ref={freeButtonRef}
                      type="button"
                      onMouseEnter={runAwayFree}
                      onClick={runAwayFree}
                      className=" not-sm:hidden px-8 py-3 rounded-full border bg-transparent text-white border-gray-600 hover:border-white transition-colors"
                      initial={{ x: 0, y: 0 }}
                      animate={{
                        x: isRunning ? freeButtonPosition.x : 0,
                        y: isRunning ? freeButtonPosition.y : 0,
                        rotate: isRunning ? [0, -10, 10, -10, 0] : 0,
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
                        zIndex: 10,
                      }}
                    >
                      {budget} 🏃‍♂️
                    </motion.button>
                  );
                }

                // Render normal budget buttons
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

          {/* Project Description & Submit Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
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
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="sm:flex flex-1 justify-between w-full">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-4 rounded-xl not-md:w-full bg-pink-500 text-white font-semibold shadow-md hover:bg-pink-600 transition my-2"
              >
                Before you proceed… are you allergic to deals?
              </motion.button>

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
