import React from "react";
import { motion } from "framer-motion";

const ActivityBox = (props) => {
  return (
    <div className=" activity-img-container overflow-hidden relative h-[250px]">
      <div className="z-10 absolute bg-gradient-to-t from-black/30 to-black/20 w-[100%] h-[100%] flex items-end justify-center text-white pb-8">
        <h2 className="activity-img-title text-1xl font-bold duration-300">
          Write Down Your Experience
          {props.text}
        </h2>
      </div>
      <img
        src={props.img}
        className="w-full h-full object-cover relative shadow-lg duration-300"
        alt=""
      />
    </div>
  );
};

export default ActivityBox;
