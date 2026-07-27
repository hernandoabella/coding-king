import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const rustConfig: LanguageConfig = {
  title: 'Rust',
  language: 'rust',
  tutorialData: [
        {
      id: 'basics',
      title: 'Rust Basics',
      description: 'Learn Rust Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'fn main entry point.',
      content: `fn main() {
    println!('Hello, World!');
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & let',
      description: 'Immutable by default.',
      content: `fn main() {
    let x = 5;
    let mut y = 10;
    y += 1;
    println!('{} {}', x, y);
}`,
      output: `5 11`,
    },
            {
      id: 'types',
      title: 'Scalar Types',
      description: 'i32, f64, bool, char, &str.',
      content: `fn main() {
    let pi: f64 = 3.14;
    let ok: bool = true;
    println!('{} {}', pi, ok);
}`,
      output: `3.14 true`,
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
      title: 'if / else',
      description: 'Expressions, no parens.',
      content: `fn main() {
    let x = 10;
    let s = if x > 5 { 'big' } else { 'small' };
    println!('{}', s);
}`,
      output: `big`,
    },
            {
      id: 'loop',
      title: 'loop / while / for',
      description: 'Iteration.',
      content: `fn main() {
    for i in 0..3 { println!('{}', i); }
}`,
      output: `0
1
2`,
    },
            {
      id: 'match',
      title: 'match',
      description: 'Powerful pattern matching.',
      content: `fn main() {
    let d = 2;
    let s = match d { 1 => 'one', 2 => 'two', _ => 'other' };
    println!('{}', s);
}`,
      output: `two`,
    },
      ],
    },
        {
      id: 'functions',
      title: 'Functions & Ownership',
      description: 'Learn Functions & Ownership',
      content: `    {`,
      subtopics: [
            {
      id: 'def',
      title: 'Defining Functions',
      description: 'Typed signature.',
      content: `fn square(n: i32) -> i32 { n * n }
fn main() {
    println!('{}', square(5));
}`,
      output: `25`,
    },
            {
      id: 'ownership',
      title: 'Ownership',
      description: 'Move semantics.',
      content: `fn main() {
    let s = String::from('hi');
    let t = s;
    println!('{}', t);
}`,
      output: `hi`,
    },
            {
      id: 'borrow',
      title: 'References & Borrowing',
      description: '&T and &mut T.',
      content: `fn len(s: &String) -> usize { s.len() }
fn main() {
    let s = String::from('hi');
    println!('{}', len(&s));
}`,
      output: `2`,
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
      id: 'vec',
      title: 'Vec<T>',
      description: 'Growable array.',
      content: `fn main() {
    let mut v = vec![1, 2, 3];
    v.push(4);
    println!('{} {}', v.len(), v[0]);
}`,
      output: `4 1`,
    },
            {
      id: 'hashmap',
      title: 'HashMap',
      description: 'Key-value store.',
      content: `use std::collections::HashMap;
fn main() {
    let mut m = HashMap::new();
    m.insert('a', 1);
    println!('{}', m['a']);
}`,
      output: `1`,
    },
            {
      id: 'string',
      title: 'String & &str',
      description: 'Owned vs borrowed text.',
      content: `fn main() {
    let s: String = 'hello'.to_string();
    println!('{}', s.len());
}`,
      output: `5`,
    },
      ],
    },
        {
      id: 'structs',
      title: 'Structs & Traits',
      description: 'Learn Structs & Traits',
      content: `    {`,
      subtopics: [
            {
      id: 'struct',
      title: 'Structs',
      description: 'Composite data.',
      content: `struct Point { x: i32, y: i32 }
fn main() {
    let p = Point { x: 3, y: 4 };
    println!('{} {}', p.x, p.y);
}`,
      output: `3 4`,
    },
            {
      id: 'impl',
      title: 'impl Methods',
      description: 'Associate functions.',
      content: `struct Rect { w: i32, h: i32 }
impl Rect { fn area(&self) -> i32 { self.w * self.h } }
fn main() { println!('{}', Rect { w: 3, h: 4 }.area()); }`,
      output: `12`,
    },
            {
      id: 'traits',
      title: 'Traits',
      description: 'Shared behavior.',
      content: `trait Shape { fn area(&self) -> f64; }
struct C { r: f64 }
impl Shape for C { fn area(&self) -> f64 { 3.14 * self.r * self.r } }
fn main() { println!('{}', C { r: 2.0 }.area()); }`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'enums',
      title: 'Enums & Pattern Matching',
      description: 'Learn Enums & Pattern Matching',
      content: `    {`,
      subtopics: [
            {
      id: 'enum',
      title: 'Enums',
      description: 'Tagged unions.',
      content: `enum Color { Red, Green, Blue }
fn main() {
    let c = Color::Green;
    println!('ok');
}`,
      output: `ok`,
    },
            {
      id: 'option',
      title: 'Option<T>',
      description: 'No null; explicit Some/None.',
      content: `fn main() {
    let x: Option<i32> = Some(5);
    if let Some(v) = x { println!('{}', v); }
}`,
      output: `5`,
    },
            {
      id: 'result',
      title: 'Result<T, E>',
      description: 'Explicit error handling.',
      content: `fn main() {
    let r: Result<i32, &str> = Ok(42);
    println!('{}', r.unwrap());
}`,
      output: `42`,
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
      id: 'panic',
      title: 'panic! / Result',
      description: 'Recover vs propagate.',
      content: `fn main() {
    let r: Result<i32, &str> = Err('fail');
    println!('{}', r.unwrap_or(0));
}`,
      output: `0`,
    },
      ],
    },
        {
      id: 'modern',
      title: 'Modern Rust',
      description: 'Learn Modern Rust',
      content: `    {`,
      subtopics: [
            {
      id: 'closures',
      title: 'Closures',
      description: 'Anonymous functions.',
      content: `fn main() {
    let sq = |n: i32| n * n;
    println!('{}', sq(4));
}`,
      output: `16`,
    },
            {
      id: 'iter',
      title: 'Iterators',
      description: 'Lazy chains.',
      content: `fn main() {
    let v: Vec<i32> = (1..=4).filter(|n| n % 2 == 0).collect();
    println!('{:?}', v);
}`,
      output: `[2, 4]`,
    },
      ],
    },
  ],
};
