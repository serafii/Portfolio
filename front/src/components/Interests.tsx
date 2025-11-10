import React from "react";
import { Carousel } from "antd";

const Interests: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="w-10/12 p-16 text-center text-white relative z-10 mx-auto">
      <h2 className="text-3xl font-bold mb-12">Interests & Hobbies</h2>
      <p className="mb-12 text-2xl font-semibold">
        A glimpse into what I enjoy outside of coding
      </p>
      <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={5000}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default Interests;
