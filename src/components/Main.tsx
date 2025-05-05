import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import { Python, JavaScript, Java, C, Cpp, Csharp } from "./ImportUI"; 
import { buttonsData } from "./buttonsData";
import PHP from "./ui/PHP";


function Main() {
  const [activeButton, setActiveButton] = useState("");
  const [activeCategory, setActiveCategory] = useState("Programming");
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    setActiveButton("Python");
  }, []);

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

  const renderComponent = () => {
    switch (activeButton) {
      case "Python":
        return <Python />;
      case "JavaScript":
        return <JavaScript />;
        case "Java":
        return <Java />;
        case "C":
        return <C />;
        case "Cpp":
        return <Cpp />;
        case "Csharp":
        return <Csharp />;
        case "PHP":
        return <PHP />;
      default:
        return <p className="text-center text-gray-500">Select a tool to display content.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header always on top */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-10">
        <Hero />

        {showButtons && (
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mt-6">
            {buttonsData
              .find((cat) => cat.category === activeCategory)
              ?.buttons.map((button, index) => {
                const isActive = activeButton === button.type;
                const isProgramming = activeCategory === "Programming";

                return (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(button.type)}
                    className={`flex items-center gap-2 p-4 rounded-3xl transition duration-300 shadow-md hover:scale-105 font-semibold text-base
                    ${
                      isActive
                        ? isProgramming
                          ? "bg-sky-900 text-white"
                          : "bg-blue-400 text-black"
                        : "bg-gray-300 border text-gray-800 hover:bg-gray-300"
                    }`}
                  >
                    <i className={button.icon}></i>
                    {button.label}
                  </button>
                );
              })}
          </div>
        )}

        {/* Render selected component */}
        <div className="mt-10 w-full max-w-4xl">
          {renderComponent()}
        </div>
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default Main;
