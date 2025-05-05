import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/themes/prism-tomorrow.css";
import {  FaChevronRight } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";


const tutorialData = [
  {
    id: "basics",
    title: "C# Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in C#.",
        content: (
          <pre>
            <code className="language-csharp">{`int x = 5;\nstring y = "Hello";\nConsole.WriteLine($"{x} {y}");`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand C#'s built-in data types such as int, float, char, and double.",
        content: (
          <pre>
            <code className="language-csharp">{`int a = 10;\nfloat b = 3.14f;\nchar c = 'A';\ndouble d = 9.81;`}</code>
          </pre>
        ),
      },
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using casting.",
        content: (
          <pre>
            <code className="language-csharp">{`int x = 10;\ndouble y = (double)x;\nchar c = (char)65;`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use Console.ReadLine and Console.WriteLine for user interaction.",
        content: (
          <pre>
            <code className="language-csharp">{`Console.Write("Enter your name: ");\nstring name = Console.ReadLine();\nConsole.WriteLine("Hello, " + name);`}</code>
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
            <code className="language-csharp">{`int x = 10;\nif (x > 5) {\n    Console.WriteLine("Greater than 5");\n} else if (x == 5) {\n    Console.WriteLine("Equal to 5");\n} else {\n    Console.WriteLine("Less than 5");\n}`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-csharp">{`for (int i = 0; i < 5; i++) {\n    Console.WriteLine(i);\n}\n\nint count = 0;\nwhile (count < 5) {\n    Console.WriteLine(count);\n    count++;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-csharp">{`for (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        continue;\n    }\n    Console.WriteLine(i);\n}`}</code>
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
        description: "Learn how to define and call functions in C#.",
        content: (
          <pre>
            <code className="language-csharp">{`void Greet(string name) {\n    Console.WriteLine("Hello, " + name);\n}\n\nGreet("Alice");`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Function Arguments",
        description: "Understand how to pass arguments to functions.",
        content: (
          <pre>
            <code className="language-csharp">{`int Add(int a, int b) {\n    return a + b;\n}\n\nint result = Add(5, 3);\nConsole.WriteLine(result);`}</code>
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
            <code className="language-csharp">{`int[] nums = {1, 2, 3, 4};\nConsole.WriteLine(nums[2]);`}</code>
          </pre>
        ),
      },
      {
        id: "structs",
        title: "Structs",
        description: "Use structs to group different data types.",
        content: (
          <pre>
            <code className="language-csharp">{`struct Person {\n    public string Name;\n    public int Age;\n}\n\nPerson p = new Person { Name = "Alice", Age = 25 };\nConsole.WriteLine($"{p.Name} is {p.Age} years old.");`}</code>
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
            <code className="language-csharp">{`bool Divide(int a, int b, out int result) {\n    if (b == 0) {\n        result = 0;\n        return false;\n    }\n    result = a / b;\n    return true;\n}\n\nif (Divide(10, 0, out int r)) {\n    Console.WriteLine("Result: " + r);\n} else {\n    Console.WriteLine("Division by zero!");\n}`}</code>
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
        description: "Read text from files using StreamReader.",
        content: (
          <pre>
            <code className="language-csharp">{`using (StreamReader reader = new StreamReader("file.txt")) {\n    string line = reader.ReadLine();\n    Console.WriteLine(line);\n}`}</code>
          </pre>
        ),
      },
      {
        id: "write-file",
        title: "Writing Files",
        description: "Write text to files using StreamWriter.",
        content: (
          <pre>
            <code className="language-csharp">{`using (StreamWriter writer = new StreamWriter("file.txt")) {\n    writer.WriteLine("Hello, file!");\n}`}</code>
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
            <code className="language-csharp">{`class Car {\n    public string Brand;\n    public int Speed;\n\n    public void Drive() {\n        Console.WriteLine($"Driving {Brand} at {Speed} km/h");\n    }\n}\n\nCar myCar = new Car();\nmyCar.Brand = "Toyota";\nmyCar.Speed = 80;\nmyCar.Drive();`}</code>
          </pre>
        ),
      },
    ],
  },
];



const CsharpTutorial = () => {
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
          <TbBrandCSharp  className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">C# Tutorial</h2>
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


export default CsharpTutorial;