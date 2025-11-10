import React from "react";

const NowWhat: React.FC = () => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all w-1/4">
      <h2 className="text-3xl font-bold mb-6">Now What Project</h2>
      <p className="mb-4">
        The Now What Project is a comprehensive solution designed to streamline
        and optimize business processes across various industries. By leveraging
        advanced technologies such as AI, machine learning, and data analytics,
        this project aims to provide organizations with the tools they need to
        enhance efficiency, reduce costs, and drive innovation.
      </p>
    </div>
  );
};

export default NowWhat;
