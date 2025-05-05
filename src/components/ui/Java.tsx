import React, { useState } from 'react';
import { FaChevronRight, FaJava, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



const tutorialData = [
  {
    id: 'basics',
    title: 'Java Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first Java program.',
        content: `public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declare and use different data types.',
        content: `int age = 25;
double price = 19.99;
boolean isAvailable = true;
String name = "Alice";

System.out.println(name + " is " + age + " years old.");`,
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
        description: 'Make decisions using if-else.',
        content: `int score = 85;
if (score >= 90) {
  System.out.println("Excellent");
} else if (score >= 60) {
  System.out.println("Passed");
} else {
  System.out.println("Failed");
}`,
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Use for and while loops.',
        content: `for (int i = 1; i <= 5; i++) {
  System.out.println("Count: " + i);
}

int j = 1;
while (j <= 5) {
  System.out.println("While Count: " + j);
  j++;
}`,
      },
    ],
  },
  {
    id: 'methods',
    title: 'Methods',
    subtopics: [
      {
        id: 'method-declaration',
        title: 'Defining Methods',
        description: 'Create reusable blocks of code.',
        content: `public static int add(int a, int b) {
  return a + b;
}

public static void main(String[] args) {
  System.out.println("Sum: " + add(5, 3));
}`,
      },
      {
        id: 'method-overloading',
        title: 'Method Overloading',
        description: 'Define multiple methods with the same name.',
        content: `public static int add(int a, int b) {
  return a + b;
}

public static double add(double a, double b) {
  return a + b;
}`,
      },
    ],
  },
  {
    id: 'oop',
    title: 'Object-Oriented Programming',
    subtopics: [
      {
        id: 'classes-objects',
        title: 'Classes and Objects',
        description: 'Create and use custom classes.',
        content: `class Person {
  String name;
  int age;

  void greet() {
    System.out.println("Hi, I'm " + name);
  }
}

public class Main {
  public static void main(String[] args) {
    Person p = new Person();
    p.name = "Alice";
    p.age = 30;
    p.greet();
  }
}`,
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Extend a class to create a subclass.',
        content: `class Animal {
  void sound() {
    System.out.println("Animal makes sound");
  }
}

class Dog extends Animal {
  void sound() {
    System.out.println("Dog barks");
  }
}

public class Main {
  public static void main(String[] args) {
    Dog d = new Dog();
    d.sound();
  }
}`,
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Java',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Store multiple values in a single variable.',
        content: `int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
  System.out.println(num);
}`,
      },
      {
        id: 'exceptions',
        title: 'Exception Handling',
        description: 'Handle errors using try-catch blocks.',
        content: `try {
  int result = 10 / 0;
} catch (ArithmeticException e) {
  System.out.println("Error: " + e.getMessage());
}`,
      },
    ],
  },
];

const JavaTutorial = () => {
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
          <FaJava className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Java Tutorial</h2>
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
          language="java"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default JavaTutorial;
