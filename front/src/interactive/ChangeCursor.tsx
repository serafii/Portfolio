import React from "react";
import cursor from "../assets/mouse-cursor.svg";

const ChangeCursor: React.FC = () => {
  return (
    <div className="rounded-full h-16 w-16 backdrop-blur-md bg-white/30 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ease-in-out">
      <img src={cursor} alt="Cursor Icon" className="h-8 w-8" />
    </div>
  );
};

export default ChangeCursor;
