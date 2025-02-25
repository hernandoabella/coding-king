import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-twilight.css";
import { FaBolt, FaBookOpen, FaBrain, FaCheck, FaCopy, FaGamepad, FaHandRock, FaHashtag, FaKey, FaQrcode, FaQuestionCircle, FaStar, FaStopwatch, FaTools, FaUserSecret } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const Python = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const oneLiners = {
    Strings: [
      {
        code: `"hello".upper()`,
        description: "Converts a string to uppercase.",
        walkthrough: `The .upper() method changes all lowercase letters to uppercase.`,
      },
      {
        code: `"hello world".title()`,
        description: "Capitalizes the first letter of each word.",
        walkthrough: `The .title() method capitalizes the first letter of every word in the string.`,
      },
      {
        code: `"hello"[::-1]`,
        description: "Reverses a string using slicing.",
        walkthrough: `The slicing syntax [::-1] takes the string and returns it in reverse order.`,
      },
    ],
    Math: [
      {
        code: `sum([1, 2, 3, 4, 5])`,
        description: "Finds the sum of a list of numbers.",
        walkthrough: `The sum() function adds up all elements in the list and returns the total.`,
      },
      {
        code: `max([1, 5, 2, 9, 3])`,
        description: "Finds the maximum value in a list.",
        walkthrough: `The max() function returns the largest number in the given list.`,
      },
      {
        code: `round(3.14159, 2)`,
        description: "Rounds a number to 2 decimal places.",
        walkthrough: `The round() function takes a number and rounds it to the specified decimal places (in this case, 2).`,
      },
    ],
    Lists: [
      {
        code: `[x**2 for x in range(5)]`,
        description: "Generates a list of squares from 0 to 4.",
        walkthrough: `This is called list comprehension, where each element x is squared using x**2.`,
      },
      {
        code: `list(set([1, 2, 2, 3, 4, 4, 5]))`,
        description: "Removes duplicates from a list.",
        walkthrough: `The set() function removes duplicate elements, and list() converts it back into a list.`,
      },
      {
        code: `sorted([3, 1, 4, 1, 5, 9])`,
        description: "Sorts a list in ascending order.",
        walkthrough: `The sorted() function returns a new sorted list while keeping the original list unchanged.`,
      },
    ],
    Dictionaries: [
      {
        code: `{k: k**2 for k in range(1, 6)}`,
        description: "Creates a dictionary with squares of numbers.",
        walkthrough: `This dictionary comprehension generates keys from 1 to 5 and maps them to their squares.`,
      },
      {
        code: `dict(zip(["a", "b", "c"], [1, 2, 3]))`,
        description: "Creates a dictionary from two lists.",
        walkthrough: `The zip() function pairs elements from both lists and dict() converts them into a dictionary.`,
      },
      {
        code: `{"a": 1, "b": 2}.keys()`,
        description: "Gets all keys from a dictionary.",
        walkthrough: `The .keys() method returns a view object containing all the keys in the dictionary.`,
      },
    ],
    DateTime: [
      {
        code: `from datetime import datetime; datetime.now().strftime("%Y-%m-%d")`,
        description: "Gets the current date in YYYY-MM-DD format.",
        walkthrough: `strftime("%Y-%m-%d") formats the date into a human-readable format.`,
      },
      {
        code: `from datetime import datetime; datetime.now().strftime("%H:%M:%S")`,
        description: "Gets the current time in HH:MM:SS format.",
        walkthrough: `strftime("%H:%M:%S") extracts the hour, minute, and second from the current time.`,
      },
      {
        code: `from datetime import datetime; datetime(2024, 1, 1).strftime("%A")`,
        description: "Finds the weekday of a given date.",
        walkthrough: `strftime("%A") returns the full weekday name of a specific date.`,
      },
    ],
    Randomization: [
      {
        code: `import random; random.randint(1, 10)`,
        description: "Generates a random integer between 1 and 10.",
        walkthrough: `The randint() function picks a random number from the given range.`,
      },
      {
        code: `import random; random.choice(["apple", "banana", "cherry"])`,
        description: "Selects a random element from a list.",
        walkthrough: `The choice() function picks one random item from the list.`,
      },
      {
        code: `import random; random.shuffle([1, 2, 3, 4, 5])`,
        description: "Shuffles a list in place.",
        walkthrough: `The shuffle() function randomly rearranges the elements of a list.`,
      },
    ],
  };


  const [copied, setCopied] = useState({}); // Track copied state per category

  const handleCopy = (text, category, index) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [category]: index }); // Track per category
    setTimeout(() => setCopied({ ...copied, [category]: null }), 2000);
  };


  const projects = [
    { name: "Mad Libs", difficulty: 1, icon: <FaBrain className="text-yellow-300 text-2xl" /> },
    { name: "Guess the Number Game", difficulty: 2, icon: <FaHashtag className="text-green-300 text-2xl" /> },
    { name: "Rock, Paper, Scissors", difficulty: 2, icon: <FaHandRock className="text-red-400 text-2xl" /> },
    { name: "Hangman", difficulty: 3, icon: <FaUserSecret className="text-purple-300 text-2xl" /> },
    { name: "Countdown Timer", difficulty: 3, icon: <FaStopwatch className="text-blue-400 text-2xl" /> },
    { name: "Password Generator", difficulty: 4, icon: <FaKey className="text-orange-300 text-2xl" /> },
    { name: "QR Code Encoder / Decoder", difficulty: 4, icon: <FaQrcode className="text-gray-300 text-2xl" /> },
    { name: "Tic-Tac-Toe", difficulty: 5, icon: <FaGamepad className="text-pink-400 text-2xl" /> }
  ];

  const sections = [
    {
      id: "learning-basics",
      title: "Learning basics",
      content: (
        <>
          <div>something</div>
        </>
      ),
    }
  ];

  const [activeSection, setActiveSection] = useState(sections[0]);

  const [] = useState<number | null>(null);

  const tabs = [
    {
      id: 1,
      question: "Swap Two Variables Without a Temporary Variable",
      answer: "Instead of using a temporary variable to swap two values, you can use tuple unpacking in Python.",
      code: `a, b = 5, 10
a, b = b, a  # Now a = 10, b = 5`,
      why: "This method is cleaner and more Pythonic."
    },
    {
      id: 2,
      question: "Reverse a String in One Line",
      answer: "You can reverse a string in Python using slicing.",
      code: `text = "hello"
  reversed_text = text[::-1]  # Output: 'olleh'`,
      why: "This slicing technique is simple and efficient."
    },
    {
      id: 3,
      question: "Check if a List is Empty",
      answer: "Instead of checking length, use a direct boolean check.",
      code: `my_list = []
  if not my_list:
      print("List is empty")`,
      why: "An empty list evaluates to False, making the condition cleaner."
    },
    {
      id: 4,
      question: "Find the Most Frequent Element in a List",
      answer: "Use the `max()` function with `key=list.count` to find the most frequent element.",
      code: `nums = [1, 3, 3, 7, 3, 2, 2]
  most_frequent = max(set(nums), key=nums.count)  # Output: 3`,
      why: "This method avoids extra loops and is more readable."
    },
    {
      id: 5,
      question: "Merge Two Dictionaries",
      answer: "Use the `|` operator (Python 3.9+) or `update()` to merge dictionaries.",
      code: `dict1 = {'a': 1, 'b': 2}
  dict2 = {'c': 3, 'd': 4}
  merged = dict1 | dict2  # Output: {'a': 1, 'b': 2, 'c': 3, 'd': 4}`,
      why: "This is the most modern and concise way to merge dictionaries."
    }
  ];

  const INITIAL_VISIBLE_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [expanded, setExpanded] = useState(false);

  const toggleView = () => {
    if (expanded) {
      setVisibleCount(INITIAL_VISIBLE_COUNT);
    } else {
      setVisibleCount(tabs.length);
    }
    setExpanded(!expanded);
  };



  return (
    <div>
      <div className="">
        <div className="my-10">
          <div className="flex items-center gap-2">
            <FaBookOpen className="text-blue-500 text-3xl" />
            <h2 className="text-blue-500 font-bold md:text-3xl my-2">
              Learning the basics
            </h2>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div

              className="rounded-lg"
            >
              <h3 className="text-2xl font-bold py-2 border-b-2 mb-4">
                Python for beginners
              </h3>
              <ul className="list-disc pl-5 text-lg">
                {sections.map((section) => (
                  <li
                    key={section.id}
                    className="cursor-pointer hover:text-blue-500"
                    onClick={() => setActiveSection(section)}
                  >
                    {section.title}
                  </li>
                ))}
              </ul>
            </div>
            {/* Sidebar */}

            {/* Content goes here */}
            <div className="p-10 rounded-lg">
              {activeSection.content}
            </div>
            {/* Content goes here */}
          </div>


        </div>

        <div className="my-10 rounded-xl ">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <FaBolt className="text-blue-500 text-4xl" />
            <h2 className="text-blue-500 font-bold md:text-3xl">One-Liners</h2>
          </div>

          {/* Categories */}
          {Object.entries(oneLiners).map(([category, items]) => (
            <div key={category} className="mb-6">
              <hr className="border border-blue-500 mb-4"/>
              <h3 className="font-bold mb-3 md:text-2xl">{category}</h3>
              <div className="flex-wrap flex gap-10 items-center">
                {items.map((item, index) => (
                  <div key={index} className="">
                    {/* Code & Copy Button */}
                    <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-lg relative">
                      <pre className="overflow-x-auto w-full">
                        <code className="language-python">{item.code}</code>
                      </pre>
                      <button
                        className="ml-3 text-white hover:text-gray-300 transition"
                        onClick={() => handleCopy(item.code, category, index)}
                      >
                        {copied[category] === index ? <FaCheck className="text-green-400" /> : <FaCopy />}
                      </button>

                    </div>

                    {/* Description */}
                    <p className="text-blue-500 mt-2 font-semibold text-lg">{item.description}</p>

                    {/* Walkthrough */}
                    <p className="text-sm">{item.walkthrough}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl my-10">
      {/* Header */}
      <div className="flex items-center gap-2">
        <FaTools className="text-blue-500 text-3xl" />
        <h2 className="text-blue-500 font-bold md:text-3xl my-2">Tips & Tricks</h2>
      </div>

      {/* Tabs */}
      <div>
        {tabs.slice(0, visibleCount).map((tab, index) => (
          <div key={tab.id} className="collapse collapse-arrow bg-blue-900 my-5 rounded-xl">
            <input
              type="radio"
              name="my-accordion-2"
              defaultChecked={index === 0}
              id={`tab-${tab.id}`}
            />
            {/* Tab Title */}
            <div className="collapse-title text-xl text-blue-300 font-medium flex gap-2 items-center">
              <FaQuestionCircle className="text-blue-400 text-lg" />
              {tab.question}
            </div>
            {/* Tab Content */}
            <div className="collapse-content">
              <p className="text-lg text-gray-400 py-2">{tab.answer}</p>
              {tab.code && (
                <pre className="p-4 rounded-xl mt-3 overflow-x-auto">
                  <code className="language-python">{tab.code}</code>
                </pre>
              )}
              {tab.why && <p className="text-lg text-gray-400 py-2">{tab.why}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Button */}
      {tabs.length > INITIAL_VISIBLE_COUNT && (
        <div className="text-center my-5">
          <button
            onClick={toggleView}
            className="bg-blue-900 text-white px-5 py-2 rounded-xl  "
          >
            {expanded ? "View Less" : "View More..."}
          </button>
        </div>
      )}
    </div>


        <div className="my-10">
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-6">
            <SiPython className="text-blue-500 text-4xl" />
            <h2 className="text-blue-500 font-bold md:text-3xl">Python Projects</h2>
          </div>

          {/* Projects Grid */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {projects.map((project, index) => (
              <li
                key={index}
                className="p-4 bg-blue-900 text-white rounded-xl cursor-pointer flex flex-col items-center transition-transform transform hover:scale-105"
              >
                <div className="mb-2">{project.icon}</div>
                <span className="text-lg font-semibold">{project.name}</span>
                <div className="flex mt-1">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < project.difficulty ? "text-yellow-400" : "text-gray-500"}
                    />
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </div>
  )
}

export default Python