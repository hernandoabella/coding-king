import React, { useState } from "react";
import HTML from "./HTML";
import Header from "./Header";

function Main() {
  const [activeButton, setActiveButton] = useState("HTML");

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonsData = [
    { label: "HTML", icon: "devicon-html5-plain", type: "HTML" },
    { label: "CSS", icon: "devicon-css3-plain", type: "CSS" },
    { label: "JavaScript", icon: "devicon-javascript-plain", type: "JavaScript" },
    // Add more buttons as needed
  ];

  return (
    <div>
      <Header />

      <div className="flex">
        <div className="">
          <div className="p-5 bg-red-500 flex flex-wrap justify-center">
          <ul className="flex gap-5">
        {buttonsData.map((button, index) => (
          <li key={index}>
            <button
              className={`btn btn-outline ${
                activeButton === button.type ? "active" : ""
              }`}
              onClick={() => handleButtonClick(button.type)}
            >
              <i className={button.icon}></i>
              {button.label}
            </button>
          </li>
        ))}
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
