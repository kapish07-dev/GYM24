import React, { useState, useEffect, useRef } from "react";

// Image imports (keeping original structure)
import AboutBg1 from "../assets/AboutBg1.png";
import AboutBg2 from "../assets/AboutBg2.png";
import AboutBg3 from "../assets/AboutBg3.png";
import AboutBg4 from "../assets/AboutBg4.png";

// Image array
const images = [AboutBg1, AboutBg2, AboutBg3, AboutBg4];

// Constants (keeping original structure)
const FADE_DURATION = 300; // ms
const SLIDE_DURATION = 4000; // ms
const PROGRESS_INTERVAL = 100; // ms
const SWIPE_THRESHOLD = 50; // px

const AboutUs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [popupOpen, setPopupOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const timerRef = useRef(null);

  // ... (Image navigation, Timer, Popup, Swipe, and useEffect logic remains the same) ...

  // Image navigation
  const goToNextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(false);
    }, FADE_DURATION);
  };

  const goToPreviousImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(false);
    }, FADE_DURATION);
  };

  // Timer
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setProgress(0);
    if (!popupOpen) {
      let elapsed = 0;
      timerRef.current = setInterval(() => {
        elapsed += PROGRESS_INTERVAL;
        setProgress((elapsed / SLIDE_DURATION) * 100);
        if (elapsed >= SLIDE_DURATION) {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          elapsed = 0;
        }
      }, PROGRESS_INTERVAL);
    }
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    setProgress(0);
  };

  // Popup
  const openPopup = () => {
    if (popupOpen) return;
    stopTimer();
    setPopupOpen(true);
  };

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setPopupOpen(false);
      setIsClosing(false);
      resetTimer();
    }, FADE_DURATION);
  };

  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("popup-overlay")) closePopup();
  };

  // Swipe handlers
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > SWIPE_THRESHOLD) goToNextImage();
    else if (distance < -SWIPE_THRESHOLD) goToPreviousImage();
    setTouchStart(null);
    setTouchEnd(null);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!popupOpen) return;
      if (e.key === "ArrowLeft") goToPreviousImage();
      else if (e.key === "ArrowRight") goToNextImage();
      else if (e.key === "Escape") closePopup();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [popupOpen]);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [popupOpen]);

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = popupOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [popupOpen]);

  return (
    <>
      <section
        className="flex flex-col md:flex-row justify-between bg-black text-white gap-10 md:gap-20 px-6 md:px-12 lg:px-40 py-16"
        id="about-us"
      >
        {/* Left Content */}
        {/* Default: full width (w-full). Tablet (md): half width (md:w-1/2) for a side-by-side split. */}
        <div className="flex-1 w-full md:w-1/2 lg:w-2/5 md:max-w-none">
          <h2 className="font-montserrat font-bold text-[2rem] sm:text-[2.65rem] mb-8 md:mb-12">
            About us
          </h2>
          <p className="font-inter text-base leading-relaxed mb-6">
            Gym24 is a leading fitness center located near Grushevka metro
            station, offering over 1500 sq. m of space dedicated to
            top-of-the-line workout equipment from leading brands such as Hammer
            Strength, Life Fitness, and Technogym.
          </p>
          <p className="font-inter text-base leading-relaxed mb-6">
            With affordable membership options, Gym24 is accessible to everyone
            who wants to reach their fitness goals, whether it’s building
            strength, increasing endurance, or losing weight.
          </p>
          <p className="font-inter text-base leading-relaxed mb-6">
            Certified trainers at Gym24 provide expert guidance and support to
            develop personalized workout plans tailored to each individual’s
            needs and goals.
          </p>
        </div>

        {/* Right Image Slider */}
        {/* Default: full width (w-full). Tablet (md): half width (md:w-1/2) to match the text. */}
        <div className="flex-1 flex flex-col items-center w-full md:w-1/2 lg:w-3/5 md:max-w-none">
          <div
            // Using aspect-video for better fluid height on mobile, with a minimum height for tablet/desktop
            className="w-full h-auto aspect-video min-h-[200px] md:h-72 lg:h-88 overflow-hidden rounded-lg cursor-pointer mt-4 -mb-2 transition-all duration-500"
            onClick={openPopup}
          >
            <img
              src={images[currentIndex]}
              alt={`Gym facility ${currentIndex + 1}`}
              className={`w-full h-full object-cover rounded-lg transition-opacity duration-400 ease-in-out ${
                fade
                  ? "opacity-0 scale-105"
                  : "opacity-100 scale-100 animate-fadeIn"
              }`}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Slider Controls - ensuring they take the full width of the image container */}
          <div className="w-full flex justify-between items-center mt-4">
            {/* Indicators */}
            <div className="flex gap-2">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-6 sm:w-9 h-0.5 rounded-sm ${ // adjusted w-9 to w-6 on mobile
                    index === currentIndex ? "bg-[#d6ff43]" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                className="text-white text-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={goToPreviousImage}
              >
                &#8592;
              </button>
              <button
                className="text-white text-lg cursor-pointer hover:scale-110 transition-transform"
                onClick={goToNextImage}
              >
                &#8594;
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen Popup */}
      {popupOpen && (
        <div
          className="popup-overlay fixed inset-0 bg-[rgba(44,44,44,0.6)] backdrop-blur-sm flex justify-center items-center z-1000 transition-opacity"
          onClick={handleOverlayClick}
        >
          <div
            // Changed to standard w-11/12 with a max-width for large screens. Added responsive padding.
            className={`relative w-11/12 max-w-7xl max-h-[90vh] rounded-2xl bg-[rgba(214,196,196,0.56)] flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-8
              ${isClosing ? "animate-popupFadeReverse" : "animate-popupFade"}`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              className="absolute top-3 right-5 text-2xl text-white cursor-pointer z-1000 transition-transform hover:scale-105"
              onClick={closePopup}
            >
              &times;
            </button>

            <img
              src={images[currentIndex]}
              alt={`Popup gym image ${currentIndex + 1}`}
              className={`w-full h-auto object-contain rounded-2xl transition-opacity duration-400 ease-in-out ${
                fade
                  ? "opacity-0 scale-105"
                  : "opacity-100 scale-100 animate-fadeIn"
              }`}
              loading="lazy"
              decoding="async"
            />

            {/* Popup Arrows - smaller on mobile, growing on sm/tablet */}
            <button
              className="absolute top-1/2 left-3 -translate-y-1/2 bg-transparent border-none rounded-full text-3xl sm:text-4xl p-2 sm:p-3 text-white cursor-pointer transition-transform hover:scale-[1.025] hover:text-[#bbff00]"
              onClick={goToPreviousImage}
            >
              &#8592;
            </button>
            <button
              className="absolute top-1/2 right-3 -translate-y-1/2 bg-transparent border-none rounded-full text-3xl sm:text-4xl p-2 sm:p-3 text-white cursor-pointer transition-transform hover:scale-[1.025] hover:text-[#bbff00]"
              onClick={goToNextImage}
            >
              &#8594;
            </button>

            {/* Popup Indicators - smaller gap on mobile */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-4 sm:w-18 h-1 rounded-sm ${ // adjusted w-18 to w-4 on mobile
                    index === currentIndex ? "bg-[#bbff00]" : "bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutUs;