import React from "react";
import rocket from "../../assets/nowwhat.png";

const NowWhat: React.FC = () => {
  return (
    <div className="hover:cursor-pointer h-full w-full hover:shadow-2xl transition-shadow duration-300">
      <img
        draggable={false}
        alt="NowWhat Project Screenshot"
        src={rocket}
        className="object-contain w-auto mx-auto rounded-t-lg shadow-lg"
      />
      <div className="rounded-b-lg border-none dark:bg-slate-800 bg-slate-100 p-6 shadow-md -mt-1 transition-colors! duration-500!">
        <div className="text-center">
          <p className="mb-2 text-black font-semibold dark:text-white">
            NowWhat
          </p>
          <p className="mb-4 text-gray-500/80 text-sm dark:text-gray-300">
            In Progress
          </p>
          <p className="text-black dark:text-gray-200 text-sm">
            This project is currently under development. NowWhat is a mobile
            application that suggests activities based on user preferences and
            location, within a few clicks. Technologies used include React
            Native, Expo and GoogleMaps API.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NowWhat;
