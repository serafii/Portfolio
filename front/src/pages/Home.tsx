import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import { CircleUserRound } from "lucide-react";
import Main from "../components/Screen";
import Description from "../components/Description";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Interests from "../components/Interests";
import Contact from "../components/Contact";
import TravelMap from "../components/TravelMap.tsx";
import garen from "../assets/garenDance_nobg.gif";
import DarkModeToggle from "../utils/DarkMode.tsx";
import useIsDark from "../utils/IsDark.tsx";
import cat from "../assets/spin_cat.gif";
import cat2 from "../assets/sideway_cat.gif";
import { useIsMobile } from "../utils/IsMobile";

const navigationItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
];

const observedSectionIds = [
  ...navigationItems.map(({ id }) => id),
  "after-projects",
];

const Home: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const isDark = useIsDark();
  const isMobile = useIsMobile();

  // For mouse position tracking
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [bgOffset, setBgOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMobile) return;
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    setBgOffset({ x, y });
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  // For Garen jump animation
  const [isJumping, setIsJumping] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = observedSectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(
            navigationItems.some(({ id }) => id === visibleSection.target.id)
              ? visibleSection.target.id
              : "",
          );
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = () => {
    if (isJumping) return;
    setIsJumping(true);
    setTimeout(() => setIsJumping(false), 400);
  };

  const scrollToSection = (id: string) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      onMouseMove={isMobile ? undefined : handleMouseMove}
      className="min-h-dvh bg-slate-200 dark:bg-[#1B2A49] relative overflow-hidden transition-colors duration-500"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, ${
            isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.4)"
          } 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: `${bgOffset.x * 8}px ${bgOffset.y * 8}px`,
          maskImage:
            "radial-gradient(ellipse at center, black 85%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 80%, transparent 85%)",
        }}
      />

      {!isMobile && (
        <div
          className="fixed inset-0 pointer-events-none transition-all duration-100"
          style={{
            background: `radial-gradient(circle 120px at ${mousePos.x}px ${mousePos.y}px, rgba(138, 255, 195, 0.1), rgba(0,0,0,0.15))`,
          }}
        />
      )}
      {/* Fixed Top Elements */}
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
              stroke="#5b48f0"
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
      <div className="fixed top-5 right-5 z-50 flex items-center gap-2">
        <DarkModeToggle />
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="hidden hover:cursor-pointer items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-indigo-700 hover:shadow-md sm:inline-flex dark:border-indigo-200/30 dark:bg-indigo-300 dark:text-slate-950 dark:hover:bg-indigo-200"
        >
          <CircleUserRound className="h-4 w-4" aria-hidden="true" />
          Contact Me
        </button>
      </div>

      <nav
        aria-label="Page sections"
        className="fixed top-5 left-1/2 z-50 hidden max-w-max -translate-x-1/2 overflow-x-auto rounded-full border border-slate-300/70 bg-slate-100/85 p-1 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:block dark:border-indigo-300/20 dark:bg-slate-900/75 dark:shadow-black/25"
      >
        <div className="flex w-max items-center gap-1">
          {navigationItems.map(({ id, label }) => {
            const isActive = activeSection === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-full hover:cursor-pointer px-3 py-2 text-xs font-semibold transition-all duration-300 sm:text-sm ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-sm dark:bg-indigo-300 dark:text-slate-950"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-700/80 dark:hover:text-white"
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </nav>

      <div
        className="flex flex-col gap-y-18 3xl:gap-y-24 items-center justify-center relative z-10"
        ref={ref}
      >
        <div className="relative isolate w-full overflow-hidden pb-28">
          <div className="relative z-10 flex flex-col items-center gap-y-18 3xl:gap-y-24">
            <div id="home" className="w-full">
              <Main />
            </div>
            <div id="about" className="w-full">
              <Description />
            </div>
          </div>
        </div>
        <div id="experience" className="w-full">
          <Experience />
        </div>
        <div id="skills" className="w-full">
          <Skills />
        </div>
        <div className="w-full flex items-center justify-center">
          <img
            src={cat2}
            alt="Spinning Cat"
            draggable={false}
            className="w-30 h-30 object-contain"
          />
        </div>
        <div id="projects" className="w-full">
          <Projects />
        </div>
        <div
          id="after-projects"
          className="w-full flex items-center justify-center"
        >
          <img
            src={cat}
            alt="Spinning Cat"
            draggable={false}
            className="w-32 h-32 object-contain"
          />
        </div>
        <div id="interests" className="w-full">
          <Interests />
        </div>
        <div id="travel" className="w-full">
          <TravelMap />
        </div>
        <div id="contact" className="w-full">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
