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
      staggerChildren: 0.08,
    },
  },
};
const rowVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 8,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};
const TechnicalInterests: React.FC = () => {
  return (
    <section className="w-full pt-10 sm:pt-12">
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
        className="mb-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1"
      >
        <h3 className="text-xl font-bold text-violet-600 dark:text-violet-400 sm:text-2xl">
          Technical Interests
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Areas I'm passionate about and actively exploring.
        </p>
      </motion.div>

      <motion.ul
        className="grid border-t border-indigo-300/60 dark:border-violet-300/15 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-50px",
        }}
      >
        {interests.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.li
              key={item.label}
              variants={rowVariants}
              className="group relative flex items-center gap-4 border-b border-indigo-300/60 py-3.5 dark:border-violet-300/15 sm:odd:pr-6 sm:even:border-l sm:even:pl-6 sm:last:col-span-2"
            >
              <span className="font-mono text-xs tabular-nums text-indigo-500/70 dark:text-violet-300/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-sm font-medium text-slate-700 transition-colors duration-300 group-hover:text-indigo-600 dark:text-slate-200 dark:group-hover:text-violet-300 sm:text-base">
                {item.label}
              </span>
              <Icon className="h-4.5 w-4.5 text-slate-400 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:text-violet-500 dark:text-violet-300/50 dark:group-hover:text-violet-300" />
              <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 h-px w-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-[width] duration-500 ease-out group-hover:w-full dark:from-violet-400 dark:to-fuchsia-400"
              />
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default TechnicalInterests;
