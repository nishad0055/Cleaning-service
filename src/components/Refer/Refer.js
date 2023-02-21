import React from "react";
import google from "../../img/google.png";
import apple from "../../img/apple.png";
import phone1 from "../../img/appPhone.png";
import phone2 from "../../img/app_phon.png";
import arrow from "../../img/arrowb.png";
import "./Refer.css";

const Refer = () => {
  return (
    <div>
      <section className="refer mt-24 mb-20 flex justify-evenly items-center overflow-hidden ">
        <div>
          <h2>Refer and or get link </h2>
          <p className="pb-5">Invite your friends</p>
          <input type="text" placeholder="Enter a 10 digit number" />
          <button className="btn">
            {" "}
            <img src={arrow} alt="" className="w-[49px] h-[49px]" />{" "}
          </button>
          <div className="flex app pt-9">
            <img src={google} alt="" />
            <img src={apple} alt="" />
          </div>
        </div>
        <div className="mobile flex  gap-11 ">
          <img src={phone1} alt="" className="phone1" />
          <img src={phone2} alt="" className="phone2" />
        </div>
      </section>
    </div>
  );
};

export default Refer;
