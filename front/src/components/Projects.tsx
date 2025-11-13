import React from "react";
import BusinessTemplate from "../subcomponents/Projects/BusinessTemplate";
import EventHub from "../subcomponents/Projects/EventHub";
import SmartWorld from "../subcomponents/Projects/SmartWorld";
import NowWhat from "../subcomponents/Projects/NowWhat";
import ThisWebsite from "../subcomponents/Projects/This";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-full 2xl:w-10/12 3xl:w-2/3 p-16 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-10 2xl:mb-0"
        >
          <h2 className="text-3xl font-bold mb-6">Completed Projects</h2>
          <p className="mb-4 text-xl font-semibold">
            Here are the projects I've worked on so far
          </p>
        </motion.div>
        <div className="w-full flex flex-col lg:flex-row justify-center lg:p-10 gap-10">
          <div className="grid lg:grid-rows-2 grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <SmartWorld />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <BusinessTemplate />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <EventHub />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <ThisWebsite />
            </motion.div>
          </div>
          <div className="flex items-center justify-center">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
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
