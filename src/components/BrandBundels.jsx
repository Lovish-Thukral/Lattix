import { motion } from "framer-motion";
import { useState } from "react";

function FlipCard({ item }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className="w-64 h-80"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        className="relative w-full h-full"
      >
        {!isFlipped && (
          <div className="absolute w-full h-full bg-[rgb(25,26,26)] text-white p-6 rounded-xl shadow-lg flex items-center justify-center">
            <p className="text-lg font-semibold">{item.front}</p>
          </div>
        )}

        {/* Back Side - Only visible when flipped (isFlipped is true) */}
        {isFlipped && (
          <div className="absolute w-full h-full bg-white text-black p-6 rounded-xl shadow-lg transform rotate-y-180 flex items-center justify-center">
            <p className="text-lg font-semibold">{item.back}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}

const BrandBundels = () => {
  const sampleData = {
    front: "Front Content",
    back: "Back Content",
  };

  return (
    <div className="flex w-[90%] mx-auto my-7 rounded-[2.5rem] items-center justify-center bg-[rgb(25,26,26)]">
      <FlipCard item={sampleData} />
    </div>
  );
};

export default BrandBundels;
