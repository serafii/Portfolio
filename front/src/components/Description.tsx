import React, { useState } from "react";
import { school, lightBulb, smile } from "../subcomponents/Icons";
import { motion } from "framer-motion";
import nerd from "../assets/about.svg";

const Description: React.FC = () => {
  const [isJumping, setIsJumping] = useState<boolean>(false);

  const handleClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 400);
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="md:w-10/12 w-11/12 2xl:w-5/6 3xl:w-2/3 mx-auto p-16 flex items-center justify-center flex-col text-white"
    >
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-lg mb-10 w-3/4 text-center">
        Hello! I'm Sami Erafii, a dedicated software engineering student with a
        love for coding and problem-solving.
      </p>
      <div className="flex flex-col items-center justify-center">
        <motion.div className="flex 2xl:w-2/5 h-60 w-0 aspect-square items-center justify-center lg:w-1/3 p-2 backdrop-blur-md rounded-xl">
          <img
            src={nerd}
            alt="nerd"
            draggable={false}
            onClick={handleClick}
            className={`flex h-3/4 w-3/4 items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer ${
              isJumping ? "jump-once" : ""
            }`}
          />
        </motion.div>
        <motion.div className="flex justify-center w-4/5 mt-12">
          <div className="font-bold mb-4 w-1/3">
            <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
              {school}
              Education
            </span>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Third year student pursuing a Bachelor's Degree in Software
              Engineering - Concordia University
            </p>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Incoming exchange student at the University of Hong Kong - Winter
              2026
            </p>
          </div>
          <div className="font-bold mb-4 w-1/3">
            <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
              {lightBulb}
              Interests
            </span>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Web Development, Software-as-a-Service (SaaS) and Artificial
              Intelligence
            </p>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Interested in performance optimization, system design and software
              engineering concepts
            </p>
          </div>
          <div className="font-bold w-1/3">
            <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
              {smile}
              Goals
            </span>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Continuously grow as a software engineer
            </p>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Contribute to innovative projects and impactful technologies
            </p>
            <p className="p-2 text-center font-normal text-slate-200 md:text-left">
              Build software that makes a difference
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Description;
