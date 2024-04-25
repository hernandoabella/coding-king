import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "HTML",
    content: (
      <div>
        <p className="py-2 text-xl">
          The foundation of web development, HTML is used to structure the
          content of a webpage.
        </p>
        <div className="py-5">
          <a href="#" className="bg-blue-100 rounded-xl p-1 block w-full text-center w-1/5 pointer">reference1</a>
        </div>
      </div>
    ),
    element: (
      <motion.img
        key="html-image"
        src="/public/html5-original.svg"
        alt="HTML5"
        width={400}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    ),
  },
  {
    title: "CSS",
    content: (
      <div>
        <p className="py-2 text-xl">
          Cascading Style Sheets (CSS) is a stylesheet language used for
          describing the look and formatting of a web page.
        </p>
        <div className="py-5">
          <a href="#" className="bg-blue-100 rounded-xl p-1 block w-full text-center w-1/5 pointer">reference1</a>
        </div>
      </div>
    ),
    element: (
      <motion.img
        key="html-image"
        src="/public/css3-original.svg"
        alt="HTML5"
        width={400}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    ),
  },
];

function Main() {
  const [activeLink, setActiveLink] = useState(0);

  return (
    <div>
      <div className="md:flex md:align-center md:items-center">
        <div className="md:flex md:justify-center md:items-center">
          <div className="md:w-2/1 flex items-center justify-center p-10">
            <motion.div>{links[activeLink].element}</motion.div>
          </div>
          <div className="w-full  md:w-2/1 p-10">
            <motion.h2 className="text-xl font-semibold text-indigo-700 md:text-7xl">
              {links[activeLink].title}
            </motion.h2>
            {links[activeLink].content}
          </div>
        </div>


      </div>
      <div className="flex justify-center p-10 gap-5 text-center">
        {links.map((link, index) => (
          <div
            className={`bg-indigo-500 hover:bg-indigo-700 text-white rounded-full p-2 ${index === activeLink && "bg-gray-700"
              }`}
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