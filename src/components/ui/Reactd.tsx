import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cshtml";
import "prismjs/themes/prism-okaidia.css";
import { motion } from "framer-motion";

function Reactd() {
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
      <div className="flex flex-col md:flex-row md:m-auto">
        <div>
          <div>
            <div className="md:flex gap-5">
              <div className="mb-5 flex items-center justify-center">
                <img
                  src="/icons/react-original.svg"
                  width={150}
                  height={100}
                  alt="html"
                />
              </div>

              <div>
                <h1 className="md:text-left mb-4 text-3xl font-extrabold md:text-5xl lg:text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">React</span>
                </h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="py-2 text-xl md:text-left"
                >
                  React is a popular JavaScript library developed by Facebook
                  for building user interfaces, specifically for single-page
                  applications.
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">Key features: </h3>
              <ul className="list-disc pl-5">
                <li className="my-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">
                    Component-based architecture
                  </span>{" "}
                  Build UIs by combining independent, reusable components.
                </li>
                <li className="my-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">Virtual DOM</span> Improves
                  performance by updating only parts of the actual DOM that have
                  changed.
                </li>
                <li className="my-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">State management</span> Use state
                  and props to manage and pass data within components.
                </li>
                <li className="my-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">Declarative syntax</span> Write
                  clear, predictable code that describes how the UI should look
                  at any given time.
                </li>
                <li className="my-2">
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r to-cyan-600 from-cyan-400">React Hooks </span>
                  Provide a simpler way to handle state and side effects in
                  functional components.
                </li>
              </ul>
            </motion.div>

            {/* <div>
              <h3 className="text-2xl font-bold py-2" id="structure-web-pages">
                What can i do with HTML?
              </h3>

              <ol className="list-decimal pl-10 text-lg font-medium space-y-2">
                <li className="hover:underline">
                  <a href="#structure-web-pages">Structure Web Pages</a>
                </li>
                <li className="hover:underline">Embed Media</li>
                <li className="hover:underline">Create Hyperlinks</li>
                <li className="hover:underline">Create Lists</li>
                <li className="hover:underline">Tables</li>
                <li className="hover:underline">Forms for User Input</li>
                <li className="hover:underline">Embed Scripts and Styles</li>
                <li className="hover:underline">Semantic Elements</li>
                <li className="hover:underline">Metadata and SEO</li>
                <li className="hover:underline">Accessibility Features</li>
                <li className="hover:underline">Responsive Design</li>
                <li className="hover:underline">Canvas and SVG</li>
                <li className="hover:underline">Data Storage</li>
                <li className="hover:underline">Drag and Drop</li>
                <li className="hover:underline">Geolocation and Other APIs</li>
              </ol>
            </div> */}
          </div>

          <div className="mt-10 flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              {/* <h3 className="text-2xl font-bold py-2" id="structure-web-pages">
                Structure Web Pages
              </h3>

              <ul className="list-disc pl-10">
                <li className="py-2">
                  Define headings, paragraphs, and text using elements like
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    {" "}
                    &lt;h1&gt;
                  </span>
                  ,{" "}
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    &lt;p&gt;
                  </span>
                  , and{" "}
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    &lt;span&gt;
                  </span>
                  .
                </li>
                <li className="py-2">
                  Create sections of a webpage with{" "}
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    &lt;div&gt;
                  </span>
                  ,
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    {" "}
                    &lt;section&gt;
                  </span>
                  , and{" "}
                  <span className="rounded code bg-base-300 text-[#f92672] ml-1">
                    &lt;article&gt;
                  </span>
                  .
                </li>
              </ul> */}

              {/* <div className="w-full md:pr-5">
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
              </div> */}
            </motion.div>

            {/* <motion.div
              initial={{ opacity: 0, x: 50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
              className="mockup-browser bg-base-300 w-full md:1/2"
            >
              <div className="mockup-browser-toolbar">
                <div className="input">localhost:5500</div>
              </div>
              <div className="p-10 bg-base-200 h-full">
                <h1>Hello, World!</h1> <br />
                <p>This is my first web page.</p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Reactd;
