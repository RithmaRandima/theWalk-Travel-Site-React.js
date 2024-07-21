import React from "react";
import { GiCommercialAirplane, GiBattleship } from "react-icons/gi";
import activity_img1 from "../../Assets/activity-1.jpg";
import activity_img2 from "../../Assets/activity-2.jpg";
import activity_img3 from "../../Assets/activity-3.jpg";

import { FaUsersCog } from "react-icons/fa";
import { BsHearts } from "react-icons/bs";
import { LiaUserSecretSolid } from "react-icons/lia";
import { GiTakeMyMoney } from "react-icons/gi";
import ActivityBox from "../ActivityBox/ActivityBox";
import { motion } from "framer-motion";

function Activites() {
  return (
    <div className="py-10 w-[100%] mt-[-20px]  md:mt-[-120px]">
      <div className="max-w-[1000px] sm:text-center h-[100%] m-auto w-full grid grid-cols-1 md:grid-cols-3 gap-5 ">
        <ActivityBox img={activity_img1} text="Write Down Your Experience" />
        <ActivityBox img={activity_img2} text="Write Down Your Experience" />
        <ActivityBox img={activity_img3} text="Write Down Your Experience" />
      </div>

      <div className="h-[100%] w-[100%] m-auto hidden  md:grid grid-cols-1 gap-3 z-50 md:grid-cols-6 md: relative my-[50px] ">
        <div className="about-box h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <GiTakeMyMoney className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">
              Best Price Guarantee
            </h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden  shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <BsHearts className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">Travelers Love Us</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <LiaUserSecretSolid className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">Best Travel Agent</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <FaUsersCog className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">
              Our Dedicated Support
            </h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <GiCommercialAirplane className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">Best Air Tickets</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>

        <div className="about-box  h-[160px] w-[160px] mx-auto flex rounded-full items-center justify-center relative overflow-hidden  shadow-xl hover:bg-red-500/70 hover:translate-y-[-20px] duration-300">
          <div className="about-content  text-center p-5">
            <GiBattleship className="my-1 mx-auto" size={30} />
            <h1 className="text-[14px] font-bold my-3 ">Best Cruises</h1>
            <p className="w-[140px] text-[11px]">A small river named</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Activites;
