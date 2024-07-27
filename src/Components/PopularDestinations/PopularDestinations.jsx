import React from "react";
import DestinationBox from "./PopularDestinationBox/PopularDestinationBox";
import img from "../../Assets/about-img-2.jpg";
import BackgroundImg from "../../Assets/pngimg.com - world_map_PNG31 (1).png";
import { Background, Parallax } from "react-parallax";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const PopularDestinations = () => {
  var settings = {
    dots: false,
    arrows: false,
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
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 924,
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
    <div
      id="packages"
      className="flex flex-col w-[100%] h-[100%]  m-auto pb-20 pt-6"
    >
      <Parallax strength={400} className="w-[100%] h-[100%] relative pb-7">
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
          <DestinationBox
            img={img}
            days="15 Days"
            name="Half Board"
            price="$ 50"
            btnText="VIEW TRIPS"
            userCount="12+"
          />

          <DestinationBox
            img={img}
            days="15 Days"
            name="Half Board"
            price="$ 50"
            btnText="VIEW TRIPS"
            userCount="12+"
          />

          <DestinationBox
            img={img}
            days="15 Days"
            name="Half Board"
            price="$ 50"
            btnText="VIEW TRIPS"
            userCount="12+"
          />

          <DestinationBox
            img={img}
            days="15 Days"
            name="Half Board"
            price="$ 50"
            btnText="VIEW TRIPS"
            userCount="12+"
          />

          <DestinationBox
            img={img}
            days="15 Days"
            name="Half Board"
            price="$ 50"
            btnText="VIEW TRIPS"
            userCount="12+"
          />
        </div>

        <div className="py-1 px-2 pt-14 text-center">
          <p className="text-gray-700 text-[19px] my-1 md:w-[830px] mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            sint nam aliquam adipisci ipsum harum id maiores nostrum at
            architecto. Lorem ipsum dolor sit amet.
          </p>
          <button>View All Toures</button>
        </div>
      </Parallax>
    </div>
  );
};

export default PopularDestinations;
