import React from "react";
import { Card } from "antd";
import portfolio from "../../assets/this.png";

const { Meta } = Card;

const ThisWebsite: React.FC = () => {
  return (
    <a href="https://github.com/serafii/Portfolio" target="_blank">
      <Card
        hoverable
        className="w-full h-full"
        cover={<img draggable={false} alt="example" src={portfolio} />}
      >
        <Meta
          title="This Website"
          description={
            <div className="text-center">
              <p className="mb-4">GitHub Repository</p>
              <p className="text-black">
                Obviously, this website you're currently on. Built using React,
                TypeScript and third party libraries such as Framer Motion and
                Ant Design. Deployed on Vercel.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default ThisWebsite;
