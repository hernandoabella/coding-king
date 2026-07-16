import fsharp from 'react-syntax-highlighter/dist/esm/languages/hljs/fsharp';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('fsharp', fsharp);

export const fSharpConfig = {
  title: "F# Tutorial",
  language: 'fsharp',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'let-bindings',
        title: 'Let Bindings',
        description: 'Declare immutable values and mutable variables with let.',
        content: `let name = "Alice"
let age = 25
let mutable counter = 0
counter <- counter + 1
printfn "%s is %d, counter=%d" name age counter`,
        output: "Alice is 25, counter=1"
      },
      {
        id: 'types',
        title: 'Types',
        description: 'F# has a strong type system with type inference.',
        content: `let number: int = 42
let pi: float = 3.14159
let greeting: string = "Hello"
let isActive: bool = true
printfn "%d, %f, %s, %b" number pi greeting isActive`,
        output: "42, 3.141590, Hello, true"
      },
      {
        id: 'tuples',
        title: 'Tuples',
        description: 'Group multiple values into a single compound value.',
        content: `let point = (3, 4)
let person = ("Alice", 25, true)
let (name, age, active) = person
let x, y = point
printfn "%s is %d (active=%b) at (%d,%d)" name age active x y`,
        output: "Alice is 25 (active=true) at (3,4)"
      },
      {
        id: 'records',
        title: 'Records',
        description: 'Define named types with labeled fields.',
        content: `type Person = { Name: string; Age: int }
let alice = { Name = "Alice"; Age = 25 }
let older = { alice with Age = 26 }
printfn "%s is %d" older.Name older.Age`,
        output: "Alice is 26"
      },
    ],
  },
  {
    id: 'pattern-matching',
    title: 'Pattern Matching',
    subtopics: [
      {
        id: 'match',
        title: 'Match Expressions',
        description: 'Use match expressions to branch on patterns.',
        content: `let describe n =
    match n with
    | 0 -> "zero"
    | 1 -> "one"
    | 2 -> "two"
    | _ -> "many"

printfn "%s" (describe 1)
printfn "%s" (describe 5)`,
        output: "one\nmany"
      },
      {
        id: 'guards',
        title: 'Guards',
        description: 'Add conditional guards with when clauses.',
        content: `let classify n =
    match n with
    | 0 -> "zero"
    | x when x > 0 -> "positive"
    | _ -> "negative"

printfn "%s" (classify 10)
printfn "%s" (classify -3)`,
        output: "positive\nnegative"
      },
      {
        id: 'options',
        title: 'Options',
        description: 'Option type for values that may or may not exist.',
        content: `let tryDivide x y =
    if y = 0 then None
    else Some (x / y)

match tryDivide 10 2 with
| Some result -> printfn "Result: %d" result
| None -> printfn "Cannot divide by zero"`,
        output: "Result: 5"
      },
      {
        id: 'discriminated-unions',
        title: 'Discriminated Unions',
        description: 'Define types that can be one of several named cases.',
        content: `type Shape =
    | Circle of radius: float
    | Rectangle of width: float * height: float

let area shape =
    match shape with
    | Circle r -> System.Math.PI * r * r
    | Rectangle (w, h) -> w * h

printfn "%f" (area (Circle 2.0))
printfn "%f" (area (Rectangle (3.0, 4.0)))`,
        output: "12.566371\n12.000000"
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define and call functions with parameters.',
        content: `let add x y = x + y
let multiply a b = a * b

printfn "%d" (add 3 5)
printfn "%d" (multiply 4 7)`,
        output: "8\n28"
      },
      {
        id: 'piping',
        title: 'Piping',
        description: 'Chain function calls with the forward pipe operator.',
        content: `let square x = x * x
let addOne x = x + 1

let result = 3 |> addOne |> square
printfn "%d" result`,
        output: "16"
      },
      {
        id: 'composition',
        title: 'Composition',
        description: 'Combine functions into new functions.',
        content: `let square x = x * x
let addOne x = x + 1
let addOneThenSquare = addOne >> square

printfn "%d" (addOneThenSquare 4)`,
        output: "25"
      },
      {
        id: 'partial-application',
        title: 'Partial Application',
        description: 'Fix some arguments to create new functions.',
        content: `let multiply a b = a * b
let double = multiply 2
let triple = multiply 3

printfn "%d, %d" (double 7) (triple 7)`,
        output: "14, 21"
      },
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'lists',
        title: 'Lists',
        description: 'Immutable linked lists with cons and append.',
        content: `let nums = [1; 2; 3; 4; 5]
let more = 0 :: nums
let combined = nums @ [6; 7]

printfn "%A" more
printfn "%A" combined`,
        output: "[0; 1; 2; 3; 4; 5]\n[1; 2; 3; 4; 5; 6; 7]"
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Fixed-size mutable collections.',
        content: `let arr = [| 10; 20; 30; 40 |]
arr.[1] <- 25
printfn "%A" arr
printfn "%d" arr.[2]`,
        output: "[|10; 25; 30; 40|]\n30"
      },
      {
        id: 'sequences',
        title: 'Sequences',
        description: 'Lazy sequences generated on demand.',
        content: `let squares = seq { for i in 1 .. 5 -> i * i }
printfn "%A" (Seq.toList squares)

let evens = Seq.initInfinite (fun i -> (i + 1) * 2)
printfn "%A" (evens |> Seq.take 4 |> Seq.toList)`,
        output: "[1; 4; 9; 16; 25]\n[2; 4; 6; 8]"
      },
      {
        id: 'map-filter-fold',
        title: 'Map / Filter / Fold',
        description: 'Higher-order functions for transforming collections.',
        content: `let nums = [1; 2; 3; 4; 5]
let doubled = List.map (fun x -> x * 2) nums
let evens = List.filter (fun x -> x % 2 = 0) nums
let sum = List.fold (+) 0 nums

printfn "%A, %A, %d" doubled evens sum`,
        output: "[2; 4; 6; 8; 10], [2; 4], 15"
      },
    ],
  },
]
};
