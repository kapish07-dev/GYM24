// File: Trainers.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const trainersData = [
  {
    id: 1,
    name: "Victoria Shurpik",
    image: "/Trainer1.png",
    social: {
      instagram: "https://instagram.com/victoria.shurpik",
      twitter: "https://twitter.com/victoria.shurpik",
      facebook: "https://facebook.com/victoria.shurpik",
    },
  },
  {
    id: 2,
    name: "Elizabeth Lavrinenko",
    image: "/Trainer2.png",
    social: {
      instagram: "https://instagram.com/elizabeth.lavrinenko",
      twitter: "https://twitter.com/elizabeth.lavrinenko",
      facebook: "https://facebook.com/elizabeth.lavrinenko",
    },
  },
  {
    id: 3,
    name: "Ivan Gladkikh",
    image: "/Trainer3.png",
    social: {
      instagram: "https://instagram.com/ivan.gladkikh",
      twitter: "https://twitter.com/ivan.gladkikh",
      facebook: "https://facebook.com/ivan.gladkikh",
    },
  },
  {
    id: 4,
    name: "Lyudmila Sabio",
    image: "/Trainer4.png",
    social: {
      instagram: "https://instagram.com/lyudmila.sabio",
      twitter: "https://twitter.com/lyudmila.sabio",
      facebook: "https://facebook.com/lyudmila.sabio",
    },
  },
  {
    id: 5,
    name: "Evgeny Gurkov",
    image: "/Trainer5.png",
    social: {
      instagram: "https://instagram.com/evgeny.gurkov",
      twitter: "https://twitter.com/evgeny.gurkov",
      facebook: "https://facebook.com/evgeny.gurkov",
    },
  },
  {
    id: 6,
    name: "Anatoly Prytytsky",
    image: "/Trainer6.png",
    social: {
      instagram: "https://instagram.com/anatoly.prytytsky",
      twitter: "https://twitter.com/anatoly.prytytsky",
      facebook: "https://facebook.com/anatoly.prytytsky",
    },
  },
  {
    id: 7,
    name: "Victor Ludkovich",
    image: "/Trainer7.png",
    social: {
      instagram: "https://instagram.com/victor.ludkovich",
      twitter: "https://twitter.com/victor.ludkovich",
      facebook: "https://facebook.com/victor.ludkovich",
    },
  },
  {
    id: 8,
    name: "Maria Masyak",
    image: "/Trainer8.png",
    social: {
      instagram: "https://instagram.com/maria.masyak",
      twitter: "https://twitter.com/maria.masyak",
      facebook: "https://facebook.com/maria.masyak",
    },
  },
];

const Trainers = () => {
  return (
    <section
      className="bg-black text-white font-sans flex flex-col items-center
      
      left-0 top-0 h-full pt-54 px-6 sm:px-8  md:pl-4 md:px-4 lg:px-28 py-8"
      id="trainers"
    >
      <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-12">
        Trainers staff
      </h2>

      <div className="w-full flex flex-wrap justify-center gap-3 sm:gap-5">
        {trainersData.map(({ id, name, image, social }) => (
          <div
            key={id}
            className="flex flex-col items-center bg-[#212121] rounded-xl p-3 sm:p-4 w-full xs:w-48 sm:w-48 md:w-48 lg:w-56 xl:w-64 transition-transform duration-200 hover:-translate-y-0.5"
          >
            <img
              src={image}
              alt={name}
              className="h-56 sm:h-60 w-full object-cover rounded-lg cursor-pointer"
            />
            <div className="flex flex-col items-center gap-2 mt-3 text-center w-full">
              <h3 className="text-sm sm:text-base font-bold">{name}</h3>
              <div className="flex gap-2 mt-1">
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-white hover:text-lime-400 hover:border-lime-400 transition-colors duration-300 hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-base" />
                </a>
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-white hover:text-lime-400 hover:border-lime-400 transition-colors duration-300 hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faTwitter} className="text-base" />
                </a>
                <a
                  href={social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-white hover:text-lime-400 hover:border-lime-400 transition-colors duration-300 hover:-translate-y-0.5"
                >
                  <FontAwesomeIcon icon={faFacebookF} className="text-base" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trainers;
