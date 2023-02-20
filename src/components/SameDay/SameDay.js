import React from "react";
import carpenter from "../../img/service/carpenter.png";
import plumber from "../../img/service/plumber.png";
import electrician from "../../img/service/electrician.png";
import painter from "../../img/service/painting.png";
import pest from "../../img/service/pest-control.png";

const SameDay = () => {
  return (
    <div>
      <section>
        <div className="trend text-center">
          <h2>Trending Services</h2>
          <p>Premium Home Services</p>
        </div>
        <div className="grid grid-cols-5 mt-16 justify-items-center mx-10">
          <div className="card text-center">
            <img src={carpenter} className="" alt="" />
            <p>Air-condtioner service</p>
          </div>
          <div className="card text-center">
            <img src={plumber} className="" alt="" />
            <p>AC Installation</p>
          </div>
          <div className="card text-center">
            <img src={electrician} className="" alt="" />
            <p>Sofa Cleaning Service</p>
          </div>
          <div className="card text-center">
            <img src={painter} className="" alt="" />
            <p>Home Deep Cleaning Service</p>
          </div>
          <div className="card text-center">
            <img src={pest} className="" alt="" />
            <p>Air-Conditioner Services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SameDay;
