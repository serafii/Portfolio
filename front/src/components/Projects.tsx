import React from "react";
import { motion, type Variants } from "framer-motion";
import ProjectCard from "../subcomponents/Projects/ProjectCard.tsx";

// {Images}
import dashboard from "../assets/dashboard_smartworld.png";
import vize from "../assets/Vize.png";
import events from "../assets/eventhub.png";
import services from "../assets/edit_services.png";
import portfolio from "../assets/this_website.png";
import dark from "../assets/this_dark.png";
import useIsDark from "../utils/IsDark.tsx";

interface ProjectCategory {
  title: string;
  projects: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
  }[];
}
const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const ProjectsSection: React.FC = () => {
  const isDark = useIsDark();

  const categories: ProjectCategory[] = [
    {
      title: "Generative AI & Data Science",
      projects: [
        {
          title: "SmartWorld",
          description:
            "Web based trading bot providing real-time RSI, MACD, and Stochastic notifications, approved by a custom trained TensorFlow model.",
          image: dashboard,
          tags: [
            "Full Stack",
            "TypeScript",
            "Authentication",
            "Python",
            "GenAI",
            "Data Science",
          ],
          liveUrl: "https://www.smartworldsignals.com",
        },
        {
          title: "Vize",
          description:
            "AI-powered web application that takes in a zip file or public repository URL and analyzes the codebase providing insights into its structure and functionality.",
          image: vize,
          tags: ["React", "Python", "GenAI", "Data pipelines", "Data Science"],
          liveUrl: "https://vize-qzbg.onrender.com/",
          githubUrl: "https://github.com/serafii/Vize",
        },
      ],
    },
    {
      title: "Full Stack & Database",
      projects: [
        {
          title: "EventHub",
          description:
            "Web application that allows students to register for events. Managers can register new events, view registered participants, and manage event details. Admins moderate the platform and oversees event activities.",
          image: events,
          tags: ["React", "Node.js", "TypeScript", "MySQL", "REST API"],
          githubUrl:
            "https://github.com/AbderrahmaneBoulmalf/Group_A-SOEN341_Project_F25",
        },
        {
          title: "Business Template",
          description:
            "This project is a customizable website template designed for small businesses. Admins can modify content and images through a custom interface. Clients can view services, contact the business and claim services.",
          image: services,
          tags: ["Node.js", "MySQL", "EJS", "Bootstrap"],
          githubUrl: "https://github.com/serafii/SOEN287_Project",
          liveUrl: "https://soen287-project-fvxv.onrender.com",
        },
      ],
    },
    {
      title: "Other Projects",
      projects: [
        {
          title: "This Website",
          description:
            "Obviously this website you're currently on! Built with React and Tailwind CSS, featuring dark mode and smooth animations.",
          image: isDark ? dark : portfolio,
          tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
          githubUrl: "https://github.com/serafii/Portfolio",
          liveUrl: "https://www.serafii.com/",
        },
      ],
    },
  ];

  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-full 2xl:w-10/12 3xl:w-2/3 p-6 text-center text-slate-700 dark:text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 2xl:mb-0"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Completed Projects
          </h2>
          <p className="mb-4 text-xl font-semibold text-slate-600 dark:text-slate-300">
            What I've worked on so far
          </p>
        </motion.div>
        <div className="space-y-14">
          {categories.map((category) => (
            <div key={category.title}>
              <motion.div
                initial={{
                  opacity: 0,
                  x: -15,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="w-1.5 h-6 rounded-full bg-violet-500 dark:bg-violet-400" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                  {category.title}
                </h3>
              </motion.div>

              <motion.div
                className={`grid gap-6 ${category.projects.length === 1 ? "grid-cols-1 max-w-md" : "grid-cols-1 md:grid-cols-2"}`}
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: "-80px",
                }}
              >
                {category.projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
