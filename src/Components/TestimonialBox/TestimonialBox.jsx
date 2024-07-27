import React from "react";
import { FaStar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const TestimonialBox = (props) => {
  return (
    <div className="w-[90%] md:w-[99%] mx-auto h-[350px] m-2 mt-[55px] relative bg-[#00ffee]/20 p-2 py-5 text-white">
      {/* userImg */}
      <div className="w-[80px] h-[80px] bg-red-400 rounded-full overflow-hidden absolute left-[50%] translate-x-[-50%] top-[-43px] shadow-sm shadow-white">
        <img
          src={props.img}
          alt=""
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      {/* title */}
      <h1 className="text-[24px] font-bold mt-7 cursor-pointer hover:text-[#00ffee]">
        {props.title}
      </h1>
      <div className="flex w-[25%] text-[10px] items-center justify-between text-[#00ffee] mb-2 mx-auto md:ml-1">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      {/* description */}
      <p className="font-[200] text-[17px] my-3 ">{props.message}</p>

      <div className="flex items-center justify-center mt-10 gap-5">
        <p className="text-[#00ffee] text-[20px] tracking-[2px]">
          {props.name}
        </p>
        <p className="text-[15px] flex  items-center ">
          <IoLocationSharp className="text-[18px] text-[#f00] mr-2" />{" "}
          {props.city}
        </p>
      </div>
    </div>
  );
};

export default TestimonialBox;
