import React, { useState, useEffect } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { motion } from "framer-motion";

const SideBar = () => {
  // Estado para rastrear la diapositiva actual
  const [currentSlide, setCurrentSlide] = useState(0);

  // Lista de sponsors (imágenes y enlaces)
  const sponsors = [
    {
      src: "/books/50ways.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CW1JRCXY/",
    },
    {
      src: "/books/61+vJ8aQ-8L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CLL3FKKQ",
    },
    {
      src: "/books/61Mwg2e5nuL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CVTLX8GS/",
    },
    {
      src: "/books/61ODWTeTYhL._SL1233_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CN34Z6L1",
    },
    {
      src: "/books/61PNo3nbOKL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CYHZ5QKJ",
    },
    {
      src: "/books/61vHVycjO3L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CNVDY62T",
    },
    {
      src: "/books/61WT09U0fQL._SL1233_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CKFHBKL8",
    },
    {
      src: "/books/71dWGnaRK3L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CWTF149J",
    },
    {
      src: "/books/71HxFmyNJAL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CTPZ6SVD",
    },
    {
      src: "/books/71iQlsLIiCL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CVNG3PRV",
    },
    {
      src: "/books/71kgnO+87VL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CN51HJQQ",
    },
    {
      src: "/books/71kJxYzbz+L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CTYK7NFR",
    },
    {
      src: "/books/71uZ61nf20L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0CQ4FBQ8H",
    },
    {
      src: "/books/71VGoALdd4L._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D2ZM71J8",
    },
    {
      src: "/books/71wKSKRzxjL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D4L6V11S",
    },
    {
      src: "/books/616tD4aK1eL._SL1233_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella/dp/B0CPDSXDGL",
    },
    {
      src: "/books/717KnnUE7SL._SL1500_.jpg",
      link: "https://www.amazon.com/-/es/Hernando-Abella-ebook/dp/B0D442PCLX",
    },
  ];

  // Función para ir a la diapositiva anterior
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? sponsors.length - 1 : prev - 1));
  };

  // Función para ir a la siguiente diapositiva
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === sponsors.length - 1 ? 0 : prev + 1));
  };

  // Efecto para hacer que el slider cambie automáticamente
  useEffect(() => {
    const interval = setInterval(() => {
      handleNextSlide(); // Cambia automáticamente a la siguiente diapositiva
    }, 3000); // 3000ms = 3 segundos

    // Limpiar el intervalo cuando el componente se desmonte o cambie
    return () => clearInterval(interval);
  }, [currentSlide]); // Se vuelve a ejecutar cada vez que el slide actual cambia

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

      <div className="mt-5">
        <a href="https://www.beat-byte-publishing.com/" target="_blank">
          <video width={320} height={240} loop autoPlay muted>
            <source src="/bbp-ad.mp4"></source>
          </video>
        </a>
      </div>
    </div>
  );
};

export default SideBar;
