import React from "react";
import "./Testimonial.css";
const TestimonialCard = ({ review }) => {
  const { desc, name, img } = review;
  return (
    <div className="w-[300px] h-[191px]  rcard p-[30px] ">
      <img className="w-[17px] h-[13px]" src={img} alt="" />
      <p className="text-[14px] pb-10 ">{desc}</p>
      <h5 className="text-[14px] text-[#025B5D]  font-medium ">{name}</h5>
    </div>
  );
};

export default TestimonialCard;
