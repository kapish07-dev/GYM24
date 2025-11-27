import React from "react";

const handleBuyClick = () => {
  window.location.href = "#";
};

const Copyright = () => (
  <p // Adjusted padding and text size for mobile (py-4, text-[12px]), scaling up on tablet (sm:py-5, sm:text-[13px])
    className="w-full bg-[#141413] text-[#bbb] text-[12px] sm:text-[13px] text-center py-4 sm:py-5 font-montserrat select-none shadow-inner tracking-[0.02em]"
  >
    &copy; 2025{" "}
    <strong // Adjusted brand name font size for mobile
      className="text-white font-bold text-[13px] sm:text-[14px] tracking-[0.05em]"
    >
      {" "}
      <span className="cursor-pointer" onClick={handleBuyClick}>
        GYM<span className="text-[#bbff00]">24</span>{" "}
      </span>{" "}
    </strong>{" "}
    —{" "}
    <span // Key Change: 'block' on mobile, 'inline-block' on tablet (sm:inline-block) // This ensures the slogan breaks neatly onto a new line on smaller phones.
      className="text-[#bbb] font-semibold text-[12.5px] sm:text-[13.5px] ml-1 sm:ml-2 block sm:inline-block mt-1 sm:mt-0"
    >
      Fuel your ambition. Crush your limits.{" "}
    </span>{" "}
    All rights reserved.{" "}
  </p>
);

export default Copyright;
