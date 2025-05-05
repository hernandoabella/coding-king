import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";
import {  FaChevronRight } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

const tutorialData = [
  {
    id: "basics",
    title: "JavaScript Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in JavaScript.",
        content: (
          <pre>
            <code className="language-javascript">{`let x = 5;\nconst y = "Hello";\nconsole.log(x, y);`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand JavaScript's built-in data types such as number, string, boolean, and more.",
        content: (
          <pre>
            <code className="language-javascript">{`let a = 10;        // number\nlet b = "Hello";   // string\nlet c = true;      // boolean`}</code>
          </pre>
        ),
      },
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using JavaScript type casting.",
        content: (
          <pre>
            <code className="language-javascript">{`let x = Number("10");\nlet y = String(100);\nlet z = Boolean(1);`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use prompt() and console.log() to interact with users.",
        content: (
          <pre>
            <code className="language-javascript">{`let name = prompt("Enter your name:");\nconsole.log("Hello, " + name);`}</code>
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
            <code className="language-javascript">{`let x = 10;\nif (x > 5) {\n  console.log("Greater than 5");\n} else if (x === 5) {\n  console.log("Equal to 5");\n} else {\n  console.log("Less than 5");\n}`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-javascript">{`for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  count++;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-javascript">{`for (let i = 0; i < 5; i++) {\n  if (i === 3) {\n    continue;\n  }\n  console.log(i);\n}`}</code>
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
        description: "Learn how to define and call functions in JavaScript.",
        content: (
          <pre>
            <code className="language-javascript">{`function greet(name) {\n  return "Hello, " + name;\n}\n\nconsole.log(greet("Alice"));`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Function Arguments",
        description: "Understand parameters and return values in functions.",
        content: (
          <pre>
            <code className="language-javascript">{`function greet(name = "Guest") {\n  console.log("Hello " + name);\n}\n\ngreet();\ngreet("Ana");`}</code>
          </pre>
        ),
      },
      {
        id: "arrow-functions",
        title: "Arrow Functions",
        description: "Use shorter syntax to define functions with arrow functions.",
        content: (
          <pre>
            <code className="language-javascript">{`const square = (x) => x * x;\nconsole.log(square(5));`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "collections",
    title: "Data Collections",
    subtopics: [
      {
        id: "arrays",
        title: "Arrays",
        description: "Use arrays to store sequences of items.",
        content: (
          <pre>
            <code className="language-javascript">{`let fruits = ["apple", "banana", "cherry"];\nfruits.push("mango");\nconsole.log(fruits[1]);`}</code>
          </pre>
        ),
      },
      {
        id: "objects",
        title: "Objects",
        description: "Use objects to store key-value pairs.",
        content: (
          <pre>
            <code className="language-javascript">{`let person = { name: "Alice", age: 25 };\nconsole.log(person.name);`}</code>
          </pre>
        ),
      },
      {
        id: "sets",
        title: "Sets",
        description: "Sets store unique values in JavaScript.",
        content: (
          <pre>
            <code className="language-javascript">{`let nums = new Set([1, 2, 3, 3, 4]);\nconsole.log(nums);`}</code>
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
        id: "try-catch",
        title: "Try / Catch",
        description: "Handle runtime errors using try/catch blocks.",
        content: (
          <pre>
            <code className="language-javascript">{`try {\n  let x = 10 / 0;\n} catch (e) {\n  console.log("Error: " + e.message);\n}`}</code>
          </pre>
        ),
      },
      {
        id: "finally",
        title: "Finally Block",
        description: "Ensure code runs no matter what using finally.",
        content: (
          <pre>
            <code className="language-javascript">{`try {\n  console.log("Try block");\n} finally {\n  console.log("Always runs");\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    subtopics: [
      {
        id: "classes",
        title: "Classes & Objects",
        description: "Learn how to define classes and create objects.",
        content: (
          <pre>
            <code className="language-javascript">{`class Person {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nlet p = new Person("Alice");\nconsole.log(p.name);`}</code>
          </pre>
        ),
      },
      {
        id: "inheritance",
        title: "Inheritance",
        description: "Extend a class using inheritance.",
        content: (
          <pre>
            <code className="language-javascript">{`class Animal {\n  speak() {\n    console.log("Sound");\n  }\n}\n\nclass Dog extends Animal {\n  speak() {\n    console.log("Woof");\n  }\n}\n\nlet d = new Dog();\nd.speak();`}</code>
          </pre>
        ),
      },
    ],
  },
];


const JavaScriptTutorial = () => {
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
          <SiJavascript className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">JavaScript Tutorial</h2>
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


export default JavaScriptTutorial;