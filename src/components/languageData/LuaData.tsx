import lua from 'react-syntax-highlighter/dist/esm/languages/hljs/lua';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('lua', lua);

export const luaConfig = {
  title: "Lua Tutorial",
  language: 'lua',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Learn how to declare and use variables in Lua.',
        content: `-- Variables in Lua
local name = "Alice"
local age = 25
local is_admin = true

print(name)
print(age)
print(is_admin)`,
        output: `Alice
25
true`
      },
      {
        id: 'types',
        title: 'Types',
        description: 'Understand Lua data types: number, string, boolean, table, function.',
        content: `print(type(42))       -- number
print(type("hello"))   -- string
print(type(true))      -- boolean
print(type({}))        -- table
print(type(print))     -- function`,
        output: `number
string
boolean
table
function`
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'String manipulation, concatenation, and multi-line strings.',
        content: `local s = "Hello, Lua!"
print(#s)                     -- length
print(string.upper(s))        -- uppercase
print(string.sub(s, 1, 5))    -- substring
print("a" .. "b" .. "c")      -- concat

local multi = [[
Line 1
Line 2
]]
print(multi)`,
        output: `11
HELLO, LUA!
Hello
abc

Line 1
Line 2
`
      },
      {
        id: 'nil',
        title: 'Nil',
        description: 'Understanding nil — the absence of a value in Lua.',
        content: `local x
print(x)          -- uninitialized = nil
print(x == nil)   -- check for nil

local t = {a = 1}
t.a = nil         -- removes key
print(t.a)
print(t.a == nil)`,
        output: `nil
true
nil
true`
      },
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-then',
        title: 'If / Then',
        description: 'Conditional branching with if, elseif, and else.',
        content: `local score = 85

if score >= 90 then
  print("A")
elseif score >= 80 then
  print("B")
elseif score >= 70 then
  print("C")
else
  print("F")
end`,
        output: `B`
      },
      {
        id: 'for',
        title: 'For Loops',
        description: 'Numeric for loops and generic for loops with iterators.',
        content: `-- Numeric for with step
for i = 1, 10, 2 do
  io.write(i .. " ")
end
print()

-- Generic for with pairs
local t = {name = "Bob", age = 20}
for k, v in pairs(t) do
  print(k, v)
end`,
        output: `1 3 5 7 9
name    Bob
age     20`
      },
      {
        id: 'while',
        title: 'While Loops',
        description: 'Loop while a condition remains true.',
        content: `local n = 3
while n > 0 do
  print(n)
  n = n - 1
end
print("Go!")`,
        output: `3
2
1
Go!`
      },
      {
        id: 'repeat-until',
        title: 'Repeat / Until',
        description: 'Loop that always runs at least once before checking.',
        content: `local x = 0
repeat
  x = x + 1
  io.write("Attempt " .. x .. "  ")
until x >= 4
print()
print("Done after " .. x .. " attempts")`,
        output: `Attempt 1  Attempt 2  Attempt 3  Attempt 4
Done after 4 attempts`
      },
    ],
  },
  {
    id: 'functions-tables',
    title: 'Functions & Tables',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define functions, multiple returns, and closures.',
        content: `function add(a, b)
  return a + b
end

-- Multiple returns
function divmod(a, b)
  return a // b, a % b
end

local q, r = divmod(10, 3)
print("quotient:", q, "remainder:", r)
print("sum:", add(3, 4))`,
        output: `quotient:      3       remainder:      1
sum:    7`
      },
      {
        id: 'tables-as-arrays',
        title: 'Tables as Arrays',
        description: 'Using Lua tables as ordered, 1-indexed lists.',
        content: `local fruits = {"apple", "banana", "cherry"}

print(fruits[1])           -- 1-indexed!
print(#fruits)             -- length

table.insert(fruits, "date")
table.remove(fruits, 2)

for i, v in ipairs(fruits) do
  print(i, v)
end`,
        output: `apple
3
1       apple
2       cherry
3       date`
      },
      {
        id: 'tables-as-dictionaries',
        title: 'Tables as Dictionaries',
        description: 'Using tables as key-value maps with convenient syntax.',
        content: `local person = {
  name = "Alice",
  age = 30,
  ["fav color"] = "blue",
}

print(person.name)
print(person["age"])
person.city = "NYC"

for k, v in pairs(person) do
  print(k, v)
end`,
        output: `Alice
30
city    NYC
name    Alice
fav color       blue
age     30`
      },
      {
        id: 'metatables',
        title: 'Metatables',
        description: 'Customize table behaviour with metamethods.',
        content: `local v1 = {x = 2, y = 3}
local v2 = {x = 5, y = 1}

local mt = {
  __add = function(a, b)
    return {x = a.x + b.x, y = a.y + b.y}
  end,
  __tostring = function(v)
    return "(" .. v.x .. ", " .. v.y .. ")"
  end
}

setmetatable(v1, mt)
setmetatable(v2, mt)

local v3 = v1 + v2
print(tostring(v3))`,
        output: `(7, 4)`
      },
    ],
  },
  {
    id: 'standard-library',
    title: 'Standard Library',
    subtopics: [
      {
        id: 'string-functions',
        title: 'String Functions',
        description: 'Essential string operations from Lua\'s string library.',
        content: `local s = "  Hello World!  "

print(string.len(s))
print("'" .. string.trim(s) .. "'")
local start, finish = string.find(s, "World")
print("found at:", start, finish)
local new, n = string.gsub(s, "o", "0")
print(new)
print("replacements:", n)`,
        output: `16
'Hello World!'
found at:       9       13
  Hell0 W0rld!
replacements:   2`
      },
      {
        id: 'table-functions',
        title: 'Table Functions',
        description: 'Sorting, concatenating, and moving table elements.',
        content: `local nums = {4, 2, 5, 1, 3}
table.sort(nums)
print(table.concat(nums, ", "))

local t = {1, 2, 3}
table.insert(t, 99)
table.remove(t, 2)
print(table.concat(t, " "))

print(table.maxn(t))`,
        output: `1, 2, 3, 4, 5
1 3 99
3`
      },
      {
        id: 'math',
        title: 'Math',
        description: 'Mathematical functions, trigonometry, and random numbers.',
        content: `print(math.pi)
print(math.abs(-10))
print(math.max(3, 7, 2, 9))
print(math.floor(3.9))
print(math.ceil(3.1))
print(math.sin(math.rad(90)))`,
        output: `3.1415926535898
10
9
3
4
1.0`
      },
      {
        id: 'io',
        title: 'I/O',
        description: 'File input and output operations.',
        content: `-- Write to a file
local f = io.open("test.txt", "w")
f:write("Line one\\n")
f:write("Line two\\n")
f:close()

-- Read from a file
local f = io.open("test.txt", "r")
for line in f:lines() do
  print(line)
end
f:close()`,
        output: `Line one
Line two`
      },
    ],
  },
]
};
