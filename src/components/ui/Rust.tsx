import React, { useState } from 'react';
import { FaRust, FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
    {
      id: 'basics',
      title: 'Rust Basics',
      subtopics: [
        {
          id: 'hello-world',
          title: 'Hello World',
          description: 'Your first Rust program.',
          content: `fn main() {
      println!("Hello, World!");
  }`,
        },
        {
          id: 'variables',
          title: 'Variables & Data Types',
          description: 'Declaring variables and understanding data types in Rust.',
          content: `fn main() {
      let name = "Alice";
      let age = 25;
      let height = 5.9;
  
      println!("Name: {}, Age: {}, Height: {}", name, age, height);
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
          description: 'Using if-else for conditional logic.',
          content: `fn main() {
      let score = 70;
  
      if score >= 90 {
          println!("Excellent");
      } else if score >= 60 {
          println!("Passed");
      } else {
          println!("Failed");
      }
  }`,
        },
        {
          id: 'match',
          title: 'Match Statement',
          description: 'Control flow with the match statement.',
          content: `fn main() {
      let day = 2;
  
      match day {
          1 => println!("Monday"),
          2 => println!("Tuesday"),
          _ => println!("Other Day"),
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
          description: 'Using a for loop for iteration.',
          content: `fn main() {
      for i in 1..6 {
          println!("i = {}", i);
      }
  }`,
        },
        {
          id: 'while-loop',
          title: 'While Loop',
          description: 'Using a while loop for iteration.',
          content: `fn main() {
      let mut i = 1;
      while i <= 5 {
          println!("i = {}", i);
          i += 1;
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
          description: 'Creating and calling functions.',
          content: `fn greet(name: &str) {
      println!("Hello, {}!", name);
  }
  
  fn main() {
      greet("Alice");
  }`,
        },
        {
          id: 'return-values',
          title: 'Functions with Return Values',
          description: 'Returning values from functions.',
          content: `fn add(a: i32, b: i32) -> i32 {
      a + b
  }
  
  fn main() {
      let result = add(3, 4);
      println!("Sum = {}", result);
  }`,
        },
      ],
    },
    {
      id: 'ownership',
      title: 'Ownership',
      subtopics: [
        {
          id: 'ownership-rules',
          title: 'Ownership Rules',
          description: 'Rust ownership system and rules.',
          content: `fn main() {
      let s1 = String::from("Hello");
  
      // Ownership of s1 is transferred to s2
      let s2 = s1;
  
      // println!("{}", s1); // This will cause a compile-time error since s1 is no longer valid
      println!("{}", s2);
  }`,
        },
      ],
    },
    {
      id: 'structs',
      title: 'Structs',
      subtopics: [
        {
          id: 'struct-definition',
          title: 'Defining Structs',
          description: 'Creating and using structs in Rust.',
          content: `struct Car {
      make: String,
      model: String,
  }
  
  fn main() {
      let car = Car {
          make: String::from("Toyota"),
          model: String::from("Corolla"),
      };
  
      println!("Car: {} {}", car.make, car.model);
  }`,
        },
      ],
    },
    {
      id: 'enums',
      title: 'Enums',
      subtopics: [
        {
          id: 'enum-definition',
          title: 'Defining Enums',
          description: 'Creating and using enums.',
          content: `enum Direction {
      Up,
      Down,
      Left,
      Right,
  }
  
  fn main() {
      let direction = Direction::Up;
  
      match direction {
          Direction::Up => println!("Going up!"),
          Direction::Down => println!("Going down!"),
          _ => println!("Going sideways!"),
      }
  }`,
        },
      ],
    },
  ];
  

const RustTutorial = () => {
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
          <FaRust className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Rust Tutorial</h2>
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
          language="rust"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default RustTutorial;
