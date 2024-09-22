import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const SideBar = () => {
  // Estado para rastrear la diapositiva actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de sponsors (imágenes y enlaces)
  const sponsors = [
    { src: "/123.png", link: "https://example1.com" },
    { src: "/123.png", link: "https://example2.com" },
    { src: "/123.png", link: "https://example3.com" },
  ];

  // Handler para la diapositiva anterior
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sponsors.length - 1 : prev - 1));
  };

  // Handler para la siguiente diapositiva
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === sponsors.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-full fixed p-10 left-side-bar bg-base-300 flex flex-col items-center">
      <h2 className="text-center font-bold my-10 text-3xl">Our Sponsors</h2>

      {/* Flecha para diapositiva anterior */}
      <IoIosArrowUp
        onClick={handlePrevSlide}
        className="text-4xl cursor-pointer"
      />

      <div className="flex flex-col items-center justify-center h-64 my-5">
        {/* Animación de imagen */}
        <motion.a
          key={currentSlide}
          href={sponsors[currentSlide].link}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="transition-transform transform hover:scale-105 duration-300"
        >
          <motion.img
            src={sponsors[currentSlide].src}
            alt="Sponsor"
            className="w-full h-auto pointer-events-none select-none"
            style={{ userSelect: "none" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          />
        </motion.a>
      </div>

      {/* Flecha para la siguiente diapositiva */}
      <IoIosArrowDown
        onClick={handleNextSlide}
        className="text-4xl cursor-pointer"
      />

      <div>
        <a href="https://www.beat-byte-publishing.com/" target="_blank">
          <button>Subscribe to Newsletter</button>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
