import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiSwift } from "react-icons/si";

const tutorialData = [
    {
        id: 'basics',
        title: 'Swift Basics',
        subtopics: [
            {
                id: 'hello-world',
                title: 'Hello World',
                description: 'Your first Swift program.',
                content: `import Foundation

print("Hello, World!")`
            },
            {
                id: 'variables',
                title: 'Variables & Data Types',
                description: 'Understanding variables and basic data types in Swift.',
                content: `import Foundation

let name = "Alice"
let age = 25
let height = 5.9

print("Name: \(name)")
print("Age: \(age)")
print("Height: \(height)")`
            }
        ]
    },
    {
        id: 'control-flow',
        title: 'Control Flow',
        subtopics: [
            {
                id: 'if-else',
                title: 'If-Else Statements',
                description: 'Using if-else for conditional logic.',
                content: `import Foundation

let age = 20

if age >= 18 {
    print("Adult")
} else {
    print("Minor")
}`
            },
            {
                id: 'switch',
                title: 'Switch Statements',
                description: 'Using switch for multiple conditions.',
                content: `import Foundation

let day = "Monday"

switch day {
case "Monday":
    print("Start of the week")
case "Friday":
    print("End of the week")
default:
    print("Midweek day")
}`
            }
        ]
    },
    {
        id: 'loops',
        title: 'Loops',
        subtopics: [
            {
                id: 'for-loop',
                title: 'For Loop',
                description: 'Using a for loop to iterate over a range.',
                content: `import Foundation

for i in 1...5 {
    print("Number \(i)")
}`
            },
            {
                id: 'while-loop',
                title: 'While Loop',
                description: 'Using a while loop for iteration.',
                content: `import Foundation

var i = 1
while i <= 5 {
    print("Number \(i)")
    i += 1
}`
            }
        ]
    },
    {
        id: 'functions',
        title: 'Functions',
        subtopics: [
            {
                id: 'defining-functions',
                title: 'Defining Functions',
                description: 'How to define and call functions in Swift.',
                content: `import Foundation

func greet(name: String) -> String {
    return "Hello, \(name)!"
}

print(greet(name: "Alice"))`
            },
            {
                id: 'return-values',
                title: 'Returning Values',
                description: 'Returning values from functions.',
                content: `import Foundation

func add(a: Int, b: Int) -> Int {
    return a + b
}

print(add(a: 3, b: 4))`
            }
        ]
    },
    {
        id: 'arrays',
        title: 'Arrays',
        subtopics: [
            {
                id: 'array-definition',
                title: 'Array Definition',
                description: 'Creating and using arrays in Swift.',
                content: `import Foundation

let fruits = ["Apple", "Banana", "Cherry"]
print(fruits[0]) // Outputs: Apple`
            },
            {
                id: 'array-methods',
                title: 'Array Methods',
                description: 'Using array methods like map, filter, and forEach.',
                content: `import Foundation

let numbers = [1, 2, 3, 4, 5]
let squaredNumbers = numbers.map { $0 * $0 }
print(squaredNumbers) // Outputs: [1, 4, 9, 16, 25]`
            }
        ]
    },
    {
        id: 'dictionaries',
        title: 'Dictionaries',
        subtopics: [
            {
                id: 'dictionary-definition',
                title: 'Dictionary Definition',
                description: 'Creating and using dictionaries in Swift.',
                content: `import Foundation

let person = ["name": "Alice", "age": "25"]
print(person["name"] ?? "Unknown") // Outputs: Alice`
            },
            {
                id: 'dictionary-methods',
                title: 'Dictionary Methods',
                description: 'Using dictionary methods like keys, values, and updating dictionaries.',
                content: `import Foundation

var person = ["name": "Alice", "age": "25"]
person["age"] = "26"
print(person) // Outputs: ["name": "Alice", "age": "26"]`
            }
        ]
    },
    {
        id: 'pattern-matching',
        title: 'Pattern Matching',
        subtopics: [
            {
                id: 'simple-pattern',
                title: 'Simple Pattern Matching',
                description: 'Matching values using pattern matching.',
                content: `import Foundation

let person = ("Alice", 25)

switch person {
case let (name, age):
    print("Hello, \(name)! You are \(age) years old.")
}`
            },
            {
                id: 'multiple-patterns',
                title: 'Multiple Pattern Matching',
                description: 'Matching multiple patterns in function clauses.',
                content: `import Foundation

let time = "morning"

switch time {
case "morning":
    print("Good morning!")
case "evening":
    print("Good evening!")
default:
    print("Hello!")
}`
            }
        ]
    },
];


const SwiftTutorial = () => {
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
                    <SiSwift className="text-3xl text-sky-500" />
                    <h2 className="text-2xl font-semibold text-sky-500">Swift Tutorial</h2>
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
                    language="swift"
                    style={atomOneDark}
                    showLineNumbers={true} // This will enable line numbers
                >
                    {activeSubtopic.content}
                </SyntaxHighlighter>
            </main>
        </div>
    );
};

export default SwiftTutorial;
