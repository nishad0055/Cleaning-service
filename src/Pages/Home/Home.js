import React from "react";
import Hero from "../../components/Hero/Hero";
import HomeAppliences from "../../components/HomeAppliences/HomeAppliences";
import MostUsed from "../../components/MostUsed/MostUsed";
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
    </div>
  );
};

export default Home;
