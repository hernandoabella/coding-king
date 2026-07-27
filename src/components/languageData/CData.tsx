import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const cConfig: LanguageConfig = {
  title: 'C',
  language: 'c',
  tutorialData: [
        {
      id: 'basics',
      title: 'C Basics',
      description: 'Learn C Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Print with printf.',
      content: `#include <stdio.h>

int main() {
  printf("Hello, World!\\n");
  return 0;
}`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables & Types',
      description: 'Declare typed variables.',
      content: `#include <stdio.h>
int main() {
  int age = 30;
  float price = 9.99;
  char grade = 'A';
  printf("%d %f %c\\n", age, price, grade);
  return 0;
}`,
      output: `30 9.990000 A`,
    },
            {
      id: 'constants',
      title: 'Constants',
      description: 'const and #define.',
      content: `#include <stdio.h>
#define PI 3.14159
int main() {
  const int max = 100;
  printf("%.2f %d\\n", PI, max);
  return 0;
}`,
      output: `3.14 100`,
    },
            {
      id: 'input',
      title: 'User Input',
      description: 'Read with scanf.',
      content: `#include <stdio.h>
int main() {
  int n;
  scanf("%d", &n);
  printf("You entered %d\\n", n);
  return 0;
}`,
      output: `7
You entered 7`,
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
      id: 'if-else',
      title: 'If / Else',
      description: 'Branch on conditions.',
      content: `#include <stdio.h>
int main() {
  int x = 10;
  if (x > 5) printf("big\\n"); else printf("small\\n");
  return 0;
}`,
      output: `big`,
    },
            {
      id: 'for-loops',
      title: 'For Loops',
      description: 'Counted loops.',
      content: `#include <stdio.h>
int main() {
  for (int i = 0; i < 3; i++) printf('%d\\n', i);
  return 0;
}`,
      output: `0
1
2`,
    },
            {
      id: 'while-loops',
      title: 'While Loops',
      description: 'Condition loops.',
      content: `#include <stdio.h>
int main() {
  int i = 0;
  while (i < 3) { printf('%d\\n', i); i++; }
  return 0;
}`,
      output: `0
1
2`,
    },
            {
      id: 'switch',
      title: 'Switch',
      description: 'Multi-way branch.',
      content: `#include <stdio.h>
int main() {
  int d = 2;
  switch (d) {
    case 1: printf('one\\n'); break;
    case 2: printf('two\\n'); break;
    default: printf('other\\n');
  }
  return 0;
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
      id: 'defining',
      title: 'Defining Functions',
      description: 'Return values with types.',
      content: `#include <stdio.h>
int square(int n) { return n * n; }
int main() { printf('%d\\n', square(5)); return 0; }`,
      output: `25`,
    },
            {
      id: 'prototypes',
      title: 'Prototypes',
      description: 'Declare before use.',
      content: `#include <stdio.h>
int add(int, int);
int main() { printf('%d\\n', add(2, 3)); return 0; }
int add(int a, int b) { return a + b; }`,
      output: `5`,
    },
            {
      id: 'recursion',
      title: 'Recursion',
      description: 'Functions calling themselves.',
      content: `#include <stdio.h>
int fact(int n) { return n <= 1 ? 1 : n * fact(n - 1); }
int main() { printf('%d\\n', fact(5)); return 0; }`,
      output: `120`,
    },
      ],
    },
        {
      id: 'arrays-pointers',
      title: 'Arrays & Pointers',
      description: 'Learn Arrays & Pointers',
      content: `    {`,
      subtopics: [
            {
      id: 'arrays',
      title: 'Arrays',
      description: 'Fixed-size sequences.',
      content: `#include <stdio.h>
int main() {
  int a[3] = {10, 20, 30};
  printf('%d\\n', a[1]);
  return 0;
}`,
      output: `20`,
    },
            {
      id: 'pointers',
      title: 'Pointers',
      description: 'Addresses and dereference.',
      content: `#include <stdio.h>
int main() {
  int x = 42;
  int *p = &x;
  printf('%d\\n', *p);
  return 0;
}`,
      output: `42`,
    },
            {
      id: 'strings',
      title: 'Strings',
      description: 'Char arrays ending in \0.',
      content: `#include <stdio.h>
#include <string.h>
int main() {
  char s[] = "hi";
  printf('%lu\\n', strlen(s));
  return 0;
}`,
      output: `2`,
    },
      ],
    },
        {
      id: 'structs',
      title: 'Structures',
      description: 'Learn Structures',
      content: `    {`,
      subtopics: [
            {
      id: 'struct-def',
      title: 'Defining Structs',
      description: 'Group related data.',
      content: `#include <stdio.h>
struct Point { int x; int y; };
int main() {
  struct Point p = {3, 4};
  printf('%d,%d\\n', p.x, p.y);
  return 0;
}`,
      output: `3,4`,
    },
            {
      id: 'typedef',
      title: 'Typedef',
      description: 'Create aliases.',
      content: `#include <stdio.h>
typedef struct { int x; } Vec;
int main() { Vec v = {5}; printf('%d\\n', v.x); return 0; }`,
      output: `5`,
    },
      ],
    },
        {
      id: 'memory',
      title: 'Memory Management',
      description: 'Learn Memory Management',
      content: `    {`,
      subtopics: [
            {
      id: 'malloc',
      title: 'malloc / free',
      description: 'Dynamic allocation.',
      content: `#include <stdio.h>
#include <stdlib.h>
int main() {
  int *p = malloc(sizeof(int) * 2);
  p[0] = 7; p[1] = 8;
  printf('%d %d\\n', p[0], p[1]);
  free(p);
  return 0;
}`,
      output: `7 8`,
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
      id: 'write-file',
      title: 'Writing Files',
      description: 'fopen/fprintf.',
      content: `#include <stdio.h>
int main() {
  FILE *f = fopen("out.txt", "w");
  fprintf(f, "hello\\n");
  fclose(f);
  return 0;
}`,
      output: `(writes out.txt)`,
    },
            {
      id: 'read-file',
      title: 'Reading Files',
      description: 'Read line by line.',
      content: `#include <stdio.h>
int main() {
  FILE *f = fopen("out.txt", "r");
  char buf[100];
  fgets(buf, 100, f);
  printf('%s', buf);
  fclose(f);
  return 0;
}`,
      output: `hello`,
    },
      ],
    },
        {
      id: 'error-handling',
      title: 'Error Handling',
      description: 'Learn Error Handling',
      content: `    {`,
      subtopics: [
            {
      id: 'errno',
      title: 'Return Codes',
      description: 'C signals errors via return values.',
      content: `#include <stdio.h>
#include <errno.h>
int main() {
  FILE *f = fopen("missing.txt", "r");
  if (!f) printf('error %d\\n', errno);
  return 0;
}`,
      output: `error 2`,
    },
      ],
    },
        {
      id: 'preprocessor',
      title: 'Preprocessor',
      description: 'Learn Preprocessor',
      content: `    {`,
      subtopics: [
            {
      id: 'macros',
      title: 'Macros',
      description: 'Text substitution.',
      content: `#include <stdio.h>
#define MAX(a,b) ((a) > (b) ? (a) : (b))
int main() { printf('%d\\n', MAX(3, 7)); return 0; }`,
      output: `7`,
    },
      ],
    },
  ],
};
