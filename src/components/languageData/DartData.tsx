import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const dartConfig: LanguageConfig = {
  title: 'Dart',
  language: 'dart',
  tutorialData: [
        {
      id: 'basics',
      title: 'Dart Basics',
      description: 'Learn Dart Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'main() top-level.',
      content: `void main() {
  print('Hello, World!');
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'var / final / const',
      description: 'Type inference + immutability.',
      content: `void main() {
  var name = 'Ada';
  final age = 36;
  const pi = 3.14;
  print('$name $age $pi');
}`,
      output: `Ada 36 3.14`,
    },
            {
      id: 'types',
      title: 'Built-in Types',
      description: 'int, double, String, bool, List, Map.',
      content: `void main() {
  int x = 5;
  double y = 3.14;
  bool ok = true;
  print('$x $y $ok');
}`,
      output: `5 3.14 true`,
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
      content: `void main() {
  var x = 10;
  if (x > 5) print('big'); else print('small');
}`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / for-in',
      description: 'Loops.',
      content: `void main() {
  for (var i = 0; i < 3; i++) print(i);
}`,
      output: `0
1
2`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `void main() {
  var i = 0;
  while (i < 3) { print(i); i++; }
}`,
      output: `0
1
2`,
    },
            {
      id: 'switch',
      title: 'switch',
      description: 'Multi-way branch.',
      content: `void main() {
  var d = 2;
  var s = switch (d) { 1 => 'one', 2 => 'two', _ => 'other' };
  print(s);
}`,
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
      description: 'Typed signature.',
      content: `int square(int n) => n * n;
void main() { print(square(5)); }`,
      output: `25`,
    },
            {
      id: 'optional',
      title: 'Optional & Named Params',
      description: '{} named, [] positional.',
      content: `void greet(String name, {bool loud = false}) =>
  print(loud ? 'HI $name!' : 'Hi $name');
void main() { greet('Ada', loud: true); }`,
      output: `HI Ada!`,
    },
            {
      id: 'arrow',
      title: 'Arrow Syntax',
      description: 'Single-expression bodies.',
      content: `void main() {
  var sq = (int n) => n * n;
  print(sq(4));
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
      title: 'List',
      description: 'Growable array.',
      content: `void main() {
  var l = [1, 2, 3];
  l.add(4);
  print('\${l.length} \${l[0]}');
}`,
      output: `4 1`,
    },
            {
      id: 'map',
      title: 'Map',
      description: 'Key-value store.',
      content: `void main() {
  var m = {'a': 1};
  m['b'] = 2;
  print(m['b']);
}`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'Set',
      description: 'Unique collection.',
      content: `void main() {
  var s = {3, 1, 2};
  print(s.contains(2));
}`,
      output: `true`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Dart',
      description: 'Learn Object-Oriented Dart',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'Constructors & methods.',
      content: `class Dog {
  void bark() => print('Woof');
}
void main() { Dog().bark(); }`,
      output: `Woof`,
    },
            {
      id: 'constructor',
      title: 'Named Constructors',
      description: 'Factory-style.',
      content: `class Point {
  int x, y;
  Point(this.x, this.y);
}
void main() { print('\${Point(3, 4).x}'); }`,
      output: `3`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'extends + @override.',
      content: `class A { void f() => print('A'); }
class B extends A {}
void main() { B().f(); }`,
      output: `A`,
    },
            {
      id: 'interface',
      title: 'Implicit Interfaces',
      description: 'Implements any class.',
      content: `abstract class Shape { double area(); }
class C implements Shape { double area() => 12.56; }
void main() { print(C().area()); }`,
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
      title: 'map / where',
      description: 'Collection transforms.',
      content: `void main() {
  var evens = [1, 2, 3, 4].where((n) => n % 2 == 0);
  print(evens);
}`,
      output: `(2, 4)`,
    },
      ],
    },
        {
      id: 'async',
      title: 'Async & Futures',
      description: 'Learn Async & Futures',
      content: `    {`,
      subtopics: [
            {
      id: 'future',
      title: 'Future / async',
      description: 'Asynchronous code.',
      content: `Future<int> calc() async => 42;
void main() async { print(await calc()); }`,
      output: `42`,
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
      description: '? and ! operators.',
      content: `void main() {
  int? x;
  print(x?.isEven ?? 'none');
}`,
      output: `none`,
    },
      ],
    },
  ],
};
