import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const luaConfig: LanguageConfig = {
  title: 'Lua',
  language: 'lua',
  tutorialData: [
        {
      id: 'basics',
      title: 'Lua Basics',
      description: 'Learn Lua Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'print function.',
      content: `print("Hello, World!")`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'Global by default.',
      content: `name = "Ada"
age = 36
print(name .. " is " .. age)`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Types',
      description: 'Dynamic, few types.',
      content: `x = 5
y = "hi"
print(type(x), type(y))`,
      output: `number
string`,
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
      title: 'if / then / else',
      description: 'Standard branching.',
      content: `x = 10
if x > 5 then print("big") else print("small") end`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / ipairs',
      description: 'Numeric & generic for.',
      content: `for i = 1, 3 do print(i) end`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `i = 1
while i <= 3 do print(i); i = i + 1 end`,
      output: `1
2
3`,
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
      description: 'function ... end.',
      content: `function square(n) return n * n end
print(square(5))`,
      output: `25`,
    },
            {
      id: 'multiple',
      title: 'Multiple Returns',
      description: 'Comma returns.',
      content: `function div(a, b) return math.floor(a/b), a % b end
q, r = div(7, 2)
print(q, r)`,
      output: `3
1`,
    },
      ],
    },
        {
      id: 'tables',
      title: 'Tables',
      description: 'Learn Tables',
      content: `    {`,
      subtopics: [
            {
      id: 'array',
      title: 'Arrays as Tables',
      description: '1-indexed sequences.',
      content: `a = {1, 2, 3}
table.insert(a, 4)
print(#a, a[1])`,
      output: `4
1`,
    },
            {
      id: 'map',
      title: 'Key-value Tables',
      description: 'Associative tables.',
      content: `m = {a = 1, b = 2}
print(m.b)`,
      output: `2`,
    },
            {
      id: 'methods',
      title: 'Tables + Functions',
      description: 'OOP-like.',
      content: `dog = { bark = function() print("Woof") end }
dog.bark()`,
      output: `Woof`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Lua',
      description: 'Learn Object-Oriented Lua',
      content: `    {`,
      subtopics: [
            {
      id: 'metatable',
      title: 'Metatables',
      description: '__index for inheritance.',
      content: `Dog = {}
function Dog.bark() print("Woof") end
d = setmetatable({}, {__index = Dog})
d.bark()`,
      output: `Woof`,
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
      id: 'require',
      title: 'require',
      description: 'Load modules.',
      content: `-- mod.lua: return { hi = function() print("hi") end }
local m = require("mod")
m.hi()`,
      output: `hi`,
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
      id: 'pcall',
      title: 'pcall',
      description: 'Protected calls.',
      content: `ok, err = pcall(function() error("oops") end)
print(ok, err)`,
      output: `false
oops`,
    },
      ],
    },
        {
      id: 'stdlib',
      title: 'Standard Library',
      description: 'Learn Standard Library',
      content: `    {`,
      subtopics: [
            {
      id: 'string',
      title: 'string library',
      description: 'Pattern matching.',
      content: `print(string.upper("hi"))
print(string.find("hello", "l"))`,
      output: `HI
3
3`,
    },
      ],
    },
  ],
};
