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
              <p className="mb-4 dark:text-gray-300">🔗 Github Repository</p>
              <p className="text-black dark:text-gray-200">
                Web application that allows students to register for events.
                Managers can register new events, view registered participants,
                and manage event details. Admins moderate the platform and
                oversees event activities.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default EventHub;
