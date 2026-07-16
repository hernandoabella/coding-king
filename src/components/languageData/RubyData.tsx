import ruby from 'react-syntax-highlighter/dist/esm/languages/hljs/ruby';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('ruby', ruby);

export const rubyConfig = {
  title: "Ruby Tutorial",
  language: 'ruby',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Ruby uses dynamic typing. Local variables start with lowercase and are created on assignment.',
        content: `name = "Alice"
age = 25
PI = 3.14159  # constants start with uppercase

puts "#{name} is #{age} years old"
puts "PI = #{PI}"`,
        output: "Alice is 25 years old\nPI = 3.14159"
      },
      {
        id: 'symbols',
        title: 'Symbols',
        description: 'Symbols are immutable, interned strings prefixed with :. They are commonly used as hash keys and identifiers.',
        content: `puts :name.class
puts :name.object_id == :name.object_id
puts "name".object_id == "name".object_id

user = { name: "Alice", role: :admin }
puts user[:role]`,
        output: "Symbol\ntrue\nfalse\nadmin"
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Ruby strings support interpolation, concatenation, and many built-in transformation methods.',
        content: `first = "Hello"
last = "World"
puts first + " " + last
puts "Reversed: " + "Ruby".reverse
puts "UPCASE".downcase
puts "hello".capitalize`,
        output: "Hello World\nReversed: ybuR\nupcase\nHello"
      },
      {
        id: 'hashes-intro',
        title: 'Hashes (Intro)',
        description: 'Hashes are key-value collections. Ruby 1.9+ supports the concise colon syntax for symbol keys.',
        content: `person = { name: "Alice", age: 25, city: "NYC" }
puts person[:name]
puts person[:age]
person[:job] = "Engineer"
puts person`,
        output: "Alice\n25\n{:name=>\"Alice\", :age=>25, :city=>\"NYC\", :job=>\"Engineer\"}"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-unless',
        title: 'if / unless',
        description: 'if and unless are both expressions in Ruby that return a value. unless is the opposite of if.',
        content: `score = 85
grade = if score >= 90
          "A"
        elsif score >= 80
          "B"
        else
          "C"
        end
puts "Grade: #{grade}"

# ruby
age = 16
puts "Not allowed" unless age >= 18`,
        output: "Grade: B\nNot allowed"
      },
      {
        id: 'case-when',
        title: 'case / when',
        description: 'case expressions test a value against multiple conditions. They are more readable than nested if/elsif.',
        content: `day = "Mon"
case day
when "Sat", "Sun"
  puts "Weekend!"
when "Mon"
  puts "Monday blues"
else
  puts "Weekday"
end`,
        output: "Monday blues"
      },
      {
        id: 'loops',
        title: 'Loops',
        description: 'Ruby has for, while, until, and the idiomatic .times and .each iterators.',
        content: `# while loop
count = 3
while count > 0
  puts "Count: #{count}"
  count -= 1
end

# times iterator
3.times { |i| puts "Loop #{i}" }`,
        output: "Count: 3\nCount: 2\nCount: 1\nLoop 0\nLoop 1\nLoop 2"
      },
      {
        id: 'blocks-intro',
        title: 'Blocks (Intro)',
        description: 'Blocks are anonymous code chunks passed to methods, using do..end or {}. The .each method is a prime example.',
        content: `[1, 2, 3].each do |n|
  puts n * 10
end

# inline block
puts [1, 2, 3].map { |n| n * 10 }`,
        output: "10\n20\n30\n[10, 20, 30]"
      }
    ],
  },
  {
    id: 'methods-blocks',
    title: 'Methods & Blocks',
    subtopics: [
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define methods with def. Parentheses on calls are optional. The last expression is implicitly returned.',
        content: `def greet(name = "Guest")
  "Hello, #{name}!"
end

def square(x)
  x * x
end

puts greet
puts greet("Alice")
puts square(9)`,
        output: "Hello, Guest!\nHello, Alice!\n81"
      },
      {
        id: 'blocks-yield',
        title: 'Blocks & yield',
        description: 'Methods can yield control to a block using the yield keyword, enabling flexible iteration patterns.',
        content: `def twice
  yield
  yield
end

twice { puts "Ruby!" }

def with_logging
  puts "START"
  yield
  puts "END"
end

with_logging { puts "doing work..." }`,
        output: "Ruby!\nRuby!\nSTART\ndoing work...\nEND"
      },
      {
        id: 'procs',
        title: 'Procs',
        description: 'A Proc is an object that wraps a block so it can be stored, passed, and called later.',
        content: `double = Proc.new { |x| x * 2 }
puts double.call(5)
puts double[7]

def apply(proc, value)
  proc.call(value)
end

puts apply(double, 10)`,
        output: "10\n14\n20"
      },
      {
        id: 'lambdas',
        title: 'Lambdas',
        description: 'Lambdas are a special kind of Proc with strict argument checking and return behavior.',
        content: `greet = ->(name) { "Hello, #{name}!" }
puts greet.call("Alice")

add = lambda { |a, b| a + b }
puts add.call(3, 7)

# Lambda checks arg count; this would error:
# greet.call("Alice", "Bob")  # wrong number of arguments`,
        output: "Hello, Alice!\n10"
      }
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Ordered, integer-indexed collections. Arrays can hold mixed types and support a rich set of operations.',
        content: `fruits = ["Apple", "Banana", "Orange"]
fruits << "Mango"
puts fruits[0]
puts fruits.length
puts fruits.first
puts fruits.last
puts fruits[1..2]`,
        output: "Apple\n4\nApple\nMango\n[\"Banana\", \"Orange\"]"
      },
      {
        id: 'hashes',
        title: 'Hashes',
        description: 'Advanced hash usage including default values, merging, and iteration over key-value pairs.',
        content: `config = { host: "localhost", port: 8080 }
config[:debug] = true

# default value
counts = Hash.new(0)
counts[:apples] += 1
counts[:apples] += 2
puts counts

# iterate
config.each { |k, v| puts "#{k}: #{v}" }`,
        output: "{\"apples\"=>3}\nhost: localhost\nport: 8080\ndebug: true"
      },
      {
        id: 'enumerable-methods',
        title: 'Enumerable Methods',
        description: 'Ruby\'s Enumerable module provides powerful methods like map, select, reject, and reduce.',
        content: `numbers = [1, 2, 3, 4, 5, 6]
doubled = numbers.map { |n| n * 2 }
evens = numbers.select { |n| n.even? }
sum = numbers.reduce(0) { |acc, n| acc + n }

puts doubled.inspect
puts evens.inspect
puts sum`,
        output: "[2, 4, 6, 8, 10, 12]\n[2, 4, 6]\n21"
      },
      {
        id: 'ranges',
        title: 'Ranges',
        description: 'Ranges define an interval with .. (inclusive) or ... (exclusive). They work with numbers, strings, and in case expressions.',
        content: `puts (1..5).to_a.inspect
puts (1...5).to_a.inspect
puts (1..5).include?(3)
puts (1..5).include?(5)
puts ("a".."e").to_a.inspect`,
        output: "[1, 2, 3, 4, 5]\n[1, 2, 3, 4]\ntrue\ntrue\n[\"a\", \"b\", \"c\", \"d\", \"e\"]"
      }
    ],
  },
]
};
