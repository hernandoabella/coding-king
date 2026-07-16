import php from 'react-syntax-highlighter/dist/esm/languages/hljs/php';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('php', php);

export const phpConfig = {
  title: "PHP Tutorial",
  language: 'php',
  tutorialData: [
  {
    id: 'basics',
    title: 'PHP Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables ($)',
        description: 'Declare and use variables with the $ prefix in PHP.',
        content: `<?php
$name = "Alice";
$age = 25;
$salary = 55000.50;
$isEmployed = true;

echo "Name: $name\\n";
echo "Age: $age\\n";
echo "Salary: \$$salary\\n";
echo "Employed: " . ($isEmployed ? "Yes" : "No");

var_dump($name);
var_dump($age);
?>`,
        output: "Name: Alice\nAge: 25\nSalary: $55000.5\nEmployed: Yes\nstring(5) \"Alice\"\nint(25)"
      },
      {
        id: 'data-types',
        title: 'Data Types',
        description: 'Work with PHP scalar types: int, float, string, bool, and null.',
        content: `<?php
$integer = 42;
$float = 3.14159;
$string = "PHP 8";
$boolean = true;
$null = null;

echo "Integer: $integer (" . gettype($integer) . ")\\n";
echo "Float: $float (" . gettype($float) . ")\\n";
echo "String: $string (" . gettype($string) . ")\\n";
echo "Boolean: " . ($boolean ? "true" : "false") . " (" . gettype($boolean) . ")\\n";
echo "Null: " . var_export($null, true) . " (" . gettype($null) . ")\\n";

var_dump($integer, $float, $boolean);
?>`,
        output: "Integer: 42 (integer)\nFloat: 3.14159 (double)\nString: PHP 8 (string)\nBoolean: true (boolean)\nNull: NULL (NULL)\nint(42)\nfloat(3.14159)\nbool(true)"
      },
      {
        id: 'string-operations',
        title: 'String Operations',
        description: 'Concatenation, interpolation, and useful string functions.',
        content: `<?php
$firstName = "John";
$lastName = "Doe";

// Concatenation with .
$fullName = $firstName . " " . $lastName;

// Double-quoted string interpolation
$greeting = "Hello, $fullName!";

// Heredoc syntax
$message = <<<TEXT
Welcome back, $firstName.
Your account is active.
TEXT;

echo $greeting . "\\n";
echo $message . "\\n";

// String functions
echo "Length: " . strlen($fullName) . "\\n";
echo "Uppercase: " . strtoupper($fullName) . "\\n";
echo "Position of 'Doe': " . strpos($fullName, "Doe") . "\\n";
echo "Substring: " . substr($fullName, 0, 4) . "\\n";
echo "Replace: " . str_replace("Doe", "Smith", $fullName) . "\\n";
?>`,
        output: "Hello, John Doe!\nWelcome back, John.\nYour account is active.\nLength: 8\nUppercase: JOHN DOE\nPosition of 'Doe': 5\nSubstring: John\nReplace: John Smith"
      },
      {
        id: 'constants',
        title: 'Constants',
        description: 'Define immutable values with define() and const keyword.',
        content: `<?php
// Using define() - global scope
define("SITE_NAME", "MyApp");
define("MAX_USERS", 1000);
define("PI", 3.14159);

// Using const - compile-time, namespace support
const VERSION = "2.1.0";
const DEBUG_MODE = false;

echo "Site: " . SITE_NAME . "\\n";
echo "Version: " . VERSION . "\\n";
echo "Max Users: " . MAX_USERS . "\\n";

// Magic constants
echo "File: " . __FILE__ . "\\n";
echo "Line: " . __LINE__ . "\\n";

// Check if constant exists
if (defined("PI")) {
    echo "PI is defined: " . PI . "\\n";
}

// Array constant (PHP 7+)
define("ROLES", ["admin", "editor", "viewer"]);
echo "Available roles: " . implode(", ", ROLES) . "\\n";
?>`,
        output: "Site: MyApp\nVersion: 2.1.0\nMax Users: 1000\nFile: /path/to/file.php\nLine: 15\nPI is defined: 3.14159\nAvailable roles: admin, editor, viewer"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-else-elseif',
        title: 'If/Else/Elseif',
        description: 'Branch logic based on conditions.',
        content: `<?php
$score = 85;
$hasBonus = true;

if ($score >= 90) {
    $grade = "A";
} elseif ($score >= 80) {
    $grade = "B";
} elseif ($score >= 70) {
    $grade = "C";
} elseif ($score >= 60) {
    $grade = "D";
} else {
    $grade = "F";
}

echo "Score: $score => Grade: $grade\\n";

// Ternary operator
$status = ($score >= 60) ? "Pass" : "Fail";
echo "Status: $status\\n";

// Null coalescing operator
$username = $_GET['user'] ?? "Guest";
echo "User: $username\\n";

// Nested conditions
if ($grade !== "F") {
    if ($hasBonus) {
        echo "You passed with a bonus!\\n";
    } else {
        echo "You passed.\\n";
    }
}
?>`,
        output: "Score: 85 => Grade: B\nStatus: Pass\nUser: Guest\nYou passed with a bonus!"
      },
      {
        id: 'switch',
        title: 'Switch',
        description: 'Match a value against multiple cases with optional break.',
        content: `<?php
$day = "Monday";
$role = "editor";

// Basic switch
switch ($day) {
    case "Monday":
        echo "Start of the work week.\\n";
        break;
    case "Friday":
        echo "TGIF!\\n";
        break;
    case "Saturday":
    case "Sunday":
        echo "It's the weekend!\\n";
        break;
    default:
        echo "Regular weekday.\\n";
}

// Switch with operations
switch ($role) {
    case "admin":
        $permissions = "full access";
        break;
    case "editor":
        $permissions = "edit content";
        break;
    case "viewer":
        $permissions = "read only";
        break;
    default:
        $permissions = "no access";
}
echo "Role '$role' has: $permissions\\n";

// PHP 8 match expression
$httpCode = 404;
$message = match ($httpCode) {
    200, 201 => "Success",
    301, 302 => "Redirect",
    404 => "Not Found",
    500 => "Server Error",
    default => "Unknown status"
};
echo "HTTP $httpCode: $message\\n";
?>`,
        output: "Start of the work week.\nRole 'editor' has: edit content\nHTTP 404: Not Found"
      },
      {
        id: 'for-foreach',
        title: 'For / Foreach',
        description: 'Loop through data with for and foreach constructs.',
        content: `<?php
$fruits = ["Apple", "Banana", "Cherry", "Date"];
$users = [
    ["name" => "Alice", "age" => 25],
    ["name" => "Bob", "age" => 30],
    ["name" => "Charlie", "age" => 35]
];

// Standard for loop
echo "--- for loop ---\\n";
for ($i = 0; $i < count($fruits); $i++) {
    echo "  $i: {$fruits[$i]}\\n";
}

// Foreach with values
echo "--- foreach values ---\\n";
foreach ($fruits as $fruit) {
    echo "  - $fruit\\n";
}

// Foreach with key => value
echo "--- foreach key => value ---\\n";
foreach ($fruits as $index => $fruit) {
    echo "  Fruit #$index is $fruit\\n";
}

// Foreach with associative arrays
echo "--- User list ---\\n";
foreach ($users as $user) {
    echo "  {$user['name']} is {$user['age']} years old.\\n";
}
?>`,
        output: "--- for loop ---\n  0: Apple\n  1: Banana\n  2: Cherry\n  3: Date\n--- foreach values ---\n  - Apple\n  - Banana\n  - Cherry\n  - Date\n--- foreach key => value ---\n  Fruit #0 is Apple\n  Fruit #1 is Banana\n  Fruit #2 is Cherry\n  Fruit #3 is Date\n--- User list ---\n  Alice is 25 years old.\n  Bob is 30 years old.\n  Charlie is 35 years old."
      },
      {
        id: 'while',
        title: 'While',
        description: 'Repeat code blocks while a condition remains true.',
        content: `<?php
echo "--- while loop ---\\n";
$count = 0;
while ($count < 5) {
    echo "  Count: $count\\n";
    $count++;
}

echo "--- do-while ---\\n";
$num = 10;
do {
    echo "  Number: $num\\n";
    $num -= 2;
} while ($num > 0);

echo "--- while with break/continue ---\\n";
$i = 0;
while (true) {
    $i++;
    if ($i > 10) break;
    if ($i % 2 !== 0) continue;
    echo "  Even: $i\\n";
}

echo "--- while iterating array ---\\n";
$stack = [1, 2, 3, 4, 5];
while (!empty($stack)) {
    $item = array_pop($stack);
    echo "  Popped: $item\\n";
}
?>`,
        output: "--- while loop ---\n  Count: 0\n  Count: 1\n  Count: 2\n  Count: 3\n  Count: 4\n--- do-while ---\n  Number: 10\n  Number: 8\n  Number: 6\n  Number: 4\n  Number: 2\n--- while with break/continue ---\n  Even: 2\n  Even: 4\n  Even: 6\n  Even: 8\n  Even: 10\n--- while iterating array ---\n  Popped: 5\n  Popped: 4\n  Popped: 3\n  Popped: 2\n  Popped: 1"
      }
    ],
  },
  {
    id: 'functions',
    title: 'Functions',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define and call reusable blocks of code.',
        content: `<?php
function greet(string $name): void {
    echo "Hello, $name!\\n";
}

function calculateArea(float $width, float $height): float {
    return $width * $height;
}

function getConfig(): array {
    return [
        "app_name" => "MyPHPApp",
        "version"  => "3.0.0",
        "debug"    => true
    ];
}

greet("Alice");
greet("Bob");

$area = calculateArea(5.5, 3.2);
echo "Area: $area\\n";

$config = getConfig();
echo "App: {$config['app_name']} v{$config['version']}\\n";
echo "Debug mode: " . ($config['debug'] ? "ON" : "OFF") . "\\n";
?>`,
        output: "Hello, Alice!\nHello, Bob!\nArea: 17.6\nApp: MyPHPApp v3.0.0\nDebug mode: ON"
      },
      {
        id: 'params-return',
        title: 'Parameters & Return',
        description: 'Work with default values, variadic params, and multiple returns.',
        content: `<?php
// Default parameter values
function createUser(
    string $name,
    int $age = 18,
    string $role = "user"
): array {
    return compact("name", "age", "role");
}

// Variadic parameters (...$args)
function sumAll(int ...$numbers): int {
    return array_sum($numbers);
}

// Return multiple values as array
function getMinMax(array $arr): array {
    return ["min" => min($arr), "max" => max($arr)];
}

// Pass by reference
function increment(int &$value, int $amount = 1): void {
    $value += $amount;
}

$user1 = createUser("Alice", 25, "admin");
$user2 = createUser("Bob");

echo "User: {$user1['name']}, {$user1['age']}, {$user1['role']}\\n";
echo "User: {$user2['name']}, {$user2['age']}, {$user2['role']}\\n";

echo "Sum: " . sumAll(1, 2, 3, 4, 5) . "\\n";

$nums = [45, 12, 78, 4, 33];
$bounds = getMinMax($nums);
echo "Min: {$bounds['min']}, Max: {$bounds['max']}\\n";

$counter = 10;
increment($counter, 5);
echo "Counter: $counter\\n";
?>`,
        output: "User: Alice, 25, admin\nUser: Bob, 18, user\nSum: 15\nMin: 4, Max: 78\nCounter: 15"
      },
      {
        id: 'anonymous-functions',
        title: 'Anonymous Functions',
        description: 'Use closures and arrow functions for inline callbacks.',
        content: `<?php
$names = ["Alice", "Bob", "Charlie", "Diana"];

// Anonymous function assigned to variable
$shout = function (string $text): string {
    return strtoupper($text) . "!";
};
echo $shout("hello") . "\\n";

// Array map with closure
$loudNames = array_map(function ($name) {
    return strtoupper($name);
}, $names);
echo "Uppercase: " . implode(", ", $loudNames) . "\\n";

// Closure with use keyword
$multiplier = 3;
$triple = function (int $n) use ($multiplier): int {
    return $n * $multiplier;
};
echo "5 tripled: " . $triple(5) . "\\n";

// Arrow functions (PHP 7.4+)
$doubles = array_map(fn($n) => $n * 2, [1, 2, 3, 4]);
echo "Doubled: " . implode(", ", $doubles) . "\\n";

// Filter with arrow function
$filtered = array_filter($names, fn($n) => strlen($n) > 4);
echo "Long names: " . implode(", ", $filtered) . "\\n";
?>`,
        output: "HELLO!\nUppercase: ALICE, BOB, CHARLIE, DIANA\n5 tripled: 15\nDoubled: 2, 4, 6, 8\nLong names: Alice, Charlie, Diana"
      },
      {
        id: 'type-declarations',
        title: 'Type Declarations',
        description: 'Enforce parameter and return types for safer code.',
        content: `<?php
declare(strict_types=1);

// Scalar type hints
function divide(float $a, float $b): float {
    if ($b === 0.0) {
        throw new InvalidArgumentException("Cannot divide by zero");
    }
    return $a / $b;
}

// Union types (PHP 8.0+)
function formatAmount(int|float $amount, string $currency = "USD"): string {
    $formatted = number_format($amount, 2);
    return "$formatted $currency";
}

// Nullable type with ?
function findUser(?int $id): ?array {
    if ($id === null) {
        return null;
    }
    return ["id" => $id, "name" => "User-$id"];
}

// Mixed type
function processData(mixed $data): string {
    return match (true) {
        is_string($data) => "String: $data",
        is_int($data)   => "Integer: $data",
        is_array($data) => "Array with " . count($data) . " items",
        default         => "Unknown type: " . gettype($data)
    };
}

echo divide(10.0, 3.0) . "\\n";
echo formatAmount(1500) . "\\n";
echo formatAmount(29.99, "EUR") . "\\n";

$user = findUser(42);
echo "Found: {$user['name']}\\n";
echo processData("Hello") . "\\n";
echo processData([1, 2, 3]) . "\\n";
?>`,
        output: "3.3333333333333\n1,500.00 USD\n29.99 EUR\nFound: User-42\nString: Hello\nArray with 3 items"
      }
    ],
  },
  {
    id: 'arrays',
    title: 'Arrays',
    subtopics: [
      {
        id: 'indexed-arrays',
        title: 'Indexed Arrays',
        description: 'Create and manipulate numerically-indexed arrays.',
        content: `<?php
// Creating indexed arrays
$colors = ["Red", "Green", "Blue"];
// OR: $colors = array("Red", "Green", "Blue");

// Adding elements
$colors[] = "Yellow";        // append to end
array_push($colors, "Purple"); // push multiple
array_unshift($colors, "Black"); // prepend

// Access and modify
echo "First: {$colors[0]}\\n";
$colors[1] = "Lime";
echo "Second (modified): {$colors[1]}\\n";

// Utility functions
echo "Count: " . count($colors) . "\\n";
echo "Contains Blue? " . (in_array("Blue", $colors) ? "Yes" : "No") . "\\n";
echo "All colors: " . implode(" | ", $colors) . "\\n";

// Remove elements
$last = array_pop($colors);
echo "Popped: $last\\n";
$first = array_shift($colors);
echo "Shifted: $first\\n";

// Slice and merge
$subset = array_slice($colors, 0, 3);
$merged = array_merge($subset, ["Cyan", "Magenta"]);
echo "Merged: " . implode(", ", $merged) . "\\n";
?>`,
        output: "First: Black\nSecond (modified): Lime\nCount: 6\nContains Blue? Yes\nAll colors: Black | Lime | Blue | Yellow | Purple\nPopped: Purple\nShifted: Black\nMerged: Lime, Blue, Yellow, Cyan, Magenta"
      },
      {
        id: 'associative-arrays',
        title: 'Associative Arrays',
        description: 'Use named keys to build dictionary-like data structures.',
        content: `<?php
// Creating associative arrays
$person = [
    "name"    => "Alice",
    "age"     => 25,
    "email"   => "alice@example.com",
    "city"    => "New York"
];

// Access values
echo "Name: {$person['name']}\\n";
echo "Age: {$person['age']}\\n";

// Add / modify
$person["phone"] = "555-0123";
$person["age"] = 26;

// Check key existence
echo "Has email? " . (array_key_exists("email", $person) ? "Yes" : "No") . "\\n";
echo "Has zip? " . (isset($person["zip"]) ? "Yes" : "No") . "\\n";

// Get keys and values
$keys = array_keys($person);
$values = array_values($person);
echo "Keys: " . implode(", ", $keys) . "\\n";
echo "Values: " . implode(", ", $values) . "\\n";

// Iterate
echo "--- Iterating ---\\n";
foreach ($person as $key => $value) {
    echo "  $key => $value\\n";
}

// Nested associative arrays
$users = [
    "alice" => ["role" => "admin", "active" => true],
    "bob"   => ["role" => "editor", "active" => false],
    "eve"   => ["role" => "viewer", "active" => true]
];
echo "Bob's role: {$users['bob']['role']}\\n";
?>`,
        output: "Name: Alice\nAge: 25\nHas email? Yes\nHas zip? No\nKeys: name, age, email, city, phone\nValues: Alice, 26, alice@example.com, New York, 555-0123\n--- Iterating ---\n  name => Alice\n  age => 26\n  email => alice@example.com\n  city => New York\n  phone => 555-0123\nBob's role: editor"
      },
      {
        id: 'array-functions',
        title: 'Array Functions',
        description: 'Transform and manipulate arrays with built-in PHP functions.',
        content: `<?php
$numbers = [5, 12, 8, 3, 20, 7];

// Map - apply function to each element
$doubled = array_map(fn($n) => $n * 2, $numbers);
echo "Doubled: " . implode(", ", $doubled) . "\\n";

// Filter - keep elements that pass test
$large = array_filter($numbers, fn($n) => $n > 8);
echo "> 8: " . implode(", ", $large) . "\\n";

// Reduce - fold to single value
$sum = array_reduce($numbers, fn($carry, $n) => $carry + $n, 0);
echo "Sum: $sum\\n";

// Unique values
$withDupes = [1, 2, 2, 3, 3, 3, 4];
$unique = array_unique($withDupes);
echo "Unique: " . implode(", ", $unique) . "\\n";

// Flip keys and values
$map = ["a" => 1, "b" => 2, "c" => 3];
$flipped = array_flip($map);
echo "Flipped: " . json_encode($flipped) . "\\n";

// Combine arrays into key-value pairs
$keys = ["name", "age", "city"];
$vals = ["Charlie", "40", "London"];
$combined = array_combine($keys, $vals);
echo "Combined: " . json_encode($combined) . "\\n";

// Chunk array
$chunks = array_chunk($numbers, 3);
echo "Chunks:\\n";
print_r($chunks);
?>`,
        output: "Doubled: 10, 24, 16, 6, 40, 14\n> 8: 12, 20\nSum: 55\nUnique: 1, 2, 3, 4\nFlipped: {\"1\":\"a\",\"2\":\"b\",\"3\":\"c\"}\nCombined: {\"name\":\"Charlie\",\"age\":\"40\",\"city\":\"London\"}\nChunks:\nArray\n(\n    [0] => Array\n        (\n            [0] => 5\n            [1] => 12\n            [2] => 8\n        )\n\n    [1] => Array\n        (\n            [0] => 3\n            [1] => 20\n            [2] => 7\n        )\n\n)"
      },
      {
        id: 'sorting',
        title: 'Sorting',
        description: 'Order arrays using various sorting functions.',
        content: `<?php
$fruits = ["banana", "apple", "cherry", "date"];
$numbers = [42, 7, 19, 3, 88, 15];
$assoc = [
    "Alice"  => 95,
    "Bob"    => 87,
    "Charlie"=> 91,
    "Diana"  => 99
];

// Indexed array sorting
echo "--- Indexed (fruits) ---\\n";
sort($fruits);
echo "sort(): " . implode(", ", $fruits) . "\\n";

rsort($numbers);
echo "rsort(): " . implode(", ", $numbers) . "\\n";

// Associative array sorting
echo "\\n--- Associative (scores) ---\\n";
asort($assoc); // sort by value, keep keys
echo "asort() ascending by value:\\n";
foreach ($assoc as $name => $score) {
    echo "  $name => $score\\n";
}

arsort($assoc); // sort by value descending
echo "arsort() descending by value:\\n";
foreach ($assoc as $name => $score) {
    echo "  $name => $score\\n";
}

ksort($assoc); // sort by key
echo "ksort() by key:\\n";
foreach ($assoc as $name => $score) {
    echo "  $name => $score\\n";
}

// Custom sort with usort
$items = ["item10", "item2", "item1", "item20"];
usort($items, fn($a, $b) => strlen($a) <=> strlen($b));
echo "\\nusort() by length: " . implode(", ", $items) . "\\n";

// Natural order sort
natsort($items);
echo "natsort() natural: " . implode(", ", $items) . "\\n";
?>`,
        output: "--- Indexed (fruits) ---\nsort(): apple, banana, cherry, date\nrsort(): 88, 42, 19, 15, 7, 3\n\n--- Associative (scores) ---\nasort() ascending by value:\n  Bob => 87\n  Charlie => 91\n  Alice => 95\n  Diana => 99\narsort() descending by value:\n  Diana => 99\n  Alice => 95\n  Charlie => 91\n  Bob => 87\nksort() by key:\n  Alice => 95\n  Bob => 87\n  Charlie => 91\n  Diana => 99\n\nusort() by length: item1, item2, item10, item20\nnatsort() natural: item1, item2, item10, item20"
      }
    ],
  },
]
};
