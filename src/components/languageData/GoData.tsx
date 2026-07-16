import go from 'react-syntax-highlighter/dist/esm/languages/hljs/go';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('go', go);

export const goConfig = {
  title: "Go Tutorial",
  language: 'go',
  tutorialData: [
    {
      id: 'basics',
      title: 'Go Basics',
      subtopics: [
        {
          id: 'variables-types',
          title: 'Variables & Types',
          description: 'Declare variables with var or short declaration.',
          content: `package main

import "fmt"

func main() {
    var name string = "Gopher"
    age := 5
    pi := 3.14159
    fmt.Printf("%s is %d, pi = %g\\n", name, age, pi)
}`,
          output: "Gopher is 5, pi = 3.14159"
        },
        {
          id: 'constants',
          title: 'Constants',
          description: 'Define immutable values with const.',
          content: `package main

import "fmt"

const (
    Pi       = 3.14159
    Language = "Go"
)

func main() {
    fmt.Println(Pi, Language)
}`,
          output: "3.14159 Go"
        },
        {
          id: 'fmt-package',
          title: 'fmt Package',
          description: 'Format output with Print, Printf, and Println.',
          content: `package main

import "fmt"

func main() {
    name := "Alice"
    age := 25
    fmt.Print("Hello ")
    fmt.Println(name)
    fmt.Printf("Name: %s, Age: %d\\n", name, age)
    fmt.Printf("Binary: %b, Hex: %x\\n", age, age)
}`,
          output: "Hello Alice\nName: Alice, Age: 25\nBinary: 11001, Hex: 19"
        },
        {
          id: 'zero-values',
          title: 'Zero Values',
          description: 'Variables declared without an explicit initial value are given their zero value.',
          content: `package main

import "fmt"

func main() {
    var i int
    var f float64
    var s string
    var b bool
    fmt.Printf("int: %d, float64: %g, string: %q, bool: %t\\n", i, f, s, b)
}`,
          output: `int: 0, float64: 0, string: "", bool: false`
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
          description: 'Conditional branching. Can include a short statement before the condition.',
          content: `package main

import "fmt"

func main() {
    score := 85
    if score >= 90 {
        fmt.Println("A")
    } else if score >= 80 {
        fmt.Println("B")
    } else if score >= 70 {
        fmt.Println("C")
    } else {
        fmt.Println("F")
    }
}`,
          output: "B"
        },
        {
          id: 'switch',
          title: 'Switch (no break needed)',
          description: 'Switch cases break automatically; no fallthrough by default.',
          content: `package main

import "fmt"

func main() {
    day := 3
    switch day {
    case 1:
        fmt.Println("Monday")
    case 2:
        fmt.Println("Tuesday")
    case 3:
        fmt.Println("Wednesday")
    default:
        fmt.Println("Weekend")
    }

    // switch without expression
    x := 75
    switch {
    case x >= 90:
        fmt.Println("Excellent")
    case x >= 60:
        fmt.Println("Pass")
    default:
        fmt.Println("Fail")
    }
}`,
          output: "Wednesday\nPass"
        },
        {
          id: 'for-loop',
          title: 'For (only loop)',
          description: 'Go has only the for loop, used in different forms.',
          content: `package main

import "fmt"

func main() {
    // classic for
    for i := 0; i < 3; i++ {
        fmt.Print(i, " ")
    }
    fmt.Println()

    // while-style
    j := 5
    for j > 0 {
        fmt.Print(j, " ")
        j--
    }
    fmt.Println()

    // range over slice
    nums := []int{10, 20, 30}
    for idx, val := range nums {
        fmt.Printf("[%d]=%d ", idx, val)
    }
    fmt.Println()
}`,
          output: "0 1 2\n5 4 3 2 1\n[0]=10 [1]=20 [2]=30"
        },
        {
          id: 'defer',
          title: 'Defer',
          description: 'Defer executes a function call after the surrounding function returns (LIFO).',
          content: `package main

import "fmt"

func main() {
    defer fmt.Println("world")
    defer fmt.Println("there")
    fmt.Println("hello")
}`,
          output: "hello\nthere\nworld"
        }
      ],
    },
    {
      id: 'functions',
      title: 'Functions',
      subtopics: [
        {
          id: 'functions-returns',
          title: 'Functions & Returns',
          description: 'Define functions with parameters and return values.',
          content: `package main

import "fmt"

func add(a int, b int) int {
    return a + b
}

func main() {
    result := add(3, 7)
    fmt.Println("3 + 7 =", result)
}`,
          output: "3 + 7 = 10"
        },
        {
          id: 'multiple-returns',
          title: 'Multiple Returns',
          description: 'Return multiple values from a function.',
          content: `package main

import "fmt"

func divide(a, b float64) (float64, bool) {
    if b == 0 {
        return 0, false
    }
    return a / b, true
}

func main() {
    q, ok := divide(10, 3)
    fmt.Printf("10/3 = %.2f (ok: %t)\\n", q, ok)

    q2, ok2 := divide(5, 0)
    fmt.Printf("5/0 = %.2f (ok: %t)\\n", q2, ok2)
}`,
          output: "10/3 = 3.33 (ok: true)\n5/0 = 0.00 (ok: false)"
        },
        {
          id: 'variadic-functions',
          title: 'Variadic Functions',
          description: 'Functions that accept a variable number of arguments.',
          content: `package main

import "fmt"

func sum(nums ...int) int {
    total := 0
    for _, n := range nums {
        total += n
    }
    return total
}

func main() {
    fmt.Println(sum(1, 2, 3))
    fmt.Println(sum(10, 20, 30, 40))
}`,
          output: "6\n100"
        },
        {
          id: 'closures',
          title: 'Closures',
          description: 'Functions that capture variables from their surrounding scope.',
          content: `package main

import "fmt"

func counter() func() int {
    n := 0
    return func() int {
        n++
        return n
    }
}

func main() {
    c := counter()
    fmt.Println(c())
    fmt.Println(c())
    fmt.Println(c())
}`,
          output: "1\n2\n3"
        }
      ],
    },
    {
      id: 'data-structures',
      title: 'Data Structures',
      subtopics: [
        {
          id: 'arrays',
          title: 'Arrays',
          description: 'Fixed-size sequences of elements of the same type.',
          content: `package main

import "fmt"

func main() {
    var arr [3]int
    arr[0] = 10
    arr[1] = 20
    arr[2] = 30
    fmt.Println(arr)

    arr2 := [3]string{"Go", "Rust", "C++"}
    fmt.Println(arr2, "len:", len(arr2))
}`,
          output: "[10 20 30]\n[Go Rust C++] len: 3"
        },
        {
          id: 'slices',
          title: 'Slices',
          description: 'Dynamic, flexible views into arrays.',
          content: `package main

import "fmt"

func main() {
    s := []int{1, 2, 3}
    s = append(s, 4, 5)
    fmt.Println("slice:", s)

    sub := s[1:4]
    fmt.Println("s[1:4]:", sub)
    fmt.Println("len:", len(s), "cap:", cap(s))
}`,
          output: "slice: [1 2 3 4 5]\ns[1:4]: [2 3 4]\nlen: 5 cap: 6"
        },
        {
          id: 'maps',
          title: 'Maps',
          description: 'Unordered collections of key-value pairs.',
          content: `package main

import "fmt"

func main() {
    ages := map[string]int{
        "Alice": 25,
        "Bob":   30,
    }
    ages["Charlie"] = 22

    delete(ages, "Bob")

    for name, age := range ages {
        fmt.Printf("%s: %d\\n", name, age)
    }

    val, ok := ages["Bob"]
    fmt.Println("Bob exists:", ok, val)
}`,
          output: "Alice: 25\nCharlie: 22\nBob exists: false 0"
        },
        {
          id: 'structs',
          title: 'Structs',
          description: 'Composite types that group together fields.',
          content: `package main

import "fmt"

type Person struct {
    Name string
    Age  int
}

func (p Person) greet() string {
    return fmt.Sprintf("Hi, I'm %s, %d years old.", p.Name, p.Age)
}

func main() {
    p := Person{Name: "Gopher", Age: 12}
    fmt.Println(p.greet())
    fmt.Printf("%+v\\n", p)
}`,
          output: "Hi, I'm Gopher, 12 years old.\n{Name:Gopher Age:12}"
        }
      ],
    },
  ]
};
