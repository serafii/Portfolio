import React from "react";
import { useIsMobile } from "../utils/IsMobile";
import BusinessTemplate from "../subcomponents/Projects/BusinessTemplate";
import EventHub from "../subcomponents/Projects/EventHub";
import SmartWorld from "../subcomponents/Projects/SmartWorld";
import NowWhat from "../subcomponents/Projects/NowWhat";
import ThisWebsite from "../subcomponents/Projects/This";
import { motion, useReducedMotion } from "framer-motion";

const Projects: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  const disableMotion: boolean = shouldReduceMotion || isMobile;

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-full 2xl:w-10/12 3xl:w-2/3 p-16 text-center text-slate-700 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 2xl:mb-0"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Completed Projects
          </h2>
          <p className="mb-4 text-xl font-semibold text-slate-600 dark:text-slate-300">
            Here are the projects I've worked on so far
          </p>
        </motion.div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:p-10 gap-10">
          <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={disableMotion ? undefined : { scale: 1.05 }}
            >
              <SmartWorld />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={disableMotion ? undefined : { scale: 1.05 }}
            >
              <EventHub />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={disableMotion ? undefined : { scale: 1.05 }}
            >
              <BusinessTemplate />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={disableMotion ? undefined : { scale: 1.05 }}
            >
              <ThisWebsite />
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={disableMotion ? undefined : { scale: 1.05 }}
            >
              <NowWhat />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
