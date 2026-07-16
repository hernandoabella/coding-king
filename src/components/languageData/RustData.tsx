import rust from 'react-syntax-highlighter/dist/esm/languages/hljs/rust';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('rust', rust);

export const rustConfig = {
  title: "Rust Tutorial",
  language: 'rust',
  tutorialData: [
    {
      id: 'basics',
      title: 'Rust Basics',
      subtopics: [
        {
          id: 'variables-mutability',
          title: 'Variables & Mutability',
          description: 'Variables are immutable by default; use mut to make them mutable.',
          content: `fn main() {
    let x = 5;
    // x = 6; // error: cannot assign twice to immutable variable
    println!("x = {}", x);

    let mut y = 10;
    println!("y before = {}", y);
    y = 20;
    println!("y after = {}", y);

    // shadowing
    let z = 1;
    let z = z + 2;
    let z = z * 3;
    println!("z = {}", z);
}`,
          output: "x = 5\ny before = 10\ny after = 20\nz = 9"
        },
        {
          id: 'data-types',
          title: 'Data Types',
          description: 'Explore Rust scalar and compound data types.',
          content: `fn main() {
    let integer: i32 = 42;
    let float: f64 = 3.14159;
    let boolean: bool = true;
    let character: char = 'R';
    let tuple: (i32, f64, char) = (500, 6.4, 'Z');
    let array: [i32; 3] = [1, 2, 3];

    println!("int: {}, float: {:.2}, bool: {}, char: {}", integer, float, boolean, character);
    println!("tuple: ({}, {}, {})", tuple.0, tuple.1, tuple.2);
    println!("array: {:?}", array);
}`,
          output: "int: 42, float: 3.14, bool: true, char: R\ntuple: (500, 6.4, Z)\narray: [1, 2, 3]"
        },
        {
          id: 'ownership-basics',
          title: 'Ownership Basics',
          description: 'Understand move semantics and borrowing in Rust.',
          content: `fn main() {
    // move
    let s1 = String::from("hello");
    let s2 = s1;
    // println!("{}", s1); // error: value borrowed after move
    println!("{}", s2);

    // clone
    let s3 = s2.clone();
    println!("s2 = {}, s3 = {}", s2, s3);

    // borrow
    let s4 = String::from("world");
    let len = calculate_length(&s4);
    println!("'{}' has length {}", s4, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
}`,
          output: "hello\ns2 = hello, s3 = hello\n'world' has length 5"
        },
        {
          id: 'strings',
          title: 'Strings',
          description: 'Work with String and &str for text manipulation.',
          content: `fn main() {
    let s1 = String::from("Hello");
    let s2 = " World!";
    let s3 = s1 + s2;
    println!("{}", s3);

    let mut s4 = String::from("Rust");
    s4.push_str(" is");
    s4.push(' ');
    s4.push_str("awesome");
    println!("{}", s4);

    let s5 = "hello,rust,world";
    for part in s5.split(',') {
        print!("{} ", part);
    }
    println!();
}`,
          output: "Hello World!\nRust is awesome\nhello rust world"
        }
      ],
    },
    {
      id: 'control-flow',
      title: 'Control Flow',
      subtopics: [
        {
          id: 'if-else',
          title: 'If / Else',
          description: 'Conditional branching. if is an expression that can return a value.',
          content: `fn main() {
    let score = 85;

    if score >= 90 {
        println!("A");
    } else if score >= 80 {
        println!("B");
    } else if score >= 70 {
        println!("C");
    } else {
        println!("F");
    }

    // if as expression
    let grade = if score >= 60 { "Pass" } else { "Fail" };
    println!("Result: {}", grade);
}`,
          output: "B\nResult: Pass"
        },
        {
          id: 'match',
          title: 'Match',
          description: 'Pattern matching for exhaustive branching.',
          content: `fn main() {
    let number = 3;

    match number {
        1 => println!("one"),
        2 => println!("two"),
        3 => println!("three"),
        4 | 5 => println!("four or five"),
        _ => println!("something else"),
    }

    // match returns a value
    let name = match number {
        1 => "Alice",
        2 => "Bob",
        _ => "Unknown",
    };
    println!("name = {}", name);
}`,
          output: "three\nname = Unknown"
        },
        {
          id: 'loops',
          title: 'Loops (loop / while / for)',
          description: 'Rust provides loop, while, and for for iteration.',
          content: `fn main() {
    // loop with break value
    let mut counter = 0;
    let result = loop {
        counter += 1;
        if counter == 5 {
            break counter * 2;
        }
    };
    println!("loop result: {}", result);

    // while
    let mut n = 3;
    while n > 0 {
        print!("{} ", n);
        n -= 1;
    }
    println!();

    // for over range
    for i in 0..4 {
        print!("{} ", i);
    }
    println!();

    // for over iterator
    let arr = [10, 20, 30];
    for val in arr.iter() {
        print!("{} ", val);
    }
    println!();
}`,
          output: "loop result: 10\n3 2 1\n0 1 2 3\n10 20 30"
        },
        {
          id: 'if-let',
          title: 'If-let',
          description: 'Concise syntax for matching a single pattern.',
          content: `fn main() {
    let some_value: Option<i32> = Some(7);
    let none_value: Option<i32> = None;

    if let Some(x) = some_value {
        println!("Got: {}", x);
    }

    if let Some(y) = none_value {
        println!("Got: {}", y);
    } else {
        println!("Nothing there");
    }
}`,
          output: "Got: 7\nNothing there"
        }
      ],
    },
    {
      id: 'functions',
      title: 'Functions',
      subtopics: [
        {
          id: 'functions',
          title: 'Functions',
          description: 'Define functions with parameters, return types, and documentation.',
          content: `/// Adds two numbers and returns the sum.
fn add(a: i32, b: i32) -> i32 {
    a + b  // implicit return (no semicolon)
}

fn main() {
    let sum = add(5, 7);
    println!("5 + 7 = {}", sum);

    println!("max = {}", max_of(15, 9));
}

fn max_of(a: i32, b: i32) -> i32 {
    if a > b { a } else { b }
}`,
          output: "5 + 7 = 12\nmax = 15"
        },
        {
          id: 'closures',
          title: 'Closures',
          description: 'Anonymous functions that can capture their environment.',
          content: `fn main() {
    let add_one = |x: i32| -> i32 { x + 1 };
    println!("add_one(5) = {}", add_one(5));

    let multiply = |a, b| a * b;
    println!("3 * 4 = {}", multiply(3, 4));

    // capturing environment
    let prefix = "Hello";
    let greet = |name| format!("{}, {}!", prefix, name);
    println!("{}", greet("Rust"));

    // using closures with iterators
    let nums = vec![1, 2, 3, 4];
    let doubled: Vec<i32> = nums.iter().map(|x| x * 2).collect();
    println!("{:?}", doubled);
}`,
          output: "add_one(5) = 6\n3 * 4 = 12\nHello, Rust!\n[2, 4, 6, 8]"
        },
        {
          id: 'generics',
          title: 'Generics',
          description: 'Write code that works for multiple types using generics.',
          content: `fn largest<T: PartialOrd>(list: &[T]) -> &T {
    let mut largest = &list[0];
    for item in list.iter() {
        if item > largest {
            largest = item;
        }
    }
    largest
}

fn main() {
    let numbers = vec![34, 50, 25, 100, 65];
    let result = largest(&numbers);
    println!("Largest number: {}", result);

    let chars = vec!['a', 'z', 'm', 'q'];
    println!("Largest char: {}", largest(&chars));
}`,
          output: "Largest number: 100\nLargest char: z"
        },
        {
          id: 'error-handling',
          title: 'Error Handling (Result)',
          description: 'Handle recoverable errors with the Result type.',
          content: `use std::fs::File;
use std::io::{self, Read};

fn read_file(path: &str) -> Result<String, io::Error> {
    let mut file = File::open(path)?;
    let mut contents = String::new();
    file.read_to_string(&mut contents)?;
    Ok(contents)
}

fn main() {
    match read_file("nonexistent.txt") {
        Ok(content) => println!("File content: {}", content),
        Err(e) => println!("Error: {}", e),
    }

    // unwrap_or
    let result: Result<i32, &str> = Err("oops");
    println!("Got: {}", result.unwrap_or(42));
}`,
          output: "Error: The system cannot find the file specified. (os error 2)\nGot: 42"
        }
      ],
    },
    {
      id: 'collections',
      title: 'Collections',
      subtopics: [
        {
          id: 'vectors',
          title: 'Vectors',
          description: 'Use Vec for growable arrays.',
          content: `fn main() {
    let mut v: Vec<i32> = Vec::new();
    v.push(10);
    v.push(20);
    v.push(30);
    println!("v = {:?}", v);

    let v2 = vec![1, 2, 3, 4, 5];
    println!("v2 = {:?}, len = {}", v2, v2.len());

    // access elements
    println!("v[1] = {}", &v[1]);
    match v.get(10) {
        Some(val) => println!("Got: {}", val),
        None => println!("Index out of bounds"),
    }
}`,
          output: "v = [10, 20, 30]\nv2 = [1, 2, 3, 4, 5], len = 5\nv[1] = 20\nIndex out of bounds"
        },
        {
          id: 'hashmaps',
          title: 'HashMaps',
          description: 'Store key-value pairs with HashMap.',
          content: `use std::collections::HashMap;

fn main() {
    let mut ages = HashMap::new();
    ages.insert("Alice", 25);
    ages.insert("Bob", 30);
    ages.insert("Charlie", 22);

    ages.entry("Bob").or_insert(35);  // won't overwrite
    ages.entry("Dave").or_insert(40);

    for (name, age) in &ages {
        println!("{}: {}", name, age);
    }

    match ages.get("Alice") {
        Some(age) => println!("Alice is {}", age),
        None => println!("Not found"),
    }
}`,
          output: "Alice: 25\nBob: 30\nCharlie: 22\nDave: 40\nAlice is 25"
        },
        {
          id: 'iterators',
          title: 'Iterators',
          description: 'Process sequences lazily with iterator adaptors.',
          content: `fn main() {
    let nums = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    let evens: Vec<i32> = nums
        .iter()
        .filter(|&&x| x % 2 == 0)
        .map(|&x| x)
        .collect();
    println!("Evens: {:?}", evens);

    let sum: i32 = nums.iter().sum();
    println!("Sum: {}", sum);

    let found = nums.iter().find(|&&x| x > 7);
    println!("First > 7: {:?}", found);

    let all_positive = nums.iter().all(|&x| x > 0);
    println!("All positive: {}", all_positive);
}`,
          output: "Evens: [2, 4, 6, 8, 10]\nSum: 55\nFirst > 7: Some(8)\nAll positive: true"
        },
        {
          id: 'slices',
          title: 'Slices',
          description: 'References to contiguous sequences within collections.',
          content: `fn main() {
    let arr = [10, 20, 30, 40, 50];
    let slice = &arr[1..4];
    println!("slice = {:?}", slice);
    println!("slice length = {}", slice.len());

    let mut v = vec![1, 2, 3, 4, 5];
    {
        let part = &v[0..3];
        println!("part = {:?}", part);
    }
    v.push(6);
    println!("v = {:?}", v);

    // string slices
    let s = String::from("hello world");
    let hello = &s[0..5];
    let world = &s[6..11];
    println!("{} {}", hello, world);
}`,
          output: "slice = [20, 30, 40]\nslice length = 3\npart = [1, 2, 3]\nv = [1, 2, 3, 4, 5, 6]\nhello world"
        }
      ],
    },
  ]
};
