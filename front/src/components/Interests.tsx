import React from "react";
import { motion } from "framer-motion";
import { Gamepad, Plane, Globe, Music, Trees } from "lucide-react";

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
  ];
  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-400 p-8 text-center text-slate-700 dark:text-white z-10 mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              className={`flex flex-col items-center justify-center rounded-2xl p-6 aspect-square 
                bg-linear-to-br ${hobby.gradient} backdrop-blur-xl 
                border border-white/20 shadow-lg
                transition-all duration-300 hover:cursor-default 
                text-slate-800 dark:text-white`}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                scale: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
            >
              <div className="text-3xl mb-4 p-3 bg-white/30 dark:bg-slate-800/30 rounded-full">
                {hobby.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{hobby.title}</h3>
              <p className="text-md opacity-90">{hobby.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Interests;
