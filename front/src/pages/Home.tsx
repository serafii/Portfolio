import React, { useRef } from "react";
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

  return (
    <>
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
              stroke="#4db68b"
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
        className="flex flex-col gap-y-32 items-center justify-center relative"
        ref={ref}
      >
        <Main />
        <Description />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </div>
    </>
  );
};

export default Home;
