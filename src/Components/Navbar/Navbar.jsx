import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

import "./Navbar.css";

const Navbar = () => {
  // Navbar Active Status
  const [activeStatus, setActiveStatus] = useState("home");

  //  Mobile Menu Status
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };

  // Navbar Color Changer
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= "400") {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div
      className={
        color
          ? "header-bg w-full fixed min-h-[50px] flex justify-between items-center z-50 text-white px-6 py-1"
          : "w-full fixed min-h-[50px] flex justify-between items-center z-50 text-white px-6 py-1"
      }
    >
      <ul className="hidden sm:flex px-4">
        <li onClick={() => setActiveStatus("home")}>
          <a href="/" className="text-[18px] font-bold">
            Home
            {activeStatus === "home" ? (
              <hr className="border-0 h-[2px] rounded-3xl w-[100%] bg-[#00ffee]" />
            ) : (
              <></>
            )}
          </a>
        </li>
        <li onClick={() => setActiveStatus("about")}>
          <a href="#about" className="text-[18px] font-bold">
            About
            {activeStatus === "about" ? (
              <hr className="border-0 h-[2px] rounded-3xl w-[100%] bg-[#00ffee]" />
            ) : (
              <></>
            )}
          </a>
        </li>
        <li onClick={() => setActiveStatus("popular")}>
          <a href="#popular" className="text-[18px] font-bold">
            Popular
            {activeStatus === "popular" ? (
              <hr className="border-0 h-[2px] rounded-3xl w-[100%] bg-[#00ffee]" />
            ) : (
              <></>
            )}
          </a>
        </li>
        <li onClick={() => setActiveStatus("destination")}>
          <a href="#destination" className="text-[18px] font-bold">
            Destination
            {activeStatus === "destination" ? (
              <hr className="border-0 h-[2px] rounded-3xl w-[100%] bg-[#00ffee]" />
            ) : (
              <></>
            )}
          </a>
        </li>
        <li onClick={() => setActiveStatus("blog")}>
          <a href="#blog" className="text-[18px] font-bold">
            Blog
            {activeStatus === "blog" ? (
              <hr className="border-0 h-[2px] rounded-3xl w-[100%] bg-[#00ffee]" />
            ) : (
              <></>
            )}
          </a>
        </li>
      </ul>

      <div className="flex items-center font-sans relative">
        <h1 className="text-[20px] font-bold text-[#000] pl-2 bg-[#00ffee] ">
          the
          <span className="font-bold text-[#00ffee] bg-black p-1 pr-2 text-[20px] ">
            WALK
          </span>
        </h1>
      </div>

      <div className="hidden md:flex justify-between items-center">
        <FaFacebook
          className="mx-4 hover:text-[#00ffee] duration-200 hover:scale-125"
          size={25}
        />
        <FaTwitter
          className="mx-4 hover:text-[#00ffee] duration-200 hover:scale-125"
          size={25}
        />
        <FaGooglePlusG
          className="mx-4 hover:text-[#00ffee] duration-200 hover:scale-125"
          size={25}
        />
        <FaInstagram
          className="mx-4 hover:text-[#00ffee] duration-200 hover:scale-125"
          size={25}
        />
        <button className="uppercase text-[10px] bg-[#000] px-4 py-2 rounded-[50px] hover:bg-[#00ffee] hover:text-black">
          Contact Us
        </button>
      </div>
      {/* Hamburger Icon */}
      <div
        onClick={() => {
          handelNav();
        }}
        className="sm:hidden z-10"
      >
        {nav ? (
          <FaTimes size={20} className="mr-4 cursor-pointer" />
        ) : (
          <FaBars size={20} className="mr-4 cursor-pointer" />
        )}
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handelNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-8 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8 hover:text-[#00ffee]">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8  hover:text-[#00ffee]">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8  hover:text-[#00ffee]">
            <a href="#popular">Popular</a>
          </li>
          <li className="text-2xl py-8  hover:text-[#00ffee]">
            <a href="#destination">Destinations</a>
          </li>
          <li className="text-2xl py-8  hover:text-[#00ffee]">
            <a href="#blog">Blog</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
