import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";
import { FaPython, FaChevronRight } from "react-icons/fa";

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
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using casting functions.",
        content: (
          <pre>
            <code className="language-python">{`x = int("10")\ny = float("3.14")\nz = str(100)`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use input() and print() to interact with users.",
        content: (
          <pre>
            <code className="language-python">{`name = input("Enter your name: ")\nprint("Hello,", name)`}</code>
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
        description: "Make decisions using if, elif, and else.",
        content: (
          <pre>
            <code className="language-python">{`x = 10\nif x > 5:\n    print("Greater than 5")\nelif x == 5:\n    print("Equal to 5")\nelse:\n    print("Less than 5")`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-python">{`for i in range(5):\n    print(i)\n\ncount = 0\nwhile count < 5:\n    print(count)\n    count += 1`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-python">{`for i in range(5):\n    if i == 3:\n        continue\n    print(i)`}</code>
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
        description: "Learn how to define and call functions in Python.",
        content: (
          <pre>
            <code className="language-python">{`def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Alice"))`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Function Arguments",
        description: "Understand positional, keyword, and default arguments.",
        content: (
          <pre>
            <code className="language-python">{`def greet(name="Guest"):\n    print("Hello", name)\n\ngreet()\ngreet("Ana")`}</code>
          </pre>
        ),
      },
      {
        id: "lambda",
        title: "Lambda Functions",
        description: "Use small anonymous functions with lambda.",
        content: (
          <pre>
            <code className="language-python">{`square = lambda x: x * x\nprint(square(5))`}</code>
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
        id: "lists",
        title: "Lists",
        description: "Use lists to store sequences of items.",
        content: (
          <pre>
            <code className="language-python">{`fruits = ["apple", "banana", "cherry"]\nfruits.append("mango")\nprint(fruits[1])`}</code>
          </pre>
        ),
      },
      {
        id: "dictionaries",
        title: "Dictionaries",
        description: "Use dictionaries to store key-value pairs.",
        content: (
          <pre>
            <code className="language-python">{`person = {"name": "Alice", "age": 25}\nprint(person["name"])`}</code>
          </pre>
        ),
      },
      {
        id: "tuples",
        title: "Tuples",
        description: "Tuples are immutable sequences.",
        content: (
          <pre>
            <code className="language-python">{`coordinates = (10, 20)\nprint(coordinates[0])`}</code>
          </pre>
        ),
      },
      {
        id: "sets",
        title: "Sets",
        description: "Sets store unique elements.",
        content: (
          <pre>
            <code className="language-python">{`nums = {1, 2, 3, 3, 4}\nprint(nums)`}</code>
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
        id: "try-except",
        title: "Try / Except",
        description: "Handle runtime errors using try/except blocks.",
        content: (
          <pre>
            <code className="language-python">{`try:\n    x = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero.")`}</code>
          </pre>
        ),
      },
      {
        id: "finally",
        title: "Finally Block",
        description: "Run code no matter what using finally.",
        content: (
          <pre>
            <code className="language-python">{`try:\n    print("Try block")\nfinally:\n    print("Always runs")`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "modules",
    title: "Modules & Packages",
    subtopics: [
      {
        id: "import",
        title: "Importing Modules",
        description: "Use external or built-in modules in your project.",
        content: (
          <pre>
            <code className="language-python">{`import math\nprint(math.sqrt(16))`}</code>
          </pre>
        ),
      },
      {
        id: "custom-modules",
        title: "Custom Modules",
        description: "Create your own reusable Python modules.",
        content: (
          <pre>
            <code className="language-python">{`# utils.py\ndef greet(name):\n    return f"Hello {name}"\n\n# main.py\nimport utils\nprint(utils.greet("Ana"))`}</code>
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
        description: "Read text from files using open().",
        content: (
          <pre>
            <code className="language-python">{`with open("file.txt", "r") as file:\n    content = file.read()\n    print(content)`}</code>
          </pre>
        ),
      },
      {
        id: "write-file",
        title: "Writing Files",
        description: "Write text to a file using write().",
        content: (
          <pre>
            <code className="language-python">{`with open("file.txt", "w") as file:\n    file.write("Hello, file!")`}</code>
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
        description: "Create classes and instantiate objects.",
        content: (
          <pre>
            <code className="language-python">{`class Person:\n    def __init__(self, name):\n        self.name = name\n\np = Person("Alice")\nprint(p.name)`}</code>
          </pre>
        ),
      },
      {
        id: "inheritance",
        title: "Inheritance",
        description: "Extend one class from another using inheritance.",
        content: (
          <pre>
            <code className="language-python">{`class Animal:\n    def speak(self):\n        print("Sound")\n\nclass Dog(Animal):\n    def speak(self):\n        print("Woof")\n\nd = Dog()\nd.speak()`}</code>
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
    <div className="flex flex-col lg:flex-row justify-center items-start mt-10 px-4">
      {/* Glow bg effect */}
      <div className=" w-[500px] h-[400px] bg-sky-500 opacity-20 rounded-full blur-3xl flex absolute justify-center item-center z-0"></div>
      {/* Sidebar */}
      <aside className="z-10 w-full lg:w-[420px] max-h-[400px] overflow-auto p-4 bg-base-100 rounded-md  shadow-md mb-6 lg:mb-0 lg:mr-6">
        <div className="flex items-center gap-3 border-b border-gray-600 pb-4 mb-4">
          <FaPython className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Python Tutorial</h2>
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


export default PythonTutorial;