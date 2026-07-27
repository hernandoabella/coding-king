import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const javaConfig: LanguageConfig = {
  title: 'Java',
  language: 'java',
  tutorialData: [
        {
      id: 'basics',
      title: 'Java Basics',
      description: 'Learn Java Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Static main in a class.',
      content: `public class Main {
  public static void main(String[] args) {
    System.out.println('Hello, World!');
  }
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Strongly typed primitives.',
      content: `public class Main {
  public static void main(String[] a) {
    int age = 30;
    double pi = 3.14;
    String name = 'Ada';
    System.out.println(name + ' ' + age);
  }
}`,
      output: `Ada 30`,
    },
            {
      id: 'var',
      title: 'var (Java 10+)',
      description: 'Local type inference.',
      content: `public class Main {
  public static void main(String[] a) {
    var x = 42;
    System.out.println(x);
  }
}`,
      output: `42`,
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
      description: 'Branching.',
      content: `public class Main {
  public static void main(String[] a) {
    int x = 10;
    if (x > 5) System.out.println('big'); else System.out.println('small');
  }
}`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for / for-each',
      description: 'Loops.',
      content: `public class Main {
  public static void main(String[] a) {
    for (int i = 0; i < 3; i++) System.out.print(i + ' ');
  }
}`,
      output: `0 1 2 `,
    },
            {
      id: 'while',
      title: 'while / do-while',
      description: 'Condition loops.',
      content: `public class Main {
  public static void main(String[] a) {
    int i = 0; while (i < 3) { System.out.print(i); i++; }
  }
}`,
      output: `012`,
    },
            {
      id: 'switch',
      title: 'Switch Expressions',
      description: 'Modern switch.',
      content: `public class Main {
  public static void main(String[] a) {
    int d = 2;
    String s = switch (d) { case 1 -> 'one'; case 2 -> 'two'; default -> 'other'; };
    System.out.println(s);
  }
}`,
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
      description: 'Return types.',
      content: `public class Main {
  static int square(int n) { return n * n; }
  public static void main(String[] a) { System.out.println(square(5)); }
}`,
      output: `25`,
    },
            {
      id: 'overload',
      title: 'Overloading',
      description: 'Same name, different params.',
      content: `public class Main {
  static int add(int a, int b) { return a + b; }
  static double add(double a, double b) { return a + b; }
  public static void main(String[] a) { System.out.println(add(2,3) + ' ' + add(1.5,2.5)); }
}`,
      output: `5 4.0`,
    },
            {
      id: 'varargs',
      title: 'Varargs',
      description: 'Variable arguments.',
      content: `public class Main {
  static int sum(int... xs) { int t=0; for (int x: xs) t+=x; return t; }
  public static void main(String[] a) { System.out.println(sum(1,2,3)); }
}`,
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
      id: 'list',
      title: 'ArrayList',
      description: 'Resizable list.',
      content: `import java.util.*;
public class Main {
  public static void main(String[] a) {
    List<Integer> l = new ArrayList<>(List.of(1,2,3));
    l.add(4);
    System.out.println(l.size());
  }
}`,
      output: `4`,
    },
            {
      id: 'map',
      title: 'HashMap',
      description: 'Key-value map.',
      content: `import java.util.*;
public class Main {
  public static void main(String[] a) {
    Map<String,Integer> m = new HashMap<>();
    m.put('a', 1); m.put('b', 2);
    System.out.println(m.get('b'));
  }
}`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'HashSet',
      description: 'Unique set.',
      content: `import java.util.*;
public class Main {
  public static void main(String[] a) {
    Set<Integer> s = new HashSet<>(List.of(3,1,2));
    System.out.println(s.contains(2));
  }
}`,
      output: `true`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented Java',
      description: 'Learn Object-Oriented Java',
      content: `    {`,
      subtopics: [
            {
      id: 'classes',
      title: 'Classes',
      description: 'Fields and methods.',
      content: `public class Main {
  static class Dog { void bark() { System.out.println('Woof'); } }
  public static void main(String[] a) { new Dog().bark(); }
}`,
      output: `Woof`,
    },
            {
      id: 'constructor',
      title: 'Constructors',
      description: 'Initialize objects.',
      content: `public class Main {
  static class Box { int w; Box(int w) { this.w = w; } }
  public static void main(String[] a) { System.out.println(new Box(5).w); }
}`,
      output: `5`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'extends keyword.',
      content: `public class Main {
  static class A { void f() { System.out.println('A'); } }
  static class B extends A {}
  public static void main(String[] a) { new B().f(); }
}`,
      output: `A`,
    },
            {
      id: 'interface',
      title: 'Interfaces',
      description: 'Contracts.',
      content: `public class Main {
  interface Shape { double area(); }
  static class C implements Shape { public double area() { return 12.56; } }
  public static void main(String[] a) { System.out.println(new C().area()); }
}`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'streams',
      title: 'Streams & Lambdas',
      description: 'Learn Streams & Lambdas',
      content: `    {`,
      subtopics: [
            {
      id: 'lambda',
      title: 'Lambdas',
      description: 'Arrow functions.',
      content: `import java.util.*;
public class Main {
  public static void main(String[] a) {
    List<Integer> evens = List.of(1,2,3,4).stream().filter(x -> x%2==0).toList();
    System.out.println(evens);
  }
}`,
      output: `[2, 4]`,
    },
            {
      id: 'map-reduce',
      title: 'map / reduce',
      description: 'Functional pipelines.',
      content: `import java.util.*;
public class Main {
  public static void main(String[] a) {
    int s = List.of(1,2,3).stream().mapToInt(x -> x).sum();
    System.out.println(s);
  }
}`,
      output: `6`,
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
      id: 'try-catch',
      title: 'try / catch / finally',
      description: 'Exceptions.',
      content: `public class Main {
  public static void main(String[] a) {
    try { throw new RuntimeException('oops'); }
    catch (Exception e) { System.out.println(e.getMessage()); }
  }
}`,
      output: `oops`,
    },
      ],
    },
        {
      id: 'file-io',
      title: 'File I/O',
      description: 'Learn File I/O',
      content: `    {`,
      subtopics: [
            {
      id: 'files',
      title: 'java.nio.file.Files',
      description: 'Read/write text.',
      content: `import java.nio.file.*;
public class Main {
  public static void main(String[] a) throws Exception {
    Files.writeString(Path.of('o.txt'), 'hi');
    System.out.println(Files.readString(Path.of('o.txt')));
  }
}`,
      output: `hi`,
    },
      ],
    },
  ],
};
