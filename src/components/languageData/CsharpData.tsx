import csharp from 'react-syntax-highlighter/dist/esm/languages/hljs/csharp';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('csharp', csharp);

export const csharpConfig = {
  title: "C# Tutorial",
  language: 'csharp',
  tutorialData: [
  {
    id: 'basics',
    title: 'C# Basics',
    subtopics: [
      {
        id: 'variables-types',
        title: 'Variables & Types',
        description: 'Declare variables with explicit types in C#.',
        content: `using System;

class Program
{
    static void Main()
    {
        string name = "Alice";
        int age = 25;
        double salary = 55000.50;
        bool isEmployed = true;
        char grade = 'A';

        Console.WriteLine($"{name} is {age}, earns {salary:C}, grade {grade}");
    }
}`,
        output: "Alice is 25, earns $55,000.50, grade A"
      },
      {
        id: 'string-interpolation',
        title: 'String Interpolation',
        description: 'Embed expressions directly inside string literals using $.',
        content: `using System;

class Program
{
    static void Main()
    {
        string product = "Laptop";
        decimal price = 999.99m;
        int quantity = 3;

        decimal total = price * quantity;
        Console.WriteLine($"Product: {product}");
        Console.WriteLine($"Price: {price:C} x {quantity} = {total:C}");
    }
}`,
        output: "Product: Laptop\nPrice: $999.99 x 3 = $2,999.97"
      },
      {
        id: 'nullable-types',
        title: 'Nullable Types',
        description: 'Allow value types to hold null using ? syntax.',
        content: `using System;

class Program
{
    static void Main()
    {
        int? score = null;
        double? average = 85.5;
        bool? hasPassed = null;

        Console.WriteLine($"Score: {score ?? -1}");
        Console.WriteLine($"Average: {average ?? 0}");

        if (score.HasValue)
            Console.WriteLine($"Got score: {score.Value}");
        else
            Console.WriteLine("No score recorded");
    }
}`,
        output: "Score: -1\nAverage: 85.5\nNo score recorded"
      },
      {
        id: 'var-keyword',
        title: 'var keyword',
        description: 'Use var to let the compiler infer the variable type.',
        content: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        var name = "Bob";                  // string
        var count = 42;                    // int
        var price = 19.99;                 // double
        var numbers = new List<int> { 1, 2, 3 };
        var dict = new Dictionary<string, int>();

        Console.WriteLine(name.GetType().Name);
        Console.WriteLine(count.GetType().Name);
        Console.WriteLine(string.Join(", ", numbers));
    }
}`,
        output: "String\nInt32\n1, 2, 3"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else',
        title: 'If/Else',
        description: 'Make decisions with if, else if, and else blocks.',
        content: `using System;

class Program
{
    static void Main()
    {
        int score = 85;

        if (score >= 90)
            Console.WriteLine("Grade: A");
        else if (score >= 80)
            Console.WriteLine("Grade: B");
        else if (score >= 70)
            Console.WriteLine("Grade: C");
        else if (score >= 60)
            Console.WriteLine("Grade: D");
        else
            Console.WriteLine("Grade: F");
    }
}`,
        output: "Grade: B"
      },
      {
        id: 'switch-expressions',
        title: 'Switch Expressions',
        description: 'Use concise switch expressions for pattern matching.',
        content: `using System;

class Program
{
    static void Main()
    {
        string day = "Monday";
        string type = day switch
        {
            "Saturday" or "Sunday" => "Weekend",
            "Monday" => "Start of work week",
            "Friday" => "Almost weekend",
            _ => "Regular weekday"
        };
        Console.WriteLine($"{day}: {type}");

        int num = 42;
        string desc = num switch
        {
            < 0 => "Negative",
            0 => "Zero",
            > 0 and < 100 => "Small positive",
            _ => "Large number"
        };
        Console.WriteLine($"{num}: {desc}");
    }
}`,
        output: "Monday: Start of work week\n42: Small positive"
      },
      {
        id: 'for-foreach',
        title: 'For / Foreach',
        description: 'Iterate with for loops and foreach over collections.',
        content: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        string[] fruits = { "Apple", "Banana", "Cherry" };
        List<int> nums = new List<int> { 10, 20, 30, 40 };

        Console.WriteLine("--- for loop ---");
        for (int i = 0; i < fruits.Length; i++)
            Console.WriteLine($"{i}: {fruits[i]}");

        Console.WriteLine("--- foreach ---");
        foreach (int n in nums)
            Console.Write(n + " ");

        Console.WriteLine();
    }
}`,
        output: "--- for loop ---\n0: Apple\n1: Banana\n2: Cherry\n--- foreach ---\n10 20 30 40 "
      },
      {
        id: 'while',
        title: 'While',
        description: 'Repeat code while a condition holds true.',
        content: `using System;

class Program
{
    static void Main()
    {
        Console.WriteLine("--- while ---");
        int i = 0;
        while (i < 5)
        {
            Console.Write(i + " ");
            i++;
        }

        Console.WriteLine();
        Console.WriteLine("--- do-while ---");
        int j = 5;
        do
        {
            Console.Write(j + " ");
            j--;
        } while (j > 0);

        Console.WriteLine();
    }
}`,
        output: "--- while ---\n0 1 2 3 4 \n--- do-while ---\n5 4 3 2 1 "
      }
    ],
  },
  {
    id: 'oop',
    title: 'Methods & OOP',
    subtopics: [
      {
        id: 'methods',
        title: 'Methods',
        description: 'Define reusable blocks of code with parameters and return types.',
        content: `using System;

class Program
{
    static int Add(int a, int b) => a + b;

    static void Greet(string name = "Guest")
    {
        Console.WriteLine($"Hello, {name}!");
    }

    static void Main()
    {
        int sum = Add(5, 7);
        Console.WriteLine($"Sum: {sum}");

        Greet("Alice");
        Greet();
    }
}`,
        output: "Sum: 12\nHello, Alice!\nHello, Guest!"
      },
      {
        id: 'properties',
        title: 'Properties',
        description: 'Encapsulate fields with get/set accessors.',
        content: `using System;

class Person
{
    private string name;
    private int age;

    public string Name
    {
        get => name;
        set => name = value ?? "Unknown";
    }

    public int Age
    {
        get => age;
        set
        {
            if (value < 0) throw new ArgumentException("Age cannot be negative");
            age = value;
        }
    }

    // Auto-implemented property
    public string Email { get; set; }
}

class Program
{
    static void Main()
    {
        var p = new Person { Name = "Alice", Age = 25, Email = "alice@example.com" };
        Console.WriteLine($"{p.Name}, {p.Age}, {p.Email}");
    }
}`,
        output: "Alice, 25, alice@example.com"
      },
      {
        id: 'classes-inheritance',
        title: 'Classes & Inheritance',
        description: 'Build class hierarchies with base classes and overrides.',
        content: `using System;

class Animal
{
    public string Name { get; set; }

    public virtual string Speak() => "Some sound";

    public override string ToString() => $"Animal: {Name}";
}

class Dog : Animal
{
    public string Breed { get; set; }

    public override string Speak() => "Woof!";

    public Dog(string name, string breed)
    {
        Name = name;
        Breed = breed;
    }

    public override string ToString() => $"Dog: {Name} ({Breed})";
}

class Program
{
    static void Main()
    {
        Animal a = new Animal { Name = "Generic" };
        Dog d = new Dog("Rex", "Labrador");

        Console.WriteLine($"{a} says: {a.Speak()}");
        Console.WriteLine($"{d} says: {d.Speak()}");
    }
}`,
        output: "Animal: Generic says: Some sound\nDog: Rex (Labrador) says: Woof!"
      },
      {
        id: 'interfaces',
        title: 'Interfaces',
        description: 'Define contracts that classes must implement.',
        content: `using System;

interface IPrintable
{
    string Print();
}

interface IResettable
{
    void Reset();
}

class Counter : IPrintable, IResettable
{
    public int Value { get; private set; }

    public void Increment() => Value++;

    public string Print() => $"Counter value: {Value}";

    public void Reset() => Value = 0;
}

class Program
{
    static void Main()
    {
        var c = new Counter();
        c.Increment();
        c.Increment();
        c.Increment();
        Console.WriteLine(c.Print());

        c.Reset();
        Console.WriteLine(c.Print());
    }
}`,
        output: "Counter value: 3\nCounter value: 0"
      }
    ],
  },
  {
    id: 'collections',
    title: 'LINQ & Collections',
    subtopics: [
      {
        id: 'lists',
        title: 'Lists',
        description: 'Work with dynamic arrays using List<T>.',
        content: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        List<string> cities = new List<string> { "New York", "London" };

        cities.Add("Tokyo");
        cities.AddRange(new[] { "Paris", "Berlin" });
        cities.Insert(0, "Singapore");
        cities.Remove("Berlin");

        Console.WriteLine($"Count: {cities.Count}");
        Console.WriteLine($"First: {cities[0]}");
        Console.WriteLine(string.Join(", ", cities));
        Console.WriteLine($"Contains London? {cities.Contains("London")}");
    }
}`,
        output: "Count: 4\nFirst: Singapore\nSingapore, New York, London, Tokyo, Paris\nContains London? True"
      },
      {
        id: 'dictionaries',
        title: 'Dictionaries',
        description: 'Store key-value pairs with fast lookup.',
        content: `using System;
using System.Collections.Generic;

class Program
{
    static void Main()
    {
        Dictionary<string, int> scores = new Dictionary<string, int>
        {
            { "Alice", 95 },
            { "Bob", 87 }
        };

        scores["Charlie"] = 91;
        scores["Alice"] = 98;  // update existing

        Console.WriteLine("All scores:");
        foreach (var kvp in scores)
            Console.WriteLine($"  {kvp.Key}: {kvp.Value}");

        Console.WriteLine();
        if (scores.TryGetValue("Bob", out int bScore))
            Console.WriteLine($"Bob's score: {bScore}");

        Console.WriteLine($"Contains David? {scores.ContainsKey("David")}");
    }
}`,
        output: "All scores:\n  Alice: 98\n  Bob: 87\n  Charlie: 91\n\nBob's score: 87\nContains David? False"
      },
      {
        id: 'linq-queries',
        title: 'LINQ Queries',
        description: 'Query and transform collections with Language Integrated Query.',
        content: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<int> numbers = new List<int> { 15, 3, 22, 8, 42, 1, 9, 30 };

        var evenSorted = from n in numbers
                         where n % 2 == 0
                         orderby n
                         select n;
        Console.WriteLine("Even sorted: " + string.Join(", ", evenSorted));

        var bigNumbers = numbers.Where(n => n > 10).ToList();
        Console.WriteLine("> 10: " + string.Join(", ", bigNumbers));

        int sum = numbers.Sum();
        double avg = numbers.Average();
        int max = numbers.Max();
        Console.WriteLine($"Sum: {sum}, Avg: {avg:F1}, Max: {max}");

        var grouped = numbers.GroupBy(n => n % 2 == 0 ? "Even" : "Odd");
        foreach (var g in grouped)
            Console.WriteLine($"{g.Key}: {string.Join(", ", g)}");
    }
}`,
        output: "Even sorted: 8, 22, 30, 42\n> 10: 15, 22, 42, 30\nSum: 130, Avg: 16.3, Max: 42\nOdd: 15, 3, 1, 9\nEven: 22, 8, 42, 30"
      },
      {
        id: 'lambda-expressions',
        title: 'Lambda Expressions',
        description: 'Write inline anonymous functions for concise code.',
        content: `using System;
using System.Collections.Generic;
using System.Linq;

class Program
{
    static void Main()
    {
        List<string> names = new List<string> { "Alice", "Bob", "Charlie", "Diana", "Eve" };

        // Filter with lambda
        var longNames = names.Where(n => n.Length > 3).ToList();
        Console.WriteLine("Long names: " + string.Join(", ", longNames));

        // Transform with lambda
        var uppercased = names.Select(n => n.ToUpper()).ToList();
        Console.WriteLine("Uppercase: " + string.Join(", ", uppercased));

        // Func delegate
        Func<int, int, int> multiply = (a, b) => a * b;
        Console.WriteLine($"3 * 4 = {multiply(3, 4)}");

        // Action delegate
        Action<string> log = msg => Console.WriteLine($"[LOG] {msg}");
        log("Processing complete");
    }
}`,
        output: "Long names: Alice, Charlie, Diana\nUppercase: ALICE, BOB, CHARLIE, DIANA, EVE\n3 * 4 = 12\n[LOG] Processing complete"
      }
    ],
  },
]
};
