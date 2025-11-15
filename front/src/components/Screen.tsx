import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WordsPullUp } from "../utils/words-pull-up";
import Aurora from "../utils/Aurora.tsx";
import { arrow } from "../subcomponents/Icons.tsx";
import { Popover } from "antd";
import { chevronDown } from "../subcomponents/Icons.tsx";

const Main: React.FC = () => {
  const textLines: string[] = [
    "Aspiring Developer Portfolio",
    "World Wide Web Personal Site",
    "Personal Developer Page",
    "Concise Dev Biography",
  ];

  const [currentLine, setCurrentLine] = useState(textLines[0]);
  const [scrollY, setScrollY] = useState(0);

  const setRandomName = () => {
    const index = Math.floor(Math.random() * textLines.length);
    let newName = textLines[index];
    if (newName === currentLine) {
      setRandomName();
    } else {
      setCurrentLine(newName);
    }
  };

  useEffect(() => {
    const interval = setInterval(setRandomName, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClickScroll = () => {
    const offset = window.innerWidth >= 1800 ? 400 : 100;
    window.scrollTo({
      top: window.innerHeight - offset,
      behavior: "smooth",
    });
  };

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const fadeOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 w-full">
      <div className="absolute top-0 left-0 w-full h-1/2 z-0">
        <Aurora
          colorStops={["#1B2A49", "#A79FFF", "#D3C0FF"]}
          blend={0.5}
          amplitude={0.8}
          speed={0.4}
        />
        {scrollY > 200 && (
          <Popover
            content={<p className="text-white">Back to Top</p>}
            placement="top"
            color="#A79FFF"
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleBackToTop}
              className="fixed bottom-6 w-16 h-16 right-6 bg-[#A79FFF]/80 hover:bg-[#A79FFF] text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300 hover:cursor-pointer flex items-center justify-center text-2xl invisible sm:visible"
            >
              {arrow}
            </motion.button>
          </Popover>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-8 rounded-lg"
      >
        <div className="p-2 font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 text-5xl">
          Sami Erafii's
        </div>
        <WordsPullUp key={currentLine} text={currentLine} />
      </motion.div>

      <motion.div
        style={{ opacity: fadeOpacity }}
        className="flex flex-col items-center justify-center w-full absolute bottom-4 p-2 hover:cursor-pointer z-10 text-slate-600 dark:text-slate-300 invisible md:visible"
        onClick={handleClickScroll}
      >
        <div className="font-semibold text-lg bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          View More
        </div>
        {chevronDown}
      </motion.div>
    </div>
  );
};

export default Main;
