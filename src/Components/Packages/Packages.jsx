import React from "react";
import img1 from "../../Assets/package1.jpg";
import img2 from "../../Assets/package2.jpg";
import img3 from "../../Assets/package3.jpg";
import img4 from "../../Assets/package4.jpg";
import img5 from "../../Assets/package5.jpg";

import PackagesBox from "./PackagesBox/PackagesBox";

const Packages = () => {
  return (
    <div className="flex flex-col max-w-[1240px] h-[100%] m-auto w-ful p-3 bg-gray-100 pb-8">
      <div className="py-10 px-2 pb-14">
        <p className="text-gray-700 text-[24px] my-1">Special Offers</p>
        <h1 className="text-3xl md:text-4xl">
          <span className="font-bold">Top </span>
          Tour Packages
        </h1>
      </div>
      <div className=" w-[100%]  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        <PackagesBox
          img={img1}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackagesBox
          img={img2}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackagesBox
          img={img3}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
        <PackagesBox
          img={img4}
          name={"Lion, Singapore"}
          price={"$200"}
          city={"San Francisco, CA"}
        />
      </div>
    </div>
  );
};

export default Packages;
