import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const cppConfig: LanguageConfig = {
  title: 'C++',
  language: 'cpp',
  tutorialData: [
        {
      id: 'basics',
      title: 'C++ Basics',
      description: 'Learn C++ Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'Use iostream and std::cout.',
      content: `#include <iostream>
int main() {
  std::cout << "Hello, World!" << std::endl;
  return 0;
}`,
      output: `Hello, World!`,
    },
            {
      id: 'namespaces',
      title: 'Namespaces',
      description: 'Avoid clashes with using.',
      content: `#include <iostream>
using namespace std;
int main() { cout << 'hi' << endl; return 0; }`,
      output: `hi`,
    },
            {
      id: 'vars',
      title: 'Variables & auto',
      description: 'Type inference with auto.',
      content: `#include <iostream>
using namespace std;
int main() { auto x = 42; cout << x << endl; return 0; }`,
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
      description: 'Standard branching.',
      content: `#include <iostream>
using namespace std;
int main() { int x = 5; if (x > 0) cout << 'positive' << endl; return 0; }`,
      output: `positive`,
    },
            {
      id: 'for',
      title: 'Range-based for',
      description: 'Iterate containers.',
      content: `#include <iostream>
#include <vector>
using namespace std;
int main() { for (int i : {1,2,3}) cout << i << ' '; return 0; }`,
      output: `1 2 3 `,
    },
            {
      id: 'while',
      title: 'While Loops',
      description: 'Condition loops.',
      content: `#include <iostream>
using namespace std;
int main() { int i=0; while(i<3){cout<<i++;} return 0; }`,
      output: `012`,
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
      description: 'Overloading by signature.',
      content: `#include <iostream>
using namespace std;
int add(int a, int b){return a+b;}
double add(double a, double b){return a+b;}
int main(){cout<<add(2,3)<<' '<<add(1.5,2.5);}`,
      output: `5 4`,
    },
            {
      id: 'lambda',
      title: 'Lambdas',
      description: 'Anonymous functions.',
      content: `#include <iostream>
using namespace std;
int main(){ auto sq = [](int n){ return n*n; }; cout << sq(4); return 0; }`,
      output: `16`,
    },
            {
      id: 'templates',
      title: 'Templates',
      description: 'Generic functions/types.',
      content: `#include <iostream>
using namespace std;
template<typename T> T max(T a, T b){ return a>b?a:b; }
int main(){ cout << max(3,7); }`,
      output: `7`,
    },
      ],
    },
        {
      id: 'stl',
      title: 'Containers (STL)',
      description: 'Learn Containers (STL)',
      content: `    {`,
      subtopics: [
            {
      id: 'vector',
      title: 'vector',
      description: 'Dynamic array.',
      content: `#include <iostream>
#include <vector>
using namespace std;
int main(){ vector<int> v = {1,2,3}; v.push_back(4); cout << v.size(); return 0; }`,
      output: `4`,
    },
            {
      id: 'map',
      title: 'map',
      description: 'Key-value pairs.',
      content: `#include <iostream>
#include <map>
using namespace std;
int main(){ map<string,int> m = {{'a',1}}; m['b'] = 2; cout << m['b']; return 0; }`,
      output: `2`,
    },
            {
      id: 'set',
      title: 'set',
      description: 'Unique collections.',
      content: `#include <iostream>
#include <set>
using namespace std;
int main(){ set<int> s = {3,1,2}; cout << s.count(2); return 0; }`,
      output: `1`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented C++',
      description: 'Learn Object-Oriented C++',
      content: `    {`,
      subtopics: [
            {
      id: 'classes',
      title: 'Classes',
      description: 'Encapsulate data + methods.',
      content: `#include <iostream>
using namespace std;
class Dog { public: void bark() { cout << 'Woof'; } };
int main(){ Dog d; d.bark(); return 0; }`,
      output: `Woof`,
    },
            {
      id: 'constructors',
      title: 'Constructors',
      description: 'Initialize objects.',
      content: `#include <iostream>
using namespace std;
class Box { public: int w; Box(int w):w(w){} };
int main(){ Box b(5); cout << b.w; }`,
      output: `5`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'Derived classes.',
      content: `#include <iostream>
using namespace std;
class A { public: void f(){cout<<'A';} };
class B: public A {};
int main(){ B b; b.f(); }`,
      output: `A`,
    },
            {
      id: 'virtual',
      title: 'Virtual / Polymorphism',
      description: 'Dynamic dispatch.',
      content: `#include <iostream>
using namespace std;
class A { public: virtual void f(){cout<<'A';} };
class B: public A { public: void f(){cout<<'B';} };
int main(){ A* p = new B(); p->f(); }`,
      output: `B`,
    },
      ],
    },
        {
      id: 'modern',
      title: 'Modern C++',
      description: 'Learn Modern C++',
      content: `    {`,
      subtopics: [
            {
      id: 'smart-ptr',
      title: 'Smart Pointers',
      description: 'RAII memory management.',
      content: `#include <iostream>
#include <memory>
using namespace std;
int main(){ auto p = make_unique<int>(9); cout << *p; }`,
      output: `9`,
    },
            {
      id: 'auto-range',
      title: 'Structured Bindings',
      description: 'C++17 tuple unpacking.',
      content: `#include <iostream>
#include <utility>
using namespace std;
int main(){ auto [k,v] = pair{'x',1}; cout << v; }`,
      output: `1`,
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
      id: 'exceptions',
      title: 'try / catch / throw',
      description: 'C++ exceptions.',
      content: `#include <iostream>
using namespace std;
int main(){ try { throw runtime_error('oops'); } catch (const exception& e) { cout << e.what(); } return 0; }`,
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
      id: 'fstream',
      title: 'fstream',
      description: 'Read/write files.',
      content: `#include <fstream>
#include <iostream>
using namespace std;
int main(){ ofstream f('o.txt'); f << 'hi'; f.close(); ifstream g('o.txt'); string s; g >> s; cout << s; return 0; }`,
      output: `hi`,
    },
      ],
    },
        {
      id: 'stl-algo',
      title: 'Algorithms',
      description: 'Learn Algorithms',
      content: `    {`,
      subtopics: [
            {
      id: 'sort',
      title: 'sort',
      description: 'STL algorithms.',
      content: `#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;
int main(){ vector<int> v={3,1,2}; sort(v.begin(),v.end()); for(int x:v) cout<<x; return 0; }`,
      output: `123`,
    },
      ],
    },
  ],
};
