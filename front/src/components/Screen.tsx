import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WordsPullUp } from "../utils/words-pull-up";
import { arrow } from "../subcomponents/Icons.tsx";
import { useReducedMotion } from "../utils/ReducedMotion";
import { Popover } from "antd";

const textLines = [
  "Hello! I'm",
  "Nice to meet you! I'm",
  "The person who typed this is",
  "Get to know me! I'm",
];

const Main: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(textLines[0]);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((current) => {
        const alternatives = textLines.filter((line) => line !== current);
        return alternatives[Math.floor(Math.random() * alternatives.length)];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      setShowBackToTop((currentlyShown) =>
        currentlyShown === shouldShow ? currentlyShown : shouldShow,
      );
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 z-0">
        {showBackToTop && (
          <Popover
            content={<p className="text-white">Back to Top</p>}
            placement="top"
            color="oklch(58.5% 0.233 277.117) "
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackToTop}
              className="fixed bottom-6 w-16 h-16 right-6 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300 hover:cursor-pointer flex items-center justify-center text-2xl invisible sm:visible"
            >
              {arrow}
            </motion.button>
          </Popover>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 rounded-lg p-8 text-center"
      >
        <WordsPullUp key={currentLine} text={currentLine} />
        <div className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text pt-1 text-5xl font-bold text-transparent dark:from-indigo-400 dark:to-purple-400">
          Sami Erafii.
        </div>
        <p className="pt-8">
          <span className="text-lg  text-slate-700 dark:text-slate-300">
            Software Engineering Student | Full Stack Developer | AI &
            Automation
          </span>
        </p>
      </motion.div>
    </div>
  );
};

export default Main;
