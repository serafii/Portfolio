import React from "react";

const EventHub: React.FC = () => {
  return (
    <div className="backdrop-blur-xl bg-white/5 rounded-lg p-6 flex flex-col items-center hover:scale-105 cursor-pointer ease-in-out duration-300 transition-all w-1/4">
      <h2 className="text-3xl font-bold mb-6">Event Hub Project</h2>
      <p className="mb-4">
        The Event Hub Project is a cutting-edge platform designed to facilitate
        seamless communication and collaboration between various stakeholders in
        real-time. By leveraging advanced technologies such as WebSockets,
        serverless architecture, and microservices, this project aims to create
        a dynamic ecosystem where events can be easily managed, tracked, and
        analyzed.
      </p>
    </div>
  );
};

export default EventHub;
