import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiHaskell } from "react-icons/si";

const tutorialData = [
    {
      id: 'basics',
      title: 'Haskell Basics',
      subtopics: [
        {
          id: 'hello-world',
          title: 'Hello World',
          description: 'Your first Haskell program.',
          content: `main :: IO ()
  main = putStrLn "Hello, World!"`,
        },
        {
          id: 'variables',
          title: 'Variables & Data Types',
          description: 'Understanding variables and basic data types.',
          content: `-- Haskell has immutable variables (bindings)
  name :: String
  name = "Alice"
  
  age :: Int
  age = 25
  
  height :: Float
  height = 5.9
  
  main :: IO ()
  main = do
    putStrLn ("Name: " ++ name)
    putStrLn ("Age: " ++ show age)
    putStrLn ("Height: " ++ show height)`,
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
          content: `checkAge :: Int -> String
  checkAge age = if age >= 18 then "Adult" else "Minor"
  
  main :: IO ()
  main = do
    let age = 20
    putStrLn (checkAge age)`,
        },
        {
          id: 'case-of',
          title: 'Case Expression',
          description: 'Pattern matching with case expressions.',
          content: `dayOfWeek :: Int -> String
  dayOfWeek day = case day of
    1 -> "Monday"
    2 -> "Tuesday"
    3 -> "Wednesday"
    4 -> "Thursday"
    5 -> "Friday"
    6 -> "Saturday"
    7 -> "Sunday"
    _ -> "Invalid day"
  
  main :: IO ()
  main = do
    let day = 3
    putStrLn (dayOfWeek day)`,
        },
      ],
    },
    {
      id: 'loops',
      title: 'Loops',
      subtopics: [
        {
          id: 'list-comprehension',
          title: 'List Comprehensions',
          description: 'Generating lists with comprehensions.',
          content: `squares :: [Int]
  squares = [x * x | x <- [1..5]]
  
  main :: IO ()
  main = print squares`,
        },
        {
          id: 'recursion',
          title: 'Recursion',
          description: 'Recursion as the primary loop mechanism.',
          content: `factorial :: Int -> Int
  factorial 0 = 1
  factorial n = n * factorial (n - 1)
  
  main :: IO ()
  main = print (factorial 5)`,
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
          description: 'How to define functions in Haskell.',
          content: `add :: Int -> Int -> Int
  add x y = x + y
  
  main :: IO ()
  main = print (add 3 4)`,
        },
        {
          id: 'higher-order-functions',
          title: 'Higher-Order Functions',
          description: 'Functions that take other functions as arguments or return them.',
          content: `applyTwice :: (a -> a) -> a -> a
  applyTwice f x = f (f x)
  
  main :: IO ()
  main = print (applyTwice (+3) 10)`,
        },
      ],
    },
    {
      id: 'type-systems',
      title: 'Type System',
      subtopics: [
        {
          id: 'types',
          title: 'Basic Types',
          description: 'Understanding types in Haskell.',
          content: `-- Type declarations
  name :: String
  name = "Alice"
  
  age :: Int
  age = 25
  
  height :: Float
  height = 5.9
  
  main :: IO ()
  main = do
    putStrLn ("Name: " ++ name)
    putStrLn ("Age: " ++ show age)
    putStrLn ("Height: " ++ show height)`,
        },
        {
          id: 'type-classes',
          title: 'Type Classes',
          description: 'Explaining type classes in Haskell.',
          content: `-- Show is a type class for types that can be converted to a string
  printList :: Show a => [a] -> IO ()
  printList xs = putStrLn (show xs)
  
  main :: IO ()
  main = printList [1, 2, 3, 4]`,
        },
      ],
    },
    {
      id: 'modules',
      title: 'Modules',
      subtopics: [
        {
          id: 'importing',
          title: 'Importing Modules',
          description: 'How to import and use external modules in Haskell.',
          content: `import Data.List (nub)
  
  main :: IO ()
  main = print (nub [1, 1, 2, 3, 3, 4])`,
        },
      ],
    },
    {
      id: 'advanced',
      title: 'Advanced Topics',
      subtopics: [
        {
          id: 'monads',
          title: 'Monads',
          description: 'Understanding monads and their uses.',
          content: `import Control.Monad
  
  main :: IO ()
  main = do
    putStrLn "Enter your name:"
    name <- getLine
    putStrLn ("Hello, " ++ name)`,
        },
      ],
    },
  ];
  

const HaskellTutorial = () => {
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
          <SiHaskell className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">Haskell Tutorial</h2>
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

export default HaskellTutorial;
