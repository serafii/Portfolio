import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { WordsPullUp } from "../utils/words-pull-up";

const textLines = [
  "Hello! I'm",
  "Nice to meet you! I'm",
  "The person who typed this is",
  "Get to know me! I'm",
];

const Main: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(textLines[0]);
  const backToTopThresholdRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((current) => {
        const alternatives = textLines.filter((line) => line !== current);
        return alternatives[Math.floor(Math.random() * alternatives.length)];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div
        ref={backToTopThresholdRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[200px] h-px w-px"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 rounded-lg p-4 text-center sm:p-8"
      >
        <WordsPullUp
          key={currentLine}
          text={currentLine}
          className="text-base sm:text-xl"
        />
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text pt-1 text-3xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-5xl">
          Sami Erafii.
        </div>
        <p className="pt-4 sm:pt-8">
          <span className="text-sm text-slate-700 dark:text-slate-300 sm:text-lg">
            Software Engineering Student | Full Stack Developer | AI &
            Automation
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Main;
