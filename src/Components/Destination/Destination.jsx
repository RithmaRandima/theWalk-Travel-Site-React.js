import React from "react";
import img from "../../Assets/Active1.jpg";
import DestinationBox from "./DestinationBox/DestinationBox";

function Destination() {
  return (
    <div className="flex flex-col max-w-[1240px] h-full m-auto w-ful p-3 md:mb-[200px] sm:mb-[700px] mb-[1400px]">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1">Featured</p>
        <h1 className="text-3xl md:text-4xl">
          <span className="font-bold">Featured </span>
          Destination
        </h1>
      </div>
      <div className=" w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-[200px] gap-3">
        <DestinationBox
          img={img}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />

        <DestinationBox
          img={img}
          name={"Lion, Singapore"}
          count={"3 Listing"}
        />
      </div>
    </div>
  );
}

export default Destination;
