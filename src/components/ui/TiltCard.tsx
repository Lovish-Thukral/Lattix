import { motion, useMotionValue, useTransform, MotionValue } from "framer-motion";
import React from "react";

interface TiltCardProps {
  object: React.ReactNode;
}

const TiltCard: React.FC<TiltCardProps> = ({ object }) => {
  // Motion values
  const x: MotionValue<number> = useMotionValue(100);
  const y: MotionValue<number> = useMotionValue(100);

  const rotateX = useTransform(y, [0, 400], [5, -5]);
  const rotateY = useTransform(x, [0, 400], [-5, 5]);

  // Mouse move handler
  const handleMouse = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };

  return (
    <motion.div
      style={{
        display: "flex",
        placeItems: "center",
        borderRadius: 30,
        perspective: 800,
        marginTop: 30,
        marginBottom: 30,
      }}
      onMouseMove={handleMouse}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          display: "flex",
          alignItems: "center",
        }}
      >
        {object}
      </motion.div>
    </motion.div>
  );
};

export default TiltCard;
