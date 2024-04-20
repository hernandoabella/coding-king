import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "HTML",
    content: (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        The foundation of web development, HTML is used to structure the content
        of a webpage.
      </motion.p>
    ),
    element: (
      <motion.img
        src="/public/html5-original.svg"
        alt="css3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        width={400}
      />
    ),
  },
  {
    title: "CSS",
    content: (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Cascading Style Sheets (CSS) is a stylesheet language used for
        describing the look and formatting of a web page.
      </motion.p>
    ),
    element: (
      <motion.img
        src="/public/css3-original.svg"
        alt="css3"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        width={400}
      />
    ),
  },
  // Add more links as needed
];

function Main() {
  const [activeLink, setActiveLink] = useState(0); // Set the initial active link index

  return (
    <div>
      <div className="md:w-2xl md:mx-auto flex justify-center place-items-center p-5 gap-10">
        <div className="md:flex">
          <div className="md:w-1/3">
            {/* Left side content example: code snippet or image */}
            {links[activeLink].element}
          </div>
          <div className="md:w-1/2">
            <motion.h2
              className="font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {links[activeLink].title}
            </motion.h2>
            {links[activeLink].content}
            <a href="#">Read more.</a>
          </div>
        </div>
      </div>
      <div className="flex p-5 gap-5 border text-center justify-center place-items-center">
        {links.map((link, index) => (
          <div
            className="bg-indigo-500 hover:bg-indigo-300 hover:text-black text-white rounded-full p-2"
            key={index}
            onClick={() => setActiveLink(index)}
            style={{ cursor: "pointer" }}
          >
            {link.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
