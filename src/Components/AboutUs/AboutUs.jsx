import React from "react";
import "./AboutUs.css";
import bigImage from "../../Assets/about-us-big-image.jpg";
import small01 from "../../Assets/about-us-small-1.jpg";
import small02 from "../../Assets/about-us-small-2.jpg";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <div
      id="about"
      className="max-w-[1200px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 mb-[50px] text-center md:text-left mt-[100px] "
    >
      <div className="h-[90vh] flex items-center justify-center relative">
        <div className="h-[98%] bg-white border-4 border-[#00ffee] border-dashed  w-[90%] rounded-full overflow-hidden p-3">
          <img
            src={bigImage}
            className="w-[100%] h-[100%] object-cover rounded-full"
            alt=""
          />
        </div>

        <div className="about-small-img-container-1 absolute h-[140px] w-[140px] bg-transparent border-2 border-[#00ffee] border-dashed rounded-full overflow-hidden p-2 top-[100px] left-[-10px]">
          <img
            src={small01}
            className="w-[100%] h-[100%] object-cover rounded-full"
            alt=""
          />
        </div>

        <div className="about-small-img-container-2 absolute h-[180px] w-[180px] bg-transparent border border-[#00ffee] border-dashed rounded-full overflow-hidden p-2 right-[30px] bottom-[-30px]">
          <img
            src={small02}
            className="w-[100%] h-[100%] object-cover rounded-full"
            alt=""
          />
        </div>
      </div>

      <div className=" p-4 py-10">
        <p className="text-[18px] mt-3 tracking-[4px]">ABOUT US</p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-5xl mb-8"
        >
          Welcome To <span className="text-[35px] ml-3">the</span>
          <span className="text-[#00ffee] uppercase font-bold text-[50px]">
            walk
          </span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-gray-700 text-[18px] mb-5"
        >
          With over 340 hotels worldwide, NH Hotel Group offers a wide variety
          of hotels catering for a perfect stay no matter where your
          destination.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="text-gray-700 text-[18px]"
        >
          With over 340 hotels worldwide, NH Hotel Group offers a wide variety
          of hotels catering for a perfect stay no matter where your
          destination. Hotels worldwide, NH Hotel Group offers a wide variety of
          hotels catering for a perfect stay no matter where your destination.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="mt-10 text-[17px]"
        >
          Founder / CEO:{" "}
          <span className="text-[#00ffee] text-[20px] tracking-[2px]">
            Henry Cavil
          </span>
        </motion.p>
      </div>
    </div>
  );
}

export default AboutUs;
