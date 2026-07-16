import scala from 'react-syntax-highlighter/dist/esm/languages/hljs/scala';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('scala', scala);

export const scalaConfig = {
  title: "Scala Tutorial",
  language: 'scala',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'val-var',
        title: 'val / var',
        description: 'Declare immutable (val) and mutable (var) bindings.',
        content: `val name: String = "Alice"
var age: Int = 25
println(s"Name: $name, Age: $age")

age = 26
println(s"Next year: $age")

val greeting = "Hello, " + name
println(greeting)`,
        output: "Name: Alice, Age: 25\nNext year: 26\nHello, Alice"
      },
      {
        id: 'types',
        title: 'Types',
        description: "Work with Scala's core types: Int, Double, String, Boolean, Char.",
        content: `val n: Int = 42
val pi: Double = 3.14159
val msg: String = "Scala"
val flag: Boolean = true
val ch: Char = 'A'

println(s"$n | $pi | $msg | $flag | $ch")
println(s"Type of pi: ${pi.getClass.getSimpleName}")
println(s"Max Int: ${Int.MaxValue}")`,
        output: "42 | 3.14159 | Scala | true | A\nType of pi: double\nMax Int: 2147483647"
      },
      {
        id: 'string-interpolation',
        title: 'String Interpolation',
        description: 'Embed variables and expressions in strings with s, f, and raw interpolators.',
        content: `val name = "Alice"
val age = 25

println(s"Hello, $name!")
println(s"${name} is $age years old, next year ${age + 1}")

val height = 1.75
println(f"Height: $height%.2f meters")

println(raw"No escape: \\n\\t test")`,
        output: "Hello, Alice!\nAlice is 25 years old, next year 26\nHeight: 1.75 meters\nNo escape: \\n\\t test"
      },
      {
        id: 'case-classes',
        title: 'Case Classes',
        description: 'Define immutable data structures with built-in equals, copy, and pattern matching.',
        content: `case class Person(name: String, age: Int)

val alice = Person("Alice", 30)
println(alice)
println(s"Name: ${alice.name}")

val older = alice.copy(age = 31)
println(older)

println(alice == Person("Alice", 30))`,
        output: "Person(Alice,30)\nName: Alice\nPerson(Alice,31)\ntrue"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-expression',
        title: 'if Expression',
        description: 'Use if/else as an expression that returns a value.',
        content: `val age = 20

val status = if (age >= 18) "Adult" else "Minor"
println(status)

val result = if (age >= 21) {
  val years = age - 21
  s"Adult for $years years"
} else {
  s"Not 21 yet"
}
println(result)`,
        output: "Adult\nNot 21 yet"
      },
      {
        id: 'match',
        title: 'match',
        description: 'Pattern match against values, types, and extractors with exhaustiveness.',
        content: `val day = "Monday"

val kind = day match {
  case "Saturday" | "Sunday" => "Weekend"
  case "Monday" | "Friday"   => "Weekend-adjacent"
  case _                      => "Weekday"
}
println(kind)

val num: Any = 42
num match {
  case n: Int if n > 0 => println(s"Positive int: $n")
  case s: String       => println(s"String value: $s")
  case _               => println("Something else")
}`,
        output: "Weekend-adjacent\nPositive int: 42"
      },
      {
        id: 'for-comprehensions',
        title: 'for Comprehensions',
        description: 'Iterate, filter, and yield results with for comprehensions.',
        content: `val nums = List(1, 2, 3, 4, 5)

// Simple iteration
for (n <- nums) println(n)

// With guard
val evens = for (n <- nums if n % 2 == 0) yield n * 2
println(evens)

// Multiple generators
val pairs = for {
  x <- 1 to 3
  y <- 1 to 3
  if x != y
} yield (x, y)
println(pairs)`,
        output: "1\n2\n3\n4\n5\nList(4, 8)\nVector((1,2), (1,3), (2,1), (2,3), (3,1), (3,2))"
      },
      {
        id: 'while',
        title: 'while',
        description: 'Loop with while and do-while for imperative-style iteration.',
        content: `var i = 0
while (i < 3) {
  println(s"i = $i")
  i += 1
}

var j = 0
do {
  println(s"j = $j")
  j += 1
} while (j < 3)`,
        output: "i = 0\ni = 1\ni = 2\nj = 0\nj = 1\nj = 2"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define methods with def, including default parameters and return types.',
        content: `def add(a: Int, b: Int): Int = a + b
def greet(name: String = "Guest"): String = s"Hello, $name!"

println(add(10, 5))
println(greet("Alice"))
println(greet())

def factorial(n: Int): Int =
  if (n <= 1) 1 else n * factorial(n - 1)

println(factorial(5))`,
        output: "15\nHello, Alice!\nHello, Guest!\n120"
      },
      {
        id: 'lambdas',
        title: 'Lambdas',
        description: 'Create anonymous functions (lambdas) and use underscore shorthand.',
        content: `val double = (x: Int) => x * 2
println(double(7))

val add = (a: Int, b: Int) => a + b
println(add(3, 4))

val list = List(1, 2, 3, 4)
println(list.map(_ * 3))
println(list.filter(_ > 2))
println(list.reduce(_ + _))`,
        output: "14\n7\nList(3, 6, 9, 12)\nList(3, 4)\n10"
      },
      {
        id: 'higher-order',
        title: 'Higher-Order',
        description: 'Pass functions as arguments and return functions from functions.',
        content: `def applyOp(x: Int, y: Int, op: (Int, Int) => Int): Int = op(x, y)

println(applyOp(10, 5, _ + _))
println(applyOp(10, 5, _ * _))

def multiplier(factor: Int): Int => Int = (x: Int) => x * factor

val triple = multiplier(3)
val quadruple = multiplier(4)
println(triple(10))
println(quadruple(10))`,
        output: "15\n50\n30\n40"
      },
      {
        id: 'currying',
        title: 'Currying',
        description: 'Convert multi-argument functions into chains of single-argument functions.',
        content: `def addCurried(x: Int)(y: Int): Int = x + y

val addFive = addCurried(5)_
println(addFive(10))

println(addCurried(3)(7))

def greet(greeting: String)(name: String): String =
  s"$greeting, $name!"

val hello = greet("Hello")_
println(hello("Bob"))`,
        output: "15\n10\nHello, Bob!"
      }
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'list',
        title: 'List',
        description: 'Work with immutable linked lists and common operations.',
        content: `val nums = List(1, 2, 3, 4, 5)
println(nums)
println(s"Head: ${nums.head}, Tail: ${nums.tail}")

val prepended = 0 :: nums
println(prepended)

val combined = List(1, 2) ::: List(3, 4)
println(combined)

println(nums.reverse)
println(nums.indices)`,
        output: "List(1, 2, 3, 4, 5)\nHead: 1, Tail: List(2, 3, 4, 5)\nList(0, 1, 2, 3, 4, 5)\nList(1, 2, 3, 4)\nList(5, 4, 3, 2, 1)\nRange 0 until 5"
      },
      {
        id: 'map',
        title: 'Map',
        description: 'Create and transform immutable maps with key-value lookups.',
        content: `val scores = Map("Alice" -> 95, "Bob" -> 87, "Charlie" -> 92)
println(scores)
println(scores("Bob"))
println(scores.getOrElse("Diana", 0))

val updated = scores + ("Bob" -> 90)
println(updated)

val merged = scores ++ Map("Diana" -> 88, "Eve" -> 91)
println(merged)

for ((name, score) <- scores) println(s"$name: $score")`,
        output: "Map(Alice -> 95, Bob -> 87, Charlie -> 92)\n87\n0\nMap(Alice -> 95, Bob -> 90, Charlie -> 92)\nMap(Alice -> 95, Bob -> 87, Charlie -> 92, Diana -> 88, Eve -> 91)\nAlice: 95\nBob: 87\nCharlie: 92"
      },
      {
        id: 'set',
        title: 'Set',
        description: 'Use immutable sets with union, intersect, diff operations.',
        content: `val a = Set(1, 2, 3, 4)
val b = Set(3, 4, 5, 6)

println(a union b)
println(a intersect b)
println(a diff b)
println(a contains 3)
println(a + 5)
println(a - 3)`,
        output: "HashSet(1, 5, 2, 6, 3, 4)\nHashSet(3, 4)\nHashSet(1, 2)\ntrue\nHashSet(1, 5, 2, 3, 4)\nHashSet(1, 2, 4)"
      },
      {
        id: 'operations',
        title: 'Operations: map / flatMap / filter / fold',
        description: 'Transform, filter, flatten, and fold collections.',
        content: `val nums = List(1, 2, 3, 4, 5)

println(nums.map(_ * 2))
println(nums.filter(_ % 2 == 0))
println(nums.map(n => List(n, n * n)))

val flattened = nums.flatMap(n => List(n, n * n))
println(flattened)

println(nums.foldLeft(0)(_ + _))
println(nums.foldLeft("")((acc, n) => acc + n))`,
        output: "List(2, 4, 6, 8, 10)\nList(2, 4)\nList(List(1, 1), List(2, 4), List(3, 9), List(4, 16), List(5, 25))\nList(1, 1, 2, 4, 3, 9, 4, 16, 5, 25)\n15\n12345"
      }
    ],
  },
]
};
