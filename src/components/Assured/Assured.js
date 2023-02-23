import React from "react";
import "./Assured.css";
import high from "../../img/high.png";
import hassle from "../../img/hassle.png";
import total from "../../img/total.png";
import AssuredCard from "./AssuredCard";

const Assured = () => {
  const minds = [
    {
      id: 1,
      tittle: "High Quality Work",
      desc: "Only authorized service experts and genuine spare parts and equipments",
      img: high,
    },
    {
      id: 2,
      tittle: "Hassle Free",
      desc: "Sit back and relax We do all the work",
      img: hassle,
    },
    {
      id: 3,
      tittle: "Totally Cashless",
      desc: "Pay online for Safe & Secure payment.Many benefits and offers available with online payment",
      img: total,
    },
  ];
  return (
    <div>
      <section className="assured   py-16 md:pl-20 ">
        <div className="text-center pb-8 md:pb-14">
          <h2>Assured Peace of Mind</h2>
        </div>
        <div className="md:flex gap-10 container mx-auto ">
          <div className="flex  flex-row items-center assured-card gap-1">
            <div>
              <img id="high" src={high} alt="" className="" />
            </div>
            <div className="">
              <h6>High Quality Work</h6>
              <p>
                Only authorized service experts and genuine spare parts and
                equipments
              </p>
            </div>
          </div>
          <div className="flex flex-row items-center assured-card gap-1">
            <div>
              <img id="hassle" src={hassle} alt="" />
            </div>
            <div className="">
              <h6>Hassle Free</h6>
              <p>Sit back and relax We do all the work</p>
            </div>
          </div>
          <div className="flex flex-row items-center assured-card gap-1 ">
            <div>
              <img src={total} alt="" />
            </div>
            <div className="">
              <h6>Totally Cashless</h6>
              <p>
                Pay online for Safe & Secure payment.Many benefits and offers
                available with online payment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Assured;
