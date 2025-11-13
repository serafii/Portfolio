import React from "react";
import { Card } from "antd";
import dashboard from "../../assets/dashboard_smartworld.png";

const { Meta } = Card;

const SmartWorld: React.FC = () => {
  return (
    <a href="https://www.smartworldsignals.com" target="_blank">
      <Card
        hoverable
        className="w-full h-full"
        cover={<img draggable={false} alt="example" src={dashboard} />}
      >
        <Meta
          title="SmartWorld"
          description={
            <div className="text-center">
              <p className="mb-4">www.smartworldsignals.com</p>
              <p className="text-black">
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
