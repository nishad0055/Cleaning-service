import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images
import one from "../../img/Home/Bed.png";
import two from "../../img/Home/Curtain & Blinds.png";
import three from "../../img/Home/door.png";
import four from "../../img/Home/Drawer_&_cupboard.png";
import five from "../../img/Home/Fitting_&_minor_installations.png";
import six from "../../img/Home/Furniture_assembly.png";

// import required modules
import { Pagination, Navigation } from "swiper";

const CarpenterSlides = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <section className="flex items-center mt-32">
        <div className="service-name">
          <h2>Carpenter Services</h2>
          <span>Premium Services</span>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          spaceBetween={20}
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={one} className="" alt="" />
              <div className="slide-info">
                <h6>Bed</h6>
                <p>Repairing Support, Legs</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-card text-center">
              <img src={two} className="" alt="" />
              <div className="slide-info">
                <h6>Curtain & Blinds</h6>
                <p>Motorized, Non-Motorized Blinds & Curtain Rod</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={three} className="" alt="" />
              <div className="slide-info">
                <h6>Door</h6>
                <p>Repairing, Accessories Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={four} className="" alt="" />
              <div className="slide-info">
                <h6>Drawer & Cupboard</h6>
                <p>Channel, Hinge Repair</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={five} className="" alt="" />
              <div className="slide-info">
                <h6>Fittings & Installations</h6>
                <p>Holder, Hanger, Rod Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={six} className="" alt="" />
              <div className="slide-info">
                <h6>Furniture Assembly</h6>
                <p>Bed, Table, Rack & Cabinet</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default CarpenterSlides;
