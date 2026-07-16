import java from 'react-syntax-highlighter/dist/esm/languages/hljs/java';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('java', java);

export const javaConfig = {
  title: "Java Tutorial",
  language: 'java',
  tutorialData: [
  {
    id: 'basics',
    title: 'Java Basics',
    subtopics: [
      {
        id: 'variables-types',
        title: 'Variables & Types',
        description: 'Learn how to declare variables with different data types in Java.',
        content: `// Declaring Variables
String name = "Alice";
int age = 25;
double height = 5.9;
boolean isStudent = true;
char grade = 'A';

System.out.println("Name: " + name);
System.out.println("Age: " + age);
System.out.println("Height: " + height);
System.out.println("Student: " + isStudent);
System.out.println("Grade: " + grade);`,
        output: "Name: Alice\nAge: 25\nHeight: 5.9\nStudent: true\nGrade: A"
      },
      {
        id: 'constants',
        title: 'Constants (final)',
        description: 'Learn how to define constants in Java using the final keyword.',
        content: `final double PI = 3.14159;
final int MAX_SIZE = 100;
final String APP_NAME = "MyApp";

System.out.println("PI: " + PI);
System.out.println("Max Size: " + MAX_SIZE);
System.out.println("App: " + APP_NAME);`,
        output: "PI: 3.14159\nMax Size: 100\nApp: MyApp"
      },
      {
        id: 'string-operations',
        title: 'String Operations',
        description: 'Explore common string manipulation methods in Java.',
        content: `String text = "Hello, Java World!";

System.out.println("Length: " + text.length());
System.out.println("Uppercase: " + text.toUpperCase());
System.out.println("Lowercase: " + text.toLowerCase());
System.out.println("Substring: " + text.substring(7, 11));
System.out.println("Replace: " + text.replace("Java", "Coding"));
System.out.println("Contains 'Java': " + text.contains("Java"));
System.out.println("Trimmed: '" + "  spaced  ".trim() + "'");`,
        output: "Length: 18\nUppercase: HELLO, JAVA WORLD!\nLowercase: hello, java world!\nSubstring: Java\nReplace: Hello, Coding World!\nContains 'Java': true\nTrimmed: 'spaced'"
      },
      {
        id: 'type-casting',
        title: 'Type Casting',
        description: 'Understand implicit and explicit type casting in Java.',
        content: `// Implicit (widening) casting
int myInt = 10;
double myDouble = myInt;
System.out.println("int to double: " + myDouble);

// Explicit (narrowing) casting
double price = 9.99;
int roundedPrice = (int) price;
System.out.println("double to int: " + roundedPrice);

// String to number parsing
String numStr = "42";
int parsed = Integer.parseInt(numStr);
System.out.println("String to int: " + parsed);`,
        output: "int to double: 10.0\ndouble to int: 9\nString to int: 42"
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
        description: 'Learn conditional branching with if, else if, and else statements.',
        content: `int score = 85;

if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else if (score >= 70) {
    System.out.println("Grade: C");
} else if (score >= 60) {
    System.out.println("Grade: D");
} else {
    System.out.println("Grade: F");
}

// Ternary operator
String result = (score >= 60) ? "Pass" : "Fail";
System.out.println("Result: " + result);`,
        output: "Grade: B\nResult: Pass"
      },
      {
        id: 'switch',
        title: 'Switch (New & Old Syntax)',
        description: 'Compare traditional switch statements with the modern switch expression.',
        content: `int day = 3;
String dayName;

// Traditional switch (old syntax)
switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    default:
        dayName = "Unknown";
}
System.out.println("Old: " + dayName);

// Modern switch expression (Java 14+)
String modernDay = switch (day) {
    case 1 -> "Monday";
    case 2 -> "Tuesday";
    case 3 -> "Wednesday";
    default -> "Unknown";
};
System.out.println("New: " + modernDay);`,
        output: "Old: Wednesday\nNew: Wednesday"
      },
      {
        id: 'for-loops',
        title: 'For / For-Each Loops',
        description: 'Iterate with traditional for loops and enhanced for-each loops.',
        content: `// Traditional for loop
System.out.print("Counting: ");
for (int i = 1; i <= 5; i++) {
    System.out.print(i + " ");
}

System.out.println();

// For-each loop with array
int[] numbers = {10, 20, 30, 40, 50};
int sum = 0;
for (int num : numbers) {
    sum += num;
}
System.out.println("Sum of array: " + sum);`,
        output: "Counting: 1 2 3 4 5 \nSum of array: 150"
      },
      {
        id: 'while-loops',
        title: 'While Loops',
        description: 'Use while and do-while loops for condition-based iteration.',
        content: `// While loop
System.out.print("While: ");
int count = 0;
while (count < 5) {
    System.out.print(count + " ");
    count++;
}

System.out.println();

// Do-while loop - always executes at least once
System.out.print("Do-While: ");
int n = 0;
do {
    System.out.print(n + " ");
    n++;
} while (n < 3);`,
        output: "While: 0 1 2 3 4 \nDo-While: 0 1 2 "
      }
    ],
  },
  {
    id: 'oop',
    title: 'Methods & OOP',
    subtopics: [
      {
        id: 'defining-methods',
        title: 'Defining Methods',
        description: 'Learn how to define and call methods in Java.',
        content: `public class Main {
    // Method with no return value
    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    // Method with return value
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        greet("Alice");
        int result = add(5, 7);
        System.out.println("5 + 7 = " + result);
    }
}`,
        output: "Hello, Alice!\n5 + 7 = 12"
      },
      {
        id: 'method-overloading',
        title: 'Method Overloading',
        description: 'Create multiple methods with the same name but different parameters.',
        content: `public class Main {
    static int multiply(int a, int b) {
        return a * b;
    }

    static double multiply(double a, double b) {
        return a * b;
    }

    static int multiply(int a, int b, int c) {
        return a * b * c;
    }

    public static void main(String[] args) {
        System.out.println("int * int: " + multiply(3, 4));
        System.out.println("double * double: " + multiply(2.5, 4.0));
        System.out.println("int * int * int: " + multiply(2, 3, 4));
    }
}`,
        output: "int * int: 12\ndouble * double: 10.0\nint * int * int: 24"
      },
      {
        id: 'classes-objects',
        title: 'Classes & Objects',
        description: 'Define classes and create object instances in Java.',
        content: `class Car {
    String brand;
    String model;
    int year;

    // Constructor
    Car(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    void displayInfo() {
        System.out.println(brand + " " + model + " (" + year + ")");
    }
}

public class Main {
    public static void main(String[] args) {
        Car car1 = new Car("Toyota", "Corolla", 2022);
        Car car2 = new Car("Honda", "Civic", 2023);

        car1.displayInfo();
        car2.displayInfo();
    }
}`,
        output: "Toyota Corolla (2022)\nHonda Civic (2023)"
      },
      {
        id: 'inheritance',
        title: 'Inheritance',
        description: 'Extend classes to reuse and override behaviour using inheritance.',
        content: `class Animal {
    void sound() {
        System.out.println("Animal makes a sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Dog barks");
    }

    void fetch() {
        System.out.println("Dog fetches the ball");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.sound();
        dog.fetch();

        Animal animal = new Dog();
        animal.sound();
    }
}`,
        output: "Dog barks\nDog fetches the ball\nDog barks"
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
        description: 'Work with fixed-size arrays in Java.',
        content: `// Array declaration and initialization
int[] numbers = {5, 10, 15, 20, 25};

// Accessing elements
System.out.println("First: " + numbers[0]);
System.out.println("Last: " + numbers[numbers.length - 1]);

// Iterating and modifying
System.out.print("All elements: ");
for (int i = 0; i < numbers.length; i++) {
    System.out.print(numbers[i] + " ");
}

System.out.println();
System.out.println("Array length: " + numbers.length);`,
        output: "First: 5\nLast: 25\nAll elements: 5 10 15 20 25 \nArray length: 5"
      },
      {
        id: 'arraylist',
        title: 'ArrayList',
        description: 'Use dynamic arrays with the ArrayList class from java.util.',
        content: `import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        ArrayList<String> fruits = new ArrayList<>();

        fruits.add("Apple");
        fruits.add("Banana");
        fruits.add("Cherry");

        System.out.println("Size: " + fruits.size());
        System.out.println("First: " + fruits.get(0));

        fruits.remove("Banana");
        fruits.set(1, "Blueberry");

        System.out.print("Fruits: ");
        for (String fruit : fruits) {
            System.out.print(fruit + " ");
        }
        System.out.println();

        System.out.println("Contains Apple? " + fruits.contains("Apple"));
    }
}`,
        output: "Size: 3\nFirst: Apple\nFruits: Apple Blueberry \nContains Apple? true"
      },
      {
        id: 'hashmap',
        title: 'HashMap',
        description: 'Store key-value pairs with the HashMap class.',
        content: `import java.util.HashMap;

public class Main {
    public static void main(String[] args) {
        HashMap<String, Integer> scores = new HashMap<>();

        scores.put("Alice", 95);
        scores.put("Bob", 87);
        scores.put("Charlie", 92);

        System.out.println("Alice: " + scores.get("Alice"));
        System.out.println("Size: " + scores.size());

        scores.put("Bob", 90);
        System.out.println("Updated Bob: " + scores.get("Bob"));

        System.out.print("Keys: ");
        for (String key : scores.keySet()) {
            System.out.print(key + " ");
        }
        System.out.println();

        System.out.println("Contains Charlie? " + scores.containsKey("Charlie"));
    }
}`,
        output: "Alice: 95\nSize: 3\nUpdated Bob: 90\nKeys: Alice Bob Charlie \nContains Charlie? true"
      },
      {
        id: 'streams',
        title: 'Streams',
        description: 'Process collections with Java Streams for functional-style operations.',
        content: `import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Filter even numbers
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        System.out.println("Evens: " + evens);

        // Map to squares
        List<Integer> squares = numbers.stream()
            .map(n -> n * n)
            .collect(Collectors.toList());
        System.out.println("Squares: " + squares);

        // Reduce to sum
        int sum = numbers.stream()
            .reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);

        // Count and average
        long count = numbers.stream().count();
        double avg = numbers.stream()
            .mapToInt(Integer::intValue)
            .average()
            .orElse(0);
        System.out.println("Count: " + count + ", Average: " + avg);
    }
}`,
        output: "Evens: [2, 4, 6, 8, 10]\nSquares: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]\nSum: 55\nCount: 10, Average: 5.5"
      }
    ],
  },
]
};
