import React from "react";
import frame from "../../img/Frame.png";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const reviewsDate = [
    {
      id: 1,
      desc: "Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. ",
      name: "Ritu Kumar",
      img: frame,
    },
    {
      id: 2,
      desc: "Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. ",
      name: "Ritu Kumar",
      img: frame,
    },
    {
      id: 3,
      desc: "Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. ",
      name: "Ritu Kumar",
      img: frame,
    },
    {
      id: 4,
      desc: "Speaker/View Details Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla cursus eleifend augue volutpat hendrerit. ",
      name: "Ritu Kumar",
      img: frame,
    },
  ];

  return (
    <div>
      <section className="container-mx-auto">
        <div className="grid grid-cols-4 gap-10">
          {reviewsDate.map((review) => (
            <TestimonialCard key={review.id} review={review}></TestimonialCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
