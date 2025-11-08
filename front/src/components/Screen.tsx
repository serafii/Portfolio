import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HaloBackground from "../backgrounds/Vanta";

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
    "Software Engineering Student and Enthusiast",
    "Proud Garen Main",
    "Eager to Learn and Grow",
    "Developer in Progress",
  ];

  const [currentLine, setCurrentLine] = useState(textLines[0]);

  const setRandomName = () => {
    const index = Math.floor(Math.random() * textLines.length);
    let newName = textLines[index];
    if (newName == currentLine) {
      setRandomName();
    } else {
      setCurrentLine(newName);
    }
    return;
  };

  useEffect(() => {
    const t = setTimeout(() => {
      setRandomName();
    }, 3000);
    return () => clearTimeout(t);
  }, [currentLine]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <HaloBackground />

      <div className="min-h-screen flex flex-col items-center justify-center relative z-10">
        {/* <div className="w-full p-4 absolute top-0 left-0">
          <div className="h-10 w-10 rounded-full bg-amber-500 p-2">S</div>
        </div> */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center justify-center p-8 rounded-lg"
        >
          <div className="p-2 font-bold text-slate-100 text-5xl">
            Sami Erafii
          </div>
          <div className="text-slate-100 p-3 text-xl font-semibold">
            {currentLine}
          </div>
        </motion.div>
        <div className="flex flex-col items-center justify-center w-full animate-bounce absolute bottom-4 hover:cursor-pointer z-10 text-white">
          <div className="font-semibold text-lg">View More</div>
          {chevronDown}
        </div>
      </div>
    </div>
  );
};
export default Main;
