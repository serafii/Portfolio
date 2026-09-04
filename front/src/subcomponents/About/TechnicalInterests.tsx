import React from "react";
import { motion, type Variants } from "framer-motion";
import { Layers, BrainCircuit, BarChart3, Cloud, Workflow } from "lucide-react";
const interests = [
  {
    label: "Full Stack Development",
    icon: Layers,
  },
  {
    label: "AI & GenAI",
    icon: BrainCircuit,
  },
  {
    label: "Data Science",
    icon: BarChart3,
  },
  {
    label: "Cloud Computing",
    icon: Cloud,
  },
  {
    label: "Automation",
    icon: Workflow,
  },
];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const chipVariants: Variants = {
  hidden: {
    scale: 0.85,
  },
  visible: {
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
const TechnicalInterests: React.FC = () => {
  return (
    <section className="w-full py-5 sm:py-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.5,
        }}
        className="mb-4 sm:mb-6"
      >
        <h3 className="mb-1 text-xl font-bold text-violet-600 dark:text-violet-400 sm:text-2xl">
          Technical Interests
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Areas I'm passionate about and actively exploring.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
      >
        {interests.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.label}
              variants={chipVariants}
              className="group flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-all duration-300 hover:border-violet-300 hover:shadow-md dark:border-violet-300/15 dark:bg-[#160c23]/80 dark:hover:border-violet-400/40 sm:gap-2.5 sm:px-4 sm:py-2.5"
            >
              <Icon className="w-4.5 h-4.5 text-violet-500 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs font-medium text-gray-700 dark:text-gray-300 sm:text-sm">
                {item.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default TechnicalInterests;
