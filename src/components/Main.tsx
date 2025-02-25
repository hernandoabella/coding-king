import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import {
  Python,
} from "./ImportUI";
import { buttonsData } from "./buttonsData";

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
      <div className="flex">
        <div className="content w-full">
          <Hero />
          <div className="flex flex-wrap m-10 mx-auto justify-center">
            {showButtons && (
              <div className="flex flex-wrap gap-3">
                {buttonsData
                  .find(
                    (categoryData) =>
                      categoryData.category === activeCategory
                  )
                  ?.buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`btn ${activeButton === button.type ? "active" : ""
                        } ${activeCategory === "Programming" &&
                          activeButton === button.type
                          ? "bg-base-300"
                          : ""
                        }`}
                      onClick={() => handleButtonClick(button.type)}
                    >
                      <i className={button.icon}></i>
                      {button.label}
                    </button>
                  ))}
              </div>
            )}
          </div>

          <div className="p-5 mt-10">
            {activeButton === "Python" && <Python />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;