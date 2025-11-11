import React, { useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import Main from "../components/Screen";
import Description from "../components/Description";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
import garen from "../assets/garenDance_nobg.gif";

const Home: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div onMouseMove={handleMouseMove}>
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-100"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(138, 255, 195, 0.15), rgba(0,0,0,0.15))`,
        }}
      />
      <div className="fixed top-5 left-5 z-50 pointer-events-none">
        <div className="w-16 h-16 relative">
          <svg className="-rotate-90 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#ccc"
              strokeWidth="6"
              fill="none"
              opacity="0.3"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="#8affc3"
              strokeWidth="6"
              fill="none"
              strokeDasharray="1"
              strokeDashoffset="1"
              style={{
                pathLength: scrollYProgress,
              }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={garen}
              className="w-10 h-10 object-contain"
              alt="Dancing Garen"
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-32 items-center justify-center relative z-10"
        ref={ref}
      >
        <Main />
        <Description />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </div>
  );
};

export default Home;
