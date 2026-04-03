import React from "react";
import { motion, type Variants } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import hku from "../assets/hku.png";
import concordia from "../assets/concordia.png";

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
    major: "B.S. in Computer Science (Exchange Program)",
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
const EducationTimeline: React.FC = () => {
  return (
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
          Education
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          My academic journey and qualifications.
        </p>
      </motion.div>

      <motion.div
        className="relative border-l-2 border-indigo-200 dark:border-indigo-900/50 ml-4 md:ml-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
      >
        {educationData.map((item) => (
          <motion.div
            key={item.id}
            variants={itemVariants}
            className="mb-12 ml-8 md:ml-12 relative group"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[41px] md:-left-[57px] top-1.5 w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-900 border-4 border-indigo-500 dark:border-indigo-400 group-hover:scale-125 transition-transform duration-300" />
            <div className="bg-slate-200 dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-slate-700 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col sm:flex-row gap-6 items-start text-left">
                <img
                  src={item.image}
                  alt={item.school}
                  className="w-20 h-20 rounded-xl object-cover shadow-sm border border-gray-100 dark:border-slate-700"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.major}
                  </h3>
                  <div className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-3">
                    {item.school}
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <p className="text-slate-700 dark:text-slate-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default EducationTimeline;
