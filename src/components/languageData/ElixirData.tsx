import elixir from 'react-syntax-highlighter/dist/esm/languages/hljs/elixir';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('elixir', elixir);

export const elixirConfig = {
  title: "Elixir Tutorial",
  language: 'elixir',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Learn how to bind values to variables in Elixir (immutable bindings).',
        content: `name = "Alice"
age = 25
IO.puts("Name: #{name}, Age: #{age}")

name = "Bob"
IO.puts("Rebound: #{name}")`,
        output: "Name: Alice, Age: 25\nRebound: Bob"
      },
      {
        id: 'atoms',
        title: 'Atoms',
        description: "Understand atoms — constants whose name is their value.",
        content: `status = :ok
error_status = :error_not_found

IO.puts(status)
IO.puts("Is atom? #{is_atom(status)}")
IO.puts("Atom to string: #{Atom.to_string(status)}")`,
        output: "ok\nIs atom? true\nAtom to string: ok"
      },
      {
        id: 'strings',
        title: 'Strings',
        description: 'Work with UTF-8 strings, interpolation, and common operations.',
        content: `greeting = "Hello"
name = "World"
message = "#{greeting}, #{name}!"
IO.puts(message)
IO.puts("Length: #{String.length(message)}")
IO.puts("Uppercase: #{String.upcase(message)}")
IO.puts("Contains? #{String.contains?(message, "World")}")`,
        output: "Hello, World!\nLength: 13\nUppercase: HELLO, WORLD!\nContains? true"
      },
      {
        id: 'tuples',
        title: 'Tuples',
        description: 'Group a fixed number of elements together, used for pattern matching.',
        content: `person = {"Alice", 30, "Engineer"}
IO.inspect(person)
IO.puts("Name: #{elem(person, 0)}")
IO.puts("Age: #{elem(person, 1)}")

{_, age, _} = person
IO.puts("Extracted age: #{age}")`,
        output: "{\"Alice\", 30, \"Engineer\"}\nName: Alice\nAge: 30\nExtracted age: 30"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'case',
        title: 'case',
        description: 'Pattern match against multiple clauses with case.',
        content: `result = {:ok, "Success!"}

case result do
  {:ok, message} -> IO.puts("OK: #{message}")
  {:error, reason} -> IO.puts("Error: #{reason}")
  _ -> IO.puts("Unknown response")
end`,
        output: "OK: Success!"
      },
      {
        id: 'cond',
        title: 'cond',
        description: 'Evaluate multiple conditions in sequence with cond.',
        content: `temperature = 35

cond do
  temperature >= 40 -> IO.puts("Too hot!")
  temperature >= 30 -> IO.puts("Warm day")
  temperature >= 20 -> IO.puts("Nice weather")
  true -> IO.puts("Cool day")
end`,
        output: "Warm day"
      },
      {
        id: 'if-unless',
        title: 'if / unless',
        description: 'Use if and unless for simple branching.',
        content: `age = 18

if age >= 18 do
  IO.puts("Adult")
else
  IO.puts("Minor")
end

unless age < 18 do
  IO.puts("Can vote")
end`,
        output: "Adult\nCan vote"
      },
      {
        id: 'with',
        title: 'with',
        description: 'Chain multiple pattern-matched expressions, short-circuiting on non-match.',
        content: `user = %{name: "Alice", age: 30}

with {:ok, name} <- Map.fetch(user, :name),
     {:ok, age} <- Map.fetch(user, :age),
     true <- age >= 18 do
  IO.puts("#{name} is an adult")
else
  :error -> IO.puts("Missing key")
  false -> IO.puts("Not an adult")
end`,
        output: "Alice is an adult"
      }
    ],
  },
  {
    id: 'functions-modules',
    title: 'Functions & Modules',
    subtopics: [
      {
        id: 'modules',
        title: 'Modules',
        description: 'Organize code into modules using defmodule.',
        content: `defmodule Calculator do
  def add(a, b), do: a + b
  def subtract(a, b), do: a - b
end

IO.puts("Add: #{Calculator.add(10, 5)}")
IO.puts("Subtract: #{Calculator.subtract(10, 5)}")`,
        output: "Add: 15\nSubtract: 5"
      },
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define named and private functions within modules.',
        content: `defmodule Greeter do
  def hello(name), do: "Hello, #{name}!"

  def greet_all(names) do
    Enum.map(names, &hello/1)
  end
end

IO.inspect(Greeter.greet_all(["Alice", "Bob"]))`,
        output: "[\"Hello, Alice!\", \"Hello, Bob!\"]"
      },
      {
        id: 'pattern-matching',
        title: 'Pattern Matching',
        description: 'Define multiple function clauses matched by pattern.',
        content: `defmodule Factorial do
  def of(0), do: 1
  def of(n) when n > 0, do: n * of(n - 1)
end

IO.puts("0! = #{Factorial.of(0)}")
IO.puts("5! = #{Factorial.of(5)}")`,
        output: "0! = 1\n5! = 120"
      },
      {
        id: 'pipe-operator',
        title: 'Pipe Operator',
        description: 'Use |> to chain function calls, passing the result forward.',
        content: `result = "Hello World"
  |> String.downcase()
  |> String.split()
  |> Enum.join("-")

IO.puts(result)

1..5
|> Enum.map(&(&1 * 2))
|> Enum.sum()
|> IO.inspect(label: "Sum of doubles")`,
        output: "hello-world\nSum of doubles: 30"
      }
    ],
  },
  {
    id: 'collections',
    title: 'Collections',
    subtopics: [
      {
        id: 'lists',
        title: 'Lists',
        description: 'Work with linked lists — prepend, concatenate, and pattern match.',
        content: `list = [1, 2, 3]
new_list = [0 | list]
IO.inspect(new_list)

[a, b | rest] = new_list
IO.puts("Head: #{a}, Second: #{b}, Rest: #{inspect(rest)}")

combined = [1, 2] ++ [3, 4]
IO.inspect(combined)`,
        output: "[0, 1, 2, 3]\nHead: 0, Second: 1, Rest: [2, 3]\n[1, 2, 3, 4]"
      },
      {
        id: 'maps',
        title: 'Maps',
        description: 'Store key-value pairs and access via pattern matching or dot syntax.',
        content: `user = %{name: "Alice", age: 30, role: "Admin"}
IO.puts(user.name)
IO.puts(user[:age])

updated = Map.put(user, :age, 31)
IO.inspect(updated)

merged = Map.merge(user, %{city: "NYC"})
IO.inspect(merged)`,
        output: "Alice\n30\n%{name: \"Alice\", age: 31, role: \"Admin\"}\n%{name: \"Alice\", age: 30, role: \"Admin\", city: \"NYC\"}"
      },
      {
        id: 'keyword-lists',
        title: 'Keyword Lists',
        description: 'Use keyword lists for options — lists of {atom, value} tuples.',
        content: `options = [timeout: 5000, retries: 3, verbose: true]
IO.inspect(options)
IO.puts("Timeout: #{options[:timeout]}")

more = Keyword.put(options, :async, false)
IO.inspect(more)

IO.inspect(Keyword.keys(options))`,
        output: "[timeout: 5000, retries: 3, verbose: true]\nTimeout: 5000\n[timeout: 5000, retries: 3, verbose: true, async: false]\n[:timeout, :retries, :verbose]"
      },
      {
        id: 'enum-module',
        title: 'Enum Module',
        description: 'Process collections with Enum — map, filter, reduce, and more.',
        content: `numbers = 1..5

squares = Enum.map(numbers, &(&1 * &1))
IO.inspect(squares)

evens = Enum.filter(numbers, &rem(&1, 2) == 0)
IO.inspect(evens)

sum = Enum.reduce(numbers, 0, &(&1 + &2))
IO.puts("Sum: #{sum}")

IO.puts("Any > 3? #{Enum.any?(numbers, &(&1 > 3))}")`,
        output: "[1, 4, 9, 16, 25]\n[2, 4]\nSum: 15\nAny > 3? true"
      }
    ],
  },
]
};
