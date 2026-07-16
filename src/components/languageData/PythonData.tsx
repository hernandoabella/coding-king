import python from 'react-syntax-highlighter/dist/esm/languages/hljs/python';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('python', python);

export const pythonConfig = {
  title: "Python Tutorial",
  language: 'python',
  tutorialData: [
    {
      id: 'basics',
      title: 'Python Basics',
      subtopics: [
        {
          id: 'variables',
          title: 'Variables',
          description: 'Declare variables with dynamic typing. Python infers the type from the assigned value.',
          content: `name = "Alice"
age = 25
height = 1.68
is_student = True
print(f"Name: {name}, Age: {age}, Height: {height}, Student: {is_student}")`,
          output: "Name: Alice, Age: 25, Height: 1.68, Student: True"
        },
        {
          id: 'data-types',
          title: 'Data Types',
          description: 'Python has built-in types: int, float, str, bool, list, tuple, dict, set, and NoneType.',
          content: `integer = 42
floating = 3.14
string = "Python"
boolean = False
nothing = None

print(f"int:     {type(integer).__name__}")
print(f"float:   {type(floating).__name__}")
print(f"str:     {type(string).__name__}")
print(f"bool:    {type(boolean).__name__}")
print(f"None:    {type(nothing).__name__}")`,
          output: "int:     int\nfloat:   float\nstr:     str\nbool:    bool\nNone:    NoneType"
        },
        {
          id: 'string-operations',
          title: 'String Operations',
          description: 'Slice, concatenate, format, and manipulate strings with built-in methods.',
          content: `text = "  Python Programming  "
print(f"Original: '{text}'")
print(f"Stripped: '{text.strip()}'")
print(f"Uppercase: '{text.upper()}'")
print(f"Slice [2:8]: '{text[2:8]}'")
print(f"Replace: '{text.replace('Python', 'Learn')}'")

# f-strings with expressions
x, y = 3, 4
print(f"{x} + {y} = {x + y}")
print(f"{x=}, {y=}")`,
          output: "Original: '  Python Programming  '\nStripped: 'Python Programming'\nUppercase: '  PYTHON PROGRAMMING  '\nSlice [2:8]: 'Python'\nReplace: '  Learn Programming  '\n3 + 4 = 7\nx=3, y=4"
        },
        {
          id: 'input-output',
          title: 'Input & Output',
          description: 'Read user input with input() and display output with print().',
          content: `# print() with separators and end
print("Hello", "World", sep=", ", end="!\\n")
print("Line 1", "Line 2", sep="\\n---\\n")

# Formatting output
name = "Alice"
score = 95.6789
print(f"{name:10s} | {score:.2f}")
print(f"{name:<10} | {score:>8.1f}")

# Simulated input (hardcoded for demo)
user_input = "Alice"
print(f"Welcome, {user_input}!")`,
          output: "Hello, World!\nLine 1\n---\nLine 2\nAlice      | 95.68\nAlice      |     95.7\nWelcome, Alice!"
        }
      ],
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      subtopics: [
        {
          id: 'if-else',
          title: 'If / Elif / Else',
          description: 'Branch execution based on conditions using if, elif, and else.',
          content: `score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"
print(f"Score: {score} -> Grade: {grade}")

# Ternary expression
age = 20
status = "Adult" if age >= 18 else "Minor"
print(f"Age {age}: {status}")`,
          output: "Score: 85 -> Grade: B\nAge 20: Adult"
        },
        {
          id: 'for-loops',
          title: 'For Loops & range()',
          description: 'Iterate over sequences and generate numeric ranges.',
          content: `fruits = ["apple", "banana", "cherry"]
for i, fruit in enumerate(fruits, 1):
    print(f"{i}. {fruit}")

# range(start, stop, step)
print("Even numbers:")
for n in range(2, 11, 2):
    print(f"  {n}")

# reversed iteration
print("Countdown:")
for i in range(5, 0, -1):
    print(i, end=" ")
print("Go!")`,
          output: "1. apple\n2. banana\n3. cherry\nEven numbers:\n  2\n  4\n  6\n  8\n  10\nCountdown:\n5 4 3 2 1 Go!"
        },
        {
          id: 'while-loops',
          title: 'While Loops',
          description: 'Execute code repeatedly while a condition holds true.',
          content: `count = 1
total = 0
while count <= 5:
    total += count
    count += 1
print(f"Sum 1..5 = {total}")

# while with break and else
n = 10
while n > 0:
    if n == 3:
        break
    n -= 1
else:
    print("Completed without break")
print(f"Stopped at n = {n}")`,
          output: "Sum 1..5 = 15\nStopped at n = 3"
        },
        {
          id: 'match-case',
          title: 'Match / Case',
          description: 'Structural pattern matching for cleaner multi-branch logic (Python 3.10+).',
          content: `def describe(value):
    match value:
        case 0:
            return "Zero"
        case int(n) if n > 0:
            return f"Positive int: {n}"
        case int(n) if n < 0:
            return f"Negative int: {n}"
        case str(s):
            return f"String of length {len(s)}: '{s}'"
        case [first, *rest]:
            return f"List starting with {first}, {len(rest)} more"
        case {"name": name, "age": age}:
            return f"Person: {name}, {age} years old"
        case _:
            return "Something else"

print(describe(42))
print(describe(-7))
print(describe("hello"))
print(describe([1, 2, 3]))
print(describe({"name": "Alice", "age": 25}))`,
          output: "Positive int: 42\nNegative int: -7\nString of length 5: 'hello'\nList starting with 1, 2 more\nPerson: Alice, 25 years old"
        }
      ],
    },
    {
      id: 'functions',
      title: 'Functions',
      subtopics: [
        {
          id: 'defining-functions',
          title: 'Defining Functions',
          description: 'Create reusable code blocks with def, parameters, and return values.',
          content: `def greet(name):
    """Return a personalized greeting."""
    return f"Hello, {name}!"

def power(base, exp=2):
    return base ** exp

print(greet("Alice"))
print(f"3^4 = {power(3, 4)}")
print(f"5^2 = {power(5)}")
print(f"Docstring: {greet.__doc__}")`,
          output: "Hello, Alice!\n3^4 = 81\n5^2 = 25\nDocstring: Return a personalized greeting."
        },
        {
          id: 'args-kwargs',
          title: '*args and **kwargs',
          description: 'Accept variable numbers of positional and keyword arguments.',
          content: `def order(item, quantity=1, *extras, **details):
    print(f"Order: {quantity}x {item}")
    if extras:
        print(f"  Extras: {', '.join(extras)}")
    if details:
        for k, v in details.items():
            print(f"  {k}: {v}")

order("Latte", 2, "oat milk", "extra shot", size="large", temp="hot")

# Unpacking
nums = [1, 2, 3, 4]
print(*nums, sep=" | ")

info = {"name": "Bob", "age": 30}
print("{name} is {age}".format(**info))`,
          output: "Order: 2x Latte\n  Extras: oat milk, extra shot\n  size: large\n  temp: hot\n1 | 2 | 3 | 4\nBob is 30"
        },
        {
          id: 'lambda',
          title: 'Lambda Functions',
          description: 'Create small anonymous functions for use with map(), filter(), and sorted().',
          content: `nums = [1, 2, 3, 4, 5]

# map: apply function to every element
squared = list(map(lambda x: x ** 2, nums))
print(f"Squared: {squared}")

# filter: keep elements that pass a test
evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"Evens: {evens}")

# sorted with custom key
words = ["banana", "apple", "cherry", "date"]
by_length = sorted(words, key=lambda w: len(w))
print(f"By length: {by_length}")
by_last = sorted(words, key=lambda w: w[-1])
print(f"By last char: {by_last}")`,
          output: "Squared: [1, 4, 9, 16, 25]\nEvens: [2, 4]\nBy length: ['date', 'apple', 'banana', 'cherry']\nBy last char: ['banana', 'apple', 'date', 'cherry']"
        },
        {
          id: 'decorators',
          title: 'Decorators',
          description: 'Wrap functions to add behavior before/after execution without modifying the original.',
          content: `import time

def timer(func):
    def wrapper(*args, **kwargs):
        start = time.perf_counter()
        result = func(*args, **kwargs)
        elapsed = time.perf_counter() - start
        print(f"{func.__name__} took {elapsed:.6f}s")
        return result
    return wrapper

@timer
def slow_sum(n):
    return sum(range(n))

@timer
def fast_mul(a, b):
    return a * b

print(f"Sum: {slow_sum(100000)}")
print(f"Mul: {fast_mul(123, 456)}")`,
          output: "slow_sum took 0.001234s\nSum: 4999950000\nfast_mul took 0.000001s\nMul: 56088"
        }
      ],
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      subtopics: [
        {
          id: 'lists',
          title: 'Lists',
          description: 'Ordered, mutable collections with slicing, sorting, and list methods.',
          content: `nums = [3, 1, 4, 1, 5, 9, 2, 6]
print(f"Original: {nums}")

# Methods
nums.append(8)
nums.insert(0, 0)
nums.remove(1)  # first occurrence
print(f"Modified: {nums}")

# Slicing
print(f"First 3: {nums[:3]}")
print(f"Last 3: {nums[-3:]}")
print(f"Reversed: {nums[::-1]}")

# Sorting
nums.sort()
print(f"Sorted: {nums}")
nums.sort(reverse=True)
print(f"Descending: {nums}")`,
          output: "Original: [3, 1, 4, 1, 5, 9, 2, 6]\nModified: [0, 3, 4, 1, 5, 9, 2, 6, 8]\nFirst 3: [0, 3, 4]\nLast 3: [6, 2, 9]\nReversed: [8, 6, 2, 9, 5, 1, 4, 3, 0]\nSorted: [0, 1, 2, 3, 4, 5, 6, 8, 9]\nDescending: [9, 8, 6, 5, 4, 3, 2, 1, 0]"
        },
        {
          id: 'dictionaries',
          title: 'Dictionaries',
          description: 'Key-value mappings with fast O(1) lookups.',
          content: `student = {"name": "Alice", "age": 22, "gpa": 3.8}

# Access
print(f"Name: {student['name']}")
print(f"Age: {student.get('age', 'N/A')}")
print(f"Major: {student.get('major', 'Undeclared')}")

# Modify
student["gpa"] = 3.9
student["courses"] = ["Math", "CS", "Physics"]
del student["age"]

# Iterate
for key, value in student.items():
    print(f"  {key}: {value}")

# Dict comprehension
squares = {x: x**2 for x in range(1, 6)}
print(f"Squares: {squares}")`,
          output: "Name: Alice\nAge: 22\nMajor: Undeclared\n  name: Alice\n  gpa: 3.9\n  courses: ['Math', 'CS', 'Physics']\nSquares: {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}"
        },
        {
          id: 'sets',
          title: 'Sets & Set Operations',
          description: 'Unordered collections of unique elements with mathematical set operations.',
          content: `a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(f"a = {a}")
print(f"b = {b}")
print(f"Union:        {a | b}")
print(f"Intersection: {a & b}")
print(f"Difference:   {a - b}")
print(f"Sym. Diff:    {a ^ b}")

# Practical: remove duplicates
data = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4]
unique = list(set(data))
print(f"Unique: {unique}")

# Set comprehension
evens_squared = {x**2 for x in range(10) if x % 2 == 0}
print(f"Even squares: {evens_squared}")`,
          output: "a = {1, 2, 3, 4, 5}\nb = {4, 5, 6, 7, 8}\nUnion:        {1, 2, 3, 4, 5, 6, 7, 8}\nIntersection: {4, 5}\nDifference:   {1, 2, 3}\nSym. Diff:    {1, 2, 3, 6, 7, 8}\nUnique: [1, 2, 3, 4]\nEven squares: {0, 64, 4, 36, 16}"
        },
        {
          id: 'tuples',
          title: 'Tuples',
          description: 'Immutable ordered sequences, useful as dictionary keys and for returning multiple values.',
          content: `# Creating tuples
point = (3, 4)
rgb = 255, 128, 0  # parentheses optional
single = (42,)     # trailing comma needed

print(f"Point: {point}, x={point[0]}, y={point[1]}")
print(f"RGB: {rgb}")

# Unpacking
x, y = point
r, g, b = rgb
print(f"x={x}, y={y}, r={r}, g={g}, b={b}")

# Named tuples
from collections import namedtuple
Person = namedtuple('Person', ['name', 'age'])
alice = Person('Alice', 25)
print(f"Person: {alice.name}, {alice.age}")`,
          output: "Point: (3, 4), x=3, y=4\nRGB: (255, 128, 0)\nx=3, y=4, r=255, g=128, b=0\nPerson: Alice, 25"
        }
      ],
    },
    {
      id: 'comprehensions',
      title: 'Comprehensions',
      subtopics: [
        {
          id: 'list-comprehensions',
          title: 'List Comprehensions',
          description: 'Concise syntax for creating lists from iterables with optional filtering.',
          content: `# Basic
squares = [x**2 for x in range(1, 11)]
print(f"Squares: {squares}")

# With condition
evens = [x for x in range(1, 21) if x % 2 == 0]
print(f"Evens: {evens}")

# If-else in comprehension
labels = ["even" if x % 2 == 0 else "odd" for x in range(1, 7)]
print(f"Labels: {labels}")

# Nested loops
pairs = [(x, y) for x in range(1, 4) for y in range(1, 4) if x != y]
print(f"Pairs x!=y: {pairs}")`,
          output: "Squares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\nEvens: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\nLabels: ['odd', 'even', 'odd', 'even', 'odd', 'even']\nPairs x!=y: [(1, 2), (1, 3), (2, 1), (2, 3), (3, 1), (3, 2)]"
        },
        {
          id: 'dict-set-comprehensions',
          title: 'Dict & Set Comprehensions',
          description: 'Apply comprehension syntax to build dictionaries and sets.',
          content: `# Dict comprehension
word = "mississippi"
freq = {ch: word.count(ch) for ch in set(word)}
print(f"Letter freq: {freq}")

# Swapping keys and values
original = {"a": 1, "b": 2, "c": 3}
swapped = {v: k for k, v in original.items()}
print(f"Swapped: {swapped}")

# Set comprehension
unique_lengths = {len(name) for name in ["Alice", "Bob", "Charlie", "Dan"]}
print(f"Name lengths: {unique_lengths}")

# Generator expression (parentheses)
sum_of_squares = sum(x**2 for x in range(1, 101))
print(f"Sum of squares 1..100: {sum_of_squares}")`,
          output: "Letter freq: {'m': 1, 'i': 4, 's': 4, 'p': 2}\nSwapped: {1: 'a', 2: 'b', 3: 'c'}\nName lengths: {3, 7, 5}\nSum of squares 1..100: 338350"
        }
      ],
    },
    {
      id: 'oop',
      title: 'Object-Oriented Programming',
      subtopics: [
        {
          id: 'classes',
          title: 'Classes & Objects',
          description: 'Define classes with __init__, attributes, and methods.',
          content: `class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient funds")
        self.balance -= amount
        return self.balance

    def __str__(self):
        return f"{self.owner}'s account: \${self.balance:.2f}"

acc = BankAccount("Alice", 100)
print(acc)
acc.deposit(50)
print(f"After deposit: \${acc.balance}")
acc.withdraw(30)
print(f"After withdraw: \${acc.balance}")`,
          output: "Alice's account: $100.00\nAfter deposit: $150.00\nAfter withdraw: $120.00"
        },
        {
          id: 'inheritance',
          title: 'Inheritance',
          description: 'Extend classes to reuse and specialize behavior.',
          content: `class Animal:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "Some sound"

class Dog(Animal):
    def speak(self):
        return f"{self.name} says Woof!"

class Cat(Animal):
    def speak(self):
        return f"{self.name} says Meow!"

pets = [Dog("Rex"), Cat("Whiskers"), Dog("Buddy")]
for pet in pets:
    print(pet.speak())
print(f"All animals: {[p.name for p in pets]}")
print(f"isinstance check: {isinstance(pets[0], Animal)}")`,
          output: "Rex says Woof!\nWhiskers says Meow!\nBuddy says Woof!\nAll animals: ['Rex', 'Whiskers', 'Buddy']\nisinstance check: True"
        },
        {
          id: 'properties',
          title: 'Properties & Encapsulation',
          description: 'Use @property for controlled attribute access and computed attributes.',
          content: `class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius

    @property
    def celsius(self):
        return self._celsius

    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Below absolute zero!")
        self._celsius = value

    @property
    def fahrenheit(self):
        return self._celsius * 9/5 + 32

    @property
    def kelvin(self):
        return self._celsius + 273.15

t = Temperature(25)
print(f"C: {t.celsius}, F: {t.fahrenheit:.1f}, K: {t.kelvin:.1f}")
t.celsius = 100
print(f"C: {t.celsius}, F: {t.fahrenheit:.1f}, K: {t.kelvin:.1f}")`,
          output: "C: 25, F: 77.0, K: 298.1\nC: 100, F: 212.0, K: 373.1"
        },
        {
          id: 'dunder-methods',
          title: 'Dunder Methods',
          description: 'Customize object behavior with __str__, __repr__, __eq__, __add__, and more.',
          content: `class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __repr__(self):
        return f"Vector({self.x}, {self.y})"

    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __abs__(self):
        return (self.x**2 + self.y**2) ** 0.5

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(f"v1 = {v1}")
print(f"v2 = {v2}")
print(f"v1 + v2 = {v1 + v2}")
print(f"v1 * 3 = {v1 * 3}")
print(f"|v1| = {abs(v1):.2f}")
print(f"v1 == v2: {v1 == v2}")
print(f"v1 == Vector(3,4): {v1 == Vector(3, 4)}")`,
          output: "v1 = Vector(3, 4)\nv2 = Vector(1, 2)\nv1 + v2 = Vector(4, 6)\nv1 * 3 = Vector(9, 12)\n|v1| = 5.00\nv1 == v2: False\nv1 == Vector(3,4): True"
        }
      ],
    },
    {
      id: 'error-handling',
      title: 'Error Handling',
      subtopics: [
        {
          id: 'try-except',
          title: 'Try / Except',
          description: 'Catch and handle exceptions to prevent program crashes.',
          content: `def safe_divide(a, b):
    try:
        result = a / b
        return f"{a} / {b} = {result:.2f}"
    except ZeroDivisionError:
        return "Cannot divide by zero!"
    except TypeError:
        return "Both arguments must be numbers!"

print(safe_divide(10, 3))
print(safe_divide(10, 0))
print(safe_divide(10, "2"))

# Multiple exceptions
try:
    num = int("abc")
except (ValueError, TypeError) as e:
    print(f"Conversion failed: {e}")`,
          output: "10 / 3 = 3.33\nCannot divide by zero!\nBoth arguments must be numbers!\nConversion failed: invalid literal for int() with base 10: 'abc'"
        },
        {
          id: 'finally-else',
          title: 'Finally & Else',
          description: 'Use else for code that runs only on success, finally for cleanup.',
          content: `def read_config(filename):
    try:
        f = open(filename, 'r')
    except FileNotFoundError:
        print(f"File '{filename}' not found, using defaults")
        return {"host": "localhost", "port": 8080}
    else:
        print(f"Reading from '{filename}'...")
        return {"host": "0.0.0.0", "port": 3000}
    finally:
        print("Config loading complete.")

config = read_config("settings.txt")
print(f"Config: {config}")
print()
config2 = read_config("nonexistent.cfg")
print(f"Config: {config2}")`,
          output: "File 'settings.txt' not found, using defaults\nConfig loading complete.\nConfig: {'host': 'localhost', 'port': 8080}\n\nFile 'nonexistent.cfg' not found, using defaults\nConfig loading complete.\nConfig: {'host': 'localhost', 'port': 8080}"
        },
        {
          id: 'custom-exceptions',
          title: 'Custom Exceptions',
          description: 'Define your own exception classes for domain-specific errors.',
          content: `class InsufficientFundsError(Exception):
    def __init__(self, balance, amount):
        self.balance = balance
        self.amount = amount
        super().__init__(f"Insufficient funds: "
                         f"balance=\${balance}, "
                         f"needed=\${amount}")

def withdraw(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw(50, 100)
except InsufficientFundsError as e:
    print(f"ERROR: {e}")

try:
    result = withdraw(200, 75)
    print(f"New balance: \${result}")
except InsufficientFundsError as e:
    print(f"ERROR: {e}")`,
          output: "ERROR: Insufficient funds: balance=$50, needed=$100\nNew balance: $125"
        }
      ],
    },
    {
      id: 'file-io',
      title: 'File I/O',
      subtopics: [
        {
          id: 'reading-files',
          title: 'Reading Files',
          description: 'Read file contents with open(), read(), readlines(), and iterate over lines.',
          content: `# Writing a demo file (simulated)
with open("demo.txt", "w") as f:
    f.write("Line 1: Hello World\\n")
    f.write("Line 2: Python is fun\\n")
    f.write("Line 3: File I/O example\\n")

# Reading line by line
with open("demo.txt", "r") as f:
    for i, line in enumerate(f, 1):
        print(f"{i}: {line.strip()}")

# Read all at once
with open("demo.txt", "r") as f:
    content = f.read()
word_count = len(content.split())
print(f"\\nTotal words: {word_count}")`,
          output: "1: Line 1: Hello World\n2: Line 2: Python is fun\n3: Line 3: File I/O example\n\nTotal words: 12"
        },
        {
          id: 'writing-files',
          title: 'Writing Files',
          description: 'Write and append data to files with different modes.',
          content: `# Write mode (overwrites)
with open("output.txt", "w") as f:
    f.write("First line\\n")
    f.write("Second line\\n")

# Append mode
with open("output.txt", "a") as f:
    f.write("Third line (appended)\\n")

# Read back
with open("output.txt", "r") as f:
    print(f.read())

# Using csv module
import csv
with open("data.csv", "w", newline='') as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Score"])
    writer.writerow(["Alice", 95])
    writer.writerow(["Bob", 87])

print("CSV written successfully")`,
          output: "First line\nSecond line\nThird line (appended)\n\nCSV written successfully"
        },
        {
          id: 'json-files',
          title: 'Working with JSON',
          description: 'Serialize and deserialize data with the json module.',
          content: `import json

# Python dict to JSON string
data = {
    "users": [
        {"name": "Alice", "email": "alice@example.com", "active": True},
        {"name": "Bob", "email": "bob@example.com", "active": False}
    ],
    "total": 2
}
json_str = json.dumps(data, indent=2)
print("JSON output:")
print(json_str)

# JSON string to Python dict
parsed = json.loads(json_str)
print(f"\\nParsed: {len(parsed['users'])} users")
print(f"First user: {parsed['users'][0]['name']}")

# Write to file
with open("users.json", "w") as f:
    json.dump(data, f, indent=2)
print("\\nSaved to users.json")`,
          output: "JSON output:\n{\n  \"users\": [\n    {\n      \"name\": \"Alice\",\n      \"email\": \"alice@example.com\",\n      \"active\": true\n    },\n    {\n      \"name\": \"Bob\",\n      \"email\": \"bob@example.com\",\n      \"active\": false\n    }\n  ],\n  \"total\": 2\n}\n\nParsed: 2 users\nFirst user: Alice\n\nSaved to users.json"
        }
      ],
    },
    {
      id: 'iterators-generators',
      title: 'Iterators & Generators',
      subtopics: [
        {
          id: 'iterators',
          title: 'Iterators',
          description: 'Understand the iterator protocol: __iter__() and __next__().',
          content: `class Countdown:
    def __init__(self, start):
        self.current = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.current <= 0:
            raise StopIteration
        value = self.current
        self.current -= 1
        return value

for num in Countdown(5):
    print(num, end=" ")
print()

# Using iter() and next()
it = iter([10, 20, 30])
print(next(it))
print(next(it))
print(next(it))`,
          output: "5 4 3 2 1 \n10\n20\n30"
        },
        {
          id: 'generators',
          title: 'Generators (yield)',
          description: 'Create lazy iterators with yield that produce values on demand.',
          content: `def fibonacci(n):
    """Generate first n Fibonacci numbers."""
    a, b = 0, 1
    for _ in range(n):
        yield a
        a, b = b, a + b

print("First 10 Fibonacci:")
for num in fibonacci(10):
    print(num, end=" ")
print()

# Generator expression vs list
import sys
gen = (x**2 for x in range(1000000))
lst = [x**2 for x in range(1000)]
print(f"\\nGenerator size: {sys.getsizeof(gen)} bytes")
print(f"List size: {sys.getsizeof(lst)} bytes")
print(f"First 5 from gen: {[next(gen) for _ in range(5)]}")`,
          output: "First 10 Fibonacci:\n0 1 1 2 3 5 8 13 21 34 \n\nGenerator size: 104 bytes\nList size: 8056 bytes\nFirst 5 from gen: [0, 1, 4, 9, 16]"
        },
        {
          id: 'itertools',
          title: 'itertools Module',
          description: 'Use itertools for efficient looping: count, cycle, repeat, chain, combinations.',
          content: `from itertools import count, cycle, chain, combinations

# Infinite counting (with break)
for i, val in enumerate(count(10, 5)):
    if i >= 5: break
    print(val, end=" ")
print()

# Cycle through a sequence
colors = cycle(["R", "G", "B"])
seq = [next(colors) for _ in range(7)]
print(f"Cycle: {seq}")

# Chain sequences together
chained = list(chain([1, 2], [3, 4], [5, 6]))
print(f"Chained: {chained}")

# Combinations
combs = list(combinations("ABC", 2))
print(f"Combinations of ABC (2): {combs}")`,
          output: "10 15 20 25 30 \nCycle: ['R', 'G', 'B', 'R', 'G', 'B', 'R']\nChained: [1, 2, 3, 4, 5, 6]\nCombinations of ABC (2): [('A', 'B'), ('A', 'C'), ('B', 'C')]"
        }
      ],
    },
    {
      id: 'modules',
      title: 'Modules & Packages',
      subtopics: [
        {
          id: 'imports',
          title: 'Importing Modules',
          description: 'Import standard library and third-party modules in various ways.',
          content: `# Different import styles
import math
from datetime import datetime, timedelta
from collections import Counter, defaultdict, deque
import random as rnd

# Using imported modules
print(f"Pi: {math.pi:.5f}")
print(f"Factorial 7: {math.factorial(7)}")
print(f"Now: {datetime.now().strftime('%Y-%m-%d %H:%M')}")
print(f"Tomorrow: {(datetime.now() + timedelta(days=1)).strftime('%Y-%m-%d')}")

# Counter
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
counts = Counter(words)
print(f"Most common: {counts.most_common(2)}")

# Random
rnd.seed(42)
print(f"Random picks: {[rnd.randint(1, 100) for _ in range(5)]}")`,
          output: "Pi: 3.14159\nFactorial 7: 5040\nNow: 2026-01-15 14:30\nTomorrow: 2026-01-16\nMost common: [('apple', 3), ('banana', 2)]\nRandom picks: [82, 15, 4, 95, 36]"
        },
        {
          id: 'custom-modules',
          title: 'Creating Modules',
          description: 'Organize code into reusable modules and packages with __init__.py.',
          content: `# Simulating a module structure
# File: utils/math_helpers.py
MODULE_CODE = '''
\"\"\"Math utility functions.\"\"\"
PI = 3.14159
def circle_area(radius):
    return PI * radius ** 2
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)
'''

# Import from a package
# from utils.math_helpers import circle_area, factorial
# For demo, we define them inline:
PI = 3.14159
def circle_area(radius):
    return PI * radius ** 2
def factorial(n):
    return 1 if n <= 1 else n * factorial(n - 1)

print(f"Circle (r=5): {circle_area(5):.2f}")
print(f"Factorial 6: {factorial(6)}")

# __name__ check
print(f"This module is: {'__main__' if __name__ == '__main__' else 'imported'}")`,
          output: "Circle (r=5): 78.54\nFactorial 6: 720\nThis module is: __main__"
        }
      ],
    },
    {
      id: 'decorators-advanced',
      title: 'Advanced Decorators',
      subtopics: [
        {
          id: 'decorator-args',
          title: 'Decorators with Arguments',
          description: 'Create decorators that accept parameters using nested functions.',
          content: `def repeat(times):
    """Decorator that repeats a function call n times."""
    def decorator(func):
        def wrapper(*args, **kwargs):
            results = []
            for i in range(times):
                results.append(func(*args, **kwargs))
            return results
        return wrapper
    return decorator

@repeat(3)
def roll_dice():
    import random
    random.seed(42)
    return random.randint(1, 6)

@repeat(2)
def greet(name):
    return f"Hello, {name}!"

print(f"Dice rolls: {roll_dice()}")
print(f"Greetings: {greet('Alice')}")`,
          output: "Dice rolls: [6, 1, 1]\nGreetings: ['Hello, Alice!', 'Hello, Alice!']"
        },
        {
          id: 'class-decorators',
          title: 'Class Decorators',
          description: 'Apply decorators to classes to modify or enhance them at definition time.',
          content: `def add_repr(cls):
    """Add a __repr__ method to a class."""
    def __repr__(self):
        attrs = ", ".join(f"{k}={v!r}" for k, v in self.__dict__.items())
        return f"{cls.__name__}({attrs})"
    cls.__repr__ = __repr__
    return cls

@add_repr
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

@add_repr
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

alice = Person("Alice", 25)
pt = Point(3, 4)
print(alice)
print(pt)`,
          output: "Person(name='Alice', age=25)\nPoint(x=3, y=4)"
        },
        {
          id: 'functools-wraps',
          title: 'functools.wraps',
          description: 'Preserve metadata (name, docstring) of wrapped functions using @wraps.',
          content: `from functools import wraps

def log_calls(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}({args}, {kwargs})")
        result = func(*args, **kwargs)
        print(f"  -> returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    """Add two numbers together."""
    return a + b

result = add(3, 5)
print(f"Function name: {add.__name__}")
print(f"Docstring: {add.__doc__}")
print(f"Result: {add(10, 20)}")`,
          output: "Calling add((3, 5), {})\n  -> returned 8\nFunction name: add\nDocstring: Add two numbers together.\nCalling add((10, 20), {})\n  -> returned 30\nResult: 30"
        }
      ],
    },
    {
      id: 'context-managers',
      title: 'Context Managers',
      subtopics: [
        {
          id: 'with-statement',
          title: 'The with Statement',
          description: 'Manage resources safely with automatic setup and cleanup.',
          content: `# File handling with context manager
with open("example.txt", "w") as f:
    f.write("Hello Context Manager!\\n")
    f.write("Auto-closed when block exits.\\n")

# Verify it was written
with open("example.txt", "r") as f:
    print(f.read().strip())

# Multiple context managers
with open("file1.txt", "w") as f1, open("file2.txt", "w") as f2:
    f1.write("File 1 content\\n")
    f2.write("File 2 content\\n")
print("Both files written successfully")`,
          output: "Hello Context Manager!\nAuto-closed when block exits.\nBoth files written successfully"
        },
        {
          id: 'custom-context',
          title: 'Custom Context Managers',
          description: 'Build your own context managers with __enter__ and __exit__ methods.',
          content: `class Timer:
    def __enter__(self):
        import time
        self.start = time.perf_counter()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        import time
        self.end = time.perf_counter()
        self.elapsed = self.end - self.start
        print(f"Elapsed: {self.elapsed:.6f} seconds")

with Timer():
    total = sum(range(1000000))
    print(f"Sum computed: {total}")

# Using contextlib
from contextlib import contextmanager

@contextmanager
def tag(name):
    print(f"<{name}>")
    yield
    print(f"</{name}>")

with tag("div"):
    print("  Hello, World!")`,
          output: "Sum computed: 499999500000\nElapsed: 0.002345 seconds\n<div>\n  Hello, World!\n</div>"
        }
      ],
    },
    {
      id: 'type-hints',
      title: 'Type Hints',
      subtopics: [
        {
          id: 'basic-hints',
          title: 'Basic Type Annotations',
          description: 'Add type hints to function signatures and variables for better tooling.',
          content: `from typing import List, Dict, Optional, Union

def greet(name: str, age: int) -> str:
    return f"Hello {name}, you are {age} years old"

def average(numbers: List[float]) -> float:
    return sum(numbers) / len(numbers) if numbers else 0.0

def find_user(uid: int) -> Optional[Dict[str, str]]:
    users = {1: {"name": "Alice", "role": "admin"}}
    return users.get(uid)

result: str = greet("Alice", 25)
print(result)
print(f"Average: {average([85.5, 92.0, 78.5])}")
print(f"User 1: {find_user(1)}")
print(f"User 99: {find_user(99)}")`,
          output: "Hello Alice, you are 25 years old\nAverage: 85.33333333333333\nUser 1: {'name': 'Alice', 'role': 'admin'}\nUser 99: None"
        },
        {
          id: 'advanced-hints',
          title: 'Advanced Type Hints',
          description: 'Use TypeVar, Protocol, TypedDict, and Literal for precise type annotations.',
          content: `from typing import TypeVar, Protocol, TypedDict, Literal

# TypeVar for generic functions
T = TypeVar('T', int, float)
def double(value: T) -> T:
    return value * 2  # type: ignore

# TypedDict for structured dicts
class User(TypedDict):
    name: str
    age: int
    email: str

# Literal for constrained values
def set_mode(mode: Literal["read", "write", "append"]) -> str:
    return f"Mode set to: {mode}"

print(f"Double int: {double(21)}")
print(f"Double float: {double(3.14)}")
print(set_mode("read"))
print(set_mode("write"))`,
          output: "Double int: 42\nDouble float: 6.28\nMode set to: read\nMode set to: write"
        }
      ],
    },
    {
      id: 'regex',
      title: 'Regular Expressions',
      subtopics: [
        {
          id: 're-match-search',
          title: 'Match & Search',
          description: 'Use re.match() for start-anchored matching and re.search() to find anywhere in the string.',
          content: `import re

text = "Contact us at support@example.com or sales@company.org"

# search: find first match anywhere
match = re.search(r'[\\w.]+@[\\w.]+', text)
if match:
    print(f"Found: {match.group()}")
    print(f"Position: {match.start()}-{match.end()}")

# match: only at the start
result = re.match(r'Contact', text)
print(f"Starts with 'Contact': {bool(result)}")

# findall: all matches
emails = re.findall(r'[\\w.]+@[\\w.]+', text)
print(f"All emails: {emails}")`,
          output: "Found: support@example.com\nPosition: 16-35\nStarts with 'Contact': True\nAll emails: ['support@example.com', 'sales@company.org']"
        },
        {
          id: 're-groups',
          title: 'Groups & Capture',
          description: 'Extract specific parts of a match using parentheses groups.',
          content: `import re

text = "John Doe, 30 years old, Software Engineer"
pattern = r'(\\w+)\\s+(\\w+),\\s+(\\d+)\\s+years old,\\s+(.+)'

match = re.search(pattern, text)
if match:
    print(f"Full match: {match.group(0)}")
    print(f"First name: {match.group(1)}")
    print(f"Last name: {match.group(2)}")
    print(f"Age: {match.group(3)}")
    print(f"Job: {match.group(4)}")

# Named groups
pattern2 = r'(?P<first>\\w+)\\s+(?P<last>\\w+)'
match2 = re.search(pattern2, text)
if match2:
    print(f"\\nNamed: {match2.group('first')} {match2.group('last')}")
    print(f"Dict: {match2.groupdict()}")`,
          output: "Full match: John Doe, 30 years old, Software Engineer\nFirst name: John\nLast name: Doe\nAge: 30\nJob: Software Engineer\n\nNamed: John Doe\nDict: {'first': 'John', 'last': 'Doe'}"
        },
        {
          id: 're-sub-split',
          title: 'Substitution & Split',
          description: 'Replace patterns with re.sub() and split strings with re.split().',
          content: `import re

# Substitute
text = "The price is $100 and $250"
result = re.sub(r'\\\$(\\d+)', r'USD\\1', text)
print(f"Substituted: {result}")

# Replace with function
def double(match):
    return f"\${int(match.group(1)) * 2}"
doubled = re.sub(r'\\\$(\\d+)', double, text)
print(f"Doubled: {doubled}")

# Split by multiple delimiters
data = "apple, banana; cherry: date | elderberry"
words = re.split(r'[,;:|]\\s*', data)
print(f"Split: {words}")

# Flags
text2 = "Python\\nPYTHON\\npython"
matches = re.findall(r'python', text2, re.IGNORECASE)
print(f"Case-insensitive: {matches}")`,
          output: "Substituted: The price is USD100 and USD250\nDoubled: The price is $200 and $500\nSplit: ['apple', 'banana', 'cherry', 'date', 'elderberry']\nCase-insensitive: ['Python', 'PYTHON', 'python']"
        }
      ],
    },
    {
      id: 'dates-time',
      title: 'Dates & Time',
      subtopics: [
        {
          id: 'datetime-basics',
          title: 'datetime Basics',
          description: 'Work with dates, times, and timedeltas using the datetime module.',
          content: `from datetime import datetime, date, time, timedelta

# Current date and time
now = datetime.now()
print(f"Now: {now}")
print(f"Date: {now.date()}")
print(f"Time: {now.time()}")

# Specific date
birthday = date(1990, 5, 15)
print(f"Birthday: {birthday}")
print(f"Weekday: {birthday.strftime('%A')}")

# Time arithmetic
future = now + timedelta(days=30, hours=6)
print(f"30 days + 6 hours later: {future}")
diff = future - now
print(f"Difference: {diff.days} days, {diff.seconds // 3600} hours")`,
          output: "Now: 2026-01-15 14:30:45.123456\nDate: 2026-01-15\nTime: 14:30:45.123456\nBirthday: 1990-05-15\nWeekday: Tuesday\n30 days + 6 hours later: 2026-02-14 20:30:45.123456\nDifference: 30 days, 6 hours"
        },
        {
          id: 'strftime-strptime',
          title: 'Formatting & Parsing',
          description: 'Convert dates to strings with strftime() and parse strings with strptime().',
          content: `from datetime import datetime

# strftime: datetime -> string
now = datetime(2026, 1, 15, 14, 30, 0)
print(now.strftime("%Y-%m-%d"))
print(now.strftime("%B %d, %Y"))
print(now.strftime("%I:%M %p"))
print(now.strftime("%A, %b %d %Y %H:%M:%S"))

# strptime: string -> datetime
date_str = "2026-12-25 10:30:00"
parsed = datetime.strptime(date_str, "%Y-%m-%d %H:%M:%S")
print(f"\\nParsed: {parsed}")
print(f"Day of year: {parsed.timetuple().tm_yday}")

# ISO format
print(f"ISO: {now.isoformat()}")
print(f"From ISO: {datetime.fromisoformat('2026-06-15T09:00:00')}")`,
          output: "2026-01-15\nJanuary 15, 2026\n02:30 PM\nThursday, Jan 15 2026 14:30:00\n\nParsed: 2026-12-25 10:30:00\nDay of year: 359\nISO: 2026-01-15T14:30:00\nFrom ISO: 2026-06-15 09:00:00"
        }
      ],
    },
    {
      id: 'collections-module',
      title: 'Collections Module',
      subtopics: [
        {
          id: 'counter-defaultdict',
          title: 'Counter & defaultdict',
          description: 'Count elements automatically and create dicts with default values.',
          content: `from collections import Counter, defaultdict

# Counter
text = "mississippi"
counter = Counter(text)
print(f"Letter count: {dict(counter)}")
print(f"Most common 3: {counter.most_common(3)}")

words = ["apple", "banana", "apple", "cherry", "banana", "apple"]
word_counts = Counter(words)
print(f"Word freq: {dict(word_counts)}")

# defaultdict
students_by_grade = defaultdict(list)
records = [("A", "Alice"), ("B", "Bob"), ("A", "Anna"), ("C", "Charlie")]
for grade, name in records:
    students_by_grade[grade].append(name)
print(f"By grade: {dict(students_by_grade)}")
print(f"Grade A: {students_by_grade['A']}")`,
          output: "Letter count: {'m': 1, 'i': 4, 's': 4, 'p': 2}\nMost common 3: [('i', 4), ('s', 4), ('p', 2)]\nWord freq: {'apple': 3, 'banana': 2, 'cherry': 1}\nBy grade: {'A': ['Alice', 'Anna'], 'B': ['Bob'], 'C': ['Charlie']}\nGrade A: ['Alice', 'Anna']"
        },
        {
          id: 'deque-ordereddict',
          title: 'Deque & OrderedDict',
          description: 'Fast appends/pops from both ends with deque; remember insertion order with OrderedDict.',
          content: `from collections import deque, OrderedDict

# deque: double-ended queue
d = deque([1, 2, 3])
d.append(4)
d.appendleft(0)
print(f"After append: {list(d)}")
d.pop()
d.popleft()
print(f"After pop: {list(d)}")
d.rotate(2)
print(f"Rotated: {list(d)}")

# OrderedDict (maintains insertion order)
od = OrderedDict()
od['banana'] = 3
od['apple'] = 5
od['cherry'] = 2
print(f"\\nOrderedDict: {od}")
od.move_to_end('banana')
print(f"Moved to end: {od}")
od.move_to_end('cherry', last=False)
print(f"Moved to front: {od}")`,
          output: "After append: [0, 1, 2, 3, 4]\nAfter pop: [1, 2, 3]\nRotated: [2, 3, 1]\n\nOrderedDict: OrderedDict({'banana': 3, 'apple': 5, 'cherry': 2})\nMoved to end: OrderedDict({'apple': 5, 'cherry': 2, 'banana': 3})\nMoved to front: OrderedDict({'cherry': 2, 'apple': 5, 'banana': 3})"
        }
      ],
    },
    {
      id: 'functional',
      title: 'Functional Programming',
      subtopics: [
        {
          id: 'map-filter-reduce',
          title: 'Map, Filter & Reduce',
          description: 'Apply functions to sequences, filter elements, and reduce to a single value.',
          content: `from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# map: transform each element
doubled = list(map(lambda x: x * 2, nums))
print(f"Doubled: {doubled}")

# filter: keep elements that pass test
evens = list(filter(lambda x: x % 2 == 0, nums))
print(f"Evens: {evens}")

# reduce: accumulate to single value
total = reduce(lambda acc, x: acc + x, nums)
product = reduce(lambda acc, x: acc * x, nums)
print(f"Sum via reduce: {total}")
print(f"Product via reduce: {product}")

# Combined pipeline
result = reduce(
    lambda a, b: a + b,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, nums))
)
print(f"Sum of squares of evens: {result}")`,
          output: "Doubled: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]\nEvens: [2, 4, 6, 8, 10]\nSum via reduce: 55\nProduct via reduce: 3628800\nSum of squares of evens: 220"
        },
        {
          id: 'partial-lru-cache',
          title: 'Partial & lru_cache',
          description: 'Partially apply functions and cache expensive function results.',
          content: `from functools import partial, lru_cache
import time

# partial: fix some arguments
def power(base, exp):
    return base ** exp

square = partial(power, exp=2)
cube = partial(power, exp=3)
print(f"Square 5: {square(5)}")
print(f"Cube 5: {cube(5)}")

# lru_cache: memoize function results
@lru_cache(maxsize=128)
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

# First call (computed)
start = time.perf_counter()
result = fibonacci(35)
first_call = time.perf_counter() - start

# Second call (cached)
start = time.perf_counter()
result = fibonacci(35)
second_call = time.perf_counter() - start

print(f"\\nfibonacci(35) = {result}")
print(f"First call: {first_call:.4f}s")
print(f"Cached call: {second_call:.6f}s")
print(f"Cache info: {fibonacci.cache_info()}")`,
          output: "Square 5: 25\nCube 5: 125\n\nfibonacci(35) = 9227465\nFirst call: 0.0234s\nCached call: 0.000001s\nCache info: CacheInfo(hits=1, misses=36, maxsize=128, currsize=36)"
        }
      ],
    },
    {
      id: 'testing',
      title: 'Testing',
      subtopics: [
        {
          id: 'unittest-basics',
          title: 'unittest Basics',
          description: 'Write and run unit tests with Python\'s built-in unittest framework.',
          content: `import unittest

# Code to test
def add(a, b):
    return a + b

def divide(a, b):
    if b == 0:
        raise ValueError("Cannot divide by zero")
    return a / b

def is_palindrome(s):
    return s == s[::-1]

class TestMathFunctions(unittest.TestCase):
    def test_add_positive(self):
        self.assertEqual(add(2, 3), 5)
        self.assertEqual(add(-1, 1), 0)

    def test_add_types(self):
        self.assertEqual(add("Hello ", "World"), "Hello World")
        self.assertEqual(add([1, 2], [3, 4]), [1, 2, 3, 4])

    def test_divide(self):
        self.assertAlmostEqual(divide(10, 3), 3.333, places=3)
        with self.assertRaises(ValueError):
            divide(10, 0)

    def test_palindrome(self):
        self.assertTrue(is_palindrome("racecar"))
        self.assertFalse(is_palindrome("python"))
        self.assertTrue(is_palindrome(""))

# Run tests
suite = unittest.TestLoader().loadTestsFromTestCase(TestMathFunctions)
runner = unittest.TextTestRunner(verbosity=2)
runner.run(suite)`,
          output: "test_add_positive (__main__.TestMathFunctions) ... ok\ntest_add_types (__main__.TestMathFunctions) ... ok\ntest_divide (__main__.TestMathFunctions) ... ok\ntest_palindrome (__main__.TestMathFunctions) ... ok\n\n----------------------------------------------------------------------\nRan 4 tests in 0.001s\n\nOK"
        },
        {
          id: 'assertions',
          title: 'Assertions & Doctests',
          description: 'Use assert statements and doctests for quick inline testing.',
          content: `# assert: quick sanity checks
def calculate_discount(price, percentage):
    assert price > 0, "Price must be positive"
    assert 0 <= percentage <= 100, "Percentage must be 0-100"
    return price * (1 - percentage / 100)

print(f"Discount: \${calculate_discount(100, 20):.2f}")

try:
    calculate_discount(-50, 10)
except AssertionError as e:
    print(f"Error: {e}")

# doctests: tests in docstrings
def fibonacci(n):
    \"\"\"
    Return the nth Fibonacci number.

    >>> fibonacci(0)
    0
    >>> fibonacci(1)
    1
    >>> fibonacci(10)
    55
    >>> fibonacci(20)
    6765
    \"\"\"
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

import doctest
doctest.testmod(verbose=False)
print("Doctests passed!")`,
          output: "Discount: $80.00\nError: Price must be positive\nDoctests passed!"
        }
      ],
    },
    {
      id: 'logging',
      title: 'Logging',
      subtopics: [
        {
          id: 'logging-basics',
          title: 'Logging Basics',
          description: 'Configure logging with levels (DEBUG, INFO, WARNING, ERROR, CRITICAL).',
          content: `import logging

# Basic configuration
logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s [%(levelname)s] %(name)s: %(message)s',
    datefmt='%H:%M:%S'
)

logger = logging.getLogger(__name__)

def process_data(items):
    logger.debug(f"Processing {len(items)} items")
    total = 0
    for i, item in enumerate(items):
        try:
            value = int(item)
            total += value
            logger.debug(f"  Item {i}: {item} -> {value}")
        except ValueError:
            logger.warning(f"  Item {i}: '{item}' is not a number, skipping")
    logger.info(f"Total sum: {total}")
    return total

data = ["10", "20", "abc", "30", "40"]
result = process_data(data)
print(f"Result: {result}")`,
          output: "14:30:45 [DEBUG] __main__: Processing 5 items\n14:30:45 [DEBUG] __main__:   Item 0: 10 -> 10\n14:30:45 [DEBUG] __main__:   Item 1: 20 -> 20\n14:30:45 [WARNING] __main__:   Item 2: 'abc' is not a number, skipping\n14:30:45 [DEBUG] __main__:   Item 3: 30 -> 30\n14:30:45 [DEBUG] __main__:   Item 4: 40 -> 40\n14:30:45 [INFO] __main__: Total sum: 100\nResult: 100"
        }
      ],
    },
    {
      id: 'concurrency',
      title: 'Concurrency',
      subtopics: [
        {
          id: 'threading',
          title: 'Threading',
          description: 'Run tasks concurrently using threads for I/O-bound operations.',
          content: `import threading
import time

def worker(name, delay):
    print(f"Worker {name} starting...")
    time.sleep(delay)
    print(f"Worker {name} finished after {delay}s")

# Sequential
print("=== Sequential ===")
start = time.perf_counter()
worker("A", 0.5)
worker("B", 0.3)
worker("C", 0.4)
print(f"Sequential time: {time.perf_counter() - start:.2f}s\\n")

# Threaded
print("=== Threaded ===")
start = time.perf_counter()
threads = [
    threading.Thread(target=worker, args=("A", 0.5)),
    threading.Thread(target=worker, args=("B", 0.3)),
    threading.Thread(target=worker, args=("C", 0.4)),
]
for t in threads:
    t.start()
for t in threads:
    t.join()
print(f"Threaded time: {time.perf_counter() - start:.2f}s")`,
          output: "=== Sequential ===\nWorker A starting...\nWorker A finished after 0.5s\nWorker B starting...\nWorker B finished after 0.3s\nWorker C starting...\nWorker C finished after 0.4s\nSequential time: 1.20s\n\n=== Threaded ===\nWorker A starting...\nWorker B starting...\nWorker C starting...\nWorker B finished after 0.3s\nWorker C finished after 0.4s\nWorker A finished after 0.5s\nThreaded time: 0.50s"
        },
        {
          id: 'asyncio',
          title: 'Async/Await (asyncio)',
          description: 'Write asynchronous code with async/await for high-performance I/O.',
          content: `import asyncio

async def fetch_data(name, delay):
    print(f"Fetching {name}...")
    await asyncio.sleep(delay)
    return f"Data from {name}"

async def main():
    # Concurrent execution
    start = asyncio.get_event_loop().time()
    results = await asyncio.gather(
        fetch_data("API-A", 0.5),
        fetch_data("API-B", 0.3),
        fetch_data("API-C", 0.4),
    )
    elapsed = asyncio.get_event_loop().time() - start
    for r in results:
        print(f"  Got: {r}")
    print(f"Total time: {elapsed:.2f}s")

asyncio.run(main())`,
          output: "Fetching API-A...\nFetching API-B...\nFetching API-C...\n  Got: Data from API-A\n  Got: Data from API-B\n  Got: Data from API-C\nTotal time: 0.50s"
        }
      ],
    },
    {
      id: 'pathlib',
      title: 'Working with Paths',
      subtopics: [
        {
          id: 'pathlib-basics',
          title: 'pathlib Basics',
          description: 'Use pathlib for modern, cross-platform file path manipulation.',
          content: `from pathlib import Path

# Current directory
cwd = Path.cwd()
print(f"Current: {cwd}")
print(f"Home: {Path.home()}")

# Building paths
project = Path("my_project")
src = project / "src" / "main.py"
print(f"Source file: {src}")
print(f"Parent: {src.parent}")
print(f"Name: {src.name}")
print(f"Stem: {src.stem}")
print(f"Suffix: {src.suffix}")

# Path operations
data_dir = Path("data")
print(f"Is absolute: {src.is_absolute()}")
print(f"Resolved: {src.resolve()}")

# Check existence (simulated)
print(f"Exists (my_project): {project.exists()}")`,
          output: "Current: /home/user/project\nHome: /home/user\nSource file: my_project/src/main.py\nParent: my_project/src\nName: main.py\nStem: main\nSuffix: .py\nIs absolute: False\nResolved: /home/user/project/my_project/src/main.py\nExists (my_project): False"
        },
        {
          id: 'pathlib-io',
          title: 'File Operations with pathlib',
          description: 'Read, write, and manipulate files and directories using pathlib.',
          content: `from pathlib import Path

# Create directory
output = Path("output_data")
output.mkdir(exist_ok=True)

# Write files
(output / "config.txt").write_text("host=localhost\\nport=8080\\n")
(output / "users.txt").write_text("Alice\\nBob\\nCharlie\\n")

# Read files
config = output / "config.txt"
print(f"Config content:")
print(config.read_text().strip())

# List directory
print(f"\\nFiles in {output}:")
for file in output.iterdir():
    size = file.stat().st_size
    print(f"  {file.name} ({size} bytes)")

# Glob pattern matching
py_files = list(Path(".").glob("*.py"))
print(f"\\nPython files in cwd: {len(py_files)}")

# Cleanup (simulated)
import shutil
shutil.rmtree(output)
print("Cleaned up output_data")`,
          output: "Config content:\nhost=localhost\nport=8080\n\nFiles in output_data:\n  config.txt (28 bytes)\n  users.txt (18 bytes)\n\nPython files in cwd: 0\nCleaned up output_data"
        }
      ],
    },
  ]
};
