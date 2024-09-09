import React from "react";
import background from "../../Assets/Hero-Background.jpeg";
import { Background, Parallax } from "react-parallax";
import Booking from "../BookingSection/Booking";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="w-full h-[80vh] md:h-[100vh] relative">
      <Parallax
        strength={200}
        className="w-[100%] h-[80vh] md:h-[100vh] relative"
      >
        <Background className="custom-bg w-[100vw] h-[80vh] md:h-[100vh] bg-black">
          <img
            src={background}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </Background>

        <div className="bg-gradient-to-t from-[#00ffee]/10 to-black/10 w-full h-full absolute top-0"></div>

        <div className="max-w-[1140px] m-auto ">
          <div className="absolute top-[110px] md:top-[100px] left-[50%] translate-x-[-50%] md:translate-y-[5px] translate-y-[40%] w-full  max-w-[700px] h-fit flex flex-col text-white  p-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.2,
              }}
              className="font-extrabold text-[50px] md:text-[80px] uppercase"
            >
              <span className="mr-[15px] text-[#00ffee]">LOVE</span>&{" "}
              <ReactTyped strings={["Travel"]} typeSpeed={800} loop />
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3,
              }}
              className="text-[13px] w-[80%] mx-auto md:w-[100%] md:text-[17px] leading-8 tracking-[3px]"
            >
              TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS
              OPPORTUNITY FOR YOUR BUSINESS
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.4,
              }}
              className="w-[200px] md:w-[280px] text-[12px] md:text-[18px] text-center my-[20px] bg-[#03dccd]  uppercase py-[9px] mx-auto rounded-[50px]"
            >
              Book Now AT $50.00
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.6,
          }}
          className="hidden sm:block absolute z-10 w-[100%] md:h-[92vh] h-[74vh]"
        >
          <Booking />
        </motion.div>
      </Parallax>
    </div>
  );
}

export default Hero;
