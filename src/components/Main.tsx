import React, { useState } from "react";
import HTML from "./HTML";
import Header from "./Header";

function Main() {
  const [activeButton, setActiveButton] = useState("HTML");

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div>
      <Header />

      <div>
        <div>
          <div className="p-5 w-full flex flex-wrap justify-center">
            <ul className="flex gap-5">
              <li>
                <button
                  className={`btn btn-outline ${
                    activeButton === "HTML" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("HTML")}
                >
                  <i className="devicon-html5-plain"></i>
                  HTML
                </button>
              </li>
              <li>
                <button
                  className={`btn btn-outline ${
                    activeButton === "CSS" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("CSS")}
                >
                  <i className="devicon-css3-plain"></i>
                  CSS
                </button>
              </li>
              <li>
                <button
                  className={`btn btn-outline ${
                    activeButton === "JavaScript" ? "active" : ""
                  }`}
                  onClick={() => handleButtonClick("JavaScript")}
                >
                  <i className="devicon-javascript-plain"></i>
                  JavaScript
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="p-10 md:flex">
        {/* Render content based on activeButton */}
        {activeButton === "HTML" && <HTML />}
        {activeButton === "CSS" && (
          <div className="p-10 flex md:flex-none justify-center">
            <img src="/css3-original.svg" width={300} height={300} alt="css" />
          </div>
        )}
        {activeButton === "JavaScript" && (
          <div className="p-10 flex md:flex-none justify-center">
            <img
              src="/javascript-original.svg"
              width={300}
              height={300}
              alt="JavaScript"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main;
