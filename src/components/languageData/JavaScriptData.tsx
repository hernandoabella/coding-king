import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const javaScriptConfig: LanguageConfig = {
  title: 'JavaScript',
  language: 'javascript',
  tutorialData: [
        {
      id: 'basics',
      title: 'JavaScript Basics',
      description: 'Learn JavaScript Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Console output.',
      content: `console.log('Hello, World!');`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'let / const / var',
      description: 'Block-scoped declarations.',
      content: `let name = 'Ada';
const year = 2024;
name = 'Lin';
console.log(name, year);`,
      output: `Lin 2024`,
    },
            {
      id: 'types',
      title: 'Dynamic Types',
      description: 'Number, string, boolean, etc.',
      content: `const a = 5;
const b = '5';
console.log(a + b, a + Number(b));`,
      output: `55 10`,
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
      description: 'Truthy/falsy branching.',
      content: `const x = 10;
if (x > 5) console.log('big'); else console.log('small');`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / for-of / for-in',
      description: 'Loop variants.',
      content: `for (const n of [1, 2, 3]) console.log(n);`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `let i = 0; while (i < 3) console.log(i++);`,
      output: `0
1
2`,
    },
            {
      id: 'switch',
      title: 'switch',
      description: 'Multi-way branch.',
      content: `const d = 2;
const s = d === 1 ? 'one' : d === 2 ? 'two' : 'other';
console.log(s);`,
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
      title: 'Function Declarations',
      description: 'Hoisted functions.',
      content: `function square(n) { return n * n; }
console.log(square(5));`,
      output: `25`,
    },
            {
      id: 'arrow',
      title: 'Arrow Functions',
      description: 'Concise syntax.',
      content: `const sq = (n) => n * n;
console.log(sq(4));`,
      output: `16`,
    },
            {
      id: 'rest',
      title: 'Rest & Default Params',
      description: 'FlexArgs.',
      content: `function sum(...xs) { return xs.reduce((a, b) => a + b, 0); }
console.log(sum(1, 2, 3));`,
      output: `6`,
    },
            {
      id: 'closures',
      title: 'Closures',
      description: 'Functions capture scope.',
      content: `function makeAdder(x) { return (y) => x + y; }
const add5 = makeAdder(5);
console.log(add5(3));`,
      output: `8`,
    },
      ],
    },
        {
      id: 'data-structures',
      title: 'Data Structures',
      description: 'Learn Data Structures',
      content: `    {`,
      subtopics: [
            {
      id: 'array',
      title: 'Arrays',
      description: 'Ordered lists.',
      content: `const a = [1, 2, 3];
a.push(4);
console.log(a.length, a[0]);`,
      output: `4 1`,
    },
            {
      id: 'object',
      title: 'Objects',
      description: 'Key-value maps.',
      content: `const o = { name: 'Kim', age: 30 };
console.log(o.name, o['age']);`,
      output: `Kim 30`,
    },
            {
      id: 'map',
      title: 'Map & Set',
      description: 'ES6 collections.',
      content: `const m = new Map([['a', 1]]);
m.set('b', 2);
console.log(m.get('b'));`,
      output: `2`,
    },
            {
      id: 'destructuring',
      title: 'Destructuring',
      description: 'Unpack arrays/objects.',
      content: `const [x, y] = [1, 2];
const { name } = { name: 'Lin' };
console.log(x, y, name);`,
      output: `1 2 Lin`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Objects & Classes',
      description: 'Learn Objects & Classes',
      content: `    {`,
      subtopics: [
            {
      id: 'classes',
      title: 'Classes',
      description: 'Syntactic sugar over prototypes.',
      content: `class Dog { bark() { console.log('Woof'); } }
new Dog().bark();`,
      output: `Woof`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'extends keyword.',
      content: `class A { f() { console.log('A'); } }
class B extends A {}
new B().f();`,
      output: `A`,
    },
            {
      id: 'getters',
      title: 'Getters / Setters',
      description: 'Computed properties.',
      content: `class Circle { constructor(r) { this.r = r; } get area() { return Math.PI * this.r ** 2; } }
console.log(new Circle(2).area.toFixed(2));`,
      output: `12.57`,
    },
      ],
    },
        {
      id: 'async',
      title: 'Async & Promises',
      description: 'Learn Async & Promises',
      content: `    {`,
      subtopics: [
            {
      id: 'promises',
      title: 'Promises',
      description: 'Future values.',
      content: `const p = new Promise((res) => res(42));
p.then((v) => console.log(v));`,
      output: `42`,
    },
            {
      id: 'async',
      title: 'async / await',
      description: 'Syntactic promise chaining.',
      content: `async function main() { const v = await Promise.resolve(7); console.log(v); }
main();`,
      output: `7`,
    },
            {
      id: 'fetch',
      title: 'fetch',
      description: 'HTTP requests.',
      content: `fetch('https://api.github.com')
  .then((r) => r.json())
  .then((j) => console.log(typeof j));`,
      output: `object`,
    },
      ],
    },
        {
      id: 'functional',
      title: 'Functional Methods',
      description: 'Learn Functional Methods',
      content: `    {`,
      subtopics: [
            {
      id: 'map',
      title: 'map / filter / reduce',
      description: 'Array transformations.',
      content: `const nums = [1, 2, 3, 4];
const evens = nums.filter((n) => n % 2 === 0);
console.log(evens);`,
      output: `[ 2, 4 ]`,
    },
            {
      id: 'spread',
      title: 'Spread Operator',
      description: 'Expand iterables.',
      content: `const a = [1, 2];
const b = [...a, 3];
console.log(b);`,
      output: `[ 1, 2, 3 ]`,
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
      title: 'try / catch / finally',
      description: 'Catch exceptions.',
      content: `try { throw new Error('oops'); } catch (e) { console.log(e.message); }`,
      output: `oops`,
    },
      ],
    },
        {
      id: 'modules',
      title: 'Modules',
      description: 'Learn Modules',
      content: `    {`,
      subtopics: [
            {
      id: 'esm',
      title: 'ES Modules',
      description: 'import / export.',
      content: `// math.js
// export const add = (a, b) => a + b;
// main.js
// import { add } from './math.js';
console.log('modules enabled');`,
      output: `modules enabled`,
    },
      ],
    },
        {
      id: 'dom',
      title: 'DOM Basics',
      description: 'Learn DOM Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'query',
      title: 'Selecting Elements',
      description: 'querySelector.',
      content: `// document.querySelector('h1').textContent = 'Hi';
console.log('DOM available in browser');`,
      output: `DOM available in browser`,
    },
      ],
    },
  ],
};
