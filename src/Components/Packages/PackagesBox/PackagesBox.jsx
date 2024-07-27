import React from "react";
import "./PackageBox.css";
import { CiFaceSmile, CiUser } from "react-icons/ci";
import { VscDebugRestart } from "react-icons/vsc";

function PackagesBox(props) {
  return (
    <div className="package-box w-[95%] h-[350px] shadow-md shadow-black/20 relative m-4 mx-auto overflow-hidden">
      <img
        src={props.img}
        className="h-[350px] w-[100%]  object-cover"
        alt={props.name}
      />
      <div className="package-box-overlay px-4 pt-7 absolute w-[100%]  bottom-0  bg-gradient-to-t from-black to-transparent flex flex-col justify-between h-fit">
        <div>
          <p className="flex items-center text-[16px] text-white ">
            <CiFaceSmile className="mr-3 text-[22px]" /> 9.3 Superb
          </p>
          <div className="flex justify-between items-center py-2 relative">
            <h1 className="text-[20px] font-bold text-white">{props.name}</h1>
            <p className="package-price text-[#00ffee] font-extrabold">
              {props.price}
            </p>
          </div>
        </div>

        <div className="package-box-overlay-bottom-section hidden">
          <p className="text-white w-[98%] my-3 font-normal text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            natus adipisicing elit. Impedit natus Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Voluptatibus, saepe?
          </p>

          <div className="flex items-center justify-between my-5 mt-20">
            <div className="flex items-center justify-between w-[100%] ">
              <div className="text-[12px] flex text-white">
                <VscDebugRestart
                  size={27}
                  className="mr-1 p-1 text-[#00ffee]"
                />
                <CiUser size={27} className="mr-1 p-1 text-[#00ffee]" />
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

export default PackagesBox;
