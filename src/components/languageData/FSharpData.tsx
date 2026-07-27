import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const fSharpConfig: LanguageConfig = {
  title: 'F#',
  language: 'fsharp',
  tutorialData: [
        {
      id: 'basics',
      title: 'F# Basics',
      description: 'Learn F# Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'printfn.',
      content: `printfn "Hello, World!"`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'let bindings',
      description: 'Immutable by default.',
      content: `let name = "Ada"
let age = 36
printfn "%s is %d" name age`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Type Inference',
      description: 'Strong, inferred.',
      content: `let x = 5
let y = 3.14
printfn "%A %A" x y`,
      output: `5 3.14`,
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
      description: 'let f x = ...',
      content: `let square n = n * n
printfn "%d" (square 5)`,
      output: `25`,
    },
            {
      id: 'pipe',
      title: 'Pipe Operator',
      description: '|> threading.',
      content: `let result = [1; 2; 3] |> List.map (fun x -> x * 2)
printfn "%A" result`,
      output: `[2; 4; 6]`,
    },
            {
      id: 'higher',
      title: 'Higher-order',
      description: 'Pass functions.',
      content: `let evens = [1..4] |> List.filter (fun x -> x % 2 = 0)
printfn "%A" evens`,
      output: `[2; 4]`,
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
      id: 'list',
      title: 'Lists',
      description: 'Immutable linked.',
      content: `let xs = [1; 2; 3]
printfn "%A" (0 :: xs)`,
      output: `[0; 1; 2; 3]`,
    },
            {
      id: 'map',
      title: 'Maps',
      description: 'key-value.',
      content: `let m = Map [("a", 1); ("b", 2)]
printfn "%A" m.["b"]`,
      output: `2`,
    },
            {
      id: 'array',
      title: 'Arrays',
      description: 'Mutable, fixed.',
      content: `let a = [| 1; 2; 3 |]
printfn "%d" a.[0]`,
      output: `1`,
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
      description: 'Expressions.',
      content: `let x = 10
let s = if x > 5 then "big" else "small"
printfn "%s" s`,
      output: `big`,
    },
            {
      id: 'match',
      title: 'Pattern Matching',
      description: 'match with.',
      content: `let d = 2
let s = match d with | 1 -> "one" | 2 -> "two" | _ -> "other"
printfn "%s" s`,
      output: `two`,
    },
      ],
    },
        {
      id: 'types',
      title: 'Algebraic Types',
      description: 'Learn Algebraic Types',
      content: `    {`,
      subtopics: [
            {
      id: 'du',
      title: 'Discriminated Unions',
      description: 'Sum types.',
      content: `type Color = Red | Green | Blue
printfn "%A" Green`,
      output: `Green`,
    },
            {
      id: 'record',
      title: 'Records',
      description: 'Composite data.',
      content: `type Point = { X: int; Y: int }
let p = { X = 3; Y = 4 }
printfn "%d" p.X`,
      output: `3`,
    },
            {
      id: 'option',
      title: 'Option',
      description: 'Safe optional.',
      content: `let safeHead xs = match xs with [] -> None | h::_ -> Some h
printfn "%A" (safeHead [1;2])`,
      output: `Some 1`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Objects',
      description: 'Learn Objects',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'Members.',
      content: `type Dog() =
    member this.Bark() = printfn "Woof"
Dog().Bark()`,
      output: `Woof`,
    },
      ],
    },
        {
      id: 'async',
      title: 'Async',
      description: 'Learn Async',
      content: `    {`,
      subtopics: [
            {
      id: 'async',
      title: 'async / await',
      description: 'Computation expressions.',
      content: `let task = async { return 42 }
printfn "started"`,
      output: `started`,
    },
      ],
    },
  ],
};
