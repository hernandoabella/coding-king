import c from 'react-syntax-highlighter/dist/esm/languages/hljs/c';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('c', c);

export const cConfig = {
  title: "C Tutorial",
  language: 'c',
  tutorialData: [
  {
    id: 'basics',
    title: 'C Basics',
    subtopics: [
      {
        id: 'variables-types',
        title: 'Variables & Types',
        description: 'Learn how to declare variables with different data types in C.',
        content: `#include <stdio.h>

int main() {
    char name[] = "Alice";
    int age = 25;
    float height = 5.9f;
    char grade = 'A';

    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("Height: %.1f\\n", height);
    printf("Grade: %c\\n", grade);

    return 0;
}`,
        output: "Name: Alice\nAge: 25\nHeight: 5.9\nGrade: A"
      },
      {
        id: 'constants',
        title: 'Constants (#define & const)',
        description: 'Define constants using preprocessor #define and the const keyword.',
        content: `#include <stdio.h>

#define PI 3.14159
#define MAX_SIZE 100

int main() {
    const char APP_NAME[] = "MyApp";
    const int VERSION = 2;

    printf("PI: %.5f\\n", PI);
    printf("Max Size: %d\\n", MAX_SIZE);
    printf("App: %s v%d\\n", APP_NAME, VERSION);

    return 0;
}`,
        output: "PI: 3.14159\nMax Size: 100\nApp: MyApp v2"
      },
      {
        id: 'printf-scanf',
        title: 'printf & scanf',
        description: 'Format output with printf and read input with scanf.',
        content: `#include <stdio.h>

int main() {
    int age;
    float gpa;
    char name[50];

    // Simulated input for demonstration
    // In practice: scanf("%d", &age); etc.
    age = 22;
    gpa = 3.75f;
    sprintf(name, "Bob");

    printf("Name: %s\\n", name);
    printf("Age: %d\\n", age);
    printf("GPA: %.2f\\n", gpa);

    // Format specifiers
    printf("Hex: %x\\n", 255);
    printf("Scientific: %e\\n", 1234.5);

    return 0;
}`,
        output: "Name: Bob\nAge: 22\nGPA: 3.75\nHex: ff\nScientific: 1.234500e+03"
      },
      {
        id: 'operators',
        title: 'Operators',
        description: 'Explore arithmetic, relational, logical, and bitwise operators in C.',
        content: `#include <stdio.h>

int main() {
    int a = 10, b = 3;

    // Arithmetic
    printf("a + b = %d\\n", a + b);
    printf("a - b = %d\\n", a - b);
    printf("a * b = %d\\n", a * b);
    printf("a / b = %d\\n", a / b);
    printf("a %% b = %d\\n", a % b);

    // Relational
    printf("a > b: %d\\n", a > b);
    printf("a == b: %d\\n", a == b);

    // Logical
    printf("(a > 0) && (b > 0): %d\\n", (a > 0) && (b > 0));
    printf("(a < 0) || (b > 0): %d\\n", (a < 0) || (b > 0));

    // Bitwise
    printf("a & b = %d\\n", a & b);
    printf("a << 1 = %d\\n", a << 1);

    return 0;
}`,
        output: "a + b = 13\na - b = 7\na * b = 30\na / b = 3\na % b = 1\na > b: 1\na == b: 0\n(a > 0) && (b > 0): 1\n(a < 0) || (b > 0): 1\na & b = 2\na << 1 = 20"
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
        content: `#include <stdio.h>

int main() {
    int score = 85;

    if (score >= 90) {
        printf("Grade: A\\n");
    } else if (score >= 80) {
        printf("Grade: B\\n");
    } else if (score >= 70) {
        printf("Grade: C\\n");
    } else if (score >= 60) {
        printf("Grade: D\\n");
    } else {
        printf("Grade: F\\n");
    }

    // Ternary operator
    printf("Result: %s\\n", (score >= 60) ? "Pass" : "Fail");

    return 0;
}`,
        output: "Grade: B\nResult: Pass"
      },
      {
        id: 'switch-case',
        title: 'Switch / Case',
        description: 'Use switch statements for multi-way branching based on a single value.',
        content: `#include <stdio.h>

int main() {
    int day = 3;

    switch (day) {
        case 1:
            printf("Monday\\n");
            break;
        case 2:
            printf("Tuesday\\n");
            break;
        case 3:
            printf("Wednesday\\n");
            break;
        case 4:
            printf("Thursday\\n");
            break;
        case 5:
            printf("Friday\\n");
            break;
        default:
            printf("Weekend\\n");
    }

    // Fall-through example
    char grade = 'B';
    printf("Grade description: ");
    switch (grade) {
        case 'A':
            printf("Excellent");
            break;
        case 'B':
        case 'C':
            printf("Good");
            break;
        case 'D':
            printf("Pass");
            break;
        default:
            printf("Fail");
    }
    printf("\\n");

    return 0;
}`,
        output: "Wednesday\nGrade description: Good"
      },
      {
        id: 'for-loops',
        title: 'For Loops',
        description: 'Use for loops for counted iteration in C.',
        content: `#include <stdio.h>

int main() {
    // Basic for loop
    printf("Counting: ");
    for (int i = 1; i <= 5; i++) {
        printf("%d ", i);
    }
    printf("\\n");

    // Iterating over an array
    int numbers[] = {10, 20, 30, 40, 50};
    int sum = 0;
    int length = sizeof(numbers) / sizeof(numbers[0]);

    for (int i = 0; i < length; i++) {
        sum += numbers[i];
    }
    printf("Sum of array: %d\\n", sum);

    // Nested loop
    printf("Multiplication Table (3x3):\\n");
    for (int i = 1; i <= 3; i++) {
        for (int j = 1; j <= 3; j++) {
            printf("%d\\t", i * j);
        }
        printf("\\n");
    }

    return 0;
}`,
        output: "Counting: 1 2 3 4 5 \nSum of array: 150\nMultiplication Table (3x3):\n1\t2\t3\t\n2\t4\t6\t\n3\t6\t9\t"
      },
      {
        id: 'while-do-while',
        title: 'While / Do-While',
        description: 'Use while and do-while loops for condition-based repetition.',
        content: `#include <stdio.h>

int main() {
    // While loop
    printf("While: ");
    int count = 0;
    while (count < 5) {
        printf("%d ", count);
        count++;
    }
    printf("\\n");

    // Do-while loop - always executes at least once
    printf("Do-While: ");
    int n = 5;
    do {
        printf("%d ", n);
        n++;
    } while (n < 3);
    printf("\\n");

    // Countdown with while
    printf("Countdown: ");
    int timer = 5;
    while (timer > 0) {
        printf("%d ", timer);
        timer--;
    }
    printf("Go!\\n");

    return 0;
}`,
        output: "While: 0 1 2 3 4 \nDo-While: 5 \nCountdown: 5 4 3 2 1 Go!"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'function-declaration',
        title: 'Function Declaration',
        description: 'Declare and define functions, plus forward declaration with prototypes.',
        content: `#include <stdio.h>

// Function prototype (forward declaration)
void greet(char name[]);
int add(int a, int b);

int main() {
    greet("Alice");

    int result = add(5, 7);
    printf("5 + 7 = %d\\n", result);

    return 0;
}

// Function definitions
void greet(char name[]) {
    printf("Hello, %s!\\n", name);
}

int add(int a, int b) {
    return a + b;
}`,
        output: "Hello, Alice!\n5 + 7 = 12"
      },
      {
        id: 'parameters-return',
        title: 'Parameters & Return',
        description: 'Pass arguments by value, return values, and understand scope.',
        content: `#include <stdio.h>

// Pass by value (original unchanged)
void tryModify(int x) {
    x = 100;
    printf("Inside function: x = %d\\n", x);
}

// Return multiple results via pointers
void minMax(int arr[], int size, int *min, int *max) {
    *min = arr[0];
    *max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] < *min) *min = arr[i];
        if (arr[i] > *max) *max = arr[i];
    }
}

int main() {
    int num = 10;
    tryModify(num);
    printf("Outside function: num = %d\\n", num);

    int data[] = {7, 2, 9, 1, 5};
    int min, max;
    minMax(data, 5, &min, &max);
    printf("Min: %d, Max: %d\\n", min, max);

    return 0;
}`,
        output: "Inside function: x = 100\nOutside function: num = 10\nMin: 1, Max: 9"
      },
      {
        id: 'function-pointers',
        title: 'Function Pointers',
        description: 'Store and invoke functions through pointers for callbacks.',
        content: `#include <stdio.h>

int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

// Function that takes a function pointer as callback
int operate(int x, int y, int (*operation)(int, int)) {
    return operation(x, y);
}

int main() {
    // Declare and use function pointers
    int (*funcPtr)(int, int);

    funcPtr = &add;
    printf("Add: %d\\n", funcPtr(10, 5));

    funcPtr = &multiply;
    printf("Multiply: %d\\n", funcPtr(10, 5));

    // Using callback
    printf("Operate Add: %d\\n", operate(10, 5, add));
    printf("Operate Subtract: %d\\n", operate(10, 5, subtract));

    return 0;
}`,
        output: "Add: 15\nMultiply: 50\nOperate Add: 15\nOperate Subtract: 5"
      },
      {
        id: 'recursion',
        title: 'Recursion',
        description: 'Solve problems using recursive functions that call themselves.',
        content: `#include <stdio.h>

int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

void countDown(int n) {
    if (n == 0) {
        printf("Blast off!\\n");
        return;
    }
    printf("%d ", n);
    countDown(n - 1);
}

int main() {
    printf("Factorial of 5: %d\\n", factorial(5));
    printf("Fibonacci of 7: %d\\n", fibonacci(7));

    printf("Countdown: ");
    countDown(5);

    return 0;
}`,
        output: "Factorial of 5: 120\nFibonacci of 7: 13\nCountdown: 5 4 3 2 1 Blast off!"
      }
    ],
  },
  {
    id: 'pointers',
    title: 'Pointers & Arrays',
    subtopics: [
      {
        id: 'pointers-basics',
        title: 'Pointers Basics',
        description: 'Understand pointer declaration, dereferencing, and the address-of operator.',
        content: `#include <stdio.h>

int main() {
    int num = 42;
    int *ptr = &num;

    printf("Value of num: %d\\n", num);
    printf("Address of num: %p\\n", (void*)&num);
    printf("Value of ptr: %p\\n", (void*)ptr);
    printf("Value pointed to by ptr: %d\\n", *ptr);

    // Modify value through pointer
    *ptr = 99;
    printf("num after *ptr = 99: %d\\n", num);

    // Null pointer
    int *nullPtr = NULL;
    printf("Null pointer: %p\\n", (void*)nullPtr);

    return 0;
}`,
        output: "Value of num: 42\nAddress of num: 0x7ffd...\nValue of ptr: 0x7ffd...\nValue pointed to by ptr: 42\nnum after *ptr = 99: 99\nNull pointer: 0x0"
      },
      {
        id: 'pointer-arithmetic',
        title: 'Pointer Arithmetic',
        description: 'Navigate memory with pointer arithmetic operations.',
        content: `#include <stdio.h>

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // Points to arr[0]

    printf("ptr points to: %d\\n", *ptr);

    ptr++;  // Move to next element
    printf("ptr++ points to: %d\\n", *ptr);

    ptr += 2;  // Move two elements forward
    printf("ptr += 2 points to: %d\\n", *ptr);

    ptr--;  // Move one element back
    printf("ptr-- points to: %d\\n", *ptr);

    // Difference between pointers
    int *start = &arr[0];
    int *end = &arr[4];
    printf("Elements between: %lld\\n", (long long)(end - start));

    // Traverse array with pointer
    printf("All elements: ");
    for (int *p = arr; p < arr + 5; p++) {
        printf("%d ", *p);
    }
    printf("\\n");

    return 0;
}`,
        output: "ptr points to: 10\nptr++ points to: 20\nptr += 2 points to: 40\nptr-- points to: 30\nElements between: 4\nAll elements: 10 20 30 40 50 "
      },
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Work with arrays: declaration, initialization, and array-pointer relationship.',
        content: `#include <stdio.h>

int main() {
    // Array declaration and initialization
    int numbers[5] = {5, 10, 15, 20, 25};

    // Accessing elements
    printf("First: %d\\n", numbers[0]);
    printf("Last: %d\\n", numbers[4]);

    // Array name is a pointer to first element
    printf("Address of array: %p\\n", (void*)numbers);
    printf("First via pointer: %d\\n", *numbers);

    // Iterating over array
    int sum = 0;
    int length = sizeof(numbers) / sizeof(numbers[0]);
    for (int i = 0; i < length; i++) {
        sum += numbers[i];
    }
    printf("Sum: %d\\n", sum);

    // Multi-dimensional array
    int matrix[2][3] = {{1, 2, 3}, {4, 5, 6}};
    printf("Matrix[1][2] = %d\\n", matrix[1][2]);

    return 0;
}`,
        output: "First: 5\nLast: 25\nAddress of array: 0x7ffd...\nFirst via pointer: 5\nSum: 75\nMatrix[1][2] = 6"
      },
      {
        id: 'strings',
        title: 'Strings (char arrays)',
        description: 'Work with strings as null-terminated character arrays in C.',
        content: `#include <stdio.h>
#include <string.h>

int main() {
    // String declaration
    char greeting[] = "Hello";
    char name[20] = "World";

    printf("%s, %s!\\n", greeting, name);

    // String length
    printf("Length: %llu\\n", (unsigned long long)strlen(greeting));

    // String copy
    char copy[20];
    strcpy(copy, greeting);
    printf("Copy: %s\\n", copy);

    // String concatenation
    strcat(greeting, " C");
    printf("Concatenated: %s\\n", greeting);

    // String comparison
    printf("'abc' vs 'abd': %d\\n", strcmp("abc", "abd"));
    printf("'abc' vs 'abc': %d\\n", strcmp("abc", "abc"));

    // Character array iteration
    printf("Characters: ");
    for (int i = 0; greeting[i] != '\\0'; i++) {
        printf("%c ", greeting[i]);
    }
    printf("\\n");

    return 0;
}`,
        output: "Hello, World!\nLength: 5\nCopy: Hello\nConcatenated: Hello C\n'abc' vs 'abd': -1\n'abc' vs 'abc': 0\nCharacters: H e l l o   C "
      }
    ],
  },
]
};
