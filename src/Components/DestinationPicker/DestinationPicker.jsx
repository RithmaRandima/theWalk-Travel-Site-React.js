import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineBars } from "react-icons/ai";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

const DestinationPicker = () => {
  return (
    <div
      id="destination"
      className="h-[100%] md:h-[85vh] w-[100%] bg-gray-100 pt-12 "
    >
      <div className="flex flex-col items-center text-center justify-center h-[40vh] px-7 w-[100%]">
        <p className="text-[#00ffee] text-[17px] md:text-[22px]">
          Choose your Trip
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          <ReactTyped
            strings={["Start your Vacation Now"]}
            typeSpeed={300}
            loop
          />
        </h1>
        <p className="leading-7 text-[16px] md:text-[17px] mb-3 md:w-[70%]">
          Looking for your dream vacation destination but don't know where to
          start? With the help of experienced and knowledgeable travel agents,
          you can plan the trip of a lifetime with ease.
        </p>
      </div>

      <div className="flex items-center justify-center  w-full h-[100%] md:h-[40vh] md:px-10 p-10">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full gap-5 bg-white h-[100%] md:h-[130px] p-10 md:px-10 rounded-[20px]"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
        >
          <div className="flex items-center w-full font-sans">
            <div>
              <FaSearch className="text-[#00ffee] text-[25px]" />
            </div>
            <div className="text-left ml-5 w-[100%]">
              <h1 className="text-[20px] font-bold">Place</h1>
              <input
                type="text"
                className="px-1 placeholder-black/50 py-2 outline-[#00ffee] outline-1 w-full"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center w-full  font-sans ">
            <div>
              <FaLocationDot className="text-[#00ffee] text-[25px]" />
            </div>
            <div className="text-left ml-5 w-[100%]">
              <h1 className="text-[20px] font-bold">Destinations</h1>
              <input
                type="text"
                className="px-1 placeholder-black/50 py-2 outline-[#00ffee] outline-1 w-full"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center  w-full font-sans">
            <div>
              <AiOutlineBars className="text-[#00ffee] text-[25px]" />
            </div>
            <div className="text-left ml-5 w-[100%]">
              <h1 className="text-[20px] font-bold">Typologies</h1>
              <input
                type="text"
                className="px-1 placeholder-black/50 py-2 outline-[#00ffee] outline-1 w-full"
                placeholder="insert Keyword"
              />
            </div>
          </div>

          <div className="flex items-center  w-full font-sans md:w-[220px] h-[80px]">
            <button className="w-full md:w-[200px] bg-[#00ffee] h-[50px] font-bold uppercase md:text-[15px] tracking-[1px] ">
              Search
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DestinationPicker;
