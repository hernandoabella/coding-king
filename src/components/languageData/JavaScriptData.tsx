import javascript from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('javascript', javascript);

export const javaScriptConfig = {
  title: "JavaScript Tutorial",
  language: 'javascript',
  tutorialData: [
    {
      id: 'basics',
      title: 'JavaScript Basics',
      subtopics: [
        {
          id: 'variables',
          title: 'Variables (let/const)',
          description: 'Declare variables with let (mutable) and const (immutable).',
          content: `let name = "Alice";
const PI = 3.14159;
// PI = 3.14; // TypeError: Assignment to constant variable
name = "Bob";
console.log(\`Name: \${name}, PI: \${PI}\`);`,
          output: "Name: Bob, PI: 3.14159"
        },
        {
          id: 'data-types',
          title: 'Data Types',
          description: "JavaScript's primitive types: number, string, boolean, null, undefined, and symbol.",
          content: `let num = 42;
let str = "Hello";
let bool = true;
let empty = null;
let notDefined;
console.log(typeof num, typeof str, typeof bool);
console.log(typeof empty, typeof notDefined);`,
          output: "number string boolean\nobject undefined"
        },
        {
          id: 'template-literals',
          title: 'Template Literals',
          description: 'Use backticks and ${} for string interpolation and multi-line strings.',
          content: `let name = "Alice";
let items = 3;
let price = 9.99;
console.log(\`Hello, \${name}!\`);
console.log(\`Total: \${items * price}\`);
console.log(\`Multi
line
string\`);`,
          output: "Hello, Alice!\nTotal: 29.97\nMulti\nline\nstring"
        },
        {
          id: 'type-coercion',
          title: 'Type Coercion',
          description: 'JavaScript automatically converts types; use === for strict comparison.',
          content: `console.log(5 + "5");
console.log("5" - 2);
console.log(5 == "5");
console.log(5 === "5");
console.log(Boolean(""));
console.log(Boolean("hello"));`,
          output: "55\n3\ntrue\nfalse\nfalse\ntrue"
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
          description: 'Make decisions with if, else if, and else statements.',
          content: `let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}`,
          output: "Grade: B"
        },
        {
          id: 'switch-case',
          title: 'Switch / Case',
          description: 'Branch on multiple values using switch statements.',
          content: `let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Other day");
}`,
          output: "Wednesday"
        },
        {
          id: 'for-loops',
          title: 'For Loops',
          description: 'Iterate with for, for...of, and for...in loops.',
          content: `let fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit.toUpperCase());
}`,
          output: "apple\nbanana\ncherry\nAPPLE\nBANANA\nCHERRY"
        },
        {
          id: 'while-loops',
          title: 'While / Do-While',
          description: 'Repeat code while a condition holds true.',
          content: `let count = 1;
while (count <= 3) {
  console.log(\`While: \${count}\`);
  count++;
}
let num = 5;
do {
  console.log(\`Do-While: \${num}\`);
  num--;
} while (num > 3);`,
          output: "While: 1\nWhile: 2\nWhile: 3\nDo-While: 5\nDo-While: 4"
        },
      ],
    },
    {
      id: 'functions',
      title: 'Functions',
      subtopics: [
        {
          id: 'function-declarations',
          title: 'Function Declarations',
          description: 'Define named functions that can be called with arguments.',
          content: `function greet(name) {
  return \`Hello, \${name}!\`;
}
function add(a, b) {
  return a + b;
}
console.log(greet("Alice"));
console.log(add(3, 7));`,
          output: "Hello, Alice!\n10"
        },
        {
          id: 'arrow-functions',
          title: 'Arrow Functions',
          description: 'Concise function syntax with lexical this binding.',
          content: `const greet = (name) => \`Hi, \${name}!\`;
const multiply = (a, b) => a * b;
const square = x => x * x;
let numbers = [1, 2, 3].map(n => n * 2);
console.log(greet("Bob"));
console.log(multiply(4, 5));
console.log(square(6));
console.log(numbers);`,
          output: "Hi, Bob!\n20\n36\n2,4,6"
        },
        {
          id: 'default-parameters',
          title: 'Default Parameters',
          description: 'Provide fallback values for function parameters.',
          content: `function greet(name = "Guest", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}
console.log(greet());
console.log(greet("Alice"));
console.log(greet("Bob", "Welcome"));`,
          output: "Hello, Guest!\nHello, Alice!\nWelcome, Bob!"
        },
        {
          id: 'closures',
          title: 'Closures',
          description: 'Functions that remember their lexical scope even when called outside it.',
          content: `function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());`,
          output: "1\n2\n3"
        },
      ],
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      subtopics: [
        {
          id: 'arrays',
          title: 'Arrays',
          description: 'Ordered lists with index-based access and common operations.',
          content: `let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]);
console.log(fruits.length);
fruits.push("date");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(fruits.indexOf("banana"));`,
          output: "apple\n3\napple,banana,cherry,date\napple,banana,cherry\n1"
        },
        {
          id: 'array-methods',
          title: 'Array Methods (map/filter/reduce)',
          description: 'Transform arrays with functional methods.',
          content: `let nums = [1, 2, 3, 4, 5, 6];
let doubled = nums.map(n => n * 2);
let evens = nums.filter(n => n % 2 === 0);
let sum = nums.reduce((acc, n) => acc + n, 0);
console.log(doubled);
console.log(evens);
console.log(sum);`,
          output: "2,4,6,8,10,12\n2,4,6\n21"
        },
        {
          id: 'objects',
          title: 'Objects',
          description: 'Key-value collections for structured data.',
          content: `let person = {
  name: "Alice",
  age: 25,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};
console.log(person.name);
person.job = "Engineer";
console.log(person.job);
console.log(person.greet());
console.log(Object.keys(person));`,
          output: "Alice\nEngineer\nHi, I'm Alice\nname,age,greet,job"
        },
        {
          id: 'destructuring',
          title: 'Destructuring',
          description: 'Unpack values from arrays and objects into variables.',
          content: `let [a, b, c] = [10, 20, 30];
console.log(a, b, c);
let user = { name: "Bob", age: 30, city: "Paris" };
let { name, city } = user;
console.log(name, city);
let { age: userAge } = user;
console.log(userAge);`,
          output: "10 20 30\nBob Paris\n30"
        },
      ],
    },
  ],
};