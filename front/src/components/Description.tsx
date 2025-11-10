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
    <div className="w-2/3 mx-auto p-16 text-center text-white relative z-10">
      <h2 className="text-4xl font-bold mb-4">About Me</h2>
      <p className="text-xl mb-8">
        Hello! I'm Sami Erafii, a dedicated software engineering student with a
        love for coding and problem-solving.
      </p>
      <div className="p-12 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ul className="text-lg">
            <li className="font-bold mb-4">
              <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
                {school}
                Education
              </span>
              <p className="p-2 text-center font-normal text-slate-200 md:text-left">
                Third year student pursuing a Bachelor's Degree in Software
                Engineering - Concordia University
              </p>
              <p className="p-2 text-center font-normal text-slate-200 md:text-left">
                Future exchange student at the University of Hong Kong - Winter
                2026
              </p>
            </li>
            <li className="font-bold mb-4">
              <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
                {lightBulb}
                Interests
              </span>
              <p className="p-4 text-center font-normal text-slate-200 md:text-left">
                Web Development, Artifical Intelligence, Software as a Service
                (SaaS)
              </p>
            </li>
            <li className="font-bold">
              <span className="flex justify-center gap-2 whitespace-nowrap md:justify-start">
                {smile}
                Goals
              </span>
              <p className="p-4 text-center font-normal text-slate-200 md:text-left">
                To learn as much as I can, contribute to exciting projects, and
                leave my mark in the tech world.
              </p>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex h-full w-0 aspect-square items-center justify-center lg:w-1/3 rounded-full p-8 backdrop-blur-3xl"
        >
          <img
            src={nerd}
            alt="nerd"
            onClick={handleClick}
            className={`flex h-3/4 w-3/4 items-center justify-center hover:scale-105 transition-transform duration-300 ease-in-out hover:cursor-pointer ${
              isJumping ? "jump-once" : ""
            }`}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Description;
