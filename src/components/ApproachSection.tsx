import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { Search, NotebookPen, Wallpaper, Figma, BugIcon } from "lucide-react";

interface Approach {
  title: string;
  description: string;
  number: string;
  icon: React.ReactNode;
}

const approaches: Approach[] = [
  {
    title: "Deep Dive",
    description: "In-depth exploration of business and the product.",
    number: "01",
    icon: <Search className="absolute right-4 bottom-4 text-gray-500" />,
  },
  {
    title: "Pre-Production",
    description:
      "Identification of the core problems, pain points, and art direction.",
    number: "02",
    icon: <NotebookPen className="absolute right-4 bottom-4 text-gray-500" />,
  },
  {
    title: "Design Proposition",
    description: "Presenting concept solutions.",
    number: "03",
    icon: <Wallpaper className="absolute right-4 bottom-4 text-gray-500" />,
  },
  {
    title: "Design Development",
    description: "Further development of the concept to final product.",
    number: "04",
    icon: <Figma className="absolute right-4 bottom-4 text-gray-500" />,
  },
  {
    title: "Delivery and Testing",
    description: "Design finalization, testing, delivery and handover.",
    number: "05",
    icon: <BugIcon className="absolute right-4 bottom-4 text-gray-500" />,
  },
];

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 80, rotate: -10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      type: "spring",
      stiffness: 100,
    } as Transition,
  }),
};

export default function ApproachSection() {
  return (
    <div className="flex-1">
      <section className="w-[90%] mx-auto md:px-10 px-2 md:my-16 my-5 text-white grid sm:grid-cols-8 gap-6 items-center">
        <motion.h3
          className="text-xl font-bold col-span-8 sm:col-span-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          ⁕ Our Approach
        </motion.h3>

        <motion.h1
          className="text-3xl md:text-4xl font-semibold col-span-8 sm:col-span-5 md:px-8 leading-snug"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          First step to solving a problem is recognizing there is one.
        </motion.h1>
      </section>

      <div className="my-12 w-full flex flex-wrap justify-center gap-6 ">
        {approaches.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariant}
            className="bg-[rgb(25,26,26)] p-6 rounded-xl w-64 h-60 not-sm:w-[90%] relative shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h3 className="text-white font-medium text-lg mb-4">
              • {item.title}
            </h3>
            <p className="text-gray-400 text-sm mb-6">{item.description}</p>
            <span className="absolute bottom-4 text-gray-500 text-2xl">
              {item.number}
            </span>
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
