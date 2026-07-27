import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const juliaConfig: LanguageConfig = {
  title: 'Julia',
  language: 'julia',
  tutorialData: [
        {
      id: 'basics',
      title: 'Julia Basics',
      description: 'Learn Julia Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'println function.',
      content: `println("Hello, World!")`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'Dynamic, typed.',
      content: `name = "Ada"
age = 36
println("$name is $age")`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Types',
      description: 'Optional annotations.',
      content: `x::Int = 5
println(typeof(x))`,
      output: `Int64`,
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
      description: 'Standard branching.',
      content: `x = 10
x > 5 ? println("big") : println("small")`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Iterate ranges.',
      content: `for i in 1:3 println(i) end`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `i = 1
while i <= 3 println(i); global i += 1 end`,
      output: `1
2
3`,
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
      description: 'function ... end.',
      content: `square(n) = n * n
println(square(5))`,
      output: `25`,
    },
            {
      id: 'multi',
      title: 'Multiple Dispatch',
      description: 'Specialize by type.',
      content: `f(x::Int) = 'int'
f(x::String) = 'str'
println(f(5)); println(f('a'))`,
      output: `int
str`,
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
      title: 'Arrays',
      description: '1-indexed, fast.',
      content: `a = [1, 2, 3]
push!(a, 4)
println(length(a), a[1])`,
      output: `4 1`,
    },
            {
      id: 'dict',
      title: 'Dict',
      description: 'Key-value map.',
      content: `d = Dict('a' => 1)
d['b'] = 2
println(d['b'])`,
      output: `2`,
    },
            {
      id: 'comprehension',
      title: 'Comprehensions',
      description: 'Array comprehension.',
      content: `evens = [x for x in 1:4 if iseven(x)]
println(evens)`,
      output: `[2, 4]`,
    },
      ],
    },
        {
      id: 'math',
      title: 'Mathematics',
      description: 'Learn Mathematics',
      content: `    {`,
      subtopics: [
            {
      id: 'broadcast',
      title: 'Broadcasting',
      description: 'Dot syntax.',
      content: `v = [1, 2, 3]
println(v .* 2)`,
      output: `[2, 4, 6]`,
    },
            {
      id: 'linear',
      title: 'Linear Algebra',
      description: 'Built-in matrices.',
      content: `using LinearAlgebra
A = [1 2; 3 4]
println(det(A))`,
      output: `-2.0`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Types & OOP',
      description: 'Learn Types & OOP',
      content: `    {`,
      subtopics: [
            {
      id: 'struct',
      title: 'Structs',
      description: 'Composite types.',
      content: `struct Point x; y end
p = Point(3, 4)
println(p.x, p.y)`,
      output: `3 4`,
    },
            {
      id: 'abstract',
      title: 'Abstract Types',
      description: 'Type hierarchy.',
      content: `abstract type Animal end
struct Dog <: Animal end
println(Dog <: Animal)`,
      output: `true`,
    },
      ],
    },
        {
      id: 'io',
      title: 'Input / Output',
      description: 'Learn Input / Output',
      content: `    {`,
      subtopics: [
            {
      id: 'read',
      title: 'readline',
      description: 'Stdin input.',
      content: `print("Name: "); n = readline()
println("Hi $n")`,
      output: `Name: Hi `,
    },
      ],
    },
        {
      id: 'macros',
      title: 'Metaprogramming',
      description: 'Learn Metaprogramming',
      content: `    {`,
      subtopics: [
            {
      id: 'macro',
      title: 'Macros',
      description: '@ and Expr.',
      content: `macro sayhello() :(println('hi')) end
@sayhello()`,
      output: `hi`,
    },
      ],
    },
  ],
};
