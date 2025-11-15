import React from "react";
import { Card } from "antd";
import events from "../../assets/eventhub.png";

const { Meta } = Card;

const EventHub: React.FC = () => {
  return (
    <a
      href="https://github.com/AbderrahmaneBoulmalf/Group_A-SOEN341_Project_F25"
      target="_blank"
    >
      <Card
        hoverable
        className="w-full h-full border-none! dark:bg-slate-800! bg-slate-100! transition-colors! duration-500!"
        cover={<img draggable={false} alt="example" src={events} />}
      >
        <Meta
          title={<p className="text-black dark:text-white">EventHub</p>}
          description={
            <div className="text-center">
              <p className="mb-4 dark:text-gray-300">Github Repository</p>
              <p className="text-black dark:text-gray-200">
                This project was built as a part of a team for the SOEN341
                course at Concordia University. EventHub is a web application
                that allows students to browse and register for events. Managers
                can register new events, view registered participants, and
                manage event details. Admins moderate the platform by managing
                users and overseeing event activities. Development process
                included CI integration, unit testing, and followed Agile
                methodologies.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default EventHub;
