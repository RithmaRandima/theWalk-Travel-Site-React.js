import React from "react";
import DestinationBox from "../PopularDestinationBox/PopularDestinationBox";
import BackgroundImg from "../../Assets/Popular-Background.png";
import { Background, Parallax } from "react-parallax";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { popularDestinationsData } from "../../Data/DestinationData";

const PopularDestinations = () => {
  return (
    <div
      id="packages"
      className="flex flex-col w-[100%] h-[100%]  m-auto pb-20  "
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
          <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sint nam aliquam adipisci ipsum harum id maiores nostrum at
            architecto. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className=" w-[100%] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {popularDestinationsData.map((data) => {
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

        <div className="py-1 px-2 pt-14 text-center">
          <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit animi
            iure officiis quibusdam excepturi repellendus aperiam. Atque
            eligendi eos nemo molestiae enim dignissimos expedita repudiandae
            dicta culpa vero numquam, asperiores ipsa optio minima molestias.
            Error quisquam tenetur unde dolores illum.
          </p>
          <button className="bg-[#00ffee] p-2 px-7 rounded-[50px] text-white text-[13px] uppercase mt-7">
            View All Tours
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default PopularDestinations;
