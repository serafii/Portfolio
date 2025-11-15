import React from "react";
import { Card } from "antd";
import portfolio from "../../assets/this_website.png";
import dark from "../../assets/this_dark.png";
import useIsDark from "../../utils/IsDark";

const { Meta } = Card;

const ThisWebsite: React.FC = () => {
  const isDark = useIsDark();

  return (
    <a
      href="https://github.com/serafii/Portfolio"
      target="_blank"
      rel="noreferrer noopener"
    >
      <Card
        hoverable
        className="w-full h-full border-none! dark:bg-slate-800! bg-slate-100! transition-colors! duration-500!"
        cover={
          <img
            draggable={false}
            alt="This website screenshot"
            src={isDark ? dark : portfolio}
          />
        }
      >
        <Meta
          title={<p className="text-black dark:text-white">This Website</p>}
          description={
            <div className="text-center">
              <p className="mb-4 dark:text-gray-300">GitHub Repository</p>
              <p className={isDark ? "text-gray-200" : "text-black"}>
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
