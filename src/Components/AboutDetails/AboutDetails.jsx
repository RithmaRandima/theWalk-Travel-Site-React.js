import React from "react";
import img1 from "../../Assets/about-us-1.jpg";
import img2 from "../../Assets/about-us-2.jpg";
import img3 from "../../Assets/about-us-3.jpg";
import { motion } from "framer-motion";

function AboutDetails() {
  return (
    <div
      id="about"
      className="max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-2 mb-[50px] text-center md:text-left "
    >
      <div className="p-4 py-10">
        <p className="text-[15px] my-3 tracking-[4px]">ABOUT US</p>
        <motion.h1
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-5xl my-4 mb-8"
        >
          Welcome To <span>.the</span>
          <span className="text-red-500 uppercase font-bold text-[50px]">
            Walk
          </span>
          <br />
          Travel Agency
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
          className="text-gray-700 text-[20px]"
        >
          With over 340 hotels worldwide, NH Hotel Group offers a wide variety
          of hotels catering for a perfect stay no matter where your
          destination.
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
          Manager: <span className="text-red-500">Rithma Randima</span>
        </motion.p>
      </div>
      <div className="flex flex-row gap-2 h-[500px]">
        <div className="hidden md:flex flex-col gap-4">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="w-[100%]  h-[100%] relative md:rounded-t-full overflow-hidden"
          >
            <img src={img1} className="w-[100%] h-[100%] object-cover" alt="" />
            <div className="absolute w-[100%] h-[100%] top-0 left-0 bg-gradient-to-b to-black/50 from-black/20 "></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.4,
            }}
            className="w-full h-[100%]"
          >
            <img
              src={img2}
              className="w-[100%] h-[100%] md:rounded-ee-full object-cover"
              alt=""
            />
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.6,
            }}
            className="hidden md:flex md:w-[330px] md:h-[100%] overflow-hidden md:rounded-b-full "
          >
            <img src={img3} className="w-[100%] h-[100%] object-cover" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutDetails;
