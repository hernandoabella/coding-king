import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'Go Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first Go program.',
        content: `package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declare variables using var or shorthand.',
        content: `package main

import "fmt"

func main() {
    var age int = 25
    name := "Alice"
    price := 19.99
    isAvailable := true

    fmt.Println(name, "is", age, "years old. Price:", price, "Available:", isAvailable)
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
        description: 'Make decisions using if-else.',
        content: `package main

import "fmt"

func main() {
    score := 85
    if score >= 90 {
        fmt.Println("Excellent")
    } else if score >= 60 {
        fmt.Println("Passed")
    } else {
        fmt.Println("Failed")
    }
}`,
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Use for loops for repetition.',
        content: `package main

import "fmt"

func main() {
    for i := 1; i <= 5; i++ {
        fmt.Println("Count:", i)
    }

    j := 1
    for j <= 5 {
        fmt.Println("While-like Count:", j)
        j++
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
        description: 'Create reusable blocks of logic.',
        content: `package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    fmt.Println("Sum:", add(5, 3))
}`,
      },
      {
        id: 'multiple-returns',
        title: 'Multiple Return Values',
        description: 'Return more than one value from a function.',
        content: `package main

import "fmt"

func divide(a, b int) (int, int) {
    return a / b, a % b
}

func main() {
    q, r := divide(10, 3)
    fmt.Println("Quotient:", q, "Remainder:", r)
}`,
      },
    ],
  },
  {
    id: 'structs',
    title: 'Structs and Methods',
    subtopics: [
      {
        id: 'struct-definition',
        title: 'Structs',
        description: 'Create custom types with fields.',
        content: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func main() {
    p := Person{Name: "Alice", Age: 30}
    fmt.Println(p.Name, "is", p.Age, "years old")
}`,
      },
      {
        id: 'methods',
        title: 'Methods on Structs',
        description: 'Define methods for struct types.',
        content: `package main

import "fmt"

type Person struct {
    Name string
}

func (p Person) Greet() {
    fmt.Println("Hi, I'm", p.Name)
}

func main() {
    p := Person{Name: "Alice"}
    p.Greet()
}`,
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Go',
    subtopics: [
      {
        id: 'arrays-slices',
        title: 'Arrays and Slices',
        description: 'Work with collections of values.',
        content: `package main

import "fmt"

func main() {
    arr := [3]int{1, 2, 3}
    slice := []string{"Go", "Rust", "Python"}

    fmt.Println("Array:", arr)
    fmt.Println("Slice:", slice)
}`,
      },
      {
        id: 'error-handling',
        title: 'Error Handling',
        description: 'Use error values to manage failures.',
        content: `package main

import (
    "errors"
    "fmt"
)

func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, errors.New("cannot divide by zero")
    }
    return a / b, nil
}

func main() {
    result, err := divide(10, 0)
    if err != nil {
        fmt.Println("Error:", err)
    } else {
        fmt.Println("Result:", result)
    }
}`,
      },
    ],
  },
];


const GoTutorial = () => {
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
          <FaGolang className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Go Tutorial</h2>
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
          language="go"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default GoTutorial;
