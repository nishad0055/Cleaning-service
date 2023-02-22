import React from "react";
import { Link } from "react-router-dom";
import google from "../../img/google.png";
import "./Footer.css";

//social-icons
import {
  FiInstagram,
  FiTwitter,
  FiLinkedin,
  FiFacebook,
  FiYoutube,
} from "react-icons/fi";

const Footer = () => {
  return (
    <div>
      <section className="footer py-20 px-20">
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <h6 className="">RELATED SERVICES</h6>
          </div>
          <div className="flex flex-wrap gap-1 col-span-10">
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-2">
            <h6 className="">RELATED SERVICES</h6>
          </div>
          <div className="flex flex-wrap gap-1 col-span-10">
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
          </div>
        </div>
        <nav className="flex justify-evenly">
          <Link>About us</Link>
          <Link>Blog</Link>
          <Link>Near me</Link>
          <Link>Career</Link>
          <Link>Terms & Condition</Link>
          <Link>Privacy Policy</Link>
          <Link>Other Gift Cards</Link>
          <Link>Contact us</Link>
        </nav>

        <div className="flex  items-center  pl-[18rem] gap-10 ">
          <div>
            <h6>Contact us</h6>
            <p> Phone: +9187644778 </p>
            <p>Email: support@Oyebusy.com</p>
          </div>
          <div>
            <h6>Download OyeBusy App</h6>
            <img className="w-[160px] h-[49px]" src={google} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <FiInstagram />
          <FiTwitter />
          <FiLinkedin />
          <FiFacebook />
          <FiYoutube />
        </div>
        <div className="text-center">
          <p>© 2021 OyeBusy Technologies Pvt. Ltd.</p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
