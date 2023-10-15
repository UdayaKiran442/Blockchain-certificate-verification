import React from "react";
import Lottie from "lottie-react";

import loader from "../assets/loader.json";

const Loader: React.FC = () => {
  return (
    <div className="w-56 h-56 mt-[20%] ml-[40%] ">
      <Lottie animationData={loader} loop={true} />
    </div>
  );
};

export default Loader;
