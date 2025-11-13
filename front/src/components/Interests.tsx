import { motion } from "framer-motion";
import { GiGamepad } from "react-icons/gi";
import { FaTree, FaPlane, FaMusic } from "react-icons/fa";
import { MdTravelExplore } from "react-icons/md";

export default function Interests() {
  const hobbies = [
    {
      title: "Gaming",
      desc: "Enjoying multiplayer or single-player campaigns",
      gradient: "from-[#1B2A49]/40 to-[#A79FFF]/30",
    },
    {
      title: "Nature",
      desc: "Hiking, exploring, and spending time outdoors",
      gradient: "from-[#A79FFF]/30 to-[#1B2A49]/20",
    },
    {
      title: "Aviation",
      desc: "Passionate about aircraft design and technology",
      gradient: "from-[#1B2A49]/30 to-[#D3C0FF]/20",
    },
    {
      title: "Travel",
      desc: "Broadening points of views and experiences",
      gradient: "from-[#D3C0FF]/20 to-[#1B2A49]/10",
    },
    {
      title: "Music",
      desc: "Listening to diverse music genres and artists",
      gradient: "from-[#1B2A49]/20 to-[#A79FFF]/30",
    },
  ];

  return (
    <div className="w-10/12 p-8 text-center text-white z-10 mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold mb-6">Interests & Hobbies</h2>
        <p className="mb-12 text-xl font-semibold">
          What I'm interested in and enjoy doing in my free time outside of
          coding
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
        {hobbies.map((hobby, index) => (
          <motion.div
            key={index}
            className={`flex flex-col items-center justify-center rounded-full p-4 aspect-square 
                bg-linear-to-br ${hobby.gradient} backdrop-blur-2xl 
                border border-[#8affc3]/10 
                transition-transform duration-300 hover:cursor-default`}
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
