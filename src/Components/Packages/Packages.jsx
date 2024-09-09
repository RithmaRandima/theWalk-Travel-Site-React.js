import React from "react";

import PackagesBox from "./PackagesBox/PackagesBox";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { packagesData } from "../../Data/DestinationData";

const Packages = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,

          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col max-w-[1240px] h-[100%] m-auto w-ful p-3 bg-gray-100 pb-8">
      <div className="py-10 px-2 pb-14 text-center">
        <h1 className="text-3xl md:text-5xl mb-6">Top Tour Packages</h1>
        <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente sint
          nam aliquam adipisci ipsum harum id maiores nostrum at architecto.
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="w-[100%] mx-auto mt-[10px] h-[100%]">
        <Slider {...settings}>
          {packagesData.map((data) => {
            return (
              <PackagesBox
                key={data.id}
                img={data.img}
                title={data.title}
                price={data.price}
                description={data.description}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Packages;
