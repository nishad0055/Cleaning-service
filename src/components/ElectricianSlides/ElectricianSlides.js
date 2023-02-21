import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images
import fuse from "../../img/Electrician/mcb___fuse.png";
import sockets from "../../img/Electrician/switches___sockets.png";
import wiring from "../../img/Electrician/wiring.png";
import appliences from "../../img/Electrician/appliance.png";
import chandelier from "../../img/Electrician/chandelier.png";
import doorbell from "../../img/Electrician/door_bell.png";

import "./ElectricianSlide.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const ElectricianSlides = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <section className="flex items-center">
        <div className="service-name">
          <h2>Electrician Service</h2>
          <span>Premium Services</span>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={4}
          centeredSlides={true}
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
              <img src={fuse} className="" alt="" />
              <div className="slide-info">
                <h6>MCB & Fuse</h6>
                <p>Repairing & Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-card text-center">
              <img src={sockets} className="" alt="" />
              <div className="slide-info">
                <h6>Switch & Socket</h6>
                <p>Shower, Faucets & Holder Installation & Repair</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={wiring} className="" alt="" />
              <div className="slide-info">
                <h6>Wiring</h6>
                <p>Toilet pot, Sink, Bathroom, Balcony pipe</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={appliences} className="" alt="" />
              <div className="slide-info">
                <h6>Appliances</h6>
                <p>Painting, Clock & Photoframe</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={chandelier} className="" alt="" />
              <div className="slide-info">
                <h6>Chandelier</h6>
                <p>Holder, Hanger, Rod Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={doorbell} className="" alt="" />
              <div className="slide-info">
                <h6>Door Bell</h6>
                <p>Bed, Table, Rack & Cabinet</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default ElectricianSlides;
