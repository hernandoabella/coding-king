import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const typeScriptConfig: LanguageConfig = {
  title: 'TypeScript',
  language: 'typescript',
  tutorialData: [
        {
      id: 'basics',
      title: 'TypeScript Basics',
      description: 'Learn TypeScript Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Typed superset of JS.',
      content: `const msg: string = 'Hello, World!';
console.log(msg);`,
      output: `Hello, World!`,
    },
            {
      id: 'annotations',
      title: 'Type Annotations',
      description: 'Annotate variables.',
      content: `let age: number = 30;
let name: string = 'Ada';
console.log(name + ' is ' + age);`,
      output: `Ada is 30`,
    },
            {
      id: 'inference',
      title: 'Type Inference',
      description: 'Types inferred.',
      content: `const x = 42;
console.log(typeof x);`,
      output: `number`,
    },
      ],
    },
        {
      id: 'types',
      title: 'Core Types',
      description: 'Learn Core Types',
      content: `    {`,
      subtopics: [
            {
      id: 'primitives',
      title: 'Primitives',
      description: 'string, number, boolean, etc.',
      content: `let ok: boolean = true;
let n: number = 3.14;
let s: string = 'hi';
console.log(ok, n, s);`,
      output: `true 3.14 hi`,
    },
            {
      id: 'arrays',
      title: 'Arrays & Tuples',
      description: 'Typed sequences.',
      content: `const a: number[] = [1, 2, 3];
const t: [string, number] = ['Kim', 30];
console.log(a[0], t[1]);`,
      output: `1 30`,
    },
            {
      id: 'union',
      title: 'Union Types',
      description: 'One of several types.',
      content: `function format(id: number | string) { return 'id=' + id; }
console.log(format(5), format('x'));`,
      output: `id=5 id=x`,
    },
            {
      id: 'enum',
      title: 'Enums',
      description: 'Named constants.',
      content: `enum Color { Red, Green, Blue }
console.log(Color.Green);`,
      output: `1`,
    },
      ],
    },
        {
      id: 'interfaces',
      title: 'Interfaces & Types',
      description: 'Learn Interfaces & Types',
      content: `    {`,
      subtopics: [
            {
      id: 'interface',
      title: 'Interfaces',
      description: 'Shape contracts.',
      content: `interface Person { name: string; age: number; }
const p: Person = { name: 'Lin', age: 30 };
console.log(p.name);`,
      output: `Lin`,
    },
            {
      id: 'typealias',
      title: 'Type Aliases',
      description: 'Named type shortcuts.',
      content: `type ID = number | string;
const a: ID = 5;
console.log(a);`,
      output: `5`,
    },
            {
      id: 'optional',
      title: 'Optional Properties',
      description: '? modifier.',
      content: `interface User { name: string; age?: number; }
const u: User = { name: 'Kim' };
console.log(u.age ?? 'n/a');`,
      output: `n/a`,
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
      id: 'typed',
      title: 'Typed Parameters',
      description: 'Annotate args/returns.',
      content: `function square(n: number): number { return n * n; }
console.log(square(5));`,
      output: `25`,
    },
            {
      id: 'generics',
      title: 'Generics',
      description: 'Parameterized types.',
      content: `function first<T>(xs: T[]): T { return xs[0]; }
console.log(first([1, 2, 3]));`,
      output: `1`,
    },
            {
      id: 'overloads',
      title: 'Overloads',
      description: 'Multiple signatures.',
      content: `function len(s: string): number;
function len(a: any[]): number;
function len(x: any): number { return x.length; }
console.log(len('hi'), len([1, 2]));`,
      output: `2 2`,
    },
      ],
    },
        {
      id: 'classes',
      title: 'Classes',
      description: 'Learn Classes',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'TS class with access modifiers.',
      content: `class Dog { private name = 'Rex'; bark() { console.log('Woof'); } }
new Dog().bark();`,
      output: `Woof`,
    },
            {
      id: 'access',
      title: 'Access Modifiers',
      description: 'public / private / readonly.',
      content: `class Box { constructor(public w: number) {} }
console.log(new Box(5).w);`,
      output: `5`,
    },
            {
      id: 'implements',
      title: 'implements',
      description: 'Enforce interface.',
      content: `interface Shape { area(): number; }
class C implements Shape { area() { return 12.56; } }
console.log(new C().area());`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'advanced',
      title: 'Advanced Types',
      description: 'Learn Advanced Types',
      content: `    {`,
      subtopics: [
            {
      id: 'utility',
      title: 'Utility Types',
      description: 'Partial, Pick, Record.',
      content: `type User = { id: number; name: string };
const u: Partial<User> = { name: 'Kim' };
console.log(u.name);`,
      output: `Kim`,
    },
            {
      id: 'narrowing',
      title: 'Type Narrowing',
      description: 'typeof / in guards.',
      content: `function f(x: number | string) { console.log(typeof x === 'string' ? x.toUpperCase() : x + 1); }
f('hi'); f(4);`,
      output: `HI
5`,
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
      id: 'async',
      title: 'async / await',
      description: 'Promises with types.',
      content: `async function main(): Promise<void> { const v: number = await Promise.resolve(7); console.log(v); }
main();`,
      output: `7`,
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
      description: 'Typed catch.',
      content: `try { throw new Error('oops'); } catch (e) { console.log((e as Error).message); }`,
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
      title: 'import / export',
      description: 'Strongly-typed modules.',
      content: `// export const add = (a: number, b: number): number => a + b;
// import { add } from './math';
console.log('TS modules');`,
      output: `TS modules`,
    },
      ],
    },
  ],
};
