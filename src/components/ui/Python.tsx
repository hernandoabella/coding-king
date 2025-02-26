import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-twilight.css";
import { FaBolt, FaBook, FaBookOpen, FaBrain, FaCheck, FaCode, FaCopy, FaGamepad, FaGlobe, FaHandRock, FaHashtag, FaKey, FaPython, FaQrcode, FaQuestionCircle, FaStar, FaStopwatch, FaTools, FaUserSecret, FaVideo } from "react-icons/fa";
import { SiPython } from "react-icons/si";

const Python = () => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const [selectedProject, setSelectedProject] = useState(null);

  const pythonResources = [
    { name: "Official Python Docs", url: "https://docs.python.org/3/", icon: <FaBook /> },
    { name: "Real Python", url: "https://realpython.com/", icon: <FaGlobe /> },
    { name: "Python YouTube Tutorials", url: "https://www.youtube.com/results?search_query=python+tutorial", icon: <FaVideo /> },
    { name: "Awesome Python", url: "https://github.com/vinta/awesome-python", icon: <FaCode /> },
    { name: "GeeksforGeeks Python", url: "https://www.geeksforgeeks.org/python-programming-language/", icon: <FaBook /> },
    { name: "Full Stack Python", url: "https://www.fullstackpython.com/", icon: <FaGlobe /> },
  ];

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

  const INITIAL_VISIBLE_ONELINERS = 2;
  const [visibleOneliners, setVisibleOneliners] = useState(INITIAL_VISIBLE_ONELINERS);
  const [expandedOneliners, setExpandedOneliners] = useState(false);

  const toggleOnelinersView = () => {
    if (expandedOneliners) {
      setVisibleOneliners(INITIAL_VISIBLE_ONELINERS);
    } else {
      setVisibleOneliners(Object.keys(oneLiners).length);
    }
    setExpandedOneliners(!expandedOneliners);
  };


  const [copied, setCopied] = useState({}); // Track copied state per category

  const handleCopy = (text, category, index) => {
    navigator.clipboard.writeText(text);
    setCopied({ ...copied, [category]: index }); // Track per category
    setTimeout(() => setCopied({ ...copied, [category]: null }), 2000);
  };


  const projects = [
    { name: "Mad Libs", difficulty: 1, icon: <FaBrain className="text-yellow-300 text-2xl" />, tutorial: "This is a Mad Libs tutorial..." },
    { name: "Guess the Number Game", difficulty: 2, icon: <FaHashtag className="text-green-300 text-2xl" />, tutorial: "This is a Guess the Number tutorial..." },
    { name: "Rock, Paper, Scissors", difficulty: 2, icon: <FaHandRock className="text-red-400 text-2xl" />, tutorial: "This is a Rock, Paper, Scissors tutorial..." },
    { name: "Hangman", difficulty: 3, icon: <FaUserSecret className="text-purple-300 text-2xl" />, tutorial: "This is a Hangman tutorial..." },
    { name: "Countdown Timer", difficulty: 3, icon: <FaStopwatch className="text-blue-400 text-2xl" />, tutorial: "This is a Countdown Timer tutorial..." },
    { name: "Password Generator", difficulty: 4, icon: <FaKey className="text-orange-300 text-2xl" />, tutorial: "This is a Password Generator tutorial..." },
    { name: "QR Code Encoder / Decoder", difficulty: 4, icon: <FaQrcode className="text-gray-300 text-2xl" />, tutorial: "This is a QR Code tutorial..." },
    { name: "Tic-Tac-Toe", difficulty: 5, icon: <FaGamepad className="text-pink-400 text-2xl" />, tutorial: "This is a Tic-Tac-Toe tutorial..." }
  ];

  const sections = [
    {
      id: "introduction-to-python",
      title: "Introduction to Python",
      subtopics: [
        {
          id: "what-is-python",
          title: "What is Python?",
          content: (
            <div>
              <div className="w-24">
                <svg viewBox="0 0 128 128">
                  <path fill="#3B82F6" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
                </svg>
              </div>

              <p className="text-sm">
                Python is a high-level, interpreted programming language known for
                its simplicity and readability. It is widely used in web
                development, data science, automation, AI, and more.
              </p>

              <div className="w-48 my-2">
                <img src="/images/guido-van-rossum.jpg" alt="author" />
              </div>
              <p>
                Created by <em><b>Guido van Rossum</b></em>
              </p>
              <p>
                Released in <em><b>1991</b></em>
              </p>
            </div>
          ),
        },
        { id: "history", title: "History & Versions", content: <p>Python was created by Guido van Rossum in 1991.</p> },
        { id: "why-use-python", title: "Why Use Python?", content: <p>Python is used in web development, data science...</p> },
        {
          id: "installing-python",
          title: "Installing Python",
          content: (
            <div>

              <h4 className="text-lg font-semibold mt-3">Windows</h4>
              <ol className="list-decimal pl-5">
                <li className="ml-2">
                  Download Python from the official <a className="text-blue-500 underline" href="https://www.python.org/downloads/" target="_blank">
                    Python website
                  </a>.
                </li>
                <li className="ml-2">Run the installer and check <strong>"Add Python to PATH"</strong>.</li>
                <li className="ml-2">Click Install and wait for completion.</li>
                <li className="ml-2">
                  Open Command Prompt and type:
                  <pre className="language-bash">
                    <code className="language-bash">python --version</code>
                  </pre>
                </li>
              </ol>

              <h4 className="text-lg font-semibold mt-3">macOS</h4>
              <ol className="list-decimal pl-5">
                <li className="ml-2">
                  Open Terminal and type:
                  <pre className="language-bash">
                    <code className="language-bash">brew install python</code>
                  </pre>
                  (Requires Homebrew).
                </li>
                <li className="ml-2">
                  Verify the installation with:
                  <pre className="language-bash">
                    <code className="language-bash">python3 --version</code>
                  </pre>
                </li>
              </ol>

              <h4 className="text-lg font-semibold mt-3">Linux</h4>
              <ol className="list-decimal pl-5">
                <li className="ml-2">
                  Open Terminal and type:
                  <pre className="language-bash">
                    <code className="language-bash">sudo apt update && sudo apt install python3</code>
                  </pre>
                  (Debian-based).
                </li>
                <li className="ml-2">
                  Verify with:
                  <pre className="language-bash">
                    <code className="language-bash">python3 --version</code>
                  </pre>
                </li>
              </ol>
            </div>
          ),
        },
      ],
    },
    {
      id: "learning-basics",
      title: "Python Basics",
      subtopics: [
        {
          id: "variables",
          title: "Variables & Data Types",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Variables & Data Types</h3>
              <p>In Python, variables are dynamically typed, meaning you don’t need to declare their type.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`x = 10      # Integer
    name = "Alice"  # String
    pi = 3.14      # Float
    is_valid = True # Boolean`}
                </code>
              </pre>
              <p>Use the <code>type()</code> function to check the data type:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`print(type(x))  # Output: <class 'int'>`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "user-input",
          title: "Taking User Input",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Taking User Input</h3>
              <p>You can take user input using the <code>input()</code> function:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`name = input("Enter your name: ")
    print("Hello, " + name)`}
                </code>
              </pre>
              <p>By default, <code>input()</code> returns a string. Convert it if needed:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`age = int(input("Enter your age: "))
    print("You are", age, "years old.")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "comments",
          title: "Comments in Python",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Comments in Python</h3>
              <p>Comments are used to explain the code and are ignored by Python.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# This is a single-line comment
    
    """
    This is a
    multi-line comment
    or docstring.
    """`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "string-operations",
          title: "Basic String Operations",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Basic String Operations</h3>
              <p>Python provides powerful string manipulation functions.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`s = "Hello, Python!"
    print(s.upper())   # HELLO, PYTHON!
    print(s.lower())   # hello, python!
    print(s.replace("Python", "World"))  # Hello, World!
    print(len(s))  # 14`}
                </code>
              </pre>
              <p>Accessing individual characters:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`print(s[0])  # H
    print(s[-1]) # !`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "control-flow",
          title: "Control Flow",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Control Flow</h3>
              <p>Python supports conditional statements:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`age = 18
    if age >= 18:
        print("You are an adult.")
    else:
        print("You are a minor.")`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },    
    {
      id: "operators",
      title: "Operators in Python",
      subtopics: [
        {
          id: "arithmetic",
          title: "Arithmetic Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Arithmetic Operators</h3>
              <p>Arithmetic operators perform basic mathematical operations.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`a = 10
    b = 3
    
    print(a + b)  # Addition -> 13
    print(a - b)  # Subtraction -> 7
    print(a * b)  # Multiplication -> 30
    print(a / b)  # Division -> 3.3333
    print(a // b) # Floor Division -> 3
    print(a % b)  # Modulus -> 1
    print(a ** b) # Exponentiation -> 1000`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "comparison",
          title: "Comparison Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Comparison Operators</h3>
              <p>Used for comparing values, returning <code>True</code> or <code>False</code>.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`a = 10
    b = 5
    
    print(a > b)   # True
    print(a < b)   # False
    print(a == b)  # False
    print(a != b)  # True
    print(a >= b)  # True
    print(a <= b)  # False`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "logical",
          title: "Logical Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Logical Operators</h3>
              <p>Used for combining conditional statements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`x = True
    y = False
    
    print(x and y)  # False
    print(x or y)   # True
    print(not x)    # False`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "bitwise",
          title: "Bitwise Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Bitwise Operators</h3>
              <p>Operate at the bit level.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`a = 5  # 101 in binary
    b = 3  # 011 in binary
    
    print(a & b)  # AND -> 1 (001)
    print(a | b)  # OR  -> 7 (111)
    print(a ^ b)  # XOR -> 6 (110)
    print(~a)     # NOT -> -6
    print(a << 1) # Left Shift -> 10
    print(a >> 1) # Right Shift -> 2`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "assignment",
          title: "Assignment Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Assignment Operators</h3>
              <p>Used to assign values to variables.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`x = 10
    x += 5  # x = x + 5 -> 15
    x -= 2  # x = x - 2 -> 13
    x *= 3  # x = x * 3 -> 39
    x /= 3  # x = x / 3 -> 13.0
    x //= 2 # x = x // 2 -> 6
    x **= 2 # x = x ** 2 -> 36`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "membership",
          title: "Membership Operators",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Membership Operators</h3>
              <p>Check if a value exists in a sequence (string, list, tuple, etc.).</p>
              <pre className="language-python">
                <code className="language-python">
                  {`nums = [1, 2, 3, 4, 5]
    
    print(3 in nums)   # True
    print(10 not in nums)  # True`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },    
    {
      id: "conditional-statements",
      title: "Conditional Statements",
      subtopics: [
        {
          id: "if-else",
          title: "If-Else Statements",
          content: (
            <div>
              <h3 className="text-xl font-semibold">If-Else Statements</h3>
              <p>Conditional statements allow the program to make decisions based on conditions.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`x = 10
    
    if x > 5:
        print("x is greater than 5")
    elif x == 5:
        print("x is equal to 5")
    else:
        print("x is less than 5")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "nested-conditions",
          title: "Nested Conditions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Nested Conditions</h3>
              <p>We can use if-else statements inside other if-else statements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`age = 20
    
    if age >= 18:
        if age >= 21:
            print("You can drink alcohol.")
        else:
            print("You are an adult but cannot drink alcohol.")
    else:
        print("You are a minor.")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "ternary-operator",
          title: "Ternary Operator",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Ternary Operator</h3>
              <p>A shorthand way to write simple if-else statements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`age = 18
    status = "Adult" if age >= 18 else "Minor"
    print(status)  # Output: Adult`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "match-case",
          title: "Match-Case (Python 3.10+)",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Match-Case (Switch Statement)</h3>
              <p>Python 3.10 introduced the match-case statement, similar to switch-case in other languages.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`def get_day_name(day):
        match day:
            case 1:
                return "Monday"
            case 2:
                return "Tuesday"
            case 3:
                return "Wednesday"
            case 4:
                return "Thursday"
            case 5:
                return "Friday"
            case _:
                return "Invalid day"
    
    print(get_day_name(3))  # Output: Wednesday`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },    
    {
      id: "loops",
      title: "Loops",
      subtopics: [
        {
          id: "for-loop",
          title: "For Loop",
          content: (
            <div>
              <h3 className="text-xl font-semibold">For Loop</h3>
              <p>The <code>for</code> loop is used to iterate over a sequence (list, tuple, string, etc.).</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Looping through a list
    fruits = ["apple", "banana", "cherry"]
    for fruit in fruits:
        print(fruit)  # Output: apple, banana, cherry`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "while-loop",
          title: "While Loop",
          content: (
            <div>
              <h3 className="text-xl font-semibold">While Loop</h3>
              <p>The <code>while</code> loop executes as long as the condition is true.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# While loop example
    count = 1
    while count <= 5:
        print(count)
        count += 1  # Output: 1, 2, 3, 4, 5`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "nested-loops",
          title: "Nested Loops",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Nested Loops</h3>
              <p>Loops can be nested inside other loops.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Nested for loops
    for i in range(1, 3):
        for j in range(1, 4):
            print(f"i={i}, j={j}")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "loop-control",
          title: "Loop Control Statements",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Loop Control Statements</h3>
              <p>Python provides <code>break</code>, <code>continue</code>, and <code>pass</code> for loop control.</p>
              <ul className="list-disc pl-5">
                <li><code>break</code>: Exits the loop completely.</li>
                <li><code>continue</code>: Skips the current iteration and moves to the next.</li>
                <li><code>pass</code>: Does nothing (used as a placeholder).</li>
              </ul>
              <pre className="language-python">
                <code className="language-python">
                  {`# Using break
    for i in range(5):
        if i == 3:
            break
        print(i)  # Output: 0, 1, 2
    
    # Using continue
    for i in range(5):
        if i == 2:
            continue
        print(i)  # Output: 0, 1, 3, 4
    
    # Using pass
    for i in range(5):
        if i == 3:
            pass  # Does nothing
        print(i)  # Output: 0, 1, 2, 3, 4`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "list-comprehension",
          title: "List Comprehension",
          content: (
            <div>
              <h3 className="text-xl font-semibold">List Comprehension</h3>
              <p>A concise way to create lists using loops.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# List comprehension example
    squares = [x**2 for x in range(1, 6)]
    print(squares)  # Output: [1, 4, 9, 16, 25]`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    },    
    {
      id: "functions-and-modules",
      title: "Functions & Modules",
      subtopics: [
        {
          id: "defining-functions",
          title: "Defining Functions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Defining Functions</h3>
              <p>In Python, functions are defined using the <code>def</code> keyword.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Function to add two numbers
    def add(a, b):
        return a + b
    
    result = add(5, 3)
    print(result)  # Output: 8`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "function-arguments",
          title: "Function Arguments",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Function Arguments</h3>
              <p>Python supports different types of function arguments:</p>
              <ul className="list-disc pl-5">
                <li><b>Positional Arguments</b> - Arguments passed in order.</li>
                <li><b>Keyword Arguments</b> - Arguments passed with a key-value pair.</li>
                <li><b>Default Arguments</b> - Arguments with default values.</li>
                <li><b>Arbitrary Arguments</b> - Using <code>*args</code> and <code>**kwargs</code>.</li>
              </ul>
              <pre className="language-python">
                <code className="language-python">
                  {`# Positional & Keyword Arguments
    def greet(name, message="Hello"):
        print(f"{message}, {name}!")
    
    greet("Alice")  # Output: Hello, Alice!
    greet("Bob", "Hi")  # Output: Hi, Bob!
    
    # *args for multiple arguments
    def sum_all(*numbers):
        return sum(numbers)
    
    print(sum_all(1, 2, 3, 4))  # Output: 10
    
    # **kwargs for keyword arguments
    def user_info(**info):
        for key, value in info.items():
            print(f"{key}: {value}")
    
    user_info(name="Alice", age=25, city="New York")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "return-values",
          title: "Return Values",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Return Values</h3>
              <p>Functions can return values using the <code>return</code> statement.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Returning multiple values
    def get_coordinates():
        return 10, 20
    
    x, y = get_coordinates()
    print(x, y)  # Output: 10 20`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "lambda-functions",
          title: "Lambda Functions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Lambda Functions</h3>
              <p>Lambda functions are small anonymous functions.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Lambda function for addition
    add = lambda x, y: x + y
    print(add(3, 4))  # Output: 7`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "built-in-functions",
          title: "Built-in Functions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Built-in Functions</h3>
              <p>Python provides several built-in functions like <code>len()</code>, <code>max()</code>, <code>min()</code>, <code>sum()</code>, <code>sorted()</code>.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`numbers = [3, 1, 4, 1, 5]
    print(len(numbers))  # Output: 5
    print(max(numbers))  # Output: 5
    print(sum(numbers))  # Output: 14`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "importing-modules",
          title: "Importing Modules",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Importing Modules</h3>
              <p>Modules can be imported using the <code>import</code> statement.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`import math
    print(math.sqrt(16))  # Output: 4.0`}
                </code>
              </pre>
              <p>Specific functions can also be imported:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`from math import sqrt
    print(sqrt(25))  # Output: 5.0`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "creating-modules",
          title: "Creating Custom Modules",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Creating Custom Modules</h3>
              <p>A Python module is simply a file with a <code>.py</code> extension.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# mymodule.py
    def greet(name):
        return f"Hello, {name}!"`}
                </code>
              </pre>
              <p>It can be imported into another script:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`import mymodule
    print(mymodule.greet("Alice"))  # Output: Hello, Alice!`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    }
    ,
    {
      id: "lists-tuples-and-sets",
      title: "Lists, Tuples, and Sets",
      subtopics: [
        {
          id: "lists",
          title: "Lists",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Lists in Python</h3>
              <p>Lists are ordered, mutable collections that allow duplicate elements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a list
    fruits = ["apple", "banana", "cherry"]
    print(fruits)  # Output: ['apple', 'banana', 'cherry']
    
    # Accessing elements
    print(fruits[0])  # Output: apple
    
    # Modifying a list
    fruits.append("orange")
    print(fruits)  # Output: ['apple', 'banana', 'cherry', 'orange']
    
    # Removing an element
    fruits.remove("banana")
    print(fruits)  # Output: ['apple', 'cherry', 'orange']
    
    # List comprehension
    squares = [x**2 for x in range(5)]
    print(squares)  # Output: [0, 1, 4, 9, 16]`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "list-methods",
          title: "List Methods",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Common List Methods</h3>
              <ul className="list-disc pl-5">
                <li><code>append()</code> - Adds an element at the end.</li>
                <li><code>insert()</code> - Inserts an element at a specific index.</li>
                <li><code>remove()</code> - Removes a specified element.</li>
                <li><code>pop()</code> - Removes and returns the last element.</li>
                <li><code>sort()</code> - Sorts the list in place.</li>
                <li><code>reverse()</code> - Reverses the list.</li>
              </ul>
              <pre className="language-python">
                <code className="language-python">
                  {`fruits = ["apple", "banana", "cherry"]
    fruits.append("mango")
    print(fruits)  # Output: ['apple', 'banana', 'cherry', 'mango']
    
    fruits.sort()
    print(fruits)  # Output: ['apple', 'banana', 'cherry', 'mango']
    
    fruits.reverse()
    print(fruits)  # Output: ['mango', 'cherry', 'banana', 'apple']`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "tuples",
          title: "Tuples",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Tuples in Python</h3>
              <p>Tuples are ordered, immutable collections that allow duplicate elements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a tuple
    colors = ("red", "green", "blue")
    print(colors)  # Output: ('red', 'green', 'blue')
    
    # Accessing elements
    print(colors[1])  # Output: green
    
    # Tuple unpacking
    a, b, c = colors
    print(a, b, c)  # Output: red green blue`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "tuple-methods",
          title: "Tuple Methods",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Common Tuple Methods</h3>
              <ul className="list-disc pl-5">
                <li><code>count()</code> - Counts occurrences of a value.</li>
                <li><code>index()</code> - Returns the index of a value.</li>
              </ul>
              <pre className="language-python">
                <code className="language-python">
                  {`numbers = (1, 2, 3, 2, 4, 2)
    print(numbers.count(2))  # Output: 3
    
    print(numbers.index(3))  # Output: 2`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "sets",
          title: "Sets",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Sets in Python</h3>
              <p>Sets are unordered, mutable collections that do not allow duplicate elements.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a set
    unique_numbers = {1, 2, 3, 4, 4, 5}
    print(unique_numbers)  # Output: {1, 2, 3, 4, 5}
    
    # Adding and removing elements
    unique_numbers.add(6)
    unique_numbers.remove(2)
    
    print(unique_numbers)  # Output: {1, 3, 4, 5, 6}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "set-operations",
          title: "Set Operations",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Set Operations</h3>
              <p>Python sets support various operations such as union, intersection, and difference.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`A = {1, 2, 3, 4}
    B = {3, 4, 5, 6}
    
    # Union
    print(A | B)  # Output: {1, 2, 3, 4, 5, 6}
    
    # Intersection
    print(A & B)  # Output: {3, 4}
    
    # Difference
    print(A - B)  # Output: {1, 2}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "list-vs-tuple-vs-set",
          title: "List vs Tuple vs Set",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Differences Between Lists, Tuples, and Sets</h3>
              <table className="border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">Feature</th>
                    <th className="border border-gray-400 px-2 py-1">List</th>
                    <th className="border border-gray-400 px-2 py-1">Tuple</th>
                    <th className="border border-gray-400 px-2 py-1">Set</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Ordered</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                    <td className="border border-gray-400 px-2 py-1">❌</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Mutable</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                    <td className="border border-gray-400 px-2 py-1">❌</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Allows Duplicates</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                    <td className="border border-gray-400 px-2 py-1">✔️</td>
                    <td className="border border-gray-400 px-2 py-1">❌</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ],
    }
    ,
    {
      id: "dictionaries",
      title: "Dictionaries",
      subtopics: [
        {
          id: "introduction",
          title: "Introduction to Dictionaries",
          content: (
            <div>
              <h3 className="text-xl font-semibold">What are Dictionaries?</h3>
              <p>Dictionaries in Python are unordered collections of key-value pairs. They allow fast lookups and modifications.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a dictionary
    person = {
        "name": "Alice",
        "age": 25,
        "city": "New York"
    }
    
    # Accessing values
    print(person["name"])  # Output: Alice
    print(person.get("age"))  # Output: 25
    
    # Adding a new key-value pair
    person["job"] = "Engineer"
    print(person)  # Output: {'name': 'Alice', 'age': 25, 'city': 'New York', 'job': 'Engineer'}
    
    # Removing a key
    del person["city"]
    print(person)  # Output: {'name': 'Alice', 'age': 25, 'job': 'Engineer'}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "dictionary-methods",
          title: "Dictionary Methods",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Common Dictionary Methods</h3>
              <ul className="list-disc pl-5">
                <li><code>keys()</code> - Returns a view of all keys.</li>
                <li><code>values()</code> - Returns a view of all values.</li>
                <li><code>items()</code> - Returns key-value pairs as tuples.</li>
                <li><code>get()</code> - Safely gets a value (avoids KeyError).</li>
                <li><code>pop()</code> - Removes a key and returns its value.</li>
                <li><code>update()</code> - Merges another dictionary.</li>
              </ul>
              <pre className="language-python">
                <code className="language-python">
                  {`# Example of dictionary methods
    person = {"name": "Alice", "age": 25, "city": "New York"}
    
    print(person.keys())    # Output: dict_keys(['name', 'age', 'city'])
    print(person.values())  # Output: dict_values(['Alice', 25, 'New York'])
    print(person.items())   # Output: dict_items([('name', 'Alice'), ('age', 25), ('city', 'New York')])
    
    # Using pop()
    age = person.pop("age")
    print(person)  # Output: {'name': 'Alice', 'city': 'New York'}
    print(age)  # Output: 25`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "looping-dictionaries",
          title: "Looping Through Dictionaries",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Iterating Over a Dictionary</h3>
              <p>You can iterate over dictionary keys, values, or both.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`person = {"name": "Alice", "age": 25, "city": "New York"}
    
    # Loop through keys
    for key in person:
        print(key, "->", person[key])
    
    # Loop through key-value pairs
    for key, value in person.items():
        print(f"{key}: {value}")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "nested-dictionaries",
          title: "Nested Dictionaries",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Working with Nested Dictionaries</h3>
              <p>Python allows dictionaries to contain other dictionaries.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a nested dictionary
    students = {
        "student1": {"name": "Alice", "age": 22},
        "student2": {"name": "Bob", "age": 24}
    }
    
    # Accessing nested values
    print(students["student1"]["name"])  # Output: Alice`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "dictionary-comprehension",
          title: "Dictionary Comprehension",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Dictionary Comprehension</h3>
              <p>Use comprehension to create dictionaries efficiently.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Creating a dictionary with comprehension
    squares = {x: x**2 for x in range(5)}
    print(squares)  # Output: {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "dictionary-vs-list",
          title: "Dictionary vs List",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Dictionaries vs Lists</h3>
              <table className="border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">Feature</th>
                    <th className="border border-gray-400 px-2 py-1">Dictionaries</th>
                    <th className="border border-gray-400 px-2 py-1">Lists</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Access</td>
                    <td className="border border-gray-400 px-2 py-1">Key-based lookup (fast)</td>
                    <td className="border border-gray-400 px-2 py-1">Index-based lookup</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Order</td>
                    <td className="border border-gray-400 px-2 py-1">Preserves insertion order (Python 3.7+)</td>
                    <td className="border border-gray-400 px-2 py-1">Ordered</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Duplicates</td>
                    <td className="border border-gray-400 px-2 py-1">No duplicate keys</td>
                    <td className="border border-gray-400 px-2 py-1">Allows duplicates</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1">Use Case</td>
                    <td className="border border-gray-400 px-2 py-1">Fast lookups & structured data</td>
                    <td className="border border-gray-400 px-2 py-1">Sequential data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
      ],
    }
    ,
    {
      id: "file-handling",
      title: "File Handling",
      subtopics: [
        {
          id: "introduction",
          title: "Introduction to File Handling",
          content: (
            <div>
              <h3 className="text-xl font-semibold">What is File Handling?</h3>
              <p>File handling in Python allows you to create, read, update, and delete files.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Opening a file
    file = open("example.txt", "r")  # 'r' means read mode
    content = file.read()
    print(content)
    file.close()`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "file-modes",
          title: "File Modes",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Python File Modes</h3>
              <table className="border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">Mode</th>
                    <th className="border border-gray-400 px-2 py-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>"r"</code></td>
                    <td className="border border-gray-400 px-2 py-1">Read (default mode, raises an error if file doesn’t exist)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>"w"</code></td>
                    <td className="border border-gray-400 px-2 py-1">Write (creates a new file or overwrites an existing file)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>"a"</code></td>
                    <td className="border border-gray-400 px-2 py-1">Append (adds new content without deleting existing data)</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>"x"</code></td>
                    <td className="border border-gray-400 px-2 py-1">Exclusive creation (fails if the file exists)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          id: "reading-files",
          title: "Reading Files",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Reading a File</h3>
              <p>Use <code>read()</code>, <code>readline()</code>, or <code>readlines()</code> to read content.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Reading entire content
    with open("example.txt", "r") as file:
        content = file.read()
        print(content)
    
    # Reading line by line
    with open("example.txt", "r") as file:
        for line in file:
            print(line.strip())`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "writing-files",
          title: "Writing to Files",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Writing to a File</h3>
              <p>Use <code>"w"</code> mode to write or <code>"a"</code> mode to append content.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`# Writing to a file
    with open("example.txt", "w") as file:
        file.write("Hello, this is a new file!")
    
    # Appending to a file
    with open("example.txt", "a") as file:
        file.write("\\nAdding a new line.")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "file-pointer",
          title: "Understanding File Pointer",
          content: (
            <div>
              <h3 className="text-xl font-semibold">File Pointer Positioning</h3>
              <p>Use <code>seek()</code> and <code>tell()</code> to manage file pointer position.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`with open("example.txt", "r") as file:
        print(file.tell())  # Shows current position
        file.seek(5)  # Moves to 5th byte
        print(file.read())  # Reads from the new position`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "handling-exceptions",
          title: "Handling File Exceptions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Handling Errors in File Handling</h3>
              <p>Use <code>try-except</code> to handle missing files or permission errors.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`try:
        with open("nonexistent.txt", "r") as file:
            content = file.read()
    except FileNotFoundError:
        print("File not found!")`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    }
    ,
    {
      id: "exception-handling",
      title: "Exception Handling",
      subtopics: [
        {
          id: "introduction",
          title: "Introduction to Exception Handling",
          content: (
            <div>
              <h3 className="text-xl font-semibold">What is Exception Handling?</h3>
              <p>
                Exception handling in Python allows you to handle errors gracefully and prevent your program from crashing.
                Python uses <code>try-except</code> blocks to catch and handle exceptions.
              </p>
              <pre className="language-python">
                <code className="language-python">
                  {`try:
        x = 10 / 0  # This will cause a ZeroDivisionError
    except ZeroDivisionError:
        print("Cannot divide by zero!")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "common-exceptions",
          title: "Common Python Exceptions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Types of Exceptions in Python</h3>
              <table className="border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">Exception</th>
                    <th className="border border-gray-400 px-2 py-1">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>ZeroDivisionError</code></td>
                    <td className="border border-gray-400 px-2 py-1">Raised when dividing by zero.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>ValueError</code></td>
                    <td className="border border-gray-400 px-2 py-1">Raised when a function receives an invalid argument.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>TypeError</code></td>
                    <td className="border border-gray-400 px-2 py-1">Raised when an operation is performed on an incorrect data type.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-400 px-2 py-1"><code>FileNotFoundError</code></td>
                    <td className="border border-gray-400 px-2 py-1">Raised when a file is not found.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ),
        },
        {
          id: "handling-multiple-exceptions",
          title: "Handling Multiple Exceptions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Catching Multiple Exceptions</h3>
              <p>You can catch multiple exceptions using multiple <code>except</code> blocks.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`try:
        num = int(input("Enter a number: "))
        result = 10 / num
    except ZeroDivisionError:
        print("Error: Cannot divide by zero!")
    except ValueError:
        print("Error: Invalid input, please enter a number.")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "finally-block",
          title: "Using the Finally Block",
          content: (
            <div>
              <h3 className="text-xl font-semibold">The Finally Block</h3>
              <p>The <code>finally</code> block executes code no matter what, even if an exception occurs.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`try:
        file = open("example.txt", "r")
        content = file.read()
    except FileNotFoundError:
        print("File not found!")
    finally:
        print("Closing the file...")
        file.close()  # Ensures the file is closed`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "raising-exceptions",
          title: "Raising Exceptions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Manually Raising Exceptions</h3>
              <p>Use <code>raise</code> to trigger an exception manually.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`age = int(input("Enter your age: "))
    if age < 18:
        raise ValueError("Age must be 18 or older!")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "custom-exceptions",
          title: "Creating Custom Exceptions",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Defining Custom Exceptions</h3>
              <p>You can define your own exceptions by creating a custom class.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`class CustomError(Exception):
        def __init__(self, message):
            self.message = message
            super().__init__(self.message)
    
    try:
        raise CustomError("This is a custom exception!")
    except CustomError as e:
        print(e)`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    }
    ,
    {
      id: "object-oriented-programming",
      title: "Object-Oriented Programming",
      subtopics: [
        { id: "arithmetic", title: "Arithmetic Operators", content: <p>+, -, *, /, %</p> },
        { id: "logical", title: "Logical Operators", content: <p>and, or, not</p> },
      ],
    },
    {
      id: "working-with-external-libraries",
      title: "Working with External Libraries",
      subtopics: [
        {
          id: "installing-packages",
          title: "Installing Packages",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Using pip to Install Packages</h3>
              <p>
                Python has a built-in package manager called <code>pip</code>. You can use it to install external libraries from the Python Package Index (PyPI).
              </p>
              <pre className="language-bash">
                <code className="language-bash">pip install requests</code>
              </pre>
              <p>To check if a package is installed, use:</p>
              <pre className="language-bash">
                <code className="language-bash">pip list</code>
              </pre>
              <p>To upgrade a package:</p>
              <pre className="language-bash">
                <code className="language-bash">pip install --upgrade requests</code>
              </pre>
            </div>
          ),
        },
        {
          id: "using-requests",
          title: "Making HTTP Requests with requests",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Using the requests Library</h3>
              <p>
                The <code>requests</code> library allows you to send HTTP requests easily. First, install it:
              </p>
              <pre className="language-bash">
                <code className="language-bash">pip install requests</code>
              </pre>
              <p>Example of making a GET request:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`import requests
    
    response = requests.get("https://api.github.com")
    print(response.json())`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "using-numpy",
          title: "Working with NumPy",
          content: (
            <div>
              <h3 className="text-xl font-semibold">NumPy for Numerical Computing</h3>
              <p>
                NumPy is a powerful library for numerical operations in Python. Install it with:
              </p>
              <pre className="language-bash">
                <code className="language-bash">pip install numpy</code>
              </pre>
              <p>Example of using NumPy:</p>
              <pre className="language-python">
                <code className="language-python">
                  {`import numpy as np
    
    arr = np.array([1, 2, 3, 4, 5])
    print("Array:", arr)
    print("Mean:", np.mean(arr))`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "creating-virtual-envs",
          title: "Using Virtual Environments",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Isolating Projects with Virtual Environments</h3>
              <p>
                A virtual environment helps keep dependencies separate between projects. Create one with:
              </p>
              <pre className="language-bash">
                <code className="language-bash">python -m venv myenv</code>
              </pre>
              <p>Activate it:</p>
              <ul className="list-disc pl-5">
                <li><strong>Windows:</strong> <pre className="language-bash"><code className="language-bash">myenv\Scripts\activate</code></pre></li>
                <li><strong>Mac/Linux:</strong> <pre className="language-bash"><code className="language-bash">source myenv/bin/activate</code></pre></li>
              </ul>
              <p>To deactivate:</p>
              <pre className="language-bash">
                <code className="language-bash">deactivate</code>
              </pre>
            </div>
          ),
        },
      ],
    },    
    {
      id: "working-with-databases",
      title: "Working with Databases",
      subtopics: [
        {
          id: "connecting-to-database",
          title: "Connecting Python to SQLite/MySQL",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Connecting Python to SQLite</h3>
              <p>SQLite is a lightweight, file-based database that comes built-in with Python.</p>
              <pre className="language-python">
                <code className="language-python">
                  {`import sqlite3
    
    # Connect to database (or create one if it doesn't exist)
    conn = sqlite3.connect("mydatabase.db")
    
    # Create a cursor object
    cursor = conn.cursor()
    
    print("Connected to SQLite successfully!")`}
                </code>
              </pre>
    
              <h3 className="text-xl font-semibold mt-4">Connecting Python to MySQL</h3>
              <p>To connect to MySQL, you'll need the <code>mysql-connector-python</code> package.</p>
              <pre className="language-bash">
                <code className="language-bash">pip install mysql-connector-python</code>
              </pre>
              <pre className="language-python">
                <code className="language-python">
                  {`import mysql.connector
    
    # Connect to MySQL server
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="yourpassword",
        database="testdb"
    )
    
    cursor = conn.cursor()
    
    print("Connected to MySQL successfully!")`}
                </code>
              </pre>
            </div>
          ),
        },
        {
          id: "executing-sql-queries",
          title: "Executing SQL Queries in Python",
          content: (
            <div>
              <h3 className="text-xl font-semibold">Executing SQL Queries with SQLite</h3>
              <pre className="language-python">
                <code className="language-python">
                  {`# Create a table
    cursor.execute('''CREATE TABLE users (
        id INTEGER PRIMARY KEY, 
        name TEXT, 
        age INTEGER
    )''')
    
    # Insert data
    cursor.execute("INSERT INTO users (name, age) VALUES ('Alice', 25)")
    conn.commit()
    
    # Retrieve data
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    for row in rows:
        print(row)`}
                </code>
              </pre>
    
              <h3 className="text-xl font-semibold mt-4">Executing SQL Queries with MySQL</h3>
              <pre className="language-python">
                <code className="language-python">
                  {`# Create a table
    cursor.execute('''CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY, 
        name VARCHAR(100), 
        age INT
    )''')
    
    # Insert data
    cursor.execute("INSERT INTO users (name, age) VALUES ('Alice', 25)")
    conn.commit()
    
    # Retrieve data
    cursor.execute("SELECT * FROM users")
    rows = cursor.fetchall()
    for row in rows:
        print(row)`}
                </code>
              </pre>
            </div>
          ),
        },
      ],
    }
    
  ];

  const [activeSection, setActiveSection] = useState(sections[0]); // First section active
  const [activeSubtopic, setActiveSubtopic] = useState(sections[0].subtopics[0]); // First subtopic active

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
            <h2 className="text-blue-500 font-bold md:text-3xl my-2">Learning the Basics</h2>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="rounded-lg">
              <h3 className="text-2xl font-bold py-2 border-b-2 mb-4">Python Tutorial</h3>
              <ul className="list-disc pl-5 text-lg">
                {sections.map((section) => (
                  <li key={section.id}>
                    <div
                      className={`cursor-pointer py-1 ${activeSection.id === section.id ? "text-blue-500 font-bold" : "hover:text-blue-500"
                        }`}
                      onClick={() => {
                        setActiveSection(section);
                        setActiveSubtopic(section.subtopics[0]); // Set first subtopic active
                      }}
                    >
                      {section.title}
                    </div>
                    {/* Subnavigation */}
                    {activeSection.id === section.id && (
                      <ul className="pl-5 text-sm">
                        {section.subtopics.map((sub) => (
                          <li
                            key={sub.id}
                            className={`cursor-pointer py-1 ${activeSubtopic.id === sub.id ? "text-blue-500 font-bold" : "hover:text-blue-500"
                              }`}
                            onClick={() => setActiveSubtopic(sub)}
                          >
                            {sub.title}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            {/* Sidebar */}

            {/* Content */}
            <div className="p-10 rounded-lg w-full">
              <h3 className="text-2xl font-semibold">{activeSubtopic.title}</h3>
              {activeSubtopic.content}
            </div>
            {/* Content */}
          </div>
        </div>

        <div>
          <div className="my-10 rounded-xl">
            <div className="flex items-center gap-3 mb-5">
              <FaBolt className="text-blue-500 text-4xl" />
              <h2 className="text-blue-500 font-bold md:text-3xl">One-Liners</h2>
            </div>

            {Object.entries(oneLiners).slice(0, visibleOneliners).map(([category, items]) => (
              <div key={category} className="mb-6">
                <h3 className="font-bold mb-3 md:text-2xl">{category}</h3>
                <div className="flex-wrap flex gap-10 items-center">
                  {items.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center bg-blue-900 text-white p-3 rounded-lg relative">
                        <pre className="overflow-x-auto w-full">
                          <code className="language-python">{item.code}</code>
                        </pre>
                        <button className="ml-3 text-white hover:text-gray-300 transition">
                          <FaCopy />
                        </button>
                      </div>
                      <p className="text-blue-500 mt-2 font-semibold text-lg">{item.description}</p>
                      <p className="text-sm">{item.walkthrough}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {Object.keys(oneLiners).length > INITIAL_VISIBLE_ONELINERS && (
              <div className="text-center my-5">
                <button onClick={toggleOnelinersView} className="bg-blue-900 text-white px-5 py-2 rounded-xl">
                  {expandedOneliners ? "View Less" : "View More..."}
                </button>
              </div>
            )}
          </div>
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

        <div className="my-10 rounded-xl">
          <div className="flex items-center gap-3 mb-5">
            <FaPython className="text-blue-500 text-4xl" />
            <h2 className="text-blue-500 font-bold md:text-3xl">Python Resources</h2>
          </div>
          <ul>
            {pythonResources.map((resource, index) => (
              <li key={index} className="mb-3">
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-lg text-blue-500 hover:underline"
                >
                  {resource.icon} {resource.name}
                </a>
              </li>
            ))}
          </ul>

        </div>


      </div>
    </div>
  )
}

export default Python