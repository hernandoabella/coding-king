import { LanguageConfig } from '../languageRegistry';

// Auto-generated comprehensive tutorial. Edit freely.
export const shellConfig: LanguageConfig = {
  title: 'Shell',
  language: 'shell',
  tutorialData: [
        {
      id: 'basics',
      title: 'Shell Scripting',
      description: 'Learn Shell Scripting',
      content: `    {`,
      subtopics: [
            {
      id: 'hello',
      title: 'Hello World',
      description: 'echo / printf.',
      content: `printf "Hello, World!\\n"`,
      output: `Hello, World!`,
    },
            {
      id: 'variables',
      title: 'Variables',
      description: 'POSIX vs bash.',
      content: `name="Ada"
echo "Hi $name"`,
      output: `Hi Ada`,
    },
            {
      id: 'shebang',
      title: 'Shebang',
      description: '#!/bin/sh.',
      content: `#!/bin/sh
echo "portable script"`,
      output: `portable script`,
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
      description: 'Test builtin.',
      content: `x=10
if [ "$x" -gt 5 ]; then echo big; else echo small; fi`,
      output: `big`,
    },
            {
      id: 'for',
      title: 'for Loops',
      description: 'POSIX for.',
      content: `for i in 1 2 3; do echo "$i"; done`,
      output: `1
2
3`,
    },
            {
      id: 'while',
      title: 'while / read',
      description: 'Line reading.',
      content: `i=1; while [ "$i" -le 3 ]; do echo "$i"; i=$((i+1)); done`,
      output: `1
2
3`,
    },
      ],
    },
        {
      id: 'params',
      title: 'Parameters',
      description: 'Learn Parameters',
      content: `    {`,
      subtopics: [
            {
      id: 'positional',
      title: '$0..$9, $#',
      description: 'Script args.',
      content: `echo "Script: $0  Args: $#"`,
      output: `Script: sh  Args: 0`,
    },
            {
      id: 'shift',
      title: 'shift',
      description: 'Iterate args.',
      content: `for a in "$@"; do echo "$a"; done
echo "done"`,
      output: `done`,
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
      title: 'posix func',
      description: 'name() { }.',
      content: `sq() { echo $(( $1 * $1 )); }
sq 5`,
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
      title: 'Parameter Expansion',
      description: '${var#...}.',
      content: `s="hello world"
echo "\${s#* }"`,
      output: `world`,
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
      id: 'redirect',
      title: 'Redirection',
      description: '> >> < |.',
      content: `printf "hi\\n" > o.txt
cat o.txt`,
      output: `hi`,
    },
            {
      id: 'pipes',
      title: 'Pipes',
      description: 'Chain commands.',
      content: `echo "a\\nb\\nc" | sort -r`,
      output: `c
b
a`,
    },
      ],
    },
        {
      id: 'env',
      title: 'Environment',
      description: 'Learn Environment',
      content: `    {`,
      subtopics: [
            {
      id: 'env',
      title: 'env / export',
      description: 'Variables for children.',
      content: `export PATH="/usr/local/bin:$PATH"
echo "$PATH"`,
      output: `/usr/local/bin:`,
    },
      ],
    },
  ],
};
