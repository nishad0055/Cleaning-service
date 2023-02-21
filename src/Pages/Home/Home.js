import React from "react";
import Banner from "../../components/Banner/Banner";
import CarpenterSlides from "../../components/CarpenterSlides/CarpenterSlides";
import ElectricianSlides from "../../components/ElectricianSlides/ElectricianSlides";
import Hero from "../../components/Hero/Hero";
import HomeAppliences from "../../components/HomeAppliences/HomeAppliences";
import MostUsed from "../../components/MostUsed/MostUsed";
import PlumbingSlides from "../../components/PlumbingSlides/PlumbingSlides";
import Profession from "../../components/Profession/Profession";
import SameDay from "../../components/SameDay/SameDay";
import Testimonial from "../../components/Testimonials/Testimonial";
import Trending from "../../components/Trending/Trending";
import Whychose from "../../components/WhyChose/Whychose";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <SameDay />
      <Profession />
      <MostUsed />
      <HomeAppliences />
      <Banner />
      <ElectricianSlides />
      <PlumbingSlides />
      <CarpenterSlides />
      <Whychose />
      <Testimonial />
    </div>
  );
};

export default Home;
