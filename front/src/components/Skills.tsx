import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    name: "Shopify",
    src: "https://cdn.simpleicons.org/shopify/7AB55C",
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
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "GitHub Actions",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "Supabase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
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

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills: React.FC = () => {
  return (
    <div className="deferred-section relative z-10 w-full px-5 py-10 text-left text-slate-700 transition-colors duration-500 dark:text-white sm:px-10 sm:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12"
        >
          <h2 className="mb-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            What I'm comfortable with right now
          </p>
        </motion.div>

        {/* Ruled grid: container draws the top/left edges, each tile its right/bottom */}
        <motion.ul
          className="grid grid-cols-2 border-l border-t border-indigo-300/60 dark:border-violet-300/15 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {skills.map((skill) => (
            <motion.li
              key={skill.name}
              variants={skillVariants}
              className="border-b border-r border-indigo-300/60 dark:border-violet-300/15"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://www.google.com/search?q=${skill.name}`}
                className="group relative flex h-full min-h-36 flex-col items-center justify-center gap-4 p-5 transition-colors duration-300 hover:bg-indigo-500/5 dark:hover:bg-violet-400/5 sm:min-h-40"
              >
                {/* Corner marks appear on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-violet-400"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute bottom-2 right-2 h-3 w-3 border-b border-r border-indigo-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-violet-400"
                />
                <ArrowUpRight
                  aria-hidden="true"
                  className="absolute right-3 top-3 h-3.5 w-3.5 text-indigo-500 opacity-0 transition-[opacity,transform] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-violet-300"
                />
                <img
                  src={skill.src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-11 w-11 object-contain transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
                />
                <h3 className="text-center text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300 sm:text-base">
                  {skill.name}
                </h3>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
};

export default Skills;
