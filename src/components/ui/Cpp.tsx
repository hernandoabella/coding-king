import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { SiC, SiCplusplus } from "react-icons/si";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'C++ Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first C++ program.',
        content: `#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declaring variables of different types.',
        content: `#include <iostream>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';

    std::cout << "Age: " << age << std::endl;
    std::cout << "Height: " << height << std::endl;
    std::cout << "Grade: " << grade << std::endl;

    return 0;
}`,
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If-Else Statements',
        description: 'Make decisions with if-else.',
        content: `#include <iostream>

int main() {
    int score = 70;

    if (score >= 90) {
        std::cout << "Excellent" << std::endl;
    } else if (score >= 60) {
        std::cout << "Passed" << std::endl;
    } else {
        std::cout << "Failed" << std::endl;
    }

    return 0;
}`,
      },
      {
        id: 'switch',
        title: 'Switch Statement',
        description: 'Control flow with switch-case.',
        content: `#include <iostream>

int main() {
    int day = 2;

    switch(day) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday" << std::endl;
            break;
        default:
            std::cout << "Other Day" << std::endl;
    }

    return 0;
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
        description: 'Loop using for syntax.',
        content: `#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << "i = " << i << std::endl;
    }

    return 0;
}`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Loop using while.',
        content: `#include <iostream>

int main() {
    int i = 1;
    while (i <= 5) {
        std::cout << "i = " << i << std::endl;
        i++;
    }

    return 0;
}`,
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'function-definition',
        title: 'Defining Functions',
        description: 'Create and call functions.',
        content: `#include <iostream>

void greet(std::string name) {
    std::cout << "Hello, " << name << "!" << std::endl;
}

int main() {
    greet("Alice");
    return 0;
}`,
      },
      {
        id: 'return-value',
        title: 'Functions with Return Values',
        description: 'Returning values from functions.',
        content: `#include <iostream>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    std::cout << "Sum = " << result << std::endl;
    return 0;
}`,
      },
    ],
  },
  {
    id: 'arrays-pointers',
    title: 'Arrays & Pointers',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with arrays in C++.',
        content: `#include <iostream>

int main() {
    int numbers[] = {10, 20, 30};

    for (int i = 0; i < 3; i++) {
        std::cout << numbers[i] << std::endl;
    }

    return 0;
}`,
      },
      {
        id: 'pointers',
        title: 'Pointers',
        description: 'Understanding pointers and memory.',
        content: `#include <iostream>

int main() {
    int num = 10;
    int* p = &num;

    std::cout << "Value: " << *p << std::endl;
    std::cout << "Address: " << p << std::endl;

    return 0;
}`,
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes & Objects',
    subtopics: [
      {
        id: 'classes',
        title: 'Defining Classes',
        description: 'Learn how to create classes and objects.',
        content: `#include <iostream>

class Car {
public:
    std::string make;
    std::string model;

    Car(std::string m, std::string mo) {
        make = m;
        model = mo;
    }

    void display() {
        std::cout << "Make: " << make << ", Model: " << model << std::endl;
    }
};

int main() {
    Car car("Toyota", "Corolla");
    car.display();
    return 0;
}`,
      },
    ],
  },
  {
    id: 'inheritance',
    title: 'Inheritance',
    subtopics: [
      {
        id: 'inheritance-definition',
        title: 'Inheritance in C++',
        description: 'Learn how to use inheritance in C++.',
        content: `#include <iostream>

class Vehicle {
public:
    std::string make;
    Vehicle(std::string m) : make(m) {}
};

class Car : public Vehicle {
public:
    std::string model;
    Car(std::string m, std::string mod) : Vehicle(m), model(mod) {}

    void display() {
        std::cout << "Make: " << make << ", Model: " << model << std::endl;
    }
};

int main() {
    Car car("Toyota", "Corolla");
    car.display();
    return 0;
}`,
      },
    ],
  },
];

const CppTutorial = () => {
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
          <SiCplusplus className="text-3xl text-sky-500" />
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
          language="cpp"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default CppTutorial;
