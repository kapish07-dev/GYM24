// File: Membership.jsx
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

const membershipData = [
  {
    title: "Pass ‘Trial’",
    price: "$ 0",
    features: [
      "Access to the gym from 8:00 to 14:00",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    title: "Pass ‘Easy Start’",
    price: "$ 119",
    features: [
      "Visit without restrictions 24/7",
      "Individual training program",
      "Access to the VTRAINER application",
      "Trainer support",
    ],
  },
  {
    title: "Pass ‘Free Time’",
    price: "$ 49",
    features: [
      "The entrance time to the gym is from 14:00 to 16:00",
      "Without suspension of gym membership",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    title: "Pass ‘1 Month 24/7’",
    price: "$ 85",
    features: [
      "Visit without restrictions 24/7",
      "The trainer on duty will introduce you to the gym",
    ],
  },
  {
    title: "Pass ‘In Shape (AM)’",
    price: "$ 165",
    features: [
      "Training in mini-groups until 14:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
  {
    title: "Pass ‘In Shape (PM)’",
    price: "$ 195",
    features: [
      "Training in mini-groups until 17:00",
      "Without suspension of gym membership",
      "Classes with a trainer in a mini-group 3 times a week",
      "Trainer support",
    ],
  },
];

const handleBuyClick = () => {
  console.log(
    "Buy/Detailed Button Clicked! Navigating to checkout placeholder."
  );
  window.location.href = "#";
};

const Membership = () => {
  return (
    <section
      className="bg-black text-white font-sans px-6 sm:px-8 lg:px-40 py-32 sm:py-24"
      id="membership"
    >
      <h2 className="text-4xl sm:text-2xl md:text-5xl font-bold text-center mb-12">
        Gym membership
      </h2>
      <div className="flex flex-wrap justify-center   gap-8 sm:gap-10 lg:gap-14">
        {membershipData.map((plan, index) => (
          <div
            key={index}
            className="sm:w-80 md:w-58 w-52 h-84 md:h-84 flex flex-col bg-[#1e1e1e] rounded-md overflow-hidden transition-transform duration-200 hover:-translate-y-0.5"
          >
            <div className="bg-[#212121]  p-3.5 text-center">
              <h3 className="font-bold text-m m:text-base text-white mb-2">
                {plan.title}
              </h3>
              <p className="text-lg sm:text-xl font-bold text-white">
                {plan.price}
              </p>
            </div>
            <div className="flex-1 py-5 pl-5 pr-2.5 flex flex-col justify-between border-t-2 border-black">
              <ul className="list-none p-0 m-0">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5  text-[0.845rem] sm:text-balance mb-2 leading-4 text-white"
                  >
                    <FaRegCircleCheck className="text-white text-base min-w-[1.2rem] mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className="bg-[#bbff00] text-black font-normal border-none rounded-full px-8 py-0.5 self-center text-xs sm:text-sm mt-2 mb-3 transition-colors duration-300 hover:bg-[#abe900] hover:-translate-y-0.5"
                onClick={handleBuyClick}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Membership;
