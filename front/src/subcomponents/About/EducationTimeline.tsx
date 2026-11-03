import React from "react";
import { motion, type Variants } from "framer-motion";
import { MapPin } from "lucide-react";
import hku from "../../assets/hku.png";
import concordia from "../../assets/concordia.png";

const educationData = [
  {
    id: 1,
    school: "Concordia University",
    major: "BEng in Software Engineering",
    date: "Jan 2024 - Present",
    location: "Montreal, QC, Canada",
    description:
      "Currently pursuing a Bachelor of Engineering in Software Engineering. Achieved a 3.68 GPA and received the Dean’s List recognition for academic excellence.",
    image: concordia,
  },
  {
    id: 2,
    school: "The University of Hong Kong",
    major: "Computer Science Exchange Program",
    date: "Jan 2026 - May 2026",
    location: "Hong Kong SAR",
    description:
      "Part of the exchange program at The University of Hong Kong. Enrolled in advanced courses like algorithm design and machine learning.",
    image: hku,
  },
];
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
const EducationTimeline: React.FC = () => {
  return (
    <section className="w-full pb-12 pt-4">
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
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          My academic journey and qualifications.
        </p>
      </motion.div>

      <motion.ol
        className="border-t border-indigo-300/60 text-left dark:border-violet-300/15"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
      >
        {educationData.map((item) => (
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
                  alt={item.school}
                  className="relative h-full w-full bg-white object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-violet-300 sm:text-2xl">
                      {item.major}
                    </h3>
                    <div className="mt-1 text-base font-medium text-indigo-600 dark:text-indigo-400">
                      {item.school}
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

                <p className="mt-5 max-w-2xl border-l-2 border-indigo-500/70 pl-4 leading-relaxed text-slate-700 dark:border-violet-400/60 dark:text-slate-200">
                  {item.description}
                </p>
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
  );
};

export default EducationTimeline;
