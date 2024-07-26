import React from "react";
import imgBig from "../../Assets/pngwing.com (11).png";
import imgTop from "../../Assets/about-img-1.jpg";
import imgBottom from "../../Assets/about-img-1.jpg";
import { motion } from "framer-motion";
import { Background, Parallax } from "react-parallax";

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
          <div className="w-[100%] h-[100%] bg-red-300 overflow-hidden relative">
            <img
              src={imgTop}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
          <div className="w-[100%] h-[100%] bg-red-300 overflow-hidden relative">
            <img
              src={imgTop}
              alt=""
              className="w-[100%] h-[100%] object-cover"
            />
          </div>
        </div>
      </div>

      <div className="newsletter-right h-[500px] w-[380px] relative">
        <Parallax strength={400} className="w-[100%] h-[100vh] ">
          <Background className="custom-bg w-[390px] h-[500px] opacity-25">
            <img
              src={imgBig}
              alt="fill murray"
              className="w-[100%] h-[100%] object-contain"
            />
          </Background>

          <div className="absolute w-[130px] h-[130px] rounded-full p-1 overflow-hidden border-[#00ffee] border-2 border-dashed left-5 top-5">
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>
          <div className="absolute w-[200px] h-[200px]  rounded-full p-3 overflow-hidden  left-[130px] top-[100px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="absolute w-[140px] h-[140px] rounded-full p-2 overflow-hidden  left-[10px] top-[300px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={imgTop}
              className="w-[100%] h-[100%] object-cover rounded-full"
              alt=""
            />
          </div>

          <div className="absolute w-[80px] h-[80px] rounded-full p-1 overflow-hidden  left-[210px] top-[330px]  border-[#00ffee] border-2 border-dashed">
            <img
              src={imgTop}
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
