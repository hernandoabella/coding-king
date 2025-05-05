import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-c";
import "prismjs/themes/prism-tomorrow.css";
import {  FaChevronRight } from "react-icons/fa";
import { SiC } from "react-icons/si";


const tutorialData = [
  {
    id: "basics",
    title: "C Basics",
    subtopics: [
      {
        id: "variables",
        title: "Variables",
        description: "Learn how to declare and use variables in C.",
        content: (
          <pre>
            <code className="language-c">{`int x = 5;\nchar y[] = "Hello";\nprintf("%d %s\\n", x, y);`}</code>
          </pre>
        ),
      },
      {
        id: "data-types",
        title: "Data Types",
        description: "Understand C's built-in data types such as int, float, char, and double.",
        content: (
          <pre>
            <code className="language-c">{`int a = 10;\nfloat b = 3.14;\nchar c = 'A';\ndouble d = 9.81;`}</code>
          </pre>
        ),
      },
      {
        id: "type-casting",
        title: "Type Casting",
        description: "Convert between data types using casting.",
        content: (
          <pre>
            <code className="language-c">{`int x = 10;\ndouble y = (double)x;\nchar c = (char)65;`}</code>
          </pre>
        ),
      },
      {
        id: "input-output",
        title: "User Input & Output",
        description: "Use scanf and printf for user interaction.",
        content: (
          <pre>
            <code className="language-c">{`char name[50];\nprintf("Enter your name: ");\nscanf("%s", name);\nprintf("Hello, %s\\n", name);`}</code>
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
            <code className="language-c">{`int x = 10;\nif (x > 5) {\n    printf("Greater than 5\\n");\n} else if (x == 5) {\n    printf("Equal to 5\\n");\n} else {\n    printf("Less than 5\\n");\n}`}</code>
          </pre>
        ),
      },
      {
        id: "loops",
        title: "Loops",
        description: "Repeat actions using for and while loops.",
        content: (
          <pre>
            <code className="language-c">{`for (int i = 0; i < 5; i++) {\n    printf("%d\\n", i);\n}\n\nint count = 0;\nwhile (count < 5) {\n    printf("%d\\n", count);\n    count++;\n}`}</code>
          </pre>
        ),
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        description: "Control the flow of loops using break and continue.",
        content: (
          <pre>
            <code className="language-c">{`for (int i = 0; i < 5; i++) {\n    if (i == 3) {\n        continue;\n    }\n    printf("%d\\n", i);\n}`}</code>
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
        description: "Learn how to define and call functions in C.",
        content: (
          <pre>
            <code className="language-c">{`#include <stdio.h>\n\nvoid greet(char name[]) {\n    printf("Hello, %s\\n", name);\n}\n\ngreet("Alice");`}</code>
          </pre>
        ),
      },
      {
        id: "arguments",
        title: "Function Arguments",
        description: "Understand how to pass arguments to functions.",
        content: (
          <pre>
            <code className="language-c">{`int add(int a, int b) {\n    return a + b;\n}\n\nint result = add(5, 3);\nprintf("%d\\n", result);`}</code>
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
            <code className="language-c">{`int nums[] = {1, 2, 3, 4};\nprintf("%d\\n", nums[2]);`}</code>
          </pre>
        ),
      },
      {
        id: "structs",
        title: "Structs",
        description: "Use structs to group different data types.",
        content: (
          <pre>
            <code className="language-c">{`struct Person {\n    char name[20];\n    int age;\n};\n\nstruct Person p = {"Alice", 25};\nprintf("%s is %d years old.\\n", p.name, p.age);`}</code>
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
            <code className="language-c">{`int divide(int a, int b, int *result) {\n    if (b == 0) return 0;\n    *result = a / b;\n    return 1;\n}\n\nint r;\nif (divide(10, 0, &r)) {\n    printf("Result: %d\\n", r);\n} else {\n    printf("Division by zero!\\n");\n}`}</code>
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
        description: "Read text from files using fopen and fgets.",
        content: (
          <pre>
            <code className="language-c">{`FILE *file = fopen("file.txt", "r");\nchar line[100];\nif (file) {\n    fgets(line, sizeof(line), file);\n    printf("%s", line);\n    fclose(file);\n}`}</code>
          </pre>
        ),
      },
      {
        id: "write-file",
        title: "Writing Files",
        description: "Write text to files using fopen and fprintf.",
        content: (
          <pre>
            <code className="language-c">{`FILE *file = fopen("file.txt", "w");\nif (file) {\n    fprintf(file, "Hello, file!\\n");\n    fclose(file);\n}`}</code>
          </pre>
        ),
      },
    ],
  },
  {
    id: "oop",
    title: "Struct-Based Design",
    subtopics: [
      {
        id: "structs-objects",
        title: "Structs as Objects",
        description: "Simulate object-oriented design using structs and functions.",
        content: (
          <pre>
            <code className="language-c">{`struct Car {\n    char brand[20];\n    int speed;\n};\n\nvoid drive(struct Car c) {\n    printf("Driving %s at %d km/h\\n", c.brand, c.speed);\n}\n\nstruct Car myCar = {"Toyota", 80};\ndrive(myCar);`}</code>
          </pre>
        ),
      },
    ],
  },
];



const CTutorial = () => {
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
          <SiC className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">C Tutorial</h2>
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


export default CTutorial;