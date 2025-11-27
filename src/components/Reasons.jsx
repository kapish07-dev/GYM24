// File: Reasons.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRulerCombined,
  faDumbbell,
  faPersonRunning,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";

const reasonsData = [
  {
    icon: faRulerCombined,
    heading: "15000 sq.m.",
    description:
      "A spacious gym for sports – a safe distance between exercise machines",
  },
  {
    icon: faDumbbell,
    heading: "More than 200 equipment",
    description:
      "No queues at the simulators. Premium equipment from LifeStyle, Hammer Strength, TechnoGym.",
  },
  {
    icon: faPersonRunning,
    heading: "4 fitness zones",
    description:
      "From cardio to functional and cycle. Separate area for boxing and mixed martial arts",
  },
  {
    icon: faStopwatch,
    heading: "Round-the-clock operation",
    description:
      "The gym is open 24 hours a day, also works on all holidays and weekends",
  },
];

const Reasons = () => {
  return (
    <section
      className="bg-black text-white font-sans px-6 sm:px-8 lg:px-40 py-32 sm:py-24"
      id="advantages"
    >
      <h2 className="text-5xl sm:text-3xl md:text-5xl font-bold mb-20 text-center md:text-left">
        Reasons to join
      </h2>

      <div className="flex flex-wrap justify-between gap-20 sm:gap-5 mt-10">
        {reasonsData.slice(0, 2).map((reason, index) => (
          <div
            key={index}
            className="flex w-full sm:w-[45%] items-start mb-8 md:mb-0"
          >
            <FontAwesomeIcon
              icon={reason.icon}
              className="text-[#bbff00] text-5xl shrink-0 mr-4"
            />
            <div>
              <div className="text-xl sm:text-base md:text-xl font-bold mb-2">
                {reason.heading}
              </div>
              <div className="text-m sm:text-s md:text-m leading-[1.2]">
                {reason.description}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-between gap-8 sm:gap-5 mt-10">
        {reasonsData.slice(2, 4).map((reason, index) => (
          <div
            key={index}
            className="flex w-full sm:w-[45%] items-start mb-8 md:mb-0"
          >
            <FontAwesomeIcon
              icon={reason.icon}
              className="text-[#bbff00] text-5xl shrink-0 mr-5"
            />
            <div>
              <div className="text-xl sm:text-base md:text-xl font-bold mb-2">
                {reason.heading}
              </div>
              <div className="text-m sm:text-s md:text-m leading-[1.2]">
                {reason.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reasons;
