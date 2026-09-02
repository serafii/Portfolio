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
      <section className="w-full py-12">
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
          className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 sm:ml-4 md:ml-6"
        >
          <motion.div
            variants={itemVariants}
            className="mb-12 ml-3 sm:ml-8 md:ml-12 relative group"
          >
            <div className="bg-slate-200 dark:bg-[#160c23] rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-violet-300/15 hover:shadow-xl transition-shadow duration-300">
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
