import React from "react";
import Main from "../components/Screen";
import Description from "../components/Description";
import Skills from "../components/Skills";
import Projects from "../components/Projects";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-32 items-center justify-center">
      <Main />
      <Description />
      <Skills />
      <Projects />
    </div>
  );
};

export default Home;
