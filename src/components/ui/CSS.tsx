import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-css";
import "prismjs/themes/prism-okaidia.css";
import { motion } from "framer-motion";

function CSS() {
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
      <div className="md:flex align-center">
        <div>
          <div className="flex gap-5 mb-4">
            <div className="flex md:flex-none justify-center">
              <img
                src="/icons/css3-original.svg"
                width={150}
                height={100}
                alt="css"
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
                CSS (Cascading Style Sheets) is used to control the presentation
                and layout of web pages. It allows you to style and visually
                enhance HTML elements.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Main features: </h3>
            <ul className="list-disc pl-5">
              <li className="my-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Styling elements </span> such as
                colors, fonts, and backgrounds.
              </li>
              <li className="my-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Layout control </span> with
                positioning, margins, padding, and display properties.
              </li>
              <li className="my-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Responsive design </span> using
                media queries to adapt layouts to different screen sizes (e.g.,
                mobile, tablet, desktop).
              </li>
              <li className="my-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Flexbox and Grid systems </span> for
                advanced layout management.
              </li>
              <li className="my-2">
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400">Animations and transitions </span>
                to create dynamic visual effects.
              </li>
            </ul>
          </motion.div>
          <motion.div className="my-5 bg-gradient-to-r to-blue-600 from-blue-400 w-full h-2 rounded"></motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h3
              className="text-2xl font-bold py-2 text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-blue-400"
              id="structure-web-pages"
            >
              What can i do with CSS?
            </h3>

            <ol className="list-decimal pl-10 text-lg font-medium space-y-2">
              <li className="hover:underline">
                <a href="#style-text">Style Text</a>
              </li>
              <li className="hover:underline">Style Backgrounds</li>
              <li className="hover:underline">Control Layout</li>
              <li className="hover:underline">Responsive Design</li>
              <li className="hover:underline">
                Add Animations and Transitions
              </li>
              <li className="hover:underline">Control Element Visibility</li>
              <li className="hover:underline">Style Borders and Outlines</li>
              <li className="hover:underline">
                Pseudo-classes and Pseudo-elements
              </li>
              <li className="hover:underline">
                Create Custom Cursors and Pointer Effects
              </li>
              <li className="hover:underline">Layer and Control Z-Index</li>
              <li className="hover:underline">Implement Flexbox Layout</li>
              <li className="hover:underline">Grid Layouts</li>
              <li className="hover:underline">Responsive Typography</li>
              <li className="hover:underline">Create Navigation Menus</li>
              <li className="hover:underline">Customize Forms</li>
              <li className="hover:underline">
                Use Variables and Preprocessors
              </li>
              <li className="hover:underline">Typography and Font Styling</li>
              <li className="hover:underline">Styling Forms and Buttons</li>
              <li className="hover:underline">Styling Images and Media</li>
              <li className="hover:underline">Icons and Vector Graphics</li>
              <li className="hover:underline">Blend Modes and Filters</li>
            </ol>
          </motion.div>

          <div className="pt-5 gap-8 md:flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              <h3 className="text-2xl font-bold">Style Text</h3>
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
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default CSS;
