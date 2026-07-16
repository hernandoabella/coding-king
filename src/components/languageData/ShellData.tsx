import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';

SyntaxHighlighter.registerLanguage('bash', bash);

export const shellConfig = {
  title: "Shell Scripting Tutorial",
  language: 'bash',
  tutorialData: [
  {
    id: 'basics',
    title: 'Basics',
    subtopics: [
      {
        id: 'variables',
        title: 'Variables',
        description: 'Declare, assign, and use variables in shell scripts.',
        content: `# Variable assignment (no spaces around =)
name="Alice"
age=25
pi=3.14159

# Access variables with $
echo "Hello, $name!"
echo "Age: \${age}"         # brace syntax for clarity

# Read-only variables
readonly company="ACME"

# Unset a variable
unset temp_var

# Default value if unset
echo "\${undefined_var:-default_value}"

# Environment variables
export PATH="$PATH:/usr/local/bin"
echo "Home: $HOME, User: $USER"`,
        output: `Hello, Alice!
Age: 25
Home: /home/user, User: pc`
      },
      {
        id: 'echo',
        title: 'Echo',
        description: 'Output text with echo using various formatting options.',
        content: `# Basic output
echo "Hello, World!"

# Suppress trailing newline
echo -n "No newline at end"

# Enable backslash escapes
echo -e "Line1\\nLine2\\tTabbed"

# Print in colors (ANSI escape codes)
RED='\\033[0;31m'
NC='\\033[0m'  # No Color
echo -e "\${RED}Error:\${NC} Something went wrong"

# Write to stderr
echo "Error message" >&2

# Combine strings
greeting="Hello"
echo "$greeting, $USER!"`,
        output: `Hello, World!
Line1
Line2    Tabbed
Error: Something went wrong`
      },
      {
        id: 'command-substitution',
        title: 'Command Substitution',
        description: 'Capture command output into variables and inline usage.',
        content: `# Old-style (backticks)
current_date=\`date\`
echo "Today is $current_date"

# Modern syntax (preferred)
files_count=$(ls | wc -l)
echo "Files in directory: $files_count"

# Inline command substitution
echo "Current directory: $(pwd)"
echo "Free memory: $(free -h | grep Mem | awk '{print \$4}')"

# Nested substitution
echo "Path: $(dirname $(which bash))"

# Using with conditionals
if [ $(id -u) -eq 0 ]; then
    echo "Running as root"
fi`,
        output: `Today is Thu Jul 16 2026
Files in directory: 12
Current directory: /home/user/projects`
      },
      {
        id: 'exit-codes',
        title: 'Exit Codes',
        description: 'Understanding return codes and checking command success.',
        content: `# Every command returns an exit code (0 = success)
ls /existing_dir
echo "Exit code: $?"    # 0 if directory exists

ls /nonexistent
echo "Exit code: $?"    # 2 (non-zero = failure)

# Conditional execution
mkdir /tmp/test && echo "Directory created"
mkdir /tmp/test || echo "Failed to create directory"

# Using exit codes in if statements
if grep -q "pattern" file.txt; then
    echo "Pattern found"
else
    echo "Pattern not found"
fi

# Custom exit codes in scripts
cleanup() {
    echo "Cleaning up..."
    exit 1
}

# Script exit status
exit 0  # success
exit 1  # general error
exit 2  # misuse of shell builtins`,
        output: `Exit code: 0
Directory created
Pattern found`
      }
    ],
  },
  {
    id: 'control-flow',
    title: 'Control Flow',
    subtopics: [
      {
        id: 'if-test',
        title: 'If / Test',
        description: 'Conditional branching with if, elif, else, and test operators.',
        content: `# String comparisons
name="Alice"
if [ "$name" = "Alice" ]; then
    echo "Hello, Alice!"
elif [ -z "$name" ]; then
    echo "Name is empty"
else
    echo "Unknown user"
fi

# Numeric comparisons
age=25
if [ "$age" -ge 18 ] && [ "$age" -lt 65 ]; then
    echo "Adult"
fi

# File tests
file="config.txt"
if [ -f "$file" ]; then
    echo "File exists and is regular"
elif [ -d "$file" ]; then
    echo "It's a directory"
elif [ -e "$file" ]; then
    echo "File exists (any type)"
fi

# Modern [[ ]] syntax (bash-specific)
if [[ "$name" == A* && $age -gt 20 ]]; then
    echo "Name starts with A and age > 20"
fi`,
        output: `Hello, Alice!
Adult
File exists and is regular`
      },
      {
        id: 'case',
        title: 'Case',
        description: 'Multi-way branching with case statements and pattern matching.',
        content: `read -p "Enter OS name: " os

case "$os" in
    linux|Linux)
        echo "Open source rocks!"
        ;;
    mac|MacOS|"Mac OS")
        echo "Think different"
        ;;
    windows|Windows|win)
        echo "Are you sure?"
        ;;
    *)
        echo "Unknown OS: $os"
        ;;
esac

# Case with fall-through and wildcards
read -p "Enter file extension: " ext
case "$ext" in
    jpg|jpeg|png|gif)
        echo "Image file detected"
        ;;
    mp3|wav|flac)
        echo "Audio file detected"
        ;;
    *)
        echo "Unknown file type"
        ;;
esac`,
        output: `Enter OS name: Linux
Open source rocks!`
      },
      {
        id: 'for',
        title: 'For Loop',
        description: 'Iterate over lists, ranges, arrays, and command output.',
        content: `# Loop over a list
for fruit in apple banana orange; do
    echo "Fruit: $fruit"
done

# C-style for loop
for (( i = 1; i <= 5; i++ )); do
    echo "Iteration $i"
done

# Loop over files (glob)
for file in *.txt; do
    echo "Processing $file"
    wc -l "$file"
done

# Loop over command output
for user in $(cut -d: -f1 /etc/passwd); do
    echo "User: $user"
done

# Loop with break and continue
for num in 1 2 3 4 5; do
    if [ "$num" -eq 2 ]; then continue; fi
    if [ "$num" -eq 4 ]; then break; fi
    echo "Number: $num"
done`,
        output: `Fruit: apple
Fruit: banana
Fruit: orange
Number: 1
Number: 3`
      },
      {
        id: 'while',
        title: 'While Loop',
        description: 'Repeat code while a condition is true; reading files line by line.',
        content: `# Counter-based while loop
count=1
while [ "$count" -le 5 ]; do
    echo "Count: $count"
    count=$((count + 1))
done

# Read file line by line
while IFS= read -r line; do
    echo "Line: $line"
done < "data.txt"

# Infinite loop with break condition
while true; do
    read -p "Enter 'quit' to exit: " input
    if [ "$input" = "quit" ]; then
        echo "Goodbye!"
        break
    fi
    echo "You entered: $input"
done

# Until loop (runs while condition is false)
n=5
until [ "$n" -eq 0 ]; do
    echo "Countdown: $n"
    n=$((n - 1))
done`,
        output: `Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
Countdown: 5
Countdown: 4
Countdown: 3
Countdown: 2
Countdown: 1`
      }
    ],
  },
  {
    id: 'functions-io',
    title: 'Functions & I/O',
    subtopics: [
      {
        id: 'functions',
        title: 'Functions',
        description: 'Define and call reusable functions in shell scripts.',
        content: `# Define a function
greet() {
    echo "Hello, $1!"
}

# Call the function
greet "Alice"
greet "Bob"

# Function with return value (0-255 only)
is_even() {
    if [ $(( $1 % 2 )) -eq 0 ]; then
        return 0
    else
        return 1
    fi
}

if is_even 10; then
    echo "10 is even"
fi

# Function returning a string via stdout
get_greeting() {
    local name="$1"
    echo "Welcome back, $name!"
}

message=$(get_greeting "Charlie")
echo "$message"

# local variables
my_func() {
    local internal="only visible inside"
    global="visible everywhere"
}`,
        output: `Hello, Alice!
Hello, Bob!
10 is even
Welcome back, Charlie!`
      },
      {
        id: 'arguments',
        title: 'Arguments',
        description: 'Access script and function arguments with $1, $2, $#, $@, and $*.',
        content: `# Script arguments
echo "Script name: $0"
echo "First argument: $1"
echo "Second argument: $2"
echo "Number of arguments: $#"
echo "All arguments (list): $@"
echo "All arguments (string): $*"

# Iterate over all arguments
for arg in "$@"; do
    echo "Arg: $arg"
done

# Shift through arguments
while [ $# -gt 0 ]; do
    echo "Processing: $1"
    shift
done

# Argument parsing with getopts
while getopts "hvn:" opt; do
    case $opt in
        h) echo "Usage: script.sh [-n name] [-v]"; exit 0 ;;
        v) verbose=1 ;;
        n) name="$OPTARG" ;;
        *) echo "Invalid option"; exit 1 ;;
    esac
done`,
        output: `Script name: ./myscript.sh
First argument: foo
Second argument: bar
Number of arguments: 2`
      },
      {
        id: 'read',
        title: 'Read',
        description: 'Accept user input using the read command.',
        content: `# Basic input
read -p "Enter your name: " username
echo "Hello, $username!"

# Read multiple values
read -p "Enter first and last name: " first last
echo "First: $first, Last: $last"

# Silent input (for passwords)
read -sp "Enter password: " password
echo  # newline after silent input
echo "Password length: \${#password}"

# Read with timeout
read -t 5 -p "Quick! Enter a number (5 sec): " num
if [ $? -eq 0 ]; then
    echo "You entered: $num"
else
    echo "Time's up!"
fi

# Read into array
read -p "Enter three colors: " -a colors
echo "First color: \${colors[0]}"

# Read entire file into variable
IFS= read -r -d '' content < "file.txt"`,
        output: `Enter your name: Alice
Hello, Alice!
Enter password:
Password length: 8`
      },
      {
        id: 'file-descriptors',
        title: 'File Descriptors',
        description: 'Redirect input, output, and errors using file descriptors.',
        content: `# Standard file descriptors
# 0 = stdin, 1 = stdout, 2 = stderr

# Redirect stdout to file
echo "Log: started" > output.log

# Redirect stderr to file
ls /nonexistent 2> errors.log

# Redirect both stdout and stderr
command &> combined.log       # bash
command > combined.log 2>&1   # POSIX

# Append instead of overwrite
echo "Another line" >> output.log

# Discard output (send to /dev/null)
command > /dev/null 2>&1

# Here document (multi-line input)
cat << EOF > config.txt
host=localhost
port=8080
debug=true
EOF

# Here string (single-line input)
grep "needle" <<< "haystack with a needle inside"

# Process substitution
diff <(sort file1.txt) <(sort file2.txt)`,
        output: `Log: started
File descriptors let you manage I/O streams.`
      }
    ],
  },
  {
    id: 'advanced',
    title: 'Advanced',
    subtopics: [
      {
        id: 'arrays',
        title: 'Arrays',
        description: 'Work with indexed and associative arrays in bash.',
        content: `# Indexed arrays
fruits=("apple" "banana" "cherry")
echo "First: \${fruits[0]}"
echo "All: \${fruits[@]}"
echo "Count: \${#fruits[@]}"

# Append to array
fruits+=("date")
echo "After append: \${fruits[@]}"

# Iterate array
for fruit in "\${fruits[@]}"; do
    echo "Fruit: $fruit"
done

# Slice array
echo "Slice: \${fruits[@]:1:2}"

# Associative arrays (bash 4+)
declare -A users
users=([alice]="admin" [bob]="user" [carol]="mod")
echo "Alice role: \${users[alice]}"
echo "All keys: \${!users[@]}"

# Loop associative
for key in "\${!users[@]}"; do
    echo "$key -> \${users[$key]}"
done`,
        output: `First: apple
All: apple banana cherry
Count: 3
Alice role: admin`
      },
      {
        id: 'traps',
        title: 'Traps',
        description: 'Catch signals and handle cleanup with trap.',
        content: `# Trap EXIT (always runs on script exit)
cleanup() {
    echo "Cleaning up temporary files..."
    rm -f /tmp/mytemp.*
}
trap cleanup EXIT

# Trap Ctrl+C (SIGINT)
trap 'echo "Interrupted! Exiting..."; exit 1' INT

# Trap multiple signals
trap 'echo "Received signal"; exit 1' INT TERM

# Ignore signals
trap '' HUP

# Debug trap (trace each command)
trap 'echo "Running: $BASH_COMMAND"' DEBUG

# Error trap (run on any error)
trap 'echo "Error on line $LINENO"' ERR

# Useful for temp file cleanup pattern
tempfile=$(mktemp)
trap "rm -f '$tempfile'" EXIT
echo "Working..." > "$tempfile"
# tempfile auto-deleted on exit`,
        output: `Cleaning up temporary files...
Script exited safely.`
      },
      {
        id: 'debugging',
        title: 'Debugging',
        description: 'Debug scripts with set options and verbosity flags.',
        content: `# Enable debug mode (prints commands before execution)
set -x
name="Alice"
echo "Hello, $name"
set +x  # disable debug

# Exit on error
set -e  # script exits if any command fails
set +e  # disable

# Exit on undefined variables
set -u  # error if using unset variable
set +u  # disable

# Pipefail (catch errors in pipes)
set -o pipefail  # pipe returns non-zero if any command fails

# Combining: safe mode
set -euo pipefail

# Print line numbers with PS4
export PS4='+(\${BASH_SOURCE}:\${LINENO}): \${FUNCNAME[0]:+\${FUNCNAME[0]}(): }'

# Verbose mode
set -v  # print lines as they are read

# Conditional debug
DEBUG=\${DEBUG:-0}
[ "$DEBUG" -eq 1 ] && set -x`,
        output: `+ name=Alice
+ echo 'Hello, Alice'
Hello, Alice`
      },
      {
        id: 'scripting-patterns',
        title: 'Scripting Patterns',
        description: 'Common patterns: argument parsing, logging, config files, and error handling.',
        content: `# Usage function pattern
usage() {
    cat << EOF
Usage: $0 [OPTIONS]
Options:
  -h, --help      Show this help
  -v, --verbose   Verbose output
  -o, --output    Output file
EOF
    exit 1
}

# Logging with levels
log() { echo "[$(date '+%Y-%m-%d %H:%M:%S')] $1: $2"; }
debug() { [ "$VERBOSE" ] && log "DEBUG" "$*"; }
info()  { log "INFO"  "$*"; }
error() { log "ERROR" "$*" >&2; }

info "Script started"
debug "Processing file: $file"

# Config file pattern
CONFIG_FILE="\${HOME}/.myapp.conf"
if [ -f "$CONFIG_FILE" ]; then
    source "$CONFIG_FILE"
fi

# Lock file (prevent duplicate execution)
LOCKFILE="/tmp/myscript.lock"
if [ -e "$LOCKFILE" ]; then
    error "Script already running"; exit 1
fi
trap "rm -f '$LOCKFILE'" EXIT
touch "$LOCKFILE"

# Background process with PID tracking
long_task &
PID=$!
echo "Task running with PID $PID"
wait $PID
echo "Task completed with exit code $?"`,
        output: `[2026-07-16 10:30:00] INFO: Script started
[2026-07-16 10:30:00] DEBUG: Processing file: data.csv
Task completed with exit code 0`
      }
    ],
  },
]
};
