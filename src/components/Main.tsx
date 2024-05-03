import React, { useState } from "react";
import { motion } from "framer-motion";

function Main() {
  return (
    <div className="container">
      <div>
        <div>
          <img src="/public/html5-original.svg" width={300} height={300} alt="html"/>
        </div>
        <p className="py-2 text-xl">
          The foundation of web development, HTML is used to structure the
          content of a webpage.
        </p>
        <div className="py-5">
          <a
            href="#"
            className="bg-blue-100 rounded-xl p-1 block text-center w-1/5 pointer"
          >
            link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
