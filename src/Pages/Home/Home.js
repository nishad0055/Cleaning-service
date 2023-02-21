import React from "react";
import Banner from "../../components/Banner/Banner";
import ElectricianSlides from "../../components/ElectricianSlides/ElectricianSlides";
import Hero from "../../components/Hero/Hero";
import HomeAppliences from "../../components/HomeAppliences/HomeAppliences";
import MostUsed from "../../components/MostUsed/MostUsed";
import PlumbingSlides from "../../components/PlumbingSlides/PlumbingSlides";
import Profession from "../../components/Profession/Profession";
import SameDay from "../../components/SameDay/SameDay";
import Trending from "../../components/Trending/Trending";

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
    </div>
  );
};

export default Home;
