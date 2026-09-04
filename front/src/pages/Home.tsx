import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { CircleUserRound } from "lucide-react";
import Main from "../components/Screen";
import About from "../components/About";
import garen from "../assets/garenDance_nobg.gif";
import DarkModeToggle from "../utils/DarkMode.tsx";
import useIsDark from "../utils/IsDark.tsx";
import { useIsMobile } from "../utils/IsMobile";
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

const LazyTravelMap = React.lazy(() => import("../components/TravelMap.tsx"));
const LazyEducation = React.lazy(() => import("../components/Education.tsx"));
const LazyExperience = React.lazy(() => import("../components/Experience.tsx"));
const LazySkills = React.lazy(() => import("../components/Skills.tsx"));
const LazyProjects = React.lazy(() => import("../components/Projects.tsx"));
const LazyInterests = React.lazy(() => import("../components/Interests.tsx"));
const LazyContact = React.lazy(() => import("../components/Contact.tsx"));

const TravelMapPlaceholder: React.FC = () => (
  <section
    aria-busy="true"
    aria-label="Loading travel map"
    className="w-full min-h-[550px] px-4 py-16 md:px-8"
  >
    <div className="mx-auto max-w-6xl">
      <div className="mb-10 h-16 w-56 animate-pulse rounded-lg bg-slate-300/40 dark:bg-violet-200/5" />
      <div className="aspect-2/1 rounded-2xl border border-indigo-300/40 bg-slate-200/35 dark:border-violet-300/10 dark:bg-[#160c23]/35" />
    </div>
  </section>
);

const SectionPlaceholder: React.FC = () => (
  <div aria-hidden="true" className="min-h-[420px] w-full" />
);

const DeferredSection: React.FC<React.PropsWithChildren> = ({ children }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {shouldRender ? children : <SectionPlaceholder />}
    </div>
  );
};

const DeferredTravelMap: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          observer.disconnect();
        }
      },
      { rootMargin: "600px 0px" },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef}>
      {shouldRender ? (
        <React.Suspense fallback={<TravelMapPlaceholder />}>
          <LazyTravelMap />
        </React.Suspense>
      ) : (
        <TravelMapPlaceholder />
      )}
    </div>
  );
};

type HoverFreezeGifProps = {
  src: string;
  alt: string;
  className: string;
  imageClassName?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  onClick?: () => void;
};

