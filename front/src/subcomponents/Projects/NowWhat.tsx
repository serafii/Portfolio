import React from "react";
import { Card } from "antd";
import dashboard from "../../assets/dashboard_smartworld.png";

const { Meta } = Card;

const NowWhat: React.FC = () => {
  return (
    <Card
      hoverable
      className="w-full"
      cover={<img draggable={false} alt="example" src={dashboard} />}
    >
      <Meta
        title="NowWhat"
        description={
          <div className="text-center">
            <p className="mb-4">In Progress</p>
            <p className="text-black">
              This project is currently under development. NowWhat is a mobile
              application that suggests activities based on user preferences and
              location, within a few clicks. Technologies used include React
              Native, Expo and GoogleMaps API.
            </p>
          </div>
        }
      />
    </Card>
  );
};

export default NowWhat;
