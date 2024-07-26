import React from "react";
import background from "../../Assets/Hero-Background.jpg";
import { Background, Parallax } from "react-parallax";
import Booking from "../BookingSection/Booking";

function Hero() {
  return (
    <div className="w-full h-[100vh] relative">
      <Parallax strength={400} className="w-[100%] h-[100vh] relative">
        <Background className="custom-bg w-[100vw] h-[100vh] bg-black">
          <img
            src={background}
            alt="fill murray"
            className="w-[100%] h-[100%] object-cover object-center"
          />
        </Background>

        <div className="bg-gradient-to-t from-[#00ffee]/10 to-black/10 w-full h-full absolute top-0"></div>
        <div className="max-w-[1140px] m-auto ">
          <div className="absolute top-[100px] left-[50%] translate-x-[-50%] w-full  max-w-[700px] h-fit flex flex-col text-white  p-4 text-center">
            <h1 className="font-extrabold md:text-[80px] uppercase">
              <span className="mr-[15px] text-[#00ffee]">LOVE</span>& Travel
            </h1>
            <p className="text-[17px] leading-8 tracking-[3px]">
              TAKE ADVANTAGE OF THIS AMAZING EXCLUSIVE OFFER DON'T MISS THIS
              OPPORTUNITY FOR YOUR BUSINESS
            </p>
            <div className="md:w-[280px] text-center my-[20px] bg-[#03dccd]  uppercase py-[9px] mx-auto rounded-[50px]">
              Book Now AT $50.00
            </div>
          </div>
        </div>
        <div className="none md:block absolute z-10 w-[100%] h-[92vh]">
          <Booking />
        </div>
      </Parallax>
    </div>
  );
}

export default Hero;
