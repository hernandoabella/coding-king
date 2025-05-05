import React, { useState } from 'react';
import { FaChevronRight, FaPhp, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'Python Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Learn how to declare and use variables in Python.',
        content: `name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Understand Python\'s data types like int, float, string, and boolean.',
        content: `integer = 10
floating = 3.14
string = "Python"
boolean = True
print(type(integer), type(floating), type(string), type(boolean))`,
      },
      {
        id: 'constants',
        title: 'Constants',
        description: 'Learn how to define constants in Python (by convention).',
        content: `PI = 3.14159  # Python does not enforce constants
print(PI)`,
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
        description: 'Learn how to use conditional statements in Python.',
        content: `age = 20
if age >= 18:
    print("You are an adult.")
else:
    print("You are a minor.")`,
      },
      {
        id: 'match-case',
        title: 'Match-Case (Switch Alternative)',
        description: 'Understand how to use match-case in Python 3.10+.',
        content: `day = "Monday"
match day:
    case "Monday":
        print("Start of the week.")
    case "Friday":
        print("End of the week.")
    case _:
        print("Midweek day.")`,
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
        description: 'Learn how to use a for loop in Python.',
        content: `for i in range(1, 6):
    print(f"Number {i}")`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Understand how to use while loops in Python.',
        content: `i = 1
while i <= 5:
    print(f"Number {i}")
    i += 1`,
      },
      {
        id: 'for-each-loop',
        title: 'For-Each Loop',
        description: 'Loop over lists with for-in.',
        content: `fruits = ["Apple", "Banana", "Cherry"]
for fruit in fruits:
    print(fruit)`,
      },
    ],
  },
  {
    id: 'lists',
    title: 'Lists (Arrays)',
    subtopics: [
      {
        id: 'indexed-lists',
        title: 'Indexed Lists',
        description: 'Learn about indexed lists in Python.',
        content: `colors = ["Red", "Green", "Blue"]
print(colors[0])  # Outputs: Red`,
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        description: 'Understand dictionaries in Python.',
        content: `person = {"name": "Alice", "age": 25}
print(person["name"])  # Outputs: Alice`,
      },
      {
        id: 'nested-structures',
        title: 'Nested Data Structures',
        description: 'Learn about nested lists and dictionaries in Python.',
        content: `contacts = [
    {"name": "Alice", "email": "alice@example.com"},
    {"name": "Bob", "email": "bob@example.com"}
]
print(contacts[0]["name"])  # Outputs: Alice`,
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
        description: 'Learn how to create and use functions in Python.',
        content: `def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Outputs: Hello, Alice!`,
      },
      {
        id: 'return-values',
        title: 'Returning Values',
        description: 'Understand how to return values from functions.',
        content: `def add(a, b):
    return a + b

print(add(3, 4))  # Outputs: 7`,
      },
      {
        id: 'variable-scope',
        title: 'Variable Scope',
        description: 'Learn about variable scope in Python.',
        content: `x = 10

def test():
    global x
    print(x)  # Outputs: 10

test()`,
      },
    ],
  },
  {
    id: 'object-oriented',
    title: 'Object-Oriented Programming (OOP)',
    subtopics: [
      {
        id: 'classes-objects',
        title: 'Classes and Objects',
        description: 'Learn how to create classes and objects in Python.',
        content: `class Car:
    def __init__(self, make, model):
        self.make = make
        self.model = model

    def display(self):
        print(f"Make: {self.make}, Model: {self.model}")

car = Car("Toyota", "Corolla")
car.display()  # Outputs: Make: Toyota, Model: Corolla`,
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Understand inheritance in Python.',
        content: `class Vehicle:
    def __init__(self, make):
        self.make = make

class Car(Vehicle):
    def __init__(self, make, model):
        super().__init__(make)
        self.model = model

    def display(self):
        print(f"Make: {self.make}, Model: {self.model}")

car = Car("Toyota", "Corolla")
car.display()  # Outputs: Make: Toyota, Model: Corolla`,
      },
    ],
  },
];

const PHPTutorial = () => {
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
          <FaPhp className="text-3xl text-sky-500" />
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
          language="php"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default PHPTutorial;
