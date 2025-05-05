import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { SiC, SiCplusplus } from "react-icons/si";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'C# Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first C# program.',
        content: `using System;

class Program {
    static void Main() {
        Console.WriteLine("Hello, World!");
    }
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declaring variables of different types.',
        content: `using System;

class Program {
    static void Main() {
        int age = 25;
        double height = 5.9;
        char grade = 'A';
        string name = "Alice";

        Console.WriteLine($"Name: {name}, Age: {age}, Height: {height}, Grade: {grade}");
    }
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
        content: `using System;

class Program {
    static void Main() {
        int score = 70;

        if (score >= 90) {
            Console.WriteLine("Excellent");
        } else if (score >= 60) {
            Console.WriteLine("Passed");
        } else {
            Console.WriteLine("Failed");
        }
    }
}`,
      },
      {
        id: 'switch',
        title: 'Switch Statement',
        description: 'Control flow with switch-case.',
        content: `using System;

class Program {
    static void Main() {
        int day = 2;

        switch (day) {
            case 1:
                Console.WriteLine("Monday");
                break;
            case 2:
                Console.WriteLine("Tuesday");
                break;
            default:
                Console.WriteLine("Other Day");
        }
    }
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
        content: `using System;

class Program {
    static void Main() {
        for (int i = 1; i <= 5; i++) {
            Console.WriteLine($"i = {i}");
        }
    }
}`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Loop using while.',
        content: `using System;

class Program {
    static void Main() {
        int i = 1;
        while (i <= 5) {
            Console.WriteLine($"i = {i}");
            i++;
        }
    }
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
        content: `using System;

class Program {
    static void Greet(string name) {
        Console.WriteLine($"Hello, {name}!");
    }

    static void Main() {
        Greet("Alice");
    }
}`,
      },
      {
        id: 'return-value',
        title: 'Functions with Return Values',
        description: 'Returning values from functions.',
        content: `using System;

class Program {
    static int Add(int a, int b) {
        return a + b;
    }

    static void Main() {
        int result = Add(5, 3);
        Console.WriteLine($"Sum = {result}");
    }
}`,
      },
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    subtopics: [
      {
        id: 'single-dimensional',
        title: 'Single Dimensional Arrays',
        description: 'Working with single-dimensional arrays.',
        content: `using System;

class Program {
    static void Main() {
        int[] numbers = { 10, 20, 30 };

        foreach (int num in numbers) {
            Console.WriteLine(num);
        }
    }
}`,
      },
      {
        id: 'multi-dimensional',
        title: 'Multi Dimensional Arrays',
        description: 'Working with multi-dimensional arrays.',
        content: `using System;

class Program {
    static void Main() {
        int[,] matrix = { { 1, 2 }, { 3, 4 }, { 5, 6 } };

        for (int i = 0; i < matrix.GetLength(0); i++) {
            for (int j = 0; j < matrix.GetLength(1); j++) {
                Console.Write(matrix[i, j] + " ");
            }
            Console.WriteLine();
        }
    }
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
        content: `using System;

class Car {
    public string Make;
    public string Model;

    public Car(string make, string model) {
        Make = make;
        Model = model;
    }

    public void Display() {
        Console.WriteLine($"Make: {Make}, Model: {Model}");
    }
}

class Program {
    static void Main() {
        Car car = new Car("Toyota", "Corolla");
        car.Display();
    }
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
        title: 'Inheritance in C#',
        description: 'Learn how to use inheritance in C#.',
        content: `using System;

class Vehicle {
    public string Make;
    public Vehicle(string make) {
        Make = make;
    }
}

class Car : Vehicle {
    public string Model;
    public Car(string make, string model) : base(make) {
        Model = model;
    }

    public void Display() {
        Console.WriteLine($"Make: {Make}, Model: {Model}");
    }
}

class Program {
    static void Main() {
        Car car = new Car("Toyota", "Corolla");
        car.Display();
    }
}`,
      },
    ],
  },
];


const CsharpTutorial = () => {
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
          language="csharp"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default CsharpTutorial;
