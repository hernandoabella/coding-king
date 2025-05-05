import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { DiRuby } from "react-icons/di";

const tutorialData = [
    {
        id: 'basics',
        title: 'Ruby Basics',
        subtopics: [
            {
                id: 'hello-world',
                title: 'Hello World',
                description: 'Your first Ruby program.',
                content: `puts "Hello, World!"`,
            },
            {
                id: 'variables',
                title: 'Variables & Data Types',
                description: 'Understanding variables and basic data types in Ruby.',
                content: `name = "Alice"
  age = 25
  height = 5.9
  
  puts "Name: #{name}"
  puts "Age: #{age}"
  puts "Height: #{height}"`,
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
                content: `age = 20
  
  if age >= 18
    puts "Adult"
  else
    puts "Minor"
  end`,
            },
            {
                id: 'case',
                title: 'Case Statements',
                description: 'Using case expressions for multiple conditions.',
                content: `day = "Monday"
  
  case day
  when "Monday"
    puts "Start of the week"
  when "Friday"
    puts "End of the week"
  else
    puts "Midweek day"
  end`,
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
                description: 'Using a for loop to iterate over a range.',
                content: `for i in 1..5
    puts "Number #{i}"
  end`,
            },
            {
                id: 'while-loop',
                title: 'While Loop',
                description: 'Using a while loop for iteration.',
                content: `i = 1
  while i <= 5
    puts "Number #{i}"
    i += 1
  end`,
            },
            {
                id: 'each-loop',
                title: 'Each Loop',
                description: 'Iterating over an array using each.',
                content: `fruits = ["Apple", "Banana", "Cherry"]
  fruits.each do |fruit|
    puts fruit
  end`,
            },
        ],
    },
    {
        id: 'functions',
        title: 'Functions',
        subtopics: [
            {
                id: 'defining-functions',
                title: 'Defining Functions',
                description: 'How to define and call functions in Ruby.',
                content: `def greet(name)
    "Hello, #{name}!"
  end
  
  puts greet("Alice")`,
            },
            {
                id: 'return-values',
                title: 'Returning Values',
                description: 'Returning values from functions.',
                content: `def add(a, b)
    a + b
  end
  
  puts add(3, 4)`,
            },
        ],
    },
    {
        id: 'arrays',
        title: 'Arrays',
        subtopics: [
            {
                id: 'array-definition',
                title: 'Array Definition',
                description: 'Creating and using arrays in Ruby.',
                content: `fruits = ["Apple", "Banana", "Cherry"]
  puts fruits[0]  # Outputs: Apple`,
            },
            {
                id: 'array-methods',
                title: 'Array Methods',
                description: 'Using array methods like map, select, and each.',
                content: `numbers = [1, 2, 3, 4, 5]
  squared_numbers = numbers.map { |n| n * n }
  puts squared_numbers  # Outputs: [1, 4, 9, 16, 25]`,
            },
        ],
    },
    {
        id: 'hashes',
        title: 'Hashes',
        subtopics: [
            {
                id: 'hash-definition',
                title: 'Hash Definition',
                description: 'Creating and using hashes in Ruby.',
                content: `person = { name: "Alice", age: 25 }
  puts person[:name]  # Outputs: Alice`,
            },
            {
                id: 'hash-methods',
                title: 'Hash Methods',
                description: 'Using hash methods like keys, values, and each.',
                content: `person = { name: "Alice", age: 25 }
  person.each do |key, value|
    puts "#{key}: #{value}"
  end`,
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
                description: 'Creating classes and objects in Ruby.',
                content: `class Car
    def initialize(make, model)
      @make = make
      @model = model
    end
  
    def display
      puts "Make: #{@make}, Model: #{@model}"
    end
  end
  
  car = Car.new("Toyota", "Corolla")
  car.display  # Outputs: Make: Toyota, Model: Corolla`,
            },
            {
                id: 'inheritance',
                title: 'Inheritance',
                description: 'Understanding inheritance in Ruby.',
                content: `class Vehicle
    def initialize(make)
      @make = make
    end
  end
  
  class Car < Vehicle
    def initialize(make, model)
      super(make)
      @model = model
    end
  
    def display
      puts "Make: #{@make}, Model: #{@model}"
    end
  end
  
  car = Car.new("Toyota", "Corolla")
  car.display  # Outputs: Make: Toyota, Model: Corolla`,
            },
        ],
    },
    {
        id: 'modules',
        title: 'Modules',
        subtopics: [
            {
                id: 'using-modules',
                title: 'Using Modules',
                description: 'How to use modules for code reuse.',
                content: `module Greetings
    def hello(name)
      "Hello, #{name}!"
    end
  end
  
  class Person
    include Greetings
  end
  
  person = Person.new
  puts person.hello("Alice")  # Outputs: Hello, Alice!`,
            },
        ],
    },
    {
        id: 'advanced',
        title: 'Advanced Topics',
        subtopics: [
            {
                id: 'blocks-procs-lambdas',
                title: 'Blocks, Procs, and Lambdas',
                description: 'Using blocks, procs, and lambdas for functional programming.',
                content: `# Block example
  def greet
    yield("Alice")
  end
  
  greet { |name| puts "Hello, #{name}!" }  # Outputs: Hello, Alice!
  
  # Proc example
  say_hello = Proc.new { |name| puts "Hello, #{name}!" }
  say_hello.call("Bob")  # Outputs: Hello, Bob!
  
  # Lambda example
  say_hello_lambda = ->(name) { puts "Hello, #{name}!" }
  say_hello_lambda.call("Charlie")  # Outputs: Hello, Charlie!`,
            },
        ],
    },
];

const RubyTutorial = () => {
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
                    <DiRuby className="text-3xl text-sky-500" />
                    <h2 className="text-2xl font-semibold text-sky-500">Ruby Tutorial</h2>
                </div>
                <ul className="space-y-2 text-sm">
                    {tutorialData.map((section) => (
                        <li key={section.id}>
                            <button
                                onClick={() => {
                                    setActiveSection(section);
                                    setActiveSubtopic(section.subtopics[0]);
                                }}
                                className={`flex items-center w-full text-left px-3 py-2 rounded-md transition-colors ${activeSection.id === section.id
                                        ? 'bg-sky-900 text-white'
                                        : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                                    }`}
                            >
                                <FaChevronRight
                                    className={`mr-2 transition-transform duration-300 ${activeSection.id === section.id ? 'rotate-90' : ''
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
                                                className={`text-sm w-full text-left px-2 py-1 rounded-md transition-colors ${activeSubtopic.id === sub.id
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
                    language="ruby"
                    style={atomOneDark}
                    showLineNumbers={true} // This will enable line numbers
                >
                    {activeSubtopic.content}
                </SyntaxHighlighter>
            </main>
        </div>
    );
};

export default RubyTutorial;
