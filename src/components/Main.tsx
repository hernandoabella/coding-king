import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import {HTML, CSS, Git} from "./ImportUI";

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
        { label: "Vue", icon: "devicon-vuejs-plain", type: "Vue" },
        { label: "Angular", icon: "devicon-angular-plain", type: "Angular" },
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
    {
      category: "Programming Languages",
      buttons: [
        { label: "Python", icon: "devicon-python-plain", type: "Python" },
        { label: "Java", icon: "devicon-java-plain", type: "Java" },
        { label: "C++", icon: "devicon-cplusplus-plain", type: "C++" },
        { label: "C#", icon: "devicon-csharp-plain", type: "C#" },
        { label: "Swift", icon: "devicon-swift-plain", type: "Swift" },
        { label: "Kotlin", icon: "devicon-kotlin-plain", type: "Kotlin" },
      ],
    },
    {
      category: "Databases",
      buttons: [
        { label: "MySQL", icon: "devicon-mysql-plain", type: "Mysql" },
        { label: "PostgresSQL", icon: "devicon-postgresql-plain", type: "PostgresSQL" },
        { label: "MongoDB", icon: "devicon-mongodb-plain", type: "MongoDB" },
        { label: "Redis", icon: "devicon-redis-plain", type: "Github" },
      ],
    },
    {
      category: "Cloud Computing",
      buttons: [
        { label: "AWS", icon: "devicon-amazonwebservices-plain", type: "AWS" },
        { label: "Azure", icon: "devicon-azure-plain", type: "Azure" },
        { label: "Google Cloud", icon: "devicon-googlecloud-plain", type: "Google Cloud" },
      ],
    },
    {
      category: "Mobile-Development",
      buttons: [
        { label: "Android", icon: "devicon-android-plain", type: "Android" },
        { label: "XCode", icon: "devicon-xcode-plain", type: "XCODE" },
        { label: "Flutter", icon: "devicon-flutter-plain", type: "Flutter" },
      ],
    },
    
  ];

  return (
    <div className="flex h-screen justify-center">
      <div className="p-10">
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
          <div className="p-5 bg-slate-900 rounded-lg mt-5">
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
        {activeButton === "Git" && <Git />}
      </div>
    </div>
  );
}

export default Main;
