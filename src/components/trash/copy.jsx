import React from "react";

const handleBuyClick = () => {
  window.location.href = "#";
};

const Copyright = () => (
  <p className="w-full bg-[#141413] text-[#bbb] text-[13px] text-center py-5 font-montserrat select-none shadow-inner tracking-[0.02em]">
    &copy; 2025{" "}
    <strong className="text-white font-bold text-[14px] tracking-[0.05em]">
      <span className="cursor-pointer" onClick={handleBuyClick}>
        GYM<span className="text-[#bbff00]">24</span>
      </span>
    </strong>{" "}
    —{" "}
    <span className="text-[#bbff00] font-semibold text-[13.5px] ml-2 inline-block align-middle">
      Fuel your ambition. Crush your limits.
    </span>{" "}
    All rights reserved.
  </p>
);

export default Copyright;
