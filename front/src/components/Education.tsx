import React from "react";
import EducationTimeline from "../subcomponents/About/EducationTimeline";

const Description: React.FC = () => {
  return (
    <div className="w-full px-5 sm:px-10 text-center text-slate-700 dark:text-white z-10">
      <div className="mx-auto w-full max-w-6xl">
        <EducationTimeline />
      </div>
    </div>
  );
};

export default Description;
