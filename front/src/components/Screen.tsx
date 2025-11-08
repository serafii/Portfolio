import React from "react";

const chevronDown: React.ReactNode = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

const Main: React.FC = () => {
  const textLines: string[] = [
    "Software Engineering Student and Enthusiast",
    "Proud Garen Main",
    "Eager to Learn and Grow",
    "Developer in Progress",
  ];

  return (
    <div className="min-h-screen bg-green-500 flex flex-col items-center justify-center">
      {/* <div className="w-full p-4 absolute top-0 left-0">
        <div className="h-10 w-10 rounded-full bg-amber-500 p-2">S</div>
      </div> */}
      <div className="flex flex-col items-center justify-center w-full">
        <div className="p-2 font-bold text-slate-100 text-5xl">Sami Erafii</div>
        <div className="text-slate-100 p-3 text-xl font-semibold">
          Software Engineering Student and Enthusiast
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-full animate-bounce absolute bottom-4 hover:cursor-pointer">
        <div className="font-semibold text-lg">View More</div>
        {chevronDown}
      </div>
    </div>
  );
};
export default Main;
