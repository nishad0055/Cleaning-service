import React from "react";
import washing from "../../img/HopeAppliences/washing.png";
import refrigerator from "../../img/HopeAppliences/refregetor.png";
import microwave from "../../img/HopeAppliences/mircorwabe.png";
import ro from "../../img/HopeAppliences/roserver.png";
import led from "../../img/HopeAppliences/led-repair.png";
import acservice from "../../img/HopeAppliences/ac.png";
import "./HomeAppliences.css";

const HomeAppliences = () => {
  return (
    <div>
      <section className="container mx-auto">
        <div className="trend text-center  mb-6 md:mb-20">
          <h2>Home Appliances Services</h2>
          <p>Premium Home Services</p>
        </div>
        <div className="grid  grid-cols-3 md:grid-cols-6 mt-16 gap-y-12 md:gap-y-0 justify-items-center">
          <div className="home-card text-center">
            <img src={washing} className="" alt="" />
            <p>Washing Machine Repair</p>
          </div>
          <div className="home-card text-center">
            <img src={refrigerator} className="" alt="" />
            <p>Refrigerator Repair / Service</p>
          </div>
          <div className="home-card text-center">
            <img src={microwave} className="" alt="" />
            <p>Microwave Repair</p>
          </div>
          <div className="home-card text-center">
            <img src={ro} className="" alt="" />
            <p>RO Service</p>
          </div>
          <div className="home-card text-center">
            <img src={led} className="" alt="" />
            <p>LED TV Repair</p>
          </div>
          <div className="home-card text-center">
            <img src={acservice} className="" alt="" />
            <p>AC Services</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeAppliences;
