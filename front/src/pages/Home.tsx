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

  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setBgOffset({ x, y });
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const [isJumping, setIsJumping] = useState<boolean>(false);

  const handleClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 400);
  };

  return (
    <div onMouseMove={handleMouseMove} className="bg-[#dce2ea] relative">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.4) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: `${bgOffset.x * 8}px ${bgOffset.y * 8}px`,
          maskImage:
            "radial-gradient(ellipse at center, black 85%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 80%, transparent 85%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-10 h-2/3 w-48 bg-linear-to-b from-blue-600/20 to-transparent rotate-12 blur-2xl" />
        <div className="absolute right-0 -top-20 h-2/3 w-56 bg-linear-to-b from-blue-400/20 to-transparent -rotate-6 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-2/3 w-64 bg-linear-to-t from-blue-600/25 to-transparent -rotate-6 blur-3xl" />
        <div className="absolute left-1/2 -top-32 -translate-x-1/2 h-96 w-96 bg-linear-to-b from-cyan-400/10 to-transparent blur-3xl" />
      </div>
      <div
        className="fixed inset-0 pointer-events-none transition-all duration-100"
        style={{
          background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(138, 255, 195, 0.1), rgba(0,0,0,0.15))`,
        }}
      />
      <div className="fixed top-5 left-5 z-50 ">
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
              stroke="#A79FFF"
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
              draggable={false}
              className={`w-10 h-10 object-contain hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ${
                isJumping ? "jump-once" : ""
              }`}
              alt="Dancing Garen"
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-24 3xl:gap-y-32 items-center justify-center relative z-10"
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
