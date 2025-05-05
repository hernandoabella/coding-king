import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-twilight.css";
import { FaPython, FaChevronRight } from "react-icons/fa";

// Datos del tutorial con descripción
const tutorialData = [
  {
    id: "basics",
    title: "Python Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in Python.",
        content: (
          <pre>
            <code className="language-python">{`x = 5\ny = "Hello"\nprint(x, y)`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand Python's built-in data types such as int, float, str, and bool.",
        content: (
          <pre>
            <code className="language-python">{`a = 10       # int\nb = 3.14     # float\nc = "Python" # str\nd = True     # bool`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "control",
    title: "Control Flow",
    subtopics: [
      {
        id: "if-else",
        title: "If / Else",
        description: "Make decisions in your code using if, elif, and else statements.",
        content: (
          <pre>
            <code className="language-python">{`x = 10\nif x > 5:\n    print("Greater than 5")\nelse:\n    print("5 or less")`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-python">{`for i in range(5):\n    print(i)`}</code>
          </pre>
        ),
      },
    ],
  },
];

const PythonTutorial = () => {
  const [activeSection, setActiveSection] = useState(tutorialData[0]);
  const [activeSubtopic, setActiveSubtopic] = useState(tutorialData[0].subtopics[0]);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeSubtopic]);

  return (
    <div className="flex mt-10">
      {/* Sidebar */}
      <aside className="w-[300px] p-6 border-r border-gray-700 shadow-lg bg-[#1e1e1e] rounded-3xl">
        <div className="flex items-center gap-3 border-b border-gray-600 pb-4 mb-4">
          <FaPython className="text-3xl text-yellow-400" />
          <h2 className="text-xl font-bold text-white">Python Tutorial</h2>
        </div>

        <ul className="space-y-2 text-sm text-white">
          {tutorialData.map((section) => (
            <li key={section.id}>
              <div
                className={`flex items-center gap-2 cursor-pointer transition-all ${
                  activeSection.id === section.id ? "text-sky-400 font-semibold" : "hover:text-sky-300"
                }`}
                onClick={() => {
                  setActiveSection(section);
                  setActiveSubtopic(section.subtopics[0]);
                }}
              >
                <FaChevronRight
                  size={14}
                  className={`transition-transform duration-300 ${
                    activeSection.id === section.id ? "rotate-90" : ""
                  }`}
                />
                {section.title}
              </div>

              {activeSection.id === section.id && (
                <ul className="ml-5 mt-1 space-y-1">
                  {section.subtopics.map((sub) => (
                    <li
                      key={sub.id}
                      className={`cursor-pointer transition ${
                        activeSubtopic.id === sub.id
                          ? "text-sky-300 font-medium"
                          : "hover:text-sky-200"
                      }`}
                      onClick={() => setActiveSubtopic(sub)}
                    >
                      {sub.title}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* Contenido dinámico */}
      <main className="flex-grow p-10 overflow-y-auto ">
        <h3 className="text-3xl font-bold text-sky-500 border-gray-700 ">
          {activeSubtopic.title}
        </h3>
        <p className="text-gray-400">{activeSubtopic.description}</p>
        <div className="prose prose-invert max-w-none">{activeSubtopic.content}</div>
      </main>
    </div>
  );
};

export default PythonTutorial;
