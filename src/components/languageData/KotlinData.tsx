import kotlin from 'react-syntax-highlighter/dist/esm/languages/hljs/kotlin';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('kotlin', kotlin);

export const kotlinConfig = {
  title: "Kotlin Tutorial",
  language: 'kotlin',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'val-var',
        title: 'val & var',
        description: 'val is read-only (immutable), var is mutable. Prefer val when possible.',
        content: `fun main() {
    val name = "Alice"
    var score = 10
    // name = "Bob"  // Error: val cannot be reassigned
    score = 20
    println("$name scored $score points")
}`,
        output: "Alice scored 20 points"
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Kotlin has Int, Double, Boolean, Char, String and more. Type inference works, but you can declare types explicitly.',
        content: `fun main() {
    val a: Int = 42
    val b: Double = 3.14
    val c: Boolean = true
    val d: Char = 'K'
    val e: String = "Hello"
    println("$a | $b | $c | $d | $e")
}`,
        output: "42 | 3.14 | true | K | Hello"
      },
      {
        id: 'string-templates',
        title: 'String Templates',
        description: 'Embed expressions inside strings with $variable or ${expression}.',
        content: `fun main() {
    val name = "Kotlin"
    val version = 1.9
    println("Welcome to $name!")
    println("Next version: \${version + 0.1}")
}`,
        output: "Welcome to Kotlin!\nNext version: 2.0"
      },
      {
        id: 'null-safety',
        title: 'Null Safety',
        description: 'Kotlin eliminates null pointer exceptions with nullable types (?), safe calls (?.), and the Elvis operator (?:).',
        content: `fun main() {
    var name: String? = null
    println(name ?: "Guest")
    name = "Alice"
    println(name?.length)
}`,
        output: "Guest\n5"
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
        description: 'In Kotlin, if is an expression that returns a value—no ternary operator needed.',
        content: `fun main() {
    val score = 85
    val grade = if (score >= 90) "A"
                else if (score >= 80) "B"
                else "C"
    println("Grade: $grade")
}`,
        output: "Grade: B"
      },
      {
        id: 'when',
        title: 'when Expression',
        description: 'when replaces switch and is more powerful—it can match values, ranges, and types.',
        content: `fun main() {
    val x = 3
    when (x) {
        1 -> println("One")
        2, 3 -> println("Two or Three")
        in 4..10 -> println("Between 4 and 10")
        else -> println("Unknown")
    }
}`,
        output: "Two or Three"
      },
      {
        id: 'for-loops',
        title: 'for Loops',
        description: 'Iterate over ranges, arrays, and collections with concise for loop syntax.',
        content: `fun main() {
    for (i in 1..5) print("$i ")
    println()
    val items = listOf("A", "B", "C")
    for (item in items) print("$item ")
}`,
        output: "1 2 3 4 5\nA B C"
      },
      {
        id: 'while',
        title: 'while & do-while',
        description: 'Standard while and do-while loops behave just like in other languages.',
        content: `fun main() {
    var count = 3
    while (count > 0) {
        println("Count: $count")
        count--
    }
}`,
        output: "Count: 3\nCount: 2\nCount: 1"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define functions with the fun keyword. Single-expression functions can use = notation.',
        content: `fun add(a: Int, b: Int): Int {
    return a + b
}
fun square(x: Int) = x * x

fun main() {
    println(add(3, 5))
    println(square(4))
}`,
        output: "8\n16"
      },
      {
        id: 'default-args',
        title: 'Default Arguments',
        description: 'Functions can have default parameter values and named arguments for flexibility.',
        content: `fun greet(name: String = "Guest", prefix: String = "Hello") {
    println("$prefix, $name!")
}
fun main() {
    greet()
    greet("Alice")
    greet(prefix = "Hi", name = "Bob")
}`,
        output: "Hello, Guest!\nHello, Alice!\nHi, Bob!"
      },
      {
        id: 'lambdas',
        title: 'Lambdas',
        description: 'Lambda expressions are anonymous functions passed as arguments, often used with collections.',
        content: `fun main() {
    val double = { x: Int -> x * 2 }
    println(double(7))

    val numbers = listOf(1, 2, 3)
    println(numbers.map { it * 10 })
}`,
        output: "14\n[10, 20, 30]"
      },
      {
        id: 'extension-functions',
        title: 'Extension Functions',
        description: 'Add new functions to existing classes without inheriting from them.',
        content: `fun String.removeVowels(): String {
    return this.filter { it !in "aeiouAEIOU" }
}
fun main() {
    println("Hello World".removeVowels())
}`,
        output: "Hll Wrld"
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
        description: 'Kotlin provides immutable (listOf) and mutable (mutableListOf) lists with many built-in operations.',
        content: `fun main() {
    val numbers = listOf(1, 2, 3, 4, 5)
    println(numbers.first())
    println(numbers.last())
    println(numbers.filter { it % 2 == 0 })
}`,
        output: "1\n5\n[2, 4]"
      },
      {
        id: 'maps',
        title: 'Maps',
        description: 'Key-value pairs using mapOf (immutable) or mutableMapOf (mutable).',
        content: `fun main() {
    val capitals = mapOf(
        "France" to "Paris",
        "Japan" to "Tokyo",
        "Brazil" to "Brasilia"
    )
    println(capitals["Japan"])
    println(capitals.keys)
}`,
        output: "Tokyo\n[France, Japan, Brazil]"
      },
      {
        id: 'sets',
        title: 'Sets',
        description: 'Unordered collections of unique elements, created with setOf or mutableSetOf.',
        content: `fun main() {
    val setA = setOf(1, 2, 3, 4)
    val setB = setOf(3, 4, 5, 6)
    println(setA.intersect(setB))
    println(setA.union(setB))
}`,
        output: "[3, 4]\n[1, 2, 3, 4, 5, 6]"
      },
      {
        id: 'sequences',
        title: 'Sequences',
        description: 'Lazily evaluated collections that avoid intermediate allocations when chaining operations.',
        content: `fun main() {
    val seq = generateSequence(1) { it + 1 }
    val result = seq
        .filter { it % 2 == 0 }
        .map { it * it }
        .take(5)
        .toList()
    println(result)
}`,
        output: "[4, 16, 36, 64, 100]"
      }
    ],
  },
]
};
