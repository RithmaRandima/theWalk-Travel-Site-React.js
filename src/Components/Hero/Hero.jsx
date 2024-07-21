import React from "react";
import background from "../../Assets/activity-1.jpg";

function Hero() {
  return (
    <div className="w-full h-[90vh] relative">
      <img
        src={background}
        alt=""
        className="w-full h-full object-cover object-bottom"
      />
      <div className="bg-black/50 w-full h-full absolute top-0"></div>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[20%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h1 className="font-bold text-4xl uppercase">Never stop Exploring</h1>
          <h2 className="text-4xl py-5 italic">
            With <span className="ml-[15px]">.the</span>
            <span className="text-red-500 uppercase font-bold text-[50px]">
              Walk
            </span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ex
            voluptatum nostrum. Magnam vitae, ipsum eligendi adipisci ad id
            inventore ab aut odit earum necessitatibus explicabo dolor placeat
            architecto consequuntur?
          </p>
          <div className="w-[150px] text-center my-[30px] bg-black  uppercase py-3  ">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
