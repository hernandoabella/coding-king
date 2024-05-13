import React, { useState } from "react";
import HTML from "./HTML";
import CSS from "./CSS";
import Header from "./Header";
import Footer from "./Footer";

function Main() {
  const [activeButton, setActiveButton] = useState("");
  const [activeCategory, setActiveCategory] = useState("Web Development");
  const [showButtons, setShowButtons] = useState(true);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveButton("");
    setShowButtons(true);
    const firstCategoryButton = buttonsData.find((data) => data.category === category)?.buttons[0];
    if (firstCategoryButton) {
      setActiveButton(firstCategoryButton.type);
    }
  };

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  const buttonsData = [
    {
      category: "Web Development",
      buttons: [
        { label: "HTML", icon: "devicon-html5-plain", type: "HTML" },
        { label: "CSS", icon: "devicon-css3-plain", type: "CSS" },
        {
          label: "JavaScript",
          icon: "devicon-javascript-plain",
          type: "JavaScript",
        },
        {
          label: "TypeScript",
          icon: "devicon-typescript-plain",
          type: "TypeScript",
        },
        { label: "React", icon: "devicon-react-plain", type: "React" },
      ],
    },
    {
      category: "Control Version",
      buttons: [
        { label: "Git", icon: "devicon-git-plain", type: "Git" },
        { label: "Github", icon: "devicon-github-plain", type: "Github" },
      ],
    },
    // Add more categories and buttons here...
  ];

  return (
    <div className="flex h-screen justify-center">
      <div className="h-full p-10">
        <Header />
        <div className="">
          <div className="space-x-5">
            {buttonsData.map((categoryData, index) => (
              <button
                key={index}
                className={`btn ${
                  activeCategory === categoryData.category
                    ? "bg-slate-900 text-white"
                    : ""
                }`}
                onClick={() => handleCategoryChange(categoryData.category)}
              >
                {categoryData.category}
              </button>
            ))}
          </div>
          <div className="pt-5">
            {showButtons && (
              <div className="flex flex-wrap gap-5">
                {buttonsData
                  .find(
                    (categoryData) => categoryData.category === activeCategory
                  )
                  ?.buttons.map((button, index) => (
                    <button
                      key={index}
                      className={`btn btn-outline ${
                        activeButton === button.type ? "active" : ""
                      } ${
                        activeCategory === "Web Development" && activeButton === button.type
                          ? "bg-sky-900 text-white"
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
      </div>
    </div>
  );
}

export default Main;
