import React from "react";
import model from "../../img/Home/why-standing-let-us-dance-good-looking-feminine-trendy-woman-with-dark-skin-curly-hair-stylish-yellow-overalls-moving-rhythm-music-holding-smartphone-listening-songs-earphones 1.png";
import "./WhyChose.css";

const Whychose = () => {
  return (
    <div>
      <section className="whyChoose mt-28 mb-20 container mx-auto">
        <div className="flex justify-evenly items-center ">
          <div>
            <img src={model} alt="" />
          </div>
          <div className="bg-white wcards p-14">
            <h2>Why People Choose Us</h2>
            <ul className="list-disc pt-7 pl-14">
              <li>Affordable Rate</li>
              <li>Ontime Delivery</li>
              <li>Verified Service</li>
              <li>Professional Excellent Service</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Whychose;
