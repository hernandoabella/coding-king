import React, { useState } from 'react';
import { FaChevronRight, FaClipboard, FaCheck } from 'react-icons/fa';
import { TbBrandCSharp } from "react-icons/tb";

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const tutorialData = [
  {
    id: 'basics',
    title: 'C Basics',
    subtopics: [
      {
        id: 'hello-world',
        title: 'Hello World',
        description: 'Your first C program.',
        content: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}`,
      },
      {
        id: 'variables',
        title: 'Variables & Data Types',
        description: 'Declaring variables of different types.',
        content: `#include <stdio.h>

int main() {
    int age = 25;
    float height = 5.9;
    char grade = 'A';

    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);
    return 0;
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
        description: 'Make decisions with if-else.',
        content: `#include <stdio.h>

int main() {
    int score = 70;

    if (score >= 90) {
        printf("Excellent\\n");
    } else if (score >= 60) {
        printf("Passed\\n");
    } else {
        printf("Failed\\n");
    }

    return 0;
}`,
      },
      {
        id: 'switch',
        title: 'Switch Statement',
        description: 'Control flow with switch-case.',
        content: `#include <stdio.h>

int main() {
    int day = 2;

    switch(day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        default:
            printf("Other Day\\n");
    }

    return 0;
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
        description: 'Loop using for syntax.',
        content: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 5; i++) {
        printf("i = %d\\n", i);
    }

    return 0;
}`,
      },
      {
        id: 'while-loop',
        title: 'While Loop',
        description: 'Loop using while.',
        content: `#include <stdio.h>

int main() {
    int i = 1;
    while (i <= 5) {
        printf("i = %d\\n", i);
        i++;
    }

    return 0;
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
        description: 'Create and call functions.',
        content: `#include <stdio.h>

void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int main() {
    greet("Alice");
    return 0;
}`,
      },
      {
        id: 'return-value',
        title: 'Functions with Return Values',
        description: 'Returning values from functions.',
        content: `#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum = %d\\n", result);
    return 0;
}`,
      },
    ],
  },
  {
    id: 'arrays-pointers',
    title: 'Arrays & Pointers',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Working with arrays in C.',
        content: `#include <stdio.h>

int main() {
    int numbers[] = {10, 20, 30};

    for (int i = 0; i < 3; i++) {
        printf("%d\\n", numbers[i]);
    }

    return 0;
}`,
      },
      {
        id: 'pointers',
        title: 'Pointers',
        description: 'Understanding pointers and memory.',
        content: `#include <stdio.h>

int main() {
    int num = 10;
    int *p = &num;

    printf("Value: %d\\n", *p);
    printf("Address: %p\\n", p);

    return 0;
}`,
      },
    ],
  },
  {
    id: 'structs',
    title: 'Structures',
    subtopics: [
      {
        id: 'structure-definition',
        title: 'Defining Structures',
        description: 'Use structs to group variables.',
        content: `#include <stdio.h>

struct Person {
    char name[20];
    int age;
};

int main() {
    struct Person p = {"Alice", 30};
    printf("%s is %d years old.\\n", p.name, p.age);
    return 0;
}`,
      },
    ],
  },
];


const CTutorial = () => {
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
          <TbBrandCSharp className="text-3xl text-sky-500" />
          <h2 className="text-2xl font-semibold text-sky-500">C Tutorial</h2>
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
          language="c"
          style={atomOneDark}
          showLineNumbers={true} // This will enable line numbers
        >
          {activeSubtopic.content}
        </SyntaxHighlighter>
      </main>
    </div>
  );
};

export default CTutorial;