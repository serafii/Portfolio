import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  Gamepad,
  TreesIcon as Trees,
  Plane,
  Globe,
  Music,
  Footprints,
} from "lucide-react";

const Interests: React.FC = () => {
  const hobbies = [
    {
      title: "Gaming",
      desc: "Enjoying multiplayer or single-player campaigns",
      gradient: "from-indigo-500/40 to-purple-400/30",
      icon: <Gamepad className="w-8 h-8" />,
    },
    {
      title: "Nature",
      desc: "Hiking, exploring, and spending time outdoors",
      gradient: "from-emerald-500/40 to-teal-400/30",
      icon: <Trees className="w-8 h-8" />,
    },
    {
      title: "Aviation",
      desc: "Passionate about aircraft design and technology",
      gradient: "from-sky-500/40 to-blue-400/30",
      icon: <Plane className="w-8 h-8" />,
    },
    {
      title: "Travel",
      desc: "Broadening points of views and experiences",
      gradient: "from-amber-500/40 to-yellow-400/30",
      icon: <Globe className="w-8 h-8" />,
    },
    {
      title: "Music",
      desc: "Listening to diverse music genres and artists",
      gradient: "from-rose-500/40 to-pink-400/30",
      icon: <Music className="w-8 h-8" />,
    },
    {
      title: "Running",
      desc: "Staying active by running and participating in races",
      gradient: "from-green-500/40 to-lime-400/30",
      icon: <Footprints className="w-8 h-8" />,
    },
  ];

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const cardVariants: Variants = {
    hidden: {
      y: 20,
    },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="w-full py-8 sm:px-6 lg:px-8 2xl:px-16">
      <div className="max-w-400 p-10 text-center text-slate-700 dark:text-white z-10 mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Interests & Hobbies
          </h2>
          <p className="mb-12 text-xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            What I'm interested in and enjoy doing in my free time outside of
            coding
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
        >
          {hobbies.map((hobby) => (
            <motion.div
              key={hobby.title}
              variants={cardVariants}
              className="group bg-slate-200/95 dark:bg-slate-800/50 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-slate-700/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 cursor-default"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 bg-linear-to-br ${hobby.gradient} text-white group-hover:scale-110 transition-transform duration-300`}
              >
                {hobby.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                {hobby.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {hobby.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Interests;
