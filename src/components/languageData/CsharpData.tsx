import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const csharpConfig: LanguageConfig = {
  title: 'C#',
  language: 'csharp',
  tutorialData: [
        {
      id: 'basics',
      title: 'C# Basics',
      description: 'Learn C# Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Top-level statements or Main.',
      content: `using System;
Console.WriteLine('Hello, World!');`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & var',
      description: 'Type inference with var.',
      content: `using System;
var name = 'Ada';
int age = 36;
Console.WriteLine($'{name} is {age}');`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Value & Reference Types',
      description: 'struct vs class.',
      content: `using System;
int a = 5; int b = a; b++;
Console.WriteLine($'{a} {b}');`,
      output: `5 6`,
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
      title: 'If / Else',
      description: 'Standard branching.',
      content: `using System;
int x = 10;
if (x > 5) Console.WriteLine('big'); else Console.WriteLine('small');`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Counted loops.',
      content: `using System;
for (int i = 0; i < 3; i++) Console.Write(i + ' ');`,
      output: `0 1 2 `,
    },
            {
      id: 'foreach',
      title: 'foreach',
      description: 'Iterate collections.',
      content: `using System;
foreach (var n in new[] {1,2,3}) Console.Write(n);`,
      output: `123`,
    },
            {
      id: 'switch',
      title: 'switch (modern)',
      description: 'Pattern switch expressions.',
      content: `using System;
string Grade(int s) => s switch { >= 90 => 'A', >= 80 => 'B', _ => 'C' };
Console.WriteLine(Grade(85));`,
      output: `B`,
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
      title: 'Methods',
      description: 'Define methods in a class.',
      content: `using System;
int Square(int n) => n * n;
Console.WriteLine(Square(5));`,
      output: `25`,
    },
            {
      id: 'params',
      title: 'params',
      description: 'Variable argument lists.',
      content: `using System;
int Sum(params int[] xs) { int t=0; foreach(var x in xs) t+=x; return t; }
Console.WriteLine(Sum(1,2,3));`,
      output: `6`,
    },
            {
      id: 'lambda',
      title: 'Lambdas',
      description: 'Anonymous functions.',
      content: `using System;
Func<int,int> sq = x => x * x;
Console.WriteLine(sq(4));`,
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
      title: 'List<T>',
      description: 'Generic dynamic array.',
      content: `using System;
using System.Collections.Generic;
var nums = new List<int> { 1, 2, 3 };
nums.Add(4);
Console.WriteLine(nums.Count);`,
      output: `4`,
    },
            {
      id: 'dict',
      title: 'Dictionary<K,V>',
      description: 'Key-value store.',
      content: `using System;
using System.Collections.Generic;
var d = new Dictionary<string,int> { ['a'] = 1 };
d['b'] = 2;
Console.WriteLine(d['b']);`,
      output: `2`,
    },
            {
      id: 'linq',
      title: 'LINQ',
      description: 'Query collections.',
      content: `using System;
using System.Linq;
var evens = new[] {1,2,3,4}.Where(x => x % 2 == 0);
Console.WriteLine(string.Join(',', evens));`,
      output: `2,4`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented C#',
      description: 'Learn Object-Oriented C#',
      content: `    {`,
      subtopics: [
            {
      id: 'classes',
      title: 'Classes',
      description: 'Encapsulate state + behavior.',
      content: `using System;
class Dog { public void Bark() => Console.WriteLine('Woof'); }
new Dog().Bark();`,
      output: `Woof`,
    },
            {
      id: 'props',
      title: 'Properties',
      description: 'get/set accessors.',
      content: `using System;
class Person { public string Name { get; set; } }
var p = new Person { Name = 'Lin' };
Console.WriteLine(p.Name);`,
      output: `Lin`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'Base and derived.',
      content: `using System;
class A { public void F() => Console.WriteLine('A'); }
class B : A {}
new B().F();`,
      output: `A`,
    },
            {
      id: 'interfaces',
      title: 'Interfaces',
      description: 'Contracts.',
      content: `using System;
interface IShape { double Area(); }
class Circle : IShape { public double Area() => 3.14 * 2 * 2; }
Console.WriteLine(new Circle().Area());`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'async',
      title: 'Async / Await',
      description: 'Learn Async / Await',
      content: `    {`,
      subtopics: [
            {
      id: 'task',
      title: 'Task & async',
      description: 'Asynchronous code.',
      content: `using System;
using System.Threading.Tasks;
async Task Main() { await Task.Delay(10); Console.WriteLine('done'); }`,
      output: `done`,
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
      id: 'try-catch',
      title: 'try / catch',
      description: 'Catch exceptions.',
      content: `using System;
try { throw new Exception('oops'); }
catch (Exception e) { Console.WriteLine(e.Message); }`,
      output: `oops`,
    },
      ],
    },
        {
      id: 'file-io',
      title: 'File I/O',
      description: 'Learn File I/O',
      content: `    {`,
      subtopics: [
            {
      id: 'write',
      title: 'WriteAllText',
      description: 'Write a file.',
      content: `using System.IO;
File.WriteAllText('o.txt', 'hi');
Console.WriteLine('written');`,
      output: `written`,
    },
            {
      id: 'read',
      title: 'ReadAllText',
      description: 'Read a file.',
      content: `using System.IO;
File.WriteAllText('o.txt', 'hi');
Console.WriteLine(File.ReadAllText('o.txt'));`,
      output: `hi`,
    },
      ],
    },
        {
      id: 'modern',
      title: 'Modern C#',
      description: 'Learn Modern C#',
      content: `    {`,
      subtopics: [
            {
      id: 'records',
      title: 'Records',
      description: 'Immutable data types.',
      content: `using System;
record Person(string Name, int Age);
var p = new Person('Kim', 30);
Console.WriteLine(p);`,
      output: `Person { Name = Kim, Age = 30 }`,
    },
            {
      id: 'pattern',
      title: 'Pattern Matching',
      description: 'is / switch patterns.',
      content: `using System;
object o = 5;
Console.WriteLine(o is int i ? $'int {i}' : 'other');`,
      output: `int 5`,
    },
      ],
    },
  ],
};
