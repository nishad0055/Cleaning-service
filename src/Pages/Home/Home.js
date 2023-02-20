import React from "react";
import Hero from "../../components/Hero/Hero";
import SameDay from "../../components/SameDay/SameDay";
import Trending from "../../components/Trending/Trending";

const Home = () => {
  return (
    <div>
      <Hero />
      <Trending />
      <SameDay />
    </div>
  );
};

export default Home;
