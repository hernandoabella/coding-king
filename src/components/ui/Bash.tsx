import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { SiGnubash } from "react-icons/si";

const tutorialData = [
    {
        id: 'basics',
        title: 'Bash Basics',
        subtopics: [
            {
                id: 'hello-world',
                title: 'Hello World',
                description: 'Your first Bash script.',
                content: `#!/bin/bash

echo "Hello, World!"`
            },
            {
                id: 'variables',
                title: 'Variables & Data Types',
                description: 'Understanding variables and basic data types in Bash.',
                content: `#!/bin/bash

name="Alice"
age=25
height=5.9

echo "Name: \$name"
echo "Age: \$age"
echo "Height: \$height"`
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
                content: `#!/bin/bash

age=20

if [ \$age -ge 18 ]; then
    echo "Adult"
else
    echo "Minor"
fi`
            },
            {
                id: 'case',
                title: 'Case Statements',
                description: 'Using case for multiple conditions.',
                content: `#!/bin/bash

day="Monday"

case \$day in
    "Monday")
        echo "Start of the week"
        ;;
    "Friday")
        echo "End of the week"
        ;;
    *)
        echo "Midweek day"
        ;;
esac`
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
                content: `#!/bin/bash

for i in {1..5}
do
    echo "Number \$i"
done`
            },
            {
                id: 'while-loop',
                title: 'While Loop',
                description: 'Using a while loop for iteration.',
                content: `#!/bin/bash

i=1
while [ \$i -le 5 ]
do
    echo "Number \$i"
    ((i++))
done`
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
                description: 'How to define and call functions in Bash.',
                content: `#!/bin/bash

greet() {
    echo "Hello, \$1!"
}

greet "Alice"`
            },
            {
                id: 'return-values',
                title: 'Returning Values',
                description: 'Returning values from functions.',
                content: `#!/bin/bash

add() {
    echo \$(($1 + $2))
}

result=\$(add 3 4)
echo \$result`
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
                description: 'Creating and using arrays in Bash.',
                content: `#!/bin/bash

fruits=("Apple" "Banana" "Cherry")
echo \${fruits[0]}  # Outputs: Apple`
            },
            {
                id: 'array-methods',
                title: 'Array Methods',
                description: 'Using array methods like loops.',
                content: `#!/bin/bash

numbers=(1 2 3 4 5)

for num in "\${numbers[@]}"
do
    echo \$num
done`
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
                description: 'Matching values using pattern matching in Bash.',
                content: `#!/bin/bash

person="Alice 25"

if [[ \$person =~ ([A-Za-z]+) ([0-9]+) ]]; then
    echo "Name: \${BASH_REMATCH[1]}"
    echo "Age: \${BASH_REMATCH[2]}"
fi`
            },
            {
                id: 'glob-patterns',
                title: 'Glob Patterns',
                description: 'Matching filenames using glob patterns.',
                content: `#!/bin/bash

for file in *.txt
do
    echo "Text file: \$file"
done`
            }
        ]
    }
];


const BashTutorial = () => {
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
                    <SiGnubash className="text-3xl text-sky-500" />
                    <h2 className="text-2xl font-semibold text-sky-500">Bash Tutorial</h2>
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

export default BashTutorial;
