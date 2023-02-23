import React from "react";
import model from "../../img/Home/why-standing-let-us-dance-good-looking-feminine-trendy-woman-with-dark-skin-curly-hair-stylish-yellow-overalls-moving-rhythm-music-holding-smartphone-listening-songs-earphones 1.png";
import thirty from "../../img/30.png";
import Affordable from "../../img/affordable.png";
import ontime from "../../img/ontime.png";
import verified from "../../img/verified.png";
import aPlus from "../../img/a+.png";
import helmet from "../../img/why-helmet.png";
import "./WhyChose.css";

const Whychose = () => {
  return (
    <div>
      <section className="whyChoose mt-28 mb-20 container mx-auto hidden md:block ">
        <div className="flex justify-evenly items-center ">
          <div>
            <img src={model} alt="" />
          </div>
          <div className="bg-white wcards p-14">
            <h2>Why People Choose Us</h2>
            <ul className="list-disc pt-7 pl-14">
              <li>Affordable Rate</li>
              <li>Ontime Delivery</li>
              <li>Verified Service</li>
              <li>Professional Excellent Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* mobile section */}

      <section className="mt-20 mb-16 container mx-auto md:hidden ">
        <div>
          <h3 className="text-lg font-bold text-[#E8625D] pl-6 pb-6">
            Why Choose Us?
          </h3>
          <div className="grid grid-cols-2 justify-items-center">
            <div>
              <div className="flex items-center gap-2 pb-2">
                <img src={thirty} alt="" />
                <p className="text-[10px]">30 days service guarantee</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <img src={Affordable} alt="" />
                <p className="text-[10px]">Affordable Rates</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <img src={ontime} alt="" />
                <p className="text-[10px]">On Time Service</p>
              </div>
              <div className="flex items-center gap-2 pb-2">
                <img src={verified} alt="" />
                <p className="text-[10px]">Verified Professionals</p>
              </div>
              <div className="flex items-center gap-2">
                <img src={aPlus} alt="" />
                <p className="text-[10px]">Excellent Service</p>
              </div>
            </div>
            <div className="helmet">
              <img src={helmet} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whychose;
