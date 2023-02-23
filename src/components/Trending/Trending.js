import React from "react";
import "./Trending.css";
import airconditiona from "../../img/service/ac.png";
import ac from "../../img/service/Rectangle 20.png";
import sofa from "../../img/service/sof.png";
import home from "../../img/service/home13.png";

const Trending = () => {
  return (
    <div>
      <section className="mt-20 mb-10 container mx-auto">
        <div className="trend text-center">
          <h2>Trending Services</h2>
          <p>Premium Home Services</p>
        </div>
        {/* service card */}
        <div className="grid grid-cols-2 md:grid-cols-5 mt-16 gap-y-14 md:gap-0 justify-items-center md:mx-10">
          <div className="card text-center">
            <img src={airconditiona} className="" alt="" />
            <p>Air-condtioner service</p>
          </div>
          <div className="card text-center">
            <img src={ac} className="" alt="" />
            <p>AC Installation</p>
          </div>
          <div className="card text-center">
            <img src={sofa} className="" alt="" />
            <p>Sofa Cleaning Service</p>
          </div>
          <div className="card text-center">
            <img src={home} className="" alt="" />
            <p>Home Deep Cleaning Service</p>
          </div>
          <div className="card text-center hidden md:block">
            <img src={airconditiona} className="" alt="" />
            <p>Air-Conditioner Services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trending;
