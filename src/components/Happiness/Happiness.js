import React from "react";
import happy from "../../img/100.png";

const Happiness = () => {
  return (
    <div>
      <div className="flex justify-evenly items-center mt-8 md:mt-0 mb-3 md:mb-0">
        <img
          src={happy}
          alt=""
          className="w-[85.95px] h-[85.95px] md:w-[151px] md:h-[151px]"
        />
        <div className="happy-info">
          <h3 className="text-[14px] font-['Montserrat'] md:text-[36px] font-[400] md:font-semibold text-center">
            Hassle free services with <br /> OyeBusy
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Happiness;
