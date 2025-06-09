import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { IoLogoJavascript } from "react-icons/io5";
import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
SyntaxHighlighter.registerLanguage('javascript', javascript);

const tutorialData = [
  {
    id: 'basics',
    title: 'JavaScript Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Learn how to declare and use variables in JavaScript.',
        content: `let name = "Alice";
let age = 25;
console.log("Name:", name, "Age:", age);`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Understand JavaScript data types like number, string, boolean, object, and undefined.',
        content: `let num = 42;
let str = "JavaScript";
let isTrue = true;
let obj = { key: "value" };
let undef;
console.log(typeof num, typeof str, typeof isTrue, typeof obj, typeof undef);`,
      },
      {
        id: 'constants',
        title: 'Constants',
        description: 'Learn how to declare constants using const.',
        content: `const PI = 3.14159;
console.log(PI); // Outputs: 3.14159`,
      },
    ],
  },
  {
    id: 'control-structures',
    title: 'Control Structures',
    subtopics: [
      {
        id: 'if-else',
        title: 'If-Else Statements',
        description: 'Use if-else for conditional logic.',
        content: `let age = 20;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}`,
      },
      {
        id: 'switch',
        title: 'Switch Statements',
        description: 'Use switch for multiple condition checks.',
        content: `let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Start of the week.");
    break;
  case "Friday":
    console.log("End of the week.");
    break;
  default:
    console.log("Midweek day.");
}`,
      },
    ],
  },
  {
    id: 'loops',
    title: 'Loops',
    subtopics: [
      {
        id: 'for-loop',
        title: 'For Loop',
        description: 'Use for loop for iterations.',
        content: `for (let i = 1; i <= 5; i++) {
  console.log("Number", i);
}`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Use while loop for condition-based iteration.',
        content: `let i = 1;
while (i <= 5) {
  console.log("Number", i);
  i++;
}`,
      },
      {
        id: 'for-of-loop',
        title: 'For...of Loop',
        description: 'Loop over iterable objects using for...of.',
        content: `const fruits = ["Apple", "Banana", "Cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}`,
      },
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    subtopics: [
      {
        id: 'basic-arrays',
        title: 'Basic Arrays',
        description: 'Learn about JavaScript arrays.',
        content: `const colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // Outputs: Red`,
      },
      {
        id: 'array-methods',
        title: 'Array Methods',
        description: 'Explore methods like push, pop, map, and filter.',
        content: `let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8]`,
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'basic-functions',
        title: 'Basic Functions',
        description: 'Declare and call functions.',
        content: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));`,
      },
      {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        description: 'Use ES6 arrow function syntax.',
        content: `const add = (a, b) => a + b;
console.log(add(3, 4));`,
      },
      {
        id: 'scope',
        title: 'Variable Scope',
        description: 'Understand local and global variable scopes.',
        content: `let x = 10;
function test() {
  let x = 5;
  console.log("Inside function:", x);
}
test();
console.log("Outside function:", x);`,
      },
    ],
  },
  {
    id: 'object-oriented',
    title: 'Object-Oriented Programming (OOP)',
    subtopics: [
      {
        id: 'objects',
        title: 'Objects',
        description: 'Define and access JavaScript objects.',
        content: `const car = {
  make: "Toyota",
  model: "Corolla",
  display() {
    console.log("Make:", this.make, "Model:", this.model);
  }
};
car.display();`,
      },
      {
        id: 'classes',
        title: 'Classes and Inheritance',
        description: 'Use ES6 classes and inheritance.',
        content: `class Vehicle {
  constructor(make) {
    this.make = make;
  }
}
class Car extends Vehicle {
  constructor(make, model) {
    super(make);
    this.model = model;
  }
  display() {
    console.log("Make:", this.make, "Model:", this.model);
  }
}
const myCar = new Car("Toyota", "Corolla");
myCar.display();`,
      },
    ],
  },
];

const JavaScriptTutorial = () => {
  const [activeSection, setActiveSection] = useState(tutorialData[0]);
  const [activeSubtopic, setActiveSubtopic] = useState(tutorialData[0].subtopics[0]);
  const [copied, setCopied] = useState(false); // Track copied status

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(activeSubtopic.content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset to "Copy Code" after 2 seconds
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-4">
      {/* Sidebar */}
      <aside className="z-10 w-full lg:w-[450px] max-h-[400px] overflow-auto p-4 bg-base-100 rounded-md shadow-md mb-6 lg:mb-0 lg:mr-6">
        <div className="flex items-center gap-3 border-b border-gray-600 pb-4 mb-4">
          <IoLogoJavascript className="text-3xl text-sky-500" />
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
                    ? 'bg-sky-900 text-white'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                }`}
              >
                <FaChevronRight
                  className={`mr-2 transition-transform duration-300 ${
                    activeSection.id === section.id ? 'rotate-90' : ''
                  }`}
                />
                {section.title}
              </button>
              {activeSection.id === section.id && (
                <ul className="pl-6 mt-2 space-y-1">
                  {section.subtopics.map((sub) => (
                    <li key={sub.id}>
                      <button
                        onClick={() => setActiveSubtopic(sub)}
                        className={`text-sm w-full text-left px-2 py-1 rounded-md transition-colors ${
                          activeSubtopic.id === sub.id
                            ? 'bg-sky-700 text-white'
                            : 'text-gray-400 hover:bg-gray-700'
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

      {/* Main content */}
      <main className="z-10 flex-grow w-full p-4 overflow-y-auto bg-base-100 rounded-md shadow-md">
        <h3 className="text-2xl md:text-3xl font-bold text-sky-500">{activeSubtopic.title}</h3>
        <p className="my-4 md:text-lg">{activeSubtopic.description}</p>
        
        {/* Copy Button */}
        <div className="flex justify-end">
          <button
            onClick={handleCopyToClipboard}
            className="text-sm p-2 bg-sky-500 text-white flex items-center gap-2 hover:bg-sky-600"
          >
            {copied ? (
              <>
                <FaCheck /> Copied!
              </>
            ) : (
              <>
                <FaClipboard /> Copy Code
              </>
            )}
          </button>
        </div>
        
        {/* SyntaxHighlighter */}
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default JavaScriptTutorial;
