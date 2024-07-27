import React from "react";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";

function PopularDestinationBox(props) {
  return (
    <div className="w-[95%] h-[340px] shadow-2xl shadow-black/20  hover:translate-y-[-7px] duration-300 m-2 mx-auto relative">
      <img
        src={props.img}
        className="h-[340px]  w-[100%]  object-cover"
        alt={props.name}
      />
      <div className="px-4 pt-7 absolute w-[100%] h-[100%] bg-gradient-to-t from-[#000] to-black/10 top-0  flex flex-col justify-between">
        <div>
          <p className="flex items-center text-[15px] text-white ">
            <CiFaceSmile className="mr-3 text-[20px]" /> 9.3 Superb
          </p>
          <div className="flex justify-between items-center py-2">
            <h1 className="text-[22px] font-bold text-white">{props.name}</h1>
            <p className=" text-[#00ffee] font-extrabold text-[25px]">
              {props.price}
            </p>
          </div>
        </div>

        <div>
          <p className="text-white w-[98%] my-3 font-normal text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            natus adipisicing elit. Impedit natus
          </p>

          <div className="flex items-center justify-between my-5 mt-16">
            <div className="flex items-center justify-between w-[100%] ">
              <div className="text-[12px] flex text-white">
                <VscDebugRestart
                  size={25}
                  className="mr-1 p-1 text-[#00ffee]"
                />
                <CiUser size={25} className="mr-1 p-1 text-[#00ffee]" />
              </div>

              <button className="bg-black w-[60px] text-center text-white text-[12px] font-semibold">
                Discover
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularDestinationBox;
