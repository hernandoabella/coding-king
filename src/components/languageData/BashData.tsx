import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const bashConfig: LanguageConfig = {
  title: 'Bash',
  language: 'bash',
  tutorialData: [
        {
      id: 'basics',
      title: 'Bash Basics',
      description: 'Learn Bash Basics',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'echo.',
      content: `echo "Hello, World!"`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: '$ and no spaces.',
      content: `name="Ada"
age=36
echo "$name is $age"`,
      output: `Ada is 36`,
    },
            {
      id: 'args',
      title: 'Arguments',
      description: '$1, $@, $#.',
      content: `echo "First arg: $1"
echo "Count: $#"`,
      output: `First arg:
Count: 0`,
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
      title: 'if / then / fi',
      description: 'Test conditions.',
      content: `x=10
if [ "$x" -gt 5 ]; then echo "big"; else echo "small"; fi`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'Iterate lists.',
      content: `for i in 1 2 3; do echo "$i"; done`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while',
      description: 'Condition loop.',
      content: `i=1
while [ "$i" -le 3 ]; do echo "$i"; i=$((i+1)); done`,
      output: `1
2
3`,
    },
            {
      id: 'case',
      title: 'case',
      description: 'Multi-way branch.',
      content: `d=2
case $d in 1) echo one;; 2) echo two;; *) echo other;; esac`,
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
      description: 'name() { }.',
      content: `square() { echo $(( $1 * $1 )); }
square 5`,
      output: `25`,
    },
      ],
    },
        {
      id: 'strings',
      title: 'Strings',
      description: 'Learn Strings',
      content: `    {`,
      subtopics: [
            {
      id: 'subst',
      title: 'Substitution',
      description: '${var//...}.',
      content: `s="hello"
echo "\${s/l/L}"`,
      output: `hello`,
    },
            {
      id: 'length',
      title: 'Length & Slice',
      description: '${#var}, ${var:0:2}.',
      content: `s="hello"
echo "\${#s}"
echo "\${s:0:2}"`,
      output: `5
he`,
    },
      ],
    },
        {
      id: 'io',
      title: 'Input / Output',
      description: 'Learn Input / Output',
      content: `    {`,
      subtopics: [
            {
      id: 'read',
      title: 'read',
      description: 'Stdin input.',
      content: `read -p "Name: " n
echo "Hi $n"`,
      output: `Name: Hi `,
    },
            {
      id: 'redirect',
      title: 'Redirection',
      description: '> >> < |.',
      content: `echo hi > o.txt
cat o.txt`,
      output: `hi`,
    },
      ],
    },
        {
      id: 'globbing',
      title: 'Globbing',
      description: 'Learn Globbing',
      content: `    {`,
      subtopics: [
            {
      id: 'glob',
      title: 'Wildcards',
      description: '*, ?, [].',
      content: `ls *.tsx 2>/dev/null
echo done`,
      output: `done`,
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
      id: 'array',
      title: 'Indexed Arrays',
      description: 'arr=(a b c).',
      content: `a=(1 2 3)
a+=(4)
echo "\${#a[@]} \${a[0]}"`,
      output: `4 1`,
    },
      ],
    },
  ],
};
