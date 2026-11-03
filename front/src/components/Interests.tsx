import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Gamepad,
  TreesIcon as Trees,
  Plane,
  Globe,
  Music,
  Footprints,
} from "lucide-react";

// Vertical dividers only between columns: 2 columns on sm, 3 on lg.
const dividerClasses = (index: number) =>
  [
    index % 2 === 0
      ? "sm:border-r sm:pl-0 sm:pr-8"
      : "sm:border-r-0 sm:pl-8 sm:pr-0",
    index % 3 === 0
      ? "lg:border-r lg:pl-0 lg:pr-8"
      : index % 3 === 1
        ? "lg:border-r lg:px-8"
        : "lg:border-r-0 lg:pl-8 lg:pr-0",
  ].join(" ");

const Interests: React.FC = () => {
  const hobbies = [
    {
      title: "Gaming",
      desc: "Enjoying multiplayer or single-player campaigns",
      accent: "group-hover:text-indigo-500 dark:group-hover:text-indigo-400",
      icon: Gamepad,
    },
    {
      title: "Nature",
      desc: "Hiking, exploring, and spending time outdoors",
      accent: "group-hover:text-emerald-500 dark:group-hover:text-emerald-400",
      icon: Trees,
    },
    {
      title: "Aviation",
      desc: "Passionate about aircraft design and technology",
      accent: "group-hover:text-sky-500 dark:group-hover:text-sky-400",
      icon: Plane,
    },
    {
      title: "Travel",
      desc: "Broadening points of views and experiences",
      accent: "group-hover:text-amber-500 dark:group-hover:text-amber-400",
      icon: Globe,
    },
    {
      title: "Music",
      desc: "Listening to diverse music genres and artists",
      accent: "group-hover:text-rose-500 dark:group-hover:text-rose-400",
      icon: Music,
    },
    {
      title: "Running",
      desc: "Staying active by running and participating in races",
      accent: "group-hover:text-green-500 dark:group-hover:text-green-400",
      icon: Footprints,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.35,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full py-8 sm:px-6 lg:px-8 2xl:px-16">
      <div className="deferred-section mx-auto max-w-6xl px-5 py-10 text-left text-slate-700 dark:text-white z-10 sm:px-10 lg:px-0">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="mb-3 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Interests & Hobbies
          </h2>
          <p className="max-w-2xl text-base font-medium text-slate-600 dark:text-slate-300 sm:text-lg">
            What I'm interested in and enjoy doing in my free time outside of
            coding
          </p>
        </motion.div>
        <motion.ul
          className="grid grid-cols-1 border-t border-indigo-300/60 dark:border-violet-300/15 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {hobbies.map((hobby, index) => {
            const Icon = hobby.icon;
            return (
              <motion.li
                key={hobby.title}
                variants={cardVariants}
                className={`group relative cursor-default border-b border-indigo-300/60 py-7 dark:border-violet-300/15 sm:py-9 ${dividerClasses(index)}`}
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-mono text-xs tabular-nums text-indigo-500/70 dark:text-violet-300/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Icon
                    className={`h-7 w-7 text-slate-400 transition-[color,transform] duration-300 group-hover:-translate-y-0.5 group-hover:scale-110 dark:text-violet-300/50 ${hobby.accent}`}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300">
                  {hobby.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {hobby.desc}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute -bottom-px left-0 h-px w-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-[width] duration-500 ease-out group-hover:w-full dark:from-violet-400 dark:to-fuchsia-400"
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </div>
  );
};

export default Interests;
