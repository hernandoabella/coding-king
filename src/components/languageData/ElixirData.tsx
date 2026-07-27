import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const elixirConfig: LanguageConfig = {
  title: 'Elixir',
  language: 'elixir',
  tutorialData: [
        {
      id: 'basics',
      title: 'Elixir Basics',
      description: 'Learn Elixir Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'IO.puts.',
      content: `IO.puts("Hello, World!")`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'Immutable bindings.',
      content: `name = "Ada"
age = 36
IO.puts("#{name} is #{age}")`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Types',
      description: 'Dynamic, few primitives.',
      content: `x = 5
y = "hi"
IO.inspect({x, y})`,
      output: `{5, "hi"}`,
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
      id: 'list',
      title: 'Lists',
      description: 'Linked lists.',
      content: `list = [1, 2, 3]
IO.inspect([0 | list])`,
      output: `[0, 1, 2, 3]`,
    },
            {
      id: 'map',
      title: 'Maps',
      description: 'Key-value store.',
      content: `m = %{a: 1, b: 2}
IO.inspect(m.b)`,
      output: `2`,
    },
            {
      id: 'tuple',
      title: 'Tuples',
      description: 'Fixed-size grouping.',
      content: `t = {1, "a", true}
IO.inspect(elem(t, 2))`,
      output: `"a"`,
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
      title: 'def / defp',
      description: 'Module functions.',
      content: `defmodule M do
  def square(n), do: n * n
end
IO.inspect(M.square(5))`,
      output: `25`,
    },
            {
      id: 'pipe',
      title: 'Pipe Operator',
      description: '|> threading.',
      content: `result = [1, 2, 3] |> Enum.map(fn x -> x * 2 end)
IO.inspect(result)`,
      output: `[2, 4, 6]`,
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
      id: 'case',
      title: 'case',
      description: 'Pattern matching.',
      content: `x = 2
msg = case x do
  1 -> 'one'
  2 -> 'two'
  _ -> 'other'
end
IO.puts(msg)`,
      output: `two`,
    },
            {
      id: 'cond',
      title: 'cond',
      description: 'Else-if chains.',
      content: `n = 10
r = cond do
  n > 5 -> 'big'
  true -> 'small'
end
IO.puts(r)`,
      output: `big`,
    },
      ],
    },
        {
      id: 'pattern',
      title: 'Pattern Matching',
      description: 'Learn Pattern Matching',
      content: `    {`,
      subtopics: [
            {
      id: 'match',
      title: 'Match Operator',
      description: '= binds & matches.',
      content: `[head | tail] = [1, 2, 3]
IO.inspect({head, tail})`,
      output: `{1, [2, 3]}`,
    },
      ],
    },
        {
      id: 'concurrency',
      title: 'Concurrency',
      description: 'Learn Concurrency',
      content: `    {`,
      subtopics: [
            {
      id: 'process',
      title: 'Spawned Processes',
      description: 'Lightweight actors.',
      content: `pid = spawn(fn -> IO.puts("hi") end)
IO.inspect(Process.alive?(pid))`,
      output: `true`,
    },
            {
      id: 'agent',
      title: 'Agent',
      description: 'Stateful process.',
      content: `{:ok, a} = Agent.start(fn -> 0 end)
Agent.update(a, &(&1 + 1))
IO.inspect(Agent.get(a, &(&1)))`,
      output: `1`,
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
      id: 'try',
      title: 'try / rescue',
      description: 'Rescue exceptions.',
      content: `try do
  raise "oops"
rescue
  e -> IO.puts("caught: #{e.message}")
end`,
      output: `caught: oops`,
    },
      ],
    },
        {
      id: 'streams',
      title: 'Streams & Enum',
      description: 'Learn Streams & Enum',
      content: `    {`,
      subtopics: [
            {
      id: 'enum',
      title: 'Enum',
      description: 'Eager collection ops.',
      content: `evens = Enum.filter([1, 2, 3, 4], fn x -> rem(x, 2) == 0 end)
IO.inspect(evens)`,
      output: `[2, 4]`,
    },
      ],
    },
  ],
};
