import React, { useState } from "react";
import HTML from "./HTML";
import CSS from "./CSS";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  const [activeButton, setActiveButton] = useState("HTML");

  // Function to handle button click
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const buttonsData = [
    { label: "HTML", icon: "devicon-html5-plain", type: "HTML" },
    { label: "CSS", icon: "devicon-css3-plain", type: "CSS" },
    {
      label: "Tailwind",
      icon: "devicon-tailwindcss-plain",
      type: "JavaScript",
    },
    {
      label: "JavaScript",
      icon: "devicon-javascript-plain",
      type: "JavaScript",
    },
    {
      label: "TypeScript",
      icon: "devicon-typescript-plain",
      type: "JavaScript",
    },
  ];

  return (
    <div className="flex h-screen justify-center align-">
      <div className="h-full p-10">
        <Header />
        <ul className="flex flex-wrap gap-5">
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
        <Footer />
      </div>

      <div className="p-10 md:flex">
        {/* Render content based on activeButton */}
        {activeButton === "HTML" && <HTML />}
        {activeButton === "CSS" && <CSS />}
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
