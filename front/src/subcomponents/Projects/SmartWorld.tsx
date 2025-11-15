import React from "react";
import { Card } from "antd";
import dashboard from "../../assets/dashboard_smartworld.png";

const { Meta } = Card;

const SmartWorld: React.FC = () => {
  return (
    <a href="https://www.smartworldsignals.com" target="_blank">
      <Card
        hoverable
        className="w-full h-full border-none! dark:bg-slate-800! bg-slate-100! transition-colors! duration-500!"
        cover={<img draggable={false} alt="example" src={dashboard} />}
      >
        <Meta
          title={<p className="text-black dark:text-white">SmartWorld</p>}
          description={
            <div className="text-center">
              <p className="mb-4 dark:text-gray-300">
                www.smartworldsignals.com
              </p>
              <p className="text-black dark:text-gray-200">
                Web based trading bot providing real-time RSI, MACD, and
                Stochastic notifications, approved by a custom trained
                TensorFlow model. Included features such as a functional UI,
                web-push/email notification system, and real-time market data
                via third-party APIs. Users can save stocks to their watchlist
                and enable custom alerts for specific technical indicators.
              </p>
            </div>
          }
        />
      </Card>
    </a>
  );
};

export default SmartWorld;
