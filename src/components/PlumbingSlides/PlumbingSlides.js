import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images
import one from "../../img/Plumber/Basin_&_sink.png";
import two from "../../img/Plumber/Bath_fittings.png";
import three from "../../img/Plumber/Blockage.png";
import four from "../../img/Plumber/Drill_&_hang.png";
import five from "../../img/Plumber/Minor_installations.png";
import six from "../../img/Plumber/Tap.png";

// import required modules
import { Pagination, Navigation } from "swiper";

const PlumbingSlides = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div>
      <section className="md:flex items-center mt-32 container mx-auto">
        <div className="service-name text-center md:text-left ">
          <h2>Plumber Services</h2>
          <span>Premium Services</span>
        </div>
        <Swiper
          onSwiper={setSwiperRef}
          slidesPerView={3}
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
                <h6>MCB & Fuse</h6>
                <p>Repairing & Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="slide-card text-center">
              <img src={two} className="" alt="" />
              <div className="slide-info">
                <h6>Switch & Socket</h6>
                <p>Shower, Faucets & Holder Installation & Repair</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={three} className="" alt="" />
              <div className="slide-info">
                <h6>Wiring</h6>
                <p>Toilet pot, Sink, Bathroom, Balcony pipe</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={four} className="" alt="" />
              <div className="slide-info">
                <h6>Appliances</h6>
                <p>Painting, Clock & Photoframe</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={five} className="" alt="" />
              <div className="slide-info">
                <h6>Chandelier</h6>
                <p>Holder, Hanger, Rod Installation</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slide-card text-center">
              <img src={six} className="" alt="" />
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

export default PlumbingSlides;
