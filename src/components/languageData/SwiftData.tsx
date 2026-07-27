import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const swiftConfig: LanguageConfig = {
  title: 'Swift',
  language: 'swift',
  tutorialData: [
        {
      id: 'basics',
      title: 'Swift Basics',
      description: 'Learn Swift Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'print() function.',
      content: `print('Hello, World!')`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'let / var',
      description: 'Constants and variables.',
      content: `let name = 'Ada'
var age = 36
age += 1
print('\\(name) is \\(age)')`,
      output: `Ada is 37`,
    },
            {
      id: 'types',
      title: 'Type Inference',
      description: 'Strong, inferred types.',
      content: `let pi: Double = 3.14
let ok: Bool = true
print('\\(pi) \\(ok)')`,
      output: `3.14 true`,
    },
      ],
    },
        {
      id: 'control-flow',
      title: 'Control Flow',
      description: 'Learn Control Flow',
      content: `    {`,
      subtopics: [
            {
      id: 'if',
      title: 'if / else',
      description: 'No parentheses.',
      content: `let x = 10
if x > 5 { print('big') } else { print('small') }`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for-in',
      description: 'Iterate ranges/collections.',
      content: `for i in 0..<3 { print(i, terminator: ' ') }`,
      output: `0 1 2 `,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `var i = 0
while i < 3 { print(i); i += 1 }`,
      output: `012`,
    },
            {
      id: 'switch',
      title: 'switch',
      description: 'Exhaustive, no break needed.',
      content: `let d = 2
let s = switch d { case 1: 'one'; case 2: 'two'; default: 'other' }
print(s)`,
      output: `two`,
    },
      ],
    },
        {
      id: 'functions',
      title: 'Functions',
      description: 'Learn Functions',
      content: `    {`,
      subtopics: [
            {
      id: 'def',
      title: 'Defining Functions',
      description: 'Arrow return type.',
      content: `func square(_ n: Int) -> Int { n * n }
print(square(5))`,
      output: `25`,
    },
            {
      id: 'tuples',
      title: 'Tuples',
      description: 'Multiple returns.',
      content: `func div(_ a: Int, _ b: Int) -> (Int, Int) { (a/b, a%b) }
let (q, r) = div(7, 2)
print('\\(q) \\(r)')`,
      output: `3 1`,
    },
            {
      id: 'closures',
      title: 'Closures',
      description: 'Trailing closures.',
      content: `let sq: (Int) -> Int = { $0 * $0 }
print(sq(4))`,
      output: `16`,
    },
      ],
    },
        {
      id: 'collections',
      title: 'Collections',
      description: 'Learn Collections',
      content: `    {`,
      subtopics: [
            {
      id: 'array',
      title: 'Array',
      description: 'Ordered list.',
      content: `var a = [1, 2, 3]
a.append(4)
print('\\(a.count) \\(a[0])')`,
      output: `4 1`,
    },
            {
      id: 'dict',
      title: 'Dictionary',
      description: 'Key-value store.',
      content: `var d = ['a': 1]
d['b'] = 2
print(d['b']!)`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'Set',
      description: 'Unique collection.',
      content: `let s: Set = [3, 1, 2]
print(s.contains(2))`,
      output: `true`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Classes & Structs',
      description: 'Learn Classes & Structs',
      content: `    {`,
      subtopics: [
            {
      id: 'struct',
      title: 'Structs',
      description: 'Value types.',
      content: `struct Point { var x: Int; var y: Int }
let p = Point(x: 3, y: 4)
print('\\(p.x) \\(p.y)')`,
      output: `3 4`,
    },
            {
      id: 'class',
      title: 'Classes',
      description: 'Reference types.',
      content: `class Dog { func bark() { print('Woof') } }
Dog().bark()`,
      output: `Woof`,
    },
            {
      id: 'protocol',
      title: 'Protocols',
      description: 'Interfaces.',
      content: `protocol Shape { func area() -> Double }
struct C: Shape { func area() -> Double { 12.56 } }
print(C().area())`,
      output: `12.56`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'Subclassing.',
      content: `class A { func f() { print('A') } }
class B: A {}
B().f()`,
      output: `A`,
    },
      ],
    },
        {
      id: 'optionals',
      title: 'Optionals',
      description: 'Learn Optionals',
      content: `    {`,
      subtopics: [
            {
      id: 'optional',
      title: 'Optionals',
      description: '? marks missing values.',
      content: `let x: Int? = nil
print(x ?? 'none')`,
      output: `none`,
    },
            {
      id: 'guard',
      title: 'guard let',
      description: 'Early exit unwrap.',
      content: `func show(_ x: Int?) { guard let v = x else { return }; print(v) }
show(5)`,
      output: `5`,
    },
      ],
    },
        {
      id: 'error',
      title: 'Error Handling',
      description: 'Learn Error Handling',
      content: `    {`,
      subtopics: [
            {
      id: 'do-try',
      title: 'do / try / catch',
      description: 'Throwing functions.',
      content: `enum E: Error { case oops }
func f() throws { throw E.oops }
do { try f() } catch { print('caught') }`,
      output: `caught`,
    },
      ],
    },
        {
      id: 'modern',
      title: 'Modern Swift',
      description: 'Learn Modern Swift',
      content: `    {`,
      subtopics: [
            {
      id: 'property',
      title: 'Property Wrappers',
      description: '@State, @Published, etc.',
      content: `struct Box { var w = 5 }
let b = Box()
print(b.w)`,
      output: `5`,
    },
      ],
    },
  ],
};
