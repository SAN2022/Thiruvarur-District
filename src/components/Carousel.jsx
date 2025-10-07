// src/components/Carousel.jsx
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import slide1 from "../assets/Repositories/temple-with-ther.jpg";
import slide2 from "../assets/Repositories/Collector-office-update.jpg";
import slide3 from "../assets/Repositories/medicalclg.jpg";
import slide4 from "../assets/Repositories/birds-sanctuary.jpg";
import slide5 from "../assets/Repositories/Muthupet-lagoon.jpg";

const images = [slide1, slide2, slide3, slide4, slide5];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Go to specific slide
  const goToSlide = (index) => setCurrent(index);

  // Previous / Next
  const prevSlide = () =>
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  const nextSlide = () =>
    setCurrent(current === images.length - 1 ? 0 : current + 1);

  return (
    <div className="relative w-full max-w-7xl mx-auto mt-4 mb-6">
      {/* Image */}
      <div className="overflow-hidden rounded-xl shadow-lg">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-[250px] sm:h-[400px] md:h-[500px] object-cover transition-all duration-700"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <FiChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full hover:bg-black/70 transition"
      >
        <FiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full ${
              current === idx ? "bg-green-600" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
