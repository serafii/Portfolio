import React from "react";
import BusinessTemplate from "../subcomponents/Projects/BusinessTemplate";
import EventHub from "../subcomponents/Projects/EventHub";
import SmartWorld from "../subcomponents/Projects/SmartWorld";
import NowWhat from "../subcomponents/Projects/NowWhat";
import ThisWebsite from "../subcomponents/Projects/This";
import { motion } from "framer-motion";

const Projects: React.FC = () => {
  return (
    <div className="w-full 2xl:w-10/12 p-16 text-center text-white relative z-10">
      <h2 className="text-3xl font-bold mb-6">Completed Projects</h2>
      <p className="mb-4 text-lg">
        Here are the projects I've worked on so far
      </p>
      <div className="w-full grid grid-cols-2 gap-10 p-10 mb-6">
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
      <h2 className="text-3xl font-bold mb-6">In Progress</h2>
      <p className="mb-4 text-lg">What I'm currently working on</p>
      <div className="w-full flex items-center justify-center p-10 mb-6">
        <motion.div
          className="w-2/3"
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
  );
};

export default Projects;
