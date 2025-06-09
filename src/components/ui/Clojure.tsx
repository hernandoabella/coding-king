import { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiClojure } from "react-icons/si";

import clojure from 'react-syntax-highlighter/dist/esm/languages/hljs/clojure';
SyntaxHighlighter.registerLanguage('clojure', clojure);


const tutorialData = [
    {
      id: 'basics',
      title: 'Clojure Basics',
      subtopics: [
        {
          id: 'hello-world',
          title: 'Hello World',
          description: 'Your first Clojure program.',
          content: `(println "Hello, World!")`,
        },
        {
          id: 'variables',
          title: 'Variables & Data Types',
          description: 'Understanding variables and basic data types in Clojure.',
          content: `(def name "Alice")
  (def age 25)
  (def height 5.9)
  
  (println "Name:" name)
  (println "Age:" age)
  (println "Height:" height)`,
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
          content: `(def age 20)
  
  (if (>= age 18)
    (println "Adult")
    (println "Minor"))`,
        },
        {
          id: 'case',
          title: 'Case Expressions',
          description: 'Using cond for multiple conditions.',
          content: `(def day "Monday")
  
  (cond
    (= day "Monday") (println "Start of the week")
    (= day "Friday") (println "End of the week")
    :else (println "Midweek day"))`,
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
          content: `(doseq [i (range 1 6)]
    (println "Number" i))`,
        },
        {
          id: 'while-loop',
          title: 'While Loop',
          description: 'Using a loop for recursion.',
          content: `(defn print-numbers [i]
    (when (<= i 5)
      (println "Number" i)
      (recur (inc i))))
  
  (print-numbers 1)`,
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
          description: 'How to define and call functions in Clojure.',
          content: `(defn greet [name]
    (str "Hello, " name "!"))
  
  (println (greet "Alice"))`,
        },
        {
          id: 'return-values',
          title: 'Returning Values',
          description: 'Returning values from functions.',
          content: `(defn add [a b]
    (+ a b))
  
  (println (add 3 4))`,
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
          description: 'Creating and using lists in Clojure.',
          content: `(def fruits '("Apple" "Banana" "Cherry"))
  (println (first fruits))  ; Outputs: Apple`,
        },
        {
          id: 'list-methods',
          title: 'List Methods',
          description: 'Using list functions like map, filter, and each.',
          content: `(def numbers '(1 2 3 4 5))
  (def squared-numbers (map #(* % %) numbers))
  (println squared-numbers)  ; Outputs: (1 4 9 16 25)`,
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
          description: 'Creating and using maps in Clojure.',
          content: `(def person {:name "Alice" :age 25})
  (println (:name person))  ; Outputs: Alice`,
        },
        {
          id: 'map-methods',
          title: 'Map Methods',
          description: 'Using map functions like keys, values, and updating maps.',
          content: `(def person {:name "Alice" :age 25})
  (def updated-person (assoc person :age 26))
  (println updated-person)  ; Outputs: {:name "Alice" :age 26}`,
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
          description: 'Matching values using destructuring.',
          content: `(defn greet [[name age]]
    (println "Hello, " name "! You are " age " years old."))
  
  (greet ["Alice" 25])  ; Outputs: Hello, Alice! You are 25 years old.`,
        },
        {
          id: 'multiple-patterns',
          title: 'Multiple Pattern Matching',
          description: 'Matching multiple patterns in function clauses.',
          content: `(defn greet [time]
    (cond
      (= time :morning) (println "Good morning!")
      (= time :evening) (println "Good evening!")
      :else (println "Hello!")))
  
  (greet :morning)  ; Outputs: Good morning!`,
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
          content: `(defn hello []
    (println "Hello from the process!"))
  
  (def pid (future (hello)))`,
        },
        {
          id: 'future',
          title: 'Using Futures',
          description: 'Creating and working with futures for concurrent tasks.',
          content: `(defn calculate []
    (Thread/sleep 1000)
    42)
  
  (def future-result (future (calculate)))
  (println @future-result)  ; Outputs: 42`,
        },
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      subtopics: [
        {
          id: 'core-async',
          title: 'Core.async',
          description: 'Asynchronous programming in Clojure using core.async.',
          content: `(require '[clojure.core.async :as async])
  
  (def channel (async/chan))
  
  (async/go
    (async/>! channel "Hello from async!")
    (println (async/<!! channel)))`,
        },
      ],
    },
  ];
  
  
const ClojureTutorial = () => {
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
          <SiClojure  className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Clojure Tutorial</h2>
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
          language="clojure"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default ClojureTutorial;
