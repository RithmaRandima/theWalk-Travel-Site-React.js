import React from "react";
import { TiTick } from "react-icons/ti";
import backgroundImage from "../../Assets/Newsletter-Two-Background.jpeg";

import image01 from "../../Assets/popular-destination-2.jpeg";
import image02 from "../../Assets/popular-destination-3.jpeg";
import image03 from "../../Assets/popular-destination-6.jpeg";
import image04 from "../../Assets/popular-destination-7.jpeg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Background, Parallax } from "react-parallax";

import { motion } from "framer-motion";

const NewsLetter = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    cssEase: "linear",
  };
  const sideImages = [image01, image02, image03, image04];

  return (
    <div className=" h-[100%] md:h-[90vh] w-[100%]  mt-[40px]">
      <Parallax strength={400} className="w-[100%] h-[100%] relative ">
        <Background className="custom-bg w-[100vw] h-[100vh] ">
          <img
            src={backgroundImage}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </Background>

        <div className=" w-[100%] h-[90vh] grid grid-cols-1 md:grid-cols-2  place-items-center bg-gradient-to-t from-[#000]/70 to-black/10">
          <motion.div
            initial={{ x: -500 }}
            whileInView={{ x: 0 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 100,
              delay: 0.1,
            }}
            className="hidden md:flex w-[500px] h-[480px] flex-col items-center justify-center relative "
          >
            <div className="w-[500px] h-[480px] ">
              <Slider {...settings}>
                {sideImages.map((images, i) => {
                  return (
                    <img
                      key={i}
                      src={images}
                      className="w-[100%] h-[480px] object-cover"
                      alt=""
                    />
                  );
                })}
              </Slider>
            </div>
          </motion.div>

          <div className="p-6 mr-3 w-[100%]">
            <div className="flex items-start flex-col text-left text-white">
              <p className="text-[#00ffee] text-[17px] md:text-[22px] mb-3">
                Adventure Travel
              </p>
              <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
                Embrace the Thrill of <br /> the Unknown
              </h1>
              <p className="leading-7 text-[16px] md:text-[17px] mb-3">
                Are you tired of the typical tourist destinations and looking to
                step out of your comfort zone? Adventure travel may be the
                perfect solution for you! Here are four reasons why you should
                book an adventure travel experience :
              </p>
            </div>
            <div>
              <div className="border-b border-white/70 flex py-5 text-white">
                <TiTick className="text-[22px]  mr-3" />
                <p>Connect with nature</p>
              </div>

              <div className="border-b border-white/70 flex py-5 text-white">
                <TiTick className="text-[22px]  mr-3" />
                <p>Experience other cultures</p>
              </div>

              <div className="flex py-5 text-white">
                <TiTick className="text-[22px]  mr-3" />
                <p>Create unforgettable memories</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default NewsLetter;
