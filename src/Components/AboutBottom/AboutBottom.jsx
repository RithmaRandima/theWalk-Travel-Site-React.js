import React from "react";
import { TiTick } from "react-icons/ti";
import image1 from "../../Assets/about-img-1.jpg";
import image2 from "../../Assets/about-img-2.jpg";
import image3 from "../../Assets/about-img-3.jpg";
import image4 from "../../Assets/about-img-4.jpg";
import image5 from "../../Assets/about-img-5.jpg";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Background, Parallax } from "react-parallax";

const AboutBottom = () => {
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
  const sideImages = [image1, image2, image3, image4, image5];

  return (
    <div className=" h-[100%] md:h-[90vh] w-[100%]  mt-[40px]">
      <Parallax strength={400} className="w-[100%] h-[100%] relative pb-7 ">
        <Background className="custom-bg w-[100vw] h-[100vh] ">
          <img
            src={image1}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </Background>

        <div className=" w-[100%] h-[90vh] grid grid-cols-2  place-items-center bg-gradient-to-t from-[#00ffee]/20 to-black/60">
          <div className="w-[450px] h-[480px] flex flex-col items-center justify-center relative bg-black ">
            <div className="w-[450px] h-[480px] ">
              <Slider {...settings}>
                {sideImages.map((images) => {
                  return (
                    <img
                      src={images}
                      className="w-[100%] h-[480px] object-cover"
                      alt=""
                    />
                  );
                })}
              </Slider>
            </div>
          </div>

          <div className="p-6 hidden md:block mr-3">
            <div className="flex items-start flex-col text-left text-white">
              <p className="text-[#f00] text-[17px] md:text-[22px] mb-3">
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

export default AboutBottom;
