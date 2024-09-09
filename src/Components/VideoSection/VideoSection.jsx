import React from "react";
import home_video from "../../Assets/VideoSection.mp4";
import { FaPlayCircle } from "react-icons/fa";
import { ReactTyped } from "react-typed";
// import { ReactTyped } from "react-typed";

const VideoSection = () => {
  return (
    <div className="h-[60vh] md:h-[80vh] w-[100%] mx-auto bg-black my-6 relative">
      <video
        autoPlay
        loop
        muted
        id="video"
        className="w-[100%] h-[60vh] md:h-[80vh] object-cover"
      >
        <source src={home_video} type="video/mp4" />
      </video>
      <div className="absolute w-[100%] h-[100%] bg-gradient-to-t from-black/60 to-black/10 top-0 left-0 font-sans flex flex-col justify-center items-center text-white">
        <h1 className=" text-[53px] md:text-[80px]">
          Travel
          <span className="text-[#00ffee] ml-4 font-bold">
            <ReactTyped strings={["Itineraries"]} typeSpeed={490} loop />
          </span>
        </h1>
        <p className=" w-[90%] font-[100] leading-6 md:w-[640px] md:text-[18px] text-center my-5">
          Looking for your dream vacation destination but don't know where to
          start? With the help of experienced and knowledgeable travel agents,
          you can plan the trip of a lifetime with ease.
        </p>

        <div className="mt-6">
          <FaPlayCircle className="text-[#00ffee] text-[60px] cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
