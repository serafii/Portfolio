import React from "react";
import BusinessTemplate from "../subcomponents/Projects/BusinessTemplate";
import EventHub from "../subcomponents/Projects/EventHub";
import SmartWorld from "../subcomponents/Projects/SmartWorld";
import NowWhat from "../subcomponents/Projects/NowWhat";

const Projects: React.FC = () => {
  return (
    <div className="w-10/12 p-16 text-center text-white relative z-10">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <h2 className="text-2xl font-bold mb-12">Completed</h2>
      <div className="w-full flex justify-between p-10 mb-6">
        <BusinessTemplate />
        <EventHub />
        <SmartWorld />
      </div>
      <div className="text-center w-full p-6">
        <h1 className="text-2xl font-bold mb-4">Honorable Mentions</h1>
        <p className="mb-4">
          Multiple school related projects in various programming languages.
          Terminal based games, management systems, and more.
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-12">In Progress</h2>
      <div className="w-full flex justify-between p-10 mb-6">
        <NowWhat />
      </div>
    </div>
  );
};

export default Projects;
