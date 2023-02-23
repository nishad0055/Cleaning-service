import React from "react";
import box from "../../img/Rectangle.png";

const MostUsed = () => {
  const services = [
    {
      id: 1,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
      off: "UPTO 40% OFF",
    },
    {
      id: 2,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
      off: "UPTO 40% OFF",
    },
    {
      id: 3,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
      off: "UPTO 40% OFF",
    },
    {
      id: 3,
      img: box,
      title: "Professional Deep Cleaning",
      desc: "For spring  clean for  end of  lease clean",
      off: "UPTO 40% OFF",
    },
  ];
  return (
    <div>
      <section className="my-10 md:my-24">
        <div className="trend text-center mb-[18px] md:mb-20">
          <h2>Most Used Services</h2>
          <p>Premium Home Services</p>
        </div>
        <div className="cards grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {services.map((service) => (
            <div key={service.id}>
              <img src={service.img} alt="" />
              <h2>{service.title}</h2>
              <p className=" hidden md:block ">{service.desc}</p>
              <p className="md:hidden"> {service.off} </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MostUsed;
