import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const goConfig: LanguageConfig = {
  title: 'Go',
  language: 'go',
  tutorialData: [
        {
      id: 'basics',
      title: 'Go Basics',
      description: 'Learn Go Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'package main + func main.',
      content: `package main

import 'fmt'

func main() {
    fmt.Println('Hello, World!')
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'var and short := assignment.',
      content: `package main
import 'fmt'
func main() {
    name := 'Ada'
    var age int = 36
    fmt.Println(name, age)
}`,
      output: `Ada 36`,
    },
            {
      id: 'types',
      title: 'Basic Types',
      description: 'int, float64, bool, string.',
      content: `package main
import 'fmt'
func main() {
    var f float64 = 3.14
    b := true
    fmt.Println(f, b)
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
      title: 'If / Else',
      description: 'No parentheses needed.',
      content: `package main
import 'fmt'
func main() {
    x := 10
    if x > 5 { fmt.Println('big') } else { fmt.Println('small') }
}`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Go\'s only loop.',
      content: `package main
import 'fmt'
func main() {
    for i := 0; i < 3; i++ { fmt.Print(i, ' ') }
}`,
      output: `0 1 2 `,
    },
            {
      id: 'range',
      title: 'range',
      description: 'Iterate slices/maps.',
      content: `package main
import 'fmt'
func main() {
    for i, v := range []int{10, 20} { fmt.Println(i, v) }
}`,
      output: `0 10
1 20`,
    },
            {
      id: 'switch',
      title: 'switch',
      description: 'No fallthrough by default.',
      content: `package main
import 'fmt'
func main() {
    d := 2
    switch d {
    case 1: fmt.Println('one')
    case 2: fmt.Println('two')
    default: fmt.Println('other')
    }
}`,
      output: `two`,
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
      description: 'Multiple returns.',
      content: `package main
import 'fmt'
func div(a, b int) (int, int) { return a / b, a % b }
func main() { q, r := div(7, 2); fmt.Println(q, r) }`,
      output: `3 1`,
    },
            {
      id: 'variadic',
      title: 'Variadic',
      description: '...T params.',
      content: `package main
import 'fmt'
func sum(xs ...int) int { t := 0; for _, x := range xs { t += x }; return t }
func main() { fmt.Println(sum(1, 2, 3)) }`,
      output: `6`,
    },
            {
      id: 'closures',
      title: 'Closures',
      description: 'Functions capture scope.',
      content: `package main
import 'fmt'
func main() {
    add := func(x, y int) int { return x + y }
    fmt.Println(add(2, 3))
}`,
      output: `5`,
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
      id: 'slices',
      title: 'Slices',
      description: 'Dynamic arrays.',
      content: `package main
import 'fmt'
func main() {
    s := []int{1, 2, 3}
    s = append(s, 4)
    fmt.Println(len(s), s[0])
}`,
      output: `4 1`,
    },
            {
      id: 'maps',
      title: 'Maps',
      description: 'Key-value store.',
      content: `package main
import 'fmt'
func main() {
    m := map[string]int{'a': 1}
    m['b'] = 2
    fmt.Println(m['b'])
}`,
      output: `2`,
    },
            {
      id: 'arrays',
      title: 'Arrays',
      description: 'Fixed size.',
      content: `package main
import 'fmt'
func main() {
    var a [3]int = [3]int{1, 2, 3}
    fmt.Println(a[2])
}`,
      output: `3`,
    },
      ],
    },
        {
      id: 'structs',
      title: 'Structs & Methods',
      description: 'Learn Structs & Methods',
      content: `    {`,
      subtopics: [
            {
      id: 'struct',
      title: 'Structs',
      description: 'Composite types.',
      content: `package main
import 'fmt'
type Point struct { X, Y int }
func main() { p := Point{3, 4}; fmt.Println(p.X, p.Y) }`,
      output: `3 4`,
    },
            {
      id: 'methods',
      title: 'Methods',
      description: 'Receiver functions.',
      content: `package main
import 'fmt'
type Rect struct { W, H int }
func (r Rect) Area() int { return r.W * r.H }
func main() { fmt.Println(Rect{3, 4}.Area()) }`,
      output: `12`,
    },
      ],
    },
        {
      id: 'interfaces',
      title: 'Interfaces',
      description: 'Learn Interfaces',
      content: `    {`,
      subtopics: [
            {
      id: 'interface',
      title: 'Implicit Interfaces',
      description: 'Duck typing.',
      content: `package main
import 'fmt'
type Shape interface { Area() float64 }
type C struct{ r float64 }
func (c C) Area() float64 { return 3.14 * c.r * c.r }
func main() { var s Shape = C{2}; fmt.Println(s.Area()) }`,
      output: `12.56`,
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
      id: 'errors',
      title: 'error Values',
      description: 'Return errors explicitly.',
      content: `package main
import ('errors'; 'fmt')
func mightFail(ok bool) error { if !ok { return errors.New('failed') }; return nil }
func main() { fmt.Println(mightFail(false)) }`,
      output: `failed`,
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
      id: 'goroutines',
      title: 'Goroutines',
      description: 'Lightweight threads.',
      content: `package main
import ('fmt'; 'time')
func main() {
    go func() { fmt.Println('async') }()
    time.Sleep(10 * time.Millisecond)
}`,
      output: `async`,
    },
            {
      id: 'channels',
      title: 'Channels',
      description: 'Communicate via channels.',
      content: `package main
import 'fmt'
func main() {
    ch := make(chan int)
    go func() { ch <- 42 }()
    fmt.Println(<-ch)
}`,
      output: `42`,
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
      id: 'fmt',
      title: 'fmt',
      description: 'Formatted I/O.',
      content: `package main
import 'fmt'
func main() { fmt.Printf('%d %s\\n', 5, 'apples') }`,
      output: `5 apples`,
    },
      ],
    },
  ],
};
