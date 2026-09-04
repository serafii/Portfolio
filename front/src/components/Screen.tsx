import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WordsPullUp } from "../utils/words-pull-up";
import { arrow } from "../subcomponents/Icons.tsx";

const textLines = [
  "Hello! I'm",
  "Nice to meet you! I'm",
  "The person who typed this is",
  "Get to know me! I'm",
];

const Main: React.FC = () => {
  const [currentLine, setCurrentLine] = useState(textLines[0]);
  const [showBackToTop, setShowBackToTop] = useState(false);
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

  useEffect(() => {
    const threshold = backToTopThresholdRef.current;
    if (!threshold) return;

    const observer = new IntersectionObserver(([entry]) => {
      setShowBackToTop(!entry.isIntersecting);
    });

    observer.observe(threshold);
    return () => observer.disconnect();
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      <div
        ref={backToTopThresholdRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-[200px] h-px w-px"
      />
      <div className="absolute top-0 left-0 w-full h-1/2 z-0">
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackToTop}
              aria-label="Back to top"
              className="group fixed bottom-6 right-6 z-100 invisible flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 p-3 text-2xl text-white shadow-lg transition-colors duration-300 hover:cursor-pointer hover:bg-indigo-500 sm:visible"
            >
              {arrow}
              <span
                role="tooltip"
                className="pointer-events-none absolute bottom-full right-0 mb-3 whitespace-nowrap rounded-md bg-indigo-600 px-2.5 py-1.5 text-xs font-medium opacity-0 shadow-md transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
              >
                Back to Top
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
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
