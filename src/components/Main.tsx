import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import {
  Python,
} from "./ImportUI";
import { buttonsData } from "./buttonsData";
import Header from "./Header";

function Main() {
  const [activeButton, setActiveButton] = useState("");
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    // Set the active button to "HTML" when the component mounts
    setActiveButton("Python");
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveButton("");
    setShowButtons(true);
    const firstCategoryButton = buttonsData.find(
      (data) => data.category === category
    )?.buttons[0];
    if (firstCategoryButton) {
      setActiveButton(firstCategoryButton.type);
    }
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      {/* Glow Background */}
      {/* <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[-300px] left-[500px] "></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[100px] right-[500px] z-0"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 rounded-full blur-3xl top-[500px] right-[500px] z-0"></div> */}
      <div className="flex">
        <div className="content w-full">
          <Header />
          <Hero />

          <div className="flex flex-col items-center justify-center px-4 py-10">
  {showButtons && (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
      {buttonsData
        .find((cat) => cat.category === activeCategory)
        ?.buttons.map((button, index) => {
          const isActive = activeButton === button.type;
          const isProgramming = activeCategory === "Programming";

          return (
            <button
              key={index}
              onClick={() => handleButtonClick(button.type)}
              className={`flex items-center gap-2 px-5 py-3 rounded-lg transition duration-300 shadow-md hover:scale-105 font-semibold text-base
                ${
                  isActive
                    ? isProgramming
                      ? "bg-purple-600 text-white border-blue-600"
                      : "bg-blue-400 text-black"
                    : "bg-gray-300 border  text-gray-800 hover:bg-gray-300"
                }`}
            >
              <i className={button.icon}></i>
              {button.label}
            </button>
          );
        })}
    </div>
  )}

  {/* Render based on active button */}
  <div className="mt-10 w-full max-w-3xl">
    {activeButton === "Python" && <Python />}
  </div>
</div>


          
        </div>
      </div>

      
      <Footer />
    </div>
  );
}

export default Main;