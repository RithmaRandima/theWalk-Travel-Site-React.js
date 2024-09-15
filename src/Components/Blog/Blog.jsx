import React from "react";
import BlogBox from "../BlogBox/BlogBox";
import "../BlogBox/BlogBox.css";
import img1 from "../../Assets/blog-big.jpeg";
import { blogData } from "../../Data/BlogData";
import { FaArrowRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Blog = () => {
  var settings = {
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1600,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
  };
  return (
    <div id="blog" className="h-[100%] w-[100%] py-3">
      <div className="flex flex-col items-center justify-center h-[30vh] md:h-[50vh] px-7 w-[100%]">
        <p className="text-[#00ffee] text-[17px] md:text-[22px] ">
          Roaming Tales
        </p>
        <h1 className="font-bold text-[32px] md:text-[37px] mb-2">
          Travel Blog
        </h1>
        <p className="leading-7 text-[16px] md:text-[17px] text-gray-500 font-[400] mb-3 md:w-[70%] text-center">
          We share our experiences, tips and travel stories to inspire and guide
          our readers in their own wanderlust adventures. From hidden gems to
          popular destinations, we showcase the beauty and diversity of the
          world, and promote responsible and sustainable travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2  w-full h-[100%]">
        {/* blog box Section*/}
        <div className="w-full h-[100%] p-2 py-6 ">
          {/* desktop */}
          {/* BlogBox Container */}
          <div className="hidden md:flex flex-col justify-between gap-2 md:gap-5">
            {blogData.map((data, i) => {
              return (
                <BlogBox
                  key={i}
                  img={data.img}
                  date={data.date}
                  title={data.title}
                  description={data.description}
                />
              );
            })}
          </div>
          {/* mobile */}
          <div className="block md:hidden w-[100%] mx-auto h-[100%]">
            <Slider {...settings}>
              {blogData.map((data, i) => {
                return (
                  <BlogBox
                    key={i}
                    img={data.img}
                    date={data.date}
                    title={data.title}
                    description={data.description}
                  />
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="hidden md:block blog-box w-full h-[100%] p-2 py-6 font-sans">
          <div className="blog-box-img-container w-[90%] mx-auto text-left">
            <div className="w-[100%]  overflow-hidden  h-[300px]">
              <img
                src={img1}
                alt=""
                className="w-[100%] object-cover h-[100%]"
              />
            </div>
            <div className="bg--[#00ffee] md:bg-black w-fit text-white my-4 p-1 px-5 rounded-lg hover:scale-75 duration-500">
              April 7, 2024
            </div>
            <h1 className="my-3 font-extrabold text-[22px]">
              Plan the Perfect Vacation
            </h1>
            <p className="font-[200] text-[18px] my-4">
              Planning a vacation can be overwhelming, but this post offers a
              step-by-step guide to help readers create a comprehensive travel
              itinerary. From choosing a destination to booking accommodations
              and activities, readers will learn how to plan a stress-free and
              enjoyable trip.
            </p>
            <button className="hover:scale-110 duration-500 flex items-center  bg-[#00ffee] px-4 py-1 rounded-[50px] text-[12px] ">
              Read More <FaArrowRight size={12} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
