import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
import Header from "./Header";
import { Python, JavaScript, Java, C, Cpp, Csharp, TypeScript, Rust } from "./ImportUI";
import { buttonsData } from "./buttonsData";
import PHP from "./ui/PHP";
import Go from "./ui/Go";
import Kotlin from "./ui/Kotlin";
import Haskell from "./ui/Haskell";
import Ruby from "./ui/Ruby";
import Elixir from "./ui/Elixir";
import Clojure from "./ui/Clojure";
import Scala from "./ui/Scala";
import Swift from "./ui/Swift";
import Bash from "./ui/Bash";

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
      case "TypeScript":
        return <TypeScript />;
      case "Java":
        return <Java />;
      case "Go":
        return <Go />;
      case "Kotlin":
        return <Kotlin />;
      case "C":
        return <C />;
      case "Cpp":
        return <Cpp />;
      case "Csharp":
        return <Csharp />;
      case "PHP":
        return <PHP />;
      case "Rust":
        return <Rust />;
      case "Haskell":
        return <Haskell />;
      case "Ruby":
        return <Ruby />;
      case "Elixir":
        return <Elixir />;
      case "Clojure":
        return <Clojure />;
      case "Scala":
        return <Scala />;
      case "Swift":
        return <Swift />;
      case "Bash":
        return <Bash />;
      default:
        return <p className="text-center text-gray-500">Select a tool to display content.</p>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
     
      {/* Main Content */}
      <main className="flex flex-col items-center justify-center relative">
        <Hero />

        {showButtons && (
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mt-10">
            {buttonsData
              .find((cat) => cat.category === activeCategory)
              ?.buttons.map((button, index) => {
                const isActive = activeButton === button.type;
                const isProgramming = activeCategory === "Programming";

                return (
                  <button
                    key={index}
                    onClick={() => handleButtonClick(button.type)}
                    className={`flex items-center gap-2 p-2 rounded-3xl transition duration-300 shadow-md hover:scale-105 font-semibold text-base
                    ${isActive
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
