import React from "react";
import "../Hero/Hero.css";

const Category = ({ category }) => {
  const { name, img } = category;
  return (
    <div>
      <a href="/">
        <div className="text-center cat mb-2.5 ">
          <img
            src={img}
            className="w-[35px] h-[35px] block mx-auto "
            alt="category_img"
          />
          <h5 className="">{name}</h5>
        </div>
      </a>
    </div>
  );
};

export default Category;
