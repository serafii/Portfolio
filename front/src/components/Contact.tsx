import React from "react";
import Wave from "react-wavify";
import gmail from "../assets/gmail.svg";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full">
      <Wave
        fill="#0d1b2a"
        paused={false}
        options={{
          height: 10,
          amplitude: 50,
          speed: 0.15,
          points: 3,
        }}
        className="absolute bottom-0 w-full"
      />
      <Wave
        fill="#112240"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.1,
          points: 4,
        }}
        className="absolute bottom-0 w-full opacity-60"
      />
      <Wave
        fill="#1b2b40"
        paused={false}
        options={{
          height: 30,
          amplitude: 40,
          speed: 0.2,
          points: 5,
        }}
        className="absolute bottom-0 w-full"
      />
    </div>
  );
};

const Contact: React.FC = () => {
  const year = new Date().getFullYear();

  const linkedin =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg";
  const github =
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg";
  const discord: React.ReactNode = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className="bi bi-discord w-16 h-16"
      viewBox="0 0 16 16"
    >
      <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
    </svg>
  );

  const contacts = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sami-erafii-bb618220a/",
      icon: linkedin,
      gradient: "from-blue-500/40 to-blue-400/20",
      hoverBorder: "hover:border-blue-400/50",
      iconColor: "text-blue-500",
    },
    {
      name: "GitHub",
      url: "https://github.com/serafii",
      icon: github,
      gradient: "from-slate-500/30 to-slate-400/15",
      hoverBorder: "hover:border-slate-400/50",
      iconColor: "text-gray-700 dark:text-gray-300",
    },
    {
      name: "Discord",
      url: "https://discord.com/users/serafii",
      icon: discord,
      gradient: "from-indigo-500/35 to-purple-400/20",
      hoverBorder: "hover:border-indigo-400/50",
      iconColor: "text-indigo-500",
    },
    {
      name: "Email",
      url: "mailto:sami.erafii@gmail.com",
      icon: gmail,
      gradient: "from-rose-500/35 to-pink-400/20",
      hoverBorder: "hover:border-rose-400/50",
      iconColor: "text-rose-500",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };
  const cardVariants = {
    hidden: {
      y: 25,
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
    <div className="w-full">
      <div className="w-10/12 p-16 text-center text-slate-700 dark:text-white z-10 mx-auto mb-48 2xl:mb-80">
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
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-linear-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Get in Touch
          </h2>
          <p className="mb-12 text-xl font-medium text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Feel free to reach out through any of these platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{
            y: 100,
          }}
          whileInView={{
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{
            once: true,
          }}
          className="w-full flex items-center justify-center mx-auto"
        >
          <motion.div
            className="grid w-full max-w-5xl grid-cols-2 md:grid-cols-4 gap-4 mb-16 mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              margin: "-50px",
            }}
          >
            {contacts.map((contact) => {
              return (
                <motion.a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={cardVariants}
                  className={`group relative flex flex-col items-center justify-center gap-4 p-6 md:p-8 rounded-2xl bg-linear-to-br ${contact.gradient} backdrop-blur-sm border border-gray-200/50 dark:border-slate-700/50 ${contact.hoverBorder} shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
                >
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                    <ArrowUpRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </div>

                  <div
                    className={`${contact.iconColor} group-hover:scale-110 transition-transform duration-300`}
                  >
                    {typeof contact.icon === "string" ? (
                      <img
                        src={contact.icon}
                        alt={`${contact.name} icon`}
                        className="w-10 h-10 md:w-12 md:h-12"
                      />
                    ) : (
                      <span className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                        {contact.icon}
                      </span>
                    )}
                  </div>
                  <span className="text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200">
                    {contact.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
      <Footer />
      <div className="relative text-sm sm:text-normal p-4 text-white py-8 justify-center flex flex-col gap-2 md:gap-8 font-semibold text-normal w-full bg-[#1b2b40] -mt-9 pb-20 3xl:py-16">
        <span className="justify-center flex flex-row gap-2 md:gap-4">
          <p>&copy; {year}</p>
          <p>Designed & Developed by Sami 😼</p>
        </span>
        <span className="justify-center flex flex-row gap-2">
          Have any questions? Email me at :{" "}
          <a
            href="mailto:sami.erafii@gmail.com"
            className="hover:underline text-blue-500 hover:text-blue-600 transition-colors duration-300"
          >
            sami.erafii@gmail.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
