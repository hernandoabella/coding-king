import { useState, useEffect } from "react";
import Hero from "./Hero";
import Footer from "./Footer";
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
    <div className="flex flex-col min-h-screen">
     
      {/* Main Content */}
      <main>
        <Hero />

        {showButtons && (
          <div className="flex flex-wrap justify-center p-4 gap-2 max-w-4xl m-auto">
            {buttonsData
              .find((cat) => cat.category === activeCategory)
              ?.buttons.map((button, index) => {
                const isActive = activeButton === button.type;
                const isProgramming = activeCategory === "Programming";

                return (
                  <button
  key={index}
  onClick={() => handleButtonClick(button.type)}
  className={`
    flex items-center justify-center gap-3 
    p-3 md:p-4 lg:p-5 rounded-xl border transition-all duration-300 shadow-lg
    text-2xl md:text-3xl lg:text-4xl
    hover:scale-105 hover:shadow-blue-400/50 hover:border-blue-400
    ${isActive
      ? isProgramming
        ? "bg-gradient-to-br from-slate-900 to-slate-700 text-blue-400 border-blue-500"
        : "bg-gradient-to-br from-blue-400 to-blue-300 text-slate-800 border-blue-500"
      : "bg-gray-200 text-slate-500 border-gray-300 dark:bg-gray-700 dark:text-gray-400"
    }
  `}
>
  <i className={button.icon}></i>
</button>

                );
              })}
          </div>
        )}

        {/* Render selected component */}
        <div className="">
          {renderComponent()}
        </div>
      </main>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
}

export default Main;
