import React from "react";
import { Card } from "antd";
import services from "../../assets/edit_services.png";

const { Meta } = Card;

const BusinessTemplate: React.FC = () => {
  return (
    <a href="https://soen287-project-fvxv.onrender.com" target="_blank">
      <Card
        hoverable
        className="w-full h-full border-none! dark:bg-slate-800! bg-slate-100! transition-colors! duration-500!"
        cover={<img draggable={false} alt="example" src={services} />}
      >
        <Meta
          title={
            <p className="text-black dark:text-white">
              Customizable Website Business Template
            </p>
          }
          description={
            <div className="text-center">
              <p className="mb-4 dark:text-gray-300">
                www.soen287-project-fvxv.onrender.com
              </p>
              <p className="text-black dark:text-gray-200">
                This project is a customizable website template designed for
                small businesses. Admins can easily modify content and images
                through a custom interface. Clients can view services, contact
                the business and claim services.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default BusinessTemplate;
