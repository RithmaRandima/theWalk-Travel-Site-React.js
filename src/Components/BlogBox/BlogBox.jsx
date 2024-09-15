import React from "react";
import { FaArrowRight } from "react-icons/fa";

const BlogBox = (props) => {
  return (
    <div className="blog-box w-[90%]  md:w-[100%] mx-auto flex flex-col md:flex-row  justify-between items-center cursor-pointer">
      {/* image section */}
      <div className="blog-box-img-container w-[100%] md:w-[35%]  overflow-hidden h-[300px] md:h-[150px]">
        <img
          src={props.img}
          alt=""
          className="w-[100%] object-cover h-[100%]"
        />
      </div>
      {/* text section */}
      <div className="w-[100%] md:w-[60%] text-left font-sans">
        <div className="md:bg-black bg-[#00ffee] w-fit text-white  my-4 md:my-2  px-6 py-1 md-5 md:px-3 text-[16px] md:text-[10px] rounded-lg md:rounded-md hover:scale-75 duration-500">
          {props.date}
        </div>

        <h1 className="my-3 font-extrabold text-[22px] md:text-[19px]">
          {props.title}
        </h1>
        <p className="font-[200] text-[18px] md:text-[15px] mb-3">
          {props.description}
        </p>
        <button className="flex items-center py-2  md:text-[10px] mb-3 bg-[#000] px-3 rounded-[50px] hover:scale-110 duration-500 mt-3 text-[#00ffee]">
          Read More <FaArrowRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default BlogBox;
