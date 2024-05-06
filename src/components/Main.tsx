import React, { useState } from "react";
import { motion } from "framer-motion";
import Prism from "prismjs";

function Main() {
  return (
    <div className="container flex">
      <div>
        <div>
          <div className="p-10 w-full bg-red-400">
            <h3>Web Technologies:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <h3>Control Version:</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-10 md:flex">
        <div className="p-10 flex md:flex-none justify-center">
          <img src="/html5-original.svg" width={300} height={300} alt="html" />
        </div>
        <div>
          <h1 className="mb-4 text-3xl font-extrabold md:text-5xl lg:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r to-orange-600 from-orange-400">
              HTML:
            </span>{" "}
            HyperText Markup Language
          </h1>
          <p className="py-2 text-xl">
            The foundation of web development, HTML is used to structure the
            content of a webpage.
          </p>

          <div className="pt-5 gap-10 flex">
            <div>
              <h3 className="text-3xl font-extrabold dark:text-white">
                Basic Structure:
              </h3>
              <div className="pt-5">
                <pre>
                  <code className="html-language">
                    &lt;!DOCTYPE html&gt;
                    <br />
                    &lt;html&gt;
                    <br />
                    &nbsp;&nbsp;&lt;head&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp; &lt;title&gt;My Web
                    Page&lt;/title&gt;
                    <br />
                    &nbsp;&nbsp;&lt;/head&gt;
                    <br />
                    &nbsp;&nbsp;&lt;body&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Hello, World!&lt;/h1&gt;
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;This is my first web
                    page.&lt;/p&gt;
                    <br />
                    &nbsp;&nbsp;&lt;/body&gt;
                    <br />
                    &lt;/html&gt;
                  </code>
                </pre>
              </div>
            </div>

            <div className="mockup-browser bg-base-300">
              <div className="mockup-browser-toolbar">
                <div className="input">https://example.com</div>
              </div>
              <div className="p-10 bg-base-200">
                <h1>Hello, World!</h1> <br />
                <p>This is my first web page.</p>
              </div>
            </div>
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
    </div>
  );
}

export default Main;
