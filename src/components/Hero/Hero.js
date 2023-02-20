import React, { useEffect, useState } from "react";
import Category from "../Category/Category";
import "./Hero.css";

const Hero = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="grid grid-cols-2">
      <section className="left-side">
        <h1 className="pt-[100px]">
          Home service, <br /> on Demand
        </h1>
        <div className="flex justify-center items-center">
          <div class="relative text-gray-600 focus-within:text-gray-400 mt-4">
            <span class="absolute inset-y-0 left-0 flex items-center pb-5 pl-1">
              <button
                type="submit"
                class="p-1 focus:outline-none focus:shadow-outline"
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  class="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </button>
            </span>
            <input
              type="search"
              name="q"
              class="py-3 w-[500px] text-sm text-white bg-white  rounded-md pl-14 focus:outline-none focus:bg-white focus:text-gray-900"
              placeholder="Search for a service..."
              autocomplete="off"
            />
            <p className="text-white underline text-base font-extrabold">
              Example:Salon, Women’s hair, Men’s grooming & Many more..
            </p>
          </div>
        </div>
      </section>

      <section className="right-side">
        <h1>What are you looking for</h1>
        <h1>{categories.length}</h1>
        <div className="coupon">
          <p>400$FLAT OFF</p>
        </div>
        <div className="grid grid-cols-4 gap-5 align-middle justify-items-center ">
          {categories.map((category) => (
            <Category key={category.id} category={category}></Category>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;
