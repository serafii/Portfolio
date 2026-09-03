import React from "react";
import EducationTimeline from "../subcomponents/About/EducationTimeline";

const Description: React.FC = () => {
  return (
    <div className="w-full md:w-5/6 lg:w-full xl:w-3/4 3xl:w-3/4 mx-auto px-10 text-center text-slate-700 dark:text-white z-10">
      <EducationTimeline />
    </div>
  );
};

export default Description;
