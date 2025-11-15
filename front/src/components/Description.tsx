import React from "react";
import { school, lightBulb, smile } from "../subcomponents/Icons";
import education from "../assets/education.svg";
import goals from "../assets/goals.svg";
import server from "../assets/server.svg";
import { motion } from "framer-motion";

const Description: React.FC = () => {
  return (
    <div className="w-full md:w-5/6 lg:w-full xl:w-3/4 3xl:w-3/4 mx-auto p-16 text-center text-slate-700 dark:text-white z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          About Me
        </h2>
        <p className="font-semibold mb-8 text-xl text-slate-600 dark:text-slate-300 ">
          Hello! I'm Sami Erafii, a dedicated software engineering student with
          a love for coding and problem-solving.
        </p>
      </motion.div>
      <div className="py-12 flex justify-center flex-col lg:flex-row gap-y-12 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="font-bold lg:w-1/3 text-lg"
        >
          <img
            src={education}
            alt="About"
            className="mx-auto mb-10 h-48 hover:scale-105 ease-in-out duration-300 transition-all"
          />
          <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
            {school}
            Education
          </span>
          <div className="lg:p-2">
            <p className="p-2 text-center font-medium  md:text-left">
              Third year student pursuing a Bachelor's Degree in Software
              Engineering - Concordia University
            </p>
            <p className="p-2 text-center font-medium md:text-left">
              Incoming exchange student at the University of Hong Kong - Winter
              2026
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-bold lg:w-1/3 text-lg"
        >
          <img
            src={server}
            alt="About"
            className="mx-auto mb-10 h-48 hover:scale-105 ease-in-out duration-300 transition-all"
          />
          <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
            {lightBulb}
            Interests
          </span>
          <div className="lg:p-2">
            <p className="p-2 text-center font-medium md:text-left">
              Web Development, Software-as-a-Service (SaaS) and Artificial
              Intelligence
            </p>
            <p className="p-2 text-center font-medium md:text-left">
              Interested in performance optimization, system design and software
              engineering concepts
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="font-bold lg:w-1/3 text-lg"
        >
          <img
            src={goals}
            alt="About"
            className="mx-auto mb-10 h-48 hover:scale-105 ease-in-out duration-300 transition-all"
          />
          <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
            {smile}
            Goals
          </span>
          <div className="lg:p-2">
            <p className="p-2 text-center font-medium md:text-left">
              Continuously grow as a software engineer
            </p>
            <p className="p-2 text-center font-medium md:text-left">
              Contribute to innovative projects and impactful technologies
            </p>
            <p className="p-2 text-center font-medium md:text-left">
              Build software that makes a difference
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
