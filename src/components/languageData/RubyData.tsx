import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const rubyConfig: LanguageConfig = {
  title: 'Ruby',
  language: 'ruby',
  tutorialData: [
        {
      id: 'basics',
      title: 'Ruby Basics',
      description: 'Learn Ruby Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'puts / print.',
      content: `puts "Hello, World!"`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'Dynamic, no declaration.',
      content: `name = "Ada"
age = 36
puts "#{name} is #{age}"`,
      output: `Ada is 36`,
    },
            {
      id: 'symbols',
      title: 'Symbols',
      description: ':name immutable identifiers.',
      content: `s = :hello
puts s`,
      output: `hello`,
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
      title: 'if / elsif / else',
      description: 'End-based blocks.',
      content: `x = 10
if x > 5
  puts "big"
else
  puts "small"
end`,
      output: `big`,
    },
            {
      id: 'unless',
      title: 'unless',
      description: 'Negated if.',
      content: `x = 3
puts "small" unless x > 5`,
      output: `small`,
    },
            {
      id: 'for',
      title: 'for / each',
      description: 'Iterate ranges.',
      content: `[0, 1, 2].each { |i| puts i }`,
      output: `0
1
2`,
    },
            {
      id: 'while',
      title: 'while / until',
      description: 'Loops.',
      content: `i = 0
while i < 3
  puts i
  i += 1
end`,
      output: `0
1
2`,
    },
            {
      id: 'case',
      title: 'case / when',
      description: 'Multi-way branch.',
      content: `d = 2
s = case d when 1 then 'one' when 2 then 'two' else 'other' end
puts s`,
      output: `two`,
    },
      ],
    },
        {
      id: 'functions',
      title: 'Methods',
      description: 'Learn Methods',
      content: `    {`,
      subtopics: [
            {
      id: 'def',
      title: 'Defining Methods',
      description: 'def ... end.',
      content: `def square(n)
  n * n
end
puts square(5)`,
      output: `25`,
    },
            {
      id: 'blocks',
      title: 'Blocks & Procs',
      description: 'Closures.',
      content: `sq = ->(n) { n * n }
puts sq.call(4)`,
      output: `16`,
    },
            {
      id: 'splat',
      title: 'Splat Args',
      description: '*args variadic.',
      content: `def sum(*xs)
  xs.sum
end
puts sum(1, 2, 3)`,
      output: `6`,
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
      id: 'array',
      title: 'Arrays',
      description: 'Ordered lists.',
      content: `a = [1, 2, 3]
a << 4
puts "#{a.length} #{a[0]}"`,
      output: `4 1`,
    },
            {
      id: 'hash',
      title: 'Hashes',
      description: 'Key-value maps.',
      content: `h = { a: 1, b: 2 }
puts h[:b]`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'Sets',
      description: 'Require \'set\'.',
      content: `require 'set'
s = Set[3, 1, 2]
puts s.include?(2)`,
      output: `true`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Ruby',
      description: 'Learn Object-Oriented Ruby',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'Everything is an object.',
      content: `class Dog
  def bark
    puts "Woof"
  end
end
Dog.new.bark`,
      output: `Woof`,
    },
            {
      id: 'attr',
      title: 'attr_accessor',
      description: 'Auto getters/setters.',
      content: `class Person
  attr_accessor :name
end
p = Person.new
p.name = 'Lin'
puts p.name`,
      output: `Lin`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: '< superclass.',
      content: `class A
  def f; puts 'A'; end
end
class B < A; end
B.new.f`,
      output: `A`,
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
      title: 'map / select',
      description: 'Enumerable methods.',
      content: `puts [1, 2, 3, 4].select { |n| n.even? }`,
      output: `2
4`,
    },
            {
      id: 'symbol-to-proc',
      title: '&:method',
      description: 'Short block syntax.',
      content: `puts ["a", "b"].map(&:upcase)`,
      output: `A
B`,
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
      id: 'begin',
      title: 'begin / rescue',
      description: 'Exception handling.',
      content: `begin
  raise "oops"
rescue => e
  puts e.message
end`,
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
      id: 'mixins',
      title: 'include / extend',
      description: 'Mixins for shared behavior.',
      content: `module Greet
  def hi; 'hi'; end
end
class P
  include Greet
end
puts P.new.hi`,
      output: `hi`,
    },
      ],
    },
  ],
};
