import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const phpConfig: LanguageConfig = {
  title: 'PHP',
  language: 'php',
  tutorialData: [
        {
      id: 'basics',
      title: 'PHP Basics',
      description: 'Learn PHP Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'echo in PHP tags.',
      content: `<?php
echo "Hello, World!";
?>`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: '$ prefix, dynamic.',
      content: `<?php
$name = "Ada";
$age = 36;
echo "$name is $age";
?>`,
      output: `Ada is 36`,
    },
            {
      id: 'types',
      title: 'Scalar Types',
      description: 'int, float, string, bool.',
      content: `<?php
$x = 5;
$y = 3.14;
$ok = true;
echo $x . " " . $y . " " . $ok;
?>`,
      output: `5 3.14 1`,
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
      description: 'Standard branching.',
      content: `<?php
$x = 10;
if ($x > 5) echo "big"; else echo "small";
?>`,
      output: `big`,
    },
            {
      id: 'foreach',
      title: 'foreach',
      description: 'Iterate arrays.',
      content: `<?php
foreach ([1, 2, 3] as $n) echo $n . ' ';
?>`,
      output: `1 2 3 `,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `<?php
$i = 0;
while ($i < 3) { echo $i; $i++; }
?>`,
      output: `012`,
    },
            {
      id: 'switch',
      title: 'switch',
      description: 'Multi-way branch.',
      content: `<?php
$d = 2;
switch ($d) {
  case 1: echo 'one'; break;
  case 2: echo 'two'; break;
  default: echo 'other';
}
?>`,
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
      description: 'function keyword.',
      content: `<?php
function square($n) { return $n * $n; }
echo square(5);
?>`,
      output: `25`,
    },
            {
      id: 'arrow',
      title: 'Arrow Functions',
      description: 'fn() => expr (PHP 7.4+).',
      content: `<?php
$sq = fn($n) => $n * $n;
echo $sq(4);
?>`,
      output: `16`,
    },
            {
      id: 'variadic',
      title: 'Variadic ...$args',
      description: 'Variable args.',
      content: `<?php
function sum(...$xs) { return array_sum($xs); }
echo sum(1, 2, 3);
?>`,
      output: `6`,
    },
      ],
    },
        {
      id: 'arrays',
      title: 'Arrays',
      description: 'Learn Arrays',
      content: `    {`,
      subtopics: [
            {
      id: 'indexed',
      title: 'Indexed Arrays',
      description: 'Ordered lists.',
      content: `<?php
$a = [1, 2, 3];
$a[] = 4;
echo count($a) . " " . $a[0];
?>`,
      output: `4 1`,
    },
            {
      id: 'assoc',
      title: 'Associative Arrays',
      description: 'Key-value maps.',
      content: `<?php
$m = ["a" => 1, "b" => 2];
echo $m["b"];
?>`,
      output: `2`,
    },
            {
      id: 'array-funcs',
      title: 'Array Functions',
      description: 'map, filter, etc.',
      content: `<?php
$evens = array_filter([1, 2, 3, 4], fn($n) => $n % 2 == 0);
print_r($evens);
?>`,
      output: `Array
(
    [1] => 2
    [3] => 4
)`,
    },
      ],
    },
        {
      id: 'oop',
      title: 'Object-Oriented PHP',
      description: 'Learn Object-Oriented PHP',
      content: `    {`,
      subtopics: [
            {
      id: 'class',
      title: 'Classes',
      description: 'public/private/protected.',
      content: `<?php
class Dog {
  public function bark() { echo "Woof"; }
}
(new Dog())->bark();
?>`,
      output: `Woof`,
    },
            {
      id: 'constructor',
      title: 'Constructors',
      description: '__construct.',
      content: `<?php
class Box { public $w; public function __construct($w) { $this->w = $w; } }
echo (new Box(5))->w;
?>`,
      output: `5`,
    },
            {
      id: 'inheritance',
      title: 'Inheritance',
      description: 'extends + parent.',
      content: `<?php
class A { public function f() { echo 'A'; } }
class B extends A {}
(new B())->f();
?>`,
      output: `A`,
    },
            {
      id: 'interface',
      title: 'Interfaces',
      description: 'implements keyword.',
      content: `<?php
interface Shape { public function area(): float; }
class C implements Shape { public function area(): float { return 12.56; } }
echo (new C())->area();
?>`,
      output: `12.56`,
    },
      ],
    },
        {
      id: 'web',
      title: 'Web & Forms',
      description: 'Learn Web & Forms',
      content: `    {`,
      subtopics: [
            {
      id: 'superglobals',
      title: 'Superglobals',
      description: '$_GET / $_POST.',
      content: `<?php
// echo $_GET["q"] ?? "none";
echo "form ready";
?>`,
      output: `form ready`,
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
      title: 'try / catch',
      description: 'Exception handling.',
      content: `<?php
try { throw new Exception("oops"); }
catch (Exception $e) { echo $e->getMessage(); }
?>`,
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
      id: 'file-get',
      title: 'file_get_contents',
      description: 'Read a file.',
      content: `<?php
file_put_contents("o.txt", "hi");
echo file_get_contents("o.txt");
?>`,
      output: `hi`,
    },
      ],
    },
  ],
};
