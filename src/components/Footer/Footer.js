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
        <div className="grid grid-cols-12 text-white">
          <div className="col-span-2">
            <h6 className="">RELATED SERVICES</h6>
          </div>
          <div className="flex flex-wrap gap-1 col-span-10 list">
            <Link>Electrician</Link>|<Link>Plumber</Link>|<Link>Carpenter</Link>
            |<Link>Packers & Movers</Link>|<Link>Salon For Women </Link>|
            <Link>Salon For Men</Link>|<Link>Electronic Appliences</Link>|
            <Link></Link>|<Link>Electrician</Link>|
            <Link>CCTV Installation & Repair</Link>|
            <Link>Ro- repair & service</Link>|<Link>Electrician</Link>|
            <Link>House Painter</Link>|<Link>Pest Control</Link>|
            <Link>Kitchen cleaning </Link>|<Link>Bathroom Cleaning</Link>|
            <Link>Sofa Cleaning</Link>| <Link>Home Deep Cleaning</Link>|
          </div>
        </div>
        <div className="grid grid-cols-12 pt-10">
          <div className="col-span-2">
            <h6 className="text-white">Top Locations</h6>
          </div>
          <div className="flex flex-wrap gap-1 col-span-10 text-[13px] text-white  font-medium ">
            <Link>Electrician</Link>|<Link>Electrician</Link>|
            <Link>Electrician</Link>|<Link>Electrician</Link>|
          </div>
        </div>
        <nav className="flex justify-evenly text-[15px] font-semibold text-white pt-[60px] ">
          <Link>About us</Link>
          <Link>Blog</Link>
          <Link>Near me</Link>
          <Link>Career</Link>
          <Link>Terms & Condition</Link>
          <Link>Privacy Policy</Link>
          <Link>Other Gift Cards</Link>
          <Link>Contact us</Link>
        </nav>

        <div className="flex  items-center  pl-[18rem] gap-10 pt-6  contact ">
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
        <div className="flex justify-center items-center text-white gap-4 pt-20 ">
          <Link>
            <FiInstagram size={28} />
          </Link>
          <Link>
            <FiTwitter size={28} />
          </Link>
          <Link>
            <FiLinkedin size={28} />
          </Link>
          <Link>
            <FiFacebook size={28} />
          </Link>
          <Link>
            <FiYoutube size={28} />
          </Link>
        </div>
        <div className="text-center">
          <p className="text-[11px] font-semibold text-white pt-5 ">
            © 2021 OyeBusy Technologies Pvt. Ltd.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Footer;
