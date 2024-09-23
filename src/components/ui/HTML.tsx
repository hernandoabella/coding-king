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
      <div className="flex flex-col md:flex-row md:m-auto">
        <div>
          <div>
            <div className="md:flex gap-5">
              <div className="mb-5 flex items-center justify-center">
                <img
                  src="/icons/html5-original.svg"
                  width={150}
                  height={100}
                  alt="html"
                />
              </div>

              <div>
                <h1 className="md:text-left text-center mb-4 text-3xl font-extrabold md:text-5xl lg:text-4xl">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
                    HTML:
                  </span>{" "}
                  HyperText Markup Language
                </h1>
                <motion.p
                  initial={{ opacity: 0 }} // Initial animation state
                  animate={{ opacity: 1 }} // Animation when component mounts
                  transition={{ delay: 0.2 }} // Delay before animation starts
                  className="py-2 text-xl text-center md:text-left"
                >
                  HTML (Hypertext Markup Language) is the backbone of web
                  development and allows you to structure and display content on
                  the web.
                </motion.p>
              </div>
            </div>

            <div>
              <h3 className=" text-1x2 font-bold md:text-2xl mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
                  What can i do with HTML?
                </span>{" "}
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
            </div>
          </div>

          <div className="mt-10 flex flex-col md:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -50 }} // Initial animation state
              animate={{ opacity: 1, x: 0 }} // Animation when component mounts
              transition={{ delay: 0.4 }} // Delay before animation starts
            >
              <h3 className="text-2xl font-bold py-2" id="structure-web-pages">
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
              </ul>

              <div className="w-full md:pr-5">
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
              className="mockup-browser bg-base-300 w-full md:1/2"
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
        </div>
      </div>
    </motion.div>
  );
}

export default Html;
