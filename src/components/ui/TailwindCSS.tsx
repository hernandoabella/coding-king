import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism-okaidia.css";
import { motion } from "framer-motion";

function Html() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation when component mounts
      exit={{ opacity: 0, y: -50 }} // Animation when component unmounts
      transition={{ duration: 0.5 }} // Animation duration
    >
      <div className="md:flex justify-center align-center">
        <div>
          <div className="flex gap-5">
            <div className="flex md:flex-none justify-center">
              <img
                src="/tailwindcss-original.svg"
                width={150}
                height={100}
                alt="TailwindCSS"
              />
            </div>
            <div>
              <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-sky-600 from-sky-400">
                  TailwindCSS
                </span>{" "}
                
              </h1>
              <motion.p
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation when component mounts
                transition={{ delay: 0.2 }} // Delay before animation starts
                className="py-2 text-xl"
              >
                A utility-first CSS framework that provides low-level utility classes, allowing developers to rapidly build custom user interfaces without writing custom CSS.  
              </motion.p>
            </div>
          </div>

          <div className="pt-5 gap-8 md:flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              <h3 className="text-2xl font-bold">Basic Structure:</h3>
              <div>
                <pre style={{ display: "block" }}>
                  <code className="language-html">
                    &lt;!DOCTYPE html&gt;
                    {"\n"}
                    &lt;html&gt;
                    {"\n"}
                    &nbsp;&nbsp;&lt;head&gt;
                    {"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Page
                    Title&lt;/title&gt;
                    {"\n"}
                    &nbsp;&nbsp;&lt;/head&gt;
                    {"\n"}
                    &nbsp;&nbsp;&lt;body&gt;
                    {"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, World!&lt;/h1&gt;
                    {"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This is my first web
                    page.&lt;/p&gt;
                    {"\n"}
                    &nbsp;&nbsp;&lt;/body&gt;
                    {"\n"}
                    &lt;/html&gt;
                  </code>
                </pre>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
              className="mockup-browser bg-base-300"
            >
              <div className="mockup-browser-toolbar">
                <div className="input">localhost:5500</div>
              </div>
              <div className="p-10 bg-base-200 h-full">
                <h1>Hello, World!</h1> <br />
                <p>This is my first web page.</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }} // Initial animation state
            animate={{ opacity: 1 }} // Animation when component mounts
            transition={{ delay: 0.6 }} // Delay before animation starts
            className="py-5"
          >
            <a href="#">
              <motion.button
                whileHover={{ scale: 1.1 }} // Animation on hover
                whileTap={{ scale: 0.9 }} // Animation on tap
                type="button"
                className="btn btn-outline"
              >
                Full Tutorial
              </motion.button>
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Html;
