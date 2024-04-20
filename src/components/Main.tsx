import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "HTML",
    content: (
      <motion.p
        key="html-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        The foundation of web development, HTML is used to structure the content
        of a webpage.
      </motion.p>
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
      <motion.p
        key="css-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Cascading Style Sheets (CSS) is a stylesheet language used for
        describing the look and formatting of a web page.
      </motion.p>
    ),
    element: (
      <motion.img
        key="css-image"
        src="/public/css3-original.svg"
        alt="CSS3"
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
      <div className="md:w-2xl md:mx-auto flex justify-center place-items-center p-10 gap-10">
        <div className="md:flex gap-10">
          <div className="md:p-10 mx-auto m-10 w-1/2">
            <motion.div
              style={{ height: "400px" }} // Set a fixed height for content area
            >
              {links[activeLink].element}
            </motion.div>
          </div>
          <div>
            <motion.h2
              className="font-semibold  md:text-9xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={links[activeLink].title}
            >
              {links[activeLink].title}
            </motion.h2>
            {links[activeLink].content}
          </div>
        </div>
      </div>
      <div className="flex p-5 gap-5 text-center justify-center place-items-center">
        {links.map((link, index) => (
          <div
            className={`bg-indigo-500 hover:bg-indigo-300 hover:text-black text-white rounded-full p-2 ${
              index === activeLink && "bg-gray-700"
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
