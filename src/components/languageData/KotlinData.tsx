import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const kotlinConfig: LanguageConfig = {
  title: 'Kotlin',
  language: 'kotlin',
  tutorialData: [
        {
      id: 'basics',
      title: 'Kotlin Basics',
      description: 'Learn Kotlin Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'fun main, println.',
      content: `fun main() {
    println('Hello, World!')
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'val / var',
      description: 'Immutable vs mutable.',
      content: `fun main() {
    val name = 'Ada'
    var age = 36
    age++
    println('$name is $age')
}`,
      output: `Ada is 37`,
    },
            {
      id: 'types',
      title: 'Type Inference',
      description: 'Strong, inferred types.',
      content: `fun main() {
    val x: Int = 5
    val y = 3.14
    println('$x $y')
}`,
      output: `5 3.14`,
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
      title: 'if as expression',
      description: 'Returns a value.',
      content: `fun main() {
    val x = 10
    val s = if (x > 5) 'big' else 'small'
    println(s)
}`,
      output: `big`,
    },
            {
      id: 'when',
      title: 'when',
      description: 'Kotlin\'s switch.',
      content: `fun main() {
    val d = 2
    val s = when (d) { 1 -> 'one'; 2 -> 'two'; else -> 'other' }
    println(s)
}`,
      output: `two`,
    },
            {
      id: 'for',
      title: 'for / range',
      description: 'Iterate ranges.',
      content: `fun main() {
    for (i in 0..2) print('$i ')
}`,
      output: `0 1 2 `,
    },
            {
      id: 'while',
      title: 'while / do-while',
      description: 'Loops.',
      content: `fun main() {
    var i = 0
    while (i < 3) { print(i); i++ }
}`,
      output: `012`,
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
      description: 'Type after name.',
      content: `fun square(n: Int): Int = n * n
fun main() { println(square(5)) }`,
      output: `25`,
    },
            {
      id: 'default',
      title: 'Default & Named Args',
      description: 'Flexible calls.',
      content: `fun greet(name: String = 'World', loud: Boolean = false) =
  println(if (loud) 'HI $name!' else 'Hi $name')
fun main() { greet(); greet('Ada', true) }`,
      output: `Hi World
HI Ada!`,
    },
            {
      id: 'lambda',
      title: 'Lambdas',
      description: 'Trailing closures.',
      content: `fun main() {
    val sq: (Int) -> Int = { it * it }
    println(sq(4))
}`,
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
      id: 'list',
      title: 'List / MutableList',
      description: 'Read-only by default.',
      content: `fun main() {
    val nums = listOf(1, 2, 3)
    println('\${nums.size} \${nums[0]}')
}`,
      output: `3 1`,
    },
            {
      id: 'map',
      title: 'Map',
      description: 'Key-value pairs.',
      content: `fun main() {
    val m = mapOf('a' to 1, 'b' to 2)
    println(m['b'])
}`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'Set',
      description: 'Unique collection.',
      content: `fun main() {
    val s = setOf(3, 1, 2)
    println(s.contains(2))
}`,
      output: `true`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Classes & OOP',
      description: 'Learn Classes & OOP',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'Primary constructors.',
      content: `class Dog { fun bark() = println('Woof') }
fun main() { Dog().bark() }`,
      output: `Woof`,
    },
            {
      id: 'data',
      title: 'Data Classes',
      description: 'Auto equals/hash/toString.',
      content: `data class Person(val name: String, val age: Int)
fun main() { println(Person('Lin', 30)) }`,
      output: `Person(name=Lin, age=30)`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: ': Super() and override.',
      content: `open class A { open fun f() = println('A') }
class B : A() { override fun f() = println('B') }
fun main() { B().f() }`,
      output: `B`,
    },
            {
      id: 'interface',
      title: 'Interfaces',
      description: 'Contracts.',
      content: `interface Shape { fun area(): Double }
class C : Shape { override fun area() = 12.56 }
fun main() { println(C().area()) }`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'functional',
      title: 'Functional Style',
      description: 'Learn Functional Style',
      content: `    {`,
      subtopics: [
            {
      id: 'map',
      title: 'map / filter',
      description: 'Collection transforms.',
      content: `fun main() {
    val evens = listOf(1, 2, 3, 4).filter { it % 2 == 0 }
    println(evens)
}`,
      output: `[2, 4]`,
    },
            {
      id: 'scope',
      title: 'Scope Functions',
      description: 'let / run / apply.',
      content: `fun main() {
    val s = 'hi'.let { it.uppercase() }
    println(s)
}`,
      output: `HI`,
    },
      ],
    },
        {
      id: 'null',
      title: 'Null Safety',
      description: 'Learn Null Safety',
      content: `    {`,
      subtopics: [
            {
      id: 'nullable',
      title: 'Nullable Types',
      description: '? marks optionals.',
      content: `fun main() {
    val x: String? = null
    println(x?.length ?: 'none')
}`,
      output: `none`,
    },
      ],
    },
        {
      id: 'coroutines',
      title: 'Coroutines',
      description: 'Learn Coroutines',
      content: `    {`,
      subtopics: [
            {
      id: 'async',
      title: 'suspend / async',
      description: 'Concurrency.',
      content: `import kotlinx.coroutines.*
fun main() = runBlocking {
    val v = async { 42 }
    println(v.await())
}`,
      output: `42`,
    },
      ],
    },
  ],
};
