import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { SiKotlin } from "react-icons/si";
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'Kotlin Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first Kotlin program.',
        content: `fun main() {
    println("Hello, World!")
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declaring variables using val and var.',
        content: `fun main() {
    val name = "Alice" // immutable
    var age = 30       // mutable

    println("\$name is \$age years old")
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
        description: 'Making decisions with if-else.',
        content: `fun main() {
    val score = 85
    if (score >= 90) {
        println("Excellent")
    } else if (score >= 60) {
        println("Passed")
    } else {
        println("Failed")
    }
}`,
      },
      {
        id: 'when-expression',
        title: 'When Expression',
        description: 'An alternative to switch-case.',
        content: `fun main() {
    val day = 3
    val result = when (day) {
        1 -> "Monday"
        2 -> "Tuesday"
        3 -> "Wednesday"
        else -> "Other day"
    }
    println(result)
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
        description: 'Iterate over ranges and collections.',
        content: `fun main() {
    for (i in 1..5) {
        println("Count: \$i")
    }

    val items = listOf("A", "B", "C")
    for (item in items) {
        println(item)
    }
}`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Loop while a condition is true.',
        content: `fun main() {
    var i = 1
    while (i <= 5) {
        println("i = \$i")
        i++
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
        description: 'Basic function syntax.',
        content: `fun greet(name: String): String {
    return "Hello, \$name!"
}

fun main() {
    println(greet("Alice"))
}`,
      },
      {
        id: 'default-arguments',
        title: 'Default & Named Arguments',
        description: 'Functions with default parameter values.',
        content: `fun greet(name: String = "Guest") {
    println("Hello, \$name")
}

fun main() {
    greet()
    greet("Bob")
}`,
      },
    ],
  },
  {
    id: 'classes',
    title: 'Classes and Objects',
    subtopics: [
      {
        id: 'class-definition',
        title: 'Class Definition',
        description: 'Define a class and create objects.',
        content: `class Person(val name: String, var age: Int)

fun main() {
    val p = Person("Alice", 30)
    println("\${p.name} is \${p.age} years old")
}`,
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Extend classes and override methods.',
        content: `open class Animal {
    open fun sound() = "Some sound"
}

class Dog : Animal() {
    override fun sound() = "Bark"
}

fun main() {
    val dog = Dog()
    println(dog.sound())
}`,
      },
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Kotlin',
    subtopics: [
      {
        id: 'data-classes',
        title: 'Data Classes',
        description: 'Concise classes for holding data.',
        content: `data class User(val name: String, val age: Int)

fun main() {
    val user = User("Alice", 30)
    println(user)
}`,
      },
      {
        id: 'nullable-types',
        title: 'Nullable Types & Safe Calls',
        description: 'Handle nulls gracefully in Kotlin.',
        content: `fun main() {
    val name: String? = null
    println(name?.length ?: "Name is null")
}`,
      },
    ],
  },
];


const KotlinTutorial = () => {
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
          <SiKotlin className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Kotlin Tutorial</h2>
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
          language="kotlin"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default KotlinTutorial;
