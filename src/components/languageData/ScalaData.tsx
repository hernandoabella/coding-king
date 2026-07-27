import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const scalaConfig: LanguageConfig = {
  title: 'Scala',
  language: 'scala',
  tutorialData: [
        {
      id: 'basics',
      title: 'Scala Basics',
      description: 'Learn Scala Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'println in object.',
      content: `object Main extends App {
  println("Hello, World!")
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'val / var',
      description: 'Immutable vs mutable.',
      content: `val name = "Ada"
var age = 36
age += 1
println(s"$name is $age")`,
      output: `Ada is 37`,
    },
            {
      id: 'types',
      title: 'Type Inference',
      description: 'Static, inferred.',
      content: `val x: Int = 5
val y = 3.14
println(s"$x $y")`,
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
      title: 'if / else',
      description: 'Expression-based.',
      content: `val x = 10
val s = if (x > 5) "big" else "small"
println(s)`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / yield',
      description: 'Comprehensions.',
      content: `for (i <- 1 to 3) println(i)`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `var i = 1
while (i <= 3) { println(i); i += 1 }`,
      output: `1
2
3`,
    },
            {
      id: 'match',
      title: 'Pattern Matching',
      description: 'match expression.',
      content: `val d = 2
val s = d match { case 1 => "one"; case 2 => "two"; case _ => "other" }
println(s)`,
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
      description: 'Type annotations.',
      content: `def square(n: Int): Int = n * n
println(square(5))`,
      output: `25`,
    },
            {
      id: 'higher',
      title: 'Higher-order',
      description: 'Pass functions.',
      content: `val nums = List(1, 2, 3, 4)
println(nums.filter(_ % 2 == 0))`,
      output: `List(2, 4)`,
    },
            {
      id: 'curry',
      title: 'Currying',
      description: 'Multi-param sugar.',
      content: `def add(a: Int)(b: Int) = a + b
println(add(2)(3))`,
      output: `5`,
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
      title: 'List / Seq',
      description: 'Immutable lists.',
      content: `val l = List(1, 2, 3)
println(l.length)
println(l.head)`,
      output: `3
1`,
    },
            {
      id: 'map',
      title: 'Map / Set',
      description: 'Immutable maps.',
      content: `val m = Map("a" -> 1, "b" -> 2)
println(m("b"))`,
      output: `2`,
    },
            {
      id: 'tuple',
      title: 'Tuples',
      description: 'Heterogeneous.',
      content: `val t = (1, "a", true)
println(t._2)`,
      output: `a`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Scala',
      description: 'Learn Object-Oriented Scala',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'Primary constructor.',
      content: `class Dog { def bark() = println("Woof") }
new Dog().bark()`,
      output: `Woof`,
    },
            {
      id: 'case',
      title: 'Case Classes',
      description: 'Immutable data.',
      content: `case class Person(name: String, age: Int)
println(Person("Lin", 30))`,
      output: `Person(Lin,30)`,
    },
            {
      id: 'trait',
      title: 'Traits',
      description: 'Interfaces & mixins.',
      content: `trait Shape { def area: Double }
class C extends Shape { def area = 12.56 }
println(new C().area)`,
      output: `12.56`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'extends keyword.',
      content: `class A { def f() = println("A") }
class B extends A
new B().f()`,
      output: `A`,
    },
      ],
    },
        {
      id: 'fp',
      title: 'Functional Style',
      description: 'Learn Functional Style',
      content: `    {`,
      subtopics: [
            {
      id: 'immutability',
      title: 'Immutability',
      description: 'Default vals.',
      content: `val a = List(1, 2, 3)
val b = a :+ 4
println(b)`,
      output: `List(1, 2, 3, 4)`,
    },
            {
      id: 'fold',
      title: 'fold / reduce',
      description: 'Aggregate.',
      content: `println(List(1, 2, 3, 4).sum)`,
      output: `10`,
    },
      ],
    },
        {
      id: 'concurrency',
      title: 'Concurrency',
      description: 'Learn Concurrency',
      content: `    {`,
      subtopics: [
            {
      id: 'future',
      title: 'Future',
      description: 'Async via ExecutionContext.',
      content: `import scala.concurrent.Future
import scala.concurrent.ExecutionContext.Implicits.global
val f = Future { 42 }
println("started")`,
      output: `started`,
    },
      ],
    },
  ],
};
