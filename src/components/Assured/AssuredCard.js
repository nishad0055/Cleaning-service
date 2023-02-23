import React from "react";
import "./Assured.css";

const AssuredCard = ({ mind }) => {
  const { tittle, desc, img } = mind;
  return (
    <div className="flex items-center assured-card ">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h6>{tittle}</h6>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default AssuredCard;
