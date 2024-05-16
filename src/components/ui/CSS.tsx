import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-css";
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
                src="/css3-original.svg"
                width={150}
                height={100}
                alt="html"
              />
            </div>
            <div>
              <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-4xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">
                  CSS:
                </span>{" "}
                Cascading Style Sheets
              </h1>
              <motion.p
                initial={{ opacity: 0 }} // Initial animation state
                animate={{ opacity: 1 }} // Animation when component mounts
                transition={{ delay: 0.2 }} // Delay before animation starts
                className="py-2 text-xl"
              >
                CSS is a stylesheet language used for describing the look and
                formatting of a web page.
              </motion.p>
            </div>
          </div>

          <div className="pt-5 gap-8 md:flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              <h3 className="text-2xl font-bold">Basic Styles:</h3>
              <div>
                <pre style={{ display: "block" }}>
                  <code className="language-css">
                    <pre>
                      <code>
                        body &#123;{"\n"}
                        &nbsp;&nbsp;background-color&#58; lightblue;{"\n"}
                        &#125;{"\n"}
                        h1 &#123;{"\n"}
                        &nbsp;&nbsp;color&#58; white;{"\n"}
                        &nbsp;&nbsp;text-align&#58; center;{"\n"}
                        &#125;{"\n"}p &#123;{"\n"}
                        &nbsp;&nbsp;font-family&#58; verdana;{"\n"}
                        &nbsp;&nbsp;font-size&#58; 20px;{"\n"}
                        &#125;{"\n"}
                      </code>
                    </pre>
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
              <div className="p-10 h-full bg-sky-300">
                <h1 className="text-center">Hello, World!</h1> <br />
                <p className="text-black font-verdana !important">
                  This is my first web page.
                </p>
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
