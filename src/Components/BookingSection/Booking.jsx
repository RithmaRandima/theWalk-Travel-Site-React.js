import React from "react";
import { motion } from "framer-motion";

function Booking() {
  return (
    <div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        delay: 0.4,
      }}
      id="deals"
      className="md:max-w-[1140px] w-[95%] px-2 py-1 md:px-10 md:py-[10px] bg-white shadow-xl rounded-[10px] mb-[100px] z-10 absolute left-[50%] translate-x-[-50%] top-[100%] translate-y-[-100%]"
    >
      <form className="flex flex-col md:flex-row justify-between w-full items-center text-[13px] md:text-[15px] text-black">
        <div className="flex items-center w-[100%]">
          <div className="flex flex-col text-center md:text-left my-2 py-2">
            <label>Destination</label>
            <select className="lg:w-[300px] md:w-full border rounder-md p-2 text-center md:text-left">
              <option>Grande Antigua</option>
              <option>key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
              <option>Grande Antigua</option>
            </select>
          </div>
          <div className="flex w-full text-center md:text-left">
            <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
              <label>Check-In</label>
              <input
                className="border rounded-md p-2 text-center md:text-left"
                type="date"
              />
            </div>
            <div className="flex flex-col w-full lg:w-[250px] my-2 p-2">
              <label>Check-Out</label>
              <input
                className="border rounded-md p-2 text-center md:text-left"
                type="date"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:my-2 p-2 w-full text-center md:text-left">
          <label className="hidden md:block">Search</label>
          <button className=" w-full bg-[#03dccd] py-[10px] text-white">
            Rates & Availabilities
          </button>
        </div>
      </form>
    </div>
  );
}

export default Booking;
