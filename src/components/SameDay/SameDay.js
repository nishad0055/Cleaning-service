import React from "react";
import carpenter from "../../img/service/carpenter.png";
import plumber from "../../img/service/plumber.png";
import electrician from "../../img/service/electrician.png";
import painter from "../../img/service/painting.png";
import pest from "../../img/service/pest-control.png";
import safe from "../../img/safe.png";
import "./SameDay.css";

const SameDay = () => {
  return (
    <div>
      <section className="mb-24">
        <div className="trend text-center  pb-5 md:pb-20">
          <h2>Same Day Service</h2>
          <p>Premium Home Services</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-5 gap-y-16 md:gap-y-0 mt-16 justify-items-center md:mx-10">
          <div className="ascard text-center">
            <img src={carpenter} className="" alt="" />
            <p>Carpentery Services</p>
          </div>
          <div className="scard text-center">
            <img src={plumber} className="" alt="" />
            <p>Plumbing Services</p>
          </div>
          <div className="scard text-center">
            <img src={electrician} className="" alt="" />
            <p>Electrical Services</p>
          </div>
          <div className="scard text-center">
            <img src={painter} className="" alt="" />
            <p>Painting Services</p>
          </div>
          <div className="scard text-center">
            <img src={pest} className="" alt="" />
            <p>Pest Control Serviecs</p>
          </div>
          <div className="scard text-center md:hidden">
            <img src={pest} className="" alt="" />
            <p>Pest Control Serviecs</p>
          </div>
        </div>
        <div className="safe">
          <img src={safe} alt="" />
        </div>
      </section>
    </div>
  );
};

export default SameDay;
