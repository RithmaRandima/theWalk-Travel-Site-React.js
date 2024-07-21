import React, { useState } from "react";
import {
  FaBars,
  FaFacebook,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";

const NavbarBottom = () => {
  const [nav, setNav] = useState(false);
  const handelNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/" className="text-[18px] font-bold">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="text-[18px] font-bold">
            About
          </a>
        </li>
        <li>
          <a href="#gallery" className="text-[18px] font-bold">
            Gallery
          </a>
        </li>
        <li>
          <a href="#deals" className="text-[18px] font-bold">
            Deals
          </a>
        </li>
        <li>
          <a href="#contact" className="text-[18px] font-bold">
            Contact
          </a>
        </li>
      </ul>
      <div className="flex justify-between">
        <FaFacebook className="mx-4" size={25} />
        <FaTwitter className="mx-4" size={25} />
        <FaGooglePlusG className="mx-4" size={25} />
        <FaInstagram className="mx-4" size={25} />
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
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#about">About</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarBottom;
