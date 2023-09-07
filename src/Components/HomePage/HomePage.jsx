import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <section className="w-full dark:bg-[#060b13] h-[100vh] bg-white">
        <Navbar />
        <Hero />
      </section>
    </>
  );
};

export default HomePage;
