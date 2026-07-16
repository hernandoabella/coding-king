import swift from 'react-syntax-highlighter/dist/esm/languages/hljs/swift';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('swift', swift);

export const swiftConfig = {
  title: "Swift Tutorial",
  language: 'swift',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'var-let',
        title: 'var & let',
        description: 'var declares mutable variables; let declares constants that cannot be changed.',
        content: `var name = "Alice"
let maxScore = 100
// maxScore = 200  // Error: cannot assign to let constant
name = "Bob"
print("\\(name) can score up to \\(maxScore)")`,
        output: "Bob can score up to 100"
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Swift supports Int, Double, Bool, String, and more. Type inference is the norm, with optional type annotations.',
        content: `let a: Int = 42
let b: Double = 3.14
let c: Bool = true
let d: Character = "S"
let e: String = "Hello"
print(a, b, c, d, e)`,
        output: "42 3.14 true S Hello"
      },
      {
        id: 'string-interpolation',
        title: 'String Interpolation',
        description: 'Embed values and expressions in strings with the \\(...) syntax.',
        content: `let name = "Swift"
let version = 5.9
print("Welcome to \\(name)!")
print("Next year: \\(version + 0.1)")`,
        output: "Welcome to Swift!\nNext year: 6.0"
      },
      {
        id: 'optionals',
        title: 'Optionals',
        description: 'Optionals handle the absence of a value safely using ?, optional binding (if let), and nil-coalescing (??).',
        content: `var name: String? = nil
print(name ?? "Guest")
name = "Alice"
if let unwrapped = name {
    print(unwrapped.uppercased())
}`,
        output: "Guest\nALICE"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'if / else',
        description: 'Conditional branching in Swift. No parentheses required around the condition, but braces are mandatory.',
        content: `let score = 85
let grade: String
if score >= 90 {
    grade = "A"
} else if score >= 80 {
    grade = "B"
} else {
    grade = "C"
}
print("Grade: \\(grade)")`,
        output: "Grade: B"
      },
      {
        id: 'switch',
        title: 'switch',
        description: 'Powerful pattern matching with switch. Every case must be exhaustive—use default when needed.',
        content: `let day = "Mon"
switch day {
case "Sat", "Sun":
    print("Weekend!")
case "Mon":
    print("Monday blues")
default:
    print("Weekday")
}`,
        output: "Monday blues"
      },
      {
        id: 'for-in',
        title: 'for-in Loops',
        description: 'Iterate over ranges, arrays, and dictionaries with the concise for-in syntax.',
        content: `for i in 1...5 {
    print(i, terminator: " ")
}
print()
let items = ["A", "B", "C"]
for item in items {
    print(item, terminator: " ")
}`,
        output: "1 2 3 4 5\nA B C"
      },
      {
        id: 'while',
        title: 'while & repeat-while',
        description: 'Standard while and repeat-while loops (the latter guarantees at least one execution).',
        content: `var count = 3
while count > 0 {
    print("Count: \\(count)")
    count -= 1
}`,
        output: "Count: 3\nCount: 2\nCount: 1"
      }
    ],
  },
  {
    id: 'functions-closures',
    title: 'Functions & Closures',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define functions with the func keyword. Use -> to specify the return type.',
        content: `func add(_ a: Int, _ b: Int) -> Int {
    return a + b
}
func square(_ x: Int) -> Int { x * x }
print(add(3, 5))
print(square(4))`,
        output: "8\n16"
      },
      {
        id: 'closures',
        title: 'Closures',
        description: 'Self-contained blocks of functionality that can be passed around. Shorthand argument names like $0 are available.',
        content: `let double = { (x: Int) -> Int in return x * 2 }
print(double(7))

let numbers = [1, 2, 3, 4]
let mapped = numbers.map { $0 * 10 }
print(mapped)`,
        output: "14\n[10, 20, 30, 40]"
      },
      {
        id: 'guard',
        title: 'guard',
        description: 'guard provides early exit from a scope when conditions are not met, reducing nesting.',
        content: `func greet(_ name: String?) {
    guard let unwrapped = name else {
        print("Hello, Guest!")
        return
    }
    print("Hello, \\(unwrapped)!")
}
greet(nil)
greet("Alice")`,
        output: "Hello, Guest!\nHello, Alice!"
      },
      {
        id: 'defer',
        title: 'defer',
        description: 'defer schedules cleanup code to run when the current scope exits, regardless of how it exits.',
        content: `func processFile() {
    print("Opening file...")
    defer { print("Closing file.") }
    print("Working...")
}
processFile()`,
        output: "Opening file...\nWorking...\nClosing file."
      }
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Ordered collections of values. Swift arrays support append, insert, remove, and subscript access.',
        content: `var fruits = ["Apple", "Banana"]
fruits.append("Orange")
fruits.insert("Mango", at: 1)
print(fruits)
print(fruits[0])`,
        output: "[\"Apple\", \"Mango\", \"Banana\", \"Orange\"]\nApple"
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        description: 'Key-value pairs with fast lookup. Keys must be Hashable.',
        content: `var capitals = [
    "France": "Paris",
    "Japan": "Tokyo",
    "Brazil": "Brasilia"
]
capitals["Italy"] = "Rome"
print(capitals["Japan"]!)
print(capitals.keys)`,
        output: "Tokyo\n[\"France\", \"Japan\", \"Brazil\", \"Italy\"]"
      },
      {
        id: 'sets',
        title: 'Sets',
        description: 'Unordered collections of unique values. Great for membership tests and set operations.',
        content: `let setA: Set = [1, 2, 3, 4]
let setB: Set = [3, 4, 5, 6]
print(setA.intersection(setB))
print(setA.union(setB))`,
        output: "[4, 3]\n[1, 2, 3, 4, 5, 6]"
      },
      {
        id: 'map-filter-reduce',
        title: 'map / filter / reduce',
        description: 'Functional collection operations for transforming, filtering, and combining data.',
        content: `let numbers = [1, 2, 3, 4, 5, 6]
let doubled = numbers.map { $0 * 2 }
let evens = numbers.filter { $0 % 2 == 0 }
let sum = numbers.reduce(0, +)
print(doubled)
print(evens)
print(sum)`,
        output: "[2, 4, 6, 8, 10, 12]\n[2, 4, 6]\n21"
      }
    ],
  },
]
};
