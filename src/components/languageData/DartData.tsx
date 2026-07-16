import dart from 'react-syntax-highlighter/dist/esm/languages/hljs/dart';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('dart', dart);

export const dartConfig = {
  title: "Dart Tutorial",
  language: 'dart',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare variables with var, final, const, and explicit types.',
        content: `// Type inference with var
var name = "Alice";
var age = 25;

// Explicit types
String city = "NYC";
int year = 2024;

// final and const
final double pi = 3.14159;
const int maxItems = 100;

print("\$name is \$age, lives in \$city");
print("pi = \$pi, max = \$maxItems");`,
        output: `Alice is 25, lives in NYC
pi = 3.14159, max = 100`
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Dart\'s built-in types: int, double, String, bool, dynamic.',
        content: `int integer = 42;
double floating = 3.14;
String text = "Dart";
bool flag = true;
dynamic anything = "hello";

print(integer.runtimeType);
print(floating.runtimeType);
print(text.runtimeType);
print(flag.runtimeType);

anything = 123;
print(anything.runtimeType);`,
        output: `int
double
String
bool
int`
      },
      {
        id: 'string-interpolation',
        title: 'String Interpolation',
        description: 'Embed expressions directly in strings with \$ and \${}.',
        content: `var name = "Alice";
var age = 25;

// Simple interpolation
print("My name is \$name");

// Expression interpolation
print("Next year I'll be \${age + 1}");

// Multi-line string
var poem = """Roses are red,
Violets are blue,
Dart is awesome,
And so are you!""";
print(poem);

// Raw string (no escapes)
print(r"C:\\Users\\Alice\\docs");`,
        output: `My name is Alice
Next year I'll be 26
Roses are red,
Violets are blue,
Dart is awesome,
And so are you!
C:\\Users\\Alice\\docs`
      },
      {
        id: 'null-safety',
        title: 'Null Safety',
        description: 'Dart\'s sound null safety with ?, ??, and ! operators.',
        content: `// Nullable types
String? nullableName;
print(nullableName);  // null

nullableName = "Alice";
print(nullableName);

// Null-aware operators
String? nick;
var display = nick ?? "No nickname";
print(display);

// Conditional property access
String? maybeNull;
print(maybeNull?.length);

// Null assertion (use only when sure!)
String? value = "hello";
print(value!.toUpperCase());`,
        output: `null
Alice
No nickname
null
HELLO`
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
        description: 'Conditional branching with if, else if, and else.',
        content: `var score = 85;

if (score >= 90) {
  print("A");
} else if (score >= 80) {
  print("B");
} else if (score >= 70) {
  print("C");
} else {
  print("F");
}

// Ternary operator
var result = score >= 60 ? "Pass" : "Fail";
print(result);`,
        output: `B
Pass`
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'Multi-way branching with switch and pattern matching (Dart 3+).',
        content: `var day = "Mon";

switch (day) {
  case "Mon":
    print("Monday blues");
    break;
  case "Fri":
    print("TGIF!");
    break;
  case "Sat":
  case "Sun":
    print("Weekend!");
    break;
  default:
    print("Midweek");
}

// Switch expression (Dart 3+)
var mood = switch (day) {
  "Mon" => "tired",
  "Fri" => "excited",
  _ => "normal",
};
print(mood);`,
        output: `Monday blues
tired`
      },
      {
        id: 'for-for-in',
        title: 'For / For-in',
        description: 'Traditional for loops and for-in iteration over collections.',
        content: `// C-style for loop
for (var i = 1; i <= 5; i++) {
  stdout.write("\$i ");
}
print("");

// For-in over a list
var fruits = ["apple", "banana", "cherry"];
for (var fruit in fruits) {
  print(fruit);
}

// forEach with lambda
fruits.forEach((f) => print("Fruit: \$f"));`,
        output: `1 2 3 4 5
apple
banana
cherry
Fruit: apple
Fruit: banana
Fruit: cherry`
      },
      {
        id: 'while',
        title: 'While',
        description: 'Loop with while and do-while, plus break and continue.',
        content: `var n = 3;
while (n > 0) {
  print(n);
  n--;
}
print("Go!");

// do-while (runs at least once)
var x = 0;
do {
  x++;
  stdout.write("\$x ");
} while (x < 4);
print("");

// break and continue
for (var i = 1; i <= 10; i++) {
  if (i > 7) break;
  if (i % 2 == 0) continue;
  stdout.write("\$i ");
}`,
        output: `3
2
1
Go!
1 2 3 4
1 3 5 7`
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
        description: 'Define functions with return types and optional parameters.',
        content: `// Basic function
int add(int a, int b) {
  return a + b;
}

// Optional positional parameters
String greet(String name, [String? title]) {
  if (title != null) {
    return "Hello, \$title \$name!";
  }
  return "Hello, \$name!";
}

print(add(3, 4));
print(greet("Alice"));
print(greet("Bob", "Dr."));`,
        output: `7
Hello, Alice!
Hello, Dr. Bob!`
      },
      {
        id: 'named-params',
        title: 'Named Params',
        description: 'Named parameters with required and default values.',
        content: `// Named parameters with defaults
void createUser({
  required String name,
  int age = 0,
  bool isAdmin = false,
}) {
  print("User: \$name, Age: \$age, Admin: \$isAdmin");
}

createUser(name: "Alice", age: 30);
createUser(name: "Bob", isAdmin: true);
createUser(name: "Carol");

// Named with required
String format({required String text, String decor = "*"}) {
  return "\$decor \$text \$decor";
}

print(format(text: "Hello"));
print(format(text: "Hi", decor: "~"));`,
        output: `User: Alice, Age: 30, Admin: false
User: Bob, Age: 0, Admin: true
User: Carol, Age: 0, Admin: false
* Hello *
~ Hi ~`
      },
      {
        id: 'arrow-functions',
        title: 'Arrow Functions',
        description: 'Concise single-expression functions with => syntax.',
        content: `// Arrow function (single expression)
int square(int x) => x * x;
bool isEven(int x) => x % 2 == 0;

print(square(7));
print(isEven(10));
print(isEven(11));

// Arrow with named params
String fullName({required String first, required String last}) =>
    "\$first \$last";

print(fullName(first: "Alice", last: "Smith"));`,
        output: `49
true
false
Alice Smith`
      },
      {
        id: 'async-await',
        title: 'Async / Await',
        description: 'Handle asynchronous operations with Future, async, and await.',
        content: `// Simulate network delay
Future<String> fetchUser() async {
  await Future.delayed(Duration(seconds: 1));
  return "Alice";
}

Future<void> loadData() async {
  print("Loading...");
  var user = await fetchUser();
  print("Got user: \$user");
  print("Done!");
}

// This demonstrates the pattern:
print("Start");
print("  (async results would appear after delay)");
print("End of sync code");`,
        output: `Start
  (async results would appear after delay)
End of sync code`
      },
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'list',
        title: 'List',
        description: 'Ordered collections with powerful built-in methods.',
        content: `// Create lists
var fruits = ["apple", "banana", "cherry"];
var nums = <int>[1, 2, 3];

fruits.add("date");
fruits.remove("banana");

print(fruits);
print(fruits.length);
print(fruits.first);
print(fruits.last);

// Spread and cascade
var more = ["elderberry", ...fruits];
print(more);

// Useful methods
print(nums.map((n) => n * 10).toList());
print(nums.where((n) => n.isOdd).toList());`,
        output: `[apple, cherry, date]
3
apple
date
[elderberry, apple, cherry, date]
[10, 20, 30]
[1, 3]`
      },
      {
        id: 'set',
        title: 'Set',
        description: 'Unique, unordered collections with set operations.',
        content: `var a = {1, 2, 3, 4};
var b = {3, 4, 5, 6};

print("A: \$a");
print("B: \$b");

print("Union:        \${a.union(b)}");
print("Intersection: \${a.intersection(b)}");
print("Difference:   \${a.difference(b)}");

a.add(5);
a.remove(2);
print("Modified A: \$a");

// Empty set (must specify type)
var empty = <String>{};
empty.addAll({"x", "y"});
print(empty);`,
        output: `A: {1, 2, 3, 4}
B: {3, 4, 5, 6}
Union:        {1, 2, 3, 4, 5, 6}
Intersection: {3, 4}
Difference:   {1, 2}
Modified A: {1, 3, 4, 5}
{x, y}`
      },
      {
        id: 'map',
        title: 'Map',
        description: 'Key-value pairs with many convenient access patterns.',
        content: `var person = {
  "name": "Alice",
  "age": 30,
  "city": "NYC",
};

print(person["name"]);
print(person["age"]);

// Add / update
person["job"] = "Engineer";
person["age"] = 31;

// Iterate
person.forEach((key, value) {
  print("\$key: \$value");
});

// Useful methods
print(person.keys);
print(person.values);
print(person.containsKey("name"));
print(person.length);`,
        output: `Alice
30
name: Alice
age: 31
city: NYC
job: Engineer
(name, age, city, job)
(Alice, 31, NYC, Engineer)
true
4`
      },
      {
        id: 'collection-if-for',
        title: 'Collection If / For',
        description: 'Conditional and loop expressions inside collection literals.',
        content: `var promo = true;
var size = "Large";

// Collection-if
var items = [
  "burger",
  if (promo) "free fries",
  "drink",
];
print(items);

// Collection-for
var squares = [
  for (var i = 1; i <= 5; i++) i * i
];
print(squares);

// Combined
var isVip = true;
var menu = [
  "water",
  for (var item in ["tea", "coffee"]) item,
  if (isVip) "champagne",
];
print(menu);`,
        output: `[burger, free fries, drink]
[1, 4, 9, 16, 25]
[water, tea, coffee, champagne]`
      },
    ],
  },
]
};
