import React from "react";
import Wave from "react-wavify";
import gmail from "../assets/gmail.svg";
import { motion } from "framer-motion";

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

  return (
    <div className="w-full">
      <div className="w-10/12 p-16 text-center text-white relative z-10 mx-auto mb-32 2xl:mb-48">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="font-semibold mb-20 text-xl">
          Feel free to reach out to me via any of the following platforms:
        </p>
        <motion.div
          initial={{ y: 100 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mx-auto 3xl:w-4/5 w-full"
        >
          <a
            className="rounded-lg p-8 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all backdrop-blur-2xl w-1/5"
            href="https://www.linkedin.com/in/sami-erafii-bb618220a/"
            target="_blank"
          >
            <img
              src={linkedin}
              alt="LinkedIn"
              className="w-16 h-16 mx-4 inline-block"
            />
            <p className="text-lg font-semibold mt-3">LinkedIn</p>
          </a>
          <a
            className="rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all backdrop-blur-2xl w-1/5"
            href="https://github.com/serafii"
            target="_blank"
          >
            <img
              src={github}
              alt="GitHub"
              className="w-16 h-16 mx-4 inline-block"
            />
            <p className="text-lg font-semibold mt-3">GitHub</p>
          </a>
          <a
            className="rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all backdrop-blur-2xl w-1/5"
            href="https://discord.com/users/serafii"
            target="_blank"
          >
            {discord}
            <p className="text-lg font-semibold mt-3">Discord</p>
          </a>
          <a
            className="rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all backdrop-blur-2xl w-1/5"
            href="mailto:sami.erafii@gmail.com"
            target="_blank"
          >
            <img
              src={gmail}
              alt="Gmail"
              className="w-16 h-16 mx-4 inline-block"
            />
            <p className="text-lg font-semibold mt-3">Gmail</p>
          </a>
        </motion.div>
      </div>
      <Footer />
      <span className="relative p-4 text-white py-8 justify-center flex flex-row gap-8 font-semibold text-lg w-full bg-[#1b2b40] -mt-9 pb-20">
        <p>&copy; {year}</p>
        <p>Designed & Developed by Sami Erafii</p>
      </span>
    </div>
  );
};

export default Contact;
