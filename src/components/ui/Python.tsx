import { useState, useEffect } from 'react';
import {
  FaChevronRight,
  FaChevronLeft,
  FaClipboard,
  FaCheck,
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { anOldHope } from 'react-syntax-highlighter/dist/esm/styles/hljs';
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
        content: `# Declaring Variables
name = "Alice"
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
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isGlowing, setIsGlowing] = useState(false);

  // Toggle dark mode with localStorage persistence
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setIsDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', String(isDarkMode));
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleCopyToClipboard = () => {
    navigator.clipboard
      .writeText(activeSubtopic.content)
      .then(() => {
        setCopied(true);
        setIsGlowing(true);
        setTimeout(() => {
          setCopied(false);
          setIsGlowing(false);
        }, 2000);
      })
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Navigation functions
  const getCurrentSubtopicIndex = () => {
    return activeSection.subtopics.findIndex(sub => sub.id === activeSubtopic.id);
  };

  const goToNextSubtopic = () => {
    const currentIndex = getCurrentSubtopicIndex();
    if (currentIndex < activeSection.subtopics.length - 1) {
      setActiveSubtopic(activeSection.subtopics[currentIndex + 1]);
    }
  };

  const goToPrevSubtopic = () => {
    const currentIndex = getCurrentSubtopicIndex();
    if (currentIndex > 0) {
      setActiveSubtopic(activeSection.subtopics[currentIndex - 1]);
    }
  };

  // Calculate progress
  const progress = ((getCurrentSubtopicIndex() + 1) / activeSection.subtopics.length) * 100;

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto p-4 md:p-6 transition-all duration-300">
      {/* Sidebar */}
      <aside className={`w-full lg:w-80 p-5 rounded-2xl shadow-lg border ${
        isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
      }`}>
        <div className={`flex items-center justify-between gap-3 pb-4 mb-4 border-b ${
          isDarkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-xl font-bold flex items-center ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Python Tutorial
          </h2>
        </div>
        <ul className={`space-y-2 text-sm ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {tutorialData.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => {
                  setActiveSection(section);
                  setActiveSubtopic(section.subtopics[0]);
                }}
                className={`flex items-center justify-between w-full px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection.id === section.id
                    ? 'bg-blue-600 font-semibold text-white shadow-md'
                    : isDarkMode
                      ? 'hover:bg-gray-800 text-gray-300'
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
                              ? 'bg-blue-600 text-white shadow'
                              : isDarkMode
                                ? 'hover:bg-gray-800 text-gray-300'
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
      <main className={`flex-1 p-6 rounded-2xl shadow-lg border overflow-hidden relative ${
        isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
      }`}>
        {/* Progress bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-6">
          <div 
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <motion.div
          key={activeSubtopic.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className={`text-2xl font-semibold mb-2 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {activeSubtopic.title}
          </h3>
          <p className={`mb-6 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>{activeSubtopic.description}</p>

          <div className={`border relative group transition-all duration-300 rounded-lg ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          } ${isGlowing ? 'ring-2 ring-blue-500 shadow-xl' : 'hover:shadow-xl'}`}>
            {/* Copy button */}
            <button
              onClick={handleCopyToClipboard}
              className={`absolute top-3 right-3 z-10 flex items-center gap-1 px-3 py-1.5 text-xs rounded-md font-medium transition-all shadow ${
                copied
                  ? 'bg-green-500 text-white'
                  : 'bg-blue-600 text-white hover:bg-blue-500'
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
              style={anOldHope}
              showLineNumbers
              lineNumberStyle={{ 
                color: isDarkMode ? '#6b7280' : '#a1a1aa',
                minWidth: '2.5em'
              }}
              customStyle={{
                borderRadius: '0.5rem',
                padding: '1.5rem',
                fontSize: '0.95rem',
                backgroundColor: isDarkMode ? '#1e1e2d' : '#f9fafb',
                transition: 'all 0.3s ease',
              }}
              wrapLines
              wrapLongLines
            >
              {activeSubtopic.content}
            </SyntaxHighlighter>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={goToPrevSubtopic}
              disabled={getCurrentSubtopicIndex() === 0}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                getCurrentSubtopicIndex() === 0
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              } ${
                isDarkMode ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              <FaChevronLeft />
              Previous
            </button>

            <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
              {getCurrentSubtopicIndex() + 1} of {activeSection.subtopics.length}
            </div>

            <button
              onClick={goToNextSubtopic}
              disabled={getCurrentSubtopicIndex() === activeSection.subtopics.length - 1}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                getCurrentSubtopicIndex() === activeSection.subtopics.length - 1
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              } ${
                isDarkMode ? 'text-gray-500' : 'text-gray-700'
              }`}
            >
              Next
              <FaChevronRight />
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default PythonTutorial;