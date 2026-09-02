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
import DotField from "../../components/DotField.jsx";

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
  const isDark = useIsDark();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
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
    <div className="portfolio-page relative min-h-dvh overflow-hidden transition-colors duration-500">
      <DotField
        className="pointer-events-none absolute z-0 inset-0"
        dotRadius={1.5}
        dotSpacing={14}
        bulgeStrength={80}
        glowRadius={100}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={500}
        cursorForce={0.1}
        bulgeOnly
        gradientFrom={
          isDark ? "rgba(196, 181, 253, 0.42)" : "rgba(67, 56, 202, 0.5)"
        }
        gradientTo={
          isDark ? "rgba(168, 85, 247, 0.3)" : "rgba(109, 40, 217, 0.36)"
        }
        glowColor={
          isDark ? "rgba(168, 85, 247, 0.1)" : "rgba(109, 40, 217, 0.16)"
        }
      />
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
          className="hidden hover:cursor-pointer items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-indigo-700 hover:shadow-md sm:inline-flex dark:border-fuchsia-300/25 dark:bg-violet-500 dark:text-white dark:shadow-fuchsia-950/50 dark:hover:bg-violet-400"
        >
          <CircleUserRound className="h-4 w-4" aria-hidden="true" />
          Contact Me
        </button>
      </div>

      <nav
        aria-label="Page sections"
        className="fixed top-5 left-1/2 z-50 hidden max-w-max -translate-x-1/2 overflow-x-auto rounded-full border border-slate-300/70 bg-slate-100/85 p-1 shadow-lg shadow-slate-900/10 backdrop-blur-md sm:block dark:border-violet-300/15 dark:bg-[#120a20]/75 dark:shadow-black/40"
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
                    ? "bg-indigo-600 text-white shadow-sm dark:bg-violet-500 dark:text-white dark:shadow-violet-950/50"
                    : "text-slate-600 hover:bg-slate-200 hover:text-slate-950 dark:text-violet-100/70 dark:hover:bg-violet-400/15 dark:hover:text-white"
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
        <div className="w-full">
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
