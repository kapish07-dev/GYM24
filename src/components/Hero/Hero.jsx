import React from "react";
import Header from "../Header/Header";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen h-[100vh]  bg-black overflow-hidden "
      id="home"
    >
      {/* Header component (positioned absolutely over the container) */}
      <Header />

      {/* Content for the Left Side */}
      <div className="absolute left-0 top-0 h-full leading-1.5 flex flex-col z-10 pt-54  md:pl-4 px-4 md:px-4 lg:px-40 py-4">
        <h1 className="font-montserrat font-extrabold text-[4rem] leading-16 text-white">
          Free trial session <br /> with a trainer
        </h1>

        <button
          className="mt-2 w-36 bg-[#bbff00] text-black font-bold text-base py-2 px-2 rounded-[20px] flex justify-center cursor-pointer
          hover:bg-[#afee01] hover:translate-y-[-0.5px] hover:w-[9.05rem] hover:py-[0.55rem] transition-all duration-200"
        >
          <a href="#trainers">Detailed</a>
        </button>
      </div>

      {/* Visual Container for the Right Side - Holds the Hero Image */}
      <div className="absolute right-0 top-0 h-full z-0 w-[52%] md:w-auto">
        <img
          src="/HeroNew.jpg"
          alt="Fitness trainer"
          className="w-full h-full p-12 md:p-3 object-fill object-[80%] opacity-85"
        />
      </div>
    </div>
  );
};

export default Hero;
