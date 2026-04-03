import React from "react";
import { motion } from "framer-motion";
import EducationTimeline from "../subcomponents/About/EducationTimeline";
import TechnicalInterests from "../subcomponents/About/TechnicalInterests";

const Description: React.FC = () => {
  return (
    <div className="w-full md:w-5/6 lg:w-full xl:w-3/4 3xl:w-3/4 mx-auto px-10 text-center text-slate-700 dark:text-white z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl text-left font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          About Me
        </h2>
        <p className="font-semibold mb-8 text-xl text-slate-600 dark:text-slate-300 text-left">
          Hello! I'm Sami Erafii, a software engineering student passionate
          about developing software. I enjoy working on projects that make a
          difference and always ready to learn.
        </p>
      </motion.div>
      <EducationTimeline />
      <TechnicalInterests />
    </div>
  );
};

export default Description;
