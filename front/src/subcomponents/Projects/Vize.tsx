import React from "react";
import vize from "../../assets/Vize.png";
import { Card } from "antd";

const { Meta } = Card;

const Vize: React.FC = () => {
  return (
    <a href="https://vize-qzbg.onrender.com/" target="_blank">
      <Card
        hoverable
        className="w-full h-full border-none! dark:bg-slate-800! bg-slate-100! transition-colors! duration-500!"
        cover={<img draggable={false} alt="example" src={vize} />}
      >
        <Meta
          title={<p className="text-black dark:text-white">Vize</p>}
          description={
            <div className="text-center">
              <p className="mb-4 dark:text-gray-300">
                🔗 https://vize-qzbg.onrender.com/
              </p>
              <p className="text-black dark:text-gray-200">
                AI-powered web application that takes in a zip file or public
                repository URL and analyzes the codebase providing insights into
                its structure and functionality.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default Vize;
