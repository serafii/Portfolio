import React from "react";
import { Card } from "antd";
import services from "../../assets/edit_services.png";

const { Meta } = Card;

const BusinessTemplate: React.FC = () => {
  return (
    <a href="https://soen287-project-fvxv.onrender.com" target="_blank">
      <Card
        hoverable
        className="w-full h-full"
        cover={<img draggable={false} alt="example" src={services} />}
      >
        <Meta
          title="Customizable Website Business Template"
          description={
            <div className="text-center">
              <p className="mb-4">www.soen287-project-fvxv.onrender.com</p>
              <p className="text-black">
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
