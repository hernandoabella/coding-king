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
                src="/icons/tailwindcss-original.svg"
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
                A utility-first CSS framework that provides low-level utility
                classes, allowing developers to rapidly build custom user
                interfaces without writing custom CSS.
              </motion.p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="font-bold text-xl text-sky-600">Key features: </h3>
            <ul className="list-disc pl-5">
              <li className="my-2">
                <span className="font-bold">Utility-first classes:</span>{" "}
                Predefined classes like p-4 for padding or text-center for
                centering text allow for fast and flexible styling.
              </li>
              <li className="my-2">
                <span className="font-bold">Responsive design:</span> Tailwind
                includes built-in classes for responsive breakpoints, making it
                easy to design for different screen sizes.
              </li>
              <li className="my-2">
                <span className="font-bold">Customization:</span> Tailwind can
                be extended with custom configurations, giving developers
                control over color schemes, spacing, and more.
              </li>
              <li className="my-2">
                <span className="font-bold">No pre-styled components:</span>{" "}
                Unlike other CSS frameworks like Bootstrap, Tailwind doesn’t
                come with pre-designed components, offering more design freedom.
              </li>
              <li className="my-2">
                <span className="font-bold">JIT (Just-in-Time) mode: </span>
                Generates only the styles you need for your project, making your
                CSS file smaller and more efficient.
              </li>
            </ul>
          </motion.div>

          <div className="pt-5 gap-8 md:flex">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              <h3 className="text-2xl font-bold">Basic Styles:</h3>
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1 className&quot;text&#45;2xl
                    text&#45;blue&#45;500 font&#45;bold&quot;&gt;Hello,
                    World!&lt;/h1&gt;
                    {"\n"}
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p className&quot;text&#45;lg
                    text&#45;gray&#45;300&quot;&gt;This is my first web
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
          ></motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Html;
