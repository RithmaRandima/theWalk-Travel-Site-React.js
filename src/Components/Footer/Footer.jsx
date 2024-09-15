import { motion } from "framer-motion";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-[100%] text-white  bg-[#050505] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 pb-9 pt-3">
        {/* col-1 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.1,
          }}
          className=" w[100%] h-[100%] text-center p-6"
        >
          <div className="flex items-center  font-sans relative md:mb-10">
            <h1 className="text-[20px] font-bold text-[#000] pl-2 bg-[#00ffee] mx-auto ">
              the
              <span className="font-bold text-[#00ffee] bg-black p-1 pr-2 text-[20px] ">
                WALK
              </span>
            </h1>
          </div>
          <p className="hidden md:block w-[240px] mx-auto mb-5 text-[15px] text-gray-400">
            .theWalk, founded in 2024, is dedicated to all those who love to
            wander far and wide.
          </p>
          <p className="hidden md:block w-[200px] mx-auto text-[15px] text-gray-400">
            We'd like to invite you on a culinary adventure, where you’ll
            explore undiscovered gourmet experiences.
          </p>
        </motion.div>

        {/*col-2  */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
          className="hidden md:block w[100%] h-[100%] text-center p-6"
        >
          <h1 className="font-bold mb-5 text-[18px]">VISIT</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            317 Pacific C Hwy Huntington, CA 92648
          </p>

          <h1 className="font-bold my-5 text-[18px]">TALK</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            123,456-7
          </p>

          <h1 className="font-bold my-5 text-[18px]">WRITE</h1>
          <p className="w-[180px] mx-auto text-[14px] text-gray-400">
            travel@thewalk.com
          </p>
        </motion.div>

        {/* col-3 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
          className="text-center"
        >
          <h1 className="font-bold my-5 text-[18px]">RESERVATIONS</h1>
          <button className="border border-white bg-transparent text-white py-2 px-6 mb-5">
            BOOK YOUR TICKET
          </button>
          <h1 className="font-bold my-5 text-[18px]">Hours</h1>
          <p className="mx-auto text-[14px] text-gray-400">
            MONDAY thru FRIDAY
          </p>
          <p className="mx-auto text-[14px] text-gray-400 mb-5">11am - 9pm</p>
          <p className="mx-auto text-[14px] text-gray-400">SATURDAY/SUNDAY</p>
          <p className="mx-auto text-[14px] text-gray-400"> 10am - 11pm</p>
        </motion.div>

        {/* col-4 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          className="text-center"
        >
          <h1 className="hidden md:block font-bold my-5 text-[18px]">ABOUT</h1>
          <p className="hidden md:block mx-auto text-[14px] text-gray-400">
            FAQ
          </p>
          <p className="hidden md:block w-[50%] mx-auto text-[14px] text-gray-400 mb-7">
            Reservation Policy Privacy Policy Health & Safety
          </p>
          <h1 className="font-bold my-5 text-[18px]">FOLLOW ALONG</h1>
          <div className="flex gap-6 items-center justify-center">
            <p>
              <FaInstagram
                size={24}
                className="hover:scale-125 hover:text-[#00ffee] duration-200"
              />
            </p>
            <p>
              <FaFacebook
                size={24}
                className="hover:scale-125 hover:text-[#00ffee] duration-200"
              />
            </p>
            <p>
              <FaTwitter
                size={24}
                className="hover:scale-125 hover:text-[#00ffee] duration-200"
              />
            </p>
            <p>
              <FaLinkedin
                size={24}
                className="hover:scale-125 hover:text-[#00ffee] duration-200"
              />
            </p>
          </div>
        </motion.div>
      </div>

      {/* bottom */}
      <div className="flex flex-row justify-between px-10 items-center py-4 gap-7 pb-[17px]  bg-[#000000] text-white">
        <p className="text-[6px] md:text-[8px] tracking-[4px]">
          © 2023 the<span className="text-[#00ffee] font-bold">walk</span> ALL
          RIGHTS RESERVED.
        </p>
        <div className="hidden md:flex items-center font-sans relative">
          <h1 className="text-[20px] font-bold text-[#000] pl-2 bg-[#00ffee] ">
            the
            <span className="font-bold text-[#00ffee] bg-black p-1 pr-2 text-[20px] ">
              WALK
            </span>
          </h1>
        </div>
        <p className="hidden md:block text-[10px] font-bold tracking-[4px]">
          FLY ABOVE THE WORLD
        </p>
      </div>
    </div>
  );
};

export default Footer;
