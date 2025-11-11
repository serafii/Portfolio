import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { WordsPullUp } from "../utils/words-pull-up";

const chevronDown: React.ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Main: React.FC = () => {
  const textLines: string[] = [
    "Aspiring Developer Portfolio",
    "Nerdy website",
    "World Wide Web Personal Site",
    "Personal Developer Page",
    "Experimental Playground",
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

  const fadeOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative z-10 w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-8 rounded-lg"
      >
        <div className="p-2 font-bold text-slate-100 text-5xl">
          Sami Erafii's
        </div>
        <WordsPullUp key={currentLine} text={currentLine} />
      </motion.div>

      <motion.div
        style={{ opacity: fadeOpacity }}
        className="flex flex-col items-center justify-center w-full absolute bottom-4 p-2 hover:cursor-pointer z-10 text-white animate-bounce"
        onClick={handleClickScroll}
      >
        <div className="font-semibold text-lg">View More</div>
        {chevronDown}
      </motion.div>
    </div>
  );
};

export default Main;
