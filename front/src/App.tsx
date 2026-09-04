import React from "react";
import { MotionConfig } from "framer-motion";
import Home from "./pages/Home";

const App: React.FC = () => {
  return (
    <MotionConfig reducedMotion="user">
      <Home />
    </MotionConfig>
  );
};

export default App;
