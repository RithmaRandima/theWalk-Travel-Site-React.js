import React from "react";
import DestinationBox from "../PopularDestinationBox/PopularDestinationBox";
import BackgroundImg from "../../Assets/Popular-Background.png";
import { Background, Parallax } from "react-parallax";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularDestinationsData } from "../../Data/DestinationData";
import { motion } from "framer-motion";

const PopularDestinations = () => {
  return (
    <div
      id="popular"
      className="flex flex-col w-[100%] h-[100%]  m-auto pb-20 "
    >
      <Parallax
        strength={400}
        className="w-[100%] h-[100%] relative pb-7 pt-11"
      >
        <Background className="custom-bg w-[100vw] h-[100vh] opacity-[0.2] ">
          <img
            src={BackgroundImg}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </Background>

        <div className="py-10 px-2 pb-14 text-center">
          <h1 className="text-3xl md:text-5xl mb-6">Most Popular Tours</h1>
          <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto tracking-[2px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sint nam aliquam adipisci ipsum harum id maiores nostrum at
            architecto. Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* display */}
        <div className="hidden md:grid w-[100%] mx-auto   grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {popularDestinationsData.map((data, i) => {
            return (
              <DestinationBox
                key={data.id}
                img={data.img}
                days={data.days}
                title={data.title}
                price={data.price}
                description={data.description}
                userCount={data.userCount}
              />
            );
          })}
        </div>

        {/* mobile */}
        <div className="md:hidden w-[100%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {popularDestinationsData.map((data, i) => {
            if (i < 3) {
              return (
                <DestinationBox
                  key={data.id}
                  img={data.img}
                  days={data.days}
                  title={data.title}
                  price={data.price}
                  description={data.description}
                  userCount={data.userCount}
                />
              );
            }
          })}
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
          className="py-1 px-2 pt-14 text-center"
        >
          <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto tracking-[2px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi
            iure officiis quibusdam excepturi repellendus aperiam. Atque
            eligendi eos nemo molestiae enim dignissimos expedita repudiandae
            dicta culpa vero numquam, asperiores ipsa optio minima molestias.
            Error quisquam tenetur unde dolores illum.
          </p>
          <button className="bg-[#00ffee] p-2 px-5 mt-4 rounded-[50px] text-white text-[13px] uppercase">
            View All Tours
          </button>
        </motion.div>
      </Parallax>
    </div>
  );
};

export default PopularDestinations;
