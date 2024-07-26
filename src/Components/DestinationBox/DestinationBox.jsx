import React from "react";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { FaStar, FaStarHalfAlt, FaRegMap } from "react-icons/fa";
import { VscDebugRestart } from "react-icons/vsc";

function DestinationBox(props) {
  return (
    <div className=" w-[100%] h-[100%] shadow-2xl shadow-black/20  hover:translate-y-[-7px] duration-300 bg-white/90">
      <img
        src={props.img}
        className="h-[280px]  w-[100%]  object-cover"
        alt={props.name}
      />
      <div className="px-4 pt-1">
        <div className="flex justify-between items-center py-2">
          <h1 className="text-[18px] font-bold">{props.name}</h1>
          <p className=" text-[#ff0000] font-semibold">{props.price}</p>
        </div>

        <p className="flex items-center text-[13px] text-gray-500 ">
          <CiFaceSmile className="mr-3 text-[17px]" /> 9.3 Superb
        </p>

        <p className="text-gray-500 w-[98%] my-3 font-normal text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit natus
        </p>

        <hr />

        <div className="flex items-center justify-between my-5">
          <div className="flex items-center">
            <section className="flex flex-col gap-1 text-[12px] mr-7">
              <p className="flex items-center text-[12px] text-gray-500">
                <VscDebugRestart size={17} className="mr-1 text-[#00c5b7]" />
                {props.days}
              </p>
            </section>

            <section className="flex flex-col gap-1 text-[12px]">
              <p className="flex items-center text-[12px] text-gray-500">
                <CiUser size={17} className="mr-1 text-[#00c5b7]" />
                {props.userCount}
              </p>
            </section>
          </div>
          <p className="bg-black w-[60px] text-center text-white text-[12px] font-semibold">
            Discover
          </p>
        </div>
      </div>
    </div>
  );
}

export default DestinationBox;
