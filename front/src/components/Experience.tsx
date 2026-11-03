import React from "react";
import { motion, type Variants } from "framer-motion";
import must from "../assets/must.png";
import { MapPin } from "lucide-react";

const experienceData = [
  {
    id: 1,
    role: "AI & Business Analytics Intern",
    company: "Must Societe",
    date: "Aug 2026 - Present",
    location: "Montreal, QC, Canada",
    image: must,
    highlights: [
      "Designed and deployed a production Shopify POS extension used by sales associates",
      "Working with REST/GraphQL APIs and JavaScript to process data",
      "Improving and automating data pipelines and workflows using n8n",
    ],
  },
];

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Experience: React.FC = () => {
  return (
    <div className="w-full px-5 sm:px-10 text-center text-slate-700 dark:text-white z-10">
      <section className="mx-auto w-full max-w-6xl pb-4 pt-12">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-10 text-left"
        >
          <h2 className="mb-2 bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-2xl font-bold tracking-tight text-transparent dark:from-indigo-400 dark:to-purple-400 sm:text-4xl">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional experience and internships.
          </p>
        </motion.div>

        <motion.ol
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="border-t border-indigo-300/60 text-left dark:border-violet-300/15"
        >
          {experienceData.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="group relative border-b border-indigo-300/60 py-8 dark:border-violet-300/15 md:py-10"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="relative h-16 w-16 shrink-0">
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 translate-x-1.5 translate-y-1.5 border border-indigo-400/70 transition-transform duration-500 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 dark:border-violet-300/35"
                  />
                  <img
                    src={item.image}
                    alt={item.company}
                    className="relative h-full w-full bg-white object-cover"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300 sm:text-2xl">
                        {item.role}
                      </h3>
                      <div className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
                        {item.company}
                      </div>
                    </div>
                    <div className="flex shrink-0 flex-wrap items-center gap-x-4 gap-y-1 text-slate-500 dark:text-slate-400 md:flex-col md:items-end md:gap-1.5 md:pt-1.5 md:text-right">
                      <span className="font-mono text-xs uppercase tracking-[0.15em]">
                        {item.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm">
                        <MapPin className="h-3.5 w-3.5" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 leading-relaxed text-slate-700 dark:text-slate-200"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.8em] h-px w-4 shrink-0 bg-indigo-500 dark:bg-violet-400"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <span
                aria-hidden="true"
                className="absolute -bottom-px left-0 h-px w-0 bg-linear-to-r from-indigo-500 to-violet-500 transition-[width] duration-700 ease-out group-hover:w-full dark:from-violet-400 dark:to-fuchsia-400"
              />
            </motion.li>
          ))}
        </motion.ol>
      </section>
    </div>
  );
};

export default Experience;
