import React from "react";
import ProjectCard from "../subcomponents/Projects/ProjectCard.tsx";

// {Images}
import dashboard from "../assets/dashboard_smartworld.jpg";
import vize from "../assets/Vize.jpg";
import events from "../assets/eventhub.jpg";
import services from "../assets/edit_services.jpg";
import portfolio from "../assets/this_website.jpg";
import dark from "../assets/this_dark.jpg";
import useIsDark from "../utils/IsDark.tsx";
import posExtension from "../assets/shopify1.jpg";
import sales360 from "../assets/sales-360.png";

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
      title: "E-Commerce & Retail Applications",
      projects: [
        {
          title: "POS Extension",
          description:
            "Production Shopify POS application providing sales associates with customer insights, browsing activity, and product recommendations.",
          image: posExtension,
          tags: [
            "Shopify",
            "Preact",
            "Node.js",
            "GraphQL",
            "Redis",
            "Bloomreach",
          ],
        },
        {
          title: "Sales Tracking Web App for Insulation Business",
          description:
            "Full stack sales management PWA for an insulation business, replacing manual spreadsheet tracking. Contains sales filtering and revenue analytics.",
          image: sales360,
          tags: ["React", "Supabase", "Shadcn UI"],
          liveUrl: "https://sales-360.yourbusinesscompany001.workers.dev/login",
        },
      ],
    },
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
          title: "Business Website Template",
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
    <div className="w-full px-5 sm:px-10">
      <div className="deferred-section mx-auto w-full max-w-6xl py-6 text-left text-slate-700 dark:text-white">
        <div className="mb-12">
          <h2 className="mb-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Completed Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            What I've worked on so far
          </p>
        </div>
        <div className="space-y-16">
          {categories.map((category) => {
            const isSingleProject = category.projects.length === 1;

            return (
              <section key={category.title}>
                <div className="mb-8 flex items-center gap-4">
                  <h3 className="shrink-0 text-lg font-semibold text-gray-800 dark:text-gray-200 sm:text-xl">
                    {category.title}
                  </h3>
                  <span className="h-px flex-1 bg-linear-to-r from-indigo-400/70 to-transparent dark:from-violet-300/30" />
                  <span className="shrink-0 font-mono text-xs tabular-nums text-slate-500 dark:text-violet-200/50">
                    {String(category.projects.length).padStart(2, "0")}
                  </span>
                </div>

                <div
                  className={`grid gap-12 ${
                    isSingleProject
                      ? "grid-cols-1"
                      : "grid-cols-1 md:grid-cols-2 md:gap-x-12"
                  }`}
                >
                  {category.projects.map((project) => (
                    <ProjectCard
                      key={project.title}
                      wide={isSingleProject}
                      {...project}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
