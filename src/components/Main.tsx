import React, { useState } from "react";
import { motion } from "framer-motion";

const links = [
  {
    title: "HTML",
    content: (
      <div>
        <p>
          The foundation of web development, HTML is used to structure the
          content of a webpage.
        </p>
        <ul>
          <li>
            <b>!DOCTYPE: </b>Defines the document
          </li>
          <li>
            <b>html: </b>Defines HTML documents
          </li>
          <li>
            <b>head: </b>Contains metadata / information for the document
          </li>
          <li>
            <b>title</b> Defines the title for the document
          </li>
          <li>
            <b>body:</b> Defines the document
          </li>
          <li>
            <b>h1 - h6:</b> Defines headings
          </li>
          <li>
            <b>p:</b> Defines a paragraph
          </li>
          <li>
            <b>br:</b> Insert a single line break
          </li>
          <li>
            <b>hr:</b> Defines a thematic break in an HTML page
          </li>
          <li>
            <b>:</b>Defines a comment
          </li>
        </ul>
        <h3 className="font-semibold uppercase">Forms and inputs</h3>
        <h3 className="font-semibold">FORMATTING</h3>
        <h3 className="font-semibold">IMAGES</h3> <br />
        <h3 className="font-semibold uppercase">Basic HTML</h3>
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
      <p>
        Cascading Style Sheets (CSS) is a stylesheet language used for
        describing the look and formatting of a web page.
      </p>
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
            <motion.div>{links[activeLink].element}</motion.div>
          </div>
          <div>
            <motion.h2 className="font-semibold  md:text-7xl">
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