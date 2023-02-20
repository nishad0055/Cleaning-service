import React from "react";

const Category = ({ category }) => {
  const { name, img } = category;
  return (
    <div>
      <div className="text-center">
        <img
          src={img}
          className="w-[35px] h-[35px] block mx-auto "
          alt="category_img"
        />
        <h5 className="">{name}</h5>
      </div>
    </div>
  );
};

export default Category;
