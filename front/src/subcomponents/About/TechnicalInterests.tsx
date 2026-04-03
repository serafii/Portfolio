import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Layers,
  BrainCircuit,
  BarChart3,
  Cloud,
  ShieldCheck,
} from "lucide-react";
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
    label: "Cybersecurity",
    icon: ShieldCheck,
  },
];
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const chipVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
const TechnicalInterests: React.FC = () => {
  return (
    <section className="w-full py-8">
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
        className="mb-6"
      >
        <h3 className="text-2xl font-bold text-violet-600 dark:text-violet-400 mb-1">
          Technical Interests
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Areas I'm passionate about and actively exploring.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3 items-center justify-center"
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
              className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white dark:bg-slate-800/60 border border-gray-200 dark:border-slate-700/50 shadow-sm hover:border-violet-300 dark:hover:border-violet-500/40 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <Icon className="w-4.5 h-4.5 text-violet-500 dark:text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
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
