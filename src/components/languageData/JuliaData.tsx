import julia from 'react-syntax-highlighter/dist/esm/languages/hljs/julia';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('julia', julia);

export const juliaConfig = {
  title: "Julia Tutorial",
  language: 'julia',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare and use variables with dynamic typing.',
        content: `name = "Alice"
age = 25
pi = 3.14159
active = true

println(name, ", ", age, ", ", pi, ", ", active)`,
        output: "Alice, 25, 3.14159, true"
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Inspect and annotate types in Julia.',
        content: `x::Int64 = 42
y::Float64 = 3.14
s::String = "Julia"
b::Bool = true

println(typeof(x), " ", typeof(y), " ", typeof(s), " ", typeof(b))`,
        output: "Int64 Float64 String Bool"
      },
      {
        id: 'multiple-dispatch',
        title: 'Multiple Dispatch Intro',
        description: 'Functions specialize based on argument types.',
        content: `process(x::Int64) = println("Integer: ", x)
process(x::Float64) = println("Float: ", x)
process(x::String) = println("String: ", x)

process(10)
process(2.5)
process("hello")`,
        output: "Integer: 10\nFloat: 2.5\nString: hello"
      },
      {
        id: 'broadcasting',
        title: 'Broadcasting',
        description: 'Apply operations element-wise with the dot operator.',
        content: `nums = [1, 2, 3, 4]
squares = nums .^ 2
add_one = nums .+ 1

println(squares)
println(add_one)`,
        output: "[1, 4, 9, 16]\n[2, 3, 4, 5]"
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If / Else',
        description: 'Conditional branching with if-elseif-else.',
        content: `x = 15
if x < 10
    println("small")
elseif x < 20
    println("medium")
else
    println("large")
end`,
        output: "medium"
      },
      {
        id: 'for-loops',
        title: 'For Loops',
        description: 'Iterate over ranges and collections.',
        content: `for i in 1:5
    print(i, " ")
end
println()

for name in ["Alice", "Bob", "Charlie"]
    println("Hello ", name)
end`,
        output: "1 2 3 4 5 \nHello Alice\nHello Bob\nHello Charlie"
      },
      {
        id: 'while',
        title: 'While Loops',
        description: 'Repeat a block while a condition holds.',
        content: `n = 1
while n <= 5
    print(n, " ")
    global n += 1
end
println()`,
        output: "1 2 3 4 5 "
      },
      {
        id: 'comprehensions',
        title: 'Comprehensions',
        description: 'Generate arrays with concise syntax.',
        content: `squares = [x^2 for x in 1:5]
evens = [x for x in 1:10 if x % 2 == 0]
grid = [(i, j) for i in 1:2 for j in 1:3]

println(squares)
println(evens)
println(grid)`,
        output: "[1, 4, 9, 16, 25]\n[2, 4, 6, 8, 10]\n[(1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (2, 3)]"
      },
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define functions with the function keyword or compact form.',
        content: `function greet(name)
    return "Hello, " * name * "!"
end

square(x) = x * x

println(greet("Alice"))
println(square(5))`,
        output: "Hello, Alice!\n25"
      },
      {
        id: 'anonymous',
        title: 'Anonymous Functions',
        description: 'Create functions without naming them.',
        content: `doubler = x -> x * 2
result = map(x -> x + 1, [1, 2, 3])

println(doubler(7))
println(collect(result))`,
        output: "14\n[2, 3, 4]"
      },
      {
        id: 'parametric',
        title: 'Parametric Functions',
        description: 'Write generic functions with type parameters.',
        content: `function identity(x::T) where T
    return x
end

println(identity(42))
println(identity("Julia"))
println(identity(3.14))`,
        output: "42\nJulia\n3.14"
      },
      {
        id: 'do-blocks',
        title: 'Do-Blocks',
        description: 'Pass anonymous functions as the first argument.',
        content: `for_each(f, items) = [f(x) for x in items]

result = for_each([1, 2, 3]) do x
    x * x
end

println(result)`,
        output: "[1, 4, 9]"
      },
    ],
  },
  {
    id: 'arrays-matrices',
    title: 'Arrays & Matrices',
    subtopics: [
      {
        id: 'vectors',
        title: 'Vectors',
        description: 'One-dimensional arrays (vectors).',
        content: `v = [10, 20, 30, 40]
push!(v, 50)
println(v)
println(length(v))
println(v[3])`,
        output: "[10, 20, 30, 40, 50]\n5\n30"
      },
      {
        id: 'matrices',
        title: 'Matrices',
        description: 'Two-dimensional arrays (matrices).',
        content: `M = [1 2 3; 4 5 6; 7 8 9]
println(M)
println(size(M))
println(M[2, 3])`,
        output: "[1 2 3; 4 5 6; 7 8 9]\n(3, 3)\n6"
      },
      {
        id: 'linear-algebra',
        title: 'Linear Algebra',
        description: 'Matrix operations and linear algebra functions.',
        content: `using LinearAlgebra

A = [1 2; 3 4]
B = [5 6; 7 8]
println(A * B)
println(det(A))
println(inv(A))`,
        output: "[19 22; 43 50]\n-2.0\n[-2.0 1.0; 1.5 -0.5]"
      },
      {
        id: 'indexing',
        title: 'Indexing',
        description: 'Access and slice arrays with flexible indexing.',
        content: `A = [10, 20, 30, 40, 50]
println(A[2:4])
println(A[end])
println(A[[1, 3, 5]])

M = [1 2 3; 4 5 6]
println(M[1, :])
println(M[:, 2])`,
        output: "[20, 30, 40]\n50\n[10, 30, 50]\n[1, 2, 3]\n[2, 5]"
      },
    ],
  },
]
};
