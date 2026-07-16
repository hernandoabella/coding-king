import typescript from 'react-syntax-highlighter/dist/esm/languages/hljs/typescript';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('typescript', typescript);

export const typeScriptConfig = {
  title: "TypeScript Tutorial",
  language: 'typescript',
  tutorialData: [
  {
    id: 'basics',
    title: 'TypeScript Basics',
    subtopics: [
      {
        id: 'type-annotations',
        title: 'Type Annotations',
        description: 'Explicitly declare types for variables, parameters, and return values.',
        content: `let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ["Bob", 30];

console.log(\`\${name} is \${age} years old\`);
console.log(\`Active: \${isActive}, Numbers: \${numbers}\`);
console.log(\`Tuple: \${tuple[0]} - \${tuple[1]}\`);`,
        output: "Alice is 25 years old\nActive: true, Numbers: 1,2,3\nTuple: Bob - 30"
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        description: 'Define the shape of objects with interfaces.',
        content: `interface Person {
  name: string;
  age: number;
  email?: string;  // optional property
}

const alice: Person = {
  name: "Alice",
  age: 25,
  email: "alice@example.com"
};

const bob: Person = { name: "Bob", age: 30 };

function greet(person: Person): string {
  return \`Hello, \${person.name}! You are \${person.age}.\`;
}

console.log(greet(alice));
console.log(greet(bob));`,
        output: "Hello, Alice! You are 25.\nHello, Bob! You are 30."
      },
      {
        id: 'union-types',
        title: 'Union Types',
        description: 'Allow a value to be one of several types.',
        content: `type Status = "active" | "inactive" | "pending";
type ID = string | number;

function processID(id: ID): string {
  if (typeof id === "string") {
    return \`String ID: \${id.toUpperCase()}\`;
  }
  return \`Numeric ID: \${id}\`;
}

function setStatus(status: Status): void {
  console.log(\`Status set to: \${status}\`);
}

let userId: ID = 12345;
console.log(processID(userId));

userId = "abc-789";
console.log(processID(userId));

setStatus("active");
// setStatus("deleted");  // Type error!`,
        output: "Numeric ID: 12345\nString ID: ABC-789\nStatus set to: active"
      },
      {
        id: 'enums',
        title: 'Enums',
        description: 'Define a set of named constants, both numeric and string.',
        content: `enum Direction {
  North,
  East,
  South,
  West
}

enum HttpStatus {
  OK = 200,
  NotFound = 404,
  ServerError = 500
}

enum Color {
  Red = "#FF0000",
  Green = "#00FF00",
  Blue = "#0000FF"
}

let dir: Direction = Direction.North;
console.log(\`Direction: \${dir} (value: \${Direction[dir]})\`);

console.log(\`HTTP 404 = \${HttpStatus.NotFound}\`);
console.log(\`Green hex: \${Color.Green}\`);

function move(direction: Direction): void {
  console.log(\`Moving \${Direction[direction]}\`);
}
move(Direction.South);`,
        output: "Direction: 0 (value: North)\nHTTP 404 = 404\nGreen hex: #00FF00\nMoving South"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else-narrowing',
        title: 'If/Else (type narrowing)',
        description: 'TypeScript narrows union types inside conditional blocks.',
        content: `type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    // shape is narrowed to circle type
    return Math.PI * shape.radius ** 2;
  } else {
    // shape is narrowed to rectangle type
    return shape.width * shape.height;
  }
}

function printValue(value: string | number | null): void {
  if (value === null) {
    console.log("Value is null");
  } else if (typeof value === "string") {
    console.log(\`String of length \${value.length}: "\${value}"\`);
  } else {
    console.log(\`Number: \${value.toFixed(2)}\`);
  }
}

console.log(\`Circle area: \${getArea({ kind: "circle", radius: 5 }).toFixed(2)}\`);
console.log(\`Rect area: \${getArea({ kind: "rectangle", width: 4, height: 6 })}\`);
printValue("Hello TS");
printValue(null);`,
        output: "Circle area: 78.54\nRect area: 24\nString of length 8: \"Hello TS\"\nValue is null"
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'Use switch with exhaustive checking for discriminated unions.',
        content: `type Animal =
  | { species: "dog"; breed: string }
  | { species: "cat"; lives: number }
  | { species: "bird"; canFly: boolean };

function describe(animal: Animal): string {
  switch (animal.species) {
    case "dog":
      return \`Dog breed: \${animal.breed}\`;
    case "cat":
      return \`Cat with \${animal.lives} lives\`;
    case "bird":
      return \`Bird can fly: \${animal.canFly}\`;
    default:
      // Exhaustive check - if a new species is added, this becomes an error
      const _exhaustive: never = animal;
      return "Unknown animal";
  }
}

console.log(describe({ species: "dog", breed: "Labrador" }));
console.log(describe({ species: "cat", lives: 9 }));
console.log(describe({ species: "bird", canFly: true }));`,
        output: "Dog breed: Labrador\nCat with 9 lives\nBird can fly: true"
      },
      {
        id: 'for-loops',
        title: 'For Loops',
        description: 'Iterate with for, for...of, and for...in loops.',
        content: `const items: string[] = ["apple", "banana", "cherry"];
const obj = { name: "Alice", age: 25, city: "NYC" };

console.log("--- Traditional for ---");
for (let i = 0; i < items.length; i++) {
  console.log(\`\${i}: \${items[i]}\`);
}

console.log("--- for...of (values) ---");
for (const item of items) {
  console.log(item.toUpperCase());
}

console.log("--- for...in (keys) ---");
for (const key in obj) {
  console.log(\`\${key}: \${obj[key as keyof typeof obj]}\`);
}`,
        output: "--- Traditional for ---\n0: apple\n1: banana\n2: cherry\n--- for...of (values) ---\nAPPLE\nBANANA\nCHERRY\n--- for...in (keys) ---\nname: Alice\nage: 25\ncity: NYC"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'typed-functions',
        title: 'Typed Functions',
        description: 'Add type annotations to function parameters and return values.',
        content: `function add(a: number, b: number): number {
  return a + b;
}

const subtract = (a: number, b: number): number => a - b;

// Function type alias
type MathOp = (x: number, y: number) => number;

const multiply: MathOp = (a, b) => a * b;
const divide: MathOp = (a, b) => a / b;

console.log(\`Add: \${add(10, 5)}\`);
console.log(\`Subtract: \${subtract(10, 5)}\`);
console.log(\`Multiply: \${multiply(10, 5)}\`);
console.log(\`Divide: \${divide(10, 5)}\`);
console.log(\`Divide type: \${typeof divide}\`);`,
        output: "Add: 15\nSubtract: 5\nMultiply: 50\nDivide: 2\nDivide type: function"
      },
      {
        id: 'optional-default-params',
        title: 'Optional / Default Params',
        description: 'Make parameters optional or provide default values.',
        content: `function greet(name: string, greeting?: string): string {
  if (greeting) {
    return \`\${greeting}, \${name}!\`;
  }
  return \`Hello, \${name}!\`;
}

function createUser(
  name: string,
  age: number = 18,
  isAdmin: boolean = false
): object {
  return { name, age, role: isAdmin ? "admin" : "user" };
}

console.log(greet("Alice"));
console.log(greet("Bob", "Welcome"));
console.log(createUser("Charlie"));
console.log(createUser("Diana", 30, true));`,
        output: "Hello, Alice!\nWelcome, Bob!\n{ name: 'Charlie', age: 18, role: 'user' }\n{ name: 'Diana', age: 30, role: 'admin' }"
      },
      {
        id: 'generics',
        title: 'Generics',
        description: 'Write reusable, type-safe functions and interfaces.',
        content: `function identity<T>(value: T): T {
  return value;
}

function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

interface Pair<K, V> {
  key: K;
  value: V;
}

function makePair<K, V>(key: K, value: V): Pair<K, V> {
  return { key, value };
}

console.log(identity<string>("Hello Generics"));
console.log(identity<number>(42));

const nums = [10, 20, 30];
console.log(\`First: \${firstElement(nums)}\`);

const pair = makePair("id", 123);
console.log(\`Pair: \${pair.key}=>\${pair.value}\`);`,
        output: "Hello Generics\n42\nFirst: 10\nPair: id=>123"
      },
      {
        id: 'function-overloads',
        title: 'Function Overloads',
        description: 'Define multiple call signatures for a single function.',
        content: `function combine(a: string, b: string): string;
function combine(a: number, b: number): number;
function combine(a: number[], b: number): number[];
function combine(a: string | number | number[], b: string | number): string | number | number[] {
  if (typeof a === "string" && typeof b === "string") {
    return a + " " + b;
  }
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  }
  if (Array.isArray(a) && typeof b === "number") {
    return a.map(x => x + b);
  }
  throw new Error("Invalid arguments");
}

console.log(combine("Hello", "World"));
console.log(combine(5, 10));
console.log(combine([1, 2, 3], 10));`,
        output: "Hello World\n15\n[ 11, 12, 13 ]"
      }
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced Types',
    subtopics: [
      {
        id: 'type-aliases',
        title: 'Type Aliases',
        description: 'Create reusable type names for complex types.',
        content: `type Point = {
  x: number;
  y: number;
};

type DistanceFn = (p1: Point, p2: Point) => number;

const distance: DistanceFn = (p1, p2) => {
  const dx = p2.x - p1.x;
  const dy = p2.y - p1.y;
  return Math.sqrt(dx ** 2 + dy ** 2);
};

type UserID = string;
type Score = number;
type Leaderboard = Record<UserID, Score>;

const leaderboard: Leaderboard = {
  "user-1": 1500,
  "user-2": 2300,
  "user-3": 1800
};

const p1: Point = { x: 0, y: 0 };
const p2: Point = { x: 3, y: 4 };

console.log(\`Distance: \${distance(p1, p2)}\`);
console.log(\`Leaderboard: \${JSON.stringify(leaderboard)}\`);`,
        output: "Distance: 5\nLeaderboard: {\"user-1\":1500,\"user-2\":2300,\"user-3\":1800}"
      },
      {
        id: 'utility-types',
        title: 'Utility Types (Partial / Pick)',
        description: 'Transform existing types with built-in utility types.',
        content: `interface User {
  id: number;
  name: string;
  email: string;
  age: number;
  role: "admin" | "user";
}

type UserPreview = Pick<User, "id" | "name" | "role">;
type UserUpdate = Partial<Omit<User, "id">>;
type UserReadonly = Readonly<User>;
type UserRequired = Required<Partial<User>>;

const preview: UserPreview = {
  id: 1,
  name: "Alice",
  role: "admin"
};

const update: UserUpdate = {
  email: "new@example.com"
};

console.log("Preview:", JSON.stringify(preview));
console.log("Update:", JSON.stringify(update));

// Record utility
type Page = "home" | "about" | "contact";
const pageTitles: Record<Page, string> = {
  home: "Welcome",
  about: "About Us",
  contact: "Contact Us"
};
console.log(\`Page titles: \${JSON.stringify(pageTitles)}\`);`,
        output: "Preview: {\"id\":1,\"name\":\"Alice\",\"role\":\"admin\"}\nUpdate: {\"email\":\"new@example.com\"}\nPage titles: {\"home\":\"Welcome\",\"about\":\"About Us\",\"contact\":\"Contact Us\"}"
      },
      {
        id: 'discriminated-unions',
        title: 'Discriminated Unions',
        description: 'Model state with tagged union types for exhaustive handling.',
        content: `interface LoadingState { state: "loading"; }
interface SuccessState { state: "success"; data: string[]; }
interface ErrorState { state: "error"; message: string; }

type RequestState = LoadingState | SuccessState | ErrorState;

function handleState(s: RequestState): string {
  switch (s.state) {
    case "loading":
      return "Fetching data...";
    case "success":
      return \`Got \${s.data.length} items: \${s.data.join(", ")}\`;
    case "error":
      return \`Error: \${s.message}\`;
  }
}

function processRequest<R extends { status: string }>(
  response: R
): void {
  console.log(\`Status: \${response.status}\`);
}

console.log(handleState({ state: "loading" }));
console.log(handleState({ state: "success", data: ["a", "b", "c"] }));
console.log(handleState({ state: "error", message: "Not found" }));

// Using the generic function
processRequest({ status: "200 OK" });

// Discriminated union for result type
type Result<T> =
  | { success: true; value: T }
  | { success: false; error: string };

function safeDivide(a: number, b: number): Result<number> {
  if (b === 0) return { success: false, error: "Division by zero" };
  return { success: true, value: a / b };
}

const r = safeDivide(10, 0);
console.log(r.success ? \`Result: \${r.value}\` : r.error);`,
        output: "Fetching data...\nGot 3 items: a, b, c\nError: Not found\nStatus: 200 OK\nDivision by zero"
      }
    ],
  },
]
};
