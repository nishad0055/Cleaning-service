import React from "react";
import box from "../../img/Rectangle.png";

const MostUsed = () => {
  const services = [
    {
      id: 1,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
    },
    {
      id: 2,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
    },
    {
      id: 3,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
    },
    {
      id: 3,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
    },
  ];
  return (
    <div>
      <section className="my-24">
        <div className="trend text-center mb-20">
          <h2>Professional Cleaning Services</h2>
          <p>Premium Home Services</p>
        </div>
        <div className="cards grid grid-cols-4 gap-10 text-center">
          {services.map((service) => (
            <div key={service.id}>
              <img src={service.img} alt="" />
              <h2>{service.title}</h2>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MostUsed;
