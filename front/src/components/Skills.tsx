import React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  src: string;
}

const skills: Skill[] = [
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
  },
  {
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
  },
  {
    name: "n8n",
    src: "https://cdn.simpleicons.org/n8n/EA4B71",
  },
  {
    name: "GraphQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  },
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "MySQL",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
  },
  {
    name: "GitHub Actions",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "PowerShell",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-plain.svg",
  },
  {
    name: "Bash",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg",
  },
  {
    name: "Docker",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
];

const Skills: React.FC = () => {
  return (
    <div className="deferred-section relative z-10 mx-auto w-full p-6 text-center text-slate-700 transition-colors duration-500 dark:text-white sm:p-16 md:w-11/12 lg:w-10/12">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          Skills & Technologies
        </h2>
        <p className="mb-12 text-2xl font-semibold text-slate-600 dark:text-slate-300">
          What I'm comfortable with right now
        </p>
      </motion.div>

      <div
        className="flex w-full flex-wrap justify-center gap-4 sm:gap-5 lg:gap-6"
      >
        {skills.map((skill) => (
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://www.google.com/search?q=${skill.name}`}
            key={skill.name}
            className="w-[calc((100%-1rem)/2)] sm:w-[calc((100%-2.5rem)/3)] lg:w-[calc((100%-4.5rem)/4)] xl:w-[calc((100%-6rem)/5)]"
          >
            <div
              className="group relative flex min-h-40 h-full transform-gpu flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-indigo-200/70 bg-slate-100/85 p-5 shadow-lg shadow-indigo-950/5 transition-[border-color,box-shadow] duration-300 hover:border-violet-400/70 hover:shadow-xl dark:border-violet-300/15 dark:bg-[#160c23]/90 dark:shadow-black/25 dark:hover:border-violet-300/45 sm:min-h-44 sm:p-6"
            >
              <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-violet-500/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-indigo-100 bg-white/70 p-3 shadow-sm transition-transform duration-300 group-hover:scale-110 dark:border-violet-300/15 dark:bg-[#0d0815]/70">
                <img src={skill.src} alt="" loading="lazy" decoding="async" className="h-10 w-10 object-contain" />
              </div>
              <h3 className="relative text-base font-semibold text-gray-800 dark:text-white sm:text-lg">
                {skill.name}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
