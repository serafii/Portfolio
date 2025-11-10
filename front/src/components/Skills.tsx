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

const learning: Skill[] = [
  {
    name: "Spring Boot",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "Redis",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg",
  },
  {
    name: "AWS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
];
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const Skills: React.FC = () => {
  return (
    <div className="w-10/12 p-16 text-center text-white relative z-10 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
      <p className="mb-12 text-2xl font-semibold">
        What I'm comfortable with right now
      </p>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex flex-col items-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            variants={skillVariants}
          >
            <img src={skill.src} alt={skill.name} className="w-12 h-12 mb-3" />
            <h3 className="text-lg font-semibold">{skill.name}</h3>
          </motion.div>
        ))}
      </motion.div>
      <p className="mt-16 mb-12 text-2xl font-semibold">
        What I'm currently learning
      </p>
      <div className="w-3/5 items-center justify-center mx-auto">
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {learning.map((skill) => (
            <motion.div
              key={skill.name}
              className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex flex-col items-center cursor-pointer"
              variants={skillVariants}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-12 h-12 mb-3"
              />
              <h3 className="text-lg font-semibold">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
