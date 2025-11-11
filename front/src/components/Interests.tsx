import { motion } from "framer-motion";
import { GiGamepad } from "react-icons/gi";
import { FaTree, FaPlane, FaMusic } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

export default function Interests() {
  const hobbies = [
    {
      title: "Gaming",
      desc: "Multiplayer or single-player campaigns",
      gradient: "from-[#005f99]/40 to-[#8affc3]/20",
    },
    {
      title: "Nature",
      desc: "Hiking and walking outdoors",
      gradient: "from-[#8affc3]/30 to-[#005f99]/20",
    },
    {
      title: "Aviation",
      desc: "Impressed by aircraft design and technology",
      gradient: "from-[#005f99]/40 to-[#001122]/40",
    },
    {
      title: "Travel",
      desc: "Broadening points of views and experiences",
      gradient: "from-[#8affc3]/25 to-[#005f99]/25",
    },
    {
      title: "Music",
      desc: "Listening to diverse genres and artists",
      gradient: "from-[#005f99]/30 to-[#001122]/50",
    },
  ];

  return (
    <div className="w-10/12 p-8 text-center text-white relative z-10 mx-auto">
      <h2 className="text-3xl font-bold mb-6">Interests & Hobbies</h2>
      <p className="mb-12 text-xl font-semibold">
        What I'm interested in and enjoy doing in my free time outside of coding
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center rounded-full p-4 aspect-square 
              bg-linear-to-br ${hobby.gradient} backdrop-blur-2xl 
              border border-[#8affc3]/10 
              transition-transform duration-300 hover:cursor-pointer`}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.06, rotate: 2 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="text-3xl mb-3">
              {index === 0 && <GiGamepad />}
              {index === 1 && <FaTree />}
              {index === 2 && <FaPlane />}
              {index === 3 && <MdTravelExplore />}
              {index === 4 && <FaMusic />}
            </div>
            <h3 className="text-xl font-semibold mb-1">{hobby.title}</h3>
            <p className="text-md">{hobby.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