const HoverFreezeGif: React.FC<HoverFreezeGifProps> = ({
  src,
  alt,
  className,
  imageClassName = "",
  loading,
  fetchPriority,
  onClick,
}) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isFrozen, setIsFrozen] = useState(false);

  const freezeFrame = () => {
    const image = imageRef.current;
    const canvas = canvasRef.current;
    if (!image || !canvas || !image.complete || !image.naturalWidth) return;

    const { width, height } = image.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;

    const context = canvas.getContext("2d");
    if (!context) return;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.clearRect(0, 0, width, height);

    const scale = Math.min(
      width / image.naturalWidth,
      height / image.naturalHeight,
    );
    const drawWidth = image.naturalWidth * scale;
    const drawHeight = image.naturalHeight * scale;
    context.drawImage(
      image,
      (width - drawWidth) / 2,
      (height - drawHeight) / 2,
      drawWidth,
      drawHeight,
    );
    setIsFrozen(true);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={freezeFrame}
      onMouseLeave={() => setIsFrozen(false)}
      onClick={onClick}
    >
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        draggable={false}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
        className={`h-full w-full object-contain ${imageClassName} ${isFrozen ? "opacity-0" : ""}`}
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 h-full w-full ${isFrozen ? "block" : "hidden"}`}
      />
    </div>
  );
};

const Home: React.FC = () => {
  const isDark = useIsDark();
  const isMobile = useIsMobile();
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
      {/* Fixed Top Elements */}
      <div className="fixed top-5 left-5 z-50 ">
        <div className="w-16 h-16 relative">
          <svg className="-rotate-90 w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke={isDark ? "#c4b5fd" : "#818cf8"}
              strokeWidth="6"
              fill="none"
              opacity="0.3"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke={isDark ? "#a855f7" : "#4f46e5"}
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
              decoding="async"
              className={`h-10 w-10 object-contain hover:cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out ${
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
        className="fixed top-5 left-1/2 z-50 hidden max-w-max -translate-x-1/2 overflow-x-auto rounded-full border border-slate-300/70 bg-slate-100/95 p-1 shadow-lg shadow-slate-900/10 sm:block dark:border-violet-300/15 dark:bg-[#120a20]/95 dark:shadow-black/40"
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

      <div ref={ref} className="relative z-10 w-full">
        <div
          id="home"
          className="relative h-[calc(100dvh+8rem)] min-h-screen w-full overflow-hidden"
        >
          {isMobile ? (
            <div
              aria-hidden="true"
              className="mobile-dot-field"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 8rem), transparent)",
                maskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 8rem), transparent)",
              }}
            />
          ) : (
            <DotField
              className="pointer-events-none absolute! inset-0! z-0"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 8rem), transparent)",
                maskImage:
                  "linear-gradient(to bottom, #000 calc(100% - 8rem), transparent)",
              }}
              dotRadius={1.5}
              dotSpacing={16}
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
          )}
          <Main />
        </div>

        <section className="relative isolate overflow-hidden bg-slate-200 pt-10 pb-18 dark:bg-[#0b0714] 3xl:pt-16 3xl:pb-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-28 left-8 h-52 w-52 rounded-full bg-indigo-400/15 blur-3xl dark:bg-violet-500/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 bottom-0 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl dark:bg-indigo-500/10"
          />
          <div className="relative z-10 flex flex-col items-center gap-y-18 3xl:gap-y-24">
            <div id="about" className="w-full">
              <About />
            </div>
            <div id="experience" className="flex w-full flex-col items-center">
              <DeferredSection>
                <React.Suspense fallback={<SectionPlaceholder />}>
                  <LazyExperience />
                  <LazyEducation />
                </React.Suspense>
              </DeferredSection>
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden border-y border-indigo-200/50 bg-indigo-100/65 py-18 dark:border-violet-300/10 dark:bg-[#11091c] 3xl:py-24">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-16 left-10 h-32 w-32 rounded-full bg-indigo-400/15 blur-3xl dark:bg-violet-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-1/4 -right-20 h-64 w-64 rounded-full bg-violet-400/20 blur-3xl dark:bg-fuchsia-500/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-[58%] left-12 h-44 w-44 rounded-full bg-sky-400/15 blur-3xl dark:bg-cyan-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/4 h-44 w-44 rounded-full bg-blue-400/20 blur-3xl dark:bg-indigo-400/10"
          />
          <div className="relative z-10 flex flex-col items-center gap-y-18 3xl:gap-y-24">
            <div id="skills" className="w-full">
              <DeferredSection>
                <React.Suspense fallback={<SectionPlaceholder />}>
                  <LazySkills />
                </React.Suspense>
              </DeferredSection>
            </div>
            <div className="flex w-full items-center justify-center">
              <HoverFreezeGif
                src={cat2}
                alt="Spinning Cat"
                loading="lazy"
                fetchPriority="low"
                className="h-30 w-30"
              />
            </div>
            <div id="projects" className="w-full">
              <DeferredSection>
                <React.Suspense fallback={<SectionPlaceholder />}>
                  <LazyProjects />
                </React.Suspense>
              </DeferredSection>
            </div>
            <div
              id="after-projects"
              className="flex w-full items-center justify-center"
            >
              <HoverFreezeGif
                src={cat}
                alt="Spinning Cat"
                loading="lazy"
                fetchPriority="low"
                className="h-32 w-32"
              />
            </div>
          </div>
        </section>

        <section className="relative isolate overflow-hidden bg-sky-100/65 pt-18 pb-0 dark:bg-[#100819] 3xl:pt-24">
          {isMobile ? (
            <div
              aria-hidden="true"
              className="mobile-dot-field"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, #000 8rem, #000 calc(100% - 18rem), transparent calc(100% - 2rem))",
                maskImage:
                  "linear-gradient(to bottom, transparent, #000 8rem, #000 calc(100% - 18rem), transparent calc(100% - 2rem))",
              }}
            />
          ) : (
            <DotField
              className="pointer-events-none absolute! inset-0! z-0"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, transparent, #000 8rem, #000 calc(100% - 18rem), transparent calc(100% - 2rem))",
                maskImage:
                  "linear-gradient(to bottom, transparent, #000 8rem, #000 calc(100% - 18rem), transparent calc(100% - 2rem))",
              }}
              dotRadius={1.5}
              dotSpacing={16}
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
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-1/3 h-52 w-52 rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-violet-500/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-128 left-[18%] h-40 w-40 rounded-full bg-sky-400/20 blur-3xl dark:bg-cyan-400/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-1/4 bottom-80 h-64 w-64 rounded-full bg-indigo-400/15 blur-3xl dark:bg-purple-500/10"
          />
          <div className="relative z-10 flex flex-col items-center gap-y-18 3xl:gap-y-24">
            <div id="interests" className="w-full">
              <DeferredSection>
                <React.Suspense fallback={<SectionPlaceholder />}>
                  <LazyInterests />
                </React.Suspense>
              </DeferredSection>
            </div>
            <div
              id="travel"
              className="relative isolate w-full overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/4 -left-16 h-52 w-52 rounded-full bg-sky-400/20 blur-3xl dark:bg-cyan-400/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute right-12 bottom-12 h-36 w-36 rounded-full bg-violet-400/20 blur-3xl dark:bg-fuchsia-500/10"
              />
              <div className="relative z-10">
                <DeferredTravelMap />
              </div>
            </div>
            <div
              id="contact"
              className="relative isolate w-full overflow-hidden"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-20 right-12 h-48 w-48 rounded-full bg-fuchsia-400/15 blur-3xl dark:bg-violet-500/10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 -left-12 h-40 w-40 rounded-full bg-indigo-400/15 blur-3xl dark:bg-purple-500/10"
              />
              <div className="relative z-10">
                <DeferredSection>
                  <React.Suspense fallback={<SectionPlaceholder />}>
                    <LazyContact />
                  </React.Suspense>
                </DeferredSection>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
