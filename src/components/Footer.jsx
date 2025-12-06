import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookF,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const handleBuyClick = () => {
  window.location.href = "#";
};

export default function Footer() {
  return (
    <footer
      className="
        w-full bg-black text-white 
        flex justify-between box-border
        px-6 sm:px-8 lg:px-40 py-8
        max-md:flex-col max-md:gap-10 max-md:px-8
      "
    >
      {/* ---------- SECTION 1 ---------- */}
      <div className="flex flex-col max-w-[300px]">
        <div className="font-furore font-extrabold text-[1.9rem] mb-5">
          <span onClick={handleBuyClick} className="cursor-pointer">
            GYM
          </span>
          <span
            onClick={handleBuyClick}
            className="cursor-pointer text-[#bbff00]"
          >
            24
          </span>
        </div>

        <p className="font-inter text-[12px] leading-normal text-[#d0d0d0]">
          Build strength and confidence at our gym with state-of-the-art
          equipment, personalized training, and a motivating community
        </p>
      </div>

      {/* ---------- SECTION 2 ---------- */}
      <div className="flex flex-col max-w-[300px]">
        <div className="font-inter text-[14px] font-bold mb-2">Address</div>

        <div className="space-y-1">
          <div className="font-inter text-[12px] text-[#d0d0d0] leading-[1.15]">
            Republic of Belarus
          </div>
          <div className="font-normal text-[12px] text-[#d0d0d0] leading-[1.15]">
            Minsk city
          </div>
          <div className="font-inter text-[12px] text-[#d0d0d0] leading-[1.15]">
            Dzerzhinsky Avenue 15
          </div>
        </div>
      </div>

      {/* ---------- SECTION 3 ---------- */}
      <div className="flex flex-col max-w-[300px]">
        <div className="font-inter text-[14px] font-bold mb-2">Contact</div>

        {/* Phone */}
        <div className="flex items-center font-inter text-[12px] text-[#d0d0d0] mb-3">
          <span className="mr-2 text-[13px]">📞</span>
          <a
            href="tel:+375447772412"
            className="text-white no-underline hover:underline cursor-pointer"
          >
            +375(44)-777-24-12
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center font-inter text-[12px] text-[#d0d0d0] mb-2">
          <span className="mr-2 text-[13px]">✉️</span>
          <a
            href="mailto:gym24@gmail.com"
            className="text-white no-underline hover:underline"
          >
            gym24@gmail.com
          </a>
        </div>

        {/* ---------- Socials ---------- */}
        <div className="flex gap-3 mt-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/"
            className="
              w-[30px] h-[30px] rounded-full border-[1.35px] border-white 
              flex items-center justify-center text-white
              transition-transform duration-200
              hover:-translate-y-0.5 hover:text-[#abe900] hover:border-[#abe900]
            "
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-[14px]" />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/"
            className="
              w-[30px] h-[30px] rounded-full border-[1.35px] border-white 
              flex items-center justify-center text-white
              transition-transform duration-200
              hover:-translate-y-0.5 hover:text-[#abe900] hover:border-[#abe900]
            "
            aria-label="Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-[13px]" />
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/"
            className="
              w-[30px] h-[30px] rounded-full border-[1.35px] border-white 
              flex items-center justify-center text-white
              transition-transform duration-200
              hover:-translate-y-0.5 hover:text-[#abe900] hover:border-[#abe900]
            "
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faXTwitter} className="text-[13px]" />
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/"
            className="
              w-[30px] h-[30px] rounded-full border-[1.35px] border-white 
              flex items-center justify-center text-white
              transition-transform duration-200
              hover:-translate-y-0.5 hover:text-[#abe900] hover:border-[#abe900]
            "
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="text-[14px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}





// // Footer.jsx
// import React from "react";
// import Copyright from "./Copyright";

// const handleBuyClick = () => {
//   window.location.href = "#";
// };

// const Footer = () => {
//   return (
//     <footer
//       className="w-full bg-black text-white flex flex-col md:flex-row justify-between px-10 py-6 md:py-12 gap-8 md:gap-0 box-border
//     "
//     >
//       {/* Logo Section */}
//       <div className="flex flex-col max-w-xs">
//         <div
//           className="font-montserrat font-semibold text-[20px] mb-5 cursor-pointer"
//           onClick={handleBuyClick}
//         >
//           GYM<span className="text-[#bbff00]">24</span>
//         </div>
//         <p className="font-inter text-[12px] text-gray-300 leading-6">
//           Build strength and confidence at our gym with state-of-the-art
//           equipment, personalized training, and a motivating community
//         </p>
//       </div>

//       {/* Address Section */}
//       <div className="flex flex-col max-w-xs">
//         <div className="font-inter text-[13px] font-semibold text-white mb-2">
//           Address
//         </div>
//         <div className="font-inter text-[12px] text-gray-300 leading-6 space-y-1">
//           <div>Republic of Belarus</div>
//           <div>Minsk city</div>
//           <div>Dzerzhinsky Avenue 15</div>
//         </div>
//       </div>

//       {/* Contact Section */}
//       <div className="flex flex-col max-w-xs">
//         <div className="font-inter text-[13px] font-semibold text-white mb-2">
//           Contact
//         </div>
//         <div className="flex items-center text-[12px] text-gray-300 mb-2">
//           <span className="mr-2 text-[13px]">📞</span>
//           <a
//             href="tel:+375447772412"
//             className="text-white no-underline hover:underline cursor-pointer"
//           >
//             +375(44)-777-24-12
//           </a>
//         </div>
//         <div className="flex items-center text-[12px] text-gray-300 mb-2">
//           <span className="mr-2 text-[13px]">✉️</span>
//           <a
//             href="mailto:gym24@gmail.com"
//             className="text-white no-underline hover:underline"
//           >
//             gym24@gmail.com
//           </a>
//         </div>

//         {/* Socials */}
//         <div className="flex gap-3 mt-2">
//           <a
//             href="https://www.instagram.com/"
//             aria-label="Instagram"
//             className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#abe900] hover:text-[#abe900]"
//           >
//             <i className="fa-brands fa-instagram"></i>
//           </a>
//           <a
//             href="https://www.facebook.com/"
//             aria-label="Facebook"
//             className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#abe900] hover:text-[#abe900]"
//           >
//             <i className="fa-brands fa-facebook-f"></i>
//           </a>
//           <a
//             href="https://x.com/"
//             aria-label="X"
//             className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#abe900] hover:text-[#abe900]"
//           >
//             <i className="fa-brands fa-x-twitter"></i>
//           </a>
//           <a
//             href="https://www.youtube.com/"
//             aria-label="YouTube"
//             className="w-8 h-8 border border-white rounded-full flex items-center justify-center text-white transition-transform duration-200 hover:-translate-y-0.5 hover:border-[#abe900] hover:text-[#abe900]"
//           >
//             <i className="fa-brands fa-youtube"></i>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
