import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-cpp";
import "prismjs/themes/prism-tomorrow.css";
import {  FaChevronRight } from "react-icons/fa";
import { PiFileCppFill } from "react-icons/pi";

const tutorialData = [
  {
    id: "basics",
    title: "C++ Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in C++.",
        content: (
          <pre>
            <code className="language-cpp">{`int x = 5;\nstd::string y = "Hello";\nstd::cout << x << " " << y << std::endl;`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand C++'s built-in data types such as int, float, char, and double.",
        content: (
          <pre>
            <code className="language-cpp">{`int a = 10;\nfloat b = 3.14f;\nchar c = 'A';\ndouble d = 9.81;`}</code>
          </pre>
        ),
      },
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using casting.",
        content: (
          <pre>
            <code className="language-cpp">{`int x = 10;\ndouble y = static_cast<double>(x);\nchar c = static_cast<char>(65);`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use cin and cout for user interaction.",
        content: (
          <pre>
            <code className="language-cpp">{`std::string name;\nstd::cout << "Enter your name: ";\nstd::cin >> name;\nstd::cout << "Hello, " << name << std::endl;`}</code>
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
        description: "Make decisions using if, else if, and else.",
        content: (
          <pre>
            <code className="language-cpp">{`int x = 10;\nif (x > 5) {\n    std::cout << "Greater than 5" << std::endl;\n} else if (x == 5) {\n    std::cout << "Equal to 5" << std::endl;\n} else {\n    std::cout << "Less than 5" << std::endl;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-cpp">{`for (int i = 0; i < 5; i++) {\n    std::cout << i << std::endl;\n}\n\nint count = 0;\nwhile (count < 5) {\n    std::cout << count << std::endl;\n    count++;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-cpp">{`for (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        continue;\n    }\n    std::cout << i << std::endl;\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    subtopics: [
      {
        id: "defining-functions",
        title: "Defining Functions",
        description: "Learn how to define and call functions in C++.",
        content: (
          <pre>
            <code className="language-cpp">{`#include <iostream>\n\nvoid greet(const std::string& name) {\n    std::cout << "Hello, " << name << std::endl;\n}\n\ngreet("Alice");`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Function Arguments",
        description: "Understand how to pass arguments to functions.",
        content: (
          <pre>
            <code className="language-cpp">{`int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(5, 3);\nstd::cout << result << std::endl;`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "collections",
    title: "Arrays and Structs",
    subtopics: [
      {
        id: "arrays",
        title: "Arrays",
        description: "Use arrays to store sequences of elements.",
        content: (
          <pre>
            <code className="language-cpp">{`int nums[] = {1, 2, 3, 4};\nstd::cout << nums[2] << std::endl;`}</code>
          </pre>
        ),
      },
      {
        id: "structs",
        title: "Structs",
        description: "Use structs to group different data types.",
        content: (
          <pre>
            <code className="language-cpp">{`struct Person {\n    std::string name;\n    int age;\n};\n\nPerson p = {"Alice", 25};\nstd::cout << p.name << " is " << p.age << " years old." << std::endl;`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "errors",
    title: "Error Handling",
    subtopics: [
      {
        id: "return-codes",
        title: "Return Codes",
        description: "Use return values to indicate errors.",
        content: (
          <pre>
            <code className="language-cpp">{`bool divide(int a, int b, int& result) {\n    if (b == 0) return false;\n    result = a / b;\n    return true;\n}\n\nint r;\nif (divide(10, 0, r)) {\n    std::cout << "Result: " << r << std::endl;\n} else {\n    std::cout << "Division by zero!" << std::endl;\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "files",
    title: "File Handling",
    subtopics: [
      {
        id: "read-file",
        title: "Reading Files",
        description: "Read text from files using ifstream.",
        content: (
          <pre>
            <code className="language-cpp">{`#include <fstream>\n#include <iostream>\n\nstd::ifstream file("file.txt");\nstd::string line;\nif (file.is_open()) {\n    std::getline(file, line);\n    std::cout << line << std::endl;\n    file.close();\n}`}</code>
          </pre>
        ),
      },
      {
        id: "write-file",
        title: "Writing Files",
        description: "Write text to files using ofstream.",
        content: (
          <pre>
            <code className="language-cpp">{`#include <fstream>\n\nstd::ofstream file("file.txt");\nif (file.is_open()) {\n    file << "Hello, file!" << std::endl;\n    file.close();\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Basics",
    subtopics: [
      {
        id: "classes-objects",
        title: "Classes and Objects",
        description: "Learn how to use classes to encapsulate data and behavior.",
        content: (
          <pre>
            <code className="language-cpp">{`class Car {\npublic:\n    std::string brand;\n    int speed;\n\n    void drive() {\n        std::cout << "Driving " << brand << " at " << speed << " km/h" << std::endl;\n    }\n};\n\nCar myCar;\nmyCar.brand = "Toyota";\nmyCar.speed = 80;\nmyCar.drive();`}</code>
          </pre>
        ),
      },
    ],
  },
];


const CppTutorial = () => {
  const [activeSection, setActiveSection] = useState(tutorialData[0]);
  const [activeSubtopic, setActiveSubtopic] = useState(tutorialData[0].subtopics[0]);

  useEffect(() => {
    Prism.highlightAll();
  }, [activeSubtopic]);

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-4">
      {/* Glow bg effect */}
      <div className=" w-[500px] h-[400px] bg-sky-500 opacity-20 rounded-full blur-3xl flex absolute justify-center item-center z-0"></div>
      {/* Sidebar */}
      <aside className="z-10 w-full lg:w-[450px] max-h-[400px] overflow-auto p-4 bg-base-100 rounded-md  shadow-md mb-6 lg:mb-0 lg:mr-6">
        <div className="flex items-center gap-3 border-b border-gray-600 pb-4 mb-4">
          <PiFileCppFill  className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">C++ Tutorial</h2>
        </div>

        <ul className="space-y-2 text-sm">
          {tutorialData.map((section) => (
            <li key={section.id}>
              <button
  onClick={() => {
    setActiveSection(section);
    setActiveSubtopic(section.subtopics[0]);
  }}
  className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${
    activeSection.id === section.id
      ? "bg-sky-900 text-white"
      : "text-gray-400 hover:text-gray-200 hover:bg-gray-800"
  }`}
>
  <FaChevronRight
    className={`mr-2 transition-transform duration-300 ${
      activeSection.id === section.id ? "rotate-90" : ""
    }`}
  />
  {section.title}
</button>

              {/* Render subtopics if this section is active */}
              {activeSection.id === section.id && (
                <ul className="pl-6 mt-2 space-y-1">
                  {section.subtopics.map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => setActiveSubtopic(sub)}
                        className={`text-sm w-full text-left px-2 py-1 rounded-md transition-colors ${activeSubtopic.id === sub.id
                            ? "bg-sky-700 text-white"
                            : "text-gray-400 hover:bg-gray-700"
                          }`}
                      >
                        {sub.title}
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

      </aside>

      {/* Main Content */}
      <main className="z-10 flex-grow w-full p-4 overflow-y-auto bg-base-100 rounded-md shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold text-sky-500">{activeSubtopic.title}</h3>
        <p className="my-4 md:text-lg">{activeSubtopic.description}</p>
        <div className="prose prose-invert max-w-none">{activeSubtopic.content}</div>
      </main>
    </div>
  );
};


export default CppTutorial;