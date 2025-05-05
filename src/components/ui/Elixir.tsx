import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiElixir } from "react-icons/si";

const tutorialData = [
    {
      id: 'basics',
      title: 'Elixir Basics',
      subtopics: [
        {
          id: 'hello-world',
          title: 'Hello World',
          description: 'Your first Elixir program.',
          content: `IO.puts("Hello, World!")`,
        },
        {
          id: 'variables',
          title: 'Variables & Data Types',
          description: 'Understanding variables and basic data types in Elixir.',
          content: `name = "Alice"
  age = 25
  height = 5.9
  
  IO.puts("Name: #{name}")
  IO.puts("Age: #{age}")
  IO.puts("Height: #{height}")`,
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
  
  if age >= 18 do
    IO.puts("Adult")
  else
    IO.puts("Minor")
  end`,
        },
        {
          id: 'case',
          title: 'Case Expressions',
          description: 'Using case expressions for multiple conditions.',
          content: `day = "Monday"
  
  case day do
    "Monday" -> IO.puts("Start of the week")
    "Friday" -> IO.puts("End of the week")
    _ -> IO.puts("Midweek day")
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
          content: `for i <- 1..5 do
    IO.puts("Number #{i}")
  end`,
        },
        {
          id: 'while-loop',
          title: 'While Loop',
          description: 'Using a while loop with recursion.',
          content: `def print_numbers(i) do
    if i <= 5 do
      IO.puts("Number #{i}")
      print_numbers(i + 1)
    end
  end
  
  print_numbers(1)`,
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
          description: 'How to define and call functions in Elixir.',
          content: `def greet(name) do
    "Hello, #{name}!"
  end
  
  IO.puts(greet("Alice"))`,
        },
        {
          id: 'return-values',
          title: 'Returning Values',
          description: 'Returning values from functions.',
          content: `def add(a, b) do
    a + b
  end
  
  IO.puts(add(3, 4))`,
        },
      ],
    },
    {
      id: 'lists',
      title: 'Lists',
      subtopics: [
        {
          id: 'list-definition',
          title: 'List Definition',
          description: 'Creating and using lists in Elixir.',
          content: `fruits = ["Apple", "Banana", "Cherry"]
  IO.puts(Enum.at(fruits, 0))  # Outputs: Apple`,
        },
        {
          id: 'list-methods',
          title: 'List Methods',
          description: 'Using list methods like map, filter, and each.',
          content: `numbers = [1, 2, 3, 4, 5]
  squared_numbers = Enum.map(numbers, fn n -> n * n end)
  IO.inspect(squared_numbers)  # Outputs: [1, 4, 9, 16, 25]`,
        },
      ],
    },
    {
      id: 'maps',
      title: 'Maps',
      subtopics: [
        {
          id: 'map-definition',
          title: 'Map Definition',
          description: 'Creating and using maps in Elixir.',
          content: `person = %{name: "Alice", age: 25}
  IO.puts(person[:name])  # Outputs: Alice`,
        },
        {
          id: 'map-methods',
          title: 'Map Methods',
          description: 'Using map methods like keys, values, and updating maps.',
          content: `person = %{name: "Alice", age: 25}
  updated_person = Map.put(person, :age, 26)
  IO.inspect(updated_person)  # Outputs: %{age: 26, name: "Alice"}`,
        },
      ],
    },
    {
      id: 'pattern-matching',
      title: 'Pattern Matching',
      subtopics: [
        {
          id: 'simple-pattern',
          title: 'Simple Pattern Matching',
          description: 'Matching values in Elixir using pattern matching.',
          content: `def greet({name, age}) do
    IO.puts("Hello, #{name}! You are #{age} years old.")
  end
  
  greet({"Alice", 25})  # Outputs: Hello, Alice! You are 25 years old.`,
        },
        {
          id: 'multiple-patterns',
          title: 'Multiple Pattern Matching',
          description: 'Matching multiple patterns in function clauses.',
          content: `def greet(:morning) do
    IO.puts("Good morning!")
  end
  
  def greet(:evening) do
    IO.puts("Good evening!")
  end
  
  greet(:morning)  # Outputs: Good morning!`,
        },
      ],
    },
    {
      id: 'concurrency',
      title: 'Concurrency',
      subtopics: [
        {
          id: 'spawn-process',
          title: 'Spawning Processes',
          description: 'Creating and managing concurrent processes.',
          content: `pid = spawn(fn -> IO.puts("Hello from the process!") end)`,
        },
        {
          id: 'receive',
          title: 'Receiving Messages',
          description: 'Using the receive block to process messages in Elixir.',
          content: `defmodule Greeter do
    def greet do
      receive do
        {:hello, name} -> IO.puts("Hello, #{name}!")
      end
    end
  end
  
  pid = spawn(Greeter, :greet, [])
  send(pid, {:hello, "Alice"})  # Outputs: Hello, Alice!`,
        },
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      subtopics: [
        {
          id: 'otp',
          title: 'OTP Framework',
          description: 'Understanding the OTP framework and building fault-tolerant applications.',
          content: `defmodule Counter do
    use GenServer
  
    def start_link(initial_value) do
      GenServer.start_link(__MODULE__, initial_value, name: :counter)
    end
  
    def init(initial_value) do
      {:ok, initial_value}
    end
  
    def increment do
      GenServer.cast(:counter, :increment)
    end
  
    def handle_cast(:increment, value) do
      {:noreply, value + 1}
    end
  end`,
        },
      ],
    },
  ];
  
const ElixirTutorial = () => {
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
          <SiElixir  className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Elixir Tutorial</h2>
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

export default ElixirTutorial;
