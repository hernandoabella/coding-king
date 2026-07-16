import cpp from 'react-syntax-highlighter/dist/esm/languages/hljs/cpp';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('cpp', cpp);

export const cppConfig = {
  title: "C++ Tutorial",
  language: 'cpp',
  tutorialData: [
    {
      id: 'basics',
      title: 'C++ Basics',
      subtopics: [
        {
          id: 'variables-auto',
          title: 'Variables & Auto',
          description: 'Declare variables and use auto for type deduction.',
          content: `#include <iostream>
using namespace std;

int main() {
    auto name = "Bob";
    auto age = 30;
    auto pi = 3.14159;
    cout << name << " is " << age << ", pi = " << pi << endl;
    return 0;
}`,
          output: "Bob is 30, pi = 3.14159"
        },
        {
          id: 'io',
          title: 'Input / Output (cin / cout)',
          description: 'Read from standard input and write to standard output.',
          content: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;
    cout << "Enter name and age: ";
    cin >> name >> age;
    cout << "Hello " << name << ", you are " << age << "!" << endl;
    return 0;
}`,
          output: "Enter name and age: Alice 25\nHello Alice, you are 25!"
        },
        {
          id: 'strings',
          title: 'Strings',
          description: 'Work with std::string for text manipulation.',
          content: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello";
    s += ", World!";
    cout << s << " (length: " << s.length() << ")" << endl;
    cout << "Substr: " << s.substr(7, 5) << endl;
    return 0;
}`,
          output: "Hello, World! (length: 13)\nSubstr: World"
        },
        {
          id: 'references',
          title: 'References',
          description: 'Use references as aliases to existing variables.',
          content: `#include <iostream>
using namespace std;

void increment(int &x) {
    x++;
}

int main() {
    int a = 10;
    int &ref = a;
    ref = 20;
    cout << "a = " << a << endl;
    increment(a);
    cout << "after increment: " << a << endl;
    return 0;
}`,
          output: "a = 20\nafter increment: 21"
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
          description: 'Branching logic with if, else if, and else.',
          content: `#include <iostream>
using namespace std;

int main() {
    int score = 85;
    if (score >= 90) cout << "A" << endl;
    else if (score >= 80) cout << "B" << endl;
    else if (score >= 70) cout << "C" << endl;
    else cout << "F" << endl;
    return 0;
}`,
          output: "B"
        },
        {
          id: 'switch',
          title: 'Switch',
          description: 'Multi-way branching with the switch statement.',
          content: `#include <iostream>
using namespace std;

int main() {
    int day = 3;
    switch (day) {
        case 1: cout << "Monday"; break;
        case 2: cout << "Tuesday"; break;
        case 3: cout << "Wednesday"; break;
        default: cout << "Weekend"; break;
    }
    cout << endl;
    return 0;
}`,
          output: "Wednesday"
        },
        {
          id: 'range-for',
          title: 'Range-based For',
          description: 'Iterate over containers with the range-based for loop.',
          content: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> nums = {1, 2, 3, 4, 5};
    for (int n : nums) {
        cout << n * 2 << " ";
    }
    cout << endl;
    return 0;
}`,
          output: "2 4 6 8 10"
        },
        {
          id: 'while-loops',
          title: 'While Loops',
          description: 'Repeat execution with while and do-while loops.',
          content: `#include <iostream>
using namespace std;

int main() {
    int i = 0;
    while (i < 5) {
        cout << i << " ";
        i++;
    }
    cout << endl;

    int j = 5;
    do {
        cout << j << " ";
        j--;
    } while (j > 0);
    cout << endl;
    return 0;
}`,
          output: "0 1 2 3 4\n5 4 3 2 1"
        }
      ],
    },
    {
      id: 'functions',
      title: 'Functions & OOP',
      subtopics: [
        {
          id: 'functions-overloading',
          title: 'Functions & Overloading',
          description: 'Define functions and overload them by parameter types.',
          content: `#include <iostream>
using namespace std;

int add(int a, int b) { return a + b; }
double add(double a, double b) { return a + b; }

int main() {
    cout << add(3, 4) << endl;
    cout << add(2.5, 3.7) << endl;
    return 0;
}`,
          output: "7\n6.2"
        },
        {
          id: 'classes-objects',
          title: 'Classes & Objects',
          description: 'Define classes with members and create objects.',
          content: `#include <iostream>
#include <string>
using namespace std;

class Dog {
public:
    string name;
    int age;

    void bark() {
        cout << name << " says woof!" << endl;
    }
};

int main() {
    Dog d;
    d.name = "Rex";
    d.age = 4;
    d.bark();
    return 0;
}`,
          output: "Rex says woof!"
        },
        {
          id: 'constructors',
          title: 'Constructors',
          description: 'Initialize objects with constructors and initializer lists.',
          content: `#include <iostream>
#include <string>
using namespace std;

class Point {
public:
    int x, y;
    Point() : x(0), y(0) {}
    Point(int a, int b) : x(a), y(b) {}

    void print() {
        cout << "(" << x << ", " << y << ")" << endl;
    }
};

int main() {
    Point p1;
    Point p2(3, 7);
    p1.print();
    p2.print();
    return 0;
}`,
          output: "(0, 0)\n(3, 7)"
        },
        {
          id: 'templates',
          title: 'Templates',
          description: 'Write generic functions and classes with templates.',
          content: `#include <iostream>
using namespace std;

template <typename T>
T maxVal(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    cout << maxVal(10, 20) << endl;
    cout << maxVal(3.14, 2.71) << endl;
    cout << maxVal('x', 'a') << endl;
    return 0;
}`,
          output: "20\n3.14\nx"
        }
      ],
    },
    {
      id: 'stl',
      title: 'STL Containers',
      subtopics: [
        {
          id: 'vectors',
          title: 'Vectors',
          description: 'Use std::vector for dynamic arrays.',
          content: `#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30};
    v.push_back(40);
    v.push_back(50);
    cout << "Size: " << v.size() << endl;
    for (size_t i = 0; i < v.size(); i++) {
        cout << v[i] << " ";
    }
    cout << endl;
    return 0;
}`,
          output: "Size: 5\n10 20 30 40 50"
        },
        {
          id: 'maps',
          title: 'Maps',
          description: 'Store key-value pairs with std::map.',
          content: `#include <iostream>
#include <map>
#include <string>
using namespace std;

int main() {
    map<string, int> ages;
    ages["Alice"] = 25;
    ages["Bob"] = 30;
    ages["Charlie"] = 22;

    for (const auto &pair : ages) {
        cout << pair.first << ": " << pair.second << endl;
    }
    return 0;
}`,
          output: "Alice: 25\nBob: 30\nCharlie: 22"
        },
        {
          id: 'sets',
          title: 'Sets',
          description: 'Store unique sorted elements with std::set.',
          content: `#include <iostream>
#include <set>
using namespace std;

int main() {
    set<int> s = {3, 1, 4, 1, 5, 9};
    cout << "Size: " << s.size() << endl;
    for (int x : s) {
        cout << x << " ";
    }
    cout << endl;
    return 0;
}`,
          output: "Size: 5\n1 3 4 5 9"
        },
        {
          id: 'algorithms',
          title: 'Algorithms (sort, find)',
          description: 'Use STL algorithms like sort and find.',
          content: `#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end());
    for (int x : v) cout << x << " ";
    cout << endl;

    auto it = find(v.begin(), v.end(), 8);
    if (it != v.end())
        cout << "Found 8 at index " << (it - v.begin()) << endl;
    return 0;
}`,
          output: "1 2 5 8 9\nFound 8 at index 3"
        }
      ],
    },
  ]
};
