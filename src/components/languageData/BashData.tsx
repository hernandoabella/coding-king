import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('bash', bash);

export const bashConfig = {
  title: "Bash Tutorial",
  language: 'bash',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare and use variables — no spaces around =, use $ to reference.',
        content: `name="Alice"
age=25
readonly PI=3.14159

echo "Name: $name, Age: $age"
echo "PI: $PI"`,
        output: "Name: Alice, Age: 25\nPI: 3.14159"
      },
      {
        id: 'echo',
        title: 'echo',
        description: 'Display text and variables to standard output with formatting options.',
        content: `echo "Hello, World!"

name="Bob"
echo "Welcome, $name!"

echo -n "No newline "
echo "same line"

echo -e "Line1\\nLine2\\tTabbed"`,
        output: "Hello, World!\nWelcome, Bob!\nNo newline same line\nLine1\nLine2\tTabbed"
      },
      {
        id: 'command-substitution',
        title: 'Command Substitution',
        description: 'Capture command output into variables with $() or backticks.',
        content: `now=$(date)
echo "Current time: $now"

files=$(ls)
echo "Files: $files"

count=$(echo "$files" | wc -w)
echo "File count: $count"

upper=$(echo "hello" | tr '[:lower:]' '[:upper:]')
echo $upper`,
        output: "Current time: (current date and time)\nFiles: (list of files)\nFile count: (number)\nHELLO"
      },
      {
        id: 'arithmetic',
        title: 'Arithmetic',
        description: 'Perform integer arithmetic with $(( )) or the let command.',
        content: `a=10
b=3

echo "Sum: $((a + b))"
echo "Difference: $((a - b))"
echo "Product: $((a * b))"
echo "Quotient: $((a / b))"
echo "Remainder: $((a % b))"
echo "Exponent: $((a ** 2))"

count=0
((count++))
((count += 5))
echo "Count: $count"`,
        output: "Sum: 13\nDifference: 7\nProduct: 30\nQuotient: 3\nRemainder: 1\nExponent: 100\nCount: 6"
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-test',
        title: 'if / test',
        description: 'Make decisions with if/elif/else using test ([ ]) or [[ ]] for conditions.',
        content: `age=20

if [ "$age" -ge 18 ]; then
  echo "Adult"
elif [ "$age" -ge 13 ]; then
  echo "Teenager"
else
  echo "Child"
fi

if [[ "$age" -gt 18 && "$age" -lt 65 ]]; then
  echo "Working age"
fi`,
        output: "Adult\nWorking age"
      },
      {
        id: 'case',
        title: 'case',
        description: 'Pattern match a variable against multiple patterns with case.',
        content: `read -p "Enter a fruit: " fruit

case $fruit in
  apple|Apple)
    echo "Classic choice"
    ;;
  banana|Banana)
    echo "Tropical!"
    ;;
  *)
    echo "Unknown fruit: $fruit"
    ;;
esac`,
        output: "(depends on input — e.g., 'Classic choice' for apple)"
      },
      {
        id: 'for-loops',
        title: 'for Loops',
        description: 'Iterate over lists, ranges, and glob patterns with for.',
        content: `for i in 1 2 3 4 5; do
  echo "Number: $i"
done

for item in apple banana cherry; do
  echo "Fruit: $item"
done

for i in {1..5}; do
  echo -n "$i "
done
echo

for file in *.txt; do
  [ -e "$file" ] && echo "Found: $file"
done`,
        output: "Number: 1\nNumber: 2\nNumber: 3\nNumber: 4\nNumber: 5\nFruit: apple\nFruit: banana\nFruit: cherry\n1 2 3 4 5\n(any .txt files found)"
      },
      {
        id: 'while-until',
        title: 'while / until',
        description: 'Loop while (or until) a condition is true.',
        content: `count=1
while [ $count -le 3 ]; do
  echo "Count: $count"
  ((count++))
done

num=3
until [ $num -eq 0 ]; do
  echo "T-minus $num"
  ((num--))
done
echo "Liftoff!"`,
        output: "Count: 1\nCount: 2\nCount: 3\nT-minus 3\nT-minus 2\nT-minus 1\nLiftoff!"
      }
    ],
  },
  {
    id: 'functions-scripts',
    title: 'Functions & Scripts',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define reusable blocks of code with function syntax.',
        content: `greet() {
  local name="$1"
  echo "Hello, $name!"
}

greet "Alice"

add() {
  echo $(($1 + $2))
}

result=$(add 10 5)
echo "10 + 5 = $result"`,
        output: "Hello, Alice!\n10 + 5 = 15"
      },
      {
        id: 'arguments',
        title: 'Arguments',
        description: 'Access script and function arguments with $1, $2, $@, $#, etc.',
        content: `echo "Script name: $0"
echo "First arg: $1"
echo "Second arg: $2"
echo "All args: $@"
echo "Arg count: $#"

for arg in "$@"; do
  echo "Processing: $arg"
done

shift
echo "After shift, first is: $1"`,
        output: "Script name: ./script.sh\nFirst arg: (arg1)\nSecond arg: (arg2)\nAll args: (all args)\nArg count: (count)\nProcessing: (each arg)\nAfter shift, first is: (second arg)"
      },
      {
        id: 'return-codes',
        title: 'Return Codes',
        description: 'Use exit codes for success (0) and failure (non-zero) status.',
        content: `check_file() {
  if [ -f "$1" ]; then
    echo "File exists: $1"
    return 0
  else
    echo "File not found: $1"
    return 1
  fi
}

if check_file "/etc/hosts"; then
  echo "Check passed"
else
  echo "Check failed"
fi

echo "Last exit code: $?"`,
        output: "File exists: /etc/hosts\nCheck passed\nLast exit code: 0"
      },
      {
        id: 'sourcing',
        title: 'Sourcing',
        description: 'Import functions and variables from another script with source or .',
        content: `# config.sh contains:
# API_KEY="abc123"
# URL="https://api.example.com"

source ./config.sh
echo "API Key: $API_KEY"
echo "URL: $URL"

. ./helpers.sh
say_hello "Bob"`,
        output: "API Key: abc123\nURL: https://api.example.com\nHello, Bob!"
      }
    ],
  },
  {
    id: 'text-processing',
    title: 'Text Processing',
    subtopics: [
      {
        id: 'grep',
        title: 'grep',
        description: 'Search files and output for patterns using basic and extended regex.',
        content: `echo -e "apple\\nbanana\\ncherry\\ndate" > fruits.txt

grep "apple" fruits.txt
grep -i "APPLE" fruits.txt

echo -e "Alice:95\\nBob:87\\nCharlie:92" > scores.txt
grep -o "[0-9]\\+" scores.txt
grep -c "." scores.txt`,
        output: "apple\napple\n95\n87\n92\n3"
      },
      {
        id: 'sed-basics',
        title: 'sed Basics',
        description: 'Stream edit text — find, replace, and transform with sed.',
        content: `echo "Hello Alice" | sed 's/Alice/Bob/'
echo "cat dog cat" | sed 's/cat/bird/g'

sed '2d' <<-EOF
line1
line2
line3
EOF

echo "  extra  spaces  " | sed 's/^[[:space:]]*//;s/[[:space:]]*$//'`,
        output: "Hello Bob\nbird dog bird\nline1\nline3\nextra  spaces"
      },
      {
        id: 'awk-basics',
        title: 'awk Basics',
        description: 'Process and analyze columnar data with awk.',
        content: `echo -e "Alice 95\\nBob 87\\nCharlie 92" | awk '{print $1}'
echo -e "Alice 95\\nBob 87\\nCharlie 92" | awk '{sum += $2} END {print "Average:", sum/NR}'

awk -F: '{print $1, $3}' /etc/passwd | head -2

echo -e "a 1\\nb 2\\nc 3" | awk '$2 > 1 {print $1, $2}'`,
        output: "Alice\nBob\nCharlie\nAverage: 91.3333\nroot 0\ndaemon 1\nb 2\nc 3"
      },
      {
        id: 'pipes-redirection',
        title: 'Pipes & Redirection',
        description: 'Chain commands with pipes and redirect input/output with >, >>, <, 2>.',
        content: `echo "hello world" > output.txt
cat output.txt

echo "second line" >> output.txt
cat output.txt

cat output.txt | tr 'a-z' 'A-Z'

wc -l < output.txt

command_with_error 2> errors.log`,
        output: "hello world\nhello world\nsecond line\nHELLO WORLD\nSECOND LINE\n2"
      }
    ],
  },
]
};
