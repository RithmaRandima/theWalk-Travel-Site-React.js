import React from "react";
import "./NewsLetter.css";

import backgroundImage from "../../Assets/Deals-and-Discount-Background.png";
import smallImage01 from "../../Assets/Deals-and-Discount-small-1.jpg";
import smallImage02 from "../../Assets/Deals-and-Discount-small-2.jpg";
import smallImage03 from "../../Assets/Deals-and-Discount-small-3.jpg";
import smallImage04 from "../../Assets/Deals-and-Discount-small-4.jpg";

import { motion } from "framer-motion";
import { Background, Parallax } from "react-parallax";
import { dealsAndDiscountData } from "../../Data/DestinationData";
import DestinationBox from "../PopularDestinationBox/PopularDestinationBox";

function AboutDetails() {
  return (
    <div
      id="about"
      className="overflow-hidden max-w-[1140px] m-auto w-full  grid grid-cols-1 md:grid-cols-3 mb-[50px] text-center md:text-left mt-20"
    >
      <div className="col-span-2 p-4 py-10">
        <div>
          <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
            Deals & Discounts
          </h1>
          <p className="text-gray-700 text-[20px]">
            Whether you're planning a romantic honeymoon or a family vacation,
            our price section has got you covered. So, start browsing today and
            find the perfect
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 w-[100%] h-[100%] mt-[20px]">
          {dealsAndDiscountData.map((data) => {
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
      </div>

      <div className="newsletter-right h-[500px] w-[380px] relative">
        <Parallax strength={400} className="w-[100%] h-[100vh] ">
          <Background className="custom-bg w-[390px] h-[500px] opacity-25">
            <img
              src={backgroundImage}
              alt="fill murray"
              className="w-[100%] h-[100%] object-contain"
            />
          </Background>

          <div className="deals-small-box absolute w-[140px] h-[140px] rounded-full p-1 overflow-hidden border-[#00ffee] border-2 border-dashed left-5 top-7">
            <img
              src={smallImage01}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="deals-small-box absolute w-[210px] h-[210px]  rounded-full p-3 overflow-hidden  left-[160px] top-[110px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={smallImage02}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="deals-small-box absolute w-[140px] h-[140px] rounded-full p-2 overflow-hidden  left-[40px] top-[300px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={smallImage03}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="deals-small-box absolute w-[130px] h-[130px] rounded-full p-1 overflow-hidden  left-[200px] top-[370px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={smallImage04}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>
        </Parallax>
      </div>
    </div>
  );
}

export default AboutDetails;
