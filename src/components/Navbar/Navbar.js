import React from "react";
import logo from "../../img/logo.png";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import "./navbar.css";
import { Link } from "react-router-dom";
import download from "../../img/downloadapp.png";
import arrow from "../../img/arrow.png";

const Navbar = () => {
  return (
    <div className="">
      <div className="hidden lg:block">
        <header className="w-full md:flex md:justify-between md:items-center md:py-5 md:px-10 bg-white md:shadow-md ">
          <div className="flex items-center gap-5">
            <img src={logo} alt="" className="logo " />
            <div className="flex items-center">
              <FiMapPin />
              <h5 className="text-[12px]  text-[#415859]  ">
                1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh
                201301
              </h5>
              <MdOutlineKeyboardArrowDown />
            </div>
          </div>
          <div className="flex items-center gap-5">
            <nav className="flex items-center text-base font-medium">
              <Link className="mr-5 ">Blog</Link>
              <Link className="mr-5 ">Career</Link>
              <Link className="mr-1">My Account</Link>
              <MdOutlineKeyboardArrowDown />
            </nav>
            <FaShoppingCart />
            <img src={download} alt="" className="app" />
          </div>
        </header>
      </div>

      {/* mobile */}

      <section className="container mx-auto md:hidden">
        <div className="flex items-center w-full   py-5 px-5  shadow-sm">
          <FiMapPin />
          <h5 className="text-[12px]  text-[#415859] mr-[0.8px] ">
            1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
          </h5>
          <MdOutlineKeyboardArrowDown />
        </div>
        <div className="relative text-gray-600 focus-within:text-gray-400 mt-4">
          <span className="absolute inset-y-0 left-0 flex items-center pl-6">
            <button
              type="submit"
              className="p-1 focus:outline-none focus:shadow-outline"
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </span>
          <input
            type="search"
            name="q"
            ClassName=" block mx-auto w-[90%] py-2 text-sm text-white bg-white border border-black rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
          />
        </div>
      </section>
    </div>
  );
};

export default Navbar;
