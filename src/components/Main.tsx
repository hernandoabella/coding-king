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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sint
        minima itaque, distinctio quasi quia, harum veniam quidem nam voluptas
        sapiente ad facere perspiciatis eveniet dicta enim, mollitia eaque.
      </motion.p>
    ),
    element: (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        Example Div
      </motion.div>
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
        voluptates facere temporibus, itaque officiis accusantium laboriosam
        repellendus, autem doloremque in.
      </motion.p>
    ),
    element: (
      <motion.img
        src="example-image2.jpg"
        alt="Example Image"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    ),
  },
  // Add more links as needed
];

function Main() {
  const [activeLink, setActiveLink] = useState(0); // Set the initial active link index

  return (
    <div>
      <div className="flex justify-center place-items-center p-5 gap-10">
        <div className="md:w-1/2">
          {/* Left side content example: code snippet or image */}
          {links[activeLink].element}
        </div>
        <div className="md:w-1/2">
          <motion.h2
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
      <div className="flex p-5 gap-5 border ">
        {links.map((link, index) => (
          <div
            className="bg-yellow"
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
