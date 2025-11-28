import React from "react";

const handleBuyClick = () => {
  console.log(
    "Buy/Detailed Button Clicked! Navigating to checkout placeholder."
  );
  window.location.href = "#";
};

const Header = () => {
  return (
    <div className="absolute w-full z-20 flex justify-between items-center px-4 md:px-4 lg:px-40 py-4">
      {/* Logo */}
      <div
        className="font-furore flex items-center cursor-pointer font-furore font-extrabold text-[1.9rem]"
        onClick={handleBuyClick}
      >
        <span className="text-white cursor-pointer">GYM</span>
        <span className="text-[#bbff00] cursor-pointer">24</span>
      </div>

      {/* Navigation links */}
      <div className="font-bold text-[1.2rem]  font-weight: 600 flex  gap-12 font-poppins  text-white text-sm uppercase">
        <h3 className="">
          <a
            href="#advantages"
            className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
          >
            Advantages
          </a>
        </h3>
        <h3>
          <a
            href="#membership"
            className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
          >
            Membership
          </a>
        </h3>
        <h3>
          <a
            href="#about-us"
            className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
          >
            About
          </a>
        </h3>
        <h3>
          <a
            href="#trainers"
            className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
          >
            Trainers
          </a>
        </h3>
      </div>
    </div>
  );
};

export default Header;
