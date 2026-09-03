import React from "react";
import { motion, type Variants } from "framer-motion";
import must from "../assets/must.png";
import { MapPin, Calendar } from "lucide-react";

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
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
    <div className="w-full md:w-5/6 lg:w-full xl:w-3/4 3xl:w-3/4 mx-auto px-10 text-center text-slate-700 dark:text-white z-10">
      <section className="w-full pb-4 pt-12">
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
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-2">
            Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Professional experience and internships.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          className="relative"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-6 left-5 top-4 w-px bg-linear-to-b from-indigo-300 via-violet-400 to-indigo-200 dark:from-violet-300/25 dark:via-violet-400/80 dark:to-violet-300/10"
          />
          <motion.div
            variants={itemVariants}
            className="relative mb-0 pl-12 group"
          >
            <div className="absolute left-3 top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-slate-100 shadow-sm shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-125 dark:border-violet-300 dark:bg-[#0d0815] dark:shadow-violet-500/40">
              <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 dark:bg-violet-300" />
            </div>
            <div className="rounded-[2rem] border border-indigo-200/70 bg-slate-100/85 p-7 shadow-xl shadow-indigo-950/5 backdrop-blur-sm transition-[border-color,box-shadow,transform] duration-300 hover:border-violet-400/70 hover:shadow-2xl dark:border-violet-300/15 dark:bg-[#160c23]/90 dark:shadow-black/25 dark:hover:border-violet-300/45 md:p-8">
              <div className="flex flex-col sm:flex-row gap-6 items-start text-left">
                <img
                  src={must}
                  alt="Must Societe"
                  className="w-20 h-20 rounded-xl object-cover shadow-sm border border-gray-100 dark:border-violet-300/15"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    AI & Business Analytics Intern
                  </h3>
                  <div className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                    Must Societe
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>August 2026 - Present</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>Montreal, QC, Canada</span>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    • Developing automation workflows with n8n, integrating
                    Shopify and other applications <br />
                    • Working with REST/GraphQL APIs and JavaScript to process
                    data
                    <br />• Improving and automating data pipelines and
                    workflows
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Experience;
