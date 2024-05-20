import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {
  HTML,
  CSS,
  JavaScript,
  TypeScript,
  Reactd,
  Vue,
  Angular,
  Git,
  TailwindCSS,
} from "./ImportUI";
import { buttonsData } from "./buttonsData";
import CategoryDropdown from "./CategoryDropdown";

function Main() {
  const [activeButton, setActiveButton] = useState("");
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    // Set the active button to "HTML" when the component mounts
    setActiveButton("HTML");
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
    <div className="flex h-screen w-screen overflow-hidden justify-center items-center">
      <div className="md:p-10">
        <Header />
        <div>
          <div>
            <CategoryDropdown
              categories={buttonsData.map((data) => data.category)}
              activeCategory={activeCategory}
              onChange={handleCategoryChange}
            />
          </div>
          <div className="rounded-lg mt-5">
            {showButtons && (
              <div className="flex flex-wrap gap-5">
                {buttonsData
                  .find(
                    (categoryData) => categoryData.category === activeCategory
                  )
                  ?.buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`btn ${
                        activeButton === button.type ? "active" : ""
                      } ${
                        activeCategory === "Web Development" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
                          : ""
                      } ${
                        activeCategory === "Control Version" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
                          : ""
                      } ${
                        activeCategory === "Programming Languages" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
                          : ""
                      } ${
                        activeCategory === "Databases" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
                          : ""
                      } ${
                        activeCategory === "Cloud Computing" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
                          : ""
                      } ${
                        activeCategory === "Mobile Development" &&
                        activeButton === button.type
                          ? "bg-slate-900 text-white"
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
        </div>
        <Footer />
      </div>

      <div className="p-10 md:flex">
        {activeButton === "HTML" && <HTML />}
        {activeButton === "CSS" && <CSS />}
        {activeButton === "TailwindCSS" && <TailwindCSS />}
        {activeButton === "JavaScript" && <JavaScript />}
        {activeButton === "TypeScript" && <TypeScript />}
        {activeButton === "React" && <Reactd />}
        {activeButton === "Vue" && <Vue />}
        {activeButton === "Angular" && <Angular />}
        {activeButton === "Git" && <Git />}
      </div>
    </div>
  );
}

export default Main;
