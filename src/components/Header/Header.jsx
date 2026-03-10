// import React from "react";

// const handleBuyClick = () => {
//   console.log(
//     "Buy/Detailed Button Clicked! Navigating to checkout placeholder."
//   );
//   window.location.href = "#";
// };

// const Header = () => {
//   return (
//     <div className="absolute w-full z-20 flex justify-between items-center px-8 md:px-4 lg:px-40 py-4">
//       {/* Logo */}
//       <div
//         className="font-furore flex items-center cursor-pointer font-furore font-extrabold text-[1.9rem]"
//         onClick={handleBuyClick}
//       >
//         <span className="text-white cursor-pointer">GYM</span>
//         <span className="text-[#bbff00] cursor-pointer">24</span>
//       </div>

//       {/* Navigation links */}
//       <div className="font-bold text-[1.2rem]  font-weight: 600 flex  gap-12 font-poppins  text-white text-sm uppercase">
//         <h3 className="">
//           <a
//             href="#advantages"
//             className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
//           >
//             Advantages
//           </a>
//         </h3>
//         <h3>
//           <a
//             href="#membership"
//             className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
//           >
//             Membership
//           </a>
//         </h3>
//         <h3>
//           <a
//             href="#about-us"
//             className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
//           >
//             About
//           </a>
//         </h3>
//         <h3>
//           <a
//             href="#trainers"
//             className="hover:text-[#b1f100] transition-colors duration-200 ease-in-out"
//           >
//             Trainers
//           </a>
//         </h3>
//       </div>
//     </div>
//   );
// };

// export default Header;

import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const handleBuyClick = () => {
  console.log(
    "Buy/Detailed Button Clicked! Navigating to checkout placeholder."
  );
  window.location.href = "#";
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="absolute w-full z-20 flex justify-between items-center px-8 md:px-4 lg:px-40 py-4 bg-black">
        {/* Logo */}
        <div
          className="font-furore flex items-center cursor-pointer font-furore font-extrabold text-[1.9rem] relative z-30"
          onClick={handleBuyClick}
        >
          <span className="text-white cursor-pointer">GYM</span>
          <span className="text-[#bbff00] cursor-pointer">24</span>
        </div>

        {/* Navigation links */}
        <div className="hidden md:flex font-bold text-[1.2rem]  font-weight: 600  gap-12 font-poppins  text-white text-sm uppercase">
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
        <button
          onClick={toggleMenu}
          className="md:hidden rounded-lg hover:bg-gray-100 transition-colors relative z-30 bg-gray-300"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            // <i className="fas fa-times w-6 h-6 text-gray-800"></i>
            <FontAwesomeIcon icon={faXmark} />
          ) : (
            // <i className="fas fa-bars w-6 h-6 text-gray-800"></i>
            <FontAwesomeIcon icon={faBars} />
          )}
        </button>
      </div>
      <div
        className={`${
          isOpen ? "top-0" : "-top-full"
        } bg-[#00000025] w-full h-screen left-0 z-10 flex flex-col absolute md:hidden font-bold text-[1.2rem]  font-weight: 600  gap-12 font-poppins text-white text-sm uppercase transition-all duration-200`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="absolute px-10 right-0 top-19 py-7 flex flex-col gap-5 text-right h-fit w-full bg-black">
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
    </>
  );
};

export default Header;
