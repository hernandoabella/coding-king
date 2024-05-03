import React, { useState } from "react";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="container">
      <div className="p-10 md:flex">
        <div>
          <img
            src="/public/html5-original.svg"
            width={300}
            height={300}
            alt="html"
          />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
              HTML:
            </span>{" "}
            HyperText Markup Language
          </h1>
          <p className="py-2 text-xl">
            The foundation of web development, HTML is used to structure the
            content of a webpage.
          </p>
          
          <div>
          <h2 className="text-4xl font-extrabold dark:text-white">Basic Structure:</h2>
          &lt;!DOCTYPE html&gt;<br/>
&lt;html&gt;<br/>
  &lt;head&gt;<br/>
    &lt;title&gt;My Web Page&lt;/title&gt;<br/>
  &lt;/head&gt;<br/>
  &lt;body&gt;<br/>
    &lt;h1&gt;Hello, World!&lt;/h1&gt;<br/>
    &lt;p&gt;This is my first web page.&lt;/p&gt;<br/>
  &lt;/body&gt;<br/>
&lt;/html&gt;
          </div>
          
          <div className="py-5">
            <a href="#">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Full Tutorial
              </button>
            </a>
          </div>
        </div>
      </div>

      <div>Navigation</div>
    </div>
  );
}

export default Main;
