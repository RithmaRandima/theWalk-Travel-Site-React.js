import React from "react";

function DestinationBox(props) {
  return (
    <div className=" w-[100%] h-[370px] shadow-2xl shadow-black/20  hover:translate-y-[-7px] duration-300">
      <img
        src={props.img}
        className="h-[270px]  w-[100%]  object-cover"
        alt={props.name}
      />
      <h1 className="pl-4 pt-4 font-bold text-xl">{props.name}</h1>
      <p className="pl-4 pt-3 text-gray-800">{props.count}</p>
    </div>
  );
}

export default DestinationBox;
