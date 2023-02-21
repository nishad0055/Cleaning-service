import React from "react";
import happy from "../../img/100.png";

const Happiness = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center">
        <img src={happy} alt="" className="w-[151px] h-[151px]" />
        <div className="happy-info">
          <h3 className="text-[36px] font-semibold text-center">
            Hassle free services with <br /> OyeBusy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Happiness;
