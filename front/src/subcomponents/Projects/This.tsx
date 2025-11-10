import React from "react";

const ThisWebsite: React.FC = () => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all w-1/4">
      <h2 className="text-3xl font-bold mb-6">This Website</h2>
      <p className="mb-4">
        The Smart World Project is an innovative initiative aimed at leveraging
        cutting-edge technology to create sustainable and intelligent urban
        environments. This project focuses on integrating IoT devices, AI-driven
        analytics, and renewable energy solutions to enhance the quality of life
        for residents while minimizing environmental impact.
      </p>
    </div>
  );
};

export default ThisWebsite;
