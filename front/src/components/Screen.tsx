import React, { useState, useEffect } from "react";
import { WordsPullUp } from "../utils/words-pull-up";
import { arrow } from "../subcomponents/Icons.tsx";
import { Popover } from "antd";

const Main: React.FC = () => {
  const textLines: string[] = [
    "Hello! I'm",
    "Nice to meet you! I'm",
    "The person who typed this is",
    "Get to know me! I'm",
  ];

  const [currentLine, setCurrentLine] = useState(textLines[0]);
  const [showBackToTop, setShowBackToTop] = useState(false);

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
    let isPastThreshold = window.scrollY > 200;
    setShowBackToTop(isPastThreshold);

    const handleScroll = () => {
      const shouldShow = window.scrollY > 200;
      if (shouldShow === isPastThreshold) return;

      isPastThreshold = shouldShow;
      setShowBackToTop(shouldShow);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
            <button
              onClick={handleBackToTop}
              className="fixed bottom-6 w-16 h-16 right-6 bg-indigo-600 hover:bg-indigo-500 text-white p-3 rounded-full shadow-lg z-50 transition-colors duration-300 hover:cursor-pointer flex items-center justify-center text-2xl invisible sm:visible"
            >
              {arrow}
            </button>
          </Popover>
        )}
      </div>
      <div className="relative z-10 rounded-lg p-8 text-center">
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
      </div>
    </div>
  );
};

export default Main;
