import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiTypescript } from "react-icons/si";

import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
SyntaxHighlighter.registerLanguage('typescript', typescript);

const tutorialData = [
  {
    id: 'basics',
    title: 'TypeScript Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables with Types',
        description: 'Declare variables with type annotations.',
        content: `let name: string = "Alice";
let age: number = 25;
let isStudent: boolean = true;
console.log(\`Name: \${name}, Age: \${age}, Student: \${isStudent}\`);`,
      },
      {
        id: 'type-inference',
        title: 'Type Inference',
        description: 'Let TypeScript automatically infer the variable type.',
        content: `let language = "TypeScript"; // inferred as string
let version = 5.0; // inferred as number`,
      },
    ],
  },
  {
    id: 'types',
    title: 'Working with Types',
    subtopics: [
      {
        id: 'union-types',
        title: 'Union Types',
        description: 'Allow a variable to be more than one type.',
        content: `let id: number | string;
id = 101;
id = "TS101";`,
      },
      {
        id: 'type-aliases',
        title: 'Type Aliases',
        description: 'Create reusable custom types.',
        content: `type User = {
  name: string;
  age: number;
};

const user: User = {
  name: "Bob",
  age: 30,
};`,
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        description: 'Define object structure using interfaces.',
        content: `interface Product {
  name: string;
  price: number;
}

const pen: Product = {
  name: "Ball Pen",
  price: 1.5,
};`,
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'typed-functions',
        title: 'Typed Functions',
        description: 'Define function parameter and return types.',
        content: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
console.log(greet("Alice"));`,
      },
      {
        id: 'optional-params',
        title: 'Optional & Default Parameters',
        description: 'Use optional or default values in parameters.',
        content: `function log(message: string, user?: string) {
  console.log(user ? \`\${user}: \${message}\` : message);
}
log("Task complete.");
log("Task complete.", "Admin");`,
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes & OOP',
    subtopics: [
      {
        id: 'basic-classes',
        title: 'Basic Class',
        description: 'Create and use classes in TypeScript.',
        content: `class Person {
  constructor(public name: string, public age: number) {}

  greet() {
    console.log(\`Hello, my name is \${this.name}.\`);
  }
}

const p = new Person("Alice", 28);
p.greet();`,
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Extend a class using inheritance.',
        content: `class Animal {
  constructor(public name: string) {}

  move() {
    console.log(\`\${this.name} is moving.\`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof!");
  }
}

const d = new Dog("Rex");
d.move();
d.bark();`,
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced TypeScript',
    subtopics: [
      {
        id: 'generics',
        title: 'Generics',
        description: 'Write reusable functions and types using generics.',
        content: `function identity<T>(value: T): T {
  return value;
}

console.log(identity<number>(123));
console.log(identity<string>("hello"));`,
      },
      {
        id: 'enums',
        title: 'Enums',
        description: 'Define named constants using enums.',
        content: `enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Left;
console.log(dir);`,
      },
    ],
  },
];


const TypeScriptTutorial = () => {
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
          <SiTypescript className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">TypeScript Tutorial</h2>
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
          language="typescript"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default TypeScriptTutorial;
