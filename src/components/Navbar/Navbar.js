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
      <header className="w-full md:flex md:justify-between md:items-center md:py-5 md:px-10 bg-white md:shadow-md ">
        <div className="flex items-center gap-5 invisible lg:visible  ">
          <img src={logo} alt="" className="logo " />
        </div>
        <div className="flex items-center gap-5 invisible lg:visible ">
          <nav className="flex items-center text-base font-medium">
            <Link className="mr-5 ">Blog</Link>
            <Link className="mr-5 ">Career</Link>
            <Link className="mr-1">My Account</Link>
            <MdOutlineKeyboardArrowDown />
          </nav>
          <FaShoppingCart />
          <img src={download} alt="" className="app" />
        </div>
        {/* mobile */}
        <div className="flex items-center w-full lg:hidden fixed top-0 py-5 px-5 container mx-auto shadow-md ">
          <FiMapPin />
          <h5 className="text-[12px]  text-[#415859]  ">
            1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301
          </h5>
          <MdOutlineKeyboardArrowDown />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
