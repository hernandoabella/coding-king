import { useState } from 'react';
import {
  FaChevronRight,
  FaClipboard,
  FaCheck,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';

SyntaxHighlighter.registerLanguage('python', python);

const tutorialData = [
  {
    id: 'basics',
    title: 'Python Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Learn how to declare and use variables in Python.',
        content: `name = "Alice"
age = 25
print(f"Name: {name}, Age: {age}")`,
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: "Understand Python's data types like int, float, string, and boolean.",
        content: `integer = 10
floating = 3.14
string = "Python"
boolean = True
print(type(integer), type(floating), type(string), type(boolean))`,
      },
      {
        id: 'constants',
        title: 'Constants',
        description: 'Learn how to define constants in Python (by convention).',
        content: `PI = 3.14159  # Python does not enforce constants
print(PI)`,
      },
    ],
  },
];

const PythonTutorial = () => {
  const [activeSection, setActiveSection] = useState(tutorialData[0]);
  const [activeSubtopic, setActiveSubtopic] = useState(tutorialData[0].subtopics[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(activeSubtopic.content)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto p-4 md:p-6">
      {/* Sidebar */}
      <aside className="w-full lg:w-80 p-5 rounded-2xl shadow-md border border-gray-200 bg-white">
        <div className="flex items-center gap-3 pb-4 mb-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">🐍 Python Tutorial</h2>
        </div>
        <ul className="space-y-2 text-gray-700 text-sm">
          {tutorialData.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  setActiveSection(section);
                  setActiveSubtopic(section.subtopics[0]);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection.id === section.id
                    ? 'bg-blue-100 font-semibold text-blue-700'
                    : 'hover:bg-gray-100 text-gray-700'
                }`}
              >
                <span className="flex items-center">
                  <motion.span
                    animate={{
                      rotate: activeSection.id === section.id ? 90 : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    className="mr-2 text-xs"
                  >
                    <FaChevronRight />
                  </motion.span>
                  {section.title}
                </span>
              </button>
              <AnimatePresence>
                {activeSection.id === section.id && (
                  <motion.ul
                    className="pl-6 mt-2 space-y-1"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {section.subtopics.map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => setActiveSubtopic(sub)}
                          className={`block w-full text-left px-2 py-1 rounded-md text-sm transition-all ${
                            activeSubtopic.id === sub.id
                              ? 'bg-blue-500 text-white shadow'
                              : 'hover:bg-gray-100 text-gray-600'
                          }`}
                        >
                          {sub.title}
                        </button>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6 rounded-2xl shadow-md border border-gray-200 bg-white overflow-hidden relative">
        <motion.div
          key={activeSubtopic.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-2 text-gray-900">{activeSubtopic.title}</h3>
          <p className="mb-4 text-gray-600">{activeSubtopic.description}</p>

          <div className="border relative group transition-all duration-300 hover:shadow-lg rounded-lg">
            {/* Copy button */}
            <button
              onClick={handleCopyToClipboard}
              className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-3 py-1.5 text-xs rounded-md font-medium transition-all shadow ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {copied ? (
                <>
                  <FaCheck className="text-xs" /> Copied!
                </>
              ) : (
                <>
                  <FaClipboard className="text-xs" /> Copy
                </>
              )}
            </button>

            <SyntaxHighlighter
              language="python"
              style={atomOneLight}
              showLineNumbers
              customStyle={{
                borderRadius: '0.5rem',
                padding: '1.5rem',
                fontSize: '0.95rem',
                backgroundColor: '#f9fafb',
                transition: 'all 0.3s ease',
              }}
              wrapLines
              wrapLongLines
            >
              {activeSubtopic.content}
            </SyntaxHighlighter>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PythonTutorial;
