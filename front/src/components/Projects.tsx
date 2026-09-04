import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../subcomponents/Projects/ProjectCard.tsx";

// {Images}
import dashboard from "../assets/dashboard_smartworld.jpg";
import vize from "../assets/Vize.jpg";
import events from "../assets/eventhub.jpg";
import services from "../assets/edit_services.jpg";
import portfolio from "../assets/this_website.jpg";
import dark from "../assets/this_dark.jpg";
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
const ProjectsSection: React.FC = () => {
  const isDark = useIsDark();

  const categories: ProjectCategory[] = [
    {
      title: "AI-Powered Full Stack Applications",
      projects: [
        {
          title: "SmartWorld",
          description:
            "Web based trading bot providing real-time RSI, MACD, and Stochastic notifications, approved by a custom trained TensorFlow model.",
          image: dashboard,
          tags: [
            "Full Stack Development",
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
          tags: [
            "Full Stack Development",
            "React",
            "Python",
            "Generative AI",
            "Data Pipelines",
          ],
          liveUrl: "https://vize-qzbg.onrender.com/",
          githubUrl: "https://github.com/serafii/Vize",
        },
      ],
    },
    {
      title: "Web Platforms & Business Applications",
      projects: [
        {
          title: "EventHub",
          description:
            "Web application that allows students to register for events. Managers can register new events, view registered participants, and manage event details. Admins moderate the platform and oversees event activities.",
          image: events,
          tags: [
            "Full Stack Development",
            "React",
            "Node.js",
            "TypeScript",
            "MySQL",
          ],
          githubUrl:
            "https://github.com/AbderrahmaneBoulmalf/Group_A-SOEN341_Project_F25",
        },
        {
          title: "Business Template",
          description:
            "This project is a customizable website template designed for small businesses. Admins can modify content and images through a custom interface. Clients can view services, contact the business and claim services.",
          image: services,
          tags: [
            "Full Stack Development",
            "Node.js",
            "MySQL",
            "EJS",
            "Bootstrap",
          ],
          githubUrl: "https://github.com/serafii/SOEN287_Project",
          liveUrl: "https://soen287-project-fvxv.onrender.com",
        },
      ],
    },
    {
      title: "Portfolio Project",
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
      <div className="deferred-section w-full max-w-6xl p-6 text-center text-slate-700 dark:text-white">
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
          {categories.map((category) => {
            const isSingleProject = category.projects.length === 1;

            return (
              <div key={category.title}>
                <div
                  className={`mb-6 flex items-center gap-3 ${
                    isSingleProject ? "justify-center" : ""
                  }`}
                >
                  <div className="w-1.5 h-6 rounded-full bg-violet-500 dark:bg-violet-400" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {category.title}
                  </h3>
                </div>

                <div
                  className={`mx-auto grid gap-6 md:gap-x-10 ${
                    isSingleProject
                      ? "max-w-xl grid-cols-1"
                      : "max-w-272 grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {category.projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
