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
      <section className="assured container mx-auto">
        <div className="text-center">
          <h2>Assured Peace of Mind</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {minds.map((mind) => (
            <AssuredCard key={mind.id} mind={mind}></AssuredCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Assured;
