import React from "react";
import { motion } from "framer-motion";
import TechnicalInterests from "../subcomponents/About/TechnicalInterests";
import me from "../assets/moi.jpg";

const About: React.FC = () => {
  return (
    <section className="w-full px-6 py-4 sm:px-10">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="mx-auto grid w-full max-w-6xl items-center gap-10 rounded-[2.25rem] border border-indigo-200/70 bg-slate-100/85 p-7 shadow-xl shadow-indigo-950/5 transition-colors duration-300 hover:border-violet-400/70 dark:border-violet-300/15 dark:bg-[#160c23]/90 dark:shadow-black/25 dark:hover:border-violet-300/45 md:grid-cols-[minmax(12rem,0.65fr)_minmax(0,1.35fr)] md:gap-12 md:rounded-[3rem] md:p-12"
      >
        <div className="flex justify-center md:justify-start">
          <div className="relative aspect-square w-44 overflow-hidden rounded-full border-4 border-white/80 bg-violet-100 p-1 shadow-xl shadow-violet-950/20 dark:border-violet-300/20 dark:bg-[#0d0815] sm:w-52 md:w-full md:max-w-64">
            <img
              src={me}
              alt="My photo"
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-full object-cover object-left"
            />
          </div>
        </div>

        <div className="text-center md:text-left">
          <h2 className="mb-5 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-4xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400">
            About Me
          </h2>
          <p className="max-w-2xl text-lg font-medium leading-relaxed text-slate-600 dark:text-slate-300">
            Hello! I&apos;m Sami Erafii, a software engineering student who
            enjoys building software and learning through projects that make a
            difference. I&apos;m especially drawn to work that combines strong
            engineering foundations with practical, useful experiences.
          </p>
          <TechnicalInterests />
        </div>
      </motion.div>
    </section>
  );
};

export default About;
